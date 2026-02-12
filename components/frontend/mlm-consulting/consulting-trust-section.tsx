"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";

interface ConsultingTrustSectionProps {
  heading: string;
  paragraphs: string[];
  pointsTitle?: string;
  points?: string[];
}

export function ConsultingTrustSection({ heading, paragraphs, pointsTitle, points }: ConsultingTrustSectionProps) {
  return (
    <Section padding="lg" variant="gradient">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="space-y-6">
            <SectionTitle
              heading={heading}
              centered={false}
              maxWidth="full"
              headingClassName="text-2xl font-semibold tracking-tight sm:text-3xl normal-case"
            />
            {paragraphs.map((p, i) => (
              <Typography key={i} variant="p" className="text-muted-foreground leading-relaxed">
                {p}
              </Typography>
            ))}
          </div>
          {points && points.length > 0 && (
            <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
              {pointsTitle && (
                <Typography as="h3" variant="h5" className="mb-4 font-semibold text-foreground">
                  {pointsTitle}
                </Typography>
              )}
              <BulletList
                items={points}
                variant="compact"
                className="space-y-3 text-sm text-muted-foreground leading-relaxed"
              />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
