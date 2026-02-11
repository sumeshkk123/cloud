import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getServicePageTitleData } from "@/lib/services-page-title";
import { ServiceSubpageClient } from "./service-subpage-client";
import { isServicesSubpageSlug, SERVICES_SUBPAGE_SLUGS } from "@/lib/services-subpage-slugs";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export function generateStaticParams(): { slug: string }[] {
  return SERVICES_SUBPAGE_SLUGS.map((slug) => ({ slug }));
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

type ServiceSubpagePageProps = {
  params?: Promise<{ lang: SupportedLocale; slug: string }> | { lang: SupportedLocale; slug: string };
};

export default async function ServiceSubpagePage(props: ServiceSubpagePageProps) {
  let resolved: { lang: SupportedLocale; slug: string } | null = null;
  try {
    const params = props?.params;
    resolved = params != null ? (params instanceof Promise ? await params : params) : null;
  } catch {
    notFound();
  }
  const locale = resolveLocale(resolved?.lang ?? i18n.defaultLocale);
  const slug = decodeURIComponent(resolved?.slug ?? "").toLowerCase();

  if (!resolved || !isServicesSubpageSlug(slug)) notFound();

  // Hero title/description: from page_titles (admin meta-page-title) or fallback to services list (same as /services)
  const pageTitleData = await getServicePageTitleData(slug, locale);

  return (
    <ServiceSubpageClient
      slug={slug}
      locale={locale}
      serverTitle={pageTitleData?.title ?? undefined}
      serverBadge={pageTitleData?.pagePill ?? undefined}
      serverDescription={pageTitleData?.sectionSubtitle ?? undefined}
      serverImageUrl={pageTitleData?.image ?? undefined}
      serverKeyFeatures={pageTitleData?.keyFeatures ?? undefined}
    />
  );
}
