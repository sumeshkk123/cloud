import { ClipboardList, GalleryHorizontal, GaugeCircle, Workflow } from "lucide-react";

import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";
import type { DemoStep } from "./free-demo-content";

export function FreeDemoStepsSection({ steps }: { steps: DemoStep[] }) {
  return (
    <Section variant="primary" padding="xl" className="relative isolate !overflow-visible" containerClassName="space-y-12">
      <SectionTitle
        badge="Demo steps"
        heading="From request to roadmap in four steps"
        description="Combine live workshops with sandbox exploration so stakeholders align quickly and confidently."
        centered={true}
        maxWidth="3xl"
      />

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-4">
        {steps.map((step) => {
          const Icon =
            step.icon === "explore"
              ? GalleryHorizontal
              : step.icon === "configure"
                ? Workflow
                : step.icon === "present"
                  ? GaugeCircle
                  : ClipboardList;

          return (
            <div key={step.title} className="relative rounded-2xl border border-border/40 bg-background p-6 sm:p-8">
              <div className="relative grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <div className="min-w-0 space-y-2">
                    <Typography as="h3" variant="h5" className="tracking-tight">
                      {step.title}
                    </Typography>
                    <Typography as="p" variant="p" textColor="muted" className="text-sm leading-relaxed">
                      {step.description}
                    </Typography>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-start">
                  <div className="space-y-3">
                    <Typography as="p" variant="small" textColor="muted" className="uppercase tracking-wider">
                      What happens
                    </Typography>
                    <BulletList items={[step.description]} variant="compact" />
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

