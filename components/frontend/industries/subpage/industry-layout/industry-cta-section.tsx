"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { HeroSectionPopup } from "@/components/frontend/common/hero-section-popup";
import { useToast } from "@/components/ui/toast";
import type { IndustryCtaSection as IndustryCtaSectionType } from "../types";

const PRIMARY_CTA_LABEL = "Talk to a specialist";
const SECONDARY_CTA_LABEL = "View pricing";

interface IndustryCtaSectionProps {
  content: IndustryCtaSectionType;
  contactHref: string;
  demoHref: string;
  /** When set, primary CTA opens popup with source "CTA - industry/{industrySlug}" and secondary links to pricing. */
  industrySlug?: string | null;
  /** Link for "View pricing" when industrySlug is set. */
  pricingHref?: string;
  locale?: string;
}

export function IndustryCtaSection({
  content,
  contactHref,
  demoHref,
  industrySlug,
  pricingHref,
  locale = "en",
}: IndustryCtaSectionProps) {
  const [ctaPopupOpen, setCtaPopupOpen] = useState(false);
  const { showToast, ToastComponent } = useToast();
  const { heading, description, bringToWorkshop } = content;

  const ctaSource = industrySlug ? `CTA - industry/${industrySlug}` : "CTA - industry";
  const secondaryHref = pricingHref ?? contactHref;

  return (
    <>
      {ToastComponent}
      <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary via-blue-500 via-purple-500 to-pink-500 p-10 text-white shadow-xl">
        <div className="relative space-y-6">
          <Typography as="h2" variant="h2" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {heading}
          </Typography>
          <Typography variant="p" className="text-sm leading-relaxed text-white/95">
            {description}
          </Typography>
          <div className="flex flex-wrap gap-4">
            <Button
              type="button"
              size="lg"
              onClick={() => setCtaPopupOpen(true)}
              className="group rounded-xl  font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {PRIMARY_CTA_LABEL}
              <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
            </Button>
            <Button
              asChild
              type="button"
              size="lg"
              className="group rounded-xl border-2 border-white bg-white  font-semibold text-primary transition-all duration-300 hover:scale-105 hover:bg-white/95 hover:text-primary"
            >
              <Link href={secondaryHref}>
                {SECONDARY_CTA_LABEL}
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
              </Link>
            </Button>
          </div>
          {bringToWorkshop && (
            <div className="space-y-3 rounded-3xl border border-white/30 bg-white/10 p-6 backdrop-blur">
              <Typography variant="small" className="font-semibold uppercase tracking-wide text-white/90">
                {bringToWorkshop.label}
              </Typography>
              <ul className="space-y-2">
                {bringToWorkshop.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              {bringToWorkshop.footnote && (
                <Typography variant="small" className="text-xs text-white/80">
                  {bringToWorkshop.footnote}
                </Typography>
              )}
            </div>
          )}
        </div>
      </div>
      <HeroSectionPopup
        isOpen={ctaPopupOpen}
        onClose={() => setCtaPopupOpen(false)}
        source={ctaSource}
        notes={industrySlug ? `Enquiry from CTA - industry/${industrySlug}` : "Enquiry from CTA - industry"}
        locale={locale}
        onSuccess={(message) => showToast(message, "success")}
      />
    </>
  );
}
