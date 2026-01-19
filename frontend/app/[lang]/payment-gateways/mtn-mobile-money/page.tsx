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
  Globe,
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

type HeroMetric = {
  label: string;
  value: string;
  detail: string;
};

type StoryCard = {
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

type ModuleStrip = {
  title: string;
  subtitle: string;
  bullets: string[];
  icon: IconType;
};

type CountryPlay = {
  country: string;
  status: string;
  narrative: string;
  link: string;
};

const HERO_METRICS: HeroMetric[] = [
  {
    label: "Archive captured",
    value: "28 Aug 2024",
    detail: "MTN Mobile Money page recorded with secure, fast, seamless messaging."
  },
  {
    label: "Launch focus",
    value: "Rwanda → Cameroon",
    detail: "We prioritise key MTN markets while building a pan-African roadmap."
  },
  {
    label: "Activation window",
    value: "6 weeks",
    detail: "Discovery to AI-ready storytelling and governed operations."
  }
];

const STORY_CARDS: StoryCard[] = [
  {
    title: "Secure, fast, seamless proven",
    description:
      "We convert the archived narrative into compliance packs, executive briefs, and AI prompt libraries tuned for African regulators.",
    icon: ShieldCheck
  },
  {
    title: "Mobile-first journeys",
    description:
      "MTN Mobile Money’s USSD, app, and agent experiences shape onboarding, checkout, and payout flows that reflect real adoption patterns.",
    icon: DeviceMobile
  },
  {
    title: "Multi-country runway",
    description:
      "Rwanda, Guinea, Cameroon, Chad, Benin—each receives localisation matrices, tax logic, and telemetry dashboards for expansion.",
    icon: Globe
  }
];

const INITIATIVES: Initiative[] = [
  {
    heading: "Narrative lift-off",
    summary: "Align leadership, marketing, and AI assistants around the MTN Mobile Money story.",
    bullets: [
      "Executive brief reframing secure, fast, seamless for regulators and investors.",
      "SEO & AIO keyword strategy covering MTN markets across Africa.",
      "Prompt libraries ensuring chatbots deliver compliant, up-to-date responses."
    ],
    icon: Broadcast
  },
  {
    heading: "Experience blueprint",
    summary: "Design journeys that showcase agent, app, and QR experiences in every market.",
    bullets: [
      "Prototypes for onboarding, checkout, payout, and cross-border remittance flows.",
      "Telemetry instrumentation tracking conversion, decline remediation, and fraud analytics.",
      "Localized copy and tone for English and French-speaking MTN countries."
    ],
    icon: DeviceMobile
  },
  {
    heading: "Operational intelligence",
    summary: "Deliver measurable insights for finance, support, and growth teams.",
    bullets: [
      "Multi currency automation across local currencies, USD, and EUR.",
      "AI-assisted ticket handling with SLA monitoring for payment escalations.",
      "Dashboards surfacing retention, churn, and commission performance."
    ],
    icon: ChartLineUp
  }
];

const MODULE_STRIPS: ModuleStrip[] = [
  {
    title: "Revenue launchpad",
    subtitle: "Custom Demo • Multi currency • E-Commerce Integration",
    bullets: [
      "Showcase MTN Mobile Money flows with KPI overlays for stakeholders.",
      "Balance multi-currency ledgers with governance controls per market.",
      "Embed MTN connectors into Shopify, WooCommerce, and custom stores."
    ],
    icon: SquaresFour
  },
  {
    title: "Member trust network",
    subtitle: "E-Wallet • Backup Manager • Ticket System",
    bullets: [
      "Automate payouts tied to MTN settlement confirmations.",
      "Maintain encrypted backups that satisfy regional data policies.",
      "Resolve tickets with AI summarisation, escalation guidelines, and SLA tracking."
    ],
    icon: TrendUp
  },
  {
    title: "Growth storytelling",
    subtitle: "Auto Responder • Documents • Analytics Packs",
    bullets: [
      "Send lifecycle messaging when payment events or plan milestones occur.",
      "Publish leadership decks positioning Cloud MLM Software as MTN’s innovation partner.",
      "Monitor compensation health and expansion metrics across countries."
    ],
    icon: Sparkle
  }
];

const COUNTRY_PLAYS: CountryPlay[] = [
  {
    country: "Rwanda",
    status: "Live adoption",
    narrative:
      "Strong agent networks and mobile-first adoption require localisation, compliance alignment, and AI-ready field enablement.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-rwanda/"
  },
  {
    country: "Guinea",
    status: "Launch in motion",
    narrative:
      "We prepare localisation kits, French messaging, and settlement playbooks to accelerate MTN Mobile Money growth.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-guinea/"
  },
  {
    country: "Cameroon",
    status: "Scaling",
    narrative:
      "Dual-language campaigns, compliance oversight, and telemetry keep MTN Mobile Money trusted across the region.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-cameroon/"
  },
  {
    country: "Chad",
    status: "Expansion",
    narrative:
      "Agent enablement, cash-in/cash-out analytics, and AI prompt packs accelerate adoption across rural communities.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-chad/"
  },
  {
    country: "Benin",
    status: "Soon launching",
    narrative:
      "Localization, tax logic, and distributor enablement kits ready leadership for rapid entry.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-benin/"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MTN Mobile Money Integration for Cloud MLM Software";
  const description =
    "Turn MTN Mobile Money’s secure, fast, seamless promise into pan-African growth. Cloud MLM Software delivers AI-ready narratives, mobile-first journeys, and governed operations.";

  return {
    title,
    description,
    keywords: [
      "MTN Mobile Money payment gateway",
      "MTN Mobile Money Cloud MLM Software integration",
      "Africa MLM payments",
      "Mobile money orchestration",
      "AI optimized fintech enablement"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/mtn-mobile-money", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MTNMobileMoneyPageProps = {
  params: { lang: SupportedLocale };
};

export default function MTNMobileMoneyPage({ params }: MTNMobileMoneyPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden px-6 pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-400 to-amber-500 dark:from-yellow-600 dark:via-amber-700 dark:to-black" />
        <div className="absolute left-10 top-10 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute right-16 top-24 h-44 w-44 rounded-full bg-white/20 blur-2xl" />
        <div className="relative mx-auto max-w-6xl rounded-3xl border border-black/10 bg-white/90 px-10 py-14 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-700 dark:border-white/10 dark:bg-white/10 dark:text-white">
                <Sparkle className="h-4 w-4" aria-hidden />
                MTN Mobile Money gateway
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                MTN Mobile Money Integration for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                The archived WordPress page already frames MTN Mobile Money as secure, fast, seamless. We transform that copy
                into a programme spanning narratives, journeys, and operations for the MTN footprint across Africa.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/free-mlm-software-demo/">Request MTN MoMo demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={buildLocalizedPath("/support", locale)}>Schedule launch workshop</Link>
                </Button>
              </div>
            </div>
            <aside className="space-y-6 rounded-3xl border border-yellow-300/60 bg-yellow-50/80 p-6 shadow-inner dark:border-white/20 dark:bg-white/10">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-700 dark:text-yellow-200">
                Archive insights
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {HERO_METRICS.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/70 bg-white/90 p-4 text-slate-700 dark:border-white/20 dark:bg-white/5 dark:text-slate-200">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">
                      {metric.label}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300">{metric.detail}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {STORY_CARDS.map((card) => {
                  const Icon = card.icon;
                  return (
                    <article
                      key={card.title}
                      className="space-y-3 rounded-2xl border border-white/70 bg-white/90 p-4 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/20 dark:bg-white/5"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold text-slate-900 dark:text-white">{card.title}</h2>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{card.description}</p>
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
              Three initiatives that make MTN Mobile Money measurable
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
              Narrative lift-off, experience blueprint, and operational intelligence ensure secure, fast, seamless is felt in
              every market.
            </p>
          </header>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {INITIATIVES.map((initiative) => {
              const Icon = initiative.icon;
              return (
                <article
                  key={initiative.heading}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-yellow-300 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{initiative.heading}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-200">{initiative.summary}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {initiative.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Notebook className="mt-0.5 h-4 w-4 text-yellow-500" aria-hidden />
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
        <div className="mx-auto max-w-6xl gap-8 rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-yellow-50 to-slate-50 p-10 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900/60 dark:via-slate-950 dark:to-black lg:grid lg:grid-cols-[0.85fr,1.15fr]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Module strips orchestrated for MTN Mobile Money telemetry
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              We align Cloud MLM Software modules so revenue, finance, and support teams move at MTN speed.
            </p>
            <Link
              href="/payment-gateways/mtn-mobile-money/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-700 hover:text-yellow-800 dark:text-yellow-200 dark:hover:text-yellow-100"
            >
              Review the archived MTN Mobile Money page
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {MODULE_STRIPS.map((strip) => {
              const Icon = strip.icon;
              return (
                <article
                  key={strip.title}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-inner transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{strip.title}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                      {strip.subtitle}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-200">
                    {strip.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Lightning className="mt-0.5 h-4 w-4 text-yellow-500" aria-hidden />
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
              Six weeks to MTN Mobile Money leadership
            </h2>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                phase: "Weeks 1-2",
                detail: "Narrative workshops, KPI baselining, and compliance mapping across priority markets."
              },
              {
                phase: "Weeks 3-4",
                detail: "Experience prototyping, integration scripts, and telemetry instrumentation."
              },
              {
                phase: "Weeks 5-6",
                detail: "Operational playbooks, AI prompt roll-out, and media storytelling across MTN territories."
              }
            ].map((item) => (
              <article
                key={item.phase}
                className="flex flex-col gap-3 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-yellow-300 hover:bg-white dark:border-white/10 dark:bg-white/5"
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
              Country plays
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              From Rwanda to Benin — orchestrated MTN expansion
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              The archive listed multiple MTN Mobile Money countries. We turn that reach into actionable market plays.
            </p>
          </header>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {COUNTRY_PLAYS.map((play) => (
              <article
                key={play.country}
                className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-yellow-300 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                    {play.status}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{play.country}</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{play.narrative}</p>
                <Link
                  href={play.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-700 hover:text-yellow-800 dark:text-yellow-200 dark:hover:text-yellow-100"
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
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-yellow-300 bg-yellow-100 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to lead with MTN Mobile Money and Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Let&apos;s align leadership, distributors, and AI copilots around MTN Mobile Money—secure, fast, seamless, and
            grounded in measurable systems.
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
