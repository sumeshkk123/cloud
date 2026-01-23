import type { Locale } from "@/i18n-config";
import type { ProductSlug } from "@/config/site";

export type MainNavItem = {
  title: string;
  href: string;
};

export type FooterLinkGroup = {
  title: string;
  links: MainNavItem[];
};

export type TrustSignal = {
  metric: string;
  label: string;
};

export type DifferentiatorIcon = "shield" | "chart" | "workflow";

export type ProductHighlight = {
  title: string;
  description: string;
};

export type ProductContent = {
  slug: ProductSlug;
  name: string;
  tagline: string;
  description: string;
  keywords: string[];
  painPoints: string[];
  highlights: ProductHighlight[];
  features: string[];
  analytics: string[];
  automation: string[];
  support: string[];
  testimonial: {
    quote: string;
    attribution: string;
  };
  metadata: {
    title: string;
    description: string;
  };
};

export type ProductCardSummary = {
  slug: ProductSlug;
  name: string;
  tagline: string;
  description: string;
  highlights: ProductHighlight[];
};

export type SupportResource = {
  title: string;
  description: string;
  href?: string;
};

export type SiteDictionary = {
  locale: Locale;
  site: {
    name: string;
    description: string;
    nav: MainNavItem[];
    footer: {
      groups: FooterLinkGroup[];
      privacyLabel: string;
      termsLabel: string;
    };
    language: {
      label: string;
      ariaLabel: string;
    };
  };
  metadata: {
    defaultTitle: string;
    titleTemplate: string;
    description: string;
    keywords: string[];
    alternateLocales: Locale[];
  };
  home: {
    hero: {
      eyebrow: string;
      title: string;
      byline: string;
      primaryCta: string;
      secondaryCta: string;
    };
    trustSignals: TrustSignal[];
    differentiatorsTitle: string;
    differentiators: {
      title: string;
      description: string;
      icon: DifferentiatorIcon;
    }[];
    testimonial: string;
    productSection: {
      eyebrow: string;
      title: string;
      description: string;
      exploreCta: string;
      badge: string;
    };
    partnership: {
      title: string;
      description: string;
      commitments: ProductHighlight[];
      commitmentsDescription: string;
      commitmentsTitle: string;
      milestonesTitle: string;
      milestones: string[];
      strategistCta: string;
    };
    comparison: {
      title: string;
      description: string;
      cta: string;
      narrative: string[];
    };
  };
  productsPage: {
    eyebrow: string;
    title: string;
    description: string;
    supporting: ProductHighlight[];
  };
  productCards: ProductCardSummary[];
  products: Record<ProductSlug, ProductContent>;
  comparePage: {
    eyebrow: string;
    title: string;
    description: string;
    tableHeading: string;
    sessionHeading: string;
    sessionDescription: string;
    sessionAgendaHeading: string;
    sessionAgenda: string[];
    sessionOutro: string;
    continueHeading: string;
  };
  comparisonTable: {
    feature: string;
    values: Record<ProductSlug, string>;
  }[];
  compareContinueLinks: MainNavItem[];
  productDetail: {
    painPointsTitle: string;
    highlightsTitle: string;
    sections: {
      features: string;
      analytics: string;
      automation: string;
      supportTitle: string;
      testimonialIntro: string;
    };
  };
  aboutPage: {
    eyebrow: string;
    title: string;
    description: string;
    values: ProductHighlight[];
    leadershipTitle: string;
    milestonesTitle: string;
    milestones: {
      year: string;
      title: string;
      description: string;
    }[];
    calloutTitle: string;
    calloutBody: string;
    calloutCtas: {
      primary: string;
      secondary: string;
    };
  };
  leadershipTeam: {
    name: string;
    title: string;
    bio: string;
    linkedin: string;
  }[];
  supportPage: {
    eyebrow: string;
    title: string;
    description: string;
    metrics: TrustSignal[];
    docsTitle: string;
    docsDescription: string;
    onboardingTitle: string;
    onboardingDescription: string;
    updatesTitle: string;
    updatesDescription: string;
    contactTitle: string;
    contactDescription: string;
    contactQuote: string;
    privacyTitle: string;
    privacyBody: string;
    termsTitle: string;
    termsBody: string;
    viewGuideLabel: string;
    comingSoonLabel: string;
    emailLabel: string;
    phoneLabel: string;
    addressLabel: string;
    slaLabel: string;
  };
  supportResources: {
    docs: SupportResource[];
    onboarding: SupportResource[];
    updates: SupportResource[];
  };
  supportContact: {
    email: string;
    phone: string;
    address: string;
    responseTime: string;
  };
};
