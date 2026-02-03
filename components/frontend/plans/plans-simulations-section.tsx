import type { ComponentType } from "react";
import { LineChart, Calculator, Wallet } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

type SimulationTool = {
  title: string;
  description: string;
  metrics: string[];
  icon: ComponentType<{ className?: string }>;
};

const SIMULATION_TOOLS: SimulationTool[] = [
  {
    title: "Plan Studio sandbox",
    description:
      "Run weekly and monthly commission simulations with version control, so finance can approve payouts before they touch production.",
    metrics: [
      "Scenario comparisons against historical data",
      "Margin impact projections for every bonus",
      "Automated alerts when thresholds are breached"
    ],
    icon: LineChart
  },
  {
    title: "Field health forecasting",
    description:
      "Blend genealogy churn metrics with product velocity to predict promotion readiness and identify coaching moments.",
    metrics: [
      "Rank progression likelihood by leg",
      "Autoship retention and LTV outlook",
      "Emerging leader identification signals"
    ],
    icon: Calculator
  },
  {
    title: "Cash flow command centre",
    description:
      "Model wallets, deductions, and tax obligations across currencies to ensure treasury teams stay ahead of payout cycles.",
    metrics: [
      "Working capital requirements by market",
      "Wallet utilisation and liability forecasts",
      "Compliance checks for withholding and filings"
    ],
    icon: Wallet
  }
];

export function PlansSimulationsSection() {
  return (
    <Section id="plan-simulations" variant="gradient" padding="xl" className="relative isolate !overflow-visible">
      <div className="space-y-12">
        <SectionTitle
          badge="Simulations"
          heading="Simulations that de-risk every payout decision"
          description="Use Plan Studio and predictive analytics to stress-test bonuses, ensure liquidity, and coach leaders with confidence."
          centered={true}
          maxWidth="3xl"
        />

        <div className="mx-auto container">
          <div className="grid gap-6 md:grid-cols-3">
            {SIMULATION_TOOLS.map((tool) => {
              const Icon = tool.icon;
              return (
                <Card key={tool.title} className="h-full">
                  <CardHeader className="space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <div className="space-y-2">
                      <Typography as="h3" variant="h5" className="tracking-tight">
                        {tool.title}
                      </Typography>
                      <Typography as="p" variant="p" textColor="muted" className="text-sm leading-relaxed">
                        {tool.description}
                      </Typography>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <BulletList items={tool.metrics} variant="compact" />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
