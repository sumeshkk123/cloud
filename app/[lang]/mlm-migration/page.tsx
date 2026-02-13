import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getServicePageTitleData } from "@/lib/services-page-title";
import { MlmMigrationClient } from "./mlm-migration-client";

export const dynamic = "force-dynamic";

const SERVICE_SLUG = "mlm-migration";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

type MlmMigrationPageProps = {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
};

export default async function MlmMigrationPage(props: MlmMigrationPageProps) {
  const params = props?.params;
  const resolvedParams =
    params != null ? (params instanceof Promise ? await params : params) : null;
  const locale = resolveLocale(resolvedParams?.lang ?? i18n.defaultLocale);
  const pageTitleData = await getServicePageTitleData(SERVICE_SLUG, locale);
  const contactHref = buildLocalizedPath("/contact", locale);
  const servicesHref = buildLocalizedPath("/services", locale);
  const featuresHref = buildLocalizedPath("/features", locale);

  return (
    <MlmMigrationClient
      pageTitleData={pageTitleData}
      contactHref={contactHref}
      servicesHref={servicesHref}
      featuresHref={featuresHref}
      locale={locale}
    />
  );
}
