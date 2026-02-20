"use client";

import type { IndustryPageContent } from "@/components/frontend/industries/subpage";
import { IndustryPageLayout } from "@/components/frontend/industries/subpage";
import { cryptocurrencyContent } from "./content";

const DEMO_HREF = "https://demo.cloudmlmsoftware.com";

type CryptocurrencyClientProps = {
  heroTitle: string;
  heroDescription: string;
  contactHref: string;
  demoHref: string;
  pricingHref: string;
  locale?: string;
};

export function CryptocurrencyClient({
  heroTitle,
  heroDescription,
  contactHref,
  demoHref = DEMO_HREF,
  pricingHref,
  locale = "en",
}: CryptocurrencyClientProps) {
  const content: IndustryPageContent = cryptocurrencyContent;
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
      industrySlug="cryptocurrency"
      serverTitle={heroTitle}
      serverDescription={heroDescription}
      locale={locale}
    />
  );
}
