"use client";

import { Logo } from "./Logo";
import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const CONTACT_EMAIL = "contact@averon-partners.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/maks-bolotskyi-62247b398/";

export function Footer() {
  return (
    <footer className="py-16 border-t border-dark-700/50 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-dark-300 leading-relaxed max-w-md">
              Averon Partners helps IT and technology companies find B2B clients
              through targeted outreach and direct access to decision-makers.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <Mail size={14} className="text-dark-400" />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm text-dark-300 hover:text-accent-blue transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-dark-700/30 border border-dark-600/20 max-w-xs">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#0A66C2] flex items-center justify-center flex-shrink-0 hover:opacity-90 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-white" />
              </a>
              <div>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-white hover:text-accent-blue transition-colors"
                >
                  Maks Bolotskyi
                </a>
                <p className="text-xs text-dark-400 mt-0.5">
                  CEO &mdash; Averon Partners
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {[
                { label: "What We Do", href: "#what-we-do" },
                { label: "Why Us", href: "#why-us" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-dark-300 hover:text-accent-blue transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-dark-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dark-400">
            &copy; {new Date().getFullYear()} Averon Partners. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-dark-400">
            <Link href="/privacy" className="hover:text-accent-blue transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent-blue transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
