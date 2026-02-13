"use client";

import type { Locale } from "@/i18n-config";
import type { PageTitleRecord } from "@/lib/api/page-titles";
import { ConsultingLayout } from "@/components/frontend/mlm-consulting";
import { getBitcoinCryptocurrencyConsultingContent } from "./content-consulting-format";

type BitcoinCryptocurrencyClientProps = {
  pageTitleData: PageTitleRecord | null;
  contactHref: string;
  servicesHref: string;
  featuresHref: string;
  locale?: string;
};

export function BitcoinCryptocurrencyClient({
  pageTitleData,
  contactHref,
  servicesHref,
  featuresHref,
  locale = "en",
}: BitcoinCryptocurrencyClientProps) {
  const content = getBitcoinCryptocurrencyConsultingContent((locale || "en") as Locale);
  return (
    <ConsultingLayout
      content={content}
      contactHref={contactHref}
      servicesHref={servicesHref}
      featuresHref={featuresHref}
      serverTitle={pageTitleData?.title ?? undefined}
      serverBadge={pageTitleData?.pagePill ?? undefined}
      serverDescription={pageTitleData?.sectionSubtitle ?? undefined}
      locale={locale}
    />
  );
}
