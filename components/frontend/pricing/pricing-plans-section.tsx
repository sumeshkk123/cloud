import Link from "next/link";
import { ArrowUpRight, Building2, Rocket, TrendingUp, Zap } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { BulletList } from "@/components/ui/bullet-list";
import { cn } from "@/lib/utils";
import { PLANS } from "./constants";

const PLAN_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "Launch Lab": Rocket,
  "Growth Engine": TrendingUp,
  "Enterprise Blueprint": Building2,
};

const DEFAULT_HEADING = "Choose an investment path aligned to your expansion horizon";
const DEFAULT_DESCRIPTION =
  "Every tier includes ownership of the Cloud MLM platform, compensation validation, and six months of concierge support. Upgrade without friction as your field grows.";
const DEFAULT_OUTCOME_LABEL = "Outcome";

interface PricingPlansSectionProps {
  heading?: string;
  description?: string;
  outcomeLabel?: string;
}

export function PricingPlansSection({
  heading = DEFAULT_HEADING,
  description = DEFAULT_DESCRIPTION,
  outcomeLabel = DEFAULT_OUTCOME_LABEL,
}: PricingPlansSectionProps) {
  return (
    <Section variant="muted" padding="lg" id="pricing-form">
      <div className="space-y-14">
        <SectionTitle
          badge="Plans"
          heading={heading}
          description={description}
          maxWidth="3xl"
          headingClassName="normal-case"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((plan, index) => {
            const PlanIcon = PLAN_ICONS[plan.name] ?? Rocket;
            const isPopular = index === 1;
            return (
              <article
                key={plan.name}
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-background/80 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-950/80",
                  isPopular
                    ? "border-primary/30 shadow-primary/5 ring-1 ring-primary/10 hover:border-primary/40 hover:shadow-primary/10 dark:ring-primary/20"
                    : "border-border/60 hover:border-primary/20 dark:border-slate-800/80 dark:hover:border-primary/30"
                )}
              >
                {/* Top gradient accent */}
                <div
                  className={cn(
                    "absolute inset-x-0 top-0 h-1 rounded-t-3xl opacity-60 transition-opacity duration-300 group-hover:opacity-100",
                    isPopular
                      ? "bg-gradient-to-r from-primary via-blue-500 to-primary"
                      : "bg-gradient-to-r from-primary/60 via-transparent to-primary/60"
                  )}
                  aria-hidden
                />

                {/* Most popular ribbon */}
                {isPopular && (
                  <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-b-md bg-primary px-4 py-1.5 text-xs font-semibold uppercase text-primary-foreground shadow-sm">
                      <Zap className="h-3.5 w-3.5" aria-hidden />
                      Most popular
                    </span>
                  </div>
                )}

                <div className={cn("flex flex-1 flex-col gap-5 p-6", isPopular && "pt-10")}>
                  {/* Icon + delivery window (older content layout) */}
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={cn(
                        "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-105",
                        isPopular
                          ? "bg-gradient-to-br from-primary/20 to-primary/5 text-primary dark:from-primary/30 dark:to-primary/10"
                          : "bg-primary/10 text-primary dark:bg-primary/15"
                      )}
                    >
                      <PlanIcon className="h-6 w-6" aria-hidden />
                    </div>
                    <span className="rounded-full border border-border/60 bg-muted/30 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300">
                      {plan.deliveryWindow}
                    </span>
                  </div>

                  {/* Plan name */}
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {plan.name}
                  </h3>

                  {/* Price (prominent, older content) */}
                  <p
                    className={cn(
                      "text-2xl font-bold",
                      isPopular
                        ? "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
                        : "text-primary"
                    )}
                  >
                    {plan.price}
                  </p>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {plan.description}
                  </p>

                  {/* Outcome callout (older content) */}
                  <div
                    className={cn(
                      "rounded-xl border-l-4 border-primary/50 bg-muted/30 px-4 py-3.5 dark:bg-slate-900/50",
                      isPopular && "border-primary/70 bg-primary/5 dark:bg-primary/10"
                    )}
                  >
                    <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                      {outcomeLabel}
                    </p>
                    <p className="font-medium text-foreground">{plan.outcome}</p>
                  </div>

                  {/* Highlights only (older content – list is highlights, not outcome) */}
                  <div className="flex-1 rounded-2xl bg-muted/20 p-4 dark:bg-slate-900/40">
                    <BulletList
                      items={plan.highlights}
                      variant="compact"
                      className="space-y-2.5 text-sm [&_span:last-child]:leading-snug [&_span:last-child]:text-muted-foreground"
                    />
                  </div>

                  {/* CTA */}
                  <Button
                    asChild
                    variant={isPopular ? "default" : "outline"}
                    size="lg"
                    className={cn(
                      "w-full rounded-xl transition-all duration-300 group-hover:scale-[1.02]",
                      !isPopular && "border-primary/30 hover:border-primary hover:bg-primary/5"
                    )}
                  >
                    <Link
                      href={plan.cta.href}
                      className="flex items-center justify-center gap-2"
                    >
                      {plan.cta.label}
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden
                      />
                    </Link>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          All prices one-time licence. Custom and enterprise terms on request.
        </p>
      </div>
    </Section>
  );
}
