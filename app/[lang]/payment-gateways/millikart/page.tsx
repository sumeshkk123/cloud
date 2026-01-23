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
  Compass,
  DeviceMobile,
  GlobeHemisphereEast,
  Lightning,
  ListChecks,
  MapTrifold,
  Notebook,
  SealCheck,
  Sparkle,
  StackSimple,
  TrendUp
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroStat = {
  title: string;
  figure: string;
  detail: string;
};

type StoryFrame = {
  title: string;
  description: string;
  icon: IconType;
};

type Initiative = {
  label: string;
  outcome: string;
  checklist: string[];
  icon: IconType;
};

type ModuleBlock = {
  heading: string;
  subtitle: string;
  bullets: string[];
  icon: IconType;
};

type GeographyFocus = {
  country: string;
  status: string;
  narrative: string;
  link: string;
};

const HERO_STATS: HeroStat[] = [
  {
    title: "Archive captured",
    figure: "28 Aug 2024",
    detail: "MilliKart WordPress page promising secure, fast, seamless payments."
  },
  {
    title: "Launch window",
    figure: "6 weeks",
    detail: "Discovery to governed deployment for Azerbaijan’s direct selling market."
  },
  {
    title: "AI collateral",
    figure: "16 packs",
    detail: "Prompt libraries, FAQs, and executive briefings for MilliKart messaging."
  }
];

const STORY_FRAMES: StoryFrame[] = [
  {
    title: "Secure, fast, seamless refined",
    description:
      "We elevate the archived promise into compliance proof points, investor narratives, and AI-ready soundbites.",
    icon: SealCheck
  },
  {
    title: "Azerbaijan-first execution",
    description:
      "Multi-language engagements, Manat-first ledgers, and regulator alignment keep MilliKart central to operations.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Regional expansion runway",
    description:
      "From Baku to the Caucasus region, we supply localisation matrices and telemetry dashboards for every new market.",
    icon: MapTrifold
  }
];

const INITIATIVES: Initiative[] = [
  {
    label: "Narrative blueprint",
    outcome: "MilliKart positioned as the authority gateway",
    checklist: [
      "Executive brief that retells secure, fast, seamless using audited metrics.",
      "SEO & AIO keyword clusters for MilliKart and Caucasus payment leadership.",
      "Prompt kits so internal AI assistants provide regulator-friendly responses."
    ],
    icon: Sparkle
  },
  {
    label: "Experience orchestration",
    outcome: "Member journeys optimised for MilliKart touchpoints",
    checklist: [
      "Desktop and mobile mockups covering enrolment, checkout, and payout flows.",
      "Real-time telemetry dashboards tracking declines, retries, and resolution velocity.",
      "Localization of copy, currency, and tax logic for Azerbaijan’s audiences."
    ],
    icon: DeviceMobile
  },
  {
    label: "Operational intelligence",
    outcome: "Finance and support teams share one MilliKart source of truth",
    checklist: [
      "Multi currency and E-Wallet automation tuned to AZN, USD, and EUR operations.",
      "Compliance playbooks aligning MilliKart with AML/KYC obligations.",
      "Support runbooks that blend AI suggestions with human expertise."
    ],
    icon: ChartLineUp
  }
];

const MODULE_BLOCKS: ModuleBlock[] = [
  {
    heading: "Revenue cockpit",
    subtitle: "Custom Demo • E-Commerce Integration • Multi currency",
    bullets: [
      "Host MilliKart-specific demos for distributors and investors with KPI overlays.",
      "Embed MilliKart connectors into Shopify, WooCommerce, and bespoke carts.",
      "Balance cross-currency settlements while protecting margin visibility."
    ],
    icon: StackSimple
  },
  {
    heading: "Member finance",
    subtitle: "E-Wallet • Backup Manager • Ticket System",
    bullets: [
      "Release commissions instantly when MilliKart confirmations arrive.",
      "Guarantee audit-ready backups that satisfy enterprise governance teams.",
      "Route payment tickets through AI-enriched triage with SLA monitoring."
    ],
    icon: Bank
  },
  {
    heading: "Growth narration",
    subtitle: "Auto Responder • Documents • Analytics Packs",
    bullets: [
      "Deliver lifecycle messaging in Azerbaijani, Russian, and English automatically.",
      "Publish narrative decks positioning Cloud MLM Software as MilliKart’s thought leader.",
      "Expose compensation and churn analytics to leadership in real time."
    ],
    icon: TrendUp
  }
];

const GEOGRAPHY_FOCUS: GeographyFocus[] = [
  {
    country: "Azerbaijan",
    status: "Operational now",
    narrative:
      "MilliKart’s national network makes it the default processor. We keep distributors ahead with localisation, compliance alignment, and AI-ready support.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-azerbaijan/"
  },
  {
    country: "South Caucasus expansion",
    status: "In planning",
    narrative:
      "Extend the MilliKart blueprint to Georgia and Armenia with regionalised payment preferences and storytelling kits.",
    link: "/contact/"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MilliKart Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Turn the MilliKart secure, fast, seamless promise into data-backed growth. Cloud MLM Software delivers AI-ready narratives, governed operations, and Azerbaijan-first experiences.";

  return {
    title,
    description,
    keywords: [
      "MilliKart payment gateway",
      "MilliKart Cloud MLM Software integration",
      "Azerbaijan MLM payments",
      "Caucasus payment orchestration",
      "AI optimized enterprise payments"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/millikart", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MillikartPageProps = {
  params: { lang: SupportedLocale };
};

export default function MillikartPage({ params }: MillikartPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden px-6 pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-100 via-white to-slate-50 dark:from-slate-900/70 dark:via-slate-950 dark:to-black" />
        <div className="absolute -right-16 top-10 h-64 w-64 rounded-full bg-fuchsia-300/30 blur-3xl dark:bg-fuchsia-500/20" />
        <div className="relative mx-auto max-w-6xl rounded-3xl border border-fuchsia-100 bg-white/80 px-10 py-14 shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-700 dark:border-white/10 dark:bg-white/10 dark:text-white">
                <Sparkle className="h-4 w-4" aria-hidden />
                MilliKart gateway
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                MilliKart Payment Gateway Integration for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                We inherit the archived MilliKart page and use it as fuel for an Azerbaijan-first digital programme. Secure,
                fast, seamless becomes a measurable strategy grounded in narratives, journeys, and governed operations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/free-mlm-software-demo/">Watch the MilliKart demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={buildLocalizedPath("/pricing", locale)}>Review delivery plans</Link>
                </Button>
              </div>
            </div>
            <aside className="space-y-5 rounded-3xl border border-fuchsia-200/60 bg-fuchsia-50/70 p-6 shadow-inner dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-fuchsia-600 dark:text-fuchsia-200">
                Archive to activation
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {HERO_STATS.map((stat) => (
                  <div key={stat.title} className="rounded-2xl border border-white/70 bg-white/80 p-4 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
                      {stat.title}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{stat.figure}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300">{stat.detail}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {STORY_FRAMES.map((frame) => {
                  const Icon = frame.icon;
                  return (
                    <article
                      key={frame.title}
                      className="space-y-3 rounded-2xl border border-white/70 bg-white/80 p-4 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-500/10 text-fuchsia-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold text-slate-900 dark:text-white">{frame.title}</h2>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{frame.description}</p>
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
              Strategic initiatives
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Three initiatives that modernise the MilliKart promise
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
              Narrative, experience, and operations combine to make MilliKart the trusted gateway for distributors,
              executives, and AI copilots.
            </p>
          </header>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {INITIATIVES.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.label}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-fuchsia-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-500/10 text-fuchsia-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
                      {item.label}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{item.outcome}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {item.checklist.map((entry) => (
                      <li key={entry} className="flex items-start gap-2">
                        <ListChecks className="mt-0.5 h-4 w-4 text-fuchsia-500" aria-hidden />
                        <span>{entry}</span>
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
        <div className="mx-auto max-w-6xl gap-10 rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-fuchsia-50 to-slate-50 p-10 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900/60 dark:via-slate-950 dark:to-black lg:grid lg:grid-cols-[0.85fr,1.15fr]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Module stacks aligned with MilliKart telemetry
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              We orchestrate Cloud MLM Software modules into stacks that keep MilliKart insights actionable across teams.
            </p>
            <Link
              href="/payment-gateways/millikart/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-700 hover:text-fuchsia-800 dark:text-fuchsia-200 dark:hover:text-fuchsia-100"
            >
              Review the archived MilliKart page
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {MODULE_BLOCKS.map((block) => {
              const Icon = block.icon;
              return (
                <article
                  key={block.heading}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-inner transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-500/10 text-fuchsia-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{block.heading}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                      {block.subtitle}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-200">
                    {block.bullets.map((bullet) => (
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
              Programme cadence
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              MilliKart activation roadmap
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              A concise timeline that keeps leadership, compliance, and product aligned.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                stage: "Weeks 1-2",
                focus: "Discovery & narrative",
                detail:
                  "Audit MilliKart capabilities, align with regulator expectations, and publish the executive messaging pack.",
                icon: Compass
              },
              {
                stage: "Weeks 3-4",
                focus: "Experience build",
                detail:
                  "Prototype enrolment and payout journeys, configure integrations, and launch telemetry dashboards.",
                icon: DeviceMobile
              },
              {
                stage: "Weeks 5-6",
                focus: "Operational boot",
                detail:
                  "Enable finance and support teams, roll out AI prompt kits, and activate thought-leadership releases.",
                icon: Notebook
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.stage}
                  className="flex flex-col gap-3 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-fuchsia-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-500/10 text-fuchsia-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                      {item.stage}
                    </p>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.focus}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{item.detail}</p>
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
              Geography focus
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Azerbaijan leadership with a Caucasus horizon
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              The archive states MilliKart is trusted across numerous countries. We organise that reach into actionable
              market plays.
            </p>
          </header>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {GEOGRAPHY_FOCUS.map((geo) => (
              <article
                key={geo.country}
                className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-fuchsia-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                    {geo.status}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{geo.country}</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{geo.narrative}</p>
                <Link
                  href={geo.link}
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
            Ready to launch MilliKart excellence with Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Partner with our strategists to embed MilliKart into every journey, dashboard, and AI assistant. Together we will
            lead Azerbaijan’s direct selling payments transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact/">Speak with a payment advisor</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={buildLocalizedPath("/support", locale)}>Coordinate launch workshop</Link>
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
