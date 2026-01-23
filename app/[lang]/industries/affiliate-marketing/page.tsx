import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  BarChart3,
  CalendarClock,
  Layers3,
  LineChart,
  ShieldCheck,
  Sparkles,
  Users2,
  Globe2
} from "lucide-react";
import {
  ChartLineUp,
  Funnel,
  Handshake,
  Lightning,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Challenge = {
  title: string;
  description: string;
};

type Capability = {
  title: string;
  description: string;
  icon: IconType;
};

type Reason = {
  title: string;
  detail: string;
  icon: IconType;
};

type Feature = {
  title: string;
  detail: string;
  icon: IconType;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Multi-tier commissions",
    value: "Unlimited depth",
    detail: "Design referral ladders that reward top performers while protecting profitability.",
    icon: Layers3
  },
  {
    label: "Real-time payouts",
    value: "< 60 seconds",
    detail: "Automated e-wallet settlements eliminate manual spreadsheets and errors.",
    icon: Lightning
  },
  {
    label: "Time saved",
    value: "40%",
    detail: "Operations teams cut admin effort by automating onboarding and compliance tasks.",
    icon: CalendarClock
  }
];

const CHALLENGES: Challenge[] = [
  {
    title: "Tracking accuracy",
    description:
      "Referral data gets fragmented across landing pages, coupons, and partner tools—making commission disputes inevitable."
  },
  {
    title: "Transparency at scale",
    description:
      "Affiliates expect instant visibility into clicks, conversions, and earnings. Without modern reporting, trust erodes fast."
  },
  {
    title: "Admin overhead",
    description:
      "Manual reconciliation of payouts, tier changes, and bonus campaigns drains resources that should fuel growth."
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "AI-assisted tracking",
    description:
      "Deterministic link tracking with anomaly detection keeps every referral clean—even during peak launches or flash sales.",
    icon: Funnel
  },
  {
    title: "Multi-model payouts",
    description:
      "Run CPL, CPS, CPA, or hybrid plans side-by-side with configurable rules, automated carry-forward, and tax-ready exports.",
    icon: BarChart3
  },
  {
    title: "Branded partner hubs",
    description:
      "Deliver a branded affiliate workspace with playbooks, assets, and onboarding flows tailored to each cohort.",
    icon: Sparkles
  },
  {
    title: "Mobile-first insights",
    description:
      "Affiliates receive goal nudges, reorder prompts, and rank updates through the Cloud MLM mobile app.",
    icon: Users2
  }
];

const REASONS: Reason[] = [
  {
    title: "Industry expertise",
    detail:
      "Over a decade building affiliate-first MLM ecosystems, blending compliance, automation, and psychology that keeps partners loyal.",
    icon: Handshake
  },
  {
    title: "Seamless commerce integration",
    detail:
      "Native connectors for Shopify, WooCommerce, Magento, and custom stacks ensure catalogue, inventory, and referral data stay in sync.",
    icon: UsersThree
  },
  {
    title: "Security without friction",
    detail:
      "Two-factor authentication, granular permissions, and fraud detection safeguard commissions and sensitive customer data.",
    icon: ShieldCheck
  }
];

const FEATURES: Feature[] = [
  {
    title: "Custom compensation blueprints",
    detail: "Launch binary, matrix, or unilevel overlays that mirror your brand vision and regional policies.",
    icon: ChartLineUp
  },
  {
    title: "Automated lead journeys",
    detail: "Capture, nurture, and hand off leads with rule-based scoring and CRM integrations.",
    icon: LineChart
  },
  {
    title: "Multilingual, multi-currency",
    detail: "Serve partners in any market with localized content, currencies, and tax handling out of the box.",
    icon: Globe2
  },
  {
    title: "Analytics that drive action",
    detail: "Custom dashboards surface cohort performance, product velocity, and payout forecasts in real time.",
    icon: Sparkles
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Affiliate Marketing MLM Software";
  const description =
    "Power affiliate marketing growth with Cloud MLM Software—automated tracking, multi-tier commissions, mobile enablement, and enterprise-grade compliance.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/industries/affiliate-marketing", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AffiliateMarketingPageProps = {
  params: { lang: SupportedLocale };
};

export default function AffiliateMarketingPage({ params }: AffiliateMarketingPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-orange-50 via-white to-pink-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-rose-950/40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_18%,rgba(249,115,22,0.22),transparent_55%),radial-gradient(circle_at_82%_20%,rgba(244,114,182,0.22),transparent_58%),radial-gradient(circle_at_50%_90%,rgba(251,191,36,0.18),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.85fr)]">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                Affiliate marketing growth hub
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Affiliate Marketing MLM Software that rewards every referral in real time.
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground">
                Build trust with transparent tracking, automate complex commission models, and empower your partners to scale faster. Cloud MLM Software centralises the entire affiliate lifecycle—from onboarding to payouts.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Book a strategy session
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref}>
                  Explore the live demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article key={metric.label} className="flex h-full flex-col gap-2 rounded-3xl border border-border/60 bg-background/80 p-5 shadow-sm backdrop-blur dark:border-border/40 dark:bg-slate-950/60">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{metric.label}</p>
                    <p className="text-xl font-semibold text-foreground">{metric.value}</p>
                    <p className="text-sm text-muted-foreground">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Common friction points</p>
            <div className="space-y-5">
              {CHALLENGES.map((challenge) => (
                <article key={challenge.title} className="rounded-2xl border border-border/60 bg-muted/30 p-5 dark:border-border/40 dark:bg-slate-900/40">
                  <h2 className="text-sm font-semibold text-foreground">{challenge.title}</h2>
                  <p className="mt-2 text-xs text-muted-foreground">{challenge.description}</p>
                </article>
              ))}
            </div>
            <Button asChild variant="ghost" className="w-full justify-between">
              <Link href={pricingHref}>
                View pricing options
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Capabilities built for high-performing affiliate programmes</h2>
          <p className="text-sm text-muted-foreground">
            Every module is engineered to replace manual processes with automation, analytics, and a partner experience that scales globally.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <article key={capability.title} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground">{capability.title}</h3>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:border-border/30 dark:bg-slate-950/40">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why affiliate leaders choose Cloud MLM Software</h2>
            <p className="text-sm text-muted-foreground">
              From prospecting to payout, our team combines strategy, design, and engineering to create an always-on partner ecosystem.
            </p>
            <ul className="space-y-4">
              {REASONS.map((reason) => {
                const Icon = reason.icon;
                return (
                  <li key={reason.title} className="flex gap-4 rounded-3xl border border-border/60 bg-background p-5 shadow-sm">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-foreground">{reason.title}</h3>
                      <p className="text-sm text-muted-foreground">{reason.detail}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="space-y-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Programme outcomes</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[{
                value: "98%",
                label: "commission accuracy",
                detail: "Validations ensure every payout is audit-ready."
              },
              {
                value: "+32%",
                label: "partner retention",
                detail: "Personalised coaching journeys keep top affiliates engaged."
              }].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border/60 bg-background p-5 text-center shadow-sm">
                  <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{stat.label}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{stat.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Transform referral momentum into predictable revenue with workflows tailored to your business model.
            </p>
            <Button asChild>
              <Link href={contactHref}>
                Plan your implementation
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4 text-center mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            Key features for affiliate marketing success
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Give every partner the tools, insights, and security they expect.</h2>
          <p className="text-sm text-muted-foreground">
            From compensation flexibility to enterprise-grade safeguards, Cloud MLM Software adapts to your affiliate blueprint across markets.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-orange-50 p-10 shadow-sm dark:border-primary/40 dark:from-primary/20 dark:via-slate-950 dark:to-orange-900/40">
          <div className="absolute -left-24 top-1/4 h-48 w-48 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-64 w-64 translate-y-1/3 rounded-full bg-pink-200/30 blur-3xl dark:bg-pink-900/30" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.75fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to build a top-tier affiliate ecosystem?</h2>
              <p className="text-sm text-muted-foreground">
                Share your product catalogue, target regions, and revenue goals. We will deliver a tailored roadmap, migration plan, and success milestones to launch Cloud MLM Software inside your affiliate organisation.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={contactHref}>
                    Connect with our consultants
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={demoHref}>
                    Preview the platform
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background/80 p-6 text-sm shadow-sm dark:border-border/40 dark:bg-slate-950/70">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Discovery checklist</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Current affiliate models (CPL, CPS, CPA, hybrid) and KPIs.</li>
                <li>• Preferred integrations for ecommerce, CRM, and marketing automation.</li>
                <li>• Compliance, security, and regional localisation requirements.</li>
              </ul>
              <p className="text-xs text-muted-foreground">Expect a tailored proposal and timeline within one business day.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

