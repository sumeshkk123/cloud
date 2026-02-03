import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";
import { getPageTitle } from "@/lib/api/page-titles";
import { getMetaDetail } from "@/lib/api/meta-details";
import { listDemoItems } from "@/lib/api/demo-items";
import { listDemoFaqs } from "@/lib/api/demo-faq";
import { getFreeDemoContent } from "@/lib/free-demo";
import type { PlanDemo, Faq } from "@/components/frontend/demos/free-demo/free-demo-content";
import {
  DEMO_AGENDA,
  DEMO_INVITES,
  DEMO_STEPS,
  DEMO_TEAM,
  FAQS,
  FreeDemoAgendaSection,
  FreeDemoDeliverablesSection,
  FreeDemoFaqSection,
  FreeDemoFinalCtaSection,
  FreeDemoFormSection,
  FreeDemoHeroSection,
  FreeDemoInvitesSection,
  FreeDemoLiveExploreSection,
  FreeDemoPlanDemosSection,
  FreeDemoStepsSection,
  FreeDemoTeamSection,
  LIVE_EXPERIENCES,
  SANDBOX_DELIVERABLES
} from "@/components/frontend/demos/free-demo";

export const dynamic = "force-dynamic";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale } }): Promise<Metadata> {
  const resolvedParams = params instanceof Promise ? await params : params;
  const { getPageKeywords } = await import("@/lib/seo-keywords");
  return getPageMetadata(resolvedParams, "/free-mlm-software-demo", {
    page: "free-mlm-software-demo",
    fallbackTitle: "Free MLM Software Demo | Guided Cloud MLM Sandbox Experience",
    fallbackDescription:
      "Access a guided Cloud MLM Software sandbox with tailored workflows, analytics, and AI copilots to evaluate fit for your direct selling organisation.",
    fallbackKeywords: `${getPageKeywords("free-mlm-software-demo", resolvedParams.lang)}, free MLM demo, MLM software sandbox, guided product demo, compensation plan demo`,
  });
}

type FreeDemoPageProps = {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
};

export default async function FreeDemoPage({ params }: FreeDemoPageProps) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolvedParams.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const plansHref = buildLocalizedPath("/features", locale);

  const pageTitleData = await getPageTitle("free-mlm-software-demo", locale);
  const metaDetails = await getMetaDetail("free-mlm-software-demo", locale);

  // Fetch demo items and FAQs from database
  const [demoItems, demoFaqs] = await Promise.all([
    listDemoItems(locale),
    listDemoFaqs(locale),
  ]);

  // Map database FAQs to Faq[]; fall back to static FAQS if none in DB
  const faqs: Faq[] =
    demoFaqs.length > 0
      ? demoFaqs.map((f) => ({ question: f.question, answer: f.answer }))
      : FAQS;

  // Fetch FAQ section title/description (server-side so it always renders)
  const freeDemoContent = getFreeDemoContent(locale);
  const faqSection = freeDemoContent.faqSection;

  const { planDemosSection } = freeDemoContent;
  // Transform database demo items to PlanDemo format
  const planDemos: PlanDemo[] = demoItems.map((item) => {
    return {
      title: item.title || item.adminDemoTitle || "Plan Demo", // Use title from DB, fallback to adminDemoTitle
      summary: item.adminDemoTitle || "Plan demo description", // Using Admin Demo Title as summary
      image: item.image || "/wp-content/uploads/2024/08/Binary_tree.webp", // Fallback image
      imageAlt: `${item.adminDemoTitle || "Plan"} visual`,
      width: 509,
      height: 348,
      admin: {
        title: planDemosSection.adminViewpoint,
        description: item.adminDemoTitle || "Manage your MLM plan with comprehensive admin controls, real-time tracking, and automated commission calculations.",
        bullets: Array.isArray(item.adminDemoFeatures)
          ? item.adminDemoFeatures.map(String)
          : item.adminDemoFeatures
            ? [String(item.adminDemoFeatures)]
            : ["Advanced admin controls", "Real-time tracking", "Comprehensive reporting"],
      },
      user: {
        title: planDemosSection.distributorViewpoint,
        description: item.distributorsDemoTitle || "Build your team and track your progress with our intuitive distributor dashboard. Monitor earnings and grow your network.",
        bullets: Array.isArray(item.distributorsDemoFeatures)
          ? item.distributorsDemoFeatures.map(String)
          : item.distributorsDemoFeatures
            ? [String(item.distributorsDemoFeatures)]
            : ["Team tracking", "Earnings dashboard", "Network growth tools"],
      },
    };
  });

  return (
    <div>
      <FreeDemoHeroSection
        locale={locale}
        contactHref={contactHref}
        plansHref={plansHref}
        pageTitleData={pageTitleData}
        metaDetails={metaDetails}
      />

      <FreeDemoStepsSection steps={DEMO_STEPS} />

      <FreeDemoPlanDemosSection
        planDemos={planDemos}
        exploreDemoLabel={planDemosSection.exploreDemo}
        bookYourDemoLabel={planDemosSection.bookYourDemo}
      />

      <FreeDemoAgendaSection agenda={DEMO_AGENDA} />

      <FreeDemoLiveExploreSection experiences={LIVE_EXPERIENCES} />

      <FreeDemoDeliverablesSection deliverables={SANDBOX_DELIVERABLES} />

      <FreeDemoTeamSection team={DEMO_TEAM} />

      <FreeDemoInvitesSection invites={DEMO_INVITES} />

      <FreeDemoFaqSection faqSection={faqSection} faqs={faqs} />

      <FreeDemoFinalCtaSection locale={locale} contactHref={contactHref} />
    </div>
  );
}
