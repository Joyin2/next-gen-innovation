import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import AnimatedSlogan from "@/components/AnimatedSlogan";
import MissionSection from "@/components/MissionSection";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import OurTeamSection from "@/components/OurTeamSection";

export default function Home() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Smooth scroll initialization
  useEffect(() => {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      addEventListener('click', function (e) {
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
        <main>
          <Hero />
          <AnimatedSlogan />
          <MissionSection />
        </main>
       
      </div>
    </AnimatePresence>
  );
}
