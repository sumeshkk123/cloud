import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getModuleSubpageHeroDataBySlug } from "@/lib/module-subpage-hero";
import { TicketSystemClient } from "./ticket-system-client";

export const dynamic = "force-dynamic";

const DEMO_URL = "https://demo.cloudmlmsoftware.com";
const MODULE_SLUG = "ticket-system";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

type TicketSystemPageProps = {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
  searchParams?: Promise<{ mid?: string }> | { mid?: string };
};

export default async function TicketSystemPage(props: TicketSystemPageProps) {
  let resolvedParams: { lang?: SupportedLocale } | null = null;
  try {
    const params = props?.params;
    resolvedParams =
      params != null ? (params instanceof Promise ? await params : params) : null;
  } catch {
    resolvedParams = null;
  }
  const locale = resolveLocale(resolvedParams?.lang ?? i18n.defaultLocale);
  const resolvedSearch = props?.searchParams != null ? (props.searchParams instanceof Promise ? await props.searchParams : props.searchParams) : undefined;
  const pageTitleData = await getModuleSubpageHeroDataBySlug(MODULE_SLUG, locale, resolvedSearch?.mid);
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <TicketSystemClient
      pageTitleData={pageTitleData}
      contactHref={contactHref}
      secondaryHref={DEMO_URL}
      locale={locale}
    />
  );
}
