"use client";

import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { BulletList } from "@/components/ui/bullet-list";
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import type { ConsultingIntro as ConsultingIntroType, ConsultingIntroFeature } from "./types";

interface ConsultingIntroProps {
  intro: ConsultingIntroType;
  features: ConsultingIntroFeature[];
}

export function ConsultingIntro({ intro, features }: ConsultingIntroProps) {
  return (
    <Section variant="default" padding="lg" className="bg-muted/30 dark:bg-muted/10">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/4 h-[480px] w-[480px] rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>
      <div className="container space-y-14 relative">

        <div className="max-w-4xl space-y-4">
          {intro.badge && (
            <Badge variant="default" className="text-xs font-semibold uppercase tracking-wider">
              {intro.badge}
            </Badge>
          )}
          <Typography
            as="h2"
            variant="h2"
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.5rem] leading-tight text-foreground"
          >
            {intro.heading}
          </Typography>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="space-y-6">
            {intro.paragraphs.map((p, i) => (
              <Typography key={i} variant="p" textColor="muted" className="text-base leading-relaxed sm:text-lg">
                {p}
              </Typography>
            ))}
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-border/40 dark:bg-card/80">
            <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
            <div className="relative space-y-4">
              {intro.partnerCard.badge && (
                <Typography as="span" variant="small" textColor="primary" className="inline-block text-xs font-semibold uppercase tracking-wider">
                  {intro.partnerCard.badge}
                </Typography>
              )}
              <Typography as="h3" variant="h3">
                {intro.partnerCard.heading}
              </Typography>
              {intro.partnerCard.subheading && (
                <Typography variant="small" textColor="muted" className="leading-relaxed">
                  {intro.partnerCard.subheading}
                </Typography>
              )}
              <BulletList
                items={intro.partnerCard.points}
                variant="compact"
                className="space-y-3 text-sm text-muted-foreground leading-relaxed"
              />
            </div>
          </div>
        </div>

        {features.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="flex h-full flex-col">
                  <CardHeader className="space-y-4">
                    <CardIcon icon={Icon} aria-hidden />
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 pt-0">
                    <Typography variant="small" textColor="muted" className="leading-relaxed">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </Section>
  );
}
