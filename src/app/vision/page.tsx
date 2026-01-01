"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Compass, Sparkles, ShieldCheck, BarChart3, Globe2, Lightbulb } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const visionPoints = [
  {
    title: "Timeless Care",
    description: "We use age-old values like honesty and precision to build your website, ensuring your business has a foundation that lasts for years to come.",
    icon: <Sparkles className="text-amber-500" size={32} />
  },
  {
    title: "Modern Tools",
    description: "We use the latest and safest technology available today to make sure your website is fast and can easily handle more customers as you grow.",
    icon: <Target className="text-amber-500" size={32} />
  },
  {
    title: "All-Round Thinking",
    description: "We don't just build a page; we look at your whole business. From the first plan to the final design, we make sure everything works perfectly together.",
    icon: <Eye className="text-amber-500" size={32} />
  }
];

const pillars = [
  {
    icon: <ShieldCheck size={24} />,
    title: "Safe & Honest",
    text: "We protect your information with the best security, and we are always open and honest about how we build your project."
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Smart Decisions",
    text: "We don't guess. We look at real information to help you make the best choices for your business and your budget."
  },
  {
    icon: <Globe2 size={24} />,
    title: "Room to Grow",
    text: "Whether your customers are next door or across the world, we build systems that can grow as big as your dreams."
  },
  {
    icon: <Lightbulb size={24} />,
    title: "New Ideas",
    text: "We are always looking for better ways to do things. We stay ahead of the crowd so your business stays ahead too."
  }
];

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white font-sans overflow-x-clip pt-24">
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-20 max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="text-amber-500 text-[10px] uppercase tracking-[0.5em] font-bold">What Veda360 Stands For</span>
          <h1 className="text-5xl md:text-8xl font-serif mt-6 leading-tight">
            Helping You Grow <br />
            <span className="italic text-amber-500">In the Modern World.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mt-8 leading-relaxed max-w-3xl">
            Veda360 makes it easy for your business to succeed on the internet. 
            We take the confusing parts of technology and use them to build <strong>helpful tools</strong> 
            that help your business stay strong and grow over time.
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

      {/* Detailed Vision Content */}
      <section className="px-6 md:px-12 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-8 italic text-amber-500">
              The Idea of the Full Circle.
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed text-base md:text-lg">
              <p>
                In today&apos;s world, a website isn&apos;t just a page—it&apos;s a part of your life. At <strong>Veda360</strong>, we believe every piece should work together. Every button we design and every line we build is made to help you reach your goals and serve your customers.
              </p>
              <p>
                Our <strong>complete care</strong> approach ensures that your website is more than just a tool; it becomes the heart of your business. By mixing <em>tried-and-true values</em> with <em>the best modern building methods</em>, we create something that is both strong and beautiful.
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

      {/* Final Invitation */}
      <section className="px-6 md:px-12 py-32 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif mb-6 italic">Build Your Success.</h2>
          <p className="text-gray-400 mb-12">
            Whether you need help getting found on Google, building a custom website, 
            or giving your business a new look, Veda360 is here to help you every step 
            of the way. Come and see what we can build for you.
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