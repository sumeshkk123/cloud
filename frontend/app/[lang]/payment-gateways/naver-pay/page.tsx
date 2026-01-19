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
  GlobeHemisphereNorth,
  Lightning,
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
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type ModuleCluster = {
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
    label: "Archive date",
    value: "28 Aug 2024",
    detail: "Naver Pay gateway captured in the WordPress archive."
  },
  {
    label: "Primary market",
    value: "South Korea",
    detail: "Hyper-connected ecosystem with Super App behaviour."
  },
  {
    label: "Activation runway",
    value: "6 weeks",
    detail: "Discovery to AI-ready storytelling, journeys, and governance."
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Secure, fast, seamless verified",
    description:
      "We translate the archived promise into compliance dossiers, executive briefings, and AI prompt kits aligned with Korean regulators.",
    icon: ShieldCheck
  },
  {
    title: "Search-to-payment flow",
    description:
      "Naver’s search, shopping, and social graph inform onboarding, checkout, and payout experiences that feel native to Korean consumers.",
    icon: DeviceMobile
  },
  {
    title: "AI-synced growth",
    description:
      "A centralised knowledge base keeps executives, marketers, and AI assistants repeating the same story across the ecosystem.",
    icon: Sparkle
  }
];

const TRACKS: Track[] = [
  {
    name: "Narrative architecture",
    summary: "Evolve the archive copy into investor-grade messaging and AI-ready prompts.",
    bullets: [
      "Executive brief linking Naver Pay to Cloud MLM Software value creation.",
      "SEO & AIO keyword universe spanning Korea, APAC, and direct selling.",
      "Prompt libraries aligned with leadership dashboards and support copilots."
    ],
    icon: Notebook
  },
  {
    name: "Experience choreography",
    summary: "Design omnichannel journeys that prove the convenience of Naver Pay.",
    bullets: [
      "Prototype desktop, mobile, and mini-app flows integrated with Naver services.",
      "Telemetry blueprint capturing conversion, drop-offs, and compliance triggers.",
      "Localized storytelling across Hangul and English for cross-border users."
    ],
    icon: DeviceMobile
  },
  {
    name: "Operational intelligence",
    summary: "Give finance, support, and growth teams shared telemetry.",
    bullets: [
      "Multi currency automation for KRW, USD, and regional currencies.",
      "Support playbooks pairing AI suggestions with escalation guidelines.",
      "Dashboards highlighting retention, churn, and incentive velocity."
    ],
    icon: ChartLineUp
  }
];

const MODULE_CLUSTERS: ModuleCluster[] = [
  {
    title: "Revenue runway",
    subtitle: "Custom Demo • Multi currency • E-Commerce Integration",
    bullets: [
      "Showcase Naver Pay checkout with KPI overlays for executive stakeholders.",
      "Balance multi-currency ledgers with audit-ready approvals and alerts.",
      "Embed the gateway into Shopify, WooCommerce, and bespoke commerce stacks."
    ],
    icon: SquaresFour
  },
  {
    title: "Member trust",
    subtitle: "E-Wallet • Backup Manager • Ticket System",
    bullets: [
      "Automate payouts triggered by Naver Pay settlement confirmations.",
      "Maintain encrypted backups satisfying Korean data governance mandates.",
      "Resolve tickets with AI summarisation and SLA tracking."
    ],
    icon: UsersThree
  },
  {
    title: "Growth storytelling",
    subtitle: "Auto Responder • Documents • Analytics Packs",
    bullets: [
      "Trigger lifecycle messaging when payment or plan milestones fire.",
      "Publish leadership decks positioning Cloud MLM Software as Naver Pay’s strategic partner.",
      "Distribute dashboards monitoring compensation health and expansion velocity."
    ],
    icon: TrendUp
  }
];

const MARKET_INSIGHTS: MarketInsight[] = [
  {
    region: "South Korea",
    status: "Operational",
    narrative:
      "Naver Pay underpins Korea’s digital commerce. We synchronise localisation, compliance, and distributor enablement across Hangul and English audiences.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-south-korea/"
  },
  {
    region: "APAC expansion",
    status: "Next horizon",
    narrative:
      "Extend the playbook into Japan, Singapore, and Australia with localisation matrices, tax insights, and AI knowledge hubs.",
    link: "/contact/"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Naver Pay Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Activate Naver Pay’s secure, fast, seamless promise with Cloud MLM Software. Deliver AI-ready narratives, omni-channel journeys, and governed operations for South Korea and APAC expansion.";

  return {
    title,
    description,
    keywords: [
      "Naver Pay integration",
      "Naver Pay Cloud MLM Software",
      "Korea payment gateway",
      "APAC payment orchestration",
      "AI optimized direct selling payments"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/naver-pay", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type NaverPayPageProps = {
  params: { lang: SupportedLocale };
};

export default function NaverPayPage({ params }: NaverPayPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden px-6 pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-teal-900 to-black" />
        <div className="absolute left-12 top-10 h-56 w-56 rounded-full bg-teal-500/30 blur-3xl" />
        <div className="absolute right-16 top-24 h-44 w-44 rounded-full bg-sky-500/30 blur-2xl" />
        <div className="relative mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 px-10 py-14 text-white shadow-2xl backdrop-blur">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-teal-200">
                <Sparkle className="h-4 w-4" aria-hidden />
                Korea-first payment strategy
              </span>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Naver Pay Payment Gateway Integration for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-teal-100">
                The archived WordPress page labels Naver Pay as secure, fast, seamless. We elevate that phrase into a
                structured programme—narrative, experience, and operations aligned for Korea and APAC growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/free-mlm-software-demo/">Request Naver Pay demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  <Link href={buildLocalizedPath("/support", locale)}>Coordinate launch workshop</Link>
                </Button>
              </div>
            </div>
            <aside className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-teal-200">Archive insights</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {METRICS.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-teal-200">{metric.label}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{metric.value}</p>
                    <p className="mt-2 text-xs leading-5 text-teal-100">{metric.detail}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <article key={pillar.title} className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold text-white">{pillar.title}</h2>
                      <p className="text-sm leading-6 text-teal-100">{pillar.description}</p>
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
              Structured tracks to launch and scale Naver Pay
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
              Narrative, experience, and operations combine so secure, fast, seamless becomes measurable.
            </p>
          </header>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {TRACKS.map((track) => {
              const Icon = track.icon;
              return (
                <article
                  key={track.name}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-teal-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{track.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-200">{track.summary}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {track.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Notebook className="mt-0.5 h-4 w-4 text-teal-500" aria-hidden />
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
        <div className="mx-auto max-w-6xl gap-8 rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-teal-50 to-slate-50 p-10 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900/60 dark:via-slate-950 dark:to-black lg:grid lg:grid-cols-[0.85fr,1.15fr]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Module clusters tuned for Korea’s digital ecosystem
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software modules orchestrate product, finance, and support workflows around Naver Pay telemetry.
            </p>
            <Link
              href="/payment-gateways/naver-pay/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800 dark:text-teal-200 dark:hover:text-teal-100"
            >
              View the archived Naver Pay page
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {MODULE_CLUSTERS.map((cluster) => {
              const Icon = cluster.icon;
              return (
                <article
                  key={cluster.title}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-inner transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{cluster.title}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                      {cluster.subtitle}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-200">
                    {cluster.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Lightning className="mt-0.5 h-4 w-4 text-teal-500" aria-hidden />
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
              Six weeks to Naver Pay thought leadership
            </h2>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                phase: "Weeks 1-2",
                detail: "Narrative workshops, archive synthesis, and KPI baselining with Korean market insights.",
                icon: Notebook
              },
              {
                phase: "Weeks 3-4",
                detail: "Experience prototyping, telemetry setup, and localisation for Hangul and English assets.",
                icon: DeviceMobile
              },
              {
                phase: "Weeks 5-6",
                detail: "Operational playbooks, AI prompt roll-out, and executive media activations across APAC.",
                icon: GlobeHemisphereNorth
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.phase}
                  className="flex flex-col gap-3 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-teal-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-700 dark:bg-white/10 dark:text-white">
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
              Korea today, APAC tomorrow
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              The archive mentions broad support. We restructure that reach into an actionable expansion plan.
            </p>
          </header>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {MARKET_INSIGHTS.map((insight) => (
              <article
                key={insight.region}
                className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-teal-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                    {insight.status}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{insight.region}</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{insight.narrative}</p>
                <Link
                  href={insight.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800 dark:text-teal-200 dark:hover:text-teal-100"
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
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-teal-200 bg-teal-50/80 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to orchestrate Naver Pay with Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Align leadership, distributors, and AI copilots so South Korea hears one story—secure, fast, seamless, and proven
            with data.
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
