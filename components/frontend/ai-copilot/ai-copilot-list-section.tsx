'use client';

import { useState, useEffect } from "react";
import { Compass } from "lucide-react";
import { AiCopilotCard } from "@/components/frontend/common/ai-copilot-card";
import { SectionTitle } from "@/components/ui/section-title";
import { resolveIcon } from "@/components/frontend/home/utils";
import type { Locale } from "@/i18n-config";
import { Section } from "@/components/ui/section";
import { getAICopilotContent } from "@/lib/ai-copilot-content";
import { Typography } from "@/components/ui/typography";

interface AICopilot {
  id: string;
  icon: string | null;
  title: string;
  content: string;
  locale: string;
}

interface AICopilotListSectionProps {
  locale: Locale;
  initialCopilots?: AICopilot[];
}

export function AICopilotListSection({ locale, initialCopilots = [] }: AICopilotListSectionProps) {
  const [copilots, setCopilots] = useState<AICopilot[]>(initialCopilots);
  const [isLoading, setIsLoading] = useState(initialCopilots.length === 0);
  const content = getAICopilotContent(locale);
  const listSection = content.listSection;

  useEffect(() => {
    // Only fetch if we don't have initial data
    if (initialCopilots.length > 0) {
      setIsLoading(false);
      return;
    }

    const fetchCopilots = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/ai-copilot?locale=${locale}`, {
          cache: 'no-store',
        });
        
        if (response.ok) {
          const data = await response.json();
          setCopilots(Array.isArray(data) ? data : []);
        } else {
          setCopilots([]);
        }
      } catch (error) {
        console.error('[AICopilotListSection] Error fetching AI Copilots:', error);
        setCopilots([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCopilots();
  }, [locale, initialCopilots.length]);

  return (
    <Section variant="default" padding="md" containerClassName="space-y-10">
      <SectionTitle
        badge={listSection.badge}
        heading={listSection.heading}
        description={listSection.description}
        maxWidth="3xl"
      />
      <div className="container space-y-10 rounded-3xl border border-border/50 bg-primary/10 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-900 p-10 shadow-[0_40px_110px_-80px_rgba(15,23,42,0.35)] backdrop-blur dark:bg-card/60 overflow-hidden">
        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse rounded-3xl border border-border/60 bg-background p-6">
                <div className="flex gap-6 items-center">
                  <div className="h-14 w-14 rounded-full bg-muted shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="h-6 bg-muted rounded w-3/4" />
                    <div className="h-4 bg-muted rounded w-full" />
                    <div className="h-4 bg-muted rounded w-5/6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : copilots.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-3">
            {copilots.map((copilot) => {
              const Icon = resolveIcon(copilot.icon, Compass);
              return (
                <AiCopilotCard
                  key={copilot.id}
                  icon={Icon}
                  title={copilot.title}
                  description={copilot.content}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <Typography variant="p" textColor="muted">
              {listSection.noCopilotsText}
            </Typography>
          </div>
        )}
      </div>
    </Section>
  );
}
