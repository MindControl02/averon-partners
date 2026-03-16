"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Logo } from "./Logo";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Expertise", href: "#expertise" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "dark:bg-dark-900/80 bg-white/80 backdrop-blur-xl border-b dark:border-dark-600/50 border-gray-200/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="relative z-10">
            <Logo />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium dark:text-dark-200 text-gray-600 hover:text-accent-blue dark:hover:text-accent-blue-light transition-colors"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg dark:bg-dark-700 bg-gray-100 dark:hover:bg-dark-600 hover:bg-gray-200 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} className="text-dark-200" /> : <Moon size={16} className="text-gray-600" />}
            </button>

            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300"
            >
              Book a Call
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg dark:bg-dark-700 bg-gray-100"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} className="text-dark-200" /> : <Moon size={16} className="text-gray-600" />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg dark:text-dark-200 text-gray-600"
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
            className="md:hidden dark:bg-dark-800/95 bg-white/95 backdrop-blur-xl border-b dark:border-dark-600/50 border-gray-200/50"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium dark:text-dark-200 text-gray-600 hover:text-accent-blue transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-3 text-sm font-semibold text-white text-center rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
