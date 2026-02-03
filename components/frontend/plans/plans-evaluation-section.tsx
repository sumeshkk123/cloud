import type { ComponentType } from "react";
import { BarChart3, Wallet, ShieldCheck, Users, Globe2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";

type EvaluationItem = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

const PLAN_EVALUATION: EvaluationItem[] = [
  {
    title: "Compensation economics",
    description: "Model payout ratios, CV splits, and rank compression to protect margin.",
    icon: BarChart3
  },
  {
    title: "Cash flow & wallets",
    description: "Define weekly, monthly, and instant payouts with multi-currency settlement.",
    icon: Wallet
  },
  {
    title: "Compliance guardrails",
    description: "Automate regulatory checks, cooling periods, and clawback policies by market.",
    icon: ShieldCheck
  },
  {
    title: "Field experience",
    description: "Ensure the plan story is simple to teach, coach, and celebrate in every region.",
    icon: Users
  },
  {
    title: "Global localisation",
    description: "Translate rules, taxes, and statements to match regional legislation and currencies.",
    icon: Globe2
  }
];

export function PlansEvaluationSection() {
  return (
    <Section id="plan-evaluation" variant="gradient" padding="xl" className="relative isolate !overflow-visible">
      <div className="space-y-12">
        <SectionTitle
          badge="Plan evaluation"
          heading="What we evaluate in every plan design"
          description="Our compensation strategists model each scenario to ensure payouts stay profitable, compliant, and easy to explain to the field."
          centered={true}
          maxWidth="3xl"
        />

        <div className="mx-auto container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-4">
            {PLAN_EVALUATION.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="relative rounded-2xl border border-border/40 bg-background p-6 sm:p-8"
                >
                  <div className="relative grid gap-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                        <Icon className="h-6 w-6" aria-hidden />
                      </div>
                      <div className="min-w-0 space-y-2">
                        <Typography as="h3" variant="h4" className="tracking-tight">
                          {item.title}
                        </Typography>
                        <Typography as="p" variant="p" textColor="muted" className="text-sm leading-relaxed">
                          {item.description}
                        </Typography>
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
