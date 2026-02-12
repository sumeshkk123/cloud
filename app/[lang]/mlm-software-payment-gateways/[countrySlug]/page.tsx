import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getAllCountrySlugs } from "@/lib/countries-by-continent";
import { getLocalizedCountryName } from "@/lib/get-localized-country-name";
import { getPaymentGatewayCountryContent } from "@/lib/payment-gateway-country-content";
import { PaymentGatewayCountryLayout } from "@/components/frontend/payment-gateways/subpages";

export const dynamic = "force-static";

export async function generateStaticParams(): Promise<{ lang: SupportedLocale; countrySlug: string }[]> {
  const slugs = getAllCountrySlugs();
  const locales: SupportedLocale[] = [...i18n.locales];
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
  params: Promise<{ lang?: string; countrySlug?: string }>;
}): Promise<Metadata> {
  const resolved = await params;
  if (resolved?.countrySlug == null || resolved?.lang == null) {
    return { title: "Not found" };
  }
  const locale = resolveLocale(resolved.lang);
  const countrySlug = resolved.countrySlug;
  const slugs = getAllCountrySlugs();
  if (!slugs.includes(countrySlug)) {
    return { title: "Not found" };
  }
  const countryName = getLocalizedCountryName(countrySlug, locale);
  const title = `${countryName} MLM Payment Gateways | Cloud MLM Software`;
  const description = `Coordinate ${countryName}-focused payment gateways. Cloud MLM Software connects banks, digital wallets, and regional corridors with regulator-grade governance.`;

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath(`/mlm-software-payment-gateways/${countrySlug}`, locale),
    },
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

type PageProps = {
  params: Promise<{ lang?: string; countrySlug?: string }>;
};

export default async function PaymentGatewayCountryPage({ params }: PageProps) {
  const resolved = await params;
  if (resolved == null || resolved.countrySlug == null || resolved.lang == null) {
    notFound();
  }
  const locale = resolveLocale(resolved.lang);
  const countrySlug = resolved.countrySlug;

  const slugs = getAllCountrySlugs();
  if (!slugs.includes(countrySlug)) {
    notFound();
  }

  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  const content = getPaymentGatewayCountryContent(locale, countrySlug);

  const countryName = getLocalizedCountryName(countrySlug, locale);

  return (
    <PaymentGatewayCountryLayout
      content={content}
      contactHref={contactHref}
      demoHref={demoHref}
      pricingHref={pricingHref}
      locale={locale}
      countrySlug={countrySlug}
      countryName={countryName}
    />
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
