"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { AvailabilityListContent } from "@/lib/availability-list-content";

export interface AvailabilityStepsSectionProps {
  content: AvailabilityListContent["steps"];
}

export function AvailabilityStepsSection({ content }: AvailabilityStepsSectionProps) {
  return (
    <Section variant="primary" padding="lg">
      <div className="container space-y-12">
        <div className="max-w-3xl">
          <SectionTitle
            badge={content.badge}
            heading={content.heading}
            description={content.description}
            centered={false}
          />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {content.steps.map((step) => (
            <Card key={step.title} className="flex h-full flex-col">
              <CardHeader className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">
                  {step.title}
                </p>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground">{step.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
