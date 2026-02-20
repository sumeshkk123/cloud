import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Calendar, MapPin, Globe } from "lucide-react";
import type { MlmCompanyContent } from "./types";

interface MlmCompanyIntroSectionProps {
  content: MlmCompanyContent;
}

export function MlmCompanyIntroSection({ content }: MlmCompanyIntroSectionProps) {
  const companyInfo = [
    {
      icon: Calendar,
      label: content.intro.labels.founded,
      value: content.hero.foundedYear,
    },
    {
      icon: MapPin,
      label: content.intro.labels.headquarters,
      value: content.hero.headquarters,
    },
    {
      icon: Globe,
      label: content.intro.labels.industry,
      value: content.hero.industry,
    },
  ];

  return (
    <Section variant="muted" padding="lg">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="space-y-4 text-left">
            <Typography as="h2" variant="h3" className="text-left">
              {content.intro.heading}
            </Typography>
            <Typography variant="p" className="text-lg text-muted-foreground text-left">
              {content.intro.description}
            </Typography>
          </div>
          <div className="grid gap-4">
            {companyInfo.map((info, index) => (
              <Card key={index} className="border-border/60 bg-card/80">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <Typography variant="small" className="text-muted-foreground">
                      {info.label}
                    </Typography>
                    <Typography variant="p" className="font-semibold">
                      {info.value}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
