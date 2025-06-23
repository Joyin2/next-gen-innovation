import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
// Remove ThreeScene import
import logo from "@/images/logo.png"; // Import the logo

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
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden pt-16 pb-8"
    >
      {/* 3D Background with Particles */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>
      
      {/* Circular Moving Logo - replacing the 3D Interactive Object */}
      <div className="absolute right-0 bottom-0 z-10 w-full h-full md:w-1/2 md:h-1/2 pointer-events-none flex items-center justify-center">
        <motion.img 
          src={logo} 
          alt="Next Generation Innovation Logo"
          className="w-48 h-48 md:w-64 md:h-64 object-contain"
          animate={{
            rotate: 360,
            y: [0, -15, 0, 15, 0],
          }}
          transition={{
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 z-20 hero-content">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex flex-col">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                Next Generation
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                Innovation L.L.C.
              </span>
            </div>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
             Empowering Government
 Organizations through Innovative IT 
Solutions
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-700 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1 border-0"
              onClick={() => window.location.href = '/services'}
            >
              Explore Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => window.location.href = '/about'}
            >
              View About Us
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

// Update text colors to use theme variables
// Replace hardcoded colors like:
// text-gray-300 -> text-muted-foreground
// text-white -> text-foreground
// bg-white/5 -> bg-muted/30
// border-white/10 -> border-border

// Example section:
<div className="relative z-10">
  <h1 className="text-4xl md:text-6xl font-bold mb-6">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700">
      Next Generation Innovation
    </span>
  </h1>
  <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
    Pioneering solutions for tomorrow's challenges through cutting-edge technology and strategic innovation.
  </p>
  {/* ... rest of component */}
</div>
