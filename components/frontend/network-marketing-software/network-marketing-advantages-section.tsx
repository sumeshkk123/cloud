import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/i18n-config";
import { getNetworkMarketingSoftwareContent } from "@/lib/network-marketing-software";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface NetworkMarketingAdvantagesSectionProps {
  locale: Locale;
  contactHref: string;
}

export function NetworkMarketingAdvantagesSection({
  locale,
  contactHref,
}: NetworkMarketingAdvantagesSectionProps) {
  const c = getNetworkMarketingSoftwareContent(locale).advantages;

  return (
    <Section variant="primary" padding="lg">
      <div className="space-y-12">
        <SectionTitle
          badge={c.badge}
          heading={c.heading}
          description={c.description}
          maxWidth="3xl"
          centered
        />
<div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/4 h-[480px] w-[480px] rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {c.items.map((advantage) => {
            const Icon = advantage.icon;
            return (
              <Card key={advantage.title} className="flex h-full flex-col">
                <CardHeader className="space-y-4">
                  <CardIcon icon={Icon} aria-hidden />
                  <CardTitle>{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <Typography as="p" variant="small" textColor="muted" className="leading-relaxed">
                    {advantage.detail}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}

          {/* CTA card – same row, distinct style */}
          <Card
            className={cn(
              "flex h-full flex-col border-2 border-primary/30 bg-gradient-to-b from-primary/10 to-primary/5 dark:from-primary/15 dark:to-primary/10"
            )}
          >
            <CardHeader className="space-y-3">
              <span className="inline-flex w-fit items-center rounded-full border border-primary/40 bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                {c.asideCta.badge}
              </span>
              <CardTitle className="text-xl">{c.asideCta.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-4 pt-0">
              <Typography as="p" variant="small" textColor="muted" className="leading-relaxed">
                {c.asideCta.description}
              </Typography>
              <Button asChild size="default" className="mt-auto w-fit">
                <Link href={contactHref} className="inline-flex items-center gap-2">
                  {c.asideCta.ctaLabel}
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
