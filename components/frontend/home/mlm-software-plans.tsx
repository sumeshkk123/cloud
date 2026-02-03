import type { Locale } from "@/i18n-config";
import type { HomepageContent } from "@/types/homepage";
import Link from "next/link";
import React from "react";
import { Sparkles } from "lucide-react";
import * as RemixIcon from "@remixicon/react";
import { SectionTitle } from "@/components/ui/section-title";
import { PlanFeatureCard } from "@/components/frontend/common/plan-feature-card";
import { Typography } from "@/components/ui/typography";
import { ReadMoreButton } from "@/components/ui/read-more-button";
import { InfoCtaBox } from "@/components/ui/info-cta-box";
import { getRemixIcon } from "./utils/remix-icon-resolver";
import { localizedHref } from "./utils";
import { Section } from "@/components/ui/section";
import { listMlmPlans } from "@/lib/api/mlm-plans";
import { getCommonContent } from "@/lib/common";

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

function parseIconValue(value?: string | null): { type: 'lucide' | 'remix' | 'fontawesome' | null; name: string } {
  if (!value) return { type: null, name: '' };
  if (value.includes(':')) {
    const [type, name] = value.split(':');
    return { type: type as 'lucide' | 'remix' | 'fontawesome', name };
  }
  // Default to remix if no prefix
  return { type: 'remix', name: value };
}

function getPlanIcon(planTitle: string, planIcon?: string | null) {
  // If plan has an icon from database, use it
  if (planIcon) {
    const { type, name } = parseIconValue(planIcon);
    if (type === 'remix' && name) {
      // Extract icon name (e.g., "RiNodeTree" from "remix:RiNodeTree")
      return name.replace(/^Ri/, '').replace(/Line$|Fill$/, '');
    }
  }
  
  // Fallback: Try to find matching icon from plan title
  for (const [key, icon] of Object.entries(PLAN_ICON_MAP)) {
    if (planTitle.toLowerCase().includes(key.toLowerCase())) {
      return icon;
    }
  }
  // Default icon for MLM plans
  return "Layers";
}


export async function MlmSoftwarePlans({ locale, data, industryTags }: { locale: Locale; data: HomepageContent["planShowcase"]; industryTags?: string[] }) {
  // Fetch plans from database - prioritize plans marked for homepage, fallback to all plans
  const PLAN_LIMIT = 6;
  let allPlans: Awaited<ReturnType<typeof listMlmPlans>> = [];
  let plans: Awaited<ReturnType<typeof listMlmPlans>> = [];
  
  try {
    // Fetch ALL plans to get remaining ones for tags
    allPlans = await listMlmPlans(locale);
    
    // Get plans marked for homepage first
    const homePagePlans = await listMlmPlans(locale, true);
    
    if (homePagePlans.length > 0) {
      // Use homepage plans, limit to PLAN_LIMIT
      plans = homePagePlans.slice(0, PLAN_LIMIT);
    } else {
      // If no plans marked for homepage, use all plans, limit to PLAN_LIMIT
      plans = allPlans.slice(0, PLAN_LIMIT);
    }
  } catch (error) {
    console.error('Failed to fetch plans:', error);
    // Fallback to empty array if fetch fails
    plans = [];
    allPlans = [];
  }

  // Get translated button text
  const commonContent = getCommonContent(locale);
  const exploreDetailsText = commonContent.buttons.exploreDetails;

  // Get remaining plans (those not displayed in cards)
  const displayedPlanTitles = new Set(plans.map(p => p.title));
  const remainingPlans = allPlans.filter(p => !displayedPlanTitles.has(p.title));

  return (
    <Section variant="gradient" padding="xl" className="relative overflow-hidden">
      {/* Background Pattern/Image */}
      <div
        className="absolute inset-0 -z-10 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: "url('/images/home/bg-wave.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
        aria-hidden
      />
      
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/10 dark:from-primary/10 dark:via-transparent dark:to-blue-500/20" aria-hidden />
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 -z-10 opacity-5 dark:opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "24px 24px"
        }}
        aria-hidden
      />

      <div className="container space-y-12 relative z-0">
        <SectionTitle
          badge={data?.badgeLabel ?? "MLM software plan library"}
          heading={data?.heading}
          description={data?.description}
          maxWidth="5xl"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {plans.length > 0 ? (
            plans.map((plan) => {
              // Parse icon from database format (e.g., "remix:RiNodeTree")
              let Icon: React.ComponentType<{ className?: string }> = getRemixIcon("Layers"); // Default fallback
              if (plan.icon) {
                const { type, name } = parseIconValue(plan.icon);
                if (type === 'remix' && name) {
                  // Get Remix icon directly from the imported module
                  const RemixIconComponent = (RemixIcon as any)[name] as React.ComponentType<{ className?: string }> | undefined;
                  if (RemixIconComponent) {
                    Icon = RemixIconComponent;
                  } else {
                    // Fallback if icon not found
                    const iconName = getPlanIcon(plan.title, plan.icon);
                    Icon = getRemixIcon(iconName);
                  }
                } else {
                  const iconName = getPlanIcon(plan.title, plan.icon);
                  Icon = getRemixIcon(iconName);
                }
              } else {
                const iconName = getPlanIcon(plan.title);
                Icon = getRemixIcon(iconName);
              }
              
              // Map database fields to component props
              const headline = plan.title;
              const summary = plan.subtitle || "";
              const description = plan.description || "";
              const highlights = Array.isArray(plan.features) ? plan.features.slice(0, 4) : [];

              return (
                <PlanFeatureCard
                  key={plan.id}
                  className="h-full"
                  icon={Icon}
                  title={headline}
                  summary={summary}
                  description={description}
                  highlights={highlights}
                  planType={plan.title}
                  readMoreHref={localizedHref(locale, `/mlm-plans`)}
                  buttonText={exploreDetailsText}
                />
              );
            })
          ) : (
            // Fallback to data.cards if no plans from database
            (data?.cards ?? []).slice(0, PLAN_LIMIT).map((plan) => {
              const iconName = getPlanIcon(plan.title);
              const Icon = getRemixIcon(iconName);
              const summary = plan.intro || "";
              const headline = plan.title;
              const description = plan.description || "";
              const highlights = Array.isArray(plan.bullets) ? plan.bullets.slice(0, 4) : [];

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
                  buttonText={exploreDetailsText}
                />
              );
            })
          )}
        </div>

        {/* Remaining Plans Tags */}
        {remainingPlans.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-3">
            {remainingPlans.map((plan) => {
              // Create a slug from the plan title for the URL
              const planSlug = plan.title.toLowerCase()
                .replace(/^mlm\s+/i, '') // Remove "MLM " prefix if present
                .replace(/\s+/g, '-')
                .replace(/&/g, 'and')
                .replace(/[^a-z0-9-]/g, '');
              return (
                <Link
                  key={plan.id}
                  href={localizedHref(locale, `/mlm-plans`)}
                  className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium tracking-wide text-foreground shadow-sm transition-all hover:bg-primary/20 hover:border-primary/30 hover:shadow-md"
                >
                  {plan.title}
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
    </Section>
  );
}
