"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] bg-[#0A0A0A] flex flex-col items-center justify-center">
      <div className="relative w-24 h-24">
        {/* Outer Pulsing Ring */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: 360 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute inset-0 border-2 border-amber-500/30 rounded-full border-t-amber-500"
        />
        
        {/* Inner Core */}
        <motion.div
          animate={{ 
            scale: [0.8, 1.1, 0.8],
            opacity: [0.5, 1, 0.5] 
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute inset-4 bg-amber-500 rounded-full blur-[2px] shadow-[0_0_20px_rgba(245,158,11,0.5)]"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] text-amber-500 font-bold animate-pulse">
          Initializing Veda360
        </span>
        <div className="h-[1px] w-32 bg-white/10 overflow-hidden">
          <motion.div 
            animate={{ x: [-128, 128] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-full bg-amber-500"
          />
        </div>
      </motion.div>
    </div>
  );
}