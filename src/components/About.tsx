"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Handshake, TrendingUp, Globe } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "B2B Client Acquisition",
    description:
      "We identify, engage, and convert high-value B2B prospects into long-term clients for technology companies.",
  },
  {
    icon: Globe,
    title: "European & US Expansion",
    description:
      "Deep understanding of international business culture, regulations, and market dynamics to accelerate your growth.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description:
      "Building meaningful business relationships through expert negotiations and deal-closing capabilities.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    description:
      "Proven frameworks that deliver measurable results in pipeline development and revenue generation.",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-dark-800/50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-blue-light mb-4 block">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Your Growth Partner in
            <span className="gradient-text"> Europe &amp; the US</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-dark-300 leading-relaxed">
            Averon Partners is a business development firm specializing in helping SaaS, AI,
            automation, and technology companies acquire B2B clients and expand across European
            and US markets. We combine deep industry expertise with proven sales methodologies
            to deliver results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              className="group p-6 rounded-2xl bg-dark-700/30 border border-dark-600/30 hover:border-accent-blue/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/5"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 flex items-center justify-center mb-4 group-hover:from-accent-blue/20 group-hover:to-accent-purple/20 transition-colors">
                <feature.icon size={22} className="text-accent-blue" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-dark-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
