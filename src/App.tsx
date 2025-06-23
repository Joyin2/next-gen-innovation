import { Route, Switch, useLocation } from "wouter";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
// import Projects from "@/pages/Projects";
import Team from "@/pages/Team";
import IPPortfolio from "@/pages/IPPortfolio";
import Contact from "@/pages/Contact";
import Navbar from "@/components/Navbar";
// import AdminNavbar from "@/components/AdminNavbar";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import IPPortfolioAdmin from "./pages/admin/IPPortfolioAdmin";
// import BlogAdmin from "./pages/admin/BlogAdmin";
// import ContactAdmin from "./pages/admin/ContactAdmin";
import Blog from "./pages/Blog";

// Create a client
const queryClient = new QueryClient();

function App() {
  const [location] = useLocation();
  const isAdminRoute = location.startsWith("/admin");

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
          {isAdminRoute ? <AdminNavbar /> : <Navbar />}
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            {/* <Route path="/projects" component={Projects} /> */}
            <Route path="/team" component={Team} />
            <Route path="/IPPortfolio" component={IPPortfolio} />
            <Route path="/blog" component={Blog} />
            <Route path="/blog/:id" component={Blog} />
            <Route path="/contact" component={Contact} />
      
            {/* <Route path="/admin/ip-portfolio" component={IPPortfolioAdmin} />
            <Route path="/admin/blog" component={BlogAdmin} />
            <Route path="/admin/contacts" component={ContactAdmin} /> */}
          
          </Switch>
          <Footer/>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
