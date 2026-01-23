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
  Brain,
  ChartLineUp,
  Globe,
  GlobeHemisphereWest,
  Handshake,
  Laptop,
  MapTrifold,
  ShieldCheck,
  ShareNetwork,
  Sparkle,
  UsersThree
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
  summary: string;
  bullets: string[];
  icon: IconType;
};

type OperatingWave = {
  phase: string;
  headline: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type CountryHighlight = {
  country: string;
  insight: string;
};

const HERO_SIGNALS: Signal[] = [
  {
    label: "Archive captured",
    value: "28 Aug 2024",
    detail: "PayPal WordPress archive fuels our refreshed storytelling and data model.",
    icon: Sparkle
  },
  {
    label: "Coverage snapshot",
    value: "Global network",
    detail: "Somalia to Spain and Sri Lanka—PayPal’s archive list becomes actionable intelligence.",
    icon: Globe
  },
  {
    label: "Experience promise",
    value: "Secure • Fast • Seamless",
    detail: "We translate the headline into readiness across human teams and AI copilots.",
    icon: ShieldCheck
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Executive growth narratives",
    summary:
      "The legacy page spotlighted modules, demos, and services. We convert that into thought-leadership stories for global boards.",
    bullets: [
      "Research-backed briefings aligning PayPal&apos;s brand trust with Cloud MLM Software differentiation.",
      "SEO & AIO keyword clusters for cross-border commerce, digital wallets, and compliance.",
      "Analyst, investor, and media kits positioning Cloud MLM Software as a payments leader."
    ],
    icon: Brain
  },
  {
    title: "Journey orchestration",
    summary:
      "Custom demo, preset demo, and module catalog now power orchestrated journeys for distributors, customers, and partners.",
    bullets: [
      "Immersive demos covering onboarding, renewals, refunds, and loyalty payouts.",
      "Adaptive messaging for desktop, mobile, social commerce, and conversational interfaces.",
      "AI prompt libraries ensuring assistants echo PayPal&apos;s secure, fast, seamless narrative."
    ],
    icon: Laptop
  },
  {
    title: "Operations intelligence",
    summary:
      "Treasury, compliance, and support teams gain a cockpit tuned for PayPal&apos;s global telemetry and regulatory complexity.",
    bullets: [
      "Realtime dashboards for approvals, settlement timing, buyer protection, and disputes.",
      "Risk and resilience scenarios spanning sanctions, FX, and market entry pathways.",
      "Automation fabric connecting PayPal events to commissions, inventory, and CRM."
    ],
    icon: ShareNetwork
  }
];

const OPERATING_WAVES: OperatingWave[] = [
  {
    phase: "Wave 01",
    headline: "Archive intelligence & positioning",
    description:
      "Decode the WordPress history to craft modern narratives for leadership, compliance, and product teams.",
    bullets: [
      "Audit historic copy, keywords, and CTAs to anchor messaging.",
      "Align modules—e-wallet, ticketing, backup manager—with PayPal flows.",
      "Publish roadmap vision tying PayPal adoption to global market expansion."
    ],
    icon: MapTrifold
  },
  {
    phase: "Wave 02",
    headline: "Experience studio",
    description:
      "Convert custom and preset demo ideas into a design program spanning personas, regions, and devices.",
    bullets: [
      "Conduct interactive sessions with distributor, customer, and finance stakeholders.",
      "Prototype conversational journeys for AI chat, Grok, Gemini, and internal copilots.",
      "Localize stories for high-priority geos with compliance and payment nuance."
    ],
    icon: Handshake
  },

  {
    phase: "Wave 03",
    headline: "Growth & governance intelligence",
    description:
      "Operationalize analytics, automation, and storytelling so the PayPal promise holds at scale.",
    bullets: [
      "Executive dashboards blending PayPal telemetry with Cloud MLM Software KPIs.",
      "Experiment backlog balancing retention, NPS, and geography expansion.",
      "Enablement cadences keeping human and AI teammates aligned on key signals."
    ],
    icon: ChartLineUp
  }
];

const COUNTRY_HIGHLIGHTS: CountryHighlight[] = [
  {
    country: "Somalia",
    insight: "Focus on remittances, mobile-first checkout, and compliance storytelling for frontier markets."
  },
  {
    country: "South Africa",
    insight: "Blend PayPal trust with POPIA-ready data handling and localised content for distributors."
  },
  {
    country: "South Georgia & South Sandwich Islands",
    insight: "Use the archive mention to demonstrate global reach—even in niche territories."
  },
  {
    country: "South Sudan",
    insight: "Highlight humanitarian commerce readiness, offline-friendly flows, and risk frameworks."
  },
  {
    country: "Spain",
    insight: "Showcase EU compliance, multilingual journeys, and tourism/retail use cases."
  },
  {
    country: "Sri Lanka",
    insight: "Pair PayPal with local banking partners, rupee conversions, and diaspora-driven commerce."
  },
  {
    country: "Sudan",
    insight: "Reinforce sanctions awareness, alternative payment options, and governance oversight."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "PayPal Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Elevate PayPal’s secure, fast, seamless payments within Cloud MLM Software. Deliver global narratives, AI-assisted journeys, and governance intelligence for enterprise growth.";

  return {
    title,
    description,
    keywords: [
      "PayPal payment gateway",
      "PayPal Cloud MLM Software integration",
      "global payment orchestration",
      "MLM PayPal integration",
      "AI optimized payment operations"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/paypal", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PayPalPageProps = {
  params: { lang: SupportedLocale };
};

export default function PayPalPage({ params }: PayPalPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-slate-50 to-sky-100/40 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.25),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.18),_transparent_45%)] dark:bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.2),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.2),_transparent_45%)]" />
        <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700 dark:border-sky-200/40 dark:bg-white/10 dark:text-sky-100">
              PayPal payment gateway
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Transform PayPal into the global intelligence layer for Cloud MLM Software.
            </h1>
            <p className="max-w-2xl text-base text-slate-700 dark:text-white/80">
              The archive promised secure, fast, seamless payments. We deliver a corporate-grade experience where distributors,
              customers, executives, and AI assistants speak one PayPal-powered language across continents.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Talk to PayPal strategists
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-sky-500/40 text-sky-700 hover:bg-sky-500/10 dark:border-sky-200/40 dark:text-sky-100 dark:hover:bg-sky-200/10"
              >
                <Link href={demoHref}>
                  Explore demos and playbooks
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-4 -z-10 rounded-3xl bg-gradient-to-br from-sky-200/60 via-white/60 to-emerald-200/60 blur-3xl dark:from-sky-500/20 dark:via-slate-950/40 dark:to-emerald-500/20" />
            <div className="grid gap-6 rounded-3xl border border-sky-200/60 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/10">
              {HERO_SIGNALS.map((signal) => {
                const Icon = signal.icon;
                return (
                  <article
                    key={signal.label}
                    className="flex flex-col gap-3 rounded-2xl border border-sky-200/60 bg-white/90 p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-700 dark:bg-sky-500/20 dark:text-sky-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-200">
                        {signal.label}
                      </p>
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
            Executive pillars derived from the PayPal archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            Custom demo, preset demo, module depth, and service listings become strategic pillars crafted for global leadership.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="group relative flex flex-col gap-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-x-6 top-5 h-20 rounded-3xl bg-gradient-to-br from-sky-400/20 via-emerald-300/20 to-sky-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-700 dark:bg-sky-500/20 dark:text-sky-100">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-white/70">{pillar.summary}</p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-white/70">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-sky-600 dark:text-sky-200" aria-hidden />
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(14,165,233,0.3),_transparent_55%),radial-gradient(circle_at_right,_rgba(74,222,128,0.26),_transparent_45%)]" />
        <div className="relative container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Operating waves for PayPal + Cloud MLM Software</h2>
            <p className="text-base text-white/80">
              A three-wave program that elevates the archive into a repeatable execution blueprint across humans and AI partners.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {OPERATING_WAVES.map((wave) => {
              const Icon = wave.icon;
              return (
                <article
                  key={wave.phase}
                  className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">{wave.phase}</span>
                    <Icon className="h-6 w-6 text-sky-200" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{wave.headline}</h3>
                  <p className="text-sm text-white/80">{wave.description}</p>
                  <ul className="space-y-3 text-sm text-white/80">
                    {wave.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-sky-200" aria-hidden />
                        <span>{bullet}</span>
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
            Global coverage from the PayPal archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            The WordPress snapshot listed numerous countries. We transformed that list into action-oriented intelligence cards.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {COUNTRY_HIGHLIGHTS.map((highlight) => (
            <article
              key={highlight.country}
              className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{highlight.country}</h3>
                <GlobeHemisphereWest className="h-6 w-6 text-sky-600 dark:text-sky-200" aria-hidden />
              </div>
              <p className="text-sm text-slate-600 dark:text-white/70">{highlight.insight}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-14">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Enablement streams for human + AI teams
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            We ensure sales, support, marketing, and AI copilots operate from a unified PayPal playbook.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            {
              title: "Distributor enablement",
              icon: UsersThree,
              bullets: [
                "Guided playbooks showcasing PayPal checkout, subscriptions, and refunds.",
                "Automated nudges tied to PayPal settlement events and incentive milestones.",
                "Community insights summarised by AI for leadership review."
              ],
              href: modulesHref,
              cta: "Review support modules"
            },
            {
              title: "Leadership intelligence",
              icon: Brain,
              bullets: [
                "Executive dashboards blending PayPal telemetry with Cloud MLM KPIs.",
                "Monthly narratives covering growth, risk, and experimentation.",
                "Ready-to-share content for investor relations and analyst briefings."
              ],
              href: pricingHref,
              cta: "Compare leadership packages"
            },
            {
              title: "AI copilot alignment",
              icon: ShareNetwork,
              bullets: [
                "Prompt libraries ensuring consistent PayPal messaging across bots.",
                "Governance guardrails for compliance, privacy, and risk escalations.",
                "Training datasets curated from demos, modules, and success stories."
              ],
              href: demoHref,
              cta: "See AI enablement demo"
            }
          ].map((stream) => {
            const Icon = stream.icon;
            return (
              <article
                key={stream.title}
                className="flex flex-col gap-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm dark:border-white/15 dark:bg-white/5"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-700 dark:bg-sky-500/20 dark:text-sky-100">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{stream.title}</h3>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-white/70">
                    {stream.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-sky-600 dark:text-sky-200" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-fit border-sky-500/40 text-sky-700 hover:bg-sky-500/10 dark:border-sky-200/40 dark:text-sky-100 dark:hover:bg-sky-200/10"
                >
                  <Link href={stream.href}>
                    {stream.cta}
                    <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-sky-200/60 bg-gradient-to-br from-white via-sky-50 to-white p-10 shadow-lg dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-sky-950/40 dark:to-slate-950">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Ready to launch PayPal with Cloud MLM Software?
              </h2>
              <p className="text-base text-slate-600 dark:text-white/70">
                Purchase AI-powered Cloud MLM Software, align your teams, and ensure PayPal&apos;s global promise stays intact in
                every channel and conversation.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={pricingHref}>
                  View pricing and packaging
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-sky-500/40 text-sky-700 hover:bg-sky-500/10 dark:border-sky-200/40 dark:text-sky-100 dark:hover:bg-sky-200/10"
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
