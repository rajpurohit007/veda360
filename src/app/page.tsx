"use client";

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Aperture, ArrowRight, ArrowUpRight, Play, Sparkles, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CapabilityHub from '../components/CapabilityHub';
import ClientTicker from '@/src/components/ClientTicker';
import Testimonials from '@/src/components/Testimonials';
import Link from 'next/link';
import TechStack from '../components/TechStack';
const OrbitalCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let rotation = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        // Set internal resolution higher for Retina displays
        const dpr = window.devicePixelRatio || 1;
        canvas.width = parent.clientWidth * dpr;
        canvas.height = parent.clientHeight * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${parent.clientWidth}px`;
        canvas.style.height = `${parent.clientHeight}px`;
      }
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      const centerX = w / 2;
      const centerY = h / 2;
      
      rotation += 0.005; // Base rotation speed
      const time = Date.now() / 1000;

      ctx.clearRect(0, 0, w, h);

      // 1. HEARTBEAT EFFECT (The blurred glow behind everything)
      const pulse = 1 + Math.sin(time * 2) * 0.1; // Pulse between 0.9 and 1.1
      const heartbeatGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 150 * pulse);
      heartbeatGlow.addColorStop(0, 'rgba(212, 175, 55, 0.25)');
      heartbeatGlow.addColorStop(1, 'rgba(212, 175, 55, 0)');
      
      ctx.fillStyle = heartbeatGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 200 * pulse, 0, Math.PI * 2);
      ctx.fill();

      // 2. OUTER ORBIT (Amber line)
      ctx.beginPath();
      ctx.arc(centerX, centerY, 250, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.1)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Small dot on Outer Orbit
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.arc(250, 0, 2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(212, 175, 55, 0.6)';
      ctx.shadowBlur = 5;
      ctx.shadowColor = '#D4AF37';
      ctx.fill();
      ctx.restore();

      // 3. MIDDLE ORBIT (White line)
      ctx.beginPath();
      ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.stroke();

      // Dot on Middle Orbit (Reverse rotation)
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(-rotation * 1.5);
      ctx.beginPath();
      ctx.arc(200, 0, 3, 0, Math.PI * 2);
      ctx.strokeStyle = '#D4AF37';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      // 4. INNER ORBIT (White line)
      ctx.beginPath();
      ctx.arc(centerX, centerY, 150, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.stroke();

      // 5. FLOATING DATA POINTS (Sinusoidal movement)
      for (let i = 0; i < 3; i++) {
        const floatY = Math.sin(time + i) * 10;
        const posX = centerX - 80 + (i * 50);
        const posY = centerY - 100 + (i * 60) + floatY;
        
        ctx.beginPath();
        ctx.arc(posX, posY, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.2 + Math.sin(time + i) * 0.2})`;
        ctx.fill();
      }

      // 6. CENTRAL CORE (The Sun)
      const coreGradient = ctx.createRadialGradient(centerX - 10, centerY - 10, 5, centerX, centerY, 45);
      coreGradient.addColorStop(0, '#fcd34d'); // amber-300
      coreGradient.addColorStop(0.5, '#d97706'); // amber-600
      coreGradient.addColorStop(1, '#92400e'); // amber-800
      
      ctx.shadowBlur = 30;
      ctx.shadowColor = 'rgba(212, 175, 55, 0.4)';
      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0; // Reset shadow for next frame

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

const VisionTeaser = () => {
  const pillars = [
    {
      title: "Ancient Wisdom",
      subtitle: "Timeless principles",
      icon: <Sparkles size={20} />,
    },
    {
      title: "Future Tech",
      subtitle: "AI, Next.js 15, Cloud",
      icon: <Zap size={20} />,
    },
    {
      title: "360° Approach",
      subtitle: "Strategy to Scale",
      icon: <Aperture size={20} />,
    },
  ];

  return (
    <section className="relative py-32 px-6 md:px-12 overflow-hidden bg-[#0A0A0A]">
      {/* Immersive Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 mb-6"
          >
            <span className="text-amber-500 text-[10px] uppercase tracking-[0.4em] font-bold">Our Philosophy</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight mb-8"
          >
            Beyond Code: <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
              A Digital Renaissance.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl text-gray-400 text-lg md:text-xl leading-relaxed font-light"
          >
            We architect digital ecosystems where cutting-edge technology and human-centric design converge, 
            creating a harmonious 360° feedback loop that drives sustainable value and growth.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-[32px] border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-amber-500/20 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:border-amber-500/50 group-hover:text-amber-500 transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-serif text-white mb-2">{pillar.title}</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest">{pillar.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link href="/vision">
            <button className="group relative px-12 py-5 rounded-xl border border-amber-500/40 text-amber-500 font-bold overflow-hidden transition-all hover:text-black">
              <div className="absolute inset-0 w-0 bg-amber-500 transition-all duration-500 ease-out group-hover:w-full" />
              <span className="relative flex items-center gap-3 text-xs uppercase tracking-[0.2em]">
                Explore our full vision <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const HomeContactTeaser = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">
            Have a Vision? <br />
            <span className="text-amber-500 italic">Let’s Make it Digital.</span>
          </h2>
          <p className="text-gray-500 mt-6 text-lg">
            Join the elite circle of businesses transforming through Veda360 intelligence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 w-full md:w-auto"
        >
          <Link href="/contact" className="flex-1">
            <button className="w-full px-12 py-5 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs hover:bg-amber-500 transition-all">
              Contact Us
            </button>
          </Link>
          <a 
            href="https://wa.me/919099337333" 
            className="flex-1"
          >
            <button className="w-full px-12 py-5 border border-white/20 rounded-full font-bold uppercase tracking-widest text-xs hover:border-amber-500 hover:text-amber-500 transition-all flex items-center justify-center gap-2">
              WhatsApp <ArrowUpRight size={16} />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};


export default function VedaHome() {
  return (
    /* Changed to pt-24 so the content starts below your new fixed Navbar */
    <main className="min-h-screen w-full bg-[#0A0A0A] text-white relative flex flex-col font-sans overflow-x-clip pt-10 md:pt-0">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[100px]" />
      </div>

      {/* Extracted Header Component */}
      <Navbar />

      <div className="flex-1 flex flex-col md:flex-row items-center max-w-screen-2xl mx-auto px-6 md:px-12 w-full relative z-10 pb-20 md:pb-0">
        
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-8 z-20 mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-[90px] xl:text-[110px] font-serif leading-[1.1] md:leading-[0.9] tracking-tighter">
              The Future <br />
              <span className="italic text-amber-500">In Full Circle.</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-gray-400 text-lg md:text-xl max-w-md mx-auto md:mx-0 leading-relaxed"
          >
            Veda360 bridges the gap between ancient wisdom and future tech. 
            Digital infrastructure evolved for the modern era.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 pt-4 items-center justify-center md:justify-start"
          >
           <Link href="/product" className="w-full sm:w-auto">
  <button className="group bg-amber-500 text-black px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-white transition-all w-full justify-center">
    Explore Projects 
    <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
  </button>
</Link>
          </motion.div>
        </div>

        {/* RIGHT SECTION: The High-Performance Canvas Container */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative mt-20 md:mt-0 h-[400px] md:h-[600px]">
           <OrbitalCanvas />
        </div>
      </div>
      <ClientTicker />
      <VisionTeaser />
      <TechStack />
      {/* Extracted CapabilityHub Component */}
      <CapabilityHub />
      <Testimonials />
      <HomeContactTeaser />
      {/* Extracted Footer Component */}
      <Footer />
    </main>
  );
}