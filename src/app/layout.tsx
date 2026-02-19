import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Mason County Development Authority",
    template: "%s | MCDA",
  },
  description:
    "The best place in America for advanced manufacturing and AI infrastructure. Over $6 billion in active investment. River, rail, highway, and up to 8 gigawatts of new dedicated power.",
  keywords: [
    "Mason County",
    "West Virginia",
    "economic development",
    "manufacturing",
    "AI infrastructure",
    "data centers",
    "industrial sites",
    "Nucor",
    "Frontieras",
    "AIP Corp",
  ],
  authors: [{ name: "Mason County Development Authority" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Mason County Development Authority",
    title: "Mason County Development Authority",
    description:
      "The best place in America for advanced manufacturing and AI infrastructure. Over $6 billion in active investment. River, rail, highway, and up to 8 gigawatts of new dedicated power.",
    url: "https://mcwv.org",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mason County Development Authority",
    description:
      "The best place in America for advanced manufacturing and AI infrastructure. Over $6 billion in active investment.",
  },
  metadataBase: new URL("https://mcwv.org"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a1628",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${dmSans.variable}`}>
      <body className="min-h-screen antialiased bg-navy text-cream font-sans">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
