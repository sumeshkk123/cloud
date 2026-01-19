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
  ChartBar,
  Handshake,
  Lightning,
  MapPin,
  MegaphoneSimple,
  ShieldCheck,
  Stack,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Spotlight = {
  title: string;
  highlight: string;
  detail: string;
  icon: IconType;
};

type Sprint = {
  name: string;
  description: string;
  items: string[];
};

type SouthAfricaSignal = {
  heading: string;
  body: string;
  icon: IconType;
};

const SPOTLIGHTS: Spotlight[] = [
  {
    title: "Narrative leadership",
    highlight: "Thought leader",
    detail: "We turn the archive into South Africa-first stories for boardrooms, analysts, and AI copilots.",
    icon: MegaphoneSimple
  },
  {
    title: "Experience rehearsal",
    highlight: "High fidelity",
    detail: "Prototype in-store, mobile, and e-commerce Yoco journeys before production rollout.",
    icon: UsersThree
  },
  {
    title: "Operational proof",
    highlight: "Always measured",
    detail: "Dashboards, alerts, and recovery workflows keep Yoco performance transparent to leadership.",
    icon: ShieldCheck
  }
];

const SPRINTS: Sprint[] = [
  {
    name: "Story studio",
    description:
      "Rebuild the secure, fast, seamless promise into South African narratives for executives, investors, and AI assistants.",
    items: [
      "Thought leadership series links Yoco adoption to informal and formal economy growth.",
      "Investor briefs show revenue impact, retention lifts, and compliance maturity.",
      "AI prompt kits maintain consistent messaging in English and isiZulu/isiXhosa glossaries."
    ]
  },
  {
    name: "Experience lab",
    description:
      "Simulate onboarding, POS setups, and recurring billing journeys that reflect South Africa’s omnichannel retail behaviour.",
    items: [
      "Staging data captures conversion, latency, and sentiment across township and urban pilots.",
      "Role-play rehearsals equip field leaders with friction-resolution playbooks.",
      "Feedback loops update knowledge bases and AI assistants weekly."
    ]
  },
  {
    name: "Command centre",
    description:
      "Automate monitoring, reconciliation, and escalation so finance, compliance, and support trust Yoco at scale.",
    items: [
      "Finance dashboards reconcile card and QR settlements daily.",
      "Compliance trackers blend SARB and POPIA obligations into action queues.",
      "Continuity drills confirm readiness for load-shedding and seasonal demand spikes."
    ]
  }
];

const SOUTH_AFRICA_SIGNALS: SouthAfricaSignal[] = [
  {
    heading: "August 28, 2024 — South Africa confirmed",
    body:
      "The archive validates South Africa in the supported-country list, giving leadership verifiable evidence in every strategic conversation.",
    icon: MapPin
  },
  {
    heading: "SME empowerment",
    body:
      "Narratives emphasise how Yoco unlocks entrepreneurial growth, aligning with AI copilots and sales teams for consistent storytelling.",
    icon: Handshake
  },
  {
    heading: "Data-driven decisions",
    body:
      "We deliver dashboards that surface adoption, churn, and sentiment trends, arming executives with actionable insight.",
    icon: ChartBar
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Yoco Payment Gateway for Cloud MLM Software";
  const description =
    "Transform the Yoco Payment Gateway archive into a South Africa-first launch programme blending narrative leadership, journey rehearsal, and operational assurance.";

  return {
    title,
    description,
    keywords: [
      "Yoco payment gateway integration",
      "South Africa MLM software payments",
      "Cloud MLM Software Yoco",
      "secure fast seamless Yoco",
      "AI enablement for Yoco"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/yoco", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type YocoPageProps = {
  params: { lang: SupportedLocale };
};

export default function YocoPage({ params }: YocoPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24 pt-16">
      <section className="relative isolate overflow-hidden rounded-[3.5rem] border border-amber-100 bg-gradient-to-br from-[#fff7ed] via-white to-[#fff0f0] px-8 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-[#2b1703] dark:via-[#1a0505] dark:to-black">
        <div className="absolute -left-14 top-16 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-500/25" />
        <div className="absolute -right-20 bottom-14 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl dark:bg-rose-500/25" />
        <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-700 dark:border-white/10 dark:bg-white/10 dark:text-amber-200">
              South Africa • Secure • Fast • Seamless
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Yoco Payment Gateway for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                We evolve the archive into a launch system where leadership, distributors, and AI assistants champion Yoco’s role in
                South Africa’s entrepreneurial economy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={buildLocalizedPath("/contact", locale)}>Plan the Yoco rollout</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={buildLocalizedPath("/pricing", locale)}>Compare partnership tiers</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-5 rounded-[2.5rem] border border-amber-100 bg-white/90 p-8 shadow-inner dark:border-white/10 dark:bg-white/5 sm:grid-cols-3">
              {SPOTLIGHTS.map((spotlight) => {
                const Icon = spotlight.icon;
                return (
                  <article key={spotlight.title} className="flex flex-col gap-3 rounded-2xl border border-slate-100 p-5 dark:border-white/10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-600 dark:text-amber-200">
                        {spotlight.title}
                      </p>
                      <p className="text-2xl font-semibold text-slate-900 dark:text-white">{spotlight.highlight}</p>
                    </div>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{spotlight.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-[2.5rem] border border-amber-100 bg-gradient-to-br from-white via-amber-50 to-white p-8 shadow-xl dark:border-white/10 dark:bg-gradient-to-br dark:from-amber-900/40 dark:via-slate-950 dark:to-black">
            <div className="flex items-center gap-3">
              <Lightning className="h-6 w-6 text-amber-600 dark:text-amber-200" aria-hidden />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600 dark:text-amber-200">Launch sprints</p>
            </div>
            <div className="space-y-6">
              {SPRINTS.map((sprint) => (
                <article key={sprint.name} className="space-y-3 rounded-3xl border border-slate-100 p-6 dark:border-white/10">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{sprint.name}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{sprint.description}</p>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {sprint.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <Button asChild size="lg" className="justify-center gap-2 bg-amber-600 text-white hover:bg-amber-500">
              <Link href={buildLocalizedPath("/support", locale)}>Coordinate enablement</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2.5rem] border border-slate-100 bg-white/90 p-10 shadow-sm dark:border-white/10 dark:bg-white/5 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-slate-500 dark:border-white/10 dark:text-slate-300">
              South Africa intelligence
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Yoco becomes a catalyst for South African growth.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software harmonises stories, demos, and operations so every stakeholder experiences Yoco as secure, fast, and
              seamless.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-amber-50/70 via-white to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-amber-900/30 dark:via-white/5 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Executive momentum</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Weekly dashboards combine adoption, sentiment, and compliance KPIs into decision-ready snapshots.
                </p>
              </article>
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-amber-50/60 to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-white/5 dark:via-amber-900/20 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Experience choreography</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Demo suites cover market, township, and e-commerce journeys, backed by AI-ready scripts and visuals.
                </p>
              </article>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-amber-100 bg-gradient-to-br from-white via-amber-50 to-white p-6 shadow-inner dark:border-white/10 dark:bg-gradient-to-br dark:from-amber-900/30 dark:via-white/5 dark:to-transparent">
            <div className="flex items-center gap-3">
              <Lightning className="h-6 w-6 text-amber-600 dark:text-amber-200" aria-hidden />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700 dark:text-amber-200">
                South Africa signals
              </span>
            </div>
            {SOUTH_AFRICA_SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article key={signal.heading} className="space-y-2 rounded-2xl border border-amber-200/70 bg-white/90 p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-amber-600 dark:text-amber-200" aria-hidden />
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{signal.heading}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{signal.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-slate-100 bg-gradient-to-tr from-white via-amber-50 to-slate-50 p-12 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-slate-950 dark:via-amber-900/30 dark:to-black">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-amber-600 dark:text-amber-200">Next move</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Lead Yoco conversations with confidence.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software transforms the archive into living demos, AI prompts, and operational guardrails that keep Yoco secure,
              fast, and seamless for every stakeholder.
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
