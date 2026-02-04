"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { FaqCard } from "@/components/frontend/common/faq-card";
import { FAQS } from "./constants";

export function PricingFaqSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <Section variant="gradient" padding="lg">
      <div className="container space-y-12">
        <SectionTitle
          badge="FAQ"
          heading="Frequently asked questions"
          description="Straight answers to the questions procurement, finance, and legal teams ask most often."
          maxWidth="3xl"
          centered
        />
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-border/50 bg-card/60 p-8 shadow-sm">
            <div className="space-y-3">
              {FAQS.map((faq, faqIndex) => {
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
