import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { ArrowUpRight } from "lucide-react";
import {
  ChartLineUp,
  CirclesThreePlus,
  CreditCard,
  CubeFocus,
  Devices,
  Globe,
  Handshake,
  Lightning,
  NotePencil,
  ShieldCheck,
  Sparkle,
  StackSimple,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  title: string;
  value: string;
  description: string;
};

type StrategicAnchor = {
  title: string;
  description: string;
  icon: IconType;
  accent: string;
};

type ModuleStream = {
  name: string;
  summary: string;
  enablement: string;
  icon: IconType;
};

type RolloutStage = {
  phase: string;
  focus: string;
  detail: string;
  icon: IconType;
};

type CountrySignal = {
  country: string;
  emphasis: string;
  compliance: string;
};

type IntelligenceCue = {
  headline: string;
  detail: string;
  icon: IconType;
};

const HERO_METRICS: Metric[] = [
  {
    title: "Conversion uplift",
    value: "+19%",
    description: "Average uplift when 2C2P replaces legacy checkout flows for Southeast Asian enrolments."
  },
  {
    title: "Settlement windows",
    value: "T+1 – T+3",
    description: "Treasury-ready clearing clocks tuned per acquiring bank across Thailand and Singapore."
  },
  {
    title: "Dispute resilience",
    value: "96% resolved",
    description: "Chargeback automation stitched into Cloud MLM Software ticketing for escalations."
  }
];

const STRATEGIC_ANCHORS: StrategicAnchor[] = [
  {
    title: "Enterprise-grade trust",
    description:
      "2C2P payment gateway offers secure, fast, and seamless payment flows that match corporate governance mandates and AI-assisted monitoring.",
    icon: ShieldCheck,
    accent: "from-emerald-400/40 via-emerald-600/30 to-slate-900/60"
  },
  {
    title: "Experience continuity",
    description:
      "Deliver a frictionless journey from demo to purchase with device-aware checkouts, Apple Pay readiness, and conversational AI nudges for hesitant buyers.",
    icon: Devices,
    accent: "from-sky-400/40 via-indigo-500/30 to-slate-900/60"
  },
  {
    title: "Regional expansion lane",
    description:
      "Unlock Southeast Asia coverage through a single orchestration layer while preserving tax, FX, and reporting precision for every affiliate programme.",
    icon: Globe,
    accent: "from-amber-300/40 via-orange-500/30 to-slate-900/60"
  }
];

const MODULE_STREAMS: ModuleStream[] = [
  {
    name: "Multi currency module",
    summary: "FX-ready ledgers keep Thai Baht, Singapore Dollar, USD, and EUR balances audit friendly.",
    enablement:
      "Treasury teams receive AI summarised variance alerts before settlements post, ensuring smarter liquidity controls.",
    icon: Wallet
  },
  {
    name: "Ticket system module",
    summary: "Escalate payment disputes and KYC submissions without breaking distributor momentum.",
    enablement:
      "Every case inherits gateway data, customer history, and AI-generated response drafts so analysts resolve within hours.",
    icon: NotePencil
  },
  {
    name: "Auto responder suite",
    summary: "Trigger contextual confirmations, approval notices, and retry guidance across languages.",
    enablement:
      "Localized narratives are orchestrated for English and Thai audiences with adaptive sequencing for new ranks.",
    icon: Sparkle
  },
  {
    name: "E-Voucher + E-Wallet synergy",
    summary: "Tokenise kit purchases and payouts while the e-wallet module guards instant commissions.",
    enablement:
      "2C2P tokens flow straight into voucher redemption, unlocking launch promotions without sacrificing compliance.",
    icon: CreditCard
  },
  {
    name: "Backup manager",
    summary: "Automated snapshots guarantee transactional continuity during regional maintenance windows.",
    enablement:
      "Disaster recovery rehearsals become checklist-driven, with AI assistants flagging data drift or sync delays.",
    icon: StackSimple
  }
];

const ROLLOUT_STAGES: RolloutStage[] = [
  {
    phase: "Signal mapping",
    focus: "Capture legacy WordPress learnings and define the executive success metrics.",
    detail:
      "We translate the archived content—including the August 28th, 2024 regulatory updates—into modern funnel KPIs and tracking cadences.",
    icon: CubeFocus
  },
  {
    phase: "Integration spine",
    focus: "Wire 2C2P APIs into Cloud MLM Software without disrupting present-day modules.",
    detail:
      "Payment intents, refunds, and reconciliation events are streamed through AI-observed pipelines with alert thresholds at every hop.",
    icon: Lightning
  },
  {
    phase: "Compliance choreography",
    focus: "Board-ready documentation for AML, PCI-DSS, and distributor lifecycle checkpoints.",
    detail:
      "Ticket and document workflows fold into a single console so auditors, banks, and legal teams see the same truth in real time.",
    icon: ChartLineUp
  },
  {
    phase: "Acceleration runway",
    focus: "Launch feedback loops for product, marketing, and field leadership.",
    detail:
      "Conversational AI surfaces conversion blockers, while growth pods iterate promotions with informed guardrails.",
    icon: Handshake
  }
];

const COUNTRY_SIGNALS: CountrySignal[] = [
  {
    country: "Thailand",
    emphasis: "Primary acquiring hub with deep PromptPay adoption and QR-first checkout habits.",
    compliance: "Aligns with Bank of Thailand PSDH and 2C2P dispute frameworks for network marketing models."
  },
  {
    country: "Singapore",
    emphasis: "Cross-border headquarters routing with MAS-compliant settlement visibility.",
    compliance: "Real-time documentation trails back every distributor payout to audited statements."
  },
  {
    country: "Malaysia",
    emphasis: "Localized language journeys and instalment-ready purchase flows.",
    compliance: "KYC sequences reference Bank Negara Malaysia directives before wallet top-ups clear."
  },
  {
    country: "Philippines",
    emphasis: "Mobile-first card and alternative payments for hyper-growth field teams.",
    compliance: "Integrated ticketing captures AML reporting and bureau submissions without manual swivel-chair work."
  }
];

const INTELLIGENCE_CUES: IntelligenceCue[] = [
  {
    headline: "AIO discovery scripts",
    detail:
      "AI-led demo playbooks tailor questions for 2C2P prospects, surfacing pain points tied to conversion leakage, FX, and dispute fatigue.",
    icon: CirclesThreePlus
  },
  {
    headline: "Predictive readiness board",
    detail:
      "Dashboards benchmark every launch city, blending sentiment, payment approval rates, and distributor onboarding speeds.",
    icon: ChartLineUp
  },
  {
    headline: "Thought leadership cadence",
    detail:
      "Monthly insights position Cloud MLM Software as the regional authority on payment orchestration for direct selling enterprises.",
    icon: Sparkle
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "2C2P Payment Gateway for Cloud MLM Software";
  const description =
    "Design a secure, high-conversion 2C2P payment gateway experience with Cloud MLM Software—regional coverage, AI automation, and compliance-first execution.";

  return {
    title,
    description,
    keywords: [
      "2C2P payment gateway",
      "Cloud MLM Software payments",
      "Southeast Asia MLM payments",
      "secure payment gateway for MLM",
      "AI optimized payment gateway"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/2c2p", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type TwoC2PPageProps = {
  params: { lang: SupportedLocale };
};

export default function TwoC2PPage({ params }: TwoC2PPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-50 via-white to-emerald-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_5%_15%,rgba(45,212,191,0.14),transparent_55%),radial-gradient(circle_at_90%_10%,rgba(56,189,248,0.16),transparent_55%),radial-gradient(circle_at_40%_80%,rgba(147,197,253,0.14),transparent_60%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,540px)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Payment gateway leadership
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              2C2P payment gateway orchestration for visionary MLM operators.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Cloud MLM Software recasts the legacy WordPress narrative into an AI-optimised, board-ready experience.
              Every distributor, customer, and finance leader enjoys secure, fast, and seamless 2C2P processing across
              Southeast Asia&apos;s most demanding markets.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href={contactHref}>
                  Talk to a payment strategist
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary/10 dark:border-white/40 dark:text-white dark:hover:bg-white/10"
              >
                <Link href={demoHref}>
                  Explore live demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {HERO_METRICS.map((metric) => (
                <article
                  key={metric.title}
                  className="rounded-3xl border border-border/60 bg-white/90 p-6 shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-white/10"
                >
                  <p className="text-sm uppercase tracking-wide text-muted-foreground dark:text-white/70">{metric.title}</p>
                  <p className="mt-3 text-2xl font-semibold text-foreground dark:text-white">{metric.value}</p>
                  <p className="mt-3 text-sm text-muted-foreground dark:text-white/70">{metric.description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-primary/30 via-emerald-400/30 to-sky-400/30 blur-2xl dark:from-primary/20 dark:via-emerald-300/20 dark:to-sky-300/20" />
            <div className="relative h-full rounded-[32px] border border-white/50 bg-white/70 p-8 shadow-xl backdrop-blur-lg dark:border-white/10 dark:bg-white/5">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-10 w-10 text-primary dark:text-emerald-300" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary dark:text-emerald-200">2C2P</p>
                    <p className="text-base font-medium text-foreground/80 dark:text-white/80">Command centre snapshot</p>
                  </div>
                </div>
                <dl className="space-y-4 text-sm text-muted-foreground dark:text-white/70">
                  <div className="flex items-start justify-between gap-6 border-b border-border/60 pb-3 dark:border-white/10">
                    <dt className="max-w-[160px] font-medium text-foreground dark:text-white">Pre-set demo stream</dt>
                    <dd className="text-right">Walk through standardised checkout experiences with AI commentary.</dd>
                  </div>
                  <div className="flex items-start justify-between gap-6 border-b border-border/60 pb-3 dark:border-white/10">
                    <dt className="max-w-[160px] font-medium text-foreground dark:text-white">Custom demo lab</dt>
                    <dd className="text-right">Prototype bespoke enrolment and payout loops for leadership sign-off.</dd>
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <dt className="max-w-[160px] font-medium text-foreground dark:text-white">AI calculators</dt>
                    <dd className="text-right">Model conversion, settlement, and FX sensitivity before launch day.</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-14">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Strategic anchors for a 2C2P-powered MLM ecosystem
          </h2>
          <p className="text-base text-muted-foreground">
            Each anchor elevates the original WordPress-era messaging—secure, fast, seamless—into an intelligent operating
            model tuned for scale, compliance, and AI collaboration.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {STRATEGIC_ANCHORS.map((anchor) => {
            const Icon = anchor.icon;
            return (
              <article
                key={anchor.title}
                className="group relative overflow-hidden rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div
                  className={`pointer-events-none absolute inset-x-4 top-4 h-24 rounded-3xl bg-gradient-to-br ${anchor.accent} opacity-0 blur-xl transition group-hover:opacity-100`}
                />
                <div className="relative space-y-5">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-foreground dark:text-white">{anchor.title}</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{anchor.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-white via-slate-50 to-emerald-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/10 via-transparent to-transparent dark:from-white/10" />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary dark:text-emerald-200">
              Modules in motion
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
              Reimagined modules for Cloud MLM Software + 2C2P synergy
            </h2>
            <p className="text-base text-muted-foreground dark:text-white/80">
              The legacy modules list—multi currency, ticket system, auto responder, e-voucher, e-wallet, backup
              manager—now connects with AI observability and predictive routing. Leaders gain clarity, the field gains
              confidence, and finance gains real-time visibility.
            </p>
            <Button asChild size="lg">
              <Link href={modulesHref}>
                Review full module library
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {MODULE_STREAMS.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.name}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-white/80 p-6 shadow-sm dark:border-white/15 dark:bg-white/5"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground dark:text-white">{module.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground dark:text-white/70">{module.summary}</p>
                  </div>
                  <p className="text-sm font-medium text-primary dark:text-emerald-200">{module.enablement}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Rollout blueprint: from archived page to AI-native execution
            </h2>
            <p className="text-base text-muted-foreground">
              We orchestrate every stage with the precision you expect from a thought leader in MLM software
              development—translating historical insights into future-proof momentum.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background/60 p-6 shadow-sm dark:border-white/15 dark:bg-white/5">
            <h3 className="text-lg font-semibold text-foreground dark:text-white">Executive fast facts</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground dark:text-white/70">
              <li className="flex items-start gap-3">
                <Sparkle className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                Custom demo streams replicate historical workflows while surfacing modern AI opportunities.
              </li>
              <li className="flex items-start gap-3">
                <Sparkle className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                Automatic knowledge capture turns every support ticket into training data for field enablement.
              </li>
              <li className="flex items-start gap-3">
                <Sparkle className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                Governance dashboards keep board, banking, and compliance stakeholders in permanent alignment.
              </li>
            </ul>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {ROLLOUT_STAGES.map((stage) => {
            const Icon = stage.icon;
            return (
              <article
                key={stage.phase}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-white/80 p-6 shadow-sm dark:border-white/15 dark:bg-white/5"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary dark:text-emerald-200">
                      {stage.phase}
                    </p>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{stage.focus}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">{stage.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_55%),radial-gradient(circle_at_80%_50%,rgba(99,102,241,0.12),transparent_60%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(147,197,253,0.14),transparent_55%),radial-gradient(circle_at_80%_50%,rgba(56,189,248,0.14),transparent_60%)]" />
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Country signals we monitor for 2C2P success
            </h2>
            <p className="text-base text-muted-foreground">
              The legacy page promised a list of supported countries. We now wrap each territory in measurable actions,
              giving executives immediate clarity on go-live requirements.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {COUNTRY_SIGNALS.map((signal) => (
              <article
                key={signal.country}
                className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm dark:border-white/15 dark:bg-white/5"
              >
                <header className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-foreground dark:text-white">{signal.country}</h3>
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary dark:bg-white/10 dark:text-white">
                    Regional lane
                  </span>
                </header>
                <p className="mt-3 text-sm font-medium text-primary dark:text-emerald-200">{signal.emphasis}</p>
                <p className="mt-2 text-sm text-muted-foreground dark:text-white/70">{signal.compliance}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Intelligence cues that keep executives, product, and field teams aligned
            </h2>
            <p className="text-base text-muted-foreground">
              Artificial Intelligence Optimisation (AIO) elevates our dashboards, playbooks, and alerts—ensuring the 2C2P
              programme remains ahead of competitors and always boardroom ready.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-white/80 p-6 shadow-sm dark:border-white/15 dark:bg-white/5">
            <h3 className="text-lg font-semibold text-foreground dark:text-white">Key leadership takeaways</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground dark:text-white/70">
              <li className="flex items-start gap-3">
                <Sparkle className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                Curated content establishes Cloud MLM Software as the thought leader in MLM payment orchestration.
              </li>
              <li className="flex items-start gap-3">
                <Sparkle className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                AI-generated insights convert raw payment telemetry into decisive, investor-grade narratives.
              </li>
              <li className="flex items-start gap-3">
                <Sparkle className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                Field enablement teams gain scripts tailored to every payment milestone and escalation path.
              </li>
            </ul>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {INTELLIGENCE_CUES.map((cue) => {
            const Icon = cue.icon;
            return (
              <article
                key={cue.headline}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-white/15 dark:bg-white/5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground dark:text-white">{cue.headline}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{cue.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-primary/20 via-emerald-400/20 to-sky-400/20 p-10 shadow-lg dark:from-primary/20 dark:via-emerald-300/20 dark:to-sky-300/20">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.45),transparent_55%)]" />
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70 dark:text-white/80">
                Move from insight to action
              </p>
              <h2 className="text-3xl font-semibold text-primary-foreground dark:text-white">
                Purchase AI-powered Cloud MLM Software today and deploy 2C2P with confidence.
              </h2>
              <p className="text-base text-primary-foreground/80 dark:text-white/80">
                Automate, manage, and grow your network with a payment gateway that understands regional nuance, compliance
                rigour, and AI-powered growth loops.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary">
                <Link href={contactHref}>
                  Speak with an expert
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/60 text-primary-foreground hover:bg-white/20 dark:text-white">
                <Link href={demoHref}>
                  Try the payment demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
