"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Veda360 didn't just build a website; they engineered a digital experience that tripled our conversion rate within three months.",
    author: "Uday Joshi",
    position: "CEO, Siya Laser Tech",
    rating: 5
  },
  {
    quote: "Their approach to SEO and dynamic development is light-years ahead. Our platform performance is now a competitive advantage.",
    author: "Vimal Majithiya",
    position: "Founder, PadhaiOn",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="bg-[#0A0A0A] py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] text-amber-500 font-bold"
          >
            Voice of Success
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-serif mt-4">
            Partners in <span className="text-amber-500 italic">Progress.</span>
          </h2>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#111] border border-white/5 p-10 rounded-[40px] relative group hover:border-amber-500/30 transition-all duration-500"
            >
              <Quote className="text-amber-500/20 absolute top-8 right-8 group-hover:text-amber-500/40 transition-colors" size={40} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={12} fill="#F59E0B" className="text-amber-500" />
                ))}
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 italic font-light">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-4">
    
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest">{item.author}</h4>
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider mt-1">{item.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </section>
  );
}