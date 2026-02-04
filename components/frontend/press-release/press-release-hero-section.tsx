import { Megaphone } from "lucide-react";
import { HeroSection } from "@/components/frontend/common/hero-section";
import { Typography } from "@/components/ui/typography";
import { FEATURED_RELEASE } from "./constants";

interface PressReleaseHeroSectionProps {
  contactHref: string;
}

export function PressReleaseHeroSection({ contactHref }: PressReleaseHeroSectionProps) {
  return (
    <HeroSection
      badgeText="Press room"
      badgeIcon={<Megaphone className="h-4 w-4" aria-hidden />}
      highlightText="Highlights, milestones, and perspectives"
      afterText="from Cloud MLM Software."
      description="Explore analyst coverage, partnership announcements, and product innovations shaping the future of ethical, data-driven network marketing."
      primaryCta={{
        label: "Read the latest release",
        href: FEATURED_RELEASE.href,
      }}
      secondaryCta={{
        label: "Connect with media relations",
        href: contactHref,
      }}
      rightSlot={
        <div className="relative space-y-6 rounded-3xl border border-border/60 bg-card/80 p-6 shadow-lg backdrop-blur-sm">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="flex items-center justify-between">
            <Typography as="span" variant="small" textColor="muted" className="uppercase tracking-[0.3em]">
              Featured announcement
            </Typography>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold text-primary">
              <Megaphone className="h-3.5 w-3.5" aria-hidden />
              Analyst spotlight
            </span>
          </div>
          <div className="relative space-y-3">
            <Typography as="p" variant="small" textColor="primary" className="font-semibold uppercase tracking-[0.3em]">
              {FEATURED_RELEASE.date}
            </Typography>
            <Typography as="h2" variant="h3">
              {FEATURED_RELEASE.title}
            </Typography>
            <Typography as="p" variant="small" textColor="muted">
              {FEATURED_RELEASE.summary}
            </Typography>
          </div>
          <div className="flex flex-wrap gap-2">
            {FEATURED_RELEASE.tags.map((tag) => (
              <Typography
                key={tag}
                as="span"
                variant="small"
                className="rounded-full border border-border/60 bg-muted/50 px-3 py-1 uppercase tracking-[0.3em] text-primary/80"
              >
                {tag}
              </Typography>
            ))}
          </div>
        </div>
      }
    />
  );
}
