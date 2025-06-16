import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutUs() {
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

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-gray-900/40 backdrop-blur-sm dark:from-gray-900/60 dark:to-gray-900/40"></div>
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-500 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-700 blur-3xl"></div>
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              About Us
            </span>
          </h2>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-700 rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Mission */}
          <motion.div
            className="bg-muted/30 backdrop-blur-md rounded-2xl p-8 border border-border shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h3 
                className="text-2xl md:text-3xl font-semibold mb-6 flex items-center"
                variants={fadeInUp}
              >
                <span className="bg-gradient-to-r from-cyan-500 to-blue-700 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </span>
                Our Mission
              </motion.h3>
              
              <motion.p 
                className="text-lg text-muted-foreground pl-14"
                variants={fadeInUp}
              >
                To deliver innovative IT solutions tailored to our client's needs.
              </motion.p>
              
              <motion.div 
                className="mt-6 pl-14"
                variants={fadeInUp}
              >
                <div className="flex items-center space-x-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-cyan-500"></span>
                  <p className="text-muted-foreground">Innovative approaches to complex problems</p>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-cyan-500"></span>
                  <p className="text-muted-foreground">Client-focused development process</p>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-cyan-500"></span>
                  <p className="text-muted-foreground">Commitment to excellence and reliability</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right side - Target Customers */}
          <motion.div
            className="bg-muted/30 backdrop-blur-md rounded-2xl p-8 border border-border shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h3 
                className="text-2xl md:text-3xl font-semibold mb-6 flex items-center"
                variants={fadeInUp}
              >
                <span className="bg-gradient-to-r from-cyan-500 to-blue-700 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </span>
                Target Customers
              </motion.h3>
              
              <motion.p 
                className="text-lg text-muted-foreground pl-14"
                variants={fadeInUp}
              >
                State and local government organizations in the Tri-State area.
              </motion.p>
              
              <motion.div 
                className="mt-8 pl-14 relative"
                variants={fadeInUp}
              >
                <div className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-700"></div>
                
                <div className="relative pl-6 pb-6">
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-cyan-500"></div>
                  <h4 className="text-lg font-medium">State Agencies</h4>
                  <p className="text-muted-foreground mt-1">Providing compliant solutions for state-level departments</p>
                </div>
                
                <div className="relative pl-6 pb-6">
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-blue-600"></div>
                  <h4 className="text-lg font-medium">Local Municipalities</h4>
                  <p className="text-muted-foreground mt-1">Supporting city and county government operations</p>
                </div>
                
                <div className="relative pl-6">
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-indigo-500"></div>
                  <h4 className="text-lg font-medium">Government Contractors</h4>
                  <p className="text-muted-foreground mt-1">Partnering with other service providers in the government sector</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
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