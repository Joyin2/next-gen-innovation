import { motion } from "framer-motion";
import { Lightbulb, ShieldCheck, Wrench, Clock, Smartphone, MapPin } from "lucide-react";

export default function ValueProposition() {
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

  // Value propositions with corresponding icons and descriptions
  const valueProps = [
    { 
      title: "Innovation", 
      icon: <Lightbulb className="w-6 h-6" />,
      description: "Track record of fostering creativity, generating novel ideas, and transforming them into valuable products and services."
    },
    { 
      title: "Compliance and Security", 
      icon: <ShieldCheck className="w-6 h-6" />,
      description: "Compliance with industry standards, particularly in areas such as data security and privacy."
    },
    { 
      title: "Tailored Solutions", 
      icon: <Wrench className="w-6 h-6" />,
      description: "Customized IT solutions tailored to the specific needs of our customers."
    },
    { 
      title: "Reliability and Continuity", 
      icon: <Clock className="w-6 h-6" />,
      description: "Focus on delivering reliable IT services that ensure continuity of operations for our customers."
    },
    { 
      title: "Digital Transformation", 
      icon: <Smartphone className="w-6 h-6" />,
      description: "Experience in driving digital transformation initiatives that can modernize processes, enhance stakeholder services, and improve overall efficiency."
    },
    { 
      title: "Local Expertise and Support", 
      icon: <MapPin className="w-6 h-6" />,
      description: "Certified Minority Owned, based in New York State, and mostly provides support locally."
    },
  ];

  return (
    <section id="value-proposition" className="relative py-24 overflow-hidden bg-muted/30 dark:bg-gray-900">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/40 to-muted/20 backdrop-blur-sm dark:from-gray-900/40 dark:to-gray-900/20"></div>
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
              Our Value Proposition
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
            What sets us apart from the competition and makes us the ideal partner for your IT needs
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-background/50 dark:bg-gray-800/30 backdrop-blur-md border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/20">
                <div className="text-white">
                  {prop.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{prop.title}</h3>
              <p className="text-muted-foreground">{prop.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}