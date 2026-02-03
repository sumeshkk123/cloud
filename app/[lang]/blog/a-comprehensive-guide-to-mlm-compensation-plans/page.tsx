import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  BookOpenText,
  LineChart,
  Compass,
  GitBranch,
  GraduationCap,
  Layers,
  MonitorCheck,
  Workflow
} from "lucide-react";
import {
  Circuitry,
  CirclesFour,
  Coins,
  CompassTool,
  CubeTransparent,
  Gauge,
  GlobeHemisphereEast,
  Handshake,
  Lightning,
  Target
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
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
  accent: string;
};

type Step = {
  title: string;
  description: string;
  outcome: string;
  icon: IconType;
};

type PlanProfile = {
  name: string;
  headline: string;
  idealFor: string;
  caution: string;
  icon: IconType;
};

type Signal = {
  title: string;
  description: string;
  icon: IconType;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Compensation audits completed",
    value: "320+",
    detail: "Across binary, unilevel, matrix, hybrid, and stair-step models since 2012.",
    icon: Gauge
  },
  {
    label: "Average payout optimisation",
    value: "18%",
    detail: "Typical increase in sustainable distributor earnings after redesign.",
    icon: LineChart
  },
  {
    label: "Markets supported",
    value: "45",
    detail: "Localized tax, compliance, and incentive logic for multinational teams.",
    icon: GlobeHemisphereEast
  }
];

const FOUNDATION_PILLARS: Pillar[] = [
  {
    title: "Value architecture",
    summary:
      "Understand how enrolment, volume, and leadership incentives interact so every rank path remains profitable.",
    bullets: [
      "Connect CV/GP formulas to gross margin guardrails.",
      "Balance acquisition bonuses with long-term retention income.",
      "Model leadership pools against forecast adoption curves."
    ],
    icon: Layers,
    accent:
      "from-blue-100 via-sky-50 to-transparent dark:from-blue-500/35 dark:via-sky-500/20 dark:to-transparent"
  },
  {
    title: "Field momentum loops",
    summary:
      "Design touchpoints that move distributors from onboarding to advocacy with measurable behavioural triggers.",
    bullets: [
      "Automate welcome, training, and recognition journeys.",
      "Surface KPIs that predict churn and identify new leaders.",
      "Deliver enablement assets in the languages your field speaks."
    ],
    icon: Workflow,
    accent:
      "from-emerald-100 via-teal-50 to-transparent dark:from-emerald-500/35 dark:via-teal-500/20 dark:to-transparent"
  },
  {
    title: "Governance and compliance",
    summary:
      "Use transparent payout logic, audit trails, and configurable thresholds to keep regulators and finance aligned.",
    bullets: [
      "Codify caps, clawbacks, and breakage rules within the engine.",
      "Log plan changes with board-ready documentation.",
      "Alert finance and legal when anomalies emerge."
    ],
    icon: MonitorCheck,
    accent:
      "from-slate-100 via-stone-50 to-transparent dark:from-slate-500/30 dark:via-stone-600/20 dark:to-transparent"
  }
];

const DESIGN_STEPS: Step[] = [
  {
    title: "Clarify the growth thesis",
    description:
      "Pinpoint your product margin envelope, enrolment expectations, and leadership development goals before touching incentives.",
    outcome: "Anchored revenue model that defines plan guardrails.",
    icon: CompassTool
  },
  {
    title: "Map contributor journeys",
    description:
      "Document how prospects become customers, customers become distributors, and top performers move into leadership cohorts.",
    outcome: "Journey maps that align incentives with desired behaviours.",
    icon: GitBranch
  },
  {
    title: "Prototype compensation loops",
    description:
      "Model binary, unilevel, matrix, generation, gift, stair-step, and X-UP variants against your forecast data.",
    outcome: "Validated payout simulations with predictable cash flow.",
    icon: Circuitry
  },
  {
    title: "Operationalise with AI",
    description:
      "Deploy automation to monitor rank progress, detect anomalies, and trigger coaching nudges across the field.",
    outcome: "Self-tuning plan that adapts to market dynamics in real time.",
    icon: Lightning
  }
];

const PLAN_PROFILES: PlanProfile[] = [
  {
    name: "Binary compensation plan",
    headline:
      "Two balanced legs unlock stable payouts, provided inventory and mentoring support prevent stalled limbs.",
    idealFor: "Teams prioritising rapid duplication and strong team-based mentoring cultures.",
    caution:
      "Left/right volume drift erodes morale. Automate spillover management and weekly balancing alerts.",
    icon: CirclesFour
  },
  {
    name: "Matrix compensation plan",
    headline:
      "Fixed-width structures control exponential growth and keep compliance happy when product margins are tight.",
    idealFor: "Leaders seeking predictable payouts with product-focused storytelling and depth-driven bonuses.",
    caution:
      "Forced fills can demotivate uplines. Use AI prompts to coach active sponsorship rather than passive placement.",
    icon: CubeTransparent
  },
  {
    name: "Unilevel compensation plan",
    headline:
      "Unlimited frontline width creates a clean story for customer acquisition and ambassador programmes.",
    idealFor: "Digital-first brands with strong consumer marketing engines and influencer partnerships.",
    caution:
      "Deep lineage bonuses require breakaway policies. Monitor compression rules to avoid runaway expense.",
    icon: Compass
  },
  {
    name: "Generation compensation plan",
    headline:
      "Leadership bonuses cascade across rank tiers, rewarding mentorship and sustainable depth building.",
    idealFor: "Enterprises with coaching academies, leadership ladders, and data-driven accountability rhythms.",
    caution:
      "Complex leg qualification criteria confuse field teams. Provide dynamic scorecards and AI-led coaching.",
    icon: GraduationCap
  },
  {
    name: "Gift / donation plan",
    headline:
      "Peer-to-peer contributions energise communities when framed around shared causes and transparent giveback.",
    idealFor: "Purpose-driven organisations with strong storytelling and community stewardship models.",
    caution:
      "Regulatory scrutiny is high. Embed compliance checkpoints and real-time disclosure dashboards.",
    icon: Handshake
  },
  {
    name: "Stair-step / breakaway plan",
    headline:
      "Volume thresholds graduate teams into leadership, allowing top performers to spin out and earn overrides.",
    idealFor: "Legacy enterprises modernising their plan while preserving proven recognition structures.",
    caution:
      "Breakaway events can destabilise mid-tier leaders. Offer transition coaching and collaborative revenue pools.",
    icon: Coins
  },
  {
    name: "Australian X-UP plan",
    headline:
      "Pass-up cycles fund uplines early while keeping front-line distributors motivated through rapid earning pathways.",
    idealFor: "Fast-moving teams launching in emerging markets with strong mentorship rituals.",
    caution:
      "Clarity on pass-up counts is critical. Visual dashboards keep expectations realistic and trustworthy.",
    icon: Target
  }
];

const AIO_SIGNALS: Signal[] = [
  {
    title: "Predictive rank science",
    description:
      "Use machine learning to forecast volume shortfalls and recommend precise actions before promotions are missed.",
    icon: Circuitry
  },
  {
    title: "Narrative-ready knowledge base",
    description:
      "Structure every policy, FAQ, and plan scenario so human reps and AI copilots speak the same, compliant language.",
    icon: BookOpenText
  },
  {
    title: "Continuous compliance radar",
    description:
      "Blend anomaly detection with human oversight to spot income claims, cross-border risk, and breakage patterns instantly.",
    icon: MonitorCheck
  },
  {
    title: "Field enablement intelligence",
    description:
      "Measure how specific incentives influence customer acquisition, onboarding velocity, and retention in each market.",
    icon: Compass
  },
  {
    title: "Cash flow guardrails",
    description:
      "Align commission cycles with treasury forecasts and automatically throttle bonuses when profitability dips.",
    icon: Coins
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Comprehensive Guide to MLM Compensation Plans";
  const description =
    "Understand binary, matrix, unilevel, generation, gift, stair-step, and Australian X-UP plans with Cloud MLM Software’s strategic blueprint.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/a-comprehensive-guide-to-mlm-compensation-plans", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type CompensationGuidePageProps = {
  params: { lang: SupportedLocale };
};

export default function CompensationGuidePage({ params }: CompensationGuidePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-24 text-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(56,189,248,0.3),transparent_55%),radial-gradient(circle_at_82%_22%,rgba(16,185,129,0.25),transparent_60%),radial-gradient(circle_at_68%_78%,rgba(99,102,241,0.18),transparent_60%)]" />
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr),minmax(0,380px)]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-white">
                Thought leadership · Compensation strategy
              </span>
              <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                A comprehensive guide to MLM compensation plans
              </h1>
              <p className="text-lg text-white/80">
                Equip your leadership team with a playbook that protects profitability, inspires the field, and satisfies
                regulators. This deep dive translates legacy plan knowledge into modern, AI-ready operating models.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild variant="default" className="bg-emerald-400 text-slate-900 hover:bg-emerald-300">
                  <Link href={demoHref}>
                    Book a tailored demo
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white/10">
                  <Link href={contactHref}>
                    Talk to compensation architects
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              {HERO_METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5 shadow-lg shadow-emerald-500/10"
                >
                  <div className="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-emerald-200">
                    <metric.icon className="h-5 w-5 text-emerald-300" aria-hidden />
                    {metric.label}
                  </div>
                  <p className="text-3xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-2 text-sm text-white/70">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-semibold text-foreground">Build a compensation plan that sustains momentum</h2>
          <p className="text-lg text-muted-foreground">
            Cloud MLM Software distils countless compensation redesigns into a structured framework. Use it to refine legacy
            plans, launch new markets, or future-proof the incentives that power your distributor community.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {FOUNDATION_PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card p-8 transition hover:-translate-y-1 hover:shadow-xl dark:border-border/40"
            >
              <div
                className={`absolute inset-0 -z-10 opacity-80 transition duration-500 group-hover:opacity-100 bg-gradient-to-br ${pillar.accent}`}
              />
              <pillar.icon className="mb-6 h-10 w-10 text-primary" aria-hidden />
              <h3 className="text-xl font-semibold text-foreground">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.summary}</p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                {pillar.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span aria-hidden className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/80" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-border/60 bg-muted/40 p-8 md:p-12 dark:border-border/40 dark:bg-muted/10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-4 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Design sequence
              </span>
              <h2 className="text-2xl font-semibold text-foreground">From revenue thesis to AI-assisted execution</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Every decision about enrolment bonuses, team overrides, or leadership pools flows from the business model.
                Use this sequence to keep finance, product, legal, and the field aligned as you iterate.
              </p>
            </div>
            <div className="grid gap-6">
              {DESIGN_STEPS.map((step, index) => (
                <div
                  key={step.title}
                  className="group relative overflow-hidden rounded-3xl border border-border/60 bg-background/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40"
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent via-primary/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <step.icon className="h-6 w-6" aria-hidden />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                          Phase {index + 1}
                        </p>
                        <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-primary" aria-hidden />
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{step.description}</p>
                  <div className="mt-5 rounded-2xl bg-primary/5 p-4 text-xs font-semibold uppercase tracking-wide text-primary">
                    Outcome · {step.outcome}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)]">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-4 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Plan by plan
            </span>
            <h2 className="text-3xl font-semibold text-foreground">Choose the right structure for every market</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Each compensation plan within this guide reflects proven best practices from the legacy article while layering in
              modern automation, analytics, and regulatory safeguards. Use the comparisons to match incentives to your growth
              scenario.
            </p>
            <div className="rounded-2xl border border-primary/20 bg-primary/10 p-5 text-sm text-primary">
              <p className="font-semibold">Insight</p>
              <p className="mt-2">
                Most enterprises blend two or more structures. Cloud MLM Software’s modelling engine lets you combine binary
                team legs with generation bonuses or X-UP onboarding accelerators—without losing financial control.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {PLAN_PROFILES.map((plan) => (
              <article
                key={plan.name}
                className="flex flex-col justify-between rounded-3xl border border-border/60 bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <plan.icon className="h-6 w-6" aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">{plan.headline}</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      <span className="font-semibold text-foreground">Best fit:</span> {plan.idealFor}
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Watch out for:</span> {plan.caution}
                    </p>
                  </div>
                </div>
                <div className="mt-6 text-xs font-semibold uppercase tracking-wide text-primary">
                  Powered by Cloud MLM Software’s compensation engine
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 via-background to-background p-10 dark:border-border/40">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,340px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                AI & AIO optimisation
              </span>
              <h2 className="text-3xl font-semibold text-foreground">Turn every policy into AI-ready knowledge</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Your compensation documentation should be legible to AI copilots, compliance teams, and human mentors alike.
                Structure the rules so they can be queried, explained, and acted upon instantly—without hallucinations.
              </p>
              <Button asChild variant="secondary" className="bg-foreground text-background hover:bg-foreground/90">
                <Link href={pricingHref}>
                  Explore compensation intelligence
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {AIO_SIGNALS.map((signal) => (
                <div key={signal.title} className="rounded-3xl border border-border/60 bg-background p-6 dark:border-border/40">
                  <signal.icon className="h-8 w-8 text-primary" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{signal.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{signal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-border/60 bg-card p-10 text-center dark:border-border/40">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-semibold text-foreground">
              Ready to optimise your MLM compensation plan?
            </h2>
            <p className="text-lg text-muted-foreground">
              Cloud MLM Software consolidates the insights from the original WordPress article and enhances them with enterprise
              tooling. We help you model commissions, automate compliance, and equip AI copilots with trustworthy knowledge.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href={demoHref}>
                  Start your compensation assessment
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={contactHref}>
                  Connect with a strategist
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
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
