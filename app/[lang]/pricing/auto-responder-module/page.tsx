import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getPageTitle } from "@/lib/api/page-titles";
import { AutoResponderModuleClient } from "./auto-responder-module-client";

export const dynamic = "force-dynamic";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

type AutoResponderPricingPageProps = {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
};

export default async function AutoResponderPricingPage({
  params,
}: AutoResponderPricingPageProps) {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolveLocale(resolvedParams.lang);
  const pageTitleData = await getPageTitle("auto-responder-module", locale);
  const contactHref = buildLocalizedPath("/contact", locale);
  const secondaryHref = buildLocalizedPath("/pricing", locale);

  return (
    <AutoResponderModuleClient
      pageTitleData={pageTitleData}
      contactHref={contactHref}
      secondaryHref={secondaryHref}
    />
  );
}
