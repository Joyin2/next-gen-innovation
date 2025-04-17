import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import ThreeScene from "./ThreeScene";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = 1 - scrollY * 0.002; // Reduce opacity as user scrolls
      const translateY = scrollY * 0.5; // Move content down slightly as user scrolls
      
      const content = heroRef.current.querySelector('.hero-content') as HTMLElement;
      if (content) {
        content.style.opacity = opacity.toString();
        content.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative h-screen flex items-center overflow-hidden">
      {/* 3D Background with Particles */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>
      
      {/* 3D Interactive Object */}
      <div className="absolute right-0 bottom-0 z-10 w-full h-full md:w-1/2 md:h-1/2 pointer-events-none md:pointer-events-auto">
        <ThreeScene />
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 z-20 hero-content">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="block">Innovative IT</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-emerald-400">
              Solutions & Services
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Transforming businesses through cutting-edge technology and innovative digital solutions. We deliver excellence in software development, cloud services, and IT consulting.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore Services
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              View Projects
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <a href="#services" className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
