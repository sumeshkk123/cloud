"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { FaqCard } from "@/components/frontend/common/faq-card";
import type { PlanFeatureFaq } from "./types";

interface PlanFaqProps {
  faq: PlanFeatureFaq;
}

export function PlanFaq({ faq }: PlanFaqProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!faq.items?.length) return null;

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <Section variant="primary" padding="md" containerClassName="space-y-12">
      <SectionTitle
        badge={faq.badge ?? "FAQ"}
        heading={faq.heading}
        description={faq.description ?? undefined}
        maxWidth="3xl"
      />
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="rounded-2xl border border-border/50 bg-card/60 p-8 shadow-sm">
          <div className="space-y-3">
            {faq.items.map((item, faqIndex) => {
              const isOpen = openFaqIndex === faqIndex;
              return (
                <FaqCard
                  key={`${item.question}-${faqIndex}`}
                  question={item.question}
                  answer={item.answer}
                  isOpen={isOpen}
                  onToggle={() => handleFaqToggle(faqIndex)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
