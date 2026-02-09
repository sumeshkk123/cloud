import type { Locale } from "@/i18n-config";
import { getCrmMlmSoftwareContent } from "@/lib/crm-mlm-software";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import { BulletList } from "@/components/ui/bullet-list";

interface CrmMlmPillarsSectionProps {
  locale: Locale;
}

export function CrmMlmPillarsSection({ locale }: CrmMlmPillarsSectionProps) {
  const c = getCrmMlmSoftwareContent(locale).pillars;

  return (
    <Section variant="primary" padding="lg">
       <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/4 h-[480px] w-[480px] rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>
      <div className="space-y-12 container">
     
        <SectionTitle
          badge={c.badge}
          heading={c.heading}
          description={c.description}
          centered={false}
          maxWidth="3xl"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {c.items.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card key={pillar.title} className="flex h-full flex-col">
                <CardHeader className="space-y-4">
                  <CardIcon icon={Icon} aria-hidden />
                  <CardTitle>{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-0 space-y-4">
                  <Typography as="p" variant="small" textColor="muted" className="leading-relaxed">
                    {pillar.description}
                  </Typography>
                  <BulletList items={pillar.bullets} className="space-y-2 text-sm" />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
