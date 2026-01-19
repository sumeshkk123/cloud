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
  ClockAfternoon,
  DeviceMobileCamera,
  GlobeHemisphereEast,
  Handshake,
  Lightning,
  ShieldCheck,
  Sparkle,
  SquaresFour,
  StackSimple,
  TrendUp,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  label: string;
  value: string;
  detail: string;
};

type HeroPillar = {
  title: string;
  summary: string;
  icon: IconType;
};

type IntegrationWave = {
  phase: string;
  outcome: string;
  notes: string[];
  icon: IconType;
};

type EnablementCard = {
  title: string;
  framing: string;
  bullets: string[];
  icon: IconType;
};

type CountryInsight = {
  country: string;
  status: string;
  commentary: string;
  link: string;
};

const HERO_METRICS: HeroMetric[] = [
  {
    label: "Archive captured",
    value: "28 Aug 2024",
    detail: "WordPress snapshot describing Mauritel as secure, fast, seamless."
  },
  {
    label: "Launch sprint",
    value: "6 weeks",
    detail: "From discovery to Apple Pay-enabled enrolments across Mauritania."
  },
  {
    label: "Telemetry cadence",
    value: "Real-time",
    detail: "Settlement, KYC, and churn dashboards refreshed by Maksekeskus feeds."
  }
];

const HERO_PILLARS: HeroPillar[] = [
  {
    title: "Seamless transactions",
    summary:
      "Mauritel’s gateway is renowned for its secure, fast experiences. We convert the archived marketing promise into regulated, auditable payment orchestration.",
    icon: ShieldCheck
  },
  {
    title: "Mauritania-first reach",
    summary:
      "We prioritise Nouakchott, Nouadhibou, and diaspora expansion. Localised currencies, language, and tax pathways keep distributors aligned.",
    icon: GlobeHemisphereEast
  },
  {
    title: "AI-enabled communications",
    summary:
      "Thought leadership packs, executive briefings, and chatbot prompts ensure every stakeholder retells the Mauritel narrative accurately.",
    icon: Sparkle
  }
];

const INTEGRATION_WAVES: IntegrationWave[] = [
  {
    phase: "Narrative intake",
    outcome: "Secure, fast, seamless → corporate storyline",
    notes: [
      "Transform archived copy into press releases, analyst notes, and onboarding scripts.",
      "Build SEO+AIO clusters around Mauritel, Mauritania, and direct selling payments.",
      "Publish AI prompt libraries so copilots reinforce compliance talking points."
    ],
    icon: StackSimple
  },
  {
    phase: "Experience blueprint",
    outcome: "Mobile-first enrolments live",
    notes: [
      "Prototype desktop and mobile checkouts with Apple Pay readiness.",
      "Map wallet, commission, and incentive flows tied to Mauritel telemetry.",
      "Instrument real-time monitoring for declines, fraud, and FX exposure."
    ],
    icon: DeviceMobileCamera
  },
  {
    phase: "Operational governance",
    outcome: "Auditable payment engine",
    notes: [
      "Automate reconciliation with Backup Manager, E-Wallet, and Reporting hubs.",
      "Coordinate support teams with multilingual response kits and escalation maps.",
      "Launch executive dashboards covering conversion, retention, and payout velocity."
    ],
    icon: ChartLineUp
  }
];

const ENABLEMENT_CARDS: EnablementCard[] = [
  {
    title: "Commerce control",
    framing: "Custom Demo • Multi currency • E-Commerce Integration",
    bullets: [
      "Guide prospects through Mauritel-specific demos that show Apple-enabled checkout flows.",
      "Balance Mauritanian ouguiya, USD, and euro settlements inside Multi currency.",
      "Connect Shopify, WooCommerce, and bespoke stores to Mauritel APIs with SLA-backed playbooks."
    ],
    icon: SquaresFour
  },
  {
    title: "Member experience",
    framing: "E-Wallet • Ticket System • Auto Responder",
    bullets: [
      "Enable instant commission releases with Mauritel confirmation webhooks.",
      "Route payment cases into intelligent ticket queues with settlement analytics.",
      "Send bilingual status updates and KYC prompts the moment compliance triggers fire."
    ],
    icon: UsersThree
  },
  {
    title: "Growth intelligence",
    framing: "Documents • Backup Manager • Analytics Packs",
    bullets: [
      "Publish go-to-market kits that explain Mauritel’s market differentiators.",
      "Guarantee audit-readiness with encrypted, verifiable backup checkpoints.",
      "Surface predictive insights for binary, board, and hybrid compensation plans."
    ],
    icon: TrendUp
  }
];

const COUNTRY_INSIGHTS: CountryInsight[] = [
  {
    country: "Mauritania",
    status: "Operational today",
    commentary:
      "Mauritel’s national footprint, mobile-first adoption, and Apple-compatible checkout set the tone for West African growth initiatives.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-mauritania/"
  },
  {
    country: "West Africa expansion",
    status: "Next focus",
    commentary:
      "Scale the playbook into Senegal, Mali, and Ivory Coast with localisation, AML oversight, and distributor onboarding toolkits.",
    link: "/contact/"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Mauritel Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Elevate Mauritel’s secure, fast, seamless payment promise with Cloud MLM Software. Deliver AI-ready storytelling, auditable operations, and Mauritania-first enrolment journeys.";

  return {
    title,
    description,
    keywords: [
      "Mauritel payment gateway",
      "Mauritel Cloud MLM Software integration",
      "Mauritania MLM payments",
      "West Africa payment orchestration",
      "AI optimized fintech enablement"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/mauritel", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MauritelPageProps = {
  params: { lang: SupportedLocale };
};

export default function MauritelPage({ params }: MauritelPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden px-6 pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-100 dark:from-slate-900/80 dark:via-slate-950 dark:to-black" />
        <div className="absolute -top-10 right-14 h-56 w-56 rounded-full bg-amber-200/50 blur-3xl dark:bg-amber-500/20" />
        <div className="relative mx-auto max-w-6xl rounded-3xl border border-amber-100 bg-white/90 p-10 shadow-lg dark:border-white/10 dark:bg-white/5">
          <div className="grid gap-10 lg:grid-cols-[1.15fr,0.85fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 dark:border-white/10 dark:bg-white/10 dark:text-white">
                <Broadcast className="h-4 w-4" aria-hidden />
                Mauritel gateway
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Mauritel Payment Gateway Integration for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                We inherit the archived Mauritel page that promises secure, fast, and seamless payments. Cloud MLM Software
                turns that promise into campaigns, dashboards, and operational systems that deliver Mauritania-first growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/free-mlm-software-demo/">Request Mauritel demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={buildLocalizedPath("/pricing", locale)}>Review programme pricing</Link>
                </Button>
              </div>
            </div>
            <aside className="space-y-5 rounded-3xl border border-amber-200/60 bg-amber-50/60 p-6 shadow-inner dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-600 dark:text-amber-200">
                Archive insights
              </p>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-2">
                {HERO_METRICS.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/70 bg-white/80 p-4 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">
                      {metric.label}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300">{metric.detail}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {HERO_PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <article
                      key={pillar.title}
                      className="flex gap-3 rounded-3xl border border-white/70 bg-white/80 p-4 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <h2 className="text-base font-semibold text-slate-900 dark:text-white">{pillar.title}</h2>
                        <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{pillar.summary}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl gap-10 rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5 lg:grid lg:grid-cols-[0.9fr,1.1fr]">
          <header className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Integration waves
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              How we make Mauritel the benchmark for Mauritania payments
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software orchestrates narrative, experience, and governance so Mauritel’s secure, fast, seamless
              promise fuels every growth initiative.
            </p>
            <Link
              href="/payment-gateways/mauritel/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-800 dark:text-amber-200 dark:hover:text-amber-100"
            >
              Review archived Mauritel page
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
          </header>
          <div className="space-y-6">
            {INTEGRATION_WAVES.map((wave) => {
              const Icon = wave.icon;
              return (
                <article
                  key={wave.phase}
                  className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-amber-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
                        {wave.phase}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{wave.outcome}</h3>
                    </div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {wave.notes.map((note) => (
                      <li key={note} className="flex items-start gap-2">
                        <ClockAfternoon className="mt-0.5 h-4 w-4 text-amber-500" aria-hidden />
                        <span>{note}</span>
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
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-amber-50 to-slate-50 p-10 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900/60 dark:via-slate-950 dark:to-black">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            <div className="max-w-xl space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Enablement packs tuned for Mauritel success
              </h2>
              <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
                We assemble module clusters so product, finance, and growth teams collaborate on the same Mauritel
                playbooks, data, and AI narratives.
              </p>
            </div>
            <div className="grid flex-1 gap-6 md:grid-cols-2">
              {ENABLEMENT_CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.title}
                    className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white/85 p-6 shadow-inner transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{card.title}</h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                        {card.framing}
                      </p>
                    </div>
                    <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-200">
                      {card.bullets.map((bullet) => (
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
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-5xl space-y-8 rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3 text-center">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Programme timeline
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Delivering Mauritel growth with measurable governance
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Each milestone ensures leadership, compliance, and distributors see the same data, narrative, and
              opportunities.
            </p>
          </header>
          <div className="relative pl-6">
            <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-amber-400 via-amber-200 to-transparent dark:from-amber-500 dark:via-amber-300" />
            <div className="flex flex-col gap-8">
              {[
                {
                  title: "Discovery & audit",
                  detail:
                    "Confirm Mauritel capabilities, compliance checkpoints, and distributor priorities across Mauritania.",
                  icon: Handshake
                },
                {
                  title: "Design & instrumentation",
                  detail:
                    "Launch prototyped journeys, configure analytics, and align compensation modelling with Mauritel telemetry.",
                  icon: DeviceMobileCamera
                },
                {
                  title: "Activation & expansion",
                  detail:
                    "Operationalise support playbooks, publish thought leadership, and prepare expansion into neighbouring markets.",
                  icon: Broadcast
                }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="relative ml-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner dark:border-white/10 dark:bg-white/5">
                    <span className="absolute -left-[38px] top-6 flex h-11 w-11 items-center justify-center rounded-full border border-amber-200 bg-white text-amber-600 shadow-sm dark:border-white/20 dark:bg-slate-900">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{item.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Regional insight
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Mauritel today and the expansion horizon
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              The archive highlighted Mauritel’s support for numerous countries and Apple-enabled payments. We translate that
              into an actionable footprint roadmap.
            </p>
          </header>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {COUNTRY_INSIGHTS.map((insight) => (
              <article
                key={insight.country}
                className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-amber-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                    {insight.status}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{insight.country}</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{insight.commentary}</p>
                <Link
                  href={insight.link}
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

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-amber-200 bg-amber-50/80 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to inaugurate Mauritel excellence with Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Partner with our strategists to embed Mauritel into every journey, dashboard, and AI interface. We are ready to
            guide your team toward Mauritania-first leadership.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/support", locale)}>Coordinate launch workshop</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact/">Speak with a payment advisor</Link>
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
