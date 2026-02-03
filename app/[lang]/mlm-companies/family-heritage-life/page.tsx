import type { ComponentType } from "react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { buildLocalizedPath } from "@/lib/locale-links";
import { isSupportedLocale } from "@/lib/i18n-utils";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Building,
  CalendarClock,
  Globe2,
  HandCoins,
  HeartPulse,
  LineChart,
  ShieldCheck
} from "lucide-react";
import { Handshake, Lifebuoy, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type Step = {
  title: string;
  description: string;
  icon: IconType;
};

type Enablement = {
  title: string;
  description: string;
  outcome: string;
  icon: IconType;
};

const CORE_METRICS: Metric[] = [
  {
    label: "Revenue",
    value: "$294M",
    detail: "Supplemental health and life programmes deliver nearly $300M in annual premium-equivalent revenue.",
    icon: LineChart
  },
  {
    label: "Founded",
    value: "1989",
    detail: "Built in Cleveland, Ohio with a mission to protect families from critical illness and income shocks.",
    icon: CalendarClock
  },
  {
    label: "Employees",
    value: "114+",
    detail: "Lean corporate teams support a nationwide field of licensed professionals and agency leaders.",
    icon: UsersThree
  },
  {
    label: "Primary market",
    value: "United States",
    detail: "Coverage portfolios tailored for U.S. households seeking supplemental protection beyond major medical.",
    icon: Globe2
  }
];

const COVERAGE_PILLARS: Pillar[] = [
  {
    title: "Critical illness security",
    description:
      "Cancer, heart, and ICU policies issue lump-sum benefits that families can use for care, travel, or income gaps.",
    proof: "Claims stories highlight 24-hour turnaround and flexible payout use cases.",
    icon: HeartPulse
  },
  {
    title: "Injury & hospital recovery",
    description:
      "Accident and hospital indemnity plans reduce financial friction during hospital stays or rehabilitation windows.",
    proof: "Policyholders receive cash benefits directly, without network restrictions or lengthy paperwork.",
    icon: Lifebuoy
  },
  {
    title: "Legacy & life planning",
    description:
      "Whole life and term life options provide long-term security with return-of-premium features for disciplined savers.",
    proof: "Customer education emphasises generational wealth and debt protection for loved ones.",
    icon: ShieldCheck
  },
  {
    title: "Agent-first service",
    description:
      "Dedicated underwriters, digital quoting tools, and stewardship programmes keep licensed agents efficient.",
    proof: "Regional leaders cite high-issued rates and concierge support during peak campaign seasons.",
    icon: Handshake
  }
];

const CLAIMS_JOURNEY: Step[] = [
  {
    title: "Rapid intake",
    description:
      "Agents submit claims through mobile or desktop portals with photo uploads, e-signatures, and instant eligibility checks.",
    icon: HandCoins
  },
  {
    title: "Concierge review",
    description:
      "Specialist teams verify medical documentation and communicate next steps within one business day.",
    icon: Briefcase
  },
  {
    title: "Flexible payout",
    description:
      "Policyholders choose direct deposit, check, or assigned benefits to providers—reducing stress during recovery.",
    icon: Building
  }
];

const CLOUD_ENABLEMENT: Enablement[] = [
  {
    title: "Agent readiness cockpit",
    description:
      "Aggregate licensing, continuing education, territory insights, and compliance attestations in one dashboard.",
    outcome: "Regional directors deploy campaigns knowing every producer is compliant and pipeline-ready.",
    icon: UsersThree
  },
  {
    title: "Claims intelligence loop",
    description:
      "Connect claims data, underwriting trends, and customer satisfaction scores to refine product mix and training.",
    outcome: "Leaders detect friction early and coach teams on best-practice storytelling.",
    icon: LineChart
  },
  {
    title: "Community advocacy engine",
    description:
      "Automate follow-ups, referral requests, and gratitude campaigns that turn policyholders into local advocates.",
    outcome: "Boosts renewals and referrals while keeping the brand’s family-first ethos central.",
    icon: Handshake
  },
  {
    title: "Guided needs analysis",
    description:
      "AI prompts help agents manage compliant conversations, coverage layering, and affordability planning.",
    outcome: "Every appointment finishes with clear recommendations and documented suitability notes.",
    icon: ShieldCheck
  }
];

const PRIMARY_TRUST_SCORE = {
  score: 75,
  label: "Trust composite",
  summary: "Evaluates regulatory compliance, claims reliability, and customer loyalty in supplemental insurance."
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = isSupportedLocale(params.lang) ? params.lang : i18n.defaultLocale;

  const title = "Family Heritage Life MLM Company Briefing — Supplemental Insurance Playbook";
  const description =
    "Understand Family Heritage Life’s insurance-driven opportunity: revenue signals, coverage pillars, claims journey, and Cloud MLM Software enablement for agent-centric organisations.";

  const alternates = i18n.locales.reduce<Record<string, string>>((acc, currentLocale) => {
    acc[currentLocale] = buildLocalizedPath("/mlm-companies/family-heritage-life", currentLocale as SupportedLocale);
    return acc;
  }, {});

  return {
    title,
    description,
    alternates: { canonical: buildLocalizedPath("/mlm-companies/family-heritage-life", locale as SupportedLocale), languages: alternates },
    openGraph: {
      title,
      description,
      url: buildLocalizedPath("/mlm-companies/family-heritage-life", locale as SupportedLocale),
      type: "article"
    }
  };
}

export default function FamilyHeritageLifePage({ params }: { params: { lang: Locale } }) {
  const locale = isSupportedLocale(params.lang) ? params.lang : i18n.defaultLocale;

  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale as SupportedLocale);
  const contactHref = buildLocalizedPath("/contact", locale as SupportedLocale);
  const companiesHref = buildLocalizedPath("/mlm-companies", locale as SupportedLocale);

  return (
    <div className="space-y-24 pb-20 pt-16">
      <section className="relative isolate overflow-hidden border-y border-primary/25 bg-gradient-to-br from-primary/5 via-background to-background py-20 dark:from-primary/20">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary dark:border-primary/20 dark:bg-primary/20">
              Supplemental insurance • Rank #45
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Family Heritage Life — Agent-first insurance growth system
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg">
                Family Heritage Life safeguards American families with cancer, heart, injury, and life insurance coverage. Use
                this operations briefing to align your field force, claims experience, and AI-powered governance.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={demoHref}>
                  Explore platform capabilities
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={contactHref}>
                  Schedule a strategy session
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="underline underline-offset-4">
                <Link href={companiesHref}>
                  Browse other companies
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              “Each policy is designed to provide financial security and peace of mind, ensuring families are protected when life
              delivers the unexpected.”
            </p>
          </div>
          <aside className="space-y-6 rounded-3xl border border-primary/25 bg-background/90 p-8 shadow-xl dark:border-primary/15 dark:bg-slate-950/80">
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-border/60 bg-background/95 p-6 text-center dark:border-border/40 dark:bg-slate-950/70">
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {PRIMARY_TRUST_SCORE.label}
              </span>
              <span className="text-5xl font-semibold text-primary">{PRIMARY_TRUST_SCORE.score}</span>
              <p className="text-xs text-muted-foreground">{PRIMARY_TRUST_SCORE.summary}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {CORE_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex h-full flex-col gap-3 rounded-2xl border border-border/60 bg-background p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
                  >
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {metric.label}
                      </span>
                    </div>
                    <span className="text-lg font-semibold text-foreground">{metric.value}</span>
                    <p className="text-xs text-muted-foreground">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Coverage pillars & proof points
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Keep agents grounded in the outcomes that make Family Heritage Life indispensable to policyholders.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {COVERAGE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-3 rounded-3xl border border-primary/20 bg-primary/5 p-6 dark:border-primary/15 dark:bg-primary/10"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background text-primary shadow-sm">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <p className="text-xs font-medium text-primary">{pillar.proof}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Claims experience journey</h2>
            <p className="text-sm text-muted-foreground">
              Show how Family Heritage Life delivers on its promise when it matters most—combine transparency with speed and
              empathy.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {CLAIMS_JOURNEY.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-8 rounded-3xl border border-primary/25 bg-primary/5 p-8 dark:border-primary/20 dark:bg-primary/10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Cloud MLM Software enablement
            </h2>
            <p className="text-sm text-muted-foreground">
              Unify licensing, claims, customer advocacy, and AI-assisted needs analysis on one platform tailored for insurance
              thought leaders.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href={demoHref}>
                  Book a guided demo
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href={contactHref}>
                  Architect the rollout
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {CLOUD_ENABLEMENT.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <p className="text-xs font-medium text-primary">{item.outcome}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

