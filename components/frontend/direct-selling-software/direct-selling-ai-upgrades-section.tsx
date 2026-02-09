import type { Locale } from "@/i18n-config";
import { getDirectSellingSoftwareContent } from "@/lib/direct-selling-software";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";

interface DirectSellingAiUpgradesSectionProps {
  locale: Locale;
}

export function DirectSellingAiUpgradesSection({ locale }: DirectSellingAiUpgradesSectionProps) {
  const c = getDirectSellingSoftwareContent(locale).aiUpgrades;

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
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">{entry.year}</p>
                    <Typography as="h3" variant="h4" className="text-foreground mt-0.5">{entry.title}</Typography>
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
