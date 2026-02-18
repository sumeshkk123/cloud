import { siteBaseConfig, supportedLocales, type SupportedLocale } from "@/config/site";
import { i18n } from "@/i18n-config";
import {
  getSlugFromPage,
  getPageFromSlug,
  getPricingSubpageKeyFromSlug,
  getSlugForPricingSubpage,
  getBlogSubpageKeyFromSlug,
  getSlugForBlogSubpage,
} from "@/lib/page-slugs";
import {
  getServiceSubpageKeyFromSlug,
  getSlugForServiceSubpage,
} from "@/lib/services-subpage-slugs";
import {
  MLM_PLAN_SEGMENT,
  getPlanSubpageCanonicalFromSlug,
  getSlugForPlanSubpage,
} from "@/lib/mlm-plan-subpage-slugs";

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
        // Path segment may be a page id (e.g. /ticket-system) when slug differs (e.g. ticket-system-module-for-mlm-software)
        if (!pageId && getSlugFromPage(firstSegment, locale)) {
          pageId = firstSegment;
        }
      }
      
      // Cache the result (null means not a translatable page)
      pageIdCache.set(firstSegment, pageId);
    }
    
    // If we found a page identifier, get the translated slug for the target locale
    if (pageId) {
      const translatedSlug = getSlugFromPage(pageId, locale);

      if (translatedSlug) {
        let remainingPath = pathSegments.slice(1).join("/");
        // Translate pricing sub-page second segment (e.g. cloud-mlm-software-basic -> software-mlm-basico-nube for es)
        if (pageId === "pricing" && pathSegments.length >= 2) {
          const secondSegment = pathSegments[1];
          const subpageKey = getPricingSubpageKeyFromSlug(secondSegment);
          if (subpageKey) {
            const translatedSecond = getSlugForPricingSubpage(subpageKey, locale);
            if (translatedSecond) {
              const rest = pathSegments.slice(2);
              remainingPath = rest.length ? `${translatedSecond}/${rest.join("/")}` : translatedSecond;
            }
          }
        }
        // Translate services sub-page second segment (e.g. opencart-development -> desarrollo-opencart for es)
        if (pageId === "services" && pathSegments.length >= 2) {
          const secondSegment = pathSegments[1];
          const serviceKey = getServiceSubpageKeyFromSlug(secondSegment) ?? secondSegment;
          const translatedSecond = getSlugForServiceSubpage(serviceKey, locale);
          const rest = pathSegments.slice(2);
          remainingPath = rest.length ? `${translatedSecond}/${rest.join("/")}` : translatedSecond;
        }
        // Translate blog sub-page second segment (e.g. top-mlm-companies -> principales-empresas-de-multinivel for es)
        if (pageId === "blog" && pathSegments.length >= 2) {
          const secondSegment = pathSegments[1];
          const blogKey = getBlogSubpageKeyFromSlug(secondSegment) ?? secondSegment;
          const translatedSecond = getSlugForBlogSubpage(blogKey, locale);
          if (translatedSecond) {
            const rest = pathSegments.slice(2);
            remainingPath = rest.length ? `${translatedSecond}/${rest.join("/")}` : translatedSecond;
          }
        }
        const fullPath = `/${translatedSlug}${remainingPath ? `/${remainingPath}` : ""}`;

        // Use pt-pt in URL path for Portuguese ONLY for blog top-mlm-companies page
        let urlLocale: string = locale;
        if (locale === "pt" && pageId === "blog") {
          // Check if remaining path is the Portuguese translated slug
          const ptSlug = getSlugForBlogSubpage("top-mlm-companies", "pt");
          if (remainingPath === ptSlug) {
            urlLocale = "pt-pt";
          }
        }
        // Use zh-hans in URL path for Chinese ONLY for blog top-mlm-companies page
        if (locale === "zh" && pageId === "blog") {
          // Check if remaining path is the Chinese translated slug
          const zhSlug = getSlugForBlogSubpage("top-mlm-companies", "zh");
          if (remainingPath === zhSlug) {
            urlLocale = "zh-hans";
          }
        }

        if (urlLocale === (i18n.defaultLocale as SupportedLocale)) {
          return `${fullPath}${search}${hash}`;
        }
        return `/${urlLocale}${fullPath}${search}${hash}`;
      }
    }
  }

  // MLM plan subpages: translate second segment (e.g. /mlm-plan/australian-x-up-plan-mlm-software -> /es/mlm-plan/software-australiano-de-mlm-del-plan-x-up)
  if (pathSegments.length >= 2 && pathSegments[0] === MLM_PLAN_SEGMENT) {
    const canonicalSlug = getPlanSubpageCanonicalFromSlug(pathSegments[1]);
    if (canonicalSlug) {
      const translatedSecond = getSlugForPlanSubpage(canonicalSlug, locale);
      const fullPath = `/${MLM_PLAN_SEGMENT}/${translatedSecond}`;
      if (locale === (i18n.defaultLocale as SupportedLocale)) {
        return `${fullPath}${search}${hash}`;
      }
      return `/${locale}${fullPath}${search}${hash}`;
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
  const firstSegment = segments[0];
  // Map locale aliases to internal codes
  const mappedLocale = firstSegment === "pt-pt" ? "pt" : firstSegment === "zh-hans" ? "zh" : firstSegment;
  if (segments.length > 0 && supportedLocales.includes(mappedLocale as SupportedLocale)) {
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
