"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { BookingModal } from "./BookingModal";

export function Hero() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-dark-900/85" />

      {/* Gradient accent blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-blue/[0.07] blur-[120px] animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-purple/[0.06] blur-[120px] animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-dark-700/80 text-accent-blue-light border border-dark-500/50">
            <Sparkles size={14} />
            European B2B Growth Experts
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
        >
          Helping SaaS Companies
          <br />
          <span className="gradient-text">Scale in Europe</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-dark-200 mb-10 leading-relaxed"
        >
          Averon Partners accelerates B2B client acquisition and market expansion
          for technology companies entering and growing across European markets.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => setBookingOpen(true)}
            className="group px-8 py-4 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple hover:shadow-xl hover:shadow-accent-blue/25 transition-all duration-300 flex items-center gap-2"
          >
            Book a Call
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <a
            href="#about"
            className="px-8 py-4 text-sm font-semibold text-dark-200 rounded-xl bg-dark-700/60 border border-dark-500/50 hover:bg-dark-600/60 hover:border-accent-blue/30 backdrop-blur-sm transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 flex items-center justify-center gap-8 sm:gap-16 flex-wrap"
        >
          {["SaaS", "AI & ML", "Automation", "CRM", "FinTech"].map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium tracking-wider uppercase text-dark-400"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-dark-400 flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-dark-400" />
        </motion.div>
      </div>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>
  );
}
