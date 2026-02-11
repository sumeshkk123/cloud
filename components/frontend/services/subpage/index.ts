/**
 * Reusable service sub-page layout (hero, intro, importance, benefits, why-choose, faq, cta).
 * Use from app/[lang]/services/<service-slug>/ via *-client.tsx and content.ts.
 * URL stays under /services/ (e.g. /services/bitcoin-cryptocurrency-mlm-software).
 */
export { ServiceSubpageLayout } from "./service-layout";
export type { ServiceSubpageLayoutProps } from "./service-layout";
export type {
  ServiceFeatureContent,
  ServiceFeatureHero,
  ServiceHeroMetric,
  ServiceFeatureItem,
  ServiceFeatureFaq,
  ServiceFeatureCta,
  ServiceIntro,
  ServiceImportanceSection,
  ServiceBenefitsSection,
  ServiceWhyChooseSection,
  ServiceExtraListSection,
} from "./service-layout/types";
