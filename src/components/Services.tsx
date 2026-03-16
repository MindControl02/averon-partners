"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Rocket, Network, Settings, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "B2B Client Acquisition",
    description:
      "End-to-end client acquisition strategy including prospecting, outreach, qualification, and deal closing. We build your European client pipeline from the ground up.",
    tags: ["Lead Generation", "Outbound Sales", "Deal Closing"],
  },
  {
    icon: Rocket,
    title: "SaaS Market Expansion",
    description:
      "Comprehensive go-to-market strategies for SaaS companies entering European markets. From market research to first revenue, we guide your expansion journey.",
    tags: ["Go-to-Market", "Market Entry", "Localization"],
  },
  {
    icon: Network,
    title: "Strategic Partnerships",
    description:
      "Identify and establish strategic partnerships, channel alliances, and reseller networks across Europe to multiply your market reach.",
    tags: ["Channel Partners", "Alliances", "Network Building"],
  },
  {
    icon: Settings,
    title: "Sales Process Optimization",
    description:
      "Audit and optimize your sales processes, tools, and team performance. Implement best practices that shorten sales cycles and increase conversion rates.",
    tags: ["Process Design", "CRM Setup", "Team Training"],
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase dark:text-accent-blue-light text-accent-blue mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold dark:text-white text-gray-900 mb-6">
            How We Drive
            <span className="gradient-text"> Your Growth</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg dark:text-dark-300 text-gray-600 leading-relaxed">
            Tailored business development solutions designed for technology companies
            ready to scale their European presence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 + 0.2 }}
              className="group relative p-8 rounded-2xl dark:bg-dark-700/20 bg-white border dark:border-dark-600/30 border-gray-100 hover:border-accent-blue/30 dark:hover:border-accent-blue/30 transition-all duration-300 hover:shadow-xl dark:hover:shadow-accent-blue/5"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 flex items-center justify-center group-hover:from-accent-blue/20 group-hover:to-accent-purple/20 transition-colors">
                  <service.icon size={26} className="text-accent-blue" />
                </div>
                <ArrowUpRight
                  size={20}
                  className="dark:text-dark-400 text-gray-400 group-hover:text-accent-blue transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </div>

              <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="dark:text-dark-300 text-gray-600 leading-relaxed mb-5">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full dark:bg-dark-600/50 bg-gray-100 dark:text-dark-200 text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
