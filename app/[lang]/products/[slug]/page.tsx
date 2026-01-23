import type { Metadata } from "next";
import { notFound } from "next/navigation";

import type { SupportedLocale } from "@/config/site";
import { supportedLocales } from "@/config/site";
import { getWordpressPage } from "@/lib/wordpress-page";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { lang: SupportedLocale; slug: string } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const slug = decodeURIComponent(params.slug);
  const page = await getWordpressPage(slug, locale);

  if (!page) {
    return {
      title: `${slug} | Cloud MLM Software`
    };
  }

  return {
    title: page.seo?.metaTitle || page.title,
    description: page.seo?.metaDescription || page.excerpt || undefined,
    alternates: {
      canonical: buildLocalizedPath(`/products/${slug}`, locale)
    }
  };
}

type ProductDetailPageProps = {
  params: { lang: SupportedLocale; slug: string };
};

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const locale = resolveLocale(params.lang);
  const slug = decodeURIComponent(params.slug);
  const page = await getWordpressPage(slug, locale);

  if (!page) {
    notFound();
  }

  return (
    <div className="container prose prose-slate mx-auto max-w-5xl py-16 dark:prose-invert" dangerouslySetInnerHTML={{ __html: page.contentHtml }} suppressHydrationWarning />
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
