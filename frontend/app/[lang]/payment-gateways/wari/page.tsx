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
  Bank,
  ChartLineUp,
  GlobeHemisphereWest,
  Lightning,
  MapPin,
  Megaphone,
  ShieldCheck,
  UsersThree,
  Wind
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type FocusArea = {
  label: string;
  summary: string;
  icon: IconType;
};

type Initiative = {
  title: string;
  description: string;
  bullets: string[];
};

type SenegalSignal = {
  title: string;
  detail: string;
  icon: IconType;
};

const FOCUS_AREAS: FocusArea[] = [
  {
    label: "Storycraft",
    summary: "Translate the secure, fast, seamless archive into West Africa-ready narratives, decks, and AI prompt cards.",
    icon: Megaphone
  },
  {
    label: "Experience lab",
    summary: "Prototype Wari onboarding, recurring billing, and cash-in cash-out journeys before launch day.",
    icon: UsersThree
  },
  {
    label: "Assurance hub",
    summary: "Instrument finance, compliance, and support functions with telemetry to prove Wari’s performance.",
    icon: ShieldCheck
  }
];

const INITIATIVES: Initiative[] = [
  {
    title: "Narrative leadership",
    description:
      "Elevate Wari stories for Senegal’s financial inclusion movement while equipping AI assistants with aligned messaging.",
    bullets: [
      "Executive briefings link Wari adoption to growth, compliance, and social impact.",
      "Thought leadership articles highlight Cloud MLM Software’s West Africa expertise.",
      "AI prompt kits ensure multilingual consistency across support and sales."
    ]
  },
  {
    title: "Experience rehearsal",
    description:
      "Simulate mobile wallet flows, agent interactions, and international remittances to surface improvements before launch.",
    bullets: [
      "Staging environments mirror bandwidth variability across Dakar and regional hubs.",
      "Role-based walkthroughs coach distributors on Wari narratives and troubleshooting.",
      "Feedback loops translate observations into product and training enhancements."
    ]
  },
  {
    title: "Operational proof",
    description:
      "Automate risk monitoring, reconciliation, and service-level visibility so leadership trusts Wari at scale.",
    bullets: [
      "Finance dashboards reconcile real-time settlement data from Wari’s APIs.",
      "Compliance monitors surface AML and KYC health with audit-ready evidence.",
      "Continuity drills protect availability during campaign surges and seasonal peaks."
    ]
  }
];

const SENEGAL_SIGNALS: SenegalSignal[] = [
  {
    title: "August 28, 2024 — Senegal spotlight",
    detail:
      "The archive lists Senegal as a supported market, reinforcing our ability to lead regional conversations with concrete evidence.",
    icon: MapPin
  },
  {
    title: "Regional influence",
    detail:
      "We align Wari messaging with ECOWAS financial inclusion initiatives, empowering leadership with policy-aware language.",
    icon: GlobeHemisphereWest
  },
  {
    title: "Trade winds intelligence",
    detail:
      "AI copilots track currency flows, diaspora remittances, and regulatory updates so stakeholders stay proactive.",
    icon: Wind
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Wari Payment Gateway for Cloud MLM Software";
  const description =
    "Turn the Wari Payment Gateway archive into a Senegal-first launch programme featuring narrative leadership, journey rehearsal, and operational assurance.";

  return {
    title,
    description,
    keywords: [
      "Wari payment gateway integration",
      "Senegal mobile money MLM software",
      "Cloud MLM Software Wari",
      "secure fast seamless Wari",
      "AI enablement for Wari payments"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/wari", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type WariPageProps = {
  params: { lang: SupportedLocale };
};

export default function WariPage({ params }: WariPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24 pt-16">
      <section className="relative isolate overflow-hidden rounded-[3rem] border border-emerald-100 bg-gradient-to-br from-[#f1fff6] via-white to-[#f3fbff] px-8 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-[#05271c] dark:via-[#03131a] dark:to-black">
        <div className="absolute -left-12 top-14 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-500/20" />
        <div className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-500/20" />
        <div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700 dark:border-white/10 dark:bg-white/10 dark:text-emerald-200">
              Senegal • Secure • Fast • Seamless
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Wari Payment Gateway for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                We reshape the Wari archive into a West Africa-first programme that aligns executive storytelling, distributor
                journeys, and operational proof for Senegal’s innovation economy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={buildLocalizedPath("/contact", locale)}>Design the Wari rollout</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={buildLocalizedPath("/pricing", locale)}>Compare engagement options</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-5 rounded-[2.5rem] border border-emerald-100 bg-white/90 p-8 shadow-inner dark:border-white/10 dark:bg-white/5 sm:grid-cols-3">
              {FOCUS_AREAS.map((area) => {
                const Icon = area.icon;
                return (
                  <article key={area.label} className="flex flex-col gap-3 rounded-2xl border border-slate-100 p-5 dark:border-white/10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600 dark:text-emerald-200">
                        {area.label}
                      </p>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{area.summary}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-[2.5rem] border border-emerald-100 bg-gradient-to-br from-white via-emerald-50 to-white p-8 shadow-xl dark:border-white/10 dark:bg-gradient-to-br dark:from-emerald-900/40 dark:via-slate-950 dark:to-black">
            <div className="flex items-center gap-3">
              <Bank className="h-6 w-6 text-emerald-600 dark:text-emerald-200" aria-hidden />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-200">Launch pillars</p>
            </div>
            <div className="space-y-6">
              {INITIATIVES.map((initiative) => (
                <article key={initiative.title} className="space-y-3 rounded-3xl border border-slate-100 p-6 dark:border-white/10">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{initiative.title}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{initiative.description}</p>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {initiative.bullets.map((bullet) => (
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
              <Link href={buildLocalizedPath("/support", locale)}>
                Coordinate enablement
                <ChartLineUp className="h-5 w-5" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2.5rem] border border-slate-100 bg-white/90 p-10 shadow-sm dark:border-white/10 dark:bg-white/5 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-slate-500 dark:border-white/10 dark:text-slate-300">
              West Africa intelligence
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Wari becomes a strategic advantage for your network.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software integrates communications, journeys, and operations so Wari adoption is measurable, resilient, and
              celebrated across Senegal’s ecosystem.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-emerald-50/70 via-white to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-emerald-900/30 dark:via-white/5 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Executive conviction</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Weekly dashboards highlight adoption, customer sentiment, and compliance insights for leadership briefings.
                </p>
              </article>
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-emerald-50/60 to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-white/5 dark:via-emerald-900/20 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Experience clarity</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Demo stories cover remittance, airtime, and bill-payment flows that resonate with Senegalese distributors.
                </p>
              </article>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50 to-white p-6 shadow-inner dark:border-white/10 dark:bg-gradient-to-br dark:from-emerald-900/30 dark:via-white/5 dark:to-transparent">
            <div className="flex items-center gap-3">
              <Lightning className="h-6 w-6 text-emerald-600 dark:text-emerald-200" aria-hidden />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-200">
                Senegal signals
              </span>
            </div>
            {SENEGAL_SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article key={signal.title} className="space-y-2 rounded-2xl border border-emerald-200/70 bg-white/90 p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-emerald-600 dark:text-emerald-200" aria-hidden />
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
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-slate-100 bg-gradient-to-tr from-white via-emerald-50 to-slate-50 p-12 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-slate-950 dark:via-emerald-900/30 dark:to-black">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-emerald-600 dark:text-emerald-200">Next move</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Lead West Africa’s Wari conversations with confidence.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Partner with Cloud MLM Software to transform archival content into launch-ready demos, AI prompts, and command centres
              that keep Wari secure, fast, and seamless.
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
