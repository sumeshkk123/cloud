"use client";

import { IndustryPageLayout } from "@/components/frontend/industries/subpage";
import type { IndustryPageContent } from "@/components/frontend/industries/subpage";
import { affiliateMarketingContent } from "./content";

const DEMO_HREF = "https://demo.cloudmlmsoftware.com";

type AffiliateMarketingClientProps = {
  heroTitle: string;
  heroDescription: string;
  contactHref: string;
  demoHref: string;
  pricingHref: string;
  locale?: string;
};

export function AffiliateMarketingClient({
  heroTitle,
  heroDescription,
  contactHref,
  demoHref = DEMO_HREF,
  pricingHref,
  locale = "en",
}: AffiliateMarketingClientProps) {
  const content: IndustryPageContent = affiliateMarketingContent;
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
      industrySlug="affiliate-marketing"
      serverTitle={heroTitle}
      serverDescription={heroDescription}
      locale={locale}
    />
  );
}
