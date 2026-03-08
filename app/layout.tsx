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
  title: "DeluxFences | Luxury Aluminum Fencing & Modern Gates",
  description:
    "Premium architectural-grade aluminum fencing solutions in Dallas and across the USA.",
  keywords: [
    "aluminum fence",
    "luxury fence",
    "modern gates",
    "Dallas fence",
    "horizontal slat fence",
    "privacy fence",
    "architectural fence",
    "DeluxFences USA",
  ],
  openGraph: {
    title: "DeluxFences | Luxury Aluminum Fencing & Modern Gates",
    description:
      "Premium architectural-grade aluminum fencing solutions in Dallas and across the USA.",
    type: "website",
    url: "https://deluxfences.com",
    siteName: "DeluxFences USA",
    locale: "en_US",
    images: [
      {
        url: "/images/fence/fence-3.png",
        width: 1200,
        height: 630,
        alt: "Modern black aluminum fence and gate with luxury home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeluxFences | Luxury Aluminum Fencing & Modern Gates",
    description:
      "Premium architectural-grade aluminum fencing solutions in Dallas and across the USA.",
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
