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
  Buildings,
  ChartLineUp,
  Fire,
  GlobeHemisphereEast,
  Lightning,
  ShieldCheck,
  Sparkle,
  Stack
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type ImpactMetric = {
  headline: string;
  value: string;
  description: string;
  icon: IconType;
};

type Initiative = {
  name: string;
  detail: string;
  outcomes: string[];
};

type ChinaSignal = {
  title: string;
  description: string;
  icon: IconType;
};

const IMPACT_METRICS: ImpactMetric[] = [
  {
    headline: "Executive visibility",
    value: "Full-spectrum",
    description: "Dashboards, AI assistants, and briefings align UnionPay performance with board expectations.",
    icon: Buildings
  },
  {
    headline: "Distributor enablement",
    value: "Hyper-personal",
    description: "Role-specific journeys coach sellers on compliant UnionPay scenarios before launch.",
    icon: Sparkle
  },
  {
    headline: "Operational resilience",
    value: "Always audited",
    description: "Risk, finance, and support teams share one command centre to govern UnionPay usage.",
    icon: ShieldCheck
  }
];

const INITIATIVES: Initiative[] = [
  {
    name: "Narrative office",
    detail:
      "Reimagine the secure, fast, seamless archive into China-ready messaging across investor relations, analyst briefings, and AI prompts.",
    outcomes: [
      "Thought-leader articles position Cloud MLM Software as the UnionPay authority.",
      "Media kits detail compliance and innovation commitments.",
      "AI prompt cards keep virtual assistants on-message in Mandarin and English."
    ]
  },
  {
    name: "Experience theatre",
    detail:
      "Simulate onboarding, repeat purchases, and settlement flows reflecting UnionPay’s omni-channel ecosystems from mainland hubs to global corridors.",
    outcomes: [
      "Staging demos emulate super-app and QR-first behaviours.",
      "Customer walkthroughs surface friction before go-live.",
      "Feedback loops feed product and enablement improvements weekly."
    ]
  },
  {
    name: "Command bridge",
    detail:
      "Instrument risk, compliance, and service operations with live telemetry so leadership trusts every UnionPay transaction.",
    outcomes: [
      "Automated reconciliation tracks daily settlement across currencies.",
      "Alerting workflows route escalations with AI-suggested resolutions.",
      "Continuity drills assure availability across seasonal peaks."
    ]
  }
];

const CHINA_SIGNALS: ChinaSignal[] = [
  {
    title: "August 28, 2024 — China confirmation",
    description:
      "The archive names China as a supported market, anchoring our credibility when briefing regulators and enterprise buyers.",
    icon: GlobeHemisphereEast
  },
  {
    title: "State-grade compliance",
    description:
      "Regulatory trackers and AI copilots keep teams current on People’s Bank of China guidance and UnionPay mandate updates.",
    icon: Stack
  },
  {
    title: "Scale readiness",
    description:
      "Performance benchmarks document throughput, latency, and conversion so UnionPay meets high-volume, event-driven expectations.",
    icon: ChartLineUp
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "UnionPay Payment Gateway for Cloud MLM Software";
  const description =
    "Convert the UnionPay Payment Gateway archive into a China-ready launch system combining executive storytelling, journey rehearsal, and operational governance.";

  return {
    title,
    description,
    keywords: [
      "UnionPay payment gateway integration",
      "China MLM software payments",
      "Cloud MLM Software UnionPay",
      "secure fast seamless UnionPay",
      "AI enablement for UnionPay"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/unionpay", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type UnionPayPageProps = {
  params: { lang: SupportedLocale };
};

export default function UnionPayPage({ params }: UnionPayPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24 pt-16">
      <section className="relative isolate overflow-hidden rounded-[3rem] border border-rose-100 bg-gradient-to-br from-[#fff0f0] via-white to-[#fff7ed] px-8 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-[#2b0909] dark:via-[#120202] dark:to-black">
        <div className="absolute -left-12 top-14 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl dark:bg-rose-500/20" />
        <div className="absolute -right-16 bottom-6 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-500/20" />
        <div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.15fr,0.9fr]">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-rose-700 dark:border-white/10 dark:bg-white/10 dark:text-rose-200">
              China • Secure • Fast • Seamless
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                UnionPay Payment Gateway for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                We elevate the UnionPay archive into a strategic programme that synchronises narratives, experiences, and
                operations for China’s high-velocity market.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={buildLocalizedPath("/contact", locale)}>Schedule a UnionPay workshop</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={buildLocalizedPath("/pricing", locale)}>Review partnership options</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-5 rounded-[2.5rem] border border-rose-100 bg-white/90 p-8 shadow-inner dark:border-white/10 dark:bg-white/5 sm:grid-cols-3">
              {IMPACT_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article key={metric.headline} className="flex flex-col gap-3 rounded-2xl border border-slate-100 p-5 dark:border-white/10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/10 text-rose-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-600 dark:text-rose-200">
                        {metric.headline}
                      </p>
                      <p className="text-2xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                    </div>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{metric.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-[2.5rem] border border-rose-100 bg-gradient-to-br from-white via-rose-50 to-white p-8 shadow-xl dark:border-white/10 dark:bg-gradient-to-br dark:from-rose-900/40 dark:via-slate-950 dark:to-black">
            <div className="flex items-center gap-3">
              <Fire className="h-6 w-6 text-rose-600 dark:text-rose-200" aria-hidden />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-600 dark:text-rose-200">Launch engine</p>
            </div>
            <div className="space-y-6">
              {INITIATIVES.map((initiative, index) => (
                <article key={initiative.name} className="space-y-3 rounded-3xl border border-slate-100 p-6 dark:border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
                        Initiative {index + 1}
                      </p>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{initiative.name}</h3>
                    </div>
                    <Lightning className="h-6 w-6 text-rose-600 dark:text-rose-200" aria-hidden />
                  </div>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{initiative.detail}</p>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {initiative.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2.5rem] border border-slate-100 bg-white/90 p-10 shadow-sm dark:border-white/10 dark:bg-white/5 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-slate-500 dark:border-white/10 dark:text-slate-300">
              China intelligence
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              UnionPay becomes a differentiator, not just a requirement.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software positions UnionPay as a strategic advantage, blending compliance, customer experience, and AI
              narration so every stakeholder sees measurable outcomes.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-rose-50/70 via-white to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-rose-900/30 dark:via-white/5 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Regulatory choreography</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Integrated compliance packs keep policy, documentation, and audits synchronised with PBoC expectations.
                </p>
              </article>
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-rose-50/60 to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-white/5 dark:via-rose-900/20 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Experience excellence</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Demo suites mirror domestic QR, card, and super-app scenarios so sellers speak to real customer behaviour.
                </p>
              </article>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-rose-100 bg-gradient-to-br from-white via-rose-50 to-white p-6 shadow-inner dark:border-white/10 dark:bg-gradient-to-br dark:from-rose-900/30 dark:via-white/5 dark:to-transparent">
            <div className="flex items-center gap-3">
              <Lightning className="h-6 w-6 text-rose-600 dark:text-rose-200" aria-hidden />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-700 dark:text-rose-200">
                China signals
              </span>
            </div>
            {CHINA_SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article key={signal.title} className="space-y-2 rounded-2xl border border-rose-200/70 bg-white/90 p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-rose-600 dark:text-rose-200" aria-hidden />
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{signal.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{signal.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-slate-100 bg-gradient-to-tr from-white via-rose-50 to-slate-50 p-12 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-slate-950 dark:via-rose-900/30 dark:to-black">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-rose-600 dark:text-rose-200">Next move</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Lead UnionPay conversations with confidence.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              From boardrooms to AI chat windows, we equip your organisation to champion UnionPay as a secure, fast, seamless payment
              advantage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact/">Talk with a strategist</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={buildLocalizedPath("/services", locale)}>Explore service catalog</Link>
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
