import type { Locale } from "@/i18n-config";
import { getDirectSellingSoftwareContent } from "@/lib/direct-selling-software";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import { BulletList } from "@/components/ui/bullet-list";

interface DirectSellingCapabilitiesSectionProps {
  locale: Locale;
}

export function DirectSellingCapabilitiesSection({ locale }: DirectSellingCapabilitiesSectionProps) {
  const c = getDirectSellingSoftwareContent(locale).capabilities;

  return (
    <Section variant="muted" padding="xl" className="border-y border-border/40">
      <div className="space-y-12 container">
        <SectionTitle
          badge={c.badge}
          heading={c.heading}
          description={c.description}
          centered={false}
          maxWidth="3xl"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {c.items.map((cap) => {
            const Icon = cap.icon;
            return (
              <Card key={cap.title} className="flex h-full flex-col">
                <CardHeader className="space-y-4">
                  <CardIcon icon={Icon} aria-hidden />
                  <CardTitle>{cap.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-0 space-y-4">
                  <Typography as="p" variant="small" textColor="muted" className="leading-relaxed">
                    {cap.description}
                  </Typography>
                  <BulletList items={cap.bullets} className="space-y-2 text-sm" />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
