import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ArrowUpCircle,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/">
              <a className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-md bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center text-white mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">TechNova</span>
              </a>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Innovative IT solutions for businesses of all sizes. We transform ideas into powerful digital experiences.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">Web Development</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">Mobile App Development</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">Custom Software</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">Cloud Services</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">IT Consulting</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-white transition-colors text-sm">Our Team</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm">Case Studies</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Security</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} TechNova. All rights reserved.</p>
          <motion.button 
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            className="mt-4 md:mt-0 text-gray-400 hover:text-white transition-colors flex items-center"
          >
            <span className="mr-2">Back to top</span>
            <ArrowUpCircle size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
