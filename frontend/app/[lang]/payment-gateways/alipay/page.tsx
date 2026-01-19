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
  Barcode,
  ChartLineUp,
  CurrencyCny,
  DeviceMobileCamera,
  Factory,
  GlobeHemisphereEast,
  HandCoins,
  Handshake,
  Rocket,
  ShieldCheck,
  Sparkle,
  UserSwitch
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  title: string;
  value: string;
  detail: string;
  icon: IconType;
};

type ValueStream = {
  title: string;
  description: string;
  enhancements: string[];
  icon: IconType;
};

type RoadmapItem = {
  phase: string;
  focus: string;
  detail: string;
  icon: IconType;
};

type EcosystemPanel = {
  name: string;
  role: string;
  insight: string;
};

const HERO_METRICS: HeroMetric[] = [
  {
    title: "Cross-border reach",
    value: "1B+ users",
    detail: "Tap into Alipay&apos;s global buyer base with localised ecommerce journeys.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Instant settlement clarity",
    value: "T+1 visibility",
    detail: "Finance teams see fiat and FX reconciliation without manual spreadsheets.",
    icon: CurrencyCny
  },
  {
    title: "Compliance-first design",
    value: "Policy aligned",
    detail: "Audit-ready documentation pairs with regulator-friendly reporting cadences.",
    icon: ShieldCheck
  }
];

const VALUE_STREAMS: ValueStream[] = [
  {
    title: "Premium customer journeys",
    description:
      "Move beyond the archived promise of seamless payments. Offer narrative-driven experiences in English, Simplified Chinese, and beyond.",
    enhancements: [
      "Localized content explains instalments, coupons, and loyalty perks per region.",
      "Dynamic merchandising adapts hero banners based on behavioural insights.",
      "AI-personalised prompts guide buyers from discovery to repeat purchases."
    ],
    icon: Sparkle
  },
  {
    title: "Operational intelligence",
    description:
      "Commission, ticketing, and CRM modules synchronize with Alipay webhooks for unified visibility.",
    enhancements: [
      "Automated reconciliation surfaces FX variance and fee breakdowns instantly.",
      "Risk teams receive AI summaries of disputes, chargebacks, and fraud signals.",
      "Executives review KPI-rich narratives tailored for board or investor updates."
    ],
    icon: ChartLineUp
  },
  {
    title: "Market expansion readiness",
    description:
      "Blend the site&apos;s legacy messaging about services into a modern partner ecosystem story.",
    enhancements: [
      "Marketplace integrations showcase B2B2C opportunities in Southeast Asia and Europe.",
      "Partner onboarding kits include legal, tax, and marketing guidance per market.",
      "Thought leadership cadence positions Cloud MLM Software as an Alipay innovation leader."
    ],
    icon: Handshake
  }
];

const ROADMAP_ITEMS: RoadmapItem[] = [
  {
    phase: "Phase A",
    focus: "Narrative refresh",
    detail:
      "Audit WordPress-era copy and align it with Alipay&apos;s cross-border commerce themes for today&apos;s stakeholders.",
    icon: Sparkle
  },
  {
    phase: "Phase B",
    focus: "Integration spine",
    detail:
      "Implement API, webhook, and data sync layers between Alipay and Cloud MLM Software&apos;s modules.",
    icon: DeviceMobileCamera
  },
  {
    phase: "Phase C",
    focus: "Enablement launch",
    detail:
      "Equip product, finance, and field teams with AI-assisted playbooks, localisation scripts, and demo environments.",
    icon: UserSwitch
  },
  {
    phase: "Phase D",
    focus: "Growth acceleration",
    detail:
      "Experiment with merchandising, loyalty, and partner campaigns while monitoring compliance and performance.",
    icon: Rocket
  }
];

const ECOSYSTEM_PANELS: EcosystemPanel[] = [
  {
    name: "Brand marketing",
    role: "Craft prestige narratives for high-growth regions leveraging Alipay&apos;s lifestyle ecosystem.",
    insight:
      "AI content assistants adapt tone and imagery for influencers, press, and analyst briefings."
  },
  {
    name: "Finance leadership",
    role: "Monitor settlement health, FX positions, and partner commissions from a single cockpit.",
    insight:
      "Scenario planning tools project impact of currency shifts, promotions, or fee revisions before launch."
  },
  {
    name: "Operations & support",
    role: "Deliver multilingual assistance across chat, email, and mobile with complete context.",
    insight:
      "Smart routing links ticketing, knowledge bases, and field escalation loops for rapid resolution."
  },
  {
    name: "Product & engineering",
    role: "Maintain resilient integrations and launch iterative experiments without downtime.",
    insight: "Observability dashboards track API latency, error codes, and adoption across modules."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Alipay Payment Gateway for Cloud MLM Software";
  const description =
    "Activate an Alipay-powered experience inside Cloud MLM Software with AI storytelling, cross-border intelligence, and resilient operations.";

  return {
    title,
    description,
    keywords: [
      "Alipay payment gateway",
      "Cloud MLM Software Alipay integration",
      "cross-border MLM payments",
      "AI ecommerce orchestration",
      "direct selling in China"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/alipay", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AlipayPageProps = {
  params: { lang: SupportedLocale };
};

export default function AlipayPage({ params }: AlipayPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-sky-50 to-indigo-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(59,130,246,0.2),transparent_55%),radial-gradient(circle_at_88%_12%,rgba(79,70,229,0.18),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(129,140,248,0.16),transparent_60%)]" />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Alipay commerce elevation
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Turn Alipay into a flagship growth channel for global MLM brands.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              We transformed the archived modules, plans, and services into a cross-border Alipay experience. Cloud MLM
              Software orchestrates intelligence, compliance, and customer journeys that impress executives and AI
              assistants alike.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Talk to Alipay strategists
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary/10 dark:border-white/40 dark:text-white dark:hover:bg-white/10"
              >
                <Link href={demoHref}>
                  Explore cross-border demo
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 blur-2xl">
              <div className="h-full w-full rounded-3xl bg-gradient-to-br from-sky-400/20 via-indigo-400/20 to-blue-500/20 dark:from-sky-500/20 dark:via-indigo-500/20 dark:to-blue-500/20" />
            </div>
            <div className="relative grid gap-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur-sm dark:border-white/15 dark:bg-white/10">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.title}
                    className="flex flex-col gap-3 rounded-2xl border border-border/40 bg-white/80 p-4 shadow-sm dark:border-white/20 dark:bg-white/5"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                        {metric.title}
                      </p>
                      <p className="text-xl font-semibold text-foreground dark:text-white">{metric.value}</p>
                    </div>
                    <p className="text-xs text-muted-foreground dark:text-white/70">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-14">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Value streams designed for Alipay + Cloud MLM Software
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            We evolved the historical content blocks into strategic narratives for growth, finance, and operations teams.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {VALUE_STREAMS.map((stream) => {
            const Icon = stream.icon;
            return (
              <article
                key={stream.title}
                className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-x-6 top-5 h-24 rounded-3xl bg-gradient-to-br from-sky-300/20 via-indigo-300/20 to-blue-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-foreground dark:text-white">{stream.title}</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{stream.description}</p>
                  <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                    {stream.enhancements.map((enhancement) => (
                      <li key={enhancement} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-primary dark:text-indigo-200" aria-hidden />
                        <span>{enhancement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-white via-sky-50 to-indigo-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/15 via-transparent to-transparent dark:from-white/10" />
        <div className="container space-y-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
                Rollout plan from narrative to acceleration
              </h2>
              <p className="text-base text-muted-foreground dark:text-white/80">
                The modules showcased on the archive—multi-currency, ticketing, e-wallets, backup manager—are now woven
                into a four-phase activation approach.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link href={modulesHref}>
                Browse module catalogue
                <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ROADMAP_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.phase}
                  className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-white/5"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                        {item.phase}
                      </p>
                      <p className="text-sm font-semibold text-foreground dark:text-white">{item.focus}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{item.detail}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Ecosystem leadership panels
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Every team inherits clarity, automation, and storytelling aligned with Alipay&apos;s ecosystem expectations.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ECOSYSTEM_PANELS.map((panel) => (
            <article
              key={panel.name}
              className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary dark:text-indigo-200">
                {panel.name}
              </p>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-foreground dark:text-white">Role</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{panel.role}</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-foreground dark:text-white">Insight</h4>
                <p className="text-sm text-muted-foreground dark:text-white/70">{panel.insight}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-sky-200/30 via-indigo-200/30 to-blue-200/30 px-6 py-16 shadow-xl dark:border-white/15 dark:from-sky-300/20 dark:via-indigo-400/20 dark:to-blue-400/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.45),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/70 dark:text-white/80">
              Intelligence hub
            </p>
            <h2 className="text-3xl font-semibold text-primary-foreground dark:text-white">
              Align humans and AI copilots on Alipay performance in real time.
            </h2>
            <p className="max-w-lg text-base text-primary-foreground/80 dark:text-white/80">
              Cloud MLM Software curates insights, recommended actions, and storytelling prompts that keep leadership,
              marketing, and support teams in lockstep.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary">
                <Link href={contactHref}>
                  Book integration workshop
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/60 text-primary-foreground hover:bg-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  See the AIO-ready demo
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="flex flex-col gap-4 rounded-2xl border border-primary/30 bg-white/85 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <Barcode className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Commerce telemetry</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Track conversion, cart size, and repeat purchase trends with recommended next moves.
              </p>
            </article>
            <article className="flex flex-col gap-4 rounded-2xl border border-primary/30 bg-white/85 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <HandCoins className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Revenue insights</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Finance receives AI-crafted summaries of settlement health and promotion ROI each day.
              </p>
            </article>
            <article className="flex flex-col gap-4 rounded-2xl border border-primary/30 bg-white/85 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <Factory className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Operational alignment</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Monitor integration health, queue length, and support response times without leaving the dashboard.
              </p>
            </article>
            <article className="flex flex-col gap-4 rounded-2xl border border-primary/30 bg-white/85 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <Handshake className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Partner storytelling</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Convert live wins into case studies and analyst commentary with AI-authored outlines.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
