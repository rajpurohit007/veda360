"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="p-5 rounded-full bg-red-500/10 text-red-500 border border-red-500/20">
            <AlertTriangle size={48} />
          </div>
        </div>
        <h2 className="text-3xl font-serif mb-4">A System Interruption Occurred.</h2>
        <p className="text-gray-500 mb-10 max-w-sm mx-auto">
          Our engineering team has been notified. Let's try to re-initialize the circle.
        </p>
        <button
          onClick={() => reset()}
          className="px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-2 mx-auto hover:bg-amber-500 transition-all"
        >
          <RefreshCcw size={16} /> Retry Connection
        </button>
      </motion.div>
    </div>
  );
}