import { Hono } from "hono";

// Start a Hono app
const app = new Hono();

// Basic route example
app.get('/', (c) => c.text('Hello, Hono!'));

// Export the Hono app
export default app;