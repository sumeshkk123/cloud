import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getPaymentGatewaysListContent } from "@/lib/payment-gateways-list-content";
import {
  PaymentGatewaysHeroWithModal,
  PaymentGatewaysCountriesSection,
  PaymentGatewaysCapabilitiesSection,
  PaymentGatewaysExtendSection,
  PaymentGatewaysWorkshopSection,
  PaymentGatewaysCtaSection,
} from "@/components/frontend/payment-gateways";

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "MLM Software Payment Gateways";
  const description =
    "Integrate global payment gateways, automate compliance, and deliver real-time payouts with Cloud MLM Software.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways", locale),
    },
    openGraph: {
      title,
      description,
    },
  };
}

type PaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function PaymentGatewaysPage({ params }: PaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const basePath = buildLocalizedPath("/mlm-software-payment-gateways", locale);
  const listContent = getPaymentGatewaysListContent(locale);

  return (
    <div>
      <PaymentGatewaysHeroWithModal
        locale={locale}
        contactHref={contactHref}
        demoHref={demoHref}
        content={listContent}
      />

      <PaymentGatewaysCountriesSection basePath={basePath} content={listContent} />

      <PaymentGatewaysCapabilitiesSection />

      <PaymentGatewaysExtendSection />

      <PaymentGatewaysWorkshopSection />

      <PaymentGatewaysCtaSection contactHref={contactHref} locale={locale} content={listContent.cta} />
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
