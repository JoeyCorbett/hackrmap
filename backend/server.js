const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to handle form submission
app.post('/submit-form', (req, res) => {
    const {
        numTeammates,
        skillLevels,
        hackathonLength,
        tracks,
        sponsorChallenges,
        preferredTools,
        specialRequirements,
    } = req.body;

    // Log the data to the console (or handle it as needed)
    console.log('Form Submission Received:');
    console.log('Number of Teammates:', numTeammates);
    console.log('Skill Levels:', skillLevels);
    console.log('Hackathon Length (hours):', hackathonLength);
    console.log('Tracks:', tracks);
    console.log('Sponsor Challenges:', sponsorChallenges);
    console.log('Preferred Tools:', preferredTools);
    console.log('Special Requirements:', specialRequirements);

    // Here you can add logic to save this data to a database or send an email

    // Send a response back to the client
    res.status(200).json({ message: 'Form submitted successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
