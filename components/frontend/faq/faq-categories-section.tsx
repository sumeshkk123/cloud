'use client';

import { useState } from "react";
import { Typography } from "@/components/ui/typography";
import { Sparkles } from "lucide-react";
import { resolveIcon } from "@/components/frontend/home/utils";
import { FaqCard } from "@/components/frontend/common/faq-card";

interface FaqItem {
    question: string;
    answer: string;
}

interface FaqGroup {
    id: string;
    label: string;
    icon?: string | null;
    items: FaqItem[];
}

interface FaqCategoriesSectionProps {
    groups: FaqGroup[];
}

export function FaqCategoriesSection({ groups }: FaqCategoriesSectionProps) {
    // Track which FAQ is open per group: { groupId: faqIndex }
    const [openFaqs, setOpenFaqs] = useState<Record<string, number | null>>({});

    const handleFaqToggle = (groupId: string, faqIndex: number) => {
        setOpenFaqs((prev) => ({
            ...prev,
            [groupId]: prev[groupId] === faqIndex ? null : faqIndex,
        }));
    };

    return (
        <div className="space-y-12">
            {groups.map((group) => {
                const Icon = resolveIcon(group.icon, Sparkles);
                const openFaqIndex = openFaqs[group.id] ?? null;

                return (
                    <section key={group.id} id={group.id} className="space-y-6 scroll-mt-24">
                        <div className="flex flex-wrap items-center gap-4">
                            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                                <Icon className="h-5 w-5" aria-hidden />
                            </span>
                            <div>
                                <Typography variant="h5" as="h5" className="font-semibold">
                                    {group.label}
                                </Typography>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-border/50 bg-card/60 p-6 md:p-8 shadow-sm">
                            {group.items.length > 0 ? (
                                <div className="space-y-3">
                                    {group.items.map((item, itemIndex) => (
                                        <FaqCard
                                            key={`${group.id}-${itemIndex}`}
                                            question={item.question}
                                            answer={item.answer}
                                            isOpen={openFaqIndex === itemIndex}
                                            onToggle={() => handleFaqToggle(group.id, itemIndex)}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="py-12 text-center">
                                    <Typography variant="small" textColor="muted">
                                        No FAQs available in this category.
                                    </Typography>
                                </div>
                            )}
                        </div>
                    </section>
                );
            })}
        </div>
    );
}
