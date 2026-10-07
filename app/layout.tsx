import type { Metadata } from "next";
import { Manrope, Poppins, Inter } from "next/font/google";
import "./globals.css";
import Sheet from "@/components/Sheet";
import CloudBackground from "@/components/CloudBackground";
import { profile } from "@/data/profile";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-ui", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-hero", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-section", display: "swap" });

export const metadata: Metadata = {
  title: `${profile.firstName} ${profile.lastName} — ${profile.role}`,
  description: profile.description.join(" "),
  openGraph: {
    title: `${profile.firstName} ${profile.lastName} — Portfolio`,
    description: profile.description.join(" "),
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${poppins.variable} ${inter.variable}`}>
      <body>
        <CloudBackground />
        <Sheet>{children}</Sheet>
      </body>
    </html>
  );
}
