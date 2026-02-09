import { Handshake, Rocket, ShieldCheck, type LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getAboutCompanyContent } from "@/lib/about-company";
import type { Locale } from "@/i18n-config";

const ICON_MAP: Record<string, LucideIcon> = {
  shieldCheck: ShieldCheck,
  handshake: Handshake,
  rocket: Rocket,
};

interface AboutCompanyMissionSectionProps {
  locale: Locale;
}

export function AboutCompanyMissionSection({ locale }: AboutCompanyMissionSectionProps) {
  const content = getAboutCompanyContent(locale).mission;
  return (
    <Section
      variant="primary"
      padding="lg"
      className="relative isolate overflow-hidden bg-gradient-to-b from-background via-sky-50/30 to-muted/20 dark:via-sky-950/20 dark:to-muted/10"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/4 h-[480px] w-[480px] rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="space-y-16 container">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <div className="space-y-6">
            <SectionTitle
              badge={content.badge}
              heading={content.heading}
              centered={false}
              maxWidth="2xl"
            />
            <div className="space-y-5 border-l-2 border-primary/20 pl-6">
              {content.paragraphs.map((p, i) => (
                <Typography key={i} as="p" variant="p" textColor="muted" className="leading-relaxed">
                  {p}
                </Typography>
              ))}
            </div>
          </div>

          <div
            className={cn(
              "relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-white to-emerald-100/50 p-8 shadow-lg shadow-primary/5",
              "dark:from-primary/15 dark:via-slate-900/80 dark:to-emerald-500/10 dark:shadow-none dark:ring-1 dark:ring-primary/20"
            )}
          >
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-2xl" />
            <div className="relative space-y-5">
              <div>
                <Typography as="p" variant="small" textColor="muted" className="mb-2 uppercase tracking-wider">
                  {content.partnerCard.badge}
                </Typography>
                <Typography as="h3" variant="h4">
                  {content.partnerCard.heading}
                </Typography>
              </div>
              <BulletList items={content.partnerCard.points} className="space-y-4" />
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {content.valuePillars.map((pillar) => {
            const Icon = ICON_MAP[pillar.iconKey] ?? ShieldCheck;
            return (
              <Card key={pillar.title} className="flex h-full flex-col">
                <CardHeader className="space-y-4">
                  <CardIcon icon={Icon} aria-hidden />
                  <CardTitle>{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <Typography as="p" variant="small" textColor="muted" className="leading-relaxed">
                    {pillar.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
