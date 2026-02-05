import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import { TIMELINE_STEPS } from "./constants";
import type { PricingContent } from "@/lib/pricing-content";

interface PricingTimelineSectionProps {
  heading: string;
  description: string;
  contactHref: string;
  cta: PricingContent["timeline"]["cta"];
}

export function PricingTimelineSection({ heading, description, contactHref, cta }: PricingTimelineSectionProps) {
  return (
    <Section variant="gradient" padding="lg" id="speak-to-us">
      <div className="container space-y-12">
        <SectionTitle
          heading={heading}
          description={description}
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
                  <Typography as="p" variant="small" textColor="muted" className="uppercase">
                    {step.duration}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA block with gradient background (same style as GradientCtaSection) */}
        <div className="group relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary via-blue-500 via-purple-500 to-pink-500 p-8 text-left transition-all duration-300 hover:shadow-2xl sm:p-12">
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
          </div>
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl animate-pulse" />
            <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-white/20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
          <div className="relative z-10 max-w-2xl">
            <Typography variant="h2" as="h3" className="mb-4 text-2xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl">
              {cta.heading}
            </Typography>
            <Typography variant="p" className="mb-8 text-base leading-relaxed text-white/95">
              {cta.description}
            </Typography>
            <Button
              asChild
              size="lg"
              className="rounded-xl bg-white px-8 py-6 text-base font-semibold text-primary shadow-xl transition-all hover:scale-105 hover:shadow-2xl hover:bg-white/95"
            >
              <Link href={contactHref} className="inline-flex items-center gap-2">
                {cta.buttonText}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
