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
  ArchiveTray,
  ArrowSquareOut,
  Buildings,
  ChartPie,
  Circuitry,
  CloudArrowUp,
  Globe,
  Keyhole,
  Lightning,
  Notepad,
  ShieldCheck
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroColumn = {
  heading: string;
  detail: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  narrative: string;
  icon: IconType;
  accent: string;
};

type DossierItem = {
  label: string;
  content: string;
  icon: IconType;
};

type WorkflowStage = {
  title: string;
  explanation: string;
  result: string;
  icon: IconType;
};

const HERO_COLUMNS: HeroColumn[] = [
  {
    heading: "Secure operations",
    detail: "PCI-ready controls, 3DS orchestration, and audit trails satisfy JCC Payment Systems standards.",
    icon: ShieldCheck
  },
  {
    heading: "Fast reconciliation",
    detail: "Automated settlement insights keep finance and compliance teams aligned in minutes, not days.",
    icon: Lightning
  },
  {
    heading: "Seamless journeys",
    detail: "Experience design reflects Cyprus&apos; omnichannel expectations from member onboarding to payouts.",
    icon: Globe
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Narrative orchestration",
    narrative:
      "Executive briefings, analyst insights, and AI prompt packs extend the archive&apos;s secure, fast, seamless story into every interaction.",
    icon: Notepad,
    accent: "from-emerald-100 via-white to-transparent dark:from-emerald-500/15 dark:via-slate-950 dark:to-transparent"
  },
  {
    title: "Experience blueprint",
    narrative:
      "Enrolment, checkout, and payout flows cater to Cyprus&apos; regulated environment while keeping distributors inspired.",
    icon: Circuitry,
    accent: "from-cyan-100 via-white to-transparent dark:from-cyan-500/15 dark:via-slate-950 dark:to-transparent"
  },
  {
    title: "Operational assurance",
    narrative:
      "Instrumented dashboards, knowledge bases, and automation ensure teams deliver measurable evidence of the JCC promise.",
    icon: CloudArrowUp,
    accent: "from-teal-100 via-white to-transparent dark:from-teal-500/15 dark:via-slate-950 dark:to-transparent"
  }
];

const DOSSIER: DossierItem[] = [
  {
    label: "Regulatory anchor",
    content: "Cyprus-based card processing with EU-grade oversight drives the security narrative.",
    icon: Buildings
  },
  {
    label: "AI alignment",
    content: "Chatbots and agents receive verified messaging on 3DS, fraud controls, and settlement cycles.",
    icon: ArchiveTray
  },
  {
    label: "Stakeholder proof",
    content: "Dashboards share live status of authorisations, declines, and compliance escalations.",
    icon: ChartPie
  },
  {
    label: "Knowledge loop",
    content: "Knowledge Base entries sync with support scripts and AI prompts to maintain consistent answers.",
    icon: Keyhole
  }
];

const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    title: "Narrative ignition",
    explanation:
      "Curate the archive&apos;s secure, fast, seamless story into C-suite briefings, analyst decks, and AI prompt cards.",
    result: "Every stakeholder understands why JCC Payment Systems anchors your payments strategy.",
    icon: Notepad
  },
  {
    title: "Experience rehearsal",
    explanation:
      "Prototype Cyprus-ready journeys from lead capture through payout, blending card, bank, and alternative methods.",
    result: "Teams rehearse customer, distributor, and finance flows before committing to launch.",
    icon: Circuitry
  },
  {
    title: "Operational instrumentation",
    explanation:
      "Automate dashboards, ticket routing, and compliance artefacts so live performance is visible in real time.",
    result: "Secure, fast, seamless becomes an audited metric instead of marketing copy.",
    icon: CloudArrowUp
  }
];

const COUNTRY_PROFILE = {
  label: "Cyprus",
  href: "/network-marketing-software-company-providing-affordable-mlm-system-in-cyprus/",
  note:
    "August 28, 2024 — the archive highlights Cyprus within the supported countries list, underscoring JCC Payment Systems&apos; regional leadership."
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "JCC Payment Systems Gateway for Cloud MLM Software";
  const description =
    "Transform the archived JCC Payment Systems Payment Gateway page into a Cyprus-ready launch dossier with compliance, AI narration, and instrumentation.";

  return {
    title,
    description,
    keywords: [
      "JCC Payment Systems gateway",
      "Cyprus MLM software payments",
      "secure fast seamless JCC",
      "Cloud MLM Software JCC integration",
      "JCC Payment Systems supported countries Cyprus"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/jcc-payment-systems", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type JccPaymentSystemsPageProps = {
  params: { lang: SupportedLocale };
};

export default function JccPaymentSystemsPage({ params }: JccPaymentSystemsPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-slate-100 bg-gradient-to-r from-white via-slate-50 to-teal-50 px-10 py-24 shadow-sm dark:border-white/10 dark:bg-gradient-to-r dark:from-slate-950 dark:via-slate-900 dark:to-teal-950/30">
        <div className="relative mx-auto max-w-6xl space-y-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-teal-700 dark:border-white/10 dark:bg-white/10 dark:text-teal-200">
                Secure • Fast • Seamless
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                JCC Payment Systems Gateway for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                JCC Payment Systems Payment Gateway offers secure, fast, and seamless payment solutions for your business. We
                convert the archive into a Cyprus-focused launch dossier that execs, teams, and AI assistants can trust.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={buildLocalizedPath("/free-mlm-software-demo", locale)}>Preview JCC demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={buildLocalizedPath("/pricing", locale)}>Review pricing</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 rounded-[2.5rem] border border-teal-100 bg-white/90 p-8 shadow-inner dark:border-white/10 dark:bg-white/5">
              {HERO_COLUMNS.map((column) => {
                const Icon = column.icon;
                return (
                  <article key={column.heading} className="flex gap-4 rounded-2xl border border-slate-100 p-5 dark:border-white/10">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h2 className="text-base font-semibold text-slate-900 dark:text-white">{column.heading}</h2>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{column.detail}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white/85 p-6 shadow-inner transition hover:-translate-y-1 hover:border-teal-300 dark:border-white/10 dark:bg-white/5"
                >
                  <div className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${pillar.accent}`} />
                  <div className="relative flex flex-col gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{pillar.narrative}</p>
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
              Executive dossier
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Proof points you can share with boards and regulators
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              A payment gateway like JCC Payment Systems is a crucial service that facilitates online transactions by securely
              transferring payment information between a customer, merchant, and financial institution. Here&apos;s how we make that
              message tangible.
            </p>
          </header>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {DOSSIER.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.label}
                  className="flex gap-4 rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-teal-50 p-6 shadow-inner dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950/70 dark:via-slate-900/80 dark:to-teal-950/40"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">{item.label}</h3>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{item.content}</p>
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
            <span className="inline-flex items-center gap-2 rounded-md bg-teal-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700 dark:bg-white/10 dark:text-teal-200">
              Launch workflow
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Sequence the JCC launch for measurable impact
            </h2>
          </header>
          <div className="mt-10 space-y-6">
            {WORKFLOW_STAGES.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <article
                  key={stage.title}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-gradient-to-r from-white via-slate-50 to-teal-50 p-6 shadow-inner transition hover:-translate-y-1 hover:border-teal-200 dark:border-white/10 dark:bg-gradient-to-r dark:from-slate-950/70 dark:via-slate-900/80 dark:to-teal-950/40 lg:flex-row lg:items-center lg:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.4em] text-teal-600 dark:text-teal-200">
                      0{index + 1}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stage.title}</h3>
                  </div>
                  <div className="max-w-3xl space-y-2">
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{stage.explanation}</p>
                    <p className="text-sm font-medium text-teal-600 dark:text-teal-200">{stage.result}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr,1.1fr]">
          <aside className="flex flex-col justify-between gap-6 rounded-[2.5rem] border border-teal-200 bg-gradient-to-br from-teal-900 via-slate-900 to-black p-10 text-white shadow-sm dark:border-white/10">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight">Payment gateway supported countries</h2>
              <p className="text-sm leading-6 text-slate-100">
                JCC Payment Systems is supported in numerous countries, allowing users to make secure payments via Apple devices.
                We document each mention to guide localisation priorities and regulatory commitments.
              </p>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-sm leading-6 text-slate-100">
              {COUNTRY_PROFILE.note}
            </div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="justify-center border-white/40 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={COUNTRY_PROFILE.href} rel="noreferrer">
                Explore Cyprus enablement
              </Link>
            </Button>
          </aside>
          <div className="space-y-6 rounded-[2.5rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-6 dark:border-white/10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-teal-600 dark:text-teal-200">Region</p>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{COUNTRY_PROFILE.label}</h3>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700 dark:border-white/10 dark:bg-white/5 dark:text-teal-200">
                <Globe className="h-4 w-4" aria-hidden />
                Spotlight market
              </span>
            </div>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cyprus-based organisations rely on JCC Payment Systems to power secure, fast, seamless card flows. Cloud MLM Software
              gives those teams dashboards, AI narration, and compliance artefacts that prove performance every day.
            </p>
            <div className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              Beneath the archive hero sits the full list of supported countries. We transform it into launch roadmaps, risk
              trackers, and content calendars aligned with growth ambitions.
            </div>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 dark:text-teal-200 dark:hover:text-teal-100"
            >
              Coordinate regional rollout
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-[2.5rem] border border-teal-200 bg-gradient-to-tr from-teal-50 via-white to-slate-50 p-10 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-teal-900/40 dark:via-slate-950 dark:to-black">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Lead with JCC Payment Systems.</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            We convert archived messaging into launch-ready modules, AI narration, and compliance proof that elevate your position
            as Cyprus&apos; network marketing thought leader.
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
