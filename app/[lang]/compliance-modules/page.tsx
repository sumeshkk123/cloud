import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getModuleSubpageHeroDataBySlug } from "@/lib/module-subpage-hero";
import { ComplianceClient } from "./compliance-client";

export const dynamic = "force-dynamic";

const DEMO_URL = "https://demo.cloudmlmsoftware.com";
const MODULE_SLUG = "compliance-modules";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

type ComplianceModulePageProps = {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
  searchParams?: Promise<{ mid?: string }> | { mid?: string };
};

export default async function ComplianceModulePage(props: ComplianceModulePageProps) {
  const params = props?.params;
  const resolvedParams =
    params != null ? (params instanceof Promise ? await params : params) : null;
  const locale = resolveLocale(resolvedParams?.lang ?? i18n.defaultLocale);
  const resolvedSearch = props?.searchParams != null ? (props.searchParams instanceof Promise ? await props.searchParams : props.searchParams) : undefined;
  const pageTitleData = await getModuleSubpageHeroDataBySlug(MODULE_SLUG, locale, resolvedSearch?.mid);
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <ComplianceClient
      pageTitleData={pageTitleData}
      contactHref={contactHref}
      secondaryHref={DEMO_URL}
      locale={locale}
    />
  );
}
