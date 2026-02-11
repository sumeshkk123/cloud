import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getPageTitle } from "@/lib/api/page-titles";
import { AnalyticsClient } from "./analytics-client";

export const dynamic = "force-dynamic";

const DEMO_URL = "https://demo.cloudmlmsoftware.com";
const PAGE_KEY = "mlm-software-modules-analytics";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

type AnalyticsPageProps = {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
};

export default async function AnalyticsPage(props: AnalyticsPageProps) {
  const params = props?.params;
  const resolvedParams =
    params != null ? (params instanceof Promise ? await params : params) : null;
  const locale = resolveLocale(resolvedParams?.lang ?? i18n.defaultLocale);
  const pageTitleData = await getPageTitle(PAGE_KEY, locale);
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <AnalyticsClient
      pageTitleData={pageTitleData}
      contactHref={contactHref}
      secondaryHref={DEMO_URL}
      locale={locale}
    />
  );
}
