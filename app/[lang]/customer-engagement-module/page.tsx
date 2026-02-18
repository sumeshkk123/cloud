import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getModuleSubpageHeroDataBySlug } from "@/lib/module-subpage-hero";
import { CustomerEngagementClient } from "./customer-engagement-client";

export const dynamic = "force-dynamic";

const DEMO_URL = "https://demo.cloudmlmsoftware.com";
const MODULE_SLUG = "customer-engagement-module";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

type CustomerEngagementModulePageProps = {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
  searchParams?: Promise<{ mid?: string }> | { mid?: string };
};

export default async function CustomerEngagementModulePage(props: CustomerEngagementModulePageProps) {
  let resolvedParams: { lang?: SupportedLocale } | null = null;
  try {
    const params = props?.params;
    resolvedParams =
      params != null ? (params instanceof Promise ? await params : params) : null;
  } catch {
    resolvedParams = null;
  }
  const locale = resolveLocale(resolvedParams?.lang ?? i18n.defaultLocale);
  // Hero title/description from Admin → Modules only (modules table), by slug so we always get the Customer Engagement module
  const pageTitleData = await getModuleSubpageHeroDataBySlug(MODULE_SLUG, locale, undefined);
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <CustomerEngagementClient
      pageTitleData={pageTitleData}
      contactHref={contactHref}
      secondaryHref={DEMO_URL}
      locale={locale}
    />
  );
}
