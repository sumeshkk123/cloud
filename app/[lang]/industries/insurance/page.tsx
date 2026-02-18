import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getIndustrySolutionBySlug } from "@/lib/api/industry-solutions";
import { InsuranceClient } from "./insurance-client";

export const dynamic = "force-dynamic";

type InsurancePageProps = {
  params: { lang: SupportedLocale };
};

export default async function InsurancePage({ params }: InsurancePageProps) {
  const locale = resolveLocale(params.lang);

  // Fetch primary industry content from the industry_solutions table (managed in Industry Solution admin)
  const industryData = await getIndustrySolutionBySlug("insurance", locale);

  // Map industryData to the format expected by the client component (matching PageTitleRecord)
  const pageTitleData = industryData
    ? {
      id: industryData.id,
      page: `industry-solutions/insurance`,
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
    <InsuranceClient
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
