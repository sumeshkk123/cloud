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
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Building2,
  Cpu,
  Globe2,
  GraduationCap,
  Handshake,
  Layers,
  MapPin,
  Radar,
  RefreshCcw,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Users,
  Zap
} from "lucide-react";
import {
  ChartLineUp,
  CirclesThreePlus,
  DeviceMobile,
  Lightning,
  ShieldCheckered,
  Target
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type SnapshotMetric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type StrategicAnchor = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type ServiceStream = {
  title: string;
  description: string;
  insight: string;
  icon: IconType;
};

type TimelineEvent = {
  year: string;
  headline: string;
  detail: string;
  proof: string;
};

type FieldBlueprint = {
  stage: string;
  narrative: string;
  enablement: string;
  icon: IconType;
};

type TrustPillar = {
  title: string;
  score: string;
  insight: string;
  methodology: string;
};

type Watchpoint = {
  title: string;
  description: string;
  mitigation: string;
  icon: IconType;
};

type CloudActivation = {
  title: string;
  description: string;
  outcome: string;
  icon: IconType;
};

type PrimaryTrustScore = {
  score: number;
  label: string;
  summary: string;
};

const SNAPSHOT_METRICS: SnapshotMetric[] = [
  {
    label: "Founded",
    value: "2005",
    detail: "Rob Snyder and Pierre Koshakji launched Stream inside Texas’ newly deregulated market.",
    icon: Building2
  },
  {
    label: "Acquired by",
    value: "NRG Energy (2019)",
    detail: "NRG purchased Stream’s retail energy book for $300M to scale a connected-living portfolio.",
    icon: Handshake
  },
  {
    label: "Service footprint",
    value: "7 states + D.C.",
    detail: "Active in TX, GA, PA, NY, NJ, MD, IL, alongside Washington, D.C. deregulated corridors.",
    icon: Globe2
  },
  {
    label: "Solutions",
    value: "Electric • Gas • Wireless • Home services",
    detail: "Stream Linked Services bundles essential utilities so households stay connected end-to-end.",
    icon: Layers
  },
  {
    label: "Sales motion",
    value: "Ignite field model",
    detail: "Directors lead relationship-rich acquisition journeys online and in-person for recurring revenue.",
    icon: Users
  },
  {
    label: "Headquarters",
    value: "Dallas, Texas",
    detail: "The corporate team moved into the Tollway Center campus in 2017 to support national growth.",
    icon: MapPin
  }
];

const STRATEGIC_ANCHORS: StrategicAnchor[] = [
  {
    title: "Lifestyle bundling advantage",
    description:
      "Energy, mobile, and protection plans operate inside one relationship, turning essential services into premium loyalty programs.",
    proof: "Stream Linked Services marketing emphasises bundled convenience for on-the-go customers.",
    icon: Sparkles
  },
  {
    title: "Ignite storytelling engine",
    description:
      "Field leaders translate kilowatt hours, rate classes, and contract options into relatable household savings narratives.",
    proof: "Ignite direct selling playbooks and leadership summits spotlight neighbourhood storytelling.",
    icon: Zap
  },
  {
    title: "Regulatory readiness mindset",
    description:
      "Operating across deregulated utilities demands disciplined licensing, disclosure, and complaint resolution workflows.",
    proof: "Public utility commission filings across TX, GA, PA, NY, NJ, MD, IL, and Washington, D.C.",
    icon: ShieldCheck
  }
];

const SERVICE_STREAMS: ServiceStream[] = [
  {
    title: "Energy command center",
    description: "Fixed, variable, and green energy mixes adapt to each family’s usage rhythms and cash flow priorities.",
    insight: "Scenario planners surface contract length, rate changes, and renewable upsells with clear budget impact.",
    icon: Lightning
  },
  {
    title: "Connected life suite",
    description: "Wireless, home automation, and security layers extend Stream’s relevance beyond the utility bill.",
    insight: "Bundle comparisons demonstrate how mobility, streaming, and smart-home perks reinforce retention.",
    icon: DeviceMobile
  },
  {
    title: "Protection & assurance",
    description: "Surge protection, service credits, and device coverage calm customers during outages or rate swings.",
    insight: "Automated workflows alert leaders when claims spike so they can deploy white-glove recovery teams.",
    icon: ShieldCheckered
  }
];

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "2005",
    headline: "Retail energy launch in Texas",
    detail:
      "Stream enters the deregulated Texas market with a vision to modernise utility subscriptions and direct selling.",
    proof: "Wikipedia — Stream Energy founding summary."
  },
  {
    year: "2008–2010",
    headline: "Expansion to Georgia and the Northeast",
    detail: "Licensure in GA, PA, NY, and NJ introduces multi-market operations and compliance orchestration.",
    proof: "Wikipedia — Market expansion chronology."
  },
  {
    year: "2015",
    headline: "Connected life services debut",
    detail: "Stream Wireless and home services launch to keep customers engaged beyond the meter.",
    proof: "Wikipedia — Stream Wireless announcement."
  },
  {
    year: "2017",
    headline: "Headquarters relocates to North Dallas",
    detail: "The Tollway Center move supports hybrid workforces, technology teams, and customer advocacy hubs.",
    proof: "Dallas Business Journal coverage of the relocation."
  },
  {
    year: "2019",
    headline: "NRG Energy acquisition",
    detail: "NRG acquires Stream’s retail energy business, fusing connected services with a Fortune 500 energy platform.",
    proof: "NRG Energy press release announcing the $300M deal."
  }
];

const FIELD_BLUEPRINTS: FieldBlueprint[] = [
  {
    stage: "Illuminate deregulated choice",
    narrative:
      "Educate households on why switching providers matters, how rates are structured, and what protections exist.",
    enablement:
      "Interactive calculators compare incumbent tariffs with Stream offers while AI prompts keep claims compliant.",
    icon: Target
  },
  {
    stage: "Bundle essential experiences",
    narrative:
      "Lead with the core energy contract, then layer mobile, protection, and smart-home packages that reinforce continuity.",
    enablement:
      "Guided journeys recommend bundles based on household size, device habits, and risk appetite.",
    icon: CirclesThreePlus
  },
  {
    stage: "Monitor, mentor, and renew",
    narrative:
      "Use usage alerts, renewal cadences, and loyalty events to keep customers informed before rate cliffs appear.",
    enablement:
      "Leadership dashboards highlight attrition signals so mentors can intervene with savings or loyalty campaigns.",
    icon: ChartLineUp
  }
];

const TRUST_PILLARS: TrustPillar[] = [
  {
    title: "Regulatory posture",
    score: "66/100",
    insight:
      "Licensing discipline across multiple public utility commissions keeps operations legitimate yet demands constant updates.",
    methodology: "Weighted on commission accuracy, dispute resolution, and state-level regulatory transparency."
  },
  {
    title: "Field economics",
    score: "58/100",
    insight:
      "Historic Ignite attrition means leaders must prove ROI quickly with training, pacing, and realistic income scenarios.",
    methodology: "Based on public earnings disclosures, media analysis, and support program maturity."
  },
  {
    title: "Customer loyalty",
    score: "63/100",
    insight:
      "Bundled services deepen retention when rate communications remain proactive and outage support stays empathetic.",
    methodology: "Blend of complaint data, bundling adoption, and proactive communication frameworks."
  }
];

const WATCHPOINTS: Watchpoint[] = [
  {
    title: "Distributor payback timelines",
    description:
      "Many Ignite directors historically struggled to recoup starter investments, signalling a need for disciplined pacing.",
    mitigation:
      "Surface ROI calculators, gamify compliant wins, and align incentives to verified customer volume—not recruitment.",
    icon: AlertTriangle
  },
  {
    title: "Tariff & rate volatility",
    description:
      "State regulators scrutinise pricing swings, especially during peak seasons or supply disruptions.",
    mitigation:
      "Sync regulatory alerts with rate change approvals and publish transparent rationale to the field and customers.",
    icon: Radar
  },
  {
    title: "Brand clarity post-NRG",
    description:
      "Customers can confuse Stream-branded experiences with NRG’s other retail labels during integration cycles.",
    mitigation:
      "Maintain a shared experience guide, unify billing communications, and align loyalty offers across brands.",
    icon: RefreshCcw
  }
];

const CLOUD_ACTIVATIONS: CloudActivation[] = [
  {
    title: "Dynamic rate simulation",
    description:
      "Model fixed, variable, and time-of-use plans with live commodity feeds so leaders approve pricing with confidence.",
    outcome: "Cuts approval cycles and arms the field with transparent savings narratives backed by data.",
    icon: Cpu
  },
  {
    title: "AI bundling advisor",
    description:
      "Recommends energy, wireless, and protection stacks based on household signals, device usage, and retention goals.",
    outcome: "Boosts average revenue per user while staying compliant with claim libraries.",
    icon: Bot
  },
  {
    title: "Ignite compliance academy",
    description:
      "Microlearning tracks cover state disclosures, outage protocols, and ethical enrollment practices.",
    outcome: "Raises certification completion rates and shields the brand from regulatory escalations.",
    icon: GraduationCap
  },
  {
    title: "Grid event communications",
    description:
      "Automates SMS, email, and in-app alerts when severe weather or grid constraints demand immediate updates.",
    outcome: "Keeps customers informed, reduces support tickets, and preserves trust during high-stress moments.",
    icon: ServerCog
  }
];

const PRIMARY_TRUST_SCORE: PrimaryTrustScore = {
  score: 64,
  label: "Energy trust index",
  summary: "Synthesises regulatory posture, field enablement maturity, and customer sentiment across deregulated markets."
};

const GAUGE_STYLE: CSSProperties = {
  background: `conic-gradient(#22d3ee ${PRIMARY_TRUST_SCORE.score * 3.6}deg, rgba(14, 165, 233, 0.15) 0deg)`
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Stream MLM Analysis for Energy & Connected Life Bundles";
  const description =
    "Unpack how Stream’s energy, wireless, and protection services blend with the Ignite field model, and see how Cloud MLM Software powers compliant growth.";
  const keywords = [
    "Stream Energy MLM",
    "Stream Ignite compensation analysis",
    "energy direct selling software",
    "Stream Linked Services bundling",
    "Cloud MLM Software for utilities"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/stream", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type StreamPageProps = {
  params: { lang: SupportedLocale };
};

export default function StreamPage({ params }: StreamPageProps) {
  const locale = resolveLocale(params.lang);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const indexHref = buildLocalizedPath("/mlm-companies", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(34,211,238,0.18),transparent_50%),radial-gradient(circle_at_80%_12%,rgba(6,182,212,0.25),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,0.55fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-1 text-sm font-semibold text-cyan-100">
              Stream • Energy & Connected Life
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Stream MLM blueprint for modern energy and connected services.
            </h1>
            <p className="text-base text-cyan-50/80">
              Convert deregulated energy choice into loyalty-rich experiences. Stream’s Ignite field model thrives when
              compliant storytelling, bundled services, and data-driven renewals keep households confident through every season.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={demoHref}>
                  Explore the platform tour
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-cyan-200/70 text-cyan-100 hover:bg-cyan-500/10">
                <Link href={pricingHref}>
                  View pricing blueprints
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-cyan-100 underline underline-offset-4 hover:bg-white/10">
                <Link href={indexHref}>
                  Browse MLM company index
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="space-y-3 text-sm text-cyan-50/80">
              <p className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-cyan-200" aria-hidden />
                Dallas, Texas • Operating across TX, GA, PA, NY, NJ, MD, IL & Washington, D.C.
              </p>
              <p>
                “Stream Linked Services bring energy, mobile, and protection under one trusted identity, so families stay
                connected even when the grid shifts or life goes mobile.”
              </p>
            </div>
          </div>

          <aside className="grid gap-6 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-xl backdrop-blur">
            <div className="flex flex-col items-center gap-5 rounded-2xl border border-white/20 bg-white/10 p-6 text-center">
              <div className="relative flex h-44 w-44 items-center justify-center rounded-full p-4" style={GAUGE_STYLE} aria-hidden>
                <div className="absolute inset-6 flex flex-col items-center justify-center rounded-full bg-transparent text-center shadow-inner">
                  <span className="text-4xl font-semibold text-white">{PRIMARY_TRUST_SCORE.score}</span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-cyan-100/80">
                    {PRIMARY_TRUST_SCORE.label}
                  </span>
                </div>
              </div>
              <p className="text-xs text-cyan-50/80">{PRIMARY_TRUST_SCORE.summary}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {SNAPSHOT_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex h-full flex-col gap-3 rounded-2xl border border-white/20 bg-black/30 p-4 shadow-sm transition hover:-translate-y-1 hover:bg-black/40"
                  >
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-100">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-cyan-100/80">{metric.label}</span>
                    </div>
                    <span className="text-lg font-semibold text-white">{metric.value}</span>
                    <p className="text-xs text-cyan-50/80">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 rounded-3xl border border-primary/15 bg-gradient-to-br from-cyan-50 via-white to-slate-50 p-8 dark:border-primary/10 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Strategic anchors to emulate</h2>
            <p className="text-sm text-muted-foreground">
              Stream proves that energy and connected services can feel premium when bundling, compliance, and field enablement
              move in lockstep. Use these anchors to guide your own launch or optimisation.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {STRATEGIC_ANCHORS.map((anchor) => {
              const Icon = anchor.icon;
              return (
                <article
                  key={anchor.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{anchor.title}</h3>
                    <p className="text-sm text-muted-foreground">{anchor.description}</p>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">{anchor.proof}</p>
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
                Service stack orchestration
              </h2>
              <p className="text-sm text-muted-foreground">
                Stream’s value lies in orchestrating multiple essential services through a single relationship. Each layer adds a
                new reason for customers to stay, provided your systems keep the experience effortless.
              </p>
            </div>
            <div className="space-y-4">
              {SERVICE_STREAMS.map((service) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.title}
                    className="flex gap-4 rounded-3xl border border-primary/20 bg-primary/5 p-5 dark:border-primary/15 dark:bg-primary/10"
                  >
                    <span className="mt-1 inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary shadow dark:bg-slate-950/60">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                        {service.insight}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Moments that shaped Stream</h2>
              <p className="text-sm text-muted-foreground">
                Trace the milestones that refined Stream’s operating model—from deregulation sparks to enterprise-scale
                integration.
              </p>
            </div>
            <div className="space-y-6">
              {TIMELINE_EVENTS.map((event) => (
                <article key={event.year} className="relative pl-6">
                  <span className="absolute left-0 top-2 inline-flex h-3 w-3 rounded-full bg-primary shadow" aria-hidden />
                  <div className="space-y-2 rounded-2xl border border-border/60 bg-background/80 p-5 dark:border-border/40 dark:bg-slate-950/80">
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                      {event.year}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{event.headline}</h3>
                    <p className="text-sm text-muted-foreground">{event.detail}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                      {event.proof}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Field blueprint priorities</h2>
          <p className="text-sm text-muted-foreground">
            Build clarity, bundling confidence, and renewal discipline into every leader’s workflow. These three moments keep
            the Stream playbook balanced between growth and responsibility.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {FIELD_BLUEPRINTS.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.stage}
                className="relative flex h-full flex-col gap-4 rounded-3xl border border-primary/20 bg-primary/5 p-6 dark:border-primary/15 dark:bg-primary/10"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary shadow dark:bg-slate-950/60">
                  {index + 1}
                </span>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{item.stage}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.narrative}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                  {item.enablement}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.45fr)]">
          <div className="space-y-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Trust lens diagnostics</h2>
              <p className="text-sm text-muted-foreground">
                Gauge where you stand before scaling. Each score blends regulatory expectations, field sentiment, and customer
                experience heuristics drawn from Stream’s trajectory.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {TRUST_PILLARS.map((pillar) => (
                <article
                  key={pillar.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
                >
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{pillar.title}</p>
                    <span className="text-3xl font-semibold text-primary">{pillar.score}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{pillar.insight}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {pillar.methodology}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Watchpoints to manage</h2>
              <p className="text-sm text-muted-foreground">
                Navigate the realities behind Stream’s rapid growth so your expansion stays resilient and respected.
              </p>
            </div>
            <div className="space-y-4">
              {WATCHPOINTS.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="flex gap-3 rounded-3xl border border-primary/25 bg-primary/5 p-5 dark:border-primary/20 dark:bg-primary/10"
                  >
                    <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary shadow dark:bg-slate-950/60">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                        {item.mitigation}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-8 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/5 p-10 dark:border-primary/15 dark:from-primary/10 dark:via-slate-950 dark:to-primary/15">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.65fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Cloud MLM Software activations for Stream-style programs
            </h2>
            <p className="text-sm text-muted-foreground">
              Pair Stream’s service bundling with a modern technology core. We orchestrate compliant pricing, communications,
              and field enablement without slowing innovation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Design my Stream roadmap
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href={demoHref}>
                  Schedule a guided demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {CLOUD_ACTIVATIONS.map((play) => {
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

