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
  CalendarDots,
  ChartLineUp,
  DeviceMobile,
  Globe,
  Lightning,
  MagicWand,
  Receipt,
  Shield,
  SquaresFour,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroBadge = {
  name: string;
  detail: string;
};

type HeroCard = {
  value: string;
  title: string;
  text: string;
  icon: IconType;
};

type ExperienceLoop = {
  heading: string;
  description: string;
  bullets: string[];
  icon: IconType;
  accent: string;
};

type LaunchStep = {
  label: string;
  description: string;
  impact: string;
  icon: IconType;
};

const HERO_BADGES: HeroBadge[] = [
  { name: "Secure", detail: "PCI readiness, AML alignment, and investor-grade reporting." },
  { name: "Fast", detail: "Instant approvals, BNPL analytics, and automated settlements." },
  { name: "Seamless", detail: "Unified journeys across checkout, loyalty, and payouts." }
];

const HERO_CARDS: HeroCard[] = [
  {
    value: "Sweden-first",
    title: "Localised storytelling",
    text: "Executive briefs, analyst decks, and AI prompts speak Sweden&apos;s language and regulatory nuance.",
    icon: Globe
  },
  {
    value: "Buy now, succeed later",
    title: "BNPL intelligence",
    text: "Dashboards model Klarna timelines, repayment states, and incentive nudges.",
    icon: Receipt
  },
  {
    value: "AI-ready",
    title: "Narrative alignment",
    text: "Chatbots, agents, and sales teams deliver the same secure, fast, seamless promise.",
    icon: MagicWand
  }
];

const EXPERIENCE_LOOPS: ExperienceLoop[] = [
  {
    heading: "Narrative studio",
    description:
      "Custom Demo, Pre-set Demo, and Feature hub evolve the archive into campaigns that position Klarna as the differentiator.",
    bullets: [
      "Custom Demo replicates BNPL schedules, taxation, and incentive choreography for Nordic markets.",
      "Pre-set Demo gives partners hands-on exploration of Klarna-native journeys.",
      "Feature library turns modules into SEO+AIO ready storytelling for analysts and media."
    ],
    icon: ChartLineUp,
    accent: "from-rose-100 via-white to-transparent dark:from-rose-500/20 dark:via-slate-950 dark:to-transparent"
  },
  {
    heading: "Financial guardianship",
    description:
      "Multi currency, E-Wallet, and Backup Manager ensure Klarna&apos;s fast promise is measured, reconciled, and recoverable.",
    bullets: [
      "Multi currency aligns SEK, EUR, and USD ledgers with Klarna settlement cadences.",
      "E-Wallet accelerates distributor payouts once instalments clear.",
      "Backup Manager delivers restore checkpoints that satisfy Swedish compliance."
    ],
    icon: Shield,
    accent: "from-sky-100 via-white to-transparent dark:from-sky-500/20 dark:via-slate-950 dark:to-transparent"
  },
  {
    heading: "Support intelligence",
    description:
      "Ticketing, Auto responder, and Knowledge Base packages maintain empathy and precision across BNPL-specific inquiries.",
    bullets: [
      "Ticket routing tags Klarna instalment states, risk scores, and sentiment.",
      "Autoresponders update customers on payment schedules, reminders, and incentives.",
      "Knowledge Base syncs with AI prompts so every channel gives consistent answers."
    ],
    icon: UsersThree,
    accent: "from-lime-100 via-white to-transparent dark:from-lime-500/20 dark:via-slate-950 dark:to-transparent"
  }
];

const LAUNCH_STEPS: LaunchStep[] = [
  {
    label: "Narrative ignition",
    description:
      "Transform the archive&apos;s secure, fast, seamless copy into C-suite briefings, analyst notes, and AI prompt cards tuned for Sweden.",
    impact: "Stakeholders inside and outside your organisation hear the same message.",
    icon: SquaresFour
  },
  {
    label: "Experience rehearsal",
    description:
      "Prototype Klarna-enabled onboarding, checkout, and payout flows that respect BNPL timelines and customer psychology.",
    impact: "Teams rehearse the experience before launch to protect satisfaction.",
    icon: CalendarDots
  },
  {
    label: "Operational instrumentation",
    description:
      "Automate dashboards, ticketing, and compliance artefacts so leadership sees BNPL performance and risks in real time.",
    impact: "Secure, fast, seamless becomes a measurable operating rhythm.",
    icon: Lightning
  }
];

const COUNTRY_SIGNAL = {
  label: "Sweden",
  href: "/network-marketing-software-company-providing-affordable-mlm-system-in-sweden/",
  note:
    "August 28, 2024 — the archive highlights Sweden in the supported countries list, reaffirming Klarna’s home-market significance for localisation."
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Klarna Payment Gateway for Cloud MLM Software";
  const description =
    "Recast the archived Klarna Payment Gateway page as a Sweden-first launch system with BNPL analytics, AI narration, and field-ready operations.";

  return {
    title,
    description,
    keywords: [
      "Klarna payment gateway",
      "Sweden MLM software payments",
      "BNPL secure fast seamless",
      "Cloud MLM Software Klarna integration",
      "Klarna supported countries Sweden"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/klarna", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type KlarnaPageProps = {
  params: { lang: SupportedLocale };
};

export default function KlarnaPage({ params }: KlarnaPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-slate-100 bg-gradient-to-br from-[#fff5f8] via-white to-[#f5fbff] px-10 py-24 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-[#30182a] dark:via-[#141321] dark:to-[#102530]">
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl dark:bg-rose-500/20" />
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-500/20" />
        <div className="relative mx-auto max-w-6xl space-y-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <div className="inline-flex flex-wrap gap-2">
                {HERO_BADGES.map((badge) => (
                  <span
                    key={badge.name}
                    className="rounded-full border border-rose-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-rose-700 dark:border-white/10 dark:bg-white/10 dark:text-rose-200"
                  >
                    {badge.name}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Klarna Payment Gateway for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                Klarna Payment Gateway offers secure, fast, and seamless payment solutions for your business. We extend the archive
                into a Sweden-first BNPL launch program that executives, field leaders, and AI assistants can trust.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={buildLocalizedPath("/free-mlm-software-demo", locale)}>Preview Klarna demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={buildLocalizedPath("/pricing", locale)}>Review pricing</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 rounded-[2.5rem] border border-rose-100 bg-white/90 p-8 shadow-inner dark:border-white/10 dark:bg-white/5">
              {HERO_CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <article key={card.value} className="flex gap-4 rounded-2xl border border-slate-100 p-5 dark:border-white/10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/10 text-rose-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-rose-600 dark:text-rose-200">
                        {card.value}
                      </p>
                      <h2 className="text-base font-semibold text-slate-900 dark:text-white">{card.title}</h2>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{card.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {EXPERIENCE_LOOPS.map((loop) => {
              const Icon = loop.icon;
              return (
                <article
                  key={loop.heading}
                  className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white/85 p-6 shadow-inner transition hover:-translate-y-1 hover:border-rose-200 dark:border-white/10 dark:bg-white/5"
                >
                  <div className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${loop.accent}`} />
                  <div className="relative flex flex-col gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-500/10 text-rose-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{loop.heading}</h3>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{loop.description}</p>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {loop.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <ArrowSquareOut className="mt-0.5 h-4 w-4 text-rose-500" aria-hidden />
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
        <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Launch choreography
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Turn the archive into BNPL momentum
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              A payment gateway like Klarna is a crucial service that facilitates online transactions by securely transferring
              payment information between a customer, merchant, and financial institution. Use these moves to make the promise real.
            </p>
          </header>
          <div className="mt-10 space-y-6">
            {LAUNCH_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.label}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-gradient-to-r from-white via-slate-50 to-rose-50 p-6 shadow-inner transition hover:-translate-y-1 hover:border-rose-200 dark:border-white/10 dark:bg-gradient-to-r dark:from-slate-950/70 dark:via-slate-900/80 dark:to-rose-950/40 lg:flex-row lg:items-center lg:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.4em] text-rose-600 dark:text-rose-200">
                      0{index + 1}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-500/10 text-rose-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{step.label}</h3>
                  </div>
                  <div className="max-w-3xl space-y-2">
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{step.description}</p>
                    <p className="text-sm font-medium text-rose-600 dark:text-rose-200">{step.impact}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr,1.1fr]">
          <aside className="flex flex-col justify-between gap-6 rounded-[2.5rem] border border-rose-200 bg-gradient-to-br from-rose-900 via-slate-900 to-black p-10 text-white shadow-sm dark:border-white/10">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight">Payment gateway supported countries</h2>
              <p className="text-sm leading-6 text-slate-100">
                Klarna is supported in numerous countries, allowing users to make secure payments via Apple devices. We transform the
                archive note into localisation roadmaps, compliance packages, and AI-aligned messaging.
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
                Explore Sweden enablement
              </Link>
            </Button>
          </aside>
          <div className="space-y-6 rounded-[2.5rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-6 dark:border-white/10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-rose-600 dark:text-rose-200">Region</p>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{COUNTRY_SIGNAL.label}</h3>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-rose-700 dark:border-white/10 dark:bg-white/5 dark:text-rose-200">
                <Globe className="h-4 w-4" aria-hidden />
                Spotlight market
              </span>
            </div>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Sweden’s consumers expect Klarna&apos;s BNPL flexibility and instant approvals. Cloud MLM Software meets that expectation
              with instrumentation, AI narration, and experiences that prove secure, fast, seamless value.
            </p>
            <div className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              Beneath the archive hero sits the list of supported countries. We turn it into launch roadmaps, risk registers, and
              content calendars that scale internationally.
            </div>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-rose-600 hover:text-rose-700 dark:text-rose-200 dark:hover:text-rose-100"
            >
              Coordinate regional rollout
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-[2.5rem] border border-rose-200 bg-gradient-to-tr from-rose-50 via-white to-slate-50 p-10 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-rose-900/40 dark:via-slate-950 dark:to-black">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Lead with Klarna.</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            We convert archived copy into demos, AI narration, and measurable BNPL operations so your brand remains the thought
            leader in Sweden&apos;s network marketing landscape.
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
