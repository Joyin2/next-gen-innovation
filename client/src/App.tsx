import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";

export default function App() {
  // Set page title
  useEffect(() => {
    document.title = "TechNova - IT Solutions & Services";
  }, []);

  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
      <Toaster />
    </>
  );
}
