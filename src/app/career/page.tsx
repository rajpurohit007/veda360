"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const journeySteps = [
  { title: "Say Hello", desc: "Send us your details and tell us why you love what you do." },
  { title: "Quick Chat", desc: "A friendly talk to see how we can help each other grow." },
  { title: "Show Your Skill", desc: "Help us solve a small puzzle so we can see how you work." },
  { title: "Meet the Team", desc: "Make sure you feel happy and comfortable with our family." },
  { title: "Welcome Home", desc: "Join VEDA360. Let’s start building something great together." }
];

export default function CareerPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
            Come and <span className="text-amber-500">Grow</span> With Us.
          </h1>
          <p className="text-gray-400 text-xl leading-relaxed">
            We are looking for kind, hard-working people who want to 
            build beautiful websites and learn new things every single day.
          </p>
        </motion.div>
      </section>

      {/* ================= JOURNEY TIMELINE ================= */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="max-w-2xl mb-20">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            How to <span className="text-amber-500">Join Us</span>
          </h2>
          <p className="text-gray-400">
            Joining our team is simple and honest. We want to make sure 
            everyone feels right at home from the very first day.
          </p>
        </div>

        {/* Timeline Desktop */}
        <div className="hidden md:block relative pb-20">
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/10" />
          <div className="grid grid-cols-5 gap-6">
            {journeySteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10"
              >
                <div className="w-12 h-12 rounded-full bg-black border border-amber-500 text-amber-500 flex items-center justify-center font-bold mb-8 mx-auto">
                  {i + 1}
                </div>
                <div className="bg-[#0f0f0f] border border-white/5 p-6 rounded-2xl text-center hover:border-amber-500/50 transition-colors">
                  <h3 className="font-serif text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Mobile */}
        <div className="md:hidden space-y-10 relative">
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-white/10" />
          {journeySteps.map((step, i) => (
            <div key={i} className="flex gap-6 items-start relative pl-2">
              <div className="w-8 h-8 rounded-full bg-black border border-amber-500 text-amber-500 flex items-center justify-center text-xs font-bold shrink-0 z-10">
                {i + 1}
              </div>
              <div className="bg-[#0f0f0f] border border-white/5 p-5 rounded-xl">
                <h3 className="font-serif text-lg mb-1">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className=" px-6 md:px-12 max-w-7xl mx-auto pb-20">
        <div className="bg-gradient-to-b from-amber-500/10 to-transparent border border-amber-500/20 rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl md:text-6xl mb-8">Ready to work <span className="text-amber-500 italic">Together?</span></h2>
            <p className="text-gray-400 text-lg mb-12">
              Send us a quick message on WhatsApp. We find it much nicer to have a real 
              conversation than to read a long, boring letter!
            </p>
            <motion.a
              href={`https://wa.me/919099337333?text=${encodeURIComponent("Hi Veda360, I'm interested in joining the team.")}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-amber-500 text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm"
            >
              Message us on WhatsApp
            </motion.a>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-500/5 blur-[120px] pointer-events-none" />
        </div>
      </section>

      <Footer />
    </main>
  );
}