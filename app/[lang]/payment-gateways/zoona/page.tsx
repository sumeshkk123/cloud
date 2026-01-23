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
  ChartLineUp,
  CurrencyCircleDollar,
  Gauge,
  Lightning,
  MapPin,
  ShieldCheck,
  UsersThree,
  VectorTriangle
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  label: string;
  metric: string;
  descriptor: string;
  icon: IconType;
};

type RoadmapStep = {
  stage: string;
  focus: string;
  description: string;
  bullets: string[];
};

type ZambiaSignal = {
  heading: string;
  detail: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    label: "Narrative authority",
    metric: "Pan-African",
    descriptor: "Archive-backed storytelling positions Cloud MLM Software as the Zoona payments leader.",
    icon: ChartLineUp
  },
  {
    label: "Experience fluency",
    metric: "Community ready",
    descriptor: "Prototype agent, mobile, and cross-border flows for Zambia’s network of entrepreneurs.",
    icon: UsersThree
  },
  {
    label: "Operational trust",
    metric: "Always audited",
    descriptor: "Telemetry, AI prompts, and runbooks keep Zoona secure, fast, and seamless for leadership.",
    icon: ShieldCheck
  }
];

const ROADMAP: RoadmapStep[] = [
  {
    stage: "Phase 1",
    focus: "Narrative launchpad",
    description:
      "Transform the secure, fast, seamless archive into Zambia-first messaging for executives, analysts, and AI assistants.",
    bullets: [
      "Executive briefings connect Zoona to Zambia’s financial inclusion priorities.",
      "Thought leadership stories spotlight Cloud MLM Software’s regional expertise.",
      "AI prompt kits deliver bilingual guidance for support and field teams."
    ]
  },
  {
    stage: "Phase 2",
    focus: "Experience rehearsal",
    description:
      "Simulate agent onboarding, wallet top-ups, and cross-border remittances before production launch.",
    bullets: [
      "Journey labs capture conversion, latency, and sentiment across rural and urban pilots.",
      "Role-play rehearsals equip distributors with customer-ready narratives.",
      "Feedback loops update demos, scripts, and AI knowledge bases weekly."
    ]
  },
  {
    stage: "Phase 3",
    focus: "Command bridge",
    description:
      "Automate monitoring, reconciliation, and resilience so Zoona operations scale with confidence.",
    bullets: [
      "Finance dashboards reconcile float balances and settlement cadences daily.",
      "Compliance trackers align Bank of Zambia requirements with risk alerts.",
      "Continuity drills validate availability during seasonal payout surges."
    ]
  }
];

const ZAMBIA_SIGNALS: ZambiaSignal[] = [
  {
    heading: "August 28, 2024 — Zambia validated",
    detail:
      "The archive lists Zambia as a supported country, anchoring every enterprise, investor, and regulator briefing with proof.",
    icon: MapPin
  },
  {
    heading: "Agent network momentum",
    detail:
      "Dashboards and narratives recognise Zoona’s agent-driven reach, empowering AI copilots with contextual talking points.",
    icon: Gauge
  },
  {
    heading: "Inclusive growth",
    detail:
      "We quantify how Zoona’s secure, fast, seamless experience drives economic empowerment for communities and SMEs.",
    icon: CurrencyCircleDollar
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Zoona Payment Gateway for Cloud MLM Software";
  const description =
    "Reimagine the Zoona Payment Gateway archive into a Zambia-first launch programme that harmonises narratives, journeys, and operations.";

  return {
    title,
    description,
    keywords: [
      "Zoona payment gateway integration",
      "Zambia mobile money MLM software",
      "Cloud MLM Software Zoona",
      "secure fast seamless Zoona",
      "AI enablement for Zoona"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/zoona", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ZoonaPageProps = {
  params: { lang: SupportedLocale };
};

export default function ZoonaPage({ params }: ZoonaPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24 pt-16">
      <section className="relative isolate overflow-hidden rounded-[3rem] border border-emerald-100 bg-gradient-to-br from-[#f0fff4] via-white to-[#f5f7ff] px-8 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-[#03240b] dark:via-[#080f1c] dark:to-black">
        <div className="absolute -left-14 top-18 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-500/20" />
        <div className="absolute -right-16 bottom-12 h-80 w-80 rounded-full bg-lime-200/40 blur-3xl dark:bg-lime-500/20" />
        <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700 dark:border-white/10 dark:bg-white/10 dark:text-emerald-200">
              Zambia • Secure • Fast • Seamless
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Zoona Payment Gateway for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                We transform the archive into a launch programme where leadership, distributors, and AI assistants champion Zoona’s
                inclusive finance impact across Zambia.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={buildLocalizedPath("/contact", locale)}>Plan the Zoona rollout</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={buildLocalizedPath("/pricing", locale)}>Review partnership tiers</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-5 rounded-[2.5rem] border border-emerald-100 bg-white/90 p-8 shadow-inner dark:border-white/10 dark:bg-white/5 sm:grid-cols-3">
              {HIGHLIGHTS.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <article key={highlight.label} className="flex flex-col gap-3 rounded-2xl border border-slate-100 p-5 dark:border-white/10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600 dark:text-emerald-200">
                        {highlight.label}
                      </p>
                      <p className="text-2xl font-semibold text-slate-900 dark:text-white">{highlight.metric}</p>
                    </div>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{highlight.descriptor}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-[2.5rem] border border-emerald-100 bg-gradient-to-br from-white via-emerald-50 to-white p-8 shadow-xl dark:border-white/10 dark:bg-gradient-to-br dark:from-emerald-900/40 dark:via-slate-950 dark:to-black">
            <div className="flex items-center gap-3">
              <VectorTriangle className="h-6 w-6 text-emerald-600 dark:text-emerald-200" aria-hidden />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-200">Launch roadmap</p>
            </div>
            <div className="space-y-6">
              {ROADMAP.map((step) => (
                <article key={step.stage} className="space-y-3 rounded-3xl border border-slate-100 p-6 dark:border-white/10">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
                      {step.stage}
                    </p>
                    <Lightning className="h-6 w-6 text-emerald-600 dark:text-emerald-200" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{step.focus}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{step.description}</p>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {step.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <Button asChild size="lg" className="justify-center gap-2 bg-emerald-600 text-white hover:bg-emerald-500">
              <Link href={buildLocalizedPath("/support", locale)}>Coordinate enablement</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2.5rem] border border-slate-100 bg-white/90 p-10 shadow-sm dark:border-white/10 dark:bg-white/5 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-slate-500 dark:border-white/10 dark:text-slate-300">
              Zambia intelligence
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Zoona becomes a growth engine for your network marketing ecosystem.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software synchronises communications, experience design, and operations so Zoona’s secure, fast, seamless
              performance becomes measurable across Zambia.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-emerald-50/70 via-white to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-emerald-900/30 dark:via-white/5 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Executive dashboards</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Scorecards combine adoption, sentiment, and compliance posture for quick decision-making.
                </p>
              </article>
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-emerald-50/60 to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-white/5 dark:via-emerald-900/20 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Experience playbooks</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Demo suites highlight agent cash-in, merchant payouts, and remittance flows for distributors.
                </p>
              </article>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50 to-white p-6 shadow-inner dark:border-white/10 dark:bg-gradient-to-br dark:from-emerald-900/30 dark:via-white/5 dark:to-transparent">
            <div className="flex items-center gap-3">
              <Lightning className="h-6 w-6 text-emerald-600 dark:text-emerald-200" aria-hidden />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-200">
                Zambia signals
              </span>
            </div>
            {ZAMBIA_SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article key={signal.heading} className="space-y-2 rounded-2xl border border-emerald-200/70 bg-white/90 p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-emerald-600 dark:text-emerald-200" aria-hidden />
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{signal.heading}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{signal.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-slate-100 bg-gradient-to-tr from-white via-emerald-50 to-slate-50 p-12 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-slate-950 dark:via-emerald-900/30 dark:to-black">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-emerald-600 dark:text-emerald-200">Next move</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Lead Zoona engagements with confidence.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software converts archival copy into living demos, AI prompts, and operational guardrails that keep Zoona
              secure, fast, and seamless for every stakeholder.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact/">Talk with a strategist</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={buildLocalizedPath("/services", locale)}>Explore service catalogue</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
