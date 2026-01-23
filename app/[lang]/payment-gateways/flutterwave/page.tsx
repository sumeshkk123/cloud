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
  AirTrafficControl,
  ArrowSquareOut,
  ChartLineUp,
  Circuitry,
  DeviceMobile,
  Globe,
  Lightning,
  MapTrifold,
  Notebook,
  ShieldCheck,
  SquaresFour,
  TrendUp,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  title: string;
  detail: string;
  icon: IconType;
};

type Stage = {
  name: string;
  description: string;
  outcomes: string[];
  icon: IconType;
};

type ModuleRow = {
  label: string;
  summary: string;
  items: string[];
  icon: IconType;
};

type Region = {
  country: string;
  insight: string;
  link: string;
};

type PlanInsight = {
  title: string;
  description: string;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    title: "Pan-African coverage",
    detail:
      "Flutterwave powers payments across Uganda, Zambia, Rwanda, Nigeria, and Kenya. Cloud MLM Software keeps strategies coherent in every market.",
    icon: Globe
  },
  {
    title: "Demos to launch",
    detail:
      "Custom Demo, Pre-set Demo, and AI narration compress go-live timelines by turning archived copy into immersive stories.",
    icon: DeviceMobile
  },
  {
    title: "Operational resilience",
    detail:
      "Multi currency, E-Wallet, Ticketing, and Backup Manager align finance, support, and compliance teams on high-volume telemetry.",
    icon: ShieldCheck
  }
];

const STAGES: Stage[] = [
  {
    name: "Narrative ignition",
    description:
      "Transform the archived secure, fast, seamless promise into board-ready messaging for African expansion.",
    outcomes: [
      "Executive brief with regional market data segments.",
      "Thought-leadership calendar for blogs, webinars, and analyst briefings.",
      "AI prompt packs to keep chatbot answers consistent."
    ],
    icon: TrendUp
  },
  {
    name: "Experience blueprint",
    description:
      "Design enrolment, checkout, and payout flows tailored to country-specific routing, compliance, and field operations.",
    outcomes: [
      "Interactive prototypes for distributor, admin, and customer journeys.",
      "Copy decks covering features, onboarding, and pricing content.",
      "Instrumentation plan connecting Flutterwave signals to KPIs."
    ],
    icon: Circuitry
  },
  {
    name: "Operational enablement",
    description:
      "Automate multi-ledger accounting, ticketing, and incentives so field leaders experience predictable support.",
    outcomes: [
      "Multi currency and E-Wallet configuration across all highlighted markets.",
      "Ticketing + autoresponder flows with multilingual triggers.",
      "Backup Manager policy aligned with data privacy expectations."
    ],
    icon: Lightning
  },
  {
    name: "Growth storytelling",
    description:
      "Publish analytics, case studies, and investor-ready insights that position your organisation as Africa’s payment thought leader.",
    outcomes: [
      "Media kit featuring performance metrics per country.",
      "Distributor enablement scripts backed by AI narration prompts.",
      "Investor updates highlighting new partnerships and verticals."
    ],
    icon: ChartLineUp
  }
];

const MODULE_ROWS: ModuleRow[] = [
  {
    label: "Revenue ignition",
    summary:
      "Demonstrate value quickly with Custom Demo, Pre-set Demo, and the Features library powering marketing and sales.",
    items: [
      "Custom Demo mirrors compensation and regulatory nuances for each Flutterwave market.",
      "Pre-set Demo offers partners hands-on exploration of checkout and payout flows.",
      "Features hub turns capabilities into SEO+AIO ready content."
    ],
    icon: SquaresFour
  },
  {
    label: "Financial integrity",
    summary:
      "Multi currency, E-Wallet, and Backup Manager keep treasury confident across cross-border settlements and payouts.",
    items: [
      "Multi currency module reconciles local currencies with USD/EUR ledgers.",
      "E-Wallet module enables instant commission releases per country schedule.",
      "Backup Manager captures recovery checkpoints for mission-critical services."
    ],
    icon: AirTrafficControl
  },
  {
    label: "Support intelligence",
    summary:
      "Ticketing, Auto responder, and E-Voucher deliver always-on care and incentives no matter the market.",
    items: [
      "Ticket system tags requests with country, payment type, and sentiment metadata.",
      "Auto responder provides multilingual updates across highlighted regions.",
      "E-Voucher module powers campaigns around Flutterwave adoption milestones."
    ],
    icon: UsersThree
  }
];

const REGIONS: Region[] = [
  {
    country: "Nigeria",
    insight:
      "Enterprise-grade governance, combined with AI narration, keeps leadership confident as transactions scale.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-nigeria/"
  },
  {
    country: "Kenya",
    insight:
      "Hybrid mobile money and card flows integrate with Flutterwave to support fast-moving distributor networks.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-kenya/"
  },
  {
    country: "Uganda",
    insight:
      "Regulatory-aware ledgers, ticket escalations, and offline-ready communications protect rural and urban teams.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-uganda/"
  },
  {
    country: "Zambia",
    insight:
      "Data-backed storytelling positions your brand as the go-to platform for southern Africa’s direct selling expansion.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-zambia/"
  },
  {
    country: "Rwanda",
    insight:
      "Mission-critical backups, multilingual autoresponders, and voucher campaigns keep adoption momentum high.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-rwanda/"
  }
];

const PLAN_INSIGHTS: PlanInsight[] = [
  {
    title: "Binary & Matrix plans",
    description:
      "Predictive analytics surface leg imbalances while AI narration supplies coaching tips to field leaders."
  },
  {
    title: "Board & Gift plans",
    description:
      "Vouchers and transparent milestone dashboards maintain trust during community contributions."
  },
  {
    title: "Unilevel & Generation plans",
    description:
      "Depth-focused metrics and AI-generated scripts keep uplines engaged across regions."
  },
  {
    title: "Hybrid plans",
    description:
      "Scenario planning tests new promotions, currency mix, and partner programmes before public launch."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Flutterwave Payment Gateway for Cloud MLM Software";
  const description =
    "Deploy a Flutterwave-powered Cloud MLM Software experience with pan-African storytelling, resilient modules, and AI-ready analytics.";

  return {
    title,
    description,
    keywords: [
      "Flutterwave payment gateway",
      "Africa MLM software payments",
      "Cloud MLM Software Flutterwave integration",
      "pan-African payment orchestration",
      "AI-enabled direct selling Africa"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/flutterwave", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type FlutterwavePageProps = {
  params: { lang: SupportedLocale };
};

export default function FlutterwavePage({ params }: FlutterwavePageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-purple-100 bg-gradient-to-br from-purple-50 via-white to-slate-50 px-6 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-purple-900/10 dark:via-slate-900 dark:to-slate-950">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-purple-200/30 via-transparent to-transparent blur-3xl dark:from-purple-500/15" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-purple-700 dark:border-white/10 dark:bg-white/10 dark:text-white">
              <MapTrifold className="h-4 w-4" aria-hidden />
              Pan-African payment orchestration
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Flutterwave Payment Gateway for Cloud MLM Software
            </h1>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              We transform the archived WordPress page into a multi-country payment programme. Cloud MLM Software unifies
              demos, modules, analytics, and AI narration so distributors in Uganda, Zambia, Rwanda, Nigeria, and Kenya
              experience secure, fast, and seamless journeys.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/free-mlm-software-demo/">Preview Flutterwave demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={buildLocalizedPath("/pricing", locale)}>Explore pricing scenarios</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 rounded-3xl border border-purple-100 bg-white/85 p-6 shadow-inner backdrop-blur dark:border-white/10 dark:bg-white/5">
            {HERO_HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article
                  key={highlight.title}
                  className="rounded-2xl border border-purple-100 bg-purple-50/70 p-5 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-base font-semibold text-slate-900 dark:text-white">{highlight.title}</h2>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{highlight.detail}</p>
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
              Launch framework
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Four stages to launch Flutterwave across Africa
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Each stage weaves the archived modules—Custom Demo, Multi currency, Ticketing, and more—into a unified playbook
              for cross-country success.
            </p>
          </header>
          <div className="mt-8 grid gap-6 lg:grid-cols-4">
            {STAGES.map((stage) => {
              const Icon = stage.icon;
              return (
                <article
                  key={stage.name}
                  className="rounded-2xl border border-purple-100 bg-purple-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-purple-200 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">{stage.name}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{stage.description}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {stage.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <Notebook className="mt-0.5 h-4 w-4 text-purple-500" aria-hidden />
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
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6 rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Modules orchestrated for multi-country growth
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              The WordPress archive listed demos, modules, and services. We refactor them into three module rows so revenue,
              finance, and support teams remain coordinated across Africa.
            </p>
            <Link
              href="/mlm-software-payment-gateways/africa/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 dark:text-purple-200 dark:hover:text-purple-100"
            >
              Explore continental insights
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
            <div className="rounded-2xl border border-purple-100 bg-purple-50/70 p-6 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              August 28, 2024 – the live archive highlights Flutterwave with multiple supported countries. We convert that
              into a structured programme for marketing, finance, and operations.
            </div>
          </div>
          <div className="space-y-6">
            {MODULE_ROWS.map((row) => {
              const Icon = row.icon;
              return (
                <article
                  key={row.label}
                  className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-purple-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">{row.label}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{row.summary}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {row.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <SquaresFour className="mt-0.5 h-4 w-4 text-purple-500" aria-hidden />
                        <span>{item}</span>
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
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr,1.1fr]">
          <aside className="flex flex-col gap-6 rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-900 via-slate-800 to-black p-10 text-white shadow-sm dark:border-white/10">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Country spotlights</h3>
              <p className="text-sm leading-6 text-slate-200">
                Each market from the archive receives bespoke storytelling, governance, and enablement support.
              </p>
            </div>
            <div className="grid gap-4">
              {REGIONS.map((region) => (
                <div key={region.country} className="rounded-2xl border border-white/20 bg-white/10 p-5 text-sm text-slate-100">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-semibold">{region.country}</span>
                    <Link
                      href={region.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-purple-100 hover:text-purple-50"
                    >
                      Learn more
                      <ArrowSquareOut className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                  <p className="mt-3 leading-6">{region.insight}</p>
                </div>
              ))}
            </div>
            <Button asChild variant="outline" size="lg" className="justify-center border-white/40 text-white hover:bg-white/10">
              <Link href={buildLocalizedPath("/services", locale)}>Explore managed services</Link>
            </Button>
          </aside>
          <div className="space-y-6 rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Align Flutterwave with every compensation plan
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Binary, Matrix, Board, Gift, Unilevel, Generation, Hybrid—every plan benefits from AI narration, predictive
              analytics, and incentive orchestration tuned to multi-country realities.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {PLAN_INSIGHTS.map((insight) => (
                <article
                  key={insight.title}
                  className="rounded-2xl border border-purple-100 bg-purple-50/70 p-6 shadow-inner transition hover:border-purple-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">{insight.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{insight.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-purple-100 bg-purple-50/70 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to orchestrate Flutterwave with Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Together we convert archived copy into live, measurable systems that put your organisation at the forefront of
            Africa’s direct selling payments.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/support", locale)}>Connect with support leadership</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact/">Schedule stakeholder workshop</Link>
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
