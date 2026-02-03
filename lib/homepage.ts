import defaultContentModule from "../shared/homepage/default-content.js";
// Handle both default export and named export
const defaultContent = (defaultContentModule as any).default || defaultContentModule;
import type { HomepageContent } from "@/types/homepage";
import type { SupportedLocale } from "@/config/site";
import { getHomepageContent as getHomepageContentFromDb } from "@/lib/api/homepage";

function getLocaleFilesystemAlias(locale: SupportedLocale): string {
  // Repo uses some locale directories that don't exactly match `i18n-config.ts`
  // Keep behavior stable by aliasing supported locales to existing folders.
  if (locale === "zh") return "zh-Hans";
  if (locale === "pt") return "pt-PT";
  return locale;
}

function getHomepageContentFromFilesystem(locale: SupportedLocale): Partial<HomepageContent> | null {
  const fsLocale = getLocaleFilesystemAlias(locale);
  try {
    return require(`../shared/homepage/locales/${fsLocale}/content.json`);
  } catch {
    return null;
  }
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function mergeContent<T>(base: T, override: unknown): T {
  if (override === null || override === undefined) {
    return base;
  }

  if (Array.isArray(base)) {
    if (!Array.isArray(override) || override.length === 0) {
      return base;
    }

    const result = override.map((item, index) => {
      const baseItem = index < base.length ? (base[index] as any) : undefined;
      if (baseItem === undefined) {
        return item as any;
      }
      return mergeContent(baseItem, item);
    }) as unknown as T;

    if (override.length < base.length) {
      const remaining = base.slice(override.length);
      return (override.concat(remaining) as unknown) as T;
    }

    return result;
  }

  if (isPlainObject(base)) {
    if (!isPlainObject(override)) {
      return base;
    }

    const result: Record<string, unknown> = { ...base };
    Object.keys(override).forEach((key) => {
      if (key in base) {
        result[key] = mergeContent((base as any)[key], override[key]);
      } else {
        result[key] = override[key];
      }
    });
    return result as T;
  }

  return (override as T) ?? base;
}

function normalizeFeatures(features: unknown): string[] {
  if (Array.isArray(features)) {
    return features.map(f => String(f));
  }
  if (typeof features === 'string') {
    try {
      const parsed = JSON.parse(features);
      if (Array.isArray(parsed)) {
        return parsed.map(f => String(f));
      }
    } catch {
      // If it's not valid JSON, treat as a single feature string
      return [features];
    }
  }
  if (features && typeof features === 'object') {
    // If it's an object, try to extract values
    const values = Object.values(features);
    if (values.length > 0) {
      return values.map(v => String(v));
    }
  }
  return [];
}

function normalizeHomepageContent(content: HomepageContent): HomepageContent {
  // Ensure hero.features is always an array
  if (content.hero && content.hero.features !== undefined) {
    content.hero.features = normalizeFeatures(content.hero.features);
  }
  
  // Normalize any nested features in arrays (e.g., services, cards, etc.)
  if (content.featureSection?.cards) {
    content.featureSection.cards = content.featureSection.cards.map(card => ({
      ...card,
      points: card.points ? normalizeFeatures(card.points) : []
    }));
  }
  
  return content;
}

export async function getHomepageContent(locale: SupportedLocale): Promise<HomepageContent> {
  try {
    const cmsContent = await getHomepageContentFromDb(locale);
    const fileContent = getHomepageContentFromFilesystem(locale);
    const localizedDefault = fileContent ? mergeContent(defaultContent as HomepageContent, fileContent) : (defaultContent as HomepageContent);
    // If no database content, use default content directly
    if (!cmsContent) {
      return normalizeHomepageContent(localizedDefault);
    }
    // Merge database content with default content
    const merged = mergeContent(localizedDefault, cmsContent);
    return normalizeHomepageContent(merged);
  } catch (error) {
    console.error(`[getHomepageContent] Error for locale ${locale}:`, error);
    // Return default content if there's an error
    const fileContent = getHomepageContentFromFilesystem(locale);
    const localizedDefault = fileContent ? mergeContent(defaultContent as HomepageContent, fileContent) : (defaultContent as HomepageContent);
    return normalizeHomepageContent(localizedDefault);
  }
}
