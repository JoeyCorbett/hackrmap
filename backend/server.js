// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route for handling form submissions
app.post('/submit-form', (req, res) => {
  const formData = req.body; // Get the data from the request body
  console.log('Received form data:', formData); // Log the received data

  // You can add additional processing of the form data here

  // Send a response back to the client
  res.json({ success: true, message: 'Form data received.' });
});

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the HackrMap API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
