import { motion } from "framer-motion";
import { Shield, Siren, Lock, Car, School, Link, Cog, Cpu, Brain, Code } from "lucide-react";

export default function OurFocus() {
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

  // Focus areas with corresponding icons
  const focusAreas = [
    { name: "Public Safety", icon: <Shield className="w-5 h-5" /> },
    { name: "Emergency Management", icon: <Siren className="w-5 h-5" /> },
    { name: "Cybersecurity", icon: <Lock className="w-5 h-5" /> },
    { name: "Traffic Management", icon: <Car className="w-5 h-5" /> },
    { name: "Transportation Systems", icon: <Car className="w-5 h-5" /> },
    { name: "University & Student Management", icon: <School className="w-5 h-5" /> },
    { name: "Blockchain", icon: <Link className="w-5 h-5" /> },
    { name: "MTO", icon: <Cog className="w-5 h-5" /> },
    { name: "OEM Solutions", icon: <Cpu className="w-5 h-5" /> },
    { name: "AI/ML Analytics", icon: <Brain className="w-5 h-5" /> },
    { name: "Custom IT Products & Services", icon: <Code className="w-5 h-5" /> },
  ];

  return (
    <section id="focus" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/40 to-muted/20 backdrop-blur-sm dark:from-gray-900/40 dark:to-gray-900/20"></div>
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-blue-700 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-cyan-500 blur-3xl"></div>
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
              Our Focus
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
            We focus on providing specialized IT solutions for a wide range of critical sectors
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {focusAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-muted/30 dark:bg-gray-800/30 backdrop-blur-md border border-border rounded-xl p-4 flex flex-col items-center text-center hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center mb-3 shadow-lg shadow-cyan-500/20">
                {area.icon}
              </div>
              <h3 className="font-medium text-foreground">{area.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}