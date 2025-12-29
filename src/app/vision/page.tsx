"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Compass, Sparkles, ShieldCheck, BarChart3, Globe2, Lightbulb } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const visionPoints = [
  {
    title: "Ancient Wisdom",
    description: "We integrate timeless principles of balance, geometry, and precision into modern digital architecture, ensuring your business has a foundation that lasts.",
    icon: <Sparkles className="text-amber-500" size={32} />
  },
  {
    title: "Future Tech",
    description: "Utilizing Next.js 15, AI-driven analytics, and cloud-native solutions to build scalable infrastructure that evolves with the technological landscape.",
    icon: <Target className="text-amber-500" size={32} />
  },
  {
    title: "360° Business Intelligence",
    description: "A holistic approach where strategy, design, and engineering form a perfect loop, providing a full circle of digital transformation services.",
    icon: <Eye className="text-amber-500" size={32} />
  }
];

const pillars = [
  {
    icon: <ShieldCheck size={24} />,
    title: "Integrity & Security",
    text: "Protecting your digital assets with enterprise-grade security while maintaining transparency in every line of code we write."
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Data-Driven Strategy",
    text: "Moving beyond intuition. We use deep data analytics to inform design decisions and marketing strategies that maximize ROI."
  },
  {
    icon: <Globe2 size={24} />,
    title: "Global Scalability",
    text: "Building systems designed for the global market. Our infrastructure supports multi-region deployment and local optimization."
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Innovation First",
    text: "We don't follow trends; we set them. Our R&D focuses on the next generation of web technologies to keep you ahead."
  }
];

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white font-sans overflow-x-clip pt-24">
      <Navbar />

      {/* Hero Section - Optimized for H1 SEO */}
      <section className="px-6 md:px-12 py-20 max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-amber-500 font-bold">The Veda360 Manifesto</span>
          <h1 className="text-5xl md:text-8xl font-serif mt-6 leading-tight">
            Digital Transformation <br />
            <span className="italic text-amber-500">for the Modern Era.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mt-8 leading-relaxed max-w-3xl">
            Veda360 bridges the gap between high-speed technological evolution 
            and the fundamental human need for clarity and purpose in business. 
            We provide comprehensive <strong>Business Intelligence</strong> and 
            <strong>Full-stack Solutions</strong> designed to drive sustainable growth.
          </p>
        </motion.div>
      </section>

      {/* Core Philosophies Grid */}
      <section className="px-6 md:px-12 pb-20 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-10 rounded-[40px] bg-[#111] border border-white/5 hover:border-amber-500/20 transition-all group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-500">{point.icon}</div>
              <h2 className="text-2xl font-serif mb-4">{point.title}</h2>
              <p className="text-gray-500 leading-relaxed text-sm">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detailed Vision Content - SEO Optimized Paragraphs */}
      <section className="px-6 md:px-12 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-8 italic text-amber-500">
              The Philosophy of the Full Circle.
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed text-base md:text-lg">
              <p>
                In the digital age, a website or app cannot exist in a vacuum. At <strong>Veda360</strong>, we believe in a unified ecosystem. Every pixel we design and every line of code we ship is informed by your business goals, target audience, and long-term scalability.
              </p>
              <p>
                Our <strong>holistic business intelligence</strong> approach ensures that your digital infrastructure is not just a tool, but a core engine for your enterprise. By merging <em>ancient principles of order</em> with <em>modern engineering excellence</em>, we create digital assets that are as robust as they are beautiful.
              </p>
            </div>
          </motion.div>
          
          {/* Pillar Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 border border-white/10 rounded-2xl bg-black/40 backdrop-blur-sm"
              >
                <div className="text-amber-500 mb-4">{pillar.icon}</div>
                <h3 className="text-white font-bold mb-2 uppercase text-[10px] tracking-widest">{pillar.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final SEO Text & CTA */}
      <section className="px-6 md:px-12 py-32 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif mb-6 italic">Build Your Legacy.</h2>
          <p className="text-gray-400 mb-12">
            Whether you are looking for advanced <strong>SEO strategies</strong>, custom 
            <strong>Next.js development</strong>, or high-end <strong>Graphic Identity</strong>, 
            Veda360 is your 360-degree partner in innovation. 
            Join us in defining the next era of the web.
          </p>
          <a target='_blank'
            rel="noopener noreferrer"
            href="https://wa.me/919099337333" 
            className="px-12 py-5 bg-amber-500 text-black rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all inline-block"
          >
            Start Your Journey
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}