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
  Activity,
  ArrowUpRight,
  BarChart3,
  Bot,
  Building2,
  ClipboardList,
  Database,
  GaugeCircle,
  Layers3,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users2,
  Workflow
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Capability = {
  title: string;
  description: string;
  icon: IconType;
  bullets: string[];
};

type WorkflowStep = {
  title: string;
  description: string;
  icon: IconType;
};

type AiUpgrade = {
  year: string;
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type UseCase = {
  title: string;
  outcome: string;
  metric: string;
  icon: IconType;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_STATS: Stat[] = [
  {
    label: "Unified profiles",
    value: "12M",
    detail: "Distributor and customer records managed through Cloud MLM CRM instances.",
    icon: Database
  },
  {
    label: "Automated activities",
    value: "65%",
    detail: "Average manual task reduction after deploying workflow orchestration.",
    icon: Activity
  },
  {
    label: "Regional rollouts",
    value: "45",
    detail: "Markets live with localised CRM layouts, compliance rules, and languages.",
    icon: Building2
  },
  {
    label: "AI copilots launched",
    value: "2025",
    detail: "Predictive guidance and conversational support embedded directly in the CRM.",
    icon: Sparkles
  }
];

const PILLARS: Pillar[] = [
  {
    title: "360° relationship intelligence",
    description:
      "View field, customer, and corporate interactions in one governed workspace that scales with your programme.",
    icon: Users2,
    bullets: [
      "Unified profile timeline covering orders, payouts, support, and training",
      "Segment audiences with behavioural, compensation, and compliance data",
      "Role-aware layouts ensure each team sees the context they need"
    ]
  },
  {
    title: "Automation-first execution",
    description:
      "Automate lead assignment, onboarding journeys, escalations, and renewals without sacrificing oversight.",
    icon: Workflow,
    bullets: [
      "Drag-and-drop workflow builder with human approval checkpoints",
      "Playbooks trigger communications and tasks based on lifecycle stages",
      "Prebuilt integrations sync CRM updates to ERP, LMS, and support tools"
    ]
  },
  {
    title: "Enterprise governance",
    description:
      "Granular permissions, consent, and audit trails keep every market compliant.",
    icon: ShieldCheck,
    bullets: [
      "Regional data residency and retention policies",
      "Consent vault covering marketing, transactions, and AI usage",
      "Immutable change history linking to SOPs and release documentation"
    ]
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Lead-to-field orchestration",
    description:
      "Import, qualify, and nurture prospects from campaigns to enrolment.",
    icon: ClipboardList,
    bullets: [
      "Smart routing assigns leads by rank, skill, or geography",
      "AI scoring predicts conversion probability and recommends follow-up",
      "Automated nurture journeys align messaging with compliance rules"
    ]
  },
  {
    title: "Distributor enablement",
    description:
      "Coach every distributor with CRM-driven insights, tasks, and recognition.",
    icon: GaugeCircle,
    bullets: [
      "Health dashboards surface rank progress, churn risk, and training completions",
      "Success plans assign tasks to mentors, corporate support, and field leaders",
      "Recognition feeds celebrate achievements with shareable badges"
    ]
  },
  {
    title: "Customer engagement",
    description:
      "Manage loyalty, autoship, and service conversations with consistent brand voice.",
    icon: MessageCircle,
    bullets: [
      "Case management integrates channels from chat to in-app messaging",
      "AI-generated responses accelerate resolution while documenting compliance",
      "Journey analytics connect campaigns to reorder rates and retention"
    ]
  }
];

const WORKFLOW: WorkflowStep[] = [
  {
    title: "Discover",
    description:
      "Assess business goals, data sources, and regulatory requirements with our CRM architects.",
    icon: Layers3
  },
  {
    title: "Design",
    description:
      "Configure objects, automations, and integrations using governance blueprints.",
    icon: Workflow
  },
  {
    title: "Launch",
    description:
      "Activate enablement, change management, and hypercare with success coaches.",
    icon: BarChart3
  },
  {
    title: "Optimise",
    description:
      "Iterate with AI insights, feedback loops, and quarterly business reviews.",
    icon: Bot
  }
];

const AI_UPGRADES: AiUpgrade[] = [
  {
    year: "2025",
    title: "Copilot-driven CRM",
    description:
      "AI copilots draft notes, detect anomalies, and propose next-best actions for sales, success, and compliance teams.",
    icon: Bot,
    bullets: [
      "Summaries populate record timelines after every interaction",
      "Copilots recommend retention campaigns based on churn signals",
      "Regulatory checks flag data privacy considerations before sending communications"
    ]
  },
  {
    year: "2024",
    title: "Telemetry foundation",
    description:
      "Feature flags, synthetic data, and monitoring created a safe runway for AI-native CRM capabilities.",
    icon: Activity,
    bullets: [
      "Journey experimentation compares onboarding, service, and sales flows",
      "Real-time dashboards show automation throughput and SLA compliance",
      "Data quality scanners ensure records stay accurate across integrations"
    ]
  }
];

const USE_CASES: UseCase[] = [
  {
    title: "Global distributor lifecycle",
    outcome: "Reduced onboarding time by 43% while improving qualification accuracy across 21 markets.",
    metric: "Beauty & wellness enterprise",
    icon: Layers3
  },
  {
    title: "AI-assisted retention",
    outcome: "Predictive health scores drove an 18% uplift in reactivation for a digital products brand.",
    metric: "Digital services leader",
    icon: Sparkles
  },
  {
    title: "Regulated market expansion",
    outcome: "Implemented privacy and tax controls to enter three new territories in under six months.",
    metric: "Financial wellness company",
    icon: ShieldCheck
  }
];

const FAQS: Faq[] = [
  {
    question: "Can Cloud MLM CRM integrate with our existing systems?",
    answer:
      "Yes. We provide REST APIs, webhooks, and prebuilt connectors for ERP, ecommerce, payment gateways, analytics, and communication platforms."
  },
  {
    question: "How do you handle data privacy and residency?",
    answer:
      "Regional hosting, retention policies, consent management, and audit logs ensure compliance with GDPR, LGPD, CCPA, and local MLM regulations."
  },
  {
    question: "What support is available post-launch?",
    answer:
      "Dedicated success managers deliver enablement, quarterly reviews, and AI adoption programmes alongside 24/7 global support."
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most enterprise CRM deployments go live in 10–14 weeks depending on integrations, data migration, and custom automations."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "CRM for MLM Software";
  const description =
    "Transform distributor and customer engagements with Cloud MLM Software CRM: automation, AI copilots, and enterprise governance.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/crm-mlm-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type CrmMlmSoftwarePageProps = {
  params: { lang: SupportedLocale };
};

export default function CrmMlmSoftwarePage({ params }: CrmMlmSoftwarePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const resourcesHref = buildLocalizedPath("/resources", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(56,189,248,0.18),transparent_42%),radial-gradient(circle_at_88%_-6%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="container space-y-12">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <GaugeCircle className="h-4 w-4" aria-hidden />
              CRM built for modern MLM
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Orchestrate every relationship with an AI-ready CRM purpose-built for MLM operations.
            </h1>
            <p className="text-lg text-muted-foreground">
              Cloud MLM Software CRM unifies marketing, sales, success, and compliance into one workspace. Automate the busywork, personalise every interaction, and scale globally with governance you can trust.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Request a CRM consultation
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                  Explore the CRM demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <dl className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HERO_STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <dt className="mt-4 text-sm font-medium text-muted-foreground">{stat.label}</dt>
                  <dd className="mt-1 text-2xl font-semibold text-foreground">{stat.value}</dd>
                  <p className="mt-2 text-xs text-muted-foreground">{stat.detail}</p>
                </div>
              );
            })}
          </dl>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Three pillars for CRM excellence in MLM</h2>
          <p className="text-sm text-muted-foreground">
            Deliver intelligent experiences across the entire lifecycle—from lead to loyal customer—while meeting regulatory expectations.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-foreground">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Capabilities your teams will experience in the demo</h2>
            <p className="text-sm text-muted-foreground">
              Configure once, deliver consistent experiences to field leaders, corporate teams, and customers.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {CAPABILITIES.map((capability) => {
              const Icon = capability.icon;
              return (
                <article key={capability.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground">{capability.description}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {capability.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A delivery workflow proven across enterprise programmes</h2>
          <p className="text-sm text-muted-foreground">
            Launch fast and evolve continuously with structured collaboration from our experts.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {WORKFLOW.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-background py-20">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">From telemetry to AI-native CRM service</h2>
            <p className="text-sm text-muted-foreground">
              Understand the journey from 2024 observability to 2025 copilot guidance.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {AI_UPGRADES.map((entry) => {
              const Icon = entry.icon;
              return (
                <article key={entry.year} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">{entry.year}</p>
                      <h3 className="text-lg font-semibold text-foreground">{entry.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{entry.description}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Where Cloud MLM CRM delivers measurable impact</h2>
          <p className="text-sm text-muted-foreground">
            Real brands using our CRM to create durable growth and compliance advantages.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {USE_CASES.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <article key={useCase.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground">{useCase.outcome}</p>
                <p className="text-xs uppercase tracking-wide text-primary">{useCase.metric}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
            <p className="text-sm text-muted-foreground">
              Answers for teams evaluating Cloud MLM Software CRM for their next programme.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {FAQS.map((faq) => (
              <article key={faq.question} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-10 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to transform your CRM?</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Partner with Cloud MLM Software to design, launch, and optimise a CRM experience that powers your field, customers, and leadership teams.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Book a CRM discovery workshop
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                View CRM capabilities
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href={resourcesHref}>
                Explore customer stories
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
