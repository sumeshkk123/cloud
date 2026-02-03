'use client';

import { useState, useEffect } from "react";
import type { Locale } from "@/i18n-config";
import { SectionTitle } from "@/components/ui/section-title";
import { FaqCard } from "@/components/frontend/common/faq-card";
import { Section } from "@/components/ui/section";
import { getContactContent } from "@/lib/contact";
import { Typography } from "@/components/ui/typography";

export type Faq = {
  question: string;
  answer: string;
};

interface ContactFaq {
  id: string;
  question: string;
  answer: string;
  locale: string;
}

export function ContactFaqSection({ locale }: { locale: Locale }) {
  const content = getContactContent(locale);
  const t = content.faqSection;
  const [faqs, setFaqs] = useState<ContactFaq[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/contact-faq?locale=${locale}`, { cache: 'no-store' });
        if (response.ok) {
          const data = await response.json();
          setFaqs(Array.isArray(data) ? data : []);
          // Open first FAQ if available
          if (data.length > 0) {
            setOpenFaqIndex(0);
          }
        } else {
          setFaqs([]);
        }
      } catch (error) {
        console.error('[ContactFaqSection] Error fetching contact FAQs:', error);
        setFaqs([]);
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
        badge={t.badge || "FAQ"}
        heading={t.heading}
        description={t.description}
        maxWidth="3xl"
      />
      <div className="space-y-6 max-w-5xl mx-auto">
        {isLoading ? (
          <div className="rounded-2xl border border-border/50 bg-card/60 p-8 shadow-sm">
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse rounded-xl border border-border/50 bg-background/60 p-5">
                  <div className="h-6 bg-muted rounded w-3/4 mb-3" />
                  <div className="h-4 bg-muted rounded w-full" />
                </div>
              ))}
            </div>
          </div>
        ) : faqs.length > 0 ? (
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
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-border/50 bg-card/60 p-8 shadow-sm">
            <div className="text-center py-8">
              <Typography variant="p" textColor="muted">
                {t.noFaqsMessage || "No FAQs available yet."}
              </Typography>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
