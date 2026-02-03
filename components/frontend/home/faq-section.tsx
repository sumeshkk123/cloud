'use client';

import { useState, useEffect } from "react";
import * as RemixIcon from "@remixicon/react";
import type { Locale } from "@/i18n-config";
import type { HomepageContent } from "@/types/homepage";
import { SectionTitle } from "@/components/ui/section-title";
import { FaqCard } from "@/components/frontend/common/faq-card";
import { InfoCtaBox } from "@/components/ui/info-cta-box";
import { resolveIcon } from "./utils";
import { localizedHref } from "./utils";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  categoryId?: string | null;
}

interface FaqCategory {
  id: string;
  name: string;
  icon?: string | null;
  faqs: FaqItem[];
}

export function FaqSection({ locale, data }: { locale: Locale; data: HomepageContent["faq"] }) {
  // Initialize with fallback data immediately for fast rendering
  const getFallbackCategories = (): FaqCategory[] => {
    if (!data?.categories) return [];
    return data.categories.map((cat, idx) => ({
      id: `fallback-${idx}`,
      name: cat.title || '',
      icon: cat.icon || null,
      faqs: (cat.faqs || []).map((faq, faqIdx) => ({
        id: `faq-${idx}-${faqIdx}`,
        question: faq.question || '',
        answer: faq.answer || '',
        categoryId: `fallback-${idx}`,
      })),
    }));
  };

  const [categories, setCategories] = useState<FaqCategory[]>(getFallbackCategories());
  const [activeTab, setActiveTab] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isLoading, setIsLoading] = useState(false);
  const activeCategory = categories[activeTab];

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        setIsLoading(true);
        const timestamp = Date.now();

        // Fetch FAQs and categories in parallel for faster loading
        const [faqsRes, categoriesRes] = await Promise.all([
          fetch(`/api/faq?locale=${encodeURIComponent(locale)}&_t=${timestamp}`, {
            cache: 'no-store',
            headers: { 'Cache-Control': 'no-cache' },
          }),
          fetch(`/api/faq-categories?locale=${encodeURIComponent(locale)}&_t=${timestamp}`, {
            cache: 'no-store',
          }),
        ]);

        let faqs: FaqItem[] = [];
        if (faqsRes.ok) {
          const faqsData = await faqsRes.json();
          faqs = (faqsData?.items || []).map((item: any) => ({
            id: item.id || '',
            question: item.question || '',
            answer: item.answer || '',
            categoryId: item.categoryId || null,
          }));
        }

        let categoriesData: any[] = [];
        if (categoriesRes.ok) {
          const catData = await categoriesRes.json();
          categoriesData = Array.isArray(catData) ? catData : [];
        }

        // Collect all unique category IDs (from categories API + from FAQs)
        const categoryIdsFromFaqs = new Set<string>();
        faqs.forEach(faq => {
          if (faq.categoryId) categoryIdsFromFaqs.add(faq.categoryId);
        });

        const allCategoryIds = new Set<string>();
        categoriesData.forEach(cat => allCategoryIds.add(cat.id));
        categoryIdsFromFaqs.forEach(id => allCategoryIds.add(id));

        // Fetch all category translations in ONE request using ids parameter
        let allCategoryTranslations: any[] = [];
        if (allCategoryIds.size > 0) {
          try {
            const idsParam = Array.from(allCategoryIds).join(',');
            const transRes = await fetch(`/api/faq-categories?ids=${encodeURIComponent(idsParam)}&locale=${encodeURIComponent(locale)}&_t=${timestamp}`, {
              cache: 'no-store',
            });
            if (transRes.ok) {
              const transData = await transRes.json();
              allCategoryTranslations = Array.isArray(transData) ? transData : [];
            }
          } catch (error) {
            // Ignore errors, continue with available data
          }
        }

        // Create categories map
        const categoriesMap = new Map<string, FaqCategory>();

        // Process all category IDs
        Array.from(allCategoryIds).forEach((categoryId) => {
          // Find category in requested locale first, then fallback to English
          let category = categoriesData.find(cat => cat.id === categoryId && cat.locale === locale) ||
            categoriesData.find(cat => cat.id === categoryId && cat.locale === 'en') ||
            categoriesData.find(cat => cat.id === categoryId) ||
            allCategoryTranslations.find(c => c.id === categoryId && c.locale === locale) ||
            allCategoryTranslations.find(c => c.id === categoryId && c.locale === 'en') ||
            allCategoryTranslations.find(c => c.id === categoryId);

          // Get icon from English version (icon is shared across all locales)
          const englishCategory = allCategoryTranslations.find(c => c.id === categoryId && c.locale === 'en') ||
            categoriesData.find(c => c.id === categoryId && c.locale === 'en');
          const categoryIcon = englishCategory?.icon || category?.icon || null;

          if (category) {
            categoriesMap.set(categoryId, {
              id: categoryId,
              name: category.name || '',
              icon: categoryIcon,
              faqs: [],
            });
          } else if (englishCategory) {
            // Use English version as fallback
            categoriesMap.set(categoryId, {
              id: categoryId,
              name: englishCategory.name || `Category ${categoryId}`,
              icon: categoryIcon,
              faqs: [],
            });
          }
        });

        // Add FAQs to their categories
        faqs.forEach((faq) => {
          if (faq.categoryId && categoriesMap.has(faq.categoryId)) {
            categoriesMap.get(faq.categoryId)!.faqs.push(faq);
          } else {
            // If FAQ has no category, add to "Uncategorized"
            if (!categoriesMap.has('uncategorized')) {
              categoriesMap.set('uncategorized', {
                id: 'uncategorized',
                name: data?.uncategorizedCategoryName || 'General',
                icon: null,
                faqs: [],
              });
            }
            categoriesMap.get('uncategorized')!.faqs.push(faq);
          }
        });

        // Convert map to array - show all categories even if they have no FAQs
        const categoriesArray = Array.from(categoriesMap.values())
          .sort((a, b) => a.name.localeCompare(b.name));

        // Update categories if we have data from database
        if (categoriesArray.length > 0) {
          setCategories(categoriesArray);
        } else if (data?.categories) {
          // Keep fallback data if no database categories
          setCategories(getFallbackCategories());
        }
      } catch (error) {
        console.error('Error loading FAQs:', error);
        // Keep fallback data on error
        if (data?.categories) {
          setCategories(getFallbackCategories());
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchFaqs();
  }, [locale, data]);

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Don't render if we have no categories at all (not even fallback)
  if (categories.length === 0 && !isLoading) {
    return null;
  }

  if (isLoading) {
    return (
      <Section variant="gradient" padding="xl" containerClassName="space-y-12">
        <SectionTitle
          badge={data?.badgeLabel ?? "Frequently asked questions"}
          heading={data?.heading ?? "Everything you need to evaluate Cloud MLM Software"}
          description={data?.description ?? "Answers drawn from onboarding conversations, support tickets, and the live knowledge base so you can plan migrations and demos with confidence."}
          maxWidth="3xl"
        />
        <div className="space-y-8">
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-border/50 pb-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-10 w-32 bg-muted animate-pulse rounded-full" />
            ))}
          </div>
          <div className="space-y-6 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-border/50 bg-card/60 p-8 shadow-sm">
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="animate-pulse rounded-xl border border-border/50 bg-background/60 p-5">
                    <div className="h-6 bg-muted rounded w-3/4 mb-3" />
                    <div className="h-4 bg-muted rounded w-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section variant="gradient" padding="xl" containerClassName="space-y-12">
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
              const Icon = resolveIcon(category.icon || '', Sparkles);
              const isActive = index === activeTab;
              return (
                <button
                  key={category.id}
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
                  <span>{category.name}</span>
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
                        key={faq.id}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={isOpen}
                        onToggle={() => handleFaqToggle(faqIndex)}
                      />
                    );
                  })}
                  {activeCategory.faqs.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      {data?.noFaqsMessage || 'No FAQs available in this category.'}
                    </div>
                  )}
                </div>
              </div>

              <InfoCtaBox
                icon={RemixIcon.RiQuestionAnswerLine}
                text={data?.infoBoxText || "Find answers to common questions about our MLM software platform."}
                buttonText={data?.infoBoxButtonText || data?.cta?.label || "Explore all FAQs"}
                buttonHref={data?.cta ? localizedHref(locale, data.cta.href) : localizedHref(locale, "/faqs")}
              />
            </div>
          )}

        </div>
    </Section>
  );
}
