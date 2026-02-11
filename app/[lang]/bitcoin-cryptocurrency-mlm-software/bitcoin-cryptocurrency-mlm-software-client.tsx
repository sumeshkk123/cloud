"use client";

import type { PageTitleRecord } from "@/lib/api/page-titles";
import { ServiceSubpageLayout } from "@/components/frontend/services/subpage";
import type { ServiceFeatureContent } from "@/components/frontend/services/subpage";
import { bitcoinCryptocurrencyContent } from "./content";

type BitcoinCryptocurrencyClientProps = {
  pageTitleData: PageTitleRecord | null;
  /** Backend image for "Why use cryptocurrency in MLM software?" (importance) section, from services table. */
  serviceImageUrl?: string | null;
  /** Key features from backend (services.keyBenefits) for intro partner card. */
  serviceKeyFeatures?: string[] | null;
  contactHref: string;
  secondaryHref: string;
  locale?: string;
};

function mergeContentWithPageTitle(
  content: ServiceFeatureContent,
  pageTitleData: PageTitleRecord | null
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

export function BitcoinCryptocurrencyClient({
  pageTitleData,
  serviceImageUrl,
  serviceKeyFeatures,
  contactHref,
  secondaryHref,
  locale = "en",
}: BitcoinCryptocurrencyClientProps) {
  const content = mergeContentWithPageTitle(
    bitcoinCryptocurrencyContent,
    pageTitleData
  );
  return (
    <ServiceSubpageLayout
      content={content}
      contactHref={contactHref}
      demoHref={secondaryHref}
      serverTitle={pageTitleData?.title ?? undefined}
      serverBadge={pageTitleData?.pagePill ?? undefined}
      serverDescription={pageTitleData?.sectionSubtitle ?? undefined}
      serverImageUrl={serviceImageUrl ?? undefined}
      serverKeyFeatures={serviceKeyFeatures ?? undefined}
      serviceSlug={null}
      locale={locale}
    />
  );
}
