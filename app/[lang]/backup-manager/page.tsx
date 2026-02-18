import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getModuleSubpageHeroDataBySlug } from "@/lib/module-subpage-hero";
import { BackupManagerClient } from "./backup-manager-client";

export const dynamic = "force-dynamic";

const DEMO_URL = "https://demo.cloudmlmsoftware.com";
const MODULE_SLUG = "backup-manager";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

type BackupManagerPageProps = {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
  searchParams?: Promise<{ mid?: string }> | { mid?: string };
};

export default async function BackupManagerPage({ params, searchParams }: BackupManagerPageProps) {
  const resolvedParams = params != null ? (params instanceof Promise ? await params : params) : { lang: i18n.defaultLocale as SupportedLocale };
  const locale = resolveLocale(resolvedParams?.lang ?? i18n.defaultLocale);
  const resolvedSearch = searchParams != null ? (searchParams instanceof Promise ? await searchParams : searchParams) : undefined;
  const pageTitleData = await getModuleSubpageHeroDataBySlug(MODULE_SLUG, locale, resolvedSearch?.mid);
  const contactHref = buildLocalizedPath("/contact", locale);
  const secondaryHref = DEMO_URL;

  return (
    <BackupManagerClient
      pageTitleData={pageTitleData}
      contactHref={contactHref}
      secondaryHref={secondaryHref}
      locale={locale}
    />
  );
}
