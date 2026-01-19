import type { Metadata } from "next";
import type { ReactNode } from "react";

import type { SupportedLocale } from "@/config/site";
import { siteBaseConfig, supportedLocales } from "@/config/site";
import type {
  CmsLink,
  FooterBottomLink,
  FooterColumn,
  FooterContact,
  LanguageOption,
  GlobalSettings,
  LinkWithIcon,
  MegaMenu,
  NavItem
} from "@/types/global";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import { getGlobalSettings } from "@/lib/global";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { SiteFooter } from "@/components/site/footer";
import { ConditionalHeader } from "@/components/site/conditional-header";
import { TopAnnouncementBar } from "@/components/site/top-announcement-bar";
import { UtilityLinksBar } from "@/components/site/utility-links-bar";
import { MenuBar } from "@/components/site/menu-bar";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { ToastProvider } from "@/components/ui/toast";

export const dynamic = "force-static";

type LocaleLayoutProps = {
  children: ReactNode;
  params: { lang: SupportedLocale };
};

const SITE_NAME = "Cloud MLM Software";
const SITE_TAGLINE = "AI-powered platform for modern network marketing teams";

const DEMO_MEGA: MegaMenu = {
  highlights: [
    {
      title: "Guided custom demo",
      description: "See your compensation plan, products, and markets configured inside Cloud MLM within 24 hours.",
      imageUrl: "/wp-content/uploads/2024/08/custom-demo.webp",
      ctaLabel: "Book a session",
      href: "/free-mlm-software-demo/"
    }
  ],
  cards: [
    {
      title: "Preset sandbox access",
      description: "Explore a ready-made environment that showcases core distributor journeys and dashboards.",
      href: "https://demo.cloudmlmsoftware.com",
      iconUrl: "/wp-content/themes/cloudmlmdemo/assets/images/icon/modules/demo.svg"
    },
    {
      title: "Implementation roadmap",
      description: "Map tasks, owners, and launch milestones for a four-week go-live.",
      href: "/mlm-software/implementation-plan/",
      iconUrl: "/wp-content/themes/cloudmlmdemo/assets/images/icon/plan.svg"
    },
    {
      title: "Migration checklist",
      description: "Prep your legacy data, integrations, and comms for a smooth transition.",
      href: "/mlm-migration-checklist/",
      iconUrl: "/wp-content/themes/cloudmlmdemo/assets/images/icon/migration.svg"
    }
  ],
  serviceList: [
    { label: "Book guided demo", href: "/free-mlm-software-demo/" },
    { label: "Launch timeline", href: "/mlm-software/implementation-plan/" },
    { label: "Pricing calculator", href: "/pricing/" },
    { label: "Talk to product experts", href: "tel:+919567728766" }
  ],
  serviceDetails: [
    {
      title: "AI-assisted plan modelling",
      description: "Upload your genealogy rules and let the simulator surface payout insights before you sign off.",
      href: "/blog/mlm-plan-ai-calculator/",
      imageUrl: "/wp-content/uploads/2024/06/cloudDashboardDemo.webp",
      ctaLabel: "See how it works"
    }
  ],
  seeAll: { title: "Compare demo options", href: "/mlm-software-demo/" }
};

const MODULES_MEGA: MegaMenu = {
  highlights: [
    {
      title: "56+ configurable modules",
      description: "Blend payouts, CRM, marketing, inventory, and finance tooling in one stack.",
      imageUrl: "/wp-content/uploads/2024/08/cloud_modules_Menu.webp",
      ctaLabel: "View full library",
      href: "/mlm-software-modules/"
    }
  ],
  cards: [
    {
      title: "Commission engine",
      description: "Automate multi-ledger payouts with audit-ready exports.",
      href: "/mlm-software/commission-module/",
      iconUrl: "/wp-content/themes/cloudmlmdemo/assets/images/icon/modules/multicurrency.webp"
    },
    {
      title: "Distributor CRM",
      description: "Manage leads, onboarding, and compliance workflows.",
      href: "/mlm-crm/",
      iconUrl: "/wp-content/themes/cloudmlmdemo/assets/images/icon/modules/ticket-system.webp"
    },
    {
      title: "Marketing automation",
      description: "Personalise campaigns with journeys, segmentation, and triggers.",
      href: "/mlm-business-marketing/",
      iconUrl: "/wp-content/themes/cloudmlmdemo/assets/images/icon/modules/auto-responder.webp"
    }
  ],
  serviceList: MODULE_HIGHLIGHTS_LINKS(),
  serviceDetails: [],
  seeAll: { title: "See every module", href: "/mlm-software-modules/" }
};

const PLANS_MEGA: MegaMenu = {
  highlights: [],
  cards: PLAN_CARDS_LINKS(),
  serviceList: [
    { label: "Binary plan", href: "/mlm-plan/binary-mlm-plan/" },
    { label: "Unilevel plan", href: "/mlm-plan/unilevel-mlm-plan/" },
    { label: "Matrix plan", href: "/mlm-plan/matrix-plan/" },
    { label: "Generation plan", href: "/mlm-plan/generation-plan/" },
    { label: "Monoline plan", href: "/mlm-plan/monoline-mlm-plan/" },
    { label: "Board plan", href: "/mlm-plan/board-plan/" }
  ],
  serviceDetails: [
    {
      title: "Plan comparison guide",
      description: "Evaluate Binary, Unilevel, Matrix, and hybrids against your growth targets.",
      href: "/mlm-plan/",
      imageUrl: "/wp-content/uploads/2024/08/plan-comparison.webp",
      ctaLabel: "Download guide"
    }
  ],
  seeAll: { title: "View all MLM plans", href: "/mlm-plans" }
};

const SERVICES_MEGA: MegaMenu = {
  highlights: [
    {
      title: "Full-service delivery",
      description: "Consulting, development, training, and managed ops handled by direct selling specialists.",
      imageUrl: "/wp-content/uploads/2024/07/cloud-mlm-footer-logo.webp",
      ctaLabel: "Meet the team",
      href: "/about/"
    }
  ],
  cards: [
    {
      title: "MLM software development",
      description: "Custom integrations, portals, and analytics on a secure core.",
      href: "/mlm-software/",
      iconUrl: "/wp-content/themes/cloudmlmdemo/assets/images/icon/modules/dev.svg"
    },
    {
      title: "Mobile app development",
      description: "Native iOS and Android experiences for field engagement.",
      href: "/mlm-app-development/",
      iconUrl: "/wp-content/themes/cloudmlmdemo/assets/images/icon/modules/mobile.svg"
    },
    {
      title: "Consulting & compliance",
      description: "Launch playbooks, regulatory reviews, and plan optimisation.",
      href: "/mlm-consulting/",
      iconUrl: "/wp-content/themes/cloudmlmdemo/assets/images/icon/modules/consulting.svg"
    }
  ],
  serviceList: [
    { label: "Marketing services", href: "/mlm-business-marketing/" },
    { label: "Integrations", href: "/integrations/" },
    { label: "Support plans", href: "/mlm-support/" },
    { label: "Partner portal", href: "/partners/" }
  ],
  serviceDetails: [
    {
      title: "Customer success",
      description: "Dedicated launch managers and 24/7 product support keep momentum high post go-live.",
      href: "/customer-success/",
      imageUrl: "/wp-content/uploads/2024/07/support-team.webp",
      ctaLabel: "See success services"
    }
  ],
  seeAll: { title: "Explore services", href: "/services" }
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Features", href: "/features", kind: "link", order: 0 },
  { label: "Demo", href: "/free-mlm-software-demo", kind: "mega", order: 1, mega: DEMO_MEGA },
  { label: "Modules", href: "/mlm-software-modules/", kind: "mega", order: 2, mega: MODULES_MEGA },
  { label: "MLM Plans", href: "/mlm-plans", kind: "mega", order: 3, mega: PLANS_MEGA },
  { label: "Services", href: "/services", kind: "mega", order: 4, mega: SERVICES_MEGA },
  { label: "Resources", href: "/resources", kind: "link", order: 5 },
  { label: "Contact", href: "/contact", kind: "link", order: 6 }
];

function MODULE_HIGHLIGHTS_LINKS(): LinkWithIcon[] {
  return [
    {
      label: "Multi currency",
      href: "/mlm-software-modules/multi-currency-module/",
      iconUrl: "/wp-content/themes/cloudmlmdemo/assets/images/icon/modules/multicurrency.webp"
    },
    {
      label: "Ticket desk",
      href: "/mlm-software-modules/mlm-ticket-system-module/",
      iconUrl: "/wp-content/themes/cloudmlmdemo/assets/images/icon/modules/ticket-system.webp"
    },
    {
      label: "Autoresponder",
      href: "/mlm-software-modules/mlm-autoresponder-module/",
      iconUrl: "/wp-content/themes/cloudmlmdemo/assets/images/icon/modules/auto-responder.webp"
    },
    {
      label: "E-voucher",
      href: "/mlm-software-modules/mlm-e-voucher-module/",
      iconUrl: "/wp-content/themes/cloudmlmdemo/assets/images/icon/modules/voucher.webp"
    },
    {
      label: "E-wallet",
      href: "/mlm-software-modules/e-wallet-module/",
      iconUrl: "/wp-content/themes/cloudmlmdemo/assets/images/icon/modules/Ewallet.webp"
    },
    {
      label: "Backup manager",
      href: "/mlm-software-modules/mlm-backup-manager-module/",
      iconUrl: "/wp-content/themes/cloudmlmdemo/assets/images/icon/modules/backup.webp"
    }
  ];
}

function PLAN_CARDS_LINKS(): MegaMenu["cards"] {
  return [
    {
      title: "Binary",
      description: "Left-right legs with spillover, carry-forward logic, and rank accelerators.",
      href: "/mlm-plan/binary-mlm-plan/",
      iconUrl: "/wp-content/themes/cloudmlmdemo/assets/images/icon/plans/binary.svg"
    },
    {
      title: "Unilevel",
      description: "Unlimited frontline with depth-based bonus rules.",
      href: "/mlm-plan/unilevel-mlm-plan/",
      iconUrl: "/wp-content/themes/cloudmlmdemo/assets/images/icon/plans/unilevel.svg"
    },
    {
      title: "Matrix",
      description: "Forced width matrices with re-entry and spill incentives.",
      href: "/mlm-plan/matrix-plan/",
      iconUrl: "/wp-content/themes/cloudmlmdemo/assets/images/icon/plans/matrix.svg"
    }
  ];
}

export const HEADER_CTA: CmsLink = { title: "Pricing", href: "/pricing/" };

export const LANGUAGE_OPTIONS = supportedLocales.map((locale) => ({
  locale,
  label: locale.toUpperCase(),
  href: `${siteBaseConfig.url}${buildLocalizedPath("/", locale)}`
}));

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { title: "About", href: "/about/" },
      { title: "Blog", href: "/blog/" },
      { title: "Careers", href: "/careers/" },
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

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  return {
    alternates: {
      canonical: buildLocalizedPath("/", locale)
    }
  };
}

const normalizeKey = (value?: string | null): string => (value ? value.trim().toLowerCase() : "");

function coalesceText(preferred?: string | null, fallback?: string | null): string | undefined {
  const trimmed = preferred?.trim();
  if (trimmed) {
    return trimmed;
  }
  const fallbackTrimmed = fallback?.trim();
  return fallbackTrimmed || undefined;
}

function coalesceHref(preferred?: string | null, fallback?: string | null): string | null {
  if (preferred === undefined || preferred === null || preferred === "") {
    return fallback ?? null;
  }
  return preferred;
}

function mergeMegaMenu(base?: MegaMenu, override?: MegaMenu | null): MegaMenu | undefined {
  if (!base && !override) {
    return undefined;
  }

  if (!base) {
    return override ?? undefined;
  }

  if (!override) {
    return base;
  }

  const mergedHighlights = override.highlights?.length ? override.highlights : base.highlights;
  const mergedCards = override.cards?.length ? override.cards : base.cards;
  const mergedServiceList = override.serviceList?.length ? override.serviceList : base.serviceList;
  const mergedServiceDetails = override.serviceDetails?.length ? override.serviceDetails : base.serviceDetails;
  const mergedCategories = override.categories && override.categories.length ? override.categories : base.categories;
  const mergedCallouts = override.callouts && override.callouts.length ? override.callouts : base.callouts;
  const mergedSeeAll = override.seeAll ?? base.seeAll;

  return {
    variant: override.variant ?? base.variant,
    highlights: mergedHighlights,
    cards: mergedCards,
    serviceList: mergedServiceList,
    serviceDetails: mergedServiceDetails,
    categories: mergedCategories,
    callouts: mergedCallouts,
    seeAll: mergedSeeAll
  };
}

export function mergeNavItems(base: NavItem[], overrides?: NavItem[] | null): NavItem[] {
  if (!overrides || overrides.length === 0) {
    return base;
  }

  const baseByKey = new Map<string, NavItem>();
  const baseByOrder = new Map<number, NavItem>();
  base.forEach((item) => {
    const key = normalizeKey(item.label);
    if (key) {
      baseByKey.set(key, item);
    }
    if (typeof item.order === "number") {
      baseByOrder.set(item.order, item);
    }
  });

  const seenLabelKeys = new Set<string>();
  const seenOrders = new Set<number>();
  const merged: NavItem[] = overrides.map((override, index) => {
    const key = normalizeKey(override.label);
    let fallback = key ? baseByKey.get(key) : undefined;

    if (!fallback && typeof override.order === "number") {
      fallback = baseByOrder.get(override.order);
    }

    if (key) {
      seenLabelKeys.add(key);
    }
    if (typeof override.order === "number") {
      seenOrders.add(override.order);
    }

    if (!fallback) {
      return {
        label: override.label?.trim() || override.label || `Navigation ${index + 1}`,
        href: coalesceHref(override.href, null),
        kind: override.kind === "mega" ? "mega" : "link",
        order: typeof override.order === "number" ? override.order : base.length + index,
        mega: mergeMegaMenu(undefined, override.mega)
      };
    }

    const kind: NavItem["kind"] = fallback.kind;
    const mega = kind === "mega" ? mergeMegaMenu(fallback.mega, override.mega) : undefined;

    const fallbackKey = normalizeKey(fallback.label);
    if (fallbackKey) {
      seenLabelKeys.add(fallbackKey);
    }
    if (typeof fallback.order === "number") {
      seenOrders.add(fallback.order);
    }

    return {
      label: coalesceText(override.label, fallback.label) ?? fallback.label,
      href: coalesceHref(override.href, fallback.href),
      kind,
      order: typeof override.order === "number" ? override.order : fallback.order,
      mega
    };
  });

  base.forEach((item) => {
    const key = normalizeKey(item.label);
    const order = typeof item.order === "number" ? item.order : undefined;
    if ((key && seenLabelKeys.has(key)) || (order !== undefined && seenOrders.has(order))) {
      return;
    }

    if (key) {
      seenLabelKeys.add(key);
    }
    if (order !== undefined) {
      seenOrders.add(order);
    }
    merged.push(item);
  });

  return merged.sort((a, b) => a.order - b.order);
}

function mergeLinks(base: CmsLink[], overrides?: CmsLink[] | null): CmsLink[] {
  if (!overrides || overrides.length === 0) {
    return base;
  }

  const sanitizedOverrides = overrides.filter((link) => Boolean(link?.title?.trim()));
  if (sanitizedOverrides.length === 0) {
    return base;
  }

  const merged = base.map((link, index) => {
    const override = sanitizedOverrides[index];
    if (!override) {
      return link;
    }
    return {
      title: coalesceText(override.title, link.title) ?? link.title,
      href: coalesceHref(override.href, link.href)
    };
  });

  if (sanitizedOverrides.length > base.length) {
    sanitizedOverrides.slice(base.length).forEach((link) => {
      merged.push({
        title: link.title,
        href: coalesceHref(link.href, null)
      });
    });
  }

  return merged;
}

function mergeFooterColumns(base: FooterColumn[], overrides?: FooterColumn[] | null): FooterColumn[] {
  if (!overrides || overrides.length === 0) {
    return base;
  }

  const baseByKey = new Map<string, FooterColumn>();
  const baseByIndex = new Map<number, FooterColumn>();
  base.forEach((column) => {
    const key = normalizeKey(column.title);
    if (key) {
      baseByKey.set(key, column);
    }
    baseByIndex.set(baseByIndex.size, column);
  });

  const seenKeys = new Set<string>();
  const seenIndices = new Set<number>();
  const merged: FooterColumn[] = overrides.map((override, index) => {
    const key = normalizeKey(override.title);
    let fallback = key ? baseByKey.get(key) : undefined;
    if (!fallback && baseByIndex.has(index)) {
      fallback = baseByIndex.get(index);
    }

    if (key) {
      seenKeys.add(key);
    }
    seenIndices.add(index);

    if (!fallback) {
      return {
        title: coalesceText(override.title, `Column ${index + 1}`) ?? `Column ${index + 1}`,
        links: mergeLinks([], override.links)
      };
    }

    const fallbackKey = normalizeKey(fallback.title);
    if (fallbackKey) {
      seenKeys.add(fallbackKey);
    }

    return {
      title: coalesceText(override.title, fallback.title) ?? fallback.title,
      links: mergeLinks(fallback.links, override.links)
    };
  });

  base.forEach((column) => {
    const key = normalizeKey(column.title);
    const index = base.indexOf(column);
    if ((key && seenKeys.has(key)) || seenIndices.has(index)) {
      return;
    }

    if (key) {
      seenKeys.add(key);
    }
    seenIndices.add(index);
    merged.push(column);
  });

  return merged;
}

function mergeFooterContacts(base: FooterContact[], overrides?: FooterContact[] | null): FooterContact[] {
  if (!overrides || overrides.length === 0) {
    return base;
  }

  const baseByKey = new Map<string, FooterContact>();
  const baseByIndex = new Map<number, FooterContact>();
  base.forEach((contact, index) => {
    const key = normalizeKey(contact.heading);
    if (key) {
      baseByKey.set(key, contact);
    }
    baseByIndex.set(index, contact);
  });

  const seenKeys = new Set<string>();
  const seenIndices = new Set<number>();
  const merged: FooterContact[] = overrides.map((override, index) => {
    const key = normalizeKey(override.heading);
    let fallback = key ? baseByKey.get(key) : undefined;

    if (!fallback && baseByIndex.has(index)) {
      fallback = baseByIndex.get(index);
    }

    if (key) {
      seenKeys.add(key);
    }
    seenIndices.add(index);

    if (!fallback) {
      return {
        heading: coalesceText(override.heading, null) ?? undefined,
        body: coalesceText(override.body, null) ?? undefined,
        links: mergeLinks([], override.links)
      };
    }

    const fallbackKey = normalizeKey(fallback.heading);
    if (fallbackKey) {
      seenKeys.add(fallbackKey);
    }

    return {
      heading: coalesceText(override.heading, fallback.heading),
      body: coalesceText(override.body, fallback.body),
      links: mergeLinks(fallback.links, override.links)
    };
  });

  base.forEach((contact, index) => {
    const key = normalizeKey(contact.heading);
    if ((key && seenKeys.has(key)) || seenIndices.has(index)) {
      return;
    }

    if (key) {
      seenKeys.add(key);
    }
    seenIndices.add(index);
    merged.push(contact);
  });

  return merged;
}

function mergeFooterBottomLinks(base: FooterBottomLink[], overrides?: FooterBottomLink[] | null): FooterBottomLink[] {
  if (!overrides || overrides.length === 0) {
    return base;
  }

  const sanitizedOverrides = overrides.filter((link) => Boolean(link?.title?.trim()));
  if (sanitizedOverrides.length === 0) {
    return base;
  }

  return mergeLinks(base, sanitizedOverrides);
}

export function mergeLanguageOptions(base: LanguageOption[], overrides?: LanguageOption[] | null): LanguageOption[] {
  if (!overrides || overrides.length === 0) {
    return base;
  }

  const baseByLocale = new Map<SupportedLocale, LanguageOption>();
  base.forEach((option) => {
    baseByLocale.set(option.locale, option);
  });

  const merged: LanguageOption[] = overrides.map((option) => {
    const fallback = baseByLocale.get(option.locale);
    return {
      locale: option.locale,
      label: coalesceText(option.label, fallback?.label) ?? option.locale.toUpperCase(),
      href: option.href || fallback?.href || option.href
    };
  });

  base.forEach((option) => {
    if (!merged.some((item) => item.locale === option.locale)) {
      merged.push(option);
    }
  });

  return merged;
}

export function mergeHeaderCta(base: CmsLink | null, override?: CmsLink | null): CmsLink | null {
  if (!override) {
    return base;
  }

  const title = coalesceText(override.title, base?.title);
  if (!title) {
    return base;
  }

  return {
    title,
    href: coalesceHref(override.href, base?.href ?? null)
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = resolveLocale(params.lang);
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
        <ConditionalHeader
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
