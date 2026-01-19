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
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Calculator,
  ClipboardCheck,
  ClipboardList,
  Crown,
  FileText,
  Globe2,
  GitBranch,
  LayoutGrid,
  LineChart,
  Network,
  Rocket,
  Share2,
  ShieldCheck,
  Shuffle,
  Sparkles,
  Users,
  Wallet
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type PlanFamily = {
  name: string;
  description: string;
  bestFor: string;
  highlights: string[];
  icon: IconType;
};

type SectionNavItem = {
  label: string;
  href: string;
};

type SimulationTool = {
  title: string;
  description: string;
  metrics: string[];
  icon: IconType;
};

type PlanDeliverable = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type PlanUseCase = {
  customer: string;
  region: string;
  narrative: string;
  outcomes: string[];
};

const HERO_STATS = [
  { label: "Plan templates", value: "12" },
  { label: "Simulations each month", value: "4,800+" },
  { label: "Regulated markets", value: "45" }
];

const SECTION_NAV: SectionNavItem[] = [
  { label: "Frameworks", href: "#plan-families" },
  { label: "Evaluation", href: "#plan-evaluation" },
  { label: "Simulations", href: "#plan-simulations" },
  { label: "Deliverables", href: "#plan-deliverables" },
  { label: "Implementation", href: "#plan-implementation" },
  { label: "Outcomes", href: "#plan-use-cases" },
  { label: "FAQ", href: "#plan-faq" }
];

const PLAN_FAMILIES: PlanFamily[] = [
  {
    name: "Binary",
    description:
      "Two-leg structures with carry-forward logic and leg balancing tools that keep payout cycles predictable.",
    bestFor: "Teams prioritising rapid momentum with weekly cycles and simple storytelling.",
    highlights: [
      "Flexible weak-leg qualification thresholds",
      "Leadership matching bonuses with rolling compression",
      "Safety nets for overpayment and excessive spillover"
    ],
    icon: GitBranch
  },
  {
    name: "Unilevel",
    description:
      "Unlimited frontline enrolment with depth-based payouts, breakaway rules, and leadership pools.",
    bestFor: "Companies rewarding influencer-led acquisition and long-term customer retention.",
    highlights: [
      "Customisable level caps and infinity modifiers",
      "Multiple bonus wallets for mentorship and performance",
      "Predictive depth analytics to prevent payout drag"
    ],
    icon: Share2
  },
  {
    name: "Matrix",
    description:
      "Forced-width structures with auto-fill spillover, re-entry controls, and lock-step rank advancement.",
    bestFor: "Brands orchestrating curated enrolment journeys and high-energy launches.",
    highlights: [
      "Dynamic compression and skipped-position recovery",
      "Re-entry plus team bonuses that respect compliance",
      "Visual genealogy tools for leadership coaching"
    ],
    icon: LayoutGrid
  },
  {
    name: "Generation",
    description:
      "Volume-driven breakaway models that support stair-step logic, fast-start rewards, and leadership pools.",
    bestFor: "Established enterprises managing deep organisations across multiple markets.",
    highlights: [
      "Configurable breakaway and payout ceilings",
      "Multi-currency pools aligned to executive KPIs",
      "Scenario planning for quarterly plan adjustments"
    ],
    icon: Network
  },
  {
    name: "Board & cycler",
    description:
      "Queue-based progressions with auto-advance, reinvestment, and hybrid incentives for gamified selling.",
    bestFor: "Emerging businesses seeking viral mechanics with strong guardrails.",
    highlights: [
      "Automated board recycling and tracking dashboards",
      "Configurable entry costs with compliance reminders",
      "Risk scoring to prevent abuse and wash trading"
    ],
    icon: Shuffle
  },
  {
    name: "Hybrid & custom",
    description:
      "Combine binary, matrix, uni-level, and customer rewards in one governed plan managed inside Plan Studio.",
    bestFor: "Brands modernising legacy plans without disrupting active field teams.",
    highlights: [
      "Side-by-side simulations with baseline benchmarks",
      "Localized commission rules tied to tax policies",
      "Sandbox testing with controlled field cohorts"
    ],
    icon: Crown
  }
];

const PLAN_EVALUATION = [
  {
    title: "Compensation economics",
    description: "Model payout ratios, CV splits, and rank compression to protect margin.",
    icon: BarChart3
  },
  {
    title: "Cash flow & wallets",
    description: "Define weekly, monthly, and instant payouts with multi-currency settlement.",
    icon: Wallet
  },
  {
    title: "Compliance guardrails",
    description: "Automate regulatory checks, cooling periods, and clawback policies by market.",
    icon: ShieldCheck
  },
  {
    title: "Field experience",
    description: "Ensure the plan story is simple to teach, coach, and celebrate in every region.",
    icon: Users
  },
  {
    title: "Global localisation",
    description: "Translate rules, taxes, and statements to match regional legislation and currencies.",
    icon: Globe2
  }
];

const SIMULATION_TOOLS: SimulationTool[] = [
  {
    title: "Plan Studio sandbox",
    description:
      "Run weekly and monthly commission simulations with version control, so finance can approve payouts before they touch production.",
    metrics: [
      "Scenario comparisons against historical data",
      "Margin impact projections for every bonus",
      "Automated alerts when thresholds are breached"
    ],
    icon: LineChart
  },
  {
    title: "Field health forecasting",
    description:
      "Blend genealogy churn metrics with product velocity to predict promotion readiness and identify coaching moments.",
    metrics: [
      "Rank progression likelihood by leg",
      "Autoship retention and LTV outlook",
      "Emerging leader identification signals"
    ],
    icon: Calculator
  },
  {
    title: "Cash flow command centre",
    description:
      "Model wallets, deductions, and tax obligations across currencies to ensure treasury teams stay ahead of payout cycles.",
    metrics: [
      "Working capital requirements by market",
      "Wallet utilisation and liability forecasts",
      "Compliance checks for withholding and filings"
    ],
    icon: Wallet
  }
];

const PLAN_DELIVERABLES: PlanDeliverable[] = [
  {
    title: "Compensation charter",
    description:
      "Executive-ready documentation covering plan objectives, payout logic, and regulatory considerations for each region.",
    bullets: [
      "Plan narratives tailored for field launch",
      "Financial models with guardrail parameters",
      "Risk register with mitigation actions"
    ],
    icon: FileText
  },
  {
    title: "Stakeholder playbooks",
    description:
      "Enablement kits for finance, compliance, and field leaders so everyone can train, coach, and monitor success.",
    bullets: [
      "Workshop decks and facilitator notes",
      "FAQ scripts and objection handling",
      "Launch communications timeline"
    ],
    icon: ClipboardList
  },
  {
    title: "Performance dashboards",
    description:
      "Real-time analytics for executives and field leadership with thresholds that surface wins and risks instantly.",
    bullets: [
      "Rank, volume, and payout scorecards",
      "Variance alerts routed to plan owners",
      "Downloadable executive briefings"
    ],
    icon: BarChart3
  },
  {
    title: "Compliance evidence pack",
    description:
      "Audit-ready logs, disclosure templates, and filing schedules that satisfy regulatory and partner reviews.",
    bullets: [
      "Automated policy change history",
      "Sample statements with mandated language",
      "Annual audit support checklist"
    ],
    icon: ShieldCheck
  }
];

const PLAN_USE_CASES: PlanUseCase[] = [
  {
    customer: "Global wellness brand",
    region: "North America & APAC",
    narrative:
      "Modernised a legacy unilevel plan into a hybrid structure with leadership pools, improving profitability while preserving rank stories.",
    outcomes: [
      "8.2% improvement in commission margin within one quarter",
      "Launch kit helped 12 markets adopt new rank criteria in 6 weeks",
      "Executive dashboard reduced weekly reporting prep by 70%"
    ]
  },
  {
    customer: "Sustainable beauty startup",
    region: "Europe",
    narrative:
      "Rolled out a matrix-to-binary transition with controlled spillover to support rapid influencer acquisition and compliance with EU regulations.",
    outcomes: [
      "Doubled active distributor count without exceeding commission cap",
      "Retention programs lifted autoship revenue by 22%",
      "Regulatory submissions approved ahead of launch"
    ]
  },
  {
    customer: "Nutrition subscription company",
    region: "Latin America",
    narrative:
      "Introduced customer loyalty rewards alongside distributor bonuses, aligning ecommerce growth with field incentives.",
    outcomes: [
      "Customer reorder rate climbed 18% in three months",
      "Wallet deductions automated 95% of manual adjustments",
      "Field NPS increased by 14 points post-launch"
    ]
  }
];

const IMPLEMENTATION_STEPS = [
  {
    title: "Compensation discovery",
    description: "We map your current payouts, rank logic, and strategic targets with finance and field leadership.",
    icon: ClipboardCheck
  },
  {
    title: "Simulation sprints",
    description: "Plan Studio runs A/B variants, stress tests volume shifts, and validates against historical data.",
    icon: BarChart3
  },
  {
    title: "Executive alignment",
    description: "Finance, compliance, and marketing sign off on the final plan with documented scripts and FAQs.",
    icon: Users
  },
  {
    title: "Launch orchestration",
    description: "Our go-live playbook handles training, statement previews, sandbox testing, and post-launch tuning.",
    icon: Rocket
  }
];

const PLAN_FAQS = [
  {
    question: "Can we migrate our existing genealogy without disrupting payouts?",
    answer:
      "Yes. We import historical volume, balance legs, and wallet balances into staging environments so you can rehearse payouts before switching to production."
  },
  {
    question: "How often can we adjust ranks or bonuses after launch?",
    answer:
      "Plan Studio lets you schedule rule changes, preview impact, and deploy updates per market without downtime. Most customers iterate quarterly."
  },
  {
    question: "Do you support customer loyalty or affiliate rewards alongside distributor plans?",
    answer:
      "Absolutely. Hybrid configurations can separate customer incentives, influencer payouts, and distributor commissions while sharing shared wallets and tax logic."
  },
  {
    question: "What compliance frameworks do you align with?",
    answer:
      "Cloud MLM Software follows FTC, DSA, and regional direct selling codes. We provide documentation, disclosures, and audit logs for each payout run."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Compensation Plans | Cloud MLM Software";
  const description =
    "Design, simulate, and launch binary, unilevel, matrix, hybrid, and custom MLM compensation plans with guided modelling and compliance guardrails.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-plans", locale)
    }
  };
}

type PlansPageProps = {
  params: { lang: SupportedLocale };
};

export default function PlansPage({ params }: PlansPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const compareHref = buildLocalizedPath("/compare-plans", locale);
  const guideHref = "/mlm-plan/";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-amber-50 via-white to-sky-50 py-24 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900/40">
        <div className="container relative">
          <div className="max-w-4xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" aria-hidden />
              Plan Studio & compensation experts
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Build a compensation plan your field understands and finance trusts.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Model binary, unilevel, matrix, board, and hybrid plans with guided simulations, compliance guardrails, and launch playbooks tailored to every market.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Book a compensation workshop
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={compareHref}>
                  Compare pricing options
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href={guideHref} target="_blank" rel="noopener noreferrer">
                  Download plan guide
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <dl className="mt-14 grid gap-6 sm:grid-cols-3">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <dt className="text-sm font-medium text-muted-foreground">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-foreground">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container" aria-label="Plan navigation">
        <div className="flex flex-wrap justify-center gap-3 rounded-full border border-border/60 bg-background/80 px-6 py-4 shadow-sm">
          {SECTION_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex items-center rounded-full border border-border/50 px-3 py-2 text-sm font-semibold text-muted-foreground transition hover:border-primary/40 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <section id="plan-families" className="container space-y-10">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">MLM plan frameworks we configure</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Every plan starts with proven templates, tailored payout engines, and the governance to launch confidently across new markets.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PLAN_FAMILIES.map((plan) => (
            <article
              key={plan.name}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <plan.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
              <p className="text-sm font-medium text-foreground">Best for: <span className="font-normal text-muted-foreground">{plan.bestFor}</span></p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {plan.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="plan-evaluation" className="container space-y-10">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What we evaluate in every plan design</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Our compensation strategists model each scenario to ensure payouts stay profitable, compliant, and easy to explain to the field.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PLAN_EVALUATION.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="plan-simulations" className="container space-y-10">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Simulations that de-risk every payout decision</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Use Plan Studio and predictive analytics to stress-test bonuses, ensure liquidity, and coach leaders with confidence.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {SIMULATION_TOOLS.map((tool) => (
            <article key={tool.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <tool.icon className="h-6 w-6" aria-hidden />
              </span>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {tool.metrics.map((metric) => (
                  <li key={metric} className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="plan-deliverables" className="container space-y-10">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Deliverables your stakeholders receive</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Every engagement produces documentation, analytics, and compliance artefacts that keep executives aligned and regulators satisfied.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PLAN_DELIVERABLES.map((deliverable) => (
            <article key={deliverable.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <deliverable.icon className="h-6 w-6" aria-hidden />
              </span>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">{deliverable.title}</h3>
                <p className="text-sm text-muted-foreground">{deliverable.description}</p>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {deliverable.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="plan-implementation" className="container space-y-10">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How we launch your compensation plan</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            A proven four-phase methodology keeps finance, compliance, and field leaders aligned from workshop to post-launch optimisation.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {IMPLEMENTATION_STEPS.map((step) => (
            <article
              key={step.title}
              className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <step.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="plan-use-cases" className="container space-y-10">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Compensation outcomes delivered for leading brands</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Real-world programmes that combined Plan Studio, automation, and coaching to unlock sustainable growth.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PLAN_USE_CASES.map((useCase) => (
            <article key={useCase.customer} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest text-primary">{useCase.region}</p>
                <h3 className="text-lg font-semibold text-foreground">{useCase.customer}</h3>
                <p className="text-sm text-muted-foreground">{useCase.narrative}</p>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {useCase.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="plan-faq" className="container space-y-6">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Answers to the questions compensation committees and field councils ask during plan modernisation.
          </p>
        </div>
        <div className="space-y-4">
          {PLAN_FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-foreground">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-sm text-primary transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="container flex flex-col items-center gap-6 rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-12 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to modernise your compensation plan?</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Partner with Cloud MLM Software to test scenarios, align stakeholders, and roll out a plan that rewards the right behaviours at every stage of growth.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Schedule a strategy session
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={guideHref} target="_blank" rel="noopener noreferrer">
                Explore plan resources
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
