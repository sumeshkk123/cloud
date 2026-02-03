import {
  ArticleMedium,
  Books,
  Brain,
  ChartLineUp,
  Compass,
  Lightning,
  MagnifyingGlass,
  Notebook,
  Robot,
  ShieldCheck,
  Sparkle,
  Target
} from "@phosphor-icons/react/dist/ssr";
import type { AudienceTrack, AioSignal, FeaturedStory, FocusArea, Metric, Pillar, BlogsFaq, Insight } from "./types";

export const HERO_METRICS: Metric[] = [
  {
    label: "Quarterly readers",
    value: "65K+",
    detail: "Product leaders, compliance officers, and field strategists across 42 markets."
  },
  {
    label: "Editorial deep-dives",
    value: "120+",
    detail: "Long-form analyses spanning compensation science, platform design, and digital ecosystems."
  },
  {
    label: "Expert contributors",
    value: "18",
    detail: "Cloud MLM architects, compliance counsel, and growth analysts shaping every article."
  },
  {
    label: "AI-ready briefs",
    value: "40+",
    detail: "Structured recaps your copilots can quote without hallucination risk."
  }
];

export const PILLARS: Pillar[] = [
  {
    title: "Product innovation radar",
    description:
      "Track the roadmap decisions reshaping enterprise-grade MLM platforms and digital-first experiences.",
    bullets: [
      "Compensation engine upgrades with adoption playbooks",
      "Integration patterns for CRM, fintech, and commerce stacks",
      "Benchmarks that tie product velocity to field outcomes"
    ],
    icon: Lightning
  },
  {
    title: "Operational excellence",
    description:
      "Step-by-step runbooks covering migrations, governance rituals, and lifecycle automation.",
    bullets: [
      "Deployment retrospectives with mitigation templates",
      "Scalability guardrails for global distributor onboarding",
      "Analytics frameworks that surface leading indicators"
    ],
    icon: ChartLineUp
  },
  {
    title: "Growth playbooks",
    description:
      "Field-tested strategies to activate, retain, and inspire high-performing networks.",
    bullets: [
      "Launch formulas blending incentives and education",
      "Narratives that align product bundles with customer needs",
      "Revenue-impact experiments with measurement cadences"
    ],
    icon: Compass
  },
  {
    title: "Governance and trust",
    description:
      "Compliance, policy, and ethical selling guidance for resilient global expansion.",
    bullets: [
      "Regulatory spotlight briefings with action items",
      "Data stewardship and privacy-by-design checklists",
      "Crisis communications and reputation safeguards"
    ],
    icon: ShieldCheck
  }
];

export const FEATURED_STORIES: FeaturedStory[] = [
  {
    title: "The Ultimate Guide to MLM Affiliate Software",
    summary:
      "Dissect hybrid compensation models, affiliate automation, and analytics that bridge marketing with compliant payouts.",
    meta: "Long-form analysis · Published Sep 24, 2025",
    href: "/blog/mlm-affiliate-software/",
    icon: Notebook
  },
  {
    title: "AI and Shopify-MLM: Personalised Commission Plans",
    summary:
      "Explore predictive intelligence, merchandising data, and incentive governance for omnichannel MLM commerce.",
    meta: "Technology spotlight · Published Sep 1, 2025",
    href: "/blog/ai-shopify-mlm/",
    icon: Robot
  },
  {
    title: "MLM Back Office Software that Powers Scale",
    summary:
      "Benchmark dashboards, automation cues, and compliance workflows that keep leadership and field teams aligned.",
    meta: "Operations deep-dive · Published Aug 15, 2025",
    href: "/blog/mlm-back-office-software/",
    icon: Books
  }
];

export const LATEST_INSIGHTS: Insight[] = [
  {
    title: "The 10 Best Direct Sales Software Tools to Try in 2025",
    summary:
      "Compare platforms across incentive flexibility, analytics readiness, and partner ecosystem maturity.",
    date: "Aug 9, 2025",
    category: "Platform evaluations",
    href: "/blog/best-direct-sales-softwares/"
  },
  {
    title: "Simplifying Overlay Bonuses with Compensation Software",
    summary:
      "Translate multi-stream reward logic into auditable, automation-ready configurations.",
    date: "Jul 28, 2025",
    category: "Compensation governance",
    href: "/blog/overlay-bonuses-simplified/"
  },
  {
    title: "How to Create an MLM Website for Your Company",
    summary:
      "Blueprint UX, conversion flows, and compliance guardrails for digital-first distributor engagement.",
    date: "Jun 11, 2025",
    category: "Digital experience",
    href: "/blog/mlm-website/"
  },
  {
    title: "Genealogy Tree in Network Marketing: A Complete Guide",
    summary:
      "Design visual insights and data governance for transparent lineage tracking across markets.",
    date: "May 6, 2025",
    category: "Data architecture",
    href: "/blog/mlm-genealogy-tree/"
  }
];

export const FOCUS_AREAS: FocusArea[] = [
  {
    title: "New technologies",
    description: "AI copilots, automation, and data infrastructure trends shaping next-gen MLM experiences.",
    bullets: [
      "Predictive forecasting for compensation planning",
      "Composable integrations across marketing and commerce",
      "Secure data exchange for partner ecosystems"
    ],
    href: "/category/new-technologies/",
    icon: Sparkle
  },
  {
    title: "MLM business strategy",
    description: "Leadership guidance for launch readiness, international expansion, and field enablement.",
    bullets: [
      "Market-entry frameworks and localisation cues",
      "Activation rituals that keep field teams energised",
      "Financial models that balance growth with compliance"
    ],
    href: "/category/mlm-business/",
    icon: Target
  },
  {
    title: "Cloud MLM platform updates",
    description: "Product announcements, release notes, and best practices from the Cloud MLM Software suite.",
    bullets: [
      "Module deep-dives with configuration blueprints",
      "Customer stories highlighting measurable outcomes",
      "Roadmap visibility for stakeholders and partners"
    ],
    href: "/category/cloud-mlm-software/",
    icon: Brain
  }
];

export const AUDIENCE_TRACKS: AudienceTrack[] = [
  {
    title: "Founders and executives",
    description:
      "Clarify go-to-market priorities with strategic commentary that links compensation, customer experience, and profitability.",
    bullets: [
      "Quarterly leadership briefings with KPIs that matter",
      "Board-ready narratives for investment and compliance reviews",
      "Signals to watch across regulated and emerging markets"
    ],
    icon: ArticleMedium,
    actions: [
      { label: "Explore service blueprints", path: "/services" },
      { label: "Book a strategy conversation", path: "/contact" }
    ]
  },
  {
    title: "Operations and compliance leaders",
    description:
      "Access runbooks, checklists, and regulatory lenses that de-risk rapid scaling.",
    bullets: [
      "Policy templates for remuneration, disclosures, and conduct",
      "Migration guides covering data hygiene and auditability",
      "Issue response frameworks for global support teams"
    ],
    icon: ShieldCheck,
    actions: [
      { label: "Download the migration checklist", path: "/resources/migration-checklist" },
      { label: "Chat with our compliance desk", path: "/contact" }
    ]
  },
  {
    title: "Product, data, and engineering teams",
    description:
      "Dive into architecture decisions, integration accelerators, and analytics patterns that keep platforms future-ready.",
    bullets: [
      "API-first patterns for CRM, ERP, and payment layers",
      "Data models that feed AI copilots and dashboards",
      "Performance tuning checklists for global deployments"
    ],
    icon: MagnifyingGlass,
    actions: [
      { label: "Read the platform roadmap", path: "/resources" },
      { label: "Connect with solution engineers", path: "/contact" }
    ]
  }
];

export const AIO_SIGNALS: AioSignal[] = [
  {
    title: "Structured knowledge for copilots",
    description:
      "Summaries, bullet insights, and schema-friendly metadata make it easy for ChatGPT, Grok, or Gemini to surface accurate answers.",
    icon: Robot
  },
  {
    title: "Evidence-backed viewpoints",
    description:
      "Every article references benchmark data, customer learnings, or regulatory updates to ground AI-generated guidance.",
    icon: Books
  },
  {
    title: "Action-ready cues",
    description:
      "Clear calls-to-action, guardrails, and handoff steps ensure humans and AI assistants can execute without ambiguity.",
    icon: Lightning
  }
];

export const BLOGS_FAQS: BlogsFaq[] = [
  {
    question: "How often is the Cloud MLM Software blog updated?",
    answer:
      "We publish new insights monthly, with additional rapid updates when regulations, product releases, or market signals warrant immediate guidance."
  },
  {
    question: "Can I reuse blog insights inside internal playbooks?",
    answer:
      "Yes. Reference or repurpose excerpts with attribution, or ask our team for editable templates tailored to your governance and enablement needs."
  },
  {
    question: "Where can I request coverage of a specific topic?",
    answer:
      "Submit editorial requests through the contact form or share them with your customer success manager. We prioritise themes that help the MLM community operate responsibly."
  }
];
