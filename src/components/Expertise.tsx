"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, MapPin } from "lucide-react";

const reasons = [
  {
    title: "Technology Focus",
    description:
      "We work exclusively with IT and technology companies. We understand your product, your buyer, and the way enterprise deals work in this space.",
  },
  {
    title: "Direct Access to Buyers",
    description:
      "We don't generate vanity leads. Every conversation we create is with a qualified decision-maker who can sign a contract.",
  },
  {
    title: "End-to-End Process",
    description:
      "From identifying target accounts to setting up meetings and supporting early deal stages — we manage the full outreach cycle.",
  },
];

export function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-dark-800/50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-blue-light mb-4 block">
            Why Averon Partners
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Built for
            <span className="gradient-text"> Real Results</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-dark-300 leading-relaxed">
            We exist to deliver one outcome: qualified business opportunities
            for technology companies selling B2B products.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 space-y-3"
        >
          <div className="flex items-center justify-center gap-3 text-center">
            <Globe size={18} className="text-accent-blue flex-shrink-0" />
            <p className="text-sm md:text-base text-dark-200">
              We work with companies operating across{" "}
              <strong className="text-white">Europe</strong> and the{" "}
              <strong className="text-white">United States</strong>.
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 text-center">
            <MapPin size={18} className="text-accent-purple flex-shrink-0" />
            <p className="text-sm md:text-base text-dark-200">
              For companies in Poland, we also support{" "}
              <strong className="text-white">
                offline meetings and direct business partnerships
              </strong>{" "}
              across the country.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              className="p-6 rounded-2xl bg-dark-700/20 border border-dark-600/30"
            >
              <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-accent-blue to-accent-purple mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-dark-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
