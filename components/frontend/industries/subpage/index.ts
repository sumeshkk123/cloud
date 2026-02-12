/**
 * Reusable industry inner-page layout and content factory (same pattern as modules/subpage).
 * Use from app/[lang]/industries/[slug]/ via *-client.tsx and optional content.ts.
 */
export { IndustryPageLayout } from "./industry-layout";
export type { IndustryPageLayoutProps } from "./industry-layout";
export { createIndustryContent } from "./create-industry-content";
export type { CreateIndustryContentOverrides } from "./create-industry-content";
export type {
  IndustryPageContent,
  IndustryHero,
  IndustryHeroMetric,
  IndustryChallenge,
  IndustryIntroSection,
  IndustryPlaysSection,
  IndustryPlay,
  IndustryProgrammesSection,
  IndustryProgramme,
  IndustryProofPointsSection,
  IndustryProofPoint,
  IndustryCtaSection,
} from "./types";
