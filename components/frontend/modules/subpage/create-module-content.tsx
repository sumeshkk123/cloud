import {
  ChartBar,
  CheckCircle,
  CurrencyDollar,
  Gear,
  ListChecks,
  Rocket,
  TreeStructure,
  UsersThree,
} from "@phosphor-icons/react";
import type {
  PricingSubPageContent,
  PricingSubCapability,
  PricingSubFaqSection,
} from "@/components/frontend/pricing/sub-page";
import { getModulesSubpageMeta } from "@/lib/modules-subpage-slugs";

export type CreateModuleContentOverrides = {
  hero?: Partial<PricingSubPageContent["hero"]>;
  capabilitiesHeading?: string;
  capabilitiesItems?: PricingSubCapability[];
  roadmapHeading?: string;
  packagesHeading?: string;
  enhancementsHeading?: string;
  faqItems?: PricingSubFaqSection["items"];
  ctaHeading?: string;
};

/**
 * Creates a valid PricingSubPageContent for a module sub-page using slug meta for hero
 * and a standard section structure. Use for slugs that don't need fully custom content.
 */
export function createModuleSubpageContent(
  slug: string,
  overrides: CreateModuleContentOverrides = {}
): PricingSubPageContent {
  const meta = getModulesSubpageMeta(slug);
  const title = meta?.fallbackTitle ?? `${slug} | Cloud MLM Software`;
  const description = meta?.fallbackDescription ?? "";

  const hero: PricingSubPageContent["hero"] = {
    badge: "Module",
    title: overrides.hero?.title ?? title,
    description: overrides.hero?.description ?? description,
    primaryCta: "Request a consult",
    secondaryCta: "View demo",
    metrics: [
      { label: "Trusted by teams", value: "500+", description: "Global MLM programmes.", icon: UsersThree },
      { label: "Uptime", value: "99.9%", description: "Reliable Cloud MLM Software.", icon: CheckCircle },
      { label: "Support", value: "24/7", description: "Dedicated success desk.", icon: Gear },
    ],
    ...overrides.hero,
  };

  const capabilitiesItems = overrides.capabilitiesItems ?? [
    {
      title: "Core capabilities",
      description: "Everything you need to run this module at scale.",
      bullets: ["Configured for your plan", "Integrated with compensation", "Reporting and analytics"],
      icon: ListChecks,
    },
    {
      title: "Flexibility",
      description: "Adapt to your business rules and regions.",
      bullets: ["Custom workflows", "Multi-currency and locale", "API and connectors"],
      icon: Gear,
    },
    {
      title: "Visibility",
      description: "Dashboards and exports for leadership and ops.",
      bullets: ["Real-time KPIs", "Audit trails", "Export to BI tools"],
      icon: ChartBar,
    },
  ];

  return {
    hero,
    sections: [
      {
        type: "capabilities",
        heading: overrides.capabilitiesHeading ?? "What this module delivers",
        description: "Cloud MLM Software brings this capability into your existing platform.",
        items: capabilitiesItems,
      },
      {
        type: "roadmap",
        heading: overrides.roadmapHeading ?? "Implementation journey",
        description: "We align with your timeline and deliver in phases.",
        stages: [
          { title: "Discovery", description: "Requirements and design.", duration: "Week 1", icon: ListChecks },
          { title: "Build", description: "Configuration and integration.", duration: "Weeks 2-4", icon: Gear },
          { title: "Launch", description: "Go-live and optimisation.", duration: "Weeks 5-6", icon: Rocket },
        ],
      },
      {
        type: "packages",
        sectionTitle: "Packages",
        heading: overrides.packagesHeading ?? "Packages for every stage",
        description: "Choose the level that fits your maturity.",
        ctaLabel: "Discuss this package",
        items: [
          { title: "Starter", price: "From $9k", description: "Core setup.", outcomes: ["Configuration", "Training", "Support"], icon: CurrencyDollar },
          { title: "Growth", price: "From $17k", description: "Advanced features.", outcomes: ["Customisation", "Integrations", "Dedicated CSM"], icon: TreeStructure },
          { title: "Enterprise", price: "Custom", description: "Full scope.", outcomes: ["SLA", "On-prem options", "Custom development"], icon: ChartBar },
        ],
      },
      {
        type: "enhancements",
        heading: overrides.enhancementsHeading ?? "Why teams choose Cloud MLM Software",
        description: "Proven outcomes for MLM and direct selling.",
        items: [
          { title: "Faster launch", description: "Weeks, not months, to go live.", icon: Rocket },
          { title: "Lower TCO", description: "One platform, fewer integrations.", icon: ChartBar },
          { title: "Scalable", description: "From startup to enterprise.", icon: TreeStructure },
        ],
      },
    ],
    faq: {
      heading: "Frequently asked questions",
      description: "Common questions about this module.",
      items: overrides.faqItems ?? [
        { question: "How do we get started?", answer: "We begin with a discovery call and scope a phased rollout." },
        { question: "Is it included in our plan?", answer: "Module availability depends on your plan; we can upgrade or add modules." },
        { question: "Do you offer training?", answer: "Yes. We provide documentation, training, and ongoing support." },
      ],
    },
    cta: {
      heading: overrides.ctaHeading ?? "Ready to add this module?",
      description: "Talk to our team and we'll outline options and next steps.",
      primaryCta: "Schedule a call",
      secondaryCta: "Explore demo",
      cardTitle: "Connect with our team",
      cardBody: "We'll respond within one business day with a tailored proposal.",
    },
  };
}
