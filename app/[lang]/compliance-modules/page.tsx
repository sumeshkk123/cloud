import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getPageTitle } from "@/lib/api/page-titles";
import { ComplianceClient } from "./compliance-client";

export const dynamic = "force-dynamic";

const DEMO_URL = "https://demo.cloudmlmsoftware.com";
/** Primary key for compliance-modules (admin saves under this); fallback to legacy. */
const PAGE_KEY = "mlm-software-modules-compliance-modules";
const PAGE_KEY_LEGACY = "mlm-software-modules-compliance";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

type ComplianceModulePageProps = {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
};

export default async function ComplianceModulePage(props: ComplianceModulePageProps) {
  const params = props?.params;
  const resolvedParams =
    params != null ? (params instanceof Promise ? await params : params) : null;
  const locale = resolveLocale(resolvedParams?.lang ?? i18n.defaultLocale);
  let pageTitleData = await getPageTitle(PAGE_KEY, locale);
  if (!pageTitleData) pageTitleData = await getPageTitle(PAGE_KEY_LEGACY, locale);
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
