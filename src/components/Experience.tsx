"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Award, Users, ArrowRight, X, Quote } from "lucide-react";

interface CaseStudy {
  company: string;
  industry: string;
  result: string;
  summary: string;
  story: string;
  quote: string;
  quoteName: string;
  quoteRole: string;
}

const caseStudies: CaseStudy[] = [
  {
    company: "CloudSync Solutions",
    industry: "Cloud Infrastructure",
    result: "17 enterprise clients in 6 months",
    summary:
      "Helped a cloud platform company break into the European enterprise market with zero existing pipeline.",
    story:
      "CloudSync Solutions had a strong product but no presence in Europe. They approached us with a clear goal: land enterprise contracts in Germany, the UK, and the Nordics. We mapped their ideal customer profile, built a database of 2,000+ target accounts, and launched a structured multi-channel outreach campaign. Within the first three months, we secured 34 qualified meetings with IT directors and CTOs. By the sixth month, CloudSync had signed 17 enterprise contracts — transforming their European revenue from zero to a core business pillar.",
    quote:
      "Averon Partners did what our internal team couldn't do in two years. They built our entire European pipeline from scratch and delivered real contracts, not just leads.",
    quoteName: "Daniel Krause",
    quoteRole: "VP of Sales, CloudSync Solutions",
  },
  {
    company: "DataVault Analytics",
    industry: "Data & Analytics",
    result: "42 qualified meetings in 4 months",
    summary:
      "Generated a steady pipeline of meetings with C-level decision-makers for a B2B analytics platform.",
    story:
      "DataVault had a powerful analytics product but struggled to get in front of the right buyers. Their outbound was generic and conversion rates were below 1%. We redesigned their entire outreach approach — refining the ICP, creating personalized messaging sequences, and targeting CFOs and Heads of Data at mid-market companies. Over four months, we booked 42 qualified meetings. DataVault's sales team went from idle to fully booked, and they closed 8 deals directly from our pipeline within the engagement period.",
    quote:
      "The quality of meetings was exceptional. Every call was with someone who actually needed our product and had budget authority. That had never happened before.",
    quoteName: "Maria Lindström",
    quoteRole: "CEO, DataVault Analytics",
  },
  {
    company: "SecureNet Systems",
    industry: "Cybersecurity",
    result: "3 major contracts worth €400K+",
    summary:
      "Positioned a cybersecurity company in front of enterprise buyers and closed high-value deals.",
    story:
      "SecureNet had a niche compliance automation product targeting financial institutions. The challenge: getting past procurement gatekeepers and reaching CISOs and compliance heads directly. We built a targeted list of 500 financial institutions across Europe, crafted industry-specific messaging around regulatory pain points, and ran a focused outreach campaign. The result was 19 meetings with senior security and compliance executives. Three of those conversations turned into enterprise contracts worth over €400K combined — their largest deals to date.",
    quote:
      "They understood our market better than agencies ten times their size. The deals we closed through Averon are now our flagship accounts.",
    quoteName: "Tomasz Wiśniewski",
    quoteRole: "Co-founder, SecureNet Systems",
  },
  {
    company: "FlowCRM",
    industry: "CRM & Sales Tools",
    result: "Entered 3 new markets in 5 months",
    summary:
      "Supported a CRM platform in expanding from a single market to three new European countries.",
    story:
      "FlowCRM was successful in Poland but had failed twice to expand into Western Europe. They needed someone who understood both the product and the target markets. We started with deep market research in Germany, the Netherlands, and France — identifying buyer personas, competitive positioning, and messaging that resonated locally. We then ran parallel outreach campaigns across all three markets. Within five months, FlowCRM had active sales conversations in all three countries and signed their first clients in Germany and the Netherlands.",
    quote:
      "We tried expanding on our own and it didn't work. Averon gave us the structure, the contacts, and the confidence to go international. Now 30% of our revenue comes from Western Europe.",
    quoteName: "Paweł Nowak",
    quoteRole: "Managing Director, FlowCRM",
  },
  {
    company: "InfraBridge",
    industry: "DevOps & Infrastructure",
    result: "28 meetings with Fortune 500 companies",
    summary:
      "Connected a DevOps tooling startup with enterprise IT leaders at the world's largest companies.",
    story:
      "InfraBridge had built a DevOps automation tool that saved engineering teams hundreds of hours. But as a startup, they had no way to reach VP Engineering and CTO-level contacts at large enterprises. We leveraged our network and research capabilities to identify and engage decision-makers at Fortune 500 companies. Through carefully crafted, technical outreach, we secured 28 meetings with senior engineering leaders. InfraBridge used these conversations to refine their enterprise offering and closed 5 pilot programs that later converted into annual contracts.",
    quote:
      "Getting meetings at this level would have taken us years on our own. Averon made it happen in weeks. The pilot programs they helped us land are now worth over $600K annually.",
    quoteName: "James Chen",
    quoteRole: "CTO & Co-founder, InfraBridge",
  },
];

function CaseModal({
  study,
  onClose,
}: {
  study: CaseStudy;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-dark-800 border border-dark-600/50 shadow-2xl"
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-dark-600/40">
          <div>
            <h2 className="text-lg font-bold text-white">{study.company}</h2>
            <p className="text-xs text-dark-400 mt-0.5">{study.industry}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-dark-700 transition-colors text-dark-400"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="inline-block px-3 py-1.5 rounded-lg bg-accent-blue/10 text-accent-blue text-sm font-semibold">
            {study.result}
          </div>

          <p className="text-dark-200 leading-relaxed">{study.story}</p>

          <div className="p-5 rounded-xl bg-dark-700/30 border border-dark-600/20">
            <Quote size={20} className="text-accent-blue/40 mb-3" />
            <p className="text-dark-100 leading-relaxed italic mb-4">
              &ldquo;{study.quote}&rdquo;
            </p>
            <div>
              <p className="text-sm font-semibold text-white">
                {study.quoteName}
              </p>
              <p className="text-xs text-dark-400">{study.quoteRole}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function CaseCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % caseStudies.length);
  }, []);

  useEffect(() => {
    if (isPaused || selectedStudy) return;
    intervalRef.current = setInterval(next, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, selectedStudy, next]);

  const getOffset = () => {
    return -activeIndex * 320;
  };

  return (
    <>
      <div
        className="relative overflow-hidden py-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-5"
          animate={{ x: getOffset() }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            paddingLeft: "calc(50% - 160px)",
            paddingRight: "calc(50% - 160px)",
          }}
        >
          {caseStudies.map((study, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.button
                key={study.company}
                onClick={() => setSelectedStudy(study)}
                animate={{
                  scale: isActive ? 1.05 : 0.9,
                  opacity: isActive ? 1 : 0.5,
                }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex-shrink-0 w-[300px] p-6 rounded-2xl bg-dark-700/30 border border-dark-600/30 text-left cursor-pointer hover:border-accent-blue/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-accent-blue-light px-2.5 py-1 rounded-full bg-accent-blue/10">
                    {study.industry}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {study.company}
                </h3>
                <p className="text-sm text-dark-300 leading-relaxed mb-3 line-clamp-2">
                  {study.summary}
                </p>
                <div className="text-sm font-semibold gradient-text">
                  {study.result}
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        <div className="flex justify-center gap-2 mt-6">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-accent-blue"
                  : "w-1.5 bg-dark-500"
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedStudy && (
          <CaseModal
            study={selectedStudy}
            onClose={() => setSelectedStudy(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-blue-light mb-4 block">
            Our Experience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Two Years of
            <span className="gradient-text"> Proven Results</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-dark-300 leading-relaxed mb-4">
            Over the past two years, we have helped a wide range of IT
            companies find and acquire B2B clients. Here are some of our
            closed case studies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <CaseCarousel />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto"
        >
          <div className="flex items-start gap-4 p-4 rounded-xl bg-dark-700/30 border border-dark-600/30">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 flex items-center justify-center flex-shrink-0">
              <Award size={20} className="text-accent-blue" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">
                2+ Years in B2B Client Acquisition
              </h3>
              <p className="text-sm text-dark-300 leading-relaxed">
                Focused exclusively on helping technology companies grow
                their client base.
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
                We have worked with numerous technology businesses — and
                we are ready to help yours too.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:text-accent-blue-light transition-colors"
          >
            Let&apos;s talk about your goals
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
