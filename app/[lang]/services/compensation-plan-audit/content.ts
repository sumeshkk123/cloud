import {
  BarChart3,
  ClipboardCheck,
  FileSpreadsheet,
  Lightbulb,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import type { ServiceFeatureContent } from "@/components/frontend/services/subpage";

export const compensationPlanAuditContent: ServiceFeatureContent = {
  hero: {
    badge: "Compensation plan audit",
    title: "Compensation Plan Audit",
    description:
      "Elevate your MLM compensation strategy with the industry's most trusted audit partners. Cloud MLM Software delivers deep strategic, financial, and compliance intelligence so your compensation plan inspires the field, satisfies regulators, and protects profitability worldwide.",
    primaryCta: "Request a demo",
    secondaryCta: "Explore all features",
    metrics: [
      {
        label: "Plans audited",
        value: "480+",
        detail: "Strategic, financial, and compliance intelligence for MLM compensation plans worldwide.",
      },
      {
        label: "Markets benchmarked",
        value: "38",
        detail: "Benchmark your plan against global leaders and industry best practices.",
      },
      {
        label: "Average ROI uplift",
        value: "21%",
        detail: "Average margin improvement realised by customers after implementing audit recommendations.",
      },
    ],
  },
  intro: {
    badge: "Audit services",
    heading: "Thought leadership pillars guiding every audit",
    paragraphs: [
      "Cloud MLM Software combines decades of MLM expertise with modern analytics to guide the most respected brands in the industry. Partner with the leading MLM software provider to audit, optimise, and future-proof your compensation plan.",
      "Every audit concludes with tailored artefacts that translate insights into board-ready decisions and configuration-ready actions.",
    ],
    partnerCard: {
      badge: "What we deliver",
      heading: "Strategic, financial, and compliance intelligence",
      points: [
        "Voice-of-field interviews and executive workshops",
        "Multi-ledger financial simulations and scenario modelling",
        "FTC, DSA, GDPR, and jurisdictional compliance reviews",
        "Board-ready narrative and prioritised roadmap",
        "Configuration-ready specifications for your platform",
      ],
    },
  },
  features: [
    {
      icon: Lightbulb,
      title: "Strategic alignment",
      description:
        "Ensure your compensation plan amplifies brand positioning, product strategy, and go-to-market goals. Voice-of-field interviews, product and pricing mapping to reward structures, competitor and market benchmark analysis.",
    },
    {
      icon: BarChart3,
      title: "Financial intelligence",
      description:
        "Model profitability, cash flow, and incentive spend across scenarios before making changes. Multi-ledger financial simulations, breakage and overpayment diagnostics, KPIs aligned to board, finance, and field objectives.",
    },
    {
      icon: ShieldCheck,
      title: "Regulatory resilience",
      description:
        "Reduce exposure with proactive compliance, audit evidence, and risk mitigation guidance. FTC, DSA, GDPR, and jurisdictional reviews, income disclosure and claims guardrails, action plans for audits and regulator requests.",
    },
  ],
  importanceSection: {
    badge: "DELIVERABLES YOUR TEAMS RECEIVE",
    heading: "Deliverables your teams receive",
    subheading:
      "Every audit concludes with tailored artefacts that translate insights into board-ready decisions and configuration-ready actions.",
    paragraphs: [
      "We co-design recommendations with your stakeholders, map them to implementation effort, and deliver configuration-ready specifications for the Cloud MLM Software platform or your existing systems. Many customers engage us ahead of FTC or market-entry reviews; we package evidence, incident response guidance, and regulator briefing materials as part of the engagement.",
    ],
    imageSrc: "/images/dashboard-deign.webp",
    imageAlt: "Cloud MLM Software – Compensation plan audit deliverables",
    cards: [
      {
        icon: LineChart,
        title: "Executive insights deck",
        description:
          "Board-ready narrative outlining strategic findings, opportunities, and quick wins. Strategic positioning scorecard, risk and opportunity heatmap, prioritised roadmap with investment tiers.",
      },
      {
        icon: FileSpreadsheet,
        title: "Financial & scenario model",
        description:
          "Dynamic workbooks to stress-test plan adjustments across cohorts, rank, and market. Cohort and market profitability analysis, sensitivity modelling, cash-flow and breakage forecasts.",
      },
      {
        icon: ClipboardCheck,
        title: "Compliance command brief",
        description:
          "Audit-ready evidence and policy recommendations to keep regulators satisfied. Jurisdictional compliance checklist, marketing and claims governance playbook, incident response and escalation workflows.",
      },
    ],
  },
  benefitsSection: {
    badge: "Insight highlights",
    heading: "Insight highlights from recent audits",
    description:
      "Cloud MLM Software's compensation plan audits regularly deliver measurable performance, compliance, and satisfaction improvements.",
    items: [
      {
        title: "Profitability guardrails",
        description:
          "Average margin improvement of 8% realised by customers after implementing audit recommendations.",
      },
      {
        title: "Compliance preparedness",
        description:
          "100% of clients passing FTC and jurisdictional audits after adopting Cloud MLM Software governance playbooks.",
      },
      {
        title: "Field satisfaction",
        description:
          "Increase of +24 in field promoter satisfaction (NPS) when plans balance fairness, transparency, and opportunity.",
      },
    ],
  },
  whyChooseSection: {
    badge: "How the engagement unfolds",
    heading: "How the engagement unfolds",
    description:
      "A focused six-week programme delivers rigorous analysis while keeping your stakeholders aligned and informed.",
    items: [
      {
        number: "01",
        title: "Discovery & baselining",
        description:
          "Interviews, data ingestion, and plan documentation review to map current-state dynamics. Weeks 1–2.",
      },
      {
        number: "02",
        title: "Analysis & modelling",
        description:
          "Financial diagnostics, scenario modelling, and compliance assessments guided by Cloud MLM benchmarks. Weeks 3–4.",
      },
      {
        number: "03",
        title: "Recommendations & roadmap",
        description:
          "Executive workshops to align on changes, readiness, and implementation plan. Weeks 5–6.",
      },
    ],
  },
  extraListSections: [
    {
      badge: "Audit pillars",
      heading: "Thought leadership pillars guiding every audit",
      description: "Cloud MLM Software combines decades of MLM expertise with modern analytics.",
      items: [
        "Strategic alignment – brand positioning, product strategy, go-to-market goals",
        "Financial intelligence – profitability, cash flow, incentive spend modelling",
        "Regulatory resilience – FTC, DSA, GDPR, jurisdictional compliance",
      ],
    },
  ],
  faq: {
    badge: "FAQ",
    heading: "Frequently asked questions",
    description:
      "Answers for product, finance, and compliance leaders evaluating a Cloud MLM Software compensation plan audit.",
    items: [
      {
        question: "What data is required to start the audit?",
        answer:
          "We typically request plan documentation, payout exports, rank progression reports, promotional calendars, and compliance records. Our team provides a secure template and can integrate with your data warehouse for efficiency.",
      },
      {
        question: "How does Cloud MLM Software ensure recommendations are actionable?",
        answer:
          "We co-design recommendations with your stakeholders, map them to implementation effort, and deliver configuration-ready specifications for the Cloud MLM Software platform or your existing systems.",
      },
      {
        question: "Can the audit support upcoming regulatory reviews?",
        answer:
          "Yes. Many customers engage us ahead of FTC or market-entry reviews. We package evidence, incident response guidance, and regulator briefing materials as part of the engagement.",
      },
    ],
  },
  cta: {
    heading: "Ready to benchmark your plan against global leaders?",
    description:
      "Join the organisations that trust Cloud MLM Software to safeguard profitability, delight the field, and satisfy regulators worldwide. Schedule a consultation or see audit insights in action.",
    buttonText: "Schedule a consultation",
    secondaryCta: "Explore all features",
    trustIndicators: ["480+ plans audited", "38 markets", "100% compliance readiness"],
  },
};
