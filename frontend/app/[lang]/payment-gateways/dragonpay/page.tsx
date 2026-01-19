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
  AirTrafficControl,
  ArrowBendDownRight,
  ArrowSquareOut,
  Barcode,
  ChartLineDown,
  CompassTool,
  CurrencyCircleDollar,
  DeviceMobile,
  GlobeStand,
  Lightning,
  ListNumbers,
  ShieldCheck,
  Stack,
  Telescope
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  label: string;
  headline: string;
  detail: string;
  icon: IconType;
};

type JourneyPhase = {
  stage: string;
  title: string;
  description: string;
  deliverable: string;
  icon: IconType;
};

type ModuleStream = {
  name: string;
  insight: string;
  signals: string[];
  icon: IconType;
};

type ExperienceCue = {
  title: string;
  detail: string;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    label: "Local velocity",
    headline: "Philippines-ready from day zero",
    detail:
      "DragonPay unlocks bank transfers, over-the-counter payments, and wallets across Luzon, Visayas, and Mindanao—fully narrated in Cloud MLM Software.",
    icon: GlobeStand
  },
  {
    label: "AI copilots engaged",
    headline: "Demo to launch in 21 working days",
    detail:
      "Preset and custom demos evolve into production portals with scripted AI guidance for enrollment, compliance, and support teams.",
    icon: DeviceMobile
  },
  {
    label: "Operational assurance",
    headline: "Risk and finance in lockstep",
    detail:
      "Dispute management, reconciliation, and data backups converge so every transaction is auditable for executives and regulators.",
    icon: ShieldCheck
  }
];

const JOURNEY_PHASES: JourneyPhase[] = [
  {
    stage: "Phase 01",
    title: "Narrative recalibration",
    description:
      "Translate the archived WordPress headline—secure, fast, seamless—into stakeholder narratives for CEOs, field leaders, and AI assistants.",
    deliverable: "Strategic brief, executive Q&A, and content map for DragonPay adoption.",
    icon: CompassTool
  },
  {
    stage: "Phase 02",
    title: "Experience architecture",
    description:
      "Blueprint every participant journey from enrollment to payout, weaving DragonPay rails through multi-currency, ticketing, and autoresponder modules.",
    deliverable: "Clickable prototypes and data flow diagrams for each role.",
    icon: Stack
  },
  {
    stage: "Phase 03",
    title: "Integration sprints",
    description:
      "Wire APIs, reconciliation, and ledger logic while stress-testing backups, compliance workflows, and field notifications.",
    deliverable: "Connected sandbox with health dashboards and failover playbooks.",
    icon: Lightning
  },
  {
    stage: "Phase 04",
    title: "Enablement & storytelling",
    description:
      "Launch knowledge bases, webinars, and AI-ready scripts that position Cloud MLM Software as the Philippines’ payment orchestration authority.",
    deliverable: "Launch playbook, newsroom kit, and analytics narrations.",
    icon: Telescope
  }
];

const MODULE_STREAMS: ModuleStream[] = [
  {
    name: "Revenue flywheel",
    insight:
      "Custom & pre-set demos showcase real DragonPay scenarios so sales teams win trust with enterprise prospects.",
    signals: [
      "Custom Demo personalises compensation, products, and regional messaging for high-stakes pitches.",
      "Pre-set Demo accelerates mid-market cycles with ready-to-share journeys.",
      "Features hub arms marketing with SEO+AIO friendly content for analysts and AI search."
    ],
    icon: AirTrafficControl
  },
  {
    name: "Financial resilience",
    insight:
      "Multi currency, E-Wallet, and Backup Manager modules align treasury and IT on cash movement and contingency plans.",
    signals: [
      "Multi currency module tracks peso collections against USD settlements in real time.",
      "E-Wallet module mirrors DragonPay ledgers, keeping commissions liquid and measurable.",
      "Backup Manager automates verifiable restore points for auditors and regulators."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Support intelligence",
    insight:
      "Ticketing, autoresponders, and vouchers enable proactive support so field leaders experience zero-drop resolution.",
    signals: [
      "Ticket system module tags DragonPay inquiries for faster triage.",
      "Auto responder shares contextual knowledge even after business hours.",
      "E-Voucher module creates incentives tied to payment milestones."
    ],
    icon: ArrowBendDownRight
  }
];

const EXPERIENCE_CUES: ExperienceCue[] = [
  {
    title: "Binary & Unilevel plans",
    detail:
      "Automated retries and ledger transparency keep mirrored legs balanced while depth-driven incentives stay predictable."
  },
  {
    title: "Matrix, Board & Gift plans",
    detail:
      "Progressive disclosures clarify fees per stage, while vouchers and tickets streamline seat activation and community gifting."
  },
  {
    title: "Hybrid expansion",
    detail:
      "Scenario planning blends DragonPay with future wallets, ensuring the Philippines launch scales across ASEAN markets."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "DragonPay Payment Gateway for Cloud MLM Software";
  const description =
    "Design and launch a DragonPay-enabled Cloud MLM Software experience with AI narration, compliant ledgers, and Philippines-first storytelling.";

  return {
    title,
    description,
    keywords: [
      "DragonPay payment gateway",
      "MLM software Philippines payments",
      "Cloud MLM Software DragonPay integration",
      "secure direct selling transactions",
      "Philippines network marketing payments"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/dragonpay", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type DragonPayPageProps = {
  params: { lang: SupportedLocale };
};

export default function DragonPayPage({ params }: DragonPayPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 px-6 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-orange-800/10 dark:via-slate-900 dark:to-slate-950">
        <div className="absolute inset-y-0 right-0 w-1/2 translate-x-1/3 rounded-full bg-orange-200/40 blur-3xl dark:bg-orange-500/10" />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.25fr,0.75fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-orange-700 dark:bg-white/10 dark:text-white">
              <Barcode className="h-4 w-4" aria-hidden />
              DragonPay acceleration
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              DragonPay Payment Gateway for Cloud MLM Software
            </h1>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              We evolve the archived WordPress page into a Philippines-first experience. Cloud MLM Software unifies
              DragonPay’s bank transfers, e-wallets, and over-the-counter payments with AI-guided demos, compliant
              ledgers, and thought-leadership storytelling.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/free-mlm-software-demo/">Book a guided DragonPay demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={buildLocalizedPath("/contact", locale)}>Talk to Philippines specialists</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 rounded-3xl border border-orange-200/60 bg-white/80 p-6 shadow-inner backdrop-blur dark:border-white/10 dark:bg-white/5">
            {HERO_HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article
                  key={highlight.label}
                  className="rounded-2xl border border-orange-200/50 bg-orange-50/60 p-5 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600 dark:text-orange-200">
                      {highlight.label}
                    </span>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{highlight.headline}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-200">{highlight.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-3xl border border-slate-100 bg-white/90 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl space-y-3">
              <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
                Experience journey
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                A phased programme tuned for DragonPay deployment
              </h2>
              <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
                Each sprint blends technology, content, and enablement so Philippine distributors and executives adopt the
                gateway with confidence.
              </p>
            </div>
            <Button asChild variant="ghost">
              <Link
                className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 dark:text-orange-200 dark:hover:text-orange-100"
                href={buildLocalizedPath("/mlm-migration", locale)}
              >
                Explore migration support
                <ArrowSquareOut className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </header>
          <ol className="grid gap-6 lg:grid-cols-4">
            {JOURNEY_PHASES.map((phase) => {
              const Icon = phase.icon;
              return (
                <li
                  key={phase.stage}
                  className="flex h-full flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:border-orange-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                      {phase.stage}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{phase.title}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{phase.description}</p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-100">{phase.deliverable}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6 rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Modules and demos orchestrated for DragonPay
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              We honour the archive’s emphasis on Custom Demo, Pre-set Demo, and modules—turning them into a cohesive
              ecosystem that keeps AI assistants and human teams aligned.
            </p>
            <div className="space-y-6">
              {MODULE_STREAMS.map((stream) => {
                const Icon = stream.icon;
                return (
                  <article
                    key={stream.name}
                    className="rounded-2xl border border-orange-200/60 bg-orange-50/50 p-6 shadow-inner transition hover:-translate-y-1 hover:border-orange-300 dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/15 text-orange-600 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white">{stream.name}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{stream.insight}</p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {stream.signals.map((signal) => (
                        <li key={signal} className="flex items-start gap-2">
                          <ListNumbers className="mt-0.5 h-4 w-4 text-orange-500" aria-hidden />
                          <span>{signal}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
          <aside className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-10 text-white shadow-sm dark:border-white/10">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Philippines spotlight</h3>
              <p className="text-sm leading-6 text-slate-200">
                August 28, 2024 – our live archive confirms DragonPay adoption across the Philippines. Cloud MLM Software
                keeps provincial branches, urban storefronts, and digital-first distributors in sync.
              </p>
            </div>
            <div className="space-y-3 rounded-2xl border border-white/20 bg-white/5 p-6">
              <p className="text-sm leading-6 text-slate-100">
                <strong>What leaders receive:</strong> governance-ready reports, instant reconciliation, and AI-generated
                playbooks tuned for the Philippine direct selling market.
              </p>
              <p className="text-sm leading-6 text-slate-100">
                <strong>What field teams feel:</strong> frictionless payments, proactive support, and vouchers aligned to
                growth incentives.
              </p>
              <p className="text-sm leading-6 text-slate-100">
                <strong>What customers see:</strong> localized messaging that builds trust across channels—from mall booths
                to mobile enrolment experiences.
              </p>
            </div>
            <Link
              href="/network-marketing-software-company-providing-affordable-mlm-system-in-philippines/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-white/20"
            >
              Read broader Philippines coverage
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
          </aside>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-3xl border border-slate-100 bg-white/90 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Compensation enablement
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Align DragonPay with every compensation design
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Binary, Unilevel, Matrix, Board, Gift—the archive enumerates your plans. We elevate each with predictive
              analytics, transparent fees, and AI narration that keeps human and digital assistants in agreement.
            </p>
          </header>
          <div className="grid gap-4 sm:grid-cols-2">
            {EXPERIENCE_CUES.map((cue) => (
              <article
                key={cue.title}
                className="rounded-2xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:border-orange-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{cue.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{cue.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-orange-200 bg-orange-50/70 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to orchestrate DragonPay with Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            We turn archived copy into living systems—unifying demos, modules, and country insights so your Philippine
            launch becomes the benchmark for the region.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/pricing/">Review pricing scenarios</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={buildLocalizedPath("/support", locale)}>Access 24/7 support plans</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
