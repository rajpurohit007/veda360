"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Users2, Rocket, CheckCircle2, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const stats = [
  { label: "Projects Delivered", value: "50+" },
  { label: "Client Satisfaction", value: "100%" },
  { label: "Years Experience", value: "5+" },
  { label: "Tech Experts", value: "12+" },
];

const values = [
  {
    icon: <Code2 className="text-amber-500" aria-hidden="true" />,
    title: "Clean Architecture",
    description: "We don't just write code; we architect systems that are scalable, maintainable, and built on the latest Next.js and React standards."
  },
  {
    icon: <Cpu className="text-amber-500" aria-hidden="true" />,
    title: "Performance First",
    description: "In the digital age, speed is a feature. Every asset we produce is optimized for sub-second load times and high Core Web Vitals."
  },
  {
    icon: <Users2 className="text-amber-500" aria-hidden="true" />,
    title: "Human-Centric UX",
    description: "Technology should serve people. Our UI/UX design process focuses on intuitive navigation and meaningful user engagement."
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white font-sans overflow-x-clip pt-24">
      <Navbar />

      {/* Hero Section - Optimized for H1 SEO */}
      <section className="px-6 md:px-12 py-20 max-w-screen-2xl mx-auto" aria-labelledby="about-hero-heading">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-amber-500 font-bold">The Veda360 Story</span>
          <h1 id="about-hero-heading" className="text-5xl md:text-8xl font-serif mt-6 leading-tight">
            Architecting the <br />
            <span className="italic text-amber-500">Digital Future.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mt-8 leading-relaxed max-w-3xl">
            Veda360 is a premier <strong>Digital Solutions Agency</strong> based in <strong>Surat, Gujarat</strong>. 
            We specialize in high-end <strong>Web Development</strong>, <strong>Mobile Applications</strong>, 
            and <strong>Brand Identity Design</strong>. Our mission is to bridge the gap between 
            complex technology and seamless user experiences through <strong>custom software engineering</strong>.
          </p>
        </motion.div>
      </section>

      {/* Stats Grid */}
      <section className="px-6 md:px-12 py-12 max-w-screen-2xl mx-auto" aria-label="Company Statistics">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 border border-white/5 bg-white/[0.02] rounded-3xl text-center"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-amber-500 mb-2">{stat.value}</h2>
              <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detailed Mission - SEO Content */}
      <section className="px-6 md:px-12 py-32 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-8 italic">Driven by Excellence, <br/>Guided by Intelligence.</h2>
            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
              <p>
                Founded on the belief that <strong>Full-Cycle Development</strong> requires a 360-degree perspective, Veda360 has grown from a specialized design studio into a full-scale <strong>digital powerhouse in India</strong>. We leverage <strong>Next.js 15</strong>, <strong>Tailwind CSS</strong>, and <strong>Cloud-native architectures</strong> to deliver results that matter.
              </p>
              <p>
                Our team consists of designers, engineers, and strategists who are obsessed with <strong>Quality Assurance</strong> and <strong>Scalability</strong>. Whether you are a startup looking for your first <strong>MVP development</strong> or an enterprise needing a <strong>digital overhaul</strong>, we provide the technical roadmap to success.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Certified Next.js Experts', 'Performance Optimized', 'Secure Infrastructure', '24/7 Support'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-amber-500" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Abstract Image Placeholder / Visual */}
          <div className="relative aspect-square" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent rounded-[60px] blur-3xl opacity-30" />
            <div className="relative h-full w-full bg-[#111] border border-white/10 rounded-[60px] flex items-center justify-center p-12 overflow-hidden">
                <Rocket size={120} className="text-amber-500/20 absolute -top-10 -right-10" />
                <Award size={200} className="text-amber-500 opacity-10" />
                <div className="text-center z-10">
                   <p className="text-6xl font-serif italic text-white/20">VEDA360</p>
                   <p className="text-amber-500 tracking-[0.5em] text-[10px] uppercase font-bold mt-4">Legacy in the Making</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 md:px-12 py-32 bg-white/[0.02] border-y border-white/5" aria-labelledby="values-heading">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-20">
            <h2 id="values-heading" className="text-4xl md:text-6xl font-serif mb-6">Our Values.</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">The pillars that define our work ethic and the quality of our output as a <strong>leading web agency</strong>.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-12 rounded-[40px] border border-white/5 bg-black hover:border-amber-500/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-serif mb-4">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Optimized Footer CTA */}
      <section className="px-6 md:px-12 py-32 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-serif mb-8 italic">Join the Veda360 Revolution.</h2>
        <p className="text-gray-400 mb-12">
          Looking for a <strong>Web Development Partner in Surat</strong>? Our team is ready to transform your 
          business through <strong>intelligent design</strong> and <strong>high-performance engineering</strong>.
        </p>
        <a 
          href="https://wa.me/919099337333" 
          aria-label="Contact Veda360 on WhatsApp to start your project"
          className="px-12 py-5 bg-amber-500 text-black rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all inline-block"
        >
          Let's Talk Project
        </a>
      </section>

      <Footer />
    </main>
  );
}