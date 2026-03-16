"use client";

import { Logo } from "./Logo";
import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const CONTACT_EMAIL = "contact@averon-partners.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/maks-bolotskyi-62247b398/";

export function Footer() {
  return (
    <footer className="py-16 border-t dark:border-dark-700/50 border-gray-200 dark:bg-dark-900 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand + description */}
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 text-sm dark:text-dark-300 text-gray-600 leading-relaxed max-w-md">
              Averon Partners helps SaaS, AI, automation, and technology companies
              acquire B2B clients and expand across European and US markets. We combine
              deep industry expertise with proven business development methodologies.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <Mail size={14} className="dark:text-dark-400 text-gray-400" />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm dark:text-dark-300 text-gray-600 hover:text-accent-blue dark:hover:text-accent-blue transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            {/* LinkedIn — CEO */}
            <div className="mt-6 flex items-start gap-3 p-4 rounded-xl dark:bg-dark-700/30 bg-white border dark:border-dark-600/20 border-gray-100 max-w-xs">
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
                  className="text-sm font-semibold dark:text-white text-gray-900 hover:text-accent-blue dark:hover:text-accent-blue transition-colors"
                >
                  Maks Bolotskyi
                </a>
                <p className="text-xs dark:text-dark-400 text-gray-500 mt-0.5">
                  CEO &mdash; Averon Partners
                </p>
              </div>
            </div>
          </div>

          {/* Services links */}
          <div>
            <h4 className="text-sm font-semibold dark:text-white text-gray-900 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "B2B Client Acquisition",
                "SaaS Market Expansion",
                "Strategic Partnerships",
                "Sales Optimization",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-sm dark:text-dark-300 text-gray-600 hover:text-accent-blue dark:hover:text-accent-blue transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-sm font-semibold dark:text-white text-gray-900 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Expertise", href: "#expertise" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm dark:text-dark-300 text-gray-600 hover:text-accent-blue dark:hover:text-accent-blue transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t dark:border-dark-700/50 border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs dark:text-dark-400 text-gray-500">
            &copy; {new Date().getFullYear()} Averon Partners. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs dark:text-dark-400 text-gray-500">
            <Link
              href="/privacy"
              className="hover:text-accent-blue transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-accent-blue transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
