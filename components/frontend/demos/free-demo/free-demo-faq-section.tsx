'use client';

import { useMemo, useState } from "react";

import { SectionTitle } from "@/components/ui/section-title";
import { FaqCard } from "@/components/frontend/common/faq-card";
import { Section } from "@/components/ui/section";
import type { Faq } from "./free-demo-content";

export type FaqSectionContent = {
  badge: string;
  heading: string;
  description: string;
  noFaqsText: string;
};

export function FreeDemoFaqSection({
  faqSection,
  faqs,
}: {
  faqSection: FaqSectionContent;
  faqs: Faq[];
}) {
  const t = faqSection;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const items = useMemo(
    () =>
      (faqs || []).map((faq) => ({
        id: faq.question,
        question: faq.question,
        answer: faq.answer,
      })),
    [faqs]
  );

  return (
    <Section variant="gradient" padding="lg" containerClassName="space-y-12">
      <SectionTitle badge={t.badge} heading={t.heading} description={t.description} maxWidth="3xl" />
      <div className="space-y-6 max-w-5xl mx-auto">
        <div className="rounded-2xl border border-border/50 bg-card/60 p-8 shadow-sm">
          <div className="space-y-3">
            {items.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <FaqCard
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={isOpen}
                  onToggle={() => setOpenFaqIndex(isOpen ? null : index)}
                />
              );
            })}
            {items.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                {t.noFaqsText}
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

