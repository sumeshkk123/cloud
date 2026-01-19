import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksBlogSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_blog_sections';
  info: {
    description: 'Section to display blog posts';
    displayName: 'Blog Section';
    icon: 'pen-nib';
  };
  attributes: {
    ctas: Schema.Attribute.Component<'shared.link', true>;
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'shared.section-item', true>;
    kicker: Schema.Attribute.String;
    note: Schema.Attribute.String;
    theme: Schema.Attribute.Enumeration<['light', 'dark', 'muted']> &
      Schema.Attribute.DefaultTo<'light'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksCalloutSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_callout_sections';
  info: {
    description: 'Section for important callouts';
    displayName: 'Callout Section';
    icon: 'bullhorn';
  };
  attributes: {
    ctas: Schema.Attribute.Component<'shared.link', true>;
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'shared.section-item', true>;
    kicker: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    note: Schema.Attribute.String;
    theme: Schema.Attribute.Enumeration<['light', 'dark', 'muted']> &
      Schema.Attribute.DefaultTo<'light'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cta_sections';
  info: {
    description: 'Call to Action section';
    displayName: 'CTA Section';
    icon: 'mouse-pointer';
  };
  attributes: {
    align: Schema.Attribute.Enumeration<['start', 'center', 'end']> &
      Schema.Attribute.DefaultTo<'center'>;
    ctas: Schema.Attribute.Component<'shared.link', true>;
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'shared.section-item', true>;
    kicker: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    note: Schema.Attribute.String;
    theme: Schema.Attribute.Enumeration<['light', 'dark', 'muted']> &
      Schema.Attribute.DefaultTo<'light'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faq_sections';
  info: {
    description: 'Frequently Asked Questions section';
    displayName: 'FAQ Section';
    icon: 'question-circle';
  };
  attributes: {
    ctas: Schema.Attribute.Component<'shared.link', true>;
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'shared.section-item', true>;
    kicker: Schema.Attribute.String;
    note: Schema.Attribute.String;
    theme: Schema.Attribute.Enumeration<['light', 'dark', 'muted']> &
      Schema.Attribute.DefaultTo<'light'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksGridSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_grid_sections';
  info: {
    description: 'Section with a grid of items';
    displayName: 'Grid Section';
    icon: 'grid';
  };
  attributes: {
    columns: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<3>;
    ctas: Schema.Attribute.Component<'shared.link', true>;
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'shared.section-item', true>;
    kicker: Schema.Attribute.String;
    note: Schema.Attribute.String;
    theme: Schema.Attribute.Enumeration<['light', 'dark', 'muted']> &
      Schema.Attribute.DefaultTo<'light'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksLogosSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_logos_sections';
  info: {
    description: 'Section to display client or partner logos';
    displayName: 'Logos Section';
    icon: 'images';
  };
  attributes: {
    ctas: Schema.Attribute.Component<'shared.link', true>;
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'shared.section-item', true>;
    kicker: Schema.Attribute.String;
    note: Schema.Attribute.String;
    theme: Schema.Attribute.Enumeration<['light', 'dark', 'muted']> &
      Schema.Attribute.DefaultTo<'light'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksRichHtmlSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rich_html_sections';
  info: {
    description: 'Section for raw HTML content';
    displayName: 'Rich HTML Section';
    icon: 'code';
  };
  attributes: {
    html: Schema.Attribute.Text;
    source: Schema.Attribute.String;
  };
}

export interface BlocksSplitSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_split_sections';
  info: {
    description: 'Section with split layout (media + content)';
    displayName: 'Split Section';
    icon: 'columns';
  };
  attributes: {
    ctas: Schema.Attribute.Component<'shared.link', true>;
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'shared.section-item', true>;
    kicker: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mediaPosition: Schema.Attribute.Enumeration<
      ['start', 'end', 'center', 'background']
    > &
      Schema.Attribute.DefaultTo<'start'>;
    note: Schema.Attribute.String;
    theme: Schema.Attribute.Enumeration<['light', 'dark', 'muted']> &
      Schema.Attribute.DefaultTo<'light'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksStatsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_stats_sections';
  info: {
    description: 'Section to display statistics';
    displayName: 'Stats Section';
    icon: 'chart-bar';
  };
  attributes: {
    ctas: Schema.Attribute.Component<'shared.link', true>;
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'shared.section-item', true>;
    kicker: Schema.Attribute.String;
    note: Schema.Attribute.String;
    theme: Schema.Attribute.Enumeration<['light', 'dark', 'muted']> &
      Schema.Attribute.DefaultTo<'light'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksTabbedSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_tabbed_sections';
  info: {
    description: 'Section with tabbed content';
    displayName: 'Tabbed Section';
    icon: 'folder';
  };
  attributes: {
    ctas: Schema.Attribute.Component<'shared.link', true>;
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'shared.section-item', true>;
    kicker: Schema.Attribute.String;
    note: Schema.Attribute.String;
    tabOrientation: Schema.Attribute.Enumeration<['horizontal', 'vertical']> &
      Schema.Attribute.DefaultTo<'horizontal'>;
    theme: Schema.Attribute.Enumeration<['light', 'dark', 'muted']> &
      Schema.Attribute.DefaultTo<'light'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksTestimonialsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_testimonials_sections';
  info: {
    description: 'Section for customer testimonials';
    displayName: 'Testimonials Section';
    icon: 'quote-right';
  };
  attributes: {
    ctas: Schema.Attribute.Component<'shared.link', true>;
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'shared.section-item', true>;
    kicker: Schema.Attribute.String;
    note: Schema.Attribute.String;
    theme: Schema.Attribute.Enumeration<['light', 'dark', 'muted']> &
      Schema.Attribute.DefaultTo<'light'>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageHero extends Struct.ComponentSchema {
  collectionName: 'components_homepage_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    byline: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    logos: Schema.Attribute.Component<'homepage.hero-logo', true>;
    primaryCta: Schema.Attribute.Component<'shared.link', false>;
    secondaryCta: Schema.Attribute.Component<'shared.link', false>;
    tertiaryCta: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageHeroLogo extends Struct.ComponentSchema {
  collectionName: 'components_homepage_hero_logos';
  info: {
    displayName: 'Hero Logo';
  };
  attributes: {
    alt: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface HomepageRichSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_rich_sections';
  info: {
    displayName: 'Rich Section';
  };
  attributes: {
    html: Schema.Attribute.RichText & Schema.Attribute.Required;
    source: Schema.Attribute.String;
  };
}

export interface HomepageSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    columns: Schema.Attribute.Integer;
    ctas: Schema.Attribute.Component<'shared.link', true>;
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'homepage.section-item', true>;
    kicker: Schema.Attribute.String;
    media: Schema.Attribute.Component<'shared.media-asset', false>;
    mediaPosition: Schema.Attribute.Enumeration<
      ['start', 'end', 'center', 'background']
    > &
      Schema.Attribute.DefaultTo<'end'>;
    note: Schema.Attribute.String;
    tabOrientation: Schema.Attribute.Enumeration<['horizontal', 'vertical']> &
      Schema.Attribute.DefaultTo<'horizontal'>;
    theme: Schema.Attribute.Enumeration<['light', 'dark', 'muted']> &
      Schema.Attribute.DefaultTo<'light'>;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      [
        'tabbed',
        'grid',
        'split',
        'callout',
        'cta',
        'stats',
        'faq',
        'testimonials',
        'logos',
        'blog',
      ]
    > &
      Schema.Attribute.DefaultTo<'grid'>;
  };
}

export interface HomepageSectionItem extends Struct.ComponentSchema {
  collectionName: 'components_homepage_section_items';
  info: {
    displayName: 'Section Item';
  };
  attributes: {
    badge: Schema.Attribute.String;
    cta: Schema.Attribute.Component<'shared.link', false>;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Component<'shared.media-asset', false>;
    image: Schema.Attribute.Component<'shared.media-asset', false>;
    label: Schema.Attribute.String;
    richContent: Schema.Attribute.RichText;
    slug: Schema.Attribute.String;
    statLabel: Schema.Attribute.String;
    statValue: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageTrustSignal extends Struct.ComponentSchema {
  collectionName: 'components_homepage_trust_signals';
  info: {
    displayName: 'Trust Signal';
  };
  attributes: {
    label: Schema.Attribute.String;
    metric: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationHighlightCard extends Struct.ComponentSchema {
  collectionName: 'components_navigation_highlight_cards';
  info: {
    displayName: 'Highlight Card';
  };
  attributes: {
    ctaLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationLinkWithIcon extends Struct.ComponentSchema {
  collectionName: 'components_navigation_link_with_icons';
  info: {
    displayName: 'Link With Icon';
  };
  attributes: {
    href: Schema.Attribute.String;
    iconUrl: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationMegaCallout extends Struct.ComponentSchema {
  collectionName: 'components_navigation_mega_callouts';
  info: {
    description: 'Prominent action card inside a mega menu';
    displayName: 'Mega Callout';
  };
  attributes: {
    ctaLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    tone: Schema.Attribute.Enumeration<
      ['default', 'primary', 'success', 'warning']
    > &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface NavigationMegaCard extends Struct.ComponentSchema {
  collectionName: 'components_navigation_mega_cards';
  info: {
    displayName: 'Mega Card';
  };
  attributes: {
    bullets: Schema.Attribute.JSON;
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    iconUrl: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationMegaCategory extends Struct.ComponentSchema {
  collectionName: 'components_navigation_mega_categories';
  info: {
    description: 'Category list inside a mega menu column';
    displayName: 'Mega Category';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    layout: Schema.Attribute.Enumeration<['list', 'pill']> &
      Schema.Attribute.DefaultTo<'pill'>;
    links: Schema.Attribute.Component<'shared.link', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationMegaDetail extends Struct.ComponentSchema {
  collectionName: 'components_navigation_mega_details';
  info: {
    displayName: 'Mega Detail';
  };
  attributes: {
    ctaLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationMegaMenu extends Struct.ComponentSchema {
  collectionName: 'components_navigation_mega_menus';
  info: {
    description: 'Mega menu configuration';
    displayName: 'Mega Menu';
  };
  attributes: {
    callouts: Schema.Attribute.Component<'navigation.mega-callout', true>;
    cards: Schema.Attribute.Component<'navigation.mega-card', true>;
    categories: Schema.Attribute.Component<'navigation.mega-category', true>;
    highlights: Schema.Attribute.Component<'navigation.highlight-card', true>;
    seeAll: Schema.Attribute.Component<'shared.link', false>;
    serviceDetails: Schema.Attribute.Component<'navigation.mega-detail', true>;
    serviceList: Schema.Attribute.Component<'navigation.link-with-icon', true>;
    variant: Schema.Attribute.Enumeration<
      [
        'standard',
        'demo',
        'platform',
        'modules',
        'plans',
        'services',
        'resources',
        'company',
      ]
    > &
      Schema.Attribute.DefaultTo<'standard'>;
  };
}

export interface NavigationMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_menu_items';
  info: {
    description: 'Top-level navigation entry';
    displayName: 'Menu Item';
  };
  attributes: {
    href: Schema.Attribute.String;
    kind: Schema.Attribute.Enumeration<['link', 'mega']> &
      Schema.Attribute.DefaultTo<'link'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    mega: Schema.Attribute.Component<'navigation.mega-menu', false>;
    order: Schema.Attribute.Integer;
  };
}

export interface SharedContactBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_blocks';
  info: {
    displayName: 'Contact Block';
  };
  attributes: {
    body: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    links: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_columns';
  info: {
    displayName: 'Footer Column';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedFooterCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_ctas';
  info: {
    displayName: 'Footer CTA';
  };
  attributes: {
    actions: Schema.Attribute.Component<'shared.link', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMediaAsset extends Struct.ComponentSchema {
  collectionName: 'components_shared_media_assets';
  info: {
    description: 'Stores a remote or uploaded media reference';
    displayName: 'Media Asset';
  };
  attributes: {
    alt: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    height: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
    width: Schema.Attribute.Integer;
  };
}

export interface SharedSectionItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_items';
  info: {
    description: 'Generic item for lists, grids, and sections';
    displayName: 'Section Item';
    icon: 'layer-group';
  };
  attributes: {
    badge: Schema.Attribute.String;
    cta: Schema.Attribute.Component<'shared.link', false>;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
    richContent: Schema.Attribute.Blocks;
    slug: Schema.Attribute.String;
    statLabel: Schema.Attribute.String;
    statValue: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'Search Engine Optimization metadata';
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.blog-section': BlocksBlogSection;
      'blocks.callout-section': BlocksCalloutSection;
      'blocks.cta-section': BlocksCtaSection;
      'blocks.faq-section': BlocksFaqSection;
      'blocks.grid-section': BlocksGridSection;
      'blocks.logos-section': BlocksLogosSection;
      'blocks.rich-html-section': BlocksRichHtmlSection;
      'blocks.split-section': BlocksSplitSection;
      'blocks.stats-section': BlocksStatsSection;
      'blocks.tabbed-section': BlocksTabbedSection;
      'blocks.testimonials-section': BlocksTestimonialsSection;
      'homepage.hero': HomepageHero;
      'homepage.hero-logo': HomepageHeroLogo;
      'homepage.rich-section': HomepageRichSection;
      'homepage.section': HomepageSection;
      'homepage.section-item': HomepageSectionItem;
      'homepage.trust-signal': HomepageTrustSignal;
      'navigation.highlight-card': NavigationHighlightCard;
      'navigation.link-with-icon': NavigationLinkWithIcon;
      'navigation.mega-callout': NavigationMegaCallout;
      'navigation.mega-card': NavigationMegaCard;
      'navigation.mega-category': NavigationMegaCategory;
      'navigation.mega-detail': NavigationMegaDetail;
      'navigation.mega-menu': NavigationMegaMenu;
      'navigation.menu-item': NavigationMenuItem;
      'shared.contact-block': SharedContactBlock;
      'shared.footer-column': SharedFooterColumn;
      'shared.footer-cta': SharedFooterCta;
      'shared.link': SharedLink;
      'shared.media-asset': SharedMediaAsset;
      'shared.section-item': SharedSectionItem;
      'shared.seo': SharedSeo;
    }
  }
}
