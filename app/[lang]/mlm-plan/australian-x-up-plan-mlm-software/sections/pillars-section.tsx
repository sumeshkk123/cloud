"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardHeader, CardIcon, CardTitle, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";
import { pillars } from "../content";

export function PillarsSection() {
  return (
    <Section padding="lg" variant="gradient" containerClassName="space-y-12">
      <SectionTitle
        badge="Foundations"
        heading="Understand the Australian X-UP plan foundations"
        description="Build alignment between product, compliance, and field leadership with transparent pass-up mechanics."
        centered={false}
        maxWidth="3xl"
      />
      <div className="absolute left-1/4 top-1/4 h-72 w-72 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <Card key={pillar.title} className="flex h-full flex-col">
              <CardHeader className="flex flex-col gap-3">
                <CardIcon icon={Icon} />
                <CardTitle className="text-lg">{pillar.title}</CardTitle>
                <Typography variant="p" className="text-sm text-muted-foreground">
                  {pillar.description}
                </Typography>
              </CardHeader>
              <CardContent className="pt-0">
                <BulletList items={pillar.bullets} variant="compact" />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
