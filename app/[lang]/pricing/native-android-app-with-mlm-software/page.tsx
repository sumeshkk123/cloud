import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getPageTitle } from "@/lib/api/page-titles";
import { NativeAndroidAppWithMlmSoftwareClient } from "./native-android-app-with-mlm-software-client";

export const dynamic = "force-dynamic";

const DEMO_URL = "https://demo.cloudmlmsoftware.com";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

type NativeAndroidAppWithMlmSoftwarePricingPageProps = {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
};

export default async function NativeAndroidAppWithMlmSoftwarePricingPage({
  params,
}: NativeAndroidAppWithMlmSoftwarePricingPageProps) {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolveLocale(resolvedParams.lang);
  const pageTitleData = await getPageTitle("native-android-app-with-mlm-software", locale);
  const contactHref = buildLocalizedPath("/contact", locale);
  const secondaryHref = DEMO_URL;

  return (
    <NativeAndroidAppWithMlmSoftwareClient
      pageTitleData={pageTitleData}
      contactHref={contactHref}
      secondaryHref={secondaryHref}
    />
  );
}
