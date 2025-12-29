"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code, Palette, Globe, BarChart, Settings } from 'lucide-react';
// Relative paths based on src/app/services/page.tsx
import Navbar from '../../components/Navbar'; 
import Footer from '../../components/Footer';

const productList = [
  {
    title: "Static Website",
    slug: "static-website",
    description: "Lightning-fast, secure, and SEO-optimized landing pages or portfolios built for speed and elegance.",
    icon: <Code size={32} aria-hidden="true" className="text-amber-500" />,
    features: ["Sub-second Loading", "Fully Responsive", "SEO Ready"]
  },
  {
    title: "Dynamic Website",
    slug: "dynamic-website",
    description: "Scalable web applications with real-time data, user authentication, and interactive dashboards.",
    icon: <Globe size={32} aria-hidden="true" className="text-amber-500" />,
    features: ["Custom CMS", "Database Integration", "User Accounts"]
  },
  {
    title: "App Development",
    slug: "app-development",
    description: "High-performance mobile applications for iOS and Android designed for a seamless user experience.",
    icon: <Settings size={32} aria-hidden="true" className="text-amber-500" />,
    features: ["Cross-Platform", "Push Notifications", "Cloud Storage"]
  },
  {
    title: "Graphic Design",
    slug: "graphic-design",
    description: "Compelling visual identities, brand guidelines, and high-fidelity UI/UX assets that define your brand.",
    icon: <Palette size={32} aria-hidden="true" className="text-amber-500" />,
    features: ["Logo Design", "UI/UX Mockups", "Brand Identity"]
  },
  {
    title: "Website Maintenance",
    slug: "maintenance",
    description: "Complete 24/7 support, including security patching, bug fixes, and performance optimization.",
    icon: <BarChart size={32} aria-hidden="true" className="text-amber-500" />,
    features: ["Security Monitoring", "Daily Backups", "Speed Audits"]
  }
];

export default function ServicesPage() {
  const whatsappNumber = "919099337333";

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white font-sans overflow-x-clip pt-24">
      <Navbar />

      <section className="px-6 md:px-12 py-20 max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-amber-500 font-bold">Solutions Portfolio</span>
          <h1 className="text-5xl md:text-8xl font-serif mt-6 leading-tight">
            Our Digital <br />
            <span className="italic text-amber-500">Services.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mt-8 leading-relaxed max-w-2xl">
            Veda360 delivers specialized digital assets. We transform standard requirements 
            into high-performance products that drive business value through <strong>custom software engineering</strong>.
          </p>
        </motion.div>
      </section>

      <section className="px-6 md:px-12 pb-32 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {productList.map((product, index) => {
            // Generate the dynamic WhatsApp URL
            const message = `Hello, I am interested in the ${product.title} service.`;
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            return (
              <motion.a
                key={index}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Inquire about our ${product.title} service on WhatsApp`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#111] border border-white/5 rounded-[40px] p-8 md:p-12 hover:border-amber-500/30 transition-all group flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center border border-white/10 mb-8 shadow-inner group-hover:border-amber-500/50 transition-colors">
                    {product.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif mb-4 group-hover:text-amber-500 transition-colors">
                    {product.title}
                  </h2>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {product.features.map((f, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] uppercase tracking-widest text-white/50">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-white group-hover:text-amber-500 transition-colors">
                  Inquire on WhatsApp <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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