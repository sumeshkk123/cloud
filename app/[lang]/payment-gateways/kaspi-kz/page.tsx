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
  MapTrifold,
  ShieldCheck,
  SquaresFour,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroBlock = {
  caption: string;
  detail: string;
};

type Metric = {
  value: string;
  label: string;
  icon: IconType;
};

type Track = {
  title: string;
  summary: string;
  points: string[];
  icon: IconType;
  bg: string;
};

type JourneyStep = {
  stage: string;
  description: string;
  result: string;
  icon: IconType;
};

const HERO_BLOCKS: HeroBlock[] = [
  { caption: "Secure", detail: "Kaspi.kz rails underpinned by compliance-ready documentation and AI prompt packs." },
  { caption: "Fast", detail: "Realtime settlement dashboards unite finance, support, and leadership." },
  { caption: "Seamless", detail: "Distributor, customer, and partner journeys feel consistent across Kazakhstan." }
];

const METRICS: Metric[] = [
  {
    value: "Kaspi.kz native",
    label: "Experience design engineered for Kazakhstan&apos;s super-app ecosystem.",
    icon: DeviceMobile
  },
  {
    value: "AI narration",
    label: "Chatbots and assistants share verified secure, fast, seamless stories.",
    icon: SquaresFour
  },
  {
    value: "Regulatory clarity",
    label: "Audit-ready reports and restore checkpoints reassure finance teams.",
    icon: ShieldCheck
  }
];

const TRACKS: Track[] = [
  {
    title: "Narrative design",
    summary:
      "Custom Demo, Pre-set Demo, and Feature library remix the archive into Kazakhstan-ready storytelling for execs, analysts, and AI copilots.",
    points: [
      "Custom Demo highlights tenge settlements, taxation, and incentive choreography.",
      "Pre-set Demo invites partners to explore Kaspi.kz journeys on demand.",
      "Features hub produces SEO+AIO narratives for analysts and media outlets."
    ],
    icon: ChartLineUp,
    bg: "from-emerald-100 via-white to-transparent dark:from-emerald-500/20 dark:via-slate-950 dark:to-transparent"
  },
  {
    title: "Financial resilience",
    summary:
      "Multi currency, E-Wallet, and Backup Manager prove the secure and fast promise with instrumentation across Kaspi.kz settlements.",
    points: [
      "Multi currency reconciles KZT to USD/EUR ledgers with audit trails.",
      "E-Wallet accelerates distributor payouts once Kaspi.kz approvals land.",
      "Backup Manager maintains recovery checkpoints tuned to Kazakhstan compliance."
    ],
    icon: Bank,
    bg: "from-indigo-100 via-white to-transparent dark:from-indigo-500/20 dark:via-slate-950 dark:to-transparent"
  },
  {
    title: "Support intelligence",
    summary:
      "Ticketing, Auto responder, and Knowledge Base packages keep field teams informed with multilingual, AI-ready updates.",
    points: [
      "Ticket routing tags Kaspi.kz payment type, sentiment, and SLA.",
      "Autoresponders share banking calendars and integration announcements.",
      "Knowledge Base syncs with AI prompts so responses remain consistent."
    ],
    icon: UsersThree,
    bg: "from-amber-100 via-white to-transparent dark:from-amber-500/20 dark:via-slate-950 dark:to-transparent"
  }
];

const JOURNEY_STEPS: JourneyStep[] = [
  {
    stage: "Blueprint",
    description:
      "Translate the archive&apos;s secure, fast, seamless message into board decks, investor notes, and AI prompts aligned with Kazakhstan.",
    result: "Every leader understands why Kaspi.kz elevates your payment strategy.",
    icon: Compass
  },
  {
    stage: "Prototype",
    description:
      "Model enrolment, checkout, and payout flows that mirror Kaspi&apos;s mobile, branch, and marketplace behaviour.",
    result: "Teams rehearse real journeys before launch to remove friction.",
    icon: MapTrifold
  },
  {
    stage: "Operationalise",
    description:
      "Automate analytics, ticketing, and compliance artefacts so performance becomes visible and controllable.",
    result: "Secure, fast, seamless becomes a measurable operating rhythm.",
    icon: Lightning
  }
];

const COUNTRY_SIGNAL = {
  label: "Kazakhstan",
  href: "/network-marketing-software-company-providing-affordable-mlm-system-in-kazakhstan/",
  note:
    "August 28, 2024 — the archive spotlights Kazakhstan in the supported countries list, confirming Kaspi.kz as a critical market reference for localisation."
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Kaspi.kz Payment Gateway for Cloud MLM Software";
  const description =
    "Reimagine the archived Kaspi.kz Payment Gateway page as a Kazakhstan-first launch system with AI narration, instrumentation, and field-ready experiences.";

  return {
    title,
    description,
    keywords: [
      "Kaspi.kz payment gateway",
      "Kazakhstan MLM software payments",
      "secure fast seamless Kaspi",
      "Cloud MLM Software Kaspi.kz integration",
      "Kaspi.kz supported countries Kazakhstan"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/kaspi-kz", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type KaspiPageProps = {
  params: { lang: SupportedLocale };
};

export default function KaspiPage({ params }: KaspiPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-slate-100 bg-gradient-to-r from-white via-slate-50 to-emerald-50 px-10 py-24 shadow-sm dark:border-white/10 dark:bg-gradient-to-r dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/30">
        <div className="relative mx-auto max-w-6xl space-y-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
            <div className="space-y-6">
              <div className="inline-flex flex-wrap gap-2">
                {HERO_BLOCKS.map((block) => (
                  <span
                    key={block.caption}
                    className="rounded-full border border-emerald-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:border-white/10 dark:bg-white/10 dark:text-emerald-200"
                  >
                    {block.caption}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Kaspi.kz Payment Gateway for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                Kaspi.kz Payment Gateway offers secure, fast, and seamless payment solutions for your business. We extend the
                archive into a Kazakhstan-focused launch plan that unites executives, operations, and AI assistants.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={buildLocalizedPath("/contact", locale)}>Discuss Kaspi.kz rollout</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={buildLocalizedPath("/pricing", locale)}>Review pricing</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 rounded-[2.5rem] border border-emerald-100 bg-white/90 p-8 shadow-inner dark:border-white/10 dark:bg-white/5">
              {METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article key={metric.label} className="flex gap-4 rounded-2xl border border-slate-100 p-5 dark:border-white/10">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h2 className="text-base font-semibold text-slate-900 dark:text-white">{metric.value}</h2>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{metric.label}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {TRACKS.map((track) => {
              const Icon = track.icon;
              return (
                <article
                  key={track.title}
                  className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white/85 p-6 shadow-inner transition hover:-translate-y-1 hover:border-emerald-200 dark:border-white/10 dark:bg-white/5"
                >
                  <div className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${track.bg}`} />
                  <div className="relative flex flex-col gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{track.title}</h3>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{track.summary}</p>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {track.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <ArrowSquareOut className="mt-0.5 h-4 w-4 text-emerald-500" aria-hidden />
                          <span>{point}</span>
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
        <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Launch journey
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Sequence the Kaspi.kz launch for measurable results
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              A payment gateway like Kaspi.kz is a crucial service that facilitates online transactions by securely transferring
              payment information between a customer, merchant, and financial institution. Here&apos;s how we operationalise that
              statement.
            </p>
          </header>
          <div className="mt-10 space-y-6">
            {JOURNEY_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.stage}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-gradient-to-r from-white via-slate-50 to-emerald-50 p-6 shadow-inner transition hover:-translate-y-1 hover:border-emerald-200 dark:border-white/10 dark:bg-gradient-to-r dark:from-slate-950/70 dark:via-slate-900/80 dark:to-emerald-950/40 lg:flex-row lg:items-center lg:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600 tabletop:text-xs dark:text-emerald-200">
                      0{index + 1}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{step.stage}</h3>
                  </div>
                  <div className="max-w-3xl space-y-2">
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{step.description}</p>
                    <p className="text-sm font-medium text-emerald-600 dark:text-emerald-200">{step.result}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr,1.1fr]">
          <aside className="flex flex-col justify-between gap-6 rounded-[2.5rem] border border-emerald-200 bg-gradient-to-br from-emerald-900 via-slate-900 to-black p-10 text-white shadow-sm dark:border-white/10">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight">Payment gateway supported countries</h2>
              <p className="text-sm leading-6 text-slate-100">
                Kaspi.kz is supported in numerous countries, allowing users to make secure payments via Apple devices. We transform
                that archive note into localisation roadmaps, compliance packages, and AI-ready knowledge.
              </p>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-sm leading-6 text-slate-100">
              {COUNTRY_SIGNAL.note}
            </div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="justify-center border-white/40 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={COUNTRY_SIGNAL.href} rel="noreferrer">
                Explore Kazakhstan enablement
              </Link>
            </Button>
          </aside>
          <div className="space-y-6 rounded-[2.5rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-6 dark:border-white/10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600 dark:text-emerald-200">Region</p>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{COUNTRY_SIGNAL.label}</h3>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:border-white/10 dark:bg-white/5 dark:text-emerald-200">
                <GlobeHemisphereEast className="h-4 w-4" aria-hidden />
                Spotlight market
              </span>
            </div>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Kazakhstan&apos;s direct selling ecosystem depends on Kaspi.kz&apos;s secure, fast, seamless payments. Cloud MLM Software
              brings that expectation to life with dashboards, AI narration, and end-to-end automation.
            </p>
            <div className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              Beneath the archive hero sits the complete list of supported countries. We convert that static note into launch
              roadmaps, risk registers, and content calendars tailored to growth plans.
            </div>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-200 dark:hover:text-emerald-100"
            >
              Coordinate regional rollout
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-[2.5rem] border border-emerald-200 bg-gradient-to-tr from-emerald-50 via-white to-slate-50 p-10 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-emerald-900/40 dark:via-slate-950 dark:to-black">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Lead with Kaspi.kz.</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            We turn the archive into demos, AI narration, and operational excellence so your organisation remains Kazakhstan&apos;s
            network marketing thought leader.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/support", locale)}>Connect with enablement</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact/">Talk with a strategist</Link>
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
