"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, MapPin, Target, Shield, Zap, Server, Code, BarChart3, Monitor, Lock, Wifi, ShoppingCart, Stethoscope, GraduationCap, Building2 } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Technology Focus",
    description:
      "We work exclusively with IT and technology companies. We understand your product, your buyer, and the way enterprise deals work in this space.",
  },
  {
    icon: Shield,
    title: "Direct Access to Buyers",
    description:
      "We don't generate vanity leads. Every conversation we create is with a qualified decision-maker who can sign a contract.",
  },
  {
    icon: Zap,
    title: "End-to-End Process",
    description:
      "From identifying target accounts to setting up meetings and supporting early deal stages — we manage the full outreach cycle.",
  },
];

const audiences = [
  { icon: Server, title: "SaaS & Cloud Platforms", description: "B2B software products looking for enterprise buyers in new markets." },
  { icon: Code, title: "IT Service Providers", description: "Development, consulting, or managed services needing a consistent client pipeline." },
  { icon: BarChart3, title: "Data & Analytics", description: "Analytics, BI, or data platforms that sell to business decision-makers." },
  { icon: Monitor, title: "DevOps & Infrastructure", description: "Technical products for engineering teams that need help reaching buyers." },
  { icon: Lock, title: "Cybersecurity", description: "Security products targeting CISOs and compliance teams at enterprises." },
  { icon: Wifi, title: "IoT & Connectivity", description: "IoT platforms and connectivity solutions selling into B2B verticals." },
  { icon: ShoppingCart, title: "E-commerce Technology", description: "B2B e-commerce tools, payment platforms, and marketplace software." },
  { icon: Stethoscope, title: "HealthTech & MedTech", description: "Healthcare IT systems, telemedicine platforms, and clinical software." },
  { icon: GraduationCap, title: "EdTech & LMS", description: "Learning management systems and training platforms for businesses." },
  { icon: Building2, title: "PropTech & Construction Tech", description: "Real estate technology and construction management software." },
];

export function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 md:py-32 relative bg-light-100">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-blue mb-4 block">
            Why Averon Partners
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-light-900 mb-6">
            Built for
            <span className="gradient-text"> Real Results</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-light-600 leading-relaxed">
            We exist to deliver one outcome: qualified business opportunities
            for technology companies selling B2B products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              className="p-7 rounded-2xl bg-white border border-light-200"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-blue/8 flex items-center justify-center mb-4">
                <item.icon size={22} className="text-accent-blue" />
              </div>
              <h3 className="text-lg font-bold text-light-900 mb-2">{item.title}</h3>
              <p className="text-sm text-light-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Results chart graphic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-16 p-8 rounded-2xl bg-white border border-light-200"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-light-900 mb-3">Average Client Results</h3>
              <p className="text-sm text-light-600 leading-relaxed mb-6">
                Our structured approach delivers measurable growth
                in pipeline and meetings within the first months of engagement.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-light-100">
                  <div className="text-2xl font-bold text-accent-blue">+240%</div>
                  <div className="text-xs text-light-500 mt-1">Pipeline Growth</div>
                </div>
                <div className="p-4 rounded-xl bg-light-100">
                  <div className="text-2xl font-bold text-accent-blue">+180%</div>
                  <div className="text-xs text-light-500 mt-1">Meetings Booked</div>
                </div>
              </div>
            </div>
            <div className="flex items-end gap-2 h-48">
              {[25, 38, 45, 52, 68, 75, 85, 72, 90, 95, 88, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={isInView ? { height: `${h}%` } : { height: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.06 + 0.5 }}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-accent-blue to-accent-cyan/60"
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 p-6 rounded-2xl bg-white border border-light-200"
        >
          <div className="flex items-center gap-3">
            <Globe size={20} className="text-accent-blue flex-shrink-0" />
            <p className="text-sm text-light-700">
              We work with companies across{" "}
              <strong className="text-light-900">Europe</strong> and the{" "}
              <strong className="text-light-900">United States</strong>.
            </p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-light-200" />
          <div className="flex items-center gap-3">
            <MapPin size={20} className="text-accent-blue flex-shrink-0" />
            <p className="text-sm text-light-700">
              In Poland, we also support{" "}
              <strong className="text-light-900">offline meetings and direct partnerships</strong>.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-light-900 mb-4">
            Industries We Work With
          </h3>
          <p className="max-w-xl mx-auto text-light-600">
            We help technology companies across a wide range of industries
            find B2B clients for their products.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {audiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 + 0.7 }}
              className="p-4 rounded-2xl bg-white border border-light-200 hover:border-accent-blue/30 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-accent-blue/8 flex items-center justify-center mb-3">
                <item.icon size={16} className="text-accent-blue" />
              </div>
              <h4 className="text-xs font-bold text-light-900 mb-1">
                {item.title}
              </h4>
              <p className="text-[11px] text-light-500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
