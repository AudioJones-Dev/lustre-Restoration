import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Refresh Countertops and Cabinets Without Replacement | Lustre Surface Restoration",
  description:
    "Refresh countertops, cabinets, vanities, rental units, and commercial surfaces without full replacement. Fast photo quotes for South Florida homeowners, Airbnb hosts, landlords, and property managers.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "countertop wrapping South Florida",
    "cabinet wrapping Miami",
    "kitchen wrapping Miami",
    "countertop wrap Broward",
    "cabinet wrap Palm Beach",
    "Airbnb rental refresh Miami",
    "surface restoration South Florida",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
