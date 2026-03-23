"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, CheckCircle, ArrowRight, Loader2 } from "lucide-react";

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
  const fmt = (dt: Date) => dt.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const title = encodeURIComponent(`Averon Partners — Discovery Call with ${name}`);
  const details = encodeURIComponent(`Discovery call with Averon Partners.\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}`);
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${fmt(start)}/${fmt(end)}&details=${details}&add=${encodeURIComponent(email)},${encodeURIComponent(CONTACT_EMAIL)}`;
}

function buildIcsData(date: string, time: string, name: string, email: string, company: string) {
  const [h, m] = time.split(":").map(Number);
  const start = new Date(`${date}T${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:00`);
  const end = new Date(start.getTime() + 30 * 60 * 1000);
  const fmt = (dt: Date) => dt.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  return [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Averon Partners//Booking//EN", "BEGIN:VEVENT",
    `DTSTART:${fmt(start)}`, `DTEND:${fmt(end)}`,
    `SUMMARY:Averon Partners — Discovery Call with ${name}`,
    `DESCRIPTION:Discovery call.\\nName: ${name}\\nEmail: ${email}\\nCompany: ${company || "N/A"}`,
    `ORGANIZER;CN=Averon Partners:MAILTO:${CONTACT_EMAIL}`, `ATTENDEE;CN=${name}:MAILTO:${email}`,
    "END:VEVENT", "END:VCALENDAR",
  ].join("\r\n");
}

interface Props { open: boolean; onClose: () => void; }

export function BookingModal({ open, onClose }: Props) {
  const [step, setStep] = useState<"form" | "sending" | "confirm">("form");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [form, setForm] = useState({ name: "", email: "", company: "" });
  const days = getNextBusinessDays(10);

  const reset = () => { setStep("form"); setSelectedDate(""); setSelectedTime(""); setForm({ name: "", email: "", company: "" }); };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;
    setStep("sending");
    try {
      const res = await fetch("/api/booking", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: form.name, email: form.email, company: form.company, date: selectedDate, time: selectedTime }) });
      if (!res.ok) throw new Error("Request failed");
      setStep("confirm");
    } catch { setStep("confirm"); }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => { onClose(); reset(); }} />
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.97 }} transition={{ duration: 0.25 }} className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-light-300 shadow-2xl">
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-light-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
                  <Calendar size={18} className="text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-light-900">Book a Call</h2>
                  <p className="text-xs text-light-500">30-minute discovery call</p>
                </div>
              </div>
              <button onClick={() => { onClose(); reset(); }} className="p-1.5 rounded-lg hover:bg-light-100 transition-colors text-light-500" aria-label="Close"><X size={18} /></button>
            </div>

            {step === "form" ? (
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-light-700 mb-2">Select a Date</label>
                  <div className="flex flex-wrap gap-2">
                    {days.map((d) => { const iso = toISODate(d); return (
                      <button key={iso} type="button" onClick={() => setSelectedDate(iso)} className={`px-3 py-2 rounded-lg text-xs font-medium border transition-all ${selectedDate === iso ? "bg-accent-blue/10 border-accent-blue/50 text-accent-blue" : "bg-light-100 border-light-300/60 text-light-600 hover:border-light-400"}`}>{formatDate(d)}</button>
                    ); })}
                  </div>
                </div>

                {selectedDate && (
                  <div>
                    <label className="flex items-center gap-1.5 text-sm font-medium text-light-700 mb-2"><Clock size={14} /> Select a Time <span className="text-light-500 text-xs">(CET)</span></label>
                    <div className="grid grid-cols-5 gap-2">
                      {TIME_SLOTS.map((t) => (
                        <button key={t} type="button" onClick={() => setSelectedTime(t)} className={`py-2 rounded-lg text-xs font-medium border transition-all ${selectedTime === t ? "bg-accent-blue/10 border-accent-blue/50 text-accent-blue" : "bg-light-100 border-light-300/60 text-light-600 hover:border-light-400"}`}>{t}</button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-light-700 mb-1">Name</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="w-full px-3 py-2.5 rounded-xl text-sm bg-light-100 text-light-900 border border-light-300/60 focus:outline-none focus:border-accent-blue/50 transition-colors placeholder:text-light-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-light-700 mb-1">Email</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" className="w-full px-3 py-2.5 rounded-xl text-sm bg-light-100 text-light-900 border border-light-300/60 focus:outline-none focus:border-accent-blue/50 transition-colors placeholder:text-light-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-light-700 mb-1">Company</label>
                  <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company name (optional)" className="w-full px-3 py-2.5 rounded-xl text-sm bg-light-100 text-light-900 border border-light-300/60 focus:outline-none focus:border-accent-blue/50 transition-colors placeholder:text-light-500" />
                </div>
                <button type="submit" disabled={!selectedDate || !selectedTime} className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-accent-blue to-accent-purple hover:shadow-lg hover:shadow-accent-blue/25 transition-all disabled:opacity-40 flex items-center justify-center gap-2">Confirm Booking <ArrowRight size={16} /></button>
              </form>
            ) : step === "sending" ? (
              <div className="p-6 text-center space-y-4"><Loader2 size={32} className="mx-auto text-accent-blue animate-spin" /><p className="text-sm text-light-600">Submitting your booking&hellip;</p></div>
            ) : (
              <div className="p-6 text-center space-y-5">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 flex items-center justify-center"><CheckCircle size={28} className="text-emerald-500" /></div>
                <div>
                  <h3 className="text-lg font-bold text-light-900 mb-1">Booking Submitted</h3>
                  <p className="text-sm text-light-600">We&apos;ll confirm your meeting at <strong className="text-light-900">{selectedTime} CET</strong> on <strong className="text-light-900">{selectedDate}</strong>.</p>
                </div>
                <p className="text-xs text-light-500">Add this meeting to your calendar:</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button onClick={() => { const url = buildGoogleCalendarUrl(selectedDate, selectedTime, form.name, form.email, form.company); window.open(url, "_blank"); }} className="px-4 py-2.5 rounded-xl text-xs font-semibold text-light-700 bg-light-100 border border-light-300 hover:border-accent-blue/40 transition-all flex items-center justify-center gap-2"><Calendar size={14} />Google Calendar</button>
                  <button onClick={() => { const ics = buildIcsData(selectedDate, selectedTime, form.name, form.email, form.company); const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" }); const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = "averon-partners-call.ics"; a.click(); URL.revokeObjectURL(url); }} className="px-4 py-2.5 rounded-xl text-xs font-semibold text-light-700 bg-light-100 border border-light-300 hover:border-accent-blue/40 transition-all flex items-center justify-center gap-2"><Calendar size={14} />Download .ics</button>
                </div>
                <button onClick={() => { onClose(); reset(); }} className="text-sm text-light-500 hover:text-light-900 transition-colors mt-2">Close</button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
