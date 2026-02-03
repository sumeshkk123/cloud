import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ChangelogHeroSection,
  ChangelogListSection,
  ChangelogCtaSection
} from "@/components/frontend/changelog";
import { getPageTitle } from "@/lib/api/page-titles";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";
import { getChangelogEntries } from "@/lib/api/changelog";
import { getMetaDetail } from "@/lib/api/meta-details";

export const dynamic = "force-dynamic";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale } }): Promise<Metadata> {
  return getPageMetadata(
    params,
    "/changelog",
    {
      page: "changelog",
      fallbackTitle: "Changelog | Cloud MLM Software",
      fallbackDescription: "Explore Cloud MLM Software's evolution from 2015 to 2025: yearly releases, automation gains, and the new AI-native era.",
      fallbackKeywords: "changelog, release notes, MLM software updates, product updates, feature releases"
    }
  );
}

type ChangelogPageProps = {
  params: Promise<{ lang: SupportedLocale }>;
};

export default async function ChangelogPage({ params }: ChangelogPageProps) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const contactHref = buildLocalizedPath("/contact", locale);

  // Fetch page title data from backend
  const pageTitleData = await getPageTitle("changelog", locale);

  // Fetch meta details from backend
  const metaDetails = await getMetaDetail("changelog", locale);

  // Fetch changelog entries server-side for faster loading
  let changelogEntries: Awaited<ReturnType<typeof getChangelogEntries>> = [];
  try {
    changelogEntries = await getChangelogEntries(locale);
  } catch (error) {
    console.error('Failed to fetch changelog entries:', error);
    // Fallback to English if locale fails
    if (locale !== 'en') {
      try {
        changelogEntries = await getChangelogEntries('en');
      } catch (fallbackError) {
        console.error('Failed to fetch English changelog entries:', fallbackError);
      }
    }
  }

  // Transform to match component interface
  const entries = changelogEntries.map((entry) => ({
    id: String(entry.id),
    version: String(entry.version),
    title: entry.title || null,
    description: String(entry.description),
    features: entry.features || [],
    locale: String(entry.locale),
    order: entry.order,
    createdAt: entry.createdAt.toISOString(),
    updatedAt: entry.updatedAt.toISOString(),
  }));

  return (
    <div>
      <ChangelogHeroSection
        locale={locale}
        contactHref={contactHref}
        pageTitleData={pageTitleData}
        metaDetails={metaDetails}
      />

      <ChangelogListSection locale={locale} initialEntries={entries} />

      <ChangelogCtaSection contactHref={contactHref} locale={locale} />
    </div>
  );
}
