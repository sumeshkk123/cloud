"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent, CardHeader, CardTitle, CardIcon } from "@/components/ui/card";
import type { ConsultingReason } from "./types";

interface ConsultingWhySectionProps {
  heading: string;
  description?: string;
  reasons: ConsultingReason[];
}

export function ConsultingWhySection({ heading, description, reasons }: ConsultingWhySectionProps) {
  if (!reasons?.length) return null;

  return (
    <Section padding="lg" variant="gradient">
      <div className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <SectionTitle
            badge="Why choose us"
            heading={heading}
            description={description}
            centered={false}
            maxWidth="full"
            headingClassName="normal-case"
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <Card key={reason.title} className="flex h-full flex-col">
                <CardHeader className="space-y-4">
                  <CardIcon icon={Icon} aria-hidden />
                  <CardTitle className="text-lg font-semibold">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <Typography variant="small" className="text-muted-foreground leading-relaxed">
                    {reason.detail}
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
