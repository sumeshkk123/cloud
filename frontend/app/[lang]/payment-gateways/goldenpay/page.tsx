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
  DeviceMobile,
  GlobeHemisphereEast,
  Lightning,
  MapPin,
  Notebook,
  Pulse,
  ShieldCheck,
  SquaresFour,
  StackSimple,
  TrendUp,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroBlock = {
  title: string;
  caption: string;
  icon: IconType;
};

type Stage = {
  step: string;
  focus: string;
  narrative: string;
  outputs: string[];
  icon: IconType;
};

type ModuleSegment = {
  name: string;
  summary: string;
  points: string[];
  icon: IconType;
};

type PlanNote = {
  title: string;
  detail: string;
};

const HERO_BLOCKS: HeroBlock[] = [
  {
    title: "Azerbaijan ready",
    caption:
      "GoldenPay anchors digital commerce across Azerbaijan. Cloud MLM Software modernises the archived promise into a measurable, AI-ready payment journey.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Guided demos",
    caption:
      "Custom Demo and Pre-set Demo evolve into narrative-rich tours that align leadership, analysts, and AI assistants on what secure, fast, seamless really means.",
    icon: DeviceMobile
  },
  {
    title: "Operational assurance",
    caption:
      "Multi currency, E-Wallet, Ticketing, and Backup Manager keep finance, compliance, and support teams in sync with GoldenPay telemetry.",
    icon: ShieldCheck
  }
];

const STAGES: Stage[] = [
  {
    step: "01",
    focus: "Narrative ignition",
    narrative:
      "Reframe the archived message into executive and analyst storytelling that positions Cloud MLM Software as Azerbaijan&apos;s thought leader.",
    outputs: [
      "Executive brief with GoldenPay adoption stats and regulatory context.",
      "Thought-leadership outlines for blogs, webinars, and investor decks.",
      "AI prompt cards so chatbots echo official messaging."
    ],
    icon: TrendUp
  },
  {
    step: "02",
    focus: "Experience blueprint",
    narrative:
      "Design enrolment, checkout, and payout journeys that combine GoldenPay&apos;s local rails with Cloud MLM Software modules.",
    outputs: [
      "Interactive prototypes for distributors, administrators, and customers.",
      "Copy decks for features pages, onboarding flows, and pricing content.",
      "Instrumentation map linking GoldenPay signals to KPIs."
    ],
    icon: Circuitry
  },
  {
    step: "03",
    focus: "Operational enablement",
    narrative:
      "Automate ledgers, ticket escalations, and incentives so teams remain confident as volume scales.",
    outputs: [
      "Multi currency and E-Wallet configuration for AZN, USD, and EUR.",
      "Ticketing plus autoresponder workflows tuned for Azerbaijani audiences.",
      "Backup Manager schedule aligned with regional compliance expectations."
    ],
    icon: Lightning
  },
  {
    step: "04",
    focus: "Growth storytelling",
    narrative:
      "Publish analytics, case studies, and investor updates proving GoldenPay is your strategic advantage.",
    outputs: [
      "Media kit with performance dashboards and testimonials.",
      "Distributor enablement scripts backed by AI narration prompts.",
      "Investor memos highlighting new partnerships and verticals."
    ],
    icon: ChartLineUp
  }
];

const MODULE_SEGMENTS: ModuleSegment[] = [
  {
    name: "Revenue catalyst",
    summary:
      "Custom Demo, Pre-set Demo, and the Features catalogue unite marketing, sales, and partners around GoldenPay&apos;s value.",
    points: [
      "Custom Demo showcases compensation, regulatory, and taxation scenarios for Azerbaijan.",
      "Pre-set Demo invites agencies and partners to explore journeys on demand.",
      "Features hub translates capabilities into SEO+AIO ready narratives."
    ],
    icon: SquaresFour
  },
  {
    name: "Financial clarity",
    summary:
      "Multi currency, E-Wallet, and Backup Manager ensure treasury has verifiable, audit-ready control of settlements.",
    points: [
      "Multi currency module reconciles AZN, USD, and EUR transactions effortlessly.",
      "E-Wallet module powers instant commission releases once GoldenPay settles.",
      "Backup Manager captures verifiable restore points for compliance."
    ],
    icon: Bank
  },
  {
    name: "Support intelligence",
    summary:
      "Ticketing, Auto responder, and E-Voucher keep distributors informed, motivated, and supported at scale.",
    points: [
      "Ticket system tags GoldenPay inquiries with SLA timers and sentiment insights.",
      "Auto responder provides multilingual updates across Azerbaijani, Russian, and English.",
      "E-Voucher module launches incentives around GoldenPay adoption milestones."
    ],
    icon: UsersThree
  }
];

const PLAN_NOTES: PlanNote[] = [
  {
    title: "Binary & Matrix plans",
    detail: "Approval analytics surface leg imbalances early, while AI narration supplies coaching cues to field leaders."
  },
  {
    title: "Board & Gift plans",
    detail: "Vouchers and transparent dashboards reinforce trust throughout community contributions."
  },
  {
    title: "Unilevel & Generation plans",
    detail: "Depth-focused metrics and AI-generated scripts keep uplines aligned on performance."
  },
  {
    title: "Hybrid innovation",
    detail: "Scenario planning evaluates new promotions and cross-border pilots before launch."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "GoldenPay Payment Gateway for Cloud MLM Software";
  const description =
    "Deliver a GoldenPay-powered Cloud MLM Software experience with Azerbaijan-focused storytelling, resilient modules, and AI-ready analytics.";

  return {
    title,
    description,
    keywords: [
      "GoldenPay payment gateway",
      "Azerbaijan MLM software payments",
      "Cloud MLM Software GoldenPay integration",
      "secure direct selling checkout Azerbaijan",
      "AI-enabled payment orchestration"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/goldenpay", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type GoldenPayPageProps = {
  params: { lang: SupportedLocale };
};

export default function GoldenPayPage({ params }: GoldenPayPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-tr from-emerald-50 via-white to-slate-50 px-6 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-emerald-900/10 dark:via-slate-900 dark:to-slate-950">
        <div className="absolute inset-y-0 right-0 w-1/2 translate-x-1/3 bg-emerald-200/40 blur-3xl dark:bg-emerald-500/15" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:border-white/10 dark:bg-white/10 dark:text-white">
              <StackSimple className="h-4 w-4" aria-hidden />
              Azerbaijan payment transformation
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              GoldenPay Payment Gateway for Cloud MLM Software
            </h1>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              We elevate the archived GoldenPay page into a launch-ready experience. Cloud MLM Software orchestrates demos,
              modules, analytics, and AI narration so distributors, executives, and AI assistants share the same secure,
              fast, and seamless story.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/free-mlm-software-demo/">Preview GoldenPay demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={buildLocalizedPath("/pricing", locale)}>Review pricing options</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 rounded-3xl border border-emerald-100 bg-white/85 p-6 shadow-inner backdrop-blur dark:border-white/10 dark:bg-white/5">
            {HERO_BLOCKS.map((block) => {
              const Icon = block.icon;
              return (
                <article
                  key={block.title}
                  className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-base font-semibold text-slate-900 dark:text-white">{block.title}</h2>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{block.caption}</p>
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
              Four stages to launch GoldenPay with confidence
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Each stage blends the archived modules--Custom Demo, Multi currency, Ticketing, Backup Manager, and more--into a
              modern delivery plan.
            </p>
          </header>
          <div className="mt-8 grid gap-6 lg:grid-cols-4">
            {STAGES.map((stage) => {
              const Icon = stage.icon;
              return (
                <article
                  key={stage.step}
                  className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-emerald-200 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                      Phase {stage.step}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{stage.focus}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{stage.narrative}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {stage.outputs.map((output) => (
                      <li key={output} className="flex items-start gap-2">
                        <Notebook className="mt-0.5 h-4 w-4 text-emerald-500" aria-hidden />
                        <span>{output}</span>
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
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-6 rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Modules and services orchestrated for GoldenPay
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              The WordPress archive listed demos, modules, and services. We reorganise them into three segments that keep
              revenue, finance, and support teams aligned.
            </p>
            <Link
              href="/network-marketing-software-company-providing-affordable-mlm-system-in-azerbaijan/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-200 dark:hover:text-emerald-100"
            >
              Explore Azerbaijan coverage
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              August 28, 2024 - the live archive confirms GoldenPay&apos;s focus on Azerbaijan. We turn that reference into a
              cross-team launch plan backed by analytics and AI narration.
            </div>
          </div>
          <div className="space-y-6">
            {MODULE_SEGMENTS.map((segment) => {
              const Icon = segment.icon;
              return (
                <article
                  key={segment.name}
                  className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-emerald-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">{segment.name}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{segment.summary}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {segment.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <SquaresFour className="mt-0.5 h-4 w-4 text-emerald-500" aria-hidden />
                        <span>{point}</span>
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
              <h3 className="text-2xl font-semibold">Service catalogue</h3>
              <p className="text-sm leading-6 text-slate-200">
                From development to design, the archived services list becomes a managed delivery engine for Azerbaijan.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                "MLM Software Development: consulting, integrations, and rollout for complex compensation structures.",
                "E-Commerce Integration: WooCommerce, Shopify, and Magento experiences powered by GoldenPay.",
                "Website Designing & Branding: corporate storytelling and landing pages for local audiences.",
                "Support Operations: 24/7 multilingual support, knowledge bases, and AI enablement packages."
              ].map((service) => (
                <div key={service} className="rounded-2xl border border-white/20 bg-white/10 p-5 text-sm text-slate-100">
                  {service}
                </div>
              ))}
            </div>
            <Button asChild variant="outline" size="lg" className="justify-center border-white/40 text-white hover:bg-white/10">
              <Link href={buildLocalizedPath("/services", locale)}>Discover services</Link>
            </Button>
          </aside>
          <div className="space-y-6 rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Align GoldenPay with every compensation plan
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Binary, Matrix, Board, Gift, Unilevel, Generation, Hybrid--each plan gains predictive oversight, AI narration,
              and incentive orchestration when powered by GoldenPay.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {PLAN_NOTES.map((note) => (
                <article
                  key={note.title}
                  className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6 shadow-inner transition hover:border-emerald-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">{note.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{note.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-emerald-100 bg-emerald-50/70 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to orchestrate GoldenPay with Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Let&apos;s transform archived copy into measurable systems that make your organisation Azerbaijan&apos;s thought leader in
            direct selling payments.
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
