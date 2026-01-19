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
  ClipboardText,
  DeviceMobile,
  GlobeHemisphereEast,
  IdentificationCard,
  Lightning,
  Shield,
  TrendUp,
  Users,
  Vault
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  title: string;
  subtitle: string;
  icon: IconType;
};

type Assurance = {
  title: string;
  detail: string;
  icon: IconType;
};

type PlaybookStep = {
  number: string;
  name: string;
  narrative: string;
  outcome: string;
  icon: IconType;
};

type ModuleCard = {
  title: string;
  summary: string;
  points: string[];
  icon: IconType;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    title: "Secure rails",
    subtitle: "PCI-ready workflows, encryption, and auditing for Turkish regulators.",
    icon: Shield
  },
  {
    title: "Fast settlement",
    subtitle: "Optimised dashboards for payout velocity and tax synchronisation.",
    icon: Lightning
  },
  {
    title: "Seamless experiences",
    subtitle: "Connected enrolment, checkout, and distributor journeys across channels.",
    icon: DeviceMobile
  }
];

const ASSURANCES: Assurance[] = [
  {
    title: "Compliance clarity",
    detail:
      "KYC tooling, tax documentation, and board-ready reporting map the archive&apos;s secure message into verifiable controls.",
    icon: IdentificationCard
  },
  {
    title: "Executive intelligence",
    detail:
      "AI-ready summaries and investor decks highlight why Iyzico&apos;s fast, seamless promise accelerates Turkish expansion.",
    icon: TrendUp
  },
  {
    title: "Operational rhythm",
    detail: "Playbooks align support, finance, and product teams so customers experience one orchestrated narrative.",
    icon: Users
  }
];

const PLAYBOOK_STEPS: PlaybookStep[] = [
  {
    number: "01",
    name: "Narrative design",
    narrative:
      "Translate the archive&apos;s secure, fast, seamless language into leadership briefings, analyst notes, and AI prompt packs.",
    outcome: "Stakeholders inside and outside Turkey hear the same story.",
    icon: ClipboardText
  },
  {
    number: "02",
    name: "Experience prototyping",
    narrative:
      "Craft Iyzico-ready enrolment, checkout, and payout flows that respect Turkish regulations and customer expectations.",
    outcome: "Distributors and finance teams rehearse launch before production.",
    icon: DeviceMobile
  },
  {
    number: "03",
    name: "Operational instrumentation",
    narrative:
      "Automate reconciliation, ticketing, and escalation pathways that feed dashboards, AI assistants, and compliance evidence.",
    outcome: "Leadership sees the metrics behind the fast, seamless claim.",
    icon: Vault
  }
];

const MODULE_CARDS: ModuleCard[] = [
  {
    title: "Revenue intelligence",
    summary:
      "Custom Demo, Pre-set Demo, and Features hub carry the archive&apos;s core message into buyer meetings and AI conversations.",
    points: [
      "Custom Demo mirrors Turkish taxation, currency, and compliance scenarios.",
      "Pre-set Demo offers partners a guided exploration of Iyzico checkout flows.",
      "Features hub delivers SEO+AIO ready copy for analysts, media, and sales."
    ],
    icon: TrendUp
  },
  {
    title: "Financial guardianship",
    summary:
      "Multi currency, E-Wallet, and Backup Manager prove settlements are both fast and resilient across Turkish operations.",
    points: [
      "Multi currency reconciles TRY to multi-currency ledgers with audit logs.",
      "E-Wallet orchestrates instantaneous distributor payouts once Iyzico clears funds.",
      "Backup Manager documents restore checkpoints that satisfy regulatory scrutiny."
    ],
    icon: Vault
  },
  {
    title: "Support intelligence",
    summary:
      "Ticketing, Auto responder, and Knowledge Base keep teams ready with data-backed answers in Turkish, English, and AI contexts.",
    points: [
      "Ticket tags capture payment type, urgency, and compliance implications.",
      "Autoresponders share banking schedule updates and regional advisories.",
      "Knowledge Base synchronises with AI prompt cards for consistent resolutions."
    ],
    icon: Users
  }
];

const COUNTRY_CONTEXT = {
  label: "Turkey",
  href: "/network-marketing-software-company-providing-affordable-mlm-system-in-turkey/",
  note:
    "August 28, 2024 — the live archive highlights Turkey as an active Iyzico market, confirming localisation and compliance must anchor every launch conversation."
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Iyzico Payment Gateway for Cloud MLM Software";
  const description =
    "Elevate the archived Iyzico Payment Gateway page into a Turkey-centric launch program backed by compliance, AI narration, and resilient operations.";

  return {
    title,
    description,
    keywords: [
      "Iyzico payment gateway",
      "Turkey MLM software payments",
      "secure fast seamless Iyzico",
      "Cloud MLM Software Iyzico integration",
      "Iyzico supported countries Turkey"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/iyzico", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type IyzicoPageProps = {
  params: { lang: SupportedLocale };
};

export default function IyzicoPage({ params }: IyzicoPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-slate-100 bg-gradient-to-r from-white via-slate-50 to-sky-50 px-10 py-24 shadow-sm dark:border-white/10 dark:bg-gradient-to-r dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/40">
        <div className="absolute inset-y-0 left-1/2 hidden w-px bg-gradient-to-b from-blue-500/40 via-transparent to-blue-500/10 md:block" />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-sky-700 dark:border-white/10 dark:bg-white/10 dark:text-sky-200">
              Secure • Fast • Seamless
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Iyzico Payment Gateway for Cloud MLM Software
            </h1>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Iyzico Payment Gateway offers secure, fast, and seamless payment solutions for your business. We evolve the archive
              into a Turkey-focused transformation plan that proves compliance, velocity, and experience excellence.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {HERO_HIGHLIGHTS.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <article
                    key={highlight.title}
                    className="flex flex-col gap-3 rounded-3xl border border-sky-100 bg-white/80 p-5 shadow-inner transition hover:-translate-y-1 hover:border-sky-300 dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h2 className="text-base font-semibold text-slate-900 dark:text-white">{highlight.title}</h2>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{highlight.subtitle}</p>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={buildLocalizedPath("/contact", locale)}>Discuss Iyzico rollout</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={buildLocalizedPath("/pricing", locale)}>Review pricing</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6 rounded-[2.5rem] border border-sky-100 bg-white/90 p-8 shadow-inner dark:border-white/10 dark:bg-white/5">
            <header className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-md bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:bg-white/10 dark:text-sky-200">
                Assurance stack
              </span>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">From archive to audit-ready reality</h2>
            </header>
            <div className="space-y-5">
              {ASSURANCES.map((assurance) => {
                const Icon = assurance.icon;
                return (
                  <article key={assurance.title} className="flex gap-4 rounded-2xl border border-slate-100 p-5 dark:border-white/10">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white">{assurance.title}</h3>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{assurance.detail}</p>
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
              Launch playbook
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Three disciplined moves to modernise Iyzico
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              A payment gateway like Iyzico is a crucial service that facilitates online transactions by securely transferring
              payment information between a customer, merchant, and financial institution. We turn that claim into steps everyone
              can follow.
            </p>
          </header>
          <div className="mt-10 space-y-6">
            {PLAYBOOK_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.number}
                  className="grid gap-6 rounded-3xl border border-slate-100 bg-gradient-to-r from-white via-slate-50 to-sky-50 p-6 shadow-inner transition hover:-translate-y-1 hover:border-sky-200 dark:border-white/10 dark:bg-gradient-to-r dark:from-slate-950/70 dark:via-slate-900/80 dark:to-sky-950/40 lg:grid-cols-[0.25fr,1.75fr]"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.45em] text-sky-600 dark:text-sky-200">
                      {step.number}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{step.name}</h3>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{step.narrative}</p>
                    <p className="text-sm font-medium text-sky-600 dark:text-sky-200">{step.outcome}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl space-y-6">
          {MODULE_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="rounded-[2.5rem] border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-black"
              >
                <div className="grid gap-6 lg:grid-cols-[0.8fr,1.2fr]">
                  <div className="space-y-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{card.title}</h2>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{card.summary}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 rounded-3xl border border-white/40 bg-white/80 p-6 text-sm text-slate-600 shadow-inner dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                    {card.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <ArrowSquareOut className="mt-0.5 h-4 w-4 text-sky-500" aria-hidden />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr,1.1fr]">
          <aside className="flex flex-col justify-between gap-6 rounded-[2.5rem] border border-sky-200 bg-gradient-to-br from-blue-900 via-slate-900 to-black p-10 text-white shadow-sm dark:border-white/10">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight">Payment gateway supported countries</h2>
              <p className="text-sm leading-6 text-slate-100">
                Iyzico is supported in numerous countries, allowing users to make secure payments via Apple devices. We transform
                that broad statement into country-specific roadmaps, compliance artefacts, and AI scripts.
              </p>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-sm leading-6 text-slate-100">
              {COUNTRY_CONTEXT.note}
            </div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="justify-center border-white/40 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={COUNTRY_CONTEXT.href} rel="noreferrer">
                Explore Turkey go-to-market
              </Link>
            </Button>
          </aside>
          <div className="space-y-6 rounded-[2.5rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-6 dark:border-white/10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-600 dark:text-sky-200">Region</p>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{COUNTRY_CONTEXT.label}</h3>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-sky-700 dark:border-white/10 dark:bg-white/5 dark:text-sky-200">
                <GlobeHemisphereEast className="h-4 w-4" aria-hidden />
                Focus market
              </span>
            </div>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Turkey&apos;s direct selling sector expects Iyzico to guarantee every secure, fast, seamless payment cycle. Cloud MLM
              Software delivers that confidence with measurable instrumentation, AI-ready knowledge bases, and executive reporting.
            </p>
            <div className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              Beneath the archive hero sits the full list of supported countries. We document each reference, match it to product
              roadmaps, and keep leadership informed as the network expands.
            </div>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700 dark:text-sky-200 dark:hover:text-sky-100"
            >
              Coordinate localisation strategy
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-[2.5rem] border border-sky-200 bg-gradient-to-tr from-sky-50 via-white to-slate-50 p-10 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-blue-900/40 dark:via-slate-950 dark:to-black">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Lead with Iyzico.</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            We transform archived copy into compliant playbooks, AI narration, and operational excellence tailored to Turkey&apos;s
            direct selling environment.
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
