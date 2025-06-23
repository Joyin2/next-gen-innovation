import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, X, Send, Mail, Phone, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import logo from "@/images/logo.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", isHashLink: false },
    { name: "About", href: "/about", isHashLink: false },
    { name: "Services", href: "/services", isHashLink: false },
    // { name: "Projects", href: "/projects", isHashLink: false },
    { name: "Team", href: "/team", isHashLink: false },
    { name: "Our Intellectual Property", href: "/IPPortfolio", isHashLink: false },
    { name: "Contact", href: "/contact", isHashLink: false },
    // Add this to your navigation links array
    { name: "Blog", href: "/blog" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }, 2000);
    }, 1500);
  };

  return (
    <motion.nav 
      className={`sticky top-0 z-50 w-full ${
        isScrolled ? "bg-background/95 shadow-lg backdrop-blur-lg border-b border-border/50" : "bg-transparent"
      } transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section - Better structured */}
          <Link href="/">
            <motion.a 
              className="flex items-center space-x-3 group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="relative h-16 w-16 overflow-hidden rounded-xl shadow-lg bg-white dark:bg-white p-2 group-hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={logo} 
                  alt="Next Generation Innovation Logo" 
                  className="h-full w-full object-contain" 
                />
                <div className="absolute inset-0 rounded-xl ring-2 ring-cyan-500/50 dark:ring-blue-600/50 group-hover:ring-cyan-500 dark:group-hover:ring-blue-600 transition-all duration-300"></div>
              </div>
                             <div className="flex flex-col -space-y-1">
                 <span className="text-sm md:text-base lg:text-xl font-bold text-foreground dark:text-white">
                   Next Generation
                 </span>
                 <span className="text-sm md:text-base lg:text-xl font-bold text-foreground dark:text-white">
                   Innovation L.L.C.
                 </span>
               </div>
            </motion.a>
          </Link>

          {/* Desktop Navigation - Better structured */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.isHashLink ? (
                  <a
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium text-foreground hover:text-blue-500 dark:hover:text-cyan-300 transition-all duration-300 group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                ) : (
                  <Link href={item.href}>
                    <a className="relative px-4 py-2 text-sm font-medium text-foreground hover:text-blue-500 dark:hover:text-cyan-300 transition-all duration-300 group">
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Side Actions - Better structured */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Desktop Contact Button */}
            <div className="hidden lg:block">
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 border-0 rounded-lg"
                  >
                    Get in Touch
                  </Button>
                </motion.div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-foreground hover:text-cyan-500 hover:bg-muted/50 focus:outline-none transition-all duration-300"
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  initial={false}
                  animate={isMobileMenuOpen ? "open" : "closed"}
                  variants={{
                    open: { rotate: 180 },
                    closed: { rotate: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Enhanced */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-background/95 backdrop-blur-lg shadow-xl border-t border-border/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.isHashLink ? (
                    <a
                      href={item.href}
                      className="block px-4 py-3 rounded-lg text-base font-medium text-foreground hover:text-blue-500 dark:hover:text-cyan-300 hover:bg-muted/50 transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link href={item.href}>
                      <a 
                        className="block px-4 py-3 rounded-lg text-base font-medium text-foreground hover:text-blue-500 dark:hover:text-cyan-300 hover:bg-muted/50 transition-all duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    </Link>
                  )}
                </motion.div>
              ))}
              
              {/* Mobile Contact Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="pt-4 border-t border-border/50"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium shadow-lg shadow-cyan-500/25 transition-all duration-300 border-0 rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Get in Touch
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-background border border-border">
                    <div className="relative">
                      {/* Background decorative elements */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-700/5 pointer-events-none"></div>
                      <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                      <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-700/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
                      
                      <div className="relative p-6">
                        <DialogHeader className="mb-6">
                          <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700">
                            Get in Touch
                          </DialogTitle>
                          <DialogDescription className="text-muted-foreground">
                            Fill out the form below and we'll get back to you as soon as possible.
                          </DialogDescription>
                        </DialogHeader>
                        
                        {isSuccess ? (
                          <div className="py-8 text-center">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Send className="h-8 w-8 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                            <p className="text-muted-foreground">
                              Thank you for reaching out. We'll be in touch shortly.
                            </p>
                          </div>
                        ) : (
                          <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="mobile-name" className="flex items-center gap-2">
                                  <User className="h-4 w-4 text-cyan-500" />
                                  Your Name
                                </Label>
                                <Input
                                  id="mobile-name"
                                  name="name"
                                  placeholder="John Doe"
                                  value={formData.name}
                                  onChange={handleInputChange}
                                  required
                                  className="border-border bg-muted/30 focus:border-cyan-500 focus:ring-cyan-500"
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="mobile-email" className="flex items-center gap-2">
                                  <Mail className="h-4 w-4 text-cyan-500" />
                                  Email
                                </Label>
                                <Input
                                  id="mobile-email"
                                  name="email"
                                  type="email"
                                  placeholder="john@example.com"
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  required
                                  className="border-border bg-muted/30 focus:border-cyan-500 focus:ring-cyan-500"
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="mobile-phone" className="flex items-center gap-2">
                                  <Phone className="h-4 w-4 text-cyan-500" />
                                  Phone (Optional)
                                </Label>
                                <Input
                                  id="mobile-phone"
                                  name="phone"
                                  placeholder="+1 (555) 123-4567"
                                  value={formData.phone}
                                  onChange={handleInputChange}
                                  className="border-border bg-muted/30 focus:border-cyan-500 focus:ring-cyan-500"
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="mobile-message" className="flex items-center gap-2">
                                  <MessageSquare className="h-4 w-4 text-cyan-500" />
                                  Message
                                </Label>
                                <Textarea
                                  id="mobile-message"
                                  name="message"
                                  placeholder="Tell us about your project or inquiry..."
                                  value={formData.message}
                                  onChange={handleInputChange}
                                  required
                                  className="min-h-[120px] border-border bg-muted/30 focus:border-cyan-500 focus:ring-cyan-500"
                                />
                              </div>
                            </div>
                            
                            <DialogFooter className="pt-4">
                              <DialogClose asChild>
                                <Button variant="outline" className="border-border">
                                  Cancel
                                </Button>
                              </DialogClose>
                              <Button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg shadow-purple-500/20 transition-all duration-300 border-0"
                              >
                                {isSubmitting ? (
                                  <>
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                  </>
                                ) : (
                                  <>
                                    <Send className="mr-2 h-4 w-4" />
                                    Send Message
                                  </>
                                )}
                              </Button>
                            </DialogFooter>
                          </form>
                        )}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
