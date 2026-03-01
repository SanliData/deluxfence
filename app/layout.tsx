import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LiveSupport from "@/components/LiveSupport";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deluxfences.com"),
  title: "DeluxFence | Architectural-Grade Aluminum Fencing",
  description:
    "Maintenance-free luxury aluminum fencing for American homes. One fence system for every setting—backyards, pools, suburban borders. Request a quote.",
  keywords: ["aluminum fence", "fence systems", "luxury fence", "pool fence", "residential fence", "DeluxFence"],
  openGraph: {
    title: "DeluxFence | Architectural-Grade Aluminum Fencing",
    description: "Maintenance-free luxury aluminum fencing for American homes. Engineered for elegance, built for eternity.",
    type: "website",
    url: "https://deluxfences.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="min-h-screen bg-anthracite font-sans text-white">
        <Navbar />
        <main>{children}</main>
        <LiveSupport />
      </body>
    </html>
  );
}
