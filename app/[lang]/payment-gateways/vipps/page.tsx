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
  ChatsCircle,
  Flame,
  GlobeHemisphereEast,
  Lightning,
  ListChecks,
  MapPin,
  ShieldCheck,
  Sparkle,
  TrendUp
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  title: string;
  metric: string;
  copy: string;
  icon: IconType;
};

type Sprint = {
  stage: string;
  focus: string;
  details: string[];
};

type NorwaySignal = {
  title: string;
  description: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Narrative authority",
    metric: "Board-ready",
    copy: "Transform the archive into Norway-first decks, analyst notes, and AI prompts that articulate Vipps leadership.",
    icon: Sparkle
  },
  {
    title: "Journey excellence",
    metric: "Omni-channel",
    copy: "Prototype Vipps payments across web, app, and in-person experiences with feedback loops for distributors.",
    icon: ChatsCircle
  },
  {
    title: "Operational trust",
    metric: "Always measured",
    copy: "Instrument finance, risk, and support teams with live telemetry to govern Vipps across every campaign.",
    icon: ShieldCheck
  }
];

const SPRINTS: Sprint[] = [
  {
    stage: "Sprint 1",
    focus: "Narrative ignition",
    details: [
      "Rebuild the secure, fast, seamless promise into executive talking points and AI-friendly scripts.",
      "Publish SEO+AIO articles that position Cloud MLM Software as Norway’s Vipps expert.",
      "Curate investor and partner updates tied to product milestones."
    ]
  },
  {
    stage: "Sprint 2",
    focus: "Experience rehearsal",
    details: [
      "Simulate Vipps journeys for onboarding, loyalty, and recurring payments in staging labs.",
      "Support role-play sessions that equip field leaders with confident demonstrations.",
      "Capture telemetry and sentiment to refine flows before production."
    ]
  },
  {
    stage: "Sprint 3",
    focus: "Operational assurance",
    details: [
      "Automate reconciliation, compliance reporting, and service-level monitoring.",
      "Deliver AI-assisted runbooks for support teams handling live Vipps enquiries.",
      "Run continuity drills to validate peak season readiness across regions."
    ]
  }
];

const NORWAY_SIGNALS: NorwaySignal[] = [
  {
    title: "August 28, 2024 — Norway confirmed",
    description:
      "The archive identifies Norway as a supported market, evidencing our authority when briefing enterprises and regulators.",
    icon: MapPin
  },
  {
    title: "Digital-first society",
    description:
      "We align Vipps messaging with Norway’s cashless leadership, giving executives the language to articulate strategic differentiation.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Climate-ready operations",
    description:
      "AI copilots highlight sustainability and inclusion milestones, ensuring Vipps programmes resonate with Norwegian values.",
    icon: Flame
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Vipps Payment Gateway for Cloud MLM Software";
  const description =
    "Convert the Vipps Payment Gateway archive into a Norway-first growth engine with narrative leadership, experience rehearsal, and operational assurance.";

  return {
    title,
    description,
    keywords: [
      "Vipps payment gateway integration",
      "Norway MLM software payments",
      "Cloud MLM Software Vipps",
      "secure fast seamless Vipps",
      "AI enablement for Vipps"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/vipps", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type VippsPageProps = {
  params: { lang: SupportedLocale };
};

export default function VippsPage({ params }: VippsPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24 pt-16">
      <section className="relative isolate overflow-hidden rounded-[3rem] border border-orange-100 bg-gradient-to-br from-[#fff4eb] via-white to-[#fff9f1] px-8 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-[#2b1502] dark:via-[#160702] dark:to-black">
        <div className="absolute -left-12 top-14 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl dark:bg-orange-500/20" />
        <div className="absolute -right-16 bottom-8 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-500/20" />
        <div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-orange-700 dark:border-white/10 dark:bg-white/10 dark:text-orange-200">
              Norway • Secure • Fast • Seamless
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Vipps Payment Gateway for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                We transform the Vipps archive into a launch programme that harmonises executive storytelling, customer experience,
                and always-on operations for Norway’s digital nation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={buildLocalizedPath("/contact", locale)}>Plan the Vipps rollout</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={buildLocalizedPath("/pricing", locale)}>Review engagement models</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-5 rounded-[2.5rem] border border-orange-100 bg-white/90 p-8 shadow-inner dark:border-white/10 dark:bg-white/5 sm:grid-cols-3">
              {HIGHLIGHTS.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <article key={highlight.title} className="flex flex-col gap-3 rounded-2xl border border-slate-100 p-5 dark:border-white/10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-600 dark:text-orange-200">
                        {highlight.title}
                      </p>
                      <p className="text-2xl font-semibold text-slate-900 dark:text-white">{highlight.metric}</p>
                    </div>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{highlight.copy}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-[2.5rem] border border-orange-100 bg-gradient-to-br from-white via-orange-50 to-white p-8 shadow-xl dark:border-white/10 dark:bg-gradient-to-br dark:from-orange-900/40 dark:via-slate-950 dark:to-black">
            <div className="flex items-center gap-3">
              <ListChecks className="h-6 w-6 text-orange-600 dark:text-orange-200" aria-hidden />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600 dark:text-orange-200">Launch sprints</p>
            </div>
            <div className="space-y-6">
              {SPRINTS.map((sprint) => (
                <article key={sprint.stage} className="space-y-3 rounded-3xl border border-slate-100 p-6 dark:border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
                        {sprint.stage}
                      </p>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{sprint.focus}</h3>
                    </div>
                    <Lightning className="h-6 w-6 text-orange-600 dark:text-orange-200" aria-hidden />
                  </div>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {sprint.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <Button asChild size="lg" className="justify-center gap-2 bg-orange-600 text-white hover:bg-orange-500">
              <Link href={buildLocalizedPath("/support", locale)}>
                Coordinate enablement
                <TrendUp className="h-5 w-5" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2.5rem] border border-slate-100 bg-white/90 p-10 shadow-sm dark:border-white/10 dark:bg-white/5 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-slate-500 dark:border-white/10 dark:text-slate-300">
              Norway advantage
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Vipps becomes more than a compliance checkbox.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software synchronises communications, journeys, and operations so Vipps conversations move from optional to
              strategic differentiation.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-orange-50/70 via-white to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-orange-900/30 dark:via-white/5 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Executive conviction</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Weekly situation reports blend adoption, sentiment, and risk updates for leadership decisions.
                </p>
              </article>
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-orange-50/60 to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-white/5 dark:via-orange-900/20 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Experience alignment</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Demo ecosystems connect web, mobile, and in-person Vipps flows that mirror Norwegian habits.
                </p>
              </article>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-orange-100 bg-gradient-to-br from-white via-orange-50 to-white p-6 shadow-inner dark:border-white/10 dark:bg-gradient-to-br dark:from-orange-900/30 dark:via-white/5 dark:to-transparent">
            <div className="flex items-center gap-3">
              <Lightning className="h-6 w-6 text-orange-600 dark:text-orange-200" aria-hidden />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700 dark:text-orange-200">
                Norway signals
              </span>
            </div>
            {NORWAY_SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article key={signal.title} className="space-y-2 rounded-2xl border border-orange-200/70 bg-white/90 p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-orange-600 dark:text-orange-200" aria-hidden />
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
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-slate-100 bg-gradient-to-tr from-white via-orange-50 to-slate-50 p-12 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-slate-950 dark:via-orange-900/30 dark:to-black">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-orange-600 dark:text-orange-200">Next step</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Lead Norway’s Vipps conversations with confidence.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software turns the archive into living assets—demos, AI prompts, and command centres—that keep Vipps secure,
              fast, and seamless.
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
