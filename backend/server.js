const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const OpenAI = require('openai');
const connectDB = require('./config/database');
const FormData = require('./models/FormData');
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

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
    // Create a new document in MongoDB with the form data
    const newFormData = new FormData({
      numTeammates,
      skillLevels,
      hackathonLength,
      tracks,
      sponsorChallenges,
      preferredTools,
      specialRequirements,
    });

    // Save the form data to the database
    await newFormData.save();

    // Send a success message back to the frontend
    res.status(200).json({ message: 'Form submitted successfully and saved to the database!' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ error: 'Error saving form data to the database' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});