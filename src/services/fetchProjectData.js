import axios from 'axios';

export const fetchHackathonProjects = async (query) => {
  const githubToken = process.env.GITHUB_ACCESS_TOKEN;

  try {
    const response = await axios.get('https://api.github.com/search/repositories', {
      params: {
        q: query,
        sort: 'stars',
        per_page: 10,
      },
      headers: {
        Authorization: `Bearer ${githubToken}`,  // Use GitHub API token from environment variable
      },
    });
    return response.data.items;  // Return the list of repositories (projects)
  } catch (error) {
    console.error('Error fetching hackathon projects:', error);
    throw error;
  }
};