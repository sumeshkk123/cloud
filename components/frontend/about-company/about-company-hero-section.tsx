import { Sparkles } from "lucide-react";
import { HeroSection, type HeroMetric } from "@/components/frontend/common/hero-section";
import { getAboutCompanyContent } from "@/lib/about-company";
import type { Locale } from "@/i18n-config";

interface AboutCompanyHeroSectionProps {
  locale: Locale;
  contactHref: string;
  demoHref: string;
}

export function AboutCompanyHeroSection({ locale, contactHref, demoHref }: AboutCompanyHeroSectionProps) {
  const content = getAboutCompanyContent(locale).hero;
  const metrics: HeroMetric[] = content.metrics.map((m) => ({
    label: m.label,
    value: m.value,
    detail: m.detail,
  }));

  return (
    <HeroSection
      badgeText={content.badgeText}
      badgeIcon={<Sparkles className="h-4 w-4" aria-hidden />}
      highlightText={content.highlightText}
      afterText={content.afterText}
      description={content.description}
      primaryCta={{
        label: content.primaryCta,
        href: contactHref,
      }}
      secondaryCta={{
        label: content.secondaryCta,
        href: demoHref,
        external: true,
      }}
      metrics={metrics}
      className="bg-gradient-to-br from-sky-50 via-white to-emerald-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
      centered={false}
    />
  );
}
