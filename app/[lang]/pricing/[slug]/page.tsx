import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getPageTitle } from "@/lib/api/page-titles";
import { getPricingSubpageFromSlug } from "@/lib/page-slugs";
import { notFound } from "next/navigation";
import { CloudMlmSoftwareBasicClient } from "../cloud-mlm-software-basic/cloud-mlm-software-basic-client";
import { AutoResponderModuleClient } from "../auto-responder-module/auto-responder-module-client";
import { DrupalCmsWebsiteClient } from "../drupal-cms-website/drupal-cms-website-client";
import { EmailClient } from "../email/email-client";

export const dynamic = "force-dynamic";

const DEMO_URL = "https://demo.cloudmlmsoftware.com";

const PRICING_SUBPAGE_KEYS = ["cloud-mlm-software-basic", "auto-responder-module", "drupal-cms-website", "email"] as const;

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

type PricingSlugPageProps = {
  params: Promise<{ lang: SupportedLocale; slug: string }> | { lang: SupportedLocale; slug: string };
};

export default async function PricingSlugPage({ params }: PricingSlugPageProps) {
  const resolved = await Promise.resolve(params);
  const locale = resolveLocale(resolved.lang);
  const slug = decodeURIComponent(resolved.slug);

  const pageKey =
    getPricingSubpageFromSlug(slug, locale) ??
    (PRICING_SUBPAGE_KEYS.includes(slug as any) ? slug : null);

  if (!pageKey) notFound();

  const contactHref = buildLocalizedPath("/contact", locale);
  const pageTitleData = await getPageTitle(pageKey, locale);

  if (pageKey === "cloud-mlm-software-basic") {
    return (
      <CloudMlmSoftwareBasicClient
        pageTitleData={pageTitleData}
        contactHref={contactHref}
        secondaryHref={DEMO_URL}
      />
    );
  }

  if (pageKey === "auto-responder-module") {
    return (
      <AutoResponderModuleClient
        pageTitleData={pageTitleData}
        contactHref={contactHref}
        secondaryHref={buildLocalizedPath("/pricing", locale)}
      />
    );
  }

  if (pageKey === "drupal-cms-website") {
    return (
      <DrupalCmsWebsiteClient
        pageTitleData={pageTitleData}
        contactHref={contactHref}
        secondaryHref={buildLocalizedPath("/services/web-development", locale)}
      />
    );
  }

  if (pageKey === "email") {
    return (
      <EmailClient
        pageTitleData={pageTitleData}
        contactHref={contactHref}
        secondaryHref={DEMO_URL}
      />
    );
  }

  notFound();
}
