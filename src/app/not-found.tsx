"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white flex flex-col pt-24">
      <Navbar />
      
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* Decorative Background Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center z-10"
        >
          <div className="flex justify-center mb-8">
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="p-6 rounded-full bg-white/5 border border-white/10 text-amber-500"
            >
              <Compass size={64} strokeWidth={1} />
            </motion.div>
          </div>

          <h1 className="text-8xl md:text-[12rem] font-serif leading-none opacity-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 select-none pointer-events-none">
            404
          </h1>

          <h2 className="text-4xl md:text-6xl font-serif mb-6 italic">Lost in the <span className="text-amber-500">Void.</span></h2>
          
          <p className="text-gray-400 text-lg max-w-md mx-auto mb-12 leading-relaxed">
            The coordinates you've entered lead to uncharted digital space. 
            Let's get you back to the center of the circle.
          </p>

          <Link href="/">
            <button className="group relative px-10 py-5 bg-amber-500 text-black rounded-full font-bold uppercase tracking-widest text-xs overflow-hidden transition-all hover:bg-white">
              <span className="relative flex items-center gap-3">
                <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
                Return to Home
              </span>
            </button>
          </Link>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}