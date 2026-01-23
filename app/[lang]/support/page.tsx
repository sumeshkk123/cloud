import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { supportedLocales } from "@/config/site";
import { getWordpressPage } from "@/lib/wordpress-page";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const page = await getWordpressPage("support", locale);

  if (!page) {
    return {
      title: "Support | Cloud MLM Software",
      description: "Cloud MLM Software support resources"
    };
  }

  return {
    title: page.seo?.metaTitle || page.title,
    description: page.seo?.metaDescription || page.excerpt || undefined,
    alternates: {
      canonical: buildLocalizedPath("/support", locale)
    }
  };
}

type SupportPageProps = {
  params: { lang: SupportedLocale };
};

export default async function SupportPage({ params }: SupportPageProps) {
  const locale = resolveLocale(params.lang);
  const page = await getWordpressPage("support", locale);

  if (!page) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-4xl font-semibold">Support resources are coming soon</h1>
        <p className="mt-4 text-muted-foreground">We are migrating the knowledge base into the new platform.</p>
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
