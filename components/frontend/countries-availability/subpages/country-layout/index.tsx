import type { Locale } from "@/i18n-config";
import type { HomepageContent } from "@/types/homepage";
import {
  MomentumStatsSection,
  WhyChooseSection,
  MlmSoftwareDemo,
  AiToolsSection,
  MlmSoftwarePlans,
  ClientsSection,
  FeaturesSection,
  ContactFormSection,
  ContactSection,
} from "@/components/frontend/home";
import { MlmSoftwareModules } from "@/components/frontend/home/mlm-software-modules";
import { CountryHero } from "../country-hero";
import { CountryIntro } from "../country-intro";
import { CountryApplyPlanSection } from "../country-apply-plan-section";
import type { CountrySubpageContent } from "../types";

const DEFAULT_DEMO_DATA: HomepageContent["demoSection"] = {
  heading: "",
  description: "",
  primaryCta: { label: "", href: "" },
  secondaryCtas: [],
  touchpoints: [],
  callouts: [],
};

export interface CountryLayoutProps {
  locale: Locale;
  countrySlug: string;
  countryName: string;
  contactHref: string;
  demoHref: string;
  plansHref: string;
  /** Pricing page URL for hero first CTA. */
  pricingHref: string;
  content: CountrySubpageContent;
  /** Homepage content for shared sections (trusted brands, why choose, AI, plans, modules, contact). */
  homepageContent: HomepageContent | null;
}

export function CountryLayout({
  locale,
  countrySlug,
  countryName,
  contactHref,
  demoHref,
  plansHref,
  pricingHref,
  content,
  homepageContent,
}: CountryLayoutProps) {
  const hero = content.hero;
  const intro = content.intro;
  const applyPlan = content.applyPlan;

  return (
    <div>
      <CountryHero
        badge={hero.badge}
        title={hero.title}
        highlightInTitle={countryName}
        description={hero.description}
        pricingHref={pricingHref}
        demoHref={demoHref}
        primaryCtaLabel={hero.primaryCtaLabel}
        secondaryCtaLabel={hero.secondaryCtaLabel}
        reserveDemoCtaLabel={hero.reserveDemoCtaLabel}
        contactFormSectionId="country-contact-form"
        trustPills={hero.trustPills}
        metrics={hero.metrics}
      />

      <CountryIntro
        countrySlug={countrySlug}
        countryName={countryName}
        badge={intro.badge}
        heading={intro.heading}
        paragraphs={intro.paragraphs}
      />

      <CountryApplyPlanSection
        plansHref={plansHref}
        badge={applyPlan.badge}
        heading={applyPlan.heading}
        description={applyPlan.description}
        imageAlt={applyPlan.imageAlt}
        linkText={applyPlan.linkText}
      />

      {/* A proven platform trusted by global direct selling brands */}
      <MomentumStatsSection
        data={homepageContent?.momentumStats ?? { heading: "", description: "", stats: [] }}
        trustBadges={homepageContent?.trustBadges ?? undefined}
      />

      {/* Why leaders choose Cloud MLM Software */}
      <WhyChooseSection locale={locale} data={homepageContent?.whyChoose ?? { badge: "", heading: "", description: "", reasons: [] }} />

      {/* Demo section */}
      <MlmSoftwareDemo
        locale={locale}
        data={{
          ...DEFAULT_DEMO_DATA,
          ...(homepageContent?.demoSection ?? {}),
          ...(homepageContent?.featureSection ?? {}),
        }}
      />

      {/* Trusted by global direct selling brands (customer stories / logos) */}
      <ClientsSection
        locale={locale}
        logos={homepageContent?.hero?.logos ?? []}
        data={homepageContent?.clients ?? { heading: "", description: "", metrics: [], focusTags: [] }}
      />

      {/* Configure compensation, operations, and engagement from one modular platform */}
      <AiToolsSection data={homepageContent?.aiHighlights ?? { heading: "", description: "", highlights: [] }} />

      {/* MLM compensation plan templates optimised with AI simulations */}
      <MlmSoftwarePlans
        locale={locale}
        data={homepageContent?.planShowcase ?? { heading: "", description: "", cards: [] }}
        industryTags={homepageContent?.industrySection?.focusTags}
      />

      {/* Build the Cloud MLM platform your network can scale on */}
      <MlmSoftwareModules />

      {/* Features section */}
      <FeaturesSection locale={locale} data={homepageContent?.featureSection ?? undefined} />

      {/* GET IN TOUCH / Drop Us a Line — scroll target for "Reserve your demo" (120px top offset) */}
      <div id="country-contact-form" className="scroll-mt-[120px]">
        <ContactFormSection locale={locale} data={homepageContent?.contact ?? { heading: "", description: "", regions: [] }} />
      </div>
      <ContactSection locale={locale} data={homepageContent?.contact ?? { heading: "", description: "", regions: [] }} />
    </div>
  );
}
