"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Palette, BarChart4, Globe2, ShieldCheck, Rocket } from 'lucide-react';

const capabilities = [
  {
    id: 'development',
    label: 'Digital Engineering',
    title: 'High-Performance Web & App Ecosystems',
    description: 'From lightning-fast static sites to complex dynamic web applications. We engineer scalable solutions using Next.js and React that turn visitors into customers.',
    features: ['Dynamic Web Apps', 'Static Site Generation', 'Custom App Development'],
    icon: <Code2 className="text-amber-500" />
  },
  {
    id: 'design',
    label: 'Brand Identity',
    title: 'Visual Storytelling & Graphic Design',
    description: 'We blend the "Veda" philosophy with modern aesthetics. Our design team creates high-fidelity graphics and UI/UX that define your brand’s authority.',
    features: ['Brand Identity', 'UI/UX Design', 'Visual Communication'],
    icon: <Palette className="text-amber-500" />
  },
  {
    id: 'growth',
    label: 'Strategic Growth',
    title: 'SEO & Performance Marketing',
    description: 'Visibility is power. Our data-driven SEO management and digital marketing strategies ensure your brand stays at the top of the search cycle.',
    features: ['Search Engine Optimization', 'Digital Marketing', 'Conversion Strategy'],
    icon: <BarChart4 className="text-amber-500" />
  },
  {
    id: 'maintenance',
    label: 'Sustenance',
    title: '360° Maintenance & Security',
    description: 'Digital infrastructure requires constant evolution. We provide proactive website maintenance and security management to keep your business running 24/7.',
    features: ['24/7 Monitoring', 'Security Management', 'Performance Updates'],
    icon: <ShieldCheck className="text-amber-500" />
  }
];

export default function CapabilityHub() {
  const [activeTab, setActiveTab] = useState('development');

  return (
    <section className="bg-[#0A0A0A] py-32 px-6 md:px-12 border-t border-white/5 relative">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* SEO-Friendly Header */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] text-amber-500 font-bold"
          >
            Our Expertise
          </motion.span>
          <h2 className="text-4xl md:text-7xl font-serif mt-4 max-w-4xl leading-[1.1]">
            Engineering the <span className="text-amber-500 italic">Full Circle</span> of Growth.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
          
          {/* Left: Interactive Tab Navigation */}
          <div className="w-full lg:w-[400px] flex flex-col space-y-3">
            {capabilities.map((cap) => (
              <button
                key={cap.id}
                onClick={() => setActiveTab(cap.id)}
                className={`text-left p-6 rounded-2xl transition-all duration-500 flex items-center justify-between group relative overflow-hidden ${
                  activeTab === cap.id 
                  ? 'bg-white/5 border border-white/10 translate-x-2' 
                  : 'bg-transparent border border-transparent opacity-50 hover:opacity-100'
                }`}
              >
                <span className={`text-xs uppercase tracking-widest font-bold transition-colors ${
                  activeTab === cap.id ? 'text-amber-500' : 'text-white'
                }`}>
                  {cap.label}
                </span>
                {activeTab === cap.id && (
                  <motion.div layoutId="tab-indicator" className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Right: Dynamic Content Box */}
          <div className="flex-1 bg-gradient-to-br from-[#111] to-[#0A0A0A] border border-white/5 rounded-[40px] p-8 md:p-20 relative min-h-[500px] shadow-2xl">
            <AnimatePresence mode="wait">
              {capabilities.map((cap) => cap.id === activeTab && (
                <motion.div
                  key={cap.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
                    <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center border border-white/10 shadow-inner">
                      {cap.icon}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-serif leading-tight">{cap.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
                    {cap.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {cap.features.map((feature, idx) => (
                      <div key={idx} className="space-y-3">
                        <div className="w-full h-[1px] bg-white/10" />
                        <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold block italic">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <motion.button 
                   
                    className="mt-16 flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-amber-500 border-b border-amber-500/20 pb-2"
                  >
                    Consult for {cap.label} <Rocket size={14} />
                  </motion.button>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Subtle glow centered on the content */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}