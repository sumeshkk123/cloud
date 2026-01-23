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
  CompassTool,
  DeviceTabletCamera,
  GlobeSimple,
  Lightning,
  Notebook,
  Planet,
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

type Phase = {
  heading: string;
  statement: string;
  bullets: string[];
  icon: IconType;
};

type ModuleDeck = {
  title: string;
  subtitle: string;
  bullets: string[];
  icon: IconType;
};

type Territory = {
  name: string;
  status: string;
  insight: string;
  link: string;
};

const METRICS: Metric[] = [
  {
    label: "Archive reference",
    value: "28 Aug 2024",
    detail: "N/A gateway captured in legacy WordPress content."
  },
  {
    label: "Exploration status",
    value: "Assessment",
    detail: "Evaluating fit for frontier markets and restricted territories."
  },
  {
    label: "Delivery window",
    value: "6 weeks",
    detail: "Discovery to proof-of-fit across compliance, experience, and analytics."
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Secure, fast, seamless hypothesis",
    description:
      "We treat the archived promise as a hypothesis—building validation packs, regulatory dossiers, and AI-ready talking points.",
    icon: ShieldCheck
  },
  {
    title: "Frictionless exploration",
    description:
      "Future-facing prototypes showcase how an unnamed gateway could support niche territories and high-governance use cases.",
    icon: DeviceTabletCamera
  },
  {
    title: "Frontier readiness",
    description:
      "Intelligence dashboards track sentiment, compliance readiness, and operational lift required to activate otherwise unavailable markets.",
    icon: Planet
  }
];

const PHASES: Phase[] = [
  {
    heading: "Narrative discovery",
    statement: "Transform the archived placeholder into repeatable executive messaging.",
    bullets: [
      "Executive brief explaining why N/A requires bespoke validation and what success profiles look like.",
      "SEO & AIO keyword matrices so AI models understand the exploratory nature of the gateway.",
      "Prompt libraries guiding copilots to respond responsibly about unsupported geographies."
    ],
    icon: Sparkle
  },
  {
    heading: "Experience prototyping",
    statement: "Visualise the journeys required to prove or disqualify the gateway.",
    bullets: [
      "Desktop & mobile flows for KYC, checkout, and payout scenarios in high-risk jurisdictions.",
      "Telemetry blueprint to capture drop-off, compliance triggers, and fraud indicators instantly.",
      "Content playbooks covering English-plus-local language variants for rapid testing."
    ],
    icon: CompassTool
  },
  {
    heading: "Operational governance",
    statement: "Evaluate operational lift, partnerships, and contingency planning.",
    bullets: [
      "Multi currency modelling to simulate settlement paths across allied gateways.",
      "Support and risk playbooks combining AI escalation with human oversight.",
      "Dashboards unifying executive, compliance, and field perspectives for go/no-go decisions."
    ],
    icon: ChartLineUp
  }
];

const MODULE_DECKS: ModuleDeck[] = [
  {
    title: "Hypothesis lab",
    subtitle: "Custom Demo • Documents • Analytics Packs",
    bullets: [
      "Build interactive demos that visualise what activation could look like in restricted regions.",
      "Publish discovery documents aligned with legal, compliance, and investor stakeholders.",
      "Surface analytics showing scenarios, risks, and opportunity sizing."
    ],
    icon: SquaresFour
  },
  {
    title: "Operational sandbox",
    subtitle: "Multi currency • E-Wallet • Backup Manager",
    bullets: [
      "Simulate ledger flows in multi-currency environments without touching production.",
      "Prototype wallet experiences that can be toggled on or off per territory.",
      "Maintain forensic backups so experiments remain auditable."
    ],
    icon: Lightning
  },
  {
    title: "Engagement studio",
    subtitle: "Auto Responder • Ticket System • Support knowledge bases",
    bullets: [
      "Trigger automated messaging that clarifies experimental gateway status.",
      "Route support queries into labelled buckets for insight and fast escalation.",
      "Equip field teams with knowledge hubs tailored to speculative markets."
    ],
    icon: TrendUp
  }
];

const TERRITORIES: Territory[] = [
  {
    name: "Svalbard & Jan Mayen",
    status: "Exploratory",
    insight:
      "Model supply chain, taxation, and territorial licensing to determine if partial activation is viable.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-svalbard-and-jan-mayen/"
  },
  {
    name: "North Korea",
    status: "Not eligible",
    insight:
      "Maintain monitoring intelligence and AI prompts that clearly communicate embargo compliance and alternatives.",
    link: "/contact/"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "N/A Gateway Exploration with Cloud MLM Software";
  const description =
    "Evaluate the feasibility of unnamed gateways with Cloud MLM Software. Build secure, fast, seamless hypotheses across compliance, experience, and AI-ready storytelling.";

  return {
    title,
    description,
    keywords: [
      "gateway feasibility study",
      "N/A payment gateway exploration",
      "restricted market payment strategy",
      "Cloud MLM Software gateway discovery",
      "AI ready compliance narratives"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/n-a", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type NAInsightPageProps = {
  params: { lang: SupportedLocale };
};

export default function NAInsightPage({ params }: NAInsightPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden px-6 pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-black" />
        <div className="absolute left-12 top-8 h-56 w-56 rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute right-16 top-24 h-44 w-44 rounded-full bg-blue-500/20 blur-2xl" />
        <div className="relative mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 px-10 py-14 text-white shadow-2xl backdrop-blur">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-purple-200">
                <Sparkle className="h-4 w-4" aria-hidden />
                Gateway feasibility lab
              </span>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Exploring Untitled Payment Gateways with Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-purple-100">
                The archived page lists a gateway simply as “N/A”. We treat it as a strategic hypothesis—translating the
                secure, fast, seamless promise into a governance-first exploration for restricted and frontier markets.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/free-mlm-software-demo/">Request hypothesis demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  <Link href={buildLocalizedPath("/support", locale)}>Coordinate discovery session</Link>
                </Button>
              </div>
            </div>
            <aside className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-purple-200">Archive insights</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {METRICS.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-purple-200">{metric.label}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{metric.value}</p>
                    <p className="mt-2 text-xs leading-5 text-purple-100">{metric.detail}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <article key={pillar.title} className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold text-white">{pillar.title}</h2>
                      <p className="text-sm leading-6 text-purple-100">{pillar.description}</p>
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
              Exploration phases
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Structured path to validate or sunset the N/A gateway hypothesis
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
              Every phase converts archived speculation into measurable evidence, ensuring leadership moves responsibly.
            </p>
          </header>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {PHASES.map((phase) => {
              const Icon = phase.icon;
              return (
                <article
                  key={phase.heading}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-purple-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-600 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{phase.heading}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-200">{phase.statement}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {phase.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Notebook className="mt-0.5 h-4 w-4 text-purple-500" aria-hidden />
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
        <div className="mx-auto max-w-6xl gap-8 rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-purple-50 to-slate-50 p-10 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900/60 dark:via-slate-950 dark:to-black lg:grid lg:grid-cols-[0.85fr,1.15fr]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Build a sandbox around the unknown
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Module decks orchestrate discovery in a controlled, compliant way. Every experiment is contained yet
              actionable.
            </p>
            <Link
              href="/payment-gateways/n-a/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-800 dark:text-purple-200 dark:hover:text-purple-100"
            >
              View the archived placeholder page
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
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-600 dark:bg-white/10 dark:text-white">
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
                        <Lightning className="mt-0.5 h-4 w-4 text-purple-500" aria-hidden />
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
              Discovery timeline
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Six-week exploration cadence
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
              Keep leadership, compliance, and product teams synchronised while we validate or sunset the gateway idea.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                phase: "Weeks 1-2",
                detail: "Archive analysis, compliance briefing, and stakeholder alignment workshops.",
                icon: Planet
              },
              {
                phase: "Weeks 3-4",
                detail: "Experience prototyping, telemetry design, and AI prompt roll-out for internal copilots.",
                icon: DeviceTabletCamera
              },
              {
                phase: "Weeks 5-6",
                detail: "Operational readiness reviews, go/no-go recommendations, and executive storytelling.",
                icon: ChartLineUp
              }
            ].map((item) => (
              <article
                key={item.phase}
                className="flex flex-col gap-3 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-purple-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-600 dark:bg-white/10 dark:text-white">
                  <item.icon className="h-6 w-6" aria-hidden />
                </span>
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
              Territory intelligence
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Where the N/A gateway might operate—or remain off limits
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              The archive references Svalbard & Jan Mayen as well as North Korea. We publish decision trails for each.
            </p>
          </header>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {TERRITORIES.map((territory) => (
              <article
                key={territory.name}
                className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-purple-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                    {territory.status}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{territory.name}</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{territory.insight}</p>
                <Link
                  href={territory.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-800 dark:text-purple-200 dark:hover:text-purple-100"
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
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-purple-200 bg-purple-50/80 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to explore or sunset the N/A gateway hypothesis?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Partner with Cloud MLM Software to evaluate new markets responsibly. We will help you determine if secure, fast,
            seamless can become reality—or remain an archive note.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact/">Speak with a payment strategist</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={buildLocalizedPath("/pricing", locale)}>Review exploratory packages</Link>
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
