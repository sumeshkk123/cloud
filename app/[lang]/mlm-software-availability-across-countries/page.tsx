import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getAvailabilityListContent } from "@/lib/availability-list-content";
import {
  AvailabilityHeroWithModal,
  AvailabilityCountriesSection,
  AvailabilityStepsSection,
  AvailabilityCtaSection,
} from "@/components/frontend/countries-availability";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ lang: SupportedLocale }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const content = getAvailabilityListContent(locale);
  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-availability-across-countries", locale),
    },
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
    },
  };
}

type SoftwareAvailabilityPageProps = {
  params: Promise<{ lang: SupportedLocale }>;
};

export default async function SoftwareAvailabilityPage({ params }: SoftwareAvailabilityPageProps) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const content = getAvailabilityListContent(locale);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const basePath = buildLocalizedPath("/mlm-software-availability-across-countries", locale);

  return (
    <div>
      <AvailabilityHeroWithModal
        locale={locale}
        contactHref={contactHref}
        demoHref={demoHref}
        content={content}
      />

      <AvailabilityCountriesSection
        basePath={basePath}
        content={content.countriesSection}
        continentNames={content.continentNames}
      />

      <AvailabilityStepsSection content={content.steps} />

      <AvailabilityCtaSection contactHref={contactHref} locale={locale} content={content.cta} />
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
