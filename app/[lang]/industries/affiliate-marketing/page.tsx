import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getPageTitle } from "@/lib/api/page-titles";
import { getIndustryPageTitleKey } from "@/lib/industries-subpage";
import { AffiliateMarketingClient } from "./affiliate-marketing-client";

export const dynamic = "force-dynamic";

const FALLBACK_TITLE = "Affiliate Marketing MLM Software";
const FALLBACK_DESCRIPTION =
  "Power affiliate marketing growth with Cloud MLM Software—automated tracking, multi-tier commissions, mobile enablement, and enterprise-grade compliance.";

export async function generateMetadata({
  params,
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const pageKey = getIndustryPageTitleKey("affiliate-marketing");
  const pageTitleData = await getPageTitle(pageKey, locale);
  const title = pageTitleData?.title ?? FALLBACK_TITLE;
  const description = pageTitleData?.sectionSubtitle ?? FALLBACK_DESCRIPTION;

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/industries/affiliate-marketing", locale),
    },
    openGraph: {
      title,
      description,
    },
  };
}

type AffiliateMarketingPageProps = {
  params: { lang: SupportedLocale };
};

export default async function AffiliateMarketingPage({ params }: AffiliateMarketingPageProps) {
  const locale = resolveLocale(params.lang);
  const pageKey = getIndustryPageTitleKey("affiliate-marketing");
  const [pageTitleData] = await Promise.all([getPageTitle(pageKey, locale)]);
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
