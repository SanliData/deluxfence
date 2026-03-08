import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Luxury Aluminum Fencing & Modern Gates | DeluxFences USA",
  description:
    "Browse our elegant aluminum fence gallery. Horizontal slats, privacy fences, pool fences, and modern gate designs for luxury homes.",
  openGraph: {
    title: "Gallery | DeluxFences USA",
    description: "Elegant aluminum fence gallery—horizontal slats, privacy fences, modern gates.",
    url: "https://deluxfences.com/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
