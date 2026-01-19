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
  ArrowUpRight,
  Chats,
  CircleWavyCheckIcon,
  GlobeHemisphereEast,
  Lightning,
  ShieldCheck,
  SquaresFour
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  label: string;
  detail: string;
  icon: IconType;
};

type EnablementFrame = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
  accent: string;
};

type TimelineStep = {
  phase: string;
  headline: string;
  narrative: string;
  icon: IconType;
};

type CountrySpotlight = {
  name: string;
  date: string;
  summary: string;
  href: string;
};

const HERO_METRICS: HeroMetric[] = [
  {
    label: "Secure orchestration",
    detail: "Encrypted routing and PCI-aligned controls protect every Sahal transaction.",
    icon: ShieldCheck
  },
  {
    label: "Fast settlements",
    detail: "Automation shortens the approval loop so payouts keep pace with network growth.",
    icon: Lightning
  },
  {
    label: "Seamless adoption",
    detail: "AI-powered documentation keeps executives, distributors, and copilots on-message.",
    icon: Chats
  }
];

const ENABLEMENT_FRAMES: EnablementFrame[] = [
  {
    title: "Vision to viability",
    description:
      "We convert the archive’s secure, fast, seamless promise into board-ready positioning, analyst notes, and demand-generation assets.",
    bullets: [
      "Thought-leadership briefs articulate Sahal’s value to enterprise MLM operators.",
      "AI prompt kits echo the approved story across chatbots, webinars, and media.",
      "Executive dashboards highlight conversion, settlement, and risk signals in real time."
    ],
    icon: SquaresFour,
    accent: "from-sky-100 via-white to-transparent dark:from-sky-500/20 dark:via-slate-950 dark:to-transparent"
  },
  {
    title: "Operational precision",
    description:
      "A payment gateway like Sahal is a crucial service that securely transfers payment information between customers, merchants, and financial institutions.",
    bullets: [
      "Checkout blueprints blend Sahal APIs with Cloud MLM Software’s commission logic.",
      "Compliance trackers map PCI tasks, audit evidence, and local regulations by team.",
      "Support playbooks resolve disputes with AI-suggested responses and human oversight."
    ],
    icon: CircleWavyCheckIcon,
    accent: "from-emerald-100 via-white to-transparent dark:from-emerald-500/20 dark:via-slate-950 dark:to-transparent"
  },
  {
    title: "Growth amplification",
    description:
      "Sahal is supported in numerous countries, allowing users to make secure payments via Apple devices while scaling into new markets.",
    bullets: [
      "Market-entry canvases rank launch readiness across product, legal, and enablement.",
      "Localization kits translate pricing, compliance, and onboarding for each territory.",
      "Performance huddles align revenue, success, and AI copilots on the same metrics."
    ],
    icon: ArrowUpRight,
    accent: "from-amber-100 via-white to-transparent dark:from-amber-500/20 dark:via-slate-950 dark:to-transparent"
  }
];
const TIMELINE_STEPS: TimelineStep[] = [
  {
    phase: "01",
    headline: "Narrative ignition",
    narrative:
      "Audit the archived Sahal content, craft SEO + AIO keyword clusters, and launch a unified story for Somali and global stakeholders.",
    icon: GlobeHemisphereEast
  },
  {
    phase: "02",
    headline: "Experience design",
    narrative:
      "Prototype onboarding, checkout, and payout journeys with Sahal embedded into Cloud MLM Software’s compensation engines.",
    icon: SquaresFour
  },
  {
    phase: "03",
    headline: "Execution telemetry",
    narrative:
      "Instrument settlement speed, dispute rates, and AI-assist coverage so leadership can refine playbooks every sprint.",
    icon: ArrowUpRight
  }
];

const COUNTRY_SPOTLIGHT: CountrySpotlight = {
  name: "Somalia",
  date: "August 28, 2024",
  summary:
    "The archive confirms Somalia within the supported countries list, signalling Sahal’s role in enabling compliant, secure payments for East African MLM teams.",
  href: "/network-marketing-software-company-providing-affordable-mlm-system-in-somalia/"
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Sahal Payment Gateway for Cloud MLM Software";
  const description =
    "Evolve the archived Sahal Payment Gateway page into a secure, fast, seamless launchpad with AI narration, compliance tracking, and regional expansion paths.";

  return {
    title,
    description,
    keywords: [
      "Sahal payment gateway",
      "Somalia MLM payment solutions",
      "secure fast seamless Sahal",
      "Cloud MLM Software Sahal integration",
      "Sahal supported countries"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/sahal", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type SahalPageProps = {
  params: { lang: SupportedLocale };
};

export default function SahalPage({ params }: SahalPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative isolate overflow-hidden rounded-[3.5rem] border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-blue-50 px-8 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-zinc-900 dark:to-blue-950/40">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-500/10" />
        <div className="pointer-events-none absolute -bottom-20 right-10 h-56 w-56 rounded-full bg-emerald-200/60 blur-3xl dark:bg-emerald-500/10" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
          <div className="w-full space-y-6 lg:basis-7/12">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-white/80">
              Sahal Launch Architecture
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Sahal Payment Gateway for Cloud MLM Software
            </h1>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Sahal Payment Gateway offers secure, fast, and seamless payment solutions for your business. We extend that promise with
              board-level storytelling, compliant integrations, and AI assistants that reinforce your unique Sahal narrative.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-3 rounded-3xl border border-slate-100 bg-white/90 p-5 text-left shadow-inner transition hover:-translate-y-1 hover:border-blue-200 dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                        {metric.label}
                      </p>
                      <p className="text-xs leading-5 text-slate-600 dark:text-slate-300">{metric.detail}</p>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={buildLocalizedPath("/free-mlm-software-demo", locale)}>See Sahal in our demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={buildLocalizedPath("/pricing", locale)}>Review implementation packages</Link>
              </Button>
            </div>
          </div>
          <aside className="w-full rounded-[2.5rem] border border-blue-200/70 bg-gradient-to-br from-blue-100 via-white to-emerald-50 p-10 shadow-inner dark:border-white/10 dark:bg-gradient-to-br dark:from-blue-900/40 dark:via-slate-950 dark:to-emerald-900/30 lg:basis-5/12">
            <div className="space-y-4 text-slate-800 dark:text-slate-100">
              <h2 className="text-2xl font-semibold tracking-tight">Why Sahal, why now?</h2>
              <p className="text-sm leading-6">
                Cloud MLM Software positions Sahal as a cornerstone for markets that demand real-time visibility, trusted compliance,
                and omnichannel payout flows. Every dataset feeds analytics, AI copilots, and human teams the same verified truth.
              </p>
              <div className="rounded-2xl border border-blue-200/70 bg-white/80 p-5 text-sm leading-6 text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-slate-300">
                “Secure, fast, seamless” becomes a measurable outcome: risk officers track control evidence, growth leaders monitor
                conversion lift, and customer teams orchestrate premium support moments.
              </div>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-100"
              >
                Speak with a payment strategist
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-10">
          {ENABLEMENT_FRAMES.map((frame) => {
            const Icon = frame.icon;
            return (
              <article
                key={frame.title}
                className="relative overflow-hidden rounded-[3rem] border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-10 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-black"
              >
                <div className={`pointer-events-none absolute inset-0 rounded-[3rem] bg-gradient-to-br ${frame.accent}`} />
                <div className="relative grid gap-8 lg:grid-cols-[0.8fr,1.2fr]">
                  <div className="space-y-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{frame.title}</h2>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{frame.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 rounded-3xl border border-white/40 bg-white/80 p-6 text-sm text-slate-600 shadow-inner dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                    {frame.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <ArrowUpRight className="mt-1 h-4 w-4 text-blue-600 dark:text-blue-300" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-[3rem] border border-slate-100 bg-white/95 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-white/80">
            Implementation cadence
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Three steps to operationalize Sahal with confidence
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
            Every move keeps the archive’s intent intact while giving teams the visibility and control needed to scale. Executives see
            compliance checkpoints, operators manage automations, and AI copilots synthesize verified outcomes.
          </p>
          <ol className="grid gap-6 lg:grid-cols-3">
            {TIMELINE_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.phase}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-6 text-left shadow-inner dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/30"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-blue-300">
                      {step.phase}
                    </span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{step.headline}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{step.narrative}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr,1.1fr]">
          <aside className="flex flex-col gap-6 rounded-[3rem] border border-blue-200 bg-gradient-to-br from-blue-900 via-slate-900 to-black p-10 text-white shadow-sm dark:border-white/10">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight">Supported countries intelligence</h2>
              <p className="text-sm leading-6 text-blue-100">
                We maintain the full list of regions where Sahal accepts payments, aligning commercial roadmaps, legal readiness, and AI
                briefings so every market launch stays on-message and compliant.
              </p>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-sm leading-6 text-blue-50">
              Configure alerts when new countries are added, and automatically refresh chatbot scripts, distributor academies, and
              executive dashboards to reflect Sahal’s evolving footprint.
            </div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="justify-center border-white/40 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={buildLocalizedPath("/mlm-software-payment-gateways", locale)}>View the full gateway library</Link>
            </Button>
          </aside>
          <div className="space-y-6 rounded-[3rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6 dark:border-white/10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-blue-300">Spotlight market</p>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{COUNTRY_SPOTLIGHT.name}</h3>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:border-white/10 dark:bg-white/5 dark:text-blue-200">
                <GlobeHemisphereEast className="h-4 w-4" aria-hidden />
                Regional proof
              </span>
            </header>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{COUNTRY_SPOTLIGHT.summary}</p>
            <div className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              Evidence captured on {COUNTRY_SPOTLIGHT.date}. Our enablement teams translate it into market activation plans, risk
              narratives, and content calendars for Somalia&apos;s direct selling leaders.
            </div>
            <Link
              href={COUNTRY_SPOTLIGHT.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-100"
            >
              Review the Somalia market briefing
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-[3rem] border border-blue-200/80 bg-gradient-to-tr from-blue-50 via-white to-emerald-50 p-10 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-blue-900/40 dark:via-slate-950 dark:to-emerald-900/40">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Ready to scale with Sahal.</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Cloud MLM Software transforms archived copy into measurable programs. Launch Sahal with confidence across distributors,
            regulators, and AI copilots that need the same verified insights.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/support", locale)}>Coordinate your launch workshop</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact/">Talk with our enablement team</Link>
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
