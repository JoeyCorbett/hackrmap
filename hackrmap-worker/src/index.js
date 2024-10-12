export default {
  async fetch(request, env) {
    try {
      let query;

      // Handle POST request with JSON body
      if (request.method === "POST") {
        if (request.headers.get("content-type")?.includes("application/json")) {
          const body = await request.json();
          query = body.query;
        } else {
          return new Response(
            JSON.stringify({ error: "Invalid request. JSON body required." }),
            { status: 400, headers: { "Content-Type": "application/json" } }
          );
        }
      }

      // Handle GET request for testing
      if (request.method === "GET") {
        // Use a default query if none provided
        query = "hackathon";
      }

      // If no query was extracted, return an error
      if (!query) {
        return new Response(
          JSON.stringify({ error: "No query provided." }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      // GitHub API call
      const response = await fetch(`https://api.github.com/search/repositories?q=${query}&sort=stars`, {
        headers: {
          Authorization: `Bearer ${env.GITHUB_ACCESS_TOKEN}`,
        },
      });

      const githubData = await response.json();

      return new Response(JSON.stringify(githubData), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response(
        JSON.stringify({ error: "Failed to process request", details: error.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  },
};