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
    label: "Archive captured",
    value: "28 Aug 2024",
    detail: "MyFatoorah page recorded with secure, fast, seamless messaging."
  },
  {
    label: "Launch region",
    value: "Kuwait first",
    detail: "Kuwaiti enterprises, investors, and distributors lead adoption."
  },
  {
    label: "Activation sprint",
    value: "6 weeks",
    detail: "Discovery to AI-ready narratives, journeys, and operations."
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Secure, fast, seamless underwritten",
    description:
      "We evolve the archive into compliance dossiers, executive briefs, and AI prompt kits aligned with GCC regulators.",
    icon: ShieldCheck
  },
  {
    title: "Omnichannel experiences",
    description:
      "MyFatoorah’s cards, Apple Pay, and local wallets become the centrepiece of onboarding, checkout, and payout journeys.",
    icon: DeviceTabletCamera
  },
  {
    title: "Regional runway",
    description:
      "Prepared localisation matrices, tax logic, and telemetry dashboards extend success into Saudi Arabia, UAE, and the wider GCC.",
    icon: GlobeHemisphereEast
  }
];

const INITIATIVES: Initiative[] = [
  {
    heading: "Narrative engineering",
    summary: "Align leadership, SEO, and AI assistants with the MyFatoorah story.",
    bullets: [
      "Executive brief reframing secure, fast, seamless for investors and sharia-compliant stakeholders.",
      "SEO & AIO keyword clusters covering Kuwait, GCC payments, and direct selling.",
      "Prompt libraries ensuring chatbots provide compliant, up-to-date answers."
    ],
    icon: Sparkle
  },
  {
    heading: "Experience architecture",
    summary: "Design immersive journeys that showcase MyFatoorah convenience.",
    bullets: [
      "Desktop and mobile flows for onboarding, checkout, and payout scenarios.",
      "Telemetry instrumentation covering conversion, decline remediation, and fraud analytics.",
      "Localized content in Arabic and English for distributors and customers."
    ],
    icon: MapPin
  },
  {
    heading: "Operational intelligence",
    summary: "Govern finance, support, and growth with live MyFatoorah telemetry.",
    bullets: [
      "Multi currency automation for Kuwaiti Dinar, USD, and SAR settlements.",
      "Support playbooks combining AI summarisation with SLA oversight.",
      "Dashboards surfacing retention, churn, and incentive performance."
    ],
    icon: ChartLineUp
  }
];

const MODULE_DECKS: ModuleDeck[] = [
  {
    name: "Revenue command",
    subtitle: "Custom Demo • Multi currency • E-Commerce Integration",
    bullets: [
      "Showcase MyFatoorah journeys with KPI overlays for enterprise prospects.",
      "Balance multi-currency ledgers with governance controls and approvals.",
      "Embed MyFatoorah connectors into Shopify, WooCommerce, and custom storefronts."
    ],
    icon: SquaresFour
  },
  {
    name: "Member trust",
    subtitle: "E-Wallet • Backup Manager • Ticket System",
    bullets: [
      "Automate commission releases triggered by MyFatoorah settlement confirmations.",
      "Maintain encrypted backups for regulatory audits and business continuity.",
      "Resolve tickets with AI summarisation, multilingual support, and SLA visibility."
    ],
    icon: UsersThree
  },
  {
    name: "Growth intelligence",
    subtitle: "Auto Responder • Documents • Analytics Packs",
    bullets: [
      "Send lifecycle messaging when payment events or plan milestones occur.",
      "Publish leadership decks positioning Cloud MLM Software as the GCC payment partner.",
      "Monitor compensation health and expansion metrics in real time."
    ],
    icon: TrendUp
  }
];

const MARKET_ROUTES: MarketRoute[] = [
  {
    region: "Kuwait",
    status: "Operational",
    insight:
      "MyFatoorah is trusted across Kuwait. We provide localisation, compliance alignment, and distributor enablement tailored to the market.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-kuwait/"
  },
  {
    region: "GCC expansion",
    status: "In planning",
    insight:
      "Extend the playbook into Saudi Arabia, UAE, Bahrain, and Qatar with localisation matrices, tax guidance, and AI knowledge bases.",
    link: "/contact/"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MyFatoorah Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Activate MyFatoorah’s secure, fast, seamless promise with Cloud MLM Software. Deliver AI-ready narratives, immersive journeys, and governed operations for Kuwait and the GCC.";

  return {
    title,
    description,
    keywords: [
      "MyFatoorah payment gateway",
      "MyFatoorah Cloud MLM Software integration",
      "Kuwait MLM payments",
      "GCC payment orchestration",
      "AI optimized fintech enablement"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/myfatoorah", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MyfatoorahPageProps = {
  params: { lang: SupportedLocale };
};

export default function MyfatoorahPage({ params }: MyfatoorahPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden px-6 pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-sand-300 via-white to-slate-50 dark:from-amber-900 dark:via-slate-950 dark:to-black" />
        <div className="absolute left-8 top-8 h-56 w-56 rounded-full bg-amber-200/50 blur-3xl dark:bg-amber-500/20" />
        <div className="absolute right-14 top-24 h-44 w-44 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-500/20" />
        <div className="relative mx-auto max-w-6xl rounded-3xl border border-amber-200 bg-white/90 px-10 py-14 shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 dark:border-white/10 dark:bg-white/10 dark:text-white">
                <Sparkle className="h-4 w-4" aria-hidden />
                MyFatoorah gateway
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                MyFatoorah Payment Gateway Integration for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                The archived page already labels MyFatoorah as secure, fast, seamless. We turn that phrase into a Kuwait-first
                programme covering narratives, journeys, and operations guided by data.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/free-mlm-software-demo/">Request MyFatoorah demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={buildLocalizedPath("/support", locale)}>Schedule launch workshop</Link>
                </Button>
              </div>
            </div>
            <aside className="space-y-6 rounded-3xl border border-amber-200/70 bg-amber-50/70 p-6 shadow-inner dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-700 dark:text-amber-200">
                Archive insights
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {METRICS.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/70 bg-white/90 p-4 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">
                      {metric.label}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300">{metric.detail}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <article
                      key={pillar.title}
                      className="space-y-3 rounded-2xl border border-white/70 bg-white/90 p-4 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold text-slate-900 dark:text-white">{pillar.title}</h2>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{pillar.description}</p>
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
              Three initiatives to make MyFatoorah measurable
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
              Narrative engineering, experience architecture, and operational intelligence work in tandem to prove secure,
              fast, seamless.
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
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-700 dark:bg-white/10 dark:text-white">
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
              Module decks orchestrated for MyFatoorah telemetry
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Every module combination keeps revenue, finance, and support teams aligned to MyFatoorah data.
            </p>
            <Link
              href="/payment-gateways/myfatoorah/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-800 dark:text-amber-200 dark:hover:text-amber-100"
            >
              Review the archived MyFatoorah page
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
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-700 dark:bg-white/10 dark:text-white">
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
              Timeline
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Six-week MyFatoorah activation roadmap
            </h2>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                phase: "Weeks 1-2",
                detail: "Narrative workshops, KPI baselines, compliance mapping across Kuwait stakeholders."
              },
              {
                phase: "Weeks 3-4",
                detail: "Experience prototyping, integration scripts, and telemetry instrumentation."
              },
              {
                phase: "Weeks 5-6",
                detail: "Operational playbooks, AI prompt deployment, and media storytelling across the GCC."
              }
            ].map((item) => (
              <article
                key={item.phase}
                className="flex flex-col gap-3 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-amber-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
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
              Kuwait leadership sets the tone for GCC expansion
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              The archive referenced MyFatoorah coverage across numerous countries. We convert that into actionable routes.
            </p>
          </header>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {MARKET_ROUTES.map((route) => (
              <article
                key={route.region}
                className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-amber-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
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
            Ready to lead with MyFatoorah and Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Align leadership, distributors, and AI copilots around MyFatoorah’s secure, fast, seamless promise—now supported
            by measurable systems.
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
