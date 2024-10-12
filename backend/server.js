
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000; // You can change the port if necessary

app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Enable parsing of JSON bodies

// Handle form submissions from the React frontend
app.post('/api/submit-form', (req, res) => {
  const formData = req.body;

  // Do something with the formData (like save it to a database, process it, etc.)
  console.log('Form data received:', formData);

  // Simulate generating a roadmap or some response
  const roadmapResponse = { roadmap: 'This is a sample roadmap based on the form data' };

  // Send response back to frontend
  res.json(roadmapResponse);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});