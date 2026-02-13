import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getPageTitle } from "@/lib/api/page-titles";
import { BitcoinCryptocurrencyClient } from "./bitcoin-cryptocurrency-mlm-software-client";

export const dynamic = "force-dynamic";

const PAGE_KEY = "bitcoin-cryptocurrency-mlm-software";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

type BitcoinCryptocurrencyPageProps = {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
};

export default async function BitcoinCryptocurrencyPage(
  props: BitcoinCryptocurrencyPageProps
) {
  const params = props?.params;
  const resolvedParams =
    params != null ? (params instanceof Promise ? await params : params) : null;
  const locale = resolveLocale(resolvedParams?.lang ?? i18n.defaultLocale);
  const pageTitleData = await getPageTitle(PAGE_KEY, locale);
  const contactHref = buildLocalizedPath("/contact", locale);
  const servicesHref = buildLocalizedPath("/services", locale);
  const featuresHref = buildLocalizedPath("/features", locale);

  return (
    <BitcoinCryptocurrencyClient
      pageTitleData={pageTitleData}
      contactHref={contactHref}
      servicesHref={servicesHref}
      featuresHref={featuresHref}
      locale={locale}
    />
  );
}
