import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getPageTitle } from "@/lib/api/page-titles";
import { getIndustryPageTitleKey } from "@/lib/industries-subpage";
import { InsuranceClient } from "./insurance-client";

export const dynamic = "force-dynamic";

const FALLBACK_TITLE = "Insurance Industry MLM Software";
const FALLBACK_DESCRIPTION =
  "Modernise insurance distribution with Cloud MLM Software—compliance-first compensation, advisor enablement, and policyholder engagement built for growth.";

export async function generateMetadata({
  params,
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const pageKey = getIndustryPageTitleKey("insurance");
  const pageTitleData = await getPageTitle(pageKey, locale);
  const title = pageTitleData?.title ?? FALLBACK_TITLE;
  const description = pageTitleData?.sectionSubtitle ?? FALLBACK_DESCRIPTION;

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/industries/insurance", locale),
    },
    openGraph: {
      title,
      description,
    },
  };
}

type InsurancePageProps = {
  params: { lang: SupportedLocale };
};

export default async function InsurancePage({ params }: InsurancePageProps) {
  const locale = resolveLocale(params.lang);
  const pageKey = getIndustryPageTitleKey("insurance");
  const [pageTitleData] = await Promise.all([getPageTitle(pageKey, locale)]);
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
