import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  PlansHeroSection,
  PlansFamiliesSection,
  PlansEvaluationSection,
  PlansSimulationsSection,
  PlansDeliverablesSection,
  PlansImplementationSection,
  PlansUseCasesSection,
  PlansFaqSection,
  PlansCtaSection
} from "@/components/frontend/plans";
import { getPageTitle } from "@/lib/api/page-titles";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";
import { getPlansContent } from "@/lib/plans";

export const dynamic = "force-dynamic";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale } }): Promise<Metadata> {
  const { getPageKeywords } = await import("@/lib/seo-keywords");
  const resolvedParams = params instanceof Promise ? await params : params;

  return getPageMetadata(
    params,
    "/mlm-plans",
    {
      page: "mlm-plans",
      fallbackTitle: "MLM Compensation Plans | Cloud MLM Software",
      fallbackDescription: "Design, simulate, and launch binary, unilevel, matrix, hybrid, and custom MLM compensation plans with guided modelling and compliance guardrails.",
      fallbackKeywords: `${getPageKeywords("mlm-plans", resolvedParams.lang)}, MLM compensation plans, binary plan, unilevel plan, matrix plan, hybrid MLM plan, MLM plan design, compensation plan simulation`
    }
  );
}

type PlansPageProps = {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
};

export default async function PlansPage({ params }: PlansPageProps) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolvedParams.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const compareHref = buildLocalizedPath("/compare-plans", locale);
  const guideHref = "/mlm-plan/";

  // Fetch page title data from backend
  const pageTitleData = await getPageTitle("mlm-plans", locale);

  // Fetch plans content on server side (can't use require() in client components)
  const plansContent = getPlansContent(locale);

  return (
    <div>
      <PlansHeroSection
        locale={locale}
        contactHref={contactHref}
        compareHref={compareHref}
        pageTitleData={pageTitleData}
      />

      <PlansDeliverablesSection />

      <PlansFamiliesSection locale={locale} />

      <PlansEvaluationSection />

      <PlansSimulationsSection />


      <PlansImplementationSection />

      <PlansUseCasesSection />

      <PlansFaqSection locale={locale} faqContent={plansContent.faqSection} />

      <PlansCtaSection contactHref={contactHref} guideHref={guideHref} locale={locale} />
    </div>
  );
}
