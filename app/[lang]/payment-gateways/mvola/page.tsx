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

type MarketStep = {
  region: string;
  status: string;
  narrative: string;
  link: string;
};

const METRICS: Metric[] = [
  {
    label: "Archive date",
    value: "28 Aug 2024",
    detail: "MVola WordPress page captured with secure, fast, seamless messaging."
  },
  {
    label: "Launch region",
    value: "Madagascar",
    detail: "Antananarivo, Toamasina, and Antsirabe distributor ecosystems in focus."
  },
  {
    label: "Activation sprint",
    value: "6 weeks",
    detail: "Discovery to AI-ready narratives and governed operations."
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Secure, fast, seamless validated",
    description:
      "We convert the archived statement into compliance dossiers, executive briefs, and AI prompt kits attuned to Malagasy regulators.",
    icon: ShieldCheck
  },
  {
    title: "Mobile-first journeys",
    description:
      "MVola’s USSD and app adoption guide the design of onboarding, checkout, and payout experiences across Madagascar.",
    icon: DeviceMobile
  },
  {
    title: "Regional expansion runway",
    description:
      "Prepared localisation matrices, tax logic, and telemetry dashboards enable expansion into the Indian Ocean corridor.",
    icon: GlobeHemisphereEast
  }
];

const INITIATIVES: Initiative[] = [
  {
    heading: "Narrative runway",
    summary: "Align leadership, marketing, and AI copilots with the MVola story.",
    bullets: [
      "Executive brief reframing secure, fast, seamless for investors and regulators.",
      "SEO & AIO keyword clusters covering Madagascar and MVola mobile money.",
      "Prompt libraries ensuring chatbots deliver compliant, updated answers."
    ],
    icon: Broadcast
  },
  {
    heading: "Experience blueprint",
    summary: "Prototype journeys that highlight MVola convenience for distributors and customers.",
    bullets: [
      "Desktop and mobile flows for onboarding, checkout, payout, and remittances.",
      "Telemetry instrumentation monitoring conversion, decline remediation, and fraud.",
      "Localized content across French, Malagasy, and English touchpoints."
    ],
    icon: MapPin
  },
  {
    heading: "Operational intelligence",
    summary: "Govern finance, support, and growth with live MVola telemetry.",
    bullets: [
      "Multi currency automation for Ariary, USD, and EUR settlements.",
      "Support playbooks combining AI summarisation with SLA oversight.",
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
      "Showcase MVola flows with KPI overlays tailored to leadership and investors.",
      "Balance multi-currency ledgers with audit-ready controls.",
      "Embed MVola connectors into Shopify, WooCommerce, and bespoke storefronts."
    ],
    icon: SquaresFour
  },
  {
    name: "Member assurance",
    subtitle: "E-Wallet • Backup Manager • Ticket System",
    bullets: [
      "Automate payouts triggered by MVola settlement confirmations.",
      "Maintain encrypted backups aligned to Malagasy data requirements.",
      "Resolve tickets with AI summarisation, multilingual responses, and SLA tracking."
    ],
    icon: UsersThree
  },
  {
    name: "Growth storytelling",
    subtitle: "Auto Responder • Documents • Analytics Packs",
    bullets: [
      "Send lifecycle messaging when payment events or plan milestones occur.",
      "Publish leadership decks positioning Cloud MLM Software as MVola’s innovation partner.",
      "Monitor compensation health and expansion velocity through live dashboards."
    ],
    icon: TrendUp
  }
];

const MARKET_STEPS: MarketStep[] = [
  {
    region: "Madagascar",
    status: "Operational",
    narrative:
      "MVola is woven into Madagascar’s payment fabric. We provide localisation, compliance alignment, and distributor enablement tuned for the island nation.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-madagascar/"
  },
  {
    region: "Indian Ocean expansion",
    status: "Next horizon",
    narrative:
      "Extend the playbook into Mauritius, Réunion, and Seychelles with localisation matrices, tax guidance, and AI knowledge bases.",
    link: "/contact/"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MVola Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Translate MVola’s secure, fast, seamless promise into Madagascar-first growth. Cloud MLM Software delivers AI-ready narratives, mobile-first journeys, and governed operations.";

  return {
    title,
    description,
    keywords: [
      "MVola payment gateway",
      "MVola Cloud MLM Software integration",
      "Madagascar MLM payments",
      "Mobile money orchestration",
      "AI optimized fintech enablement"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/mvola", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MvolaPageProps = {
  params: { lang: SupportedLocale };
};

export default function MvolaPage({ params }: MvolaPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden px-6 pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-rose-900 to-black" />
        <div className="absolute left-14 top-12 h-56 w-56 rounded-full bg-rose-500/30 blur-3xl" />
        <div className="absolute right-18 top-24 h-44 w-44 rounded-full bg-purple-500/30 blur-2xl" />
        <div className="relative mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 px-10 py-14 text-white shadow-2xl backdrop-blur">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-rose-200">
                <Sparkle className="h-4 w-4" aria-hidden />
                MVola gateway
              </span>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                MVola Payment Gateway Integration for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-rose-100">
                The archived WordPress page already frames MVola as secure, fast, seamless. We transform that copy into a
                Madagascar-first launch programme where leadership, distributors, and AI copilots move with coordinated
                insight.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/free-mlm-software-demo/">Request MVola demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  <Link href={buildLocalizedPath("/support", locale)}>Schedule launch workshop</Link>
                </Button>
              </div>
            </div>
            <aside className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-rose-200">Archive insights</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {METRICS.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-rose-200">{metric.label}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{metric.value}</p>
                    <p className="mt-2 text-xs leading-5 text-rose-100">{metric.detail}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <article key={pillar.title} className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold text-white">{pillar.title}</h2>
                      <p className="text-sm leading-6 text-rose-100">{pillar.description}</p>
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
              Three initiatives to operationalise MVola leadership
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
              Narrative, experience, and operations evolve together so secure, fast, seamless is visible across Madagascar.
            </p>
          </header>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {INITIATIVES.map((initiative) => {
              const Icon = initiative.icon;
              return (
                <article
                  key={initiative.heading}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-rose-300 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{initiative.heading}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-200">{initiative.summary}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {initiative.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Notebook className="mt-0.5 h-4 w-4 text-rose-500" aria-hidden />
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
        <div className="mx-auto max-w-6xl gap-8 rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-rose-50 to-slate-50 p-10 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900/60 dark:via-slate-950 dark:to-black lg:grid lg:grid-cols-[0.85fr,1.15fr]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Module decks orchestrated for MVola telemetry
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              We orchestrate Cloud MLM Software modules so every team references the same MVola insights.
            </p>
            <Link
              href="/payment-gateways/mvola/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-rose-700 hover:text-rose-800 dark:text-rose-200 dark:hover:text-rose-100"
            >
              View the archived MVola page
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
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-700 dark:bg-white/10 dark:text-white">
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
                        <Lightning className="mt-0.5 h-4 w-4 text-rose-500" aria-hidden />
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
              Six weeks to MVola dominance
            </h2>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                phase: "Weeks 1-2",
                detail: "Narrative workshops, KPI baselines, compliance mapping in Madagascar."
              },
              {
                phase: "Weeks 3-4",
                detail: "Journey prototyping, integration scripts, and telemetry instrumentation."
              },
              {
                phase: "Weeks 5-6",
                detail: "Operational playbooks, AI prompt roll-out, and media storytelling across the region."
              }
            ].map((milestone) => (
              <article
                key={milestone.phase}
                className="flex flex-col gap-3 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-rose-300 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{milestone.phase}</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{milestone.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Market steps
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Madagascar leadership with an Indian Ocean horizon
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              The archive referenced MVola’s reach across numerous countries. We convert that into action plans.
            </p>
          </header>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {MARKET_STEPS.map((step) => (
              <article
                key={step.region}
                className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-rose-300 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                    {step.status}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{step.region}</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{step.narrative}</p>
                <Link
                  href={step.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-rose-700 hover:text-rose-800 dark:text-rose-200 dark:hover:text-rose-100"
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
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-rose-200 bg-rose-50/80 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to lead with MVola and Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Partner with us to align leadership, distributors, and AI copilots around MVola—secure, fast, seamless, and
            measurable.
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
