import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Settings,
  Filter,
  FileText,
  Presentation,
  ShieldCheck,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sales Process Optimization — Averon Partners",
  description:
    "Improve your B2B sales conversion rates and shorten deal cycles. Averon Partners audits and optimizes your sales process for scalable, repeatable revenue growth.",
};

const areas = [
  {
    icon: Filter,
    title: "Lead Qualification Framework",
    text: "We review and strengthen your qualification criteria so your team focuses on the highest-potential opportunities.",
  },
  {
    icon: FileText,
    title: "Value Proposition & Messaging",
    text: "We refine your sales narrative to clearly communicate differentiation, ROI, and relevance to enterprise buyers.",
  },
  {
    icon: Presentation,
    title: "Meeting Structure & Demos",
    text: "We optimize your meeting flow, demo scripts, and discovery frameworks to maximize engagement and move deals forward.",
  },
  {
    icon: ShieldCheck,
    title: "Objection Handling Playbook",
    text: "We build structured responses to the most common buyer objections, equipping your team to handle pushback with confidence.",
  },
  {
    icon: TrendingUp,
    title: "Negotiation Strategy",
    text: "We develop pricing and negotiation frameworks that protect margin while accelerating deal closure.",
  },
  {
    icon: Settings,
    title: "CRM & Process Infrastructure",
    text: "We audit your CRM setup, pipeline stages, and reporting to ensure your sales process is trackable, scalable, and data-driven.",
  },
];

const results = [
  "Scalable and structured B2B sales framework",
  "Improved deal closing efficiency and conversion rates",
  "Shorter sales cycles from first meeting to signed contract",
  "Clear, consistent sales messaging across the team",
  "Better pipeline visibility and forecasting accuracy",
];

export default function SalesProcessOptimization() {
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
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80"
            alt="Analytics dashboard and performance metrics"
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/30 to-transparent" />
          <div className="absolute inset-0 bg-accent-blue/[0.05]" />
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-blue/15 to-accent-purple/15 flex items-center justify-center">
            <Settings size={28} className="text-accent-blue" />
          </div>
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-blue-light block mb-1">
              Service
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Sales Process Optimization
            </h1>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>
          <div className="space-y-4 text-dark-200 leading-relaxed">
            <p>
              Many technology companies generate leads but struggle to convert them
              into closed deals. Inefficient qualification, unclear messaging, and
              unstructured sales processes create friction that slows growth and
              frustrates teams.
            </p>
            <p>
              Averon Partners works with SaaS and technology companies to audit,
              redesign, and optimize their B2B sales process — from lead qualification
              through negotiation and closing. Our goal is to build a{" "}
              <strong className="text-white">scalable and structured B2B sales
              framework</strong> that improves conversion rates and shortens deal
              cycles.
            </p>
          </div>
        </section>

        {/* How We Work */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold text-white mb-6">How We Work</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {areas.map((s) => (
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
            <p>To deliver an effective optimization engagement, we require:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Access to your CRM, pipeline data, and historical deal metrics</li>
              <li>Overview of current sales process, stages, and team structure</li>
              <li>Sample sales collateral, pitch decks, and demo recordings where available</li>
              <li>Access to sales team members for interviews and workflow analysis</li>
              <li>Willingness to implement process changes and iterate based on data</li>
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
            Optimize Your Sales Process
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
