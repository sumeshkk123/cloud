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

type HeroBadge = {
  label: string;
  value: string;
  detail: string;
};

type StoryBlock = {
  title: string;
  description: string;
  icon: IconType;
};

type Initiative = {
  heading: string;
  paragraph: string;
  bullets: string[];
  icon: IconType;
};

type ModuleSuite = {
  title: string;
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

const HERO_BADGES: HeroBadge[] = [
  {
    label: "Archive",
    value: "28 Aug 2024",
    detail: "MoMo WordPress page describing secure, fast, seamless payments."
  },
  {
    label: "Launch region",
    value: "Vietnam first",
    detail: "Ho Chi Minh City, Hanoi, and Da Nang distributor ecosystems prioritised."
  },
  {
    label: "Acceleration",
    value: "6-week sprint",
    detail: "From discovery to AI-ready workflows and dashboards."
  }
];

const STORY_BLOCKS: StoryBlock[] = [
  {
    title: "Secure, fast, seamless → measurable outcomes",
    description:
      "We convert the archived narrative into compliance artefacts, executive briefs, and AI prompts aligned with Vietnam’s regulatory climate.",
    icon: ShieldCheck
  },
  {
    title: "Mobile-first journeys",
    description:
      "MoMo’s dominance in mobile payments shapes onboarding, checkout, and payout experiences that feel native to Vietnamese users.",
    icon: DeviceMobile
  },
  {
    title: "Regional expansion",
    description:
      "Playbooks extend to Cambodia, Laos, and the ASEAN corridor with localisation, language support, and telemetry dashboards.",
    icon: GlobeHemisphereEast
  }
];

const INITIATIVES: Initiative[] = [
  {
    heading: "Narrative runway",
    paragraph: "Align leadership, marketing, and AI assistants with a single MoMo story.",
    bullets: [
      "Executive brief reframing secure, fast, seamless for investors and analysts.",
      "SEO & AIO keyword clusters highlighting Vietnam, MoMo, and direct selling.",
      "Prompt libraries ensuring chatbots and copilots provide compliant answers."
    ],
    icon: Broadcast
  },
  {
    heading: "Experience blueprint",
    paragraph: "Design mobile and desktop journeys that show MoMo convenience in action.",
    bullets: [
      "Prototypes for onboarding, checkout, payout, and loyalty experiences.",
      "Instrumentation to capture conversion, decline remediation, and fraud signals.",
      "Localized content and tone for Vietnamese and English audiences."
    ],
    icon: MapPin
  },
  {
    heading: "Operational intelligence",
    paragraph: "Deliver measurable insights for finance, support, and growth teams.",
    bullets: [
      "Multi currency automation for VND, USD, and regional settlement flows.",
      "Support playbooks combining AI suggestions with human escalation paths.",
      "Dashboards covering retention, churn, and plan profitability."
    ],
    icon: ChartLineUp
  }
];

const MODULE_SUITES: ModuleSuite[] = [
  {
    title: "Revenue accelerator",
    subtitle: "Custom Demo • Multi currency • E-Commerce Integration",
    bullets: [
      "Showcase MoMo flows with KPI overlays tailored for enterprise buyers.",
      "Balance VND and foreign currency ledgers with audit-ready controls.",
      "Embed MoMo connectors into Shopify, WooCommerce, and custom apps."
    ],
    icon: SquaresFour
  },
  {
    title: "Member assurance",
    subtitle: "E-Wallet • Backup Manager • Ticket System",
    bullets: [
      "Deliver instant payouts triggered by MoMo settlement confirmations.",
      "Maintain encrypted backups aligned to Vietnamese data policies.",
      "Resolve payment tickets with AI summaries and SLA visibility."
    ],
    icon: UsersThree
  },
  {
    title: "Growth storytelling",
    subtitle: "Auto Responder • Documents • Analytics Packs",
    bullets: [
      "Send lifecycle messaging when payment events or plan milestones occur.",
      "Publish leadership decks positioning Cloud MLM Software as MoMo’s thought partner.",
      "Monitor compensation health and expansion velocity in live dashboards."
    ],
    icon: TrendUp
  }
];

const MARKET_ROUTES: MarketRoute[] = [
  {
    region: "Vietnam",
    status: "Operational now",
    insight:
      "MoMo is woven into Vietnam’s daily commerce. We bring localisation, compliance alignment, and distributor enablement into one programme.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-vietnam/"
  },
  {
    region: "Greater Mekong",
    status: "Expansion in motion",
    insight:
      "Extend MoMo learnings into Cambodia, Laos, and neighbouring markets with language kits, tax logic, and AI knowledge bases.",
    link: "/contact/"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MoMo Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Translate MoMo’s secure, fast, seamless promise into Vietnam-first growth. Cloud MLM Software delivers AI-ready narratives, mobile-first experiences, and governed operations.";

  return {
    title,
    description,
    keywords: [
      "MoMo payment gateway",
      "MoMo Cloud MLM Software integration",
      "Vietnam MLM payments",
      "Southeast Asia payment orchestration",
      "AI optimized fintech enablement"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/momo", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MomoPageProps = {
  params: { lang: SupportedLocale };
};

export default function MomoPage({ params }: MomoPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden px-6 pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-amber-50 dark:from-slate-900/70 dark:via-slate-950 dark:to-black" />
        <div className="absolute left-12 top-8 h-56 w-56 rounded-full bg-rose-200/50 blur-3xl dark:bg-rose-500/20" />
        <div className="absolute right-10 top-24 h-44 w-44 rounded-full bg-orange-200/50 blur-3xl dark:bg-orange-500/20" />
        <div className="relative mx-auto max-w-6xl rounded-3xl border border-rose-100 bg-white/90 px-10 py-14 shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-rose-700 dark:border-white/10 dark:bg-white/10 dark:text-white">
                <Sparkle className="h-4 w-4" aria-hidden />
                MoMo gateway
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                MoMo Payment Gateway Integration for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                The archive already promises MoMo as secure, fast, seamless. We turn that statement into a Vietnam-first
                launch programme with stories, journeys, and operations synchronised for measurable outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/free-mlm-software-demo/">Request MoMo demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={buildLocalizedPath("/support", locale)}>Plan your launch workshop</Link>
                </Button>
              </div>
            </div>
            <aside className="space-y-5 rounded-3xl border border-rose-200/60 bg-rose-50/80 p-6 shadow-inner dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-600 dark:text-rose-200">
                Archive insights
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {HERO_BADGES.map((badge) => (
                  <div key={badge.label} className="rounded-2xl border border-white/70 bg-white/85 p-4 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">
                      {badge.label}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{badge.value}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300">{badge.detail}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {STORY_BLOCKS.map((block) => {
                  const Icon = block.icon;
                  return (
                    <article
                      key={block.title}
                      className="space-y-3 rounded-2xl border border-white/70 bg-white/85 p-4 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold text-slate-900 dark:text-white">{block.title}</h2>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{block.description}</p>
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
              Three initiatives that make MoMo measurable
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
              Narrative, experience, and operations combine so secure, fast, seamless isn’t just copy—it’s validated by data.
            </p>
          </header>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {INITIATIVES.map((initiative) => {
              const Icon = initiative.icon;
              return (
                <article
                  key={initiative.heading}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-rose-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{initiative.heading}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-200">{initiative.paragraph}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {initiative.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Notebook className="mt-0.5 h-4 w-4 text-rose-500" aria-hidden />
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
        <div className="mx-auto max-w-6xl gap-8 rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-rose-50 to-slate-50 p-10 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900/60 dark:via-slate-950 dark:to-black lg:grid lg:grid-cols-[0.85fr,1.15fr]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Module suites tuned to MoMo telemetry
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Every suite keeps your teams aligned, from revenue to support to growth analytics.
            </p>
            <Link
              href="/payment-gateways/momo/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-rose-700 hover:text-rose-800 dark:text-rose-200 dark:hover:text-rose-100"
            >
              View the archived MoMo page
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {MODULE_SUITES.map((suite) => {
              const Icon = suite.icon;
              return (
                <article
                  key={suite.title}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-inner transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{suite.title}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                      {suite.subtitle}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-200">
                    {suite.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Lightning className="mt-0.5 h-4 w-4 text-rose-500" aria-hidden />
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
              Field enablement
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Equip distributors to become MoMo ambassadors
            </h2>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Knowledge hubs",
                detail:
                  "Localized documentation and AI copilots answer payment questions instantly for field teams.",
                icon: Notebook
              },
              {
                title: "Engagement campaigns",
                detail:
                  "Auto Responder and broadcast sequences highlight new MoMo offers, rates, and compliance reminders.",
                icon: Broadcast
              },
              {
                title: "Support insights",
                detail:
                  "Ticket analytics surface top pain points, enabling leadership to act quickly with data.",
                icon: UsersThree
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="flex flex-col gap-3 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-rose-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
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
              Market routes
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Vietnam leadership with Mekong expansion ready
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              The archive highlighted MoMo availability in numerous countries. We structure that reach into staged action
              plans.
            </p>
          </header>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {MARKET_ROUTES.map((route) => (
              <article
                key={route.region}
                className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-rose-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
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
                  className="inline-flex items-center gap-2 text-sm font-semibold text-rose-700 hover:text-rose-800 dark:text-rose-200 dark:hover:text-rose-100"
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
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-rose-200 bg-rose-50/80 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to lead with MoMo and Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Partner with us to activate MoMo across narratives, journeys, and operations. Secure, fast, seamless becomes a
            measurable reality.
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
