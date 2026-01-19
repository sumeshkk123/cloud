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
  Circuitry,
  GlobeHemisphereWest,
  Lightning,
  Lock,
  MapPin,
  Pulse,
  Stack,
  TrendUp
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  label: string;
  value: string;
  caption: string;
  icon: IconType;
};

type Phase = {
  title: string;
  description: string;
  outcome: string;
  icon: IconType;
};

type ModuleTile = {
  title: string;
  summary: string;
  points: string[];
  icon: IconType;
};

const HERO_METRICS: HeroMetric[] = [
  {
    label: "Transaction coverage",
    value: "12+ rails",
    caption: "Card, bank transfer, agency, and cash cycle orchestration",
    icon: GlobeHemisphereWest
  },
  {
    label: "Fraud response",
    value: "24/7",
    caption: "Automated alerts and playbooks for finance and compliance teams",
    icon: Lock
  },
  {
    label: "AI briefings",
    value: "Instant",
    caption: "Chatbot-ready summaries for leadership and field enablement",
    icon: TrendUp
  }
];

const PHASES: Phase[] = [
  {
    title: "Signal mapping",
    description:
      "Securely trace every Interswitch request from checkout through settlement, aligning telemetry with compensation scenarios.",
    outcome: "Finance and architecture teams see real-time health dashboards.",
    icon: Circuitry
  },
  {
    title: "Experience rehearsal",
    description:
      "Prototype enrolment, payout, and customer journeys that reflect Interswitch&apos;s fast, seamless behaviour across devices.",
    outcome: "Distributors rehearse flows before launch, reducing support spikes.",
    icon: Lightning
  },
  {
    title: "Launch governance",
    description:
      "Automate escalations, documentation, and AI prompts so Nigeria leadership speaks with one trusted narrative.",
    outcome: "Executives receive measurable proof of secure, compliant operations.",
    icon: Pulse
  }
];

const MODULE_TILES: ModuleTile[] = [
  {
    title: "Revenue ignition",
    summary:
      "Custom Demo, Pre-set Demo, and Features library convert archived content into board-ready messaging that positions Interswitch as the trusted rail.",
    points: [
      "Interactive demo flows that reflect Nigerian pricing, tax, and commission scenarios.",
      "Preset demos for partners to explore card and agency payouts anytime.",
      "Feature narratives optimised for SEO+AIO so analysts, media, and AI assistants stay aligned."
    ],
    icon: Stack
  },
  {
    title: "Financial integrity",
    summary:
      "Multi currency, E-Wallet, and Backup Manager safeguard settlements while providing auditable snapshots of every payment cycle.",
    points: [
      "Multi currency ensures naira to multi-currency conversions mirror live settlement schedules.",
      "E-Wallet opens instant commission releases tied to Interswitch approvals.",
      "Backup Manager keeps recovery checkpoints in sync with regulatory expectations."
    ],
    icon: Bank
  },
  {
    title: "Support intelligence",
    summary:
      "Ticketing, Auto responder, and Knowledge Base packages train teams to resolve payment questions with verified data and AI-ready scripts.",
    points: [
      "Ticket queues flagged by payment type, risk score, and sentiment metadata.",
      "Autoresponders keep customers updated with Nigerian banking calendar context.",
      "Knowledge Base articles synchronised with AI prompt packs for consistent answers."
    ],
    icon: MapPin
  }
];

const COUNTRY_LINK = {
  label: "Nigeria",
  href: "/network-marketing-software-company-providing-affordable-mlm-system-in-nigeria/",
  note:
    "August 28, 2024 — the live archive anchors Nigeria as a primary Interswitch market. That signal guides localisation, compliance, and storytelling priorities."
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Interswitch Payment Gateway for Cloud MLM Software";
  const description =
    "Transform the archived Interswitch Payment Gateway page into a Nigeria-ready launch playbook with metrics, AI narration, and compliant experiences.";

  return {
    title,
    description,
    keywords: [
      "Interswitch payment gateway",
      "Nigeria MLM software payments",
      "secure fast seamless Interswitch",
      "Cloud MLM Software Interswitch integration",
      "Interswitch supported countries Nigeria"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/interswitch", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type InterswitchPageProps = {
  params: { lang: SupportedLocale };
};

export default function InterswitchPage({ params }: InterswitchPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative isolate overflow-hidden rounded-[2.75rem] border border-slate-100 bg-gradient-to-br from-emerald-50 via-white to-slate-50 px-10 py-24 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/40">
        <div className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-emerald-200/50 blur-3xl dark:bg-emerald-500/20" />
        <div className="absolute -bottom-24 left-12 h-72 w-72 rounded-full bg-slate-300/40 blur-3xl dark:bg-slate-800/40" />
        <div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:border-white/10 dark:bg-white/10 dark:text-emerald-200">
              <Lock className="h-4 w-4" aria-hidden />
              Secure • Fast • Seamless
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Interswitch Payment Gateway for Cloud MLM Software
            </h1>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Interswitch Payment Gateway offers secure, fast, and seamless payment solutions for your business. Cloud MLM
              Software transforms the archive into a measurable launch plan that keeps Nigerian stakeholders aligned from demo to
              settlement.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-3 rounded-2xl border border-emerald-200/60 bg-white/85 p-5 shadow-inner transition hover:-translate-y-1 hover:border-emerald-400 dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600 dark:text-emerald-200">
                        {metric.label}
                      </p>
                      <p className="text-2xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                    </div>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{metric.caption}</p>
                  </article>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={buildLocalizedPath("/contact", locale)}>Discuss Interswitch rollout</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={buildLocalizedPath("/pricing", locale)}>Review pricing</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6 rounded-[2.5rem] border border-emerald-100 bg-white/90 p-8 shadow-inner dark:border-white/10 dark:bg-white/5">
            <header className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-md bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:bg-white/10 dark:text-emerald-200">
                Launch phases
              </span>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Convert the archive into operational momentum
              </h2>
            </header>
            <div className="space-y-6">
              {PHASES.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <article key={phase.title} className="flex gap-4 rounded-2xl border border-slate-100 p-5 dark:border-white/10">
                    <div className="flex flex-col items-center">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      {index < PHASES.length - 1 && (
                        <span className="mt-2 h-full w-[2px] bg-gradient-to-b from-emerald-500/50 to-transparent dark:from-white/30" />
                      )}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{phase.title}</h3>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{phase.description}</p>
                      <p className="text-sm font-medium text-emerald-600 dark:text-emerald-200">{phase.outcome}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Platform modules
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Align revenue, finance, and support teams around Interswitch
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              A payment gateway like Interswitch is a crucial service that facilitates online transactions by securely
              transferring payment information between a customer, merchant, and financial institution. We map that capability
              to Cloud MLM Software modules that make the promise tangible.
            </p>
          </header>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {MODULE_TILES.map((tile) => {
              const Icon = tile.icon;
              return (
                <article
                  key={tile.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/60 p-6 shadow-inner transition hover:-translate-y-1 hover:border-emerald-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{tile.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{tile.summary}</p>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {tile.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <ArrowSquareOut className="mt-0.5 h-4 w-4 text-emerald-500" aria-hidden />
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
          <aside className="flex flex-col gap-6 rounded-[2.5rem] border border-emerald-100 bg-gradient-to-br from-emerald-900 via-slate-900 to-black p-10 text-white shadow-sm dark:border-white/10">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight">Payment gateway supported countries</h2>
              <p className="text-sm leading-6 text-slate-100">
                Interswitch is supported in numerous countries, allowing users to make secure payments via Apple devices. We
                capture each market reference so your expansion initiatives match the payment network&apos;s footprint.
              </p>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-sm leading-6 text-slate-100">
              {COUNTRY_LINK.note}
            </div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="justify-center border-white/40 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={COUNTRY_LINK.href} rel="noreferrer">
                Explore Nigeria enablement
              </Link>
            </Button>
          </aside>
          <div className="space-y-6 rounded-[2.5rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-6 dark:border-white/10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600 dark:text-emerald-200">Region</p>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{COUNTRY_LINK.label}</h3>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-emerald-200">
                <MapPin className="h-4 w-4" aria-hidden />
                Priority market
              </span>
            </div>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Nigeria&apos;s direct selling landscape relies on Interswitch&apos;s secure, fast, seamless rails across cards, transfers,
              and agency networks. Cloud MLM Software documents every signal, so finance, compliance, and AI assistants speak with
              one trusted voice.
            </p>
            <div className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              The full list of supported countries lives directly below the hero banner in the archive. We translate that static
              mention into structured launch plans, compliance documentation, and field guidance.
            </div>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-200 dark:hover:text-emerald-100"
            >
              Coordinate regional strategy
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-[2.5rem] border border-emerald-100 bg-gradient-to-tr from-emerald-50 via-white to-slate-50 p-10 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-emerald-900/40 dark:via-slate-950 dark:to-black">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Lead with Interswitch.</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            We operationalise the archive&apos;s secure, fast, seamless commitment into measurable systems, AI-ready content, and
            stakeholder confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/support", locale)}>Connect with enablement</Link>
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
