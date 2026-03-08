import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Luxury Aluminum Fencing & Modern Gates | DeluxFences USA",
  description:
    "See how architectural-grade aluminum fencing transforms American homes across climates and styles. Modern homes, pools, suburban estates.",
  openGraph: {
    title: "Projects | DeluxFences USA",
    description: "Architectural-grade aluminum fencing projects across American homes and climates.",
    url: "https://deluxfences.com/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
