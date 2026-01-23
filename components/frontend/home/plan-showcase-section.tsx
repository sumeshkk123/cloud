import type { Locale } from "@/i18n-config";
import type { HomepageContent } from "@/types/homepage";
import { Sparkles } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
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


export function MlmSoftwarePlans({ locale, data }: { locale: Locale; data: HomepageContent["planShowcase"] }) {
  const cards = (data?.cards ?? []).slice(0, 8);

  return (
    <section className="relative overflow-hidden pt-24 pb-24">
      <div className="absolute inset-0 -z-20" aria-hidden />
      <div className="container space-y-12">
        <SectionTitle
          badge={data?.badgeLabel ?? "MLM software plan library"}
          heading={data?.heading}
          description={data?.description}
          maxWidth="5xl"
        />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((plan) => {
            // Use the intro as the description, or fallback to description
            const displayDescription = plan.intro || plan.description;

            const iconName = getPlanIcon(plan.title);
            const Icon = getRemixIcon(iconName);

            return (
              <Card key={plan.title} className="group flex h-full flex-col gap-4 p-8">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-x-[-1]" />
                </div>
                <Typography as="h3" variant="h5" className="font-semibold">
                  {plan.title}
                </Typography>
                <Typography variant="p" textColor="muted" className="flex-1 leading-6">
                  {displayDescription}
                </Typography>
                <div className="mt-auto">
                  <ReadMoreButton href={localizedHref(locale, `/mlm-plans`)} variant="default">
                    Explore more
                  </ReadMoreButton>
                </div>
              </Card>
            );
          })}
        </div>

        <InfoCtaBox
          icon={Sparkles}
          text={
            <>
              Not sure which plan fits your market? Our AI team models hybrid options and compliance thresholds.
            </>
          }
          buttonText="Explore all plans"
          buttonHref={localizedHref(locale, "/mlm-plans")}
        />
      </div>
    </section>
  );
}
