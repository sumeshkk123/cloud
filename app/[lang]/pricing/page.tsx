import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  PricingHeroSection,
  PricingValueProofsSection,
  PricingPlansSection,
  PricingMatrixSection,
  PricingTimelineSection,
  PricingEstimatorSection,
  PricingFaqSection,
} from "@/components/frontend/pricing";
import PricingAccessSection from "@/components/frontend/pricing/pricing-access-section";
import { getPageTitle } from "@/lib/api/page-titles";
import { getPricingContent } from "@/lib/pricing-content";

export const dynamic = "force-dynamic";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const { getPageMetadata } = await import("@/components/frontend/common/page-metadata");

  return getPageMetadata(
    params,
    "/pricing",
    {
      page: "pricing",
      fallbackTitle: "Pricing | Cloud MLM Software",
      fallbackDescription: "Explore transparent Cloud MLM Software pricing tiers, add-ons, and ownership benefits tailored to your network marketing strategy.",
      fallbackKeywords: "MLM software pricing, network marketing software cost, MLM platform pricing, MLM software pricing plans"
    }
  );
}

type PricingPageProps = {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
};

export default async function PricingPage({ params }: PricingPageProps) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolvedParams.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const estimatorPortalHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  const pageTitleData = await getPageTitle("pricing", locale);
  const pricingContent = getPricingContent(locale);

  return (
    <div>
      <PricingHeroSection locale={locale} contactHref={contactHref} pageTitleData={pageTitleData} />
      <PricingValueProofsSection locale={locale} />
      <PricingAccessSection />
      <PricingPlansSection
        heading={pricingContent.plans.heading}
        description={pricingContent.plans.description}
        outcomeLabel={pricingContent.plans.outcomeLabel}
      />
      <PricingMatrixSection />
      <PricingEstimatorSection contactHref={contactHref} demoHref={estimatorPortalHref} />
      <PricingTimelineSection
        heading={pricingContent.timeline.heading}
        description={pricingContent.timeline.description}
        contactHref={contactHref}
        cta={pricingContent.timeline.cta}
      />
      <PricingFaqSection content={pricingContent.faq} ctaHref={contactHref} />
    </div>
  );
}
