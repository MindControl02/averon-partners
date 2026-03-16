import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Averon Partners — B2B Growth & SaaS Expansion in Europe",
  description:
    "Averon Partners helps SaaS, AI, automation and technology companies acquire B2B clients and expand across European and US markets. Expert business development and strategic partnerships.",
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
    title: "Averon Partners — B2B Growth & SaaS Expansion in Europe",
    description:
      "Helping SaaS and technology companies scale in European and US markets through expert B2B client acquisition and business development.",
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
