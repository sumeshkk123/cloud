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
  CalendarBlank,
  Chats,
  Circuitry,
  Cloud,
  GlobeHemisphereEast,
  Lightning,
  SealCheck,
  Sparkle,
  TrendUp
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type MomentumStat = {
  title: string;
  highlight: string;
  description: string;
  icon: IconType;
};

type FlowStage = {
  stage: string;
  focus: string;
  description: string;
};

type KoreaSignal = {
  title: string;
  detail: string;
  icon: IconType;
};

const MOMENTUM_STATS: MomentumStat[] = [
  {
    title: "Product narrative",
    highlight: "AI-synced",
    description: "Keep Toss’s secure, fast, seamless promise aligned across presentations, analyst briefings, and chatbots.",
    icon: Chats
  },
  {
    title: "Journey rehearsal",
    highlight: "Omni-channel",
    description: "Prototype Toss enrolment and payment flows across web, mobile, and Kakao-style messaging surfaces.",
    icon: Circuitry
  },
  {
    title: "Operational proof",
    highlight: "Always on",
    description: "Dashboards, alerts, and recovery plans show executives real-time adoption and compliance progress.",
    icon: SealCheck
  }
];

const FLOW_STAGES: FlowStage[] = [
  {
    stage: "Stage 1",
    focus: "Narrative ignition",
    description:
      "Reframe archive copy into South Korea-first storyboards, press kits, and AI prompt sequences for leadership and media."
  },
  {
    stage: "Stage 2",
    focus: "Experience lab",
    description:
      "Test Toss deposits, subscription billing, and instant cashback across sandbox environments before nationwide release."
  },
  {
    stage: "Stage 3",
    focus: "Command centre",
    description:
      "Instrument ticketing, finance, and compliance to track Toss performance with automated reporting and guided resolutions."
  }
];

const KOREA_SIGNALS: KoreaSignal[] = [
  {
    title: "August 28, 2024 — South Korea verification",
    detail:
      "The archive confirms South Korea in the supported countries list, giving us the authority to lead market entry conversations.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Regulation pace",
    detail:
      "We align Financial Services Commission updates with knowledge base pages so advisors, AI assistants, and partners stay in sync.",
    icon: CalendarBlank
  },
  {
    title: "Digital velocity",
    detail:
      "Analytics benchmark Toss checkout speeds, conversion, and error states, powering weekly retros for revenue leaders.",
    icon: TrendUp
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Toss Payment Gateway for Cloud MLM Software";
  const description =
    "Transform the archived Toss Payment Gateway experience into a South Korea-first growth platform with AI narration and resilient operations.";

  return {
    title,
    description,
    keywords: [
      "Toss payment gateway integration",
      "South Korea MLM software payments",
      "Cloud MLM Software Toss gateway",
      "Toss secure fast seamless",
      "AI enablement for Toss payments"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/toss", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type TossPageProps = {
  params: { lang: SupportedLocale };
};

export default function TossPage({ params }: TossPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24 pt-16">
      <section className="relative isolate overflow-hidden rounded-[3rem] border border-slate-100 bg-gradient-to-br from-[#eef1ff] via-white to-[#f7f2ff] px-8 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-[#111a3f] dark:via-[#0b1028] dark:to-black">
        <div className="absolute -top-32 left-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-300/30 blur-3xl dark:bg-sky-500/20" />
        <div className="absolute -bottom-20 right-0 h-80 w-80 translate-x-1/3 rounded-full bg-indigo-300/30 blur-3xl dark:bg-indigo-500/20" />
        <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-indigo-700 dark:border-white/10 dark:bg-white/10 dark:text-indigo-200">
              South Korea • Secure • Fast • Seamless
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Toss Payment Gateway for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                Elevate Toss from archived copy to a launch engine where narratives, customer journeys, and operations work in
                harmony for Korea’s innovation economy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={buildLocalizedPath("/contact", locale)}>Architect the Toss rollout</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={buildLocalizedPath("/pricing", locale)}>Compare engagement models</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-5 rounded-[2.5rem] border border-indigo-100 bg-white/90 p-8 shadow-inner dark:border-white/10 dark:bg-white/5 sm:grid-cols-3">
              {MOMENTUM_STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <article key={stat.title} className="flex flex-col gap-3 rounded-2xl border border-slate-100 p-5 dark:border-white/10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-600 dark:text-indigo-200">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-semibold text-slate-900 dark:text-white">{stat.highlight}</p>
                    </div>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{stat.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-5 rounded-[2.5rem] border border-indigo-100 bg-gradient-to-br from-white via-indigo-50 to-white p-8 shadow-xl dark:border-white/10 dark:bg-gradient-to-br dark:from-indigo-900/40 dark:via-slate-950 dark:to-black">
            <div className="flex items-center gap-3">
              <Cloud className="h-6 w-6 text-indigo-600 dark:text-indigo-200" aria-hidden />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-200">Velocity plan</p>
            </div>
            <div className="space-y-6">
              {FLOW_STAGES.map((stage) => (
                <article key={stage.stage} className="space-y-3 rounded-3xl border border-slate-100 p-6 dark:border-white/10">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
                        {stage.stage}
                      </p>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stage.focus}</h3>
                    </div>
                    <Lightning className="h-6 w-6 text-indigo-600 dark:text-indigo-200" aria-hidden />
                  </div>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{stage.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[2.5rem] border border-slate-100 bg-white/90 p-10 shadow-sm dark:border-white/10 dark:bg-white/5 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-slate-500 dark:border-white/10 dark:text-slate-300">
              Trusted launch framework
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Every Toss integration moment orchestrated.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              From finance and compliance to marketing and product, we choreograph how teams experience Toss, ensuring stories,
              systems, and AI copilots remain synchronised.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-indigo-50/70 via-white to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-indigo-900/30 dark:via-white/5 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Executive diagnostics</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Interactive scorecards track conversion, uptime, and customer sentiment as Toss scales across the network.
                </p>
              </article>
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-indigo-50/60 to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-white/5 dark:via-indigo-900/20 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Enablement burst</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Releases AI-assisted playbooks, certification paths, and field kits that keep distributors active and compliant.
                </p>
              </article>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-indigo-100 bg-gradient-to-br from-white via-indigo-50 to-white p-6 shadow-inner dark:border-white/10 dark:bg-gradient-to-br dark:from-indigo-900/30 dark:via-white/5 dark:to-transparent">
            <div className="flex items-center gap-3">
              <Sparkle className="h-6 w-6 text-indigo-600 dark:text-indigo-200" aria-hidden />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-700 dark:text-indigo-200">
                South Korea insights
              </span>
            </div>
            {KOREA_SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article key={signal.title} className="space-y-2 rounded-2xl border border-indigo-200/70 bg-white/90 p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-200" aria-hidden />
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{signal.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{signal.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-slate-100 bg-gradient-to-tr from-white via-indigo-50 to-slate-50 p-12 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-slate-950 dark:via-indigo-900/30 dark:to-black">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-indigo-600 dark:text-indigo-200">Forward motion</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Launch Toss with uncompromised precision.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              We transform the archive into living assets—demos, AI prompts, operational dashboards—so Toss stays secure, fast, and
              seamless for every stakeholder.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact/">Talk with a strategist</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={buildLocalizedPath("/support", locale)}>Connect with support intelligence</Link>
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
