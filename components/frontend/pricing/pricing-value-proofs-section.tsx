import { FileCheck, Globe, Handshake, type LucideIcon } from "lucide-react";
import type { Locale } from "@/i18n-config";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import { getPricingContent } from "@/lib/pricing-content";

const ICON_MAP: Record<string, LucideIcon> = {
  fileCheck: FileCheck,
  globe: Globe,
  handshake: Handshake,
};

interface PricingValueProofsSectionProps {
  locale: Locale;
}

export function PricingValueProofsSection({ locale }: PricingValueProofsSectionProps) {
  const content = getPricingContent(locale).valueProofs;

  return (
    <Section variant="primary" padding="lg">
      <div className="container space-y-10">
        <SectionTitle
          badge={content.badge}
          heading={content.heading}
          description={content.description}
          maxWidth="3xl"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {content.items.map((item) => {
            const Icon = ICON_MAP[item.iconKey] ?? FileCheck;
            return (
              <Card key={item.title} className="flex h-full flex-col">
                <CardHeader className="space-y-4">
                  <CardIcon icon={Icon} aria-hidden />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <Typography as="p" variant="small" textColor="muted" className="leading-relaxed">
                    {item.detail}
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
