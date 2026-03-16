import type { Metadata } from "next";
import Link from "next/link";
import {
  Rocket,
  Globe,
  MapPin,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SaaS Market Expansion — Averon Partners",
  description:
    "Enter and grow in European and US markets with confidence. Averon Partners provides go-to-market strategy and market expansion support for SaaS and technology companies.",
};

const approach = [
  {
    icon: BarChart3,
    title: "Market Research & Positioning",
    text: "We analyze the competitive landscape, buyer expectations, and pricing benchmarks in your target geography to build a data-informed market entry strategy.",
  },
  {
    icon: Globe,
    title: "Remote Expansion Across Europe & the US",
    text: "We help companies expand remotely across European and US markets, establishing presence and pipeline without the overhead of local offices.",
  },
  {
    icon: MapPin,
    title: "Offline Development in Poland",
    text: "For companies operating in Poland, we also support offline market development and direct business partnerships across the country.",
  },
  {
    icon: Users,
    title: "Client & Partner Identification",
    text: "We identify potential clients and strategic partners in each market, establish local relationships, and support early-stage positioning and sales conversations.",
  },
];

const results = [
  "Faster entry into new European and US markets",
  "Validated go-to-market strategy tailored to each region",
  "Early pipeline generation before establishing a local team",
  "Stronger positioning with enterprise and mid-market buyers",
  "Reduced risk and cost of international expansion",
];

export default function SaaSMarketExpansion() {
  return (
    <main className="bg-dark-900 text-dark-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <Link
          href="/#services"
          className="inline-flex items-center gap-1 text-sm text-accent-blue hover:text-accent-blue-light transition-colors mb-10"
        >
          &larr; Back to Services
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-blue/15 to-accent-purple/15 flex items-center justify-center">
            <Rocket size={28} className="text-accent-blue" />
          </div>
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-blue-light block mb-1">
              Service
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              SaaS Market Expansion
            </h1>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>
          <div className="space-y-4 text-dark-200 leading-relaxed">
            <p>
              Averon Partners supports SaaS and technology companies entering new
              markets across Europe and the United States. Expanding internationally
              requires deep understanding of local business culture, buyer behavior,
              and decision-making processes — and we bring that expertise to every
              engagement.
            </p>
            <p>
              We help businesses expand <strong className="text-white">remotely
              across Europe and the United States</strong>, while also supporting{" "}
              <strong className="text-white">offline business development and
              partnerships across Poland</strong> for companies that need on-the-ground
              support.
            </p>
          </div>
        </section>

        {/* How We Work */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold text-white mb-6">How We Work</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {approach.map((s) => (
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
            <p>To design an effective expansion strategy, we typically need:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Product documentation, demo access, and current pricing structure</li>
              <li>Overview of existing markets and key learnings from current go-to-market efforts</li>
              <li>Target geographies and any existing contacts or partnerships in those regions</li>
              <li>Budget range and timeline expectations for the expansion initiative</li>
              <li>Internal stakeholder availability for regular strategy alignment sessions</li>
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
            Plan Your Market Entry
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
