"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, Layout } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

/** * IMAGE IMPORTS */
import SiyaImage from '../../../public/SiyaLaserTechUI.png'; 
import PadhaiOnImage from '../../../public/PadhaiOnUI.png';

const projects = [
  {
    title: "Siya Laser Tech",
    category: "Static Branding Website",
    description: "A professional landing page and brand showcase for precision laser technology solutions. Optimized for high-speed performance and search visibility.",
    image: SiyaImage, 
    link: "https://www.siyalasertech.com",
    icon: <Globe size={20} aria-hidden="true" />
  },
  {
    title: "PadhaiOn",
    category: "Dynamic Institution Searching Platform",
    description: "A comprehensive digital ecosystem designed for searching and connecting with educational institutions. Built with Next.js for maximum scalability.",
    image: PadhaiOnImage,
    link: "https://www.padhaion.com",
    icon: <Layout size={20} aria-hidden="true" />
  }
];

export default function ProductGalleryPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white font-sans overflow-x-clip pt-24">
      <Navbar />

      {/* Header Section */}
      <section className="px-6 md:px-12 py-20 max-w-screen-2xl mx-auto" aria-labelledby="portfolio-heading">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] uppercase tracking-[0.5em] text-amber-500 font-bold">Portfolio Archives</span>
            <div className="h-[1px] w-12 bg-white/20" aria-hidden="true" />
            <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">
              VOL. 01 — {projects.length} Masterpieces
            </span>
          </div>
          
          <h1 id="portfolio-heading" className="text-5xl md:text-8xl font-serif leading-tight">
            Our Digital <br />
            <span className="italic text-amber-500">Masterpieces.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mt-8 leading-relaxed max-w-2xl font-light">
            A curated selection of <strong>custom web development projects</strong> where ancient wisdom meets cutting-edge engineering. 
            Explore our live deployments and technical case studies.
          </p>
        </motion.div>
      </section>

      {/* Product Gallery Grid */}
      <section className="px-6 md:px-12 pb-32 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {projects.map((project, index) => {
            const imageSrc = typeof project.image === 'string' 
              ? project.image 
              : project.image?.src || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070";

            return (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit live website for ${project.title}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="group block cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-[40px] border border-white/10 bg-[#0F0F0F] mb-8 flex items-center justify-center">
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" aria-hidden="true" />

                  <img 
                    src={imageSrc} 
                    alt={`Preview of ${project.title} - ${project.category} by Veda360`} 
                    className="w-full h-full object-contain p-4 md:p-8 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-in-out"
                  />
                  
                  {/* Hover Overlay with Icon */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 bg-amber-500 text-black rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                      <ExternalLink size={28} />
                    </div>
                  </div>

                  {/* Top Right Live Badge */}
                  <div className="absolute top-8 right-8">
                    <div className="w-10 h-10 rounded-full border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 transition-all duration-300">
                      <ExternalLink size={16} />
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex justify-between items-start px-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-amber-500">
                      <div className="p-2 bg-amber-500/10 rounded-lg">
                        {project.icon}
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                        {project.category}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-serif group-hover:text-amber-500 transition-colors duration-300">
                      {project.title}
                    </h2>
                    
                    <p className="text-gray-500 text-sm md:text-base max-w-sm leading-relaxed font-light line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-2 text-white/20 group-hover:text-amber-500 transition-colors" aria-hidden="true">
                    <motion.div 
                      animate={{ x: [0, 5, 0] }} 
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <ExternalLink size={20} />
                    </motion.div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}