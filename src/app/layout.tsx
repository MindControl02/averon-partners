import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Averon Partners — B2B Client Acquisition for IT Companies",
  description:
    "Averon Partners helps IT and technology companies find B2B clients. We identify decision-makers, generate meetings, and create real business opportunities.",
  keywords: [
    "B2B client acquisition",
    "IT business development",
    "technology sales",
    "lead generation",
    "decision-maker outreach",
    "Averon Partners",
  ],
  openGraph: {
    title: "Averon Partners — B2B Client Acquisition for IT Companies",
    description:
      "We help IT and technology companies find B2B clients through targeted outreach and deal generation.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="antialiased font-sans bg-dark-900 text-dark-100">
        {children}
      </body>
    </html>
  );
}
