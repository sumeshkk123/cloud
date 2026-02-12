import defaultContentModule from "../shared/blog-section/default-content.js";
const defaultContent = (defaultContentModule as any).default || defaultContentModule;
import type { Locale } from "@/i18n-config";
import contentEn from "../shared/blog-section/locales/en/content.json";
import contentEs from "../shared/blog-section/locales/es/content.json";
import contentFr from "../shared/blog-section/locales/fr/content.json";
import contentIt from "../shared/blog-section/locales/it/content.json";
import contentDe from "../shared/blog-section/locales/de/content.json";
import contentPt from "../shared/blog-section/locales/pt/content.json";
import contentZh from "../shared/blog-section/locales/zh/content.json";

const localeContent: Record<Locale, Record<string, string>> = {
  en: contentEn as Record<string, string>,
  es: contentEs as Record<string, string>,
  fr: contentFr as Record<string, string>,
  it: contentIt as Record<string, string>,
  de: contentDe as Record<string, string>,
  pt: contentPt as Record<string, string>,
  zh: contentZh as Record<string, string>,
};

export interface BlogSectionContent {
  badgeLabel: string;
  heading: string;
  description: string;
  ctaText: string;
  ctaButtonText: string;
  exploreMore: string;
  spotlight: string;
}

export function getBlogSectionContent(locale: Locale): BlogSectionContent {
  const localized = localeContent[locale] ?? {};
  return {
    badgeLabel: localized.badgeLabel ?? defaultContent.badgeLabel,
    heading: localized.heading ?? defaultContent.heading,
    description: localized.description ?? defaultContent.description,
    ctaText: localized.ctaText ?? defaultContent.ctaText,
    ctaButtonText: localized.ctaButtonText ?? defaultContent.ctaButtonText,
    exploreMore: localized.exploreMore ?? defaultContent.exploreMore,
    spotlight: localized.spotlight ?? defaultContent.spotlight,
  };
}
