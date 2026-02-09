import type { Locale } from "@/i18n-config";
import { getNetworkMarketingSoftwareContent } from "@/lib/network-marketing-software";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";

interface NetworkMarketingPlatformFeaturesSectionProps {
  locale: Locale;
}

export function NetworkMarketingPlatformFeaturesSection({
  locale,
}: NetworkMarketingPlatformFeaturesSectionProps) {
  const c = getNetworkMarketingSoftwareContent(locale).platformFeatures;

  return (
    <Section variant="gradient" padding="lg">
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.items.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="flex h-full flex-col">
                <CardHeader className="space-y-4">
                  <CardIcon icon={Icon} aria-hidden />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <Typography as="p" variant="small" textColor="muted" className="leading-relaxed">
                    {feature.detail}
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
