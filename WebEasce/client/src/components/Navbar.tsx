import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-md border-b border-white/10 transition-colors ${
      scrolled ? "bg-[#121212]/90" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-[#9e30ff] to-[#4478ff] bg-clip-text text-transparent">
              Easce
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("services")} className="text-[#f5f5f5] hover:text-white transition">
              Services
            </button>
            <button onClick={() => scrollToSection("process")} className="text-[#f5f5f5] hover:text-white transition">
              Process
            </button>
            <button onClick={() => scrollToSection("team")} className="text-[#f5f5f5] hover:text-white transition">
              Team
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="text-[#f5f5f5] hover:text-white transition">
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="bg-gradient-to-r from-[#9e30ff] to-[#4478ff] bg-size-200 bg-pos-0 px-6 py-2 rounded-full font-semibold hover:opacity-90 transition"
            >
              Contact Us
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button 
              type="button" 
              className="text-white" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <motion.div 
        className={`md:hidden bg-[#121212] border-b border-white/10 ${mobileMenuOpen ? "block" : "hidden"}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button 
            onClick={() => scrollToSection("services")} 
            className="block px-3 py-2 text-base font-medium text-[#f5f5f5] hover:text-white w-full text-left"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection("process")} 
            className="block px-3 py-2 text-base font-medium text-[#f5f5f5] hover:text-white w-full text-left"
          >
            Process
          </button>
          <button 
            onClick={() => scrollToSection("team")} 
            className="block px-3 py-2 text-base font-medium text-[#f5f5f5] hover:text-white w-full text-left"
          >
            Team
          </button>
          <button 
            onClick={() => scrollToSection("testimonials")} 
            className="block px-3 py-2 text-base font-medium text-[#f5f5f5] hover:text-white w-full text-left"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection("contact")} 
            className="block px-3 py-2 text-base font-medium bg-gradient-to-r from-[#9e30ff] to-[#4478ff] rounded-lg mt-4 text-center w-full"
          >
            Contact Us
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
