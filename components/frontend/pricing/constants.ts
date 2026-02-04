import type { ComponentType } from "react";
import {
  BadgeCheck,
  CalendarClock,
  FileCheck,
  Globe,
  Handshake,
  ShieldCheck,
  Sparkles,
  Timer,
  Workflow
} from "lucide-react";

type IconType = ComponentType<{ className?: string }>;

export interface HeroMetric {
  title: string;
  value: string;
  detail: string;
  icon: IconType;
}

export interface ValueProof {
  title: string;
  detail: string;
  icon: IconType;
}

export interface Plan {
  name: string;
  price: string;
  description: string;
  svg: string;
  outcome: string;
  deliveryWindow: string;
  highlights: string[];
  cta: {
    label: string;
    href: string;
  };
}

export interface MatrixRow {
  deliverable: string;
  launch: string;
  scale: string;
  enterprise: string;
}

export interface TimelineStep {
  title: string;
  detail: string;
  duration: string;
  icon: IconType;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const HERO_METRICS: HeroMetric[] = [
  {
    title: "Average go-live",
    value: "62 days",
    detail: "Signed SOW → first payout",
    icon: Timer
  },
  {
    title: "Integrations launched",
    value: "120+",
    detail: "ERP, CRM, tax connectors",
    icon: Workflow
  },
  {
    title: "Implementation satisfaction",
    value: "97%",
    detail: "Five-continent delivery score",
    icon: BadgeCheck
  }
];

export const VALUE_PROOFS: ValueProof[] = [
  {
    title: "Procurement-ready deliverables",
    detail: "Line-item pricing, acceptance criteria, and legal-ready documentation packaged for approvals.",
    icon: FileCheck
  },
  {
    title: "Global readiness",
    detail: "Multi-market, currency, and tax scenarios validated before you commit a signature.",
    icon: Globe
  },
  {
    title: "Advisor partnership",
    detail: "Compensation scientists and automation engineers shape every estimate alongside your team.",
    icon: Handshake
  }
];

export const PLANS: Plan[] = [
  {
    name: "Launch Lab",
    price: "$28k",
    description:
      "Validate a single compensation blueprint and onboard a focused field cohort with concierge guidance.",
    svg: "/icons/plan-launch.svg",
    outcome: "Pilot-ready in as little as 45 days",
    deliveryWindow: "30 – 45 days",
    highlights: [
      "Single compensation model configured and validated",
      "Pilot portals with enrolment + payout dashboards",
      "Six months of concierge support included"
    ],
    cta: {
      label: "Pair with estimator",
      href: "#pricing-builder"
    }
  },
  {
    name: "Growth Engine",
    price: "$48k",
    description:
      "Roll out multi-market automation, layered compensation, and compliance workflows at scale.",
    svg: "/icons/plan-growth.svg",
    outcome: "Global scale-ready in 70 days",
    deliveryWindow: "45 – 70 days",
    highlights: [
      "Up to three compensation variants",
      "Automation journeys with payment + tax connectors",
      "Finance and leadership analytics workspace"
    ],
    cta: {
      label: "Design your rollout",
      href: "#pricing-consult"
    }
  },
  {
    name: "Enterprise Blueprint",
    price: "Custom",
    description:
      "Architect bespoke integrations, governance, and analytics for complex, multi-entity organisations.",
    svg: "/icons/plan-enterprise.svg",
    outcome: "Enterprise pod embedded with your PMO",
    deliveryWindow: "90+ days",
    highlights: [
      "Unlimited compensation blueprints + localisation",
      "Data residency + advanced compliance automation",
      "Dedicated solution architect, automation, and compliance pod"
    ],
    cta: {
      label: "Request executive briefing",
      href: "#speak-to-us"
    }
  }
];

export const PROCUREMENT_MATRIX: MatrixRow[] = [
  {
    deliverable: "Compensation design working sessions",
    launch: "3 workshops",
    scale: "6 workshops + modelling",
    enterprise: "Custom modelling sprints"
  },
  {
    deliverable: "Integrations & automation",
    launch: "Core payment + tax",
    scale: "ERP / CRM orchestration",
    enterprise: "Middleware + data lake"
  },
  {
    deliverable: "Governance & compliance",
    launch: "Policy starter kit",
    scale: "Multi-market compliance pack",
    enterprise: "Regulatory liaison programme"
  },
  {
    deliverable: "Analytics & reporting",
    launch: "Pilot dashboards",
    scale: "Leadership + finance workspace",
    enterprise: "Board & investor scorecards"
  },
  {
    deliverable: "Rollout squad",
    launch: "Solution lead + success advisor",
    scale: "Solution pod + automation engineer",
    enterprise: "Embedded pod with compliance analyst"
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    title: "Blueprint + estimations",
    detail: "Confirm KPIs, compensation rules, and estimator assumptions with executives.",
    duration: "Week 0 – 2",
    icon: CalendarClock
  },
  {
    title: "Configuration sprints",
    detail: "Compensation, portals, and automation journeys iterated with weekly playback.",
    duration: "Week 2 – 6",
    icon: Workflow
  },
  {
    title: "Validation + compliance",
    detail: "UAT, load, and regulatory reviews executed with playbooks and oversight.",
    duration: "Week 6 – 8",
    icon: BadgeCheck
  },
  {
    title: "Launch + hypercare",
    detail: "Embedded pod manages communications, reporting cadences, and optimisation.",
    duration: "Week 8 – 12",
    icon: ShieldCheck
  }
];

export const FAQS: FAQ[] = [
  {
    question: "Is the licence a recurring subscription?",
    answer:
      "Cloud MLM Software pricing is a one-time licence. You own the platform. Optional managed services, infrastructure, or extended concierge packages can be renewed annually as needed."
  },
  {
    question: "Can we phase markets and product launches?",
    answer:
      "Yes. Every engagement includes a phased launch roadmap with scenario modelling so you can unlock markets, products, or segments when your leadership is ready."
  },
  {
    question: "How quickly do we receive an investment brief?",
    answer:
      "After you share an estimator scenario, a pricing advisor prepares a procurement-ready brief with milestones, payment cadence, and assumptions within one business day."
  },
  {
    question: "Do you integrate with our existing systems?",
    answer:
      "Integrations are core. We bring accelerators for commerce, payments, tax, ERP, and CRM, and design bespoke middleware for enterprise data requirements."
  }
];
