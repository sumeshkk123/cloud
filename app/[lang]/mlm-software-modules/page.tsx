import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ModulesHeroWithProjectBriefModal,
  ModulesPrimarySection,
  ModulesListSection,
  ModulesImplementationSection,
  ModulesFaqSection,
  ModulesCtaSection
} from "@/components/frontend/modules";
import { getPageTitle } from "@/lib/api/page-titles";
import { getModuleSubpageHeroData } from "@/lib/module-subpage-hero";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";
import { getModulesContent } from "@/lib/modules";

export const dynamic = "force-dynamic";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata(props: { params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale } }): Promise<Metadata> {
  const params = props?.params ?? null;
  let resolvedParams: { lang: SupportedLocale } | null = null;
  try {
    resolvedParams = params != null ? (params instanceof Promise ? await params : params) : null;
  } catch {
    // ignore
  }
  const lang = resolvedParams?.lang ?? i18n.defaultLocale;
  const { getPageKeywords } = await import("@/lib/seo-keywords");

  return getPageMetadata(
    params,
    "/mlm-software-modules",
    {
      page: "mlm-software-modules",
      fallbackTitle: "MLM Software Modules | 56+ Configurable Network Marketing Modules | USA, India, Philippines, Australia, Germany",
      fallbackDescription: "Explore 56+ configurable MLM software modules covering compensation plans, e-commerce, marketing automation, compliance, and analytics. Build a tailored MLM platform for your network marketing business. Trusted worldwide.",
      fallbackKeywords: `${getPageKeywords("mlm-software-modules", lang)}, MLM compensation plan modules, MLM e-commerce modules, MLM marketing automation, MLM reporting modules, MLM genealogy tree, MLM commission calculator`
    }
  );
}

type ModulesPageProps = {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
};

export default async function ModulesPage(props: ModulesPageProps) {
  const params = props?.params;
  const resolvedParams =
    params != null ? (params instanceof Promise ? await params : params) : null;
  const lang = resolvedParams?.lang ?? i18n.defaultLocale;
  const locale = resolveLocale(lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = "/pricing/";
  const demoHref = "/free-mlm-software-demo/";

  // Fetch hero data from same backend as subpages (Module Meta Details / meta_details); fallback to page_titles for main page
  let pageTitleData = await getModuleSubpageHeroData("mlm-software-modules", locale);
  if (!pageTitleData) pageTitleData = await getPageTitle("mlm-software-modules", locale);

  // Fetch modules content on server side (can't use require() in client components)
  const modulesContent = getModulesContent(locale);

  return (
    <div>
      <ModulesHeroWithProjectBriefModal
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
