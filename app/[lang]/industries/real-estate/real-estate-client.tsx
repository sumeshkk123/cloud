"use client";

import type { IndustryPageContent } from "@/components/frontend/industries/subpage";
import { IndustryPageLayout } from "@/components/frontend/industries/subpage";
import { realEstateContent } from "./real-estate-content";

const DEMO_HREF = "https://demo.cloudmlmsoftware.com";

type RealEstateClientProps = {
  heroTitle: string;
  heroDescription: string;
  contactHref: string;
  demoHref: string;
  pricingHref: string;
  locale?: string;
};

export function RealEstateClient({
  heroTitle,
  heroDescription,
  contactHref,
  demoHref = DEMO_HREF,
  pricingHref,
  locale = "en",
}: RealEstateClientProps) {
  const content: IndustryPageContent = realEstateContent;
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
      industrySlug="real-estate"
      serverTitle={heroTitle}
      serverDescription={heroDescription}
      locale={locale}
    />
  );
}
