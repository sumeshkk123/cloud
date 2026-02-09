import { HeroSection } from "@/components/frontend/common/hero-section";
import type { PricingSubHero } from "./types";

/** Split title so a key phrase gets the gradient highlight (e.g. product/module name before "pricing"). */
function parseTitleForHighlight(
  title: string
): { beforeText?: string; highlightText: string; afterText?: string } {
  const lower = title.trim();
  const pricingIndex = lower.search(/\bpricing\b/i);
  if (pricingIndex > 0) {
    const highlight = title.slice(0, pricingIndex).trim();
    const after = title.slice(pricingIndex).trim();
    return { highlightText: highlight, afterText: after || undefined };
  }
  const words = title.split(/\s+/).filter(Boolean);
  if (words.length <= 1) return { highlightText: title || "" };
  const highlightWords = words.length <= 3 ? words.slice(0, 1) : words.slice(0, 2);
  return {
    highlightText: highlightWords.join(" "),
    afterText: words.slice(highlightWords.length).join(" "),
  };
}

interface PricingSubHeroProps {
  content: PricingSubHero;
  contactHref: string;
  secondaryHref: string;
  variant?: "default" | "dark";
}

export function PricingSubPageHero({
  content,
  contactHref,
  secondaryHref,
  variant = "default",
}: PricingSubHeroProps) {
  const isDark = variant === "dark";
  const titleParts = parseTitleForHighlight(content.title);

  return (
    <HeroSection
      badgeText={content.badge}
      beforeText={titleParts.beforeText}
      highlightText={titleParts.highlightText}
      afterText={titleParts.afterText}
      description={content.description}
      primaryCta={{
        label: content.primaryCta,
        href: contactHref,
      }}
      secondaryCta={{
        label: content.secondaryCta,
        href: secondaryHref,
      }}
      metrics={[]}
      rightSlot={
        <div className="grid gap-4 sm:grid-cols-2">
          {content.metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <article
                key={metric.label}
                className={
                  isDark
                    ? "flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur"
                    : "flex flex-col gap-3 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur dark:bg-slate-950/70"
                }
              >
                <span
                  className={
                    isDark
                      ? "inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white"
                      : "inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"
                  }
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p
                    className={
                      isDark
                        ? "text-xs font-semibold uppercase tracking-wide text-indigo-200/80"
                        : "text-xs font-semibold uppercase tracking-wide text-primary/80"
                    }
                  >
                    {metric.label}
                  </p>
                  <p
                    className={
                      isDark
                        ? "mt-1 text-2xl font-semibold"
                        : "mt-1 text-2xl font-semibold text-foreground"
                    }
                  >
                    {metric.value}
                  </p>
                </div>
                <p
                  className={
                    isDark
                      ? "text-sm text-slate-100/70"
                      : "text-sm text-muted-foreground"
                  }
                >
                  {metric.description}
                </p>
              </article>
            );
          })}
        </div>
      }
      className={
        isDark
          ? "border-b border-border/60 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 py-20 text-white dark:text-white"
          : "bg-gradient-to-br from-primary/5 via-background to-sky-50 py-20 dark:from-slate-950 dark:via-slate-950 dark:to-sky-950"
      }
    />
  );
}
