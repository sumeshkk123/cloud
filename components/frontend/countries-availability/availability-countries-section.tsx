"use client";

import { Section } from "@/components/ui/section";
import { CountriesByContinentAccordion } from "./countries-by-continent-accordion";
import type { AvailabilityListContent } from "@/lib/availability-list-content";

export interface AvailabilityCountriesSectionProps {
  basePath: string;
  content: AvailabilityListContent["countriesSection"];
  continentNames: AvailabilityListContent["continentNames"];
}

export function AvailabilityCountriesSection({
  basePath,
  content,
  continentNames,
}: AvailabilityCountriesSectionProps) {
  return (
    <Section padding="lg" variant="gradient">
      <div className="container">
        <CountriesByContinentAccordion
          basePath={basePath}
          sectionTitle={content.sectionTitle}
          sectionDescription={content.sectionDescription}
          badge={content.badge}
          countriesCountLabel={content.countriesCountLabel}
          continentNames={continentNames}
        />
      </div>
    </Section>
  );
}
