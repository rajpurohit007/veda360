"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Users2, Rocket, CheckCircle2, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const stats = [
  { label: "Happy Projects", value: "50+" },
  { label: "Smiling Clients", value: "100%" },
  { label: "Years of Helping", value: "5+" },
  { label: "Friendly Experts", value: "12+" },
];

const values = [
  {
    icon: <Code2 className="text-amber-500" aria-hidden="true" />,
    title: "Built to Last",
    description: "We don't just build for today. We create strong, reliable systems that keep working perfectly as your business grows older and bigger."
  },
  {
    icon: <Cpu className="text-amber-500" aria-hidden="true" />,
    title: "Lightning Fast",
    description: "Nobody likes to wait. We make sure your website opens in a blink of an eye, so your customers never get frustrated."
  },
  {
    icon: <Users2 className="text-amber-500" aria-hidden="true" />,
    title: "Easy to Use",
    description: "We believe technology should be simple for everyone. We design pages that are easy to read and even easier to navigate."
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white font-sans overflow-x-clip pt-24">
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-20 max-w-screen-2xl mx-auto" aria-labelledby="about-hero-heading">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-amber-500 font-bold">The Veda360 Story</span>
          <h1 id="about-hero-heading" className="text-5xl md:text-8xl font-serif mt-6 leading-tight">
            Building your <br />
            <span className="italic text-amber-500">Digital Home.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mt-8 leading-relaxed max-w-3xl">
            Veda360 is a friendly team of experts based in <strong>Surat</strong>. 
            We help businesses get online by building <strong>websites</strong> and <strong>phone apps</strong> 
            that actually work. Our goal is to take the confusing part of technology and make it 
            simple and helpful for you.
          </p>
        </motion.div>
      </section>

      {/* Stats Grid */}
      <section className="px-6 md:px-12 py-12 max-w-screen-2xl mx-auto" aria-label="Our Success">
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

      {/* Detailed Mission */}
      <section className="px-6 md:px-12 py-32 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-8 italic">Hard Work with <br/>a Kind Heart.</h2>
            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
              <p>
                We started with a simple idea: that everyone deserves a great website. 
                Over the years, Veda360 has grown into a <strong>trusted partner</strong> for businesses across India. 
                We use the best tools available today to make sure your project is safe and successful.
              </p>
              <p>
                Our team is made of designers and builders who care deeply about <strong>quality</strong>. 
                Whether you are just starting your first small business or running a large company, 
                we give you a clear map to reach your goals online.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Trusted Local Experts', 'Always Fast', 'Safe & Secure', 'Helpful Support'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-amber-500" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual section */}
          <div className="relative aspect-square" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent rounded-[60px] blur-3xl opacity-30" />
            <div className="relative h-full w-full bg-[#111] border border-white/10 rounded-[60px] flex items-center justify-center p-12 overflow-hidden">
                <Rocket size={120} className="text-amber-500/20 absolute -top-10 -right-10" />
                <Award size={200} className="text-amber-500 opacity-10" />
                <div className="text-center z-10">
                   <p className="text-6xl font-serif italic text-white/20">VEDA360</p>
                   <p className="text-amber-500 tracking-[0.5em] text-[10px] uppercase font-bold mt-4">Built with Trust</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promises */}
      <section className="px-6 md:px-12 py-32 bg-white/[0.02] border-y border-white/5" aria-labelledby="values-heading">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-20">
            <h2 id="values-heading" className="text-4xl md:text-6xl font-serif mb-6">Our Promises.</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">These are the rules we live by to make sure you always get the very best from us.</p>
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

      {/* Final Invitation */}
      <section className="px-6 md:px-12 py-32 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-serif mb-8 italic">Come and Talk to Us.</h2>
        <p className="text-gray-400 mb-12">
          Looking for a <strong>partner you can trust</strong>? Our team is ready to help you grow your 
          business with a website that is <strong>easy to use</strong> and <strong>built to last</strong>.
        </p>
        <a 
          href="https://wa.me/919099337333" 
          aria-label="Message us on WhatsApp"
          className="px-12 py-5 bg-amber-500 text-black rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all inline-block"
        >
          Send a Message
        </a>
      </section>

      <Footer />
    </main>
  );
}