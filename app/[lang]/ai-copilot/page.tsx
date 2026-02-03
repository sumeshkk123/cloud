import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  AICopilotHeroSection,
  AICopilotListSection,
  AICopilotCtaSection
} from "@/components/frontend/ai-copilot";
import { getPageTitle } from "@/lib/api/page-titles";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";
import { listAICopilots } from "@/lib/api/ai-copilot";

export const dynamic = "force-dynamic";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale } }): Promise<Metadata> {
  const { getPageKeywords } = await import("@/lib/seo-keywords");
  const resolvedParams = params instanceof Promise ? await params : params;
  
  return getPageMetadata(
    params,
    "/ai-copilot",
    {
      page: "ai-copilot",
      fallbackTitle: "AI Co-pilot for MLM Software | AI-Powered Network Marketing Automation | USA, India, Philippines, Australia, Germany",
      fallbackDescription: "Leverage AI-powered MLM software co-pilot features to automate workflows, predict commissions, enhance recruitment, and streamline network marketing operations. Intelligent MLM automation for growth.",
      fallbackKeywords: `${getPageKeywords("ai-copilot", resolvedParams.lang)}, AI co-pilot MLM, artificial intelligence network marketing, AI automation MLM, intelligent MLM software, AI-powered commission forecasting, MLM AI recruitment`
    }
  );
}

type AICopilotPageProps = {
  params: Promise<{ lang: SupportedLocale }>;
};

export default async function AICopilotPage({ params }: AICopilotPageProps) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = "/pricing/";
  const demoHref = "/free-mlm-software-demo/";

  // Fetch page title data from backend
  const pageTitleData = await getPageTitle("ai-copilot", locale);

  // Fetch AI Copilots on server side for initial render
  let initialCopilots: any[] = [];
  try {
    const copilots = await listAICopilots(locale);
    initialCopilots = copilots.map((copilot) => ({
      id: String(copilot.id),
      icon: copilot.icon ? String(copilot.icon) : null,
      title: String(copilot.title || ''),
      content: String(copilot.content || ''),
      locale: String(copilot.locale || ''),
    }));
  } catch (error) {
    console.error('[AICopilotPage] Error fetching copilots:', error);
  }

  return (
    <div>
      <AICopilotHeroSection
        locale={locale}
        contactHref={contactHref}
        pricingHref={pricingHref}
        demoHref={demoHref}
        pageTitleData={pageTitleData}
      />

      <AICopilotListSection locale={locale} initialCopilots={initialCopilots} />

      <AICopilotCtaSection contactHref={contactHref} demoHref={demoHref} locale={locale} />
    </div>
  );
}
