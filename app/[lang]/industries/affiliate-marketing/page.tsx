import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getIndustrySolutionBySlug } from "@/lib/api/industry-solutions";
import { AffiliateMarketingClient } from "./affiliate-marketing-client";

export const dynamic = "force-dynamic";

type AffiliateMarketingPageProps = {
  params: { lang: SupportedLocale };
};

export default async function AffiliateMarketingPage({ params }: AffiliateMarketingPageProps) {
  const locale = resolveLocale(params.lang);

  // Fetch primary industry content from the industry_solutions table (managed in Industry Solution admin)
  const industryData = await getIndustrySolutionBySlug("affiliate-marketing", locale);

  // Map industryData to the format expected by the client component (matching PageTitleRecord)
  const pageTitleData = industryData
    ? {
      id: industryData.id,
      page: `industry-solutions/affiliate-marketing`,
      locale: industryData.locale,
      title: industryData.title,
      pagePill: undefined,
      sectionSubtitle: industryData.description,
      createdAt: industryData.createdAt,
      updatedAt: industryData.updatedAt,
    }
    : null;

  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";

  return (
    <AffiliateMarketingClient
      pageTitleData={pageTitleData}
      contactHref={contactHref}
      demoHref={demoHref}
      pricingHref={pricingHref}
      locale={locale}
    />
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
