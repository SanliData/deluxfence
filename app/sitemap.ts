import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://deluxfences.com";

  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/products`, lastModified: new Date() },
    { url: `${base}/projects`, lastModified: new Date() },
    { url: `${base}/gallery`, lastModified: new Date() },
    { url: `${base}/why-aluminum`, lastModified: new Date() },
    { url: `${base}/quote-calculator`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
  ];
}
