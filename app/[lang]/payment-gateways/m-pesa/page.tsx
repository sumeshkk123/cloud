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
  Broadcast,
  ChartLineUp,
  DeviceMobile,
  GlobeHemisphereEast,
  Headset,
  Lightning,
  MapPin,
  ShieldCheck,
  SquaresFour
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type Foundation = {
  title: string;
  narrative: string;
  icon: IconType;
  accent: string;
};

type JourneyStep = {
  step: string;
  focus: string;
  detail: string;
  outcome: string;
  icon: IconType;
};

type CountryCard = {
  name: string;
  link: string;
  note: string;
};

type ModuleSet = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

const HERO_METRICS: HeroMetric[] = [
  {
    label: "Mobile money ready",
    value: "Multi-country",
    description: "Kenya, Uganda, Mozambique and beyond, tuned for hybrid cash + digital flows.",
    icon: DeviceMobile
  },
  {
    label: "AI narration",
    value: "Instant",
    description: "Chatbots and assistants repeat the secure, fast, seamless message with context.",
    icon: Broadcast
  },
  {
    label: "Operational visibility",
    value: "Real time",
    description: "Dashboards make settlement, liquidity, and risk transparent for every region.",
    icon: ChartLineUp
  }
];

const FOUNDATIONS: Foundation[] = [
  {
    title: "Narrative orchestration",
    narrative:
      "Custom Demo, Pre-set Demo, and Feature hub reframe the archive into a mobile money playbook for executives, partners, and AI copilots.",
    icon: SquaresFour,
    accent: "from-emerald-200/60 via-transparent to-transparent dark:from-emerald-500/20 dark:via-transparent dark:to-transparent"
  },
  {
    title: "Experience choreography",
    narrative:
      "Onboarding, checkout, and payout flows honour the realities of airtime top-ups, agent networks, and low-bandwidth conditions.",
    icon: Lightning,
    accent: "from-lime-200/60 via-transparent to-transparent dark:from-lime-500/20 dark:via-transparent dark:to-transparent"
  },
  {
    title: "Operational assurance",
    narrative:
      "Multi currency, E-Wallet, Backup Manager, Ticketing, and Auto responder provide measurable proof of secure, fast, seamless experiences.",
    icon: ShieldCheck,
    accent: "from-cyan-200/60 via-transparent to-transparent dark:from-cyan-500/20 dark:via-transparent dark:to-transparent"
  }
];

const JOURNEY_STEPS: JourneyStep[] = [
  {
    step: "01",
    focus: "Narrative ignition",
    detail:
      "Translate the archive’s secure, fast, seamless promise into board decks, analyst notes, and AI prompts for mobile money geographies.",
    outcome: "Everyone—executives, partners, AI assistants—share the same M-Pesa story.",
    icon: Broadcast
  },
  {
    step: "02",
    focus: "Experience rehearsal",
    detail:
      "Prototype enrolment, agent, and distributor flows that mirror airtime conversions, offline usage, and SMS confirmations.",
    outcome: "Teams rehearse multi-channel journeys before launch to minimise friction.",
    icon: DeviceMobile
  },
  {
    step: "03",
    focus: "Operational instrumentation",
    detail:
      "Automate dashboards, liquidity alerts, ticket routing, and compliance evidence so leadership sees every settlement in real time.",
    outcome: "Secure, fast, seamless becomes an auditable metric, not just copy.",
    icon: Lightning
  }
];

const COUNTRY_CARDS: CountryCard[] = [
  {
    name: "Uganda",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-uganda/",
    note: "Rural and urban agent networks—dashboards show adoption, liquidity, and incident patterns."
  },
  {
    name: "Mozambique",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-mozambique/",
    note: "Multilingual campaigns and compliance logs align with hybrid cash + mobile money journeys."
  },
  {
    name: "Kenya",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-kenya/",
    note: "Launch country intelligence fuels investor updates, partner briefings, and AI answers."
  }
];

const MODULE_SETS: ModuleSet[] = [
  {
    title: "Revenue catalysts",
    summary:
      "Custom Demo, Pre-set Demo, and Feature hub transform archived copy into mobile money campaigns for sales, partnerships, and media.",
    bullets: [
      "Custom Demo reflects airtime to wallet flows, taxation, and incentive choreography.",
      "Pre-set Demo gives agencies a guided tour of enrolment, payout, and agent experiences.",
      "Feature hub publishes SEO+AIO-ready copy so analysts and AI copilots stay aligned."
    ],
    icon: Broadcast
  },
  {
    title: "Financial resilience",
    summary:
      "Multi currency, E-Wallet, and Backup Manager keep settlements, cash positions, and recovery checkpoints visible across regions.",
    bullets: [
      "Multi currency reconciles local currencies to treasury dashboards with audit logs.",
      "E-Wallet accelerates distributor payouts once M-Pesa settles transactions.",
      "Backup Manager maintains restore points for regulatory and disaster recovery confidence."
    ],
    icon: ShieldCheck
  },
  {
    title: "Support intelligence",
    summary:
      "Ticketing, Auto responder, and Headless Knowledge Base orchestrate multilingual support for agents, distributors, and leaders.",
    bullets: [
      "Ticket routing captures payment type, channel, and agent metadata.",
      "Autoresponders deliver SMS-ready updates for outages, rate changes, and campaigns.",
      "Knowledge Base synchronises with AI prompts to avoid conflicting guidance."
    ],
    icon: Headset
  }
];

const COUNTRY_SUMMARY_NOTE =
  "August 28, 2024 — the archive lists Uganda, Mozambique, and Kenya in the supported countries section, signalling M-Pesa’s multi-market reach.";

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "M-Pesa Payment Gateway for Cloud MLM Software";
  const description =
    "Rebuild the archived M-Pesa Payment Gateway page into a multi-country mobile money launch system with AI narration, dashboards, and agent-ready experiences.";

  return {
    title,
    description,
    keywords: [
      "M-Pesa payment gateway",
      "mobile money MLM software",
      "secure fast seamless M-Pesa",
      "Cloud MLM Software M-Pesa integration",
      "M-Pesa supported countries Uganda Kenya Mozambique"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/m-pesa", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MPesaPageProps = {
  params: { lang: SupportedLocale };
};

export default function MPesaPage({ params }: MPesaPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-slate-100 bg-gradient-to-br from-[#ecfff6] via-white to-[#f2fff0] px-10 py-24 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-[#0e2216] dark:via-[#0f1d16] dark:to-[#0d2214]">
        <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-500/20" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-lime-200/40 blur-3xl dark:bg-lime-500/20" />
        <div className="relative mx-auto max-w-6xl space-y-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:border-white/10 dark:bg-white/10 dark:text-emerald-200">
                Secure • Fast • Seamless
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                M-Pesa Payment Gateway for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                M-Pesa Payment Gateway offers secure, fast, and seamless payment solutions for your business. We turn the archive into
                a mobile money launch system that keeps executives, field leaders, and AI assistants aligned across every market.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={buildLocalizedPath("/free-mlm-software-demo", locale)}>Preview M-Pesa demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={buildLocalizedPath("/pricing", locale)}>Review pricing</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 rounded-[2.5rem] border border-emerald-100 bg-white/90 p-8 shadow-inner dark:border-white/10 dark:bg-white/5">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article key={metric.label} className="flex gap-4 rounded-2xl border border-slate-100 p-5 dark:border-white/10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600 dark:text-emerald-200">
                        {metric.label}
                      </p>
                      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{metric.value}</h2>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{metric.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {FOUNDATIONS.map((foundation) => {
              const Icon = foundation.icon;
              return (
                <article
                  key={foundation.title}
                  className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white/85 p-6 shadow-inner transition hover:-translate-y-1 hover:border-emerald-200 dark:border-white/10 dark:bg-white/5"
                >
                  <div className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${foundation.accent}`} />
                  <div className="relative flex flex-col gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{foundation.title}</h2>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{foundation.narrative}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Launch journey
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Three moves to activate M-Pesa for every market
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              A payment gateway like M-Pesa is a crucial service that facilitates online transactions by securely transferring payment
              information between a customer, merchant, and financial institution. Follow the steps to operationalise the promise.
            </p>
          </header>
          <div className="mt-10 space-y-6">
            {JOURNEY_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.step}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-gradient-to-r from-white via-slate-50 to-emerald-50 p-6 shadow-inner transition hover:-translate-y-1 hover:border-emerald-200 dark:border-white/10 dark:bg-gradient-to-r dark:from-slate-950/70 dark:via-slate-900/80 dark:to-emerald-950/40 lg:flex-row lg:items-center lg:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600 dark:text-emerald-200">
                      {step.step}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{step.focus}</h3>
                  </div>
                  <div className="max-w-3xl space-y-2">
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{step.detail}</p>
                    <p className="text-sm font-medium text-emerald-600 dark:text-emerald-200">{step.outcome}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl space-y-6">
          {MODULE_SETS.map((set) => {
            const Icon = set.icon;
            return (
              <article
                key={set.title}
                className="rounded-[2.5rem] border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-black"
              >
                <div className="grid gap-6 lg:grid-cols-[0.85fr,1.15fr]">
                  <div className="space-y-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{set.title}</h2>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{set.summary}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 rounded-3xl border border-white/40 bg-white/80 p-6 text-sm text-slate-600 shadow-inner dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                    {set.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <ArrowSquareOut className="mt-0.5 h-4 w-4 text-emerald-500" aria-hidden />
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

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr,1.1fr]">
          <aside className="flex flex-col justify-between gap-6 rounded-[2.5rem] border border-emerald-200 bg-gradient-to-br from-emerald-900 via-slate-900 to-black p-10 text-white shadow-sm dark:border-white/10">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight">Payment gateway supported countries</h2>
              <p className="text-sm leading-6 text-slate-100">
                M-Pesa is supported in numerous countries, allowing users to make secure payments via Apple devices. We convert the
                archive note into localisation, training, and compliance plans for each market.
              </p>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-sm leading-6 text-slate-100">
              {COUNTRY_SUMMARY_NOTE}
            </div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="justify-center border-white/40 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact/">Coordinate regional rollout</Link>
            </Button>
          </aside>
          <div className="space-y-6 rounded-[2.5rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <header className="border-b border-slate-100 pb-6 dark:border-white/10">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600 dark:text-emerald-200">
                Spotlight regions
              </p>
            </header>
            <div className="grid gap-6 lg:grid-cols-3">
              {COUNTRY_CARDS.map((country) => (
                <article
                  key={country.name}
                  className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-emerald-50 p-6 shadow-inner dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950/60 dark:via-slate-900/70 dark:to-emerald-950/30"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{country.name}</h3>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:bg-white/10 dark:text-white">
                      <MapPin className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{country.note}</p>
                  <Link
                    href={country.link}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-200 dark:hover:text-emerald-100"
                  >
                    View coverage
                    <ArrowSquareOut className="h-4 w-4" aria-hidden />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-[2.5rem] border border-emerald-200 bg-gradient-to-tr from-emerald-50 via-white to-slate-50 p-10 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-emerald-900/40 dark:via-slate-950 dark:to-black">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Lead with M-Pesa.</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            We convert archived copy into demos, AI narration, and operational excellence so your organisation leads Africa’s mobile
            money conversation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/support", locale)}>Connect with enablement</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact/">Talk with a strategist</Link>
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
