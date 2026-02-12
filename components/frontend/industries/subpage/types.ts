import type { ComponentType } from "react";

/** Hero metric (label, value, detail, icon). */
export interface IndustryHeroMetric {
  label: string;
  value: string;
  detail: string;
  icon: ComponentType<{ className?: string }>;
}

/** Hero challenge item for sidebar. */
export interface IndustryChallenge {
  title: string;
  description: string;
}

export interface IndustryHero {
  badge: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  /** Optional metrics; when set, shown in hero. */
  metrics?: IndustryHeroMetric[];
  /** @deprecated Use introSection.challenges instead. Kept for backward compatibility. */
  challenges?: IndustryChallenge[];
  /** @deprecated Use introSection.sidebarCtaLabel instead. */
  sidebarCtaLabel?: string;
  /** @deprecated Use introSection.sidebarCtaHref instead. */
  sidebarCtaHref?: string;
}

/** Numbered benefit item for intro "why" block (e.g. 01, 02, 03, 04). */
export interface IndustryIntroNumberedItem {
  title: string;
  description: string;
}

/** Optional "why" block: heading, paragraph, numbered list, and optional two images with overlay. */
export interface IndustryIntroWhyBlock {
  heading: string;
  paragraph: string;
  numberedItems: IndustryIntroNumberedItem[];
  /** Top image path (e.g. professionals). */
  topImage?: string;
  /** Bottom image path (e.g. dashboard); overlay can be shown on this. */
  bottomImage?: string;
  /** Alt text for bottom image (e.g. "MLM software for affiliate marketing industry"). */
  bottomImageAlt?: string;
  /** Overlay text on bottom image (e.g. "We have created more than 74 insurance mlm software !!"). */
  bottomImageOverlayText?: string;
}

/** Intro section: either "Pressing realities" challenges or a "why" two-column block with images. */
export interface IndustryIntroSection {
  /** Optional heading above the challenges (e.g. "Pressing realities"). Used when whyBlock is not set. */
  heading?: string;
  /** Challenge list (legacy layout). Omit or empty when using whyBlock. */
  challenges?: IndustryChallenge[];
  sidebarCtaLabel?: string;
  sidebarCtaHref?: string;
  /** When set, render two-column "why" layout: left = heading, paragraph, numbered list; right = two images + overlay. */
  whyBlock?: IndustryIntroWhyBlock;
}

/** Play item (icon + title + description). */
export interface IndustryPlay {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}

export interface IndustryPlaysSection {
  heading: string;
  description?: string;
  plays: IndustryPlay[];
}

/** Programme (name + outcomes list or single description for feature cards). */
export interface IndustryProgramme {
  name: string;
  outcomes: string[];
  /** When set, shown as card description instead of outcomes list (e.g. for "combination" layout). */
  description?: string;
}

/** Overlay pill on the programmes section image (e.g. "300+ Satisfied Clients"). */
export interface IndustryProgrammesImageOverlay {
  value: string;
  line2: string;
  line3: string;
}

export interface IndustryProgrammesSection {
  heading: string;
  description?: string;
  /** Optional phrase to highlight in the intro paragraph (e.g. "The insurance companies"). */
  highlightPhrase?: string;
  /** Bullet list of implementation artefacts. Shown when no imageUrl. */
  implementationArtefacts?: string[];
  programmes: IndustryProgramme[];
  /** Optional left-side image (screenshot layout: image left, content right). */
  imageUrl?: string;
  /** Overlay pill on the image (e.g. 300+ Satisfied Clients). */
  imageOverlay?: IndustryProgrammesImageOverlay;
  /** Pill/badge text above the heading (e.g. "Combination"). */
  badge?: string;
}

export interface IndustryProofPoint {
  title: string;
  description: string;
}

export interface IndustryProofPointsSection {
  heading: string;
  description?: string;
  proofPoints: IndustryProofPoint[];
}

export interface IndustryCtaSection {
  heading: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  /** Optional "Bring to the workshop" box. */
  bringToWorkshop?: {
    label: string;
    items: string[];
    footnote?: string;
  };
}

/**
 * Content for an industry inner page. Common structure with optional sections.
 * Omit a section to hide it; provide content to show it. Pages can override any section.
 */
export interface IndustryPageContent {
  hero: IndustryHero;
  /** Optional intro section (e.g. "Pressing realities" challenges). Rendered after hero. */
  introSection?: IndustryIntroSection;
  /** Optional "Plays" section (e.g. plays that connect advisors, operations). */
  playsSection?: IndustryPlaysSection;
  /** Optional "Programmes" section (e.g. programmes that de-risk transformation). */
  programmesSection?: IndustryProgrammesSection;
  /** Optional "Proof points" section. */
  proofPointsSection?: IndustryProofPointsSection;
  cta: IndustryCtaSection;
  /** Optional custom sections (unique to this industry page), rendered after proof points and before CTA. */
  customSections?: React.ReactNode;
}
