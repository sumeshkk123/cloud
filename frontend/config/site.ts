import { i18n } from "@/i18n-config";

export const siteBaseConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "/og-image.svg"
};

export const productSlugs = [
  "unilevel-pro",
  "binary-engine",
  "matrix-forge",
  "board-suite",
  "generation-flow",
  "monoline-track",
  "hybrid-flex"
] as const;

export type ProductSlug = (typeof productSlugs)[number];

export const supportedLocales = i18n.locales;
export type SupportedLocale = (typeof supportedLocales)[number];
