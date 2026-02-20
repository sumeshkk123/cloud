"use client";

import type { IndustryPageContent } from "@/components/frontend/industries/subpage";
import { IndustryPageLayout } from "@/components/frontend/industries/subpage";
import { healthWellnessContent } from "./content";

const DEMO_HREF = "https://demo.cloudmlmsoftware.com";

type HealthWellnessClientProps = {
  heroTitle: string;
  heroDescription: string;
  contactHref: string;
  demoHref: string;
  pricingHref: string;
  locale?: string;
};

export function HealthWellnessClient({
  heroTitle,
  heroDescription,
  contactHref,
  demoHref = DEMO_HREF,
  pricingHref,
  locale = "en",
}: HealthWellnessClientProps) {
  const content: IndustryPageContent = healthWellnessContent;
  const contentWithIntroHref = content.introSection
    ? {
        ...content,
        introSection: {
          ...content.introSection,
          sidebarCtaHref: content.introSection.sidebarCtaHref ?? pricingHref,
        },
      }
    : content;

  return (
    <IndustryPageLayout
      content={contentWithIntroHref}
      contactHref={contactHref}
      demoHref={demoHref}
      pricingHref={pricingHref}
      industrySlug="health-wellness"
      serverTitle={heroTitle}
      serverDescription={heroDescription}
      locale={locale}
    />
  );
}
