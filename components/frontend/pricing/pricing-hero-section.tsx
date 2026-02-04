import { FileCheck, Globe, Handshake } from "lucide-react";
import { HeroSection } from "@/components/frontend/common/hero-section";
import { Typography } from "@/components/ui/typography";
import { HERO_METRICS, VALUE_PROOFS } from "./constants";

interface PricingHeroSectionProps {
  contactHref: string;
}

export function PricingHeroSection({ contactHref }: PricingHeroSectionProps) {
  return (
    <HeroSection
      badgeText="Pricing navigator"
      highlightText="Engineer a transparent Cloud MLM investment."
      description="Align stakeholders with a transparent investment roadmap, delivery squad, and milestone governance."
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
