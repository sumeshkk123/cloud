import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { supportedLocales } from "@/config/site";
import { getWordpressPage } from "@/lib/wordpress-page";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";

const ABOUT_SLUG = "about-company";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const page = await getWordpressPage(ABOUT_SLUG, locale);

  if (!page) {
    return {
      title: "About Cloud MLM Software",
      description: "Learn more about Cloud MLM Software"
    };
  }

  return {
    title: page.seo?.metaTitle || page.title,
    description: page.seo?.metaDescription || page.excerpt || undefined,
    alternates: {
      canonical: buildLocalizedPath("/about", locale)
    }
  };
}

type AboutPageProps = {
  params: { lang: SupportedLocale };
};

export default async function AboutPage({ params }: AboutPageProps) {
  const locale = resolveLocale(params.lang);
  const page = await getWordpressPage(ABOUT_SLUG, locale);

  if (!page) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-4xl font-semibold">About Cloud MLM Software</h1>
        <p className="mt-4 text-muted-foreground">Content is coming soon for this locale.</p>
      </div>
    );
  }

  return (
    <div className="container prose prose-slate mx-auto max-w-5xl py-16 dark:prose-invert" dangerouslySetInnerHTML={{ __html: page.contentHtml }} suppressHydrationWarning />
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
