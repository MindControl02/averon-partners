"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  role: "assistant" | "user";
  content: string;
}

const KNOWLEDGE_BASE: Record<string, string> = {
  greeting:
    "Hello! I'm the Averon Partners assistant. I can tell you about our services, expertise, and how we help technology companies grow in Europe. What would you like to know?",
  services:
    "We offer four core services:\n\n• **B2B Client Acquisition** — full pipeline development from prospecting to closing\n• **SaaS Market Expansion** — go-to-market strategies for European entry\n• **Strategic Partnerships** — channel and alliance building across Europe\n• **Sales Process Optimization** — improving your sales efficiency and conversion rates\n\nWould you like details on any specific service?",
  about:
    "Averon Partners is a business development firm specializing in helping SaaS, AI, automation, and technology companies acquire B2B clients and expand in European markets. We bring years of experience in negotiations, client relationships, and closing deals across diverse European markets.",
  industries:
    "We work with companies in SaaS platforms, AI & machine learning, automation tools, CRM & analytics, cybersecurity, and fintech. Our focus is exclusively on technology companies, giving us deep domain expertise.",
  europe:
    "We work with companies expanding remotely across Europe and the United States. We understand the diverse regulatory frameworks, business cultures, and buyer behaviors that make international expansion unique.",
  pricing:
    "Our engagement models are tailored to each client's needs. We typically work with retainer-based partnerships or performance-driven models. I'd recommend booking a call with our team to discuss the best fit for your company.",
  contact:
    "You can reach us through the contact form on this page, or email us directly at **contact@averon-partners.com**. Just scroll down to the Contact section, or click 'Book a Call' in the navigation. We typically respond within 24 hours.",
  meeting:
    "Great idea! You can schedule a meeting with our team by using the contact form below or clicking 'Book a Call' in the navigation. We'd love to learn about your growth goals.",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();

  if (lower.match(/\b(hi|hello|hey|greetings)\b/)) return KNOWLEDGE_BASE.greeting;
  if (lower.match(/\b(service|offer|do you do|help with|what do)\b/)) return KNOWLEDGE_BASE.services;
  if (lower.match(/\b(about|who are|company|averon|tell me)\b/)) return KNOWLEDGE_BASE.about;
  if (lower.match(/\b(industr|sector|saas|ai |automation|crm|fintech|work with)\b/)) return KNOWLEDGE_BASE.industries;
  if (lower.match(/\b(europ|market|country|countries|region)\b/)) return KNOWLEDGE_BASE.europe;
  if (lower.match(/\b(pric|cost|fee|how much|budget|pay)\b/)) return KNOWLEDGE_BASE.pricing;
  if (lower.match(/\b(contact|reach|email|phone)\b/)) return KNOWLEDGE_BASE.contact;
  if (lower.match(/\b(meet|book|call|schedule|appointment)\b/)) return KNOWLEDGE_BASE.meeting;
  if (lower.match(/\b(acqui|client|lead|prospect|pipeline)\b/))
    return "Our B2B Client Acquisition service covers the entire pipeline — from identifying ideal prospects to closing deals. We use targeted outreach, relationship-driven selling, and data-backed strategies to build your European client base. Would you like to book a call to discuss?";
  if (lower.match(/\b(partner|channel|alliance|reseller)\b/))
    return "We help build strategic partnerships, channel alliances, and reseller networks across Europe. This multiplies your market reach without the overhead of direct sales operations. Interested in learning more?";
  if (lower.match(/\b(expansion|expand|enter|go.to.market|gtm)\b/))
    return "Our SaaS Market Expansion service provides comprehensive go-to-market strategies for European entry. From market research and competitive analysis to first revenue, we guide the entire journey. Shall we discuss your expansion plans?";
  if (lower.match(/\b(process|optim|sales cycle|conversion|crm)\b/))
    return "We audit and optimize your sales processes, tools, and team performance. Our approach typically shortens sales cycles by 20-30% and significantly improves conversion rates. Want to explore this further?";

  return "That's a great question! While I can answer basics about Averon Partners, for more detailed discussions I'd recommend connecting with our team directly. You can book a call or use the contact form below. Is there anything else about our services I can help with?";
}

export function AIChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: KNOWLEDGE_BASE.greeting },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(userMsg);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 600 + Math.random() * 800);
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-xl shadow-accent-blue/25 flex items-center justify-center hover:shadow-2xl hover:shadow-accent-blue/30 transition-shadow"
        aria-label="Toggle AI chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle size={22} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-10rem)] rounded-2xl overflow-hidden shadow-2xl dark:shadow-accent-blue/10 border dark:border-dark-600/50 border-gray-200 flex flex-col dark:bg-dark-800 bg-white"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b dark:border-dark-600/50 border-gray-100 bg-gradient-to-r dark:from-dark-700/50 dark:to-dark-800 from-gray-50 to-white">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold dark:text-white text-gray-900">
                  Averon Assistant
                </div>
                <div className="text-xs dark:text-dark-400 text-gray-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Online
                </div>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      msg.role === "assistant"
                        ? "bg-gradient-to-br from-accent-blue to-accent-purple"
                        : "dark:bg-dark-600 bg-gray-200"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <Bot size={14} className="text-white" />
                    ) : (
                      <User size={14} className="dark:text-dark-200 text-gray-600" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "assistant"
                        ? "dark:bg-dark-700/60 bg-gray-100 dark:text-dark-100 text-gray-800 rounded-tl-md"
                        : "bg-gradient-to-r from-accent-blue to-accent-purple text-white rounded-tr-md"
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: msg.content
                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                        .replace(/\n/g, "<br/>")
                        .replace(/•/g, "&bull;"),
                    }}
                  />
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2.5"
                >
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center flex-shrink-0">
                    <Bot size={14} className="text-white" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl rounded-tl-md dark:bg-dark-700/60 bg-gray-100">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((d) => (
                        <motion.div
                          key={d}
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: d * 0.15 }}
                          className="w-1.5 h-1.5 rounded-full dark:bg-dark-400 bg-gray-400"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSend}
              className="px-4 py-3 border-t dark:border-dark-600/50 border-gray-100 flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our services..."
                className="flex-1 px-4 py-2.5 rounded-xl text-sm dark:bg-dark-700/60 bg-gray-100 dark:text-white text-gray-900 placeholder:dark:text-dark-400 placeholder:text-gray-400 border dark:border-dark-600/30 border-gray-200 focus:outline-none focus:border-accent-blue/50 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-10 h-10 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white flex items-center justify-center disabled:opacity-40 hover:shadow-lg hover:shadow-accent-blue/25 transition-all"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
