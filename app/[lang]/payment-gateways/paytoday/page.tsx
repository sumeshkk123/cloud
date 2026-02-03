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
  CalendarCheck,
  ChartLineUp,
  Compass,
  GlobeHemisphereEast,
  Handshake,
  Lightning,
  ListChecks,
  MegaphoneSimple,
  ShieldCheck,
  Sparkle,
  SquaresFour
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Signal = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  narrative: string;
  bullets: string[];
  icon: IconType;
};

type Sprint = {
  phase: string;
  focus: string;
  items: string[];
  icon: IconType;
};

const HERO_SIGNALS: Signal[] = [
  {
    label: "Archive recovered",
    value: "28 Aug 2024",
    detail: "PayToday WordPress page captured for reference and executive storytelling.",
    icon: CalendarCheck
  },
  {
    label: "Primary theatre",
    value: "Namibia",
    detail: "Agency banking, card acquiring, and mobile payments set the pace in Windhoek and beyond.",
    icon: GlobeHemisphereEast
  },
  {
    label: "Promise evolved",
    value: "Secure • Fast • Seamless",
    detail: "Cloud MLM Software upgrades the legacy copy into an AI-aligned operating mantra.",
    icon: ShieldCheck
  }
];

const STRATEGIC_PILLARS: Pillar[] = [
  {
    title: "Commerce storytelling",
    narrative:
      "Custom and preset demos from the archive transform into growth narratives tailored to Namibian distributors and partners.",
    bullets: [
      "Editorial briefings mapping PayToday differentiation to Cloud MLM Software modules.",
      "SEO & AIO keyword clusters focused on cashless Namibia, tourism, and retail expansion.",
      "Thought leadership cadence positioning Cloud MLM Software as the PayToday innovation guide."
    ],
    icon: MegaphoneSimple
  },
  {
    title: "Journey choreography",
    narrative:
      "The WordPress flow becomes guided onboarding, checkout, and payout experiences tuned to local expectations.",
    bullets: [
      "Persona-led demos covering field onboarding, customer renewals, and loyalty redemption.",
      "Workflow blueprints marrying PayToday events with commissions and inventory updates.",
      "Voice-of-the-field loops merging AI summaries with regional townhall feedback."
    ],
    icon: Handshake
  },
  {
    title: "Governed intelligence",
    narrative:
      "Secure, fast, seamless evolves into dashboards, risk playbooks, and AI prompts for finance and compliance leaders.",
    bullets: [
      "Real-time telemetry for approvals, dispute cycles, and settlement speed across Namibia.",
      "Regulatory notebooks aligning Bank of Namibia expectations with product roadmaps.",
      "Prompt libraries ensuring bots and humans repeat approved PayToday messaging."
    ],
    icon: ChartLineUp
  }
];

const DELIVERY_SPRINTS: Sprint[] = [
  {
    phase: "Sprint 01",
    focus: "Archive intelligence remix",
    items: [
      "Audit site copy, module lists, and CTAs to anchor stakeholder narratives.",
      "Define SEO & AIO lenses for Namibian fintech, tourism commerce, and AI ops.",
      "Map Cloud MLM Software modules—e-wallet, backup, ticketing—to PayToday touchpoints."
    ],
    icon: Compass
  },
  {
    phase: "Sprint 02",
    focus: "Experience studio",
    items: [
      "Facilitate interactive demo labs for distributors, merchants, and finance leaders.",
      "Build preset demo library with slides, scripts, and metric overlays for rapid enablement.",
      "Launch localization kit for English, Afrikaans, and Oshiwambo customer segments."
    ],
    icon: SquaresFour
  },
  {
    phase: "Sprint 03",
    focus: "Momentum analytics",
    items: [
      "Compose executive dashboards blending PayToday telemetry with Cloud MLM KPIs.",
      "Create experiment backlog for loyalty boosts, referral incentives, and upsell motions.",
      "Establish AI governance cadence so copilots and humans stay insight-aligned."
    ],
    icon: Lightning
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "PayToday Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Modernise PayToday’s secure, fast, seamless payments inside Cloud MLM Software. Deliver Namibian-ready journeys, governed intelligence, and AI-aligned enablement.";

  return {
    title,
    description,
    keywords: [
      "PayToday payment gateway",
      "PayToday Cloud MLM Software integration",
      "Namibia digital payments",
      "Namibia fintech",
      "AI optimized payment operations"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/paytoday", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PayTodayPageProps = {
  params: { lang: SupportedLocale };
};

export default function PayTodayPage({ params }: PayTodayPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-amber-50 to-emerald-100/60 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.25),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.22),_transparent_45%)] dark:bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.18),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.24),_transparent_45%)]" />
        <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 dark:border-amber-200/40 dark:bg-white/10 dark:text-amber-100">
              PayToday payment gateway
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Transform PayToday into Namibia’s connected payment backbone for Cloud MLM Software.
            </h1>
            <p className="max-w-2xl text-base text-slate-700 dark:text-white/80">
              The archived WordPress page introduced PayToday as secure, fast, seamless. We deliver that promise as an orchestrated
              system for distributors, finance leaders, and AI copilots across Namibia’s growth corridors.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Talk to PayToday strategists
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
                  Explore localized demos
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-4 -z-10 rounded-3xl bg-gradient-to-br from-amber-200/60 via-white/60 to-emerald-200/60 blur-3xl dark:from-amber-500/20 dark:via-slate-950/40 dark:to-emerald-500/20" />
            <div className="grid gap-6 rounded-3xl border border-amber-200/60 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/10">
              {HERO_SIGNALS.map((signal) => {
                const Icon = signal.icon;
                return (
                  <article
                    key={signal.label}
                    className="flex flex-col gap-3 rounded-2xl border border-amber-200/60 bg-white/90 p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700 dark:bg-amber-500/20 dark:text-amber-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600 dark:text-amber-200">{signal.label}</p>
                      <p className="text-xl font-semibold text-slate-900 dark:text-white">{signal.value}</p>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-white/70">{signal.detail}</p>
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
            Strategic pillars drawn from the PayToday archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            We keep the spirit of the original module and demo listings while modernising them for Namibia’s payments ecosystem and
            AI-enabled stakeholders.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {STRATEGIC_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="group relative flex flex-col gap-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-x-6 top-5 h-20 rounded-3xl bg-gradient-to-br from-amber-400/20 via-emerald-300/20 to-amber-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-700 dark:bg-amber-500/20 dark:text-amber-100">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-white/70">{pillar.narrative}</p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-white/70">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-amber-600 dark:text-amber-200" aria-hidden />
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(250,204,21,0.28),_transparent_55%),radial-gradient(circle_at_right,_rgba(34,197,94,0.24),_transparent_45%)]" />
        <div className="relative container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Delivery sprints for PayToday integration</h2>
            <p className="text-base text-white/80">
              A three-sprint program converts the archived copy into repeatable execution for growth, experience, and intelligence teams.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {DELIVERY_SPRINTS.map((sprint) => {
              const Icon = sprint.icon;
              return (
                <article key={sprint.phase} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">{sprint.phase}</span>
                    <Icon className="h-6 w-6 text-emerald-200" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{sprint.focus}</h3>
                  <ul className="space-y-3 text-sm text-white/80">
                    {sprint.items.map((item) => (
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
            PayToday supported country from the archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            The original page called out Namibia. We reframed that mention into actionable intelligence for go-to-market, compliance,
            and CX teams.
          </p>
        </div>
        <div className="grid gap-6">
          <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Namibia</h3>
              <ListChecks className="h-6 w-6 text-emerald-600 dark:text-emerald-200" aria-hidden />
            </div>
            <p className="text-sm text-slate-600 dark:text-white/70">
              Focus on agency banking reach, tourism-driven commerce, and bilingual enablement spanning English and Afrikaans service
              experiences.
            </p>
          </article>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-amber-200/60 bg-gradient-to-br from-white via-emerald-50 to-white p-10 shadow-lg dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-emerald-950/40 dark:to-slate-950">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Ready to activate PayToday with Cloud MLM Software?
              </h2>
              <p className="text-base text-slate-600 dark:text-white/70">
                Purchase AI-powered Cloud MLM Software, tailor your demos, and make PayToday’s secure, fast, seamless promise tangible for
                every stakeholder.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={pricingHref}>
                  Review pricing and packages
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
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

