import { motion } from "framer-motion";
import { LineChart, Zap, BarChart3, TrendingUp, Award } from "lucide-react";

export default function OurStrategy() {
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

  // Strategy points with corresponding icons and descriptions
  const strategyPoints = [
    { 
      title: "Predictive Power", 
      icon: <LineChart className="w-6 h-6" />,
      description: "Machine learning enables accurate predictions and proactive decision-making based on historical data and analysis."
    },
    { 
      title: "Advanced Techniques", 
      icon: <Zap className="w-6 h-6" />,
      description: "Advanced machine learning techniques for businesses include anomaly detection, sentiment analysis, natural language processing, fraud detection, customer insights, and process automation."
    },
    { 
      title: "Optimization", 
      icon: <BarChart3 className="w-6 h-6" />,
      description: "Machine learning optimizes decision-making processes, guiding strategic planning and operational efficiency."
    },
    { 
      title: "Competitive Edge", 
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Embracing machine learning is crucial for businesses to maintain a competitive advantage in challenging business situations."
    },
    { 
      title: "Value-Driven Solutions", 
      icon: <Award className="w-6 h-6" />,
      description: "We provide products and services that add value, safety, and are supported by a well-trained professional team with commercial expertise."
    }
  ];

  return (
    <section id="our-strategy" className="relative py-24 overflow-hidden">
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
              Our Strategy
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
            Leveraging machine learning to deliver innovative solutions that drive business success
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {strategyPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-muted/30 dark:bg-gray-800/30 backdrop-blur-md border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1"
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