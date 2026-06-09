import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PortfolioChatbot } from "@/components/portfolio-chatbot";
import { profile } from "@/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: `${profile.shortName} — ${profile.title}`,
    template: `%s — ${profile.shortName}`,
  },
  description: profile.shortPitch,
  keywords: [
    "Rushabh Shah",
    "AI Solutions Architect",
    "AI Researcher",
    "Data Transformation",
    "Data Governance",
    "Master Data Management",
    "Business Intelligence",
    "Technical Program Manager",
    "Agentic AI",
    "RAG",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.shortName} — ${profile.title}`,
    description: profile.shortPitch,
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <PortfolioChatbot />
      </body>
    </html>
  );
}
