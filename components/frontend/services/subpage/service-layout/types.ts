import type { ComponentType } from "react";

/** Hero metric (label, value, detail). */
export interface ServiceHeroMetric {
  label: string;
  value: string;
  detail: string;
}

export interface ServiceFeatureHero {
  badge: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  metrics?: ServiceHeroMetric[];
}

export interface ServiceFeatureItem {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface ServiceFeatureFaq {
  badge?: string;
  heading: string;
  description?: string;
  items: { question: string; answer: string }[];
}

export interface ServiceFeatureCta {
  heading: string;
  description: string;
  buttonText: string;
  secondaryCta?: string;
  trustIndicators?: [string, string, string];
}

export interface ServiceIntro {
  badge: string;
  heading: string;
  paragraphs: string[];
  partnerCard: {
    badge: string;
    heading: string;
    /** Optional subtitle below heading (e.g. longer explanation in smaller text). */
    subheading?: string;
    points: string[];
  };
}

export interface ServiceImportanceSection {
  badge?: string;
  heading: string;
  subheading?: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt?: string;
  /** Optional right-column cards (icon, title, description) – e.g. "Field adoption built-in", "Global-ready infrastructure". */
  cards?: ServiceFeatureItem[];
}

export interface ServiceBenefitsSection {
  badge?: string;
  heading: string;
  description?: string;
  items: { title: string; description: string }[];
}

export interface ServiceWhyChooseSection {
  imageSrc?: string;
  imageAlt?: string;
  badge: string;
  heading: string;
  description?: string;
  headingHighlight?: string;
  items: { number: string; title: string; description: string }[];
}

/** Optional section: badge, heading, description, and a list of bullet/check items (e.g. "Why Cloud MLM" or "With WordPress we can"). */
export interface ServiceExtraListSection {
  badge?: string;
  heading: string;
  description?: string;
  items: string[];
}

export interface ServiceFeatureContent {
  hero: ServiceFeatureHero;
  intro?: ServiceIntro;
  features: ServiceFeatureItem[];
  importanceSection?: ServiceImportanceSection;
  benefitsSection?: ServiceBenefitsSection;
  whyChooseSection?: ServiceWhyChooseSection;
  /** Optional list sections (e.g. expertise bullets, competencies). Rendered after whyChoose, before FAQ. */
  extraListSections?: ServiceExtraListSection[];
  faq: ServiceFeatureFaq;
  cta: ServiceFeatureCta;
}
