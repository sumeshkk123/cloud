import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Bolt,
  ClipboardList,
  Cog,
  LayoutGrid,
  LineChart,
  Plug,
  RefreshCcw,
  Search,
  ShieldCheck,
  Smartphone,
  UploadCloud,
  Users
} from "lucide-react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";

export const dynamic = "force-static";

type IconComponent = LucideIcon;

type AutomationMetric = {
  label: string;
  value: string;
};

type AutomationPillar = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconComponent;
};

type WorkflowStage = {
  title: string;
  detail: string;
  activities: string[];
  icon: IconComponent;
};

type PlatformCapability = {
  title: string;
  description: string;
  icon: IconComponent;
  outcomes: string[];
};

type PlaybookAsset = {
  title: string;
  description: string;
  href: string;
  badge: string;
};

type AutomationFaq = {
  question: string;
  answer: string;
};

const AUTOMATION_METRICS: AutomationMetric[] = [
  { label: "Manual workflows replaced", value: "62%" },
  { label: "Faster cycle approvals", value: "4x" },
  { label: "Automation incidents resolved", value: "<2h" }
];

const AUTOMATION_PILLARS: AutomationPillar[] = [
  {
    title: "Orchestrate end-to-end journeys",
    description:
      "Design cross-functional automations linking finance, compliance, operations, and field enablement without brittle scripts.",
    icon: LayoutGrid,
    bullets: [
      "Prebuilt blueprints for onboarding, payout, and promotions",
      "API-first connectors for ERP, CRM, tax, and marketing",
      "Governance guardrails with approval workflows"
    ]
  },
  {
    title: "Embed intelligent decisioning",
    description:
      "Leverage AI triggers, anomaly detection, and configurable business rules to keep your organisation compliant and agile.",
    icon: Bolt,
    bullets: [
      "AI-assisted segmentation and cohort nudges",
      "Risk scoring for payouts, returns, and commission adjustments",
      "Predictive alerts for churn, fraud, and inventory demand"
    ]
  },
  {
    title: "Scale with secure operations",
    description:
      "Standardise automation delivery with version control, monitoring, and resilience options demanded by enterprise PMOs.",
    icon: ShieldCheck,
    bullets: [
      "Role-based access, audit trails, and rollback support",
      "SLA-backed monitoring with automated remediation",
      "Documentation templates for compliance and SOC readiness"
    ]
  }
];

const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    title: "Discovery & prioritisation",
    detail:
      "Map processes, quantify manual effort, and align success metrics with executive sponsors before automation design starts.",
    icon: Search,
    activities: [
      "Stakeholder interviews and value stream mapping",
      "Automation opportunity scoring and ROI model",
      "Risk, compliance, and data quality assessment"
    ]
  },
  {
    title: "Design & orchestration",
    detail:
      "Translate requirements into orchestrated blueprints using Cloud MLM Software automation studios and best practices.",
    icon: Cog,
    activities: [
      "Workflow blueprinting with swimlane diagrams",
      "API and event schema documentation",
      "Governance checkpoints and change control plans"
    ]
  },
  {
    title: "Build & validate",
    detail:
      "Configure automation pipelines, iterate with stakeholders, and validate end-to-end journeys across environments.",
    icon: ClipboardList,
    activities: [
      "Module configuration and connector provisioning",
      "Automated and human-in-the-loop testing cycles",
      "Playbook documentation and enablement assets"
    ]
  },
  {
    title: "Launch & optimise",
    detail:
      "Roll out in phases, capture telemetry, and enhance based on continuous improvement loops run with your PMO.",
    icon: RefreshCcw,
    activities: [
      "Hypercare dashboards and adoption tracking",
      "A/B experiments and KPI optimisation",
      "Quarterly automation maturity reviews"
    ]
  }
];

const PLATFORM_CAPABILITIES: PlatformCapability[] = [
  {
    title: "Unified automation studio",
    description:
      "Drag-and-drop orchestration stitched to REST, GraphQL, and event connectors with governance baked in.",
    icon: UploadCloud,
    outcomes: [
      "Reusable templates for core MLM journeys",
      "Version-controlled releases with audit logs",
      "Native integration with compensation, CRM, and analytics"
    ]
  },
  {
    title: "Data activation & insights",
    description:
      "Synchronise data warehouses, streaming platforms, and BI tools to drive real-time automation triggers.",
    icon: LineChart,
    outcomes: [
      "Event buses for payouts, orders, and field actions",
      "Audience builder for lifecycle and incentive campaigns",
      "Embedded analytics dashboards for automation ROI"
    ]
  },
  {
    title: "Field enablement suite",
    description:
      "Deliver automation-powered nudges, tasks, and coaching to distributors on web and mobile endpoints.",
    icon: Smartphone,
    outcomes: [
      "Personalised journeys across onboarding and retention",
      "Gamified leaderboards with automation triggers",
      "Multi-language experiences governed centrally"
    ]
  },
  {
    title: "Integration fabric",
    description:
      "Secure connectivity to payments, logistics, marketing, and collaboration ecosystems ready for enterprise scale.",
    icon: Plug,
    outcomes: [
      "Prebuilt accelerators for tax, KYC, and ERP platforms",
      "Webhook and message queue support with retry policies",
      "Secrets management and environment isolation"
    ]
  },
  {
    title: "Change management toolkit",
    description:
      "Guided frameworks to align teams, communicate releases, and govern automation portfolios.",
    icon: Users,
    outcomes: [
      "Executive steering templates and dashboards",
      "Enablement modules for admins, finance, and compliance",
      "Value tracking scorecards and quarterly retrospectives"
    ]
  }
];

const PLAYBOOK_ASSETS: PlaybookAsset[] = [
  {
    title: "Automation pipeline roadmap",
    description: "Gantt templates, resource models, and KPI dashboards for 90-day automation rollouts.",
    href: "mailto:[email protected]?subject=Request%20Automation%20Pipeline%20Roadmap",
    badge: "TEMPLATE"
  },
  {
    title: "Control framework checklist",
    description: "Internal controls, audit evidence, and resiliency standards aligned to ISO 27001 and SOC baselines.",
    href: "mailto:[email protected]?subject=Request%20Control%20Framework%20Checklist",
    badge: "CHECKLIST"
  },
  {
    title: "Executive briefing deck",
    description: "Board-ready presentation covering ROI, risk mitigation, and automation programme governance.",
    href: "mailto:[email protected]?subject=Request%20Automation%20Executive%20Deck",
    badge: "BRIEFING"
  }
];

const AUTOMATION_FAQS: AutomationFaq[] = [
  {
    question: "How long does a typical automation programme take to deploy?",
    answer:
      "Most enterprise clients complete discovery to first production launch within 8–12 weeks. Timelines depend on connector readiness, data quality, and change management complexity."
  },
  {
    question: "Can we connect Cloud MLM automations to our existing iPaaS or workflow tools?",
    answer:
      "Yes. Our integration fabric works alongside platforms such as MuleSoft, Boomi, and Workato. We provide REST, GraphQL, and event hooks plus managed webhooks for bi-directional coordination."
  },
  {
    question: "What governance controls ensure automations remain compliant?",
    answer:
      "Role-based access, approval workflows, policy-based segregation, and automated evidence collection keep auditors informed while keeping releases on track."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Automation Playbook | Cloud MLM Software";
  const description =
    "Design, launch, and scale automation programmes across your direct selling enterprise with Cloud MLM Software best practices.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/resources/automation-playbook", locale)
    }
  };
}

type AutomationPlaybookPageProps = {
  params: { lang: SupportedLocale };
};

export default function AutomationPlaybookPage({ params }: AutomationPlaybookPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const downloadHref = "/resources/automation-playbook/";

  return (
    <div className="space-y-24 pb-24">
      <section className="border-b border-border/60 bg-gradient-to-br from-slate-100 via-white to-primary/10 py-24 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900/40">
        <div className="container space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary">
            <Bolt size={16} aria-hidden /> Automation playbook
          </span>
          <div className="max-w-4xl space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Architect enterprise automation that elevates every distributor, channel, and back-office team.
            </h1>
            <p className="text-lg text-muted-foreground">
              Use Cloud MLM Software&apos;s automation framework to replace manual processes, launch AI-enabled journeys, and sustain compliance across global direct selling programmes.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href={downloadHref} target="_blank" rel="noopener noreferrer">
                Download the playbook
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={contactHref}>
                Talk to an automation strategist
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="hover:bg-primary/10">
              <Link href={modulesHref}>
                Explore automation modules
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {AUTOMATION_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-border/60 bg-background/80 p-6 text-left shadow-sm"
              >
                <p className="text-3xl font-semibold text-foreground">{metric.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Pillars of the automation framework</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Align people, platforms, and governance with a framework that has delivered measurable outcomes for fast-scaling direct selling enterprises.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {AUTOMATION_PILLARS.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  <Icon size={20} aria-hidden /> Strategic pillar
                </span>
                <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <ul className="mt-2 space-y-3 text-sm text-muted-foreground">
                  {pillar.bullets.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <Bolt size={16} className="mt-0.5 text-primary" aria-hidden />
                      <span>{point}</span>
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Playbook delivery phases</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            A proven four-stage methodology that keeps legal, finance, technology, and field stakeholders aligned from ideation to expansion.
          </p>
        </div>
        <ol className="grid gap-6 md:grid-cols-2">
          {WORKFLOW_STAGES.map((stage, index) => {
            const Icon = stage.icon;

            return (
              <li
                key={stage.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  <Icon size={18} aria-hidden /> Phase {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-foreground">{stage.title}</h3>
                <p className="text-sm text-muted-foreground">{stage.detail}</p>
                <ul className="mt-1 space-y-3 text-sm text-muted-foreground">
                  {stage.activities.map((activity) => (
                    <li key={activity} className="flex items-start gap-2">
                      <Bolt size={16} className="mt-0.5 text-primary" aria-hidden />
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What the platform delivers</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Cloud MLM Software combines automation engines, data pipelines, and compliance tooling so your teams can focus on revenue and distributor success.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PLATFORM_CAPABILITIES.map((capability) => {
            const Icon = capability.icon;

            return (
              <article
                key={capability.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  <Icon size={18} aria-hidden /> Platform capability
                </span>
                <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
                <ul className="mt-2 space-y-3 text-sm text-muted-foreground">
                  {capability.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2">
                      <Bolt size={16} className="mt-0.5 text-primary" aria-hidden />
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Assets included with the playbook</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Request the complementary toolkits that accompany the automation playbook to accelerate stakeholder buy-in and delivery.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PLAYBOOK_ASSETS.map((asset) => (
            <article
              key={asset.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm"
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                {asset.badge}
              </span>
              <h3 className="text-lg font-semibold text-foreground">{asset.title}</h3>
              <p className="text-sm text-muted-foreground">{asset.description}</p>
              <Button asChild variant="ghost" className="mt-auto justify-start px-0 text-primary">
                <Link href={asset.href}>
                  Request asset
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Answers to the most common questions from PMOs, IT leaders, and legal stakeholders when evaluating automation programmes.
          </p>
        </div>
        <div className="space-y-4">
          {AUTOMATION_FAQS.map((faq) => (
            <article
              key={faq.question}
              className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="container flex flex-col items-center gap-6 rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-12 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to activate automation across your direct selling organisation?</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Partner with Cloud MLM Software strategists to co-create your automation roadmap, integrate legacy systems, and deliver measurable results in weeks—not quarters.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Schedule a consultation
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={demoHref}>
                See automation in action
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
