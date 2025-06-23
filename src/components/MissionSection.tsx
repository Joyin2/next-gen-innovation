import { motion } from "framer-motion";
import { useRef } from "react";
import logo1 from "@/images/1.png";
import logo2 from "@/images/2.png";

export default function MissionSection() {
  const textRef = useRef(null);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-700/20 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMkQzRUUiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 md:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          {/* Decorative elements */}
          <div className="flex justify-center mb-8">
            <motion.div 
              className="h-0.5 w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "5rem", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </div>
          
          {/* Content with animation */}
          <motion.div
            ref={textRef}
            className="bg-card/40 backdrop-blur-sm rounded-xl p-8 border border-border shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Animated gradient background */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-700/5"
              animate={{ 
                backgroundPosition: ['0% center', '100% center'],
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
              style={{ backgroundSize: '200% auto' }}
            />
            
            {/* Text content with enhanced typography - now centered */}
            <div className="relative z-10 text-center">
              {/* New heading style - centered */}
              <motion.div 
                className="flex items-center justify-center mb-6 space-x-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="h-8 w-1 bg-gradient-to-b from-cyan-500 to-blue-700 rounded-full"></div>
                <h2 className="text-2xl sm:text-3xl font-light tracking-wide">
                  <span className="text-cyan-500">Innovation</span> <span className="text-foreground/90">for State and City Government </span>
                </h2>
              </motion.div>
              
              <motion.p 
                className="text-foreground/80 leading-relaxed text-lg mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span className="font-medium text-cyan-600 dark:text-cyan-400">At Next Generation Innovation L.L.C</span>, we specialize in delivering cutting-edge IT solutions tailored for state and local government organizations across the Tri-State area. From public safety and emergency management to data analytics and transportation systems, we provide both OEM and customized solutions designed to meet specific needs.
              </motion.p>
              
              <motion.p 
                className="text-foreground/80 leading-relaxed text-lg mt-4 mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
               We are minority owned, based in New York State, and we provide support locally.
              </motion.p>
              
              {/* Decorative badge - centered */}
              <motion.div 
                className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm font-medium text-foreground/80">Certified Minority-Owned Business</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Bottom decorative line */}
          <div className="flex justify-center mt-8">
            <motion.div 
              className="h-0.5 w-20 bg-gradient-to-r from-transparent via-blue-700 to-transparent"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "5rem", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </div>
          
          {/* Logo images at the end of the section */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div 
              className="bg-white p-4 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <img src={logo1} alt="Next Generation Innovation Logo 1" className="w-[300px] object-contain" />
            </motion.div>
            
            <motion.div 
              className="bg-white p-4 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <img src={logo2} alt="Next Generation Innovation Logo 2" className="w-[300px] object-contain" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}