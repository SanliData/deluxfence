import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Luxury Aluminum Fencing & Modern Gates | DeluxFences USA",
  description:
    "High-grade, maintenance-free aluminum fencing systems for the American luxury home. One fence system for every setting—backyards, pools, suburban borders.",
  openGraph: {
    title: "Products | DeluxFences USA",
    description: "High-grade aluminum fencing systems for luxury homes. Backyards, pools, suburban borders.",
    url: "https://deluxfences.com/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
