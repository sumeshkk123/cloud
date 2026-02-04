import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";
import { HeroSection } from "@/components/frontend/common/hero-section";
import { getLegalContent } from "@/lib/legal";
import { FileText } from "lucide-react";

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
  const content = getLegalContent(locale);
  const title = `${content.title} | Cloud MLM Software`;
  const description =
    "Cloud MLM Software's Terms and Conditions outline the rules and regulations for the use of our website and services.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/legal", locale),
    },
    openGraph: {
      title,
      description,
    },
  };
}

type LegalPageProps = {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
};

export default async function LegalPage({ params }: LegalPageProps) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolvedParams.lang);
  const content = getLegalContent(locale);

  return (
    <div className="space-y-0">
      <HeroSection
        badgeText="Legal"
        badgeIcon={<FileText className="h-4 w-4" aria-hidden />}
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
            {content.intro.acceptance}
          </Typography>

          <Typography as="p" variant="p" textColor="muted">
            {content.intro.terminology}
          </Typography>
        </div>
      </Section>

      <Section variant="muted" padding="lg" className="w-full">
        <div className="container space-y-8">
          <Typography as="h2" variant="h2">
            {content.cookies.heading}
          </Typography>
          <div className="space-y-4">
            <Typography as="p" variant="p" textColor="muted">
              {content.cookies.paragraph}
            </Typography>
            <Typography as="p" variant="p" textColor="muted">
              {content.cookies.details}
            </Typography>
          </div>
        </div>
      </Section>

      <Section variant="default" padding="lg" className="w-full">
        <div className="container space-y-8">
          <Typography as="h2" variant="h2">
            {content.license.heading}
          </Typography>
          <div className="space-y-4">
            <Typography as="p" variant="p" textColor="muted">
              {content.license.paragraph}
            </Typography>
            <div className="space-y-4">
              <Typography as="h3" variant="h3">
                {content.license.restrictions.heading}
              </Typography>
              <BulletList items={content.license.restrictions.items} />
            </div>
          </div>
        </div>
      </Section>

      <Section variant="muted" padding="lg" className="w-full">
        <div className="container space-y-8">
          <Typography as="h2" variant="h2">
            {content.userComments.heading}
          </Typography>
          <div className="space-y-4">
            <Typography as="p" variant="p" textColor="muted">
              {content.userComments.paragraph1}
            </Typography>
            <Typography as="p" variant="p" textColor="muted">
              {content.userComments.paragraph2}
            </Typography>
            <Typography as="p" variant="p" textColor="muted">
              {content.userComments.paragraph3}
            </Typography>
            <div className="space-y-4">
              <Typography as="h3" variant="h3">
                {content.userComments.warranties.heading}
              </Typography>
              <BulletList items={content.userComments.warranties.items} />
            </div>
          </div>
        </div>
      </Section>

      <Section variant="default" padding="lg" className="w-full">
        <div className="container space-y-8">
          <Typography as="h2" variant="h2">
            {content.hyperlinking.heading}
          </Typography>
          <div className="space-y-6">
            <div className="space-y-4">
              <Typography as="h3" variant="h3">
                {content.hyperlinking.approvedOrganizations.heading}
              </Typography>
              <BulletList items={content.hyperlinking.approvedOrganizations.items} />
              <Typography as="p" variant="p" textColor="muted">
                {content.hyperlinking.approvedOrganizations.conditions}
              </Typography>
            </div>
            <div className="space-y-4">
              <Typography as="h3" variant="h3">
                {content.hyperlinking.consideration.heading}
              </Typography>
              <BulletList items={content.hyperlinking.consideration.items} />
              <Typography as="p" variant="p" textColor="muted">
                {content.hyperlinking.consideration.paragraph}
              </Typography>
              <Typography as="p" variant="p" textColor="muted">
                {content.hyperlinking.consideration.paragraph2}
              </Typography>
              <Typography as="p" variant="p" textColor="muted">
                {content.hyperlinking.consideration.contact}
              </Typography>
            </div>
            <div className="space-y-4">
              <Typography as="h3" variant="h3">
                {content.hyperlinking.approvedMethods.heading}
              </Typography>
              <BulletList items={content.hyperlinking.approvedMethods.items} />
              <Typography as="p" variant="p" textColor="muted">
                {content.hyperlinking.approvedMethods.note}
              </Typography>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="muted" padding="lg" className="w-full">
        <div className="container space-y-8">
          <Typography as="h2" variant="h2">
            {content.iframes.heading}
          </Typography>
          <div className="space-y-4">
            <Typography as="p" variant="p" textColor="muted">
              {content.iframes.paragraph}
            </Typography>
          </div>
        </div>
      </Section>

      <Section variant="default" padding="lg" className="w-full">
        <div className="container space-y-8">
          <Typography as="h2" variant="h2">
            {content.reservationOfRights.heading}
          </Typography>
          <div className="space-y-4">
            <Typography as="p" variant="p" textColor="muted">
              {content.reservationOfRights.paragraph}
            </Typography>
          </div>
        </div>
      </Section>

      <Section variant="muted" padding="lg" className="w-full">
        <div className="container space-y-8">
          <Typography as="h2" variant="h2">
            {content.removalOfLinks.heading}
          </Typography>
          <div className="space-y-4">
            <Typography as="p" variant="p" textColor="muted">
              {content.removalOfLinks.paragraph}
            </Typography>
          </div>
        </div>
      </Section>

      <Section variant="default" padding="lg" className="w-full">
        <div className="container space-y-8">
          <Typography as="h2" variant="h2">
            {content.contentLiability.heading}
          </Typography>
          <div className="space-y-4">
            <Typography as="p" variant="p" textColor="muted">
              {content.contentLiability.paragraph}
            </Typography>
          </div>
        </div>
      </Section>

      <Section variant="muted" padding="lg" className="w-full">
        <div className="container space-y-8">
          <Typography as="h2" variant="h2">
            {content.unauthenticatedAccess.heading}
          </Typography>
          <div className="space-y-4">
            <Typography as="p" variant="p" textColor="muted">
              {content.unauthenticatedAccess.paragraph}
            </Typography>
          </div>
        </div>
      </Section>

      <Section variant="default" padding="lg" className="w-full">
        <div className="container space-y-8">
          <Typography as="h2" variant="h2">
            {content.disclaimer.heading}
          </Typography>
          <div className="space-y-4">
            <Typography as="p" variant="p" textColor="muted">
              {content.disclaimer.paragraph}
            </Typography>
            <BulletList items={content.disclaimer.exclusions} />
            <Typography as="p" variant="p" textColor="muted">
              {content.disclaimer.paragraph2}
            </Typography>
            <Typography as="p" variant="p" textColor="muted">
              {content.disclaimer.paragraph3}
            </Typography>
          </div>
        </div>
      </Section>
    </div>
  );
}
