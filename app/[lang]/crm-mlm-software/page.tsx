import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";
import {
  CrmMlmHeroSection,
  CrmMlmPillarsSection,
  CrmMlmCapabilitiesSection,
  CrmMlmWorkflowSection,
  CrmMlmAiUpgradesSection,
  CrmMlmUseCasesSection,
  CrmMlmFaqSection,
  CrmMlmCtaSection,
} from "@/components/frontend/crm-mlm-software";
import { getPageTitle } from "@/lib/api/page-titles";

export const dynamic = "force-dynamic";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/crm-mlm-software", {
    page: "crm-mlm-software",
    fallbackTitle: "CRM for MLM Software",
    fallbackDescription:
      "Transform distributor and customer engagements with Cloud MLM Software CRM: automation, AI copilots, and enterprise governance.",
    fallbackKeywords:
      "CRM MLM software, MLM CRM, Cloud MLM Software, distributor CRM, customer engagement",
  });
}

type CrmMlmSoftwarePageProps = {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
};

export default async function CrmMlmSoftwarePage(props: CrmMlmSoftwarePageProps) {
  const params = props?.params;
  const resolvedParams =
    params != null ? (params instanceof Promise ? await params : params) : null;
  const locale = resolveLocale(resolvedParams?.lang ?? i18n.defaultLocale);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";
  const resourcesHref = buildLocalizedPath("/resources", locale);

  const pageTitleData = await getPageTitle("crm-mlm-software", locale);

  return (
    <div>
      <CrmMlmHeroSection
        locale={locale}
        contactHref={contactHref}
        demoHref={demoHref}
        resourcesHref={resourcesHref}
        pageTitleData={pageTitleData}
      />

      <CrmMlmPillarsSection locale={locale} />

      <CrmMlmCapabilitiesSection locale={locale} />

      <CrmMlmWorkflowSection locale={locale} />

      <CrmMlmAiUpgradesSection locale={locale} />

      <CrmMlmUseCasesSection locale={locale} />

      <CrmMlmFaqSection locale={locale} />

      <CrmMlmCtaSection
        locale={locale}
        contactHref={contactHref}
        demoHref={demoHref}
        resourcesHref={resourcesHref}
      />
    </div>
  );
}
