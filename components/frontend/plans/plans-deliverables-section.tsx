import type { ComponentType } from "react";
import { FileText, ClipboardList, BarChart3, ShieldCheck } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";

type PlanDeliverable = {
  title: string;
  description: string;
  bullets: string[];
  icon: ComponentType<{ className?: string }>;
};

const PLAN_DELIVERABLES: PlanDeliverable[] = [
  {
    title: "Compensation charter",
    description:
      "Executive-ready documentation covering plan objectives, payout logic, and regulatory considerations for each region.",
    bullets: [
      "Plan narratives tailored for field launch",
      "Financial models with guardrail parameters",
      "Risk register with mitigation actions"
    ],
    icon: FileText
  },
  {
    title: "Stakeholder playbooks",
    description:
      "Enablement kits for finance, compliance, and field leaders so everyone can train, coach, and monitor success.",
    bullets: [
      "Workshop decks and facilitator notes",
      "FAQ scripts and objection handling",
      "Launch communications timeline"
    ],
    icon: ClipboardList
  },
  {
    title: "Performance dashboards",
    description:
      "Real-time analytics for executives and field leadership with thresholds that surface wins and risks instantly.",
    bullets: [
      "Rank, volume, and payout scorecards",
      "Variance alerts routed to plan owners",
      "Downloadable executive briefings"
    ],
    icon: BarChart3
  },
  {
    title: "Compliance evidence pack",
    description:
      "Audit-ready logs, disclosure templates, and filing schedules that satisfy regulatory and partner reviews.",
    bullets: [
      "Automated policy change history",
      "Sample statements with mandated language",
      "Annual audit support checklist"
    ],
    icon: ShieldCheck
  }
];

export function PlansDeliverablesSection() {
  return (
    <Section id="plan-deliverables" variant="gradient" padding="xl" className="relative isolate !overflow-visible">
      <div className="space-y-12">
        <SectionTitle
          badge="Deliverables"
          heading="Deliverables your stakeholders receive"
          description="Every engagement produces documentation, analytics, and compliance artefacts that keep executives aligned and regulators satisfied."
          centered={true}
          maxWidth="3xl"
        />

        <div className="mx-auto container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-4">
            {PLAN_DELIVERABLES.map((deliverable) => {
              const Icon = deliverable.icon;
              return (
                <div
                  key={deliverable.title}
                  className="relative rounded-2xl border border-border/40 bg-background p-6 sm:p-8"
                >
                  <div className="relative grid gap-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                        <Icon className="h-6 w-6" aria-hidden />
                      </div>
                      <div className="min-w-0 space-y-2">
                        <Typography as="h3" variant="h4" className="tracking-tight">
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
                          Included
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
        </div>
      </div>
    </Section>
  );
}
