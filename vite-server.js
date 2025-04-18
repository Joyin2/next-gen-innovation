import { createServer } from 'vite';

async function startViteServer() {
  const server = await createServer({
    // The server will read the config from vite.config.ts
    configFile: './vite.config.ts',
    server: {
      port: 5000,
      host: '0.0.0.0',
    },
  });
  
  await server.listen();
  
  server.printUrls();
}

startViteServer();