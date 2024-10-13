const { fetchRepositories } = require('../services/githubService');

// Controller function to fetch repositories and return them to the frontend
async function getRepositories(req, res) {
    const { topic, minStars, minForks } = req.query;  // Expecting these from frontend

    try {
        const repos = await fetchRepositories(topic, minStars, minForks);
        res.json(repos);  // Send back the list of repositories
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch repositories' });
    }
}

module.exports = { getRepositories };