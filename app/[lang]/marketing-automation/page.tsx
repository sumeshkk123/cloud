import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getModuleSubpageHeroDataBySlug } from "@/lib/module-subpage-hero";
import { MarketingAutomationClient } from "./marketing-automation-client";

export const dynamic = "force-dynamic";

const DEMO_URL = "https://demo.cloudmlmsoftware.com";
const MODULE_SLUG = "marketing-automation";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

type MarketingAutomationPageProps = {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
  searchParams?: Promise<{ mid?: string }> | { mid?: string };
};

export default async function MarketingAutomationPage(props: MarketingAutomationPageProps) {
  const params = props?.params;
  const resolvedParams =
    params != null ? (params instanceof Promise ? await params : params) : null;
  const locale = resolveLocale(resolvedParams?.lang ?? i18n.defaultLocale);
  const resolvedSearch = props?.searchParams != null ? (props.searchParams instanceof Promise ? await props.searchParams : props.searchParams) : undefined;
  const pageTitleData = await getModuleSubpageHeroDataBySlug(MODULE_SLUG, locale, resolvedSearch?.mid);
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <MarketingAutomationClient
      pageTitleData={pageTitleData}
      contactHref={contactHref}
      secondaryHref={DEMO_URL}
      locale={locale}
    />
  );
}
