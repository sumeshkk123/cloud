import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";
import { getPageTitle } from "@/lib/api/page-titles";
import { getMetaDetail } from "@/lib/api/meta-details";
import { listDemoFaqs } from "@/lib/api/demo-faq";
import { getFreeDemoContent } from "@/lib/free-demo";
import { getHomepageContent } from "@/lib/homepage";
import type { Faq } from "@/components/frontend/demos/free-demo/free-demo-content";
import { MlmSoftwareDemoList } from "@/components/frontend/home/mlm-software-demo-list";
import { Section } from "@/components/ui/section";
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
  FreeDemoHeroSection,
  FreeDemoInvitesSection,
  FreeDemoLiveExploreSection,
  FreeDemoList,
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

  // Fetch FAQs and homepage content (demos are loaded by FreeDemoList via useDemoItems)
  const [demoFaqs, homepageContent] = await Promise.all([
    listDemoFaqs(locale),
    getHomepageContent(locale as import("@/config/site").SupportedLocale).catch(() => null),
  ]);
  const demoSectionData = homepageContent?.demoSection ?? {
    badgeLabel: "Demo experiences",
    heading: "See your compensation plan live inside Cloud MLM Software",
    description: "Share plan rules, product catalogue, and launch regions. We configure a working MLM software demo with payouts, dashboards, and distributor journeys tuned to your market.",
    primaryCta: { label: "Book your demo", href: contactHref },
    secondaryCtas: [],
    touchpoints: [],
    callouts: [],
  };

  // Map database FAQs to Faq[]; fall back to static FAQS if none in DB
  const faqs: Faq[] =
    demoFaqs.length > 0
      ? demoFaqs.map((f) => ({ question: f.question, answer: f.answer }))
      : FAQS;

  // Fetch FAQ section title/description (server-side so it always renders)
  const freeDemoContent = getFreeDemoContent(locale);
  const faqSection = freeDemoContent.faqSection;

  const { planDemosSection } = freeDemoContent;

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

      <section id="demo-form" aria-label="Plan demos and book your demo">
        <FreeDemoList locale={locale} planDemosSection={planDemosSection} />
      </section>

      <Section variant="gradient" padding="lg" containerClassName="!pb-4">
        <MlmSoftwareDemoList
          locale={locale}
          data={demoSectionData}
          youtubeUrl="https://youtu.be/naWFi4PCojA?t=1"
        />
      </Section>

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
