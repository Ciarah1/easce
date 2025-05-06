import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/animations";
import { TeamMember } from "../types";

export default function TeamSection() {
  const team: TeamMember[] = [
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      name: "David Chen",
      role: "Lead Developer",
      description: "Expert in React, Node.js and cloud architecture with 8+ years experience."
    },
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      description: "Creating beautiful, intuitive interfaces with a focus on user experience."
    },
    {
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      name: "Michael Torres",
      role: "Backend Engineer",
      description: "Database architecture, API development, and server-side performance."
    },
    {
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      name: "Emily Zhang",
      role: "Project Manager",
      description: "Ensuring projects are delivered on time and exceed expectations."
    }
  ];

  return (
    <section id="team" className="py-24 bg-[#0f0f0f]">
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
            Meet Our <span className="bg-gradient-to-r from-[#9e30ff] to-[#4478ff] bg-clip-text text-transparent">Team</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn("up", 0.3)}
            className="mt-4 text-[#f5f5f5] text-lg"
          >
            The talented experts who will bring your web app to life.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div 
              key={index}
              variants={fadeIn("up", 0.3 + index * 0.1)}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-[#121212] rounded-xl p-6 border border-white/10 text-center group hover:border-[#9e30ff]/50 transition duration-300"
            >
              <div className="relative w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full">
                <img 
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>
              <h3 className="text-xl font-bold mb-1 group-hover:bg-gradient-to-r group-hover:from-[#9e30ff] group-hover:to-[#4478ff] group-hover:bg-clip-text group-hover:text-transparent transition duration-300">
                {member.name}
              </h3>
              <p className="text-sm text-[#9e30ff] mb-3">{member.role}</p>
              <p className="text-[#f5f5f5] text-sm">{member.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
