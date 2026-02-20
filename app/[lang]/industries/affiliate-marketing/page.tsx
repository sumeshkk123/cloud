import type { SupportedLocale } from "@/config/site";
import { notFound } from "next/navigation";
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
  if (!industryData) {
    notFound();
  }

  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";

  return (
    <AffiliateMarketingClient
      heroTitle={industryData.title}
      heroDescription={industryData.description}
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
