/**
 * MLM plan subpage slugs (second segment under /mlm-plan/).
 * Used for sitemap and localized URLs. Canonical (English) slugs match app/[lang]/mlm-plan/[slug] folder names.
 */
export const ALL_MLM_PLAN_SUBPAGE_SLUGS: readonly string[] = [
  "australian-x-up-plan-mlm-software",
  "mlm-binary-plan",
  "unilevel-mlm-plan",
  "mlm-matrix-plan",
  "mlm-generation-plan",
  "monoline-mlm-plan",
  "mlm-board-plan",
  "mlm-gift-plan",
  "mlm-party-plan",
  "mlm-growth-plan",
  "mlm-stair-step-plan",
  "mlm-australian-binary-plan",
  "hybrid-mlm-plan",
  "investment-mlm-plan",
  "repurchase-mlm-plan",
  "spillover-binary-plan-mlm-software",
  "crowd-funding-plan-mlm-software",
  "help-plan-mlm-software",
  "click-plan-mlm-software",
  "auto-fill-plan-mlm-software",
  "emgoldex-mlm-plan-software",
];

/** First path segment for plan detail pages: "mlm-plan" (same in all locales). */
export const MLM_PLAN_SEGMENT = "mlm-plan";

/**
 * Canonical plan slug -> locale -> translated URL slug.
 * Used so /mlm-plan/australian-x-up-plan-mlm-software becomes e.g. /es/mlm-plan/software-australiano-de-mlm-del-plan-x-up
 */
export const mlmPlanSubpageToSlugMap: Record<string, Record<string, string>> = {
  "australian-x-up-plan-mlm-software": {
    en: "australian-x-up-plan-mlm-software",
    es: "software-australiano-de-mlm-del-plan-x-up",
    fr: "logiciel-mlm-plan-australien-x-up",
    it: "software-mlm-piano-australiano-x-up",
    de: "australischer-x-up-mlm-plan-software",
    pt: "software-mlm-plano-australiano-x-up",
    zh: "ao-zhou-x-up-mlm-ji-hua-ruan-jian",
  },
  "auto-fill-plan-mlm-software": {
    en: "auto-fill-plan-mlm-software",
    es: "software-mlm-plan-de-autorellenado",
    fr: "logiciel-mlm-plan-remplissage-automatique",
    it: "software-mlm-piano-auto-riempimento",
    de: "software-mlm-plan-automatische-fuellung",
    pt: "software-mlm-plano-preenchimento-automatico",
    zh: "zi-dong-tian-chong-mlm-ji-hua-ruan-jian",
  },
};

/** Reverse: any locale's slug -> canonical slug. Used by middleware to rewrite translated URL to canonical. */
const planSubpageSlugToCanonicalMap: Record<string, string> = (() => {
  const out: Record<string, string> = {};
  for (const canonical of ALL_MLM_PLAN_SUBPAGE_SLUGS) {
    out[canonical] = canonical;
  }
  for (const [canonical, slugs] of Object.entries(mlmPlanSubpageToSlugMap)) {
    for (const slug of Object.values(slugs)) {
      out[slug] = canonical;
    }
  }
  return out;
})();

/** Get translated slug for a plan subpage (e.g. australian-x-up-plan-mlm-software -> software-australiano-de-mlm-del-plan-x-up for es). */
export function getSlugForPlanSubpage(canonicalSlug: string, locale: string): string {
  return mlmPlanSubpageToSlugMap[canonicalSlug]?.[locale] ?? mlmPlanSubpageToSlugMap[canonicalSlug]?.["en"] ?? canonicalSlug;
}

/** Resolve URL segment (translated or canonical) to canonical plan subpage slug. */
export function getPlanSubpageCanonicalFromSlug(segment: string): string | null {
  if (planSubpageSlugToCanonicalMap[segment]) return planSubpageSlugToCanonicalMap[segment];
  return (ALL_MLM_PLAN_SUBPAGE_SLUGS as readonly string[]).includes(segment) ? segment : null;
}

/**
 * Given a slug derived from a plan title (e.g. generateSlug(plan.title)), return the canonical
 * route slug for the plan inner page, or null if no matching route exists.
 */
export function getCanonicalSlugForPlanDerivedSlug(derivedSlug: string): string | null {
  if (!derivedSlug) return null;
  const normalized = derivedSlug.toLowerCase().trim();
  const list = ALL_MLM_PLAN_SUBPAGE_SLUGS as readonly string[];
  const exact = list.find((c) => c === normalized);
  if (exact) return exact;
  let matches = list.filter(
    (c) =>
      c.startsWith(normalized + "-") ||
      c.endsWith("-" + normalized)
  );
  if (matches.length === 0 && normalized.length >= 4) {
    matches = list.filter((c) => c.includes(normalized));
  }
  if (matches.length === 0) return null;
  return matches.sort((a, b) => b.length - a.length)[0];
}

/**
 * Pairs of (title substring, canonical slug). Plan title is lowercased; first matching pair wins.
 * Order by longest substring first so "australian x-up plan" matches before "australian".
 */
const PLAN_TITLE_TO_CANONICAL: [string, string][] = [
  ["australian x-up", "australian-x-up-plan-mlm-software"],
  ["australian x-up plan", "australian-x-up-plan-mlm-software"],
  ["auto fill", "auto-fill-plan-mlm-software"],
  ["auto-fill", "auto-fill-plan-mlm-software"],
  ["autofill", "auto-fill-plan-mlm-software"],
  ["spillover binary", "spillover-binary-plan-mlm-software"],
  ["crowd funding", "crowd-funding-plan-mlm-software"],
  ["emgoldex", "emgoldex-mlm-plan-software"],
  ["help plan", "help-plan-mlm-software"],
  ["click plan", "click-plan-mlm-software"],
  ["mlm binary", "mlm-binary-plan"],
  ["binary plan", "mlm-binary-plan"],
  ["unilevel", "unilevel-mlm-plan"],
  ["mlm matrix", "mlm-matrix-plan"],
  ["matrix plan", "mlm-matrix-plan"],
  ["generation plan", "mlm-generation-plan"],
  ["monoline", "monoline-mlm-plan"],
  ["board plan", "mlm-board-plan"],
  ["gift plan", "mlm-gift-plan"],
  ["party plan", "mlm-party-plan"],
  ["growth plan", "mlm-growth-plan"],
  ["stair step", "mlm-stair-step-plan"],
  ["australian binary", "mlm-australian-binary-plan"],
  ["hybrid", "hybrid-mlm-plan"],
  ["investment", "investment-mlm-plan"],
  ["repurchase", "repurchase-mlm-plan"],
];

/**
 * Resolve a plan's display title to the canonical inner-page slug. Tries explicit title substrings first, then derived slug.
 * Use this when building links from the plans list so every card can link to its detail page when there is one.
 */
export function getCanonicalSlugForPlanTitle(
  planTitle: string,
  derivedSlug: string
): string | null {
  const lower = planTitle.toLowerCase().trim();
  const byLength = [...PLAN_TITLE_TO_CANONICAL].sort((a, b) => b[0].length - a[0].length);
  for (const [sub, canonical] of byLength) {
    if (lower.includes(sub)) return canonical;
  }
  return getCanonicalSlugForPlanDerivedSlug(derivedSlug);
}
