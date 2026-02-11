"use client";

import { notFound } from "next/navigation";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { PricingSubPageLayout } from "@/components/frontend/pricing/sub-page";
import { getModulesSubpageContent } from "@/lib/modules-subpage-content";
import { EVoucherClient } from "@/app/[lang]/e-voucher-for-mlm-software/e-voucher-client";
import { MassEmailSendingModuleClient } from "@/app/[lang]/mass-email-sending-module/mass-email-sending-module-client";
import { AnalyticsClient } from "@/app/[lang]/analytics/analytics-client";
import { KycDocumentationClient } from "@/app/[lang]/kyc-documentation/kyc-documentation-client";
import { MarketingAutomationClient } from "@/app/[lang]/marketing-automation/marketing-automation-client";
import { GenealogyClient } from "@/app/[lang]/genealogy/genealogy-client";

const DEMO_URL = "https://demo.cloudmlmsoftware.com";

type ModuleSubpageClientProps = {
  slug: string;
  locale: Locale;
  serverTitle?: string | null;
  serverBadge?: string | null;
  serverDescription?: string | null;
};

/** Feature-style modules with their own layout – render their client so translated slugs work. */
const FEATURE_MODULE_SLUGS = ["e-voucher", "mass-email-sending-module", "analytics", "kyc-documentation", "marketing-automation", "genealogy"] as const;

export function ModuleSubpageClient({
  slug,
  locale,
  serverTitle,
  serverBadge,
  serverDescription,
}: ModuleSubpageClientProps) {
  const contactHref = buildLocalizedPath("/contact", locale);

  if (FEATURE_MODULE_SLUGS.includes(slug as (typeof FEATURE_MODULE_SLUGS)[number])) {
    if (slug === "e-voucher") {
      return (
        <EVoucherClient
          pageTitleData={
            serverTitle != null || serverBadge != null || serverDescription != null
              ? {
                  page: "mlm-software-modules-e-voucher",
                  locale,
                  title: serverTitle ?? "",
                  pagePill: serverBadge ?? undefined,
                  sectionSubtitle: serverDescription ?? undefined,
                }
              : null
          }
          contactHref={contactHref}
          secondaryHref={DEMO_URL}
          locale={locale}
        />
      );
    }
    if (slug === "mass-email-sending-module") {
      return (
        <MassEmailSendingModuleClient
          pageTitleData={
            serverTitle != null || serverBadge != null || serverDescription != null
              ? {
                  page: "mlm-software-modules-mass-email-sending-module",
                  locale,
                  title: serverTitle ?? "",
                  pagePill: serverBadge ?? undefined,
                  sectionSubtitle: serverDescription ?? undefined,
                }
              : null
          }
          contactHref={contactHref}
          secondaryHref={DEMO_URL}
          locale={locale}
        />
      );
    }
    if (slug === "analytics") {
      return (
        <AnalyticsClient
          pageTitleData={
            serverTitle != null || serverBadge != null || serverDescription != null
              ? {
                  page: "mlm-software-modules-analytics",
                  locale,
                  title: serverTitle ?? "",
                  pagePill: serverBadge ?? undefined,
                  sectionSubtitle: serverDescription ?? undefined,
                }
              : null
          }
          contactHref={contactHref}
          secondaryHref={DEMO_URL}
          locale={locale}
        />
      );
    }
    if (slug === "kyc-documentation") {
      return (
        <KycDocumentationClient
          pageTitleData={
            serverTitle != null || serverBadge != null || serverDescription != null
              ? {
                  page: "mlm-software-modules-kyc-documentation",
                  locale,
                  title: serverTitle ?? "",
                  pagePill: serverBadge ?? undefined,
                  sectionSubtitle: serverDescription ?? undefined,
                }
              : null
          }
          contactHref={contactHref}
          secondaryHref={DEMO_URL}
          locale={locale}
        />
      );
    }
    if (slug === "marketing-automation") {
      return (
        <MarketingAutomationClient
          pageTitleData={
            serverTitle != null || serverBadge != null || serverDescription != null
              ? {
                  page: "mlm-software-modules-marketing-automation",
                  locale,
                  title: serverTitle ?? "",
                  pagePill: serverBadge ?? undefined,
                  sectionSubtitle: serverDescription ?? undefined,
                }
              : null
          }
          contactHref={contactHref}
          secondaryHref={DEMO_URL}
          locale={locale}
        />
      );
    }
    if (slug === "genealogy") {
      return (
        <GenealogyClient
          pageTitleData={
            serverTitle != null || serverBadge != null || serverDescription != null
              ? {
                  page: "mlm-software-modules-genealogy",
                  locale,
                  title: serverTitle ?? "",
                  pagePill: serverBadge ?? undefined,
                  sectionSubtitle: serverDescription ?? undefined,
                }
              : null
          }
          contactHref={contactHref}
          secondaryHref={DEMO_URL}
          locale={locale}
        />
      );
    }
  }

  const content = getModulesSubpageContent(slug, locale);
  if (!content) notFound();

  const mergedContent = {
    ...content,
    hero: {
      ...content.hero,
      title: serverTitle ?? content.hero.title,
      badge: serverBadge ?? content.hero.badge,
      description: serverDescription ?? content.hero.description,
    },
  };

  return (
    <PricingSubPageLayout
      content={mergedContent}
      contactHref={contactHref}
      secondaryHref={DEMO_URL}
    />
  );
}
