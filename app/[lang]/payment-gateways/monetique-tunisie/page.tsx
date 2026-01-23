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
  Bank,
  Broadcast,
  ChartLineUp,
  Compass,
  DeviceTabletCamera,
  GlobeHemisphereNorth,
  Lightning,
  MapTrifold,
  Notebook,
  ShieldCheck,
  Sparkle,
  SquaresFour,
  TrendUp
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
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

type RegionPlan = {
  region: string;
  status: string;
  description: string;
  link: string;
};

const STATS: Stat[] = [
  {
    label: "Archive date",
    value: "28 Aug 2024",
    detail: "Monétique Tunisie page stored with the secure, fast, seamless promise."
  },
  {
    label: "Launch scope",
    value: "Tunisia first",
    detail: "Focus on Tunis, Sfax, and Sousse ecosystems with Apple-enabled payments."
  },
  {
    label: "Activation",
    value: "6 weeks",
    detail: "Discovery to AI-ready operations with measurable outcomes."
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Secure, fast, seamless proven",
    description:
      "We translate the archived copy into compliance dossiers, executive narratives, and AI prompts built for North African stakeholders.",
    icon: ShieldCheck
  },
  {
    title: "Tunisia-first journeys",
    description:
      "French-Arabic localisation, mobile experiences, and Monétique Tunisie settlement patterns inform every enrolment and payout flow.",
    icon: DeviceTabletCamera
  },
  {
    title: "Maghreb expansion",
    description:
      "Playbooks extend into Algeria, Morocco, and beyond with localisation matrices, tax logic, and telemetry dashboards.",
    icon: MapTrifold
  }
];

const INITIATIVES: Initiative[] = [
  {
    heading: "Narrative engineering",
    summary: "Align leadership, marketing, and AI copilots with the Monétique Tunisie story.",
    bullets: [
      "Executive brief reframing secure, fast, seamless for investors and regulators.",
      "SEO & AIO keyword strategy covering Tunisia, Maghreb, and direct selling fintech.",
      "Prompt libraries ensuring chatbots deliver compliant, up-to-date guidance."
    ],
    icon: Broadcast
  },
  {
    heading: "Experience architecture",
    summary: "Design digital journeys that showcase Monétique Tunisie convenience.",
    bullets: [
      "Prototypes for onboarding, checkout, and payout across web and mobile.",
      "Instrumentation to monitor conversion, decline remediation, and fraud signals.",
      "Localized content for French, Arabic, and English touchpoints."
    ],
    icon: Compass
  },
  {
    heading: "Operational intelligence",
    summary: "Give finance and support teams a single source of truth.",
    bullets: [
      "Multi currency automation for dinar, euro, and USD settlements.",
      "Support runbooks combining AI suggestions with escalation commitments.",
      "Dashboards highlighting retention, churn, and incentive performance."
    ],
    icon: ChartLineUp
  }
];

const MODULE_DECKS: ModuleDeck[] = [
  {
    name: "Revenue orchestration",
    subtitle: "Custom Demo • Multi currency • E-Commerce Integration",
    bullets: [
      "Showcase Monétique Tunisie flows with KPI overlays for enterprise buyers.",
      "Balance currency ledgers with audit-ready approvals and alerts.",
      "Embed connectors into Shopify, WooCommerce, and custom storefronts."
    ],
    icon: SquaresFour
  },
  {
    name: "Member trust",
    subtitle: "E-Wallet • Backup Manager • Ticket System",
    bullets: [
      "Automate commission releases triggered by Monétique Tunisie settlements.",
      "Maintain encrypted backups aligned to Tunisian data governance.",
      "Resolve tickets with AI summarisation and SLA tracking."
    ],
    icon: Bank
  },
  {
    name: "Growth narration",
    subtitle: "Auto Responder • Documents • Analytics Packs",
    bullets: [
      "Send lifecycle messaging when payment events occur across plans.",
      "Publish leadership decks positioning Cloud MLM Software as the payment partner.",
      "Monitor compensation health and expansion via live dashboards."
    ],
    icon: TrendUp
  }
];

const REGION_PLANS: RegionPlan[] = [
  {
    region: "Tunisia",
    status: "Operational focus",
    description:
      "Monétique Tunisie underpins Tunisian commerce. We provide localisation, compliance alignment, and distributor enablement tuned for the market.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-tunisia/"
  },
  {
    region: "Maghreb expansion",
    status: "Next horizon",
    description:
      "Scale the playbook into Algeria and Morocco with regional payment preferences and AI knowledge bases.",
    link: "/contact/"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Monétique Tunisie Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Elevate the Monétique Tunisie secure, fast, seamless promise into Tunisia-first growth. Cloud MLM Software delivers AI-ready narratives, immersive journeys, and governed operations.";

  return {
    title,
    description,
    keywords: [
      "Monétique Tunisie payment gateway",
      "Monétique Tunisie Cloud MLM Software integration",
      "Tunisia MLM payments",
      "Maghreb payment orchestration",
      "AI optimized payment operations"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/monetique-tunisie", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MonetiqueTunisiePageProps = {
  params: { lang: SupportedLocale };
};

export default function MonetiqueTunisiePage({ params }: MonetiqueTunisiePageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden px-6 pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-slate-900 to-black" />
        <div className="absolute left-16 top-12 h-52 w-52 rounded-full bg-amber-500/30 blur-3xl" />
        <div className="absolute right-20 top-24 h-40 w-40 rounded-full bg-cyan-500/20 blur-2xl" />
        <div className="relative mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 px-10 py-14 text-white shadow-2xl backdrop-blur">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
                <Sparkle className="h-4 w-4" aria-hidden />
                Monétique Tunisie gateway
              </span>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Monétique Tunisie Payment Gateway Integration for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-amber-100">
                The archived WordPress page already celebrates Monétique Tunisie as secure, fast, seamless. We convert that
                promise into a data-backed launch where leadership, distributors, and AI copilots move together.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/free-mlm-software-demo/">Request Monétique Tunisie demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  <Link href={buildLocalizedPath("/pricing", locale)}>Review programme pricing</Link>
                </Button>
              </div>
            </div>
            <aside className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-200">Archive insights</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {STATS.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-amber-200">{stat.label}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{stat.value}</p>
                    <p className="mt-2 text-xs leading-5 text-amber-100">{stat.detail}</p>
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
              Launch initiatives
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Strategy slices that modernise Monétique Tunisie
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
              Narrative engineering, experience architecture, and operational intelligence ensure every team repeats the same
              secure, fast, seamless story—with proof.
            </p>
          </header>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {INITIATIVES.map((initiative) => {
              const Icon = initiative.icon;
              return (
                <article
                  key={initiative.heading}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-amber-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{initiative.heading}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-200">{initiative.summary}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {initiative.bullets.map((bullet) => (
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
              Module decks aligned with Monétique Tunisie telemetry
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              We orchestrate Cloud MLM Software modules so product, finance, and support teams stay in sync.
            </p>
            <Link
              href="/payment-gateways/monetique-tunisie/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-800 dark:text-amber-200 dark:hover:text-amber-100"
            >
              Review the archived Monétique Tunisie page
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
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 dark:bg-white/10 dark:text-white">
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
              Activation timeline
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Six-week Monétique Tunisie launch roadmap
            </h2>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                phase: "Weeks 1-2",
                detail: "Narrative workshops, KPI baselining, and compliance mapping with Tunisian regulators."
              },
              {
                phase: "Weeks 3-4",
                detail: "Experience prototyping, integration scripts, and telemetry instrumentation."
              },
              {
                phase: "Weeks 5-6",
                detail: "Operational playbooks, AI prompt roll-out, and media storytelling across the Maghreb."
              }
            ].map((milestone) => (
              <article
                key={milestone.phase}
                className="flex flex-col gap-3 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-amber-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
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
              Regional plans
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Tunisia leadership sets the pace for the Maghreb
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              The archive referenced Monétique Tunisie’s coverage across numerous countries. We convert that into tangible
              action plans.
            </p>
          </header>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {REGION_PLANS.map((plan) => (
              <article
                key={plan.region}
                className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-amber-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                    {plan.status}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{plan.region}</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{plan.description}</p>
                <Link
                  href={plan.link}
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
            Ready to lead Tunisia with Monétique Tunisie and Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Let&apos;s align leadership, distributors, and AI copilots around secure, fast, seamless payments—now backed by
            measurable systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/support", locale)}>Coordinate the launch session</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact/">Speak with a payment strategist</Link>
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
