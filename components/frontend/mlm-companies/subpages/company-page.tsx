import * as React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import type { SupportedLocale } from "@/config/site";
import { buildLocalizedPath } from "@/lib/locale-links";
import { getMlmCompanyContent, getAllCompanySlugs, resolveCompanySlug, getCompanySlugsForLocale } from "@/lib/mlm-companies";
import { MlmCompanyLayout } from "./company-layout";
import { MlmCompanyHero } from "./company-hero";
import { MlmCompanyIntroSection } from "./company-intro-section";
import { MlmCompanyFeaturesSection } from "./company-features-section";
import { MlmCompanyAchievementsSection } from "./company-achievements-section";
import { MlmCompanyProductsSection } from "./company-products-section";
import { MlmCompanyFaqSection } from "./company-faq-section";
import { MlmCompanyCtaSection } from "./company-cta-section";
import type { MlmCompanyContent } from "./types";

export const dynamic = "force-static";

interface MlmCompanyPageProps {
  params: Promise<{ lang: string; companySlug: string }>;
}

export async function generateStaticParams(): Promise<{ lang: SupportedLocale; companySlug: string }[]> {
  const locales: SupportedLocale[] = [...i18n.locales];
  const params: { lang: SupportedLocale; companySlug: string }[] = [];
  
  for (const lang of locales) {
    // Get all slugs for this locale (includes translated slugs)
    const slugs = getCompanySlugsForLocale(lang as Locale);
    for (const slug of slugs) {
      params.push({ lang, companySlug: slug });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: MlmCompanyPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { lang, companySlug } = resolvedParams;
  
  // Resolve translated slug to original English slug for content lookup
  const originalSlug = resolveCompanySlug(companySlug, lang as Locale);
  const content = await getMlmCompanyContent(originalSlug, lang as Locale, companySlug);

  if (!content) {
    return {
      title: "Company Not Found",
      description: "The requested MLM company could not be found."
    };
  }

  return {
    title: `${content.hero.title} | MLM Company Profile`,
    description: content.hero.description,
    openGraph: {
      title: content.hero.title,
      description: content.hero.description,
    }
  };
}

export default async function MlmCompanyPage({ params }: MlmCompanyPageProps) {
  const resolvedParams = await params;
  const { lang, companySlug } = resolvedParams;
  
  // Resolve translated slug to original English slug for content lookup
  const originalSlug = resolveCompanySlug(companySlug, lang as Locale);
  const content = await getMlmCompanyContent(originalSlug, lang as Locale, companySlug);

  if (!content) {
    notFound();
  }

  return (
    <MlmCompanyLayout content={content} locale={lang as Locale}>
      <MlmCompanyHero content={content} locale={lang as Locale} />
      <MlmCompanyIntroSection content={content} />
      <MlmCompanyFeaturesSection content={content} />
      <MlmCompanyAchievementsSection content={content} />
      {/* <MlmCompanyProductsSection content={content} /> */}
      <MlmCompanyFaqSection content={content} />
      <MlmCompanyCtaSection content={content} />
    </MlmCompanyLayout>
  );
}
