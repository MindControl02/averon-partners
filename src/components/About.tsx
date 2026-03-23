"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, UserCheck, CalendarCheck, Handshake, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Identify Your Ideal Clients",
    description:
      "We research your product, define the ideal customer profile, and build a targeted list of companies that genuinely need what you sell.",
    details: [
      "Market research & ICP definition",
      "Custom prospect database",
      "Industry & geography targeting",
    ],
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Reach Decision-Makers",
    description:
      "We craft personalized outreach and connect directly with the people who have the authority and budget to purchase your product.",
    details: [
      "Direct access to CTOs, VPs, Directors",
      "Multi-channel outreach campaigns",
      "Personalized messaging sequences",
    ],
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Generate Qualified Meetings",
    description:
      "We book calls and meetings with real buyers — not generic leads. Every conversation is with someone who fits your target profile.",
    details: [
      "Qualified meeting scheduling",
      "Lead warming & follow-ups",
      "Calendar integration",
    ],
  },
  {
    icon: Handshake,
    step: "04",
    title: "Support Early-Stage Deals",
    description:
      "We help move opportunities forward from the first conversation to a commercial discussion, supporting your sales team throughout.",
    details: [
      "Pipeline management support",
      "Deal stage progression",
      "Feedback & optimization loop",
    ],
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="what-we-do" className="py-24 md:py-32 relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-blue mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-light-900 mb-6">
            From Zero Pipeline to
            <span className="gradient-text"> Real Clients</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-light-600 leading-relaxed">
            We focus on one thing: finding B2B clients for your IT product.
            By concentrating entirely on one service, we execute it at the
            highest professional level.
          </p>
        </motion.div>

        {/* Pipeline funnel visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-12 flex items-center justify-center gap-3 sm:gap-4"
        >
          {[
            { label: "Target Accounts", w: "w-40 sm:w-48" },
            { label: "Outreach", w: "w-32 sm:w-40" },
            { label: "Meetings", w: "w-24 sm:w-32" },
            { label: "Clients", w: "w-20 sm:w-24" },
          ].map((stage, i) => (
            <div key={stage.label} className="flex items-center gap-3 sm:gap-4">
              <div className={`${stage.w} py-2.5 rounded-lg bg-gradient-to-r from-accent-blue/10 to-accent-cyan/10 border border-accent-blue/15 text-center`}>
                <div className="text-[10px] sm:text-xs font-semibold text-accent-blue">{stage.label}</div>
              </div>
              {i < 3 && (
                <svg width="16" height="12" viewBox="0 0 16 12" className="text-light-400 flex-shrink-0">
                  <path d="M0 6h12M10 2l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              )}
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              className="group p-7 rounded-2xl bg-white border border-light-200 hover:border-accent-blue/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/5"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/8 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-blue/15 transition-colors">
                  <step.icon size={22} className="text-accent-blue" />
                </div>
                <div>
                  <span className="text-xs font-bold text-accent-blue/50 block mb-1">
                    STEP {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-light-900">
                    {step.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-light-600 leading-relaxed mb-4">
                {step.description}
              </p>

              <ul className="space-y-2">
                {step.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2 text-sm text-light-700">
                    <ArrowRight size={12} className="text-accent-blue flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
