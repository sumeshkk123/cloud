import { getPageTitle } from "@/lib/api/page-titles";
import { listServices } from "@/lib/api/services";
import type { PageTitleRecord } from "@/lib/api/page-titles";
import { buildLocalizedPath } from "@/lib/locale-links";
import { getCanonicalServiceSlug, TOP_LEVEL_SERVICE_SLUGS } from "@/lib/services-subpage-slugs";
import type { SupportedLocale } from "@/config/site";

/** Page title data plus optional image, icon, and key features from services table (admin services). */
export type ServicePageTitleData = PageTitleRecord & {
  image?: string | null;
  /** Icon from services table (e.g. "remix:RiStoreLine"). */
  icon?: string | null;
  /** Key features / key benefits from services table (e.g. for intro partner card). */
  keyFeatures?: string[] | null;
};

/** Generate URL slug from title (must match ServicesDetailsSection logic). */
export function serviceSlugFromTitle(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Page key for service inner page (matches admin services meta-page-title). */
export function getServicePageKey(slug: string): string {
  return `services/${slug}`;
}

/** Alternate slugs to try when matching services (e.g. admin uses "Shopify Integration" → shopify-integration). */
const SLUG_FALLBACKS: Record<string, string[]> = {
  "woocommerce-integration-with-cloud-mlm-software": ["woocommerce-integration"],
  "shopify-integration-in-cloud-mlm-software": ["shopify-integration"],
  "compensation-plan-audit": ["comp-plan-audit"],
  "cryptocurrency-mlm-software": [
    "crypto-mlm-software",
    "cryptocurrency-mlm",
    "2cryptocurrency-mlm-software",
  ],
  "mlm-software-development": ["mlm-development", "mlm-software", "software-development-mlm"],
  "magento-development": ["magento-development-services", "magento"],
  "website-designing": [
    "website-design",
    "web-designing",
    "website-designing-services",
    "website-design-services",
    "web-design",
    "2website-designing",
  ],
  "web-development": ["web-development-services", "website-development", "2web-development"],
  "mlm-consulting": [
    "mlm-consulting-services",
    "2mlm-consulting-services",
    "consulting",
    "2mlm-consulting",
    "mlm-consultancy",
    "mlm-consulting-service",
  ],
  "mlm-migration": [
    "mlm-migration-services",
    "migration",
    "2mlm-migration",
    "mlm-migration-service",
  ],
};

/** Slug -> possible admin service titles (normalized: trim, collapse spaces, lowercase for comparison). */
const SLUG_TITLE_VARIANTS: Record<string, string[]> = {
  "mlm-consulting": ["2MLM Consulting Services", "MLM Consulting Services", "MLM Consulting", "MLM Consultancy"],
  "mlm-migration": ["2MLM Software Migration Services", "2MLM Migration Services", "MLM Software Migration Services", "MLM Migration Services", "MLM Migration"],
  "cryptocurrency-mlm-software": ["Cryptocurrency MLM Software", "Crypto MLM Software", "2Cryptocurrency MLM Software"],
  "shopify-integration-in-cloud-mlm-software": ["Shopify Integration", "Shopify Integration in Cloud MLM Software", "Shopify Integration in Cloud MLM"],
  "web-development": ["Web Development", "Web Development Services"],
  "compensation-plan-audit": ["Compensation Plan Audit", "Comp Plan Audit", "Compensation Plan Audit Services"],
};

/** Slug -> keywords (all must appear in service title for keyword fallback when exact match fails). */
const SLUG_KEYWORDS: Record<string, string[]> = {
  "shopify-integration-in-cloud-mlm-software": ["shopify", "integration"],
  "web-development": ["web", "development"],
  "mlm-consulting": ["mlm", "consulting"],
  "mlm-migration": ["mlm", "migration"],
  "cryptocurrency-mlm-software": ["cryptocurrency", "mlm"],
  "compensation-plan-audit": ["compensation", "plan", "audit"],
};

function normalizeTitleForMatch(title: string): string {
  return (title ?? "").trim().replace(/\s+/g, " ").toLowerCase();
}

/** Same key as /services page: groups translation rows (same service, different locales). */
function serviceGroupKey(service: { icon?: string | null; showOnHomePage: boolean }): string {
  return `${service.icon ?? ""}_${service.showOnHomePage}`;
}

/**
 * Build English title map exactly like /services page: key = icon + showOnHomePage, value = English title.
 */
function buildEnglishTitleMap(
  englishServices: Array<{ title: string; icon?: string | null; showOnHomePage: boolean }>
): Map<string, string> {
  const map = new Map<string, string>();
  englishServices.forEach((s) => {
    const key = serviceGroupKey(s);
    if (!map.has(key)) map.set(key, s.title);
  });
  return map;
}

type ServiceRow = {
  title: string;
  description: string;
  icon?: string | null;
  showOnHomePage: boolean;
  locale: string;
  image?: string | null;
  keyBenefits?: unknown;
};

function titleMatchesSlug(title: string, pageSlug: string): boolean {
  const titleSlug = serviceSlugFromTitle(title);
  const canonicalSlug = getCanonicalServiceSlug(titleSlug);
  const slugsToTry = [pageSlug, ...(SLUG_FALLBACKS[pageSlug] ?? [])];
  if (canonicalSlug === pageSlug) return true;
  if (slugsToTry.includes(titleSlug) || slugsToTry.includes(canonicalSlug)) return true;
  if (titleSlug === pageSlug || titleSlug.startsWith(pageSlug + "-")) return true;
  return false;
}

/**
 * Find the service for the page slug. Matches by: (1) exact title variant (normalized),
 * (2) title slug / canonical slug, (3) keyword fallback for known slugs.
 */
function findServiceForPageSlug(
  allServices: ServiceRow[],
  pageSlug: string,
  locale: string
): ServiceRow | null {
  const titleVariants = SLUG_TITLE_VARIANTS[pageSlug];
  const keywords = SLUG_KEYWORDS[pageSlug];

  const match =
    allServices.find((s) => {
      const t = normalizeTitleForMatch(s.title ?? "");
      if (titleVariants?.length) {
        if (titleVariants.some((v) => normalizeTitleForMatch(v) === t)) return true;
      }
      if (titleMatchesSlug(s.title, pageSlug)) return true;
      if (keywords?.length) {
        const allPresent = keywords.every((k) => t.includes(k));
        if (allPresent) return true;
      }
      return false;
    }) ??
    allServices.find((s) => titleMatchesSlug(s.title, pageSlug)) ??
    (keywords?.length
      ? allServices.find((s) => {
          const t = normalizeTitleForMatch(s.title ?? "");
          return keywords.every((k) => t.includes(k));
        })
      : null);

  if (!match) return null;
  const key = serviceGroupKey(match);
  const forLocale = allServices.find((s) => serviceGroupKey(s) === key && s.locale === locale);
  const forEn = allServices.find((s) => serviceGroupKey(s) === key && s.locale === "en");
  return forLocale ?? forEn ?? match;
}

/**
 * Fetches hero title and description from Admin → Services (services table).
 * Use this for all service pages, including the 3 independent top-level pages
 * (no /services/ prefix): mlm-consulting, mlm-migration, cryptocurrency-mlm-software.
 * Loads all services, finds one whose title matches the page slug (or known title variants
 * for top-level slugs), then returns that service's title and description for the requested locale.
 */
export async function getServicePageTitleData(
  slug: string,
  locale: string
): Promise<ServicePageTitleData | null> {
  const pageKey = getServicePageKey(slug);
  let fromPageTitles = await getPageTitle(pageKey, locale);
  if (!fromPageTitles && !slug.includes("/")) {
    fromPageTitles = await getPageTitle(slug, locale);
  }

  let allServices: ServiceRow[] = [];
  try {
    allServices = await listServices();
  } catch (err) {
    console.error("[getServicePageTitleData] listServices failed:", err);
    return fromPageTitles;
  }

  const service = findServiceForPageSlug(allServices, slug, locale);

  if (service) {
    const serviceTitle = (service.title ?? "").trim() || undefined;
    const serviceDescription = (service.description ?? "").trim() || undefined;
    const pageTitle = (fromPageTitles?.title ?? "").trim() || undefined;
    const pageSubtitle = (fromPageTitles?.sectionSubtitle ?? "").trim() || undefined;
    const title = pageTitle ?? serviceTitle ?? "";
    const sectionSubtitle = pageSubtitle ?? serviceDescription ?? "";
    const image = service.image ?? undefined;
    const icon = service.icon ?? undefined;
    if (fromPageTitles) {
      return {
        ...fromPageTitles,
        title: title || fromPageTitles.title || "",
        pagePill: fromPageTitles.pagePill ?? undefined,
        sectionSubtitle: sectionSubtitle || fromPageTitles.sectionSubtitle || undefined,
        image,
        icon,
        keyFeatures: service.keyBenefits ?? undefined,
      };
    }
    return {
      page: pageKey,
      locale,
      title: title || "",
      pagePill: undefined,
      sectionSubtitle: sectionSubtitle || undefined,
      image,
      icon,
      keyFeatures: service.keyBenefits ?? undefined,
    };
  }

  return fromPageTitles;
}

/** Slugs for "Seamless E-Commerce Integration for MLM Success" section, in display order. */
const ECOMMERCE_SECTION_SLUGS: readonly string[] = [
  "e-commerce-integration",
  "woocommerce-integration-with-cloud-mlm-software",
  "shopify-integration-in-cloud-mlm-software",
  "cryptocurrency-mlm-software",
  "mlm-consulting",
  "mlm-migration",
];

export type EcommerceServiceItem = {
  id: string;
  title: string;
  description: string;
  image?: string | null;
  /** Icon from Admin → Services (e.g. "remix:RiStoreLine"). */
  icon?: string | null;
  href: string;
};

/**
 * Fetches the 7 services for the homepage "Seamless E-Commerce Integration for MLM Success" section.
 * Returns title, description, image, and localized href for each slug (from Admin → Services).
 */
export async function getServicesForEcommerceSection(
  locale: SupportedLocale
): Promise<EcommerceServiceItem[]> {
  const results: EcommerceServiceItem[] = [];
  for (const slug of ECOMMERCE_SECTION_SLUGS) {
    const data = await getServicePageTitleData(slug, locale);
    const path = TOP_LEVEL_SERVICE_SLUGS.includes(slug)
      ? `/${slug}`
      : `/services/${slug}`;
    const href = buildLocalizedPath(path, locale);
    results.push({
      id: slug,
      title: (data?.title ?? "").trim() || slug.replace(/-/g, " "),
      description: (data?.sectionSubtitle ?? "").trim() || "",
      image: data?.image ?? undefined,
      icon: data?.icon ?? undefined,
      href,
    });
  }
  return results;
}
