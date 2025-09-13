declare global {
  var count: number;
}

globalThis.count ??= 0;
globalThis.count++;

const PORT = Bun.env.PORT || 3000;

const app = Bun.serve({
  port: PORT,
  routes: {
    "/": {
      GET: () => new Response("Hello from Acquisitions!"),
    },
  },
});

console.log(`Listening on http://localhost:${app.port} ...`);
console.log(`Server reloaded. (${globalThis.count})`);

export default app;
