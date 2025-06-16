import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Database, Code, Server, Cloud, ChevronDown, ExternalLink, Users, Laptop } from "lucide-react";

export default function Services() {
  // State for interactive elements
  const [activeService, setActiveService] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    document.title = "Our Services | Next Generation Innovation";
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

  // Services data
  const services = [
    {
      icon: <Shield className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />,
      title: "Public Safety & Emergency Services",
      description: "Advanced IT solutions to enhance public safety operations and emergency response systems.",
      features: [
        "Emergency Response Systems",
        "Public Safety Communications",
        "Incident Management",
        "Disaster Recovery Planning",
        "Crisis Coordination Platforms"
      ]
    },
    
    {
      icon: <Code className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />,
      title: "Application Development & Data Analytics",
      description: "Custom applications and advanced analytics solutions to transform data into actionable insights.",
      features: [
        "Custom Application Development",
        "Legacy System Modernization",
        "Predictive Analytics",
        "Data Visualization",
        "Machine Learning Solutions"
      ]
    },
    
    {
      icon: <Laptop className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />,
      title: "Higher Education",
      description: "A comprehensive suite of IT solutions designed specifically for universities and educational institutions.",
      features: [
        "Student Information Systems (SIS): Streamlined enrollment, records, and academic tracking for better student lifecycle management.",
        "Digital Learning Platforms: Customized e-learning solutions that support hybrid and remote education models.",
        "Administrative Automation: Tools to modernize admissions, scheduling, HR, and finance operations.",
        "Data Analytics & Reporting: Actionable insights to support strategic planning and institutional improvement.",
        "IT Infrastructure & Support: Scalable networks and reliable support services to keep educational environments connected and productive."
      ]
    },
    
    {
      icon: <Server className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />,
      title: "Healthcare",
      description: "We deliver specialized IT solutions to healthcare institutions to improve patient care, enhance medical education, and streamline operations.",
      features: [
        "Electronic Health Records (EHR) Integration: Seamless, secure systems that support clinical workflows, patient management, and compliance.",
        "Telemedicine Platforms: Scalable virtual care solutions for remote consultations, follow-ups, and mental health services.",
        "Medical Education Technology: Interactive learning platforms, and simulation tools.",
        "Healthcare Analytics & Reporting: Data-driven insights for public health monitoring, policy planning, and institutional improvement.",
        "IT Infrastructure & Support Services: Robust network solutions, cloud services, and 24/7 technical support for uninterrupted healthcare delivery and education."
      ]
    },
  ];

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
                Our Services
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
              Innovative IT solutions tailored for 
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
                &nbsp;state and local
              </motion.span> government organizations
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
                <span className="mb-2">Explore Services</span>
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12 sm:py-16 md:py-24">
        {/* Services cards with enhanced visuals and interactivity */}
        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-card backdrop-blur-md border border-border rounded-xl p-6 sm:p-8 shadow-xl shadow-cyan-500/5 relative overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              onHoverStart={() => setActiveService(index)}
              onHoverEnd={() => setActiveService(null)}
            >
              {/* Animated background gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-700/5 opacity-0"
                animate={{ 
                  opacity: activeService === index ? 0.5 : 0,
                  backgroundPosition: ['0% center', '100% center'],
                }}
                transition={{ 
                  opacity: { duration: 0.3 },
                  backgroundPosition: { duration: 3, repeat: Infinity, repeatType: "reverse" } 
                }}
                style={{ backgroundSize: '200% auto' }}
              />

              <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 relative z-10">
                <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                  <motion.div 
                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center shadow-lg shadow-cyan-500/20 relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    animate={{ 
                      boxShadow: ["0 5px 15px rgba(0, 206, 209, 0.2)", "0 15px 25px rgba(0, 206, 209, 0.4)", "0 5px 15px rgba(0, 206, 209, 0.2)"],
                      rotate: activeService === index ? [0, 5, 0, -5, 0] : 0,
                    }}
                    transition={{ 
                      boxShadow: { duration: 2, repeat: Infinity },
                      rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-700/20 animate-pulse"></div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                      {service.icon}
                    </motion.div>
                  </motion.div>
                </div>
                
                <div className="w-full md:w-2/3">
                  <motion.h2 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center md:text-left"
                    variants={fadeIn}
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                      {service.title}
                    </span>
                  </motion.h2>
                  
                  <motion.p 
                    className="text-lg sm:text-xl text-foreground mb-6 leading-relaxed text-center md:text-left"
                    variants={fadeIn}
                  >
                    {service.description}
                  </motion.p>
                  
                  <motion.div 
                    className="space-y-3 sm:space-y-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {service.features.map((feature, idx) => (
                      <motion.div 
                        key={idx}
                        className="flex items-center p-2 sm:p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-300 group"
                        variants={fadeIn}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-700/30 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          animate={{ 
                            scale: activeService === index ? [1, 1.05, 1] : 1 
                          }}
                          transition={{ 
                            scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 } 
                          }}
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-700"></div>
                        </motion.div>
                        <p className="text-foreground">
                          {feature}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced Call to action - Now linked to Contact page with regular anchor tag */}
        <motion.div
          className="text-center mt-8 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <a href="/contact">
            <motion.button
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-700 text-white rounded-full shadow-lg shadow-cyan-500/30 font-medium text-base sm:text-lg relative overflow-hidden group w-full sm:w-auto"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 206, 209, 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Request a Consultation</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                </motion.span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </main>
  );
}