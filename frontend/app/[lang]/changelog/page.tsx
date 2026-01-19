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
  BadgeCheck,
  BarChart4,
  Boxes,
  CalendarCheck,
  CheckCircle2,
  CloudLightning,
  Database,
  GitBranch,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles,
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

type TimelineRelease = {
  version: string;
  codename: string;
  date: string;
  focus: string[];
  highlights: string[];
};

type TimelineEntry = {
  year: string;
  theme: string;
  summary: string;
  icon: IconType;
  releases: TimelineRelease[];
};

type Pillar = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Practice = {
  title: string;
  description: string;
};

const RELEASE_STATS: Stat[] = [
  {
    label: "Years of iteration",
    value: "2015–2025",
    detail: "A decade of continuous delivery across global MLM programmes.",
    icon: CalendarCheck
  },
  {
    label: "Major releases",
    value: "40+",
    detail: "Feature and infrastructure launches shipped with zero-downtime rollouts.",
    icon: GitBranch
  },
  {
    label: "Automation coverage",
    value: "85%",
    detail: "Finance, compliance, and CX workflows orchestrated end-to-end.",
    icon: Workflow
  },
  {
    label: "AI-native modules",
    value: "Since 2025",
    detail: "Copilot experiences and predictive insights infused across the platform.",
    icon: Sparkles
  }
];

const TIMELINE: TimelineEntry[] = [
  {
    year: "2025",
    theme: "AI-native operations",
    summary:
      "Cloud MLM Software’s eleventh year ushers in copilots, predictive automation, and multilingual assistants that keep leadership informed in real time.",
    icon: Sparkles,
    releases: [
      {
        version: "9.0",
        codename: "Helios",
        date: "2025-06-18",
        focus: ["AI copilots", "Automation", "Decisioning"],
        highlights: [
          "Copilots orchestrate compensation design, compliance reviews, and support responses with explainable guardrails.",
          "Adaptive forecast engine synthesises finance, field, and market signals for scenario planning.",
          "Unified knowledge graph powers voice, chat, and email assistants with traceable citations."
        ]
      },
      {
        version: "8.6",
        codename: "Aurora",
        date: "2025-02-05",
        focus: ["AI instrumentation", "Governance"],
        highlights: [
          "LLM-powered observability summarises anomalies across commissions, inventory, and helpdesk feeds.",
          "AI readiness checklist ensures human approval for every automated recommendation.",
          "Governance APIs push release narratives and prompt packs into enterprise knowledge bases."
        ]
      }
    ]
  },
  {
    year: "2024",
    theme: "Platform prepared for AI",
    summary:
      "The team invested in observability, experimentation, and data quality so 2025 copilots launch on hardened foundations.",
    icon: CloudLightning,
    releases: [
      {
        version: "8.4",
        codename: "Sentinel",
        date: "2024-11-12",
        focus: ["Observability", "Compliance"],
        highlights: [
          "Streaming telemetry traces every compensation calculation with retention policies by market.",
          "Runbooks and approvals linked to release notes for audit-ready governance.",
          "Scenario rehearsal mode validates rollouts across sandbox tenants with synthetic data."
        ]
      },
      {
        version: "8.2",
        codename: "Horizon",
        date: "2024-04-22",
        focus: ["Experimentation", "Data"],
        highlights: [
          "Feature flags let administrators pilot modules with regional cohorts before global rollout.",
          "Event lakehouse unifies e-commerce, CRM, and support telemetry for AI training pipelines.",
          "Self-service integrations expand to Snowflake, BigQuery, and Databricks destinations."
        ]
      }
    ]
  },
  {
    year: "2023",
    theme: "Global experience modernisation",
    summary:
      "Experience teams refreshed every surface to help brands scale worldwide with cohesive onboarding and analytics.",
    icon: Rocket,
    releases: [
      {
        version: "8.0",
        codename: "Voyager",
        date: "2023-09-15",
        focus: ["Experience", "Expansion"],
        highlights: [
          "Unified interface delivers consistent journeys across web, mobile, and POS touchpoints.",
          "Regional launch packs bundle localisation, tax presets, and distributor enablement assets.",
          "Executive dashboards visualise momentum across markets, ranks, and product lines."
        ]
      },
      {
        version: "7.8",
        codename: "Elevation",
        date: "2023-03-08",
        focus: ["Enablement", "Revenue"],
        highlights: [
          "Success playbooks automate onboarding tasks with completion tracking and nudges.",
          "Revenue intelligence surfaces cross-sell and retention opportunities by persona.",
          "Integrated e-learning paths sync with distributor actions inside the platform."
        ]
      }
    ]
  },
  {
    year: "2022",
    theme: "Integration and automation scale",
    summary:
      "Automation and integration teams removed manual effort across payouts, inventory, and regulatory tasks.",
    icon: Workflow,
    releases: [
      {
        version: "7.6",
        codename: "Nexus",
        date: "2022-10-20",
        focus: ["Integration", "Automation"],
        highlights: [
          "Low-code webhooks connect Cloud MLM Software to ERP, tax, and fulfilment services.",
          "Orchestration builder adds conditional branches, approvals, and escalation timers.",
          "Realtime compliance monitors flag KYC expirations and restricted countries automatically."
        ]
      },
      {
        version: "7.4",
        codename: "Lattice",
        date: "2022-04-11",
        focus: ["Payments", "Localisation"],
        highlights: [
          "Payment gateway marketplace grows to 120+ connectors with certification trackers.",
          "Dynamic taxation engine applies regional rules, VAT, and GST with audit history.",
          "Multilingual content editor streamlines translations with reviewer workflows."
        ]
      }
    ]
  },
  {
    year: "2021",
    theme: "Analytics and trust",
    summary:
      "Focused on insight depth, performance, and security to support enterprise SLAs.",
    icon: BarChart4,
    releases: [
      {
        version: "7.2",
        codename: "Flux",
        date: "2021-09-07",
        focus: ["Analytics", "Performance"],
        highlights: [
          "Composable analytics widgets let leaders design dashboards without code.",
          "In-memory caching reduces genealogy and payout query times by 63%.",
          "Anomaly detection notifies finance when compensation drifts outside guardrails."
        ]
      },
      {
        version: "7.0",
        codename: "Prism",
        date: "2021-02-14",
        focus: ["Security", "Experience"],
        highlights: [
          "Zero-trust access with device posture checks and adaptive multifactor authentication.",
          "Redesigned distributor portal enhances accessibility and offline readiness.",
          "Granular consent management aligns with GDPR, CCPA, and LGPD requirements."
        ]
      }
    ]
  },
  {
    year: "2020",
    theme: "Resilient platform foundation",
    summary:
      "Rearchitected hosting, support, and intelligence layers to support rapid growth and remote operations.",
    icon: ShieldCheck,
    releases: [
      {
        version: "6.2",
        codename: "Nova",
        date: "2020-07-05",
        focus: ["Experience", "Automation"],
        highlights: [
          "Modern interface with contextual quick actions for finance and field leaders.",
          "Notification centre spanning helpdesk, payouts, and engagement funnels.",
          "AI alerts for fast-moving distributor ranks and package trends.",
          "Mobile-ready dashboards with weekly, monthly, and yearly velocity snapshots."
        ]
      },
      {
        version: "6.0",
        codename: "Apex",
        date: "2020-01-01",
        focus: ["Platform", "Support"],
        highlights: [
          "High-availability cloud architecture with zero-downtime deployments.",
          "Redesigned helpdesk with SLA tracking, escalations, and knowledge base workflows.",
          "Graph-driven intelligence for enrolment velocity, payouts, and ticket health.",
          "Multi-currency management with automated FX updates and guardrails."
        ]
      }
    ]
  },
  {
    year: "2019",
    theme: "Global enablement",
    summary:
      "Expanded payment coverage, enablement content, and migration tooling for large enterprises.",
    icon: BadgeCheck,
    releases: [
      {
        version: "5.4",
        codename: "Momentum",
        date: "2019-10-18",
        focus: ["Global", "Enablement"],
        highlights: [
          "Advanced genealogy navigation with regional filters and predictive placement cues.",
          "In-app readiness hub linking onboarding videos, playbooks, and live training.",
          "Integrated payment gateway library with faster certification workflows.",
          "Localized content delivery with translation governance built in."
        ]
      },
      {
        version: "5.2",
        codename: "Synergy",
        date: "2019-03-06",
        focus: ["Migration", "Data"],
        highlights: [
          "Migration cockpit handles terabyte-scale data loads with automated validation.",
          "Data stewardship roles manage retention, redaction, and legal hold policies.",
          "Partner API marketplace opens for certified integrations and extensions."
        ]
      }
    ]
  },
  {
    year: "2018",
    theme: "Automation-first design",
    summary:
      "Automation engines and omnichannel communications matured to handle enterprise volumes.",
    icon: Layers,
    releases: [
      {
        version: "5.0",
        codename: "Elevate",
        date: "2018-05-15",
        focus: ["Automation", "Analytics"],
        highlights: [
          "Workflow builder covering payouts, compliance tasks, and onboarding journeys.",
          "Cohort dashboards comparing revenue, churn, and distributor engagement.",
          "Bulk email workspace with deliverability insights and consent governance.",
          "Expanded API coverage for ecommerce and CRM integrations."
        ]
      },
      {
        version: "4.5",
        codename: "Radiant",
        date: "2018-01-10",
        focus: ["Communications", "Support"],
        highlights: [
          "Conversation inbox unifies email, chat, and SMS threads with SLA tracking.",
          "Automated triggers send multilingual nurture journeys based on distributor milestones.",
          "Video asset library embeds training inside dashboards and mobile apps."
        ]
      }
    ]
  },
  {
    year: "2017",
    theme: "Revenue architecture",
    summary:
      "Compensation planning and inventory tooling advanced to support diversified models.",
    icon: Boxes,
    releases: [
      {
        version: "4.2",
        codename: "Ascend",
        date: "2017-09-22",
        focus: ["Compensation", "Inventory"],
        highlights: [
          "Scenario modelling compares hybrid, matrix, and binary plans side by side.",
          "Inventory forecasting ties promotions to projected field demand.",
          "Rank progression simulator validates proposed incentives before launch."
        ]
      },
      {
        version: "3.8",
        codename: "Unify",
        date: "2017-03-05",
        focus: ["Collaboration", "Reporting"],
        highlights: [
          "Collaborative workspace lets finance, legal, and marketing comment on plan drafts.",
          "Report composer exports board-ready decks with version-controlled narratives.",
          "Granular audit logs trace every configuration update and approval."
        ]
      }
    ]
  },
  {
    year: "2016",
    theme: "International expansion",
    summary:
      "Multilingual delivery, ecommerce hooks, and mobile-first design empowered cross-border growth.",
    icon: Database,
    releases: [
      {
        version: "3.2",
        codename: "Vantage",
        date: "2016-09-16",
        focus: ["Mobile", "Commerce"],
        highlights: [
          "Mobile dashboards surface KPIs, genealogy, and payouts on any device.",
          "Integrated shopping carts connect product bundles to compensation engines.",
          "Regional pricing tools align currency, tax, and shipping logic."
        ]
      },
      {
        version: "3.0",
        codename: "Catalyst",
        date: "2016-01-05",
        focus: ["Finance", "Governance"],
        highlights: [
          "Dynamic currency management with real-time exchange updates.",
          "Referral analytics and activity logs embedded into distributor profiles.",
          "Binary commission enhancements covering service charges and tax settings.",
          "Document vault and voucher automation to accelerate onboarding."
        ]
      }
    ]
  },
  {
    year: "2015",
    theme: "Foundational launch",
    summary:
      "Cloud MLM Software debuted with core genealogy, payout, and reporting capabilities tailored for high-growth teams.",
    icon: CalendarCheck,
    releases: [
      {
        version: "2.0",
        codename: "Foundation",
        date: "2015-12-30",
        focus: ["Support", "Compliance"],
        highlights: [
          "Helpdesk with prioritisation, tagging, and knowledge base management.",
          "Enhanced registration with national IDs, multiple payment methods, and validation layers.",
          "Credit fund management and secure e-wallet refinements.",
          "Auto-responder engine with multilingual templates and scheduling."
        ]
      },
      {
        version: "1.0",
        codename: "Launch",
        date: "2015-06-01",
        focus: ["Core", "Insights"],
        highlights: [
          "Responsive genealogy tree with hover insights and sponsor navigation.",
          "Launch-ready admin dashboards for recent enrolments and top-up monitoring.",
          "Theme enhancements with accessibility-focused adjustments and W3C validation.",
          "Income vs payout analytics to track programme health from day one."
        ]
      }
    ]
  }
];

const RELEASE_PILLARS: Pillar[] = [
  {
    title: "Operational resilience",
    description:
      "Every launch passes automated tests, peer reviews, and staged deployments before global rollout.",
    bullets: [
      "Blue/green releases with instant rollback paths and health scoring.",
      "Synthetic monitoring spans API, web, and mobile touchpoints 24/7.",
      "Biannual disaster recovery exercises validate failover within minutes."
    ],
    icon: ShieldCheck
  },
  {
    title: "AI-assisted outcomes",
    description:
      "Product, data, and design teams infuse intelligence into workflows so leaders act faster with confidence.",
    bullets: [
      "Predictive alerts highlight enrolment, churn, and payout anomalies before they escalate.",
      "Narrative summaries export-ready for boards, auditors, and frontline enablement.",
      "Copilot prompts leverage secure, structured knowledge with human-in-the-loop controls."
    ],
    icon: Sparkles
  },
  {
    title: "Enterprise governance",
    description:
      "Regulated brands receive clear audit trails, approval gates, and localisation packs for every region they enter.",
    bullets: [
      "Role-based approvals cover compensation, marketing, and financial artefacts.",
      "Immutable release notes link to SOPs, validation evidence, and change tickets.",
      "Localized policy packs manage taxation, privacy, and payments across jurisdictions."
    ],
    icon: BadgeCheck
  }
];

const PRACTICES: Practice[] = [
  {
    title: "Structured release theatre",
    description:
      "Monthly demos with success, compliance, and engineering leaders validate readiness before production sign-off."
  },
  {
    title: "Continuous feedback loop",
    description:
      "Product analytics, field advisory councils, and customer journey reviews shape every roadmap increment."
  },
  {
    title: "Global enablement",
    description:
      "Rollout playbooks bundle training decks, multilingual communications, and change management guidance for each market."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Cloud MLM Software Changelog";
  const description =
    "Explore Cloud MLM Software’s evolution from 2015 to 2025: yearly releases, automation gains, and the new AI-native era.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/changelog", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ChangelogPageProps = {
  params: { lang: SupportedLocale };
};

export default function ChangelogPage({ params }: ChangelogPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const newsletterHref = buildLocalizedPath("/resources/newsletter", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(56,189,248,0.18),transparent_42%),radial-gradient(circle_at_90%_-10%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="container space-y-12">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" aria-hidden />
              Release notes
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              A decade of product evolution leading to AI-native MLM operations.
            </h1>
            <p className="text-lg text-muted-foreground">
              From the first genealogy tools in 2015 to the 2025 copilot era, Cloud MLM Software delivers continuous improvements that keep direct selling brands compliant, automated, and ready for the next market shift.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={newsletterHref}>
                  Subscribe for release alerts
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={contactHref}>
                  Talk with a product specialist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <dl className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {RELEASE_STATS.map((stat) => {
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Evolution timeline 2015–2025</h2>
          <p className="text-sm text-muted-foreground">
            Trace how Cloud MLM Software grew from foundational plan management to AI-native copilots. Each year highlights the releases, focus areas, and capabilities delivered to customers worldwide.
          </p>
        </div>
        <div className="space-y-8">
          {TIMELINE.map((entry) => {
            const Icon = entry.icon;
            return (
              <article key={entry.year} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">{entry.year}</p>
                        <h3 className="text-2xl font-semibold text-foreground">{entry.theme}</h3>
                        <p className="text-sm text-muted-foreground">{entry.summary}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {entry.releases.map((release) => (
                      <div key={release.version + release.codename} className="rounded-2xl border border-border/60 bg-muted/30 p-5 shadow-sm">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <span className="text-xs font-medium uppercase tracking-wide text-primary/70">{release.date}</span>
                            <h4 className="mt-2 text-lg font-semibold text-foreground">
                              v{release.version} {release.codename}
                            </h4>
                          </div>
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <BadgeCheck className="h-4 w-4" aria-hidden />
                          </span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {release.focus.map((focus) => (
                            <span key={focus} className="inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary" aria-hidden />
                              {focus}
                            </span>
                          ))}
                        </div>
                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                          {release.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-2">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Release pillars</h2>
          <p className="text-sm text-muted-foreground">
            Cross-functional teams pair engineering precision with customer insight so every release delivers measurable business outcomes.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {RELEASE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-foreground">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-background py-20">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Practices that keep releases smooth</h2>
            <p className="text-sm text-muted-foreground">
              Every launch is coordinated with customer success, compliance, and field readiness so you see value faster.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {PRACTICES.map((practice) => (
              <article key={practice.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">{practice.title}</h3>
                <p className="text-sm text-muted-foreground">{practice.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-10 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Need the finer details?</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Our product team can walk you through the roadmap, deployment windows, and how we tailor each release to your governance needs.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Schedule a roadmap review
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={newsletterHref}>
                Join the release digest
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
