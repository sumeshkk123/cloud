import type { ComponentType } from "react";
import { ClipboardCheck, BarChart3, Users, Rocket } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

type ImplementationStep = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

const IMPLEMENTATION_STEPS: ImplementationStep[] = [
  {
    title: "Compensation discovery",
    description: "We map your current payouts, rank logic, and strategic targets with finance and field leadership.",
    icon: ClipboardCheck
  },
  {
    title: "Simulation sprints",
    description: "Plan Studio runs A/B variants, stress tests volume shifts, and validates against historical data.",
    icon: BarChart3
  },
  {
    title: "Executive alignment",
    description: "Finance, compliance, and marketing sign off on the final plan with documented scripts and FAQs.",
    icon: Users
  },
  {
    title: "Launch orchestration",
    description: "Our go-live playbook handles training, statement previews, sandbox testing, and post-launch tuning.",
    icon: Rocket
  }
];

export function PlansImplementationSection() {
  return (
    <Section id="plan-implementation" variant="gradient" padding="xl" className="relative isolate !overflow-visible">
      {/* Floating orbs */}
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse -z-10" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse -z-10" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 space-y-12">
        <SectionTitle
          badge="Implementation methodology"
          heading="How we launch your compensation plan"
          description="A proven four-phase methodology keeps finance, compliance, and field leaders aligned from workshop to post-launch optimisation."
          centered={true}
          maxWidth="3xl"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {IMPLEMENTATION_STEPS.map((step) => (
            <Card key={step.title} className="h-full">
              <CardHeader className="space-y-3">
                <div className="space-y-2">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <step.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <Typography as="h3" variant="h5">
                    {step.title}
                  </Typography>
                  <Typography as="p" variant="small" textColor="muted">
                    {step.description}
                  </Typography>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
