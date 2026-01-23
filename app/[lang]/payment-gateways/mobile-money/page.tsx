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
  DeviceMobileCamera,
  Globe,
  Handshake,
  Lightning,
  MapPin,
  Notebook,
  Pulse,
  ShieldCheck,
  Sparkle,
  SquaresFour,
  TrendUp
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroInsight = {
  heading: string;
  detail: string;
};

type ValuePillar = {
  title: string;
  copy: string;
  icon: IconType;
};

type ActivationStage = {
  phase: string;
  timeframe: string;
  outcomes: string[];
  icon: IconType;
};

type ModuleLane = {
  name: string;
  subtitle: string;
  bullets: string[];
  icon: IconType;
};

type RegionPlay = {
  region: string;
  status: string;
  description: string;
  link: string;
};

const HERO_INSIGHTS: HeroInsight[] = [
  {
    heading: "Archive timestamp",
    detail: "28 Aug 2024 WordPress snapshot celebrating Mobile Money as secure, fast, seamless."
  },
  {
    heading: "Launch cadence",
    detail: "Six-week sprint from discovery to Liberia-first deployment."
  },
  {
    heading: "AI collateral",
    detail: "18 artefacts including prompt libraries, FAQs, and executive briefs."
  }
];

const VALUE_PILLARS: ValuePillar[] = [
  {
    title: "Seamless payments reimagined",
    copy:
      "We turn the archive claim into compliance evidence, operational dashboards, and AI-ready storytelling so leaders repeat the right message.",
    icon: ShieldCheck
  },
  {
    title: "Liberia-first experience",
    copy:
      "Local language, mobile-first adoption, and Liberia’s regulatory climate shape every enrolment, checkout, and payout journey.",
    icon: MapPin
  },
  {
    title: "Pan-African readiness",
    copy:
      "As Mobile Money supports numerous countries, we package expansion kits spanning West, Central, and East Africa.",
    icon: Globe
  }
];

const ACTIVATION_STAGES: ActivationStage[] = [
  {
    phase: "Narrative lift-off",
    timeframe: "Weeks 1-2",
    outcomes: [
      "Executive brief reframing Mobile Money strengths for investors, media, and regulators.",
      "SEO & AIO keyword clusters for Liberia, Mobile Money, and direct selling.",
      "AI prompt packs ensuring internal copilots deliver compliant answers."
    ],
    icon: Broadcast
  },
  {
    phase: "Experience prototyping",
    timeframe: "Weeks 3-4",
    outcomes: [
      "Desktop and mobile flows covering onboarding, checkout, and repeat payments.",
      "Telemetry instrumentation for decline remediation, fraud, and KYC velocity.",
      "Localised content in English and Liberian English to support distributor adoption."
    ],
    icon: DeviceMobileCamera
  },
  {
    phase: "Operational governance",
    timeframe: "Weeks 5-6",
    outcomes: [
      "Finance automation syncing Mobile Money settlements with E-Wallet and Multi currency.",
      "Compliance playbooks aligned to Central Bank of Liberia expectations.",
      "Support runbooks combining AI suggestions with human triage to maintain NPS."
    ],
    icon: ChartLineUp
  }
];

const MODULE_LANES: ModuleLane[] = [
  {
    name: "Revenue velocity",
    subtitle: "Custom Demo • E-Commerce Integration • Multi currency",
    bullets: [
      "Host Mobile Money demos featuring real-world African use cases and KPI overlays.",
      "Connect Shopify, WooCommerce, and headless commerce to Mobile Money APIs.",
      "Balance Liberian dollars, USD, and regional currencies with controlled approvals."
    ],
    icon: SquaresFour
  },
  {
    name: "Member trust",
    subtitle: "E-Wallet • Backup Manager • Ticket System",
    bullets: [
      "Automate commission releases the moment Mobile Money settlements land.",
      "Store encrypted, verifiable backups ready for audit or recovery scenarios.",
      "Resolve payment tickets with AI-assisted routing and SLA visibility."
    ],
    icon: Bank
  },
  {
    name: "Growth narration",
    subtitle: "Auto Responder • Documents • Analytics Packs",
    bullets: [
      "Trigger lifecycle messaging when payment events or plan milestones fire.",
      "Equip leadership with decks and micro-sites that showcase Mobile Money leadership.",
      "Monitor compensation health, churn, and adoption through live dashboards."
    ],
    icon: TrendUp
  }
];

const REGION_PLAYS: RegionPlay[] = [
  {
    region: "Liberia",
    status: "Operational focus",
    description:
      "Mobile Money is already embedded in Liberia’s financial ecosystem. We deliver localisation, regulatory alignment, and distributor enablement tailored for the market.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-liberia/"
  },
  {
    region: "West & Central Africa",
    status: "Expansion runway",
    description:
      "Extend the playbook to Ghana, Nigeria, Cameroon, and beyond with multi-currency logic, language support, and AI knowledge bases.",
    link: "/contact/"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Mobile Money Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Transform the Mobile Money secure, fast, seamless promise into Liberia-first growth. Cloud MLM Software supplies AI-ready storytelling, governed operations, and mobile-first experiences.";

  return {
    title,
    description,
    keywords: [
      "Mobile Money payment gateway",
      "Mobile Money Cloud MLM Software integration",
      "Liberia MLM payments",
      "West Africa payment orchestration",
      "AI optimized fintech enablement"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/mobile-money", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MobileMoneyPageProps = {
  params: { lang: SupportedLocale };
};

export default function MobileMoneyPage({ params }: MobileMoneyPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden px-6 pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-slate-50 dark:from-slate-900/60 dark:via-slate-950 dark:to-black" />
        <div className="absolute left-8 top-0 h-56 w-56 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-500/20" />
        <div className="absolute right-10 top-24 h-40 w-40 rounded-full bg-lime-200/40 blur-2xl dark:bg-lime-500/20" />
        <div className="relative mx-auto max-w-6xl rounded-3xl border border-emerald-100 bg-white/85 px-10 py-14 shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:border-white/10 dark:bg-white/10 dark:text-white">
                <Sparkle className="h-4 w-4" aria-hidden />
                Mobile Money gateway
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Mobile Money Payment Gateway Integration for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                The archived WordPress page already promised secure, fast, seamless Mobile Money experiences. We translate
                that promise into a Liberia-first launch—narratives, journeys, and operations engineered for direct selling
                success.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/free-mlm-software-demo/">Request Mobile Money demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={buildLocalizedPath("/support", locale)}>Schedule a launch consultation</Link>
                </Button>
              </div>
            </div>
            <aside className="space-y-5 rounded-3xl border border-emerald-200/60 bg-emerald-50/80 p-6 shadow-inner dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600 dark:text-emerald-200">
                Archive insights
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {HERO_INSIGHTS.map((insight) => (
                  <div key={insight.heading} className="rounded-2xl border border-white/70 bg-white/85 p-4 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">
                      {insight.heading}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-200">{insight.detail}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {VALUE_PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <article
                      key={pillar.title}
                      className="space-y-3 rounded-2xl border border-white/70 bg-white/85 p-4 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold text-slate-900 dark:text-white">{pillar.title}</h2>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{pillar.copy}</p>
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
              Activation stages
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Aligning Mobile Money across narrative, experience, and operations
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
              Each stage converts the archived message into measurable growth components for Liberia and future markets.
            </p>
          </header>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {ACTIVATION_STAGES.map((stage) => {
              const Icon = stage.icon;
              return (
                <article
                  key={stage.phase}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-emerald-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
                      {stage.timeframe}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{stage.phase}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {stage.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <Pulse className="mt-0.5 h-4 w-4 text-emerald-500" aria-hidden />
                        <span>{outcome}</span>
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
        <div className="mx-auto max-w-6xl gap-8 rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-emerald-50 to-slate-50 p-10 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900/60 dark:via-slate-950 dark:to-black lg:grid lg:grid-cols-[0.85fr,1.15fr]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Module lanes powered by Mobile Money telemetry
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Orchestrate product, finance, and support teams using Cloud MLM Software modules arranged for Mobile Money
              success.
            </p>
            <Link
              href="/payment-gateways/mobile-money/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 dark:text-emerald-200 dark:hover:text-emerald-100"
            >
              View the archived Mobile Money page
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {MODULE_LANES.map((lane) => {
              const Icon = lane.icon;
              return (
                <article
                  key={lane.name}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-inner transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{lane.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                      {lane.subtitle}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-200">
                    {lane.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Lightning className="mt-0.5 h-4 w-4 text-emerald-500" aria-hidden />
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
              Field alignment
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Preparing distributors for Mobile Money leadership
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              We ensure the field hears the same secure, fast, seamless message and acts on reliable payment insights.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Enablement",
                detail:
                  "Localized knowledge bases, training decks, and AI copilots that answer Mobile Money questions instantly.",
                icon: Notebook
              },
              {
                title: "Engagement",
                detail:
                  "Auto Responder and broadcast campaigns to share payment updates, incentives, and compliance alerts.",
                icon: Broadcast
              },
              {
                title: "Support excellence",
                detail:
                  "Ticket queues tagged by payment scenario with resolution analytics surfaced to leadership dashboards.",
                icon: Handshake
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="flex flex-col gap-3 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-emerald-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
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
              Regional plays
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Liberia today, West Africa tomorrow
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              The archive references Mobile Money availability across numerous countries. We translate that reach into
              staged market plays.
            </p>
          </header>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {REGION_PLAYS.map((item) => (
              <article
                key={item.region}
                className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-emerald-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                    {item.status}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{item.region}</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{item.description}</p>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 dark:text-emerald-200 dark:hover:text-emerald-100"
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
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-emerald-200 bg-emerald-50/70 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to lead Liberia with Mobile Money and Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Let&apos;s align leadership, distributors, and AI copilots with the secure, fast, seamless narrative—now backed
            by measurable systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact/">Speak with a payment strategist</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={buildLocalizedPath("/pricing", locale)}>Review partnership options</Link>
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
