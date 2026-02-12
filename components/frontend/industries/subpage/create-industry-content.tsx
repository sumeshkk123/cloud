import type { IndustryPageContent } from "./types";

export type CreateIndustryContentOverrides = {
  hero?: Partial<IndustryPageContent["hero"]>;
  playsSection?: Partial<IndustryPageContent["playsSection"]>;
  programmesSection?: Partial<IndustryPageContent["programmesSection"]>;
  proofPointsSection?: Partial<IndustryPageContent["proofPointsSection"]>;
  cta?: Partial<IndustryPageContent["cta"]>;
};

/**
 * Creates IndustryPageContent for an industry sub-page. Use overrides to customise
 * any section; omitted sections fall back to empty or a minimal default so they can be hidden.
 * For full control, pass a complete content object from a page-specific content file (e.g. insurance/content.ts).
 */
export function createIndustryContent(
  overrides: CreateIndustryContentOverrides = {}
): IndustryPageContent {
  return {
    hero: {
      badge: "Industry",
      title: "Cloud MLM Software for your industry",
      description: "Tailored solutions for your vertical.",
      primaryCta: "Contact us",
      secondaryCta: "View demo",
      ...overrides.hero,
    },
    playsSection: overrides.playsSection
      ? { heading: "", plays: [], ...overrides.playsSection }
      : undefined,
    programmesSection: overrides.programmesSection
      ? { heading: "", description: "", programmes: [], ...overrides.programmesSection }
      : undefined,
    proofPointsSection: overrides.proofPointsSection
      ? { heading: "", proofPoints: [], ...overrides.proofPointsSection }
      : undefined,
    cta: {
      heading: "Ready to get started?",
      description: "Talk to our team for a tailored plan.",
      primaryCta: "Contact us",
      secondaryCta: "Request demo",
      ...overrides.cta,
    },
    customSections: undefined,
  };
}
