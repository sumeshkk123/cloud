import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getServicePageTitleData } from "@/lib/services-page-title";
import { OpencartDevelopmentClient } from "./opencart-development-client";

export const dynamic = "force-dynamic";

const DEMO_URL = "https://demo.cloudmlmsoftware.com";
const SERVICE_SLUG = "opencart-development";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

type OpencartDevelopmentPageProps = {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
};

export default async function OpencartDevelopmentPage(
  props: OpencartDevelopmentPageProps
) {
  const params = props?.params;
  const resolvedParams =
    params != null ? (params instanceof Promise ? await params : params) : null;
  const locale = resolveLocale(resolvedParams?.lang ?? i18n.defaultLocale);
  const pageTitleData = await getServicePageTitleData(SERVICE_SLUG, locale);
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <OpencartDevelopmentClient
      pageTitleData={pageTitleData}
      contactHref={contactHref}
      secondaryHref={DEMO_URL}
      locale={locale}
    />
  );
}
