import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  TestimonialsHeroSection,
  TestimonialsListSection,
  TestimonialsHighlightsSection,
  TestimonialsCtaSection
} from "@/components/frontend/testimonials";
import { getPageTitle } from "@/lib/api/page-titles";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale } }): Promise<Metadata> {
  const { getPageKeywords } = await import("@/lib/seo-keywords");
  const resolvedParams = params instanceof Promise ? await params : params;
  
  return getPageMetadata(
    params,
    "/testimonials",
    {
      page: "testimonials",
      fallbackTitle: "MLM Software Testimonials | Customer Success Stories | USA, India, Philippines, Australia, Germany",
      fallbackDescription: "Read real MLM software testimonials and customer success stories from 500+ MLM companies worldwide. See how Cloud MLM Software helps network marketing businesses grow.",
      fallbackKeywords: `${getPageKeywords("testimonials", resolvedParams.lang)}, MLM software testimonials, MLM software reviews, customer success stories, MLM platform reviews, network marketing software testimonials`
    }
  );
}

type TestimonialsPageProps = {
  params: Promise<{ lang: SupportedLocale }>;
};

export default async function TestimonialsPage({ params }: TestimonialsPageProps) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  // Fetch page title data from backend
  const pageTitleData = await getPageTitle("testimonials", locale);

  return (
    <div>
      <TestimonialsHeroSection
        locale={locale}
        contactHref={contactHref}
        pricingHref={pricingHref}
        pageTitleData={pageTitleData}
      />

      <TestimonialsListSection locale={locale} />

      <TestimonialsHighlightsSection contactHref={contactHref} locale={locale} />

      <TestimonialsCtaSection
        contactHref={contactHref}
        pricingHref={pricingHref}
      />
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
