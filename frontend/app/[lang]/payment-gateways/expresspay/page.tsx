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
  Circuitry,
  CompassTool,
  CurrencyCircleDollar,
  DeviceMobile,
  GlobeHemisphereWest,
  MegaphoneSimple,
  Notebook,
  Pulse,
  ShieldCheck,
  SquaresFour
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroInsight = {
  label: string;
  metric: string;
  detail: string;
  icon: IconType;
};

type LaunchThread = {
  phase: string;
  description: string;
  outcomes: string[];
  icon: IconType;
};

type ModuleStack = {
  name: string;
  summary: string;
  bullets: string[];
};

type ServiceCard = {
  title: string;
  detail: string;
};

const HERO_INSIGHTS: HeroInsight[] = [
  {
    label: "Ghana ready",
    metric: "National coverage",
    detail:
      "ExpressPay powers card, mobile money, and wallet transactions across Ghana. Cloud MLM Software narrates the journey for executives and field leaders.",
    icon: GlobeHemisphereWest
  },
  {
    label: "AI-guided adoption",
    metric: "Demo → launch in 28 days",
    detail:
      "Custom Demo, Pre-set Demo, and knowledge packs keep stakeholders confident from pitch to production.",
    icon: DeviceMobile
  },
  {
    label: "Operational resilience",
    metric: "Audit-ready reporting",
    detail:
      "Multi currency, E-Wallet, and Backup Manager align finance, compliance, and support on ExpressPay telemetry.",
    icon: ShieldCheck
  }
];

const LAUNCH_THREADS: LaunchThread[] = [
  {
    phase: "Narrative ignition",
    description:
      "Translate the archived promise—secure, fast, seamless—into Ghana-focused storytelling for media, executives, and AI copilots.",
    outcomes: [
      "Executive-ready brief with data on Ghana’s digital payment surge.",
      "Blog and webinar outlines for thought-leadership dominance.",
      "AI prompt cards aligning chatbot messaging with corporate tone."
    ],
    icon: MegaphoneSimple
  },
  {
    phase: "Experience design",
    description:
      "Map enrolment, checkout, and payout journeys that combine ExpressPay rails with Cloud MLM Software modules.",
    outcomes: [
      "Clickable prototypes covering desktop, mobile, and in-field transactions.",
      "Copy decks for Custom Demo, Pre-set Demo, and features catalogue.",
      "Analytics instrumentation plan with clear success metrics."
    ],
    icon: Circuitry
  },
  {
    phase: "Operational assurance",
    description:
      "Automate reconciliation, support, and incentives so distributors and customers experience reliable commerce.",
    outcomes: [
      "Multi currency to E-Wallet mapping for cedi, USD, and regional currencies.",
      "Ticket and autoresponder flows reflecting ExpressPay scenarios.",
      "Backup Manager policy aligned with Ghanaian regulatory expectations."
    ],
    icon: CurrencyCircleDollar
  },
  {
    phase: "Growth storytelling",
    description:
      "Publish analytics, case studies, and community stories that position your organisation as Ghana’s payment innovator.",
    outcomes: [
      "Thought-leadership calendar for industry events and investor briefings.",
      "Distributor enablement kits with AI narration support.",
      "Media-ready success metrics drawn from ExpressPay telemetry."
    ],
    icon: ChartLineUp
  }
];

const MODULE_STACKS: ModuleStack[] = [
  {
    name: "Revenue ignition",
    summary:
      "Custom Demo, Pre-set Demo, and Features hub align marketing, sales, and partners on the ExpressPay opportunity.",
    bullets: [
      "Custom Demo demonstrates compensation, products, and compliance in a Ghana-first narrative.",
      "Pre-set Demo invites partners to experience ExpressPay-enabled journeys on demand.",
      "Features hub translates capabilities into SEO+AIO snippets for humans and AI."
    ]
  },
  {
    name: "Financial clarity",
    summary:
      "Multi currency, E-Wallet, and Backup Manager ensure treasury sees exactly how funds flow across ExpressPay, banks, and distributors.",
    bullets: [
      "Multi currency module balances cedi inflows with regional expansions.",
      "E-Wallet module supports instant commission payouts once ExpressPay settles.",
      "Backup Manager preserves verifiable checkpoints for audits."
    ]
  },
  {
    name: "Support intelligence",
    summary:
      "Ticketing, Auto responder, and E-Voucher deliver proactive care and incentive experiences for Ghana’s distributor network.",
    bullets: [
      "Ticket system tags ExpressPay journeys with sentiment and SLA insights.",
      "Auto responder sends contextual updates in English and local dialects.",
      "E-Voucher module powers activation incentives tied to ExpressPay usage."
    ]
  }
];

const SERVICE_CARDS: ServiceCard[] = [
  {
    title: "MLM Software Development",
    detail:
      "Enterprise-grade consulting, integrations, and onboarding for Ghana’s ambitious direct selling brands."
  },
  {
    title: "E-Commerce Integration",
    detail:
      "WooCommerce, Shopify, and Magento experiences that apply ExpressPay to digital storefronts and mobile marketplaces."
  },
  {
    title: "Website Designing & Branding",
    detail:
      "Corporate storytelling, pricing pages, and landing experiences that echo a secure, fast, seamless promise."
  },
  {
    title: "Support Operations",
    detail:
      "24/7 ticketing, knowledge bases, and AI enablement tailored to the Ghana market and diaspora audiences."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "ExpressPay Payment Gateway for Cloud MLM Software";
  const description =
    "Modernise Ghana’s ExpressPay gateway inside Cloud MLM Software with AI narration, resilient modules, and thought-leadership storytelling.";

  return {
    title,
    description,
    keywords: [
      "ExpressPay payment gateway",
      "Ghana MLM software payments",
      "Cloud MLM Software ExpressPay integration",
      "mobile money direct selling Ghana",
      "AI payment orchestration"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/expresspay", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ExpressPayPageProps = {
  params: { lang: SupportedLocale };
};

export default function ExpressPayPage({ params }: ExpressPayPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-slate-50 px-6 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-amber-900/10 dark:via-slate-900 dark:to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(251,191,36,0.15),_rgba(255,255,255,0))]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-amber-700 dark:border-white/10 dark:bg-white/10 dark:text-white">
              <Pulse className="h-4 w-4" aria-hidden />
              Ghana payment innovation
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              ExpressPay Payment Gateway for Cloud MLM Software
            </h1>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              We elevate the archived WordPress page into a Ghana-first payment experience. Cloud MLM Software synchronises
              ExpressPay with demos, modules, analytics, and AI narration so every stakeholder sees the same secure, fast,
              and seamless reality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/free-mlm-software-demo/">Request ExpressPay demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={buildLocalizedPath("/pricing", locale)}>Review pricing calculator</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 rounded-3xl border border-amber-100 bg-white/85 p-6 shadow-inner backdrop-blur dark:border-white/10 dark:bg-white/5">
            {HERO_INSIGHTS.map((insight) => {
              const Icon = insight.icon;
              return (
                <article
                  key={insight.label}
                  className="rounded-2xl border border-amber-100 bg-amber-50/70 p-5 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600 dark:text-amber-200">
                        {insight.label}
                      </p>
                      <h2 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{insight.metric}</h2>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{insight.detail}</p>
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
              Launch threads
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Four threads that keep ExpressPay adoption on track
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Each thread blends strategy, experience, operations, and storytelling so Ghanaian distributors, executives,
              and AI assistants stay aligned.
            </p>
          </header>
          <div className="mt-8 grid gap-6 lg:grid-cols-4">
            {LAUNCH_THREADS.map((thread) => {
              const Icon = thread.icon;
              return (
                <article
                  key={thread.phase}
                  className="rounded-2xl border border-amber-100 bg-amber-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-amber-200 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">{thread.phase}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{thread.description}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {thread.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <Notebook className="mt-0.5 h-4 w-4 text-amber-500" aria-hidden />
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
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr,1.05fr]">
          <aside className="flex flex-col gap-6 rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Modules and demos in synchronised stacks
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              The archive mentioned demos, modules, and services. We structure them into three stacks that keep teams in
              sync around ExpressPay orchestration.
            </p>
            <Link
              href="/network-marketing-software-company-providing-affordable-mlm-system-in-ghana/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 dark:text-amber-200 dark:hover:text-amber-100"
            >
              Explore Ghana market coverage
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
            <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-6 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              August 28, 2024 – the live cache lists ExpressPay with Ghana as the supported country. We translate that
              mention into executive dashboards, regulatory checklists, and distributor enablement.
            </div>
          </aside>
          <div className="space-y-6">
            {MODULE_STACKS.map((stack) => (
              <article
                key={stack.name}
                className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-amber-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stack.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{stack.summary}</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {stack.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <SquaresFour className="mt-0.5 h-4 w-4 text-amber-500" aria-hidden />
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
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-6 rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Align ExpressPay with every compensation plan
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Binary, Matrix, Unilevel, Generation, Gift, Hybrid—our platform keeps each plan’s promises measurable with
              ExpressPay telemetry and AI narration.
            </p>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-200">
              <li className="flex items-start gap-2">
                <CompassTool className="mt-0.5 h-4 w-4 text-amber-500" aria-hidden />
                <span>Binary & Matrix plans: leg analytics flag approval drops before they impact distributor morale.</span>
              </li>
              <li className="flex items-start gap-2">
                <CompassTool className="mt-0.5 h-4 w-4 text-amber-500" aria-hidden />
                <span>Board & Gift plans: vouchers, progress dashboards, and support scripts protect community trust.</span>
              </li>
              <li className="flex items-start gap-2">
                <CompassTool className="mt-0.5 h-4 w-4 text-amber-500" aria-hidden />
                <span>
                  Unilevel & Generation plans: AI storytelling equips uplines with insights for coaching deep downlines.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CompassTool className="mt-0.5 h-4 w-4 text-amber-500" aria-hidden />
                <span>Hybrid plans: scenario planning tests new incentives and remittance models before rollout.</span>
              </li>
            </ul>
          </div>
          <aside className="flex h-full flex-col gap-6 rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-900 via-slate-800 to-black p-10 text-white shadow-sm dark:border-white/10">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Service catalogue</h3>
              <p className="text-sm leading-6 text-slate-200">
                Cloud MLM Software’s services—highlighted in the archive—become your on-demand delivery team for Ghana.
              </p>
            </div>
            <div className="grid gap-4">
              {SERVICE_CARDS.map((service) => (
                <div key={service.title} className="rounded-2xl border border-white/20 bg-white/10 p-5 text-sm text-slate-100">
                  <h4 className="font-semibold">{service.title}</h4>
                  <p className="mt-2 leading-6">{service.detail}</p>
                </div>
              ))}
            </div>
            <Button asChild variant="outline" size="lg" className="justify-center border-white/40 text-white hover:bg-white/10">
              <Link href={buildLocalizedPath("/services", locale)}>Browse services</Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-amber-100 bg-amber-50/70 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to orchestrate ExpressPay with Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Let’s convert archived copy into real-time systems that position your organisation as Ghana’s thought leader in
            direct selling payments.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/support", locale)}>Talk to support leadership</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact/">Schedule an executive workshop</Link>
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
