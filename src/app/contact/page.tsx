"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const contactMethods = [
  {
    icon: <MessageSquare size={24} />,
    title: "Chat on WhatsApp",
    detail: "+91 90993 37333",
    link: "https://wa.me/919099337333?text=Hello%20Veda360,%20I'd%20like%20to%20discuss%20a%20project."
  },
  {
    icon: <Mail size={24} />,
    title: "Email Us",
    detail: "info@veda360.org",
    link: "mailto:info@veda360.org"
  },
  {
    icon: <MapPin size={24} />,
    title: "Visit Our Studio",
    detail: "Surat, Gujarat, India",
    link: "#"
  }
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white font-sans overflow-x-clip pt-24">
      <Navbar />

      <section className="px-6 md:px-12 py-20 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-amber-500 font-bold">Say Hello</span>
            <h1 className="text-5xl md:text-8xl font-serif mt-6 leading-tight">
              Let's Start a <br />
              <span className="italic text-amber-500">Conversation.</span>
            </h1>
            <p className="text-gray-400 text-lg mt-8 leading-relaxed max-w-md">
              Ready to grow your <strong>business online</strong>? Pick whichever way is easiest for you to reach out. We promise to <strong>answer your questions</strong> within 24 hours.
            </p>

            <div className="mt-12 space-y-8">
              {contactMethods.map((method, i) => (
                <a 
                  key={i} 
                  href={method.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={method.title}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-500">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">{method.title}</h3>
                    <p className="text-xl font-serif group-hover:text-amber-500 transition-colors">{method.detail}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Instant Inquiry Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#111] border border-white/10 rounded-[40px] p-8 md:p-12 flex flex-col justify-center items-center text-center"
          >
            <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mb-8">
              <Phone className="text-amber-500" size={32} />
            </div>
            <h2 className="text-3xl font-serif mb-6">Want to talk to someone <strong>right now</strong>?</h2>
            <p className="text-gray-500 mb-10 max-w-xs leading-relaxed">
              No need to fill out long forms. Just click the button below to start a <strong>WhatsApp chat</strong> with us in Surat.
            </p>
            <a 
              href="https://wa.me/919099337333"
              aria-label="Start WhatsApp Chat with Veda360"
              className="w-full py-5 bg-amber-500 text-black rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.1)]"
            >
              Click Here to Chat
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}