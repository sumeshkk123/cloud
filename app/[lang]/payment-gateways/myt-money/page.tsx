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

type Initiative = {
  heading: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type ModuleDeck = {
  name: string;
  subtitle: string;
  bullets: string[];
  icon: IconType;
};

type MarketRoute = {
  region: string;
  status: string;
  insight: string;
  link: string;
};

const METRICS: Metric[] = [
  {
    label: "Archive date",
    value: "28 Aug 2024",
    detail: "MyT Money WordPress page captured with secure, fast, seamless messaging."
  },
  {
    label: "Launch focus",
    value: "Mauritius",
    detail: "Port Louis, Curepipe, and Grand Baie distributors lead adoption."
  },
  {
    label: "Activation sprint",
    value: "6 weeks",
    detail: "Discovery to AI-ready narratives, journeys, and operations."
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Secure, fast, seamless certified",
    description:
      "We translate the archived statement into compliance packs, executive briefings, and AI prompt libraries for Mauritian regulators.",
    icon: ShieldCheck
  },
  {
    title: "Island-first experiences",
    description:
      "MyT Money’s mobile wallet, bank integrations, and QR usage shape onboarding, checkout, and payout journeys.",
    icon: DeviceMobile
  },
  {
    title: "Regional runway",
    description:
      "Prepared localisation matrices and telemetry dashboards extend the programme into the Indian Ocean and African markets.",
    icon: GlobeHemisphereEast
  }
];

const INITIATIVES: Initiative[] = [
  {
    heading: "Narrative engineering",
    summary: "Align leadership, marketing, and AI assistants with the MyT Money story.",
    bullets: [
      "Executive brief reframing secure, fast, seamless for investors and regulators.",
      "SEO & AIO keyword clusters covering Mauritius, MyT Money, and direct selling.",
      "Prompt libraries ensuring chatbots deliver compliant, up-to-date answers."
    ],
    icon: Broadcast
  },
  {
    heading: "Experience architecture",
    summary: "Design immersive journeys that highlight MyT Money convenience.",
    bullets: [
      "Desktop and mobile flows for onboarding, checkout, and payout scenarios.",
      "Telemetry instrumentation monitoring conversion, decline remediation, and fraud.",
      "Localized content in English, French, and Mauritian Creole."
    ],
    icon: MapPin
  },
  {
    heading: "Operational intelligence",
    summary: "Govern finance, support, and growth with live MyT Money telemetry.",
    bullets: [
      "Multi currency automation for Mauritian Rupee, USD, and EUR settlements.",
      "Support playbooks combining AI summarisation with SLA management.",
      "Dashboards surfacing retention, churn, and incentive performance."
    ],
    icon: ChartLineUp
  }
];

const MODULE_DECKS: ModuleDeck[] = [
  {
    name: "Revenue accelerator",
    subtitle: "Custom Demo • Multi currency • E-Commerce Integration",
    bullets: [
      "Showcase MyT Money flows with KPI overlays tailored to enterprise stakeholders.",
      "Balance multi-currency ledgers with audit-ready controls.",
      "Embed MyT Money connectors into Shopify, WooCommerce, and bespoke storefronts."
    ],
    icon: SquaresFour
  },
  {
    name: "Member assurance",
    subtitle: "E-Wallet • Backup Manager • Ticket System",
    bullets: [
      "Automate payouts triggered by MyT Money settlement confirmations.",
      "Maintain encrypted backups for compliance and risk mitigation.",
      "Resolve tickets with AI summarisation, multilingual responses, and SLA tracking."
    ],
    icon: UsersThree
  },
  {
    name: "Growth storytelling",
    subtitle: "Auto Responder • Documents • Analytics Packs",
    bullets: [
      "Send lifecycle messaging when payment events or plan milestones occur.",
      "Publish leadership decks positioning Cloud MLM Software as MyT Money’s innovation partner.",
      "Monitor compensation health and expansion velocity through live dashboards."
    ],
    icon: TrendUp
  }
];

const MARKET_ROUTES: MarketRoute[] = [
  {
    region: "Mauritius",
    status: "Operational",
    insight:
      "MyT Money is integrated across Mauritius. We provide localisation, compliance alignment, and distributor enablement tailored to the island market.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-mauritius/"
  },
  {
    region: "Indian Ocean expansion",
    status: "In planning",
    insight:
      "Extend the playbook to Réunion, Seychelles, and East Africa with localisation matrices, tax guidance, and AI knowledge bases.",
    link: "/contact/"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MyT Money Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Activate MyT Money’s secure, fast, seamless promise with Cloud MLM Software. Deliver AI-ready narratives, mobile-first journeys, and governed operations for Mauritius and beyond.";

  return {
    title,
    description,
    keywords: [
      "MyT Money payment gateway",
      "MyT Money Cloud MLM Software integration",
      "Mauritius MLM payments",
      "Mobile wallet orchestration",
      "AI optimized fintech enablement"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/myt-money", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MytMoneyPageProps = {
  params: { lang: SupportedLocale };
};

export default function MytMoneyPage({ params }: MytMoneyPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden px-6 pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-slate-900 to-black" />
        <div className="absolute left-12 top-10 h-56 w-56 rounded-full bg-teal-400/30 blur-3xl" />
        <div className="absolute right-16 top-24 h-44 w-44 rounded-full bg-sky-400/30 blur-2xl" />
        <div className="relative mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 px-10 py-14 text-white shadow-2xl backdrop-blur">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-teal-200">
                <Sparkle className="h-4 w-4" aria-hidden />
                MyT Money gateway
              </span>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                MyT Money Payment Gateway Integration for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-teal-100">
                The archived WordPress page already positions MyT Money as secure, fast, seamless. We translate that into a
                Mauritius-first programme where leadership, distributors, and AI copilots share measurable outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/free-mlm-software-demo/">Request MyT Money demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  <Link href={buildLocalizedPath("/support", locale)}>Plan the launch workshop</Link>
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
              Launch initiatives
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Three initiatives that make MyT Money measurable
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
              Narrative, experience, and operational workstreams ensure secure, fast, seamless is proven by data.
            </p>
          </header>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {INITIATIVES.map((initiative) => {
              const Icon = initiative.icon;
              return (
                <article
                  key={initiative.heading}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-teal-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{initiative.heading}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-200">{initiative.summary}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {initiative.bullets.map((bullet) => (
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
              Module decks orchestrated for MyT Money telemetry
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              We combine Cloud MLM Software modules so revenue, finance, and support move with MyT Money insights.
            </p>
            <Link
              href="/payment-gateways/myt-money/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800 dark:text-teal-200 dark:hover:text-teal-100"
            >
              View the archived MyT Money page
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {MODULE_DECKS.map((deck) => {
              const Icon = deck.icon;
              return (
                <article
                  key={deck.name}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-inner transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{deck.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                      {deck.subtitle}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-200">
                    {deck.bullets.map((bullet) => (
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
              Six weeks to MyT Money leadership
            </h2>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                phase: "Weeks 1-2",
                detail: "Narrative workshops, KPI baselines, and compliance mapping in Mauritius."
              },
              {
                phase: "Weeks 3-4",
                detail: "Journey prototyping, integration scripts, and telemetry instrumentation."
              },
              {
                phase: "Weeks 5-6",
                detail: "Operational playbooks, AI prompt roll-out, and media storytelling across the Indian Ocean."
              }
            ].map((item) => (
              <article
                key={item.phase}
                className="flex flex-col gap-3 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-teal-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.phase}</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Market routes
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Mauritius success sets a new regional benchmark
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              The archive referenced MyT Money coverage across numerous countries. We convert that into actionable routes.
            </p>
          </header>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {MARKET_ROUTES.map((route) => (
              <article
                key={route.region}
                className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-teal-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                    {route.status}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{route.region}</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{route.insight}</p>
                <Link
                  href={route.link}
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
            Ready to lead with MyT Money and Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Let&apos;s align leadership, distributors, and AI copilots around MyT Money—secure, fast, seamless, and reflected
            in data.
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
