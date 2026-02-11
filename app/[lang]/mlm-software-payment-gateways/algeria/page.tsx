import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { PaymentGatewayCountryLayout } from "@/components/frontend/payment-gateways/subpages";
import type { PaymentGatewayCountryContent } from "@/components/frontend/payment-gateways/subpages";

export const dynamic = "force-static";

const METRICS = [
  { label: "Settlement cadence", value: "T+1", description: "Bank of Algeria clearing windows handled with automated approvals.", icon: "BarChart3" },
  { label: "Gateway partners", value: "14", description: "Adapters for public banks, private PSPs, and mobile wallets across Algeria.", icon: "Building2" },
  { label: "Regional reach", value: "6 corridors", description: "Expand into Maghreb and EU networks while keeping compliance unified.", icon: "Signal" },
];

const CLUSTERS = [
  {
    title: "Domestic bank orchestration",
    description: "Harmonise payouts across Banque Extérieure d'Algérie, Banque Nationale d'Algérie, and trusted private institutions.",
    bullets: ["ACH file automation with maker-checker workflows", "DZD and foreign currency accounts managed in one ledger", "Automated reconciliation mapped to CREG reporting"],
    icon: "Bank",
  },
  {
    title: "Digital wallet & card expansion",
    description: "Leverage CIB, Edahabia, and emerging mobile wallets to drive cashless incentives for distributors.",
    bullets: ["Tokenised payouts with 3-D Secure orchestration", "Risk scoring for card-not-present and wallet transactions", "Campaign automation to encourage digital adoption"],
    icon: "Layers3",
  },
  {
    title: "Cross-border growth",
    description: "Serve diaspora sales across France, Tunisia, and MENA partners while satisfying Algerian currency controls.",
    bullets: ["Dynamic FX policies with regulator-aligned buffers", "Consolidated dashboards for export reporting", "Compliance guardrails for import/export declarations"],
    icon: "GlobeSimple",
  },
];

const STAGES = [
  { name: "Discovery & regulatory mapping", detail: "Workshops capture treasury policies, compensation plans, and Bank of Algeria requirements.", icon: "Map" },
  { name: "Integration sprints", detail: "Connect banking APIs, SFTP exchanges, and wallet partners with observability baked in.", icon: "Layers3" },
  { name: "Operational launch", detail: "Pilot cohorts go live with dashboards, bilingual enablement, and exception response playbooks.", icon: "ChartLineUp" },
  { name: "Optimise & scale", detail: "Automate high-volume workflows, expand corridors, and embed analytics for leadership.", icon: "BarChart3" },
];

const GUARDS = [
  { title: "Compliance first", description: "Sanctions checks, transaction limits, and archival policies align with Bank of Algeria directives and international AML standards.", icon: "ShieldCheck" },
  { title: "Treasury command", description: "Liquidity forecasts, FX exposure dashboards, and alerting keep finance teams ahead of volatility.", icon: "ChartLineUp" },
  { title: "Distributor trust", description: "Transparent payout statuses, French and Arabic communications, and responsive support maintain confidence across the field.", icon: "UsersThree" },
];

const ALGERIA_CONTENT: PaymentGatewayCountryContent = {
  hero: {
    badge: "Algeria payment intelligence",
    title: "Build resilient MLM payment gateways across Algeria and the Maghreb",
    description:
      "Cloud MLM Software orchestrates Algeria's banking network, digital wallets, and regional corridors in one governed platform. Deliver trustworthy payouts, keep regulators aligned, and empower your distributor community with real-time clarity.",
    primaryCtaLabel: "Pricing",
    secondaryCtaLabel: "Try free demo",
    reserveDemoCtaLabel: "Reserve your demo",
    quote: "We now manage every commission cycle—public banks, wallets, diaspora sales—in a single ledger. Compliance reviews take minutes instead of days.",
    quoteAttribution: "Cloud MLM Software Algeria transformation lead",
    snapshotCtaLabel: "Review solution tiers",
    metrics: METRICS,
  },
  clusters: {
    heading: "Gateway clusters tailored to Algeria's financial landscape",
    description: "Cloud MLM Software has already helped leading Algerian organisations modernise their payout experiences. Select the cluster mix that aligns with your growth strategy.",
    items: CLUSTERS,
  },
  stages: {
    heading: "A delivery cadence tuned for Algerian regulators and leadership teams",
    description: "Each phase provides artefacts, analytics, and bilingual enablement so executives, auditors, and distributors stay confident.",
    items: STAGES,
  },
  guards: {
    heading: "Safeguard your reputation across Algeria's MLM landscape",
    description: "Governance, analytics, and field experience converge in Cloud MLM Software's Algeria blueprint. You gain accountability while giving distributors certainty.",
    items: GUARDS,
    briefcase: {
      title: "Algeria compliance briefcase",
      description: "Receive AML matrices, foreign exchange policy templates, and regulator-facing reports ready for your legal and finance teams to deploy.",
      artefactsLabel: "Artefacts",
      artefactsDetail: "Currency control workflows, sanction escalation scripts, and bilingual distributor disclosures.",
      refreshLabel: "Refresh cadence",
      refreshDetail: "Quarterly reviews, with immediate alerts when Bank of Algeria releases new directives.",
      ctaLabel: "Explore compliance bundles",
    },
  },
  faq: {
    heading: "Frequently asked questions",
    description: "Treasury, compliance, and distributor leaders across Algeria often ask the following.",
    items: [
      { question: "How do you manage DZD and foreign currency payouts together?", answer: "Cloud MLM Software lets you run multi-wallet ledgers, configure FX buffers, and report consolidated positions to treasury stakeholders." },
      { question: "Can we integrate with public-sector banks securely?", answer: "Yes. We automate SFTP and API exchanges with dual approvals, encrypted credentials, and immutable audit logs ready for regulator review." },
      { question: "What languages do you support for distributor communications?", answer: "Notification templates ship in Arabic, French, and English so every leader receives actionable updates in their preferred language." },
    ],
  },
  cta: {
    title: "Deliver trustworthy payouts across Algeria's MLM ecosystem",
    description: "Cloud MLM Software unifies public banks, PSPs, and regional corridors so you lead with clarity and resilience.",
    primaryCtaLabel: "Plan your launch",
    secondaryCtaLabel: "Request a live walkthrough",
  },
};

export async function generateMetadata({
  params,
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Algeria MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Coordinate Algeria-focused payment gateways. Cloud MLM Software fuses public banks, digital wallets, and regional corridors with regulator-grade governance.";
  return {
    title,
    description,
    alternates: { canonical: buildLocalizedPath("/mlm-software-payment-gateways/algeria", locale) },
    openGraph: { title, description },
    twitter: { title, description },
  };
}

type AlgeriaPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function AlgeriaPaymentGatewaysPage({ params }: AlgeriaPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <PaymentGatewayCountryLayout
      content={ALGERIA_CONTENT}
      contactHref={contactHref}
      demoHref={demoHref}
      pricingHref={pricingHref}
      locale={locale}
    />
  );
}

function resolveLocale(lang: string): Locale {
  if (!isSupportedLocale(lang)) return i18n.defaultLocale as Locale;
  return lang as Locale;
}
