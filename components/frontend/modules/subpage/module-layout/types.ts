import type { ComponentType } from "react";

/** Hero metric shown in the right column (label, value, detail). */
export interface ModuleHeroMetric {
  label: string;
  value: string;
  detail: string;
}

export interface ModuleFeatureHero {
  badge: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  /** Optional per-module metrics; when set, overrides any default. */
  metrics?: ModuleHeroMetric[];
}

export interface ModuleFeatureItem {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface ModuleFeatureFaq {
  /** Optional badge above heading (e.g. "FAQ"). */
  badge?: string;
  heading: string;
  description?: string;
  items: { question: string; answer: string }[];
}

export interface ModuleFeatureCta {
  heading: string;
  description: string;
  /** Primary CTA button label (e.g. "Contact us"). */
  buttonText: string;
  /** Optional secondary CTA label (e.g. "View demo"); when set, layout passes demoHref. */
  secondaryCta?: string;
  /** Optional trust line: [Zap, Clock, CheckCircle2] copy. */
  trustIndicators?: [string, string, string];
}

/** Mission-style intro: badge, heading, paragraphs, and a partner card (same layout as about-company mission). */
export interface ModuleIntro {
  badge: string;
  heading: string;
  paragraphs: string[];
  partnerCard: {
    badge: string;
    heading: string;
    points: string[];
  };
}

/** Optional section with heading, body paragraphs, and an image (e.g. importance / why section). */
export interface ModuleImportanceSection {
  badge?: string;
  heading: string;
  subheading?: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt?: string;
}

/** Optional benefits / key points section (heading + list of title/description items). */
export interface ModuleBenefitsSection {
  badge?: string;
  heading: string;
  description?: string;
  items: { title: string; description: string }[];
}

/** "Why choose us" style section: image or placeholder left, badge + heading (with optional highlight) + numbered list right. */
export interface ModuleWhyChooseSection {
  /** When omitted, a gradient + icon placeholder is shown instead. */
  imageSrc?: string;
  imageAlt?: string;
  badge: string;
  /** Full heading; use headingHighlight to underline a part of it. */
  heading: string;
  /** Optional description below the heading. */
  description?: string;
  /** Substring of heading to underline (e.g. "Courses" in "Why Choose My Courses"). */
  headingHighlight?: string;
  items: { number: string; title: string; description: string }[];
}

/** "KYC Completion" screenshot style: centered two-line title + three overlapping cards (PDF, verified profile, invoice). */
export interface ModuleKycCompletionSection {
  titleLine1: string;
  titleLine2: string;
  /** Image for the middle (verified profile) card. */
  profileImageSrc: string;
}

export interface ModuleFeatureContent {
  hero: ModuleFeatureHero;
  /** Optional mission-style intro (two-column + value cards). When omitted, default copy is used. */
  intro?: ModuleIntro;
  features: ModuleFeatureItem[];
  /** Optional importance/why section with copy and image. Rendered between intro and FAQ when set. */
  importanceSection?: ModuleImportanceSection;
  /** Optional benefits section. Rendered after importance (or after intro if no importance) and before FAQ. */
  benefitsSection?: ModuleBenefitsSection;
  /** Optional "why choose us" section (image left, numbered list right). */
  whyChooseSection?: ModuleWhyChooseSection;
  /** Optional "KYC Completion" style section: centered title + three overlapping cards. */
  kycCompletionSection?: ModuleKycCompletionSection;
  faq: ModuleFeatureFaq;
  cta: ModuleFeatureCta;
}
