import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getPageTitle } from "@/lib/api/page-titles";
import { AutoResponderClient } from "./auto-responder-client";

export const dynamic = "force-dynamic";
const DEMO_URL = "https://demo.cloudmlmsoftware.com";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export default async function Page(props: { params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale } }) {
  const params = props?.params;
  const resolved =
    params != null ? (params instanceof Promise ? await params : params) : null;
  const locale = resolveLocale(resolved?.lang ?? i18n.defaultLocale);
  const pageTitleData = await getPageTitle("mlm-software-modules-auto-responder", locale);
  return (
    <AutoResponderClient
      pageTitleData={pageTitleData}
      contactHref={buildLocalizedPath("/contact", locale)}
      secondaryHref={DEMO_URL}
    />
  );
}
