import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/animations";
import { Service } from "../types";
import {
  Code,
  Laptop,
  Smartphone,
  Database,
  LineChart,
  Shield
} from "lucide-react";

export default function ServicesSection() {
  const services: Service[] = [
    {
      icon: "laptop",
      title: "Custom Web App Development",
      description: "Fully custom web applications built from scratch with your specific requirements and business logic."
    },
    {
      icon: "smartphone",
      title: "Responsive Web Design",
      description: "Beautiful, functional interfaces that work perfectly on any device, from desktop to mobile."
    },
    {
      icon: "code",
      title: "Frontend Development",
      description: "Modern, performant frontends built with React, Vue, or other cutting-edge frameworks."
    },
    {
      icon: "database",
      title: "Backend Development",
      description: "Robust and scalable server-side solutions using Node.js, Python, or other technologies."
    },
    {
      icon: "chart",
      title: "Analytics & Reporting",
      description: "Data-driven insights and dashboards to track performance and make informed decisions."
    },
    {
      icon: "shield",
      title: "Security & Maintenance",
      description: "Ongoing support to keep your web application secure, updated, and performing optimally."
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "laptop":
        return <Laptop className="text-xl" />;
      case "smartphone":
        return <Smartphone className="text-xl" />;
      case "code":
        return <Code className="text-xl" />;
      case "database":
        return <Database className="text-xl" />;
      case "chart":
        return <LineChart className="text-xl" />;
      case "shield":
        return <Shield className="text-xl" />;
      default:
        return <Code className="text-xl" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Our <span className="bg-gradient-to-r from-[#9e30ff] to-[#4478ff] bg-clip-text text-transparent">Services</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn("up", 0.3)}
            className="mt-4 text-[#f5f5f5] text-lg"
          >
            We specialize in building high-quality web applications that drive results for your business.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={fadeIn("up", 0.3 + index * 0.1)}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-[#121212] rounded-xl p-8 border border-white/10 hover:border-[#9e30ff]/50 transition duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-[#9e30ff] to-[#4478ff] rounded-lg flex items-center justify-center mb-6">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-[#9e30ff] group-hover:to-[#4478ff] group-hover:bg-clip-text group-hover:text-transparent transition duration-300">
                {service.title}
              </h3>
              <p className="text-[#f5f5f5]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
