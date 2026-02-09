"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ModuleFeatureItem, ModuleIntro } from "./types";

const DEFAULT_INTRO: ModuleIntro = {
  badge: "Why this module",
  heading: "Built for your programme",
  paragraphs: [
    "This module is part of Cloud MLM Software, designed for enterprise network marketing and direct selling. We provide the capabilities and integrations leaders need to scale without compromising compliance or user experience.",
    "Configuration, training, and support are aligned with your plan and timeline. Every rollout is guided by best practices from hundreds of implementations so you go live with confidence.",
  ],
  partnerCard: {
    badge: "Included",
    heading: "What you get",
    points: [
      "Configuration and onboarding tailored to your plan.",
      "Documentation, training, and a dedicated success desk.",
      "Reporting and analytics built into the platform.",
      "Ongoing updates and compliance with platform standards.",
    ],
  },
};

interface ModuleIntroProps {
  features: ModuleFeatureItem[];
  /** Optional mission-style intro (badge, heading, paragraphs, partner card). Uses default when omitted. */
  intro?: ModuleIntro | null;
}

export function ModuleIntro({
  features,
  intro: introProp = null,
}: ModuleIntroProps) {
  const intro = introProp ?? DEFAULT_INTRO;

  return (
    <Section
      variant="primary"
      padding="lg"
      className="relative isolate overflow-hidden bg-gradient-to-b from-background via-sky-50/30 to-muted/20 dark:via-sky-950/20 dark:to-muted/10"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/4 h-[480px] w-[480px] rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="space-y-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <div className="space-y-6">
            <SectionTitle
              badge={intro.badge}
              heading={intro.heading}
              centered={false}
              maxWidth="2xl"
            />
            <div className="space-y-5 border-l-2 border-primary/20 pl-6">
              {intro.paragraphs.map((p, i) => (
                <Typography key={i} as="p" variant="p" textColor="muted" className="leading-relaxed">
                  {p}
                </Typography>
              ))}
            </div>
          </div>

          <div
            className={cn(
              "relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-white to-emerald-100/50 p-8 shadow-lg shadow-primary/5",
              "dark:from-primary/15 dark:via-slate-900/80 dark:to-emerald-500/10 dark:shadow-none dark:ring-1 dark:ring-primary/20"
            )}
          >
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-2xl" />
            <div className="relative space-y-5">
              <div>
                <Typography as="p" variant="small" textColor="muted" className="mb-2 uppercase tracking-wider">
                  {intro.partnerCard.badge}
                </Typography>
                <Typography as="h3" variant="h4">
                  {intro.partnerCard.heading}
                </Typography>
              </div>
              <BulletList items={intro.partnerCard.points} className="space-y-4" />
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="flex h-full flex-col">
                <CardHeader className="space-y-4">
                  <CardIcon icon={Icon} aria-hidden />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <Typography as="p" variant="small" textColor="muted" className="leading-relaxed">
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
