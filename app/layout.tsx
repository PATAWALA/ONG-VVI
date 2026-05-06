// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

// URL de base (à configurer en production)
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://https://ong-vvi-g1fq.vercel.app"; // ← CHANGEZ ICI

export const metadata: Metadata = {
  title: "ONG VVI - Autonomisation des femmes et soutien aux orphelins au Bénin",
  description:
    "Vision et Volonté d’Impact (VVI) agit pour les femmes, les filles-mères et les orphelins au Bénin. Formations, santé, éducation.",
  openGraph: {
    title: "ONG VVI - Autonomisation des femmes et soutien aux orphelins au Bénin",
    description:
      "Vision et Volonté d’Impact (VVI) agit pour les femmes, les filles-mères et les orphelins au Bénin.",
    url: BASE_URL,
    siteName: "ONG VVI",
    images: [
      {
        url: `${BASE_URL}/images/logo.jpeg`,
        width: 800,
        height: 600,
        alt: "Logo ONG VVI",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ONG VVI - Autonomisation des femmes et soutien aux orphelins au Bénin",
    description:
      "Vision et Volonté d’Impact (VVI) agit pour les femmes, les filles-mères et les orphelins au Bénin.",
    images: [`${BASE_URL}/images/logo.jpeg`],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}