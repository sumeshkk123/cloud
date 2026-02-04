import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  PressReleaseHeroSection,
  PressReleaseMainSection,
  PressReleaseCtaSection,
} from "@/components/frontend/press-release";

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const resolvedParams = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolvedParams.lang);
  const title = "Press Release";
  const description =
    "Stay informed on Cloud MLM Software announcements covering product innovation, partnerships, awards, and thought leadership.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/press-release", locale),
    },
    openGraph: {
      title,
      description,
    },
  };
}

type PressReleasePageProps = {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
};

export default async function PressReleasePage({ params }: PressReleasePageProps) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolvedParams.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const resourcesHref = buildLocalizedPath("/resources", locale);

  return (
    <div className="space-y-24 pb-24">
      <PressReleaseHeroSection contactHref={contactHref} />
      <PressReleaseMainSection resourcesHref={resourcesHref} />
      <PressReleaseCtaSection locale={locale} />
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
