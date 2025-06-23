import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, Linkedin, Mail, ChevronDown, ExternalLink } from "lucide-react";

export default function Team() {
  // State for interactive elements
  const [activeTeamMember, setActiveTeamMember] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    document.title = "Our Team | Next Generation Innovation";
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
      transition: {
        duration: 0.6 }
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

  // Team members data with enhanced bios
  const teamMembers = [
    {
      name: "Mohammed Abdun Noor",
      role: "Managing Member",
      bio: [
        "Mr. Noor is a dynamic leader with multi-disciplinary expertise and a proven track record across diverse industries. He has successfully managed several businesses, showcasing his strong entrepreneurial spirit and business acumen.",
        "Most recently, Mr. Noor brought his strategic vision to the insurance sector, where he served in a marketing leadership role at WellCare in New York City, USA, leveraging his expertise in customer engagement and brand development.",
        "A proud alumnus of Chittagong University in Bangladesh, Mr. Noor holds a Master's degree (M.A.), which laid the foundation for his lifelong commitment to excellence and community service. Passionate about education and social upliftment, he founded several high schools in rural Bangladesh and served as the Charter President of the Rotary Club of Beanibazar, making a lasting impact on grassroots development.",
        "Mr. Noor leads Next Generation Innovation L.L.C., driving the company's vision for growth, innovation, and service excellence."
      ],
      image: "/team/mohammed.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/mohammed-abdun-noor-1b130b37/",
        email: "noor.glocal@gmail.com"
      }
    },
    {
      name: "Dr. Santanu Das",
      role: "Technology and Business Advisor",
      bio: [
        "Dr. Santanu Das is a seasoned technology executive and entrepreneur with a distinguished career spanning over four decades in the IT, telecommunications and semiconductor industries. He is the founder and former CEO of TranSwitch Corporation, a company he led from its inception in 1988 through its public offering in 1995 and beyond.",
        "Prior to founding TranSwitch, Dr. Das held various technical management positions at ITT Corporation, culminating in his role as Director of the Applied Technology Division, where he oversaw R&D projects in business communications, speech processing, and advanced software development tools.",
        "Dr. Das earned his D.Sc. in Electrical Engineering from Washington University in St. Louis, Missouri. He has been recognized with several honors, including the Distinguished Alumni Award from Washington University and the Ernst & Young Entrepreneur of the Year Award for the telecommunications industry in the Southwest Connecticut/New York Hudson Valley area.",
        "A prolific innovator, Dr. Das holds 40 significant patents and has authored over 30 papers, with recent work focused on AI/ML, IoT, cybersecurity, and blockchain technologies."
      ],
      image: "/team/santanu.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/dr-santanu-das-3917201b/",
        email: "santanu44@aol.com"
      }
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
                Meet Our Team
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
              Our team of experts brings together 
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
                &nbsp;decades of experience
              </motion.span> in technology innovation and business transformation
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
                <span className="mb-2">Meet the Leaders</span>
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
        {/* Leadership Team section with enhanced visuals and interactivity */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Leadership Team
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4 mx-auto"></div>
          <p className="text-foreground/80 font-medium max-w-2xl mx-auto">
            Our leadership team brings decades of experience and expertise to drive innovation and excellence
          </p>
        </motion.div>
        
        {/* Team member cards with enhanced visuals and interactivity */}
        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-card backdrop-blur-md border border-border rounded-xl p-6 sm:p-8 shadow-xl shadow-cyan-500/5 relative overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              onHoverStart={() => setActiveTeamMember(index)}
              onHoverEnd={() => setActiveTeamMember(null)}
            >
              {/* Animated background gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-700/5 opacity-0"
                animate={{ 
                  opacity: activeTeamMember === index ? 0.5 : 0,
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
                      rotate: activeTeamMember === index ? [0, 5, 0, -5, 0] : 0,
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
                      className="text-white text-4xl font-bold"
                    >
                      {member.name.charAt(0)}
                    </motion.div>
                  </motion.div>
                </div>
                
                <div className="w-full md:w-2/3">
                  <motion.h2 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center md:text-left"
                    variants={fadeIn}
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                      {member.name}
                    </span>
                  </motion.h2>
                  
                  <motion.p 
                    className="text-lg text-cyan-500 mb-4 text-center md:text-left"
                    variants={fadeIn}
                  >
                    {member.role}
                  </motion.p>
                  
                  <motion.div 
                    className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4 mx-auto md:mx-0"
                    variants={fadeIn}
                  />
                  
                  <motion.div 
                    className="space-y-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {member.bio.map((paragraph, idx) => (
                      <motion.p 
                        key={idx}
                        className="text-foreground/80 leading-relaxed text-center md:text-left"
                        variants={fadeIn}
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                    
                    <motion.div 
                      className="flex gap-4 mt-6 justify-center md:justify-start"
                      variants={fadeIn}
                    >
                      <a 
                        href={member.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 px-3 py-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Linkedin className="w-5 h-5" />
                        <span>LinkedIn</span>
                      </a>
                      <a 
                        href={`mailto:${member.social.email}`}
                        className="flex items-center gap-2 text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 px-3 py-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Mail className="w-5 h-5" />
                        <span>Email</span>
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Extended Resources section */}
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
              <Users className="w-8 h-8 text-white" />
            </motion.div>
            
            <motion.h3 
              className="text-2xl font-bold mb-4"
              variants={fadeIn}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                Extended Resources
              </span>
            </motion.h3>
            
            <motion.div 
              className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4"
              variants={fadeIn}
            />
            
            <motion.p
              className="text-foreground/80 max-w-2xl mx-auto"
              variants={fadeIn}
            >
              The company has access to additional IT resources through its industry connections, allowing the company to scale its capabilities and expertise as needed for client projects.
            </motion.p>
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
                <span>Contact Our Team</span>
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