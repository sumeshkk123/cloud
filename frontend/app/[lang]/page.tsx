import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getHomepageContent } from "@/lib/homepage";
import { getGlobalSettings } from "@/lib/global";
import {
  AnnouncementBar,
  HeroSection,
  TrustBadgesSection,
  MomentumStatsSection,
  WhyChooseSection,
  IndustriesSection,
  IntegrationsSection,
  AiToolsSection,
  MlmSoftwarePlans,
  VideoShowcaseSection,
  ClientsSection,
  TestimonialsSection,
  BlogSection,
  FaqSection,
  ContactSection,
  ContactFormSection
} from "@/components/home";
import { MlmSoftwareModules } from "@/components/home/mlm-software-modules";
import { MlmSoftwareServices } from "@/components/home/mlm-software-services";
import { MlmSoftwareDemo } from "@/components/home/mlm-software-demo";
import { mergeNavItems, mergeHeaderCta, mergeLanguageOptions, NAV_ITEMS, HEADER_CTA, LANGUAGE_OPTIONS } from "@/app/[lang]/layout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "MLM Software | Best Network Marketing Tools for Growth",
  description: "Grow with Cloud MLM Software: AI-powered, scalable, secure MLM platform for network marketing business. Free demo & transparent pricing! Start today."
};

type HomePageProps = {
  params: { lang: SupportedLocale };
};

const SITE_NAME = "Cloud MLM Software";

export default async function HomePage({ params }: HomePageProps) {
  const locale = resolveLocale(params.lang);
  const content = await getHomepageContent(locale as SupportedLocale);

  // Get global settings for header (needed for HeroSection)
  let globalSettings = null;
  try {
    globalSettings = await getGlobalSettings(locale);
  } catch (error) {
    globalSettings = null;
  }

  const siteName = globalSettings?.siteName ?? SITE_NAME;
  const navItems = mergeNavItems(NAV_ITEMS, globalSettings?.primaryNav);
  const headerCta = mergeHeaderCta(HEADER_CTA, globalSettings?.headerCta ?? null);
  const languageOptions = mergeLanguageOptions(LANGUAGE_OPTIONS, globalSettings?.languageLinks ?? null);
  const languageLabel = null; // Always hide the "Language" label text
  const languageAriaLabel = globalSettings?.languageAriaLabel ?? "Select language";

  return (
    <div>
      <AnnouncementBar locale={locale} announcements={content.announcements} />
      <HeroSection
        locale={locale}
        data={content.hero}
        siteName={siteName}
        navItems={navItems}
        headerCta={headerCta}
        languageLabel={languageLabel}
        languageAriaLabel={languageAriaLabel}
        languageOptions={languageOptions}
      />
      <MomentumStatsSection data={content.momentumStats} trustBadges={content.trustBadges} />
      <MlmSoftwareDemo locale={locale} data={{ ...content.demoSection, ...content.featureSection }} />
      <WhyChooseSection locale={locale} data={content.whyChoose} />
      <MlmSoftwarePlans locale={locale} data={content.planShowcase} industryTags={content.industrySection?.focusTags} />
      <VideoShowcaseSection />
      <MlmSoftwareModules />
      <MlmSoftwareServices />
      <IndustriesSection locale={locale} data={content.industrySection} />
      <IntegrationsSection data={content.integrations} />
      <AiToolsSection data={content.aiHighlights} />
      <ClientsSection locale={locale} logos={content.hero.logos} data={content.clients} />
      <TestimonialsSection data={content.testimonials} />
      <BlogSection locale={locale} data={content.blogPosts} />
      <FaqSection locale={locale} data={content.faq} />
      <ContactFormSection locale={locale} data={content.contact} />
      <ContactSection locale={locale} data={content.contact} />
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
