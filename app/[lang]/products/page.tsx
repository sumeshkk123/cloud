import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { supportedLocales } from "@/config/site";
import { getWordpressPage } from "@/lib/wordpress-page";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";

const PRODUCTS_SLUG = "mlm-software-modules";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const page = await getWordpressPage(PRODUCTS_SLUG, locale);

  if (!page) {
    return {
      title: "MLM Software Modules",
      description: "Discover Cloud MLM Software modules"
    };
  }

  return {
    title: page.seo?.metaTitle || page.title,
    description: page.seo?.metaDescription || page.excerpt || undefined,
    alternates: {
      canonical: buildLocalizedPath("/products", locale)
    }
  };
}

type ProductsPageProps = {
  params: { lang: SupportedLocale };
};

export default async function ProductsPage({ params }: ProductsPageProps) {
  const locale = resolveLocale(params.lang);
  const page = await getWordpressPage(PRODUCTS_SLUG, locale);

  if (!page) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-4xl font-semibold">Products overview coming soon</h1>
        <p className="mt-4 text-muted-foreground">We are syncing the product catalog for this locale.</p>
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
