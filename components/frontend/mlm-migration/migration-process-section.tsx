"use client";

import Image from "next/image";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import type { MigrationStep } from "./types";

interface MigrationProcessSectionProps {
  badge?: string;
  heading: string;
  description?: string;
  steps: MigrationStep[];
}

export function MigrationProcessSection({ badge, heading, description, steps }: MigrationProcessSectionProps) {
  if (!steps?.length) return null;

  return (
    <Section padding="lg" variant="gradient">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          {/* Left: title + description + image */}
          <div className="space-y-6">
            <div className="space-y-4">
              <SectionTitle

                heading={heading}
                description={description}
                centered={false}
                maxWidth="full"
                headingClassName="normal-case"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
              <Image
                src="/images/dashboard-deign-dark.webp"
                alt="Dashboard design"
                width={1200}
                height={675}
                className="h-auto w-full object-cover"
                priority={false}
              />
            </div>
          </div>
          {/* Right: 2 cards per row */}
          <div className="grid gap-6 sm:grid-cols-2">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.number} className="flex h-full flex-col">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CardIcon icon={Icon} aria-hidden />
                      <Typography as="span" variant="small" className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">
                        {step.number}
                      </Typography>
                    </div>
                    <CardTitle className="text-lg font-semibold">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Typography variant="small" className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
