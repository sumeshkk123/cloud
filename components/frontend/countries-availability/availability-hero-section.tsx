"use client";

import type { ComponentType } from "react";
import * as RemixIcon from "@remixicon/react";
import { Globe2, Network, ShieldCheck } from "lucide-react";
import { HeroSection } from "@/components/frontend/common/hero-section";
import type { AvailabilityListContent } from "@/lib/availability-list-content";

type IconType = ComponentType<{ className?: string }>;
type HeroHighlight = AvailabilityListContent["hero"]["highlights"][number];

const HIGHLIGHT_ICONS: IconType[] = [Globe2, ShieldCheck, Network];

/** Same icon as common Badge component (ui/badge) */
const BADGE_ICON = RemixIcon.RiCloudFill;

export interface AvailabilityHeroSectionProps {
  contactHref: string;
  demoHref: string;
  /** When set, primary CTA opens this instead of linking to contact (e.g. open demo modal). */
  onPrimaryCtaClick?: () => void;
  content: AvailabilityListContent["hero"];
}

export function AvailabilityHeroSection({ contactHref, demoHref, onPrimaryCtaClick, content }: AvailabilityHeroSectionProps) {
  const rightSlot = (
    <aside className="grid gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
      {content.highlights.map((highlight: HeroHighlight, i: number) => {
        const Icon = HIGHLIGHT_ICONS[i] ?? Globe2;
        return (
          <article
            key={highlight.title}
            className="group flex flex-col gap-3 rounded-2xl border border-border/60 bg-muted/30 p-4 dark:bg-slate-900/40"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 group-hover:[transform:rotateY(180deg)]" aria-hidden />
              </span>
              <h2 className="text-sm font-semibold text-foreground">{highlight.title}</h2>
            </div>
            <p className="text-xs text-muted-foreground">{highlight.description}</p>
          </article>
        );
      })}
    </aside>
  );

  return (
    <HeroSection
      badgeText={content.badgeText}
      badgeIcon={<BADGE_ICON className="h-3.5 w-3.5 text-primary" aria-hidden />}
      highlightText={content.highlightText}
      description={content.description}
      primaryCta={
        onPrimaryCtaClick
          ? { label: content.primaryCtaLabel, onClick: onPrimaryCtaClick }
          : { label: content.primaryCtaLabel, href: contactHref }
      }
      secondaryCta={{ label: content.secondaryCtaLabel, href: demoHref }}
      rightSlot={rightSlot}
    />
  );
}
