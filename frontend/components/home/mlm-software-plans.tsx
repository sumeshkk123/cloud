import type { Locale } from "@/i18n-config";
import type { HomepageContent } from "@/types/homepage";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { PlanFeatureCard } from "@/components/common/plan-feature-card";
import { Typography } from "@/components/ui/typography";
import { ReadMoreButton } from "@/components/ui/read-more-button";
import { InfoCtaBox } from "@/components/ui/info-cta-box";
import { getRemixIcon } from "./utils/remix-icon-resolver";
import { localizedHref } from "./utils";

// Map plan titles to icon names
const PLAN_ICON_MAP: Record<string, string> = {
  "Binary": "Layers",
  "Unilevel": "Users",
  "Matrix": "Layers",
  "Board": "Layers",
  "Breakaway": "Layers",
  "Generation": "Users",
  "Leadership": "Users",
  "Monoline": "Workflow",
  "Queue": "Workflow",
  "Hybrid": "Workflow",
  "Uni-Binary": "Workflow",
  "Subscription": "Coins",
  "SaaS": "Coins",
  "Donation": "Coins",
  "Crowdfunding": "Coins",
};

function getPlanIcon(planTitle: string) {
  // Try to find matching icon from plan title
  for (const [key, icon] of Object.entries(PLAN_ICON_MAP)) {
    if (planTitle.toLowerCase().includes(key.toLowerCase())) {
      return icon;
    }
  }
  // Default icon for MLM plans
  return "Layers";
}


export function MlmSoftwarePlans({ locale, data, industryTags }: { locale: Locale; data: HomepageContent["planShowcase"]; industryTags?: string[] }) {
  const cards = (data?.cards ?? []).slice(0, 6);
  // Default industry tags if not provided
  const tags = industryTags || [
    "Direct selling enterprises",
    "Health & wellness",
    "Financial services",
    "Crypto & Web3",
    "Beauty & cosmetics",
    "Education networks"
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-900 py-24">
      <div className="absolute inset-0 -z-20" aria-hidden />
      <div className="container space-y-12">
        <SectionTitle
          badge={data?.badgeLabel ?? "MLM software plan library"}
          heading={data?.heading}
          description={data?.description}
          maxWidth="5xl"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((plan) => {
            const iconName = getPlanIcon(plan.title);
            const Icon = getRemixIcon(iconName);
            // Use intro as summary, title as headline, description, and bullets as highlights
            const summary = plan.intro || "";
            const headline = plan.title;
            const description = plan.description || "";
            const highlights = plan.bullets || [];

            return (
              <PlanFeatureCard
                key={plan.title}
                className="h-full"
                icon={Icon}
                title={headline}
                summary={summary}
                description={description}
                highlights={highlights}
                planType={plan.title}
                readMoreHref={localizedHref(locale, `/mlm-plans`)}
              />
            );
          })}
        </div>

        {/* Industry Tags - Other Plans */}
        {tags.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-3">
            {tags.map((tag) => {
              // Create a slug from the tag for the URL
              const tagSlug = tag.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
              return (
                <Link
                  key={tag}
                  href={localizedHref(locale, `/mlm-plan/${tagSlug}`)}
                  className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold uppercase tracking-wide shadow-sm transition-all hover:bg-primary/20 hover:border-primary/30 hover:shadow-md"
                >
                  {tag}
                </Link>
              );
            })}
          </div>
        )}

        <InfoCtaBox
          icon={Sparkles}
          text={
            <>
              Not sure which plan fits your market? Our AI team models hybrid options and compliance thresholds.
            </>
          }
          buttonText="Explore all mlm plans"
          buttonHref={localizedHref(locale, "/mlm-plans")}
        />
      </div>
    </section>
  );
}
