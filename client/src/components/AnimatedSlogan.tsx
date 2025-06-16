import { motion } from "framer-motion";

export default function AnimatedSlogan() {
  // Letter animation for the main slogan
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        type: "spring",
        stiffness: 120
      }
    })
  };

  const mainSlogan = "We Make Things Happen";
  const subSlogan = "Making IT Solutions Easy";

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/30 backdrop-blur-sm"></div>
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-cyan-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-blue-700 blur-3xl"></div>
      </div>
      
      <div className="container relative mx-auto px-6 sm:px-8 md:px-12 lg:px-16 z-10">
        <motion.div 
          className="flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main slogan with letter-by-letter animation */}
          <motion.h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 relative">
            <div className="flex flex-wrap justify-center gap-x-1 gap-y-6 py-4 overflow-visible">
              {mainSlogan.split("").map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className={`inline-block ${char === " " ? "w-4" : ""} bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-400 to-blue-600 dark:from-white dark:via-cyan-300 dark:to-blue-400 drop-shadow-sm dark:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)] overflow-visible`}
                >
                  {char}
                </motion.span>
              ))}
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-cyan-500 dark:border-cyan-300"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            />
            <motion.div 
              className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-blue-700 dark:border-blue-400"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.h2>
          
          {/* Animated divider */}
          <motion.div
            className="relative flex items-center mb-8 w-full max-w-2xl"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex-grow h-[2px] bg-gradient-to-r from-transparent via-cyan-500 dark:via-cyan-300 to-transparent"></div>
          </motion.div>
          
          {/* Sub slogan */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground dark:text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {subSlogan}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}