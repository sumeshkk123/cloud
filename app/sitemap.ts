import type { MetadataRoute } from "next";

import { productSlugs, siteBaseConfig, supportedLocales } from "@/config/site";
import { buildLocalizedPath } from "@/lib/locale-links";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = ["", "/products", "/compare-plans", "/support"];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of supportedLocales) {
    for (const path of staticPaths) {
      const localizedPath = buildLocalizedPath(path || "/", locale);
      entries.push({
        url: `${siteBaseConfig.url}${localizedPath}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: path === "" ? 1 : 0.8
      });
    }

    for (const slug of productSlugs) {
      entries.push({
        url: `${siteBaseConfig.url}${buildLocalizedPath(`/products/${slug}`, locale)}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.9
      });
    }
  }

  return entries;
}
