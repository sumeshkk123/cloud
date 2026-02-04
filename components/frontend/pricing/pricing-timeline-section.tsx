import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import { TIMELINE_STEPS } from "./constants";

interface PricingTimelineSectionProps {
  contactHref: string;
}

export function PricingTimelineSection({ contactHref }: PricingTimelineSectionProps) {
  return (
    <Section variant="muted" padding="lg" id="speak-to-us">
      <div className="container space-y-12">
        <SectionTitle
          heading="Implementation blueprint"
          description="A proven delivery cadence keeps stakeholders informed while the rollout pod executes across compensation, integrations, and compliance."
          maxWidth="3xl"
        />
        <div className="grid gap-6 md:grid-cols-4">
          {TIMELINE_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <Card key={step.title} className="flex h-full flex-col">
                <CardHeader className="space-y-3">
                  <CardIcon icon={Icon} aria-hidden />
                  <CardTitle className="text-base">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 space-y-2 pt-0">
                  <Typography as="p" variant="small" textColor="muted">
                    {step.detail}
                  </Typography>
                  <Typography as="p" variant="small" textColor="muted" className="uppercase tracking-[0.3em]">
                    {step.duration}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <Card className="border-primary/30 bg-card shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-6 p-8">
            <div className="space-y-3">
              <Typography as="h3" variant="h3" className="font-semibold">
                Ready for a guided pricing briefing?
              </Typography>
              <Typography as="p" variant="small" textColor="muted">
                Share priorities, target launch dates, and critical integrations. Receive an aligned investment roadmap and milestone-based payment structure.
              </Typography>
            </div>
            <Button asChild size="lg">
              <Link href={contactHref}>
                Speak with our team
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </Section>
  );
}
