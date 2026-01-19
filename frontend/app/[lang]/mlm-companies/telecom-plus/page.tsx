import type { CSSProperties, ComponentType } from "react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { buildLocalizedPath } from "@/lib/locale-links";
import { isSupportedLocale } from "@/lib/i18n-utils";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Cable,
  Gauge,
  Globe2,
  Home,
  LineChart,
  MapPin,
  PiggyBank,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Wifi
} from "lucide-react";
import { ChartLineUp, DeviceMobile, Plugs, Strategy } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type UtilityMetric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type BundlePromise = {
  title: string;
  description: string;
  evidence: string;
  icon: IconType;
};

type ExperienceLayer = {
  title: string;
  summary: string;
  enablement: string;
  icon: IconType;
};

type TimelineEvent = {
  year: string;
  headline: string;
  detail: string;
  proof: string;
};

type TrustLens = {
  title: string;
  score: string;
  insight: string;
  methodology: string;
};

type RiskMonitor = {
  title: string;
  risk: string;
  mitigation: string;
  icon: IconType;
};

type CloudPlay = {
  title: string;
  description: string;
  outcome: string;
  icon: IconType;
};

const UTILITY_METRICS: UtilityMetric[] = [
  {
    label: "Founded",
    value: "1996",
    detail: "Charles Wigoder launches Telecom Plus to simplify energy and comms procurement.",
    icon: Building2
  },
  {
    label: "Flagship brand",
    value: "Utility Warehouse",
    detail: "Members access electricity, gas, broadband, mobile, and insurance on one bill.",
    icon: Gauge
  },
  {
    label: "Model",
    value: "Integrated utilities co-op",
    detail: "Authorised Partners acquire members through relationship selling and tailored tariffs.",
    icon: UsersRound
  },
  {
    label: "Primary market",
    value: "United Kingdom",
    detail: "Ofgem-regulated supply with a network of 45k+ Authorised Partners nationwide.",
    icon: Globe2
  },
  {
    label: "Customer promise",
    value: "Single bill simplicity",
    detail: "Electricity, gas, broadband, mobile, and home services consolidated for clarity and savings.",
    icon: Home
  },
  {
    label: "Earnings design",
    value: "Customer volume + residuals",
    detail: "Upfront bonuses, residual margins, and leadership pools tied to verified, sticky usage.",
    icon: LineChart
  }
];

const BUNDLE_PROMISES: BundlePromise[] = [
  {
    title: "Five-service integration",
    description:
      "Energy, broadband, mobile, insurance, and home services sit on one contract with unified billing and support.",
    evidence: "Utility Warehouse membership benefits highlight the all-in-one bundle structure.",
    icon: Cable
  },
  {
    title: "Price pledge & value credits",
    description:
      "Members earn cashback and price guarantees that reward long-term usage and smart-meter adoption.",
    evidence: "UW’s Price Promise and smart-meter incentives published in member onboarding guides.",
    icon: PiggyBank
  },
  {
    title: "Award-winning service desk",
    description:
      "Ofgem league tables and Which? recognition showcase consistently high customer satisfaction ratings.",
    evidence: "Utility Warehouse cited in Which? Utilities awards and Trustpilot testimonials.",
    icon: BadgeCheck
  }
];

const EXPERIENCE_LAYERS: ExperienceLayer[] = [
  {
    title: "Map utility journeys",
    summary:
      "Authorised Partners run household clinics—auditing energy usage, broadband speeds, and mobile spend in one sitting.",
    enablement: "Interactive workbooks compare incumbent tariffs, loyalty rewards, and climate commitments.",
    icon: Strategy
  },
  {
    title: "Bundle activation moments",
    summary:
      "Smart-meter installs, router upgrades, and SIM swaps happen inside a timed choreography so members feel supported.",
    enablement: "Lifecycle automations remind partners of install windows, regulatory notices, and follow-up scripts.",
    icon: DeviceMobile
  },
  {
    title: "Community retention loops",
    summary:
      "Local meetups, energy clinics, and referral drives reinforce loyalty before renewal season or price cap changes.",
    enablement: "Event toolkits, referral dashboards, and sentiment surveys keep attrition signals visible.",
    icon: Plugs
  }
];

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "1996",
    headline: "Telecom Plus founded",
    detail: "Launches long-distance reseller model, quickly adding utilities as deregulation widens choice.",
    proof: "Telecom Plus corporate history."
  },
  {
    year: "2002–2013",
    headline: "Utility Warehouse brand expansion",
    detail: "Adds broadband, mobile, and home services to create the single bill promise.",
    proof: "Utility Warehouse product launch announcements."
  },
  {
    year: "2016",
    headline: "Smart meter acceleration",
    detail: "Invests in smart technologies and nationwide install program aligned with Ofgem targets.",
    proof: "Utility Warehouse smart meter programme briefs."
  },
  {
    year: "2020s",
    headline: "Energy price cap navigation",
    detail: "Partners coached to explain price cap movements, government rebates, and UW credit schemes.",
    proof: "Press releases on price support and member credit initiatives."
  }
];

const TRUST_LENSES: TrustLens[] = [
  {
    title: "Regulatory alignment",
    score: "70/100",
    insight:
      "Supplier licences, smart meter mandates, and Ofgem reporting keep governance visibility high.",
    methodology: "Weighted on Ofgem compliance notices, billing audits, and smart-meter deployment track record."
  },
  {
    title: "Field sustainability",
    score: "63/100",
    insight:
      "Residual income depends on low churn and bundled adoption; onboarding pace must match support capacity.",
    methodology: "Evaluated via partner retention, bundle attachment rates, and leadership coaching maturity."
  },
  {
    title: "Member loyalty",
    score: "68/100",
    insight:
      "Single-bill convenience and cashback perks maintain loyalty when communication around price shifts stays proactive.",
    methodology: "Combines Net Promoter feedback, referral velocity, and service ticket resolution data."
  }
];

const RISK_MONITORS: RiskMonitor[] = [
  {
    title: "Energy market volatility",
    risk: "Tariff changes during price cap announcements can confuse members and impact residual income.",
    mitigation: "Automate briefing packs with visuals, FAQs, and compensation updates before cap changes go live.",
    icon: ShieldCheck
  },
  {
    title: "Installation backlogs",
    risk: "Delayed smart-meter or router installs erode trust and can trigger regulatory penalties.",
    mitigation: "Track install SLAs, escalate logistics gaps, and prebook resilience teams during peak seasons.",
    icon: Wifi
  },
  {
    title: "Partner compliance drift",
    risk: "Mis-selling claims arise when savings projections or switching timelines are overstated.",
    mitigation: "Embed compliance checklists, recorded confirmations, and automated follow-up reminders.",
    icon: Sparkles
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Tariff intelligence cockpit",
    description:
      "Aggregates wholesale prices, government rebates, and UW incentives into a single decision hub.",
    outcome: "Cuts briefing prep time and keeps partners aligned on compliant messaging.",
    icon: ChartLineUp
  },
  {
    title: "Single-bill experience designer",
    description:
      "Visualises bundle combinations, loyalty credits, and hardware schedules for every household profile.",
    outcome: "Boosts bundle attachment rates while reducing onboarding friction.",
    icon: Sparkles
  },
  {
    title: "Partner performance radar",
    description:
      "Scores partner portfolios across attach rate, churn, complaint ratios, and compliance training completion.",
    outcome: "Directs coaching resources toward teams needing pricing or service support.",
    icon: Gauge
  },
  {
    title: "Incident response automations",
    description:
      "Triggers multi-channel alerts for outages, regulatory notices, or supply shocks with templated statements.",
    outcome: "Protects brand trust and ensures members hear updates from their partner first.",
    icon: ShieldCheck
  }
];

const PRIMARY_TRUST_SCORE = {
  score: 69,
  label: "Utility trust index",
  summary: "Blends Ofgem compliance, partner sustainability, and member loyalty indicators across the UK network."
};

const GAUGE_STYLE: CSSProperties = {
  background: `conic-gradient(#a855f7 ${PRIMARY_TRUST_SCORE.score * 3.6}deg, rgba(79, 70, 229, 0.25) 0deg)`
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Telecom Plus (Utility Warehouse) Field Blueprint";
  const description =
    "Explore how Telecom Plus unifies energy, broadband, and mobile services for UK households, and see how Cloud MLM Software equips partners with compliant, insight-driven growth.";
  const keywords = [
    "Telecom Plus MLM",
    "Utility Warehouse partner insights",
    "Telecom Plus compensation analysis",
    "UK utility direct selling software",
    "Cloud MLM Software utilities"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/telecom-plus", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type TelecomPlusPageProps = {
  params: { lang: SupportedLocale };
};

export default function TelecomPlusPage({ params }: TelecomPlusPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const indexHref = buildLocalizedPath("/mlm-companies", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-indigo-950 via-slate-900 to-fuchsia-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(129,140,248,0.35),transparent_52%),radial-gradient(circle_at_82%_30%,rgba(244,114,182,0.3),transparent_58%)]" />
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.55fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-300/50 bg-purple-500/10 px-4 py-1 text-sm font-semibold text-purple-100">
              Telecom Plus • Utility Warehouse
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              A unified utilities experience that rewards disciplined partner operations.
            </h1>
            <p className="text-base text-purple-50/80">
              Telecom Plus proves UK households choose confidence when energy, broadband, and mobile live on one dependable bill.
              Equip Authorised Partners with transparent pricing intelligence, guided installs, and loyalty-ready analytics.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={demoHref}>
                  Open the platform tour
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-purple-200/60 text-purple-100 hover:bg-purple-500/10">
                <Link href={pricingHref}>
                  Review solution bundles
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-purple-100 underline underline-offset-4 hover:bg-white/10">
                <Link href={indexHref}>
                  Browse MLM company index
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="space-y-2 text-sm text-purple-50/80">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-purple-200" aria-hidden />
                London, United Kingdom • Ofgem regulated
              </p>
              <p>
                “Utility Warehouse members stay because partners choreograph savings, service, and clarity better than legacy
                suppliers.”
              </p>
            </div>
          </div>

          <aside className="grid gap-6 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-xl backdrop-blur">
            <div className="flex flex-col items-center gap-5 rounded-2xl border border-white/25 bg-black/30 p-6 text-center">
              <div className="relative flex h-44 w-44 items-center justify-center rounded-full p-4" style={GAUGE_STYLE} aria-hidden>
                <div className="absolute inset-6 flex flex-col items-center justify-center rounded-full bg-black/40 text-center shadow-lg">
                  <span className="text-4xl font-semibold text-white">{PRIMARY_TRUST_SCORE.score}</span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-purple-100/80">
                    {PRIMARY_TRUST_SCORE.label}
                  </span>
                </div>
              </div>
              <p className="text-xs text-purple-50/80">{PRIMARY_TRUST_SCORE.summary}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {UTILITY_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex h-full flex-col gap-3 rounded-2xl border border-white/20 bg-black/30 p-4 shadow-sm transition hover:-translate-y-1 hover:bg-black/40"
                  >
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-purple-500/20 text-purple-100">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-purple-100/80">{metric.label}</span>
                    </div>
                    <span className="text-lg font-semibold text-white">{metric.value}</span>
                    <p className="text-xs text-purple-50/80">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 rounded-3xl border border-primary/15 bg-gradient-to-br from-purple-50 via-white to-slate-50 p-10 dark:border-primary/10 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Promises powering the UW bundle</h2>
            <p className="text-sm text-muted-foreground">
              The Utility Warehouse proposition only works when members feel every service delivers clarity, savings, and care.
              Use these promises to ground messaging, onboarding, and retention dashboards.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {BUNDLE_PROMISES.map((promise) => {
              const Icon = promise.icon;
              return (
                <article
                  key={promise.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/70"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{promise.title}</h3>
                    <p className="text-sm text-muted-foreground">{promise.description}</p>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {promise.evidence}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.6fr)]">
          <div className="space-y-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Experience choreography for partners
              </h2>
              <p className="text-sm text-muted-foreground">
                UK households expect guidance across tariffs, technology installs, and loyalty schemes. Give Authorised Partners a
                blueprint that turns onboarding into a concierge experience.
              </p>
            </div>
            <div className="space-y-5">
              {EXPERIENCE_LAYERS.map((layer) => {
                const Icon = layer.icon;
                return (
                  <article
                    key={layer.title}
                    className="flex gap-4 rounded-3xl border border-primary/20 bg-primary/5 p-5 dark:border-primary/15 dark:bg-primary/10"
                  >
                    <span className="mt-1 inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary shadow dark:bg-slate-950/60">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{layer.title}</h3>
                      <p className="text-sm text-muted-foreground">{layer.summary}</p>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                        {layer.enablement}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Moments that shaped Telecom Plus</h2>
              <p className="text-sm text-muted-foreground">
                Trace the milestones that set expectations for operational discipline, regulatory alignment, and member value.
              </p>
            </div>
            <div className="space-y-5">
              {TIMELINE_EVENTS.map((event) => (
                <article
                  key={event.year}
                  className="relative rounded-3xl border border-border/60 bg-background/80 p-5 dark:border-border/40 dark:bg-slate-950/80"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {event.year}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">{event.headline}</h3>
                  <p className="text-sm text-muted-foreground">{event.detail}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {event.proof}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/5 p-10 dark:border-primary/15 dark:from-primary/10 dark:via-slate-950 dark:to-primary/15">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.45fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Trust diagnostics before scale
              </h2>
              <p className="text-sm text-muted-foreground">
                Monitor regulations, partner health, and member sentiment simultaneously. These lenses keep leadership grounded in
                the metrics Ofgem and households care about.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {TRUST_LENSES.map((lens) => (
                <article
                  key={lens.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{lens.title}</p>
                  <span className="text-3xl font-semibold text-primary">{lens.score}</span>
                  <p className="text-sm text-muted-foreground">{lens.insight}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {lens.methodology}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {RISK_MONITORS.map((risk) => {
              const Icon = risk.icon;
              return (
                <article
                  key={risk.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-primary/25 bg-primary/5 p-5 dark:border-primary/20 dark:bg-primary/10"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow dark:bg-slate-950/60">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-sm font-semibold text-foreground">{risk.title}</h3>
                  <p className="text-sm text-muted-foreground">{risk.risk}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {risk.mitigation}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-8 rounded-3xl border border-border/60 bg-background p-10 shadow-sm dark:border-border/40 dark:bg-slate-950/80">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.6fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Cloud MLM Software activations for Telecom Plus
            </h2>
            <p className="text-sm text-muted-foreground">
              Deliver a single source of truth for tariffs, installs, and loyalty programmes. Our platform blends AI, automation,
              and compliance so Authorised Partners can focus on member relationships.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Architect my utilities rollout
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href={demoHref}>
                  See the intelligent cockpit
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {CLOUD_PLAYS.map((play) => {
              const Icon = play.icon;
              return (
                <article
                  key={play.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                  <p className="text-sm text-muted-foreground">{play.description}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {play.outcome}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
