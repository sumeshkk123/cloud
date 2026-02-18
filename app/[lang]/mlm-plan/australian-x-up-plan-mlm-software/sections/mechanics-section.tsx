"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardHeader, CardIcon, CardTitle, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";
import { mechanics } from "../content";

export function MechanicsSection() {
  return (
    <Section padding="md" variant="gradient" containerClassName="space-y-12">
      <SectionTitle
        heading="How the Australian X-UP mechanics operate"
        description="Map every pass-up, qualification rule, and visibility cue so sponsors and compliance teams stay in sync from day one."
        centered={false}
        maxWidth="3xl"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {mechanics.map((mechanic) => {
          const Icon = mechanic.icon;
          return (
            <Card key={mechanic.title} className="flex h-full flex-col">
              <CardHeader className="flex flex-col gap-3">
                <CardIcon icon={Icon} />
                <CardTitle className="text-lg">{mechanic.title}</CardTitle>
                <Typography variant="p" className="text-sm text-muted-foreground">
                  {mechanic.summary}
                </Typography>
              </CardHeader>
              <CardContent className="pt-0">
                <BulletList items={mechanic.outcomes} variant="compact" />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
