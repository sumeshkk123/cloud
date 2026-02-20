"use client";

import type { IndustryPageContent } from "@/components/frontend/industries/subpage";
import { IndustryPageLayout } from "@/components/frontend/industries/subpage";
import { clothingAccessoriesContent } from "./content";

const DEMO_HREF = "https://demo.cloudmlmsoftware.com";

type ClothingAccessoriesClientProps = {
  heroTitle: string;
  heroDescription: string;
  contactHref: string;
  demoHref: string;
  pricingHref: string;
  locale?: string;
};

export function ClothingAccessoriesClient({
  heroTitle,
  heroDescription,
  contactHref,
  demoHref = DEMO_HREF,
  pricingHref,
  locale = "en",
}: ClothingAccessoriesClientProps) {
  const content: IndustryPageContent = clothingAccessoriesContent;
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
      industrySlug="clothing-and-accessories"
      serverTitle={heroTitle}
      serverDescription={heroDescription}
      locale={locale}
    />
  );
}
