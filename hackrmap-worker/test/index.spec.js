import { env, createExecutionContext, waitOnExecutionContext, SELF } from 'cloudflare:test';
import { describe, it, expect } from 'vitest';
import worker from '../src';

describe('Hello World worker', () => {
	it('responds with Hello World! (unit style)', async () => {
		const request = new Request('http://example.com');
		// Create an empty context to pass to `worker.fetch()`.
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		// Wait for all `Promise`s passed to `ctx.waitUntil()` to settle before running test assertions
		await waitOnExecutionContext(ctx);
		expect(await response.text()).toMatchInlineSnapshot(`"Hello World!"`);
	});

	it('responds with Hello World! (integration style)', async () => {
		const response = await SELF.fetch(request, env, ctx);
		expect(await response.text()).toMatchInlineSnapshot(`"Hello World!"`);
	});
});
describe('POST request handling', () => {
  it('responds with sanitized data on valid JSON POST request', async () => {
    const request = new Request('http://example.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'John Doe', age: 30 })
    });
    const ctx = createExecutionContext();
    const response = await worker.fetch(request, env, ctx);
    await waitOnExecutionContext(ctx);
    const responseData = await response.json();
    expect(response.status).toBe(200);
    expect(responseData.success).toBe(true);
    expect(responseData.data).toEqual({ name: 'John Doe', age: 30 });
  });

  it('responds with error on invalid JSON POST request', async () => {
    const request = new Request('http://example.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: 'invalid json'
    });
    const ctx = createExecutionContext();
    const response = await worker.fetch(request, env, ctx);
    await waitOnExecutionContext(ctx);
    const responseData = await response.json();
    expect(response.status).toBe(400);
    expect(responseData.success).toBe(false);
    expect(responseData.error).toBeDefined();
  });

  it('responds with 405 on non-POST request', async () => {
    const request = new Request('http://example.com', {
      method: 'GET'
    });
    const ctx = createExecutionContext();
    const response = await worker.fetch(request, env, ctx);
    await waitOnExecutionContext(ctx);
    expect(response.status).toBe(405);
    expect(await response.text()).toBe('Method not allowed');
  });
});
