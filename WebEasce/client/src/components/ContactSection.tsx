import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/animations";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { insertContactSubmissionSchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { ContactFormData } from "../types";
import { RectangleEllipsis, Phone, MapPin } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export default function ContactSection() {
  const { toast } = useToast();
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const mutation = useMutation({
    mutationFn: (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. We'll get back to you shortly.",
        variant: "default",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="py-24 bg-[#0f0f0f]">
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
            Get In <span className="bg-gradient-to-r from-[#9e30ff] to-[#4478ff] bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn("up", 0.3)}
            className="mt-4 text-[#f5f5f5] text-lg"
          >
            Have a project in mind? Let's talk about how we can help.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <motion.div variants={fadeIn("right", 0.4)}>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#f5f5f5] mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  {...register("name")}
                  className="w-full p-3 rounded-lg bg-[#121212] border border-white/20 text-white focus:border-[#9e30ff] outline-none transition"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#f5f5f5] mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  {...register("email")}
                  className="w-full p-3 rounded-lg bg-[#121212] border border-white/20 text-white focus:border-[#9e30ff] outline-none transition"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-[#f5f5f5] mb-1">Project Type</label>
                <select 
                  id="projectType" 
                  {...register("projectType")}
                  className="w-full p-3 rounded-lg bg-[#121212] border border-white/20 text-white focus:border-[#9e30ff] outline-none transition"
                  defaultValue=""
                >
                  <option value="" disabled>Select a project type</option>
                  <option value="custom-web-app">Custom Web Application</option>
                  <option value="e-commerce">E-commerce Website</option>
                  <option value="dashboard">Dashboard & Analytics</option>
                  <option value="portal">Customer/Employee Portal</option>
                  <option value="other">Other</option>
                </select>
                {errors.projectType && (
                  <p className="mt-1 text-sm text-red-500">{errors.projectType.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#f5f5f5] mb-1">Project Details</label>
                <textarea 
                  id="message" 
                  {...register("message")}
                  rows={5} 
                  className="w-full p-3 rounded-lg bg-[#121212] border border-white/20 text-white focus:border-[#9e30ff] outline-none transition"
                  placeholder="Tell us about your project..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>
              
              <div>
                <button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="w-full bg-gradient-to-r from-[#9e30ff] to-[#4478ff] px-6 py-4 rounded-lg font-bold text-white hover:opacity-90 transition disabled:opacity-70"
                >
                  {mutation.isPending ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </motion.div>
          
          <motion.div 
            variants={fadeIn("left", 0.5)}
            className="bg-[#121212] rounded-xl p-8 border border-white/10 h-fit"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-[#9e30ff] to-[#4478ff] rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                  <RectangleEllipsis className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-[#f5f5f5] mb-1">Email Us</p>
                  <p className="font-medium">contact@easce.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-[#9e30ff] to-[#4478ff] rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-[#f5f5f5] mb-1">Call Us</p>
                  <p className="font-medium">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-[#9e30ff] to-[#4478ff] rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-[#f5f5f5] mb-1">Visit Us</p>
                  <p className="font-medium">123 Innovation Drive<br />San Francisco, CA 94103</p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-[#f5f5f5] mb-3">Follow Us</p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#9e30ff] transition" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#9e30ff] transition" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#9e30ff] transition" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#9e30ff] transition" aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
