import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";
import {
  NetworkMarketingHeroSection,
  NetworkMarketingPillarsSection,
  NetworkMarketingFrameworkSection,
  NetworkMarketingPlatformFeaturesSection,
  NetworkMarketingAdvantagesSection,
  NetworkMarketingCtaSection,
} from "@/components/frontend/network-marketing-software";
import { getPageTitle } from "@/lib/api/page-titles";

export const dynamic = "force-dynamic";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/network-marketing-software", {
    page: "network-marketing-software",
    fallbackTitle: "Network Marketing Software",
    fallbackDescription:
      "Elevate your network marketing operations with Cloud MLM Software—automation, analytics, and mobile experiences designed for global scale.",
    fallbackKeywords:
      "network marketing software, MLM platform, Cloud MLM Software",
  });
}

type NetworkMarketingSoftwarePageProps = {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
};

export default async function NetworkMarketingSoftwarePage(props: NetworkMarketingSoftwarePageProps) {
  const params = props?.params;
  const resolvedParams =
    params != null ? (params instanceof Promise ? await params : params) : null;
  const locale = resolveLocale(resolvedParams?.lang ?? i18n.defaultLocale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const contactHref = buildLocalizedPath("/contact", locale);
  const consultingHref = buildLocalizedPath("/mlm-consulting", locale);

  const pageTitleData = await getPageTitle("network-marketing-software", locale);

  return (
    <div>
      <NetworkMarketingHeroSection
        locale={locale}
        demoHref={demoHref}
        contactHref={contactHref}
        consultingHref={consultingHref}
        pageTitleData={pageTitleData}
      />

      <NetworkMarketingPillarsSection locale={locale} />

      <NetworkMarketingFrameworkSection locale={locale} />

      <NetworkMarketingPlatformFeaturesSection locale={locale} />

      <NetworkMarketingAdvantagesSection
        locale={locale}
        contactHref={contactHref}
      />

      <NetworkMarketingCtaSection locale={locale} contactHref={contactHref} />
    </div>
  );
}
