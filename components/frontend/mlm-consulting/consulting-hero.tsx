"use client";

import { HeroSection } from "@/components/frontend/common/hero-section";
import type { ConsultingHero as ConsultingHeroType } from "./types";

interface ConsultingHeroProps {
  hero: ConsultingHeroType;
  contactHref: string;
  featuresHref: string;
  title?: string;
  badge?: string;
  description?: string;
  onPrimaryCtaClick?: () => void;
}

export function ConsultingHero({
  hero,
  contactHref,
  featuresHref,
  title = hero.title,
  badge = hero.badge,
  description = hero.description,
  onPrimaryCtaClick,
}: ConsultingHeroProps) {
  const rightSlot = (
    <div className="grid gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
      {hero.highlights.map((highlight) => {
        const Icon = highlight.icon;
        return (
          <article
            key={highlight.title}
            className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-muted/30 p-4 dark:bg-slate-900/40"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h2 className="text-sm font-semibold text-foreground">{highlight.title}</h2>
            </div>
            <p className="text-xs text-muted-foreground">{highlight.description}</p>
          </article>
        );
      })}
    </div>
  );

  return (
    <HeroSection
      badgeText={badge}
      highlightText={title}
      description={description}
      primaryCta={
        onPrimaryCtaClick
          ? { label: hero.primaryCta, onClick: onPrimaryCtaClick }
          : { label: hero.primaryCta, href: contactHref }
      }
      secondaryCta={{ label: hero.secondaryCta, href: featuresHref, external: false }}
      rightSlot={rightSlot}
      centered={false}
      className="border border-border/60 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 py-20 dark:from-slate-950 dark:via-slate-950 dark:to-emerald-950/20"
    />
  );
}
