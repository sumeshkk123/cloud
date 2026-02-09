import type { Locale } from "@/i18n-config";
import { getNetworkMarketingSoftwareContent } from "@/lib/network-marketing-software";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface NetworkMarketingFrameworkSectionProps {
  locale: Locale;
}

export function NetworkMarketingFrameworkSection({ locale }: NetworkMarketingFrameworkSectionProps) {
  const c = getNetworkMarketingSoftwareContent(locale).framework;

  return (
    <Section variant="muted" padding="lg" className="border-y border-border/40">
      <div className="space-y-14">
        <SectionTitle
          badge={c.badge}
          heading={c.heading}
          description={c.description}
          maxWidth="3xl"
          centered
        />

        {/* Horizontal steps: 3 columns, large number + content */}
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-3 lg:gap-8">
          {c.items.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "relative flex flex-col items-center text-center",
                "lg:items-center lg:text-center",
                index < c.items.length - 1 && "lg:border-r lg:border-border/50 lg:pr-8 lg:border-dashed"
              )}
            >
              <span
                className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-2xl font-bold text-primary"
                aria-hidden
              >
                {index + 1}
              </span>
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                {item.label}
              </span>
              <Typography as="h3" variant="h4" className="mb-3 text-foreground">
                {item.title}
              </Typography>
              <Typography as="p" variant="small" textColor="muted" className="leading-relaxed">
                {item.summary}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
