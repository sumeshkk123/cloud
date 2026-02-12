"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import type { ComponentType } from "react";

interface OfferItem {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface MigrationOfferSectionProps {
  badge?: string;
  heading: string;
  description?: string;
  items: OfferItem[];
}

export function MigrationOfferSection({
  badge,
  heading,
  description,
  items,
}: MigrationOfferSectionProps) {
  if (!items?.length) return null;

  return (
    <Section padding="lg" variant="gradient">
      <div className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <SectionTitle
            badge={badge ?? "What we offer"}
            heading={heading}
            description={description}
            centered={false}
            maxWidth="full"
            headingClassName="normal-case"
          />
        </div>
        {/* 3-column grid: 8 cards = 3 + 3 + 2 (bottom right cell empty, like screenshot) */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                className="flex h-full flex-col rounded-xl border border-border/60 bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <CardHeader className="space-y-4">
                  <CardIcon icon={Icon} aria-hidden />
                  <CardTitle>
                    <Typography as="h3" variant="h6" className="font-bold text-foreground">
                      {item.title}
                    </Typography>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <Typography variant="p" className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
