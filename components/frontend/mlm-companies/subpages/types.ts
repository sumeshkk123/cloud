/**
 * Content shape for MLM company subpages (e.g. /mlm-companies/amway).
 * Use icon keys so content can be passed from Server to Client Components.
 */

export interface MlmCompanyHeroMetric {
  label: string;
  value: string;
  description: string;
  /** Icon key resolved in client (e.g. Building2, Users, TrendingUp, Globe, Award, Target). */
  icon: string;
}

export interface MlmCompanyFeature {
  title: string;
  description: string;
  icon: string;
}

export interface MlmCompanyAchievement {
  title: string;
  description: string;
  year?: string;
  icon: string;
}

export interface MlmCompanyProduct {
  category: string;
  name: string;
  description: string;
}

export interface MlmCompanyFaqItem {
  question: string;
  answer: string;
}

export interface MlmCompanyContent {
  hero: {
    badge: string;
    title: string;
    description: string;
    /** First button (e.g. "Contact Us"). */
    primaryCtaLabel: string;
    /** Second button (e.g. "Request Demo"). */
    secondaryCtaLabel: string;
    /** Third button (e.g. "Get Started") — opens popup when onPrimaryCtaClick set. */
    reserveDemoCtaLabel: string;
    foundedYear: string;
    headquarters: string;
    industry: string;
    website: string;
    metrics: MlmCompanyHeroMetric[];
  };
  features: {
    heading: string;
    description: string;
    items: MlmCompanyFeature[];
  };
  achievements: {
    heading: string;
    description: string;
    items: MlmCompanyAchievement[];
  };
  products: {
    heading: string;
    description: string;
    items: MlmCompanyProduct[];
  };
  faq: {
    heading: string;
    description: string;
    items: MlmCompanyFaqItem[];
  };
  cta: {
    title: string;
    description: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    /** Modal subheading when primary CTA opens Request Demo popup. Optional. */
    subheading?: string;
    /** Exactly 3 strings for trust indicators (Zap, Clock, CheckCircle2). Optional; default used if omitted. */
    trustIndicators?: [string, string, string];
  };
}
