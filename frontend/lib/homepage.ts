import defaultContent from "../shared/homepage/default-content.js";
import type { HomepageContent } from "@/types/homepage";
import { fetchStrapi, type StrapiSingleResponse } from "@/lib/strapi-client";
import type { SupportedLocale } from "@/config/site";

type HomepageStrapiResponse = {
  content?: HomepageContent | null;
};

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

export async function getHomepageContent(locale: SupportedLocale): Promise<HomepageContent> {
  const response = await fetchStrapi<StrapiSingleResponse<HomepageStrapiResponse>>("/api/homepage", {
    params: { locale }
  });

  const cmsContent = (response?.data?.attributes?.content ?? response?.data?.content) as HomepageContent | undefined;

  return mergeContent(defaultContent as HomepageContent, cmsContent);
}
