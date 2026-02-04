import { Target, Sparkles, ShieldCheck, Globe, type LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import { getAboutCompanyContent } from "@/lib/about-company";
import type { Locale } from "@/i18n-config";

const GOAL_ICONS: LucideIcon[] = [Target, Sparkles, ShieldCheck, Globe];

interface AboutCompanyGoalsSectionProps {
  locale: Locale;
}

export function AboutCompanyGoalsSection({ locale }: AboutCompanyGoalsSectionProps) {
  const content = getAboutCompanyContent(locale).goals;
  return (
    <Section variant="muted" padding="lg">
      <div className="space-y-10">
        <SectionTitle
          badge={content.badge}
          heading={content.heading}
          description={content.description}
          maxWidth="3xl"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {content.goals.map((goal, index) => {
            const Icon = GOAL_ICONS[index] ?? Target;
            return (
              <Card key={goal.order} className="flex h-full flex-col">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                  <CardIcon icon={Icon} aria-hidden />
                  <CardTitle className="min-w-0 flex-1 font-bold leading-tight">
                    {goal.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <Typography as="p" variant="p" textColor="muted" className="mb-6 leading-relaxed">
                    {goal.description}
                  </Typography>
                  <Typography as="p" variant="small" className="mb-3 uppercase tracking-wider text-muted-foreground">
                    {content.whatYouGetLabel}
                  </Typography>
                  <BulletList
                    items={goal.points}
                    className="[&_.rounded-full]:!bg-primary/10 [&_.rounded-full]:!text-primary [&_span:last-child]:text-muted-foreground"
                  />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
