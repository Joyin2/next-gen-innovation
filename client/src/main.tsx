import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { initializeDatabaseIfEmpty } from "./lib/firebase";

// Initialize Firebase database with sample data if it's empty
initializeDatabaseIfEmpty().catch(error => 
  console.error("Error initializing database:", error)
);

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
