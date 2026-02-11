import type { Metadata } from "next";
import type { ReactNode } from "react";

import type { SupportedLocale } from "@/config/site";
import { supportedLocales } from "@/config/site";
import type {
  CmsLink,
  FooterBottomLink,
  FooterColumn,
  FooterContact,
  LanguageOption,
  GlobalSettings,
  LinkWithIcon
} from "@/types/global";
import { NAV_ITEMS, HEADER_CTA, LANGUAGE_OPTIONS } from "@/lib/layout-nav-config";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import { getGlobalSettings } from "@/lib/global";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { SiteFooter } from "@/components/site/footer";
import { TopAnnouncementBar } from "@/components/site/top-announcement-bar";
import { UtilityLinksBar } from "@/components/site/utility-links-bar";
import { MenuBar } from "@/components/site/menu-bar";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { ToastProvider } from "@/components/ui/toast";
import {
  mergeNavItems,
  mergeFooterColumns,
  mergeFooterContacts,
  mergeFooterBottomLinks,
  mergeLanguageOptions,
  mergeHeaderCta
} from "@/lib/layout-utils";

export const dynamic = "force-static";

type LocaleLayoutParams = { lang: SupportedLocale };
type LocaleLayoutProps = {
  children: ReactNode;
  params?: LocaleLayoutParams | Promise<LocaleLayoutParams>;
};

const SITE_NAME = "Cloud MLM Software";
const SITE_TAGLINE = "AI-powered platform for modern network marketing teams";

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { title: "Blog", href: "/blog/" },
      { title: "Press Releases", href: "/press-release/" },
      { title: "Changelog", href: "/changelog/" },
      { title: "Sitemap", href: "/sitemap.xml" },
      { title: "Contact", href: "/contact/" }
    ]
  },
  {
    title: "Solutions",
    links: [
      { title: "MLM Software", href: "/mlm-software/" },
      { title: "MLM App Development", href: "/mlm-app-development/" },
      { title: "MLM Consulting", href: "/mlm-consulting/" },
      { title: "MLM Marketing", href: "/mlm-business-marketing/" }
    ]
  },
  {
    title: "Resources",
    links: [
      { title: "Pricing", href: "/pricing/" },
      { title: "Demo", href: "/mlm-software-demo/" },
      { title: "MLM Plans", href: "/mlm-plan/" },
      { title: "Testimonials", href: "/testimonials/" }
    ]
  }
];

const FOOTER_CONTACTS: FooterContact[] = [
  {
    heading: "Talk to sales",
    body: "support@cloudmlmsoftware.com",
    links: [
      { title: "+91 9567 728 766", href: "tel:+919567728766" },
      { title: "+91 85901 37114", href: "tel:+918590137114" }
    ]
  },
  {
    heading: "Visit us",
    body: "Global offices across India, UAE, and USA",
    links: []
  }
];

const FOOTER_BOTTOM_LINKS: FooterBottomLink[] = [
  { title: "Privacy", href: "/privacy" },
  { title: "Refund Policy", href: "/refunds-and-cancellation" },
  { title: "Legal", href: "/legal" }
];

export async function generateMetadata(props: { params?: LocaleLayoutParams | Promise<LocaleLayoutParams> }): Promise<Metadata> {
  let resolved: LocaleLayoutParams | null = null;
  try {
    const params = props?.params;
    resolved = params != null ? (params instanceof Promise ? await params : params) : null;
  } catch {
    return { alternates: { canonical: buildLocalizedPath("/", i18n.defaultLocale as SupportedLocale) } };
  }
  const locale = resolveLocale(resolved?.lang ?? i18n.defaultLocale);
  return {
    alternates: {
      canonical: buildLocalizedPath("/", locale)
    }
  };
}

export default async function LocaleLayout(props: LocaleLayoutProps) {
  const { children, params } = props ?? {};
  let resolved: LocaleLayoutParams | null = null;
  try {
    resolved = params != null ? (params instanceof Promise ? await params : params) : null;
  } catch {
    resolved = null;
  }
  const locale = resolveLocale(resolved?.lang ?? i18n.defaultLocale);
  let globalSettings: GlobalSettings | null = null;

  try {
    globalSettings = await getGlobalSettings(locale);
  } catch (error) {
    globalSettings = null;
  }

  const siteName = globalSettings?.siteName ?? SITE_NAME;
  const siteTagline = globalSettings?.siteTagline ?? SITE_TAGLINE;
  const navItems = mergeNavItems(NAV_ITEMS, globalSettings?.primaryNav);
  const headerCta = mergeHeaderCta(HEADER_CTA, globalSettings?.headerCta ?? null);
  const languageOptions = mergeLanguageOptions(LANGUAGE_OPTIONS, globalSettings?.languageLinks ?? null);
  const languageLabel = null; // Always hide the "Language" label text
  const languageAriaLabel = globalSettings?.languageAriaLabel ?? "Select language";
  const footerColumns = mergeFooterColumns(FOOTER_COLUMNS, globalSettings?.footerColumns ?? null);
  const footerCta = globalSettings?.footerCta ?? null;
  const footerContacts = mergeFooterContacts(FOOTER_CONTACTS, globalSettings?.footerContacts ?? null);
  const footerBottomLinks = mergeFooterBottomLinks(FOOTER_BOTTOM_LINKS, globalSettings?.footerBottomLinks ?? null);

  return (
    <ToastProvider>
      <div className="flex min-h-screen flex-col" data-locale={locale}>
        <TopAnnouncementBar />
        <UtilityLinksBar />
        <MenuBar
          locale={locale}
          siteName={siteName}
          navItems={navItems}
          headerCta={headerCta}
          languageLabel={languageLabel}
          languageAriaLabel={languageAriaLabel}
          languageOptions={languageOptions}
        />
        <main className="flex-1">{children}</main>
        <SiteFooter
          locale={locale}
          siteName={siteName}
          siteTagline={siteTagline}
          columns={footerColumns}
          cta={footerCta}
          contacts={footerContacts}
          bottomLinks={footerBottomLinks}
        />
        <ScrollToTop />
      </div>
    </ToastProvider>
  );
}

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ lang: locale }));
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
