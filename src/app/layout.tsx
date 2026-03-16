import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Averon Partners — B2B Clients for SaaS & AI Companies",
  description:
    "Averon Partners helps IT companies find B2B clients and automate business development. We specialize in SaaS and AI & Machine Learning companies expanding across Europe and the US.",
  keywords: [
    "B2B sales",
    "SaaS expansion",
    "European market entry",
    "business development",
    "client acquisition",
    "technology consulting",
    "strategic partnerships",
    "Averon Partners",
  ],
  openGraph: {
    title: "Averon Partners — B2B Clients for SaaS & AI Companies",
    description:
      "Helping IT companies find B2B clients and automate business development. Specializing in SaaS and AI & Machine Learning.",
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
