import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/animations";
import AnimatedBackground from "./AnimatedBackground";
import { Testimonial } from "../types";

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      quote: "Easce delivered our web app ahead of schedule and exceeded our expectations. Their team was professional, responsive, and truly understood our vision.",
      name: "Rebecca Taylor",
      company: "CEO, InnovateTech",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "Working with Easce was a game-changer for our business. They transformed our idea into a powerful web app in just 21 days, and it's been driving revenue since day one.",
      name: "James Wilson",
      company: "Founder, GrowthHub",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "I was amazed by how quickly Easce delivered our complex web application. Their expertise in modern web technologies is unmatched, and their team was a pleasure to work with.",
      name: "Lisa Rodriguez",
      company: "CTO, FintechFlow",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];

  const [activePage, setActivePage] = useState(0);

  return (
    <section id="testimonials" className="py-24 bg-[#121212] relative overflow-hidden">
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
            Client <span className="bg-gradient-to-r from-[#9e30ff] to-[#4478ff] bg-clip-text text-transparent">Testimonials</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn("up", 0.3)}
            className="mt-4 text-[#f5f5f5] text-lg"
          >
            What our clients say about their experience working with us.
          </motion.p>
        </motion.div>
        
        <div className="relative">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                variants={fadeIn("up", 0.3 + index * 0.1)}
                className="bg-[#121212] rounded-xl p-8 border border-white/10"
              >
                <div className="flex items-center mb-6">
                  <div className="text-[#9e30ff] text-2xl mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-[#f5f5f5] mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-[#9e30ff]">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="flex justify-center mt-12 space-x-2">
            {[0, 1, 2].map((page) => (
              <button 
                key={page}
                className={`w-3 h-3 rounded-full ${page === activePage ? 'bg-[#9e30ff]' : 'bg-white/30'}`}
                onClick={() => setActivePage(page)}
                aria-label={`Testimonial page ${page + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
