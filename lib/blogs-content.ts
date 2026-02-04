import defaultContentModule from "../shared/blogs/default-content.js";
import type { Locale } from "@/i18n-config";

export interface BlogsHeroMetric {
  label: string;
  value: string;
  detail: string;
}

export interface BlogsHeroContent {
  badgeText: string;
  beforeText: string;
  highlightText: string;
  afterText: string;
  description: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  metrics: BlogsHeroMetric[];
}

export interface BlogsCtaContent {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  trustIndicators: [string, string, string];
}

export interface BlogsFaqItem {
  question: string;
  answer: string;
}

export interface BlogsFaqContent {
  badge: string;
  heading: string;
  description: string;
  items: BlogsFaqItem[];
}

export interface BlogsArticleListContent {
  titleLabel: string;
  postFound: string;
  postsFound: string;
  searchPlaceholder: string;
  clearSearchLabel: string;
  noResultsMessage: string;
  pageOf: string;
  previousPageLabel: string;
  nextPageLabel: string;
  paginationAriaLabel: string;
  showingResultsLabel: string;
}

export interface BlogsAuthorBioContent {
  heading: string;
  name: string;
  role: string;
  biography: string;
  linkedInUrl: string | null;
  imageAlt: string;
}

type DefaultBlogsContent = {
  hero: BlogsHeroContent;
  cta: BlogsCtaContent;
  faq: BlogsFaqContent;
  articleList: BlogsArticleListContent;
  authorBio: BlogsAuthorBioContent;
};
const defaultContent: DefaultBlogsContent =
  (defaultContentModule as { default?: DefaultBlogsContent }).default || (defaultContentModule as DefaultBlogsContent);

const heroCache: Map<Locale, BlogsHeroContent> = new Map();
const ctaCache: Map<Locale, BlogsCtaContent> = new Map();
const faqCache: Map<Locale, BlogsFaqContent> = new Map();
const articleListCache: Map<Locale, BlogsArticleListContent> = new Map();
const authorBioCache: Map<Locale, BlogsAuthorBioContent> = new Map();

export function getBlogsHeroContent(locale: Locale): BlogsHeroContent {
  if (heroCache.has(locale)) {
    return heroCache.get(locale)!;
  }

  let localized: Partial<BlogsHeroContent> = {};
  try {
    const loaded = require(`../shared/blogs/locales/${locale}/content.json`);
    localized = loaded?.hero ?? {};
  } catch {
    // fallback to default
  }

  const merged: BlogsHeroContent = {
    badgeText: localized.badgeText ?? defaultContent.hero.badgeText,
    beforeText: localized.beforeText ?? defaultContent.hero.beforeText,
    highlightText: localized.highlightText ?? defaultContent.hero.highlightText,
    afterText: localized.afterText ?? defaultContent.hero.afterText,
    description: localized.description ?? defaultContent.hero.description,
    primaryCtaLabel: localized.primaryCtaLabel ?? defaultContent.hero.primaryCtaLabel,
    secondaryCtaLabel: localized.secondaryCtaLabel ?? defaultContent.hero.secondaryCtaLabel,
    metrics:
      localized.metrics && Array.isArray(localized.metrics) && localized.metrics.length > 0
        ? localized.metrics
        : defaultContent.hero.metrics
  };

  heroCache.set(locale, merged);
  return merged;
}

export function getBlogsCtaContent(locale: Locale): BlogsCtaContent {
  if (ctaCache.has(locale)) {
    return ctaCache.get(locale)!;
  }

  let localized: Partial<BlogsCtaContent> = {};
  try {
    const loaded = require(`../shared/blogs/locales/${locale}/content.json`);
    localized = loaded?.cta ?? {};
  } catch {
    // fallback to default
  }

  const defaultTrust = defaultContent.cta.trustIndicators;
  const merged: BlogsCtaContent = {
    title: localized.title ?? defaultContent.cta.title,
    description: localized.description ?? defaultContent.cta.description,
    primaryButtonText: localized.primaryButtonText ?? defaultContent.cta.primaryButtonText,
    secondaryButtonText: localized.secondaryButtonText ?? defaultContent.cta.secondaryButtonText,
    trustIndicators:
      localized.trustIndicators &&
      Array.isArray(localized.trustIndicators) &&
      localized.trustIndicators.length >= 3
        ? [localized.trustIndicators[0], localized.trustIndicators[1], localized.trustIndicators[2]]
        : defaultTrust
  };

  ctaCache.set(locale, merged);
  return merged;
}

export function getBlogsFaqContent(locale: Locale): BlogsFaqContent {
  if (faqCache.has(locale)) {
    return faqCache.get(locale)!;
  }

  let localized: Partial<BlogsFaqContent> = {};
  try {
    const loaded = require(`../shared/blogs/locales/${locale}/content.json`);
    localized = loaded?.faq ?? {};
  } catch {
    // fallback to default
  }

  const defaultItems = defaultContent.faq.items;
  const localizedItems = localized.items && Array.isArray(localized.items) ? localized.items : [];
  const items: BlogsFaqItem[] = defaultItems.map((defaultItem, i) => ({
    question: localizedItems[i]?.question ?? defaultItem.question,
    answer: localizedItems[i]?.answer ?? defaultItem.answer
  }));

  const merged: BlogsFaqContent = {
    badge: localized.badge ?? defaultContent.faq.badge,
    heading: localized.heading ?? defaultContent.faq.heading,
    description: localized.description ?? defaultContent.faq.description,
    items
  };

  faqCache.set(locale, merged);
  return merged;
}

export function getBlogsArticleListContent(locale: Locale): BlogsArticleListContent {
  if (articleListCache.has(locale)) {
    return articleListCache.get(locale)!;
  }

  let localized: Partial<BlogsArticleListContent> = {};
  try {
    const loaded = require(`../shared/blogs/locales/${locale}/content.json`);
    localized = loaded?.articleList ?? {};
  } catch {
    // fallback to default
  }

  const merged: BlogsArticleListContent = {
    titleLabel: localized.titleLabel ?? defaultContent.articleList.titleLabel,
    postFound: localized.postFound ?? defaultContent.articleList.postFound,
    postsFound: localized.postsFound ?? defaultContent.articleList.postsFound,
    searchPlaceholder: localized.searchPlaceholder ?? defaultContent.articleList.searchPlaceholder,
    clearSearchLabel: localized.clearSearchLabel ?? defaultContent.articleList.clearSearchLabel,
    noResultsMessage: localized.noResultsMessage ?? defaultContent.articleList.noResultsMessage,
    pageOf: localized.pageOf ?? defaultContent.articleList.pageOf,
    previousPageLabel: localized.previousPageLabel ?? defaultContent.articleList.previousPageLabel,
    nextPageLabel: localized.nextPageLabel ?? defaultContent.articleList.nextPageLabel,
    paginationAriaLabel: localized.paginationAriaLabel ?? defaultContent.articleList.paginationAriaLabel,
    showingResultsLabel: localized.showingResultsLabel ?? defaultContent.articleList.showingResultsLabel
  };

  articleListCache.set(locale, merged);
  return merged;
}

export function getBlogsAuthorBioContent(locale: Locale): BlogsAuthorBioContent {
  if (authorBioCache.has(locale)) {
    return authorBioCache.get(locale)!;
  }

  let localized: Partial<BlogsAuthorBioContent> = {};
  try {
    const loaded = require(`../shared/blogs/locales/${locale}/content.json`);
    localized = loaded?.authorBio ?? {};
  } catch {
    // fallback to default
  }

  const merged: BlogsAuthorBioContent = {
    heading: localized.heading ?? defaultContent.authorBio.heading,
    name: localized.name ?? defaultContent.authorBio.name,
    role: localized.role ?? defaultContent.authorBio.role,
    biography: localized.biography ?? defaultContent.authorBio.biography,
    linkedInUrl: localized.linkedInUrl ?? defaultContent.authorBio.linkedInUrl ?? null,
    imageAlt: localized.imageAlt ?? defaultContent.authorBio.imageAlt
  };

  authorBioCache.set(locale, merged);
  return merged;
}
