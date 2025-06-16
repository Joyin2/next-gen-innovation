import { motion } from "framer-motion";
import { Linkedin, Mail, Users } from "lucide-react";
import Image from "next/image";

export default function OurTeamSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
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

  // Team members data
  const teamMembers = [
    {
      name: "Mohammed Abdun Noor",
      position: "Managing Member",
      bio: "Mr. Mohammed Abdun Noor brings multi-disciplinary expertise and a wealth of experience to the company. His leadership and strategic vision are instrumental in driving innovation and growth.",
      linkedin: "https://www.linkedin.com/in/mohammed-abdun-noor-1b130b37/",
      email: "noor.glocal@gmail.com",
      image: "/team/mohammed.jpg" // Add a placeholder image path - update with actual image
    },
    {
      name: "Dr. Santanu Das",
      position: "Member",
      bio: "A seasoned executive with 36 years of experience, serving on boards of public, private, and non-profit organizations. He led a venture-backed tech company from startup to NASDAQ IPO and served as its CEO for over 14 years. Recognized with the Ernst & Young Entrepreneur of the Year Award, he also holds 38 significant patents and has authored 30+ papers, with recent work focused on AI/ML, IoT, cybersecurity, and blockchain technologies.",
      linkedin: "https://www.linkedin.com/in/dr-santanu-das-3917201b/",
      email: "santanu44@aol.com",
      image: "/team/santanu.jpg" // Add a placeholder image path - update with actual image
    }
  ];

  return (
    <section id="our-team-section" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/40 to-muted/20 backdrop-blur-sm dark:from-gray-900/40 dark:to-gray-900/20"></div>
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-cyan-500 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full bg-blue-700 blur-3xl"></div>
      </div>
      
      <div className="container relative mx-auto px-6 sm:px-8 md:px-12 lg:px-16 z-10">
        <motion.div 
          className="flex flex-col items-center text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700 drop-shadow-sm dark:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Our Team
            </span>
          </h2>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-700 rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-12"
          >
            Meet our leadership team driving innovation and excellence
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index}
              className="bg-background/50 dark:bg-gray-800/30 backdrop-blur-md border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-lg shadow-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300">
                    <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-700/20 flex items-center justify-center">
                      {/* Replace with actual image when available */}
                      <div className="text-5xl text-cyan-500">{member.name.charAt(0)}</div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-cyan-500 mb-3">{member.position}</p>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-700 rounded-full mb-4"></div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="flex gap-4 mt-4">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn</span>
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Additional resources note */}
        <motion.div
          className="mt-16 bg-background/50 dark:bg-gray-800/30 backdrop-blur-md border border-border rounded-xl p-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-3">Extended Resources</h3>
          <p className="text-muted-foreground">The company has access to additional IT resources through its industry connections.</p>
        </motion.div>
        
        {/* Bottom decorative element */}
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}