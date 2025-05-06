import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/animations";
import AnimatedBackground from "./AnimatedBackground";
import { Process } from "../types";

export default function ProcessSection() {
  const processes: Process[] = [
    {
      number: 1,
      title: "Discovery & Planning",
      description: "We start with a comprehensive consultation to understand your goals, requirements, and vision. Our team creates a detailed roadmap for your web app.",
      timeline: "Days 1-3"
    },
    {
      number: 2,
      title: "Design & Architecture",
      description: "Our designers create beautiful, intuitive user interfaces while our engineers plan the technical architecture to ensure optimal performance.",
      timeline: "Days 4-7"
    },
    {
      number: 3,
      title: "Development & Testing",
      description: "Our developers build your web app using modern technologies while continuously testing for quality, performance, and security.",
      timeline: "Days 8-18"
    },
    {
      number: 4,
      title: "Launch & Support",
      description: "We deploy your web app, provide thorough training, and offer ongoing support to ensure your continued success.",
      timeline: "Days 19-21"
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#121212] relative overflow-hidden">
      <AnimatedBackground className="opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2 
            variants={fadeIn("up", 0.2)}
            className="text-3xl sm:text-4xl font-bold"
          >
            How It <span className="bg-gradient-to-r from-[#9e30ff] to-[#4478ff] bg-clip-text text-transparent">Works</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn("up", 0.3)}
            className="mt-4 text-[#f5f5f5] text-lg"
          >
            Our streamlined process delivers exceptional web apps in just 21 days.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-3xl mx-auto"
        >
          <div className="space-y-12">
            {processes.map((process, index) => (
              <motion.div 
                key={index}
                variants={fadeIn("up", 0.3 + index * 0.1)}
                className="flex"
              >
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#9e30ff] to-[#4478ff] rounded-full flex items-center justify-center text-xl font-bold">
                    {process.number}
                  </div>
                  {index < processes.length - 1 && (
                    <div 
                      className="h-full w-0.5 bg-white/20 mx-auto mt-4" 
                      style={{ height: "calc(100% - 3rem)" }}
                    ></div>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                  <p className="text-[#f5f5f5]">
                    {process.description}
                  </p>
                  <p className="text-sm text-white/60 mt-2">
                    <span className="text-[#9e30ff]">{process.timeline}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
