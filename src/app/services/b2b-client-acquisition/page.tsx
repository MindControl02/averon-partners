import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  Target,
  Search,
  MessageSquare,
  Handshake,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "B2B Client Acquisition — Averon Partners",
  description:
    "Build a predictable pipeline of qualified B2B clients across Europe and the United States. Averon Partners delivers end-to-end client acquisition for SaaS and technology companies.",
};

const steps = [
  {
    icon: Target,
    title: "Ideal Customer Profiling",
    text: "We define your ideal customer profile based on industry, company size, geography, technology stack, and business maturity to ensure every outreach effort is focused.",
  },
  {
    icon: Search,
    title: "Decision-Maker Mapping",
    text: "We identify and map the relevant decision-makers, budget holders, and influencers within each target organization.",
  },
  {
    icon: Users,
    title: "Target List Development",
    text: "We build a qualified, research-backed list of target companies across your priority markets in Europe and the United States.",
  },
  {
    icon: MessageSquare,
    title: "Strategic Outreach",
    text: "We initiate personalized, multi-channel outreach designed to open conversations with key stakeholders.",
  },
  {
    icon: Handshake,
    title: "Sales Conversation Management",
    text: "We manage early-stage sales conversations, handle objections, and qualify opportunities before they reach your team.",
  },
  {
    icon: CheckCircle,
    title: "Negotiation & Deal Closing Support",
    text: "We support negotiation strategy and help close deals by ensuring alignment between client expectations and your offering.",
  },
];

const results = [
  "Structured and repeatable client acquisition process",
  "Stronger pipeline of qualified B2B opportunities",
  "Shorter time-to-first-meeting in new markets",
  "Higher conversion rates from prospect to closed deal",
  "Reduced dependency on founder-led sales",
];

export default function B2BClientAcquisition() {
  return (
    <main className="bg-dark-900 text-dark-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <Link
          href="/#services"
          className="inline-flex items-center gap-1 text-sm text-accent-blue hover:text-accent-blue-light transition-colors mb-10"
        >
          &larr; Back to Services
        </Link>

        {/* Hero image */}
        <div className="relative rounded-2xl overflow-hidden mb-10 aspect-[21/9]">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80"
            alt="Business executives in a client meeting"
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/30 to-transparent" />
          <div className="absolute inset-0 bg-accent-blue/[0.05]" />
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-blue/15 to-accent-purple/15 flex items-center justify-center">
            <Users size={28} className="text-accent-blue" />
          </div>
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-blue-light block mb-1">
              Service
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              B2B Client Acquisition
            </h1>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>
          <div className="space-y-4 text-dark-200 leading-relaxed">
            <p>
              Averon Partners helps SaaS, AI, and technology companies build a
              predictable pipeline of qualified B2B clients across Europe and the
              United States. We take ownership of the entire acquisition process —
              from identifying the right prospects to supporting deal closure.
            </p>
            <p>
              Our goal is to create a <strong className="text-white">structured and
              repeatable client acquisition process</strong> that reduces your team&apos;s
              reliance on ad-hoc sales and delivers measurable, sustainable growth.
            </p>
          </div>
        </section>

        {/* How We Work */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold text-white mb-6">How We Work</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {steps.map((s) => (
              <div
                key={s.title}
                className="p-5 rounded-2xl bg-dark-700/20 border border-dark-600/30"
              >
                <s.icon size={20} className="text-accent-blue mb-3" />
                <h3 className="text-sm font-semibold text-white mb-1.5">
                  {s.title}
                </h3>
                <p className="text-sm text-dark-300 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What We Need */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold text-white mb-4">
            What We Need From the Client
          </h2>
          <div className="p-6 rounded-2xl bg-dark-700/20 border border-dark-600/30 space-y-3 text-dark-200 text-sm leading-relaxed">
            <p>
              To deliver the best results, we ask clients to provide:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>A clear understanding of your product, value proposition, and pricing model</li>
              <li>Access to existing CRM data, case studies, and reference clients where available</li>
              <li>Defined target markets and any existing ideal customer profile documentation</li>
              <li>A primary point of contact for weekly alignment and pipeline reviews</li>
              <li>Timely feedback on qualified leads and meeting outcomes</li>
            </ul>
          </div>
        </section>

        {/* Typical Results */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold text-white mb-4">Typical Results</h2>
          <div className="space-y-3">
            {results.map((r) => (
              <div key={r} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-accent-blue flex-shrink-0 mt-0.5" />
                <span className="text-dark-200 text-sm">{r}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="pt-6 border-t border-dark-700/50">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple hover:shadow-lg hover:shadow-accent-blue/25 transition-all"
          >
            Discuss Your Acquisition Goals
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
