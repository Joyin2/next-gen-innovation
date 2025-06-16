import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FileText, Award, Lightbulb, BookOpen, Calendar, User, ExternalLink, ChevronDown } from "lucide-react";

// Define types for our data
interface Patent {
  id?: string;
  title: string;
  number: string;
  year: string;
  inventor: string;
  description: string;
  category: string;
  link?: string;
}

interface Publication {
  id?: string;
  title: string;
  journal: string;
  year: string;
  author: string;
  description: string;
}

export default function IPPortfolio() {
  // State for interactive elements
  const [activeSection, setActiveSection] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    document.title = "Intelectual Property | Next Generation Innovation";
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

  // Patents data
  const patents: Patent[] = [
    {
      id: "1",
      title: "Cost optimization of wireless-enabled metering infrastructures",
      number: "US 8619657",
      year: "2013",
      inventor: "Dr. Santanu Das",
      description: "Granted 12/31/2013. This patent focuses on optimizing costs in wireless-enabled metering infrastructures for IoT applications.",
      category: "Internet of Things (IoT)",
      link: "https://patents.google.com/patent/US8619657B2/en?oq=8619657+"
    },
    {
      id: "2",
      title: "Methods systems, and devices for robustness improvement in a mobile ad hoc network using reputation-based routing",
      number: "US 8774192",
      year: "2014",
      inventor: "Dr. Santanu Das",
      description: "Granted 7/8/2014. This patent introduces methods and systems for improving robustness in mobile ad hoc networks through reputation-based routing.",
      category: "Networking",
      link: "https://patents.google.com/patent/US8774192B2/en?oq=8774192+"
    },
    {
      id: "3",
      title: "Systems, devices, and methods of managing power consumption in wireless sensor networks",
      number: "US 8532008",
      year: "2013",
      inventor: "Dr. Santanu Das",
      description: "Granted 9/10/2013. This patent presents innovative approaches to managing power consumption in wireless sensor networks, extending operational life and efficiency.",
      category: "Internet of Things (IoT)",
      link: "https://patents.google.com/patent/US8532008B2/en?oq=8532008+"
    },
    {
      id: "4",
      title: "Cost optimization of wireless-enabled metering infrastructures",
      number: "US 9161246",
      year: "2015",
      inventor: "Dr. Santanu Das",
      description: "Granted 10/13/2015. This patent builds upon previous work to further optimize costs in wireless-enabled metering infrastructures for IoT applications.",
      category: "Internet of Things (IoT)",
      link: "https://patents.google.com/patent/US9161246B2/en?oq=9161246+"
    },
    {
      id: "5",
      title: "Methods systems, and devices for robustness improvement in a mobile ad hoc network using reputation-based routing",
      number: "US 9226182",
      year: "2015",
      inventor: "Dr. Santanu Das",
      description: "Granted 12/29/2015. This patent extends previous work on improving robustness in mobile ad hoc networks through reputation-based routing mechanisms.",
      category: "Networking",
      link: "https://patents.google.com/patent/US9226182B2/en?oq=9226182+"
    }
  ];

  // Publications data
  const publications: Publication[] = [
    {
      id: "1",
      title: "Advancing Cybersecurity in State and Local Government Systems",
      journal: "Journal of Government Technology",
      year: "2022",
      author: "Dr. Santanu Das",
      description: "A comprehensive analysis of cybersecurity challenges facing state and local governments and innovative approaches to address them."
    }
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
                Our Intelectual Property
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
              The company principals are well-known  
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
                &nbsp;researchers
              </motion.span> and innovators with numerous patents in various IT domains including Internet of Things (IoT), Cybersecurity, Blockchain, and AI applications
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
                <span className="mb-2">Explore Our Patents</span>
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
        {/* Patents section with enhanced visuals and interactivity */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20 mx-auto">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              U.S. Patents
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4 mx-auto"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Our principals have been granted a large number of patents in different areas of the IT space, including Internet of Things (IoT), Cybersecurity, Blockchain, and Applications of AI in Natural Language Processing.
          </p>
        </motion.div>
        
        {/* Patents cards with enhanced visuals and interactivity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {patents.map((patent, index) => (
            <motion.div
              key={patent.id}
              className="bg-card backdrop-blur-md border border-border rounded-xl p-6 sm:p-8 shadow-xl shadow-cyan-500/5 relative overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              onHoverStart={() => setActiveSection(index)}
              onHoverEnd={() => setActiveSection(null)}
            >
              {/* Animated background gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-700/5 opacity-0"
                animate={{ 
                  opacity: activeSection === index ? 0.5 : 0,
                  backgroundPosition: ['0% center', '100% center'],
                }}
                transition={{ 
                  opacity: { duration: 0.3 },
                  backgroundPosition: { duration: 3, repeat: Infinity, repeatType: "reverse" } 
                }}
                style={{ backgroundSize: '200% auto' }}
              />

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-700/20 flex items-center justify-center mr-3">
                    <Lightbulb className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-500 dark:text-cyan-400">
                      {patent.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">{patent.title}</h3>
                <p className="text-foreground/80 mb-4">{patent.description}</p>
                
                <div className="border-t border-border pt-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center text-sm text-foreground/70">
                      <FileText className="w-4 h-4 mr-2 text-cyan-500" />
                      {patent.number}
                    </div>
                    <div className="flex items-center text-sm text-foreground/70">
                      <Calendar className="w-4 h-4 mr-2 text-cyan-500" />
                      {patent.year}
                    </div>
                    {patent.link && (
                      <div className="flex items-center text-sm">
                        <a 
                          href={patent.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-cyan-500 hover:text-cyan-600 transition-colors px-2 py-1"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Patent
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Papers section with enhanced visuals */}
        <motion.div
          className="bg-card backdrop-blur-md border border-border rounded-xl p-6 sm:p-8 shadow-xl shadow-cyan-500/5 relative overflow-hidden mt-16"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center text-center relative z-10">
            <motion.div 
              className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center shadow-lg shadow-cyan-500/20 mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <BookOpen className="w-8 h-8 text-white" />
            </motion.div>
            
            <motion.h3 
              className="text-2xl font-bold mb-4"
              variants={fadeIn}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                Papers
              </span>
            </motion.h3>
            
            <motion.div 
              className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4"
              variants={fadeIn}
            />
            
            <motion.p
              className="text-foreground/80 max-w-2xl mx-auto mb-6"
              variants={fadeIn}
            >
              The principals have 30 papers published in peer-reviewed journals and in conference proceedings. Few examples are as follows:
            </motion.p>
            
            {/* Papers list with enhanced styling */}
            <div className="space-y-4 w-full max-w-3xl mx-auto">
              {/* Paper 1 */}
              <motion.div 
                className="w-full bg-background/50 dark:bg-gray-800/30 backdrop-blur-md border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                whileHover={{ y: -5 }}
                variants={fadeIn}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="flex items-center mb-4">
                      <BookOpen className="w-5 h-5 text-cyan-500 mr-2" />
                      <span className="text-foreground font-medium">WF-IoT 2024</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <Calendar className="w-5 h-5 text-cyan-500 mr-2" />
                      <span className="text-foreground/70">2024</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-foreground/70">Pages: 828-833</span>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold text-foreground mb-3">Fault-Tolerant IoT System Using Software-Based "Digital Twin"</h3>
                    <div className="mt-4">
                      <a 
                        href="https://dblp.org/db/conf/wf-iot/wf-iot2024.html#BaranwalVDH24" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-cyan-500 hover:text-cyan-600 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Publication
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Paper 2 */}
              <motion.div 
                className="w-full bg-background/50 dark:bg-gray-800/30 backdrop-blur-md border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                whileHover={{ y: -5 }}
                variants={fadeIn}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="flex items-center mb-4">
                      <BookOpen className="w-5 h-5 text-cyan-500 mr-2" />
                      <span className="text-foreground font-medium">CISS 2022</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <Calendar className="w-5 h-5 text-cyan-500 mr-2" />
                      <span className="text-foreground/70">2022</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-foreground/70">Pages: 137-141</span>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold text-foreground mb-3">Democratizing Language Learning using Machine Learning</h3>
                    <div className="mt-4">
                      <a 
                        href="https://dblp.org/db/conf/ciss/ciss2022.html#GangopadhyayBDS22" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-cyan-500 hover:text-cyan-600 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Publication
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Paper 3 */}
              <motion.div 
                className="w-full bg-background/50 dark:bg-gray-800/30 backdrop-blur-md border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                whileHover={{ y: -5 }}
                variants={fadeIn}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="flex items-center mb-4">
                      <BookOpen className="w-5 h-5 text-cyan-500 mr-2" />
                      <span className="text-foreground font-medium">CISS 2011</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <Calendar className="w-5 h-5 text-cyan-500 mr-2" />
                      <span className="text-foreground/70">2011</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-foreground/70">Pages: 1-6</span>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold text-foreground mb-3">Power conservation in Wireless Sensor Networks: A graph-theoretic approach</h3>
                    <div className="mt-4">
                      <a 
                        href="https://dblp.org/db/conf/ciss/ciss2011.html#DasD11" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-cyan-500 hover:text-cyan-600 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Publication
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Paper 4 */}
              <motion.div 
                className="w-full bg-background/50 dark:bg-gray-800/30 backdrop-blur-md border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                whileHover={{ y: -5 }}
                variants={fadeIn}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="flex items-center mb-4">
                      <BookOpen className="w-5 h-5 text-cyan-500 mr-2" />
                      <span className="text-foreground font-medium">VLSI Design 2000</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <Calendar className="w-5 h-5 text-cyan-500 mr-2" />
                      <span className="text-foreground/70">2000</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-foreground/70">Pages: 362-</span>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold text-foreground mb-3">Trends in Communication Technology and its Impact on Semiconductor</h3>
                    <div className="mt-4">
                      <a 
                        href="https://dblp.org/db/conf/vlsid/vlsid2000.html#Das00a" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-cyan-500 hover:text-cyan-600 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Publication
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Paper 5 */}
              <motion.div 
                className="w-full bg-background/50 dark:bg-gray-800/30 backdrop-blur-md border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                whileHover={{ y: -5 }}
                variants={fadeIn}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="flex items-center mb-4">
                      <BookOpen className="w-5 h-5 text-cyan-500 mr-2" />
                      <span className="text-foreground font-medium">ICC 1984</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <Calendar className="w-5 h-5 text-cyan-500 mr-2" />
                      <span className="text-foreground/70">1984</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-foreground/70">Pages: 294-298</span>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold text-foreground mb-3">Non-Blocking Rearrangeable Networks with Distributed Control</h3>
                    <div className="mt-4">
                      <a 
                        href="https://dblp.org/db/conf/icc/icc1984.html#OdlyzkoD84" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-cyan-500 hover:text-cyan-600 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Publication
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Paper 6 */}
              <motion.div 
                className="w-full bg-background/50 dark:bg-gray-800/30 backdrop-blur-md border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                whileHover={{ y: -5 }}
                variants={fadeIn}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="flex items-center mb-4">
                      <BookOpen className="w-5 h-5 text-cyan-500 mr-2" />
                      <span className="text-foreground font-medium">AFIPS 1974</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <Calendar className="w-5 h-5 text-cyan-500 mr-2" />
                      <span className="text-foreground/70">1974</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-foreground/70">Pages: 637-642</span>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold text-foreground mb-3">An approach to the design of highly reliable and fail-safe digital systems</h3>
                    <div className="mt-4">
                      <a 
                        href="https://dblp.org/db/conf/afips/ncc74.html#ChuangD74" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-cyan-500 hover:text-cyan-600 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Publication
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Paper 7 */}
              <motion.div 
                className="w-full bg-background/50 dark:bg-gray-800/30 backdrop-blur-md border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                whileHover={{ y: -5 }}
                variants={fadeIn}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="flex items-center mb-4">
                      <BookOpen className="w-5 h-5 text-cyan-500 mr-2" />
                      <span className="text-foreground font-medium">IEEE Trans. Computers</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <Calendar className="w-5 h-5 text-cyan-500 mr-2" />
                      <span className="text-foreground/70">1973</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-foreground/70">Pages: 1103-1109</span>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold text-foreground mb-3">Synthesis of Multiple-Input Change Asynchronous Machines Using Controlled Excitation and Flip-Flops</h3>
                    <div className="mt-4">
                      <a 
                        href="https://dblp.org/db/journals/tc/tc22.html#ChuangD73" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-cyan-500 hover:text-cyan-600 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Publication
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Sample publication */}
            {/* <motion.div 
              className="w-full max-w-2xl bg-background/50 dark:bg-gray-800/30 backdrop-blur-md border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
              whileHover={{ y: -5 }}
              variants={fadeIn}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="flex items-center mb-4">
                    <BookOpen className="w-5 h-5 text-cyan-500 mr-2" />
                    <span className="text-foreground font-medium">{publications[0].journal}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Calendar className="w-5 h-5 text-cyan-500 mr-2" />
                    <span className="text-foreground/70">{publications[0].year}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-5 h-5 text-cyan-500 mr-2" />
                    <span className="text-foreground/70">{publications[0].author}</span>
                  </div>
                </div>
                
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-foreground mb-3">{publications[0].title}</h3>
                  <p className="text-foreground/80">{publications[0].description}</p>
                </div>
              </div>
            </motion.div> */}
          </div>
        </motion.div>
        
        {/* Enhanced Call to action */}
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
                <span>Contact Us</span>
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