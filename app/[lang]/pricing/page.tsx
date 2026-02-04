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

export const dynamic = "force-static";

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
  params: { lang: SupportedLocale };
};

export default function PricingPage({ params }: PricingPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const estimatorPortalHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-0">
      <PricingHeroSection contactHref={contactHref} />
      <PricingAccessSection />
      <PricingValueProofsSection locale={locale} />
      <PricingPlansSection />
      <PricingMatrixSection />
      <PricingEstimatorSection contactHref={contactHref} demoHref={estimatorPortalHref} />
      <PricingTimelineSection contactHref={contactHref} />
      <PricingFaqSection />
    </div>
  );
}
