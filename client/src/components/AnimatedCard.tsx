import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  index: number;
}

export default function AnimatedCard({ children, index }: AnimatedCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.2 }
      }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}
