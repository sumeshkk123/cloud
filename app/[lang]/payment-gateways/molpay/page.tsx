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
  DeviceMobileCamera,
  GlobeHemisphereEast,
  Lightning,
  MapPinLine,
  Notebook,
  ShieldCheck,
  Sparkle,
  SquaresFour,
  StackSimple,
  TrendUp
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  label: string;
  value: string;
  caption: string;
};

type InsightCard = {
  title: string;
  detail: string;
  icon: IconType;
};

type ProgrammeSlice = {
  heading: string;
  summary: string;
  bullets: string[];
};

type ModuleStack = {
  title: string;
  subtitle: string;
  bullets: string[];
  icon: IconType;
};

type MarketPlan = {
  market: string;
  status: string;
  description: string;
  link: string;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    label: "Archive captured",
    value: "28 Aug 2024",
    caption: "MOLPay page recorded with secure, fast, seamless positioning."
  },
  {
    label: "Primary region",
    value: "Malaysia first",
    caption: "Focus on Kuala Lumpur, Penang, Johor Bahru distributor ecosystems."
  },
  {
    label: "Go-live window",
    value: "6 weeks",
    caption: "From discovery to AI-ready operations across the organisation."
  }
];

const INSIGHT_CARDS: InsightCard[] = [
  {
    title: "Secure, fast, seamless elevated",
    detail:
      "We transform the archived promise into compliance evidence, investor narratives, and AI prompts tuned for Malaysia.",
    icon: ShieldCheck
  },
  {
    title: "Omni-payment storytelling",
    detail:
      "Cards, FPX, e-wallets, and instalments become part of Mobile-first journeys for distributors and customers.",
    icon: DeviceMobileCamera
  },
  {
    title: "Regional expansion runway",
    detail:
      "Localization matrices and telemetry dashboards extend MOLPay success into Singapore, Thailand, and the wider ASEAN network.",
    icon: GlobeHemisphereEast
  }
];

const PROGRAMME_SLICES: ProgrammeSlice[] = [
  {
    heading: "Narrative intelligence",
    summary: "Align leadership, SEO, and AI copilots with the same MOLPay message.",
    bullets: [
      "Executive brief reframing secure, fast, seamless for thought leadership.",
      "SEO & AIO keyword strategy covering Malaysia and ASEAN markets.",
      "Prompt kits for chatbots and knowledge bases with compliance-approved responses."
    ]
  },
  {
    heading: "Experience design",
    summary: "Prototype cross-device journeys that celebrate MOLPay convenience.",
    bullets: [
      "Desktop and mobile flows for onboarding, checkout, and payout experiences.",
      "Telemetry instrumentation for conversion, decline remediation, and fraud analytics.",
      "Localized content covering Bahasa Malaysia and English audiences."
    ]
  },
  {
    heading: "Operational governance",
    summary: "Give finance, support, and growth teams live MOLPay telemetry.",
    bullets: [
      "Multi currency automation for MYR, SGD, THB, and USD settlements.",
      "Support runbooks combining AI suggestions with SLA monitoring.",
      "Dashboards highlighting retention, churn, and incentive program health."
    ]
  }
];

const MODULE_STACKS: ModuleStack[] = [
  {
    title: "Revenue runway",
    subtitle: "Custom Demo • Multi currency • E-Commerce Integration",
    bullets: [
      "Showcase MOLPay flows with KPI overlays across B2C and B2B journeys.",
      "Balance multi-currency ledgers with audit-ready approvals.",
      "Embed MOLPay connectors into Shopify, WooCommerce, and headless commerce."
    ],
    icon: SquaresFour
  },
  {
    title: "Member trust",
    subtitle: "E-Wallet • Backup Manager • Ticket System",
    bullets: [
      "Automate commission releases upon MOLPay settlement confirmation.",
      "Preserve encrypted backups to satisfy Malaysian regulatory audits.",
      "Resolve payment tickets with AI-assisted routing and escalation guidelines."
    ],
    icon: StackSimple
  },
  {
    title: "Growth intelligence",
    subtitle: "Auto Responder • Documents • Analytics Packs",
    bullets: [
      "Trigger lifecycle messaging when payment events or plan milestones occur.",
      "Publish leadership decks and knowledge hubs positioning MOLPay at the centre.",
      "Monitor compensation health and expansion momentum through live dashboards."
    ],
    icon: TrendUp
  }
];

const MARKET_PLANS: MarketPlan[] = [
  {
    market: "Malaysia",
    status: "Operational today",
    description:
      "MOLPay powers Malaysia’s e-commerce ecosystem. We bring localisation, compliance alignment, and distributor enablement under one roof.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-malaysia/"
  },
  {
    market: "ASEAN expansion",
    status: "Next horizon",
    description:
      "Extend the playbook into Singapore, Thailand, and Indonesia with payment preference matrices and AI knowledge bases.",
    link: "/contact/"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MOLPay Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Transform MOLPay’s secure, fast, seamless promise into Malaysia-first growth. Cloud MLM Software delivers AI-ready narratives, immersive journeys, and governed operations.";

  return {
    title,
    description,
    keywords: [
      "MOLPay payment gateway",
      "MOLPay Cloud MLM Software integration",
      "Malaysia MLM payments",
      "ASEAN payment orchestration",
      "AI optimized payment operations"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/molpay", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MolpayPageProps = {
  params: { lang: SupportedLocale };
};

export default function MolpayPage({ params }: MolpayPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden px-6 pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-slate-900 to-black" />
        <div className="absolute left-10 top-10 h-56 w-56 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="absolute right-16 top-24 h-40 w-40 rounded-full bg-indigo-500/30 blur-2xl" />
        <div className="relative mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 px-10 py-14 text-white shadow-2xl backdrop-blur">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-fuchsia-200">
                <Sparkle className="h-4 w-4" aria-hidden />
                MOLPay gateway
              </span>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                MOLPay Payment Gateway Integration for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-fuchsia-100">
                The archived page announced that MOLPay delivers secure, fast, seamless payments. We turn that copy into a
                Malaysia-first launch: narratives for leadership, experiences for distributors, and governed operations for
                finance and support.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/free-mlm-software-demo/">Request MOLPay demo</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/40 text-white hover:bg-white/10"
                >
                  <Link href={buildLocalizedPath("/support", locale)}>Schedule launch workshop</Link>
                </Button>
              </div>
            </div>
            <aside className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-fuchsia-200">Archive insights</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {HERO_HIGHLIGHTS.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-fuchsia-200">{item.label}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{item.value}</p>
                    <p className="mt-2 text-xs leading-5 text-fuchsia-100">{item.caption}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {INSIGHT_CARDS.map((card) => {
                  const Icon = card.icon;
                  return (
                    <article key={card.title} className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-500/10 text-fuchsia-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold text-white">{card.title}</h2>
                      <p className="text-sm leading-6 text-fuchsia-100">{card.detail}</p>
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
              Programme overview
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Three slices to modernise the MOLPay promise
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
              Narrative intelligence, experience design, and operational governance keep secure, fast, seamless measurable
              for every stakeholder.
            </p>
          </header>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {PROGRAMME_SLICES.map((item) => (
              <article
                key={item.heading}
                className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-fuchsia-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.heading}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-200">{item.summary}</p>
                </div>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <Notebook className="mt-0.5 h-4 w-4 text-fuchsia-500" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl gap-8 rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-fuchsia-50 to-slate-50 p-10 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900/60 dark:via-slate-950 dark:to-black lg:grid lg:grid-cols-[0.85fr,1.15fr]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Module stacks powered by MOLPay telemetry
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              We orchestrate Cloud MLM Software modules so teams can see, measure, and scale MOLPay adoption.
            </p>
            <Link
              href="/payment-gateways/molpay/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-700 hover:text-fuchsia-800 dark:text-fuchsia-200 dark:hover:text-fuchsia-100"
            >
              View the archived MOLPay page
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {MODULE_STACKS.map((stack) => {
              const Icon = stack.icon;
              return (
                <article
                  key={stack.title}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-inner transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-500/10 text-fuchsia-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stack.title}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                      {stack.subtitle}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-200">
                    {stack.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Lightning className="mt-0.5 h-4 w-4 text-fuchsia-500" aria-hidden />
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
              6-week MOLPay activation cadence
            </h2>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                label: "Weeks 1-2",
                detail: "Archive audit, KPI baselining, and narrative reframing for Malaysian leadership."
              },
              {
                label: "Weeks 3-4",
                detail: "Experience prototyping, integration scripts, and telemetry setup."
              },
              {
                label: "Weeks 5-6",
                detail: "Operational playbooks, AI prompt deployment, and media storytelling."
              }
            ].map((milestone) => (
              <article
                key={milestone.label}
                className="flex flex-col gap-3 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-fuchsia-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{milestone.label}</h3>
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
              Market plans
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Malaysia leadership with an ASEAN runway
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              The archive mentions support for numerous countries. We turn that reach into staged market plays you can
              measure.
            </p>
          </header>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {MARKET_PLANS.map((plan) => (
              <article
                key={plan.market}
                className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-fuchsia-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                    {plan.status}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{plan.market}</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{plan.description}</p>
                <Link
                  href={plan.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-700 hover:text-fuchsia-800 dark:text-fuchsia-200 dark:hover:text-fuchsia-100"
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
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-fuchsia-200 bg-fuchsia-50/80 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to lead Malaysia with MOLPay and Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Let&apos;s align leadership, distributors, and AI copilots around MOLPay’s secure, fast, seamless promise—now
            measured by data.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/pricing", locale)}>Review programme options</Link>
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
