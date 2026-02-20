import type { ComponentType } from "react";
import {
  BarChart3,
  CalendarRange,
  ClipboardCheck,
  Compass,
  GaugeCircle,
  HelpCircle,
  Layers,
  Network,
  RefreshCcw,
  Rocket,
  Settings2,
  ShieldCheck,
  Shuffle,
  Sparkles,
  Target,
  Users
} from "lucide-react";
import type { PlanFeatureContent } from "@/components/frontend/plans/subpage";

type IconType = ComponentType<{ className?: string }>;

export type Metric = { label: string; value: string; detail: string };
export type Pillar = { title: string; description: string; bullets: string[]; icon: IconType };
export type Example = { title: string; baseline: string; insight: string; icon: IconType };
export type Pattern = { title: string; description: string; icon: IconType };
export type Mechanic = { title: string; summary: string; outcomes: string[]; icon: IconType };
export type Journey = { stage: string; description: string; focus: string; icon: IconType };
export type RoadmapStep = { phase: string; duration: string; activities: string[]; icon: IconType };

/** Hero metrics (from live site: users, demo, contact, reviews). */
const HERO_METRICS: Metric[] = [
  {
    label: "User world wide",
    value: "100+",
    detail: "Trusted by MLM businesses globally."
  },
  {
    label: "Free Demo",
    value: "Try now",
    detail: "See the software in action."
  },
  {
    label: "Reviews",
    value: "10,000+",
    detail: "Based on reviews from various platforms."
  }
];

/** "What is MLM Australian X-up Plan?" – two intro paragraphs from live site. */
export const WHAT_IS_PARAGRAPHS: string[] = [
  "The MLM Australian X-Up Plan is a modified version of the traditional multi-level marketing plan, designed to enhance earnings and incentivize member recruitment. In this structure, a new member must pass up a certain number of their initial sales to their upline sponsor. This number, often referred to as \"X,\" can vary according to the specific program's rules. For instance, in a 2-Up plan, the first two sales of every new recruit are passed up to the sponsor, after which the recruit is free to start earning directly from their sales.",
  "This plan is particularly popular for its potential to rapidly increase earnings for those higher in the structure, as they benefit from the sales of a potentially large number of recruits' pass-up sales. It fosters a strong motivation for sponsors to recruit and effectively train their downline, as their success directly impacts the sponsor's income. However, it can be challenging for new recruits, who must make enough sales to cover their pass-ups and start earning for themselves, making it crucial for them to be diligent and proactive from the start."
];

/** "Features of Australian x-up plan" – bullet list from live site. */
export const FEATURES_LIST: string[] = [
  "The Australian X-UP Plan operates on a uni-level structure.",
  "It involves a targeted approach where bonuses are earned based on meeting specific sales targets.",
  "The \"X\" in the plan refers to \"pass up\" sales, where bonuses from certain sales are passed up to the upline sponsor.",
  "The structure can be denoted as X-up, where X can be any combination such as 2-up, 3-up, etc.",
  "In a 2-up plan, for instance, the distributor passes up bonuses from the first and second sales to their upline sponsors, but earns bonuses from the third sale onwards.",
  "Cloud MLM Software offers tailored Australian X-UP Plan MLM Software with powerful features to optimize growth and performance."
];

/** "Why Australian X-up Plan is preferred in MLM business?" – paragraph from live site. */
export const WHY_PREFERRED_PARAGRAPH =
  "This plan helps to assign the members into the chain based on their performance and help to provide rewards, bonus to the members, and help to track the growth of the company and members. With the support of MLM Software, these processes become more organized and efficient, ensuring accurate tracking and reporting. There are so many plans available in the MLM industry but the Australian X-up plan always differs from other plans because it consists of specialized properties that are suitable for both large and small scale businesses.";

const PILLARS: Pillar[] = [
  {
    title: "Clarity on the X-UP ladder",
    description:
      "Design every pass-up with auditable logic so promoters know exactly when recruits become personal legs.",
    bullets: [
      "Model 1-up, 2-up, and 3-up transitions with conditional qualifiers.",
      "Surface sponsor trees and pass-up history in a single timeline view.",
      "Give founders and compliance officers change logs for every rule edit."
    ],
    icon: Network
  },
  {
    title: "Momentum the field can feel",
    description:
      "Encourage sustained activity with pacing nudges, tiered celebrations, and on-time recognition.",
    bullets: [
      "Trigger alerts when a promoter is one pass-up away from ownership.",
      "Layer sprint-based bonuses without breaking the compensation ceiling.",
      "Gamify streaks so coaching teams can intervene before energy fades."
    ],
    icon: GaugeCircle
  },
  {
    title: "Governance-first execution",
    description:
      "Keep regulators, finance, and banking partners confident in how funds flow through each pass-up.",
    bullets: [
      "Cap simultaneous pass-ups to prevent hoarding and duplicate claims.",
      "Embed AML and KYC checkpoints before releasing high-value payouts.",
      "Generate multi-currency receipts that mirror each sponsor exchange."
    ],
    icon: ShieldCheck
  }
];

const EXAMPLES: Example[] = [
  {
    title: "Launch sprint – 2-UP",
    baseline: "200 promoters, 60-day runway, AUD 450 average pack value, two pass-ups required.",
    insight:
      "Cloud MLM Software predicts when legs become personal, auto-reserves bonuses, and highlights where extra coaching will unblock depth.",
    icon: Rocket
  },
  {
    title: "Leader re-entry loop",
    baseline: "Ranked leaders re-enter queue after six personal enrolments with tiered product packs.",
    insight:
      "Dynamic re-entry logic ensures legacy leaders do not stall new teams while preserving premium pack incentives.",
    icon: RefreshCcw
  },
  {
    title: "Compliance stress test",
    baseline: "Three-region launch, mixed currencies, and banking checks on every third pass-up.",
    insight:
      "Workflow checkpoints, document requests, and payout freezes are tracked in one audit trail ready for regulators.",
    icon: ShieldCheck
  }
];

const BLUEPRINT: Pattern[] = [
  {
    title: "Configuration studio",
    description:
      "Use drag-and-drop pass-up rules, qualification gates, and re-entry lanes to capture the exact Australian X-UP policy.",
    icon: Settings2
  },
  {
    title: "Analytics spine",
    description:
      "Dashboards compare planned pass-ups versus actual sponsor conversions, retention, and payout velocity in real time.",
    icon: BarChart3
  },
  {
    title: "Field enablement",
    description:
      "Coach leaders with smart alerts, guided scripts, and a content hub synced to plan milestones.",
    icon: Users
  }
];

const MECHANICS: Mechanic[] = [
  {
    title: "Pass-up orchestration",
    summary: "Control when enrolments are passed to sponsors and when they become owned legs with auditable logic.",
    outcomes: [
      "Blend 1-up, 2-up, and 3-up structures in a single plan instance.",
      "Freeze or fast-track legs when compliance reviews trigger.",
      "Surface ownership history to the field with timeline indicators."
    ],
    icon: Shuffle
  },
  {
    title: "Qualification guardrails",
    summary: "Tie product packs, personal volume, and coaching milestones to each pass-up threshold.",
    outcomes: [
      "Attach proof-of-purchase or onboarding modules before a leg transfers.",
      "Automate re-entry placement for leaders that hit rolling enrolment targets.",
      "Throttle payouts if documentation or tax flags remain unresolved."
    ],
    icon: Target
  },
  {
    title: "Visibility & coaching",
    summary: "Serve dashboards the field can act on with alerts, forecasting, and contextual scripts.",
    outcomes: [
      "Trigger nudges when legs underperform pass-up expectations.",
      "Highlight top promoters and stalled candidates in one canvas.",
      "Push coaching playbooks to mobile or desktop with version control."
    ],
    icon: Layers
  }
];

const JOURNEYS: Journey[] = [
  {
    stage: "Prospect joins",
    description: "The recruit lands in the queue, completes onboarding, and confirms product preferences.",
    focus: "Field sees estimated pass-up timing and recommended starter scripts.",
    icon: Compass
  },
  {
    stage: "Qualification window",
    description: "Personal volume, compliance documents, and coaching checkpoints determine when the leg transfers.",
    focus: "Leaders receive alerts to support or intervene before deadlines slip.",
    icon: ClipboardCheck
  },
  {
    stage: "Ownership confirmed",
    description: "The sponsor receives the leg, bonuses trigger, and re-entry logic optionally places the promoter back in queue.",
    focus: "Finance and compliance review full audit trails with payout receipts and approvals.",
    icon: ShieldCheck
  }
];

const ROADMAP: RoadmapStep[] = [
  {
    phase: "Discovery & modelling",
    duration: "Week 1",
    activities: [
      "Capture compensation objectives, launch goals, and regulatory constraints.",
      "Ingest historic payout data or spreadsheets to benchmark pass-up rules.",
      "Prototype decision trees for 1-up through 3-up scenarios."
    ],
    icon: CalendarRange
  },
  {
    phase: "Configuration & testing",
    duration: "Weeks 2-3",
    activities: [
      "Build pass-up automation, re-entry loops, and bonus overlays in staging.",
      "Run scenario simulations with finance and field leadership.",
      "Validate tax, banking, and AML checkpoints with compliance teams."
    ],
    icon: Settings2
  },
  {
    phase: "Enablement & launch",
    duration: "Weeks 4-5",
    activities: [
      "Publish dashboards, playbooks, and training modules to the field portal.",
      "Set up live health monitors, retention alerts, and executive scorecards.",
      "Finalize rollout communications and activate support response flows."
    ],
    icon: Rocket
  }
];

export const CTA_POINTS: string[] = [
  "Architect bespoke X-UP structures with confidence and instant validation.",
  "Automate every pass-up, re-entry, and recognition flow without spreadsheets.",
  "Deliver dashboards tuned for founders, finance leads, and field captains alike.",
  "Stay ready for audits with immutable histories of payouts, documents, and plan edits."
];

export const CHECKLIST_ITEMS: { icon: IconType; text: string }[] = [
  { icon: ShieldCheck, text: "Compliance tests cover pass-up, payout, and document workflows." },
  { icon: BarChart3, text: "Dashboards benchmark sponsor activity, churn, and product velocity." },
  { icon: GaugeCircle, text: "Field alerts keep leaders on pace to reclaim pass-ups before deadlines." }
];

export const heroMetrics = HERO_METRICS;
export const pillars = PILLARS;
export const examples = EXAMPLES;
export const blueprint = BLUEPRINT;
export const mechanics = MECHANICS;
export const journeys = JOURNEYS;
export const roadmap = ROADMAP;

export const australianXUpPlanContent: PlanFeatureContent = {
  hero: {
    badge: "MLM Plans",
    title: "Australian X-UP MLM Plan",
    description:
      "Multi-level marketing is one of the best profitable businesses in the world today. The main vital point of an online marketing business is its accuracy in managing the tasks. A high degree of reliability can be succeeded by selecting an accurate plan as it was the basis for the MLM company.",
    primaryCta: "Book This plan",
    secondaryCta: "See the flow simulator",
    metrics: HERO_METRICS,
  },
  features: [],
  faq: {
    heading: "Frequently asked questions",
    description:
      "Key answers that founders, finance leaders, and compliance officers raise when evaluating an Australian X-UP rollout.",
    items: [
      {
        question: "How flexible is the pass-up configuration?",
        answer:
          "Cloud MLM Software lets you mix different pass-up counts, time-bound qualifications, and leadership re-entry rules inside one compensation blueprint without custom code."
      },
      {
        question: "Can we audit every pass-up for regulators?",
        answer:
          "Yes. Each enrolment stores documents, approvals, banking receipts, and timeline events so auditors can trace funds and ownership changes down to the minute."
      },
      {
        question: "What integrations are supported for Australian operators?",
        answer:
          "We connect to regional payment gateways, GST-ready accounting tools, and CRMs. Our integration team manages sandbox testing and go-live validation."
      },
      {
        question: "How do you help the field adopt the plan?",
        answer:
          "We deliver onboarding checklists, guided selling talk tracks, and ongoing coaching analytics. Customer success partners host regular sprints to keep promoters engaged."
      }
    ]
  },
  cta: {
    heading: "Purchase AI-Powered Cloud MLM Software Today!",
    description:
      "Achieve MLM success with smart AI-driven tools! Automate, manage, and grow your network effortlessly. Buy now and scale your business!",
    buttonText: "Buy Now",
    secondaryCta: "Try Demo",
    trustIndicators: ["Fast implementation", "Expert support", "Proven results"]
  }
};
