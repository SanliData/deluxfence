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
  title: "Delux Fence | Architectural-Grade Aluminum Fencing",
  description:
    "Maintenance-free luxury aluminum fencing for American homes. Engineered for elegance, built for eternity.",
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
