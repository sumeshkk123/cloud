import type { Locale } from "@/i18n-config";
import { getDirectSellingSoftwareContent } from "@/lib/direct-selling-software";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";

interface DirectSellingWorkflowSectionProps {
  locale: Locale;
}

export function DirectSellingWorkflowSection({ locale }: DirectSellingWorkflowSectionProps) {
  const c = getDirectSellingSoftwareContent(locale).workflow;
  const steps = c.items;

  return (
    <Section variant="gradient" padding="lg">
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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="group flex flex-col">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 group-hover:[transform:rotateY(180deg)]" aria-hidden />
                </span>
                <div className="mt-4 space-y-2">
                  <Typography as="h3" variant="h5" className="text-foreground font-semibold">
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
