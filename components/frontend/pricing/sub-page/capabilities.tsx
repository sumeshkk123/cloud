import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";
import { Card, CardContent, CardDescription, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import type { PricingSubCapabilitiesSection } from "./types";

export function PricingSubPageCapabilities({
  section,
}: {
  section: PricingSubCapabilitiesSection;
}) {
  const CalloutIcon = section.callout?.icon;
  return (
    <Section padding="lg" variant="primary" containerClassName="space-y-10">
      {/* Left: title/description — Right: callout */}
      <div className="grid gap-8 md:grid-cols-[minmax(0,0.5fr)_minmax(0,0.6fr)]">
        <SectionTitle
          heading={section.heading}
          description={section.description ?? undefined}
          centered={false}
          maxWidth="full"
        />
        {section.callout && CalloutIcon && (
          <div className="rounded-3xl flex items-center bg-gradient-to-br from-primary/10 via-background to-slate-50 p-6 shadow-sm dark:border-primary/40 dark:from-primary/15 dark:via-slate-950 dark:to-slate-950/70">
            <div className="flex items-start gap-3">
              <CalloutIcon className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <div className="space-y-2">
                <Typography as="h3" variant="h5">
                  {section.callout.title}
                </Typography>
                <Typography variant="muted" as="p">
                  {section.callout.body}
                </Typography>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {section.items.map((item) => (
          <Card key={item.title} className="flex h-full flex-col">
            <CardHeader className="flex flex-col gap-4">
              <CardIcon icon={item.icon} />
              <div className="space-y-2">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </div>
            </CardHeader>
            {item.bullets.length > 0 && (
              <CardContent className="pt-0">
                <BulletList items={item.bullets} variant="compact" />
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
