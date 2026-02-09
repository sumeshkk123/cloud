import type { Locale } from "@/i18n-config";
import { getCrmMlmSoftwareContent } from "@/lib/crm-mlm-software";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";

interface CrmMlmAiUpgradesSectionProps {
  locale: Locale;
}

export function CrmMlmAiUpgradesSection({ locale }: CrmMlmAiUpgradesSectionProps) {
  const c = getCrmMlmSoftwareContent(locale).aiUpgrades;

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
        <div className="grid gap-12 md:grid-cols-2">
          {c.items.map((entry) => {
            const Icon = entry.icon;
            return (
              <div key={entry.year} className="group flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 group-hover:[transform:rotateY(180deg)]" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                      {entry.year}
                    </p>
                    <Typography as="h3" variant="h4" className="mt-0.5 text-foreground">
                      {entry.title}
                    </Typography>
                  </div>
                </div>
                <Typography as="p" variant="small" textColor="muted" className="leading-relaxed">
                  {entry.description}
                </Typography>
                <BulletList items={entry.bullets} className="space-y-2 text-sm" variant="compact" />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
