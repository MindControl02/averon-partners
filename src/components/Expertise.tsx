"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3] order-2 lg:order-1"
          >
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
              alt="Business team discussing strategy"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-blue mb-4 block">
              Why Averon Partners
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-light-900 mb-6">
              Built for
              <span className="gradient-text"> Real Results</span>
            </h2>
            <p className="text-lg text-light-600 leading-relaxed mb-8">
              We exist to deliver one outcome: qualified business opportunities
              for technology companies selling B2B products.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Globe size={18} className="text-accent-blue flex-shrink-0" />
                <p className="text-sm md:text-base text-light-700">
                  We work with companies operating across{" "}
                  <strong className="text-light-900">Europe</strong> and the{" "}
                  <strong className="text-light-900">United States</strong>.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-accent-purple flex-shrink-0" />
                <p className="text-sm md:text-base text-light-700">
                  For companies in Poland, we also support{" "}
                  <strong className="text-light-900">
                    offline meetings and direct business partnerships
                  </strong>{" "}
                  across the country.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              className="p-6 rounded-2xl bg-white border border-light-300/60"
            >
              <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-accent-blue to-accent-purple mb-4" />
              <h3 className="text-lg font-bold text-light-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-light-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
