/**
 * Content shape for country availability subpages (e.g. /mlm-software-availability-across-countries/algeria).
 */

export interface CountryHeroMetric {
  label: string;
  value: string;
  detail: string;
}

export interface CountrySubpageContent {
  hero: {
    badge?: string;
    title: string;
    description: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    /** Third CTA: scroll to contact form (e.g. "Reserve your demo"). */
    reserveDemoCtaLabel?: string;
    trustPills: [string, string, string];
    metrics: CountryHeroMetric[];
  };
  intro: {
    badge?: string;
    heading: string;
    paragraphs: string[];
  };
  cta: {
    title: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    subheading: string;
    trustIndicators: [string, string, string];
  };
  applyPlan: {
    badge: string;
    heading: string;
    description: string;
    imageAlt: string;
    linkText?: string;
  };
}

