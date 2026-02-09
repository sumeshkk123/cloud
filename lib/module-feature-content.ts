import type {
  ModuleFeatureContent,
  ModuleHeroMetric,
} from "@/components/frontend/modules/subpage/module-layout/types";
import { getModulesSubpageMeta } from "./modules-subpage-slugs";
import { isModuleFeatureSlug } from "./modules-subpage-slugs";
import {
  CurrencyDollar,
  EnvelopeSimple,
  Gift,
  Globe,
  HardDrives,
  IdentificationCard,
  Ticket,
  Wallet,
  ChatCircleDots,
  Translate,
} from "@phosphor-icons/react";

/** Unique hero metrics per module slug (label, value, detail). */
const METRICS_BY_SLUG: Partial<Record<string, ModuleHeroMetric[]>> = {
  "mass-email-sending-module": [
    { label: "Campaigns sent", value: "2M+", detail: "Monthly emails across programmes." },
    { label: "Inbox placement", value: "98%", detail: "Deliverability best practices." },
    { label: "Segments", value: "Unlimited", detail: "By rank, region, and activity." },
  ],
  "e-voucher": [
    { label: "Vouchers issued", value: "500K+", detail: "Incentives and rewards." },
    { label: "Currencies", value: "150+", detail: "Global redemption support." },
    { label: "Redemption rate", value: "85%", detail: "Tracked per campaign." },
  ],
  "e-wallet": [
    { label: "Transactions", value: "99.9%", detail: "Uptime for payouts." },
    { label: "Settlement", value: "T+1", detail: "Bank and in-network." },
    { label: "Audit", value: "Full", detail: "Compliance-ready history." },
  ],
  "ticket-system": [
    { label: "Tickets resolved", value: "50K+", detail: "Per month, per programme." },
    { label: "SLA met", value: "96%", detail: "Priority and due-date rules." },
    { label: "Languages", value: "20+", detail: "Agent and user locale." },
  ],
  "auto-responder": [
    { label: "Sequences", value: "Unlimited", detail: "Trigger-based flows." },
    { label: "Events", value: "15+", detail: "Join, rank, order, custom." },
    { label: "Conversion lift", value: "2.5x", detail: "Onboarding and engagement." },
  ],
  "multi-currency": [
    { label: "Currencies", value: "150+", detail: "Orders and payouts." },
    { label: "Rates", value: "Live", detail: "Configurable conversion." },
    { label: "Reporting", value: "Base + local", detail: "Exports and dashboards." },
  ],
  "multi-lingual-system": [
    { label: "Languages", value: "40+", detail: "UI and content." },
    { label: "Locales", value: "Full", detail: "Date, number, currency." },
    { label: "Translation", value: "Workflow", detail: "Fallbacks and review." },
  ],
  "kyc-documentation": [
    { label: "Documents verified", value: "1M+", detail: "ID and address." },
    { label: "Regions", value: "50+", detail: "Configurable rules." },
    { label: "Review time", value: "< 24h", detail: "Approve or re-request." },
  ],
  "backup-manager": [
    { label: "Backup frequency", value: "Hourly", detail: "Full and incremental." },
    { label: "Retention", value: "Configurable", detail: "Point-in-time restore." },
    { label: "Encryption", value: "AES-256", detail: "At rest and in transit." },
  ],
  "email-module": [
    { label: "Emails sent", value: "10M+", detail: "Transactional and campaign." },
    { label: "Templates", value: "Unlimited", detail: "With tracking and variants." },
    { label: "Compliance", value: "Built-in", detail: "Consent and unsubscribe." },
  ],
};

function getDefaultMetricsForSlug(slug: string): ModuleHeroMetric[] {
  const name = slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
  return [
    { label: "Teams", value: "500+", detail: `${name} programmes.` },
    { label: "Uptime", value: "99.9%", detail: "Reliable Cloud MLM Software." },
    { label: "Support", value: "24/7", detail: "Dedicated success desk." },
  ];
}

function createFeatureContent(
  slug: string,
  overrides: Partial<ModuleFeatureContent> = {}
): ModuleFeatureContent {
  const meta = getModulesSubpageMeta(slug);
  const title = meta?.fallbackTitle ?? `${slug} | Cloud MLM Software`;
  const description = meta?.fallbackDescription ?? "";
  const defaultMetrics = METRICS_BY_SLUG[slug] ?? getDefaultMetricsForSlug(slug);

  return {
    hero: {
      badge: "Module",
      title,
      description,
      primaryCta: "Request a demo",
      secondaryCta: "View live demo",
      metrics: defaultMetrics,
      ...overrides.hero,
    },
    features: overrides.features ?? [
      {
        icon: HardDrives,
        title: "Built for scale",
        description: "Runs on Cloud MLM Software infrastructure with high availability and support.",
      },
      {
        icon: Globe,
        title: "Global ready",
        description: "Multi-currency, multi-language, and regional compliance built in.",
      },
      {
        icon: ChatCircleDots,
        title: "Support included",
        description: "Dedicated success desk and documentation to get you live fast.",
      },
    ],
    faq: overrides.faq ?? {
      heading: "Frequently asked questions",
      items: [
        { question: "How do we get started?", answer: "We begin with a discovery call and configure the module for your plan." },
        { question: "Is it included in our plan?", answer: "Module availability depends on your plan; we can add or upgrade modules." },
        { question: "Do you offer training?", answer: "Yes. We provide docs, training, and ongoing support." },
      ],
    },
    cta: overrides.cta ?? {
      heading: "Ready to add this module?",
      description: "Talk to our team for a tailored proposal and next steps.",
      buttonText: "Contact us",
    },
  };
}

const CONTENT_BY_SLUG: Partial<Record<string, ModuleFeatureContent>> = {
  "mass-email-sending-module": createFeatureContent("mass-email-sending-module", {
    hero: { badge: "Email", primaryCta: "Request a demo", secondaryCta: "View demo" },
    features: [
      { icon: EnvelopeSimple, title: "Bulk campaigns", description: "Send targeted campaigns and sequences to your entire network or segments." },
      { icon: Globe, title: "Deliverability", description: "Built-in best practices and monitoring for inbox placement and engagement." },
      { icon: ChatCircleDots, title: "Templates & tracking", description: "Reusable templates, open/click tracking, and reporting." },
    ],
    faq: {
      heading: "Frequently asked questions",
      items: [
        { question: "What sending limits apply?", answer: "Limits depend on your plan and domain reputation; we help you scale safely." },
        { question: "Can we segment by rank or region?", answer: "Yes. Segments use your MLM data: rank, join date, activity, and more." },
      ],
    },
  }),
  "e-voucher": createFeatureContent("e-voucher", {
    hero: { badge: "Rewards", primaryCta: "Request a demo", secondaryCta: "View demo" },
    features: [
      { icon: Gift, title: "Digital vouchers", description: "Issue and redeem e-vouchers for incentives, rewards, and promotions." },
      { icon: Wallet, title: "Redemption tracking", description: "Track redemptions, expiry, and balance across your network." },
      { icon: CurrencyDollar, title: "Multi-currency", description: "Support multiple currencies and regions for global programmes." },
    ],
  }),
  "e-wallet": createFeatureContent("e-wallet", {
    hero: { badge: "Payments", primaryCta: "Request a demo", secondaryCta: "View demo" },
    features: [
      { icon: Wallet, title: "Digital balance", description: "Distributors and customers hold a wallet balance for commissions and purchases." },
      { icon: CurrencyDollar, title: "Payouts & transfers", description: "Withdraw to bank or use in-network for orders and fees." },
      { icon: HardDrives, title: "Audit trail", description: "Full transaction history and reporting for finance and compliance." },
    ],
  }),
  "ticket-system": createFeatureContent("ticket-system", {
    hero: { badge: "Support", primaryCta: "Request a demo", secondaryCta: "View demo" },
    features: [
      { icon: Ticket, title: "Ticket management", description: "Create, assign, and track support tickets for distributors and customers." },
      { icon: ChatCircleDots, title: "Priorities & SLA", description: "Set priorities, due dates, and escalation rules." },
      { icon: Globe, title: "Multi-language", description: "Support tickets in the language of the user and agent." },
    ],
  }),
  "auto-responder": createFeatureContent("auto-responder", {
    hero: { badge: "Automation", primaryCta: "Request a demo", secondaryCta: "View demo" },
    features: [
      { icon: EnvelopeSimple, title: "Automated sequences", description: "Trigger-based email and message sequences for onboarding and engagement." },
      { icon: Globe, title: "Lifecycle triggers", description: "Join date, rank change, order, and custom events drive the flow." },
      { icon: ChatCircleDots, title: "Templates & variants", description: "Reusable templates and A/B tests for better conversion." },
    ],
  }),
  "multi-currency": createFeatureContent("multi-currency", {
    hero: { badge: "Finance", primaryCta: "Request a demo", secondaryCta: "View demo" },
    features: [
      { icon: CurrencyDollar, title: "Multiple currencies", description: "Orders, commissions, and payouts in the currency of each market." },
      { icon: Wallet, title: "Rates & conversion", description: "Configurable exchange rates and conversion for reporting and payouts." },
      { icon: HardDrives, title: "Reporting", description: "Reports and exports in base or local currency." },
    ],
  }),
  "multi-lingual-system": createFeatureContent("multi-lingual-system", {
    hero: { badge: "Localization", primaryCta: "Request a demo", secondaryCta: "View demo" },
    features: [
      { icon: Translate, title: "Multiple languages", description: "UI, emails, and content in the language of the user." },
      { icon: Globe, title: "Locale settings", description: "Date, number, and currency formatting per locale." },
      { icon: ChatCircleDots, title: "Translation workflow", description: "Manage translations and fallbacks for new markets." },
    ],
  }),
  "kyc-documentation": createFeatureContent("kyc-documentation", {
    hero: { badge: "Compliance", primaryCta: "Request a demo", secondaryCta: "View demo" },
    features: [
      { icon: IdentificationCard, title: "Document collection", description: "Collect and store ID and address documents from distributors." },
      { icon: HardDrives, title: "Verification workflow", description: "Review, approve, or request re-upload with audit trail." },
      { icon: Globe, title: "Regional rules", description: "Configure requirements by country or programme." },
    ],
  }),
  "backup-manager": createFeatureContent("backup-manager", {
    hero: { badge: "Data", primaryCta: "Request a demo", secondaryCta: "View demo" },
    features: [
      { icon: HardDrives, title: "Scheduled backups", description: "Automated full and incremental backups of your MLM data." },
      { icon: Wallet, title: "Restore points", description: "Restore to a point in time or export data for migration." },
      { icon: Globe, title: "Secure storage", description: "Encrypted backups in redundant storage with retention policies." },
    ],
  }),
  "email-module": createFeatureContent("email-module", {
    hero: { badge: "Communications", primaryCta: "Request a demo", secondaryCta: "View demo" },
    features: [
      { icon: EnvelopeSimple, title: "Email delivery", description: "Transactional and campaign emails with tracking and templates." },
      { icon: ChatCircleDots, title: "Automation", description: "Trigger-based sequences for onboarding, reminders, and promotions." },
      { icon: Globe, title: "Compliance", description: "Consent, unsubscribe, and regional compliance built in." },
    ],
  }),
};

export function getModuleFeatureContent(slug: string): ModuleFeatureContent | null {
  if (!isModuleFeatureSlug(slug)) return null;
  return CONTENT_BY_SLUG[slug] ?? createFeatureContent(slug);
}
