"use client";

import type { ReactNode } from "react";
import type { PricingSubPageContent, PricingSubSection } from "./types";
import { PricingSubPageHero } from "./hero";
import { PricingSubPageCapabilities } from "./capabilities";
import { PricingSubPageRoadmap } from "./roadmap";
import { PricingSubPagePackages } from "./packages";
import { PricingSubPageEnhancements } from "./enhancements";
import { PricingSubPageFaq } from "./faq";
import { PricingSubPageCta } from "./cta";

const SECTION_ORDER: PricingSubSection["type"][] = [
  "capabilities",
  "roadmap",
  "packages",
  "enhancements",
];

function renderSection(
  section: PricingSubSection,
  contactHref: string
): ReactNode {
  switch (section.type) {
    case "capabilities":
      return <PricingSubPageCapabilities key={section.heading} section={section} />;
    case "roadmap":
      return <PricingSubPageRoadmap key={section.heading} section={section} />;
    case "packages":
      return (
        <PricingSubPagePackages
          key={section.heading}
          section={section}
          contactHref={contactHref}
        />
      );
    case "enhancements":
      return <PricingSubPageEnhancements key={section.heading} section={section} />;
    default:
      return null;
  }
}

function sortSections(sections: PricingSubSection[]): PricingSubSection[] {
  return [...sections].sort(
    (a, b) => SECTION_ORDER.indexOf(a.type) - SECTION_ORDER.indexOf(b.type)
  );
}

export interface PricingSubPageLayoutProps {
  content: PricingSubPageContent;
  contactHref: string;
  secondaryHref: string;
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
  heroVariant?: "default" | "dark";
}

export function PricingSubPageLayout({
  content,
  contactHref,
  secondaryHref,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
  heroVariant = "default",
}: PricingSubPageLayoutProps) {
  return (
    <div>
      <PricingSubPageHero
        content={content.hero}
        contactHref={contactHref}
        secondaryHref={secondaryHref}
        onPrimaryCtaClick={onPrimaryCtaClick}
        onSecondaryCtaClick={onSecondaryCtaClick}
        variant={heroVariant}
      />
      {sortSections(content.sections).map((section) =>
        renderSection(section, contactHref)
      )}
      <PricingSubPageFaq section={content.faq} />
      <PricingSubPageCta
        content={content.cta}
        contactHref={contactHref}
        secondaryHref={secondaryHref}
        onPrimaryCtaClick={onPrimaryCtaClick}
      />
    </div>
  );
}
