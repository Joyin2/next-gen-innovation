import { createServer, type Server } from "http";

// Empty routes file - Firebase handles all API functionality
export async function registerRoutes(): Promise<Server> {
  // Return an empty HTTP server
  return createServer();
}
