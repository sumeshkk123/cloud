import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";
import {
  DirectSellingHeroSection,
  DirectSellingBenefitsSection,
  DirectSellingCapabilitiesSection,
  DirectSellingWorkflowSection,
  DirectSellingAiUpgradesSection,
  DirectSellingFaqSection,
  DirectSellingCtaSection,
} from "@/components/frontend/direct-selling-software";
import { getPageTitle } from "@/lib/api/page-titles";

export const dynamic = "force-dynamic";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/direct-selling-software", {
    page: "direct-selling-software",
    fallbackTitle: "Direct Selling Software",
    fallbackDescription:
      "Modernise direct selling with Cloud MLM Software: automation, governance, and AI copilots for distributors and corporate teams.",
    fallbackKeywords:
      "direct selling software, MLM platform, Cloud MLM Software, direct selling",
  });
}

type DirectSellingSoftwarePageProps = {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
};

export default async function DirectSellingSoftwarePage(props: DirectSellingSoftwarePageProps) {
  const params = props?.params;
  const resolvedParams =
    params != null ? (params instanceof Promise ? await params : params) : null;
  const locale = resolveLocale(resolvedParams?.lang ?? i18n.defaultLocale);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";
  const resourcesHref = buildLocalizedPath("/resources", locale);

  const pageTitleData = await getPageTitle("direct-selling-software", locale);

  return (
    <div>
      <DirectSellingHeroSection
        locale={locale}
        contactHref={contactHref}
        demoHref={demoHref}
        resourcesHref={resourcesHref}
        pageTitleData={pageTitleData}
      />

      <DirectSellingBenefitsSection locale={locale} />

      <DirectSellingCapabilitiesSection locale={locale} />

      <DirectSellingWorkflowSection locale={locale} />

      <DirectSellingAiUpgradesSection locale={locale} />

      <DirectSellingFaqSection locale={locale} />

      <DirectSellingCtaSection
        locale={locale}
        contactHref={contactHref}
        demoHref={demoHref}
      />
    </div>
  );
}
