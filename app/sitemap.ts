import type { MetadataRoute } from "next";

const BASE = "https://deluxfences.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${BASE}/products`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/gallery`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/projects`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/why-aluminum`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
  ];
  return routes;
}
