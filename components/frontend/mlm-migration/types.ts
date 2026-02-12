import type { ComponentType } from "react";

export interface MigrationHighlight {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}

export interface MigrationHero {
  badge: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  highlights: MigrationHighlight[];
}

export interface MigrationReason {
  title: string;
  detail: string;
  icon: ComponentType<{ className?: string }>;
}

export interface MigrationStep {
  number: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}

export interface MigrationCta {
  heading: string;
  description: string;
  buttonText: string;
  secondaryButtonText?: string;
  secondaryHref?: string;
  trustIndicators?: [string, string, string];
}

/** Intro section (same layout as services intro): badge, heading, paragraphs, partner card, and feature cards. */
export interface MigrationIntro {
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

/** Feature item for intro section cards (icon + title + description). */
export interface MigrationIntroFeature {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface MigrationPageContent {
  hero: MigrationHero;
  /** Optional intro section (what is migration, why migrate, what we offer) – rendered after hero, like services intro. */
  intro?: MigrationIntro;
  /** Feature cards shown in intro section (e.g. why migrate / what to look into). When intro is set, length 3 recommended. */
  introFeatures?: MigrationIntroFeature[];
  whySection: {
    heading: string;
    description?: string;
    reasons: MigrationReason[];
  };
  processSection: {
    heading: string;
    description?: string;
    steps: MigrationStep[];
  };
  /** Optional "What to look into before migration?" checklist section. */
  checklistSection?: {
    badge?: string;
    heading: string;
    description?: string;
    items: string[];
  };
  /** Optional "What we offer in our MLM Migration" – grid of benefit cards. */
  offerSection?: {
    badge?: string;
    heading: string;
    description?: string;
    items: { icon: ComponentType<{ className?: string }>; title: string; description: string }[];
  };
  /** Optional trust/reassurance section before CTA (e.g. "Why choose Cloud MLM Software for migration?"). */
  trustSection?: {
    heading: string;
    paragraphs: string[];
    /** Optional title for the points/sidebar card. */
    pointsTitle?: string;
    points?: string[];
  };
  cta: MigrationCta;
}
