"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Expertise } from "@/components/Expertise";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AIChat } from "@/components/AIChat";

export default function Home() {
  return (
    <main className="bg-dark-900 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Expertise />
      <Contact />
      <Footer />
      <AIChat />
    </main>
  );
}
