"use client";

import type { ServicePageTitleData } from "@/lib/services-page-title";
import { ServiceSubpageLayout } from "@/components/frontend/services/subpage";
import type { ServiceFeatureContent } from "@/components/frontend/services/subpage";
import { woocommerceIntegrationContent } from "./content";

type WooCommerceIntegrationClientProps = {
  pageTitleData: ServicePageTitleData | null;
  contactHref: string;
  secondaryHref: string;
  locale?: string;
};

function mergeContentWithPageTitle(
  content: ServiceFeatureContent,
  pageTitleData: ServicePageTitleData | null
): ServiceFeatureContent {
  if (!pageTitleData) return content;
  return {
    ...content,
    hero: {
      ...content.hero,
      title: pageTitleData.title,
      badge: pageTitleData.pagePill ?? content.hero.badge,
      description: pageTitleData.sectionSubtitle ?? content.hero.description,
    },
  };
}

export function WooCommerceIntegrationWithCloudMlmSoftwareClient({
  pageTitleData,
  contactHref,
  secondaryHref,
  locale = "en",
}: WooCommerceIntegrationClientProps) {
  const content = mergeContentWithPageTitle(woocommerceIntegrationContent, pageTitleData);
  return (
    <ServiceSubpageLayout
      content={content}
      contactHref={contactHref}
      demoHref={secondaryHref}
      serverTitle={pageTitleData?.title ?? undefined}
      serverBadge={pageTitleData?.pagePill ?? undefined}
      serverDescription={pageTitleData?.sectionSubtitle ?? undefined}
      serverImageUrl={pageTitleData?.image ?? undefined}
      serverKeyFeatures={pageTitleData?.keyFeatures ?? undefined}
      serviceSlug="woocommerce-integration-with-cloud-mlm-software"
      locale={locale}
    />
  );
}
