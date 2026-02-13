import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getModuleSubpageHeroDataBySlug } from "@/lib/module-subpage-hero";
import { EmailsClient } from "./emails-client";

export const dynamic = "force-dynamic";

const DEMO_URL = "https://demo.cloudmlmsoftware.com";
const MODULE_SLUG = "emails";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

type EmailsPageProps = {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
};

export default async function EmailsPage({ params }: EmailsPageProps) {
  const resolvedParams = params != null ? (params instanceof Promise ? await params : params) : { lang: i18n.defaultLocale as SupportedLocale };
  const locale = resolveLocale(resolvedParams?.lang ?? i18n.defaultLocale);
  const pageTitleData = await getModuleSubpageHeroDataBySlug(MODULE_SLUG, locale);
  const contactHref = buildLocalizedPath("/contact", locale);
  const secondaryHref = DEMO_URL;

  return (
    <EmailsClient
      pageTitleData={pageTitleData}
      contactHref={contactHref}
      secondaryHref={secondaryHref}
      locale={locale}
    />
  );
}
