"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Required for active state detection

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current URL path

  // Helper function to determine if a link is active
  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/product" },
    { name: "Vision", href: "/vision" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
     { name: "careers",href:"/career"},

  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center justify-between px-6 md:px-12 py-5 w-full max-w-screen-2xl mx-auto">
          {/* Logo */}
          <Link href="/">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold tracking-tighter font-serif flex items-center gap-2 cursor-pointer"
            >
              VEDA<span className="text-amber-500">360</span>
            </motion.div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center space-x-10 text-[10px] uppercase tracking-[0.2em] font-medium">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <li
                  className={`transition-colors cursor-pointer hover:text-amber-500 ${
                    isActive(link.href) ? "text-amber-500" : "text-gray-400"
                  }`}
                >
                  {link.name}
                </li>
              </Link>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            <motion.a
              href={`https://wa.me/919099337333?text=${encodeURIComponent(
                "Hello Veda360, I would like to get started with a project."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-6 py-2.5 bg-amber-500 text-black rounded-full text-[10px] font-bold tracking-widest uppercase transition-shadow shadow-[0_0_20px_rgba(212,175,55,0.2)] cursor-pointer"
            >
              Get Started
            </motion.a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[90] bg-[#0A0A0A] flex flex-col p-12 md:hidden"
          >
            <div className="flex flex-col space-y-8 mt-20 text-2xl font-serif italic">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  <p
                    className={
                      isActive(link.href) ? "text-amber-500" : "text-white"
                    }
                  >
                    {link.name}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-4">
              <a
                href={`https://wa.me/919099337333?text=${encodeURIComponent(
                  "Hello Veda360, I would like to get started with a project."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <button className="w-full py-4 bg-amber-500 text-black rounded-full uppercase tracking-widest text-xs font-bold">
                  Get Started
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}