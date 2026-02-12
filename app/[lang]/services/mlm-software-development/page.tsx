import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getServicePageTitleData } from "@/lib/services-page-title";
import { MlmSoftwareDevelopmentClient } from "./mlm-software-development-client";

export const dynamic = "force-dynamic";

const SERVICE_SLUG = "mlm-software-development";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

type MlmSoftwareDevelopmentPageProps = {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
};

export default async function MlmSoftwareDevelopmentPage(
  props: MlmSoftwareDevelopmentPageProps
) {
  const params = props?.params;
  const resolvedParams =
    params != null ? (params instanceof Promise ? await params : params) : null;
  const locale = resolveLocale(resolvedParams?.lang ?? i18n.defaultLocale);
  // Hero title/description: from page_titles (admin meta-page-title) or fallback to services list (same as /services)
  const pageTitleData = await getServicePageTitleData(SERVICE_SLUG, locale);
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <MlmSoftwareDevelopmentClient
      pageTitleData={pageTitleData}
      contactHref={contactHref}
      secondaryHref={buildLocalizedPath("/features", locale)}
      locale={locale}
    />
  );
}
