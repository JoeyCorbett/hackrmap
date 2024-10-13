const fetch = require('node-fetch'); // To make HTTP requests
require('dotenv').config();  // Load environment variables from .env file

// Use the GitHub API token from the .env file
const GITHUB_API_TOKEN = process.env.GITHUB_API_TOKEN;

// Function to fetch repositories based on search criteria
async function fetchRepositories(topic, minStars = 50, minForks = 10) {
    const url = `https://api.github.com/search/repositories?q=topic:${topic}+stars:>${minStars}+forks:>${minForks}&sort=stars&order=desc`;
    
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `token ${GITHUB_API_TOKEN}`, // API Token for Authentication
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error fetching repositories: ${response.statusText}`);
        }

        const data = await response.json();
        return data.items;  // List of repositories
    } catch (error) {
        console.error('Error fetching from GitHub:', error);
        return [];
    }
}

module.exports = { fetchRepositories };