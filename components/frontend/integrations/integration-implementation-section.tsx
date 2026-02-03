import type { ComponentType } from "react";
import { Plug, Settings, CheckCircle2, TrendingUp } from "lucide-react";
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
    title: "Integration discovery",
    description: "We analyze your current stack and identify the best integrations to enhance your MLM platform.",
    icon: Plug
  },
  {
    title: "Quick setup",
    description: "Our team configures API connections, authentication, and data mapping in under 24 hours.",
    icon: Settings
  },
  {
    title: "Testing & validation",
    description: "We run comprehensive tests to ensure data flows correctly between your MLM software and integrated platforms.",
    icon: CheckCircle2
  },
  {
    title: "Ongoing support",
    description: "Continuous monitoring and updates ensure your integrations remain stable and performant as platforms evolve.",
    icon: TrendingUp
  }
];

export function IntegrationImplementationSection() {
  return (
    <Section variant="muted" padding="md" containerClassName="space-y-10">
        <SectionTitle
          badge="Implementation"
          heading="How we set up your integrations"
          description="Our specialists configure, test, and maintain integrations to ensure seamless data flow between your MLM software and third-party platforms."
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
