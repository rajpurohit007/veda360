"use client";

import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  "HTML5", "CSS3", "JavaScript", "React", "Next.js", "MongoDB", 
  "Android", "Java", "PHP", "MySQL", "Tailwind CSS", "Bootstrap",
  "Node.js", "TypeScript", "Framer Motion", "PostgreSQL"
];

const TechStack = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] overflow-hidden border-y border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[1px] w-8 bg-amber-500/50" />
          <span className="text-amber-500 text-[10px] uppercase tracking-[0.4em] font-bold">
            Our Technology Stack
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-serif text-white max-w-3xl leading-tight">
          Built with the <span className="italic text-gray-400">Best-in-Class</span> Engineering.
        </h2>
      </div>

      {/* Infinite Scroll Container */}
      <div className="flex flex-col gap-10">
        
        {/* Row 1 - Moving Right to Left */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div 
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 items-center"
          >
            {/* Doubling the array to ensure seamless looping */}
            {[...technologies, ...technologies].map((tech, i) => (
              <span 
                key={i} 
                className="text-5xl md:text-7xl font-serif font-bold text-white/40 hover:text-amber-500 transition-all duration-500 cursor-default select-none"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Moving Left to Right (Reverse direction and different styling) */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div 
            initial={{ x: "-50%" }}
            animate={{ x: 0 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 items-center"
          >
            {[...technologies, ...technologies].reverse().map((tech, i) => (
              <span 
                key={i} 
                className="text-5xl md:text-7xl font-serif italic text-white/20 hover:text-amber-500/60 transition-all duration-500 cursor-default select-none"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default TechStack;