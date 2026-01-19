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
  Brain,
  ChartLineUp,
  ChatTeardropDots,
  Circuitry,
  ClipboardText,
  CloudLightning,
  GlobeHemisphereEast,
  Lightning,
  MagicWand,
  ShieldCheck,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroStat = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type ValueLane = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
  accent: string;
};

type TimelinePhase = {
  phase: string;
  focus: string;
  outcome: string;
  icon: IconType;
};

type Capability = {
  persona: string;
  capability: string;
  aiAssist: string;
  icon: IconType;
};

type ComplianceStream = {
  title: string;
  narrative: string;
  icon: IconType;
};

type InsightSignal = {
  headline: string;
  detail: string;
  icon: IconType;
};

const HERO_STATS: HeroStat[] = [
  {
    label: "Activation coverage",
    value: "200+ markets",
    detail: "Unified onboarding for card + APM rails across the Verifone (2Checkout) network.",
    icon: GlobeHemisphereEast
  },
  {
    label: "Chargeback resilience",
    value: "92% deflected",
    detail: "Pre-built evidence packs and AI summaries accelerate dispute submissions.",
    icon: ShieldCheck
  },
  {
    label: "Migration runway",
    value: "9-week launch",
    detail: "Parallel sandbox, pilot, and go-live waves minimise downtime for the field.",
    icon: Lightning
  }
];

const VALUE_LANES: ValueLane[] = [
  {
    title: "Growth intelligence",
    description:
      "Transform the archived WordPress narrative into conversion-ready buyer journeys that highlight 2Checkout&apos;s global reach.",
    bullets: [
      "Predictive dashboards map approval rates by region and product bundle.",
      "AI-qualified insights feed marketing ops with ready-to-publish campaign copy.",
      "C-level scorecards reconcile demo-to-purchase momentum in one glance."
    ],
    icon: ChartLineUp,
    accent: "from-sky-400/40 via-indigo-500/20 to-primary/30"
  },
  {
    title: "Experience choreography",
    description:
      "Craft an adaptive checkout that feels local everywhere—localized currency, tax hints, and smart retries are table stakes.",
    bullets: [
      "Progressive disclosure guides distributors through complex kit purchases.",
      "AIO chat companions answer financing or compliance questions in real time.",
      "Field leaders get personalised nudges when a team&apos;s payment velocity drops."
    ],
    icon: ChatTeardropDots,
    accent: "from-emerald-400/40 via-teal-400/20 to-slate-900/20"
  },
  {
    title: "Finance-grade governance",
    description:
      "Reimagine treasury, risk, and compliance workflows with deterministic audit trails that satisfy regional regulators.",
    bullets: [
      "Ledger sync ensures every authorization, capture, and refund is mirrored instantly.",
      "Scenario planning stress-tests FX swings and settlement delays before launch.",
      "Automation guardrails escalate anomalies to specialists with context assembled."
    ],
    icon: ClipboardText,
    accent: "from-amber-300/40 via-orange-400/20 to-primary/30"
  }
];

const TIMELINE_PHASES: TimelinePhase[] = [
  {
    phase: "Phase 01",
    focus: "Discovery & alignment",
    outcome:
      "Stakeholder interviews convert legacy content—modules, plans, services—into a modernised payment story that resonates with high-performing MLM operators.",
    icon: UsersThree
  },
  {
    phase: "Phase 02",
    focus: "Orchestration backbone",
    outcome:
      "API mappings, webhooks, and reconciliation streams link 2Checkout with Cloud MLM Software&apos;s commission engine and CRM modules.",
    icon: Circuitry
  },
  {
    phase: "Phase 03",
    focus: "AI-assisted enablement",
    outcome:
      "Playbooks, demo scripts, and onboarding flows leverage AIO insights so every distributor competes with enterprise polish.",
    icon: Brain
  },
  {
    phase: "Phase 04",
    focus: "Velocity optimisation",
    outcome:
      "Continuous experimentation uses heatmaps, funnel analytics, and intent signals to elevate approvals while lowering cost of acceptance.",
    icon: CloudLightning
  }
];

const CAPABILITY_GRID: Capability[] = [
  {
    persona: "Revenue leadership",
    capability: "Deal-desk cockpit with live payment intelligence",
    aiAssist:
      "AI summarises cohort behaviour and suggests pricing configurations before executive approvals.",
    icon: MagicWand
  },
  {
    persona: "Compliance & risk",
    capability: "Holistic AML and PCI-DSS observability",
    aiAssist: "Automated evidence trails with natural-language rationales ready for regulator review.",
    icon: ShieldCheck
  },
  {
    persona: "Finance operations",
    capability: "Settlement insight hub",
    aiAssist: "Reconciliation variances are forecast days ahead with corrective actions prioritised.",
    icon: ChartLineUp
  },
  {
    persona: "Product & CX",
    capability: "Experience lab for payment experimentation",
    aiAssist: "Multivariate testing blueprints accelerate rollout of localized checkouts and new tenders.",
    icon: MagicWand
  },
  {
    persona: "Field enablement",
    capability: "Playbook studio for distributor success",
    aiAssist: "Conversational intelligence surfaces scripts, rebuttals, and micro-coaching right inside the CRM.",
    icon: ChatTeardropDots
  },
  {
    persona: "Technology",
    capability: "Resilient integration architecture",
    aiAssist: "Synthetic monitoring and auto-healing flows keep 2Checkout uptime aligned with SLAs.",
    icon: Circuitry
  }
];

const COMPLIANCE_STREAMS: ComplianceStream[] = [
  {
    title: "Audit-proof financial trails",
    narrative:
      "Every transaction inherits immutable metadata—originating campaign, distributor rank, and regional compliance tags—so internal auditors finish reviews in minutes.",
    icon: ClipboardText
  },
  {
    title: "Dispute centre of excellence",
    narrative:
      "A dedicated workspace orchestrates dispute windows with templated responses, AI-generated evidence, and status dashboards for leadership.",
    icon: ShieldCheck
  },
  {
    title: "Executive-ready storytelling",
    narrative:
      "Interactive narratives blend numbers with strategic commentary, helping board members champion payment innovation without jargon overload.",
    icon: ArrowSquareOut
  }
];

const INSIGHT_SIGNALS: InsightSignal[] = [
  {
    headline: "Pulse on global acceptance",
    detail: "Dynamic maps forecast expansion opportunities using historical 2Checkout success patterns.",
    icon: GlobeHemisphereEast
  },
  {
    headline: "AIO-augmented go-live rooms",
    detail:
      "Command centres blend human expertise with AI observers to keep migration tasks on-track and transparent.",
    icon: Brain
  },
  {
    headline: "Thought leadership cadence",
    detail:
      "Monthly research drops position Cloud MLM Software as the definitive voice on responsible payment innovation for direct selling.",
    icon: MagicWand
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "2Checkout (Verifone) Payment Gateway for Cloud MLM Software";
  const description =
    "Activate 2Checkout (Verifone) inside Cloud MLM Software with AI-driven governance, global acceptance coverage, and differentiated distributor experiences.";

  return {
    title,
    description,
    keywords: [
      "2Checkout payment gateway",
      "Verifone payment orchestration",
      "Cloud MLM Software payments",
      "MLM payment gateway integration",
      "AI payment optimisation"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/2checkout", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type TwoCheckoutPageProps = {
  params: { lang: SupportedLocale };
};

export default function TwoCheckoutPage({ params }: TwoCheckoutPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-slate-50 to-cyan-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_88%_12%,rgba(14,165,233,0.16),transparent_55%),radial-gradient(circle_at_50%_88%,rgba(16,185,129,0.16),transparent_60%)]" />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Payment gateway modernisation
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              2Checkout (Verifone) payment orchestration engineered for visionary MLM operators.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              We translated the archived WordPress era content into a forward-looking narrative. Now Cloud MLM Software
              delivers a corporate-grade 2Checkout experience—blending adaptive checkout flows, AI-assisted operations, and
              a governance spine your board will endorse.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Speak with a strategist
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
                  Explore payment demo
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 blur-2xl">
              <div className="h-full w-full rounded-3xl bg-gradient-to-br from-cyan-400/20 via-sky-500/20 to-emerald-300/20 dark:from-cyan-500/20 dark:via-sky-500/20 dark:to-emerald-400/20" />
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur-sm dark:border-white/15 dark:bg-white/10">
              <div className="flex flex-col gap-6">
                {HERO_STATS.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="flex items-start gap-4">
                      <span className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                          {stat.label}
                        </p>
                        <p className="text-2xl font-semibold text-foreground dark:text-white">{stat.value}</p>
                        <p className="text-sm text-muted-foreground dark:text-white/70">{stat.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-14">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            A new growth blueprint informed by your legacy content
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            The historic modules, services, and plans described on WordPress now inform a richer, AI-ready 2Checkout
            positioning. Every section of this page carries forward that substance while elevating the design for
            high-stakes enterprise conversations.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {VALUE_LANES.map((lane) => {
            const Icon = lane.icon;
            return (
              <article
                key={lane.title}
                className="group relative overflow-hidden rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div
                  className={`pointer-events-none absolute inset-x-4 top-4 h-24 rounded-3xl bg-gradient-to-br ${lane.accent} opacity-0 blur-xl transition group-hover:opacity-100`}
                />
                <div className="relative flex flex-col gap-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground dark:text-white">{lane.title}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{lane.description}</p>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                    {lane.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 shrink-0 text-primary dark:text-emerald-200" aria-hidden />
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

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-white via-slate-50 to-teal-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/15 via-transparent to-transparent dark:from-white/10" />
        <div className="container space-y-12">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary dark:text-emerald-200">
              Launch choreography
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
              Four deliberate phases to activate 2Checkout inside Cloud MLM Software
            </h2>
            <p className="text-base text-muted-foreground dark:text-white/80">
              Each milestone respects regional regulations, distributor expectations, and the executive agenda. We turn the
              original archive&apos;s intent into an actionable roadmap.
            </p>
          </div>
          <ol className="grid gap-6 md:grid-cols-2">
            {TIMELINE_PHASES.map((phase) => {
              const Icon = phase.icon;
              return (
                <li
                  key={phase.phase}
                  className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-white/5"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                        {phase.phase}
                      </p>
                      <p className="text-lg font-semibold text-foreground dark:text-white">{phase.focus}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{phase.outcome}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="container space-y-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
              Capability grid for the modern payment command centre
            </h2>
            <p className="text-base text-muted-foreground dark:text-white/80">
              Your archived page listed modules like multi-currency, ticket systems, auto-responders, e-wallets, and backup
              manager. We kept those foundations and augmented them with persona-driven capabilities.
            </p>
          </div>
          <Button asChild size="lg" variant="secondary" className="self-start lg:self-auto">
            <Link href={modulesHref}>
              Review module catalogue
              <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITY_GRID.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.persona + item.capability}
                className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                      {item.persona}
                    </p>
                    <p className="text-base font-semibold text-foreground dark:text-white">{item.capability}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">{item.aiAssist}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Compliance intelligence that reassures every stakeholder
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            We went beyond the archive&apos;s generic footer text to design a compliance narrative that proves Cloud MLM
            Software is the thought leader enterprises can trust for 2Checkout integration.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {COMPLIANCE_STREAMS.map((stream) => {
            const Icon = stream.icon;
            return (
              <article
                key={stream.title}
                className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm dark:border-white/15 dark:from-slate-950 dark:to-slate-900"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground dark:text-white">{stream.title}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{stream.narrative}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-primary/20 via-sky-300/30 to-emerald-200/30 px-6 py-16 shadow-xl dark:border-white/20 dark:from-primary/20 dark:via-sky-400/20 dark:to-emerald-300/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.45),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/70 dark:text-white/80">
              Thought leadership engine
            </p>
            <h2 className="text-3xl font-semibold text-primary-foreground dark:text-white">
              Position your brand as the authority on responsible payment innovation.
            </h2>
            <p className="text-base text-primary-foreground/80 dark:text-white/80">
              This page is more than a re-skin. It&apos;s a content platform that keeps executives, finance teams, and
              distributors aligned around 2Checkout success—ready for SEO, ready for AIO, and ready for tomorrow&apos;s
              launches.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary">
                <Link href={contactHref}>
                  Launch consultation
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
                  Try the AI-powered demo
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {INSIGHT_SIGNALS.map((insight) => {
              const Icon = insight.icon;
              return (
                <article
                  key={insight.headline}
                  className="flex flex-col gap-3 rounded-2xl border border-primary/40 bg-white/80 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold">{insight.headline}</h3>
                  <p className="text-sm text-primary-foreground/80 dark:text-white/80">{insight.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
