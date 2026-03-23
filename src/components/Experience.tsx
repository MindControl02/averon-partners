"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Award, Users, ArrowRight, X, Quote, ChevronLeft, ChevronRight } from "lucide-react";

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
    result: "12 new clients in 5 months",
    summary:
      "Found buyers for a cloud platform product across European markets where they had zero pipeline.",
    story:
      "CloudSync Solutions had a solid cloud infrastructure product but couldn't find buyers in Europe. Their sales team had no contacts and no pipeline outside their home market. We mapped their ideal customer profile, built a targeted list of 1,500+ companies, and launched a structured outreach campaign to IT directors and CTOs in Germany, the UK, and the Nordics. Within five months, we booked 26 qualified meetings and helped CloudSync close 12 new clients for their product — opening a revenue stream that didn't exist before.",
    quote:
      "Averon found buyers for our product that we couldn't reach on our own. They built our entire European client base from scratch.",
    quoteName: "Daniel Krause",
    quoteRole: "VP of Sales, CloudSync Solutions",
  },
  {
    company: "DataVault Analytics",
    industry: "Data & Analytics",
    result: "31 qualified meetings in 4 months",
    summary:
      "Connected an analytics platform with the right buyers — CFOs and Heads of Data at mid-market companies.",
    story:
      "DataVault had a great analytics product but struggled to reach the people who actually buy it. Their outbound was generic and conversion was below 1%. We redesigned their approach — refined the ICP, crafted personalized messaging, and targeted CFOs and Heads of Data at mid-market companies. Over four months, we booked 31 qualified meetings with real buyers. DataVault's team closed 6 product deals directly from our pipeline during the engagement.",
    quote:
      "Every meeting was with someone who genuinely needed our product and could make the buying decision. That changed everything for us.",
    quoteName: "Maria Lindström",
    quoteRole: "CEO, DataVault Analytics",
  },
  {
    company: "SecureNet Systems",
    industry: "Cybersecurity",
    result: "3 enterprise deals worth €180K",
    summary:
      "Found enterprise clients for a compliance automation product in the financial sector.",
    story:
      "SecureNet had a compliance automation product built for financial institutions, but couldn't get past procurement gatekeepers to reach actual buyers. We built a targeted list of 400 financial institutions across Europe, crafted messaging around regulatory pain points, and ran a focused campaign. The result: 15 meetings with CISOs and compliance heads. Three of those turned into product deals worth €180K combined — their most important clients to date.",
    quote:
      "They understood who buys our product better than we did. The clients Averon found are now our flagship accounts.",
    quoteName: "Tomasz Wiśniewski",
    quoteRole: "Co-founder, SecureNet Systems",
  },
  {
    company: "FlowCRM",
    industry: "CRM & Sales Tools",
    result: "First clients in 3 new markets",
    summary:
      "Helped a CRM product find its first buyers in Germany, the Netherlands, and France.",
    story:
      "FlowCRM had a successful product in Poland but failed twice to find buyers in Western Europe. We started with market research in Germany, the Netherlands, and France — identifying who buys CRM products, what messaging works locally, and where FlowCRM fits. We ran parallel outreach campaigns across all three markets. Within five months, FlowCRM had signed their first product clients in Germany and the Netherlands, and had active negotiations in France.",
    quote:
      "Averon found us our first international clients. Now 30% of our revenue comes from Western Europe — all started from their outreach.",
    quoteName: "Paweł Nowak",
    quoteRole: "Managing Director, FlowCRM",
  },
  {
    company: "InfraBridge",
    industry: "DevOps & Infrastructure",
    result: "5 pilot deals from enterprise outreach",
    summary:
      "Found enterprise buyers for a DevOps tool at companies that would never have responded to cold email.",
    story:
      "InfraBridge had a DevOps automation tool that saved engineering teams hundreds of hours, but as a startup they had no way to reach enterprise buyers. We identified and engaged VP Engineering and CTO-level contacts at large companies through personalized, technical outreach. We secured 22 meetings with senior engineering leaders. InfraBridge closed 5 pilot programs that later converted into annual product contracts worth over $200K combined.",
    quote:
      "Averon got us in front of buyers we could never have reached ourselves. Those pilot deals are now our biggest annual contracts.",
    quoteName: "James Chen",
    quoteRole: "CTO & Co-founder, InfraBridge",
  },
];

function CaseModal({ study, onClose }: { study: CaseStudy; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white border border-light-300 shadow-2xl"
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-light-200">
          <div>
            <h2 className="text-lg font-bold text-light-900">{study.company}</h2>
            <p className="text-xs text-light-500 mt-0.5">{study.industry}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-light-100 transition-colors text-light-500"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="inline-block px-3 py-1.5 rounded-lg bg-accent-blue/8 text-accent-blue text-sm font-semibold">
            {study.result}
          </div>

          <p className="text-light-700 leading-relaxed">{study.story}</p>

          <div className="p-5 rounded-xl bg-light-100 border border-light-200">
            <Quote size={20} className="text-accent-blue/30 mb-3" />
            <p className="text-light-800 leading-relaxed italic mb-4">
              &ldquo;{study.quote}&rdquo;
            </p>
            <div>
              <p className="text-sm font-semibold text-light-900">{study.quoteName}</p>
              <p className="text-xs text-light-500">{study.quoteRole}</p>
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
  const count = caseStudies.length;

  const goTo = useCallback((index: number) => {
    setActiveIndex(((index % count) + count) % count);
  }, [count]);

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused || selectedStudy) return;
    intervalRef.current = setInterval(next, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, selectedStudy, next]);

  return (
    <>
      <div
        className="relative overflow-hidden py-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button
          onClick={prev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-light-300 shadow-md flex items-center justify-center text-light-600 hover:text-accent-blue hover:border-accent-blue/30 transition-all"
          aria-label="Previous"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-light-300 shadow-md flex items-center justify-center text-light-600 hover:text-accent-blue hover:border-accent-blue/30 transition-all"
          aria-label="Next"
        >
          <ChevronRight size={20} />
        </button>

        <motion.div
          className="flex gap-5"
          animate={{ x: -activeIndex * 320 }}
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
                  opacity: isActive ? 1 : 0.45,
                }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex-shrink-0 w-[300px] p-6 rounded-2xl bg-white border border-light-300/60 text-left cursor-pointer hover:border-accent-blue/30 transition-colors shadow-sm"
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-accent-blue px-2.5 py-1 rounded-full bg-accent-blue/8">
                    {study.industry}
                  </span>
                </div>
                <h3 className="text-base font-bold text-light-900 mb-2">
                  {study.company}
                </h3>
                <p className="text-sm text-light-600 leading-relaxed mb-3 line-clamp-2">
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
              onClick={() => goTo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-accent-blue"
                  : "w-1.5 bg-light-400"
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedStudy && (
          <CaseModal study={selectedStudy} onClose={() => setSelectedStudy(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative bg-light-100">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-blue mb-4 block">
            Our Experience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-light-900 mb-6">
            Two Years of
            <span className="gradient-text"> Proven Results</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-light-600 leading-relaxed mb-4">
            Over the past two years, we have helped a wide range of IT
            companies find buyers for their products. Here are some of our
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
          <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-light-300/60">
            <div className="w-10 h-10 rounded-lg bg-accent-blue/8 flex items-center justify-center flex-shrink-0">
              <Award size={20} className="text-accent-blue" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-light-900 mb-1">
                2+ Years in B2B Client Acquisition
              </h3>
              <p className="text-sm text-light-600 leading-relaxed">
                Focused exclusively on helping technology companies grow their client base.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-light-300/60">
            <div className="w-10 h-10 rounded-lg bg-accent-blue/8 flex items-center justify-center flex-shrink-0">
              <Users size={20} className="text-accent-blue" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-light-900 mb-1">
                Trusted by IT Companies
              </h3>
              <p className="text-sm text-light-600 leading-relaxed">
                We have worked with numerous technology businesses — and we are ready to help yours too.
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:text-accent-cyan transition-colors"
          >
            Let&apos;s talk about your goals
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
