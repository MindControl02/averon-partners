"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Mail, ArrowRight, CheckCircle } from "lucide-react";

const CONTACT_EMAIL = "contact@averon-partners.com";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `New inquiry from ${form.name}${form.company ? ` — ${form.company}` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || "N/A"}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", company: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase dark:text-accent-blue-light text-accent-blue mb-4 block">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold dark:text-white text-gray-900 mb-6">
            Let&apos;s Start
            <span className="gradient-text"> Growing Together</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg dark:text-dark-300 text-gray-600 leading-relaxed">
            Ready to expand in Europe? Get in touch and let&apos;s discuss how we can
            accelerate your growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 rounded-2xl dark:bg-dark-700/30 bg-white border dark:border-dark-600/30 border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 flex items-center justify-center mb-4">
                <Calendar size={22} className="text-accent-blue" />
              </div>
              <h3 className="text-lg font-bold dark:text-white text-gray-900 mb-2">
                Schedule a Meeting
              </h3>
              <p className="text-sm dark:text-dark-300 text-gray-600 mb-4 leading-relaxed">
                Book a 30-minute discovery call with our team to discuss your
                European expansion goals.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Meeting Request — Averon Partners")}`}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple hover:shadow-lg hover:shadow-accent-blue/25 transition-all"
              >
                <Calendar size={16} />
                Book a Call
              </a>
            </div>

            <div className="p-6 rounded-2xl dark:bg-dark-700/30 bg-white border dark:border-dark-600/30 border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 flex items-center justify-center mb-4">
                <Mail size={22} className="text-accent-blue" />
              </div>
              <h3 className="text-lg font-bold dark:text-white text-gray-900 mb-2">
                Email Us
              </h3>
              <p className="text-sm dark:text-dark-300 text-gray-600 mb-2 leading-relaxed">
                Prefer email? Reach out to us directly.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm font-medium text-accent-blue hover:text-accent-blue-light transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl dark:bg-dark-700/20 bg-white border dark:border-dark-600/30 border-gray-100 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium dark:text-dark-200 text-gray-700 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm dark:bg-dark-700/50 bg-gray-50 dark:text-white text-gray-900 border dark:border-dark-600/30 border-gray-200 focus:outline-none focus:border-accent-blue/50 transition-colors placeholder:dark:text-dark-400 placeholder:text-gray-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium dark:text-dark-200 text-gray-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm dark:bg-dark-700/50 bg-gray-50 dark:text-white text-gray-900 border dark:border-dark-600/30 border-gray-200 focus:outline-none focus:border-accent-blue/50 transition-colors placeholder:dark:text-dark-400 placeholder:text-gray-400"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium dark:text-dark-200 text-gray-700 mb-1.5">
                  Company
                </label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm dark:bg-dark-700/50 bg-gray-50 dark:text-white text-gray-900 border dark:border-dark-600/30 border-gray-200 focus:outline-none focus:border-accent-blue/50 transition-colors placeholder:dark:text-dark-400 placeholder:text-gray-400"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium dark:text-dark-200 text-gray-700 mb-1.5">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl text-sm dark:bg-dark-700/50 bg-gray-50 dark:text-white text-gray-900 border dark:border-dark-600/30 border-gray-200 focus:outline-none focus:border-accent-blue/50 transition-colors resize-none placeholder:dark:text-dark-400 placeholder:text-gray-400"
                  placeholder="Tell us about your goals..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-accent-blue to-accent-purple hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={16} />
                    Opening mail client&hellip;
                  </>
                ) : (
                  <>
                    Talk to Us
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
