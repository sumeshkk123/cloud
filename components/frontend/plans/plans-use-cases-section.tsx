import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

type PlanUseCase = {
  customer: string;
  region: string;
  narrative: string;
  outcomes: string[];
};

const PLAN_USE_CASES: PlanUseCase[] = [
  {
    customer: "Global wellness brand",
    region: "North America & APAC",
    narrative:
      "Modernised a legacy unilevel plan into a hybrid structure with leadership pools, improving profitability while preserving rank stories.",
    outcomes: [
      "8.2% improvement in commission margin within one quarter",
      "Launch kit helped 12 markets adopt new rank criteria in 6 weeks",
      "Executive dashboard reduced weekly reporting prep by 70%"
    ]
  },
  {
    customer: "Sustainable beauty startup",
    region: "Europe",
    narrative:
      "Rolled out a matrix-to-binary transition with controlled spillover to support rapid influencer acquisition and compliance with EU regulations.",
    outcomes: [
      "Doubled active distributor count without exceeding commission cap",
      "Retention programs lifted autoship revenue by 22%",
      "Regulatory submissions approved ahead of launch"
    ]
  },
  {
    customer: "Nutrition subscription company",
    region: "Latin America",
    narrative:
      "Introduced customer loyalty rewards alongside distributor bonuses, aligning ecommerce growth with field incentives.",
    outcomes: [
      "Customer reorder rate climbed 18% in three months",
      "Wallet deductions automated 95% of manual adjustments",
      "Field NPS increased by 14 points post-launch"
    ]
  }
];

export function PlansUseCasesSection() {
  return (
    <Section id="plan-use-cases" variant="gradient" padding="xl" className="relative isolate !overflow-visible">
      {/* Floating orbs */}
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse -z-10" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse -z-10" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 space-y-12">
        <SectionTitle
          heading="Compensation outcomes delivered for leading brands"
          description="Real-world programmes that combined Plan Studio, automation, and coaching to unlock sustainable growth."
          centered={true}
          maxWidth="3xl"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {PLAN_USE_CASES.map((useCase) => (
            <Card key={useCase.customer} className="h-full">
              <CardHeader className="space-y-3">
                <div className="space-y-2">
                  <Typography as="p" variant="small" className="uppercase tracking-widest text-primary">
                    {useCase.region}
                  </Typography>
                  <Typography as="h3" variant="h5">
                    {useCase.customer}
                  </Typography>
                  <Typography as="p" variant="small" textColor="muted">
                    {useCase.narrative}
                  </Typography>
                </div>
              </CardHeader>
              <CardContent>
                <BulletList items={useCase.outcomes} variant="compact" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
