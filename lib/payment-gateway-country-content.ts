import type { Locale } from "@/i18n-config";
import { getLocalizedCountryName } from "@/lib/get-localized-country-name";
import type {
  PaymentGatewayCountryContent,
  PaymentGatewayCountryHeroMetric,
  PaymentGatewayCountryCluster,
  PaymentGatewayCountryStage,
  PaymentGatewayCountryGuard,
  PaymentGatewayCountryFaqItem,
  PaymentGatewayCountryBriefcase,
} from "@/components/frontend/payment-gateways/subpages/types";

function interpolate(str: string, countryName: string): string {
  return str.replace(/\{\{countryName\}\}/g, countryName);
}

const DEFAULT_METRICS: PaymentGatewayCountryHeroMetric[] = [
  { label: "Settlement cadence", value: "T+1", description: "Clearing windows handled with automated approvals.", icon: "BarChart3" },
  { label: "Gateway partners", value: "14+", description: "Adapters for banks, PSPs, and mobile wallets.", icon: "Building2" },
  { label: "Regional reach", value: "Multi-corridor", description: "Expand while keeping compliance unified.", icon: "Signal" },
];

const DEFAULT_CLUSTERS: PaymentGatewayCountryCluster[] = [
  {
    title: "Domestic bank orchestration",
    description: "Harmonise payouts across central banks and trusted private institutions.",
    bullets: ["ACH file automation with maker-checker workflows", "Multi-currency accounts in one ledger", "Automated reconciliation and reporting"],
    icon: "Bank",
  },
  {
    title: "Digital wallet & card expansion",
    description: "Leverage local and international wallets to drive cashless incentives for distributors.",
    bullets: ["Tokenised payouts with 3-D Secure orchestration", "Risk scoring for card-not-present transactions", "Campaign automation for digital adoption"],
    icon: "Layers3",
  },
  {
    title: "Cross-border growth",
    description: "Serve diaspora and regional partners while satisfying local currency controls.",
    bullets: ["Dynamic FX policies with regulator-aligned buffers", "Consolidated dashboards for export reporting", "Compliance guardrails for import/export"],
    icon: "GlobeSimple",
  },
];

const DEFAULT_STAGES: PaymentGatewayCountryStage[] = [
  { name: "Discovery & regulatory mapping", detail: "Workshops capture treasury policies, compensation plans, and central bank requirements.", icon: "Map" },
  { name: "Integration sprints", detail: "Connect banking APIs, SFTP exchanges, and wallet partners with observability.", icon: "Layers3" },
  { name: "Operational launch", detail: "Pilot cohorts go live with dashboards, enablement, and exception response playbooks.", icon: "ChartLineUp" },
  { name: "Optimise & scale", detail: "Automate high-volume workflows, expand corridors, and embed analytics.", icon: "BarChart3" },
];

const DEFAULT_GUARDS: PaymentGatewayCountryGuard[] = [
  { title: "Compliance first", description: "Sanctions checks, transaction limits, and archival policies align with local directives and international AML standards.", icon: "ShieldCheck" },
  { title: "Treasury command", description: "Liquidity forecasts, FX exposure dashboards, and alerting keep finance teams ahead of volatility.", icon: "ChartLineUp" },
  { title: "Distributor trust", description: "Transparent payout statuses, localised communications, and responsive support maintain confidence.", icon: "UsersThree" },
];

const DEFAULT_FAQ: PaymentGatewayCountryFaqItem[] = [
  { question: "How do you manage local and foreign currency payouts together?", answer: "Cloud MLM Software lets you run multi-wallet ledgers, configure FX buffers, and report consolidated positions to treasury stakeholders." },
  { question: "Can we integrate with public-sector banks securely?", answer: "Yes. We automate SFTP and API exchanges with dual approvals, encrypted credentials, and immutable audit logs ready for regulator review." },
  { question: "What languages do you support for distributor communications?", answer: "Notification templates can be localised so every leader receives actionable updates in their preferred language." },
];

const contentCache = new Map<string, PaymentGatewayCountryContent>();

/**
 * Returns PaymentGatewayCountryContent for a given locale and country slug.
 * Uses a default template with {{countryName}} interpolation; can be extended with per-country overrides.
 */
export function getPaymentGatewayCountryContent(
  locale: Locale,
  countrySlug: string
): PaymentGatewayCountryContent {
  const countryName = getLocalizedCountryName(countrySlug, locale);
  const cacheKey = `${locale}:${countrySlug}`;
  if (contentCache.has(cacheKey)) {
    return contentCache.get(cacheKey)!;
  }

  const briefcase: PaymentGatewayCountryBriefcase = {
    title: interpolate("{{countryName}} compliance briefcase", countryName),
    description: "Receive AML matrices, foreign exchange policy templates, and regulator-facing reports ready for your legal and finance teams to deploy.",
    artefactsLabel: "Artefacts",
    artefactsDetail: "Currency control workflows, sanction escalation scripts, and distributor disclosures.",
    refreshLabel: "Refresh cadence",
    refreshDetail: "Quarterly reviews, with immediate alerts when regulations change.",
    ctaLabel: "Explore compliance bundles",
  };

  const result: PaymentGatewayCountryContent = {
    hero: {
      badge: interpolate("{{countryName}} payment intelligence", countryName),
      title: interpolate("Build resilient MLM payment gateways across {{countryName}} and the region", countryName),
      description: interpolate("Cloud MLM Software orchestrates {{countryName}}'s banking network, digital wallets, and regional corridors in one governed platform. Deliver trustworthy payouts, keep regulators aligned, and empower your distributor community with real-time clarity.", countryName),
      primaryCtaLabel: "Pricing",
      secondaryCtaLabel: "Try free demo",
      reserveDemoCtaLabel: "Reserve your demo",
      quote: "We now manage every commission cycle—banks, wallets, and regional sales—in a single ledger. Compliance reviews take minutes instead of days.",
      quoteAttribution: "Cloud MLM Software transformation lead",
      snapshotCtaLabel: "Review solution tiers",
      metrics: DEFAULT_METRICS,
    },
    clusters: {
      heading: interpolate("Gateway clusters tailored to {{countryName}}'s financial landscape", countryName),
      description: interpolate("Cloud MLM Software has helped organisations in {{countryName}} modernise their payout experiences. Select the cluster mix that aligns with your growth strategy.", countryName),
      items: DEFAULT_CLUSTERS,
    },
    stages: {
      heading: interpolate("A delivery cadence tuned for {{countryName}} regulators and leadership teams", countryName),
      description: "Each phase provides artefacts, analytics, and enablement so executives, auditors, and distributors stay confident.",
      items: DEFAULT_STAGES,
    },
    guards: {
      heading: interpolate("Safeguard your reputation across {{countryName}}'s MLM landscape", countryName),
      description: interpolate("Governance, analytics, and field experience converge in Cloud MLM Software's {{countryName}} blueprint. You gain accountability while giving distributors certainty.", countryName),
      items: DEFAULT_GUARDS,
      briefcase,
    },
    faq: {
      heading: "Frequently asked questions",
      description: interpolate("Treasury, compliance, and distributor leaders in {{countryName}} often ask the following.", countryName),
      items: DEFAULT_FAQ,
    },
    cta: {
      title: interpolate("Deliver trustworthy payouts across {{countryName}}'s MLM ecosystem", countryName),
      description: "Cloud MLM Software unifies banks, PSPs, and regional corridors so you lead with clarity and resilience.",
      primaryCtaLabel: "Plan your launch",
      secondaryCtaLabel: "Request a live walkthrough",
      subheading: "From: Payment gateways page",
      trustIndicators: ["Fast response", "Expert review", "No commitment"],
    },
  };

  contentCache.set(cacheKey, result);
  return result;
}
