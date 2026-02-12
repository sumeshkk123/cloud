"use client";

import type { ComponentType } from "react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";

interface OfferItem {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface ConsultingOfferSectionProps {
  badge?: string;
  heading: string;
  description?: string;
  items: OfferItem[];
}

export function ConsultingOfferSection({
  badge,
  heading,
  description,
  items,
}: ConsultingOfferSectionProps) {
  if (!items?.length) return null;

  return (
    <Section padding="lg" variant="gradient">
      <div className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <SectionTitle
            badge={badge ?? "Our services"}
            heading={heading}
            description={description}
            centered={false}
            maxWidth="full"
            headingClassName="normal-case"
          />
        </div>
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
