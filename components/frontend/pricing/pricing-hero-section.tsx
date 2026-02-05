import { FileCheck, Globe, Handshake } from "lucide-react";
import { HeroSection } from "@/components/frontend/common/hero-section";
import { Typography } from "@/components/ui/typography";
import { getPageTitle } from "@/lib/api/page-titles";
import type { Locale } from "@/i18n-config";
import { HERO_METRICS, VALUE_PROOFS } from "./constants";

const FALLBACK_BADGE = "Pricing navigator";
const FALLBACK_HIGHLIGHT = "Engineer a transparent Cloud MLM investment.";
const FALLBACK_DESCRIPTION = "Align stakeholders with a transparent investment roadmap, delivery squad, and milestone governance.";

interface PricingHeroSectionProps {
  locale: Locale;
  contactHref: string;
  pageTitleData?: Awaited<ReturnType<typeof getPageTitle>> | null;
}

export async function PricingHeroSection({
  locale,
  contactHref,
  pageTitleData: propPageTitleData,
}: PricingHeroSectionProps) {
  const pageTitleData = propPageTitleData ?? (await getPageTitle("pricing", locale));

  return (
    <HeroSection
      badgeText={pageTitleData?.pagePill ?? FALLBACK_BADGE}
      highlightText={pageTitleData?.title ?? FALLBACK_HIGHLIGHT}
      description={pageTitleData?.sectionSubtitle ?? FALLBACK_DESCRIPTION}
      primaryCta={{
        label: "Open pricing estimator",
        href: "#pricing-builder",
      }}
      secondaryCta={{
        label: "Book pricing advisory",
        href: contactHref,
      }}
      metrics={HERO_METRICS.map((metric) => ({
        label: metric.title,
        value: metric.value,
        detail: metric.detail,
      }))}
      rightSlot={
        <div className="space-y-4">
          <Typography as="p" variant="small" textColor="muted">
            Advisors reply with a procurement-ready brief within one business day.
          </Typography>
          <div className="flex flex-col gap-4 ">
            <Typography as="p" variant="small" className="font-semibold">
              Every engagement includes:
            </Typography>
            <ul className="flex flex-wrap items-center  gap-x-6 gap-y-2">
              {VALUE_PROOFS.map((proof) => {
                const Icon = proof.icon;
                return (
                  <li key={proof.title} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-primary" aria-hidden />
                    <Typography as="span" variant="small" textColor="muted">
                      {proof.title}
                    </Typography>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      }
    />
  );
}
