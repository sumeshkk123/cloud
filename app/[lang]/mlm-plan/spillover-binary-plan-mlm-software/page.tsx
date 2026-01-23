import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import Script from "next/script";

import SpilloverBinarySimulator from "@/components/frontend/plan/spillover-binary-simulator";
import CompetitorComparisonTable, {
  type CompetitorComparisonRow
} from "@/components/frontend/plan/competitor-comparison-table";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import type { SupportedLocale } from "@/config/site";
import { siteBaseConfig } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  CalendarRange,
  Coins,
  ClipboardCheck,
  Compass,
  Cpu,
  FileText,
  GaugeCircle,
  HelpCircle,
  LineChart,
  MessageSquareQuote,
  Network,
  PlayCircle,
  RefreshCcw,
  Rocket,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
};

type Pillar = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Example = {
  title: string;
  baseline: string;
  insight: string;
  icon: IconType;
};

type Pattern = {
  title: string;
  description: string;
  icon: IconType;
};

type Mechanic = {
  title: string;
  summary: string;
  outcomes: string[];
  icon: IconType;
};

type Journey = {
  stage: string;
  description: string;
  focus: string;
  icon: IconType;
};

type RoadmapStep = {
  phase: string;
  duration: string;
  activities: string[];
  icon: IconType;
};

type Faq = {
  question: string;
  answer: string;
};

type FeatureHighlight = {
  title: string;
  description: string;
  icon: IconType;
  bullets: string[];
};

type WizardStep = {
  step: string;
  description: string;
  checklist: string[];
};

type ImplementationCase = {
  title: string;
  metricLabel: string;
  metricValue: string;
  result: string;
  detail: string;
};

type TrustIndicator = {
  label: string;
  description: string;
  icon: IconType;
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

type ToolkitItem = {
  title: string;
  description: string;
  href: string;
  icon: IconType;
  external?: boolean;
};

type SocialProofItem = {
  platform: string;
  detail: string;
};

type ResourceItem = {
  title: string;
  description: string;
  href: string;
  cta: string;
  icon: IconType;
};

type WhatsNewItem = {
  date: string;
  title: string;
  detail: string;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Weak-leg stability",
    value: "92%",
    detail: "Average weekly weak-leg volume held within target tolerances after enabling predictive spillover routing."
  },
  {
    label: "Spillover audit clearance",
    value: "98.5%",
    detail: "Placement reviews that pass compliance checks thanks to immutable routing histories and approval trails."
  },
  {
    label: "Binary payout velocity",
    value: "36 hours",
    detail: "Time for finance to close binary commissions once leg balances are validated in Cloud MLM Software."
  },
  {
    label: "Carry-over reduction",
    value: "-27%",
    detail: "Decrease in dormant carry-over balances after automated coaching nudges and flush risk alerts."
  }
];

const SUMMARY_POINTS: string[] = [
  "Optimises binary payouts by intelligently balancing weak and strong legs in real time.",
  "Eliminates manual spillover disputes with auditable approval trails and policy-aware automation.",
  "Gives executives, compliance, and field leaders a single source of truth for revenue, risk, and readiness."
];

const LAST_UPDATED = "March 2025";

const PILLARS: Pillar[] = [
  {
    title: "Predictive leg balancing",
    description:
      "Surface weak-leg exposure before it becomes a flush event and route spillover members automatically to recover balance.",
    bullets: [
      "Blend real-time sales volume with sponsor activity scores to pinpoint deficit legs.",
      "Simulate the impact of spillover placements before leaders approve them.",
      "Alert finance when carry-over reserves exceed policy thresholds."
    ],
    icon: GaugeCircle
  },
  {
    title: "Transparent placement governance",
    description:
      "Give compliance and legal teams auditable histories for every spillover request, approval, and reroute.",
    bullets: [
      "Capture upline approvals alongside time-stamped placement notes.",
      "Lock bonus eligibility until tax, KYC, and cooling-off rules clear.",
      "Synchronise policy updates instantly so the field always operates on the latest rule set."
    ],
    icon: ShieldCheck
  },
  {
    title: "Field momentum that scales",
    description:
      "Coach leaders with mobile alerts, playbooks, and leaderboard insights so binary momentum never stalls.",
    bullets: [
      "Trigger guided tasks when a leg is one pair away from qualification.",
      "Reward spillover contributors with transparent credit and recognition workflows.",
      "Deliver personalised scripts and assets that match each promoter’s performance tier."
    ],
    icon: Rocket
  }
];

const EXAMPLES: Example[] = [
  {
    title: "Global wellness launch",
    baseline: "900 distributors across US, Canada, and Singapore with mixed pair requirements and tax rules.",
    insight: "Cloud MLM Software keeps weak-leg variance under 8%, queues compliance checks per country, and auto-releases binary payouts in 36 hours.",
    icon: BarChart3
  },
  {
    title: "Hyper-growth influencer team",
    baseline: "Influencer-led cohort adds 120 members weekly, spilling into legacy downlines with limited coaching bandwidth.",
    insight: "Predictive alerts reroute spillover to underperforming legs, while enablement hubs feed scripts to sponsors before the influx hits.",
    icon: Network
  },
  {
    title: "Compliance remediation sprint",
    baseline: "Historic carry-over balances created flush risk after a European audit flagged missing documentation.",
    insight: "Audit trails reconcile placements, holds back payouts lacking invoices, and visual dashboards prove remediation to regulators.",
    icon: Target
  }
];

const BLUEPRINT: Pattern[] = [
  {
    title: "Configuration studio",
    description:
      "Design binary thresholds, spillover policies, and leadership approvals with drag-and-drop logic that prevents conflicts.",
    icon: Settings2
  },
  {
    title: "Analytics spine",
    description:
      "Dashboards expose pair velocity, carry-over stores, compliance holds, and spillover contributions in real time.",
    icon: BarChart3
  },
  {
    title: "Enablement workspace",
    description:
      "Empower leaders with AI-curated playbooks, rank progression paths, and campaign kits tied to binary milestones.",
    icon: Users
  }
];

const CTA_POINTS: string[] = [
  "Automate spillover placements with policy-aware approvals and immutable audit logs.",
  "Balance binary legs using predictive alerts, coaching nudges, and transparent dashboards.",
  "Accelerate payouts by linking compliance checks, tax receipts, and finance workflows in one hub.",
  "Scale internationally with localisation for payout rules, taxation, and product catalogues."
];

const CTA_ACTIONS = [
  {
    label: "Get started today",
    href: "/contact",
    variant: "default" as const
  },
  {
    label: "Book a spillover strategy session",
    href: "/contact?subject=Spillover%20Binary%20Strategy",
    variant: "secondary" as const
  },
  {
    label: "Download ROI calculator",
    href: "/mlm-calculator",
    variant: "outline" as const
  },
  {
    label: "Chat with product expert",
    href: "/support/live-chat",
    variant: "ghost" as const
  }
];

const FEATURE_HIGHLIGHTS: FeatureHighlight[] = [
  {
    title: "Automation that protects margins",
    description:
      "Let Cloud MLM Software handle routing, coaching, and alerts so leaders focus on strategy, not spreadsheets.",
    icon: Cpu,
    bullets: [
      "AI-driven spillover placements with guardrails for rank, geography, and compliance limits.",
      "Auto-generated coaching nudges when weak-leg momentum drops below target thresholds.",
      "Dynamic workflows that sync enrolment, inventory, and payout events without manual intervention."
    ]
  },
  {
    title: "Compliance by design",
    description:
      "Auditors and regulators get the documentation they need, while the field experiences a frictionless journey.",
    icon: FileText,
    bullets: [
      "Immutable placement logs mapping who approved spillover and why.",
      "Configurable hold rules tied to tax IDs, invoices, cooling-off periods, and AML triggers.",
      "Instant export of audit packs for banking partners, regulators, and executive reviews."
    ]
  },
  {
    title: "Analytics built for decisions",
    description:
      "Dashboards translate raw data into actions field leaders and executives can trust.",
    icon: LineChart,
    bullets: [
      "Predict leg variance, flush risk, and payout exposure in real time across markets.",
      "Compare campaign-driven surges with historical baselines to adjust promotions.",
      "Feed finance with rolling forecasts that reconcile revenue, cash, and commissions."
    ]
  },
  {
    title: "Payout optimisation",
    description:
      "Improve promoter loyalty and profitability with precise, policy-compliant commission management.",
    icon: Coins,
    bullets: [
      "Accelerate binary closeouts while preserving safeguards for documentation and fraud checks.",
      "Model incentive changes before launch to protect margins and leadership tiers.",
      "Benchmark payout accuracy and velocity with automated reconciliation dashboards."
    ]
  }
];

const CONFIG_WIZARD_STEPS: WizardStep[] = [
  {
    step: "Define your binary blueprint",
    description:
      "Capture pair rules, qualifying ranks, and placement hierarchies inside a guided questionnaire.",
    checklist: [
      "Select global defaults and market-specific overrides for pair volume.",
      "Upload or map legacy data to seed carry-over balances and leadership tiers.",
      "Assign approval owners for spillover routing and exception handling."
    ]
  },
  {
    step: "Configure automation & controls",
    description:
      "Decide which events trigger alerts, holds, and coaching nudges—Cloud MLM Software builds the workflows.",
    checklist: [
      "Enable AI placement recommendations and set confidence thresholds.",
      "Choose documentation requirements per payout type (spiff, bonus, leadership pool).",
      "Define escalation paths if compliance flags or inventory mismatches appear."
    ]
  },
  {
    step: "Design the field experience",
    description:
      "Preview what leaders and promoters will see on web and mobile before go-live.",
    checklist: [
      "Customise dashboards, KPIs, and language variants for each persona.",
      "Publish onboarding playbooks, quick demos, and template communications.",
      "Set up automated recognition feeds and leaderboard rules."
    ]
  },
  {
    step: "Launch with confidence",
    description:
      "Run final simulations, approvals, and readiness checks before unlocking production spillover.",
    checklist: [
      "Execute dry-run payouts in sandbox and compare to benchmark spreadsheets.",
      "Share release notes, video explainers, and support cadences with the field.",
      "Activate continuous monitoring for compliance, carry-over, and data-sync anomalies."
    ]
  }
];

const IMPLEMENTATION_CASES: ImplementationCase[] = [
  {
    title: "North America wellness re-launch",
    metricLabel: "Pairs closed in first quarter",
    metricValue: "+42%",
    result: "Weak-leg variance dropped below 10% across 5,200 promoters",
    detail:
      "Automated spillover routing and compliance holds unlocked faster payouts and an 18% increase in promoter retention."
  },
  {
    title: "LATAM consumer goods scale-up",
    metricLabel: "Compliance ticket reduction",
    metricValue: "-63%",
    result: "Audit-ready logs satisfied new distributor regulations in Mexico and Colombia",
    detail:
      "Cloud MLM Software centralised documentation, enabling finance to release commissions 48 hours sooner while meeting SECOBI guidelines."
  },
  {
    title: "Hybrid influencer and retail collective",
    metricLabel: "Time-to-balance weak legs",
    metricValue: "3 days",
    result: "Coaching nudges and leader recognition templates kept overflow aligned",
    detail:
      "Predictive analytics highlighted dormant cohorts, prompting targeted campaigns that reclaimed $640K in projected flush losses."
  }
];

const COMPARISON_ROWS: CompetitorComparisonRow[] = [
  {
    capability: "Predictive spillover routing",
    spillover: "AI-driven placements with approval trails, confidence scoring, and sandbox simulations.",
    binary: "Rule-based or manual placement; limited automation and no predictive scoring.",
    matrix: "Legacy vendors rely on sponsor decisions; advanced routing sold as custom work.",
    tags: ["automation", "innovation"]
  },
  {
    capability: "Compliance automation",
    spillover: "Built-in policy engine with jurisdiction templates, KYC/AML holds, and instant audit packs.",
    binary: "Document upload plus manual review—compliance burden sits with back office teams.",
    matrix: "Requires third-party plugins for KYC and tax reconciliation; no end-to-end evidence trail.",
    tags: ["compliance", "automation"]
  },
  {
    capability: "Predictive analytics",
    spillover: "Real-time dashboards for flush risk, carry-over velocity, and payout forecasting across markets.",
    binary: "Scheduled exports and static BI dashboards refreshed weekly.",
    matrix: "Spreadsheet-driven analytics; no native forecasting.",
    tags: ["analytics", "innovation"]
  },
  {
    capability: "Field enablement",
    spillover: "Mobile nudges, guided playbooks, recognition automation, and embedded micro-learning.",
    binary: "Email alerts and basic leaderboards; coaching handled outside the platform.",
    matrix: "Limited to web dashboards with no in-app enablement tools.",
    tags: ["enablement", "automation"]
  },
  {
    capability: "Integration depth",
    spillover: "Native connectors for ERP, CRM, payments, tax engines, plus GraphQL & REST APIs.",
    binary: "Core integrations offered as custom projects; API coverage varies by vendor.",
    matrix: "Focus on payment gateways; enterprise integrations require bespoke development.",
    tags: ["innovation", "automation"]
  },
  {
    capability: "Global scalability",
    spillover: "Localised tax, currency, language, and regulatory packs maintained quarterly.",
    binary: "Partial currency support and limited regulatory updates.",
    matrix: "International rollouts depend on partner customisations and manual updates.",
    tags: ["compliance", "innovation"]
  }
];

const TRUST_INDICATORS: TrustIndicator[] = [
  {
    label: "SOC 2 Type II",
    description: "Independent auditors validate Cloud MLM Software’s security and availability controls annually.",
    icon: ShieldCheck
  },
  {
    label: "Direct Selling Association partner",
    description: "Certified partner delivering compliant technology solutions to global DSA members.",
    icon: BadgeCheck
  },
  {
    label: "Global payments alliance",
    description: "Integrated with PCI-DSS Level 1 gateways across 40+ countries to support compliant settlements.",
    icon: Network
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Cloud MLM Software turned spillover chaos into a predictable growth engine. Our leaders finally trust the data they see every morning.",
    name: "Priya Raman",
    role: "Chief Growth Officer, ThriveWell Nutraceuticals"
  },
  {
    quote:
      "Regulators asked for a full placement audit. We produced it in minutes, complete with approvals and payout dependencies.",
    name: "Luis Ortega",
    role: "VP Finance, VidaPlus LATAM"
  },
  {
    quote:
      "The simulator and coaching nudges keep our ambassadors focussed. Carry-over waste is down 30% and morale is up.",
    name: "Kara Mitchell",
    role: "Field Enablement Director, Sphere Collective"
  }
];

const TOOLKIT_ITEMS: ToolkitItem[] = [
  {
    title: "Implementation blueprint",
    description: "Step-by-step rollout guide with stakeholder RACI, success metrics, and 90-day adoption plan.",
    href: "/documents/spillover-binary-blueprint.pdf",
    icon: FileText,
    external: true
  },
  {
    title: "Policy & compliance template pack",
    description: "Download editable SOPs covering spillover approvals, audit responses, and dispute resolution workflows.",
    href: "/documents/spillover-policy-templates.zip",
    icon: ShieldCheck,
    external: true
  },
  {
    title: "API and integration walkthrough",
    description: "Explore REST & GraphQL endpoints, webhook events, and reference Postman collection.",
    href: "https://developers.cloudmlmsoftware.com/spillover-binary",
    icon: Network,
    external: true
  },
  {
    title: "Onboarding checklist",
    description: "Interactive checklist embedded in Cloud MLM Software to keep go-live tasks on track.",
    href: "#onboarding-checklist",
    icon: ClipboardCheck
  }
];

const SOCIAL_PROOF_ITEMS: SocialProofItem[] = [
  {
    platform: "G2 Crowd",
    detail: "4.8/5 rating across automation, analytics, and customer support categories (2025 aggregate)."
  },
  {
    platform: "Capterra",
    detail: "Verified reviews highlight compliance readiness and onboarding speed for global launches."
  },
  {
    platform: "LinkedIn",
    detail: "#CloudMLMSpillover hashtag features 1.2K+ field leader success stories and enablement clips."
  }
];

const RESOURCE_ITEMS: ResourceItem[] = [
  {
    title: "Quarterly spillover innovations webinar",
    description: "Live demos of the newest automation, analytics, and compliance enhancements with Q&A.",
    href: "/webinars/spillover-binary",
    cta: "Reserve seat",
    icon: PlayCircle
  },
  {
    title: "Spillover binary best practices hub",
    description: "Articles, templates, and AI playbooks updated monthly by Cloud MLM Software consultants.",
    href: "/resources/spillover-best-practices",
    cta: "Explore hub",
    icon: LineChart
  },
  {
    title: "Customer community forum",
    description: "Join product leaders and peers in moderated discussions, office hours, and roadmap previews.",
    href: "https://community.cloudmlmsoftware.com",
    cta: "Join the conversation",
    icon: Users
  }
];

const WHATS_NEW_ITEMS: WhatsNewItem[] = [
  {
    date: "2025-03-01",
    title: "Predictive spillover scoring released",
    detail: "Machine learning model now ranks eligible placements with confidence scores and recommended coaching actions."
  },
  {
    date: "2025-02-12",
    title: "LATAM compliance pack update",
    detail: "Added electronic invoice validation and SECOBI-ready audit exports for Mexico and Colombia."
  },
  {
    date: "2025-01-28",
    title: "New ROI calculator",
    detail: "Downloadable spreadsheet quantifies carry-over reduction, payout acceleration, and retention lift."
  }
];

const MECHANICS: Mechanic[] = [
  {
    title: "Spillover orchestration",
    summary: "Coordinate placements, approvals, and leadership credit without spreadsheets or manual routing.",
    outcomes: [
      "Model weak-leg impact before spillover deploys and reserve members accordingly.",
      "Auto-notify uplines when placements breach regional or rank constraints.",
      "Track spillover contributions for recognition, bonus pools, and dispute resolution."
    ],
    icon: Network
  },
  {
    title: "Pairing intelligence",
    summary: "Predict binary closures and cash exposure with volume forecasting and flush-risk modelling.",
    outcomes: [
      "Expose weekly pair velocity and expected payouts across leadership tiers.",
      "Simulate campaign-driven surges to avoid unexpected carry-over spikes.",
      "Feed finance and supply chain with the same forecast so inventory and cash align."
    ],
    icon: TrendingUp
  },
  {
    title: "Compliance guardrails",
    summary: "Embed audit evidence, tax documentation, and cooling-off enforcement into every payout event.",
    outcomes: [
      "Lock bonuses until banking, invoicing, and policy fields are validated.",
      "Capture exception handling with approval hierarchies and escalation paths.",
      "Generate export-ready audit packs for regulators or banking partners on demand."
    ],
    icon: ClipboardCheck
  }
];

const JOURNEYS: Journey[] = [
  {
    stage: "Spillover readiness",
    description: "Uplines profile new members, confirm documentation, and align expectations for binary placements.",
    focus: "Guided flows highlight sponsorship rules, compliance acknowledgements, and training checkpoints.",
    icon: Compass
  },
  {
    stage: "Cycle execution",
    description: "Throughout the payout cycle, leaders receive alerts on weak-leg gaps, flush risk, and coaching priorities.",
    focus: "AI nudges adapt prompts to consumer, promoter, and leader personas to keep pace with growth.",
    icon: RefreshCcw
  },
  {
    stage: "Leadership optimisation",
    description: "Consistent binary performance unlocks rank progression, incentive budgets, and strategic enablement touchpoints.",
    focus: "Dashboards surface who is promotion-ready and where additional support or compliance reviews are required.",
    icon: Rocket
  }
];

const ROADMAP: RoadmapStep[] = [
  {
    phase: "Diagnostics & modelling",
    duration: "Weeks 1-2",
    activities: [
      "Review historic pair closures, flush incidents, and spillover disputes to baseline KPIs.",
      "Segment weak-leg exposure by market, product line, and leadership tier.",
      "Prototype spillover policies and binary thresholds in a Cloud MLM Software sandbox."
    ],
    icon: CalendarRange
  },
  {
    phase: "Configuration & integrations",
    duration: "Weeks 3-5",
    activities: [
      "Configure spillover routing, approval chains, and payout triggers with automated testing harnesses.",
      "Integrate ERP, payment gateways, and tax engines so volume, receipts, and commissions stay in sync.",
      "Validate compliance guardrails with legal, finance, and market leaders before launch."
    ],
    icon: Settings2
  },
  {
    phase: "Enablement & optimisation",
    duration: "Weeks 6-8",
    activities: [
      "Launch leader workshops, enablement kits, and coaching cadences aligned to binary checkpoints.",
      "Monitor dashboards for imbalance trends, dispute tickets, and payout delays; iterate policies fast.",
      "Run quarterly optimisation reviews to adjust thresholds, incentives, and expansion markets."
    ],
    icon: Rocket
  }
];

const FAQS: Faq[] = [
  {
    question: "How does Cloud MLM Software prevent spillover abuse?",
    answer:
      "All placements carry immutable approvals, lineage, and documentation. Compliance rules restrict reroutes, and real-time alerts flag attempts that breach policy before they publish."
  },
  {
    question: "Can we tailor binary rules per market or product line?",
    answer:
      "Yes. Pair requirements, payout rates, compliance holds, and tax handling can be configured per market, product vertical, or leadership tier inside the same plan stack."
  },
  {
    question: "How are flush risks communicated to the field?",
    answer:
      "Dashboards expose carry-over levels, while automated nudges coach leaders and promoters when weak legs need activity or documentation before the cycle closes."
  },
  {
    question: "What data integrations are available?",
    answer:
      "We connect to ERP, CRM, and payment providers to sync inventory, receipts, and commissions. Open APIs and webhooks keep downstream analytics and finance tools current."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Spillover Binary MLM Plan";
  const description =
    "Cloud MLM Software delivers the #1 spillover binary MLM plan resource—automation, compliance toolkits, predictive analytics, case studies, and buyer-ready demos.";

  return {
    title,
    description,
    keywords: [
      "Spillover binary MLM plan",
      "Binary compensation software",
      "Spillover automation",
      "Cloud MLM Software",
      "Network marketing automation",
      "MLM payout optimisation",
      "Compliance ready compensation",
      "Predictive spillover analytics"
    ],
    alternates: {
      canonical: buildLocalizedPath("/mlm-plan/spillover-binary-plan-mlm-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type SpilloverBinaryPlanPageProps = {
  params: { lang: SupportedLocale };
};

export default function SpilloverBinaryPlanPage({ params }: SpilloverBinaryPlanPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const calculatorHref = buildLocalizedPath("/spillover-binary-plan-calculator", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const plansHref = buildLocalizedPath("/mlm-plans", locale);
  const demoHref = buildLocalizedPath("/spillover-binary-plan-software-demo", locale);
  const latestUpdate = WHATS_NEW_ITEMS[0]?.date ?? "2025-03-01";

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Spillover Binary MLM Plan Blueprint | Cloud MLM Software",
      description:
        "Deep dive into the spillover binary MLM plan with Cloud MLM Software—automated leg balancing, compliant placements, predictive analytics, and buyer resources.",
      url: `${buildLocalizedPath("/mlm-plan/spillover-binary-plan-mlm-software", locale)}`,
      dateModified: latestUpdate,
      publisher: {
        "@type": "Organization",
        name: "Cloud MLM Software",
        url: siteBaseConfig.url,
        sameAs: [
          "https://www.linkedin.com/company/cloudmlmsoftware",
          "https://twitter.com/cloudmlm",
          "https://www.facebook.com/cloudmlmsoftware"
        ]
      },
      potentialAction: [
        {
          "@type": "Action",
          name: "Schedule a blueprint workshop",
          target: `${contactHref}`
        },
        {
          "@type": "Action",
          name: "Launch spillover simulator",
          target: `${buildLocalizedPath("/spillover-binary-plan-software-demo", locale)}`
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
    }
  ];

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_82%_25%,rgba(129,140,248,0.22),transparent_60%),radial-gradient(circle_at_30%_85%,rgba(14,165,233,0.16),transparent_65%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(420px,640px)] lg:items-stretch">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Spillover binary centre of excellence
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              The definitive spillover binary MLM plan guide—for strategists, operators, and software buyers.
            </h1>
            <p className="max-w-3xl text-base text-muted-foreground dark:text-white/80">
              A spillover binary plan lets uplines place overflow members under their teams to stabilise weak legs. Cloud MLM Software automates the placements, enforces compliance, and visualises impact so network marketing organisations scale without sacrificing trust.
            </p>
            <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {SUMMARY_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Get started today
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href={`${contactHref}?subject=Spillover%20Binary%20Strategy`}>
                  Book a strategy session
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary/10 dark:border-white/40 dark:text-white dark:hover:bg-white/10"
              >
                <Link href="/mlm-calculator" target="_blank" rel="noopener">
                  Download ROI calculator
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="px-4 text-primary hover:bg-primary/10 dark:text-white">
                <Link href="/support/live-chat" target="_blank" rel="noopener">
                  Chat with a product expert
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {HERO_METRICS.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-3xl border border-border/60 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-white/10"
                >
                  <p className="text-sm uppercase tracking-wide text-muted-foreground dark:text-white/70">{metric.label}</p>
                  <p className="mt-2 text-3xl font-semibold text-foreground dark:text-white">{metric.value}</p>
                  <p className="mt-3 text-sm text-muted-foreground dark:text-white/70">{metric.detail}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <figure
              className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur"
              aria-labelledby="summary-infographic"
            >
              <figcaption id="summary-infographic" className="text-sm font-semibold text-foreground">
                Spillover binary flow snapshot
              </figcaption>
              <svg
                role="img"
                aria-label="Infographic showing sponsor distributing spillover to weak legs with compliance checkpoints"
                viewBox="0 0 360 220"
                className="mt-4 h-auto w-full text-primary"
              >
                <defs>
                  <marker id="summary-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L6,3 z" fill="currentColor" />
                  </marker>
                </defs>
                <circle cx="180" cy="28" r="20" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
                <text x="180" y="34" textAnchor="middle" fontSize="12" fill="currentColor">
                  Sponsor HQ
                </text>
                <circle cx="110" cy="100" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
                <text x="110" y="105" textAnchor="middle" fontSize="11" fill="currentColor">
                  Strong leg
                </text>
                <circle cx="250" cy="100" r="18" fill="none" strokeDasharray="5 4" stroke="currentColor" strokeWidth="2" />
                <text x="250" y="105" textAnchor="middle" fontSize="11" fill="currentColor">
                  Weak leg
                </text>
                <rect x="240" y="135" width="60" height="28" rx="8" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.5" />
                <text x="270" y="153" textAnchor="middle" fontSize="10" fill="currentColor">
                  Compliance
                </text>
                <circle cx="250" cy="188" r="16" fill="none" stroke="currentColor" strokeWidth="2" />
                <text x="250" y="193" textAnchor="middle" fontSize="11" fill="currentColor">
                  Spillover
                </text>
                <circle cx="70" cy="160" r="16" fill="none" stroke="currentColor" strokeWidth="2" />
                <text x="70" y="165" textAnchor="middle" fontSize="11" fill="currentColor">
                  Carry-over
                </text>
                <line x1="180" y1="48" x2="110" y2="84" stroke="currentColor" strokeWidth="2" markerEnd="url(#summary-arrow)" />
                <line x1="180" y1="48" x2="250" y2="84" stroke="currentColor" strokeWidth="2" markerEnd="url(#summary-arrow)" />
                <line x1="250" y1="118" x2="250" y2="170" stroke="currentColor" strokeWidth="2" markerEnd="url(#summary-arrow)" />
                <line x1="110" y1="118" x2="70" y2="144" stroke="currentColor" strokeWidth="2" markerEnd="url(#summary-arrow)" />
                <line x1="250" y1="134" x2="270" y2="135" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#summary-arrow)" />
                <text x="70" y="200" textAnchor="middle" fontSize="10" fill="currentColor">
                  Carry-over monitored
                </text>
                <text x="250" y="210" textAnchor="middle" fontSize="10" fill="currentColor">
                  Spillover released post-approval
                </text>
              </svg>
            </figure>
            <SpilloverBinarySimulator className="h-full rounded-[34px] border border-border/60 bg-background/80 lg:w-full lg:shadow-2xl" />
          </div>
        </div>
      </section>

      <div className="border-b border-border/60 bg-muted/40 py-3">
        <div className="container flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>
            Last updated: <strong className="font-semibold text-foreground">{LAST_UPDATED}</strong>
          </span>
          <Link
            href="/changelog"
            className="inline-flex items-center gap-1 text-primary underline underline-offset-4"
          >
            View detailed product changelog
            <ArrowUpRight className="h-3 w-3" aria-hidden />
          </Link>
        </div>
      </div>

      <section className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Deep-dive learning experiences for every persona
          </h2>
          <p className="text-sm text-muted-foreground">
            Whether a prospect asks, “How does a spillover binary plan work?” or a leader needs a refresher, this page delivers multimodal education—accessible, voice-search friendly, and optimised for fast loading.
          </p>
          <ul className="grid gap-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
              <span>Interactive simulator visualises weak-leg support, compliance holds, and payout velocity in real time.</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
              <span>Guided configuration wizard walks operators through approvals, automation, and enablement flows.</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
              <span>Voice-ready FAQs answer common queries for assistants like Siri, Alexa, and Google Assistant.</span>
            </li>
          </ul>
        </div>
        <div className="space-y-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm">
          <h3 className="text-base font-semibold text-foreground">Guided tour snapshot</h3>
          <ol className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                1
              </span>
              <span>Start with the simulator to test pair requirements, spillover ratios, and average order values.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                2
              </span>
              <span>Review feature micro demos to see automation, compliance, analytics, and payouts in action.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                3
              </span>
              <span>Download implementation toolkits and subscribe to webinars for ongoing optimisation tips.</span>
            </li>
          </ol>
          <Button asChild variant="outline" size="sm" className="border-primary/40 text-primary hover:bg-primary/10">
            <Link href={`${demoHref}?tour=true`}>
              Launch guided tour
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Feature highlights for modern spillover binary operations
          </h2>
          <p className="text-sm text-muted-foreground">
            Every capability is built for cross-functional teams—operations, finance, compliance, and field enablement all use the same truth source.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {FEATURE_HIGHLIGHTS.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="link"
                  size="sm"
                  className="px-0 text-primary"
                >
                  <Link href={`${demoHref}?focus=${encodeURIComponent(feature.title.toLowerCase())}`}>
                    Watch 90-second micro demo
                    <ArrowUpRight className="ml-1 h-3 w-3" aria-hidden />
                  </Link>
                </Button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Step-by-step configuration wizard
          </h2>
          <p className="text-sm text-muted-foreground">
            Guided workflows make enterprise-grade setup approachable. Each stage includes built-in validation and contextual training.
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {CONFIG_WIZARD_STEPS.map((wizardStep, index) => (
            <AccordionItem key={wizardStep.step} value={`step-${index}`} className="overflow-hidden rounded-3xl border border-border/60 bg-background/80">
              <AccordionTrigger className="px-6 py-4 text-left text-base font-semibold">
                {wizardStep.step}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-sm text-muted-foreground">
                <p>{wizardStep.description}</p>
                <ul className="mt-4 space-y-2">
                  {wizardStep.checklist.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Implementation impact proven in the field
          </h2>
          <p className="text-sm text-muted-foreground">
            Real organisations use Cloud MLM Software to modernise spillover operations—here are some outcomes you can model against.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {IMPLEMENTATION_CASES.map((useCase) => (
            <article
              key={useCase.title}
              className="flex h-full flex-col justify-between gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm"
            >
              <header className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">{useCase.title}</h3>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{useCase.metricLabel}</p>
                <p className="text-2xl font-semibold text-foreground">{useCase.metricValue}</p>
              </header>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">{useCase.result}</p>
                <p>{useCase.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-8" id="onboarding-checklist">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Spillover binary implementation toolkit
          </h2>
          <p className="text-sm text-muted-foreground">
            Access ready-to-use assets for compliance, integrations, and field enablement. Combine them with our onboarding checklist to accelerate time-to-value.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TOOLKIT_ITEMS.map((item) => {
            const Icon = item.icon;
            const linkProps = item.external
              ? { target: "_blank" as const, rel: "noopener" }
              : {};
            return (
              <article
                key={item.title}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/80 p-5 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="mt-auto border-primary/40 text-primary hover:bg-primary/10"
                >
                  <Link href={item.href} {...linkProps}>
                    Open resource
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Benchmark Cloud MLM Software against top spillover vendors
          </h2>
          <p className="text-sm text-muted-foreground">
            Compare Cloud MLM Software with Volochain, Epixel, Infinite MLM, and other industry players. Toggle the filters to focus on automation, compliance, analytics, enablement, or innovation.
          </p>
        </div>
        <CompetitorComparisonTable rows={COMPARISON_ROWS} />
      </section>

      <section className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What’s new in Cloud MLM Software spillover automation
          </h2>
          <p className="text-sm text-muted-foreground">
            Stay informed with quarterly updates that cover feature releases, compliance packs, and ROI accelerators. Bookmark this section or subscribe to product notifications via the community portal.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {WHATS_NEW_ITEMS.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-border/60 bg-background/80 p-5 shadow-sm"
            >
              <time dateTime={item.date} className="text-xs font-semibold uppercase tracking-wide text-primary">
                {new Date(item.date).toLocaleDateString(undefined, {
                  month: "short",
                  day: "numeric",
                  year: "numeric"
                })}
              </time>
              <h3 className="mt-2 text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(340px,420px)]">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Watch, click, and configure in minutes
          </h2>
          <p className="text-sm text-muted-foreground">
            Mix interactive assets to educate stakeholders: short videos, guided demos, and documentation bundles are a tap away.
          </p>
          <div className="grid gap-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <PlayCircle className="mt-1 h-4 w-4 text-primary" aria-hidden />
              <span>3-minute explainer video covers leg balancing, approvals, and analytics dashboards.</span>
            </div>
            <div className="flex items-start gap-2">
              <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
              <span>Interactive simulator (below) lets you validate pair thresholds and spillover ratios instantly.</span>
            </div>
            <div className="flex items-start gap-2">
              <ClipboardCheck className="mt-1 h-4 w-4 text-primary" aria-hidden />
              <span>Downloadable documentation bundle summarises compliance, integrations, and launch playbooks.</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href={demoHref}>
                Launch guided demo
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/documents" target="_blank" rel="noopener">
                Download documentation
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
        <figure className="space-y-4">
          <div
            className="relative aspect-video overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-primary/20 via-background to-background"
            role="img"
            aria-label="Video still showing Cloud MLM Software spillover binary plan overview"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center gap-3 rounded-full bg-background/80 px-4 py-2 text-sm font-semibold text-foreground shadow-lg">
                <PlayCircle className="h-5 w-5 text-primary" aria-hidden />
                <span>Play spillover overview</span>
              </div>
            </div>
          </div>
          <figcaption className="text-xs text-muted-foreground">
            Prefer live interaction? Book a strategy call to customise the plan to your organisation’s markets and growth model.
          </figcaption>
        </figure>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Recognised by compliance councils and industry leaders
          </h2>
          <p className="text-sm text-muted-foreground">
            Trust signals matter when selecting enterprise-grade compensation technology. Cloud MLM Software backs every deployment with certifications, alliances, and customer advocacy.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="grid gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm">
            {TRUST_INDICATORS.map((indicator) => {
              const Icon = indicator.icon;
              return (
                <div key={indicator.label} className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-foreground">{indicator.label}</p>
                    <p className="text-sm text-muted-foreground">{indicator.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground">Leadership testimonials</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              {TESTIMONIALS.map((testimonial) => (
                <li key={testimonial.name} className="border-l-2 border-primary/40 pl-4">
                  <p className="text-muted-foreground">“{testimonial.quote}”</p>
                  <p className="mt-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-foreground">
                    <MessageSquareQuote className="h-4 w-4 text-primary" aria-hidden />
                    {testimonial.name} · {testimonial.role}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-2 rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4">
              <h4 className="text-sm font-semibold text-foreground">Third-party endorsements</h4>
              <ul className="space-y-1 text-xs text-muted-foreground">
                {SOCIAL_PROOF_ITEMS.map((item) => (
                  <li key={item.platform} className="flex items-start gap-2">
                    <Sparkles className="mt-0.5 h-3.5 w-3.5 text-primary" aria-hidden />
                    <span>
                      <strong className="text-foreground">{item.platform}:</strong> {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Continuous learning and community engagement
          </h2>
          <p className="text-sm text-muted-foreground">
            Access live events, knowledge hubs, and peer communities designed to keep your spillover binary strategy ahead of the curve.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {RESOURCE_ITEMS.map((resource) => {
            const Icon = resource.icon;
            return (
              <article
                key={resource.title}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground">{resource.title}</h3>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
                <Button asChild size="sm" className="mt-auto">
                  <Link href={resource.href} target="_blank" rel="noopener">
                    {resource.cta}
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            How the spillover binary mechanics operate
          </h2>
          <p className="text-sm text-muted-foreground">
            Align placements, pair closures, and compliance controls so every binary cycle compounds momentum instead of risk.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {MECHANICS.map((mechanic) => {
            const Icon = mechanic.icon;
            return (
              <article
                key={mechanic.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{mechanic.title}</h3>
                <p className="text-sm text-muted-foreground">{mechanic.summary}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {mechanic.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2">
                      <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Foundations that align product, compliance, and field teams
          </h2>
          <p className="text-sm text-muted-foreground">
            Everyone operates from the same dataset—inventory, finance, and field leaders respond to the binary cycle in real time.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Interactive plan examples</h2>
            <p className="text-sm text-muted-foreground">
              Validate real-world scenarios before launch and equip executives with the data they need to scale confidently.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {EXAMPLES.map((example) => {
              const Icon = example.icon;
              return (
                <article
                  key={example.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{example.title}</h3>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Baseline</p>
                  <p className="text-sm text-muted-foreground">{example.baseline}</p>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">What Cloud MLM Software reveals</p>
                  <p className="text-sm text-muted-foreground">{example.insight}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Member and leader journeys mapped for clarity
          </h2>
          <p className="text-sm text-muted-foreground">
            Make every participant—from new enrollee to top leader—confident in how spillover and binary payouts operate.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {JOURNEYS.map((journey) => {
            const Icon = journey.icon;
            return (
              <article
                key={journey.stage}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{journey.stage}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{journey.description}</p>
                </div>
                <p className="text-sm font-medium text-foreground">Focus</p>
                <p className="text-sm text-muted-foreground">{journey.focus}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Implementation roadmap with timeline cues
          </h2>
          <p className="text-sm text-muted-foreground">
            Move from diagnostics to optimisation with a plan that keeps founders, finance, and field leadership in lockstep.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {ROADMAP.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.phase}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{step.phase}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.duration}</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {step.activities.map((activity) => (
                    <li key={activity} className="flex items-start gap-2">
                      <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Operational blueprint</h2>
          <p className="text-sm text-muted-foreground">
            Configure, analyse, and enable the spillover binary plan with Cloud MLM Software’s modular toolkit.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {BLUEPRINT.map((pattern) => {
            const Icon = pattern.icon;
            return (
              <article
                key={pattern.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{pattern.title}</h3>
                <p className="text-sm text-muted-foreground">{pattern.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">
            Answers to the questions founders, compliance leaders, and finance officers raise when modernising a spillover binary plan.
          </p>
        </div>
        <div className="grid gap-4">
          {FAQS.map((faq) => (
            <article
              key={faq.question}
              className="flex flex-col gap-2 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                  <HelpCircle className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-gradient-to-br from-primary/10 via-background to-background py-20 dark:from-primary/10">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              How Cloud MLM Software helps
            </h2>
            <p className="text-sm text-muted-foreground">
              Partner with Cloud MLM Software to launch a compliant spillover binary engine that delights the field, satisfies finance, and scales worldwide.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {CTA_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Schedule a blueprint workshop
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={pricingHref}>
                  Explore pricing tiers
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href={demoHref}>
                  Start interactive demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="px-4 text-primary hover:bg-primary/10 dark:text-white">
                <Link href="/support/live-chat" target="_blank" rel="noopener">
                  Open instant chat support
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Want to test scenarios hands-on? Launch the{" "}
              <Link href={calculatorHref} className="text-primary underline underline-offset-4">
                spillover binary plan calculator
              </Link>{" "}
              or request a{" "}
              <Link href={demoHref} className="text-primary underline underline-offset-4">
                guided demo
              </Link>{" "}
              to see Cloud MLM Software orchestrate every cycle. Explore our{" "}
              <Link href={plansHref} className="text-primary underline underline-offset-4">
                MLM plan library
              </Link>{" "}
              for companion compensation strategies.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-foreground">Launch readiness checklist</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Compliance playbooks validated for spillover approvals, documentation, and cooling-off rules in each region.</span>
              </li>
              <li className="flex items-start gap-2">
                <Network className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Integrations tested across ERP, payment gateways, and analytics pipelines with automated alerting for sync issues.</span>
              </li>
              <li className="flex items-start gap-2">
                <GaugeCircle className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Field enablement dashboards tracking leg balance, carry-over risk, and recognition for spillover contributions.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Script id="spillover-binary-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schemaData)}
      </Script>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
