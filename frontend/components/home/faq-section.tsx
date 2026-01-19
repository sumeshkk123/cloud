'use client';

import { useState } from "react";
import Link from "next/link";
import type { ComponentType } from "react";
import * as RemixIcon from "@remixicon/react";
import type { Locale } from "@/i18n-config";
import type { HomepageContent } from "@/types/homepage";
import { SectionTitle } from "@/components/ui/section-title";
import { FaqCard } from "@/components/common/faq-card";
import { InfoCtaBox } from "@/components/ui/info-cta-box";
import { resolveIcon } from "./utils";
import { localizedHref } from "./utils";
import { Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function FaqSection({ locale, data }: { locale: Locale; data: HomepageContent["faq"] }) {
  const categories = data?.categories ?? [];
  const [activeTab, setActiveTab] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const activeCategory = categories[activeTab];

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-900 py-24">
      <div className="container space-y-12">
        <SectionTitle
          badge={data?.badgeLabel ?? "Frequently asked questions"}
          heading={data?.heading ?? "Everything you need to evaluate Cloud MLM Software"}
          description={data?.description ?? "Answers drawn from onboarding conversations, support tickets, and the live knowledge base so you can plan migrations and demos with confidence."}
          maxWidth="3xl"
        />
        <div className="space-y-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-border/50 pb-4">
            {categories.map((category, index) => {
              const Icon = resolveIcon(category.icon, Sparkles);
              const isActive = index === activeTab;
              return (
                <button
                  key={category.title}
                  onClick={() => {
                    setActiveTab(index);
                    setOpenFaqIndex(0);
                  }}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                    isActive
                      ? "border-2 border-primary bg-primary/10 text-primary shadow-sm"
                      : "border-2 border-transparent bg-primary/5 text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content */}
          {activeCategory && (
            <div className="space-y-6 max-w-5xl mx-auto">
              <div className="rounded-2xl border border-border/50 bg-card/60 p-8 shadow-sm ">

                <div className="space-y-3">
                  {activeCategory.faqs.slice(0, 5).map((faq, faqIndex) => {
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

              {/* CTA Button */}

              <InfoCtaBox
                icon={RemixIcon.RiQuestionAnswerLine}
                text="Find answers to common questions about our MLM software platform."
                buttonText="Explore all FAQs"
                buttonHref={data?.cta ? localizedHref(locale, data.cta.href) : "/faq"}
              />
            </div>
          )}

        </div>
      </div>

    </section>
  );
}
