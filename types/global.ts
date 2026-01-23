import type { SupportedLocale } from "@/config/site";

export type CmsLink = {
  title: string;
  href: string | null;
};

export type HighlightCard = {
  title: string;
  description?: string | null;
  imageUrl?: string | null;
  ctaLabel?: string | null;
  href?: string | null;
};

export type MegaCard = {
  title: string;
  description?: string | null;
  href?: string | null;
  iconUrl?: string | null;
  bullets?: string[] | null;
};

export type LinkWithIcon = {
  label: string;
  href?: string | null;
  iconUrl?: string | null;
};

export type MegaDetail = {
  title: string;
  description?: string | null;
  href?: string | null;
  imageUrl?: string | null;
  ctaLabel?: string | null;
};

export type MegaMenuCategory = {
  title: string;
  description?: string | null;
  href?: string | null;
  badge?: string | null;
  layout?: "list" | "pill";
  links: CmsLink[];
};

export type MegaMenuCallout = {
  title: string;
  description?: string | null;
  href?: string | null;
  ctaLabel?: string | null;
  tone?: "default" | "primary" | "success" | "warning";
};

export type MegaMenuVariant =
  | "standard"
  | "demo"
  | "platform"
  | "modules"
  | "plans"
  | "services"
  | "resources"
  | "company";

export type MegaMenu = {
  highlights: HighlightCard[];
  cards: MegaCard[];
  serviceList: LinkWithIcon[];
  serviceDetails: MegaDetail[];
  categories?: MegaMenuCategory[];
  callouts?: MegaMenuCallout[];
  seeAll?: CmsLink | null;
  variant?: MegaMenuVariant;
};

export type NavItem = {
  label: string;
  href: string | null;
  kind: "link" | "mega";
  order: number;
  mega?: MegaMenu;
};

export type FooterColumn = {
  title: string;
  links: CmsLink[];
};

export type FooterCta = {
  title?: string | null;
  description?: string | null;
  actions: CmsLink[];
};

export type FooterContact = {
  heading?: string | null;
  body?: string | null;
  links: CmsLink[];
};

export type FooterBottomLink = CmsLink;

export type LanguageOption = {
  locale: SupportedLocale;
  label: string;
  href: string;
};

export type GlobalSettings = {
  locale: SupportedLocale;
  siteName: string;
  siteTagline?: string | null;
  metadataTitle?: string | null;
  metadataDescription?: string | null;
  metadataKeywords?: string | null;
  languageLabel?: string | null;
  languageAriaLabel?: string | null;
  primaryNav: NavItem[];
  headerCta?: CmsLink | null;
  languageLinks: LanguageOption[];
  footerColumns: FooterColumn[];
  footerCta?: FooterCta | null;
  footerContacts: FooterContact[];
  footerBottomLinks: FooterBottomLink[];
  contactEmail?: string | null;
  contactPhone?: string | null;
  socialLinks?: Record<string, unknown> | null;
};

export type HeroLogo = {
  imageUrl: string;
  alt?: string | null;
  title?: string | null;
};

export type TrustSignal = {
  metric: string;
  label: string;
};

export type MediaAsset = {
  url: string;
  alt?: string | null;
  title?: string | null;
  width?: number | null;
  height?: number | null;
};

export type SectionTheme = "light" | "dark" | "muted";
export type TabOrientation = "horizontal" | "vertical";
export type MediaPosition = "start" | "end" | "center" | "background";

export type SectionItem = {
  id?: number;
  slug?: string | null;
  label?: string | null;
  title?: string | null;
  subtitle?: string | null;
  description?: string | null;
  richContent?: string | null;
  badge?: string | null;
  statValue?: string | null;
  statLabel?: string | null;
  icon?: MediaAsset | null;
  image?: MediaAsset | null;
  cta?: CmsLink | null;
};

type BaseHomepageSection = {
  id?: number;
  theme: SectionTheme;
  kicker?: string | null;
  title?: string | null;
  description?: string | null;
  ctas?: CmsLink[];
  note?: string | null;
};

export type TabbedHomepageSection = BaseHomepageSection & {
  type: "tabbed";
  tabOrientation: TabOrientation;
  items: SectionItem[];
};

export type GridHomepageSection = BaseHomepageSection & {
  type: "grid";
  columns?: number | null;
  items: SectionItem[];
};

export type SplitHomepageSection = BaseHomepageSection & {
  type: "split";
  mediaPosition: MediaPosition;
  media?: MediaAsset | null;
  items: SectionItem[];
};

export type CalloutHomepageSection = BaseHomepageSection & {
  type: "callout";
  media?: MediaAsset | null;
  items: SectionItem[];
};

export type CtaHomepageSection = BaseHomepageSection & {
  type: "cta";
  media?: MediaAsset | null;
  align?: "start" | "center" | "end";
  items: SectionItem[];
};

export type StatsHomepageSection = BaseHomepageSection & {
  type: "stats";
  items: SectionItem[];
};

export type FaqHomepageSection = BaseHomepageSection & {
  type: "faq";
  items: SectionItem[];
};

export type TestimonialsHomepageSection = BaseHomepageSection & {
  type: "testimonials";
  items: SectionItem[];
};

export type LogosHomepageSection = BaseHomepageSection & {
  type: "logos";
  items: SectionItem[];
};

export type BlogHomepageSection = BaseHomepageSection & {
  type: "blog";
  items: SectionItem[];
};

export type RichHtmlSection = {
  id?: string;
  type: "rich-html";
  html: string;
  source?: string | null;
};

export type HomepageSection =
  | RichHtmlSection
  | TabbedHomepageSection
  | GridHomepageSection
  | SplitHomepageSection
  | CalloutHomepageSection
  | CtaHomepageSection
  | StatsHomepageSection
  | FaqHomepageSection
  | TestimonialsHomepageSection
  | LogosHomepageSection
  | BlogHomepageSection;

export type HomepageContent = {
  locale: SupportedLocale;
  hero: {
    eyebrow?: string | null;
    title: string;
    byline?: string | null;
    primaryCta?: CmsLink | null;
    secondaryCta?: CmsLink | null;
    tertiaryCta?: CmsLink | null;
    logos: HeroLogo[];
  };
  trustSignals: TrustSignal[];
  sections: HomepageSection[];
  metadataTitle?: string | null;
  metadataDescription?: string | null;
};
