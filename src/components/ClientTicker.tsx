"use client";

import React from 'react';
import { motion } from 'framer-motion';

// For a professional look, we use high-contrast, monochrome logos
const clients = [
  { name: "SIYA LASER TECH", industry: "Diamond" },
  { name: "PadhaiOn", industry: "Education" },

];

export default function ClientTicker() {
  // We double the array to create the infinite loop effect
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="bg-[#0A0A0A] py-20 border-t border-b border-white/5 relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-10 text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[10px] uppercase tracking-[0.5em] text-gray-500 font-bold"
        >
          Trusted by Industry Pioneers
        </motion.span>
      </div>

      <div className="flex relative items-center overflow-hidden">
        {/* Masking gradients for smooth fade in/out on the sides */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />

        <motion.div 
          className="flex whitespace-nowrap gap-16 md:gap-32"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 30, 
            repeat: Infinity 
          }}
        >
          {duplicatedClients.map((client, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center justify-center group cursor-default"
            >
              <span className="text-2xl md:text-4xl font-serif tracking-tighter text-white/20 group-hover:text-amber-500/80 transition-colors duration-500 italic">
                {client.name}
              </span>
              <span className="text-[14px] uppercase tracking-widest text-gray-700 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {client.industry}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}