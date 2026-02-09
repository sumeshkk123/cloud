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
import { LcpPageDevelopmentClient } from "../lcp-page-development/lcp-page-development-client";
import { MagentoIntegrationClient } from "../magento-integration/magento-integration-client";
import { MultiCurrencySystemClient } from "../multi-currency-system/multi-currency-system-client";
import { MultilingualSystemClient } from "../multilingual-system/multilingual-system-client";
import { NativeAndroidAppWithMlmSoftwareClient } from "../native-android-app-with-mlm-software/native-android-app-with-mlm-software-client";
import { OpencartIntegrationClient } from "../opencart-integration/opencart-integration-client";
import { PaymentGatewayIntegrationClient } from "../payment-gateway-integration/payment-gateway-integration-client";
import { PrivilegedUserSystemModuleClient } from "../privileged-user-system-module/privileged-user-system-module-client";
import { ReplicatingWebsiteForMlmBusinessClient } from "../replicating-website-for-mlm-business/replicating-website-for-mlm-business-client";
import { SupportTicketSystemModuleForMlmSoftwareClient } from "../support-ticket-system-module-for-mlm-software/support-ticket-system-module-for-mlm-software-client";
import { WordPressCmsWebsiteClient } from "../wordpress-cms-website/wordpress-cms-website-client";

export const dynamic = "force-dynamic";

const DEMO_URL = "https://demo.cloudmlmsoftware.com";

const PRICING_SUBPAGE_KEYS = ["cloud-mlm-software-basic", "auto-responder-module", "drupal-cms-website", "email", "lcp-page-development", "magento-integration", "multi-currency-system", "multilingual-system", "native-android-app-with-mlm-software"] as const;

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

type PricingSlugPageProps = {
  params?: Promise<{ lang: SupportedLocale; slug: string }> | { lang: SupportedLocale; slug: string };
};

export default async function PricingSlugPage(props: PricingSlugPageProps) {
  const params = props?.params;
  const resolved =
    params != null ? (params instanceof Promise ? await params : params) : null;
  if (!resolved?.lang) {
    notFound();
  }
  const locale = resolveLocale(resolved?.lang ?? i18n.defaultLocale);
  const slug = decodeURIComponent(resolved.slug ?? "");

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

  if (pageKey === "lcp-page-development") {
    return (
      <LcpPageDevelopmentClient
        pageTitleData={pageTitleData}
        contactHref={contactHref}
        secondaryHref={buildLocalizedPath("/pricing", locale)}
      />
    );
  }

  if (pageKey === "magento-integration") {
    return (
      <MagentoIntegrationClient
        pageTitleData={pageTitleData}
        contactHref={contactHref}
        secondaryHref={DEMO_URL}
      />
    );
  }

  if (pageKey === "multi-currency-system") {
    return (
      <MultiCurrencySystemClient
        pageTitleData={pageTitleData}
        contactHref={contactHref}
        secondaryHref={buildLocalizedPath("/pricing", locale)}
      />
    );
  }

  if (pageKey === "multilingual-system") {
    return (
      <MultilingualSystemClient
        pageTitleData={pageTitleData}
        contactHref={contactHref}
        secondaryHref={buildLocalizedPath("/services", locale)}
      />
    );
  }

  if (pageKey === "native-android-app-with-mlm-software") {
    return (
      <NativeAndroidAppWithMlmSoftwareClient
        pageTitleData={pageTitleData}
        contactHref={contactHref}
        secondaryHref={DEMO_URL}
      />
    );
  }

  if (pageKey === "opencart-integration") {
    return (
      <OpencartIntegrationClient
        pageTitleData={pageTitleData}
        contactHref={contactHref}
        secondaryHref={buildLocalizedPath("/pricing", locale)}
      />
    );
  }

  if (pageKey === "payment-gateway-integration") {
    return (
      <PaymentGatewayIntegrationClient
        pageTitleData={pageTitleData}
        contactHref={contactHref}
        secondaryHref={buildLocalizedPath("/pricing", locale)}
      />
    );
  }

  if (pageKey === "privileged-user-system-module") {
    return (
      <PrivilegedUserSystemModuleClient
        pageTitleData={pageTitleData}
        contactHref={contactHref}
        secondaryHref={buildLocalizedPath("/services", locale)}
      />
    );
  }

  if (pageKey === "replicating-website-for-mlm-business") {
    return (
      <ReplicatingWebsiteForMlmBusinessClient
        pageTitleData={pageTitleData}
        contactHref={contactHref}
        secondaryHref={buildLocalizedPath("/pricing", locale)}
      />
    );
  }

  if (pageKey === "support-ticket-system-module-for-mlm-software") {
    return (
      <SupportTicketSystemModuleForMlmSoftwareClient
        pageTitleData={pageTitleData}
        contactHref={contactHref}
        secondaryHref={buildLocalizedPath("/services", locale)}
      />
    );
  }

  if (pageKey === "wordpress-cms-website") {
    return (
      <WordPressCmsWebsiteClient
        pageTitleData={pageTitleData}
        contactHref={contactHref}
        secondaryHref={buildLocalizedPath("/services/web-development", locale)}
      />
    );
  }

  notFound();
}
