"use client";

import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { BulletList } from "@/components/ui/bullet-list";
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import type { ServiceFeatureItem, ServiceIntro } from "./types";

const DEFAULT_INTRO: ServiceIntro = {
  badge: "Why this service",
  heading: "Built for your business",
  paragraphs: [
    "This service is part of Cloud MLM Software, designed for enterprise network marketing and direct selling. We provide the capabilities and integrations leaders need to scale.",
    "Configuration, training, and support are aligned with your plan and timeline.",
  ],
  partnerCard: {
    badge: "Included",
    heading: "What you get",
    points: [
      "Configuration and onboarding tailored to your plan.",
      "Documentation, training, and dedicated support.",
      "Reporting and analytics built into the platform.",
    ],
  },
};

interface ServiceIntroProps {
  features: ServiceFeatureItem[];
  intro?: ServiceIntro | null;
  /** Key features from backend (services.keyBenefits); when set, used for partner card list instead of intro.partnerCard.points. */
  serverKeyFeatures?: string[] | null;
}

export function ServiceIntro({
  features,
  intro: introProp = null,
  serverKeyFeatures,
}: ServiceIntroProps) {
  const intro = introProp ?? DEFAULT_INTRO;
  const partnerCardPoints =
    serverKeyFeatures && serverKeyFeatures.length > 0
      ? serverKeyFeatures
      : intro.partnerCard.points;

  return (
    <Section variant="default" padding="lg" className="bg-muted/30 dark:bg-muted/10">
      <div className="container space-y-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-0 top-1/4 h-[480px] w-[480px] rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute right-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl" />
        </div>
        <div className="max-w-4xl space-y-4">
          {intro.badge && (
            <Badge variant="default" className="text-xs font-semibold uppercase tracking-wider">
              {intro.badge}
            </Badge>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[2.5rem] leading-tight">
            {intro.heading}
          </h2>
        </div>

        {/* Two-column: copy + partner card */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="space-y-6">
            {intro.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base text-muted-foreground leading-relaxed sm:text-lg"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-border/40 dark:bg-card/80">
            <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
            <div className="relative space-y-4">
              {intro.partnerCard.badge && (
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary">
                  {intro.partnerCard.badge}
                </span>
              )}
              <h3 className="text-xl font-semibold text-foreground">
                {intro.partnerCard.heading}
              </h3>
              {intro.partnerCard.subheading && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {intro.partnerCard.subheading}
                </p>
              )}
              <BulletList
                items={partnerCardPoints}
                variant="compact"
                className="space-y-3 text-sm text-muted-foreground leading-relaxed"
              />
            </div>
          </div>
        </div>

        {/* Feature cards – icon flip on hover per project rules */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <Card key={item.title} className="flex h-full flex-col">
              <CardHeader className="space-y-4">
                <CardIcon icon={item.icon} aria-hidden />
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
