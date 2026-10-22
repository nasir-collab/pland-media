import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/SiteShell";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Plan D Media | 360° Digital Growth & Performance Marketing",
  description:
    "LEADTECH PLAN D MEDIA (OPC) PRIVATE LIMITED. Strategic advertising, high-ROAS performance marketing, enterprise SEO, and digital distribution.",
  keywords: [
    "Plan D Media",
    "Whiteboard Media Reference",
    "Performance Marketing Agency Kolkata",
    "Digital Advertising Kolkata",
    "Creative Strategy Agency",
  ],
  authors: [{ name: "Plan D Media" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} font-sans h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-[#111111] text-[#ffffff] font-sans selection:bg-[#E8B626] selection:text-black">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
