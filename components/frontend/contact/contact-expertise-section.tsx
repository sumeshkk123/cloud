import type { ComponentType } from "react";
import { CalendarCheck, Headset, Bot } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";
import { SectionTitle } from "@/components/ui/section-title";
import { Section } from "@/components/ui/section";

type IconType = ComponentType<{ className?: string }>;

export type Expertise = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

const EXPERTISE: Expertise[] = [
  {
    title: "Solution architecture",
    description:
      "Plan migrations, custom modules, and compliance guardrails with architects who have delivered hundreds of deployments.",
    icon: CalendarCheck,
    bullets: [
      "Blueprint workshops tailored to compensation and geographic goals",
      "Integration strategy for ERP, CRM, tax, and payment ecosystems",
      "Performance and security reviews prior to launch"
    ]
  },
  {
    title: "Customer success",
    description:
      "Dedicated success managers guide adoption plans, knowledge programmes, and executive briefings.",
    icon: Headset,
    bullets: [
      "Quarterly business reviews with data-backed recommendations",
      "Enablement campaigns for field, corporate, and partner communities",
      "Health scoring dashboards and proactive escalation paths"
    ]
  },
  {
    title: "Advisory & innovation",
    description:
      "Strategists help shape AI roadmaps, expansion playbooks, and operational governance.",
    icon: Bot,
    bullets: [
      "AI readiness assessments and copilot training",
      "Market-entry analysis with regulatory summaries",
      "Change management programmes for enterprise rollouts"
    ]
  }
];

export function ContactExpertiseSection() {
  return (
    <Section variant="default" padding="lg" className="border-y border-border/60 bg-muted/20 dark:bg-slate-900/40" containerClassName="space-y-12">
      <div className="space-y-4">
        <SectionTitle
          heading="Experts aligned with every milestone"
          description="From architecture to AI innovation, our teams collaborate with yours using proven playbooks."
          maxWidth="full"
        />
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {EXPERTISE.map((area) => {
          const Icon = area.icon;
          return (
            <article key={area.title} className="group flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 group-hover:[transform:rotateY(180deg)]" aria-hidden />
              </div>
              <div className="space-y-2">
                <Typography as="h3" variant="h5" className="font-semibold">
                  {area.title}
                </Typography>
                <Typography variant="p" textColor="muted" className="text-sm">
                  {area.description}
                </Typography>
              </div>
              <BulletList items={area.bullets} />
            </article>
          );
        })}
      </div>
    </Section>
  );
}
