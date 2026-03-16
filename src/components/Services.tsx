"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Users, Rocket, Network, Settings, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "B2B Client Acquisition",
    href: "/services/b2b-client-acquisition",
    description:
      "End-to-end client acquisition strategy including prospecting, outreach, qualification, and deal closing. We build your European and US client pipeline from the ground up.",
    tags: ["Lead Generation", "Outbound Sales", "Deal Closing"],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Rocket,
    title: "SaaS Market Expansion",
    href: "/services/saas-market-expansion",
    description:
      "Comprehensive go-to-market strategies for SaaS companies entering European and US markets. From market research to first revenue, we guide your expansion journey.",
    tags: ["Go-to-Market", "Market Entry", "Localization"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Network,
    title: "Strategic Partnerships",
    href: "/services/strategic-partnerships",
    description:
      "Identify and establish strategic partnerships, channel alliances, and reseller networks to multiply your market reach across new geographies.",
    tags: ["Channel Partners", "Alliances", "Network Building"],
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Settings,
    title: "Sales Process Optimization",
    href: "/services/sales-process-optimization",
    description:
      "Audit and optimize your sales processes, tools, and team performance. Implement best practices that shorten sales cycles and increase conversion rates.",
    tags: ["Process Design", "CRM Setup", "Team Training"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
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
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-blue-light mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            How We Drive
            <span className="gradient-text"> Your Growth</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-dark-300 leading-relaxed">
            Tailored business development solutions designed for technology companies
            ready to scale internationally.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 + 0.2 }}
            >
              <Link
                href={service.href}
                className="group relative block rounded-2xl bg-dark-700/20 border border-dark-600/30 hover:border-accent-blue/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent-blue/5 h-full overflow-hidden"
              >
                {/* Service image */}
                <div className="relative h-40 overflow-hidden w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/60 to-transparent" />
                  <div className="absolute inset-0 bg-accent-blue/[0.04]" />
                </div>

                <div className="p-8 pt-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 flex items-center justify-center group-hover:from-accent-blue/20 group-hover:to-accent-purple/20 transition-colors -mt-10 relative z-10 border-2 border-dark-800">
                      <service.icon size={22} className="text-accent-blue" />
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-dark-400 group-hover:text-accent-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-dark-300 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-dark-600/50 text-dark-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
