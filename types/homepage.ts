export type HomepageLink = {
  label: string;
  href: string;
};

export type HomepageAnnouncement = {
  title: string;
  href: string;
  accentClass?: string;
};

export type HomepageHeroStat = {
  label: string;
  value: string;
  iconName?: string;
  firstLine?: string;
  secondLine?: string;
};

export type HomepageHeroLogo = {
  name: string;
  logo: string;
  position: Record<string, string>;
  sizeClass: string;
};

export type HomepageMomentumStat = {
  label: string;
  value: string;
  description: string;
  highlight?: string | null;
  icon: string;
};

export type HomepageTrustBadge = {
  name: string;
  logo: string;
  rating: number;
  quote: string;
  href: string;
};

export type HomepageFeatureCard = {
  title: string;
  description: string;
  icon: string;
  accent: string;
  points?: string[];
};

export type HomepageReason = {
  title: string;
  description: string;
  icon: string;
};

export type HomepageIntegration = string;

export type HomepageAiHighlight = string;

export type HomepageIndustrySolution = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export type HomepagePlanCard = {
  title: string;
  intro: string;
  description: string;
  bullets: string[];
};

export type HomepageDemoCallout = {
  badge: string;
  title: string;
  description: string;
};

export type HomepageTestimonial = {
  quote: string;
  author: string;
  role: string;
  avatar: string | null;
  company?: string;
  platform?: string;
  rating?: number;
  href?: string;
};

export type HomepageBlogPost = {
  title: string;
  date: string;
  href: string;
  image: string;
  excerpt?: string;
};

export type HomepageFaq = {
  question: string;
  answer: string;
};

export type HomepageFaqCategory = {
  title: string;
  description: string;
  icon: string;
  faqs: HomepageFaq[];
};

export type HomepageContactRegion = {
  region: string;
  subheading: string;
  coverage: string;
  address: string[];
  phones: string[];
  email: string;
  flag: string;
  specialties: string[];
  accent: string;
};

export type HomepageContent = {
  metadata: {
    title: string;
    description: string;
  };
  announcements: HomepageAnnouncement[];
  hero: {
    badgeLabel: string;
    title: string;
    description: string;
    primaryCta: HomepageLink;
    secondaryCta: HomepageLink;
    phoneCta: {
      label: string;
      phoneDisplay: string;
      href: string;
    };
    outcomesLabel: string;
    stats: HomepageHeroStat[];
    logos: HomepageHeroLogo[];
    features?: string[];
  };
  momentumStats: {
    badgeLabel?: string;
    heading: string;
    description: string;
    stats: HomepageMomentumStat[];
  };
  trustBadges: {
    badgeLabel?: string;
    heading: string;
    description: string;
    items: HomepageTrustBadge[];
  };
  featureSection: {
    badge: string;
    heading: string;
    description: string;
    cards: HomepageFeatureCard[];
  };
  whyChoose: {
    badge: string;
    heading: string;
    description: string;
    reasons: HomepageReason[];
  };
  integrations: {
    badgeLabel?: string;
    heading: string;
    description: string;
    partners: HomepageIntegration[];
    ecommerceHeading?: string;
    ecommerceDescription?: string;
    noIntegrationsText?: string;
    customIntegrationsText?: string;
    exploreButtonText?: string;
  };
  aiHighlights: {
    heading: string;
    description: string;
    highlights: HomepageAiHighlight[];
  };
  industrySection: {
    badge: string;
    heading: string;
    description: string;
    solutions: HomepageIndustrySolution[];
    focusTags: string[];
    metrics: Array<{
      value: string;
      label: string;
      description: string;
    }>;
    ctaText?: string;
    ctaButtonText?: string;
  };
  clients: {
    badgeLabel?: string;
    heading: string;
    description: string;
    metrics: Array<{
      value: string;
      label: string;
      description: string;
    }>;
    focusTags: string[];
    footnote?: string;
    primaryCta?: HomepageLink;
    secondaryCta?: HomepageLink;
  };
  planShowcase: {
    badgeLabel?: string;
    heading: string;
    description: string;
    cards: HomepagePlanCard[];
  };
  demoSection: {
    badgeLabel?: string;
    heading: string;
    description: string;
    primaryCta: HomepageLink;
    secondaryCtas: HomepageLink[];
    touchpoints: Array<{ label: string; description: string }>;
    callouts: HomepageDemoCallout[];
  };
  testimonials: {
    badgeLabel?: string;
    heading: string;
    description: string;
    items: HomepageTestimonial[];
    tags?: string[];
  };
  blogPosts: {
    badgeLabel?: string;
    heading: string;
    description: string;
    posts: HomepageBlogPost[];
    tags?: string[];
  };
  faq: {
    badgeLabel?: string;
    heading: string;
    description: string;
    categories: HomepageFaqCategory[];
    cta?: HomepageLink;
    noFaqsMessage?: string;
    infoBoxText?: string;
    infoBoxButtonText?: string;
    uncategorizedCategoryName?: string;
  };
  servicesSection: {
    badge: string;
    heading: string;
    description: string;
  };
  contact: {
    badgeLabel?: string;
    heading: string;
    description: string;
    regions: HomepageContactRegion[];
    primaryCta?: HomepageLink;
    secondaryCta?: HomepageLink;
  };
};
