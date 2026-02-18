"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardHeader, CardIcon, CardTitle, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { journeys } from "../content";

export function JourneysSection() {
  return (
    <Section padding="lg" variant="gradient" containerClassName="space-y-12">
      <SectionTitle
        badge="Journey"
        heading="Member journey clarity from enrolment to ownership"
        description="Everyone involved sees where a leg sits, what unlocks the next milestone, and how Cloud MLM Software supports the transition."
        centered={false}
        maxWidth="3xl"
      />
      <div className="absolute left-1/2 top-1/4 h-72 w-72 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="grid gap-6 md:grid-cols-3">
        {journeys.map((journey) => {
          const Icon = journey.icon;
          return (
            <Card key={journey.stage} className="flex h-full flex-col">
              <CardHeader className="flex flex-col gap-3">
                <CardIcon icon={Icon} />
                <CardTitle className="text-lg">{journey.stage}</CardTitle>
                <Typography variant="p" className="text-sm text-muted-foreground">
                  {journey.description}
                </Typography>
              </CardHeader>
              <CardContent className="space-y-2 pt-0">
                <Typography variant="small" textColor="muted" className="uppercase tracking-wide">
                  What to focus on
                </Typography>
                <Typography variant="p" className="text-sm">
                  {journey.focus}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
