'use client';

import { useState } from "react";
import type { Locale } from "@/i18n-config";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { FaqCard } from "@/components/frontend/common/faq-card";

interface MlmCompaniesFaqSectionProps {
    locale: Locale;
    faqContent: {
        badge: string;
        heading: string;
        description: string;
        items: Array<{
            question: string;
            answer: string;
        }>;
    };
}

export function MlmCompaniesFaqSection({ locale, faqContent }: MlmCompaniesFaqSectionProps) {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const handleFaqToggle = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <Section variant="gradient" padding="lg" className="relative isolate !overflow-visible">
            <div className="container space-y-12">
                <SectionTitle
                    badge={faqContent.badge}
                    heading={faqContent.heading}
                    description={faqContent.description}
                    centered={true}
                    maxWidth="3xl"
                />
                <div className="space-y-6 max-w-5xl mx-auto">
                    <div className="rounded-2xl border border-border/50 bg-card/60 p-8 shadow-sm">
                        <div className="space-y-3">
                            {faqContent.items.map((item, index) => {
                                const isOpen = openFaqIndex === index;
                                return (
                                    <FaqCard
                                        key={index}
                                        question={item.question}
                                        answer={item.answer}
                                        isOpen={isOpen}
                                        onToggle={() => handleFaqToggle(index)}
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
