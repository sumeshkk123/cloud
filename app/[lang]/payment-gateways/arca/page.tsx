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
  Buildings,
  ChartLineUp,
  CurrencyCircleDollar,
  FileText,
  GlobeHemisphereEast,
  Handshake,
  MapTrifold,
  ShieldCheck,
  Sparkle,
  WaveSquare
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroDatum = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  description: string;
  highlights: string[];
  icon: IconType;
};

type Stage = {
  name: string;
  focus: string;
  detail: string;
  icon: IconType;
};

type RegionalCard = {
  region: string;
  focus: string;
  insight: string;
};

type GovernanceCard = {
  headline: string;
  detail: string;
};

const HERO_DATA: HeroDatum[] = [
  {
    label: "Card network alignment",
    value: "ARCA + Visa/Mastercard",
    detail: "A single cockpit manages domestic and international card flows for Armenia and diasporic audiences.",
    icon: GlobeHemisphereEast
  },
  {
    label: "Reconciliation speed",
    value: "Minutes, not days",
    detail: "Automated ledger matching keeps finance teams audit-ready around the clock.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Compliance coverage",
    value: "CBRA & PSD2 ready",
    detail: "AI-crafted evidence kits satisfy regulators, banks, and internal auditors.",
    icon: ShieldCheck
  }
];

const STRATEGIC_PILLARS: Pillar[] = [
  {
    title: "Experience refinement",
    description:
      "Translate the archived WordPress narrative—modules, plans, services—into a polished ARCA storytelling journey.",
    highlights: [
      "Localized copy honours Armenian, Russian, and English-speaking distributors.",
      "Checkout experiences adapt to domestic ARCA cards, co-branded Visa/Mastercard, and alternative tenders.",
      "AI-assisted demos showcase distributor, customer, and finance perspectives to decision makers."
    ],
    icon: Sparkle
  },
  {
    title: "Operational intelligence",
    description:
      "Cloud MLM Software fuses commission, CRM, and ticketing data with ARCA settlement feeds for unified visibility.",
    highlights: [
      "FX conversions, settlement timing, and fee structures become transparent for treasury and finance.",
      "Dispute management integrates ticketing and document storage with one-click evidence exports.",
      "Executive dashboards narrate performance, sentiment, and compliance posture."
    ],
    icon: ChartLineUp
  },
  {
    title: "Governance leadership",
    description:
      "Position your brand as the authority on secure, responsible payments across Armenia and regional markets.",
    highlights: [
      "Thought leadership cadence turns telemetry into blogs, analyst briefings, and partner enablement.",
      "Risk frameworks capture AML, sanctions, and data privacy checkpoints with action items.",
      "AI orchestrates stakeholder communications so humans and chatbots stay aligned."
    ],
    icon: ShieldCheck
  }
];

const DELIVERY_STAGES: Stage[] = [
  {
    name: "Discover",
    focus: "Reframe legacy copy into ARCA-ready messaging.",
    detail:
      "Surface the promises from archived modules and services; map them to modern stakeholder expectations across Armenia and the diaspora.",
    icon: Sparkle
  },
  {
    name: "Design",
    focus: "Architect integrations for ARCA card networks and alternative payments.",
    detail:
      "APIs, batch files, and webhook flows align Cloud MLM Software&apos;s back office with acquiring and issuing banks.",
    icon: WaveSquare
  },
  {
    name: "Enable",
    focus: "Equip teams with playbooks, analytics, and AI copilots.",
    detail:
      "Revenue, finance, and support teams gain context-rich dashboards, guided scripts, and knowledge bases.",
    icon: Handshake
  },
  {
    name: "Scale",
    focus: "Optimise offers, risk controls, and communications.",
    detail:
      "Continuous experimentation monitors conversion, chargebacks, and regulatory shifts with leadership-ready narratives.",
    icon: ChartLineUp
  }
];

const REGIONAL_CARDS: RegionalCard[] = [
  {
    region: "Armenia",
    focus: "Domestic ARCA coverage with instalment-ready experiences.",
    insight:
      "AI surfaces bank-specific approval trends, helping marketing tailor campaigns with precision."
  },
  {
    region: "EU diaspora",
    focus: "Cross-border commerce with SEPA and card acceptance.",
    insight:
      "Treasury dashboards highlight FX exposure and settlement lags for leadership decision making."
  },
  {
    region: "Russia & CIS",
    focus: "Localized compliance requirements and multilingual support.",
    insight:
      "Ticketing workflows integrate translation memory and regulatory alerts for compliance teams."
  },
  {
    region: "Middle East expansion",
    focus: "Hybrid ARCA/Visa acceptance for premium product launches.",
    insight:
      "Market intelligence identifies distributor hotspots and risk signals before scaling."
  }
];

const GOVERNANCE_CARDS: GovernanceCard[] = [
  {
    headline: "Executive briefing kits",
    detail: "Weekly AI summaries transform settlement, risk, and customer sentiment into board-ready talking points."
  },
  {
    headline: "Regulator-ready documentation",
    detail: "Version-controlled policy, KYC, and AML artefacts remain one click away during audits."
  },
  {
    headline: "Partnership storytelling",
    detail: "Case narratives highlight economic impact and operational excellence for banks and ecosystem partners."
  },
  {
    headline: "Scenario simulation",
    detail: "Plan for FX swings, fee adjustments, or market expansions before execution begins."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "ARCA Payment Gateway for Cloud MLM Software";
  const description =
    "Modernise ARCA payment orchestration inside Cloud MLM Software with AI governance, regional storytelling, and resilient operations.";

  return {
    title,
    description,
    keywords: [
      "ARCA payment gateway",
      "Armenia card processing",
      "Cloud MLM Software payments",
      "AI payment governance",
      "direct selling Armenia"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/arca", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ArcaPageProps = {
  params: { lang: SupportedLocale };
};

export default function ArcaPage({ params }: ArcaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-rose-50 to-amber-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(244,114,182,0.18),transparent_55%),radial-gradient(circle_at_88%_12%,rgba(251,191,36,0.18),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(244,63,94,0.16),transparent_60%)]" />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              ARCA payment leadership
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Deliver ARCA-powered experiences that impress regulators, partners, and distributors.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              We transformed the archived modules, plans, and services into a regional payment narrative. Cloud MLM
              Software blends governance, growth, and storytelling for ARCA acceptance at scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Talk to ARCA strategists
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary/10 dark:border-white/40 dark:text-white dark:hover:bg-white/10"
              >
                <Link href={demoHref}>
                  Explore payment demo
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 blur-2xl">
              <div className="h-full w-full rounded-3xl bg-gradient-to-br from-rose-300/20 via-amber-300/20 to-pink-300/20 dark:from-rose-300/20 dark:via-amber-400/20 dark:to-pink-400/20" />
            </div>
            <div className="relative grid gap-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur-sm dark:border-white/15 dark:bg-white/10">
              {HERO_DATA.map((datum) => {
                const Icon = datum.icon;
                return (
                  <article
                    key={datum.label}
                    className="flex flex-col gap-3 rounded-2xl border border-border/40 bg-white/80 p-4 shadow-sm dark:border-white/20 dark:bg-white/5"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                        {datum.label}
                      </p>
                      <p className="text-xl font-semibold text-foreground dark:text-white">{datum.value}</p>
                    </div>
                    <p className="text-xs text-muted-foreground dark:text-white/70">{datum.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-14">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Strategic pillars for ARCA + Cloud MLM Software
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Each pillar reshapes the original site content into executive-ready narratives for growth, finance, and risk.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {STRATEGIC_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-x-6 top-5 h-24 rounded-3xl bg-gradient-to-br from-rose-200/25 via-amber-200/20 to-pink-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-foreground dark:text-white">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{pillar.description}</p>
                  <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                    {pillar.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-primary dark:text-rose-200" aria-hidden />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-white via-rose-50 to-amber-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/15 via-transparent to-transparent dark:from-white/10" />
        <div className="container space-y-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
                Delivery stages for sustained ARCA performance
              </h2>
              <p className="text-base text-muted-foreground dark:text-white/80">
                From discovery to scale, each stage leverages the archived site&apos;s content foundations while adding
                AI-enhanced execution.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link href={modulesHref}>
                Browse module catalogue
                <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {DELIVERY_STAGES.map((stage) => {
              const Icon = stage.icon;
              return (
                <article
                  key={stage.name}
                  className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                        {stage.name}
                      </p>
                      <p className="text-sm font-semibold text-foreground dark:text-white">{stage.focus}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{stage.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Regional insights for leadership clarity
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Each strategic region gains targeted intelligence, keeping expansions aligned with corporate objectives.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {REGIONAL_CARDS.map((card) => (
            <article
              key={card.region}
              className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary dark:text-rose-200">
                {card.region}
              </p>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-foreground dark:text-white">Focus</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{card.focus}</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-foreground dark:text-white">Insight</h4>
                <p className="text-sm text-muted-foreground dark:text-white/70">{card.insight}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-rose-200/35 via-amber-200/30 to-pink-200/30 px-6 py-16 shadow-xl dark:border-white/15 dark:from-rose-300/20 dark:via-amber-400/20 dark:to-pink-400/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.45),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/70 dark:text-white/80">
              Governance cockpit
            </p>
            <h2 className="text-3xl font-semibold text-primary-foreground dark:text-white">
              Coordinate humans and AI assistants on ARCA performance in real time.
            </h2>
            <p className="max-w-lg text-base text-primary-foreground/80 dark:text-white/80">
              Cloud MLM Software ensures leadership, regulators, and partners receive timely insights, actions, and
              narrative-ready updates.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary">
                <Link href={contactHref}>
                  Schedule compliance workshop
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/60 text-primary-foreground hover:bg-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  Preview intelligence demo
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {GOVERNANCE_CARDS.map((card) => (
              <article
                key={card.headline}
                className="flex flex-col gap-3 rounded-2xl border border-primary/30 bg-white/85 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                  <Buildings className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold">{card.headline}</h3>
                <p className="text-sm text-primary-foreground/80 dark:text-white/80">{card.detail}</p>
              </article>
            ))}
            <article className="flex flex-col gap-3 rounded-2xl border border-primary/30 bg-white/85 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <FileText className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Archive intelligence</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Historic documents, price lists, and regulatory letters stay searchable and linked to payment outcomes.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
