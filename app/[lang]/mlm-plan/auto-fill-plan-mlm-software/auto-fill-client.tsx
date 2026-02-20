"use client";

import { useState } from "react";
import { X } from "lucide-react";
import type { PageTitleRecord } from "@/lib/api/page-titles";
import { PlanSubpageLayout } from "@/components/frontend/plans/subpage";
import type { PlanFeatureContent } from "@/components/frontend/plans/subpage";
import { autoFillPlanContent } from "./content";
import { AutoFillSections } from "./sections";
import PassUpFlowSimulator from "@/components/frontend/plans/all-plans/pass-up-flow-simulator";
import { cn } from "@/lib/utils";

const PLAN_SLUG = "auto-fill-plan-mlm-software";
const SIMULATOR_MODAL_CLASS = "min-h-[400px] w-full rounded-xl border border-border/60 bg-card/50";

function mergeContentWithPageTitle(
  content: PlanFeatureContent,
  pageTitleData: PageTitleRecord | null
): PlanFeatureContent {
  if (!pageTitleData) return content;
  return {
    ...content,
    hero: {
      ...content.hero,
      title: pageTitleData.title,
      badge: pageTitleData.pagePill ?? content.hero.badge,
      description: pageTitleData.sectionSubtitle ?? content.hero.description,
    },
  };
}

type AutoFillClientProps = {
  pageTitleData: PageTitleRecord | null;
  contactHref: string;
  demoHref: string;
  plansHref: string;
  locale?: string;
};

export function AutoFillClient({
  pageTitleData,
  contactHref,
  demoHref,
  plansHref,
  locale = "en",
}: AutoFillClientProps) {
  const [simulatorModalOpen, setSimulatorModalOpen] = useState(false);
  const content = mergeContentWithPageTitle(autoFillPlanContent, pageTitleData);

  return (
    <>
      <PlanSubpageLayout
        content={content}
        contactHref={contactHref}
        demoHref={demoHref}
        plansHref={plansHref}
        serverTitle={pageTitleData?.title ?? null}
        serverBadge={pageTitleData?.pagePill ?? null}
        serverDescription={pageTitleData?.sectionSubtitle ?? null}
        planSlug={PLAN_SLUG}
        locale={locale}
        heroSecondaryCtaClick={() => setSimulatorModalOpen(true)}
      >
        <AutoFillSections plansHref={plansHref} />
      </PlanSubpageLayout>

      {simulatorModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4"
          onClick={() => setSimulatorModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="flow-simulator-modal-title"
        >
          <div
            className={cn(
              "w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl",
              "bg-background border border-border/60",
              "animate-in fade-in zoom-in-95 duration-200"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border/60 bg-background px-6 py-4">
              <h2 id="flow-simulator-modal-title" className="text-xl font-semibold text-foreground">
                Auto-fill flow simulator
              </h2>
              <button
                type="button"
                onClick={() => setSimulatorModalOpen(false)}
                className="p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <PassUpFlowSimulator variant="auto-fill" className={SIMULATOR_MODAL_CLASS} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
