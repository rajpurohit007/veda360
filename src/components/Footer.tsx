"use client";

import React from 'react';
import { Twitter, Linkedin, Github, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-[#0A0A0A] border-t border-white/5 pt-20 pb-10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
        
        {/* Brand Column */}
        <div className="col-span-2 lg:col-span-2">
          <Link href="/">
            <div className="text-2xl font-bold font-serif mb-6 cursor-pointer">
              VEDA<span className="text-amber-500 font-sans">360</span>
            </div>
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-light">
            Architecting the next cycle of global digital infrastructure. 
            <strong> Ancient wisdom meets future technology</strong> to build 
            high-performance digital solutions in <strong>Surat, India</strong>.
          </p>
        </div>

        {/* Solutions Column - Linked to /services */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-white font-bold mb-6">Solutions</h4>
          <ul className="text-gray-500 space-y-4 text-sm">
            <li>
              <Link href="/services" className="hover:text-amber-500 transition-colors">Static Websites</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-amber-500 transition-colors">Dynamic Web Apps</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-amber-500 transition-colors">App Development</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-amber-500 transition-colors">Graphic Design</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-amber-500 transition-colors">Website Maintenance</Link>
            </li>
          </ul>
        </div>

        {/* Company Column - Same as Navbar */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-white font-bold mb-6">Company</h4>
          <ul className="text-gray-500 space-y-4 text-sm">
            <li>
              <Link href="/" className="hover:text-amber-500 transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-amber-500 transition-colors">Services</Link>
            </li>
            <li>
              <Link href="/product" className="hover:text-amber-500 transition-colors">Products</Link>
            </li>
            <li>
              <Link href="/vision" className="hover:text-amber-500 transition-colors">Vision</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-amber-500 transition-colors">About</Link>
            </li>
          </ul>
        </div>

        {/* Connect Column */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-white font-bold mb-6">Connect</h4>
          <ul className="text-gray-500 space-y-4 text-sm">
            <li>
              <Link href="/contact" className="hover:text-amber-500 transition-colors">Contact Us</Link>
            </li>
            <li>
              <a 
                href="https://wa.me/919099337333" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-amber-500 transition-colors flex items-center gap-2"
              >
                WhatsApp Support
              </a>
            </li>
            {/* <li>
              <Link href="/resources" className="hover:text-amber-500 transition-colors">Resources</Link>
            </li> */}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] text-gray-600 uppercase tracking-widest font-medium">
          © {currentYear} VEDA360 ARCHIVES. ALL RIGHTS RESERVED.
        </div>
        
        <div className="flex gap-6 text-gray-500">
          {/* <a href="#" aria-label="LinkedIn" className="hover:text-amber-500 transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-amber-500 transition-colors">
            <Twitter size={18} />
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-amber-500 transition-colors">
            <Github size={18} />
          </a> */}
          <a href="https://wa.me/919099337333" aria-label="WhatsApp" className="hover:text-amber-500 transition-colors">
            <MessageSquare size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}