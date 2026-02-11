import { getPageTitle } from "@/lib/api/page-titles";
import { listServices } from "@/lib/api/services";
import type { PageTitleRecord } from "@/lib/api/page-titles";

/** Page title data plus optional image and key features from services table (admin services). */
export type ServicePageTitleData = PageTitleRecord & {
  image?: string | null;
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
};

/**
 * Fetches hero title/description (and optional image) for a service inner page.
 * 1. Tries page_titles (same as admin /admin/services/meta-page-title).
 * 2. If no row, falls back to services table: find service whose slug matches and use its title/description (same as /services list).
 * 3. When a matching service exists (from fallback or from a separate lookup), image from services table (admin services) is included.
 */
export async function getServicePageTitleData(
  slug: string,
  locale: string
): Promise<ServicePageTitleData | null> {
  const pageKey = getServicePageKey(slug);
  const fromPageTitles = await getPageTitle(pageKey, locale);

  try {
    const [services, englishServices] = await Promise.all([
      listServices(locale),
      locale === "en" ? [] : listServices("en"),
    ]);
    const englishTitleByKey = new Map<string, string>();
    englishServices.forEach((s) => {
      const key = `${s.icon ?? ""}_${s.showOnHomePage}`;
      if (!englishTitleByKey.has(key)) englishTitleByKey.set(key, s.title);
    });

    const slugsToTry = [slug, ...(SLUG_FALLBACKS[slug] ?? [])];
    const matchingService = services.find((service) => {
      const key = `${service.icon ?? ""}_${service.showOnHomePage}`;
      const englishTitle = englishTitleByKey.get(key) ?? service.title;
      const serviceSlug = serviceSlugFromTitle(englishTitle);
      return slugsToTry.includes(serviceSlug);
    });

    if (fromPageTitles) {
      return {
        ...fromPageTitles,
        image: matchingService?.image ?? undefined,
        keyFeatures: matchingService?.keyBenefits ?? undefined,
      };
    }
    if (matchingService) {
      return {
        page: pageKey,
        locale,
        title: matchingService.title ?? "",
        pagePill: undefined,
        sectionSubtitle: matchingService.description ?? undefined,
        image: matchingService.image ?? undefined,
        keyFeatures: matchingService.keyBenefits ?? undefined,
      };
    }
  } catch {
    // ignore
  }
  return fromPageTitles;
}
