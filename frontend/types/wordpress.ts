import type { SupportedLocale } from "@/config/site";

export type WordpressSeo = {
  metaTitle?: string | null;
  metaDescription?: string | null;
  canonicalURL?: string | null;
  focusKeyword?: string | null;
};

export type WordpressPageContent = {
  slug: string;
  locale: SupportedLocale;
  title: string;
  contentHtml: string;
  excerpt?: string | null;
  seo?: WordpressSeo;
};
