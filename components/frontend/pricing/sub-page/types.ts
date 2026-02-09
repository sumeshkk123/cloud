import type { ComponentType } from "react";

export type IconComponent = ComponentType<{ className?: string }>;

export interface PricingSubHeroMetric {
  label: string;
  value: string;
  description: string;
  icon: IconComponent;
}

export interface PricingSubHero {
  badge: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  metrics: PricingSubHeroMetric[];
}

export interface PricingSubCapability {
  title: string;
  description: string;
  bullets: string[];
  icon: IconComponent;
}

export interface PricingSubCapabilitiesSection {
  type: "capabilities";
  heading: string;
  description?: string;
  callout?: { title: string; body: string; icon: IconComponent };
  items: PricingSubCapability[];
}

export interface PricingSubPackage {
  title: string;
  price: string;
  description: string;
  outcomes: string[];
  icon: IconComponent;
}

export interface PricingSubPackagesSection {
  type: "packages";
  sectionTitle?: string;
  heading: string;
  description?: string;
  items: PricingSubPackage[];
  ctaLabel?: string;
}

export interface PricingSubRoadmapStage {
  title: string;
  description: string;
  duration: string;
  icon: IconComponent;
}

export interface PricingSubRoadmapSection {
  type: "roadmap";
  sectionTitle?: string;
  heading: string;
  description?: string;
  outcomes?: { title: string; points: string[] };
  stages: PricingSubRoadmapStage[];
}

export interface PricingSubEnhancement {
  title: string;
  description: string;
  icon: IconComponent;
}

export interface PricingSubEnhancementsSection {
  type: "enhancements";
  heading: string;
  description?: string;
  callout?: string;
  items: PricingSubEnhancement[];
}

export interface PricingSubFaqItem {
  question: string;
  answer: string;
}

export interface PricingSubFaqSection {
  heading: string;
  description?: string;
  items: PricingSubFaqItem[];
}

export interface PricingSubCta {
  heading: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  cardTitle?: string;
  cardBody?: string;
}

export type PricingSubSection =
  | PricingSubCapabilitiesSection
  | PricingSubPackagesSection
  | PricingSubRoadmapSection
  | PricingSubEnhancementsSection;

export interface PricingSubPageContent {
  hero: PricingSubHero;
  sections: PricingSubSection[];
  faq: PricingSubFaqSection;
  cta: PricingSubCta;
}

export interface PricingSubPageMeta {
  title: string;
  description: string;
  canonicalPath: string;
}
