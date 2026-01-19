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
  Circuitry,
  Compass,
  DeviceMobile,
  GlobeHemisphereEast,
  Lightning,
  Notebook,
  ShieldCheck,
  SquaresFour,
  Ticket,
  TreasureChest,
  UserList
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroCard = {
  title: string;
  detail: string;
  icon: IconType;
};

type JourneyMilestone = {
  id: string;
  focus: string;
  description: string;
  outputs: string[];
  icon: IconType;
};

type ModuleMoment = {
  pillar: string;
  summary: string;
  points: string[];
  icon: IconType;
};

type PlanCue = {
  heading: string;
  narrative: string;
};

const HERO_CARDS: HeroCard[] = [
  {
    title: "Egypt anchored",
    detail:
      "Fawry is Egypt’s trusted payment rail. Cloud MLM Software pivots the legacy page into a Cairo-ready programme for distributors, partners, and regulators.",
    icon: GlobeHemisphereEast
  },
  {
    title: "AI narrated demos",
    detail:
      "Custom Demo and Pre-set Demo flow into launch kits that keep leadership, sales, and AI assistants aligned on key messages.",
    icon: DeviceMobile
  },
  {
    title: "Operational certainty",
    detail:
      "Multi currency, E-Wallet, and Backup Manager maintain auditable ledgers, protecting payouts, reconciliations, and customer trust.",
    icon: ShieldCheck
  }
];

const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: "01",
    focus: "Narrative ignition",
    description:
      "Elevate the archived promise—secure, fast, seamless—into executive briefings, analyst-ready stories, and AI prompt kits tuned for Egypt.",
    outputs: [
      "Executive briefing with Fawry market stats and compliance highlights.",
      "Blog and webinar outlines reinforcing thought-leadership.",
      "Prompt library for chatbots and AI copilots."
    ],
    icon: ChartLineUp
  },
  {
    id: "02",
    focus: "Experience choreography",
    description:
      "Design enrolment, checkout, and payout flows blending Fawry’s range of payment options with Cloud MLM Software modules.",
    outputs: [
      "Interactive prototypes spanning desktop, mobile, and kiosk experiences.",
      "Copy decks for Custom Demo, Pre-set Demo, and feature explanations.",
      "Analytics instrumentation map covering conversion, settlement, and support."
    ],
    icon: Circuitry
  },
  {
    id: "03",
    focus: "Operational assurance",
    description:
      "Configure ledgers, ticketing, autoresponders, and vouchers to handle high-volume Egyptian audiences with precision.",
    outputs: [
      "Multi currency and E-Wallet mapping for EGP, USD, and regional expansion.",
      "Ticket routing playbooks with sentiment tagging and SLA guidelines.",
      "Backup policies that satisfy Egyptian data retention expectations."
    ],
    icon: Lightning
  },
  {
    id: "04",
    focus: "Growth storytelling",
    description:
      "Publish success stories, dashboards, and thought-leadership content proving Cloud MLM Software is Egypt’s payment orchestration leader.",
    outputs: [
      "Media kit with performance metrics and distributor testimonials.",
      "Distributor enablement packs for AI-guided coaching.",
      "Pipeline of analyst and investor updates fuelled by Fawry telemetry."
    ],
    icon: Compass
  }
];

const MODULE_MOMENTS: ModuleMoment[] = [
  {
    pillar: "Revenue ignition",
    summary:
      "Custom Demo, Pre-set Demo, and the Features catalogue accelerate Enterprise and scale-up discussions across Egypt.",
    points: [
      "Custom Demo mirrors compensation, taxation, and cultural nuances for Egyptian brands.",
      "Pre-set Demo offers partners a sandbox to self-evaluate Fawry flows.",
      "Features hub serves SEO+AIO content for marketing and analyst channels."
    ],
    icon: SquaresFour
  },
  {
    pillar: "Financial integrity",
    summary:
      "Multi currency, E-Wallet, and Backup Manager orchestrate cash flow, ensuring transparency for auditors and finance teams.",
    points: [
      "Multi currency module tracks Fawry settlements across EGP and foreign currencies.",
      "E-Wallet module powers instant commission releases based on real-time postings.",
      "Backup Manager maintains verifiable restore points every step of the journey."
    ],
    icon: TreasureChest
  },
  {
    pillar: "Support excellence",
    summary:
      "Ticketing, Auto responder, and E-Voucher keep distributors informed, motivated, and supported at scale.",
    points: [
      "Ticket system triages payment issues with contextual metadata.",
      "Auto responder sends multilingual updates, bridging time zones and holidays.",
      "E-Voucher module creates incentive campaigns around Fawry adoption milestones."
    ],
    icon: Ticket
  }
];

const PLAN_CUES: PlanCue[] = [
  {
    heading: "Binary & Matrix plans",
    narrative:
      "Dashboards monitor leg balance and highlight approval-rate dips so leaders respond before momentum slows."
  },
  {
    heading: "Board & Gift plans",
    narrative:
      "Event-based vouchers celebrate progression while transparent ledgers maintain trust within community contributions."
  },
  {
    heading: "Unilevel & Generation plans",
    narrative:
      "AI narration transforms Fawry telemetry into coaching insights for deep-tier leaders and compliance teams."
  },
  {
    heading: "Hybrid & Emerging plans",
    narrative:
      "Scenario planning tests new promotions, retail tie-ins, and field innovations before nationwide rollout."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Fawry Payment Gateway for Cloud MLM Software";
  const description =
    "Launch a Fawry-powered Cloud MLM Software experience with Egyptian storytelling, resilient modules, and AI-ready analytics.";

  return {
    title,
    description,
    keywords: [
      "Fawry payment gateway",
      "Egypt MLM software payments",
      "Cloud MLM Software Fawry integration",
      "secure direct selling checkout Egypt",
      "AI payment orchestration Egypt"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/fawry", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type FawryPageProps = {
  params: { lang: SupportedLocale };
};

export default function FawryPage({ params }: FawryPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-yellow-100 bg-gradient-to-bl from-yellow-50 via-white to-slate-50 px-6 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-bl dark:from-yellow-900/10 dark:via-slate-900 dark:to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.25),_rgba(255,255,255,0))]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-yellow-700 dark:border-white/10 dark:bg-white/10 dark:text-white">
              <Buildings className="h-4 w-4" aria-hidden />
              Egypt payment orchestration
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Fawry Payment Gateway for Cloud MLM Software
            </h1>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              We transform archived copy into a launch-ready experience for Egypt. Cloud MLM Software orchestrates demos,
              modules, analytics, and AI narration so every stakeholder feels the secure, fast, and seamless promise of
              Fawry.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/free-mlm-software-demo/">Experience Fawry demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={buildLocalizedPath("/pricing", locale)}>Review pricing insights</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 rounded-3xl border border-yellow-100 bg-white/85 p-6 shadow-inner backdrop-blur dark:border-white/10 dark:bg-white/5">
            {HERO_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="rounded-2xl border border-yellow-100 bg-yellow-50/70 p-5 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-base font-semibold text-slate-900 dark:text-white">{card.title}</h2>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{card.detail}</p>
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
              Launch journey
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Four milestones to deliver Fawry with precision
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Every milestone captures the archived modules and weaves them into a modern, AI-ready programme for Egypt.
            </p>
          </header>
          <div className="mt-8 grid gap-6 lg:grid-cols-4">
            {JOURNEY_MILESTONES.map((milestone) => {
              const Icon = milestone.icon;
              return (
                <article
                  key={milestone.id}
                  className="rounded-2xl border border-yellow-100 bg-yellow-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-yellow-200 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                      Phase {milestone.id}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{milestone.focus}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{milestone.description}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {milestone.outputs.map((output) => (
                      <li key={output} className="flex items-start gap-2">
                        <Notebook className="mt-0.5 h-4 w-4 text-yellow-500" aria-hidden />
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
              Modules and services aligned to Fawry
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              The WordPress archive highlighted demos, modules, and services. We reorganise them into three moments that
              unify revenue, finance, and support teams around Fawry.
            </p>
            <Link
              href="/network-marketing-software-company-providing-affordable-mlm-system-in-egypt/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-600 hover:text-yellow-700 dark:text-yellow-200 dark:hover:text-yellow-100"
            >
              Read Egypt market insights
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
            <div className="rounded-2xl border border-yellow-100 bg-yellow-50/70 p-6 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              August 28, 2024 – our archive confirms Fawry’s prominence in Egypt. We convert that single line into a
              comprehensive launch playbook across departments.
            </div>
          </div>
          <div className="space-y-6">
            {MODULE_MOMENTS.map((moment) => {
              const Icon = moment.icon;
              return (
                <article
                  key={moment.pillar}
                  className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-yellow-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">{moment.pillar}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{moment.summary}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {moment.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <UserList className="mt-0.5 h-4 w-4 text-yellow-500" aria-hidden />
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
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr,1.05fr]">
          <aside className="flex flex-col gap-6 rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-900 via-slate-800 to-black p-10 text-white shadow-sm dark:border-white/10">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Service catalogue</h3>
              <p className="text-sm leading-6 text-slate-200">
                Cloud MLM Software’s services—development, integration, design, support—deliver the Egyptian experience you
                promised in the archive.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                "MLM Software Development: consultancy and implementation for complex compensation and regulatory needs.",
                "E-Commerce Integration: WooCommerce, Shopify, and Magento projects powered by Fawry.",
                "Website Designing & Branding: corporate storytelling for investors and community leaders.",
                "Support Operations: 24/7 multilingual support, knowledge bases, and AI enablement."
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
              Align Fawry with every compensation plan
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Binary, Matrix, Board, Gift, Unilevel, Generation, Hybrid—we turn archived listings into living guidance with
              AI narration and predictive analytics.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {PLAN_CUES.map((cue) => (
                <article
                  key={cue.heading}
                  className="rounded-2xl border border-yellow-100 bg-yellow-50/70 p-6 shadow-inner transition hover:border-yellow-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">{cue.heading}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{cue.narrative}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-yellow-100 bg-yellow-50/70 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to orchestrate Fawry with Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Let’s convert archived copy into measurable programmes that make your organisation the thought leader of
            Egypt’s direct selling payments landscape.
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
