import { LineChart, NotebookPen, Workflow } from "lucide-react";

import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";
import type { Deliverable } from "./free-demo-content";

export function FreeDemoDeliverablesSection({
  deliverables,
  includedLabel = "Value",
}: {
  deliverables: Deliverable[];
  includedLabel?: string;
}) {
  return (
    <Section variant="gradient" padding="xl" className="relative isolate !overflow-visible" containerClassName="space-y-12">
      <SectionTitle
        badge="Demo deliverables"
        heading="Everything you receive during the 30-day sandbox"
        description="Beyond platform access, we provide tailored assets, automations, and insights so stakeholders can review the solution with confidence."
        centered={true}
        maxWidth="3xl"
      />

      <div className="grid gap-10 lg:grid-cols-3 lg:gap-4">
        {deliverables.map((deliverable) => {
          const Icon =
            deliverable.icon === "playbook"
              ? NotebookPen
              : deliverable.icon === "automation"
                ? Workflow
                : LineChart;

          return (
            <div key={deliverable.title} className="relative rounded-2xl border border-border/40 bg-background p-6 sm:p-8">
              <div className="relative grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <div className="min-w-0 space-y-2">
                    <Typography as="h3" variant="h5" className="tracking-tight">
                      {deliverable.title}
                    </Typography>
                    <Typography as="p" variant="p" textColor="muted" className="text-sm leading-relaxed">
                      {deliverable.description}
                    </Typography>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-start">
                  <div className="space-y-3">
                    <Typography as="p" variant="small" textColor="muted" className="uppercase tracking-wider">
                      {includedLabel}
                    </Typography>
                    <BulletList items={deliverable.bullets} variant="compact" />
                  </div>
                  <div className="hidden sm:block">
                    <div className="h-full w-px bg-gradient-to-b from-transparent via-border to-transparent" aria-hidden />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

