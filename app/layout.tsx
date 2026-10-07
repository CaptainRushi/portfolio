import type { Metadata } from "next";
import { Manrope, Poppins, Inter } from "next/font/google";
import "./globals.css";
import Sheet from "@/components/Sheet";
import CloudBackground from "@/components/CloudBackground";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-ui", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-hero", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-section", display: "swap" });

export const metadata: Metadata = {
  title: profile.pageTitle,
  description: profile.metaDescription,
  openGraph: {
    title: profile.pageTitle,
    description: profile.metaDescription,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  jobTitle: profile.role,
  address: { "@type": "PostalAddress", addressLocality: "Nashik", addressRegion: "Maharashtra", addressCountry: "IN" },
  sameAs: socials.map((s) => s.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${poppins.variable} ${inter.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <CloudBackground />
        <Sheet>{children}</Sheet>
      </body>
    </html>
  );
}
