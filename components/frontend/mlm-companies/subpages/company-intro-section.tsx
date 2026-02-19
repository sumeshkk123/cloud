import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Calendar, MapPin, Globe, ExternalLink } from "lucide-react";
import type { MlmCompanyContent } from "./types";

interface MlmCompanyIntroSectionProps {
  content: MlmCompanyContent;
}

export function MlmCompanyIntroSection({ content }: MlmCompanyIntroSectionProps) {
  const companyInfo = [
    {
      icon: Calendar,
      label: "Founded",
      value: content.hero.foundedYear,
    },
    {
      icon: MapPin,
      label: "Headquarters",
      value: content.hero.headquarters,
    },
    {
      icon: Globe,
      label: "Industry",
      value: content.hero.industry,
    },
  ];

  return (
    <Section variant="muted" padding="lg">
      <div className="container">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <Typography variant="p" className="text-lg text-muted-foreground">
            Explore detailed insights into {content.hero.title}, a leading player in the network marketing industry. 
            This comprehensive profile covers the company's history, founding year, headquarters location, product offerings, 
            compensation plan structure, and business opportunities for aspiring distributors. Whether you're looking to 
            join this company or researching MLM opportunities, get all the essential information you need to make an informed decision.
          </Typography>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
    </Section>
  );
}
