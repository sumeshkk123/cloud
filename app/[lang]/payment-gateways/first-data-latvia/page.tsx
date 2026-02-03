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
  ChartLineUp,
  Circuitry,
  CurrencyCircleDollar,
  DeviceMobile,
  GlobeHemisphereEast,
  Lightning,
  Notebook,
  ShieldCheck,
  SquaresFour,
  StackSimple,
  TrendUp,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroStack = {
  label: string;
  highlight: string;
  description: string;
  icon: IconType;
};

type ProgrammeStage = {
  title: string;
  statement: string;
  deliverables: string[];
  icon: IconType;
};

type ModuleSuite = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type PlanFocus = {
  plan: string;
  detail: string;
};

const HERO_STACKS: HeroStack[] = [
  {
    label: "Baltic ready",
    highlight: "Latvia coverage confirmed",
    description:
      "First Data Latvia connects cards, alternative payments, and acquiring services across the Baltic market. Cloud MLM Software packages the narrative for executives, regulators, and AI assistants.",
    icon: GlobeHemisphereEast
  },
  {
    label: "AI-enabled demos",
    highlight: "Custom & preset experiences",
    description:
      "We evolve the archived Custom Demo and Pre-set Demo into guided tours that visualise Latvian compliance and customer journeys.",
    icon: DeviceMobile
  },
  {
    label: "Operational trust",
    highlight: "Audit-ready ledgers",
    description:
      "Multi currency, E-Wallet, and Backup Manager orchestrate reconciliation across euro settlements and global expansion targets.",
    icon: ShieldCheck
  }
];

const PROGRAMME_STAGES: ProgrammeStage[] = [
  {
    title: "Narrative reframing",
    statement:
      "Translate the archived secure, fast, seamless promise into a First Data Latvia story for investors, analysts, and AI search.",
    deliverables: [
      "Executive brief with Latvian payment insights and regulatory context.",
      "Thought-leadership article and webinar outlines.",
      "AI prompt sets ensuring chatbots repeat the right narrative."
    ],
    icon: TrendUp
  },
  {
    title: "Experience blueprint",
    statement:
      "Design end-to-end enrolment, checkout, and payout flows that link First Data Latvia capabilities with Cloud MLM Software modules.",
    deliverables: [
      "Interactive prototypes for desktop and mobile orchestration.",
      "Copy decks covering features, onboarding, and distributor comms.",
      "Instrumentation map aligning telemetry with KPIs."
    ],
    icon: Circuitry
  },
  {
    title: "Operational enablement",
    statement:
      "Automate ledgers, ticketing, and incentives so finance, compliance, and support operate from a shared source of truth.",
    deliverables: [
      "Multi currency and E-Wallet configuration for euro-led operations.",
      "Ticketing and autoresponder flows tuned for Baltic audiences.",
      "Backup strategy that meets EU data privacy and audit expectations."
    ],
    icon: Lightning
  },
  {
    title: "Growth storytelling",
    statement:
      "Publish analytics, case studies, and enablement assets that position Cloud MLM Software as the Baltic region’s payment thought leader.",
    deliverables: [
      "Media kit with live performance metrics and testimonials.",
      "Distributor enablement scripts with AI narration guidance.",
      "Investor updates noting First Data Latvia expansions into new verticals."
    ],
    icon: ChartLineUp
  }
];

const MODULE_SUITES: ModuleSuite[] = [
  {
    name: "Revenue catalyst",
    summary:
      "Custom Demo, Pre-set Demo, and Features library inspire high-intent buyers with data-rich stories about First Data Latvia enablement.",
    bullets: [
      "Custom Demo showcases regional compliance, taxation, and compensation nuances.",
      "Pre-set Demo invites agencies and partners to trial experiences on demand.",
      "Features hub serves SEO+AIO content that keeps marketing and AI search aligned."
    ],
    icon: SquaresFour
  },
  {
    name: "Financial framework",
    summary:
      "Multi currency, E-Wallet, and Backup Manager build audit-ready maturity around euro settlements and cross-border expansion.",
    bullets: [
      "Multi currency module reconciles euro inflows with USD and regional ledgers.",
      "E-Wallet module enables instant commission and incentive releases.",
      "Backup Manager schedules verifiable recovery checkpoints for compliance."
    ],
    icon: Bank
  },
  {
    name: "Support intelligence",
    summary:
      "Ticket system, Auto responder, and E-Voucher deliver proactive, personalised support to Baltic distributors and customers.",
    bullets: [
      "Ticket system tags payment cases with region-specific insights and SLA targets.",
      "Auto responder provides multilingual updates across Latvian, Russian, and English.",
      "E-Voucher module launches incentive programmes tied to adoption milestones."
    ],
    icon: UsersThree
  }
];

const PLAN_FOCUS: PlanFocus[] = [
  {
    plan: "Binary & Matrix plans",
    detail:
      "Approval analytics and leg-balancing dashboards highlight when performance drifts, allowing leaders to intervene quickly."
  },
  {
    plan: "Board & Gift plans",
    detail:
      "Event-driven vouchers and transparent progress reporting protect community trust throughout advancement cycles."
  },
  {
    plan: "Unilevel & Generation plans",
    detail:
      "AI narration turns First Data Latvia telemetry into coaching cues for depth-based growth teams."
  },
  {
    plan: "Hybrid innovation",
    detail:
      "Scenario planning simulates new promotions, subscriptions, and cross-border pilots before they launch."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "First Data Latvia Payment Gateway for Cloud MLM Software";
  const description =
    "Activate First Data Latvia inside Cloud MLM Software with Baltic-focused storytelling, resilient modules, and AI-ready analytics.";

  return {
    title,
    description,
    keywords: [
      "First Data Latvia payment gateway",
      "Latvia MLM software payments",
      "Cloud MLM Software First Data integration",
      "Baltic payment orchestration",
      "AI-enabled direct selling Latvia"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/first-data-latvia", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type FirstDataLatviaPageProps = {
  params: { lang: SupportedLocale };
};

export default function FirstDataLatviaPage({ params }: FirstDataLatviaPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-tr from-blue-50 via-white to-slate-50 px-6 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-blue-900/10 dark:via-slate-900 dark:to-slate-950">
        <div className="absolute inset-y-0 left-0 w-1/2 -translate-x-1/3 bg-blue-200/40 blur-3xl dark:bg-blue-500/20" />
        <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:border-white/10 dark:bg-white/10 dark:text-white">
              <StackSimple className="h-4 w-4" aria-hidden />
              Baltic payment leadership
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              First Data Latvia Payment Gateway for Cloud MLM Software
            </h1>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              We elevate the archived WordPress page into a launch-ready Baltic programme. Cloud MLM Software synchronises
              demos, modules, analytics, and AI narration so every stakeholder experiences secure, fast, and seamless
              payments with First Data Latvia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/free-mlm-software-demo/">Request First Data demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={buildLocalizedPath("/pricing", locale)}>Explore pricing roadmap</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 rounded-3xl border border-blue-100 bg-white/85 p-6 shadow-inner backdrop-blur dark:border-white/10 dark:bg-white/5">
            {HERO_STACKS.map((stack) => {
              const Icon = stack.icon;
              return (
                <article
                  key={stack.label}
                  className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-200">
                        {stack.label}
                      </p>
                      <h2 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{stack.highlight}</h2>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{stack.description}</p>
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
              Launch programme
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Four stages to launch First Data Latvia with confidence
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Each stage connects the archived modules—Custom Demo, Multi currency, Ticketing, and more—into a unified
              Baltic delivery plan.
            </p>
          </header>
          <div className="mt-8 grid gap-6 lg:grid-cols-4">
            {PROGRAMME_STAGES.map((stage) => {
              const Icon = stage.icon;
              return (
                <article
                  key={stage.title}
                  className="rounded-2xl border border-blue-100 bg-blue-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-blue-200 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">{stage.title}</h3>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{stage.statement}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {stage.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Notebook className="mt-0.5 h-4 w-4 text-blue-500" aria-hidden />
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
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr,0.9fr]">
          <div className="space-y-6 rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Module suites synchronised for Latvia
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software reimagines the archived modules into three suites that align revenue, finance, and support
              teams around First Data Latvia.
            </p>
            <Link
              href="/network-marketing-software-company-providing-affordable-mlm-system-in-latvia/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-200 dark:hover:text-blue-100"
            >
              Read Latvia market insight
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
            <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-6 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              August 28, 2024 – our archive confirms First Data Latvia coverage. We turn that into a programme spanning
              content, operations, and enablement.
            </div>
          </div>
          <div className="space-y-6">
            {MODULE_SUITES.map((suite) => {
              const Icon = suite.icon;
              return (
                <article
                  key={suite.name}
                  className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">{suite.name}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{suite.summary}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {suite.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <CurrencyCircleDollar className="mt-0.5 h-4 w-4 text-blue-500" aria-hidden />
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
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr,1.05fr]">
          <aside className="flex flex-col gap-6 rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-900 via-slate-800 to-black p-10 text-white shadow-sm dark:border-white/10">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Service catalogue</h3>
              <p className="text-sm leading-6 text-slate-200">
                The archived services list becomes a managed delivery engine—consulting, e-commerce integration, design,
                and support tailored for the Baltics.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                "MLM Software Development: end-to-end consulting for compensation, compliance, and integrations.",
                "E-Commerce Integration: WooCommerce, Shopify, and Magento experiences connected to First Data Latvia.",
                "Website Designing & Branding: corporate storytelling for investors and distribution partners.",
                "Support Operations: 24/7 multilingual support, knowledge bases, and AI enablement packages."
              ].map((service) => (
                <div key={service} className="rounded-2xl border border-white/20 bg-white/10 p-5 text-sm text-slate-100">
                  {service}
                </div>
              ))}
            </div>
            <Button asChild variant="outline" size="lg" className="justify-center border-white/40 text-white hover:bg-white/10">
              <Link href={buildLocalizedPath("/services", locale)}>Explore services</Link>
            </Button>
          </aside>
          <div className="space-y-6 rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Align First Data Latvia with every compensation plan
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Binary, Matrix, Board, Gift, Unilevel, Generation, Hybrid—each plan earns predictive oversight, AI narration,
              and incentive alignment grounded in First Data telemetry.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {PLAN_FOCUS.map((item) => (
                <article
                  key={item.plan}
                  className="rounded-2xl border border-blue-100 bg-blue-50/70 p-6 shadow-inner transition hover:border-blue-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">{item.plan}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-blue-100 bg-blue-50/70 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to orchestrate First Data Latvia with Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Let’s convert archived copy into measurable systems that make your organisation the thought leader in Baltic
            payment orchestration.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/support", locale)}>Talk with support leadership</Link>
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
