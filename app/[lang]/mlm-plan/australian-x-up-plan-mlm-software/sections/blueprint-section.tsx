"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardHeader, CardIcon, CardTitle, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { blueprint } from "../content";

export function BlueprintSection() {
  return (
    <Section padding="md" variant="gradient" containerClassName="space-y-12">
      <SectionTitle
        badge="Blueprint"
        heading="Blueprint for sustainable Australian X-UP delivery"
        description="Combine automation, analytics, and enablement in a single SaaS spine that is ready for founders and regulators alike."
        centered={false}
        maxWidth="3xl"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {blueprint.map((pattern) => {
          const Icon = pattern.icon;
          return (
            <Card key={pattern.title} className="flex h-full flex-col">
              <CardHeader className="flex flex-col gap-3">
                <CardIcon icon={Icon} />
                <CardTitle className="text-lg">{pattern.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <Typography variant="p" className="text-sm text-muted-foreground">
                  {pattern.description}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
