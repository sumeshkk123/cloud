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
  ChartLineUp,
  DeviceMobile,
  GlobeHemisphereEast,
  Lightning,
  ShieldCheck,
  Timer,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  label: string;
  description: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  detail: string;
  icon: IconType;
  accent: string;
};

type FlowStage = {
  title: string;
  summary: string;
  outcome: string;
  icon: IconType;
};

type CountrySpotlight = {
  country: string;
  date: string;
  narrative: string;
  link: string;
};

const HERO_METRICS: HeroMetric[] = [
  {
    label: "Secure transfers",
    description: "Routes payment information between customer, merchant, and financial institution with encrypted precision.",
    icon: ShieldCheck
  },
  {
    label: "Fast settlement",
    description: "Delivers fast, seamless payment experiences that keep direct selling journeys responsive.",
    icon: Lightning
  },
  {
    label: "Device ready",
    description: "Supports secure payments through Apple devices across the regions GrabPay already serves.",
    icon: DeviceMobile
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Security orchestrated",
    detail: "GrabPay is a crucial service for securely handling every transaction. We align that promise with compliance-ready dashboards for stakeholders.",
    icon: ShieldCheck,
    accent: "from-emerald-100 via-white to-transparent dark:from-emerald-500/20 dark:via-slate-900 dark:to-transparent"
  },
  {
    title: "Speed operationalised",
    detail: "Fast authorisations and settlements become measurable KPIs so finance and field teams can prove a seamless experience in every cadence.",
    icon: Lightning,
    accent: "from-orange-100 via-white to-transparent dark:from-orange-500/15 dark:via-slate-900 dark:to-transparent"
  },
  {
    title: "Experience unified",
    detail: "Seamless journeys combine enrolment, checkout, and payout flows, giving customers and merchants the same frictionless rhythm.",
    icon: UsersThree,
    accent: "from-sky-100 via-white to-transparent dark:from-sky-500/20 dark:via-slate-900 dark:to-transparent"
  }
];

const FLOW_STAGES: FlowStage[] = [
  {
    title: "Initiate and capture",
    summary: "Customers launch secure GrabPay checkouts that immediately synchronise with merchant systems.",
    outcome: "Every intent is logged with the detail finance teams need before authorisation even begins.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Authorise and route",
    summary: "GrabPay moves payment information between merchant, customer, and financial institution without exposure.",
    outcome: "Approvals and declines surface in real time so teams can act while momentum is highest.",
    icon: Timer
  },
  {
    title: "Settle and humanise",
    summary: "Fast settlements trigger messaging, analytics, and knowledge-base updates for the entire organisation.",
    outcome: "Seamless follow-up ensures the secure, fast, and seamless promise is evident to every stakeholder.",
    icon: ChartLineUp
  }
];

const COUNTRY_SPOTLIGHT: CountrySpotlight = {
  country: "Singapore",
  date: "August 28, 2024",
  narrative:
    "The GrabPay archive highlights Singapore as an active market within the supported countries list, underscoring the payment gateway’s reach across the region.",
  link: "/mlm-software-singapore/"
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "GrabPay Payment Gateway for Cloud MLM Software";
  const description =
    "Transform the GrabPay Payment Gateway archive into a secure, fast, and seamless launch experience for your network marketing operations.";

  return {
    title,
    description,
    keywords: [
      "GrabPay payment gateway",
      "secure fast seamless payments",
      "GrabPay for network marketing",
      "Cloud MLM Software GrabPay integration",
      "GrabPay supported countries Singapore"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/grabpay", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type GrabPayPageProps = {
  params: { lang: SupportedLocale };
};

export default function GrabPayPage({ params }: GrabPayPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative isolate overflow-hidden rounded-[2.5rem] border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-emerald-50 px-8 py-24 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/30">
        <div className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-500/20" />
        <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-500/10" />
        <div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:border-white/10 dark:bg-white/10 dark:text-emerald-100">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              Secure · Fast · Seamless
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              GrabPay Payment Gateway for Cloud MLM Software
            </h1>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              GrabPay Payment Gateway offers secure, fast, and seamless payment solutions for your business. Cloud MLM Software
              translates that promise into a guided launch experience for distributors, finance teams, and leadership.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-3 rounded-2xl border border-emerald-100 bg-white/80 p-5 shadow-inner transition hover:-translate-y-1 hover:border-emerald-200 dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                      {metric.label}
                    </h2>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{metric.description}</p>
                  </article>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={buildLocalizedPath("/contact", locale)}>Start a GrabPay conversation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={buildLocalizedPath("/pricing", locale)}>Review pricing pathways</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-inner transition hover:-translate-y-1 hover:border-emerald-200 dark:border-white/10 dark:bg-white/5"
                >
                  <div
                    className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${pillar.accent} opacity-70`}
                  />
                  <div className="relative flex items-start gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{pillar.detail}</p>
                    </div>
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
              Payment journey
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              How secure, fast, and seamless becomes operational reality
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              A payment gateway like GrabPay facilitates online transactions by securely transferring payment information
              between every participant. We give that flow structure so decision makers can trace outcomes end to end.
            </p>
          </header>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {FLOW_STAGES.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <article
                  key={stage.title}
                  className="relative flex h-full flex-col gap-4 rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-emerald-50 p-6 shadow-inner transition hover:-translate-y-1 hover:border-emerald-200 dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950/40 dark:via-slate-900/60 dark:to-emerald-950/30"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      <span className="text-sm font-semibold uppercase tracking-widest text-emerald-500 dark:text-emerald-200">
                        0{index + 1}
                      </span>{" "}
                      {stage.title}
                    </h3>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{stage.summary}</p>
                  </div>
                  <div className="mt-auto rounded-2xl border border-emerald-100 bg-white/70 p-4 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                    {stage.outcome}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr,1.15fr]">
          <aside className="flex flex-col justify-between gap-6 rounded-3xl border border-slate-100 bg-gradient-to-br from-emerald-900 via-slate-900 to-black p-10 text-white shadow-sm dark:border-white/10">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight">Payment gateway supported countries</h2>
              <p className="text-sm leading-6 text-slate-200">
                GrabPay is supported in numerous countries, allowing users to make secure payments via Apple devices. We
                document each market so your expansion plans stay synchronised with the gateway&apos;s footprint.
              </p>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-sm leading-6 text-slate-100">
              {COUNTRY_SPOTLIGHT.date} — the archive confirms Singapore as a featured market. That reference anchors regional
              enablement, storytelling, and compliance alignment.
            </div>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="justify-center border-white/40 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={COUNTRY_SPOTLIGHT.link} rel="noreferrer">
                Review Singapore coverage
              </Link>
            </Button>
          </aside>
          <div className="space-y-6 rounded-[2.5rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-6 dark:border-white/10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600 dark:text-emerald-200">Region</p>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{COUNTRY_SPOTLIGHT.country}</h3>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-emerald-200">
                <GlobeHemisphereEast className="h-4 w-4" aria-hidden />
                Active market
              </span>
            </div>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{COUNTRY_SPOTLIGHT.narrative}</p>
            <div className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              The full list of supported countries is provided below the archived hero banner. We convert that static mention
              into structured roadmaps for launches, compliance documentation, and executive storytelling.
            </div>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-200 dark:hover:text-emerald-100"
            >
              Coordinate regional support
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-[2.5rem] border border-emerald-100 bg-gradient-to-tr from-emerald-50 via-white to-slate-50 p-10 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-emerald-900/40 dark:via-slate-950 dark:to-black">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to lead with GrabPay?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            We turn archived statements about secure, fast, and seamless GrabPay payments into launch playbooks, AI-ready
            knowledge bases, and measurable experiences for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/support", locale)}>Connect with our enablement team</Link>
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
