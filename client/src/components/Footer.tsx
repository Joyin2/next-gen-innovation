import { Link } from "wouter";
import { motion } from "framer-motion";
import logo from "@/images/logo.png";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ArrowUpCircle,
  Mail,
  Phone,
  MapPin,
  ExternalLink
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground border-t border-border pt-12 sm:pt-16 pb-6 sm:pb-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-cyan-500 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-blue-700 blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
        {/* Top section with logo, description and scroll to top */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 sm:mb-12 border-b border-border pb-6 sm:pb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Link href="/">
              <a className="flex items-center">
                <div className="bg-white dark:bg-white p-2 rounded-lg shadow-md mr-3">
                  <img
                    src={logo}
                    alt="Next Generation Innovation Logo"
                    className="h-10 sm:h-12 w-auto"
                  />
                </div>
                <div className="flex flex-col -space-y-1">
                  <span className="text-sm md:text-base font-bold text-foreground">
                    Next Generation
                  </span>
                  <span className="text-sm md:text-base font-bold text-foreground">
                    Innovation L.L.C.
                  </span>
                </div>
              </a>
            </Link>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 sm:px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-700 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full shadow-lg shadow-cyan-500/20 transition-all duration-300 text-sm sm:text-base"
          >
            <span>Back to Top</span>
            <ArrowUpCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
          </motion.button>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* About column */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
            We deliver intelligent IT solutions that drive efficiency for local and state government organizations.
            </p>

          </div>

          {/* Quick Links column */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li>
                <Link href="/">
                  <a className="text-muted-foreground hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-muted-foreground hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-muted-foreground hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <a className="text-muted-foreground hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                    Our Team
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/IPPortfolio">
                  <a className="text-muted-foreground hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                    Our Intelectual Property
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-muted-foreground hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                    Contact
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="text-muted-foreground hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                    Our Blog
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info column */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="text-muted-foreground">
                  17-101st Avenue 
                  <br />
                  Brooklyn, New York 11208
                  <br />
                  USA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="sm:w-4 sm:h-4 text-white" />
                </div>
                <a href="mailto:info@nexgeninnovation.com" className="text-muted-foreground hover:text-cyan-400 transition-colors duration-300">
                  info@nexgeninnovation.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center flex-shrink-0">
                  <ExternalLink size={14} className="sm:w-4 sm:h-4 text-white" />
                </div>
                <a href="https://www.nexgeninnovation.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-cyan-400 transition-colors duration-300">
                  www.nexgeninnovation.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Redesigned bottom section with animated gradient border */}
        <div className="relative mt-8 sm:mt-12">
          {/* Animated gradient border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-[length:200%_auto] animate-gradient-x"></div>

          {/* Content container with glass effect */}
          <div className="pt-6 sm:pt-8 mt-2 backdrop-blur-sm bg-background/30 dark:bg-gray-800/20 rounded-lg p-4 sm:p-6 flex justify-center items-center">
            {/* Centered copyright text */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="text-sm sm:text-base font-medium text-foreground">
                © {currentYear} Next Generation Innovation L.L.C.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
