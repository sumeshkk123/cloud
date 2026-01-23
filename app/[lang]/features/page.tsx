import type { Metadata } from "next";
import Link from "next/link";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Bot,
  Check,
  Globe2,
  ShieldCheck,
  Workflow
} from "lucide-react";
import {
  FeaturesHeroSection,
  FeaturesSectionNav,
  FeatureSection,
  type FeatureHighlight
} from "@/components/frontend/features";

export const dynamic = "force-static";

type HeroMetric = {
  label: string;
  value: string;
  detail: string;
};

type FeatureTrack = {
  title: string;
  description: string;
  highlights: string[];
  icon: "platform" | "automation" | "governance" | "ai";
};

type Milestone = {
  stage: string;
  title: string;
  description: string;
  outcome: string;
};


type FeatureSectionNavItem = {
  label: string;
  href: string;
};

type FeatureFaq = {
  question: string;
  answer: string;
};

type FeatureBundle = {
  title: string;
  description: string;
  modules: string[];
  outcome: string;
};

type PersonaFeature = {
  persona: string;
  role: string;
  summary: string;
  priorities: string[];
};

type SuccessProgram = {
  title: string;
  description: string;
  bullets: string[];
};


const FEATURE_SECTION_NAV: FeatureSectionNavItem[] = [
  { label: "Compensation", href: "#compensation-features" },
  { label: "AI", href: "#ai-features" },
  { label: "Core", href: "#core-features" },
  { label: "Performance", href: "#performance-features" },
  { label: "Security", href: "#security-features" },
  { label: "Commerce", href: "#commerce-features" },
  { label: "Integrations", href: "#integration-features" },
  { label: "Enablement", href: "#enablement-features" },
  { label: "Unique", href: "#unique-features" },
  { label: "Suites", href: "#feature-suite" },
  { label: "Personas", href: "#persona-features" },
  { label: "Success", href: "#success-programs" },
  { label: "FAQ", href: "#feature-faq" }
];

const COMPENSATION_FEATURES: FeatureHighlight[] = [
  {
    title: "Compensation plan studio",
    description:
      "Model binary, matrix, unilevel, board, and hybrid plans with governance-ready workflows that keep finance and compliance aligned.",
    bullets: [
      "Drag-and-drop rules, bonuses, and rank logic",
      "Version control with sandbox approvals",
      "Scenario simulations before payroll lock"
    ]
  },
  {
    title: "Commission operations",
    description:
      "Schedule weekly, monthly, and incentive-based payouts with automated validations, deductions, and audit-ready exports.",
    bullets: [
      "Automated period closing and adjustments",
      "Ledger sync with ERP and banking partners",
      "Exception routing for finance sign-off"
    ]
  },
  {
    title: "Leadership & pool management",
    description:
      "Fund, allocate, and reconcile executive bonuses, influencer pools, and incentive trips—all tracked inside Cloud MLM Software.",
    bullets: [
      "Pool eligibility dashboards",
      "Real-time funding projections",
      "Recognition feeds tied to payouts"
    ]
  },
  {
    title: "Tax, compliance, and KYC",
    description:
      "Collect documentation, apply withholding, and maintain locality-specific compliance artifacts with minimal manual effort.",
    bullets: [
      "Automated TDS/VAT handling per market",
      "Document vault with expiry alerts",
      "Country-specific onboarding workflows"
    ]
  }
];

const AI_FEATURES: FeatureHighlight[] = [
  {
    title: "Smart product recommendations",
    description:
      "Predict shopping intent and surface the most relevant autoship bundles, starter kits, and upsells across every storefront.",
    bullets: [
      "Learns from distributor, customer, and campaign history",
      "Boosts conversion with localized merchandising",
      "Feeds insights back into onboarding journeys"
    ],
    href: "/mlm-software-feature/ai-features"
  },
  {
    title: "Predictive commission forecasting",
    description:
      "Forecast bonuses, pools, and leadership payouts before payroll to protect margins and keep finance ahead of the curve.",
    bullets: [
      "Run what-if models on volume, rank, and carryover",
      "Alert finance to anomalies before payout lock",
      "Expose insights in rank and finance dashboards"
    ],
    href: "/mlm-software-feature/ai-commission-forecasting"
  },
  {
    title: "AI-powered smart recruiter",
    description:
      "Score leads, recommend outreach cadences, and spotlight rising field leaders so sales mentors can act faster.",
    bullets: [
      "Lead scoring adapts to regional performance",
      "Suggests scripts and follow-up tasks automatically",
      "Tracks progress across replicated sites and funnels"
    ],
    href: "/mlm-software-feature/ai-smart-recruiter"
  }
];

const COMMON_FEATURES: FeatureHighlight[] = [
  {
    title: "Highly extensible",
    description:
      "Customize layouts, navigation, and themes to keep every market on-brand without touching the core platform.",
    bullets: [
      "Theme and layout controls",
      "Plan templates and component libraries",
      "Role-aware navigation"
    ],
    href: "/mlm-software-feature/highly-extensible"
  },
  {
    title: "In-built e-wallet",
    description:
      "Consolidate commissions, incentives, and repurchase credits with built-in wallet automation and audit trails.",
    bullets: [
      "Move income between wallets instantly",
      "Support e-pin generation and spend controls",
      "Offer detailed transaction history"
    ],
    href: "/mlm-software-feature/in-built-e-wallet"
  },
  {
    title: "Multilingual translation system",
    description:
      "Go global with multi-language content, replicated sites, and communications delivered in the preferred locale.",
    bullets: [
      "Locale-aware templates",
      "Distributor language preferences",
      "Translation workflows"
    ],
    href: "/mlm-software-feature/multilingual-translational-system"
  },
  {
    title: "Multi-currency system",
    description:
      "Operate in dozens of currencies with automated conversions, localized pricing, and compliant payout logic.",
    bullets: [
      "Currency switching per user",
      "FX rules for payouts",
      "Pricing controls by market"
    ],
    href: "/mlm-software-feature/multi-currency-system"
  },
  {
    title: "Great support",
    description:
      "Launch with specialists on call and ongoing success programs spanning admin coaching, field enablement, and compliance.",
    bullets: [
      "24/7 ticketing and chat",
      "Implementation oversight",
      "Security and hosting management"
    ],
    href: "/mlm-software-feature/great-support"
  },
  {
    title: "Easy navigation",
    description:
      "Role-based dashboards, simple menus, and contextual search keep distributors, leaders, and admins productive.",
    bullets: [
      "Guided onboarding",
      "Quick actions for core tasks",
      "Adaptive menus by role"
    ],
    href: "/mlm-software-feature/easy-navigation"
  },
  {
    title: "Support & ticketing",
    description:
      "Centralize inquiries and escalations with SLA-based queues and reporting for every customer touchpoint.",
    bullets: [
      "Multi-channel intake",
      "Status and priority workflows",
      "Charts for backlog and resolution"
    ],
    href: "/mlm-software-feature/support-ticket-system-module"
  },
  {
    title: "SMS integration",
    description:
      "Trigger national and international SMS campaigns for onboarding, promotions, compliance, and alerts.",
    bullets: [
      "Multiple gateway support",
      "Template and personalization",
      "Journey-based sends"
    ],
    href: "/mlm-software-feature/sms-integration-internationalnational"
  },
  {
    title: "White label ready",
    description:
      "Rebrand the entire platform with your identity, domains, compliance messaging, and localized experience.",
    bullets: [
      "Full logo and palette control",
      "Localized content packs",
      "Partner and agency tooling"
    ],
    href: "/mlm-software-feature/white-label-mlm-software"
  }
];

const PERFORMANCE_FEATURES: FeatureHighlight[] = [
  {
    title: "Clean interface",
    description:
      "Modern UX keeps focus on the metrics and workflows that matter without clutter or training bloat.",
    bullets: ["Drag-and-drop dashboards", "Inline help and tours"],
    href: "/mlm-software-feature/clean-interface-and-easy-to-use"
  },
  {
    title: "Mobile friendly",
    description:
      "Responsive layouts deliver full functionality on phones and tablets with offline-friendly patterns.",
    bullets: ["Adaptive navigation", "Push-ready alerts"],
    href: "/mlm-software-feature/mobile-friendly-super-responsive-in-all-devices"
  },
  {
    title: "Improved page speed",
    description:
      "Aggressive caching, async assets, and optimized queries keep experiences fast even during peak volume.",
    bullets: ["Server-side rendering", "Real-time monitoring"],
    href: "/mlm-software-feature/improved-page-speed"
  },
  {
    title: "Dynamic compression",
    description:
      "Plan compression rules keep non-performing legs from blocking payouts while protecting true earners.",
    bullets: ["Binary and unilevel compatible", "Configurable eligibility"],
    href: "/mlm-software-feature/dynamic-compression-system"
  },
  {
    title: "Minified resources",
    description:
      "Bundled and minified assets reduce payload size and accelerate renders across global connections.",
    bullets: ["Optimized CSS/JS", "Deferred non-critical loads"],
    href: "/mlm-software-feature/minified-source-minified-resources"
  },
  {
    title: "Backend caching",
    description:
      "Smart cache layers cut database load and deliver consistent performance during enrollment spikes.",
    bullets: ["Granular controls", "Instant cache busting"],
    href: "/mlm-software-feature/backend-caching-technology"
  },
  {
    title: "Optimized everywhere",
    description:
      "Device-aware rendering ensures every page looks great and performs on any screen or OS.",
    bullets: ["Viewport detection", "Asset scaling"],
    href: "/mlm-software-feature/optimized-to-use-in-all-devices"
  },
  {
    title: "Web-based management",
    description:
      "Run the entire business from any browser with no thick-client installs or VPN requirements.",
    bullets: ["Responsive admin console", "Secure remote access"],
    href: "/mlm-software-feature/web-based-mlm-software"
  },
  {
    title: "Flexible integrations",
    description:
      "Connect commerce, CRM, BI, and communications platforms with prebuilt and API-level integrations.",
    bullets: ["REST and webhooks", "SDKs for custom apps"],
    href: "/mlm-software-feature/flexible-integration-with-various-platforms"
  },
  {
    title: "Powerfully responsive",
    description:
      "Component-driven UI scales elegantly across device rotations, split screens, and accessibility settings.",
    bullets: ["Accessible typography", "Touch-friendly controls"],
    href: "/mlm-software-feature/powerfully-responsive"
  }
];

const SECURITY_FEATURES: FeatureHighlight[] = [
  {
    title: "Secure MLM foundation",
    description:
      "Defense-in-depth spans infrastructure, data, and admin guardrails so scaling never compromises trust.",
    bullets: ["Role-based access", "IP allowlisting", "Audit logging"],
    href: "/mlm-software-feature/secure-mlm-software"
  },
  {
    title: "Laravel platform",
    description:
      "Built on Laravel for modern security patterns, rapid iteration, and proven enterprise stability.",
    bullets: ["Framework-level protections", "Testing harnesses"],
    href: "/mlm-software-feature/powered-by-best-secure-php-framework-laravel"
  },
  {
    title: "Secure authentication",
    description:
      "MFA, password policies, and session management keep every identity verified across devices.",
    bullets: ["Conditional access", "Device trust scoring"],
    href: "/mlm-software-feature/secure-authentication-system"
  },
  {
    title: "Resilient backups",
    description:
      "Encrypted, versioned backups with rapid restore paths keep you covered against any outage or incident.",
    bullets: ["Geo redundancy", "Point-in-time recovery"],
    href: "/mlm-software-feature/strong-backup-system"
  },
  {
    title: "Payment gateways",
    description:
      "Certified integrations with global gateways deliver compliant payment acceptance and settlement.",
    bullets: ["Tokenized payments", "Multi-currency support"],
    href: "/mlm-software-feature/payment-gateway"
  }
];

const COMMERCE_FEATURES: FeatureHighlight[] = [
  {
    title: "Unified commerce hub",
    description:
      "Manage catalogues, pricing, promos, and inventory for B2B, B2C, and distributor storefronts in one control centre.",
    bullets: [
      "Localized pricing and taxation",
      "Inventory sync across warehouses",
      "Promotion builder with guardrails"
    ]
  },
  {
    title: "Customer journeys",
    description:
      "Deliver onboarding, autoship, subscription, and loyalty experiences that drive repeat purchases and referrals.",
    bullets: [
      "Lifecycle messaging across channels",
      "Autoship and subscription management",
      "Loyalty tiers tied to recognition"
    ]
  },
  {
    title: "Field enablement storefronts",
    description:
      "Launch replicated sites and mobile selling tools that mirror corporate content while providing personalisation control to sellers.",
    bullets: [
      "Brand-safe content governance",
      "Personalised landing page builder",
      "Media library with usage analytics"
    ]
  },
  {
    title: "Order orchestration",
    description:
      "Connect fulfilment, shipping, and customer care with real-time status updates to distributors and buyers.",
    bullets: [
      "Carrier integrations and webhook alerts",
      "Return and replacement workflows",
      "Support ticket linkage for escalations"
    ]
  }
];

const INTEGRATION_FEATURES: FeatureHighlight[] = [
  {
    title: "Commerce platforms",
    description:
      "Prebuilt connectors for Shopify, Magento, WooCommerce, and custom storefronts keep orders, inventory, and payouts in sync.",
    bullets: [
      "Two-way product and order sync",
      "Payment gateway tokenisation",
      "Extensible webhooks and SDKs"
    ]
  },
  {
    title: "CRM and marketing automation",
    description:
      "Bring Salesforce, HubSpot, Zoho, and marketing clouds into the mix so campaigns, leads, and service data stay unified.",
    bullets: [
      "Field activity back to CRM timelines",
      "Lead scoring and routing automation",
      "Consent and preference synchronisation"
    ]
  },
  {
    title: "Data & BI pipelines",
    description:
      "Stream data into Snowflake, BigQuery, Power BI, and Looker to fuel enterprise analytics without bespoke engineering.",
    bullets: [
      "Managed data models and APIs",
      "Event streaming for near real-time dashboards",
      "Secure token-based access controls"
    ]
  },
  {
    title: "Support & communications",
    description:
      "Integrate with Zendesk, Freshdesk, Twilio, and WhatsApp Business to coordinate tickets, notifications, and conversations.",
    bullets: [
      "Ticket sync with distributor records",
      "Template libraries for SMS and chat",
      "Automated SLA and escalation triggers"
    ]
  }
];

const ENABLEMENT_FEATURES: FeatureHighlight[] = [
  {
    title: "Learning paths",
    description:
      "Curate multimedia training, certifications, and quizzes that adapt to role, rank, and market objectives.",
    bullets: [
      "Role-based curriculum sequencing",
      "Progress tracking and nudges",
      "Micro-learning content builder"
    ]
  },
  {
    title: "Field coaching",
    description:
      "Give leaders dashboards, scorecards, and coaching templates to grow emerging talent and accelerate momentum.",
    bullets: [
      "One-on-one coaching plans",
      "Leaderboards with fair scoring",
      "Recognition and rewards automation"
    ]
  },
  {
    title: "Knowledge base",
    description:
      "Publish product updates, compliance guides, and playbooks with AI search so answers surface instantly across the field.",
    bullets: [
      "Granular access and versioning",
      "AI-powered semantic search",
      "Embedded feedback loops"
    ]
  },
  {
    title: "Partner success desk",
    description:
      "Dedicated success managers help plan launches, review metrics, and share best practices tailored to your growth stage.",
    bullets: [
      "Quarterly business reviews",
      "Adoption scorecards and benchmarks",
      "Executive briefings and workshops"
    ]
  }
];

const UNIQUE_FEATURES: FeatureHighlight[] = [
  {
    title: "Self-hosted deployments",
    description:
      "Retain complete infrastructure control with optional self-hosted installs and managed updates.",
    href: "/mlm-software-feature/self-hosted-mlm-software-system"
  },
  {
    title: "Replicated websites",
    description:
      "Launch distributor-branded microsites with SEO-friendly URLs and content governance.",
    href: "/mlm-software-feature/replicating-website"
  },
  {
    title: "Lead capture management",
    description:
      "Build high-converting lead capture pages and track conversion journeys end-to-end.",
    href: "/mlm-software-feature/lcp-pages-management"
  },
  {
    title: "OpenCart, WordPress, Drupal APIs",
    description:
      "Connect commerce stacks with secure APIs and keep catalogs, orders, and payouts in sync.",
    href: "/mlm-software-feature/open-cart-word-press-and-drupal-integration-with-api"
  },
  {
    title: "Magento integration",
    description:
      "Synchronize Magento stores for inventory, orders, and memberships without custom plumbing.",
    href: "/mlm-software-feature/magento-integration-with-api"
  },
  {
    title: "Advanced reporting",
    description:
      "Prebuilt and ad-hoc analytics keep finance, sales, and compliance informed in real time.",
    href: "/mlm-software-feature/advanced-reporting-system"
  },
  {
    title: "Payment processing",
    description:
      "Automate weekly, monthly, and event-based payouts with full deduction visibility.",
    href: "/mlm-software-feature/payment-processing-system-automatic-manual"
  },
  {
    title: "Privileged user system",
    description:
      "Assign granular admin roles with guardrails to maintain compliance and insight.",
    href: "/mlm-software-feature/privileged-user-system"
  },
  {
    title: "Autoresponder",
    description:
      "Trigger nurture journeys and automated follow-ups from lead to promoter.",
    href: "/mlm-software-feature/auto-responder-system"
  },
  {
    title: "Theme customization",
    description:
      "Empower teams to adjust themes, colors, and typography without code changes.",
    href: "/mlm-software-feature/theme-changing-options"
  },
  {
    title: "Powerful email tooling",
    description:
      "Run targeted email broadcasts, drip campaigns, and transactional notices.",
    href: "/mlm-software-feature/powerful-e-mail-system"
  },
  {
    title: "Web design services",
    description:
      "Partner with our team for bespoke marketing sites and landing experiences.",
    href: "/mlm-software-feature/web-designing"
  },
  {
    title: "E-voucher generator",
    description:
      "Issue, track, and redeem vouchers with full lifecycle visibility and fraud controls.",
    href: "/mlm-software-feature/e-voucher-generator"
  }
];

const FEATURE_BUNDLES: FeatureBundle[] = [
  {
    title: "Launch essentials",
    description:
      "Everything needed for a compliant go-live—compensation accuracy, onboarding, payments, and program governance from day one.",
    modules: [
      "Compensation studio with sandbox approvals",
      "Onboarding journeys and replicated sites",
      "Wallets, payouts, and tax automation"
    ],
    outcome: "Fast-track new market launches without sacrificing compliance or visibility."
  },
  {
    title: "Growth acceleration",
    description:
      "Connect commerce, promotions, and AI coaching to boost retention and share-of-wallet across your field organisation.",
    modules: [
      "Personalised storefronts and autoship",
      "AI product and promotion recommendations",
      "Loyalty, recognition, and community feeds"
    ],
    outcome: "Increase customer lifetime value and empower leaders with actionable insights."
  },
  {
    title: "Enterprise governance",
    description:
      "For global brands that need airtight controls, auditability, and localisation across every market they operate in.",
    modules: [
      "Advanced permissions with delegated admin",
      "Consent, privacy, and document vaults",
      "Regional tax, currency, and language packs"
    ],
    outcome: "Scale confidently with enterprise-grade compliance and reporting baked in."
  },
  {
    title: "Data & automation fabric",
    description:
      "Bring CRM, finance, support, and analytics ecosystems together while automations orchestrate everyday operations.",
    modules: [
      "Prebuilt connectors and secure APIs",
      "Event-driven automations and alerts",
      "BI pipelines with governed data models"
    ],
    outcome: "Gain a unified operating picture with less custom code and fewer swivel-chair processes."
  }
];

const PERSONA_FEATURES: PersonaFeature[] = [
  {
    persona: "Executive leadership",
    role: "Strategy & growth",
    summary:
      "Monitor momentum, unlock new markets, and guide investments with AI briefings and board-ready dashboards.",
    priorities: [
      "Expansion scorecards with revenue, rank, and retention KPIs",
      "Roadmap controls for phased rollouts and pilots",
      "Narrative-ready insights for investors and stakeholders"
    ]
  },
  {
    persona: "Finance & compliance",
    role: "Risk & profitability",
    summary:
      "Guarantee payout accuracy, tax handling, and audit readiness with configurable guardrails and automated evidence.",
    priorities: [
      "Variance and anomaly alerts before payroll closes",
      "Downloadable audit trails and reconciliation packs",
      "Automated tax, withholding, and documentation workflows"
    ]
  },
  {
    persona: "Technology & operations",
    role: "Integration & reliability",
    summary:
      "Connect stacks, enforce security posture, and manage change with feature flags and infrastructure transparency.",
    priorities: [
      "Managed APIs, webhooks, and SSO patterns",
      "Environment health dashboards and observability hooks",
      "Release governance with preview environments"
    ]
  },
  {
    persona: "Field enablement",
    role: "Sales & experience",
    summary:
      "Equip leaders and promoters with personalised journeys, coaching frameworks, and recognition loops that drive action.",
    priorities: [
      "AI coaching prompts and playbooks",
      "Mobile-first onboarding and content libraries",
      "Leaderboards tied to incentives and compliance"
    ]
  }
];

const SUCCESS_PROGRAMS: SuccessProgram[] = [
  {
    title: "Launch governance council",
    description:
      "Structured workshops align executives, finance, legal, and field leaders on objectives, data, and accountability.",
    bullets: [
      "Discovery sessions by region and business unit",
      "Scorecards that map success metrics to program phases",
      "Decision logs and stakeholder communication templates"
    ]
  },
  {
    title: "Enablement lab",
    description:
      "Hands-on sandbox missions help field trainers, customer care, and IT teams master workflows before go-live.",
    bullets: [
      "Role-based learning paths with certifications",
      "Weekly clinics hosted by solution architects",
      "Feedback loops feeding into sprint backlogs"
    ]
  },
  {
    title: "Growth optimisation desk",
    description:
      "Post-launch analysts, AI specialists, and success managers deliver quarterly insights and roadmap recommendations.",
    bullets: [
      "Quarterly business reviews with trend diagnostics",
      "Copilot prompts tuned to your data and segments",
      "Backlog grooming for future releases and markets"
    ]
  }
];

const FEATURE_FAQS: FeatureFaq[] = [
  {
    question: "What are the key features of Cloud MLM Software?",
    answer:
      "Plan customization, commission automation, wallets, genealogy, real-time reporting, replicated sites, mobile access, and KYC tooling work together to simplify growth."
  },
  {
    question: "Can I customize the compensation plan?",
    answer:
      "Yes. Configure binary, matrix, unilevel, hybrid, or bespoke logic with drag-and-drop builders, staging, and approval workflows."
  },
  {
    question: "What reporting is available?",
    answer:
      "Finance and field teams monitor commissions, sales, team health, payouts, retention, and growth trends with exportable dashboards and scheduled reports."
  },
  {
    question: "Does the software support multiple languages and currencies?",
    answer:
      "Absolutely -- localize content and transact in regional currencies with accurate conversion and tax handling."
  },
  {
    question: "What marketing tools are included?",
    answer:
      "Use replicated sites, email and SMS automation, lead capture, and social sharing to attract and convert distributors."
  },
  {
    question: "Is the platform secure and compliant?",
    answer:
      "Encryption, MFA, audit trails, tax automation, and compliance workflows maintain trust while meeting regional regulations."
  },
  {
    question: "Is it mobile-friendly and globally accessible?",
    answer:
      "Every module is responsive and reachable worldwide, so teams can enroll, train, and manage payouts from any device."
  }
];

const FEATURE_TRACKS: FeatureTrack[] = [
  {
    title: "Experience platform",
    description: "Design rewarding journeys for distributors, customers, and partners across web and mobile.",
    highlights: [
      "Dynamic storefronts with real-time inventory",
      "Rank-aware dashboards and recognition feeds",
      "Localized content, currencies, and languages"
    ],
    icon: "platform"
  },
  {
    title: "Automation fabric",
    description: "Orchestrate payouts, onboarding, service, and risk workflows with precision.",
    highlights: [
      "Visual automation builder tied to approval guardrails",
      "Event-driven messaging across email, SMS, chat, and in-app",
      "Treasury, tax, and compliance integrations ready to enable"
    ],
    icon: "automation"
  },
  {
    title: "Governance & trust",
    description: "Launch globally with embedded compliance controls, audit trails, and privacy tooling.",
    highlights: [
      "Consent vault and retention policies per region",
      "SOC-aligned monitoring and exportable evidence",
      "Feature flags for pilot launches and safe rollouts"
    ],
    icon: "governance"
  },
  {
    title: "AI operations copilot",
    description: "Unlock predictive insights, conversational search, and automated briefings for every team.",
    highlights: [
      "Copilot responses grounded in curated knowledge",
      "Predictive alerts for churn, chargebacks, and rank slippage",
      "Automated summaries after calls, meetings, and escalations"
    ],
    icon: "ai"
  }
];

const DELIVERY_MILESTONES: Milestone[] = [
  {
    stage: "1",
    title: "Blueprint",
    description: "We work with your stakeholders to document goals, data sources, and compliance requirements.",
    outcome: "Strategy brief, timeline, and environment plan approved by leadership."
  },
  {
    stage: "2",
    title: "Configure",
    description: "Platform modules are tailored, integrations wired, and automations built in sandbox.",
    outcome: "Demo-ready environments with simulations, automations, and security policies in place."
  },
  {
    stage: "3",
    title: "Activate",
    description: "Pilot cohorts launch, feedback loops run, and enablement teams roll out communications.",
    outcome: "Production go-live with success metrics, hypercare, and change management completed."
  },
  {
    stage: "4",
    title: "Optimise",
    description: "Copilots, dashboards, and quarterly reviews drive continuous improvement.",
    outcome: "Roadmap aligned to growth, new markets, and product innovation goals."
  }
];


function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const { getPageMetadata } = await import("@/components/frontend/common/page-metadata");
  
  return getPageMetadata(
    params,
    "/features",
    {
      page: "features",
      fallbackTitle: "MLM Software Features | Cloud MLM Software",
      fallbackDescription: "Explore AI, core, performance, security, and unique capabilities of Cloud MLM Software, plus detailed FAQs.",
      fallbackKeywords: "MLM software features, MLM platform features, network marketing tools, MLM capabilities, MLM software functionality"
    }
  );
}

type FeaturesPageProps = {
  params: { lang: SupportedLocale };
};

export default function FeaturesPage({ params }: FeaturesPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";

  return (
    <div className="space-y-24 pb-24">
      <FeaturesHeroSection locale={locale} />

      <FeaturesSectionNav items={FEATURE_SECTION_NAV} />

      <FeatureSection
        id="compensation-features"
        badge="Compensation & payouts"
        heading="Configure rewarding plans and automate compliant payouts"
        description="Align finance, legal, and field leaders with a compensation stack that handles modelling, testing, payroll, and compliance in one place."
        items={COMPENSATION_FEATURES}
        columns="md:grid-cols-2 xl:grid-cols-4"
      />

      <FeatureSection
        id="ai-features"
        badge="AI capabilities"
        heading="AI features that accelerate field momentum"
        description="Machine learning powers product recommendations, commission forecasting, and sales coaching so leaders can act on insights instead of spreadsheets."
        items={AI_FEATURES}
        columns="md:grid-cols-3"
      />

      <FeatureSection
        id="core-features"
        badge="Core platform features"
        heading="Everything you expect from enterprise MLM software"
        description="Cloud MLM Software bundles extensibility, multi-region operations, and omnichannel communications so your teams can run daily business with confidence."
        items={COMMON_FEATURES}
        columns="md:grid-cols-2 xl:grid-cols-3"
      />

      <FeatureSection
        id="performance-features"
        badge="Performance"
        heading="Built for speed, scale, and reliability"
        description="From responsive interfaces to caching and optimization, the platform stays fast whether you are launching a promotion or closing a period."
        items={PERFORMANCE_FEATURES}
        columns="md:grid-cols-2 xl:grid-cols-3"
      />

      <FeatureSection
        id="security-features"
        badge="Security & compliance"
        heading="Security-first architecture for global expansion"
        description="Multi-layer protection, verified frameworks, and resilient operations help you meet regulatory expectations while scaling into new regions."
        items={SECURITY_FEATURES}
        columns="md:grid-cols-2 xl:grid-cols-3"
      />

      <FeatureSection
        id="commerce-features"
        badge="Commerce & customer experience"
        heading="Delight customers and distributors on every channel"
        description="Combine B2C storefronts, replicated sites, and mobile selling tools with journey automation that retains customers and grows lifetime value."
        items={COMMERCE_FEATURES}
        columns="md:grid-cols-2 xl:grid-cols-4"
      />

      <FeatureSection
        id="integration-features"
        badge="Integrations & APIs"
        heading="Connect your ecosystem without brittle custom code"
        description="Use certified connectors, webhooks, and APIs to link commerce, CRM, support, and analytics platforms while maintaining data fidelity."
        items={INTEGRATION_FEATURES}
        columns="md:grid-cols-2 xl:grid-cols-4"
      />

      <FeatureSection
        id="enablement-features"
        badge="Enablement & success"
        heading="Equip every team with knowledge, coaching, and expert support"
        description="From onboarding to ongoing optimisation, Cloud MLM Software includes the playbooks, analytics, and specialists that ensure sustained adoption."
        items={ENABLEMENT_FEATURES}
        columns="md:grid-cols-2 xl:grid-cols-4"
      />

      <FeatureSection
        id="unique-features"
        badge="Unique capabilities"
        heading="Extras that set Cloud MLM Software apart"
        description="Handle complex integrations, marketing programs, and field experiences with services and modules designed specifically for direct selling."
        items={UNIQUE_FEATURES}
        columns="md:grid-cols-2 xl:grid-cols-3"
      />

      <section id="feature-suite" className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Solution suites</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Choose the bundle that matches your growth stage
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
              Mix and match Cloud MLM Software modules to launch faster, accelerate revenue, or strengthen governance without distracting your core teams.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {FEATURE_BUNDLES.map((bundle) => (
              <article key={bundle.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{bundle.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{bundle.description}</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {bundle.modules.map((module) => (
                    <li key={module} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      <span>{module}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs uppercase tracking-widest text-primary">Outcome</p>
                <p className="text-sm text-muted-foreground">{bundle.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="persona-features" className="container space-y-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Built for every stakeholder</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Tailored workspaces and insights for each team you support
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Executives, finance, technology, and field leaders gain focused tooling, dashboards, and automations without relying on spreadsheets.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PERSONA_FEATURES.map((persona) => (
            <article key={persona.persona} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest text-primary">{persona.role}</p>
                <h3 className="text-xl font-semibold text-foreground">{persona.persona}</h3>
                <p className="text-sm text-muted-foreground">{persona.summary}</p>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {persona.priorities.map((priority) => (
                  <li key={priority} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    <span>{priority}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="success-programs" className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Programmes that ensure adoption</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Expert teams walk with you from planning to optimisation
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
              Combine implementation governance, enablement, and ongoing growth analytics so your organisation keeps realising value long after go-live.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {SUCCESS_PROGRAMS.map((program) => (
              <article key={program.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{program.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{program.description}</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {program.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="feature-faq" className="container space-y-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">FAQs</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Answers to the most common questions from evaluating teams, finance leaders, and field organisations considering Cloud MLM Software.
          </p>
        </div>
        <div className="space-y-4">
          {FEATURE_FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-foreground">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-sm text-primary transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Four tracks powering Cloud MLM Software
          </h2>
          <p className="text-sm text-muted-foreground">
            Each track combines configurable modules, automation, and governance so you can tailor the platform to your organisation.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {FEATURE_TRACKS.map((track) => (
            <article key={track.title} className="relative overflow-hidden rounded-3xl border border-border/60 bg-background p-8 shadow-sm">
              <div className="absolute inset-0 pointer-events-none opacity-30">
                {track.icon === "platform" ? <Globe2 className="absolute -right-12 -top-12 h-48 w-48 text-primary" aria-hidden /> : null}
                {track.icon === "automation" ? <Workflow className="absolute -right-10 -top-10 h-48 w-48 text-primary" aria-hidden /> : null}
                {track.icon === "governance" ? <ShieldCheck className="absolute -right-10 -top-10 h-48 w-48 text-primary" aria-hidden /> : null}
                {track.icon === "ai" ? <Bot className="absolute -right-10 -top-10 h-48 w-48 text-primary" aria-hidden /> : null}
              </div>
              <div className="relative space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">{track.title}</h3>
                <p className="text-sm text-muted-foreground">{track.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {track.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary" aria-hidden />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              From blueprint to growth in four milestones
            </h2>
            <p className="text-sm text-muted-foreground">
              Our delivery framework keeps finance, compliance, and field leaders aligned at every checkpoint.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {DELIVERY_MILESTONES.map((milestone) => (
              <article key={milestone.stage} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                  {milestone.stage}
                </span>
                <h3 className="text-lg font-semibold text-foreground">{milestone.title}</h3>
                <p className="text-sm text-muted-foreground">{milestone.description}</p>
                <p className="text-xs uppercase tracking-wide text-primary">Outcome</p>
                <p className="text-sm text-muted-foreground">{milestone.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-10 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            See Cloud MLM Software in action
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Share your objectives and we’ll craft a tailored demo—covering modules, integrations, automations, and copilots ready for your brand.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Plan a strategy session
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                Explore the live platform
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
