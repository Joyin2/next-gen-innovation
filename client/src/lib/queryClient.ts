import { QueryClient } from "@tanstack/react-query";
// We don't need API request functions since we're using Firebase directly
// Each component will import and use the Firebase functions directly

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
