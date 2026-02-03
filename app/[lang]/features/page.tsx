import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  FeaturesHeroSection,
  FeaturesListSection,
  FeaturesFaqSection,
  FeaturesCtaSection,
  FeaturesBundleSection,
  FeaturesPersonaSection,
  FeaturesSuccessProgramsSection,
  FeaturesTracksSection,
  FeaturesMilestonesSection,
} from "@/components/frontend/features";
import { getPageTitle } from "@/lib/api/page-titles";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

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
  const { getPageKeywords } = await import("@/lib/seo-keywords");
  const resolvedParams = params instanceof Promise ? await params : params;

  return getPageMetadata(
    params,
    "/features",
    {
      page: "features",
      fallbackTitle: "MLM Software Features | AI-Powered Network Marketing Platform Features | USA, India, Philippines, Australia, Germany",
      fallbackDescription: "Explore AI-powered MLM software features, compensation plans, security, performance, and unique capabilities. Cloud-based network marketing platform with 56+ modules. Trusted by 500+ MLM companies worldwide.",
      fallbackKeywords: `${getPageKeywords("features", resolvedParams.lang)}, MLM software features, AI-powered MLM, MLM compensation plan features, MLM security features, MLM performance optimization, MLM mobile app features`
    }
  );
}

type FeaturesPageProps = {
  params: Promise<{ lang: SupportedLocale }>;
};

export default async function FeaturesPage({ params }: FeaturesPageProps) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";

  // Fetch page title data from backend
  const pageTitleData = await getPageTitle("features", locale);

  return (
    <div>
      <FeaturesHeroSection locale={locale} pageTitleData={pageTitleData} />


      <FeaturesBundleSection bundles={FEATURE_BUNDLES} />

      <FeaturesListSection locale={locale} />

      <FeaturesPersonaSection personas={PERSONA_FEATURES} />


      <FeaturesTracksSection tracks={FEATURE_TRACKS} />

      <FeaturesMilestonesSection milestones={DELIVERY_MILESTONES} />

      <FeaturesFaqSection locale={locale} />

      <FeaturesCtaSection contactHref={contactHref} demoHref={demoHref} locale={locale} />
    </div>
  );
}
