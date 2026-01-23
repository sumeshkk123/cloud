import { siteBaseConfig, supportedLocales, type SupportedLocale } from "@/config/site";
import { i18n } from "@/i18n-config";
import { getSlugFromPage, getPageFromSlug } from "@/lib/page-slugs";

const ORIGIN = siteBaseConfig.url.replace(/\/$/, "");

export type ResolvedHref = {
  href: string;
  external: boolean;
};

export function resolveHref(rawHref: string | null | undefined, locale: SupportedLocale): ResolvedHref {
  if (!rawHref || rawHref.trim() === "") {
    return { href: buildLocalizedPath("/", locale), external: false };
  }

  const isAbsolute = /^https?:\/\//i.test(rawHref);

  if (isAbsolute) {
    try {
      const url = new URL(rawHref);
      if (normalizeHost(url.origin) === normalizeHost(ORIGIN)) {
        return {
          href: buildLocalizedPath(url.pathname + url.search + url.hash, locale),
          external: false
        };
      }
      return { href: rawHref, external: true };
    } catch {
      return { href: rawHref, external: true };
    }
  }

  const base = new URL(rawHref, `${ORIGIN}/`);
  return { href: buildLocalizedPath(base.pathname + base.search + base.hash, locale), external: false };
}

// Cache for page ID lookups to avoid repeated iterations
const pageIdCache = new Map<string, string | null>();

export function buildLocalizedPath(path: string, locale: SupportedLocale): string {
  const { pathname, search, hash } = normalizePath(path);
  const stripped = stripLocaleFromPath(pathname);
  const normalized = stripped === "/" ? "" : stripped;
  
  // Check if the path matches a page that has translated slugs
  const pathSegments = normalized.split("/").filter(Boolean);
  if (pathSegments.length > 0) {
    const firstSegment = pathSegments[0];
    
    // Check cache first for faster lookup
    let pageId = pageIdCache.get(firstSegment);
    
    if (pageId === undefined) {
      // Optimized: Check current locale first (most likely match), then others
      // Try current locale first if available, then check others
      pageId = getPageFromSlug(firstSegment, locale) || null;
      
      if (!pageId) {
        // Only check other locales if current locale didn't match
        // Check English (default) next as it's most common
        if (locale !== (i18n.defaultLocale as SupportedLocale)) {
          pageId = getPageFromSlug(firstSegment, i18n.defaultLocale as SupportedLocale) || null;
        }
        
        // If still not found, check remaining locales (but limit iterations)
        if (!pageId) {
          for (const loc of supportedLocales) {
            if (loc === locale || loc === i18n.defaultLocale) continue; // Already checked
            const foundPageId = getPageFromSlug(firstSegment, loc);
            if (foundPageId) {
              pageId = foundPageId;
              break;
            }
          }
        }
      }
      
      // Cache the result (null means not a translatable page)
      pageIdCache.set(firstSegment, pageId);
    }
    
    // If we found a page identifier, get the translated slug for the target locale
    if (pageId) {
      const translatedSlug = getSlugFromPage(pageId, locale);
      
      if (translatedSlug) {
        // Use translated slug
        const remainingPath = pathSegments.slice(1).join("/");
        const fullPath = `/${translatedSlug}${remainingPath ? `/${remainingPath}` : ""}`;
        
        if (locale === (i18n.defaultLocale as SupportedLocale)) {
          return `${fullPath}${search}${hash}`;
        }
        return `/${locale}${fullPath}${search}${hash}`;
      }
    }
  }
  
  // Default behavior: use path as-is
  if (locale === (i18n.defaultLocale as SupportedLocale)) {
    const basePath = normalized === "" ? "/" : normalized;
    return `${basePath}${search}${hash}`;
  }
  return `/${locale}${normalized}${search}${hash}`;
}

export function parseLocaleFromHref(href: string): SupportedLocale | null {
  try {
    const url = /^https?:\/\//i.test(href) ? new URL(href) : new URL(href, `${ORIGIN}/`);
    const segments = url.pathname.split("/").filter(Boolean);
    if (segments.length === 0) {
      return i18n.defaultLocale as SupportedLocale;
    }
    const maybeLocale = segments[0];
    if (supportedLocales.includes(maybeLocale as SupportedLocale)) {
      return maybeLocale as SupportedLocale;
    }
    return i18n.defaultLocale as SupportedLocale;
  } catch {
    // ignore
  }
  return null;
}

function stripLocaleFromPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && supportedLocales.includes(segments[0] as SupportedLocale)) {
    segments.shift();
  }
  return `/${segments.join("/")}`.replace(/\/+/g, "/");
}

function normalizePath(path: string) {
  try {
    const url = new URL(path, `${ORIGIN}/`);
    return {
      pathname: url.pathname,
      search: url.search,
      hash: url.hash
    };
  } catch {
    return { pathname: path, search: "", hash: "" };
  }
}

function normalizeHost(host: string) {
  return host.replace(/\/$/, "").toLowerCase();
}
