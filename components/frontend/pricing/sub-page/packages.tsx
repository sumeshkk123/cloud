import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BulletList } from "@/components/ui/bullet-list";
import { SectionTitle } from "@/components/ui/section-title";
import type { PricingSubPackagesSection } from "./types";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";

interface PricingSubPagePackagesProps {
  section: PricingSubPackagesSection;
  contactHref: string;
}

export function PricingSubPagePackages({ section, contactHref }: PricingSubPagePackagesProps) {
  const ctaLabel = section.ctaLabel ?? "Discuss this package";
  return (
    <Section variant="primary" padding="lg" containerClassName="space-y-14">
      {/* Header */}
      <SectionTitle
        badge={section.sectionTitle ?? "Packages"}
        heading={section.heading}
        description={section.description ?? undefined}
        centered
        maxWidth="3xl"
      />

      {/* Cards grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {section.items.map((pkg, index) => {
          const Icon = pkg.icon;
          const isMiddle = section.items.length === 3 && index === 1;
          return (
            <article
              key={pkg.title}
              className={cn(
                "group relative flex h-full flex-col overflow-hidden rounded-3xl bg-background/80 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-950/80",
                isMiddle
                  ? "border-primary/30 shadow-primary/5 ring-1 ring-primary/10 hover:border-primary/40 hover:shadow-primary/10 dark:ring-primary/20"
                  : "border-border/60 hover:border-primary/20 dark:border-slate-800/80 dark:hover:border-primary/30"
              )}
            >
              {/* Subtle top gradient accent */}
              <div
                className={cn(
                  "absolute inset-x-0 top-0 h-1 rounded-t-3xl opacity-60 transition-opacity duration-300 group-hover:opacity-100",
                  isMiddle
                    ? "bg-gradient-to-r from-primary via-blue-500 to-primary"
                    : "bg-gradient-to-r from-primary/60 via-transparent to-primary/60"
                )}
                aria-hidden
              />

              <div className="flex flex-1 flex-col gap-6 p-6 pt-7">
                {/* Icon + price row */}
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={cn(
                      "inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground",
                      isMiddle && "bg-gradient-to-br from-primary/20 to-primary/5 dark:from-primary/30 dark:to-primary/10"
                    )}
                  >
                    <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 group-hover:[transform:rotateY(180deg)]" aria-hidden />
                  </div>
                  <span
                    className={cn(
                      "rounded-full px-3 py-1.5 text-sm font-semibold",
                      isMiddle
                        ? "bg-primary/15 text-primary dark:bg-primary/20"
                        : "bg-muted/50 text-foreground dark:bg-slate-800/80 dark:text-slate-200"
                    )}
                  >
                    {pkg.price}
                  </span>
                </div>

                {/* Title + description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground group-hover:text-primary/90 dark:group-hover:text-primary-foreground/90">
                    {pkg.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {pkg.description}
                  </p>
                </div>

                {/* Outcomes */}
                <div className="flex-1 rounded-2xl bg-muted/30 p-4 dark:bg-slate-900/50">
                  <BulletList
                    items={pkg.outcomes}
                    variant="compact"
                    className="space-y-2.5 text-sm [&_span:last-child]:leading-snug [&_span:last-child]:text-muted-foreground"
                  />
                </div>

                {/* CTA */}
                <Button
                  asChild
                  variant={isMiddle ? "default" : "outline"}
                  size="lg"
                  className={cn(
                    "w-full rounded-xl transition-all duration-300 group-hover:scale-[1.02]",
                    !isMiddle && "border-primary/30 hover:border-primary hover:bg-primary/5"
                  )}
                >
                  <Link href={contactHref} className="flex items-center justify-center gap-2">
                    {ctaLabel}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                  </Link>
                </Button>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
