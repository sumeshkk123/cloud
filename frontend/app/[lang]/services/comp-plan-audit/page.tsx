import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  FileSpreadsheet,
  Lightbulb,
  LineChart,
  ShieldCheck
} from "lucide-react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";

export const dynamic = "force-static";

type IconComponent = LucideIcon;

type AuditMetric = {
  label: string;
  value: string;
};

type AuditPillar = {
  title: string;
  description: string;
  icon: IconComponent;
  bullets: string[];
};

type Deliverable = {
  title: string;
  description: string;
  icon: IconComponent;
  highlights: string[];
};

type EngagementStep = {
  title: string;
  detail: string;
  duration: string;
};

type InsightHighlight = {
  title: string;
  value: string;
  description: string;
};

type AuditFaq = {
  question: string;
  answer: string;
};

const AUDIT_METRICS: AuditMetric[] = [
  { label: "Plans audited", value: "480+" },
  { label: "Markets benchmarked", value: "38" },
  { label: "Average ROI uplift", value: "21%" }
];

const AUDIT_PILLARS: AuditPillar[] = [
  {
    title: "Strategic alignment",
    description:
      "Ensure your compensation plan amplifies brand positioning, product strategy, and go-to-market goals.",
    icon: Lightbulb,
    bullets: [
      "Voice-of-field interviews and executive workshops",
      "Product, pricing, and CX mapping to reward structures",
      "Competitor and market benchmark analysis"
    ]
  },
  {
    title: "Financial intelligence",
    description:
      "Model profitability, cash flow, and incentive spend across scenarios before making changes.",
    icon: BarChart3,
    bullets: [
      "Multi-ledger financial simulations",
      "Breakage, overpayment, and liability diagnostics",
      "KPIs aligned to board, finance, and field objectives"
    ]
  },
  {
    title: "Regulatory resilience",
    description: "Reduce exposure with proactive compliance, audit evidence, and risk mitigation guidance.",
    icon: ShieldCheck,
    bullets: [
      "FTC, DSA, GDPR, and jurisdictional reviews",
      "Income disclosure, claims, and promotional guardrails",
      "Action plans for audits, attestations, and regulator requests"
    ]
  }
];

const DELIVERABLES: Deliverable[] = [
  {
    title: "Executive insights deck",
    description: "Board-ready narrative outlining strategic findings, opportunities, and quick wins.",
    icon: LineChart,
    highlights: [
      "Strategic positioning scorecard",
      "Risk and opportunity heatmap",
      "Prioritised roadmap with investment tiers"
    ]
  },
  {
    title: "Financial & scenario model",
    description: "Dynamic workbooks to stress-test plan adjustments across cohorts, rank, and market.",
    icon: FileSpreadsheet,
    highlights: [
      "Cohort and market profitability analysis",
      "Sensitivity modelling for promotions and incentives",
      "Cash-flow and breakage forecasts"
    ]
  },
  {
    title: "Compliance command brief",
    description: "Audit-ready evidence and policy recommendations to keep regulators satisfied.",
    icon: ClipboardCheck,
    highlights: [
      "Jurisdictional compliance checklist",
      "Marketing and claims governance playbook",
      "Incident response and escalation workflows"
    ]
  }
];

const ENGAGEMENT_STEPS: EngagementStep[] = [
  {
    title: "Discovery & baselining",
    detail: "Interviews, data ingestion, and plan documentation review to map current-state dynamics.",
    duration: "Weeks 1-2"
  },
  {
    title: "Analysis & modelling",
    detail: "Financial diagnostics, scenario modelling, and compliance assessments guided by Cloud MLM benchmarks.",
    duration: "Weeks 3-4"
  },
  {
    title: "Recommendations & roadmap",
    detail: "Executive workshops to align on changes, readiness, and implementation plan.",
    duration: "Weeks 5-6"
  }
];

const INSIGHT_HIGHLIGHTS: InsightHighlight[] = [
  {
    title: "Profitability guardrails",
    value: "8%",
    description: "Average margin improvement realised by customers after implementing audit recommendations."
  },
  {
    title: "Compliance preparedness",
    value: "100%",
    description: "Clients passing FTC and jurisdictional audits after adopting Cloud MLM Software governance playbooks."
  },
  {
    title: "Field satisfaction",
    value: "+24",
    description: "Increase in field promoter satisfaction (NPS) when plans balance fairness, transparency, and opportunity."
  }
];

const AUDIT_FAQS: AuditFaq[] = [
  {
    question: "What data is required to start the audit?",
    answer:
      "We typically request plan documentation, payout exports, rank progression reports, promotional calendars, and compliance records. Our team provides a secure template and can integrate with your data warehouse for efficiency."
  },
  {
    question: "How does Cloud MLM Software ensure recommendations are actionable?",
    answer:
      "We co-design recommendations with your stakeholders, map them to implementation effort, and deliver configuration-ready specifications for the Cloud MLM Software platform or your existing systems."
  },
  {
    question: "Can the audit support upcoming regulatory reviews?",
    answer:
      "Yes. Many customers engage us ahead of FTC or market-entry reviews. We package evidence, incident response guidance, and regulator briefing materials as part of the engagement."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Compensation Plan Audit Services | Cloud MLM Software";
  const description =
    "Partner with the leading MLM software provider to audit, optimise, and future-proof your compensation plan with strategic, financial, and compliance intelligence.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/services/comp-plan-audit", locale)
    }
  };
}

type CompPlanAuditPageProps = {
  params: { lang: SupportedLocale };
};

export default function CompPlanAuditPage({ params }: CompPlanAuditPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const resourcesHref = buildLocalizedPath("/resources", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="border-b border-border/60 bg-gradient-to-br from-slate-100 via-white to-primary/10 py-24 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900/40">
        <div className="container space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary">
            <ShieldCheck size={16} aria-hidden /> Compensation plan audit
          </span>
          <div className="max-w-4xl space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Elevate your MLM compensation strategy with the industry’s most trusted audit partners.
            </h1>
            <p className="text-lg text-muted-foreground">
              Cloud MLM Software delivers deep strategic, financial, and compliance intelligence so your compensation plan inspires the field, satisfies regulators, and protects profitability worldwide.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Engage our audit team
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={demoHref}>
                Explore compensation modelling
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="hover:bg-primary/10">
              <Link href={resourcesHref}>
                Read customer outcomes
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {AUDIT_METRICS.map((metric) => (
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Thought leadership pillars guiding every audit</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Cloud MLM Software combines decades of MLM expertise with modern analytics to guide the most respected brands in the industry.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {AUDIT_PILLARS.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article key={pillar.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  <Icon size={18} aria-hidden /> Pillar
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Deliverables your teams receive</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Every audit concludes with tailored artefacts that translate insights into board-ready decisions and configuration-ready actions.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {DELIVERABLES.map((deliverable) => {
            const Icon = deliverable.icon;

            return (
              <article key={deliverable.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  <Icon size={18} aria-hidden /> Deliverable
                </span>
                <h3 className="text-lg font-semibold text-foreground">{deliverable.title}</h3>
                <p className="text-sm text-muted-foreground">{deliverable.description}</p>
                <ul className="mt-2 space-y-3 text-sm text-muted-foreground">
                  {deliverable.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="mt-0.5 text-primary" aria-hidden />
                      <span>{highlight}</span>
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How the engagement unfolds</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            A focused six-week programme delivers rigorous analysis while keeping your stakeholders aligned and informed.
          </p>
        </div>
        <ol className="grid gap-6 md:grid-cols-3">
          {ENGAGEMENT_STEPS.map((step, index) => (
            <li key={step.title} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">Phase {index + 1}</span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.detail}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{step.duration}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Insight highlights from recent audits</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Cloud MLM Software’s compensation plan audits regularly deliver measurable performance, compliance, and satisfaction improvements.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {INSIGHT_HIGHLIGHTS.map((highlight) => (
            <article key={highlight.title} className="rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">{highlight.title}</span>
              <p className="mt-3 text-4xl font-semibold text-foreground">{highlight.value}</p>
              <p className="mt-3 text-sm text-muted-foreground">{highlight.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Answers for product, finance, and compliance leaders evaluating a Cloud MLM Software compensation plan audit.
          </p>
        </div>
        <div className="space-y-4">
          {AUDIT_FAQS.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="container flex flex-col items-center gap-6 rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-12 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to benchmark your plan against global leaders?</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Join the organisations that trust Cloud MLM Software to safeguard profitability, delight the field, and satisfy regulators worldwide.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Schedule a consultation
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={demoHref}>
                See audit insights in action
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
