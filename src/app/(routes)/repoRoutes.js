const express = require('express');
const { getRepositories } = require('../controllers/repoController');

const router = express.Router();

// Define a route for fetching repositories based on user input
router.get('/repos', getRepositories);

module.exports = router;