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
  Anchor,
  ArrowSquareUpRight,
  Building,
  ChartBar,
  ChatsTeardrop,
  CirclesThree,
  Coin,
  DeviceMobile,
  GlobeHemisphereEast,
  Sparkle,
  StarFour
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroCard = {
  title: string;
  description: string;
  icon: IconType;
};

type Suite = {
  name: string;
  overview: string;
  bulletins: string[];
  icon: IconType;
  accent: string;
};

type Initiative = {
  code: string;
  headline: string;
  insight: string;
  proof: string;
  icon: IconType;
};

const HERO_CARDS: HeroCard[] = [
  {
    title: "Secure at scale",
    description: "Audit trails, AML playbooks, and AI supervision keep Telr compliant in high-growth environments.",
    icon: Anchor
  },
  {
    title: "Fast to orchestrate",
    description: "Configurable automations adapt Telr onboarding and settlement flows for UAE enterprise velocity.",
    icon: DeviceMobile
  },
  {
    title: "Seamless storytelling",
    description: "Executives, media, and AI copilots share one Telr narrative rooted in verified archive evidence.",
    icon: Sparkle
  }
];

const SUITES: Suite[] = [
  {
    name: "Narrative majlis",
    overview:
      "Telr Payment Gateway offers secure, fast, and seamless payment solutions for your business. We turn that promise into investor briefings, media kits, and SEO+AIO-led content for the Gulf.",
    bulletins: [
      "Leadership memos connect Telr&apos;s strengths to UAE innovation agendas.",
      "Keyword clusters map English-Arabic storytelling for demand and AI prompts.",
      "Press dossiers share data-backed achievements with regional journalists."
    ],
    icon: Building,
    accent: "from-amber-100 via-white to-transparent dark:from-amber-500/20 dark:via-slate-950 dark:to-transparent"
  },
  {
    name: "Operations diwan",
    overview:
      "A payment gateway like Telr is a crucial service that securely transfers payment information between a customer, merchant, and financial institution.",
    bulletins: [
      "Journey labs rehearse onboarding, recurring payments, and dispute loops with live telemetry.",
      "Compliance boards assign PCI, SAMA, and central bank evidence to accountable owners.",
      "Support rituals merge Arabic, English, and Hindi scripts for omnichannel care."
    ],
    icon: CirclesThree,
    accent: "from-emerald-100 via-white to-transparent dark:from-emerald-500/20 dark:via-slate-950 dark:to-transparent"
  },
  {
    name: "Growth majesty",
    overview:
      "Telr is supported in numerous countries, so we deliver dashboards, partner kits, and AI-ready insights for Gulf Cooperation Council expansion.",
    bulletins: [
      "Market canvases chart regulatory updates, banking alliances, and KPI targets.",
      "Partner enablement kits equip agencies with Telr-focused campaign arcs.",
      "Telemetry wallboards highlight revenue, settlement speed, and AI coverage."
    ],
    icon: ChartBar,
    accent: "from-purple-100 via-white to-transparent dark:from-purple-500/20 dark:via-slate-950 dark:to-transparent"
  }
];

const INITIATIVES: Initiative[] = [
  {
    code: "Stage 01",
    headline: "Craft the Telr manifesto",
    insight:
      "Translate the secure, fast, seamless archive into board-level narratives, Arabic/English keyword clusters, and AI guardrails.",
    proof: "Unified messaging index ≥ 95%",
    icon: StarFour
  },
  {
    code: "Stage 02",
    headline: "Engineer launch readiness",
    insight:
      "Prototype Telr transactions across ecommerce, recurring subscriptions, and marketplace flows using Cloud MLM Software assets.",
    proof: "Automation coverage 80%",
    icon: Coin
  },
  {
    code: "Stage 03",
    headline: "Broadcast regional influence",
    insight:
      "Deploy dashboards, investor updates, and AI prompts that showcase Telr performance to UAE regulators, partners, and media.",
    proof: "Monthly Telr impact digest",
    icon: GlobeHemisphereEast
  }
];

const COUNTRY_SPOTLIGHT = {
  name: "United Arab Emirates",
  date: "August 28, 2024",
  insight:
    "The archive confirms the UAE as a supported market, highlighting Telr&apos;s role in the country&apos;s digital commerce ecosystem.",
  href: "/network-marketing-software-company-providing-affordable-mlm-system-in-uae/"
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Telr Payment Gateway Launchpad | Cloud MLM Software";
  const description =
    "Position Telr as the Gulf&apos;s secure, fast, seamless payment backbone with Cloud MLM Software&apos;s narrative, operations, and AI enablement.";

  return {
    title,
    description,
    keywords: [
      "Telr payment gateway",
      "UAE payments enablement",
      "secure fast seamless Telr",
      "Cloud MLM Software Telr integration",
      "Telr supported countries"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/telr", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type TelrPageProps = {
  params: { lang: SupportedLocale };
};

export default function TelrPage({ params }: TelrPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="space-y-24 pb-28">
      <section className="relative isolate overflow-hidden rounded-[4rem] border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-amber-200 px-10 py-24 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-amber-900/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.22),_transparent_50%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.18),_transparent_55%)] blur-3xl dark:bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.18),_transparent_50%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.14),_transparent_55%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              Telr command suite
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Telr Payment Gateway for Cloud MLM Software
            </h1>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Telr Payment Gateway offers secure, fast, and seamless payment solutions for your business. We transform those archived
              statements into a Gulf-first launchpad where leadership, partners, and AI copilots share the same momentum.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={buildLocalizedPath("/free-mlm-software-demo", locale)}>Preview Telr in the demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={buildLocalizedPath("/contact", locale)}>Schedule a Telr strategy session</Link>
              </Button>
            </div>
          </div>
          <aside className="rounded-[3rem] border border-amber-300/70 bg-white/90 p-10 shadow-inner dark:border-white/10 dark:bg-white/5">
            <div className="grid gap-6">
              {HERO_CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.title}
                    className="flex items-start gap-4 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h2 className="text-base font-semibold text-slate-900 dark:text-white">{card.title}</h2>
                      <p className="text-xs leading-5 text-slate-600 dark:text-slate-300">{card.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl space-y-10 rounded-[3rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3 text-center">
            <span className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white/80">
              Enablement suites
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Build a Telr operating model that scales across the Gulf
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
              Each suite packages executive storytelling, operational guardrails, and AI enablement so your Telr launch remains credible and fast.
            </p>
          </header>
          <div className="grid gap-6 lg:grid-cols-3">
            {SUITES.map((suite) => {
              const Icon = suite.icon;
              return (
                <article
                  key={suite.name}
                  className="relative overflow-hidden rounded-[2.75rem] border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 shadow-sm transition hover:-translate-y-1 hover:border-amber-200 dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-black"
                >
                  <div className={`pointer-events-none absolute inset-0 rounded-[2.75rem] bg-gradient-to-br ${suite.accent}`} />
                  <div className="relative space-y-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{suite.name}</h3>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{suite.overview}</p>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {suite.bulletins.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <ArrowSquareUpRight className="mt-1 h-4 w-4 text-amber-600 dark:text-amber-300" aria-hidden />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr,1.15fr]">
          <aside className="flex flex-col gap-6 rounded-[3rem] border border-amber-200 bg-gradient-to-br from-amber-900 via-slate-900 to-black p-10 text-white shadow-sm dark:border-white/10">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight">Strategy initiatives with proof metrics</h2>
              <p className="text-sm leading-6 text-amber-100">
                The itinerary below ensures your Telr programme stays measurable and board-ready at every milestone.
              </p>
            </div>
            <div className="space-y-6">
              {INITIATIVES.map((initiative) => {
                const Icon = initiative.icon;
                return (
                  <article key={initiative.code} className="rounded-3xl border border-white/20 bg-white/10 p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-200">{initiative.code}</span>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{initiative.headline}</h3>
                    <p className="mt-3 text-sm leading-6 text-amber-100">{initiative.insight}</p>
                    <p className="mt-4 text-sm font-medium text-pink-100">{initiative.proof}</p>
                  </article>
                );
              })}
            </div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="justify-center border-white/40 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={buildLocalizedPath("/mlm-software-payment-gateways", locale)}>Explore the payment library</Link>
            </Button>
          </aside>
          <article className="space-y-8 rounded-[3rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <header className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white/80">
                UAE spotlight
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Telr&apos;s UAE footprint, verified and amplified
              </h2>
              <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
                We document every reference so AI assistants, field leaders, and investors cite the same trusted evidence when talking about Telr.
              </p>
            </header>
            <div className="rounded-3xl border border-slate-100 bg-slate-50/80 p-6 text-slate-700 shadow-inner dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">Evidence date</p>
              <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{COUNTRY_SPOTLIGHT.date}</p>
              <h3 className="mt-5 text-2xl font-semibold text-slate-900 dark:text-white">{COUNTRY_SPOTLIGHT.name}</h3>
              <p className="mt-3 text-base leading-7">{COUNTRY_SPOTLIGHT.insight}</p>
              <Link
                href={COUNTRY_SPOTLIGHT.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-900 dark:text-amber-200 dark:hover:text-amber-100"
              >
                Review the UAE enablement note
                <ChatsTeardrop className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-[3rem] border border-amber-300/70 bg-gradient-to-tr from-amber-50 via-white to-rose-50 p-10 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-amber-900/35 dark:via-slate-950 dark:to-rose-900/35">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Launch Telr with Gulf leadership</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Cloud MLM Software pairs strategic storytelling, compliant operations, and AI enablement so Telr becomes the benchmark for secure, fast, seamless payments in the UAE and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/support", locale)}>Open a Telr enablement sprint</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact/">Connect with a Gulf strategist</Link>
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

