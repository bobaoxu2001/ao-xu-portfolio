import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL = "https://personal-portfolio-eight-xi-98.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: siteConfig.seoTitle,
  description: siteConfig.seoDescription,
  authors: [{ name: siteConfig.name, url: SITE_URL }],
  creator: siteConfig.name,
  keywords: [
    "Ao Xu",
    "Allen Xu",
    "AI analyst",
    "data scientist",
    "LLM workflows",
    "NLP",
    "product analytics",
    "machine learning",
    "NYU Data Science",
  ],
  openGraph: {
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    type: "website",
    url: SITE_URL,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
  },
  alternates: { canonical: SITE_URL },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  alternateName: "Allen Xu",
  jobTitle: siteConfig.title,
  description: siteConfig.positioning,
  email: `mailto:${siteConfig.email}`,
  url: SITE_URL,
  sameAs: [siteConfig.linkedin, siteConfig.github],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "New York University" },
    { "@type": "CollegeOrUniversity", name: "University of California, Santa Barbara" },
  ],
  knowsAbout: [
    "Machine Learning",
    "Natural Language Processing",
    "Large Language Models",
    "Product Analytics",
    "Time-Series Forecasting",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:text-sm focus:font-semibold focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
