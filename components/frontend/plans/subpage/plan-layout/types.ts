import type { ComponentType } from "react";

/** Hero metric (label, value, detail). */
export interface PlanHeroMetric {
  label: string;
  value: string;
  detail: string;
}

export interface PlanFeatureHero {
  badge: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  metrics?: PlanHeroMetric[];
}

export interface PlanFeatureItem {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface PlanFeatureFaq {
  badge?: string;
  heading: string;
  description?: string;
  items: { question: string; answer: string }[];
}

export interface PlanFeatureCta {
  heading: string;
  description: string;
  buttonText: string;
  secondaryCta?: string;
  trustIndicators?: [string, string, string];
}

export interface PlanIntro {
  badge: string;
  heading: string;
  paragraphs: string[];
  partnerCard: {
    badge: string;
    heading: string;
    subheading?: string;
    points: string[];
  };
}

export interface PlanImportanceSection {
  badge?: string;
  heading: string;
  subheading?: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt?: string;
  cards?: PlanFeatureItem[];
}

export interface PlanBenefitsSection {
  badge?: string;
  heading: string;
  description?: string;
  items: { title: string; description: string }[];
}

export interface PlanWhyChooseSection {
  imageSrc?: string;
  imageAlt?: string;
  badge: string;
  heading: string;
  description?: string;
  headingHighlight?: string;
  items: { number: string; title: string; description: string }[];
}

export interface PlanFeatureContent {
  hero: PlanFeatureHero;
  intro?: PlanIntro;
  features: PlanFeatureItem[];
  importanceSection?: PlanImportanceSection;
  benefitsSection?: PlanBenefitsSection;
  whyChooseSection?: PlanWhyChooseSection;
  faq: PlanFeatureFaq;
  cta: PlanFeatureCta;
}
