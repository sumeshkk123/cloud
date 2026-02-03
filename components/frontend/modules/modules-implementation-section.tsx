import type { ComponentType } from "react";
import { BadgeCheck, Building2, ClipboardCheck, Puzzle } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

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
    <Section variant="primary" padding="xl" className="relative isolate !overflow-visible">
      {/* Floating orbs */}
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse -z-10" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse -z-10" style={{ animationDelay: '1s' }} />

      <div className="relative container z-10 space-y-16">
        {/* Header */}
        <SectionTitle
          badge="Implementation"
          heading="How we roll out your module stack"
          description="Our specialists pair proven implementation playbooks with AI-powered tooling to configure, launch, and optimize your module mix."
          centered={true}
          maxWidth="3xl"
        />

        {/* Implementation Steps */}
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2">
          {IMPLEMENTATION_STEPS.map((step) => (
            <Card key={step.title} className="p-4">
              <CardHeader>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <step.icon className="h-7 w-7" aria-hidden />
                    </span>
                    <div className="flex-1">
                      <Typography as="h4" variant="h4">
                        {step.title}
                      </Typography>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Typography as="p" variant="p" textColor="muted">
                  {step.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
