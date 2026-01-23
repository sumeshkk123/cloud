import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  BookOpen,
  Briefcase,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  FileSpreadsheet,
  Gauge,
  Layers,
  LineChart,
  PenTool,
  Rocket,
  Scale,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Target,
  Users,
  Wallet,
  Workflow
} from "lucide-react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";

export const dynamic = "force-static";

type IconComponent = LucideIcon;

type ToolkitMetric = {
  label: string;
  value: string;
};

type ToolkitPillar = {
  title: string;
  description: string;
  icon: IconComponent;
  bullets: string[];
};

type LifecycleStage = {
  title: string;
  detail: string;
  icon: IconComponent;
  activities: string[];
};

type ModuleCapability = {
  title: string;
  description: string;
  icon: IconComponent;
  outcomes: string[];
};

type ToolkitAsset = {
  title: string;
  description: string;
  badge: string;
  href: string;
};

type ToolkitFaq = {
  question: string;
  answer: string;
};

const TOOLKIT_METRICS: ToolkitMetric[] = [
  { label: "Compensation models delivered", value: "180+" },
  { label: "Average modelling turnaround", value: "72h" },
  { label: "Accuracy uplift after launch", value: "99.97%" }
];

const TOOLKIT_PILLARS: ToolkitPillar[] = [
  {
    title: "Compensation intelligence",
    description:
      "Model, compare, and calibrate compensation plans with data-backed insights before changes reach the field.",
    icon: LineChart,
    bullets: [
      "Scenario planning across binary, unilevel, hybrid, and promo bonuses",
      "Forecasting dashboards for commission cost, breakage, and ROI",
      "Stress tests across markets, currencies, and product mixes"
    ]
  },
  {
    title: "Governance & compliance",
    description:
      "Establish audit-ready processes that align legal, finance, and executive stakeholders on every iteration.",
    icon: ShieldCheck,
    bullets: [
      "Approval workflows with redline tracking and version history",
      "Controls for FTC, DSA, tax, and anti-fraud compliance",
      "Evidence packs for board sign-off and regulator inquiries"
    ]
  },
  {
    title: "Field engagement & enablement",
    description:
      "Equip distributors and leaders with transparent communication, training, and incentive tools.",
    icon: Users,
    bullets: [
      "Compensation change playbooks and announcement cadences",
      "Localized calculators and dashboards for the field",
      "Leader enablement kits with KPIs, rewards, and coaching"
    ]
  }
];

const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    title: "Blueprint & discovery",
    detail:
      "Capture stakeholder objectives, constraints, and field sentiment to anchor modelling priorities.",
    icon: PenTool,
    activities: [
      "Executive and field interviews",
      "Baseline performance benchmarking",
      "Success criteria and KPI alignment"
    ]
  },
  {
    title: "Model & simulate",
    detail:
      "Use Commission Studio to build multi-plan simulations and evaluate financial, behavioural, and compliance impacts.",
    icon: Calculator,
    activities: [
      "Data ingestion and cohort segmentation",
      "What-if scenario modelling",
      "Compensation stress and sensitivity tests"
    ]
  },
  {
    title: "Validate & govern",
    detail:
      "Coordinate cross-functional reviews, control checks, and change documentation to secure sign-off.",
    icon: ClipboardCheck,
    activities: [
      "Audit trail and approval workflows",
      "Legal, finance, and compliance evidence packs",
      "Operational readiness scoring"
    ]
  },
  {
    title: "Launch & coach",
    detail:
      "Deploy the new plan with enablement assets, live dashboards, and ongoing optimisation loops.",
    icon: Rocket,
    activities: [
      "Field communications and training",
      "Real-time performance telemetry",
      "Quarterly optimisation retrospectives"
    ]
  }
];

const MODULE_CAPABILITIES: ModuleCapability[] = [
  {
    title: "Plan modelling studio",
    description:
      "Rapidly iterate plan variants with reusable templates, granular rule engines, and guided workflows.",
    icon: Layers,
    outcomes: [
      "Drag-and-drop compensation components",
      "Automated validation checks for caps and qualifications",
      "Scenario snapshots for stakeholder reviews"
    ]
  },
  {
    title: "Financial impact analytics",
    description:
      "Understand profit, payout, and breakage implications before launch with executive-ready analytics.",
    icon: BarChart3,
    outcomes: [
      "Gross margin, EBITDA, and cash flow tracking",
      "Drilldowns by market, cohort, and rank",
      "Variance analysis versus historical baselines"
    ]
  },
  {
    title: "Commission operations hub",
    description:
      "Run production payouts with airtight controls, multi-ledger management, and exception handling.",
    icon: Wallet,
    outcomes: [
      "Automated posting to ERP, tax, and payment rails",
      "Dual-control approvals for adjustments and clawbacks",
      "Audit-ready payout histories and receipts"
    ]
  },
  {
    title: "Governance & compliance desk",
    description:
      "Centralize policy management, evidence retention, and regulator communication workflows.",
    icon: Briefcase,
    outcomes: [
      "Policy repository with controlled access",
      "Integrated FTC, DSA, and tax assessment matrices",
      "Issue tracking with remediation playbooks"
    ]
  },
  {
    title: "Field enablement layer",
    description:
      "Serve personalized compensation intelligence to leaders and distributors across devices.",
    icon: Workflow,
    outcomes: [
      "Rank progression dashboards and leaderboards",
      "Companion mobile experience for coaching and nudges",
      "Localized incentives and promotions management"
    ]
  }
];

const TOOLKIT_ASSETS: ToolkitAsset[] = [
  {
    title: "Executive alignment brief",
    description:
      "Board-ready summary covering financial targets, risk posture, and how the toolkit accelerates plan changes.",
    badge: "BRIEFING",
    href: "mailto:[email protected]?subject=Request%20Compensation%20Toolkit%20Executive%20Brief"
  },
  {
    title: "Commission analytics workbook",
    description:
      "Excel templates for cohort analysis, breakage tracking, and KPI dashboards aligned to the toolkit methodology.",
    badge: "WORKBOOK",
    href: "mailto:[email protected]?subject=Request%20Commission%20Analytics%20Workbook"
  },
  {
    title: "Compliance control matrix",
    description:
      "Checklist mapping compensation changes to FTC, DSA, GDPR, and regional tax obligations with evidence samples.",
    badge: "CHECKLIST",
    href: "mailto:[email protected]?subject=Request%20Compensation%20Control%20Matrix"
  }
];

const TOOLKIT_FAQS: ToolkitFaq[] = [
  {
    question: "Can the toolkit support multiple compensation plans at once?",
    answer:
      "Yes. The modelling studio handles binary, unilevel, matrix, stair-step, and hybrid combinations with shared product, rank, and promotion libraries."
  },
  {
    question: "Do we need clean historical data to get started?",
    answer:
      "We help profile and normalise your data sources. Even if records are inconsistent, we establish baselines through cohort sampling and staged data remediation."
  },
  {
    question: "How are payout controls and audits managed post-launch?",
    answer:
      "The operations hub automates dual approvals, variance alerts, and evidence archiving so finance and compliance teams can sign off each cycle confidently."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Compensation Toolkit | Cloud MLM Software";
  const description =
    "Design, govern, and launch high-performance compensation plans with Cloud MLM Software's enterprise toolkit.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/resources/compensation/toolkit", locale)
    }
  };
}

type CompensationToolkitPageProps = {
  params: { lang: SupportedLocale };
};

export default function CompensationToolkitPage({ params }: CompensationToolkitPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const servicesHref = buildLocalizedPath("/services", locale);
  const downloadHref = "/resources/compensation-toolkit/";

  return (
    <div className="space-y-24 pb-24">
      <section className="border-b border-border/60 bg-gradient-to-br from-slate-100 via-white to-primary/10 py-24 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900/40">
        <div className="container space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary">
            <Sparkles size={16} aria-hidden /> Compensation toolkit
          </span>
          <div className="max-w-4xl space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Engineer compensation plans that scale growth, protect margins, and keep the field inspired.
            </h1>
            <p className="text-lg text-muted-foreground">
              Apply the Cloud MLM Software compensation toolkit to modernise plan design, accelerate approvals, and deliver transparent payouts across every market.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href={downloadHref} target="_blank" rel="noopener noreferrer">
                Download the toolkit
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={contactHref}>
                Talk to compensation strategists
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="hover:bg-primary/10">
              <Link href={servicesHref}>
                Explore compensation services
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {TOOLKIT_METRICS.map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-border/60 bg-background/80 p-6 text-left shadow-sm">
                <p className="text-3xl font-semibold text-foreground">{metric.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Toolkit pillars</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Align every plan update to clear financial, compliance, and field outcomes using the three pillars below.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {TOOLKIT_PILLARS.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article key={pillar.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  <Icon size={18} aria-hidden /> Strategic pillar
                </span>
                <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <ul className="mt-2 space-y-3 text-sm text-muted-foreground">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="mt-0.5 text-primary" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Plan lifecycle methodology</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            A proven four-stage delivery model keeps legal, finance, product, and field leadership working in lockstep.
          </p>
        </div>
        <ol className="grid gap-6 md:grid-cols-2">
          {LIFECYCLE_STAGES.map((stage, index) => {
            const Icon = stage.icon;

            return (
              <li key={stage.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  <Icon size={18} aria-hidden /> Stage {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-foreground">{stage.title}</h3>
                <p className="text-sm text-muted-foreground">{stage.detail}</p>
                <ul className="mt-1 space-y-3 text-sm text-muted-foreground">
                  {stage.activities.map((activity) => (
                    <li key={activity} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="mt-0.5 text-primary" aria-hidden />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="container space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Platform capabilities included</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Every toolkit engagement includes access to the Cloud MLM Software modules required to deliver plan accuracy at scale.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {MODULE_CAPABILITIES.map((capability) => {
            const Icon = capability.icon;

            return (
              <article key={capability.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  <Icon size={18} aria-hidden /> Platform capability
                </span>
                <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
                <ul className="mt-2 space-y-3 text-sm text-muted-foreground">
                  {capability.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="mt-0.5 text-primary" aria-hidden />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Toolkit deliverables</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Request these assets to accelerate executive reviews, financial modelling, and compliance validation.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {TOOLKIT_ASSETS.map((asset) => (
            <article key={asset.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                {asset.badge}
              </span>
              <h3 className="text-lg font-semibold text-foreground">{asset.title}</h3>
              <p className="text-sm text-muted-foreground">{asset.description}</p>
              <Button asChild variant="ghost" className="mt-auto justify-start px-0 text-primary">
                <Link href={asset.href}>Request asset</Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Guidance for legal, finance, and programme leadership evaluating the compensation toolkit.
          </p>
        </div>
        <div className="space-y-4">
          {TOOLKIT_FAQS.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="container flex flex-col items-center gap-6 rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-12 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to future-proof compensation at scale?</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Partner with Cloud MLM Software specialists to co-create compensation strategies, launch with confidence, and keep every payout accurate and audit-ready.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>Schedule a consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={demoHref}>See compensation modelling</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
