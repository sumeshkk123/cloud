import type { Locale } from "@/i18n-config";
import { getCrmMlmSoftwareContent } from "@/lib/crm-mlm-software";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";

interface CrmMlmUseCasesSectionProps {
  locale: Locale;
}

export function CrmMlmUseCasesSection({ locale }: CrmMlmUseCasesSectionProps) {
  const c = getCrmMlmSoftwareContent(locale).useCases;

  return (
    <Section variant="gradient" padding="lg">
      <div className="space-y-12">
        <SectionTitle
          badge={c.badge}
          heading={c.heading}
          description={c.description}
          centered={false}
          maxWidth="3xl"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {c.items.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <Card key={useCase.title} className="flex h-full flex-col">
                <CardHeader className="space-y-4">
                  <CardIcon icon={Icon} aria-hidden />
                  <CardTitle>{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-0 space-y-2">
                  <Typography as="p" variant="small" textColor="muted" className="leading-relaxed">
                    {useCase.outcome}
                  </Typography>
                  <p className="text-xs font-medium uppercase tracking-wide text-primary">
                    {useCase.metric}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
