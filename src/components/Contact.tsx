"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Mail, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { BookingModal } from "./BookingModal";

const CONTACT_EMAIL = "contact@averon-partners.com";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      setTimeout(() => {
        setStatus("idle");
        setForm({ name: "", email: "", company: "", message: "" });
      }, 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-blue-light mb-4 block">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get B2B Clients
            <span className="gradient-text"> for Your Product?</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-dark-300 leading-relaxed">
            Tell us about your product and target market
            &mdash; we&apos;ll show you how we can help.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="p-8 rounded-2xl bg-dark-700/20 border border-dark-600/30">
            <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-8">
              <button
                onClick={() => setBookingOpen(true)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple hover:shadow-lg hover:shadow-accent-blue/25 transition-all"
              >
                <Calendar size={16} />
                Schedule a Meeting
              </button>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-dark-200 rounded-xl bg-dark-700/50 border border-dark-600/30 hover:border-accent-blue/30 hover:text-white transition-all"
              >
                <Mail size={16} />
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-dark-600/30" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 text-xs text-dark-400 bg-dark-800/80 rounded-full">
                  or send us a message
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-dark-200 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm bg-dark-700/50 text-white border border-dark-600/30 focus:outline-none focus:border-accent-blue/50 transition-colors placeholder:text-dark-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-200 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm bg-dark-700/50 text-white border border-dark-600/30 focus:outline-none focus:border-accent-blue/50 transition-colors placeholder:text-dark-400"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-200 mb-1.5">
                  Company
                </label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm bg-dark-700/50 text-white border border-dark-600/30 focus:outline-none focus:border-accent-blue/50 transition-colors placeholder:text-dark-400"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-200 mb-1.5">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl text-sm bg-dark-700/50 text-white border border-dark-600/30 focus:outline-none focus:border-accent-blue/50 transition-colors resize-none placeholder:text-dark-400"
                  placeholder="Tell us about your product and target clients..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="w-full py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-accent-blue to-accent-purple hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {status === "sending" && (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending&hellip;
                  </>
                )}
                {status === "sent" && (
                  <>
                    <CheckCircle size={16} />
                    Message Sent
                  </>
                )}
                {status === "error" && "Something went wrong — try again"}
                {status === "idle" && (
                  <>
                    Get in Touch
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>
  );
}
