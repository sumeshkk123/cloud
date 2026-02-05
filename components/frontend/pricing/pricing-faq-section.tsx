"use client";

import { useState } from "react";
import * as RemixIcon from "@remixicon/react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { FaqCard } from "@/components/frontend/common/faq-card";
import { InfoCtaBox } from "@/components/ui/info-cta-box";
import type { PricingContent } from "@/lib/pricing-content";

interface PricingFaqSectionProps {
  content: PricingContent["faq"];
  /** Optional: link for the CTA below the FAQ list (e.g. contact or FAQs page). When set, shows the info CTA box like the home page. */
  ctaHref?: string;
  /** Optional: text for the info CTA box. */
  infoBoxText?: string;
  /** Optional: button label for the info CTA box. */
  ctaButtonText?: string;
}

export function PricingFaqSection({
  content,
  ctaHref,
  infoBoxText = "Have more questions about pricing? Our team can walk you through plans and the estimator.",
  ctaButtonText = "Contact us",
}: PricingFaqSectionProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <Section variant="gradient" padding="xl" containerClassName="space-y-12">
      <SectionTitle
        badge={content.badge}
        heading={content.heading}
        description={content.description}
        maxWidth="3xl"
      />
      <div className="space-y-8">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="rounded-2xl border border-border/50 bg-card/60 p-8 shadow-sm">
            <div className="space-y-3">
              {content.items.map((faq, faqIndex) => {
                const isOpen = openFaqIndex === faqIndex;
                return (
                  <FaqCard
                    key={`${faq.question}-${faqIndex}`}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={isOpen}
                    onToggle={() => handleFaqToggle(faqIndex)}
                  />
                );
              })}
            </div>
          </div>

          {ctaHref && (
            <InfoCtaBox
              icon={RemixIcon.RiQuestionAnswerLine}
              text={infoBoxText}
              buttonText={ctaButtonText}
              buttonHref={ctaHref}
            />
          )}
        </div>
      </div>
    </Section>
  );
}
