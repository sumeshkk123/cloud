"use client";

import type { IndustryPageContent } from "@/components/frontend/industries/subpage";
import { IndustryPageLayout } from "@/components/frontend/industries/subpage";
import { homeCareContent } from "./content";

const DEMO_HREF = "https://demo.cloudmlmsoftware.com";

type HomeCareClientProps = {
  heroTitle: string;
  heroDescription: string;
  contactHref: string;
  demoHref: string;
  pricingHref: string;
  locale?: string;
};

export function HomeCareClient({
  heroTitle,
  heroDescription,
  contactHref,
  demoHref = DEMO_HREF,
  pricingHref,
  locale = "en",
}: HomeCareClientProps) {
  const content: IndustryPageContent = homeCareContent;
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
      industrySlug="home-care"
      serverTitle={heroTitle}
      serverDescription={heroDescription}
      locale={locale}
    />
  );
}
