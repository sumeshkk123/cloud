import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ArrowSquareOut,
  Buildings,
  ChartLineUp,
  Compass,
  CurrencyDollarSimple,
  FileText,
  GlobeHemisphereWest,
  Handshake,
  MapPin,
  ShieldCheck,
  Waveform
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroInsight = {
  title: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Step = {
  label: string;
  focus: string;
  detail: string;
  icon: IconType;
};

type MarketPanel = {
  market: string;
  focus: string;
  intelligence: string;
};

type GovernanceCue = {
  headline: string;
  detail: string;
};

const HERO_INSIGHTS: HeroInsight[] = [
  {
    title: "Corporate-grade onboarding",
    value: "10-day average",
    detail: "Accelerate ANZ Pacific acquiring approvals with AI-assisted documentation workflows.",
    icon: Buildings
  },
  {
    title: "Liquidity visibility",
    value: "Multi-ledger clarity",
    detail: "Treasury teams monitor domestic and cross-border settlements in real time.",
    icon: CurrencyDollarSimple
  },
  {
    title: "Regulatory assurance",
    value: "Board-ready narratives",
    detail: "Risk, compliance, and legal receive executive summaries aligned with APRA, AUSTRAC, and Reserve Bank guidance.",
    icon: ShieldCheck
  }
];

const STRATEGIC_PILLARS: Pillar[] = [
  {
    title: "Experience orchestration",
    description:
      "Reimagine the archived modules—multi-currency, ticketing, e-wallets—into a premium ANZ Pacific experience.",
    bullets: [
      "Localized copy clarifies FX, surcharges, and settlement expectations for Australia, New Zealand, and Pacific Islands.",
      "Adaptive checkout presents bank transfer, card, and Apple Pay/Google Pay options with clear guidance.",
      "AI chat assistants echo human agents, keeping distributors confident during onboarding and renewals."
    ],
    icon: GlobeHemisphereWest
  },
  {
    title: "Governance & compliance spine",
    description:
      "Align your payment stack with corporate governance expectations while reducing manual lift for finance teams.",
    bullets: [
      "Automated reconciliation ties ANZ Pacific statements to Cloud MLM Software ledgers and commission records.",
      "KYC and AML workflows connect ticketing, document storage, and escalation paths for auditors.",
      "Executive dashboards narrate regulatory status with heatmaps and recommended next steps."
    ],
    icon: ShieldCheck
  },
  {
    title: "Growth intelligence cadence",
    description:
      "Position Cloud MLM Software as the thought leader on responsible payments across Oceania and nearby markets.",
    bullets: [
      "Content engines convert telemetry into press releases, analyst briefings, and partner reports.",
      "Scenario planning highlights FX sensitivity and fee optimisation opportunities.",
      "Field enablement receives insights on regional promotions and launch sequencing."
    ],
    icon: ChartLineUp
  }
];

const EXECUTION_STEPS: Step[] = [
  {
    label: "1. Assess",
    focus: "Translate archive-era messaging into modern stakeholder requirements.",
    detail:
      "Capture promises from the WordPress content—great modules, plans, services—and map them to today&apos;s executive expectations.",
    icon: Compass
  },
  {
    label: "2. Integrate",
    focus: "Wire ANZ Pacific APIs, batch files, and settlement feeds into Cloud MLM Software.",
    detail:
      "Ensure commissions, CRM, and finance systems consume the same data with observability across environments.",
    icon: Waveform
  },
  {
    label: "3. Enable",
    focus: "Activate teams with playbooks, AI copilots, and training frameworks.",
    detail:
      "Revenue, compliance, and customer success squads receive scripts, dashboards, and automation tailored to their mandate.",
    icon: Handshake
  },
  {
    label: "4. Optimise",
    focus: "Run experiments, monitor KPIs, and publish outcomes.",
    detail:
      "Intelligence loops surface conversion, chargeback, and liquidity signals so leaders can iterate responsibly.",
    icon: ChartLineUp
  }
];

const MARKET_PANELS: MarketPanel[] = [
  {
    market: "Australia",
    focus: "High-volume card and bank transfer orchestration with GST reporting precision.",
    intelligence:
      "AI highlights state-by-state adoption, rebate performance, and regulatory watchpoints for leadership."
  },
  {
    market: "New Zealand",
    focus: "Dual-currency commerce with instant bank payments and distributor payouts.",
    intelligence:
      "Treasury dashboards surface FX trends and settlement velocity to maintain working capital strength."
  },
  {
    market: "Fiji",
    focus: "Tourism-aligned offers and mobile-first enrolment flows.",
    intelligence:
      "Field enablement receives micro-insights on campaign performance tied to local events and seasons."
  },
  {
    market: "Papua New Guinea",
    focus: "Hybrid offline-online operations with focused AML oversight.",
    intelligence:
      "Evidence packs track high-risk transactions and provide board-ready visibility for expansion sign-off."
  }
];

const GOVERNANCE_CUES: GovernanceCue[] = [
  {
    headline: "Executive briefings",
    detail: "Weekly AI-authored dashboards summarise settlement health, disputes, and compliance status."
  },
  {
    headline: "Stakeholder storytelling",
    detail: "Transform financial data into narratives for investors, regulators, and strategic partners."
  },
  {
    headline: "Scenario foresight",
    detail: "Model policy shifts, FX changes, or new market launches before committing resources."
  },
  {
    headline: "Documentation control",
    detail: "Maintain versioned policy, SOP, and risk registers with instant recall during audits."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "ANZ Pacific Payment Gateway for Cloud MLM Software";
  const description =
    "Craft a governance-strong ANZ Pacific payment experience inside Cloud MLM Software with AI insights, regional storytelling, and resilient integrations.";

  return {
    title,
    description,
    keywords: [
      "ANZ Pacific payment gateway",
      "Cloud MLM Software banking integration",
      "Oceania payment orchestration",
      "AI finance governance",
      "direct selling payments Australia"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/anz-pacific", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AnzPacificPageProps = {
  params: { lang: SupportedLocale };
};

export default function AnzPacificPage({ params }: AnzPacificPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-blue-50 to-emerald-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(37,99,235,0.2),transparent_55%),radial-gradient(circle_at_88%_12%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(59,130,246,0.16),transparent_60%)]" />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              ANZ Pacific excellence
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Deliver board-grade ANZ Pacific payments for ambitious MLM enterprises.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              We reinterpreted the archived modules, plans, and services into an Oceania-focused payment story. Cloud MLM
              Software blends governance, intelligence, and customer delight for ANZ Pacific acquiring.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Speak with ANZ Pacific advisors
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary/10 dark:border-white/40 dark:text-white dark:hover:bg-white/10"
              >
                <Link href={demoHref}>
                  Explore compliance-first demo
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 blur-2xl">
              <div className="h-full w-full rounded-3xl bg-gradient-to-br from-blue-400/20 via-emerald-300/20 to-sky-300/20 dark:from-blue-400/20 dark:via-emerald-400/20 dark:to-sky-400/20" />
            </div>
            <div className="relative grid gap-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur-sm dark:border-white/15 dark:bg-white/10">
              {HERO_INSIGHTS.map((insight) => {
                const Icon = insight.icon;
                return (
                  <article
                    key={insight.title}
                    className="flex flex-col gap-3 rounded-2xl border border-border/40 bg-white/80 p-4 shadow-sm dark:border-white/20 dark:bg-white/5"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                        {insight.title}
                      </p>
                      <p className="text-xl font-semibold text-foreground dark:text-white">{insight.value}</p>
                    </div>
                    <p className="text-xs text-muted-foreground dark:text-white/70">{insight.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-14">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Strategic pillars for ANZ Pacific + Cloud MLM Software
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Each pillar honours the archived promise—robust modules, flexible plans—while elevating the narrative for
            today&apos;s executive audiences.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {STRATEGIC_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-x-6 top-5 h-24 rounded-3xl bg-gradient-to-br from-blue-300/20 via-emerald-200/20 to-sky-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-foreground dark:text-white">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{pillar.description}</p>
                  <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-primary dark:text-emerald-200" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-white via-blue-50 to-emerald-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/15 via-transparent to-transparent dark:from-white/10" />
        <div className="container space-y-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
                A four-step execution framework
              </h2>
              <p className="text-base text-muted-foreground dark:text-white/80">
                The archived site listed features and services; we translated that into a repeatable execution playbook for
                ANZ Pacific.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link href={modulesHref}>
                View support modules
                <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {EXECUTION_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.label}
                  className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                        {step.label}
                      </p>
                      <p className="text-sm font-semibold text-foreground dark:text-white">{step.focus}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{step.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Regional insights at boardroom quality
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Each market gains bespoke intelligence, ensuring leaders steer expansion with clarity.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {MARKET_PANELS.map((panel) => (
            <article
              key={panel.market}
              className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary dark:text-emerald-200">
                {panel.market}
              </p>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-foreground dark:text-white">Focus</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{panel.focus}</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-foreground dark:text-white">Intelligence</h4>
                <p className="text-sm text-muted-foreground dark:text-white/70">{panel.intelligence}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-blue-200/35 via-emerald-200/30 to-sky-200/30 px-6 py-16 shadow-xl dark:border-white/15 dark:from-blue-300/20 dark:via-emerald-400/20 dark:to-sky-400/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.45),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/70 dark:text-white/80">
              Governance cockpit
            </p>
            <h2 className="text-3xl font-semibold text-primary-foreground dark:text-white">
              Keep executives and AI copilots aligned on ANZ Pacific performance.
            </h2>
            <p className="max-w-lg text-base text-primary-foreground/80 dark:text-white/80">
              Cloud MLM Software ensures every signal—from policy shifts to liquidity changes—is captured, narrated, and
              actioned with precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary">
                <Link href={contactHref}>
                  Schedule governance workshop
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/60 text-primary-foreground hover:bg-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  View intelligence demo
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {GOVERNANCE_CUES.map((cue) => (
              <article
                key={cue.headline}
                className="flex flex-col gap-3 rounded-2xl border border-primary/30 bg-white/85 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                  <MapPin className="h-4 w-4" aria-hidden />
                </span>
                <h3 className="text-base font-semibold">{cue.headline}</h3>
                <p className="text-sm text-primary-foreground/80 dark:text-white/80">{cue.detail}</p>
              </article>
            ))}
            <article className="flex flex-col gap-3 rounded-2xl border border-primary/30 bg-white/85 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <FileText className="h-4 w-4" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Policy traceability</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Versioned SOPs, agreements, and compliance evidence stay linked to every payment milestone.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
