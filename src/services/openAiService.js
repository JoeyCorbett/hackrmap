import axios from 'axios';

// Load the OpenAI API key from environment variables
const apiKey = process.env.OPENAI_API_KEY;

const openaiApi = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  },
});

export const generateRoadmap = async (prompt) => {
  try {
    const response = await openaiApi.post('/completions', {
      model: 'gpt-4o',
      prompt: `Generate a roadmap for a ${prompt} project`,
      max_tokens: 100,
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error generating roadmap:', error);
    throw error;
  }
};