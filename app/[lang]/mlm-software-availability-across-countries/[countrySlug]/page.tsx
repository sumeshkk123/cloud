import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getAllCountrySlugs } from "@/lib/countries-by-continent";
import { getLocalizedCountryName } from "@/lib/get-localized-country-name";
import { getHomepageContent } from "@/lib/homepage";
import { CountryLayout } from "@/components/frontend/countries-availability/subpages/country-layout";
import { getCountryAvailabilityContent } from "@/lib/countries-availability-content";

export const dynamic = "force-static";

export async function generateStaticParams(): Promise<{ lang: SupportedLocale; countrySlug: string }[]> {
  const slugs = getAllCountrySlugs();
  const locales = i18n.locales as SupportedLocale[];
  const params: { lang: SupportedLocale; countrySlug: string }[] = [];
  for (const lang of locales) {
    for (const countrySlug of slugs) {
      params.push({ lang, countrySlug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: SupportedLocale; countrySlug: string }> | { lang: SupportedLocale; countrySlug: string };
}): Promise<Metadata> {
  const resolved = typeof params.then === "function" ? await params : params;
  const locale = resolveLocale(resolved.lang);
  const countrySlug = resolved.countrySlug;
  const slugs = getAllCountrySlugs();
  if (!slugs.includes(countrySlug)) {
    return { title: "Not found" };
  }
  const countryName = getLocalizedCountryName(countrySlug, locale);
  const title = `MLM Software in ${countryName} | Affordable Network Marketing System`;
  const description = `Cloud MLM Software supports compliant direct selling and network marketing in ${countryName}. Custom MLM compensation plans, localisation, and payments.`;

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath(`/mlm-software-availability-across-countries/${countrySlug}`, locale),
    },
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

type PageProps = {
  params: Promise<{ lang: SupportedLocale; countrySlug: string }> | { lang: SupportedLocale; countrySlug: string };
};

export default async function CountryAvailabilityPage({ params }: PageProps) {
  const resolved = typeof params.then === "function" ? await params : params;
  const locale = resolveLocale(resolved.lang);
  const countrySlug = resolved.countrySlug;

  const slugs = getAllCountrySlugs();
  if (!slugs.includes(countrySlug)) {
    notFound();
  }

  const countryName = getLocalizedCountryName(countrySlug, locale);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com/auth/login";
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const plansHref = buildLocalizedPath("/mlm-plans", locale);

  const homepageContent = await getHomepageContent(locale as SupportedLocale).catch(() => null);

  const content = getCountryAvailabilityContent(locale, countryName);

  return (
    <CountryLayout
      locale={locale}
      countrySlug={countrySlug}
      countryName={countryName}
      contactHref={contactHref}
      demoHref={demoHref}
      plansHref={plansHref}
      pricingHref={pricingHref}
      content={content}
      homepageContent={homepageContent}
    />
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
