import { motion } from "framer-motion";
import { Target, Users, Briefcase, Map, Award, Shield, Cog } from "lucide-react";

export default function CompanySummary() {
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

  // Summary points with corresponding icons
  const summaryPoints = [
    { 
      title: "Our Mission", 
      icon: <Target className="w-6 h-6" />,
      description: "Next Generation Innovation's Mission is to deliver innovative IT solutions tailored to our client's needs."
    },
    { 
      title: "Target Customers", 
      icon: <Users className="w-6 h-6" />,
      description: "The target customers for the company are the state and local government organizations in the Tri-State area."
    },
    { 
      title: "Service Focus", 
      icon: <Briefcase className="w-6 h-6" />,
      description: "The company focuses on providing IT solutions for public safety, emergency management, cybersecurity, traffic management, transportation systems, and more."
    },
    { 
      title: "Solution Types", 
      icon: <Cog className="w-6 h-6" />,
      description: "The company provides OEM solutions as well as custom IT products and services, initially focusing on IT services and software development for city and state governments."
    },
    { 
      title: "Our Team", 
      icon: <Users className="w-6 h-6" />,
      description: "The company has assembled a very effective team consisting of experienced managers and capable software engineers, specializing in data analytics based on AI/ML and cyber security."
    },
    { 
      title: "Company Status", 
      icon: <Award className="w-6 h-6" />,
      description: "Next Generation Innovation L.L.C. is a certified minority owned business based in New York State."
    }
  ];

  return (
    <section id="company-summary" className="relative py-24 overflow-hidden bg-[#2e89df] dark:bg-gray-900">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2e89df]/40 to-[#2e89df]/20 backdrop-blur-sm dark:from-gray-900/40 dark:to-gray-900/20"></div>
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-cyan-500 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-blue-700 blur-3xl"></div>
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
              Company Summary
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
            Next Generation Innovation L.L.C. is a technology company focused on delivering innovative IT solutions
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {summaryPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-background/50 dark:bg-gray-800/30 backdrop-blur-md border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/20">
                <div className="text-white">
                  {point.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{point.title}</h3>
              <p className="text-muted-foreground">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}