import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
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

export const dynamic = "force-static";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const resolvedParams = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolvedParams.lang);
  const title = "About Cloud MLM Software & Bpract";
  const description =
    "Discover how Bpract Software Solutions architects Cloud MLM Software with enterprise reliability, AI-driven optimisation, and outcome-focused delivery.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/about-company", locale)
    },
    openGraph: {
      title,
      description
    }
  };
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
    <div className="space-y-24 pb-24">
      <AboutCompanyHeroSection
        locale={locale}
        contactHref={contactHref}
        demoHref={demoHref}
      />

      <AboutCompanyMissionSection />

      <AboutCompanyGoalsSection />

      <AboutCompanyOfferingsSection contactHref={contactHref} servicesHref={servicesHref} />

      <AboutCompanyAiSection />

      <AboutCompanyCollaborationSection />

      <AboutCompanyTrustSection />

      <AboutCompanyCtaSection contactHref={contactHref} demoHref={demoHref} />
    </div>
  );
}
