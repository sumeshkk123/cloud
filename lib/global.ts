import { supportedLocales, type SupportedLocale } from "@/config/site";
import type {
  CmsLink,
  FooterBottomLink,
  FooterColumn,
  FooterContact,
  FooterCta,
  GlobalSettings,
  HighlightCard,
  LanguageOption,
  LinkWithIcon,
  MegaCard,
  MegaDetail,
  MegaMenu,
  MegaMenuCallout,
  MegaMenuCategory,
  MegaMenuVariant,
  NavItem
} from "@/types/global";

import { getGlobalSettings as getGlobalSettingsFromDb } from "@/lib/api/global";
import { buildLocalizedPath, parseLocaleFromHref } from "./locale-links";
import { isSupportedLocale } from "./i18n-utils";

type GlobalAttributes = {
  siteName: string;
  siteTagline?: string | null;
  metadataTitle?: string | null;
  metadataDescription?: string | null;
  metadataKeywords?: string | null;
  languageLabel?: string | null;
  languageAriaLabel?: string | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  primaryNav?: Array<NavigationMenuItem>;
  headerCta?: SharedLink | null;
  languageLinks?: Array<SharedLink>;
  footerColumns?: Array<FooterColumnComponent>;
  footerCta?: FooterCtaComponent | null;
  footerContacts?: Array<ContactBlockComponent>;
  footerBottomLinks?: Array<SharedLink>;
  socialLinks?: Record<string, unknown> | null;
  locale?: string;
};

type NavigationMenuItem = {
  id: number;
  label?: string | null;
  href?: string | null;
  kind?: "link" | "mega" | null;
  order?: number | null;
  mega?: MegaMenuComponent | null;
};

type MegaMenuComponent = {
  variant?: string | null;
  highlights?: Array<HighlightCardComponent>;
  cards?: Array<MegaCardComponent>;
  serviceList?: Array<LinkWithIconComponent>;
  serviceDetails?: Array<MegaDetailComponent>;
  categories?: Array<MegaMenuCategoryComponent>;
  callouts?: Array<MegaMenuCalloutComponent>;
  seeAll?: SharedLink | null;
};

type HighlightCardComponent = {
  id: number;
  title?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  ctaLabel?: string | null;
  href?: string | null;
};

type MegaCardComponent = HighlightCardComponent & {
  iconUrl?: string | null;
  bullets?: unknown;
};

type LinkWithIconComponent = {
  id: number;
  label?: string | null;
  href?: string | null;
  iconUrl?: string | null;
};

type MegaDetailComponent = HighlightCardComponent & {
  imageUrl?: string | null;
};

type MegaMenuCategoryComponent = {
  id: number;
  title?: string | null;
  description?: string | null;
  href?: string | null;
  badge?: string | null;
  layout?: "list" | "pill" | null;
  links?: Array<SharedLink>;
};

type MegaMenuCalloutComponent = {
  id: number;
  title?: string | null;
  description?: string | null;
  href?: string | null;
  ctaLabel?: string | null;
  tone?: "default" | "primary" | "success" | "warning" | null;
};

type SharedLink = {
  id: number;
  title?: string | null;
  href?: string | null;
};

type FooterColumnComponent = {
  id: number;
  title?: string | null;
  links?: Array<SharedLink>;
};

type FooterCtaComponent = {
  id: number;
  title?: string | null;
  description?: string | null;
  actions?: Array<SharedLink>;
};

type ContactBlockComponent = {
  id: number;
  heading?: string | null;
  body?: string | null;
  links?: Array<SharedLink>;
};

const ALLOWED_MEGA_VARIANTS: MegaMenuVariant[] = [
  "standard",
  "demo",
  "platform",
  "modules",
  "plans",
  "services",
  "resources",
  "company"
];

function normalizeMegaVariant(value?: string | null): MegaMenuVariant | undefined {
  if (!value) return undefined;
  const normalized = value.trim().toLowerCase();
  if (ALLOWED_MEGA_VARIANTS.includes(normalized as MegaMenuVariant)) {
    return normalized as MegaMenuVariant;
  }
  return undefined;
}

function sanitizeBulletList(value: unknown): string[] | null {
  if (!Array.isArray(value)) {
    return null;
  }

  const bullets = value
    .map((item) => (typeof item === "string" ? item.trim() : ""))
    .map((item) => item.replace(/\s+/g, " ").trim())
    .filter((item) => item.length > 0);

  return bullets.length > 0 ? bullets : null;
}

export async function getGlobalSettings(locale: SupportedLocale): Promise<GlobalSettings | null> {
  try {
    const settings = await getGlobalSettingsFromDb(locale);
    
    // If no database settings, return null (will use defaults in page component)
    if (!settings) {
      return null;
    }

    return settings;
  } catch (error) {
    console.error(`[getGlobalSettings] Error for locale ${locale}:`, error);
    // Return null on error, page will use defaults
    return null;
  }
}

function normalizeGlobal(attributes: GlobalAttributes | null | undefined, requestedLocale: SupportedLocale): GlobalSettings | null {
  if (!attributes) return null;
  const primaryNav = (attributes?.primaryNav ?? [])
    .map(mapNavItem)
    .sort((a, b) => a.order - b.order);

  const languageLinks = mapLanguageOptions(attributes?.languageLinks ?? [], requestedLocale);

  const effectiveLocale = isSupportedLocale(attributes?.locale ?? "") ? (attributes?.locale as SupportedLocale) : requestedLocale;

  return {
    locale: effectiveLocale,
    siteName: attributes?.siteName?.trim() || "Cloud MLM Software",
    siteTagline: attributes?.siteTagline?.trim() ?? null,
    metadataTitle: attributes?.metadataTitle?.trim() ?? null,
    metadataDescription: attributes?.metadataDescription?.trim() ?? null,
    metadataKeywords: attributes?.metadataKeywords?.trim() ?? null,
    languageLabel: attributes?.languageLabel?.trim() ?? null,
    languageAriaLabel: attributes?.languageAriaLabel?.trim() ?? null,
    primaryNav,
    headerCta: mapLink(attributes?.headerCta),
    languageLinks,
    footerColumns: (attributes?.footerColumns ?? []).map(mapFooterColumn),
    footerCta: mapFooterCta(attributes?.footerCta),
    footerContacts: (attributes?.footerContacts ?? []).map(mapFooterContact),
    footerBottomLinks: (attributes?.footerBottomLinks ?? []).map((link) => mapLink(link)).filter(Boolean) as FooterBottomLink[],
    contactEmail: attributes?.contactEmail?.trim() ?? null,
    contactPhone: attributes?.contactPhone?.trim() ?? null,
    socialLinks: attributes?.socialLinks ?? null
  };
}

function mapNavItem(item: NavigationMenuItem, index: number): NavItem {
  return {
    label: cleanRequiredText(item.label),
    href: item.href ?? null,
    kind: item.kind === "mega" ? "mega" : "link",
    order: typeof item.order === "number" ? item.order : index,
    mega: item.kind === "mega" && item.mega ? mapMegaMenu(item.mega) : undefined
  };
}

function mapMegaMenu(mega: MegaMenuComponent): MegaMenu {
  return {
    variant: normalizeMegaVariant(mega.variant),
    highlights: (mega.highlights ?? []).map(mapHighlightCard),
    cards: (mega.cards ?? []).map(mapMegaCard),
    serviceList: (mega.serviceList ?? []).map(mapLinkWithIcon),
    serviceDetails: (mega.serviceDetails ?? []).map(mapMegaDetail),
    categories: (mega.categories ?? []).map(mapMegaCategory),
    callouts: (mega.callouts ?? []).map(mapMegaCallout),
    seeAll: mapLink(mega.seeAll)
  };
}

function cleanRichText(value?: string | null): string | null {
  if (!value) return null;
  const withoutTags = value.replace(/<[^>]*>/g, " ");
  const decoded = withoutTags
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
  const normalized = decoded.replace(/\s+/g, " ").trim();
  return normalized || null;
}

function cleanRequiredText(value?: string | null): string {
  return cleanRichText(value) ?? "";
}

function mapHighlightCard(card: HighlightCardComponent): HighlightCard {
  return {
    title: cleanRequiredText(card.title),
    description: cleanRichText(card.description),
    imageUrl: card.imageUrl ?? null,
    ctaLabel: cleanRichText(card.ctaLabel),
    href: card.href ?? null
  };
}

function mapMegaCard(card: MegaCardComponent): MegaCard {
  return {
    title: cleanRequiredText(card.title),
    description: cleanRichText(card.description),
    href: card.href ?? null,
    iconUrl: card.iconUrl ?? card.imageUrl ?? null,
    bullets: sanitizeBulletList(card.bullets)
  };
}

function mapLinkWithIcon(link: LinkWithIconComponent): LinkWithIcon {
  return {
    label: cleanRequiredText(link.label),
    href: link.href ?? null,
    iconUrl: link.iconUrl ?? null
  };
}

function mapMegaDetail(detail: MegaDetailComponent): MegaDetail {
  return {
    title: cleanRequiredText(detail.title),
    description: cleanRichText(detail.description),
    href: detail.href ?? null,
    imageUrl: detail.imageUrl ?? null,
    ctaLabel: cleanRichText(detail.ctaLabel)
  };
}

function mapMegaCategory(category: MegaMenuCategoryComponent): MegaMenuCategory {
  return {
    title: cleanRequiredText(category.title),
    description: cleanRichText(category.description),
    href: category.href ?? null,
    badge: cleanRichText(category.badge),
    layout: category.layout === "list" ? "list" : "pill",
    links: (category.links ?? []).map((link) => mapLink(link)).filter(Boolean) as CmsLink[]
  };
}

function mapMegaCallout(callout: MegaMenuCalloutComponent): MegaMenuCallout {
  return {
    title: cleanRequiredText(callout.title),
    description: cleanRichText(callout.description),
    href: callout.href ?? null,
    ctaLabel: cleanRichText(callout.ctaLabel),
    tone: callout.tone === "primary" || callout.tone === "success" || callout.tone === "warning" ? callout.tone : "default"
  };
}

function mapFooterColumn(column: FooterColumnComponent): FooterColumn {
  return {
    title: cleanRequiredText(column.title),
    links: (column.links ?? []).map((link) => mapLink(link)).filter(Boolean) as CmsLink[]
  };
}

function mapFooterCta(cta?: FooterCtaComponent | null): FooterCta | null {
  if (!cta) return null;
  const actions = (cta.actions ?? []).map((link) => mapLink(link)).filter(Boolean) as CmsLink[];
  if (!cta.title && !cta.description && actions.length === 0) {
    return null;
  }
  return {
    title: cleanRichText(cta.title),
    description: cleanRichText(cta.description),
    actions
  };
}

function mapFooterContact(contact: ContactBlockComponent): FooterContact {
  return {
    heading: cleanRichText(contact.heading),
    body: cleanRichText(contact.body),
    links: (contact.links ?? []).map((link) => mapLink(link)).filter(Boolean) as CmsLink[]
  };
}

function mapLanguageOptions(links: Array<SharedLink>, fallback: SupportedLocale): LanguageOption[] {
  const options: LanguageOption[] = [];
  links.forEach((link) => {
    const href = link.href ?? "/";
    const localeFromHref = parseLocaleFromHref(href) ?? fallback;
    const label = cleanRichText(link.title) || localeFromHref.toUpperCase();
    if (!supportedLocales.includes(localeFromHref)) {
      return;
    }
    options.push({
      locale: localeFromHref,
      label,
      href
    });
  });

  if (options.length === 0) {
    options.push({
      locale: fallback,
      label: fallback.toUpperCase(),
      href: buildLocalizedPath("/", fallback)
    });
  }

  const unique = new Map<SupportedLocale, LanguageOption>();
  options.forEach((option) => {
    if (!unique.has(option.locale)) {
      unique.set(option.locale, option);
    }
  });

  return Array.from(unique.values()).sort((a, b) => a.locale.localeCompare(b.locale));
}

function mapLink(link?: SharedLink | null): CmsLink | null {
  if (!link) return null;
  const title = cleanRichText(link.title);
  if (!title) return null;
  return {
    title,
    href: link.href ?? null
  };
}
