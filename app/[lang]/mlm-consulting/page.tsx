import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { MlmConsultingClient } from "./mlm-consulting-client";

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
  const title = "MLM Consulting Services: Get Results with Proven Tips";
  const description =
    "Cloud MLM Software provides proper guidance and support for individuals and businesses involved in the MLM industry. Our experienced MLM consultants help you design, implement, and optimize strategies, operations, and compensation plans.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-consulting", locale),
    },
    openGraph: {
      title,
      description,
    },
  };
}

type MlmConsultingPageProps = {
  params: { lang: SupportedLocale };
};

export default function MlmConsultingPage({ params }: MlmConsultingPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const servicesHref = buildLocalizedPath("/services", locale);
  const featuresHref = buildLocalizedPath("/features", locale);

  return (
    <MlmConsultingClient
      contactHref={contactHref}
      servicesHref={servicesHref}
      featuresHref={featuresHref}
      locale={locale}
    />
  );
}
