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
  BadgeDollarSign,
  Banknote,
  ShieldCheck,
  Sparkles,
  TrendingUp
} from "lucide-react";
import {
  ChartPieSlice,
  GlobeHemisphereEast,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

import { getMetaDetail } from "@/lib/api/meta-details";
import { getIndustryPageTitleKey } from "@/lib/industries-subpage";

export const dynamic = "force-dynamic";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  value: string;
  label: string;
  description: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  detail: string;
  icon: IconType;
};

type Stream = {
  stage: string;
  title: string;
  description: string;
};

type Insight = {
  title: string;
  description: string;
};

const HERO_METRICS: Metric[] = [
  {
    value: "+58%",
    label: "AUM growth",
    description: "Dynamic segmentation and automated nurturing lift conversions from lead to funded account.",
    icon: TrendingUp
  },
  {
    value: "15 mins",
    label: "portfolio launch",
    description: "Prebuilt templates let wealth teams activate new products with audited fee structures in minutes.",
    icon: Sparkles
  },
  {
    value: "99%",
    label: "compliance accuracy",
    description: "Real-time suitability checks and audit-ready logs reduce manual reviews across jurisdictions.",
    icon: ShieldCheck
  }
];

const VALUE_PILLARS: Pillar[] = [
  {
    title: "Hybrid compensation studio",
    detail: "Design trails, performance fees, and referral bonuses that reward long-term investor value.",
    icon: Banknote
  },
  {
    title: "Investor intelligence",
    detail: "Unify CRM, trading, and support data to anticipate retention risks and growth moments.",
    icon: ChartPieSlice
  },
  {
    title: "Advisor enablement",
    detail: "Deliver accreditation checkpoints, product primers, and investor-ready content on any device.",
    icon: UsersThree
  },
  {
    title: "Global expansion kit",
    detail: "Manage multi-currency payouts, localisation, and regulatory variations from a single console.",
    icon: GlobeHemisphereEast
  }
];

const DELIVERY_STREAMS: Stream[] = [
  {
    stage: "01",
    title: "Vision and regulatory framing",
    description: "Define target investor personas, product mix, and supervisory expectations with cross-functional stakeholders."
  },
  {
    stage: "02",
    title: "Experience modelling",
    description: "Prototype advisor workspaces, investor journeys, and compensation models with real-time feedback loops."
  },
  {
    stage: "03",
    title: "Automation roll-out",
    description: "Connect custody, CRM, and marketing stacks; automate onboarding, compliance approvals, and payout cycles."
  },
  {
    stage: "04",
    title: "Growth optimisation",
    description: "Monitor AUM, lifetime value, and referral velocity—iterate campaigns and incentives quarterly."
  }
];

const STRATEGIC_INSIGHTS: Insight[] = [
  {
    title: "Transparent performance",
    description: "Give investors dashboards with goal tracking, allocation breakdowns, and advisor commentary."
  },
  {
    title: "Risk-aware scaling",
    description: "Embed suitability, KYC, and audit workflows across every channel to protect trust at scale."
  },
  {
    title: "Educated communities",
    description: "Launch academies, webinars, and AI-guided Q&A that convert prospects into advocates."
  }
];

const FALLBACK_TITLE = "Investment Industry MLM Software";
const FALLBACK_DESCRIPTION =
  "Accelerate investment distribution with Cloud MLM Software—hybrid compensation, investor intelligence, and global-ready compliance in one platform.";
const FALLBACK_KEYWORDS = "investment mlm software, financial network marketing, wealth management direct selling";

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const pageKey = getIndustryPageTitleKey("investment");
  const metaData = await getMetaDetail(pageKey, locale);
  const title = metaData?.title ?? FALLBACK_TITLE;
  const description = metaData?.description ?? FALLBACK_DESCRIPTION;
  const keywords = metaData?.keywords ?? FALLBACK_KEYWORDS;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/industries/investment", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type InvestmentPageProps = {
  params: { lang: SupportedLocale };
};

export default function InvestmentPage({ params }: InvestmentPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-emerald-50 via-white to-slate-50 py-20 dark:border-border/40 dark:from-emerald-950 dark:via-slate-950 dark:to-slate-950/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(16,185,129,0.22),transparent_55%),radial-gradient(circle_at_80%_24%,rgba(56,189,248,0.2),transparent_58%),radial-gradient(circle_at_50%_88%,rgba(74,222,128,0.18),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
          <div className="space-y-10">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                Investment network growth engine
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Cloud MLM Software for investment houses scaling trusted advice.
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground">
                Unite advisors, investors, and partners with transparent compensation, intelligent automation, and education that builds confidence in every portfolio decision.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Shape your capital growth strategy
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref}>
                  Explore the investment demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article key={metric.label} className="flex h-full flex-col gap-2 rounded-3xl border border-border/60 bg-background/80 p-5 shadow-sm backdrop-blur dark:border-border/40 dark:bg-slate-950/60">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <p className="text-xl font-semibold text-foreground">{metric.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{metric.label}</p>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Investment reality check</p>
            <div className="space-y-5">
              <article className="rounded-2xl border border-border/60 bg-muted/30 p-5 dark:border-border/40 dark:bg-slate-900/40">
                <h2 className="text-sm font-semibold text-foreground">Market volatility</h2>
                <p className="mt-2 text-xs text-muted-foreground">
                  Investors expect proactive communication, risk alerts, and rapid product innovation when markets shift.
                </p>
              </article>
              <article className="rounded-2xl border border-border/60 bg-muted/30 p-5 dark:border-border/40 dark:bg-slate-900/40">
                <h2 className="text-sm font-semibold text-foreground">Fee transparency</h2>
                <p className="mt-2 text-xs text-muted-foreground">
                  Regulatory scrutiny requires clear revenue sharing, audited payouts, and accessible reporting.
                </p>
              </article>
              <article className="rounded-2xl border border-border/60 bg-muted/30 p-5 dark:border-border/40 dark:bg-slate-900/40">
                <h2 className="text-sm font-semibold text-foreground">Investor literacy</h2>
                <p className="mt-2 text-xs text-muted-foreground">
                  Education experiences must match different knowledge levels to convert prospects into long-term advocates.
                </p>
              </article>
            </div>
            <Button asChild variant="ghost" className="w-full justify-between">
              <Link href={pricingHref}>
                Review solution tiers
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Value pillars for modern investment organisations</h2>
          <p className="text-sm text-muted-foreground">
            Deliver advisory excellence and operational discipline through modules refined with investment leaders worldwide.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {VALUE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:border-border/30 dark:bg-slate-950/40">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Delivery streams that keep stakeholders aligned</h2>
            <p className="text-sm text-muted-foreground">
              Structured sprints ensure compliance leaders, advisors, and technology teams move together from design to optimisation.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {DELIVERY_STREAMS.map((stream) => (
              <article key={stream.stage} className="relative flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <BadgeDollarSign className="absolute -top-3 right-4 h-9 w-9 text-primary" aria-hidden />
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">{stream.stage}</p>
                <h3 className="text-base font-semibold text-foreground">{stream.title}</h3>
                <p className="text-sm text-muted-foreground">{stream.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-white via-background to-emerald-50 p-10 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-emerald-900/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_28%,rgba(74,222,128,0.2),transparent_60%),radial-gradient(circle_at_70%_24%,rgba(56,189,248,0.22),transparent_62%)]" aria-hidden />
          <div className="relative space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Strategic insights for boards and investors</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {STRATEGIC_INSIGHTS.map((insight) => (
                <article key={insight.title} className="rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/60">
                  <h3 className="text-base font-semibold text-foreground">{insight.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{insight.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 p-10 text-white shadow-xl dark:border-border/40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_32%,rgba(16,185,129,0.3),transparent_60%),radial-gradient(circle_at_78%_24%,rgba(56,189,248,0.24),transparent_62%)]" aria-hidden />
          <div className="relative space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to accelerate capital growth?</h2>
            <p className="text-sm text-slate-200">
              Bring your product roadmap, distribution models, and compliance milestones. We will supply a Cloud MLM Software activation plan grounded in measurable outcomes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="secondary">
                <Link href={contactHref}>
                  Talk with our investment strategists
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white/10">
                <Link href={demoHref}>
                  Request the investment demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="space-y-3 rounded-3xl border border-white/30 bg-white/10 p-6 text-sm text-slate-200 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/80">Preparation checklist</p>
              <ul className="space-y-2">
                <li>• Product catalogue, fee tables, and compensation structures.</li>
                <li>• Distribution partner personas and enablement priorities.</li>
                <li>• Target KPIs across AUM, retention, and investor satisfaction.</li>
              </ul>
              <p className="text-xs text-slate-300">Receive a phased roadmap, KPI framework, and change plan within one business day.</p>
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
