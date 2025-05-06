import { motion } from "framer-motion";
import { fadeIn, floatAnimation, staggerContainer } from "../lib/animations";
import AnimatedBackground from "./AnimatedBackground";
import { Stat } from "../types";

export default function HeroSection() {
  const stats: Stat[] = [
    { value: "100+", label: "Web Apps Delivered" },
    { value: "21", label: "Days Turnaround" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <AnimatedBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div 
            variants={fadeIn("right", 0.3)} 
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                We build <span className="bg-gradient-to-r from-[#9e30ff] to-[#4478ff] bg-clip-text text-transparent">exceptional web apps</span> in 21 days
              </h1>
              <p className="mt-6 text-xl text-[#f5f5f5] max-w-2xl">
                Beautiful, functional web applications built by experts in record time. No lengthy timelines or inflated budgets.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("process")}
                className="bg-gradient-to-r from-[#9e30ff] to-[#4478ff] px-8 py-4 rounded-full text-center font-bold text-white hover:opacity-90 transition"
              >
                How It Works
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className="bg-white/10 border border-white/20 px-8 py-4 rounded-full text-center font-bold text-white hover:bg-white/20 transition"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            variants={floatAnimation}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1581089776575-677522b612e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Modern web application interface" 
              className="rounded-xl shadow-2xl w-full"
            />
            <motion.div 
              variants={fadeIn("up", 0.5)}
              className="absolute -bottom-6 -left-6 bg-[#0f0f0f] p-4 rounded-lg shadow-lg border border-white/10"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#9e30ff]"></div>
                <p className="font-medium">21 days delivery</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={fadeIn("up", 0.3 + index * 0.1)}
              className="space-y-2"
            >
              <p className="text-3xl font-bold bg-gradient-to-r from-[#9e30ff] to-[#4478ff] bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-sm text-[#f5f5f5]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
