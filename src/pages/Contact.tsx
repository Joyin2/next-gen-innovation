import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Send, Mail, Phone, User, MessageSquare, MapPin, ExternalLink, ChevronDown, Globe } from "lucide-react";

export default function Contact() {
  // State for interactive elements
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    document.title = "Contact Us | Next Generation Innovation";
    window.scrollTo(0, 0);
    
    // Handle mouse movement for interactive effects
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Parallax scrolling effect
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 30px -10px rgba(0, 206, 209, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Scroll to next section function
  const scrollToNextSection = () => {
    const heroHeight = document.querySelector('section').offsetHeight;
    window.scrollTo({
      top: heroHeight - 50,
      behavior: 'smooth'
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      // Simulate form submission
      console.log("Form data submitted:", formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
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
    } catch (err) {
      console.error("Error submitting form:", err);
      if (err instanceof Error) {
        setError(`Error: ${err.message}`);
      } else {
        setError("There was an error submitting your message. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-background text-foreground min-h-screen overflow-hidden">
      {/* Hero Section with enhanced parallax effect */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        {/* Enhanced background elements with parallax */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/95"></div>
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{ y: y1, opacity }}
        >
          <motion.div 
            className="absolute top-1/3 left-1/3 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-cyan-500 blur-3xl"
            animate={{
              x: mousePosition.x * -30,
              y: mousePosition.y * -30,
            }}
            transition={{ type: "spring", damping: 25, stiffness: 50 }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/3 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-blue-700 blur-3xl"
            animate={{
              x: mousePosition.x * 30,
              y: mousePosition.y * 30,
            }}
            transition={{ type: "spring", damping: 25, stiffness: 50 }}
          />
        </motion.div>
        
        {/* Enhanced floating particles with more variety - reduced for mobile */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${
                i % 3 === 0 ? 'bg-cyan-500' : 
                i % 3 === 1 ? 'bg-blue-600' : 'bg-purple-500'
              } opacity-30`}
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -15, 0],
                x: [0, Math.random() * 10 - 5, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, Math.random() * 0.5 + 1, 1],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="container relative mx-auto px-4 sm:px-6 z-10">
          <motion.div 
            className="flex flex-col items-center text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6"
              variants={fadeIn}
            >
              <motion.span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
                animate={{
                  backgroundPosition: ['0% center', '100% center', '0% center'],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% auto',
                }}
              >
                Contact Us
              </motion.span>
            </motion.h1>
            
            <motion.div 
              className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6 sm:mb-8"
              variants={fadeIn}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "6rem", opacity: 1, transition: { delay: 0.3, duration: 0.8 } }}
            />
            
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-foreground max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-12"
              variants={fadeIn}
            >
              Have questions or want to discuss your project? 
              <motion.span 
                className="text-cyan-400 font-semibold"
                animate={{ 
                  opacity: [1, 0.8, 1],
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              >
                &nbsp;Reach out to our team
              </motion.span>
            </motion.p>
            
            <motion.div
              className="mt-4 sm:mt-8"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                onClick={scrollToNextSection}
                className="flex flex-col items-center text-muted-foreground hover:text-cyan-400 transition-colors duration-300"
              >
                <span className="mb-2">Get In Touch</span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ChevronDown size={20} className="sm:w-6 sm:h-6" />
                </motion.div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            {isSuccess ? (
              <motion.div 
                className="py-12 text-center bg-card backdrop-blur-md border border-border rounded-xl p-8 shadow-xl shadow-cyan-500/5"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-foreground/80">
                  Thank you for reaching out. We'll be in touch shortly.
                </p>
              </motion.div>
            ) : (
              <motion.form 
                onSubmit={handleSubmit} 
                className="bg-card backdrop-blur-md border border-border rounded-xl p-6 sm:p-8 shadow-xl shadow-cyan-500/5 relative overflow-hidden"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Animated background gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-700/5 opacity-0"
                  animate={{ 
                    opacity: 0.5,
                    backgroundPosition: ['0% center', '100% center'],
                  }}
                  transition={{ 
                    opacity: { duration: 0.3 },
                    backgroundPosition: { duration: 3, repeat: Infinity, repeatType: "reverse" } 
                  }}
                  style={{ backgroundSize: '200% auto' }}
                />
                
                {error && (
                  <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-md relative z-10">
                    {error}
                  </div>
                )}
                
                <div className="grid grid-cols-1 gap-6 relative z-10">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium flex items-center gap-2">
                      <User className="h-4 w-4 text-cyan-500" />
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 rounded-md border border-border bg-background/50 focus:border-cyan-500 focus:ring-cyan-500"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium flex items-center gap-2">
                        <Mail className="h-4 w-4 text-cyan-500" />
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 rounded-md border border-border bg-background/50 focus:border-cyan-500 focus:ring-cyan-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium flex items-center gap-2">
                        <Phone className="h-4 w-4 text-cyan-500" />
                        Phone (Optional)
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-md border border-border bg-background/50 focus:border-cyan-500 focus:ring-cyan-500"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-cyan-500" />
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or inquiry..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full p-3 rounded-md border border-border bg-background/50 focus:border-cyan-500 focus:ring-cyan-500"
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto md:self-end px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-700 text-white rounded-full shadow-lg shadow-cyan-500/30 font-medium text-base sm:text-lg relative overflow-hidden group"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 206, 209, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
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
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </motion.button>
                </div>
              </motion.form>
            )}
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card backdrop-blur-md border border-border rounded-xl overflow-hidden shadow-xl shadow-cyan-500/5 relative"
          >
            <div className="h-96 w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.5278853460797!2d-73.87290492346546!3d40.68262834413936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25c5d5e6c9b63%3A0x7f82b58a0e66a6e1!2s17%20101st%20Ave%2C%20Brooklyn%2C%20NY%2011208!5e0!3m2!1sen!2sus!4v1689345678901!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Office Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card backdrop-blur-md border border-border rounded-xl p-8 shadow-xl shadow-cyan-500/5 flex flex-col items-center text-center relative overflow-hidden"
              whileHover={{
                boxShadow: "0 10px 30px -10px rgba(0, 206, 209, 0.2)",
              }}
            >
              {/* Animated background gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-700/5 opacity-0"
                animate={{ 
                  opacity: 0.5,
                  backgroundPosition: ['0% center', '100% center'],
                }}
                transition={{ 
                  opacity: { duration: 0.3 },
                  backgroundPosition: { duration: 3, repeat: Infinity, repeatType: "reverse" } 
                }}
                style={{ backgroundSize: '200% auto' }}
              />
              
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20 relative z-10">
                <MapPin className="h-8 w-8 text-white" />
              </div>

              <p className="text-foreground/80 relative z-10">
                Next Generation Innovation L.L.C.<br />
                17-101st Avenue<br />
                Brooklyn, NY 11208<br />
                USA
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card backdrop-blur-md border border-border rounded-xl p-8 shadow-xl shadow-cyan-500/5 flex flex-col items-center text-center relative overflow-hidden"
              whileHover={{
                boxShadow: "0 10px 30px -10px rgba(0, 206, 209, 0.2)",
              }}
            >
              {/* Animated background gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-700/5 opacity-0"
                animate={{ 
                  opacity: 0.5,
                  backgroundPosition: ['0% center', '100% center'],
                }}
                transition={{ 
                  opacity: { duration: 0.3 },
                  backgroundPosition: { duration: 3, repeat: Infinity, repeatType: "reverse" } 
                }}
                style={{ backgroundSize: '200% auto' }}
              />
              
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20 relative z-10">
                <Mail className="h-8 w-8 text-white" />
              </div>
             
              <a 
                href="mailto:info@nextgeninnovation.com" 
                className="text-foreground/80 hover:text-cyan-500 transition-colors duration-300 relative z-10"
              >
                info@nextgeninnovation.com
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-card backdrop-blur-md border border-border rounded-xl p-8 shadow-xl shadow-cyan-500/5 flex flex-col items-center text-center relative overflow-hidden"
              whileHover={{
                boxShadow: "0 10px 30px -10px rgba(0, 206, 209, 0.2)",
              }}
            >
              {/* Animated background gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-700/5 opacity-0"
                animate={{ 
                  opacity: 0.5,
                  backgroundPosition: ['0% center', '100% center'],
                }}
                transition={{ 
                  opacity: { duration: 0.3 },
                  backgroundPosition: { duration: 3, repeat: Infinity, repeatType: "reverse" } 
                }}
                style={{ backgroundSize: '200% auto' }}
              />
              
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20 relative z-10">
                <Globe className="h-8 w-8 text-white" />
              </div>
              
              <a 
                href="https://www.nexgeninnovation.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-cyan-500 transition-colors duration-300 flex items-center gap-1 justify-center relative z-10"
              >
                nexgeninnovation.com
                <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}