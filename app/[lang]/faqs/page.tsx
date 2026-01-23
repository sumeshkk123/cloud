import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  FaqHeroSection,
  FaqSidebar,
  FaqCategoriesSection,
  FaqCtaSection
} from "@/components/frontend/faq";
import { fetchFaqsData, convertCategoriesToGroups } from "@/lib/api/faq-page";
import { getPageTitle } from "@/lib/api/page-titles";

export const dynamic = "force-dynamic";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale } }): Promise<Metadata> {
  const { getPageMetadata } = await import("@/components/frontend/common/page-metadata");
  
  return getPageMetadata(
    params,
    "/faqs",
    {
      page: "faq",
      fallbackTitle: "Cloud MLM Software FAQs",
      fallbackDescription: "Get answers to common questions about Cloud MLM Software implementations, platform features, support, and compliance.",
      fallbackKeywords: "MLM software FAQ, MLM platform questions, network marketing FAQ, MLM software support, MLM software help"
    }
  );
}

type FaqPageProps = {
  params: Promise<{ lang: SupportedLocale }>;
};

export default async function FaqPage({ params }: FaqPageProps) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const resourcesHref = buildLocalizedPath("/resources", locale);

  // Fetch page title data from backend
  const pageTitleData = await getPageTitle("faq", locale);

  // Fetch FAQs from database
  const faqCategories = await fetchFaqsData(locale);

  // Convert to FaqGroup format for display
  const faqGroups = convertCategoriesToGroups(faqCategories);

  return (
    <div className="space-y-24 pb-24">
      <FaqHeroSection
        locale={locale}
        contactHref={contactHref}
        resourcesHref={resourcesHref}
        pageTitleData={pageTitleData}
      />

      <section className="container grid gap-10 lg:grid-cols-[280px,1fr]">
        <FaqSidebar
          groups={faqGroups}
          contactHref={contactHref}
          locale={locale}
        />

        <FaqCategoriesSection groups={faqGroups} />
      </section>

      <FaqCtaSection
        contactHref={contactHref}
        resourcesHref={resourcesHref}
      />
    </div>
  );
}
