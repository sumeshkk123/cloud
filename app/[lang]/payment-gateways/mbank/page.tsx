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
  Aperture,
  Bank,
  ChartLineUp,
  Compass,
  DeviceMobile,
  Fingerprint,
  Globe,
  Lightning,
  MapTrifold,
  NotePencil,
  ShieldCheck,
  Sparkle,
  SquaresFour,
  TrendUp,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type StrategyPhase = {
  phase: string;
  focus: string;
  bullet: string;
  icon: IconType;
};

type ExperienceLayer = {
  title: string;
  subtitle: string;
  points: string[];
  icon: IconType;
};

type PlanSynergy = {
  plan: string;
  statement: string;
};

type CountryPanel = {
  title: string;
  status: string;
  notes: string;
  link: string;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    label: "Archive reference",
    value: "28 Aug 2024 snapshot",
    description: "mBank described as secure, fast, seamless across official marketing copy.",
    icon: NotePencil
  },
  {
    label: "Primary region",
    value: "Kyrgyzstan launch",
    description: "Focus on Bishkek and Osh distributor ecosystems with Apple-enabled checkouts.",
    icon: Globe
  },
  {
    label: "Go-to-market",
    value: "6-week sprint",
    description: "From discovery workshop to AI-ready narratives across leadership teams.",
    icon: Compass
  }
];

const STRATEGY_PHASES: StrategyPhase[] = [
  {
    phase: "Narrative architecture",
    focus: "Secure, fast, seamless becomes leadership messaging",
    bullet:
      "Transform the archive into executive briefs, analyst decks, and SEO+AIO prompt libraries that spotlight mBank reliability.",
    icon: ShieldCheck
  },
  {
    phase: "Experience design",
    focus: "mBank journeys contextualised for direct selling",
    bullet:
      "Prototype enrolment, checkout, and payout flows across web and mobile, aligning Apple-enabled payments with distributor UX.",
    icon: DeviceMobile
  },
  {
    phase: "Operational intelligence",
    focus: "Telemetry drives governance",
    bullet:
      "Launch dashboards, alerts, and playbooks that unify finance, compliance, and support around mBank performance metrics.",
    icon: ChartLineUp
  }
];

const EXPERIENCE_LAYERS: ExperienceLayer[] = [
  {
    title: "Revenue enablement",
    subtitle: "Custom Demo • Multi currency • E-Commerce Integration",
    points: [
      "Deliver curated demos that explain mBank-led Kyrgyz settlements.",
      "Balance KGS, USD, and EUR ledgers with role-based approvals.",
      "Deploy Shopify, WooCommerce, and headless storefront connectors."
    ],
    icon: SquaresFour
  },
  {
    title: "Member finance",
    subtitle: "E-Wallet • Backup Manager • Ticket System",
    points: [
      "Automate commission releases tied to mBank confirmation webhooks.",
      "Enforce immutable backups for audits and PSD2 compliance expectations.",
      "Resolve payment tickets with AI-suggested responses and SLA tracking."
    ],
    icon: Bank
  },
  {
    title: "Growth storytelling",
    subtitle: "Auto Responder • Documents • Analytics Packs",
    points: [
      "Trigger lifecycle emails when milestones or compliance checks complete.",
      "Share executive documents that reinforce mBank thought leadership.",
      "Publish dashboards summarising retention, churn, and payment velocity."
    ],
    icon: Sparkle
  }
];

const PLAN_SYNERGIES: PlanSynergy[] = [
  {
    plan: "Binary & Matrix",
    statement:
      "Monitor leg-balance and spillover performance with mBank settlement telemetry feeding real-time dashboards."
  },
  {
    plan: "Board & Gift",
    statement:
      "Protect community trust by linking progression triggers with verified payouts and automated alerts."
  },
  {
    plan: "Unilevel & Hybrid",
    statement:
      "Coach field leaders via AI prompts that translate mBank transaction data into weekly growth guidelines."
  }
];

const COUNTRY_PANELS: CountryPanel[] = [
  {
    title: "Kyrgyzstan",
    status: "Live adoption",
    notes:
      "mBank gateway supports Kyrgyz merchants with Apple-enabled payments. We align compliance, language, and tax needs across regions.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-kyrgyzstan/"
  },
  {
    title: "Central Asia expansion",
    status: "In planning",
    notes:
      "Extend the Kyrgyzstan blueprint to Kazakhstan, Uzbekistan, and Tajikistan with localised payment scripts and AI knowledge bases.",
    link: "/contact/"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "mBank Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Transform the mBank payment archive into Kyrgyzstan-first growth. Cloud MLM Software delivers AI-ready narratives, governed operations, and direct selling experiences that stay secure, fast, and seamless.";

  return {
    title,
    description,
    keywords: [
      "mBank payment gateway",
      "mBank Cloud MLM Software integration",
      "Kyrgyzstan MLM payments",
      "Central Asia payment orchestration",
      "AI optimized payment operations"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/mbank", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MBankPageProps = {
  params: { lang: SupportedLocale };
};

export default function MBankPage({ params }: MBankPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden px-6 pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-indigo-100 dark:from-slate-900/80 dark:via-slate-950 dark:to-black" />
        <div className="absolute -left-24 top-8 h-60 w-60 rounded-full bg-sky-200/50 blur-3xl dark:bg-sky-500/20" />
        <div className="relative mx-auto max-w-6xl rounded-3xl border border-sky-100 bg-white/90 px-10 py-14 shadow-lg dark:border-white/10 dark:bg-white/5">
          <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-700 dark:border-white/10 dark:bg-white/10 dark:text-white">
                <Fingerprint className="h-4 w-4" aria-hidden />
                mBank gateway
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                mBank Payment Gateway Integration for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                The archived WordPress page declared that mBank delivers secure, fast, seamless payments. Cloud MLM Software
                upgrades that statement into a Kyrgyzstan-focused programme covering narratives, experiences, and operations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/free-mlm-software-demo/">Explore mBank demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={buildLocalizedPath("/support", locale)}>Schedule a strategy call</Link>
                </Button>
              </div>
            </div>
            <aside className="space-y-4 rounded-3xl border border-sky-200/60 bg-sky-50/60 p-6 shadow-inner dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-600 dark:text-sky-200">
                Archive insights
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {HERO_HIGHLIGHTS.map((highlight) => {
                  const Icon = highlight.icon;
                  return (
                    <article
                      key={highlight.label}
                      className="flex gap-3 rounded-3xl border border-white/70 bg-white/80 p-4 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div className="space-y-1">
                        <h2 className="text-sm font-semibold text-slate-900 dark:text-white">{highlight.value}</h2>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                          {highlight.label}
                        </p>
                        <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{highlight.description}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-100 bg-white/95 px-10 py-12 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3 text-center">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Strategic trajectory
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Align your teams to mBank’s secure, fast, seamless promise
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
              From narrative engineering to operational intelligence, each phase translates the archived statement into
              enterprise-ready capabilities.
            </p>
          </header>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {STRATEGY_PHASES.map((phase) => {
              const Icon = phase.icon;
              return (
                <article
                  key={phase.phase}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-sky-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
                      {phase.phase}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{phase.focus}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{phase.bullet}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl gap-8 rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-sky-50 to-slate-50 p-10 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900/60 dark:via-slate-950 dark:to-black lg:grid lg:grid-cols-[0.85fr,1.15fr]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Experience layers that keep mBank at the centre
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              We package Cloud MLM Software modules into layered enablement so sales, finance, and support teams operate from
              the same source of truth.
            </p>
            <Link
              href="/payment-gateways/mbank/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-800 dark:text-sky-200 dark:hover:text-sky-100"
            >
              View the archived mBank page
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {EXPERIENCE_LAYERS.map((layer) => {
              const Icon = layer.icon;
              return (
                <article
                  key={layer.title}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-inner transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{layer.title}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                      {layer.subtitle}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-200">
                    {layer.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <Lightning className="mt-0.5 h-4 w-4 text-sky-500" aria-hidden />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-5xl space-y-8 rounded-3xl border border-slate-100 bg-white/95 px-10 py-12 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3 text-center">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Compensation synergy
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Tailoring mBank telemetry to every plan innovation
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Align incentives, cashflow, and compliance across the direct selling programmes you launch.
            </p>
          </header>
          <div className="space-y-4">
            {PLAN_SYNERGIES.map((item) => (
              <article
                key={item.plan}
                className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-sky-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.plan}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{item.statement}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Expansion footprint
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Kyrgyzstan leadership with a Central Asia horizon
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              The archived page referenced Apple-enabled payments and multiple supported countries. We convert that into a
              playbook for regional dominance.
            </p>
          </header>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {COUNTRY_PANELS.map((panel) => (
              <article
                key={panel.title}
                className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-sky-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                    {panel.status}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{panel.title}</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{panel.notes}</p>
                <Link
                  href={panel.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-800 dark:text-sky-200 dark:hover:text-sky-100"
                >
                  Continue discovery
                  <ArrowSquareOut className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-10">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-sky-200 bg-sky-50/70 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Launch your mBank growth programme with Cloud MLM Software
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Partner with us to activate Kyrgyzstan-first experiences, Central Asia expansion roadmaps, and AI-aligned
            narratives that keep mBank at the heart of every conversation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/pricing", locale)}>Review delivery options</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact/">Talk with a payment strategist</Link>
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
