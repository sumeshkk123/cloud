import type { PageTitleRecord } from "@/lib/api/page-titles";
import { getMlmPlanByCanonicalSlug } from "@/lib/api/mlm-plans";

const PLAN_PAGE_PREFIX = "mlm-plan";

/**
 * Hero data for plan subpages. Uses the same data source as Admin → Plans (mlm_plans).
 * Fetches the plan by canonical slug and locale, same pattern as module inner pages (getModuleSubpageHeroDataBySlug).
 */
export async function getPlanSubpageHeroDataBySlug(
  canonicalSlug: string,
  locale: string
): Promise<PageTitleRecord | null> {
  const pageKey = `${PLAN_PAGE_PREFIX}/${canonicalSlug}`;
  const plan = await getMlmPlanByCanonicalSlug(canonicalSlug, locale);
  if (!plan) return null;
  return {
    page: pageKey,
    locale: plan.locale,
    title: plan.title,
    pagePill: plan.subtitle ?? undefined,
    sectionSubtitle: plan.description ?? undefined,
  };
}
