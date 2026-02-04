import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";
import {
  AboutCompanyHeroSection,
  AboutCompanyMissionSection,
  AboutCompanyGoalsSection,
  AboutCompanyOfferingsSection,
  AboutCompanyAiSection,
  AboutCompanyCollaborationSection,
  AboutCompanyTrustSection,
  AboutCompanyCtaSection
} from "@/components/frontend/about-company";

export const dynamic = "force-dynamic";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const resolvedParams = params instanceof Promise ? await params : params;
  const { getPageKeywords } = await import("@/lib/seo-keywords");
  return getPageMetadata(resolvedParams, "/about-company", {
    page: "about-company",
    fallbackTitle: "About Cloud MLM Software & Bpract",
    fallbackDescription:
      "Discover how Bpract Software Solutions architects Cloud MLM Software with enterprise reliability, AI-driven optimisation, and outcome-focused delivery.",
    fallbackKeywords: `${getPageKeywords("about-company", resolvedParams.lang)}, about Bpract, Cloud MLM Software company, enterprise MLM, MLM platform provider`,
  });
}

type AboutCompanyPageProps = {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
};

export default async function AboutCompanyPage({ params }: AboutCompanyPageProps) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolvedParams.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";
  const servicesHref = buildLocalizedPath("/services", locale);

  return (
    <div>
      <AboutCompanyHeroSection
        locale={locale}
        contactHref={contactHref}
        demoHref={demoHref}
      />

      <AboutCompanyMissionSection locale={locale} />

      <AboutCompanyGoalsSection locale={locale} />

      <AboutCompanyOfferingsSection locale={locale} contactHref={contactHref} servicesHref={servicesHref} />

      <AboutCompanyAiSection locale={locale} />

      <AboutCompanyCollaborationSection locale={locale} />

      <AboutCompanyTrustSection locale={locale} />

      <AboutCompanyCtaSection locale={locale} contactHref={contactHref} demoHref={demoHref} />
    </div>
  );
}
