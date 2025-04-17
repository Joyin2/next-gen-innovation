import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  // Smooth scroll initialization
  useEffect(() => {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href')!);
        if (target) {
          window.scrollTo({
            top: (target as HTMLElement).offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function() {});
      });
    };
  }, []);

  return (
    <AnimatePresence>
      <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Projects />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}
