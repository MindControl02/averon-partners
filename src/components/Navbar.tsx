"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

const navLinks = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 600);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? "#EEF1F5" : "rgba(10,13,22,0.5)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.05)" : "none",
        transition: "background 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="relative z-10">
            <Logo scrolled={scrolled} />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-300"
                style={{ color: scrolled ? "#4a4c64" : "rgba(255,255,255,0.75)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = scrolled ? "#3b6ef5" : "#ffffff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = scrolled ? "#4a4c64" : "rgba(255,255,255,0.75)")}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="group px-5 py-2.5 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-accent-blue to-accent-cyan hover:shadow-lg hover:shadow-accent-blue/25 hover:scale-[1.02] transition-all duration-300 inline-flex items-center gap-1.5"
            >
              Get Started
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg transition-colors"
              style={{ color: scrolled ? "#4a4c64" : "rgba(255,255,255,0.8)" }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: scrolled ? "#EEF1F5" : "rgba(10,13,22,0.9)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium py-2"
                  style={{ color: scrolled ? "#4a4c64" : "rgba(255,255,255,0.8)" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-3 text-sm font-semibold text-white text-center rounded-lg bg-gradient-to-r from-accent-blue to-accent-cyan"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
