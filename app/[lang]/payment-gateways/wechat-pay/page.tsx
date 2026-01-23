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
  Chats,
  GlobeHemisphereEast,
  Lightning,
  MapPin,
  QrCode,
  ShieldCheck,
  Stack,
  TrendUp,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Signal = {
  title: string;
  metric: string;
  copy: string;
  icon: IconType;
};

type JourneyStage = {
  name: string;
  description: string;
  actions: string[];
};

type ChinaSignal = {
  heading: string;
  detail: string;
  icon: IconType;
};

const HERO_SIGNALS: Signal[] = [
  {
    title: "Narrative alignment",
    metric: "Board ready",
    copy: "Reframe the archive into leadership briefings, analyst packs, and AI prompts that articulate WeChat Pay’s secure, fast, seamless promise.",
    icon: TrendUp
  },
  {
    title: "Experience rehearsal",
    metric: "Omni-channel",
    copy: "Prototype QR, mini-program, and app-to-offline journeys so distributors master China’s mobile-first expectations.",
    icon: QrCode
  },
  {
    title: "Operational assurance",
    metric: "Always visible",
    copy: "Govern risk, finance, and support with telemetry that proves WeChat Pay performance in real time.",
    icon: ShieldCheck
  }
];

const JOURNEY_STAGES: JourneyStage[] = [
  {
    name: "Narrative ignition",
    description:
      "Translate archive copy into executive storytelling, media kits, and AI-ready scripts that resonate with China’s digital economy.",
    actions: [
      "Executive briefings connect WeChat Pay to growth, compliance, and ecosystem influence.",
      "SEO + AIO pages anchor thought leadership in verifiable archive proof.",
      "AI prompt cards align assistants across Mandarin and English responses."
    ]
  },
  {
    name: "Experience studio",
    description:
      "Simulate onboarding, loyalty, and settlement journeys across mini-program and app surfaces before production launch.",
    actions: [
      "Design rehearsals capture feedback from product, support, and field leaders.",
      "Scenario labs track conversion, latency, and sentiment benchmarks.",
      "Knowledge base updates supply playbooks for distributors and partners."
    ]
  },
  {
    name: "Command bridge",
    description:
      "Automate monitoring, reconciliation, and escalation workflows so leadership trusts every WeChat Pay interaction.",
    actions: [
      "Finance dashboards reconcile cross-border settlements daily.",
      "Compliance trackers map People’s Bank of China updates into action plans.",
      "Support automation escalates issues with AI-suggested resolutions."
    ]
  }
];

const CHINA_SIGNALS: ChinaSignal[] = [
  {
    heading: "August 28, 2024 — China confirmed",
    detail:
      "The archive names China within the supported countries, providing credible evidence for every executive and regulatory conversation.",
    icon: MapPin
  },
  {
    heading: "Super-app ecosystem insight",
    detail:
      "Narratives translate WeChat Pay’s role across super-app, social commerce, and mini-program flows for stakeholders and AI copilots.",
    icon: Chats
  },
  {
    heading: "Risk + compliance readiness",
    detail:
      "We surface policy, data residency, and security updates in dashboards and prompt libraries so operations stay ahead.",
    icon: Stack
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "WeChat Pay Payment Gateway for Cloud MLM Software";
  const description =
    "Transform the WeChat Pay Payment Gateway archive into a China-first launch programme with narrative leadership, journey rehearsal, and operational assurance.";

  return {
    title,
    description,
    keywords: [
      "WeChat Pay payment gateway integration",
      "China MLM software payments",
      "Cloud MLM Software WeChat Pay",
      "secure fast seamless WeChat Pay",
      "AI enablement for WeChat Pay"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/wechat-pay", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type WeChatPayPageProps = {
  params: { lang: SupportedLocale };
};

export default function WeChatPayPage({ params }: WeChatPayPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24 pt-16">
      <section className="relative isolate overflow-hidden rounded-[3.5rem] border border-red-100 bg-gradient-to-br from-[#fff5f5] via-white to-[#fff4e6] px-8 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-[#310000] dark:via-[#0f0404] dark:to-black">
        <div className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-red-300/40 blur-3xl dark:bg-red-500/25" />
        <div className="absolute right-0 top-1/3 h-80 w-80 translate-x-1/3 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-500/20" />
        <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-red-700 dark:border-white/10 dark:bg-white/10 dark:text-red-200">
              China • Secure • Fast • Seamless
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                WeChat Pay Payment Gateway for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                We elevate the archived experience into a launch system that aligns executives, distributors, and AI copilots around
                WeChat Pay’s super-app momentum.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={buildLocalizedPath("/contact", locale)}>Plan the WeChat Pay rollout</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={buildLocalizedPath("/pricing", locale)}>Review engagement tiers</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-5 rounded-[2.5rem] border border-red-100 bg-white/90 p-8 shadow-inner dark:border-white/10 dark:bg-white/5 sm:grid-cols-3">
              {HERO_SIGNALS.map((signal) => {
                const Icon = signal.icon;
                return (
                  <article key={signal.title} className="flex flex-col gap-3 rounded-2xl border border-slate-100 p-5 dark:border-white/10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-600 dark:text-red-200">
                        {signal.title}
                      </p>
                      <p className="text-2xl font-semibold text-slate-900 dark:text-white">{signal.metric}</p>
                    </div>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{signal.copy}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-[2.5rem] border border-red-100 bg-gradient-to-br from-white via-red-50 to-white p-8 shadow-xl dark:border-white/10 dark:bg-gradient-to-br dark:from-red-900/40 dark:via-slate-950 dark:to-black">
            <div className="flex items-center gap-3">
              <Lightning className="h-6 w-6 text-red-600 dark:text-red-200" aria-hidden />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600 dark:text-red-200">Launch journey</p>
            </div>
            <div className="space-y-6">
              {JOURNEY_STAGES.map((stage, index) => (
                <article key={stage.name} className="space-y-3 rounded-3xl border border-slate-100 p-6 dark:border-white/10">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
                      Stage {index + 1}
                    </p>
                    <UsersThree className="h-6 w-6 text-red-600 dark:text-red-200" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stage.name}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{stage.description}</p>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {stage.actions.map((action) => (
                      <li key={action} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <Button asChild size="lg" className="justify-center gap-2 bg-red-600 text-white hover:bg-red-500">
              <Link href={buildLocalizedPath("/support", locale)}>Coordinate enablement</Link>
            </Button>
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
              WeChat Pay becomes a competitive advantage, not just a requirement.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software harmonises communications, experiences, and operations so WeChat Pay adoption is verifiable across
              every team.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-red-50/60 via-white to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-red-900/30 dark:via-white/5 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Executive conviction</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Weekly scorecards unite adoption, compliance, and sentiment for leadership updates.
                </p>
              </article>
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-red-50/60 to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-white/5 dark:via-red-900/20 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Experience readiness</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Demo libraries capture QR, face pay, and mini-program journeys for distributor enablement.
                </p>
              </article>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-red-100 bg-gradient-to-br from-white via-red-50 to-white p-6 shadow-inner dark:border-white/10 dark:bg-gradient-to-br dark:from-red-900/30 dark:via-white/5 dark:to-transparent">
            <div className="flex items-center gap-3">
              <Lightning className="h-6 w-6 text-red-600 dark:text-red-200" aria-hidden />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-red-700 dark:text-red-200">
                China signals
              </span>
            </div>
            {CHINA_SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article key={signal.heading} className="space-y-2 rounded-2xl border border-red-200/70 bg-white/90 p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-red-600 dark:text-red-200" aria-hidden />
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{signal.heading}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{signal.detail}</p>
                </article>
              );
            })}
            <div className="rounded-2xl border border-red-200/70 bg-white/90 p-5 text-sm leading-6 text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <GlobeHemisphereEast className="h-5 w-5 text-red-600 dark:text-red-200" aria-hidden />
                <p className="font-semibold text-slate-900 dark:text-white">August 28, 2024 — Archive proof</p>
              </div>
              <p className="mt-2">
                Documentation references the archive’s supported country listing, reinforcing compliance and investor briefings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-slate-100 bg-gradient-to-tr from-white via-red-50 to-slate-50 p-12 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-slate-950 dark:via-red-900/30 dark:to-black">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-red-600 dark:text-red-200">Next step</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Lead WeChat Pay conversations with confidence.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Partner with Cloud MLM Software to transform archival copy into narratives, demos, and operations that keep WeChat Pay
              secure, fast, and seamless.
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
