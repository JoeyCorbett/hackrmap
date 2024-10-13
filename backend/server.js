const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const OpenAI = require('openai');  // Import the OpenAI SDK
const connectDB = require('./config/database'); // Connect to your MongoDB
const FormData = require('./models/FormData'); // MongoDB model
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

// Endpoint to handle form submission and save to MongoDB
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

  console.log('Form Submission Received:', req.body);

  try {
    // Save the form data to the MongoDB database
    const newFormData = new FormData({
      numTeammates,
      skillLevels,
      hackathonLength,
      tracks,
      sponsorChallenges,
      preferredTools,
      specialRequirements,
    });

    await newFormData.save();

    // Generate the roadmap with OpenAI
    const prompt = `
    Generate a detailed roadmap for a hackathon project with the following details:
    
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
    

    // Get the response from OpenAI
    const roadmap = completion.choices[0]?.message?.content;

    if (!roadmap) {
      throw new Error('Roadmap generation failed');
    }

    // Send the roadmap back to the frontend
    res.status(200).json({ message: 'Form submitted successfully', roadmap });
  } catch (error) {
    console.error('Error saving form data or generating roadmap:', error);
    res.status(500).json({ error: 'Error processing your request' });
  }
});


// Delete a project
app.delete('/delete-project', async (req, res) => {
  const { id } = req.body;

  try {
    // Find the project by ID and delete it
    await FormData.findByIdAndDelete(id);

    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ error: 'Error deleting project' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});