import { BarChart3, Lightbulb, Sparkles, Users, type LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import { getAboutCompanyContent } from "@/lib/about-company";
import type { Locale } from "@/i18n-config";

const ICON_MAP: Record<string, LucideIcon> = {
  lightbulb: Lightbulb,
  barChart3: BarChart3,
  users: Users,
};

interface AboutCompanyAiSectionProps {
  locale: Locale;
}

export function AboutCompanyAiSection({ locale }: AboutCompanyAiSectionProps) {
  const content = getAboutCompanyContent(locale).ai;
  return (
    <Section
      variant="gradient"
      padding="lg"
      className="relative isolate overflow-hidden bg-gradient-to-b from-background via-primary/[0.04] to-muted/20 dark:via-primary/[0.06] dark:to-muted/10"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/8 blur-3xl" />
      </div>

      <div className="space-y-12">
        <SectionTitle
          badge={content.badge}
          heading={content.heading}
          maxWidth="3xl"
          centered
        />

        <div className="grid gap-6 md:grid-cols-3">
          {content.initiatives.map((initiative) => {
            const Icon = ICON_MAP[initiative.iconKey] ?? Lightbulb;
            return (
              <Card key={initiative.title} className="flex h-full flex-col">
                <CardHeader className="space-y-4">
                  <CardIcon icon={Icon} aria-hidden />
                  <CardTitle>{initiative.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <Typography as="p" variant="p" textColor="muted" className="leading-relaxed">
                    {initiative.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex  items-start gap-4 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10 px-6 py-5 dark:from-primary/10 dark:to-primary/5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Sparkles className="h-6 w-6" aria-hidden />
          </div>
          <Typography as="p" variant="p" textColor="muted" className="leading-relaxed">
            {content.footerText}
          </Typography>
        </div>
      </div>
    </Section>
  );
}
