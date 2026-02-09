"use client";

import { useState } from "react";
import type { Locale } from "@/i18n-config";
import { getCrmMlmSoftwareContent } from "@/lib/crm-mlm-software";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { FaqCard } from "@/components/frontend/common/faq-card";

interface CrmMlmFaqSectionProps {
  locale: Locale;
}

export function CrmMlmFaqSection({ locale }: CrmMlmFaqSectionProps) {
  const c = getCrmMlmSoftwareContent(locale).faq;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  if (!c.items?.length) return null;

  return (
    <Section variant="gradient" padding="xl" containerClassName="space-y-12">
      <SectionTitle
        badge={c.badge}
        heading={c.heading}
        description={c.description}
        maxWidth="3xl"
      />
      <div className="space-y-8">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="rounded-2xl border border-border/50 bg-card/60 p-8 shadow-sm">
            <div className="space-y-3">
              {c.items.map((faq, faqIndex) => {
                const isOpen = openFaqIndex === faqIndex;
                return (
                  <FaqCard
                    key={faq.question}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={isOpen}
                    onToggle={() => handleFaqToggle(faqIndex)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
