import React from "react";
import type { Locale } from "@/i18n-config";
import * as RemixIcon from "@remixicon/react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { ReadMoreButton } from "@/components/ui/read-more-button";
import { listMlmPlans } from "@/lib/api/mlm-plans";
import { localizedHref } from "@/components/frontend/home/utils";
import { getCommonContent } from "@/lib/common";
import { cn } from "@/lib/utils";

function parseIconValue(value?: string | null): { type: 'lucide' | 'remix' | 'fontawesome' | null; name: string } {
  if (!value) return { type: null, name: '' };
  if (value.includes(':')) {
    const [type, name] = value.split(':');
    return { type: type as 'lucide' | 'remix' | 'fontawesome', name };
  }
  return { type: 'remix', name: value };
}

interface PlansFamiliesSectionProps {
  locale: Locale;
}

export async function PlansFamiliesSection({ locale }: PlansFamiliesSectionProps) {
  // Fetch all plans from database
  let plans: Awaited<ReturnType<typeof listMlmPlans>> = [];
  try {
    plans = await listMlmPlans(locale);
  } catch (error) {
    console.error('Failed to fetch plans:', error);
    plans = [];
  }

  // Get translated button text
  const commonContent = getCommonContent(locale);
  const exploreDetailsText = commonContent.buttons.exploreDetails;

  return (
    <Section id="plan-families" variant="gradient" padding="lg" className="relative isolate !overflow-visible">

      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10" />
      </div>
      <div className="space-y-12">
        <SectionTitle
          badge="Plan frameworks"
          heading="MLM plan frameworks we configure"
          description="Every plan starts with proven templates, tailored payout engines, and the governance to launch confidently across new markets."
          centered={true}
          maxWidth="3xl"
        />

        <div className="mx-auto container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-4">
            {plans.length > 0 ? (
              plans.map((plan) => {
                // Parse icon from database format (e.g., "remix:RiNodeTree")
                let Icon: React.ComponentType<{ className?: string }> = RemixIcon.RiStackLine;
                if (plan.icon) {
                  const { type, name } = parseIconValue(plan.icon);
                  if (type === 'remix' && name) {
                    const RemixIconComponent = (RemixIcon as any)[name] as React.ComponentType<{ className?: string }> | undefined;
                    if (RemixIconComponent) {
                      Icon = RemixIconComponent;
                    }
                  }
                }

                const highlights = Array.isArray(plan.features) ? plan.features.slice(0, 4) : [];

                return (
                  <div
                    key={plan.id}
                    className="relative flex flex-col rounded-2xl border border-border/40 bg-background p-6 sm:p-8 transition-all hover:border-primary/30 hover:shadow-md"
                  >
                    <div className="relative grid gap-6 flex-1 pb-4">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                          <Icon className="h-6 w-6" aria-hidden />
                        </div>
                        <div className="min-w-0 space-y-2">
                          <Typography as="h3" variant="h4" className="tracking-tight">
                            {plan.title}
                          </Typography>
                          <Typography as="p" variant="p" textColor="muted" className="text-sm leading-relaxed">
                            {plan.description}
                          </Typography>
                          {plan.subtitle && (
                            <Typography as="p" variant="small" textColor="muted" className="italic">
                              {plan.subtitle}
                            </Typography>
                          )}
                        </div>
                      </div>

                      {highlights.length > 0 && (
                        <div className="flex flex-wrap justify-center items-center gap-2">
                          {highlights.slice(0, 4).map((highlight, index) => {
                            // Truncate long highlights to keep them short
                            const shortHighlight = highlight.length > 25 ? highlight.substring(0, 22) + '...' : highlight;
                            return (
                              <span
                                key={index}
                                className={cn(
                                  "rounded-full border px-3 py-2 text-xs font-medium",
                                  "border-primary/20 bg-primary/5 text-muted-foreground"
                                )}
                              >
                                {shortHighlight}
                              </span>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Footer with ReadMore Button */}
                    <div className="mt-auto flex items-center justify-end gap-4 border-t border-border/50 pt-4">
                      <ReadMoreButton
                        href={localizedHref(locale, `/mlm-plans`)}
                        variant="default"
                      >
                        {exploreDetailsText}
                      </ReadMoreButton>
                    </div>
                  </div>
                );
              })
            ) : (
              // Fallback message if no plans
              <div className="col-span-2 text-center py-12">
                <Typography as="p" variant="p" textColor="muted">
                  No plans available at the moment.
                </Typography>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
