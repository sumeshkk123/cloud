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
import { getRefundsAndCancellationContent } from "@/lib/refunds-and-cancellation";
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
  const content = getRefundsAndCancellationContent(locale);
  const title = `${content.title} | Cloud MLM Software`;
  const description =
    "Cloud MLM Software's Refund Policy explains our honor-based money-back guarantee and return procedures for digital software products.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/refunds-and-cancellation", locale),
    },
    openGraph: {
      title,
      description,
    },
  };
}

type RefundsAndCancellationPageProps = {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
};

export default async function RefundsAndCancellationPage({ params }: RefundsAndCancellationPageProps) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolvedParams.lang);
  const content = getRefundsAndCancellationContent(locale);

  return (
    <div className="space-y-0">
      <HeroSection
        badgeText="Refund Policy"
        badgeIcon={<ShieldCheck className="h-4 w-4" aria-hidden />}
        highlightText={content.title}
        description={content.intro.heading}
        centered={false}
      />

      <Section variant="default" padding="lg" className="w-full">
        <div className="container space-y-8">
          <div className="space-y-4">
            <Typography as="p" variant="p" textColor="muted">
              {content.intro.paragraph1}
            </Typography>
            <Typography as="p" variant="p" textColor="muted">
              {content.intro.paragraph2}
            </Typography>
          </div>
        </div>
      </Section>

      <Section variant="muted" padding="lg" className="w-full">
        <div className="container space-y-8">
          <Typography as="h2" variant="h2">
            {content.guarantee.heading}
          </Typography>
          <div className="space-y-4">
            <Typography as="p" variant="p" textColor="muted">
              {content.guarantee.paragraph}
            </Typography>
            <BulletList items={content.guarantee.conditions} />
          </div>
        </div>
      </Section>

      <Section variant="default" padding="lg" className="w-full">
        <div className="container space-y-8">
          <Typography as="h2" variant="h2">
            {content.procedure.heading}
          </Typography>
          <div className="space-y-6">
            <div className="space-y-4">
              <Typography as="h3" variant="h3">
                {content.procedure.subheading}
              </Typography>
              <BulletList items={content.procedure.requirements} />
            </div>
            <Typography as="p" variant="p" textColor="muted">
              {content.procedure.note}
            </Typography>
            <Typography as="p" variant="p" textColor="muted">
              {content.procedure.followUp}
            </Typography>
          </div>
        </div>
      </Section>
    </div>
  );
}
