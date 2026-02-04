import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { HeroSection } from "@/components/frontend/common/hero-section";
import { getPrivacyContent } from "@/lib/privacy";
import { ShieldCheck } from "lucide-react";

export const dynamic = "force-static";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const resolvedParams = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolvedParams.lang);
  const content = getPrivacyContent(locale);
  const title = `${content.title} | Cloud MLM Software`;
  const description =
    "Cloud MLM Software's Privacy Policy explains how we collect, use, and safeguard personal data across our platform.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/privacy", locale),
    },
    openGraph: {
      title,
      description,
    },
  };
}

type PrivacyPageProps = {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
};

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolvedParams.lang);
  const content = getPrivacyContent(locale);

  return (
    <div className="space-y-0">
      <HeroSection
        badgeText="Privacy Policy"
        badgeIcon={<ShieldCheck className="h-4 w-4" aria-hidden />}
        highlightText={content.title}
        description={content.intro.heading}
        centered={false}
      />

      <Section variant="default" padding="lg" className="w-full">
        <div className="container space-y-6">
          <div className="space-y-4">
            <Typography as="h2" variant="h3">
              {content.intro.companyName} is located at:
            </Typography>
            <Typography as="p" variant="p" textColor="muted">
              {content.intro.address}
            </Typography>
          </div>

          <Typography as="p" variant="p" textColor="muted">
            {content.intro.overview}
          </Typography>

          <Typography as="p" variant="p" textColor="muted">
            {content.intro.termsNote}
          </Typography>
        </div>
      </Section>

      <Section variant="muted" padding="lg" className="w-full">
        <div className="container space-y-8">
          <Typography as="h2" variant="h2">
            {content.websiteVisitors.heading}
          </Typography>
          <div className="space-y-4">
            <Typography as="p" variant="p" textColor="muted">
              {content.websiteVisitors.paragraph1}
            </Typography>
            <Typography as="p" variant="p" textColor="muted">
              {content.websiteVisitors.paragraph2}
            </Typography>
          </div>
        </div>
      </Section>

      <Section variant="default" padding="lg" className="w-full">
        <div className="container space-y-8">
          <Typography as="h2" variant="h2">
            {content.gatheringInfo.heading}
          </Typography>
          <div className="space-y-4">
            <Typography as="p" variant="p" textColor="muted">
              {content.gatheringInfo.paragraph}
            </Typography>
          </div>
        </div>
      </Section>

      <Section variant="muted" padding="lg" className="w-full">
        <div className="container space-y-8">
          <Typography as="h2" variant="h2">
            {content.security.heading}
          </Typography>
          <div className="space-y-4">
            <Typography as="p" variant="p" textColor="muted">
              {content.security.paragraph}
            </Typography>
          </div>
        </div>
      </Section>

      <Section variant="default" padding="lg" className="w-full">
        <div className="container space-y-8">
          <Typography as="h2" variant="h2">
            {content.advertisements.heading}
          </Typography>
          <div className="space-y-4">
            <Typography as="p" variant="p" textColor="muted">
              {content.advertisements.paragraph}
            </Typography>
          </div>
        </div>
      </Section>

      <Section variant="muted" padding="lg" className="w-full">
        <div className="container space-y-8">
          <Typography as="h2" variant="h2">
            {content.externalLinks.heading}
          </Typography>
          <div className="space-y-4">
            <Typography as="p" variant="p" textColor="muted">
              {content.externalLinks.paragraph}
            </Typography>
          </div>
        </div>
      </Section>

      <Section variant="default" padding="lg" className="w-full">
        <div className="container space-y-8">
          <Typography as="h2" variant="h2">
            {content.protection.heading}
          </Typography>
          <div className="space-y-4">
            <Typography as="p" variant="p" textColor="muted">
              {content.protection.paragraph1}
            </Typography>
            <Typography as="p" variant="p" textColor="muted">
              {content.protection.paragraph2}
            </Typography>
          </div>
        </div>
      </Section>

      <Section variant="muted" padding="lg" className="w-full">
        <div className="container space-y-8">
          <Typography as="h2" variant="h2">
            {content.aggregatedStats.heading}
          </Typography>
          <div className="space-y-4">
            <Typography as="p" variant="p" textColor="muted">
              {content.aggregatedStats.paragraph}
            </Typography>
          </div>
        </div>
      </Section>

      <Section variant="default" padding="lg" className="w-full">
        <div className="container space-y-8">
          <Typography as="h2" variant="h2">
            {content.affiliateDisclosure.heading}
          </Typography>
          <div className="space-y-4">
            <Typography as="p" variant="p" textColor="muted">
              {content.affiliateDisclosure.paragraph}
            </Typography>
          </div>
        </div>
      </Section>

      <Section variant="muted" padding="lg" className="w-full">
        <div className="container space-y-8">
          <Typography as="h2" variant="h2">
            {content.cookies.heading}
          </Typography>
          <div className="space-y-4">
            <Typography as="p" variant="p" textColor="muted">
              {content.cookies.paragraph1}
            </Typography>
            <Typography as="p" variant="p" textColor="muted">
              {content.cookies.paragraph2}
            </Typography>
            <Typography as="p" variant="p" textColor="muted">
              {content.cookies.paragraph3}
            </Typography>
          </div>
        </div>
      </Section>

      <Section variant="default" padding="lg" className="w-full">
        <div className="container space-y-8">
          <Typography as="h2" variant="h2">
            {content.ecommerce.heading}
          </Typography>
          <div className="space-y-4">
            <Typography as="p" variant="p" textColor="muted">
              {content.ecommerce.paragraph}
            </Typography>
          </div>
        </div>
      </Section>

      <Section variant="muted" padding="lg" className="w-full">
        <div className="container space-y-8">
          <Typography as="h2" variant="h2">
            {content.businessTransfers.heading}
          </Typography>
          <div className="space-y-4">
            <Typography as="p" variant="p" textColor="muted">
              {content.businessTransfers.paragraph}
            </Typography>
          </div>
        </div>
      </Section>

      <Section variant="default" padding="lg" className="w-full">
        <div className="container space-y-8">
          <Typography as="h2" variant="h2">
            {content.policyChanges.heading}
          </Typography>
          <div className="space-y-4">
            <Typography as="p" variant="p" textColor="muted">
              {content.policyChanges.paragraph}
            </Typography>
          </div>
        </div>
      </Section>
    </div>
  );
}
