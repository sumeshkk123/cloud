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
  Compass,
  DeviceMobile,
  GlobeHemisphereWest,
  Lightning,
  Mountains,
  ShieldCheck,
  SquaresFour,
  WaveTriangle,
  Wind
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroStrip = {
  title: string;
  detail: string;
  icon: IconType;
};

type Capability = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type ExecutionStage = {
  number: string;
  focus: string;
  description: string;
  outcome: string;
  icon: IconType;
};

const HERO_STRIPS: HeroStrip[] = [
  {
    title: "Secure",
    detail: "PCI-ready controls, audit trails, and Nordic regulatory documentation underpin every claim.",
    icon: ShieldCheck
  },
  {
    title: "Fast",
    detail: "Dashboards visualise authorisations, settlements, and KPIs in real time for Icelandic operations.",
    icon: Lightning
  },
  {
    title: "Seamless",
    detail: "Digital and in-person journeys mirror Iceland’s omni-channel expectations across enrolment to payouts.",
    icon: DeviceMobile
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Narrative design",
    summary:
      "Custom Demo, Pre-set Demo, and Feature hub reshape the archive into Iceland-ready storytelling for executives, partners, and AI assistants.",
    bullets: [
      "Custom Demo mirrors krona settlements, taxation, and incentive choreography.",
      "Pre-set Demo offers agencies guided Korta experiences on demand.",
      "Feature hub delivers SEO+AIO copy that analysts and AI copilots echo."
    ],
    icon: Compass
  },
  {
    title: "Financial resilience",
    summary:
      "Multi currency, E-Wallet, and Backup Manager align the fast promise with measurable instrumentation across Korta’s rails.",
    bullets: [
      "Multi currency reconciles ISK to multi-currency ledgers with audit logs.",
      "E-Wallet accelerates distributor payouts once Korta settles transactions.",
      "Backup Manager keeps restore checkpoints ready for Icelandic regulators."
    ],
    icon: WaveTriangle
  },
  {
    title: "Support intelligence",
    summary:
      "Ticketing, Auto responder, and Knowledge Base packages maintain calm, multilingual responses with AI-ready scripts.",
    bullets: [
      "Ticket routing tags payment type, sentiment, and SLA priority.",
      "Autoresponders update customers on banking calendars and integration changes.",
      "Knowledge Base syncs with AI prompts to deliver consistent answers."
    ],
    icon: Wind
  }
];

const EXECUTION_STAGES: ExecutionStage[] = [
  {
    number: "01",
    focus: "Narrative ignition",
    description:
      "Translate the archive’s secure, fast, seamless positioning into board decks, analyst notes, and chatbot scripts tailored for Iceland.",
    outcome: "Stakeholders hear the same Korta story everywhere.",
    icon: SquaresFour
  },
  {
    number: "02",
    focus: "Experience rehearsal",
    description:
      "Prototype enrolment, checkout, and payout flows that respect Iceland’s card and omnichannel habits.",
    outcome: "Teams rehearse journeys before launch, lowering support spikes.",
    icon: GlobeHemisphereWest
  },
  {
    number: "03",
    focus: "Operational instrumentation",
    description:
      "Automate dashboards, ticket routing, and compliance artefacts so leadership knows the secure, fast, seamless promise is real.",
    outcome: "Executives see proof in minutes instead of waiting for reports.",
    icon: Mountains
  }
];

const COUNTRY_SIGNAL = {
  label: "Iceland",
  href: "/network-marketing-software-company-providing-affordable-mlm-system-in-iceland/",
  note:
    "August 28, 2024 — the archive names Iceland in the supported countries list, highlighting Korta’s national footprint and compliance priority."
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Korta Payment Gateway for Cloud MLM Software";
  const description =
    "Transform the archived Korta Payment Gateway page into an Iceland-first launch system powered by AI narration, instrumentation, and unique journey design.";

  return {
    title,
    description,
    keywords: [
      "Korta payment gateway",
      "Iceland MLM software payments",
      "secure fast seamless Korta",
      "Cloud MLM Software Korta integration",
      "Korta supported countries Iceland"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/korta", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type KortaPageProps = {
  params: { lang: SupportedLocale };
};

export default function KortaPage({ params }: KortaPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-slate-100 bg-gradient-to-br from-[#f6fbff] via-white to-[#eef7f1] px-10 py-24 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-[#10202a] dark:via-[#0f1822] dark:to-[#0f2514]">
        <div className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-500/20" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-500/20" />
        <div className="relative mx-auto max-w-6xl space-y-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <div className="grid gap-3 sm:grid-cols-3">
                {HERO_STRIPS.map((strip) => {
                  const Icon = strip.icon;
                  return (
                    <article
                      key={strip.title}
                      className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-white/80 p-4 shadow-inner dark:border-white/10 dark:bg-white/5"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600 dark:text-emerald-200">
                          {strip.title}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-300">{strip.detail}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Korta Payment Gateway for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                Korta Payment Gateway offers secure, fast, and seamless payment solutions for your business. We turn the archive
                into an Iceland-first launch system that unites executives, operations, and AI assistants.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={buildLocalizedPath("/contact", locale)}>Discuss Korta rollout</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={buildLocalizedPath("/pricing", locale)}>Review pricing</Link>
                </Button>
              </div>
            </div>
            <div className="space-y-6 rounded-[2.5rem] border border-emerald-100 bg-white/90 p-8 shadow-inner dark:border-white/10 dark:bg-white/5">
              <header className="space-y-2">
                <span className="inline-flex items-center gap-2 rounded-md bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:bg-white/10 dark:text-emerald-200">
                  Operational pillars
                </span>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Secure, fast, and seamless become measurable when we blend instrumentation, AI narration, and launch governance.
                </p>
              </header>
              <ul className="space-y-4">
                {CAPABILITIES.map((cap) => {
                  const Icon = cap.icon;
                  return (
                    <li key={cap.title} className="rounded-2xl border border-slate-100 p-5 dark:border-white/10">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:bg-white/10 dark:text-white">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <h2 className="text-base font-semibold text-slate-900 dark:text-white">{cap.title}</h2>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{cap.summary}</p>
                      <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                        {cap.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2">
                            <ArrowSquareOut className="mt-0.5 h-4 w-4 text-emerald-500" aria-hidden />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Launch sequence
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Steps to convert the archive into daily execution
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              A payment gateway like Korta is a crucial service that facilitates online transactions by securely transferring
              payment information between a customer, merchant, and financial institution. Follow the sequence to make that real.
            </p>
          </header>
          <div className="mt-10 space-y-6">
            {EXECUTION_STAGES.map((stage) => {
              const Icon = stage.icon;
              return (
                <article
                  key={stage.number}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-gradient-to-r from-white via-slate-50 to-emerald-50 p-6 shadow-inner transition hover:-translate-y-1 hover:border-emerald-200 dark:border-white/10 dark:bg-gradient-to-r dark:from-slate-950/70 dark:via-slate-900/80 dark:to-emerald-950/40 lg:flex-row lg:items-center lg:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600 dark:text-emerald-200">
                      {stage.number}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stage.focus}</h3>
                  </div>
                  <div className="max-w-3xl space-y-2">
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{stage.description}</p>
                    <p className="text-sm font-medium text-emerald-600 dark:text-emerald-200">{stage.outcome}</p>
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
                Korta is supported in numerous countries, allowing users to make secure payments via Apple devices. We transform that
                note into localisation strategies, compliance artefacts, and AI-ready messaging.
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
                Explore Iceland enablement
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
                <GlobeHemisphereWest className="h-4 w-4" aria-hidden />
                Spotlight market
              </span>
            </div>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Iceland’s direct selling leaders depend on Korta for secure, fast, seamless transactions in-store and online. Cloud MLM
              Software supports that expectation with instrumentation, AI narration, and execution playbooks.
            </p>
            <div className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              The archive lists supported countries beneath the hero. We convert that detail into launch roadmaps, risk registers,
              and content calendars that scale as your footprint grows.
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
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Lead with Korta.</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            We turn archived copy into demos, AI narration, and resilient operations so your organisation stays Iceland’s network
            marketing thought leader.
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
