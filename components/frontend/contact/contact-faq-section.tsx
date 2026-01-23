'use client';

import { useState } from "react";
import type { Locale } from "@/i18n-config";
import { SectionTitle } from "@/components/ui/section-title";
import { FaqCard } from "@/components/frontend/common/faq-card";
import { Section } from "@/components/ui/section";
import { getContactContent } from "@/lib/contact";

export type Faq = {
  question: string;
  answer: string;
};

export function ContactFaqSection({ locale }: { locale: Locale }) {
  const content = getContactContent(locale);
  const t = content.faqSection;
  const faqs = t.faqs;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <Section variant="gradient" padding="lg" containerClassName="space-y-12">
      <SectionTitle
        badge={t.badge || "FAQ"}
        heading={t.heading}
        description={t.description}
        maxWidth="3xl"
      />
      <div className="space-y-6 max-w-5xl mx-auto">
        <div className="rounded-2xl border border-border/50 bg-card/60 p-8 shadow-sm">
          <div className="space-y-3">
            {faqs.map((faq, faqIndex) => {
              const isOpen = openFaqIndex === faqIndex;
              return (
                <FaqCard
                  key={faqIndex}
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
    </Section>
  );
}
