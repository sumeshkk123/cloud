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
  const { getPageKeywords } = await import("@/lib/seo-keywords");
  const resolvedParams = params instanceof Promise ? await params : params;
  
  return getPageMetadata(
    params,
    "/mlm-software-modules",
    {
      page: "mlm-software-modules",
      fallbackTitle: "MLM Software Modules | 56+ Configurable Network Marketing Modules | USA, India, Philippines, Australia, Germany",
      fallbackDescription: "Explore 56+ configurable MLM software modules covering compensation plans, e-commerce, marketing automation, compliance, and analytics. Build a tailored MLM platform for your network marketing business. Trusted worldwide.",
      fallbackKeywords: `${getPageKeywords("mlm-software-modules", resolvedParams.lang)}, MLM compensation plan modules, MLM e-commerce modules, MLM marketing automation, MLM reporting modules, MLM genealogy tree, MLM commission calculator`
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
