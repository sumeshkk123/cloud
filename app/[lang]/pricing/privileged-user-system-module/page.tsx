import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getPageTitle } from "@/lib/api/page-titles";
import { PrivilegedUserSystemModuleClient } from "./privileged-user-system-module-client";

export const dynamic = "force-dynamic";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

type PrivilegedUserSystemModulePricingPageProps = {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
};

export default async function PrivilegedUserSystemModulePricingPage({
  params,
}: PrivilegedUserSystemModulePricingPageProps) {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolveLocale(resolvedParams.lang);
  const pageTitleData = await getPageTitle("privileged-user-system-module", locale);
  const contactHref = buildLocalizedPath("/contact", locale);
  const secondaryHref = buildLocalizedPath("/services", locale);

  return (
    <PrivilegedUserSystemModuleClient
      pageTitleData={pageTitleData}
      contactHref={contactHref}
      secondaryHref={secondaryHref}
    />
  );
}
