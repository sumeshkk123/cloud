"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardHeader, CardIcon, CardTitle, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { examples } from "../content";

export function ExamplesSection() {
  return (
    <Section padding="lg" variant="gradient" containerClassName="space-y-12">
      <SectionTitle
        badge="Examples"
        heading="Interactive plan examples"
        description="Stress-test scenarios before launch and give leadership instant insight into what every pass-up means for revenue and retention."
        centered={false}
        maxWidth="3xl"
      />
      <div className="absolute left-1/3 top-1/4 h-72 w-72 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="grid gap-6 md:grid-cols-3">
        {examples.map((example) => {
          const Icon = example.icon;
          return (
            <Card key={example.title} className="flex h-full flex-col">
              <CardHeader className="flex flex-col gap-3">
                <CardIcon icon={Icon} />
                <CardTitle className="text-lg">{example.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-0">
                <Typography variant="small" textColor="muted" className="uppercase tracking-wide">
                  Baseline
                </Typography>
                <Typography variant="p" className="text-sm">
                  {example.baseline}
                </Typography>
                <Typography variant="small" textColor="muted" className="uppercase tracking-wide">
                  What Cloud MLM Software reveals
                </Typography>
                <Typography variant="p" className="text-sm">
                  {example.insight}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
