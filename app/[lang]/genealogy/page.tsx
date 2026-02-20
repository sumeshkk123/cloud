import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getModuleSubpageHeroDataBySlug } from "@/lib/module-subpage-hero";
import { getPageTitle } from "@/lib/api/page-titles";
import { GenealogyClient } from "./genealogy-client";

export const dynamic = "force-dynamic";

const DEMO_URL = "https://demo.cloudmlmsoftware.com";
const MODULE_SLUG = "genealogy";
const PAGE_KEY = "mlm-software-modules-genealogy";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

type GenealogyPageProps = {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
  searchParams?: Promise<{ mid?: string }> | { mid?: string };
};

export default async function GenealogyPage(props: GenealogyPageProps) {
  let resolvedParams: { lang?: SupportedLocale } | null = null;
  try {
    const params = props?.params;
    resolvedParams =
      params != null ? (params instanceof Promise ? await params : params) : null;
  } catch {
    resolvedParams = null;
  }
  const locale = resolveLocale(resolvedParams?.lang ?? i18n.defaultLocale);
  const resolvedSearch =
    props?.searchParams != null
      ? (props.searchParams instanceof Promise ? await props.searchParams : props.searchParams)
      : undefined;
  let pageTitleData = await getModuleSubpageHeroDataBySlug(
    MODULE_SLUG,
    locale,
    resolvedSearch?.mid
  );
  if (!pageTitleData) {
    const fromPageTitles =
      (await getPageTitle(PAGE_KEY, locale)) ?? (await getPageTitle("genealogy", locale));
    if (fromPageTitles) {
      pageTitleData = {
        page: fromPageTitles.page,
        locale: fromPageTitles.locale,
        title: fromPageTitles.title,
        sectionSubtitle: fromPageTitles.sectionSubtitle,
        pagePill: fromPageTitles.pagePill,
      };
    }
  }
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <GenealogyClient
      pageTitleData={pageTitleData}
      contactHref={contactHref}
      secondaryHref={DEMO_URL}
      locale={locale}
    />
  );
}
