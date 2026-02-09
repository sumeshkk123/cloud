/**
 * Reusable module sub-page layout and section components (same flow as pricing sub-pages).
 * Use from app/[lang]/<module-slug>/ via *-client.tsx and content.ts.
 */
export { ModuleFeatureLayout as ModuleSubpageLayout } from "./module-layout";
export type { ModuleFeatureLayoutProps } from "./module-layout";
export type {
  ModuleFeatureContent,
  ModuleFeatureHero,
  ModuleHeroMetric,
  ModuleBenefitsSection,
  ModuleImportanceSection,
  ModuleWhyChooseSection,
  ModuleIntro,
  ModuleFeatureItem,
  ModuleFeatureFaq,
  ModuleFeatureCta,
} from "./module-layout/types";
