"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { CountryFlag } from "./country-flag";

export interface CountryIntroProps {
  countrySlug: string;
  countryName: string;
  /** Optional pill/badge above the heading (e.g. "Why choose us"). */
  badge?: string | null;
  heading: string;
  paragraphs: string[];
}

export function CountryIntro({
  countrySlug,
  countryName,
  badge,
  heading,
  paragraphs,
}: CountryIntroProps) {
  return (
    <Section variant="default" padding="lg" className="bg-muted/30 dark:bg-muted/10">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[auto_1.2fr] lg:items-start">
          <div className="flex justify-center lg:justify-start mt-10">
            <CountryFlag
              countrySlug={countrySlug}
              countryName={countryName}
              size="lg"
              className="shrink-0"
            />
          </div>
          <div className="space-y-4 min-w-0">
            <SectionTitle
              badge={badge ?? undefined}
              heading={heading}
              centered={false}
              maxWidth="full"
              headingAs="h2"
            />
            {paragraphs.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
