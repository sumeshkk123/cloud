import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { CheckCircle2 } from "lucide-react";
import type { MlmCompanyContent } from "./types";

interface MlmCompanyFeaturesSectionProps {
  content: MlmCompanyContent;
}

export function MlmCompanyFeaturesSection({ content }: MlmCompanyFeaturesSectionProps) {
  return (
    <Section variant="gradient" padding="lg">
      <div className="container space-y-12">
        <SectionTitle
          heading={content.features.heading}
          description={content.features.description}
          maxWidth="3xl"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.features.items.map((feature, index) => (
            <div key={index} className="flex gap-4 rounded-2xl border border-border/60 bg-card p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <Typography as="h3" variant="h6" className="font-semibold">
                  {feature.title}
                </Typography>
                <Typography as="p" variant="small" textColor="muted">
                  {feature.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
