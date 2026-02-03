'use client';

import { useState, useEffect } from "react";
import type { Locale } from "@/i18n-config";
import { SectionTitle } from "@/components/ui/section-title";
import { FaqCard } from "@/components/frontend/common/faq-card";
import { Section } from "@/components/ui/section";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FeaturesFaqSectionProps {
  locale: Locale;
}

export function FeaturesFaqSection({ locale }: FeaturesFaqSectionProps) {
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        setIsLoading(true);
        const timestamp = Date.now();

        const res = await fetch(`/api/features-faq?locale=${encodeURIComponent(locale)}&_t=${timestamp}`, {
          cache: 'no-store',
          headers: { 'Cache-Control': 'no-cache' },
        });

        if (res.ok) {
          const data = await res.json();
          const fetchedFaqs = (data?.items || data || []).map((item: any) => ({
            id: item.id || '',
            question: item.question || '',
            answer: item.answer || '',
          }));
          setFaqs(fetchedFaqs);
          // Open first FAQ by default if available
          if (fetchedFaqs.length > 0) {
            setOpenFaqIndex(0);
          }
        }
      } catch (error) {
        console.error('Error loading feature FAQs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFaqs();
  }, [locale]);

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <Section variant="gradient" padding="lg" containerClassName="space-y-12">
      <SectionTitle
        badge="FAQs"
        heading="Frequently asked questions"
        description="Answers to the most common questions from evaluating teams, finance leaders, and field organisations considering Cloud MLM Software."
        maxWidth="3xl"
      />
      <div className="space-y-6 max-w-5xl mx-auto">
        {isLoading ? (
          <div className="text-center py-8 text-muted-foreground">
            Loading FAQs...
          </div>
        ) : (
          <>
            <div className="rounded-2xl border border-border/50 bg-card/60 p-8 shadow-sm">
              <div className="space-y-3">
                {faqs.map((faq, faqIndex) => {
                  const isOpen = openFaqIndex === faqIndex;
                  return (
                    <FaqCard
                      key={faq.id}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={isOpen}
                      onToggle={() => handleFaqToggle(faqIndex)}
                    />
                  );
                })}
                {faqs.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    No FAQs available at the moment.
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </Section>
  );
}
