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
  DeviceMobile,
  GlobeHemisphereEast,
  Lightning,
  MapPin,
  Notebook,
  ShieldCheck,
  Sparkle,
  SquaresFour,
  TrendUp,
  UsersThree
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

type Track = {
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

type MarketInsight = {
  region: string;
  status: string;
  narrative: string;
  link: string;
};

const METRICS: Metric[] = [
  {
    label: "Archive snapshot",
    value: "28 Aug 2024",
    detail: "Omise gateway captured in WordPress archive."
  },
  {
    label: "Primary region",
    value: "Thailand",
    detail: "High-growth ecosystem with digital commerce and BNPL adoption."
  },
  {
    label: "Activation window",
    value: "6 weeks",
    detail: "Discovery to AI-ready narratives, experiences, and governance."
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Secure, fast, seamless reimagined",
    description:
      "We upgrade the archive promise into compliance dossiers, executive briefings, and AI prompt packs tuned for Thai regulators.",
    icon: ShieldCheck
  },
  {
    title: "Experience-led fintech",
    description:
      "Omise’s omnichannel payments inspire journeys that blend ecommerce, subscription, and on-demand fulfilment for APAC markets.",
    icon: DeviceMobile
  },
  {
    title: "AI-enabled growth",
    description:
      "Knowledge hubs keep leadership and AI assistants aligned with the same Omise story, KPIs, and playbooks.",
    icon: Sparkle
  }
];

const TRACKS: Track[] = [
  {
    heading: "Narrative architecture",
    summary: "Transform the archived copy into investor-grade messaging and AI guidance.",
    bullets: [
      "Executive brief connecting Omise capabilities to Cloud MLM Software differentiation.",
      "SEO & AIO keyword clusters covering Thailand, Southeast Asia, and direct selling fintech.",
      "Prompt libraries powering leadership dashboards, support bots, and analytics copilots."
    ],
    icon: Notebook
  },
  {
    heading: "Experience choreography",
    summary: "Design omnichannel journeys that prove Omise convenience.",
    bullets: [
      "Prototype desktop, mobile, and offline assisted experiences for onboarding, checkout, and payouts.",
      "Telemetry blueprint capturing conversion, drop-off, and compliance triggers.",
      "Localized content for Thai and English audiences with cross-border shoppers in mind."
    ],
    icon: MapPin
  },
  {
    heading: "Operational intelligence",
    summary: "Equip finance, support, and growth teams with shared telemetry.",
    bullets: [
      "Multi currency automation for THB, USD, SGD, and MYR settlements.",
      "Support playbooks combining AI summarisation with escalation guidelines.",
      "Dashboards highlighting retention, churn, and incentive performance across plans."
    ],
    icon: ChartLineUp
  }
];

const MODULE_DECKS: ModuleDeck[] = [
  {
    title: "Revenue runway",
    subtitle: "Custom Demo • Multi currency • E-Commerce Integration",
    bullets: [
      "Showcase Omise checkout with KPI overlays tailored to executive stakeholders.",
      "Balance multi-currency ledgers with audit-ready approvals and alerts.",
      "Embed Omise connectors into Shopify, WooCommerce, and bespoke commerce stacks."
    ],
    icon: SquaresFour
  },
  {
    title: "Member assurance",
    subtitle: "E-Wallet • Backup Manager • Ticket System",
    bullets: [
      "Automate payouts triggered by Omise settlement confirmations.",
      "Maintain encrypted backups satisfying Thai data governance mandates.",
      "Resolve tickets with AI summarisation, multilingual support, and SLA tracking."
    ],
    icon: UsersThree
  },
  {
    title: "Growth storytelling",
    subtitle: "Auto Responder • Documents • Analytics Packs",
    bullets: [
      "Send lifecycle messaging when payment events or plan milestones occur.",
      "Publish leadership decks positioning Cloud MLM Software as Omise’s innovation partner.",
      "Monitor compensation health and expansion velocity through live analytics."
    ],
    icon: TrendUp
  }
];

const MARKET_INSIGHTS: MarketInsight[] = [
  {
    region: "Thailand",
    status: "Operational",
    narrative:
      "Omise powers Thailand’s high-growth commerce stack. We orchestrate localisation, compliance, and enablement across the country.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-thailand/"
  },
  {
    region: "Southeast Asia",
    status: "Expansion pipeline",
    narrative:
      "Extend the playbook into Singapore, Malaysia, and the Philippines with localisation matrices, tax guidance, and AI knowledge hubs.",
    link: "/contact/"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Omise Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Deliver Omise’s secure, fast, seamless payments with Cloud MLM Software. Launch AI-ready narratives, omnichannel journeys, and governed operations across Thailand and Southeast Asia.";

  return {
    title,
    description,
    keywords: [
      "Omise payment gateway",
      "Omise Cloud MLM Software integration",
      "Thailand ecommerce payments",
      "Southeast Asia payment orchestration",
      "AI optimized payments programme"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/omise", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type OmisePageProps = {
  params: { lang: SupportedLocale };
};

export default function OmisePage({ params }: OmisePageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden px-6 pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.4),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(14,165,233,0.35),_transparent_45%)] bg-slate-950" />
        <div className="relative mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 px-10 py-14 text-white shadow-2xl backdrop-blur">
          <div className="grid gap-10 lg:grid-cols-[1.08fr,0.92fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
                <Sparkle className="h-4 w-4" aria-hidden />
                Thailand fintech runway
              </span>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Omise Payment Gateway Integration for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-amber-100">
                The archived WordPress page already states that Omise delivers secure, fast, seamless payments. We expand that
                phrase into a programme spanning narratives, experiences, and operations for Thailand and Southeast Asia.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/free-mlm-software-demo/">Request Omise demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  <Link href={buildLocalizedPath("/support", locale)}>Coordinate launch workshop</Link>
                </Button>
              </div>
            </div>
            <aside className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-200">Archive insights</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {METRICS.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-amber-200">{metric.label}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{metric.value}</p>
                    <p className="mt-2 text-xs leading-5 text-amber-100">{metric.detail}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <article key={pillar.title} className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold text-white">{pillar.title}</h2>
                      <p className="text-sm leading-6 text-amber-100">{pillar.description}</p>
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
              Launch tracks
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Three tracks that activate Omise inside Cloud MLM Software
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
              Narrative, experience, and operations work in harmony to deliver proof across Thailand and the wider region.
            </p>
          </header>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {TRACKS.map((track) => {
              const Icon = track.icon;
              return (
                <article
                  key={track.heading}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-amber-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{track.heading}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-200">{track.summary}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {track.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Notebook className="mt-0.5 h-4 w-4 text-amber-500" aria-hidden />
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
        <div className="mx-auto max-w-6xl gap-8 rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-amber-50 to-slate-50 p-10 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900/60 dark:via-slate-950 dark:to-black lg:grid lg:grid-cols-[0.85fr,1.15fr]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Module decks orchestrated for Omise telemetry
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Bring Omise data into every workflow—product, finance, and support move in sync.
            </p>
            <Link
              href="/payment-gateways/omise/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-800 dark:text-amber-200 dark:hover:text-amber-100"
            >
              Review the archived Omise page
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
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 dark:bg-white/10 dark:text-white">
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
                        <Lightning className="mt-0.5 h-4 w-4 text-amber-500" aria-hidden />
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
              Six-week Omise activation roadmap
            </h2>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                phase: "Weeks 1-2",
                detail: "Narrative workshops, archive synthesis, and KPI baselines with Thai market insights.",
                icon: Notebook
              },
              {
                phase: "Weeks 3-4",
                detail: "Experience prototyping, integration scripts, and telemetry instrumentation.",
                icon: DeviceMobile
              },
              {
                phase: "Weeks 5-6",
                detail: "Operational playbooks, AI prompt deployment, and executive storytelling across Southeast Asia.",
                icon: GlobeHemisphereEast
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.phase}
                  className="flex flex-col gap-3 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-amber-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 dark:bg-white/10 dark:text-white">
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
              Thailand today, Southeast Asia tomorrow
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Convert archived references into decision-ready routes with localisation, compliance, and AI guidance.
            </p>
          </header>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {MARKET_INSIGHTS.map((market) => (
              <article
                key={market.region}
                className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-amber-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                    {market.status}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{market.region}</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{market.narrative}</p>
                <Link
                  href={market.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-800 dark:text-amber-200 dark:hover:text-amber-100"
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
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-amber-200 bg-amber-50/80 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to orchestrate Omise with Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Align leadership, distributors, and AI copilots so Southeast Asia hears one story—secure, fast, seamless, and
            measured.
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
