import type { Metadata } from "next";
import WhyAluminum from "@/components/WhyAluminum";

export const metadata: Metadata = {
  title: "Why Aluminum | Luxury Aluminum Fencing | DeluxFences USA",
  description:
    "Why choose aluminum fencing: modern aesthetics, environmental adaptability, flexible applications, privacy and landscape harmony for your American home.",
  openGraph: {
    title: "Why Aluminum | DeluxFences USA",
    description: "Modern aesthetics, environmental adaptability, flexible applications, privacy and landscape harmony.",
    url: "https://deluxfences.com/why-aluminum",
  },
};

export default function WhyAluminumPage() {
  return (
    <div className="min-h-screen bg-anthracite">
      <WhyAluminum />
    </div>
  );
}
