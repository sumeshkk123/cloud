import type { Locale } from "@/i18n-config";
import { getCrmMlmSoftwareContent } from "@/lib/crm-mlm-software";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";

interface CrmMlmWorkflowSectionProps {
  locale: Locale;
}

export function CrmMlmWorkflowSection({ locale }: CrmMlmWorkflowSectionProps) {
  const c = getCrmMlmSoftwareContent(locale).workflow;
  const steps = c.items;

  return (
    <Section variant="gradient" padding="lg">
      <div className="space-y-12 container">
        <SectionTitle
          badge={c.badge}
          heading={c.heading}
          description={c.description}
          centered={false}
          maxWidth="3xl"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="group flex flex-col">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 group-hover:[transform:rotateY(180deg)]" aria-hidden />
                </span>
                <div className="mt-4 space-y-2">
                  <Typography as="h3" variant="h5" className="font-semibold text-foreground">
                    {step.title}
                  </Typography>
                  <Typography as="p" variant="small" textColor="muted" className="leading-relaxed">
                    {step.description}
                  </Typography>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
