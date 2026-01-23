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
  ChartLineUp,
  DeviceTabletCamera,
  GlobeHemisphereNorth,
  Lightning,
  Notebook,
  ShieldCheck,
  Sparkle,
  SquaresFour,
  TrendUp
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
};

type Pillar = {
  title: string;
  description: string;
  icon: IconType;
};

type Journey = {
  heading: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type ModuleDeck = {
  title: string;
  subtitle: string;
  bullets: string[];
  icon: IconType;
};

type Market = {
  name: string;
  status: string;
  insight: string;
  link: string;
};

const METRICS: Metric[] = [
  {
    label: "Archive snapshot",
    value: "28 Aug 2024",
    detail: "Nets gateway captured in legacy WordPress content."
  },
  {
    label: "Nordic footprint",
    value: "Norway & Greenland",
    detail: "High-trust, regulated environments with unique infrastructure needs."
  },
  {
    label: "Activation cadence",
    value: "6 weeks",
    detail: "From discovery to AI-ready storytelling, journeys, and governance."
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Secure, fast, seamless validated",
    description:
      "We translate the archive promise into compliance dossiers, executive briefings, and AI prompt kits suitable for Nordic regulators.",
    icon: ShieldCheck
  },
  {
    title: "Infrastructure-grade reliability",
    description:
      "Experience design mirrors the stability of Nets’ network—from card rails to instant payments—helping distributors build trust quickly.",
    icon: DeviceTabletCamera
  },
  {
    title: "AI co-piloted growth",
    description:
      "Knowledge bases and prompts ensure leadership, field teams, and AI assistants repeat the same Nordic-aligned narrative.",
    icon: Sparkle
  }
];

const JOURNEYS: Journey[] = [
  {
    heading: "Narrative architecture",
    summary: "Evolve the archived copy into investor-grade messaging and AI-ready guidance.",
    bullets: [
      "Executive brief connecting Nets capabilities with Cloud MLM Software differentiation.",
      "SEO & AIO keyword clusters spanning Norway, Greenland, and direct selling payments.",
      "Prompt libraries aligning leadership dashboards, copilots, and support bots."
    ],
    icon: Notebook
  },
  {
    heading: "Experience choreography",
    summary: "Design omnichannel journeys inspired by Nordic expectations.",
    bullets: [
      "Desktop & mobile prototypes for onboarding, checkout, and payout experiences.",
      "Telemetry blueprint capturing conversion, compliance, and risk signals.",
      "Localized UX for Norwegian and English audiences, plus guidance for Greenland expansion."
    ],
    icon: DeviceTabletCamera
  },
  {
    heading: "Operational intelligence",
    summary: "Synchronise finance, support, and growth with live telemetry.",
    bullets: [
      "Multi currency automation for NOK, DKK, EUR, and USD settlements.",
      "Support runbooks combining AI summarisation with documented escalation steps.",
      "Dashboards highlighting retention, churn, and incentive momentum."
    ],
    icon: ChartLineUp
  }
];

const MODULE_DECKS: ModuleDeck[] = [
  {
    title: "Revenue command centre",
    subtitle: "Custom Demo • Multi currency • E-Commerce Integration",
    bullets: [
      "Showcase Nets checkout with KPI overlays for enterprise stakeholders.",
      "Balance cross-currency ledgers with audit-ready approvals and alerts.",
      "Embed Nets connectors into Shopify, WooCommerce, and bespoke commerce stacks."
    ],
    icon: SquaresFour
  },
  {
    title: "Member trust layer",
    subtitle: "E-Wallet • Backup Manager • Ticket System",
    bullets: [
      "Automate payouts triggered by Nets settlement confirmations.",
      "Maintain encrypted backups meeting Nordic data governance mandates.",
      "Resolve tickets with AI summarisation and SLA visibility."
    ],
    icon: TrendUp
  },
  {
    title: "Field enablement studio",
    subtitle: "Auto Responder • Documents • Analytics Packs",
    bullets: [
      "Trigger lifecycle messaging when payment events or plan milestones occur.",
      "Publish leadership decks positioning Cloud MLM Software as the Nordic payment partner.",
      "Monitor compensation health and expansion velocity with live analytics."
    ],
    icon: Lightning
  }
];

const MARKETS: Market[] = [
  {
    name: "Norway",
    status: "Operational",
    insight:
      "Nets is entrenched in Norway’s banking ecosystem. We synchronise localisation, compliance, and distributor enablement across the country.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-norway/"
  },
  {
    name: "Greenland",
    status: "Exploratory",
    insight:
      "Model infrastructure requirements, partner coordination, and regulatory approvals to extend Nets support to Greenland-based distributors.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-greenland/"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Nets Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Bring Nets’ secure, fast, seamless capabilities into Cloud MLM Software. Build AI-ready narratives, Nordic-first experiences, and governed operations for Norway and Greenland expansion.";

  return {
    title,
    description,
    keywords: [
      "Nets payment gateway",
      "Nets Cloud MLM Software integration",
      "Norway payment orchestration",
      "Nordic secure payments",
      "AI optimized direct selling gateway"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/nets", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type NetsPageProps = {
  params: { lang: SupportedLocale };
};

export default function NetsPage({ params }: NetsPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden px-6 pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-black" />
        <div className="absolute left-12 top-12 h-56 w-56 rounded-full bg-sky-400/30 blur-3xl" />
        <div className="absolute right-16 top-24 h-44 w-44 rounded-full bg-cyan-400/30 blur-2xl" />
        <div className="relative mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 px-10 py-14 text-white shadow-2xl backdrop-blur">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
                <Sparkle className="h-4 w-4" aria-hidden />
                Nordic infrastructure playbook
              </span>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Nets Payment Gateway Integration for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-sky-100">
                The archived WordPress page positions Nets as secure, fast, seamless. We turn that statement into a phased
                programme—narratives, journeys, and operations built for Norway and Greenland leadership.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/free-mlm-software-demo/">Request Nets demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  <Link href={buildLocalizedPath("/support", locale)}>Schedule launch workshop</Link>
                </Button>
              </div>
            </div>
            <aside className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200">Archive insights</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {METRICS.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-cyan-200">{metric.label}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{metric.value}</p>
                    <p className="mt-2 text-xs leading-5 text-cyan-100">{metric.detail}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <article key={pillar.title} className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold text-white">{pillar.title}</h2>
                      <p className="text-sm leading-6 text-cyan-100">{pillar.description}</p>
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
              Launch journeys
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Coordinate the Nets activation with three disciplined journeys
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
              Narrative, experience, and operations keep leadership aligned while we localise for Scandinavia and beyond.
            </p>
          </header>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {JOURNEYS.map((journey) => {
              const Icon = journey.icon;
              return (
                <article
                  key={journey.heading}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-sky-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{journey.heading}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-200">{journey.summary}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {journey.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Notebook className="mt-0.5 h-4 w-4 text-sky-500" aria-hidden />
                        <span>{bullet}</span>
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
        <div className="mx-auto max-w-6xl gap-8 rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-sky-50 to-slate-50 p-10 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900/60 dark:via-slate-950 dark:to-black lg:grid lg:grid-cols-[0.85fr,1.15fr]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Module decks orchestrated for Nets telemetry
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Product, finance, and support teams collaborate with confidence when Nets data sits at the centre.
            </p>
            <Link
              href="/payment-gateways/nets/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-800 dark:text-sky-200 dark:hover:text-sky-100"
            >
              Review the archived Nets page
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {MODULE_DECKS.map((deck) => {
              const Icon = deck.icon;
              return (
                <article
                  key={deck.title}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-inner transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{deck.title}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                      {deck.subtitle}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-200">
                    {deck.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Lightning className="mt-0.5 h-4 w-4 text-sky-500" aria-hidden />
                        <span>{bullet}</span>
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
              Timeline
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Six weeks to Nets thought leadership
            </h2>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                phase: "Weeks 1-2",
                detail: "Narrative workshops, archive synthesis, and KPI baselining with Nordic market insights.",
                icon: Notebook
              },
              {
                phase: "Weeks 3-4",
                detail: "Experience prototyping, telemetry setup, and localisation for Norwegian and English assets.",
                icon: DeviceTabletCamera
              },
              {
                phase: "Weeks 5-6",
                detail: "Operational playbooks, AI prompt roll-out, and executive media activations across the region.",
                icon: GlobeHemisphereNorth
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.phase}
                  className="flex flex-col gap-3 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-sky-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.phase}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{item.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Market insights
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Norway today, Greenland tomorrow
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Turn archived references into decision-ready routes with localisation, compliance, and AI guidance.
            </p>
          </header>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {MARKETS.map((market) => (
              <article
                key={market.name}
                className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-sky-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                    {market.status}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{market.name}</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{market.insight}</p>
                <Link
                  href={market.link}
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
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-sky-200 bg-sky-50/80 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to harmonise Nets with Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Partner with us to deliver secure, fast, seamless payments across Norway, Greenland, and future Nordic markets.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact/">Speak with a payment strategist</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={buildLocalizedPath("/pricing", locale)}>Review delivery options</Link>
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
