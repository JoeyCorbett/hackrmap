const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const OpenAI = require('openai');
const connectDB = require('./config/database');
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Initialize OpenAI with API Key from .env
const configuration = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAI(configuration);

// Function to generate the prompt for OpenAI based on form data
function generateOpenAIPrompt(formData) {
  return `Generate a detailed roadmap for a hackathon project with the following details:
    - Number of teammates: ${formData.numTeammates}
    - Skill levels: ${formData.skillLevels.join(', ')}
    - Hackathon duration: ${formData.hackathonLength} hours
    - Tracks: ${formData.tracks.map(track => track.name).join(', ')}
    - Sponsor challenges: ${formData.sponsorChallenges.map(challenge => challenge.name).join(', ')}
    - Preferred tools: ${formData.preferredTools.map(tool => tool.name).join(', ')}
    - Special requirements: ${formData.specialRequirements || 'None'}
  
  Create a project roadmap for this hackathon project.`;
}

// Endpoint to handle form submission and generate roadmap using OpenAI
app.post('/submit-form', async (req, res) => {
  const {
    numTeammates,
    skillLevels,
    hackathonLength,
    tracks,
    sponsorChallenges,
    preferredTools,
    specialRequirements,
  } = req.body;

  console.log('Form Submission Received:', {
    numTeammates,
    skillLevels,
    hackathonLength,
    tracks,
    sponsorChallenges,
    preferredTools,
    specialRequirements,
  });

  try {
    // Generate prompt from form data
    const prompt = generateOpenAIPrompt(req.body);

    // Call OpenAI API to generate the roadmap
    const openaiResponse = await openai.createCompletion({
      model: 'gpt-4o',
      prompt: prompt,
      max_tokens: 500,
    });

    const roadmap = openaiResponse.data.choices[0].text.trim();

    // Send the generated roadmap back to the frontend
    res.status(200).json({ roadmap });
  } catch (error) {
    console.error('Error with OpenAI:', error);
    res.status(500).json({ error: 'Error generating roadmap' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});