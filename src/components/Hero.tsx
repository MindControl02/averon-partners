"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-40 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85')",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,13,22,0.88) 0%, rgba(10,13,22,0.65) 40%, rgba(10,13,22,0.45) 70%, rgba(10,13,22,0.3) 85%, rgba(255,255,255,1) 100%)",
        }}
      />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-accent-blue/[0.07] blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-cyan/[0.05] blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/10 text-white/80 backdrop-blur-sm border border-white/10">
              B2B Client Acquisition for IT Companies
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
          >
            We Find
            <span className="gradient-text"> B2B Clients </span>
            for Your IT Product
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-white/70 leading-relaxed mb-10"
          >
            Averon Partners identifies decision-makers, builds outreach
            pipelines, and generates real business opportunities for
            technology companies selling B2B products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <a
              href="#contact"
              className="group px-8 py-4 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-accent-blue to-accent-cyan hover:shadow-xl hover:shadow-accent-blue/30 hover:scale-[1.02] hover:brightness-110 transition-all duration-300 flex items-center gap-2"
            >
              Get Started
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#what-we-do"
              className="px-8 py-4 text-sm font-semibold text-white/80 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/15 hover:border-white/25 transition-all duration-300"
            >
              How It Works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex items-center justify-center gap-6 flex-wrap text-sm text-white/50"
          >
            {["No upfront fees", "Results-focused", "Technology companies only"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-emerald-400" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
