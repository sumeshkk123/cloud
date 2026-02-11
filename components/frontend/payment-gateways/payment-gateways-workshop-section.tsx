import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const WORKSHOP_ITEMS = [
  {
    title: "Gateway selection",
    copy: "Analyse payment mix, regions, and regulatory requirements to choose the right providers.",
  },
  {
    title: "Implementation plan",
    copy: "Outline timelines, API configurations, webhooks, and testing scenarios to migrate safely.",
  },
  {
    title: "Monitoring & alerts",
    copy: "Set up dashboards and notifications so finance and support teams stay ahead of issues.",
  },
];

export function PaymentGatewaysWorkshopSection() {
  return (
    <Section padding="lg" variant="gradient">
      <div className="container space-y-12">
        <div className="max-w-3xl">
          <SectionTitle
            badge="Workshop"
            heading="What we cover in an integration workshop"
            description="Map your path to compliant, resilient payment operations."
            centered={false}
          />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {WORKSHOP_ITEMS.map((item) => (
            <Card key={item.title} className="flex h-full flex-col">
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground">{item.copy}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
