export default {
  async fetch(request, env) {
    const githubApiKey = env.GITHUB_ACCESS_TOKEN; // Access GitHub token from env
    const openAiApiKey = env.OPENAI_API_KEY;      // Access OpenAI token from env

    // Now you can use githubApiKey and openAiApiKey in your logic
    return new Response('Tokens fetched successfully');
  },
};