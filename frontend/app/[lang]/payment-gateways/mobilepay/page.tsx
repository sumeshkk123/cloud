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
  CompassTool,
  DeviceTabletCamera,
  GlobeHemisphereNorth,
  Lightning,
  MapTrifold,
  NavigationArrow,
  NotePencil,
  Radar,
  ShieldCheck,
  Sparkle,
  SquaresFour,
  TrendUp,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  title: string;
  value: string;
  detail: string;
};

type NarrativePoint = {
  title: string;
  description: string;
  icon: IconType;
};

type Workstream = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type ModuleRibbon = {
  heading: string;
  subtitle: string;
  bullets: string[];
  icon: IconType;
};

type RegionPlan = {
  region: string;
  status: string;
  insight: string;
  link: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Archive date",
    value: "28 Aug 2024",
    detail: "MobilePay page recorded as secure, fast, seamless."
  },
  {
    title: "Launch focus",
    value: "Denmark first",
    detail: "Copenhagen & Aarhus distributor experiences prioritised."
  },
  {
    title: "Acceleration",
    value: "6-week sprint",
    detail: "Discovery to operational analytics for Nordic leadership."
  }
];

const NARRATIVE_POINTS: NarrativePoint[] = [
  {
    title: "Secure, fast, seamless amplified",
    description:
      "We translate the archive promise into executive briefs, compliance proof points, and AI prompt packs tuned for Nordic leadership.",
    icon: ShieldCheck
  },
  {
    title: "Omnichannel Nordic experience",
    description:
      "MobilePay’s mobile-first adoption is baked into onboarding, checkout, and payout flows—desktop, tablet, and store-level.",
    icon: DeviceTabletCamera
  },
  {
    title: "Scalable across the Nordics",
    description:
      "Localization for Norway, Sweden, and Finland arrives with language kits, tax logic, and distributor enablement programmes.",
    icon: MapTrifold
  }
];

const WORKSTREAMS: Workstream[] = [
  {
    name: "Narrative engineering",
    summary: "Align leadership stories, SEO, and AI copilots around MobilePay differentiation.",
    bullets: [
      "Executive brief mapping MobilePay capabilities to thought-leadership themes.",
      "SEO & AIO keyword clusters spanning Denmark, Nordics, and direct selling fintech.",
      "Prompt libraries for chatbots, Copilot, and internal assistants."
    ],
    icon: Sparkle
  },
  {
    name: "Experience architecture",
    summary: "Design cross-device journeys that prove MobilePay convenience.",
    bullets: [
      "Prototypes for onboarding, checkout, upsell, and payout experiences.",
      "Instrumentation for conversion, decline remediation, and compliance events.",
      "Content localisation for Danish and English with tone aligned to corporate guidelines."
    ],
    icon: NavigationArrow
  },
  {
    name: "Operational intelligence",
    summary: "Keep finance, support, and growth teams aligned with live telemetry.",
    bullets: [
      "Multi currency & E-Wallet orchestration for DKK, EUR, and USD.",
      "Ticketing workflows with AI recommendations and SLA visibility.",
      "Dashboards surfacing retention, churn, and revenue growth indicators."
    ],
    icon: Radar
  }
];

const MODULE_RIBBONS: ModuleRibbon[] = [
  {
    heading: "Revenue control tower",
    subtitle: "Custom Demo • E-Commerce Integration • Multi currency",
    bullets: [
      "Deliver MobilePay demos showing real-time Danish use cases and KPIs.",
      "Embed MobilePay connectors into Shopify, Magento, and custom storefronts.",
      "Balance cross-border currency flows with audit-ready approvals."
    ],
    icon: SquaresFour
  },
  {
    heading: "Member confidence",
    subtitle: "E-Wallet • Backup Manager • Ticket System",
    bullets: [
      "Automate payouts triggered by MobilePay settlement confirmations.",
      "Guarantee encrypted backups aligned to EU compliance requirements.",
      "Resolve payment tickets with AI summarisation and escalation guidance."
    ],
    icon: UsersThree
  },
  {
    heading: "Growth storytelling",
    subtitle: "Auto Responder • Documents • Analytics Packs",
    bullets: [
      "Send lifecycle messaging across Danish and English when key events fire.",
      "Publish executive decks, playbooks, and press narratives championing MobilePay.",
      "Monitor compensation health and product adoption through live dashboards."
    ],
    icon: TrendUp
  }
];

const REGION_PLANS: RegionPlan[] = [
  {
    region: "Denmark",
    status: "Operational now",
    insight:
      "MobilePay is ubiquitous in Denmark. We ensure direct selling journeys match consumer expectations while meeting regulatory standards.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-denmark/"
  },
  {
    region: "Nordic expansion",
    status: "Ready next",
    insight:
      "Extend MobilePay success to Norway, Sweden, and Finland with localisation matrices, tax guidance, and AI knowledge bases.",
    link: "/contact/"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MobilePay Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Elevate MobilePay’s secure, fast, seamless promise into Nordic growth. Cloud MLM Software delivers AI-ready narratives, conversion-led experiences, and governed operations.";

  return {
    title,
    description,
    keywords: [
      "MobilePay payment gateway",
      "MobilePay Cloud MLM Software integration",
      "Denmark MLM payments",
      "Nordic payment orchestration",
      "AI optimized payment operations"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/mobilepay", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MobilePayPageProps = {
  params: { lang: SupportedLocale };
};

export default function MobilePayPage({ params }: MobilePayPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden px-6 pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-slate-900/70 dark:via-slate-950 dark:to-black" />
        <div className="absolute -top-12 right-8 h-60 w-60 rounded-full bg-sky-300/30 blur-3xl dark:bg-sky-500/20" />
        <div className="relative mx-auto max-w-6xl rounded-3xl border border-sky-100 bg-white/90 px-10 py-14 shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700 dark:border-white/10 dark:bg-white/10 dark:text-white">
                <Sparkle className="h-4 w-4" aria-hidden />
                MobilePay gateway
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                MobilePay Payment Gateway Integration for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                The archived WordPress page declared MobilePay secure, fast, seamless. We expand that into a Nordic
                transformation programme where executives, distributors, and AI copilots share the same story—and measure the
                outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/free-mlm-software-demo/">Request MobilePay demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={buildLocalizedPath("/pricing", locale)}>Review pricing strategy</Link>
                </Button>
              </div>
            </div>
            <aside className="space-y-5 rounded-3xl border border-sky-200/60 bg-sky-50/70 p-6 shadow-inner dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-600 dark:text-sky-200">
                Archive insights
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {HIGHLIGHTS.map((highlight) => (
                  <div key={highlight.title} className="rounded-2xl border border-white/70 bg-white/80 p-4 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">
                      {highlight.title}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{highlight.value}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300">{highlight.detail}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {NARRATIVE_POINTS.map((point) => {
                  const Icon = point.icon;
                  return (
                    <article
                      key={point.title}
                      className="space-y-3 rounded-2xl border border-white/70 bg-white/80 p-4 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold text-slate-900 dark:text-white">{point.title}</h2>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{point.description}</p>
                    </article>
                  );
                })}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-100 bg-white/95 px-10 py-12 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3 text-center">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Workstreams
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Structure the MobilePay launch with three disciplined workstreams
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
              Narrative, experience, and operations combine to make MobilePay the default payment story across the Nordics.
            </p>
          </header>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {WORKSTREAMS.map((stream) => {
              const Icon = stream.icon;
              return (
                <article
                  key={stream.name}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-sky-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stream.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-200">{stream.summary}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {stream.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <NotePencil className="mt-0.5 h-4 w-4 text-sky-500" aria-hidden />
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

      <section className="px-6">
        <div className="mx-auto max-w-6xl gap-8 rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-sky-50 to-slate-50 p-10 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900/60 dark:via-slate-950 dark:to-black lg:grid lg:grid-cols-[0.85fr,1.15fr]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Module ribbons aligned to Nordic expectations
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software modules become MobilePay-focused enablement so revenue, finance, and growth move in sync.
            </p>
            <Link
              href="/payment-gateways/mobilepay/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-800 dark:text-sky-200 dark:hover:text-sky-100"
            >
              Review the archived MobilePay page
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {MODULE_RIBBONS.map((ribbon) => {
              const Icon = ribbon.icon;
              return (
                <article
                  key={ribbon.heading}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-inner transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{ribbon.heading}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                      {ribbon.subtitle}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-200">
                    {ribbon.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Lightning className="mt-0.5 h-4 w-4 text-sky-500" aria-hidden />
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

      <section className="px-6">
        <div className="mx-auto max-w-5xl space-y-8 rounded-3xl border border-slate-100 bg-white/95 px-10 py-12 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3 text-center">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Timeline
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Six weeks to MobilePay thought leadership
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              A staged approach that keeps Nordic leadership aligned while we modernise the MobilePay story.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                phase: "Weeks 1-2",
                detail:
                  "Narrative workshops, archive synthesis, and KPI baselining with Danish market insights.",
                icon: CompassTool
              },
              {
                phase: "Weeks 3-4",
                detail:
                  "Experience prototyping, telemetry setup, and localisation for Danish and English assets.",
                icon: DeviceTabletCamera
              },
              {
                phase: "Weeks 5-6",
                detail:
                  "Operational playbooks, AI prompt roll-out, and executive media activations across the Nordics.",
                icon: GlobeHemisphereNorth
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.phase}
                  className="flex flex-col gap-3 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-sky-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.phase}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{item.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Regional strategy
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Denmark success sets the tone for Nordic expansion
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              The archive referenced broad coverage. We structure that reach into concrete plans you can measure.
            </p>
          </header>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {REGION_PLANS.map((plan) => (
              <article
                key={plan.region}
                className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-sky-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                    {plan.status}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{plan.region}</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{plan.insight}</p>
                <Link
                  href={plan.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-800 dark:text-sky-200 dark:hover:text-sky-100"
                >
                  Continue discovery
                  <ArrowSquareOut className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-10">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-sky-200 bg-sky-50/80 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to orchestrate MobilePay with Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            We&apos;re prepared to move your leadership team, distributors, and AI copilots into MobilePay dominance—secure,
            fast, seamless, and measurable.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact/">Speak with a payment strategist</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={buildLocalizedPath("/support", locale)}>Coordinate the launch session</Link>
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
