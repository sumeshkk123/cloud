import type { ComponentType } from "react";
import {
  BarChart3,
  CalendarRange,
  ClipboardCheck,
  Compass,
  GaugeCircle,
  HelpCircle,
  Layers,
  LineChart,
  Megaphone,
  Network,
  Orbit,
  Rocket,
  Settings2,
  ShieldCheck,
  Target,
  TimerReset,
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

const HERO_METRICS: Metric[] = [
  { label: "User world wide", value: "100+", detail: "Trusted by MLM businesses globally." },
  { label: "Free Demo", value: "Try now", detail: "See the software in action." },
  { label: "Reviews", value: "10,000+", detail: "Based on reviews from various platforms." }
];

/** "What is Auto Fill MLM Plan?" – from live site (cloudmlmsoftware.com/mlm-plan/auto-fill-plan-mlm-software). */
export const WHAT_IS_PARAGRAPHS: string[] = [
  "The Auto fill plan is a non-referral MLM plan provided by the MLM organizations which is completely online. And this plan is simple and straight forward, efficient, reliable, long-lasting, and easy to operate. The distributor will earn money for each new associate joined in this Auto Filling plan. As the name indicates it works under an automated method.",
  "Cloud MLM software develops so many Auto fill Plan MLM Software for small and large scale companies we have a professional team having deep knowledge in MLM plans. All our clients are happy with our plans and services. The auto-fill plan builds up in the multiple of 2, 3 and 4. In the Auto-filling MLM Plan, the auto-filling process is used based on the organization's business plan and strategy. Our developed Auto fill Plan MLM software can be easily integrated with different modules, such as payout estimates, member management, pool or level management, etc."
];

export const FEATURES_LIST: string[] = [
  "Automated forced-matrix placements that honour sponsor intent and geography.",
  "Queue visibility and re-entry projections for leaders, finance, and compliance.",
  "Governance and payout controls with AML, tax, and product qualification checkpoints.",
  "Predictable growth structure with real-time telemetry for matrix fills and re-entries.",
  "Regulation-ready operations with FTC cooling-off and documentation workflows.",
  "Field enablement with mobile dashboards, cycle forecasts, and recognition feeds."
];

export const WHY_PREFERRED_PARAGRAPH =
  "Auto fill plans help assign members into the matrix based on placement rules and provide clear queue visibility, rewards, and cycle tracking. With MLM Software, placement logic, spillover, and re-entries become organized and efficient. Many plans exist in the industry, but the auto-fill plan stands out for predictable scaling and compliance-ready operations suitable for both large and small businesses.";

const MECHANICS: Mechanic[] = [
  {
    title: "Auto-placement choreography",
    summary: "Orchestrate forced-matrix placements that honour sponsor intent and geography.",
    outcomes: [
      "Route enrolments into the next open seat while respecting placement locks and overrides.",
      "Throttle spillover so corporate volume and field-generated recruits stay balanced.",
      "Stress-test saturation scenarios before rules move from staging to production."
    ],
    icon: Network
  },
  {
    title: "Queue visibility & re-entry",
    summary: "Give leaders, finance, and compliance the same view of queue health and re-entries.",
    outcomes: [
      "Project when promoters will cycle and re-enter based on pack mix and velocity.",
      "Alert compliance when cooldown timers or re-entry throttles are about to trigger.",
      "Surface coaching cues so spillover teams receive support before momentum fades."
    ],
    icon: TimerReset
  },
  {
    title: "Governance & payout controls",
    summary: "Close every matrix with audit-ready payouts, taxes, and recognition flows.",
    outcomes: [
      "Pause rewards until AML, tax, or product qualification checks are cleared.",
      "Snapshot carry-forward balances and statement edits for auditors and banking partners.",
      "Blend plan bonuses with promotions without breaching compensation ceilings."
    ],
    icon: ShieldCheck
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Predictable growth structure",
    description: "Model matrix fills, re-entries, and expansion plans with real-time telemetry.",
    bullets: [
      "Forecast when new matrices spin up so inventory and finance stay aligned.",
      "Simulate geographic or product-specific placement rules before go-live.",
      "Expose leg and queue health to founders, field leaders, and analysts."
    ],
    icon: Layers
  },
  {
    title: "Regulation-ready operations",
    description: "Keep forced-matrix payouts inside global compliance guardrails.",
    bullets: [
      "Embed AML, FTC cooling-off, and documentation workflows for each market.",
      "Log every rule change with timestamps, approvers, and impact previews.",
      "Generate statements with tax, invoicing, and FX data already reconciled."
    ],
    icon: ClipboardCheck
  },
  {
    title: "Field enablement and adoption",
    description: "Equip leaders and promoters with clarity, coaching, and recognition.",
    bullets: [
      "Publish mobile dashboards showing queue position, cycle forecasts, and next actions.",
      "Deliver just-in-time training when promoters are close to completing a matrix.",
      "Automate recognition feeds as teams close cycles or rescue lagging levels."
    ],
    icon: Megaphone
  }
];

const EXAMPLES: Example[] = [
  {
    title: "Global wellness prelaunch",
    baseline: "6,500 founders, 3×7 matrix, premium starter packs across three currencies.",
    insight: "Cloud MLM Software balances corporate spillover with sponsor-led growth, forecasting when new matrices will fire and what cash flow finance should expect.",
    icon: Rocket
  },
  {
    title: "EU compliance audit",
    baseline: "France, Germany, and Spain launch with product disclosure and e-invoicing mandates.",
    insight: "Auto-fill payouts pause until VAT invoices, KYC, and cooling-off rules are cleared, giving compliance full audit trails in one workspace.",
    icon: LineChart
  },
  {
    title: "APAC digital re-entry challenge",
    baseline: "High digital enrolment velocity with influencers triggering rapid re-entries.",
    insight: "Queue dashboards, AI nudges, and configurable cooldown timers stop overload while keeping the field confident in the process.",
    icon: Orbit
  }
];

const BLUEPRINT: Pattern[] = [
  { title: "Configuration studio", description: "Drag-and-drop matrix rules, spillover logic, cooldowns, and promotions with version control.", icon: Settings2 },
  { title: "Analytics spine", description: "Dashboards benchmark queue health, cycle velocity, attrition, and SKU contribution in real time.", icon: BarChart3 },
  { title: "Enablement hub", description: "Serve guided scripts, calculators, and learning paths aligned to matrix milestones.", icon: Users }
];

const JOURNEYS: Journey[] = [
  { stage: "Enrollment & placement", description: "A promoter signs, clears compliance, and is auto-placed based on sponsor rules.", focus: "Leaders preview impact on their matrix, spillover commitments, and product mix in real time.", icon: Compass },
  { stage: "Qualification checkpoints", description: "Autoship, training, and compliance steps determine when seats activate.", focus: "Dashboards flag stalled legs so support teams intervene before the queue backs up.", icon: GaugeCircle },
  { stage: "Cycle completion & re-entry", description: "Matrices close, payouts execute, and re-entries trigger with configured cooldowns.", focus: "Finance, compliance, and leaders review receipts, recognition, and new queue positions in one place.", icon: Target }
];

const ROADMAP: RoadmapStep[] = [
  { phase: "Discovery & blueprint", duration: "Week 1", activities: ["Document compensation objectives, placement policies, and regulatory constraints.", "Ingest historic spreadsheets or statements to map carryover and promo rules.", "Define analytics baselines for queue velocity, re-entry rates, and churn."], icon: CalendarRange },
  { phase: "Configuration & simulation", duration: "Weeks 2-4", activities: ["Build matrix rules, spillover logic, and cooldown timers in staging.", "Run scenario simulations with finance, compliance, and leader councils.", "Validate tax, invoicing, and payout integrations before go-live."], icon: Settings2 },
  { phase: "Enablement & launch", duration: "Weeks 5-6", activities: ["Publish dashboards, calculators, and enablement paths to the field portal.", "Activate monitoring packs for queue saturation, churn spikes, and compliance exceptions.", "Coordinate go-live war rooms with support SLAs and escalation playbooks."], icon: Rocket }
];

export const CTA_POINTS: string[] = [
  "Automate forced-matrix placements with audit-ready controls.",
  "Give leaders real-time queue dashboards and re-entry forecasts.",
  "Blend promotions, loyalty wallets, and compliance guardrails without spreadsheets.",
  "Integrate CRM, PSP, tax, and learning stacks around the auto-fill plan."
];

export const CHECKLIST_ITEMS: { icon: IconType; text: string }[] = [
  { icon: ShieldCheck, text: "Compliance tests cover auto-placement, payouts, and documentation workflows." },
  { icon: BarChart3, text: "Dashboards track queue velocity, cycle streaks, and inventory triggers." },
  { icon: GaugeCircle, text: "Field alerts keep leaders on pace to close cycles before overflow builds." }
];

export const heroMetrics = HERO_METRICS;
export const mechanics = MECHANICS;
export const pillars = PILLARS;
export const examples = EXAMPLES;
export const blueprint = BLUEPRINT;
export const journeys = JOURNEYS;
export const roadmap = ROADMAP;

export const autoFillPlanContent: PlanFeatureContent = {
  hero: {
    badge: "MLM Plans",
    title: "Auto Fill MLM Software",
    description: "Cloud MLM software develops so many Auto fill Plan MLM Software for small and large scale companies we have a professional team having deep knowledge in MLM plans. All our clients are happy with our plans and services.",
    primaryCta: "Book This plan",
    secondaryCta: "See the flow simulator",
    metrics: HERO_METRICS,
  },
  features: [],
  faq: {
    heading: "Frequently asked questions",
    description: "Answer the top concerns from founders, finance teams, compliance officers, and field leaders evaluating an auto fill rollout.",
    items: [
      { question: "How do we prevent queue bottlenecks when enrolment spikes?", answer: "Smart throttles, spillover prioritisation, and cooldown timers keep the queue moving. Leaders receive alerts when certain legs require support or when promoters approach re-entry." },
      { question: "Can auto-fill placements respect geography or enrolment source?", answer: "Yes. Configure placement tiers by geography, pack type, or lead source. Overrides and manual placements still run through the same audit trail, so nothing happens off the books." },
      { question: "What compliance guardrails are built in?", answer: "AML checks, GST/VAT validation, FTC cooling-off rules, and document requests can all block payouts until cleared. Every action records who approved it and when." },
      { question: "How are re-entries managed when a matrix closes?", answer: "Re-entry logic follows your configured cooldowns and placement priorities. The system tracks re-entry history, new queue positions, and any bonus multipliers applied." },
      { question: "Can you migrate us off spreadsheets quickly?", answer: "Our migration kits import historical matrices, carryover balances, and promo data. Dry runs highlight discrepancies so you launch with confidence." }
    ]
  },
  cta: {
    heading: "Purchase AI-Powered Cloud MLM Software Today!",
    description: "Achieve MLM success with smart AI-driven tools! Automate, manage, and grow your network effortlessly. Buy now and scale your business!",
    buttonText: "Buy Now",
    secondaryCta: "Try Demo",
    trustIndicators: ["Fast implementation", "Expert support", "Proven results"]
  }
};
