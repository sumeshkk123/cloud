import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  IntegrationHeroSection,
  IntegrationPrimarySection,
  IntegrationListSection,
  IntegrationImplementationSection,
  IntegrationCtaSection
} from "@/components/frontend/integrations";
import { getPageTitle } from "@/lib/api/page-titles";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale } }): Promise<Metadata> {
  return getPageMetadata(
    params,
    "/mlm-software-integration",
    {
      page: "mlm-software-integration",
      fallbackTitle: "MLM Software Integration | Cloud MLM Software",
      fallbackDescription: "Connect your MLM software with leading payment gateways, CRMs, marketing automation, and e-commerce platforms. Extend your platform's capabilities with our extensive integration library.",
      fallbackKeywords: "MLM software integration, MLM platform integration, payment gateway integration, CRM integration, marketing automation integration, MLM software connectors"
    }
  );
}

type IntegrationPageProps = {
  params: Promise<{ lang: SupportedLocale }>;
};

export default async function IntegrationPage({ params }: IntegrationPageProps) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = "/pricing/";
  const demoHref = "/free-mlm-software-demo/";

  // Fetch page title data from backend
  const pageTitleData = await getPageTitle("mlm-software-integration", locale);

  return (
    <div>
      <IntegrationHeroSection
        locale={locale}
        contactHref={contactHref}
        pricingHref={pricingHref}
        demoHref={demoHref}
        pageTitleData={pageTitleData}
      />

      <IntegrationPrimarySection locale={locale} />

      <IntegrationListSection locale={locale} />

      <IntegrationImplementationSection />

      <IntegrationCtaSection contactHref={contactHref} demoHref={demoHref} locale={locale} />
    </div>
  );
}
