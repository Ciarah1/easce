import { motion } from "framer-motion";
import { fadeIn } from "../lib/animations";

export default function CallToActionSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-r from-[#9e30ff] to-[#4478ff] bg-size-200 animate-gradient-x">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", 0.2)}
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          Ready to build your next web app in just 21 days?
        </motion.h2>
        <motion.p 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", 0.3)}
          className="text-xl mb-10 max-w-3xl mx-auto"
        >
          Get in touch today and let's discuss how we can bring your vision to life in record time.
        </motion.p>
        <motion.button
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", 0.4)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("contact")}
          className="bg-white text-[#121212] px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition"
        >
          Start Your Project
        </motion.button>
      </div>
    </section>
  );
}
