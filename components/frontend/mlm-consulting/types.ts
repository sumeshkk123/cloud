import type { ComponentType } from "react";

export interface ConsultingHighlight {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}

export interface ConsultingHero {
  badge: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  highlights: ConsultingHighlight[];
}

export interface ConsultingReason {
  title: string;
  detail: string;
  icon: ComponentType<{ className?: string }>;
}

export interface ConsultingStep {
  number: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}

export interface ConsultingCta {
  heading: string;
  description: string;
  buttonText: string;
  secondaryButtonText?: string;
  secondaryHref?: string;
  trustIndicators?: [string, string, string];
}

export interface ConsultingIntro {
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

export interface ConsultingIntroFeature {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface ConsultingPageContent {
  hero: ConsultingHero;
  intro?: ConsultingIntro;
  introFeatures?: ConsultingIntroFeature[];
  whySection: {
    heading: string;
    description?: string;
    reasons: ConsultingReason[];
  };
  processSection: {
    heading: string;
    description?: string;
    steps: ConsultingStep[];
  };
  checklistSection?: {
    badge?: string;
    heading: string;
    description?: string;
    items: string[];
  };
  offerSection?: {
    badge?: string;
    heading: string;
    description?: string;
    items: { icon: ComponentType<{ className?: string }>; title: string; description: string }[];
  };
  trustSection?: {
    heading: string;
    paragraphs: string[];
    pointsTitle?: string;
    points?: string[];
  };
  cta: ConsultingCta;
}
