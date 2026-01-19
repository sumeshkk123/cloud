import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  CheckCircle2,
  ClipboardList,
  Database,
  MonitorCheck,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Users,
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

type MigrationMetric = {
  label: string;
  value: string;
};

type MigrationPillar = {
  title: string;
  description: string;
  icon: IconComponent;
  bullets: string[];
};

type MigrationPhase = {
  title: string;
  detail: string;
  icon: IconComponent;
  activities: string[];
};

type MigrationWorkstream = {
  title: string;
  description: string;
  icon: IconComponent;
  tasks: string[];
};

type MigrationAsset = {
  title: string;
  description: string;
  badge: string;
  href: string;
};

type MigrationFaq = {
  question: string;
  answer: string;
};

const MIGRATION_METRICS: MigrationMetric[] = [
  { label: "Legacy-to-cloud transitions delivered", value: "140+" },
  { label: "Typical migration timeline", value: "8-12 weeks" },
  { label: "Data accuracy on day-one cutover", value: "99.9%" }
];

const MIGRATION_PILLARS: MigrationPillar[] = [
  {
    title: "Programme governance",
    description:
      "Align stakeholders, risks, and milestones with a governed migration office that keeps every workstream accountable.",
    icon: ShieldCheck,
    bullets: [
      "Steering cadence with executive and field leaders",
      "Risk registry, mitigation plans, and decision log",
      "Compliance checkpoints for legal, tax, and privacy"
    ]
  },
  {
    title: "Data integrity engineering",
    description:
      "Transform, cleanse, and reconcile legacy records with automated validation that prevents downstream surprises.",
    icon: Database,
    bullets: [
      "Source-to-target mapping with lineage tracking",
      "Automated dedupe, enrichment, and exception queues",
      "Parallel reconciliation and audit evidence exports"
    ]
  },
  {
    title: "Cutover excellence",
    description:
      "Execute go-live with confidence using rehearsed runbooks, contingency plans, and post-launch hypercare.",
    icon: Rocket,
    bullets: [
      "Mock cutovers with timed execution windows",
      "Command center staffing and escalation matrix",
      "Hypercare dashboards for incidents and adoption"
    ]
  }
];

const MIGRATION_PHASES: MigrationPhase[] = [
  {
    title: "Assess & plan",
    detail:
      "Capture business objectives, readiness, and technical debt to shape the migration blueprint.",
    icon: ClipboardList,
    activities: [
      "Stakeholder and systems discovery",
      "Gap analysis with target-state architecture",
      "Migration roadmap with success metrics"
    ]
  },
  {
    title: "Transform & stage data",
    detail:
      "Normalize, cleanse, and stage legacy datasets with automated quality checks and approvals.",
    icon: Database,
    activities: [
      "Source data profiling and remediation",
      "Schema mapping with field-level rules",
      "Iterative loads into staging environments"
    ]
  },
  {
    title: "Integrate & test",
    detail:
      "Connect downstream systems, execute scenario testing, and validate readiness with business owners.",
    icon: MonitorCheck,
    activities: [
      "API and batch integration verification",
      "User acceptance and regression testing",
      "Cutover rehearsal with rollback drills"
    ]
  },
  {
    title: "Cutover & hypercare",
    detail:
      "Execute the final migration, monitor adoption, and transition ownership to steady-state teams.",
    icon: Rocket,
    activities: [
      "Command center operations and war room updates",
      "Field communications and enablement",
      "Stabilization sprints with KPI tracking"
    ]
  }
];

const MIGRATION_WORKSTREAMS: MigrationWorkstream[] = [
  {
    title: "Data & lineage",
    description: "Ensures every record travels with provenance, validation, and reconciliation artifacts.",
    icon: Database,
    tasks: [
      "Source inventory with ownership and quality ratings",
      "Transformation catalog with reusable scripts",
      "Reconciliation scorecards shared with finance"
    ]
  },
  {
    title: "Integrations & infrastructure",
    description: "Prepares APIs, batch jobs, and hosting environments for a seamless switch-over.",
    icon: Server,
    tasks: [
      "Connectivity tests for payment, tax, and CRM systems",
      "Performance baselines and capacity planning",
      "Failover and rollback strategy documentation"
    ]
  },
  {
    title: "People & enablement",
    description: "Equips corporate teams and field leaders with the training, communications, and support plans they need.",
    icon: Users,
    tasks: [
      "Change impact assessment and persona mapping",
      "Enablement assets, FAQs, and coaching guides",
      "Hypercare staffing and escalation routes"
    ]
  },
  {
    title: "Operations & controls",
    description: "Maintains compliance, tracking, and risk management from day one of the migration.",
    icon: Workflow,
    tasks: [
      "Control matrix aligned to audit requirements",
      "Issue, risk, and decision registers",
      "Status reporting to PMO and executives"
    ]
  }
];

const MIGRATION_ASSETS: MigrationAsset[] = [
  {
    title: "Migration readiness scorecard",
    description: "Assess data, integrations, people, and compliance readiness across 40+ checkpoints.",
    badge: "SCORECARD",
    href: "mailto:[email protected]?subject=Request%20Migration%20Readiness%20Scorecard"
  },
  {
    title: "Data mapping workbook",
    description: "Excel templates for source-to-target mapping, transformation logic, and reconciliation tracking.",
    badge: "WORKBOOK",
    href: "mailto:[email protected]?subject=Request%20Data%20Mapping%20Workbook"
  },
  {
    title: "Cutover command plan",
    description: "Hour-by-hour runbook covering tasks, owners, checkpoints, and communications for go-live weekend.",
    badge: "PLAYBOOK",
    href: "mailto:[email protected]?subject=Request%20Cutover%20Command%20Plan"
  }
];

const MIGRATION_FAQS: MigrationFaq[] = [
  {
    question: "Can we migrate while maintaining ongoing operations?",
    answer:
      "Yes. We stage migrations with parallel running, delta loads, and rollback options so your business continues without disruption."
  },
  {
    question: "How do you protect sensitive distributor data during migration?",
    answer:
      "Encrypted transfer, role-based access, and segregated environments ensure PII and financial records stay compliant with GDPR, PDPA, and other regulations."
  },
  {
    question: "What support is available after go-live?",
    answer:
      "Hypercare squads monitor KPIs, resolve incidents, and hand over knowledge to your internal teams with documented runbooks."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Migration Checklist | Cloud MLM Software";
  const description =
    "Plan and execute your move to Cloud MLM Software with a governed, data-secure migration checklist built for enterprise teams.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/resources/migration-checklist", locale)
    }
  };
}

type MigrationChecklistPageProps = {
  params: { lang: SupportedLocale };
};

export default function MigrationChecklistPage({ params }: MigrationChecklistPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const servicesHref = buildLocalizedPath("/services", locale);
  const downloadHref = "/mlm-migration-checklist/";

  return (
    <div className="space-y-24 pb-24">
      <section className="border-b border-border/60 bg-gradient-to-br from-slate-100 via-white to-primary/10 py-24 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900/40">
        <div className="container space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary">
            <Sparkles size={16} aria-hidden /> Migration checklist
          </span>
          <div className="max-w-4xl space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Move from legacy platforms to Cloud MLM Software with confidence and zero downtime promises.
            </h1>
            <p className="text-lg text-muted-foreground">
              Follow our enterprise migration checklist to orchestrate data, integrations, and people so your distributors experience a seamless transition.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href={downloadHref} target="_blank" rel="noopener noreferrer">
                Download the checklist
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={contactHref}>
                Talk to migration strategists
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="hover:bg-primary/10">
              <Link href={servicesHref}>
                Explore migration services
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {MIGRATION_METRICS.map((metric) => (
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Migration pillars</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Anchor your programme around the pillars that protect data integrity, stakeholder trust, and launch velocity.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {MIGRATION_PILLARS.map((pillar) => {
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Phased approach</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            The checklist maps to a four-stage approach proven across enterprise migrations around the world.
          </p>
        </div>
        <ol className="grid gap-6 md:grid-cols-2">
          {MIGRATION_PHASES.map((phase, index) => {
            const Icon = phase.icon;

            return (
              <li key={phase.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  <Icon size={18} aria-hidden /> Phase {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-foreground">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.detail}</p>
                <ul className="mt-1 space-y-3 text-sm text-muted-foreground">
                  {phase.activities.map((activity) => (
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Checklist coverage</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Every checklist item rolls up into these managed workstreams so owners, risks, and deliverables stay clear.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {MIGRATION_WORKSTREAMS.map((workstream) => {
            const Icon = workstream.icon;

            return (
              <article key={workstream.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  <Icon size={18} aria-hidden /> Workstream
                </span>
                <h3 className="text-lg font-semibold text-foreground">{workstream.title}</h3>
                <p className="text-sm text-muted-foreground">{workstream.description}</p>
                <ul className="mt-2 space-y-3 text-sm text-muted-foreground">
                  {workstream.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="mt-0.5 text-primary" aria-hidden />
                      <span>{task}</span>
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Downloadable assets</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Request these supporting deliverables to accelerate executive reviews, data workstreams, and cutover coordination.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {MIGRATION_ASSETS.map((asset) => (
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
            Answers for PMOs, IT leaders, and compliance officers preparing their migration programme.
          </p>
        </div>
        <div className="space-y-4">
          {MIGRATION_FAQS.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="container flex flex-col items-center gap-6 rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-12 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to mobilise your migration?</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Team up with Cloud MLM Software migration leads to move legacy platforms, integrations, and data into a modern stack backed by enterprise SLAs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>Schedule a migration consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={demoHref}>See the migration toolkit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
