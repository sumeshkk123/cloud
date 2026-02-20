/**
 * Reusable plan sub-page layout (hero, optional sections, cta).
 * Use from app/[lang]/mlm-plan/<plan-slug>/ via *-client.tsx and content.ts.
 * Main plans page: /mlm-plans; inner pages: /mlm-plan/<slug> (e.g. /mlm-plan/mlm-binary-plan).
 */
export { PlanSubpageLayout } from "./plan-layout";
export type { PlanSubpageLayoutProps } from "./plan-layout";
export type {
  PlanFeatureContent,
  PlanFeatureHero,
  PlanHeroMetric,
  PlanFeatureItem,
  PlanFeatureFaq,
  PlanFeatureCta,
  PlanIntro,
  PlanImportanceSection,
  PlanBenefitsSection,
  PlanWhyChooseSection,
} from "./plan-layout/types";
