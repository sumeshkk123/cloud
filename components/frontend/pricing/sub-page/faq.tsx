"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { FaqCard } from "@/components/frontend/common/faq-card";
import type { PricingSubFaqSection } from "./types";

export function PricingSubPageFaq({ section }: { section: PricingSubFaqSection }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <Section variant="primary" padding="md" containerClassName="space-y-12">
      <SectionTitle
        badge="FAQ"
        heading={section.heading}
        description={section.description ?? undefined}
        maxWidth="3xl"
      />
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="rounded-2xl border border-border/50 bg-card/60 p-8 shadow-sm">
          <div className="space-y-3">
            {section.items.map((faq, faqIndex) => {
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
            {section.items.length === 0 && (
              <div className="py-8 text-center text-muted-foreground">
                No FAQs available.
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
