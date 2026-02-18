import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  MlmCompaniesHeroWithProjectBriefModal,
  MlmCompaniesPrimarySection,
  MlmCompaniesListSection,
  MlmCompaniesImplementationSection,
  MlmCompaniesFaqSection,
  MlmCompaniesCtaSection
} from "@/components/frontend/mlm-companies";
import { getPageTitle } from "@/lib/api/page-titles";
import { getMlmCompaniesSubpageHeroData } from "@/lib/mlm-companies-subpage-hero";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";
import { getMlmCompaniesContent } from "@/lib/mlm-companies";

export const dynamic = "force-dynamic";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata(props: { params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale } }): Promise<Metadata> {
  const params = props?.params ?? null;
  let resolvedParams: { lang: SupportedLocale } | null = null;
  try {
    resolvedParams = params != null ? (params instanceof Promise ? await params : params) : null;
  } catch {
    // ignore
  }
  const lang = resolvedParams?.lang ?? i18n.defaultLocale;
  const { getPageKeywords } = await import("@/lib/seo-keywords");

  return getPageMetadata(
    params,
    "/blog/top-mlm-companies",
    {
      page: "top-mlm-companies",
      fallbackTitle: "MLM Companies | Leading Network Marketing Organizations | USA, India, Philippines, Australia, Germany",
      fallbackDescription: "Explore successful MLM companies and network marketing organizations worldwide. Learn from industry leaders, their compensation plans, and business strategies. Build your MLM business with proven insights.",
      fallbackKeywords: `${getPageKeywords("mlm-companies", lang)}, MLM companies, network marketing organizations, direct selling companies, MLM business, multi-level marketing, compensation plans`
    }
  );
}

type MlmCompaniesPageProps = {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
};

export default async function MlmCompaniesPage(props: MlmCompaniesPageProps) {
  const params = props?.params;
  const resolvedParams =
    params != null ? (params instanceof Promise ? await params : params) : null;
  const lang = resolvedParams?.lang ?? i18n.defaultLocale;
  const locale = resolveLocale(lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = "/pricing/";
  const demoHref = "/free-mlm-software-demo/";

  // Fetch hero data from same backend as subpages; fallback to page_titles for main page
  let pageTitleData = await getMlmCompaniesSubpageHeroData("mlm-companies", locale);
  if (!pageTitleData) pageTitleData = await getPageTitle("mlm-companies", locale);

  // Fetch companies content on server side (can't use require() in client components)
  const companiesContent = getMlmCompaniesContent(locale);

  return (
    <div>
      <MlmCompaniesHeroWithProjectBriefModal
        locale={locale}
        contactHref={contactHref}
        pricingHref={pricingHref}
        demoHref={demoHref}
        pageTitleData={pageTitleData}
      />

      <MlmCompaniesPrimarySection locale={locale} />

      <MlmCompaniesListSection locale={locale} />

      <MlmCompaniesImplementationSection locale={locale} />

      <MlmCompaniesFaqSection locale={locale} faqContent={companiesContent.faqSection} />

      <MlmCompaniesCtaSection contactHref={contactHref} demoHref={demoHref} locale={locale} />
    </div>
  );
}
