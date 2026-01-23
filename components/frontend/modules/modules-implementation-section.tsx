import type { ComponentType } from "react";
import { BadgeCheck, Building2, ClipboardCheck, Puzzle } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";

type IconType = ComponentType<{ className?: string }>;

type ImplementationStep = {
  title: string;
  description: string;
  icon: IconType;
};

const IMPLEMENTATION_STEPS: ImplementationStep[] = [
  {
    title: "Module discovery",
    description: "We map your current stack, gaps, and growth targets to curate the right mix of modules.",
    icon: Puzzle
  },
  {
    title: "Configuration sprint",
    description: "Our specialists configure data models, automations, branding, and integrations in iterative cycles.",
    icon: ClipboardCheck
  },
  {
    title: "Launch enablement",
    description: "We deliver administrator training, field rollout kits, and run end-to-end UAT before go-live.",
    icon: BadgeCheck
  },
  {
    title: "Scale and optimize",
    description: "Quarterly reviews uncover new automation, plan updates, and regional expansion opportunities.",
    icon: Building2
  }
];

export function ModulesImplementationSection() {
  return (
    <Section variant="muted" padding="md" containerClassName="space-y-10">
        <SectionTitle
          badge="Implementation"
          heading="How we roll out your module stack"
          description="Our specialists pair proven implementation playbooks with AI-powered tooling to configure, launch, and optimize your module mix."
          maxWidth="3xl"
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {IMPLEMENTATION_STEPS.map((step) => (
            <article
              key={step.title}
              className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <step.icon className="h-6 w-6" aria-hidden />
              </span>
              <Typography as="h3" variant="h5" className="font-semibold">
                {step.title}
              </Typography>
              <Typography variant="p" textColor="muted" className="text-sm">
                {step.description}
              </Typography>
            </article>
          ))}
        </div>
    </Section>
  );
}
