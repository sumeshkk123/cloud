import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getHomepageContent } from "@/lib/homepage";
import { getGlobalSettings } from "@/lib/global";
import {
  AnnouncementBar,
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
} from "@/components/frontend/home";
import { MlmSoftwareModules } from "@/components/frontend/home/mlm-software-modules";
import { MlmSoftwareServices } from "@/components/frontend/home/mlm-software-services";
import { MlmSoftwareDemo } from "@/components/frontend/home/mlm-software-demo";
import { HomePageHeroSection } from "@/components/frontend/home/homepage-hero-section";
import { getPageTitle } from "@/lib/api/page-titles";
import { mergeNavItems, mergeHeaderCta, mergeLanguageOptions, NAV_ITEMS, HEADER_CTA, LANGUAGE_OPTIONS } from "@/app/[lang]/layout";
import { listServices } from "@/lib/api/services";

export async function generateMetadata({ params }: { params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale } }): Promise<Metadata> {
  const resolvedParams = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolvedParams.lang);

  const { getPageMetadata } = await import("@/components/frontend/common/page-metadata");

  return getPageMetadata(
    params,
    "/",
    {
      page: "home",
      fallbackTitle: "MLM Software | Best Network Marketing Tools for Growth",
      fallbackDescription: "Grow with Cloud MLM Software: AI-powered, scalable, secure MLM platform for network marketing business. Free demo & transparent pricing! Start today.",
      fallbackKeywords: "MLM software, network marketing software, multi-level marketing, MLM platform, direct selling software, cloud MLM, MLM solutions"
    }
  );
}

type HomePageProps = {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
};

const SITE_NAME = "Cloud MLM Software";

export default async function HomePage({ params }: HomePageProps) {
  try {
    // Handle both Promise and direct params (Next.js 15 compatibility)
    const resolvedParams = params instanceof Promise ? await params : params;
    const locale = resolveLocale(resolvedParams.lang);

    // Wrap content fetching in try-catch to prevent 500 errors
    let content;
    try {
      content = await getHomepageContent(locale as SupportedLocale);
    } catch (error) {
      console.error('[HomePage] Error fetching homepage content:', error);
      // Fallback to default content if there's an error
      try {
        const defaultContentModule = await import("@/shared/homepage/default-content.js");
        content = (defaultContentModule as any).default || defaultContentModule;
        if (!content) {
          throw new Error('Default content is null');
        }
      } catch (importError) {
        console.error('[HomePage] Error importing default content:', importError);
        // If even default content fails, throw to show error page
        throw new Error('Failed to load homepage content');
      }
    }

    // Get global settings for header (needed for HeroSection)
    let globalSettings = null;
    try {
      globalSettings = await getGlobalSettings(locale);
    } catch (error) {
      console.error('[HomePage] Error fetching global settings:', error);
      globalSettings = null;
    }

    const siteName = globalSettings?.siteName ?? SITE_NAME;
    const navItems = mergeNavItems(NAV_ITEMS, globalSettings?.primaryNav);
    const headerCta = mergeHeaderCta(HEADER_CTA, globalSettings?.headerCta ?? null);
    const languageOptions = mergeLanguageOptions(LANGUAGE_OPTIONS, globalSettings?.languageLinks ?? null);
    const languageLabel = null; // Always hide the "Language" label text
    const languageAriaLabel = globalSettings?.languageAriaLabel ?? "Select language";

    // Fetch page title data from backend for homepage
    let pageTitleData = null;
    try {
      pageTitleData = await getPageTitle("home", locale);
    } catch (error) {
      console.error('[HomePage] Error fetching page title data:', error);
      pageTitleData = null;
    }

    // Fetch services for home page (server-side for faster loading)
    let homeServices: Awaited<ReturnType<typeof listServices>> = [];
    try {
      homeServices = await listServices(locale, true);
      // If no services found for the requested locale, fall back to English
      if (locale !== 'en' && homeServices.length === 0) {
        homeServices = await listServices('en', true);
      }
      // Limit to maximum 5 services for home page
      homeServices = homeServices.slice(0, 5);
    } catch (error) {
      console.error('[HomePage] Error fetching home services:', error);
      homeServices = [];
    }

    return (
      <div>
        <AnnouncementBar locale={locale} announcements={content?.announcements || []} />
        <HomePageHeroSection
          locale={locale}
          data={content?.hero || {}}
          pageTitleData={pageTitleData}
        />
        <MomentumStatsSection data={content?.momentumStats || {}} trustBadges={content?.trustBadges || []} />
        <MlmSoftwareDemo locale={locale} data={{ ...content?.demoSection, ...content?.featureSection }} />
        <WhyChooseSection locale={locale} data={content?.whyChoose || {}} />
        <MlmSoftwarePlans locale={locale} data={content?.planShowcase || {}} industryTags={content?.industrySection?.focusTags} />
        <VideoShowcaseSection />
        <MlmSoftwareModules />
        <MlmSoftwareServices locale={locale} services={homeServices} />
        <IndustriesSection locale={locale} data={content?.industrySection || {}} />
        <IntegrationsSection data={content?.integrations || {}} />
        <AiToolsSection data={content?.aiHighlights || {}} />
        <ClientsSection locale={locale} logos={content?.hero?.logos} data={content?.clients || {}} />
        <TestimonialsSection locale={locale} data={content?.testimonials || {}} />
        <BlogSection locale={locale} data={content?.blogPosts || {}} />
        <FaqSection locale={locale} data={content?.faq || {}} />
        <ContactFormSection locale={locale} data={content?.contact || {}} />
        <ContactSection locale={locale} data={content?.contact || {}} />
      </div>
    );
  } catch (error) {
    console.error('[HomePage] Fatal error:', error);
    // Re-throw to trigger error boundary
    throw error;
  }
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
