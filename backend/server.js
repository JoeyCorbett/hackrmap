import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import OpenAI from "openai";
import connectDB from "./config/database.js";
import FormData from "./models/FormData.js";
import dotenv from "dotenv";
import fetch from "node-fetch";
const promptGuidelines = require('./promptGuidelines');

dotenv.config();



require('dotenv').config(); 


const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Initialize OpenAI SDK with API Key from .env
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// GitHub API Token
const GITHUB_API_TOKEN = process.env.GITHUB_API_KEY;

// Flag to prevent double submission
let processingRequest = false;

// Endpoint to handle form submission and save to MongoDB
app.post("/submit-form", async (req, res) => {
  if (processingRequest) {
    return res
      .status(429)
      .json({ message: "Form is already being processed. Please wait." });
  }

  processingRequest = true;

  try {
    const {
      projectGoals,
      numTeammates,
      skillLevels,
      hackathonLength,
      tracks,
      sponsorChallenges,
      preferredTools,
    } = req.body;

    console.log("Form Submission Received:", req.body);

    // Save the form data to MongoDB
    const newFormData = new FormData({
      projectGoals,
      numTeammates,
      skillLevels,
      hackathonLength,
      tracks,
      sponsorChallenges,
      preferredTools,
    });

    await newFormData.save();

    // STEP 1: Generate GitHub Search Keywords
    const promptForKeywords = `
Generate 3-5 concise technical keywords or phrases based on the following details for a GitHub repository search:
- Project Goals: ${projectGoals || "None"}
- Tracks: ${tracks.map((track) => track.name).join(", ") || "None"}
- Preferred Tools: ${
  preferredTools.map((tool) => tool.name).join(", ") || "None"
}

Ensure the keywords include a balance between specific technologies (e.g., React.js, Node.js) and broader concepts (e.g., web development, cloud integration). Avoid too niche or overly specific keywords that might result in no matches. The keywords should target repositories that reflect modern development trends and hackathon-style projects, ensuring they can be used effectively in a GitHub API search query.
`;

    const keywordsResponse = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: promptForKeywords }],
    });

    let keywords =
      keywordsResponse.choices[0]?.message?.content
        ?.split(",")
        .map((kw) => kw.trim()) || [];

    if (keywords.length === 0) {
      throw new Error("Failed to generate keywords");
    }

    // Clean up keywords: Remove any numbers, newlines, or special characters
    keywords = keywords
      .map((kw) => kw.replace(/\d+\./g, "").trim()) // Remove numbers like '1.', '2.', etc.
      .filter((kw) => kw.length > 1) // Filter out short/invalid keywords
      .map((kw) => kw.replace(/[^\w\s-]/g, "")) // Remove punctuation
      .map((kw) => kw.replace(/\s+/g, "+")) // Replace spaces with + for GitHub search
      .map(encodeURIComponent); // URL-encode the keywords for safe inclusion in the URL

    console.log("Cleaned and Encoded Keywords:", keywords);

    // STEP 2: Fetch repositories from GitHub API
    const githubUrl = `https://api.github.com/search/repositories?q=${keywords.join(
      "+"
    )}+stars:>50+forks:>10&sort=stars&order=desc`;

    console.log("GitHub URL:", githubUrl);

    let githubRepos;
    try {
      const githubResponse = await fetch(githubUrl, {
        method: "GET",
        headers: {
          Authorization: `token ${GITHUB_API_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
      });

      if (!githubResponse.ok) {
        const responseText = await githubResponse.text();
        console.error("GitHub Response:", githubResponse.status, responseText);
        throw new Error(
          `GitHub API error: ${githubResponse.status} ${responseText}`
        );
      }

      githubRepos = await githubResponse.json();
      if (!githubRepos.items || githubRepos.items.length === 0) {
        console.warn(
          "No repositories found with the current keywords. Trying a more general search..."
        );
        // If no results, try a more general search
        const generalKeyword = encodeURIComponent(
          preferredTools[0]?.name || tracks[0]?.name || "web-application"
        );
        const generalUrl = `https://api.github.com/search/repositories?q=${generalKeyword}+stars:>100&sort=stars&order=desc`;
        const generalResponse = await fetch(generalUrl, {
          method: "GET",
          headers: {
            Authorization: `token ${GITHUB_API_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
          },
        });
        if (!generalResponse.ok) {
          throw new Error(
            `GitHub API error on general search: ${generalResponse.status}`
          );
        }
        githubRepos = await generalResponse.json();
      }
    } catch (error) {
      console.error("Error fetching repositories from GitHub:", error);
      throw new Error("Failed to fetch repositories from GitHub");
    }

    const top10Repos = githubRepos.items.slice(0, 10);

    console.log(
      "Top 10 GitHub Repositories:",
      top10Repos.map((repo) => repo.full_name)
    );

    // STEP 3: Generate roadmap
    const promptForRoadmap = `
    Create a detailed project roadmap based on:
    - Project Goals: ${projectGoals || "None"}
    - Team: ${numTeammates} members, Skills: ${skillLevels.join(", ")}
    - Duration: ${hackathonLength} hours
    - Tracks: ${tracks.map((track) => track.name).join(", ") || "None"}
    - Challenges: ${
      sponsorChallenges.map((challenge) => challenge.name).join(", ") || "None"
    }
    - Tools: ${preferredTools.map((tool) => tool.name).join(", ") || "None"}
    
    Relevant GitHub Repositories:
    ${top10Repos
      .map(
        (repo) => `- ${repo.full_name}: ${repo.description || "No description"}`
      )
      .join("\n")}
    `;

    const roadmapResponse = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: promptForRoadmap }],
    // Generate the roadmap with OpenAI
    const prompt = `
    ${promptGuidelines}

    Generate a detailed roadmap for a hackathon projet with the following details:
    
    - Number of teammates: ${numTeammates}
    - Skill levels: ${skillLevels.join(', ')}
    - Hackathon length: ${hackathonLength} hours
    - Tracks: ${tracks.map(track => track.name).join(', ') || 'None'}
    - Sponsor challenges: ${sponsorChallenges.map(challenge => challenge.name).join(', ') || 'None'}
    - Preferred tools: ${preferredTools.map(tool => tool.name).join(', ') || 'None'}
    - Special requirements: ${specialRequirements || 'None'}
    
    Create a roadmap based on these details.
    `;

    // Call OpenAI using SDK
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',  // Change the model if necessary
      messages: [
        { "role": "user", "content": prompt }
      ]
    });

    const roadmap = roadmapResponse.choices[0]?.message?.content;

    if (!roadmap) {
      throw new Error("Roadmap generation failed");
    }

    res
      .status(200)
      .json({
        message: "Form submitted successfully",
        roadmap,
        githubRepos: top10Repos,
      });
  } catch (error) {
    console.error("Error processing request:", error);
    res
      .status(500)
      .json({ error: error.message || "Error processing your request" });
  } finally {
    processingRequest = false;
  }
});

// Endpoint to delete a project
app.delete("/delete-project", async (req, res) => {
  const { id } = req.body;

  try {
    await FormData.findByIdAndDelete(id);
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error);
    res.status(500).json({ error: "Error deleting project" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
