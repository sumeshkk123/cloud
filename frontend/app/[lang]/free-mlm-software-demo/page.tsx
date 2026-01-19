import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  CalendarClock,
  ArrowRight,
  GalleryHorizontal,
  GaugeCircle,
  Check,
  ClipboardList,
  FileText,
  LayoutDashboard,
  LineChart,
  NotebookPen,
  Mail,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  ServerCog,
  Phone,
  Users2,
  Workflow
} from "lucide-react";

export const dynamic = "force-static";

type DemoStep = {
  title: string;
  description: string;
  icon: "explore" | "configure" | "present" | "plan";
};

type Experience = {
  title: string;
  description: string;
  bullets: string[];
  icon: "dashboard" | "automation" | "analytics";
};

type PlanDemo = {
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
  admin: {
    title: string;
    description: string;
    bullets: string[];
  };
  user: {
    title: string;
    description: string;
    bullets: string[];
  };
};

type Faq = {
  question: string;
  answer: string;
};

type Deliverable = {
  title: string;
  description: string;
  bullets: string[];
  icon: "playbook" | "automation" | "insights";
};

type DemoTeamMember = {
  title: string;
  focus: string;
  bullets: string[];
  icon: "architect" | "engineer" | "success";
};

type AgendaItem = {
  slot: string;
  title: string;
  description: string;
  bullets: string[];
  icon: "kickoff" | "compensation" | "automation" | "integration" | "roadmap";
};

type InvitePersona = {
  title: string;
  summary: string;
  bullets: string[];
  icon: "leadership" | "finance" | "technology" | "field";
  template: {
    subject: string;
    body: string;
  };
};

const SANDBOX_DELIVERABLES: Deliverable[] = [
  {
    title: "Executive-ready sandbox playbooks",
    description:
      "We map your products, compensation levers, and compliance priorities into curated demo scripts for every stakeholder group.",
    bullets: [
      "Agenda templates for finance, field, and IT reviews",
      "Branded decks that capture KPIs and success metrics",
      "Talking points aligned to your expansion narrative"
    ],
    icon: "playbook"
  },
  {
    title: "Automation & data configuration",
    description:
      "Solution engineers wire integrations, load anonymised datasets, and configure workflows that reflect everyday operations.",
    bullets: [
      "Sample genealogy, order, and commission datasets",
      "Workflow automations tied to alerts and approvals",
      "Sandbox credentials for distributors and admins"
    ],
    icon: "automation"
  },
  {
    title: "Insight and readiness reporting",
    description:
      "Analytics specialists deliver dashboards and summaries that highlight opportunities, gaps, and go-live considerations.",
    bullets: [
      "Executive dashboards seeded with your KPIs",
      "AI-generated briefings for decision makers",
      "Readiness checklist covering integrations and change"
    ],
    icon: "insights"
  }
];

const DEMO_TEAM: DemoTeamMember[] = [
  {
    title: "Solution architect",
    focus: "Translates business rules into platform configuration and ensures compensation accuracy.",
    bullets: [
      "Captures plan nuances and scenario variations",
      "Highlights compliance guardrails and audit trails",
      "Advises on phased rollout and localisation"
    ],
    icon: "architect"
  },
  {
    title: "Integration engineer",
    focus: "Connects your CRM, commerce, finance, and support stack so the sandbox mirrors production workflows.",
    bullets: [
      "Prepares API and SFTP integration stubs",
      "Configures automation triggers and data syncs",
      "Documents cutover and security considerations"
    ],
    icon: "engineer"
  },
  {
    title: "Customer success lead",
    focus: "Coordinates stakeholders, collects feedback, and packages recommendations for executive approval.",
    bullets: [
      "Runs weekly readouts with your core team",
      "Tracks adoption signals and training needs",
      "Delivers post-demo roadmap and investment summary"
    ],
    icon: "success"
  }
];

const DEMO_AGENDA: AgendaItem[] = [
  {
    slot: "0 – 10 minutes",
    title: "Kickoff and success criteria",
    description: "Align on growth targets, launch timelines, and the outcomes your leadership expects from this evaluation.",
    bullets: [
      "Capture your launch objectives and market priorities",
      "Confirm stakeholders joining future workshops",
      "Review the scorecard we’ll use to document fit"
    ],
    icon: "kickoff"
  },
  {
    slot: "10 – 25 minutes",
    title: "Compensation engine in action",
    description: "See how we configure binary, unilevel, and hybrid plans while maintaining audit-ready payouts.",
    bullets: [
      "Adjust breakages, bonuses, and promotions on the fly",
      "Simulate weekly and monthly commissions in seconds",
      "Highlight compliance and finance guardrails"
    ],
    icon: "compensation"
  },
  {
    slot: "25 – 40 minutes",
    title: "Field, customer, and automation journeys",
    description: "Walk through distributor onboarding, customer orders, and no-code automations that keep teams moving.",
    bullets: [
      "Demo the mobile workspace and replicated shops",
      "Showcase retention campaigns and autoship flows",
      "Surface AI copilots that guide next best actions"
    ],
    icon: "automation"
  },
  {
    slot: "40 – 55 minutes",
    title: "Data, integrations, and security",
    description: "Review how the platform connects to your CRM, finance, and support stack with enterprise-ready controls.",
    bullets: [
      "Outline API, SFTP, and webhook integration paths",
      "Share data migration playbooks and anonymised sandboxes",
      "Cover security posture, roles, and compliance artefacts"
    ],
    icon: "integration"
  },
  {
    slot: "55 – 60 minutes",
    title: "Roadmap and next steps",
    description: "Document agreed actions, decision milestones, and the resources you receive after the session.",
    bullets: [
      "Confirm sandbox deliverables and owner assignments",
      "Align on procurement or diligence requirements",
      "Schedule follow-up workshops and executive briefings"
    ],
    icon: "roadmap"
  }
];

const DEMO_INVITES: InvitePersona[] = [
  {
    title: "Leadership & strategy",
    summary: "Ensure executives see how Cloud MLM Software supports growth, international expansion, and compliance.",
    bullets: [
      "Highlight dashboards that track revenue, rank, and retention",
      "Showcase roadmap controls for phased launches",
      "Frame the demo around strategic KPIs and investor goals"
    ],
    icon: "leadership",
    template: {
      subject: "Join our Cloud MLM Software strategy demo",
      body: [
        "Hi team,",
        "",
        "We’ve scheduled a 60-minute strategy demo with Cloud MLM Software on [Date/Time]. The session focuses on:",
        "- Growth and international expansion roadmaps",
        "- Executive dashboards for revenue, ranks, and retention",
        "- Compliance and governance guardrails",
        "",
        "Please join from [Meeting link] so we can align on outcomes and investment checkpoints.",
        "",
        "Thanks,",
        "[Your name]"
      ].join("\n")
    }
  },
  {
    title: "Finance & compliance",
    summary: "Invite finance leads and legal partners so they validate auditing, taxation, and regulatory workflows.",
    bullets: [
      "Review compensation simulations and variance reports",
      "Discuss payout controls, tax handling, and localisation",
      "Share diligence documents and security attestations"
    ],
    icon: "finance",
    template: {
      subject: "Finance focus for the Cloud MLM Software demo",
      body: [
        "Hello,",
        "",
        "Cloud MLM Software will walk us through commissions, payments, and compliance tooling on [Date/Time]. Points they will cover:",
        "- Audit-ready statements and reconciliation",
        "- Regional tax, VAT/GST, and withholding options",
        "- Security posture plus SOC, ISO, and data privacy artefacts",
        "",
        "Join via [Meeting link] and share any scenarios you want them to model in the sandbox.",
        "",
        "Best,",
        "[Your name]"
      ].join("\n")
    }
  },
  {
    title: "Technology & integrations",
    summary: "Bring architects and IT stakeholders to validate integration paths, data governance, and scalability.",
    bullets: [
      "Map APIs, SSO, and event-driven automations",
      "Discuss hosting, reliability, and monitoring",
      "Plan migration and cutover milestones"
    ],
    icon: "technology",
    template: {
      subject: "What to expect in the integration deep dive",
      body: [
        "Hi engineering team,",
        "",
        "Our Cloud MLM Software demo is booked for [Date/Time]. They will explore:",
        "- REST, GraphQL, and iPaaS integration options",
        "- Data residency, encryption, and access controls",
        "- Sandbox migration steps with anonymised datasets",
        "",
        "Please join using [Meeting link] so we capture technical questions and follow-up actions.",
        "",
        "Regards,",
        "[Your name]"
      ].join("\n")
    }
  },
  {
    title: "Field enablement",
    summary: "Loop in sales, training, and customer success leaders to align on onboarding and engagement journeys.",
    bullets: [
      "Preview distributor and customer workspaces",
      "Coordinate launch communications and training assets",
      "Capture support processes and recognition programmes"
    ],
    icon: "field",
    template: {
      subject: "Invite to the Cloud MLM Software field experience walkthrough",
      body: [
        "Hi team,",
        "",
        "We’re meeting Cloud MLM Software on [Date/Time] to preview field and customer workflows. Expect to see:",
        "- Mobile onboarding journeys and guided selling",
        "- Autoship, promotions, and community recognition",
        "- Support intake and knowledge sharing",
        "",
        "Join via [Meeting link] so we gather feedback for adoption planning.",
        "",
        "Thanks,",
        "[Your name]"
      ].join("\n")
    }
  }
];

const DEMO_STEPS: DemoStep[] = [
  {
    title: "Explore the sandbox",
    description: "Log in to a curated environment with pre-built compensation, commerce, and reporting modules.",
    icon: "explore"
  },
  {
    title: "Configure scenarios",
    description: "Adjust plans, campaigns, and automations with guidance from our solution architects.",
    icon: "configure"
  },
  {
    title: "Share the story",
    description: "Generate executive-ready dashboards and workflows to present to stakeholders.",
    icon: "present"
  },
  {
    title: "Plan your rollout",
    description: "Receive a tailored roadmap covering integrations, change management, and success milestones.",
    icon: "plan"
  }
];

const LIVE_EXPERIENCES: Experience[] = [
  {
    title: "Unified workspaces",
    description: "See how distributors, customers, and corporate teams interact with Cloud MLM Software.",
    bullets: [
      "Distributor cockpit with onboarding, storefronts, and recognition",
      "Customer portal with autoship and support journeys",
      "Executive dashboards summarising global momentum"
    ],
    icon: "dashboard"
  },
  {
    title: "Automation fabric",
    description: "Experience no-code workflows that orchestrate payouts, communications, and compliance tasks.",
    bullets: [
      "Visual automation builder tied to approval guardrails",
      "Trigger campaigns from CRM, ecommerce, and support systems",
      "Copilot recommendations embedded into each workflow"
    ],
    icon: "automation"
  },
  {
    title: "Analytics & copilots",
    description: "Follow intelligence from data visualisations to AI-generated briefings.",
    bullets: [
      "Scenario comparisons for compensation, retention, and promotions",
      "Copilot Q&A covering genealogy, revenue, and churn",
      "Downloadable decks summarising insights for leadership"
    ],
    icon: "analytics"
  }
];

const PLAN_DEMOS: PlanDemo[] = [
  {
    title: "Binary Plan MLM Software Demo",
    summary:
      "Administrators configure binary structures, carryover, and spillover while distributors manage power legs, cycles, and bonuses.",
    image: "/wp-content/uploads/2024/08/Binary_tree.webp",
    imageAlt: "Binary plan tree visual",
    width: 509,
    height: 348,
    admin: {
      title: "Admin viewpoint",
      description: "Model binary trees with flexible rules and audit-friendly payouts.",
      bullets: [
        "Carry-forward, flush, and cycle configuration",
        "Real-time commission simulations before payroll",
        "Activity monitoring across every leg"
      ]
    },
    user: {
      title: "Distributor viewpoint",
      description: "Distributors track leg health, bonuses, and team placements in one dashboard.",
      bullets: [
        "Genealogy with rank and volume indicators",
        "Earnings breakdown for cycles and matching bonuses",
        "Self-service placement and profile management"
      ]
    }
  },
  {
    title: "Matrix MLM Software Demo",
    summary:
      "Experience forced-matrix layouts with automated re-entries, spillover, and board upgrades.",
    image: "/wp-content/uploads/2024/08/Matrix_tree.webp",
    imageAlt: "Matrix plan layout",
    width: 727,
    height: 338,
    admin: {
      title: "Admin viewpoint",
      description: "Define matrix sizes, re-entry logic, and incentive structures.",
      bullets: [
        "Configure width/depth per market",
        "Automate board cycling and rewards",
        "Analyse utilisation across positions"
      ]
    },
    user: {
      title: "Distributor viewpoint",
      description: "Members view open slots, bonuses, and board progress at a glance.",
      bullets: [
        "Track positions and spillover",
        "Access commission history and pool earnings",
        "Manage referrals and customer orders"
      ]
    }
  },
  {
    title: "Unilevel MLM Software Demo",
    summary:
      "Unlimited frontline enrolment with compression, overrides, and leadership recognition built-in.",
    image: "/wp-content/uploads/2024/08/Unilevel_tree.webp",
    imageAlt: "Unilevel tree",
    width: 498,
    height: 234,
    admin: {
      title: "Admin viewpoint",
      description: "Control compression, roll-up, and rank-based overrides across generations.",
      bullets: [
        "Configure generation depth per market",
        "Automate compression and roll-up events",
        "Report on leg performance and retention"
      ]
    },
    user: {
      title: "Distributor viewpoint",
      description: "Frontline sellers monitor team health, earnings, and onboarding tasks.",
      bullets: [
        "Frontline dashboards with key KPIs",
        "Real-time commission and bonus statements",
        "Prospect and customer follow-up tools"
      ]
    }
  },
  {
    title: "Generation Plan Demo",
    summary:
      "Profit-sharing pools and depth-oriented leadership programs made simple.",
    image: "/wp-content/uploads/2024/08/Gen_tree.webp",
    imageAlt: "Generation plan diagram",
    width: 658,
    height: 528,
    admin: {
      title: "Admin viewpoint",
      description: "Set break levels, leadership pools, and depth metrics.",
      bullets: [
        "Rank-based generational configuration",
        "Automated funding of leadership pools",
        "Depth analytics for finance and compliance"
      ]
    },
    user: {
      title: "Distributor viewpoint",
      description: "Leaders access generational dashboards, coaching tasks, and forecasts.",
      bullets: [
        "Mentorship tasks and recognition",
        "Pool qualification progress",
        "Predictive insights for bonuses"
      ]
    }
  },
  {
    title: "Gift / Donation Plan Demo",
    summary:
      "Run compliant gifting or help plans with tracked contributions and automated notifications.",
    image: "/wp-content/uploads/2024/09/Gift_tree-1.webp",
    imageAlt: "Gift plan graphic",
    width: 415,
    height: 310,
    admin: {
      title: "Admin viewpoint",
      description: "Manage gifting rounds, documentation, and participant eligibility.",
      bullets: [
        "Define gifting queues and rules",
        "Collect receipts and confirmations",
        "Monitor participation with compliance alerts"
      ]
    },
    user: {
      title: "Distributor viewpoint",
      description: "Participants send, receive, and verify gifts with transparency.",
      bullets: [
        "Guided gifting process",
        "Status tracking with reminders",
        "Messaging to coordinate help"
      ]
    }
  },
  {
    title: "Board Plan Demo",
    summary:
      "Automate revolving boards, reinvestment, and recognition for momentum-driven teams.",
    image: "/wp-content/uploads/2024/08/Board_tree.webp",
    imageAlt: "Board plan graphic",
    width: 923,
    height: 348,
    admin: {
      title: "Admin viewpoint",
      description: "Control board tiers, splitting, and auto-upgrades.",
      bullets: [
        "Configure multiple boards and entry criteria",
        "Automate splits, upgrades, and reinvestment",
        "Analyse cycle times and performance"
      ]
    },
    user: {
      title: "Distributor viewpoint",
      description: "Sellers track board position, rewards, and team recognition.",
      bullets: [
        "Board dashboards with progress markers",
        "Notifications for rewards and promotions",
        "Community recognition feeds"
      ]
    }
  },
  {
    title: "Party Plan Demo",
    summary:
      "Plan and execute social selling events with RSVPs, host tools, and order capture.",
    image: "/wp-content/uploads/2024/09/party_tree.webp",
    imageAlt: "Party plan illustration",
    width: 415,
    height: 310,
    admin: {
      title: "Admin viewpoint",
      description: "Launch and track party programs, hosts, and sales.",
      bullets: [
        "Event scheduling and host assignments",
        "Sales attribution and commission reconciliation",
        "Post-event analytics and follow-up"
      ]
    },
    user: {
      title: "Distributor viewpoint",
      description: "Hosts manage invitations, demos, and orders from one hub.",
      bullets: [
        "Guest lists with reminders",
        "Mobile order capture",
        "Party incentive dashboards"
      ]
    }
  },
  {
    title: "Repurchase Plan Demo",
    summary:
      "Highlight autoship and repeat purchase programs tied to commissions and rewards.",
    image: "/wp-content/uploads/2024/09/Repurchase_tree.webp",
    imageAlt: "Repurchase tree",
    width: 415,
    height: 310,
    admin: {
      title: "Admin viewpoint",
      description: "Set repurchase incentives, track volume, and automate payouts.",
      bullets: [
        "Reward configuration by SKU and market",
        "Retention analytics for finance and success",
        "Automated commission scheduling"
      ]
    },
    user: {
      title: "Distributor viewpoint",
      description: "Distributors manage autoship, track rewards, and follow up with customers.",
      bullets: [
        "Autoship management tools",
        "Earnings breakdown by customer",
        "Reminders for loyalty campaigns"
      ]
    }
  },
  {
    title: "Spillover Binary Demo",
    summary:
      "Understand spillover automation, balancing, and matching bonuses in binary structures.",
    image: "/wp-content/uploads/2024/09/spillover_tree.webp",
    imageAlt: "Spillover tree",
    width: 415,
    height: 310,
    admin: {
      title: "Admin viewpoint",
      description: "Fine-tune placement queues, volume balancing, and matching bonuses.",
      bullets: [
        "Automated placement and queue controls",
        "Alerts for leg imbalance",
        "Flexible matching bonus settings"
      ]
    },
    user: {
      title: "Distributor viewpoint",
      description: "Distributors visualise spillover support and plan enrolment strategy.",
      bullets: [
        "Projected spillover earnings",
        "Leg health indicators",
        "Placement guidance for team support"
      ]
    }
  },
  {
    title: "Stair Step Plan Demo",
    summary:
      "Rank-based overrides, leadership development, and breakaway logic made simple.",
    image: "/wp-content/uploads/2024/09/stair_step_tree.webp",
    imageAlt: "Stair step plan graphic",
    width: 415,
    height: 310,
    admin: {
      title: "Admin viewpoint",
      description: "Configure rank requirements, breakaway, and leadership pools.",
      bullets: [
        "Breakaway and maintenance criteria",
        "Override scheduling",
        "Leadership dashboards"
      ]
    },
    user: {
      title: "Distributor viewpoint",
      description: "Field leaders track rank progress, leg maintenance, and override income.",
      bullets: [
        "Rank tracker with KPIs",
        "Leg health alerts",
        "Override statements"
      ]
    }
  }
];

const FAQS: Faq[] = [
  {
    question: "How long does the free demo last?",
    answer: "Every organisation receives a 30-day sandbox with optional extensions when working through migration or integration planning."
  },
  {
    question: "Is the demo customised for our plan?",
    answer: "Yes. We tailor compensation, field experiences, and automations to match your goals so stakeholders see relevant workflows."
  },
  {
    question: "Do we get support during the demo?",
    answer: "A solution consultant guides configuration sessions, and our success desk answers questions throughout the trial."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Free MLM Software Demo";
  const description =
    "Access a guided Cloud MLM Software sandbox with tailored workflows, analytics, and AI copilots to evaluate fit for your direct selling organisation.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/free-mlm-software-demo", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type FreeDemoPageProps = {
  params: { lang: SupportedLocale };
};

export default function FreeDemoPage({ params }: FreeDemoPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const plansHref = buildLocalizedPath("/features", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-emerald-50 via-white to-sky-50 py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_16%,rgba(56,189,248,0.18),transparent_42%),radial-gradient(circle_at_88%_-8%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr),380px]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <PlayCircle className="h-4 w-4" aria-hidden />
              Free guided demo
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Experience Cloud MLM Software with your data, your plans, and your teams.
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore compensation, automation, analytics, and AI copilots in a secure sandbox configured specifically for your direct selling brand.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Reserve your demo window
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={plansHref}>
                  Review platform features
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
            <h2 className="text-base font-semibold text-foreground">What’s included?</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Sparkles className="h-4 w-4 text-primary" aria-hidden />
                Tailored sandbox with your plan templates and data samples
              </li>
              <li className="flex items-start gap-2">
                <LayoutDashboard className="h-4 w-4 text-primary" aria-hidden />
                Guided walkthroughs for compensation, mobile, and analytics modules
              </li>
              <li className="flex items-start gap-2">
                <CalendarClock className="h-4 w-4 text-primary" aria-hidden />
                30 days of access with optional extensions during project planning
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" aria-hidden />
                Security and compliance briefing for legal and IT stakeholders
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Drill into live plan demos
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Preview administrator and distributor workflows for the most-requested compensation plans. Launch the sandbox or book a guided session to see them populated with your products and payout rules.
          </p>
        </div>
        <div className="space-y-10">
          {PLAN_DEMOS.map((plan, index) => (
            <article
              key={plan.title}
              className="grid gap-8 rounded-3xl border border-border/60 bg-background p-6 shadow-sm md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:p-10"
            >
              <div className="space-y-5">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground">{plan.title}</h3>
                  <p className="text-sm text-muted-foreground">{plan.summary}</p>
                </div>
                <div className="space-y-4">
                  {[plan.admin, plan.user].map((profile) => (
                    <details
                      key={`${plan.title}-${profile.title}`}
                      className="group rounded-2xl border border-border/60 bg-muted/30 p-5 text-left transition"
                      open={index === 0 && profile.title === plan.admin.title}
                    >
                      <summary className="cursor-pointer list-none text-base font-semibold text-foreground">
                        <span className="flex items-center justify-between gap-4">
                          {profile.title}
                          <span className="text-sm text-primary transition group-open:rotate-45">+</span>
                        </span>
                      </summary>
                      <div className="mt-3 space-y-3 text-sm text-muted-foreground">
                        <p>{profile.description}</p>
                        <ul className="space-y-2">
                          {profile.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2">
                              <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-3 pt-2">
                          <Button asChild size="sm">
                            <Link href="https://demo.cloudmlmsoftware.com" target="_blank" rel="noopener noreferrer">
                              Launch sandbox
                              <ArrowUpRight className="h-4 w-4" aria-hidden />
                            </Link>
                          </Button>
                          <Button asChild variant="ghost" size="sm">
                            <Link href="#demo-form">Book guided demo</Link>
                          </Button>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/20 p-3">
                  <Image
                    src={plan.image}
                    alt={plan.imageAlt}
                    width={plan.width}
                    height={plan.height}
                    className="h-auto max-h-72 w-full object-contain"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">From request to roadmap in four steps</h2>
          <p className="text-sm text-muted-foreground">
            Combine live workshops with sandbox exploration so stakeholders align quickly and confidently.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {DEMO_STEPS.map((step) => (
            <article key={step.title} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                {step.icon === "explore" ? <GalleryHorizontal className="h-5 w-5" aria-hidden /> : null}
                {step.icon === "configure" ? <Workflow className="h-5 w-5" aria-hidden /> : null}
                {step.icon === "present" ? <GaugeCircle className="h-5 w-5" aria-hidden /> : null}
                {step.icon === "plan" ? <ClipboardList className="h-5 w-5" aria-hidden /> : null}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="agenda" className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Demo agenda</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What we cover in sixty minutes</h2>
          <p className="text-sm text-muted-foreground">
            Align stakeholders on outcomes, experience live workflows, and capture next steps across compensation, commerce, and automation in a single guided session.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {DEMO_AGENDA.map((item) => {
            const Icon =
              item.icon === "kickoff"
                ? NotebookPen
                : item.icon === "compensation"
                  ? LayoutDashboard
                  : item.icon === "automation"
                    ? Workflow
                    : item.icon === "integration"
                      ? ServerCog
                      : ClipboardList;

            return (
              <article key={item.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                    {item.slot}
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      <span>{bullet}</span>
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What you’ll explore live</h2>
            <p className="text-sm text-muted-foreground">
              See everyday workflows through the lens of distributors, customers, and corporate teams.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {LIVE_EXPERIENCES.map((experience) => (
              <article key={experience.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {experience.icon === "dashboard" ? <LayoutDashboard className="h-5 w-5" aria-hidden /> : null}
                  {experience.icon === "automation" ? <Workflow className="h-5 w-5" aria-hidden /> : null}
                  {experience.icon === "analytics" ? <LineChart className="h-5 w-5" aria-hidden /> : null}
                </span>
                <h3 className="text-xl font-semibold text-foreground">{experience.title}</h3>
                <p className="text-sm text-muted-foreground">{experience.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Demo deliverables</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Everything you receive during the 30-day sandbox</h2>
          <p className="text-sm text-muted-foreground">
            Beyond platform access, we provide tailored assets, automations, and insights so stakeholders can review the solution with confidence.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {SANDBOX_DELIVERABLES.map((deliverable) => {
            const Icon =
              deliverable.icon === "playbook"
                ? NotebookPen
                : deliverable.icon === "automation"
                  ? Workflow
                  : LineChart;

            return (
              <article key={deliverable.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-foreground">{deliverable.title}</h3>
                <p className="text-sm text-muted-foreground">{deliverable.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {deliverable.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      <span>{bullet}</span>
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
          <div className="max-w-3xl space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Your project squad</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Specialists guiding every workshop and review</h2>
            <p className="text-sm text-muted-foreground">
              Meet the team responsible for tailoring the sandbox, running working sessions, and packaging recommendations for your leadership.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {DEMO_TEAM.map((member) => {
              const Icon =
                member.icon === "architect"
                  ? Sparkles
                  : member.icon === "engineer"
                    ? ServerCog
                    : Users2;

              return (
                <article key={member.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{member.title}</h3>
                    <p className="text-sm text-muted-foreground">{member.focus}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {member.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="invite"
        className="container space-y-10 py-20"
      >
        <div className="max-w-3xl space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Share the invites</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Bring every stakeholder to the demo</h2>
          <p className="text-sm text-muted-foreground">
            Use these talking points and ready-to-send notes so leadership, finance, technology, and field teams arrive aligned on outcomes and questions.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {DEMO_INVITES.map((persona) => {
            const Icon =
              persona.icon === "leadership"
                ? Sparkles
                : persona.icon === "finance"
                  ? LineChart
                  : persona.icon === "technology"
                    ? ServerCog
                    : Users2;

            const mailHref = `mailto:?subject=${encodeURIComponent(persona.template.subject)}&body=${encodeURIComponent(persona.template.body)}`;

            return (
              <article key={persona.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-1 text-left">
                    <h3 className="text-xl font-semibold text-foreground">{persona.title}</h3>
                    <p className="text-sm text-muted-foreground">{persona.summary}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {persona.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-2xl border border-dashed border-border/60 bg-muted/20 p-4 text-left">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">Email template</p>
                  <p className="mt-2 text-sm font-semibold text-foreground">Subject: {persona.template.subject}</p>
                  <p className="mt-2 whitespace-pre-line text-sm text-muted-foreground">{persona.template.body}</p>
                </div>
                <Button asChild variant="outline" size="sm" className="mt-auto">
                  <Link href={mailHref}>Open draft email</Link>
                </Button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">
            Practical details teams often ask before activating their free demo experience.
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
      </section>

      <section
        id="demo-form"
        className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40"
      >
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <CalendarClock className="h-4 w-4" aria-hidden />
              Guided sandbox programme
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Share your brief and book the walkthrough
            </h2>
            <p className="text-sm text-muted-foreground">
              Tell us about your compensation plans, tech stack, and launch timeline so we configure the environment, import sample data, and assemble the right specialists ahead of your session.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                <span>Select binary, unilevel, matrix, party, or hybrid scenarios to mirror stakeholder priorities.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                <span>Provide anonymised enrolment, order, or commission extracts to validate analytics in minutes.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                <span>Invite finance, compliance, field enablement, and IT leads so each team explores relevant workflows.</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              We confirm within one business day and share the prep checklist, sandbox credentials, and meeting links.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-foreground">Send your sandbox brief</h3>
                  <p className="text-sm text-muted-foreground">
                    Attach programme details, existing system map, and any procurement requirements so we tailor the agenda.
                  </p>
                </div>
              </div>
              <Button asChild size="sm" className="mt-4 w-full">
                <Link href="mailto:[email protected]?subject=Schedule%20a%20Free%20MLM%20Software%20Demo">
                  Email [email protected]
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-foreground">Speak with a specialist</h3>
                  <p className="text-sm text-muted-foreground">
                    Call to align on goals, stakeholders, and timelines if you prefer a live intake before we share access.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="tel:+918590137119">
                    Call +91 85901 37119
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="sm" className="w-full">
                  <Link href="tel:+918129184448">
                    24/7 line +91 81291 84448
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <FileText className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-foreground">Request NDAs or compliance packs</h3>
                  <p className="text-sm text-muted-foreground">
                    Need security documentation, DPAs, or procurement summaries before scheduling? Let us know and we’ll circulate the pack.
                  </p>
                </div>
              </div>
              <Button asChild variant="outline" size="sm" className="mt-4 w-full">
                <Link href={contactHref}>
                  Ask for diligence documents
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-10 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Start your Cloud MLM Software demo today</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            We’ll help you import data, configure workflows, and brief stakeholders—so you can make decisions with confidence.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Reserve a slot
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
