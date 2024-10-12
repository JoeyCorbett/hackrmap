import axios from 'axios';

const apiKey = process.env.OPENAI_API_KEY;

const openaiApi = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  },
});

export const generateRoadmap = async (formData) => {
  // Build the prompt from form data
  const prompt = `
    Generate a roadmap for a hackathon project with the following details:
    - Number of teammates: ${formData.numTeammates}
    - Skill levels: ${formData.skillLevels.join(', ')}
    - Hackathon length: ${formData.hackathonLength} hours
    - Tracks:
      ${formData.tracks.map(track => `- ${track.name}: ${track.description}`).join('\n      ')}
    - Sponsor Challenges:
      ${formData.sponsorChallenges.map(challenge => `- ${challenge.name}: ${challenge.description}`).join('\n      ')}
    - Preferred tools: ${Object.keys(formData.tools).filter(tool => formData.tools[tool]).join(', ')}
    - Special requirements: ${formData.specialRequirements || 'None'}.
  `;

  try {
    const response = await openaiApi.post('/completions', {
      model: 'gpt-4',  // Adjust the model as needed
      prompt,
      max_tokens: 150,
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error generating roadmap:', error);
    throw error;
  }
};