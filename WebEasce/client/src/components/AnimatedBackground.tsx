import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  className?: string;
}

export default function AnimatedBackground({ className }: AnimatedBackgroundProps) {
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      <motion.div 
        className="absolute w-96 h-96 rounded-full bg-[#9e30ff]/20 blur-3xl -top-20 -left-20"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute w-96 h-96 rounded-full bg-[#4478ff]/20 blur-3xl bottom-0 right-0"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "loop",
          delay: 2,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
