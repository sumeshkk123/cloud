import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { MlmMigrationClient } from "./mlm-migration-client";

export const dynamic = "force-static";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({
  params,
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Migration";
  const description =
    "Upgrade your MLM platform with Cloud MLM Software's expert migration services—secure, compliant, and low-risk.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-migration", locale),
    },
    openGraph: {
      title,
      description,
    },
  };
}

type MlmMigrationPageProps = {
  params: { lang: SupportedLocale };
};

export default function MlmMigrationPage({ params }: MlmMigrationPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const servicesHref = buildLocalizedPath("/services", locale);
  const featuresHref = buildLocalizedPath("/features", locale);

  return (
    <MlmMigrationClient
      contactHref={contactHref}
      servicesHref={servicesHref}
      featuresHref={featuresHref}
      locale={locale}
    />
  );
}
