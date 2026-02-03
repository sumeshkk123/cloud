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
  ChartPie,
  CirclesThreePlus,
  Compass,
  Cube,
  GlobeHemisphereEast,
  Handshake,
  Lightning,
  ShieldCheck
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type StrategyLens = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type LaunchTrack = {
  phase: string;
  focus: string;
  deliverables: string[];
  icon: IconType;
};

type Country = {
  name: string;
  focus: string;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Archive reference",
    value: "28 Aug 2024",
    detail: "Original PayGate page recovered from the WordPress cache as source material.",
    icon: Cube
  },
  {
    label: "Regional heartbeat",
    value: "Southern Africa",
    detail: "South Africa and Namibia lead the adoption footprint for PayGate merchants.",
    icon: GlobeHemisphereEast
  },
  {
    label: "Experience promise",
    value: "Secure • Fast • Seamless",
    detail: "The legacy headline becomes an operational mantra for modern direct selling brands.",
    icon: ShieldCheck
  }
];

const STRATEGY_LENSES: StrategyLens[] = [
  {
    title: "Revenue protection cockpit",
    summary:
      "We transform the ‘secure, fast, seamless’ statement into intelligence that satisfies CFOs, compliance teams, and investor relations.",
    bullets: [
      "Fraud playbooks covering card, EFT, and alternative payments across Southern Africa.",
      "Chargeback arbitration scripts with AI summarisation for finance and legal teams.",
      "Executive dashboards translating PayGate telemetry into board-ready insights."
    ],
    icon: ChartPie
  },
  {
    title: "Distributor journey design",
    summary:
      "The archive’s demo modules inspire a concierge-style onboarding flow for field leaders, retailers, and gig sellers.",
    bullets: [
      "Guided checkout experiences that spotlight PayGate’s instant settlement speed.",
      "Localized support narratives mixing English, Afrikaans, and regional languages.",
      "Conversion experiments tuned to incentive cycles and product launches."
    ],
    icon: Handshake
  },
  {
    title: "AI-enabled operations",
    summary:
      "We ensure human teams and AI copilots speak with one PayGate-approved voice, from support bots to leadership briefings.",
    bullets: [
      "Prompt libraries grounded in PayGate terminology, compliance, and value proposition.",
      "Automation recipes syncing payment events to commissions, inventory, and CRM.",
      "Insight cadences that coach executives on expansion into new African markets."
    ],
    icon: CirclesThreePlus
  }
];

const LAUNCH_TRACKS: LaunchTrack[] = [
  {
    phase: "Phase 01",
    focus: "Context intelligence",
    deliverables: [
      "Archive analysis translating historical copy into today’s growth narratives.",
      "GTM keyword clusters anchoring SEO & AIO performance for Southern Africa.",
      "Stakeholder interviews capturing product, finance, and compliance objectives."
    ],
    icon: Compass
  },
  {
    phase: "Phase 02",
    focus: "Experience choreography",
    deliverables: [
      "Custom demo lab showcasing PayGate flows across compensation plans.",
      "Preset demo kit for fast-moving sales teams and thought leadership content.",
      "Operations blueprint aligning e-wallet, ticketing, and backup manager modules."
    ],
    icon: Lightning
  },
  {
    phase: "Phase 03",
    focus: "Momentum analytics",
    deliverables: [
      "KPIs for approvals, settlement timing, and distributor satisfaction.",
      "Executive review cadence for risk, revenue, and expansion experimentation.",
      "AIO feedback loops keeping human and AI agents aligned on PayGate messaging."
    ],
    icon: Cube
  }
];

const COUNTRIES: Country[] = [
  {
    name: "South Africa",
    focus: "Flagship market demanding POPIA-compliant data governance and instant EFT experiences."
  },
  {
    name: "Namibia",
    focus: "Regional growth hub that values multilingual support and hybrid online-offline journeys."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "PayGate Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Activate PayGate’s secure, fast, seamless payments with Cloud MLM Software. Deliver Southern Africa-ready governance, distributor journeys, and AI-aligned operations.";

  return {
    title,
    description,
    keywords: [
      "PayGate payment gateway",
      "PayGate Cloud MLM Software integration",
      "South Africa payment gateway",
      "MLM payments Southern Africa",
      "AI optimized payment operations"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/paygate", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PayGatePageProps = {
  params: { lang: SupportedLocale };
};

export default function PayGatePage({ params }: PayGatePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-slate-50 to-emerald-100/40 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.22),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_45%)] dark:bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.24),_transparent_45%)]" />
        <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:border-emerald-200/40 dark:bg-white/10 dark:text-emerald-100">
              PayGate payment gateway
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Reposition PayGate as the Southern Africa growth engine for Cloud MLM Software.
            </h1>
            <p className="max-w-2xl text-base text-slate-700 dark:text-white/80">
              The archived WordPress copy promised secure, fast, and seamless payments. We deliver that promise as a modern
              operating system for distributors, finance leaders, and AI copilots expanding across South Africa and Namibia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Talk to PayGate strategists
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-emerald-500/40 text-emerald-700 hover:bg-emerald-500/10 dark:border-emerald-200/40 dark:text-emerald-100 dark:hover:bg-emerald-200/10"
              >
                <Link href={modulesHref}>
                  Explore supporting modules
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-4 -z-10 rounded-3xl bg-gradient-to-br from-emerald-200/50 via-white/60 to-sky-200/60 blur-3xl dark:from-emerald-500/20 dark:via-slate-950/40 dark:to-sky-500/20" />
            <div className="grid gap-6 rounded-3xl border border-emerald-200/60 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/10">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-3 rounded-2xl border border-emerald-200/60 bg-white/90 p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-200">
                        {metric.label}
                      </p>
                      <p className="text-xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-white/70">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-14">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Strategic translation of the PayGate archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            Every insight below is rooted in the recovered WordPress experience—custom demo, preset demo, and module depth—
            and evolved for today&apos;s executive audience across direct selling, ecommerce, and omnichannel retail.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {STRATEGY_LENSES.map((lens) => {
            const Icon = lens.icon;
            return (
              <article
                key={lens.title}
                className="group relative flex flex-col gap-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-x-6 top-5 h-20 rounded-3xl bg-gradient-to-br from-emerald-400/20 via-sky-300/20 to-emerald-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-100">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{lens.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-white/70">{lens.summary}</p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-white/70">
                    {lens.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-emerald-600 dark:text-emerald-200" aria-hidden />
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

      <section className="relative overflow-hidden bg-slate-900 py-20 text-white dark:bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(16,185,129,0.28),_transparent_55%),radial-gradient(circle_at_right,_rgba(59,130,246,0.24),_transparent_45%)]" />
        <div className="relative container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Launch tracks for PayGate + Cloud MLM Software</h2>
            <p className="text-base text-white/80">
              We convert the WordPress journey—modules, demos, services—into a repeatable launch framework for Southern Africa.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {LAUNCH_TRACKS.map((track) => {
              const Icon = track.icon;
              return (
                <article
                  key={track.phase}
                  className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">{track.phase}</span>
                    <Icon className="h-6 w-6 text-emerald-200" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{track.focus}</h3>
                  <ul className="space-y-3 text-sm text-white/80">
                    {track.deliverables.map((item) => (
                      <li key={item} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-emerald-200" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            PayGate supported countries highlighted in the archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            We translated the WordPress list into intelligence cards your expansion, compliance, and member-success teams can
            action immediately.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {COUNTRIES.map((country) => (
            <article
              key={country.name}
              className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{country.name}</h3>
                <GlobeHemisphereEast className="h-6 w-6 text-emerald-600 dark:text-emerald-200" aria-hidden />
              </div>
              <p className="text-sm text-slate-600 dark:text-white/70">{country.focus}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white via-emerald-50 to-white p-10 shadow-lg dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-emerald-950/40 dark:to-slate-950">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Ready to activate PayGate with Cloud MLM Software?
              </h2>
              <p className="text-base text-slate-600 dark:text-white/70">
                Schedule a custom demo, explore preset assets, and launch Southern Africa payment experiences that delight
                distributors and executives alike.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={pricingHref}>
                  View pricing and packages
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-emerald-500/40 text-emerald-700 hover:bg-emerald-500/10 dark:border-emerald-200/40 dark:text-emerald-100 dark:hover:bg-emerald-200/10"
              >
                <Link href={demoHref}>
                  Try the PayGate-ready demo
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
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

