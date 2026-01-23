import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getPageTitle } from "@/lib/api/page-titles";
import {
  ContactHeroSection,
  ContactAddressSection,
  ContactFaqSection,
  ContactExpertiseSection,
  ContactRegionsSection,
  ContactBusinessInfoSection,
  ContactFormSection
} from "@/components/frontend/contact";

export const dynamic = "force-dynamic";
export const revalidate = 60; // Revalidate every 60 seconds

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const { getPageMetadata } = await import("@/components/frontend/common/page-metadata");

  return getPageMetadata(
    params,
    "/contact",
    {
      page: "contact",
      fallbackTitle: "Contact Us | Cloud MLM Software",
      fallbackDescription: "Connect with Cloud MLM Software experts for sales, support, partner programmes, and AI innovation workshops.",
      fallbackKeywords: "contact Cloud MLM Software, MLM software support, MLM software sales, MLM software contact, get in touch"
    }
  );
}

type ContactUsPageProps = {
  params: { lang: SupportedLocale };
};

export default async function ContactUsPage({ params }: ContactUsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const supportHref = "https://support.cloudmlmsoftware.com";

  // Fetch page title data from backend for contact page
  let pageTitleData = null;
  try {
    pageTitleData = await getPageTitle("contact", locale);
  } catch (error) {
    console.error('[ContactUsPage] Error fetching page title data:', error);
    pageTitleData = null;
  }

  return (
    <div>
      <ContactHeroSection
        locale={locale}
        contactHref={contactHref}
        supportHref={supportHref}
        pageTitleData={pageTitleData}
      />

      <ContactAddressSection locale={locale} />

      <ContactExpertiseSection />

      <ContactFormSection locale={locale} />

      <ContactBusinessInfoSection locale={locale} />

      <ContactFaqSection locale={locale} />

    </div>
  );
}
