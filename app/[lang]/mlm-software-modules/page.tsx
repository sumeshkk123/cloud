import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ModulesHeroSection,
  ModulesPrimarySection,
  ModulesListSection,
  ModulesImplementationSection,
  ModulesFaqSection,
  ModulesCtaSection
} from "@/components/frontend/modules";
import { getPageTitle } from "@/lib/api/page-titles";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";
import { getModulesContent } from "@/lib/modules";

export const dynamic = "force-dynamic";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale } }): Promise<Metadata> {
  return getPageMetadata(
    params,
    "/mlm-software-modules",
    {
      page: "mlm-software-modules",
      fallbackTitle: "MLM Software Modules | Cloud MLM Software",
      fallbackDescription: "Explore 56+ configurable MLM software modules covering compensation, commerce, marketing, compliance, and analytics. Build a tailored platform for your network marketing brand.",
      fallbackKeywords: "MLM software modules, MLM platform modules, compensation modules, commerce modules, marketing automation modules, MLM software features"
    }
  );
}

type ModulesPageProps = {
  params: Promise<{ lang: SupportedLocale }>;
};

export default async function ModulesPage({ params }: ModulesPageProps) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = "/pricing/";
  const demoHref = "/free-mlm-software-demo/";

  // Fetch page title data from backend
  const pageTitleData = await getPageTitle("mlm-software-modules", locale);

  // Fetch modules content on server side (can't use require() in client components)
  const modulesContent = getModulesContent(locale);

  return (
    <div>
      <ModulesHeroSection
        locale={locale}
        contactHref={contactHref}
        pricingHref={pricingHref}
        demoHref={demoHref}
        pageTitleData={pageTitleData}
      />

      <ModulesPrimarySection locale={locale} />

      <ModulesListSection locale={locale} />

      <ModulesImplementationSection />

      <ModulesFaqSection locale={locale} faqContent={modulesContent.faqSection} />

      <ModulesCtaSection contactHref={contactHref} demoHref={demoHref} locale={locale} />
    </div>
  );
}
