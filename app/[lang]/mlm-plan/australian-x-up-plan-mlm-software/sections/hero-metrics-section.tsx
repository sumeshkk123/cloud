"use client";

import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { heroMetrics } from "../content";

export function HeroMetricsSection() {
  return (
    <Section padding="md" variant="default" containerClassName="space-y-0">
      <div className="grid gap-6 sm:grid-cols-2">
        {heroMetrics.map((metric) => (
          <Card key={metric.label} className="bg-white/80 backdrop-blur-sm dark:bg-white/10">
            <CardHeader className="pb-2">
              <Typography variant="small" textColor="muted" className="uppercase tracking-wide">
                {metric.label}
              </Typography>
              <CardTitle className="mt-2 text-3xl">{metric.value}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <Typography variant="small" textColor="muted">
                {metric.detail}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
