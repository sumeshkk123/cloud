"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { FaqCard } from "@/components/frontend/common/faq-card";
import type { PaymentGatewayCountryFaqItem } from "./types";

export interface PaymentGatewayCountryFaqSectionProps {
  /** Optional pill label above the heading (default: "FAQ"). */
  badge?: string;
  heading: string;
  description: string;
  items: PaymentGatewayCountryFaqItem[];
}

export function PaymentGatewayCountryFaqSection({ badge = "FAQ", heading, description, items }: PaymentGatewayCountryFaqSectionProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <Section variant="gradient" padding="lg">
      <div className="space-y-12">
        <SectionTitle
          badge={badge}
          heading={heading}
          description={description}
          centered={false}
          maxWidth="3xl"
        />
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-border/50 bg-card/60 p-8 shadow-sm">
            <div className="space-y-3">
              {items.map((faq, faqIndex) => (
                <FaqCard
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaqIndex === faqIndex}
                  onToggle={() => handleFaqToggle(faqIndex)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
