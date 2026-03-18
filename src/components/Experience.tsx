"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Award, Users, ArrowRight } from "lucide-react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3]"
          >
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt="Modern business office"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-dark-900/20 to-transparent" />
            <div className="absolute inset-0 bg-accent-blue/[0.05]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-blue-light mb-4 block">
              Our Experience
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Two Years of
              <span className="gradient-text"> Proven Results</span>
            </h2>
            <p className="text-lg text-dark-300 leading-relaxed mb-8">
              Over the past two years, we have helped a wide range of IT
              companies find and acquire B2B clients. We know how to build
              outreach that works, reach the right people, and create
              real business opportunities.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-dark-700/30 border border-dark-600/30">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 flex items-center justify-center flex-shrink-0">
                  <Award size={20} className="text-accent-blue" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    2+ Years in B2B Client Acquisition
                  </h3>
                  <p className="text-sm text-dark-300 leading-relaxed">
                    Focused exclusively on helping technology companies
                    grow their client base.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-dark-700/30 border border-dark-600/30">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 flex items-center justify-center flex-shrink-0">
                  <Users size={20} className="text-accent-blue" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    Trusted by IT Companies
                  </h3>
                  <p className="text-sm text-dark-300 leading-relaxed">
                    We have worked with numerous technology businesses —
                    and we are ready to help yours too.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:text-accent-blue-light transition-colors"
            >
              Let&apos;s talk about your goals
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
