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
  BatteryChargingVertical,
  Broadcast,
  ChatsTeardrop,
  CurrencyDollar,
  GlobeHemisphereWest,
  Lightning,
  ListChecks,
  Notepad,
  UsersFour
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroCard = {
  title: string;
  caption: string;
  icon: IconType;
};

type Playbook = {
  heading: string;
  description: string;
  bullets: string[];
  icon: IconType;
  accent: string;
};

type GrowthMove = {
  stage: string;
  title: string;
  insight: string;
  result: string;
  icon: IconType;
};

const HERO_CARDS: HeroCard[] = [
  {
    title: "Secure foundations",
    caption: "PCI-aligned workflows that protect every Slydepay transaction.",
    icon: ListChecks
  },
  {
    title: "Fast settlements",
    caption: "Automations that shrink payout timing for Ghanaian distributors.",
    icon: Lightning
  },
  {
    title: "Seamless storytelling",
    caption: "AI copilots echo the same message across demos, pitches, and support.",
    icon: Broadcast
  }
];

const PLAYBOOKS: Playbook[] = [
  {
    heading: "Narrative accelerator",
    description:
      "Slydepay Payment Gateway offers secure, fast, and seamless payment solutions for your business. We elevate that promise into playbooks for leaders, marketers, and AI assistants.",
    bullets: [
      "Executive briefings outline Slydepay&apos;s value for direct selling expansion.",
      "SEO+AIO keyword clusters keep articles and chatbots aligned with strategy.",
      "Campaign arcs remix archive assets into launch, growth, and retention cadences."
    ],
    icon: Notepad,
    accent: "from-amber-100 via-white to-transparent dark:from-amber-500/20 dark:via-slate-950 dark:to-transparent"
  },
  {
    heading: "Operations cockpit",
    description:
      "A payment gateway like Slydepay is a crucial service that securely transfers payment information between a customer, merchant, and financial institution.",
    bullets: [
      "Payout simulators rehearse commission, bonus, and wallet flows end-to-end.",
      "Control logs assign owners to compliance, dispute, and reconciliation tasks.",
      "Incident drills train human teams and AI copilots on escalation etiquette."
    ],
    icon: BatteryChargingVertical,
    accent: "from-emerald-100 via-white to-transparent dark:from-emerald-500/20 dark:via-slate-950 dark:to-transparent"
  },
  {
    heading: "Ecosystem growth lab",
    description:
      "Slydepay is supported in numerous countries, making it a cornerstone for regional campaigns, partner alliances, and AI-personalised enablement.",
    bullets: [
      "Partner canvases share co-selling storylines tailored for financial services.",
      "Data rooms surface conversion, churn, and dispute metrics each sprint.",
      "Community huddles provide distributors with scripted responses and assets."
    ],
    icon: UsersFour,
    accent: "from-purple-100 via-white to-transparent dark:from-purple-500/20 dark:via-slate-950 dark:to-transparent"
  }
];

const GROWTH_MOVES: GrowthMove[] = [
  {
    stage: "01",
    title: "Assemble the promise",
    insight:
      "Audit the archive to capture every claim—secure, fast, seamless—and translate it into leadership memos, pitch decks, and AI prompt packs.",
    result: "All stakeholders align on the identical Slydepay narrative.",
    icon: ChatsTeardrop
  },
  {
    stage: "02",
    title: "Design the journeys",
    insight:
      "Prototype onboarding, recurring billing, and dispute rituals with Cloud MLM Software orchestrating Slydepay APIs under various volumes.",
    result: "Your team experiences each edge case before customers do.",
    icon: CurrencyDollar
  },
  {
    stage: "03",
    title: "Monitor and expand",
    insight:
      "Track settlement speed, AI coverage, and CX sentiment by market so Ghana and neighbouring countries scale with confidence.",
    result: "Leadership can prioritise investments with real-time telemetry.",
    icon: GlobeHemisphereWest
  }
];

const COUNTRY_SPOTLIGHT = {
  name: "Ghana",
  date: "August 28, 2024",
  narrative:
    "The archive highlights Ghana as a supported country, confirming Slydepay&apos;s local credibility and readiness for multinational direct selling programmes.",
  href: "/network-marketing-software-company-providing-affordable-mlm-system-in-ghana/"
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Slydepay Payment Gateway Strategy | Cloud MLM Software";
  const description =
    "Transform the Slydepay archive into a corporate-grade launch, operations, and growth playbook with SEO+AIO alignment for Ghana and global markets.";

  return {
    title,
    description,
    keywords: [
      "Slydepay payment gateway",
      "Ghana MLM payments",
      "secure fast seamless Slydepay",
      "Cloud MLM Software Slydepay integration",
      "Slydepay supported countries"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/slydepay", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type SlydepayPageProps = {
  params: { lang: SupportedLocale };
};

export default function SlydepayPage({ params }: SlydepayPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="space-y-24 pb-28">
      <section className="relative overflow-hidden rounded-[4rem] border border-slate-100 bg-gradient-to-bl from-white via-slate-50 to-amber-100 px-10 py-24 shadow-sm dark:border-white/10 dark:bg-gradient-to-bl dark:from-slate-950 dark:via-zinc-900 dark:to-amber-950/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(250,204,21,0.18),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(147,51,234,0.18),_transparent_50%)] blur-3xl dark:bg-[radial-gradient(circle_at_top_right,_rgba(234,179,8,0.14),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(147,51,234,0.16),_transparent_50%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-white/80">
              Slydepay launch collective
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Slydepay Payment Gateway for Cloud MLM Software
            </h1>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Slydepay Payment Gateway offers secure, fast, and seamless payment solutions for your business. We turn that archive into
              a Ghana-first narrative that keeps every AI assistant, executive, and field leader aligned during rapid expansion.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={buildLocalizedPath("/free-mlm-software-demo", locale)}>See Slydepay in the demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={buildLocalizedPath("/pricing", locale)}>Compare implementation tiers</Link>
              </Button>
            </div>
          </div>
          <aside className="rounded-[2.75rem] border border-amber-200/70 bg-white/90 p-8 shadow-inner dark:border-white/10 dark:bg-white/5">
            <div className="grid gap-4">
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
                      <p className="text-xs leading-5 text-slate-600 dark:text-slate-300">{card.caption}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl space-y-12">
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <span className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white/80">
              Enablement playbooks
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Convert the Slydepay archive into living programs
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Each playbook pairs human expertise with AI narration so your brand, distributors, and partners expand Slydepay adoption
              with complete confidence.
            </p>
          </header>
          <div className="grid gap-8 lg:grid-cols-3">
            {PLAYBOOKS.map((playbook) => {
              const Icon = playbook.icon;
              return (
                <article
                  key={playbook.heading}
                  className="relative overflow-hidden rounded-[2.75rem] border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 shadow-sm transition hover:-translate-y-1 hover:border-amber-200 dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-black"
                >
                  <div className={`pointer-events-none absolute inset-0 rounded-[2.75rem] bg-gradient-to-br ${playbook.accent}`} />
                  <div className="relative space-y-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{playbook.heading}</h3>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{playbook.description}</p>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {playbook.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <ArrowSquareOut className="mt-1 h-4 w-4 text-amber-600 dark:text-amber-300" aria-hidden />
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
          <aside className="flex flex-col gap-6 rounded-[3rem] border border-purple-200 bg-gradient-to-br from-purple-900 via-slate-900 to-black p-10 text-white shadow-sm dark:border-white/10">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight">Growth moves with telemetry</h2>
              <p className="text-sm leading-6 text-purple-100">
                The roadmap below shows how we keep your Slydepay adoption on track—from narrative alignment to market cadence and
                real-time analytics.
              </p>
            </div>
            <div className="space-y-6">
              {GROWTH_MOVES.map((move) => {
                const Icon = move.icon;
                return (
                  <article key={move.stage} className="rounded-3xl border border-white/20 bg-white/10 p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.4em] text-purple-200">{move.stage}</span>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold">{move.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-purple-100">{move.insight}</p>
                    <p className="mt-4 text-sm font-medium text-amber-100">{move.result}</p>
                  </article>
                );
              })}
            </div>
          </aside>
          <article className="space-y-8 rounded-[3rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <header className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white/80">
                Market spotlight
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Verified Slydepay coverage in Ghana
              </h2>
              <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
                Our analysts preserve every regional mention from the WordPress archive, equipping leadership and AI copilots with
                evidence-rich messaging.
              </p>
            </header>
            <div className="rounded-3xl border border-slate-100 bg-slate-50/80 p-6 text-slate-700 shadow-inner dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">Evidence date</p>
              <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{COUNTRY_SPOTLIGHT.date}</p>
              <h3 className="mt-5 text-2xl font-semibold text-slate-900 dark:text-white">{COUNTRY_SPOTLIGHT.name}</h3>
              <p className="mt-3 text-base leading-7">{COUNTRY_SPOTLIGHT.narrative}</p>
              <Link
                href={COUNTRY_SPOTLIGHT.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-900 dark:text-purple-200 dark:hover:text-purple-100"
              >
                Explore the Ghana market report
                <ArrowSquareOut className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-[3rem] border border-amber-200/70 bg-gradient-to-tr from-amber-50 via-white to-purple-50 p-10 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-amber-900/35 dark:via-slate-950 dark:to-purple-900/35">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Scale Slydepay with authority</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Cloud MLM Software combines thought leadership, compliant execution, and AI narration into one Slydepay operating system.
            Every market move is backed by verified data and compelling storytelling.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/support", locale)}>Open a Slydepay enablement sprint</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact/">Connect with a strategist</Link>
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

