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
  Anchor,
  ChartBar,
  CloudRain,
  Lightning,
  MapPin,
  SealCheck,
  Sparkle,
  Waves,
  GlobeHemisphereEast
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type FlowBlock = {
  title: string;
  copy: string;
  points: string[];
};

type MyanmarSignal = {
  title: string;
  detail: string;
  icon: IconType;
};

const HERO_METRICS: HeroMetric[] = [
  {
    label: "Narrative clarity",
    value: "Executive grade",
    description: "Translate Wave Money’s secure, fast, seamless heritage into Myanmar-first storytelling and AI prompts.",
    icon: Sparkle
  },
  {
    label: "Experience fluency",
    value: "Human + AI",
    description: "Prototype onboarding, wallet usage, and payout flows that equip distributors and chat assistants alike.",
    icon: Waves
  },
  {
    label: "Operational confidence",
    value: "Always-on",
    description: "Automate monitoring, reconciliation, and escalation workflows for Wave Money stakeholders.",
    icon: SealCheck
  }
];

const FLOW_BLOCKS: FlowBlock[] = [
  {
    title: "Narrative observatory",
    copy: "Reimagine archived copy into leadership-ready knowledge, tuned for Myanmar’s regulatory and cultural context.",
    points: [
      "Executive decks link Wave Money adoption to growth and compliance outcomes.",
      "AI prompt kits ensure Burmese and English assistants remain on-message.",
      "Media toolkits anchor every statement in the archive’s proof."
    ]
  },
  {
    title: "Experience rehearsal lab",
    copy: "Simulate Wave Money journeys for agents, distributors, and customers before production launch.",
    points: [
      "Journey maps incorporate agent network behaviours across townships.",
      "Role play workshops capture feedback for continuous improvement.",
      "Telemetry captures success metrics for leadership updates."
    ]
  },
  {
    title: "Operations bridge",
    copy: "Provide command-centre visibility that keeps finance, compliance, and support aligned.",
    points: [
      "Real-time dashboards reconcile transactions and liquidity balances.",
      "Alerting routes sentiment, risk, and uptime signals to owners.",
      "Continuity drills guarantee resilience during campaign surges."
    ]
  }
];

const MYANMAR_SIGNALS: MyanmarSignal[] = [
  {
    title: "August 28, 2024 — Myanmar confirmation",
    detail:
      "The archive lists Myanmar as a supported country, giving Cloud MLM Software verified authority in Wave Money discussions.",
    icon: MapPin
  },
  {
    title: "Frontier market insight",
    detail:
      "Narratives align with Myanmar’s digital inclusion roadmap, helping leadership communicate value across public and private partners.",
    icon: Anchor
  },
  {
    title: "Seasonal resilience",
    detail:
      "AI copilots translate weather, festival, and economic signals into proactive playbooks for Wave Money operations.",
    icon: CloudRain
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Wave Money Payment Gateway for Cloud MLM Software";
  const description =
    "Evolve the Wave Money Payment Gateway archive into a Myanmar-first launch programme blending narrative leadership, journey rehearsal, and operational assurance.";

  return {
    title,
    description,
    keywords: [
      "Wave Money payment gateway integration",
      "Myanmar mobile money MLM software",
      "Cloud MLM Software Wave Money",
      "secure fast seamless Wave Money",
      "AI enablement for Wave Money"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/wave-money", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type WaveMoneyPageProps = {
  params: { lang: SupportedLocale };
};

export default function WaveMoneyPage({ params }: WaveMoneyPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24 pt-16">
      <section className="relative isolate overflow-hidden rounded-[3rem] border border-sky-100 bg-gradient-to-br from-[#eef8ff] via-white to-[#f1fbff] px-8 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-[#021733] dark:via-[#020b1c] dark:to-black">
        <div className="absolute -left-12 top-14 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-500/20" />
        <div className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-500/20" />
        <div className="absolute inset-x-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-sky-200 to-transparent opacity-60 dark:via-white/10" />
        <div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-sky-700 dark:border-white/10 dark:bg-white/10 dark:text-sky-200">
              Myanmar • Secure • Fast • Seamless
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Wave Money Payment Gateway for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                Activate the Wave Money archive as a modern launch programme that aligns leadership narratives, distributor journeys,
                and operational proof across Myanmar.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={buildLocalizedPath("/contact", locale)}>Design the Wave Money rollout</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={buildLocalizedPath("/pricing", locale)}>Compare partnership tiers</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-5 rounded-[2.5rem] border border-sky-100 bg-white/90 p-8 shadow-inner dark:border-white/10 dark:bg-white/5 sm:grid-cols-3">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article key={metric.label} className="flex flex-col gap-3 rounded-2xl border border-slate-100 p-5 dark:border-white/10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-600 dark:text-sky-200">{metric.label}</p>
                      <p className="text-2xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                    </div>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{metric.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-[2.5rem] border border-sky-100 bg-gradient-to-br from-white via-sky-50 to-white p-8 shadow-xl dark:border-white/10 dark:bg-gradient-to-br dark:from-sky-900/40 dark:via-slate-950 dark:to-black">
            <div className="flex items-center gap-3">
              <ChartBar className="h-6 w-6 text-sky-600 dark:text-sky-200" aria-hidden />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-200">Launch currents</p>
            </div>
            <div className="space-y-6">
              {FLOW_BLOCKS.map((block) => (
                <article key={block.title} className="space-y-3 rounded-3xl border border-slate-100 p-6 dark:border-white/10">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{block.title}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{block.copy}</p>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {block.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <Button asChild size="lg" className="justify-center gap-2 bg-sky-600 text-white hover:bg-sky-500">
              <Link href={buildLocalizedPath("/support", locale)}>
                Coordinate enablement
                <Lightning className="h-5 w-5" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2.5rem] border border-slate-100 bg-white/90 p-10 shadow-sm dark:border-white/10 dark:bg-white/5 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-slate-500 dark:border-white/10 dark:text-slate-300">
              Myanmar intelligence
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Wave Money becomes a strategic growth lever.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software orchestrates communications, experiences, and operations so every stakeholder sees Wave Money as a
              secure, fast, seamless advantage.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-sky-50/70 via-white to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-sky-900/30 dark:via-white/5 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Executive conviction</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Weekly dashboards track adoption, sentiment, and risk, providing board-ready evidence.
                </p>
              </article>
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-sky-50/60 to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-white/5 dark:via-sky-900/20 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Experience excellence</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Demo suites cover agent cash-in, bill pay, and loyalty rewards, arming distributors with context-rich stories.
                </p>
              </article>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-sky-100 bg-gradient-to-br from-white via-sky-50 to-white p-6 shadow-inner dark:border-white/10 dark:bg-gradient-to-br dark:from-sky-900/30 dark:via-white/5 dark:to-transparent">
            <div className="flex items-center gap-3">
              <Lightning className="h-6 w-6 text-sky-600 dark:text-sky-200" aria-hidden />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700 dark:text-sky-200">
                Myanmar signals
              </span>
            </div>
            {MYANMAR_SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article key={signal.title} className="space-y-2 rounded-2xl border border-sky-200/70 bg-white/90 p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-sky-600 dark:text-sky-200" aria-hidden />
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{signal.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{signal.detail}</p>
                </article>
              );
            })}
            <div className="rounded-2xl border border-sky-200/70 bg-white/90 p-5 text-sm text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <GlobeHemisphereEast className="h-5 w-5 text-sky-600 dark:text-sky-200" aria-hidden />
                <p className="font-semibold text-slate-900 dark:text-white">August 28, 2024 — Archive proof</p>
              </div>
              <p className="mt-2 leading-6">
                Wave Money’s supported-country listing informs every compliance briefing, investor update, and AI knowledge base page.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-slate-100 bg-gradient-to-tr from-white via-sky-50 to-slate-50 p-12 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-slate-950 dark:via-sky-900/30 dark:to-black">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-sky-600 dark:text-sky-200">Next wave</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Lead Myanmar’s Wave Money narrative with conviction.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software converts the archive into living assets—demos, AI prompts, and command centres—that keep Wave Money
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
