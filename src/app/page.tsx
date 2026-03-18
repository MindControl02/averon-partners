"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Expertise } from "@/components/Expertise";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-dark-900 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
