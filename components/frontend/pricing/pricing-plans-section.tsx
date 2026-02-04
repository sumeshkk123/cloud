import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { PLANS } from "./constants";

export function PricingPlansSection() {
  return (
    <Section variant="default" padding="lg" id="pricing-form">
      <div className="container space-y-12">
        <SectionTitle
          heading="Choose an investment path aligned to your expansion horizon"
          description="Every tier includes ownership of the Cloud MLM platform, compensation validation, and six months of concierge support. Upgrade without friction as your field grows."
          maxWidth="3xl"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <Card key={plan.name} className="flex h-full flex-col transition-all hover:-translate-y-1 hover:shadow-xl">
              <CardHeader className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Image src={plan.svg} width={32} height={32} alt="" className="h-8 w-8" />
                  </span>
                  <Typography as="span" variant="small" textColor="muted" className="uppercase tracking-[0.3em]">
                    {plan.deliveryWindow}
                  </Typography>
                </div>
                <div className="space-y-1">
                  <Typography as="h3" variant="h3" className="font-semibold">
                    {plan.name}
                  </Typography>
                  <Typography as="p" variant="h2" className="font-semibold text-primary">
                    {plan.price}
                  </Typography>
                  <Typography as="p" variant="small" textColor="muted">
                    {plan.description}
                  </Typography>
                </div>
                <div className="rounded-2xl bg-muted/50 p-4">
                  <Typography as="p" variant="small" textColor="muted" className="mb-1 uppercase tracking-[0.3em]">
                    Outcome
                  </Typography>
                  <Typography as="p" variant="small" className="font-medium">
                    {plan.outcome}
                  </Typography>
                </div>
              </CardHeader>
              <CardContent className="flex-1 space-y-2 pt-0">
                {plan.highlights.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    <Typography as="span" variant="small" textColor="muted">
                      {feature}
                    </Typography>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="pt-0">
                <Button asChild className="w-full">
                  <Link href={plan.cta.href}>
                    {plan.cta.label}
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
