import type { Metadata } from "next";
import { unstable_cache } from "next/cache";

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
  FeaturesSection,
  IntegrationsSection,
  AiToolsSection,
  MlmSoftwarePlans,
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
import { getPublishedBlogPostsForHome } from "@/lib/api/blog";
import { mergeNavItems, mergeHeaderCta, mergeLanguageOptions } from "@/lib/layout-utils";
import { NAV_ITEMS, HEADER_CTA, LANGUAGE_OPTIONS } from "@/lib/layout-nav-config";
import { listServices } from "@/lib/api/services";
import defaultContentModule from "@/shared/homepage/default-content.js";
import type { HomepageBlogPost } from "@/types/homepage";

const defaultContent = (defaultContentModule as { default?: { blogPosts?: { posts?: HomepageBlogPost[] } } }).default ?? defaultContentModule as { blogPosts?: { posts?: HomepageBlogPost[] } };
const defaultBlogPosts: HomepageBlogPost[] = defaultContent?.blogPosts?.posts ?? [];

// Revalidate every 60 seconds (1 minute) for ISR
export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale } }): Promise<Metadata> {
  const resolvedParams = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolvedParams.lang);

  const { getPageMetadata } = await import("@/components/frontend/common/page-metadata");

  const { getHomepageKeywords } = await import("@/lib/seo-keywords");

  return getPageMetadata(
    params,
    "/",
    {
      page: "home",
      fallbackTitle: "MLM Software | Best Network Marketing Tools for Growth | USA, India, Philippines, Australia, Germany",
      fallbackDescription: "Grow with Cloud MLM Software: AI-powered, scalable, secure MLM platform for network marketing business. Trusted by 500+ MLM companies worldwide. Free demo & transparent pricing! Start today.",
      fallbackKeywords: getHomepageKeywords()
    }
  );
}

type HomePageProps = {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
};

const SITE_NAME = "Cloud MLM Software";

// Cached data fetching functions with 60 second revalidation
// These functions accept locale as parameter and include it in cache key
async function getCachedHomepageContent(locale: SupportedLocale) {
  return unstable_cache(
    async () => {
      try {
        return await getHomepageContent(locale);
      } catch (error) {
        console.error('[HomePage] Error fetching homepage content:', error);
        // Fallback to default content if there's an error
        try {
          const defaultContentModule = await import("@/shared/homepage/default-content.js");
          const content = (defaultContentModule as any).default || defaultContentModule;
          if (!content) {
            throw new Error('Default content is null');
          }
          return content;
        } catch (importError) {
          console.error('[HomePage] Error importing default content:', importError);
          throw new Error('Failed to load homepage content');
        }
      }
    },
    ['homepage-content', locale],
    { revalidate: 60, tags: ['homepage', `homepage-${locale}`] }
  )();
}

async function getCachedGlobalSettings(locale: SupportedLocale) {
  return unstable_cache(
    async () => {
      try {
        return await getGlobalSettings(locale);
      } catch (error) {
        console.error('[HomePage] Error fetching global settings:', error);
        return null;
      }
    },
    ['global-settings', locale],
    { revalidate: 60, tags: ['global-settings', `global-settings-${locale}`] }
  )();
}

async function getCachedPageTitle(page: string, locale: string) {
  return unstable_cache(
    async () => {
      try {
        return await getPageTitle(page, locale);
      } catch (error) {
        console.error('[HomePage] Error fetching page title data:', error);
        return null;
      }
    },
    ['page-title', page, locale],
    { revalidate: 60, tags: ['page-titles', `page-title-${page}-${locale}`] }
  )();
}

async function getCachedServices(locale: string) {
  return unstable_cache(
    async () => {
      try {
        let services = await listServices(locale, true);
        // If no services found for the requested locale, fall back to English
        if (locale !== 'en' && services.length === 0) {
          services = await listServices('en', true);
        }
        // Limit to maximum 5 services for home page
        return services.slice(0, 5);
      } catch (error) {
        console.error('[HomePage] Error fetching home services:', error);
        return [];
      }
    },
    ['home-services', locale],
    { revalidate: 60, tags: ['services', `services-${locale}`] }
  )();
}

async function getCachedBlogPostsForHome(locale: string) {
  return unstable_cache(
    async () => {
      try {
        return await getPublishedBlogPostsForHome(locale, 3);
      } catch (error) {
        console.error('[HomePage] Error fetching blog posts for home:', error);
        return [];
      }
    },
    ['home-blog-posts', locale],
    { revalidate: 60, tags: ['blog', `blog-${locale}`] }
  )();
}

export default async function HomePage({ params }: HomePageProps) {
  try {
    // Handle both Promise and direct params (Next.js 15 compatibility)
    const resolvedParams = params instanceof Promise ? await params : params;
    const locale = resolveLocale(resolvedParams.lang);

    // Fetch all data in parallel for maximum performance
    const [content, globalSettings, pageTitleData, homeServices, homeBlogPosts] = await Promise.all([
      getCachedHomepageContent(locale as SupportedLocale),
      getCachedGlobalSettings(locale as SupportedLocale),
      getCachedPageTitle("home", locale),
      getCachedServices(locale),
      getCachedBlogPostsForHome(locale),
    ]);

    const siteName = globalSettings?.siteName ?? SITE_NAME;
    const navItems = mergeNavItems(NAV_ITEMS, globalSettings?.primaryNav);
    const headerCta = mergeHeaderCta(HEADER_CTA, globalSettings?.headerCta ?? null);
    const languageOptions = mergeLanguageOptions(LANGUAGE_OPTIONS, globalSettings?.languageLinks ?? null);
    const languageLabel = null; // Always hide the "Language" label text
    const languageAriaLabel = globalSettings?.languageAriaLabel ?? "Select language";

    return (
      <div>
        <AnnouncementBar locale={locale} announcements={content?.announcements || []} />
        <HomePageHeroSection
          locale={locale}
          data={content?.hero || {}}
          pageTitleData={pageTitleData}
        />
        <MomentumStatsSection data={content?.momentumStats || {}} trustBadges={content?.trustBadges || []} />
        <WhyChooseSection locale={locale} data={content?.whyChoose || {}} />
        <MlmSoftwareDemo locale={locale} data={{ ...content?.demoSection, ...content?.featureSection }} />
        <AiToolsSection data={content?.aiHighlights || {}} />
        <MlmSoftwarePlans locale={locale} data={content?.planShowcase || {}} industryTags={content?.industrySection?.focusTags} />
        <MlmSoftwareModules />
        <FeaturesSection locale={locale} data={content?.featureSection} />
        <MlmSoftwareServices locale={locale} services={homeServices} />
        <IndustriesSection locale={locale} data={content?.industrySection || {}} />
        <IntegrationsSection data={content?.integrations || {}} locale={locale} />
        <ClientsSection locale={locale} logos={content?.hero?.logos} data={content?.clients || {}} />
        <TestimonialsSection locale={locale} data={content?.testimonials || {}} />
        <BlogSection
          locale={locale}
          data={{
            ...content?.blogPosts,
            posts: resolveBlogPostsForSection(homeBlogPosts, content?.blogPosts?.posts),
          }}
        />
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

function resolveBlogPostsForSection(
  homePosts: HomepageBlogPost[],
  contentPosts?: HomepageBlogPost[] | null
): HomepageBlogPost[] {
  if (homePosts?.length > 0) return homePosts;
  if (contentPosts && contentPosts.length > 0) return contentPosts;
  return defaultBlogPosts;
}
