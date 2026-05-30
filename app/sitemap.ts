import type { MetadataRoute } from "next";

const BASE_URL = "https://personal-portfolio-eight-xi-98.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE_URL, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE_URL}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/experience`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE_URL}/resume`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
