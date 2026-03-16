"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, CheckCircle, ArrowRight } from "lucide-react";

const CONTACT_EMAIL = "contact@averon-partners.com";

const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00",
];

function getNextBusinessDays(count: number): Date[] {
  const days: Date[] = [];
  const d = new Date();
  d.setDate(d.getDate() + 1);
  while (days.length < count) {
    const dow = d.getDay();
    if (dow !== 0 && dow !== 6) days.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }
  return days;
}

function formatDate(d: Date) {
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

function toISODate(d: Date) {
  return d.toISOString().split("T")[0];
}

function buildGoogleCalendarUrl(date: string, time: string, name: string, email: string, company: string) {
  const [h, m] = time.split(":").map(Number);
  const start = new Date(`${date}T${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:00`);
  const end = new Date(start.getTime() + 30 * 60 * 1000);

  const fmt = (dt: Date) =>
    dt.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

  const title = encodeURIComponent(`Averon Partners — Discovery Call with ${name}`);
  const details = encodeURIComponent(
    `Discovery call with Averon Partners.\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\n\nPlease join the call at the scheduled time.`
  );

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${fmt(start)}/${fmt(end)}&details=${details}&add=${encodeURIComponent(email)},${encodeURIComponent(CONTACT_EMAIL)}`;
}

function buildIcsData(date: string, time: string, name: string, email: string, company: string) {
  const [h, m] = time.split(":").map(Number);
  const start = new Date(`${date}T${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:00`);
  const end = new Date(start.getTime() + 30 * 60 * 1000);

  const fmt = (dt: Date) =>
    dt.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Averon Partners//Booking//EN",
    "BEGIN:VEVENT",
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:Averon Partners — Discovery Call with ${name}`,
    `DESCRIPTION:Discovery call.\\nName: ${name}\\nEmail: ${email}\\nCompany: ${company || "N/A"}`,
    `ORGANIZER;CN=Averon Partners:MAILTO:${CONTACT_EMAIL}`,
    `ATTENDEE;CN=${name}:MAILTO:${email}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

interface Props {
  open: boolean;
  onClose: () => void;
}

export function BookingModal({ open, onClose }: Props) {
  const [step, setStep] = useState<"form" | "confirm">("form");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [form, setForm] = useState({ name: "", email: "", company: "" });

  const days = getNextBusinessDays(10);

  const reset = () => {
    setStep("form");
    setSelectedDate("");
    setSelectedTime("");
    setForm({ name: "", email: "", company: "" });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;

    const subject = encodeURIComponent(
      `Meeting Request — ${form.name}${form.company ? ` (${form.company})` : ""}`
    );
    const body = encodeURIComponent(
      `New meeting booking from the Averon Partners website.\n\nName: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || "N/A"}\nPreferred Date: ${selectedDate}\nPreferred Time: ${selectedTime} (CET)\n\nPlease confirm or suggest an alternative time.`
    );

    window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`, "_self");
    setStep("confirm");
  };

  const handleGoogleCalendar = () => {
    const url = buildGoogleCalendarUrl(selectedDate, selectedTime, form.name, form.email, form.company);
    window.open(url, "_blank");
  };

  const handleDownloadIcs = () => {
    const ics = buildIcsData(selectedDate, selectedTime, form.name, form.email, form.company);
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "averon-partners-call.ics";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => { onClose(); reset(); }} />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-dark-800 border border-dark-600/50 shadow-2xl"
          >
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-dark-600/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
                  <Calendar size={18} className="text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Book a Call</h2>
                  <p className="text-xs text-dark-400">30-minute discovery call</p>
                </div>
              </div>
              <button
                onClick={() => { onClose(); reset(); }}
                className="p-1.5 rounded-lg hover:bg-dark-700 transition-colors text-dark-400"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {step === "form" ? (
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Date picker */}
                <div>
                  <label className="block text-sm font-medium text-dark-200 mb-2">
                    Select a Date
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {days.map((d) => {
                      const iso = toISODate(d);
                      return (
                        <button
                          key={iso}
                          type="button"
                          onClick={() => setSelectedDate(iso)}
                          className={`px-3 py-2 rounded-lg text-xs font-medium border transition-all ${
                            selectedDate === iso
                              ? "bg-accent-blue/20 border-accent-blue/50 text-white"
                              : "bg-dark-700/40 border-dark-600/30 text-dark-300 hover:border-dark-500"
                          }`}
                        >
                          {formatDate(d)}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time picker */}
                {selectedDate && (
                  <div>
                    <label className="flex items-center gap-1.5 text-sm font-medium text-dark-200 mb-2">
                      <Clock size={14} /> Select a Time <span className="text-dark-400 text-xs">(CET)</span>
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {TIME_SLOTS.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSelectedTime(t)}
                          className={`py-2 rounded-lg text-xs font-medium border transition-all ${
                            selectedTime === t
                              ? "bg-accent-blue/20 border-accent-blue/50 text-white"
                              : "bg-dark-700/40 border-dark-600/30 text-dark-300 hover:border-dark-500"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact fields */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-dark-200 mb-1">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-3 py-2.5 rounded-xl text-sm bg-dark-700/50 text-white border border-dark-600/30 focus:outline-none focus:border-accent-blue/50 transition-colors placeholder:text-dark-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-200 mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full px-3 py-2.5 rounded-xl text-sm bg-dark-700/50 text-white border border-dark-600/30 focus:outline-none focus:border-accent-blue/50 transition-colors placeholder:text-dark-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-200 mb-1">Company</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Company name (optional)"
                    className="w-full px-3 py-2.5 rounded-xl text-sm bg-dark-700/50 text-white border border-dark-600/30 focus:outline-none focus:border-accent-blue/50 transition-colors placeholder:text-dark-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!selectedDate || !selectedTime}
                  className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-accent-blue to-accent-purple hover:shadow-lg hover:shadow-accent-blue/25 transition-all disabled:opacity-40 flex items-center justify-center gap-2"
                >
                  Confirm Booking
                  <ArrowRight size={16} />
                </button>
              </form>
            ) : (
              <div className="p-6 text-center space-y-5">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <CheckCircle size={28} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Booking Submitted</h3>
                  <p className="text-sm text-dark-300">
                    We&apos;ll confirm your meeting at <strong className="text-white">{selectedTime} CET</strong> on{" "}
                    <strong className="text-white">{selectedDate}</strong>.
                  </p>
                </div>

                <p className="text-xs text-dark-400">Add this meeting to your calendar:</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleGoogleCalendar}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-dark-700 border border-dark-600/50 hover:border-accent-blue/40 transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar size={14} />
                    Google Calendar
                  </button>
                  <button
                    onClick={handleDownloadIcs}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-dark-700 border border-dark-600/50 hover:border-accent-blue/40 transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar size={14} />
                    Download .ics
                  </button>
                </div>

                <button
                  onClick={() => { onClose(); reset(); }}
                  className="text-sm text-dark-400 hover:text-white transition-colors mt-2"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
