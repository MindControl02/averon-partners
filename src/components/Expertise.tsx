"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Brain, Cpu, BarChart3, Shield, Zap, Globe, MapPin } from "lucide-react";

const industries = [
  { icon: Monitor, label: "SaaS Platforms" },
  { icon: Brain, label: "AI & Machine Learning" },
  { icon: Cpu, label: "Automation Tools" },
  { icon: BarChart3, label: "CRM & Analytics" },
  { icon: Shield, label: "Cybersecurity" },
  { icon: Zap, label: "FinTech" },
];

const stats = [
  { value: "100+", label: "Deals Closed" },
  { value: "4+", label: "Years Experience" },
  { value: "20+", label: "Technology Companies Supported" },
  { value: "10+", label: "Industries Served" },
];

const expertise = [
  {
    title: "Deep Market Knowledge",
    description:
      "We work with companies expanding remotely across Europe and the United States, navigating diverse business cultures, regulations, and buyer behaviors.",
    extra:
      "For companies operating in Poland, we also support offline market development and direct business partnerships across the country.",
  },
  {
    title: "Technology-First Approach",
    description:
      "We understand the SaaS and technology landscape, speaking your language and positioning your product for enterprise buyers on both sides of the Atlantic.",
  },
  {
    title: "End-to-End Deal Management",
    description:
      "From initial outreach to contract negotiation and closing, we manage the entire sales cycle with precision and expertise.",
  },
];

export function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-dark-800/50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-blue-light mb-4 block">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Built for
            <span className="gradient-text"> Technology Companies</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-dark-300 leading-relaxed">
            We work exclusively with technology and SaaS companies, bringing focused
            expertise to every engagement.
          </p>
        </motion.div>

        {/* Stats — 4 cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-dark-700/20 border border-dark-600/30"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-dark-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Market note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 space-y-3"
        >
          <div className="flex items-center justify-center gap-3 text-center">
            <Globe size={18} className="text-accent-blue flex-shrink-0" />
            <p className="text-sm md:text-base text-dark-200">
              We work with companies expanding remotely across{" "}
              <strong className="text-white">Europe</strong> and the{" "}
              <strong className="text-white">United States</strong>.
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 text-center">
            <MapPin size={18} className="text-accent-purple flex-shrink-0" />
            <p className="text-sm md:text-base text-dark-200">
              For companies operating in Poland, we also support{" "}
              <strong className="text-white">offline market development and direct
              business partnerships</strong> across the country.
            </p>
          </div>
        </motion.div>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mb-16"
        >
          <h3 className="text-center text-sm font-semibold tracking-wider uppercase text-dark-400 mb-8">
            Industries We Serve
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 + 0.45 }}
                className="flex flex-col items-center gap-3 p-5 rounded-xl bg-dark-700/30 border border-dark-600/20 hover:border-accent-blue/30 transition-all duration-300"
              >
                <industry.icon size={28} className="text-dark-200" />
                <span className="text-xs font-medium text-dark-300 text-center">
                  {industry.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.55 }}
              className="p-6 rounded-2xl bg-dark-700/20 border border-dark-600/30"
            >
              <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-accent-blue to-accent-purple mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-dark-300 leading-relaxed">{item.description}</p>
              {item.extra && (
                <p className="text-sm text-dark-300 leading-relaxed mt-3">
                  {item.extra}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
