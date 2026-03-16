import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Network,
  Layers,
  Share2,
  Building2,
  Globe,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Strategic Partnerships — Averon Partners",
  description:
    "Build high-value strategic partnerships to accelerate growth. Averon Partners identifies and develops technology integrations, distribution alliances, and joint enterprise solutions.",
};

const partnerTypes = [
  {
    icon: Layers,
    title: "Technology Integrations",
    text: "We identify complementary technology platforms and facilitate integration partnerships that enhance product value and expand use cases for both sides.",
  },
  {
    icon: Share2,
    title: "Distribution Partnerships",
    text: "We establish distribution, reseller, and referral partnerships that multiply your market reach across new geographies and verticals.",
  },
  {
    icon: Building2,
    title: "Joint Enterprise Solutions",
    text: "We help structure joint solutions for enterprise clients, combining capabilities to address complex buyer requirements that neither party could serve alone.",
  },
  {
    icon: Globe,
    title: "Strategic Alliances",
    text: "We build long-term strategic alliances with industry players, consultancies, and ecosystem partners that provide sustained access to new markets and clients.",
  },
];

const results = [
  "Access to new markets, clients, and industry ecosystems",
  "Stronger positioning with enterprise and mid-market buyers",
  "Revenue growth through partner-sourced pipeline",
  "Expanded product value through technology integrations",
  "Reduced customer acquisition cost via channel leverage",
];

export default function StrategicPartnerships() {
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
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80"
            alt="Team collaboration and partnership discussion"
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/30 to-transparent" />
          <div className="absolute inset-0 bg-accent-blue/[0.05]" />
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-blue/15 to-accent-purple/15 flex items-center justify-center">
            <Network size={28} className="text-accent-blue" />
          </div>
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-blue-light block mb-1">
              Service
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Strategic Partnerships
            </h1>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>
          <div className="space-y-4 text-dark-200 leading-relaxed">
            <p>
              Sustainable growth often comes through strategic partnerships with
              complementary companies. The right alliance can open doors to new
              markets, accelerate sales cycles, and strengthen your competitive
              position in ways that direct sales alone cannot.
            </p>
            <p>
              Averon Partners helps SaaS and technology companies identify, evaluate,
              and develop <strong className="text-white">high-value partnerships</strong>{" "}
              — from technology integrations and distribution alliances to joint enterprise
              solutions and long-term strategic alliances.
            </p>
          </div>
        </section>

        {/* How We Work */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold text-white mb-6">How We Work</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {partnerTypes.map((s) => (
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
            <p>To build the right partnership strategy, we need:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Clear understanding of your product capabilities and integration possibilities</li>
              <li>Overview of existing partnerships and any target partner lists</li>
              <li>Business objectives for the partnership program (revenue, distribution, brand)</li>
              <li>Internal resources available to support partnership onboarding and management</li>
              <li>Flexibility to explore non-obvious partnership models and creative structures</li>
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
            Explore Partnership Opportunities
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
