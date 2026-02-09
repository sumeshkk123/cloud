import { ArrowUpRight, CheckCircle, Shield, Sparkles, Workflow } from "lucide-react";
import {
  ChatsCircle,
  Lightning,
  PaperPlaneTilt,
  Robot,
  RocketLaunch,
  SlidersHorizontal,
} from "@phosphor-icons/react";
import type { PricingSubPageContent } from "@/components/frontend/pricing/sub-page";

export const autoResponderModuleContent: PricingSubPageContent = {
  hero: {
    badge: "Pricing intelligence for modern MLM automation",
    title: "Auto Responder Module pricing and delivery blueprint.",
    description:
      "Activate intelligent nurture journeys that keep distributors productive and customers loyal. Our pricing packages bundle strategy, configuration, and optimisation so your teams realise value from day one and keep momentum in every market.",
    primaryCta: "Book a pricing session",
    secondaryCta: "Compare all modules",
    metrics: [
      {
        label: "Automated journeys launched",
        value: "2.1M+",
        description:
          "Campaigns orchestrated by Cloud MLM Software auto responders across 42 markets.",
        icon: PaperPlaneTilt,
      },
      {
        label: "Average activation lift",
        value: "38%",
        description:
          "Field productivity increase within the first 90 days of automation rollout.",
        icon: Lightning,
      },
      {
        label: "AI-personalised touchpoints",
        value: "120+ data signals",
        description:
          "Context-aware prompts that adapt to rank, product affinity, and compliance status.",
        icon: Robot,
      },
      {
        label: "Verified deliverability score",
        value: "99.3%",
        description:
          "Infrastructure hardened for high-volume, reputation-safe outbound messaging.",
        icon: Shield,
      },
    ],
  },
  sections: [
    {
      type: "capabilities",
      heading: "Intelligent automation with enterprise-grade guardrails.",
      description:
        "We design each engagement to meet growth, compliance, and experience objectives. The Auto Responder Module combines multi-channel orchestration with AI-powered adaptations so you can modernise communications without adding manual overhead.",
      callout: {
        title: "Thought-leadership baked into every module",
        body: "Cloud MLM Software's automation practice synthesises insights from hundreds of deployments, ensuring the module ships with benchmarked playbooks, governed experimentation, and AI-readiness from day one.",
        icon: CheckCircle,
      },
      items: [
        {
          title: "Revenue-ready nurture playbooks",
          description:
            "Blended email, SMS, and in-app sequences move prospects from curiosity to qualified enrolments with minimal manual effort.",
          bullets: [
            "Launch packs tailored to product families and territories",
            "Event-triggered sequences for onboarding, renewals, and rank-ups",
            "Automated hand-offs between marketing, sales, and compliance",
          ],
          icon: Sparkles,
        },
        {
          title: "Governed automation at scale",
          description:
            "Embedded consent guardrails, review workflows, and audit trails keep programs compliant while enabling rapid iteration.",
          bullets: [
            "Regional preference centers and double opt-in options",
            "AI-assisted content suggestions with legal annotations",
            "Version control with rollback-ready campaign snapshots",
          ],
          icon: Shield,
        },
        {
          title: "Insight that fuels optimisation",
          description:
            "Unified analytics trace revenue, retention, and support impact back to every touchpoint so leadership can invest with confidence.",
          bullets: [
            "Real-time dashboards for marketing, operations, and finance",
            "Engagement scoring that feeds incentives and promotions",
            "Predictive health indicators for cohorts and geographies",
          ],
          icon: Workflow,
        },
      ],
    },
    {
      type: "roadmap",
      heading: "Deployment roadmap",
      description:
        "A collaborative delivery model keeps stakeholders aligned and accelerates sign-off, data readiness, and adoption. Each stage concludes with measurable artefacts and executive checkpoints.",
      outcomes: {
        title: "Outcomes you can expect",
        points: [
          "Automation aligned to growth strategies, retention goals, and compliance mandates.",
          "Executive-ready instrumentation that proves the value of each sequence.",
          "Continuous optimisation cycles supported by Cloud MLM Software specialists.",
        ],
      },
      stages: [
        {
          title: "Discovery & alignment",
          description:
            "Joint workshops capture messaging, compliance, and data requirements. We translate goals into sequencing logic and content themes.",
          duration: "Weeks 1-2",
          icon: ChatsCircle,
        },
        {
          title: "Configuration & simulation",
          description:
            "Our automation engineers configure journeys, integrate data sources, and run volume simulations to validate throughput and guardrails.",
          duration: "Weeks 3-5",
          icon: SlidersHorizontal,
        },
        {
          title: "Enablement & optimisation",
          description:
            "We orchestrate go-live, deliver playbooks, and embed optimisation cadences so your teams can iterate with confidence.",
          duration: "Weeks 6-8",
          icon: RocketLaunch,
        },
      ],
    },
    {
      type: "packages",
      sectionTitle: "Packages",
      heading: "Pricing packages that scale with your ambition.",
      description:
        "Select the package that matches your automation maturity. Every engagement includes governance, enablement, and analytics designed for MLM and direct selling organisations.",
      ctaLabel: "Discuss this package",
      items: [
        {
          title: "Launch accelerator",
          price: "$14k fixed",
          description:
            "Perfect for organisations rolling out their first automated nurture journeys or revitalising legacy workflows.",
          outcomes: [
            "Two priority customer or distributor journeys configured end-to-end",
            "Channel strategy with deliverability and compliance baselines",
            "Launch dashboard with KPI guardrails and escalation protocols",
          ],
          icon: PaperPlaneTilt,
        },
        {
          title: "Growth optimiser",
          price: "$24k fixed",
          description:
            "Designed for teams expanding automation into multiple regions, products, or lifecycle programs.",
          outcomes: [
            "Five multi-channel sequences with localisation support",
            "Data orchestration across CRM, e-commerce, and LMS platforms",
            "A/B testing framework with executive-ready reporting models",
          ],
          icon: Lightning,
        },
        {
          title: "Enterprise blueprint",
          price: "Custom SOW",
          description:
            "Tailored for complex governance, multi-brand portfolios, or organisations integrating advanced AI copilots.",
          outcomes: [
            "Enterprise consent architecture with legal and security sign-off",
            "AI-assisted personalisation models trained on your datasets",
            "Joint optimisation office with quarterly innovation sprints",
          ],
          icon: Robot,
        },
      ],
    },
    {
      type: "enhancements",
      heading: "Extend the module with AI-guided enhancements.",
      description:
        "Keep your automation program ahead of the curve with optional accelerators focused on intelligence, adoption, and transparent reporting.",
      callout:
        "Enhancements are scoped as fixed outcomes with rapid delivery windows. We collaborate with your marketing, enablement, and data science teams to embed measurable improvements.",
      items: [
        {
          title: "Conversational AI co-pilots",
          description:
            "Deploy bilingual agent assistants that surface the next best action and generate compliant responses instantly.",
          icon: Robot,
        },
        {
          title: "Journey intelligence dashboards",
          description:
            "Executive and regional scorecards load real-time conversion, retention, and revenue attribution insights.",
          icon: Sparkles,
        },
        {
          title: "Field enablement playbooks",
          description:
            "Role-based training, video scripts, and escalation guides accelerate adoption and keep teams aligned.",
          icon: ArrowUpRight,
        },
      ],
    },
  ],
  faq: {
    heading: "Auto Responder Module FAQs",
    description:
      "Get clarity on deployment expectations, investment models, and technical requirements before we begin.",
    items: [
      {
        question: "How long does it take to deploy the Auto Responder Module?",
        answer:
          "Most clients launch their initial automation programmes within eight weeks. Timelines accelerate when data sources, consent policies, and core messaging are approved early in the engagement.",
      },
      {
        question: "What internal resources are required?",
        answer:
          "We partner with a cross-functional taskforce that typically includes marketing, compliance, IT, and field leadership. Your team focuses on approvals and knowledge transfer while Cloud MLM Software handles configuration and orchestration.",
      },
      {
        question: "Can we integrate existing marketing tools?",
        answer:
          "Yes. The module includes API and native connectors for CRM, e-commerce, LMS, and analytics platforms. We map data flow and event triggers so automation augments your current stack instead of replacing it.",
      },
      {
        question: "How is pricing structured for additional journeys?",
        answer:
          "Additional sequences can be scoped as fixed-fee work packages or absorbed into a managed optimisation retainer. Both models include measurement, iteration, and governance support.",
      },
    ],
  },
  cta: {
    heading: "Ready to orchestrate outcomes with intelligent automation?",
    description:
      "Share your automation vision and constraints. We'll prepare a tailored proposal, timeline, and measurement framework grounded in Cloud MLM Software's thought leadership.",
    primaryCta: "Schedule consultation",
    secondaryCta: "Explore pricing hub",
    cardTitle: "Connect with our automation architects",
    cardBody:
      "Receive a curated walkthrough, cost breakdown, and optimisation roadmap aligned to your organisation's growth objectives.",
  },
};
