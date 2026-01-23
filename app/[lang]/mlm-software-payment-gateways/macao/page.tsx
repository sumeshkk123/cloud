import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { ArrowUpRight } from "lucide-react";
import {
  Bank,
  Buildings,
  ChartLineUp,
  ChatsCircle,
  Compass,
  CreditCard,
  CurrencyCircleDollar,
  GlobeHemisphereEast,
  Lightning,
  MapTrifold,
  Megaphone,
  Plugs,
  ShieldCheck,
  Sparkle,
  StackSimple,
  Target,
  UsersThree,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  heading: string;
  text: string;
  icon: IconType;
};

type Gateway = {
  name: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Module = {
  label: string;
  detail: string;
  icon: IconType;
};

type SequenceStep = {
  stage: string;
  copy: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    heading: "Legacy statement",
    text:
      "We preserve the WordPress copy: “Ways to accept payments from MLM Software in People’s Democratic Republic of Macao – MO.”",
    icon: GlobeHemisphereEast
  },
  {
    heading: "Gateway roster",
    text: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout.",
    icon: CreditCard
  },
  {
    heading: "Module ecosystem",
    text:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, and the multi-lingual system operate together.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal tourism concierge",
    description:
      "Connect Macao’s global visitors and diaspora investors with regulated, automated payment flows.",
    bullets: [
      "Multi currency module reconciles MOP, HKD, USD, and CNY with variance alerts tailored to treasury and VIP programmes.",
      "Ticket system module stores sanction diligence and DICJ compliance artefacts for audit-ready trust."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay luxury retail",
    description:
      "Deliver frictionless ecommerce experiences for integrated resorts, retail, and hospitality partners across the peninsula and Taipa.",
    bullets: [
      "Auto responder issues Chinese, Portuguese, and English confirmations along with customs-ready documentation.",
      "Backup manager safeguards seasonal campaigns linked to tourism festivals and entertainment launches."
    ],
    icon: Sparkle
  },
  {
    name: "PayU cross-border mesh",
    description:
      "Integrate PSPs spanning Greater Bay Area corridors without compromising compliance oversight.",
    bullets: [
      "Emails module circulates AML, gaming, and financial authority updates with CFO commentary.",
      "KYC documentation vault maps distributor verification, PSP onboarding files, and renewal reminders."
    ],
    icon: Target
  },
  {
    name: "Stripe experimentation studio",
    description:
      "Prototype AI concierge services for entertainment, education, and wellness programmes across resorts and digital channels.",
    bullets: [
      "Webhook telemetry keeps Shopify, WooCommerce, and Magento storefronts synchronised with analytics dashboards.",
      "Ticket workflows provide engineering pods with AI-authored reproduction notes and severity insights."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net global lane",
    description:
      "Blend North American acquiring with Macao’s governance frameworks and operator board approvals.",
    bullets: [
      "Multi-lingual system publishes policy digests across Chinese, Portuguese, and English stakeholders.",
      "Vaulted artefacts capture sanction checks, merchant approvals, and legal opinions for each profile."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel core",
    description:
      "Tokenised payments empower VIP pop-ups, hybrid shows, and loyalty experiences across resorts.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker guardrails and payout policies.",
      "Backup manager records offline transactions from experiential activations and limited-access venues."
    ],
    icon: Plugs
  },
  {
    name: "Adyen unified ledger",
    description:
      "Monitor EU, APAC, and North American conversion health with risk telemetry and executive dashboards.",
    bullets: [
      "Currency analytics highlight success rates, interchange exposure, and FX volatility for CFO review.",
      "Ticket system escalates Adyen risk alerts enriched with distributor evidence and compliance commentary."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    description:
      "Distribute digital kits, AI enablement, and remote trainings to partner networks worldwide.",
    bullets: [
      "Auto responder nurtures onboarding journeys with milestone checklists and multilingual playbooks.",
      "ChatsCircle pods trigger proactive outreach when telemetry shows friction or stalled adoption."
    ],
    icon: ChatsCircle
  }
];

const MODULES: Module[] = [
  {
    label: "Multi currency system",
    detail: "Balances MOP, HKD, USD, and CNY with variance analytics and treasury-ready exports.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Ticket system module",
    detail: "Routes compliance, PSP, hospitality, and donor cases with SLA dashboards and AI summaries.",
    icon: MapTrifold
  },
  {
    label: "Auto responder",
    detail: "Delivers Chinese, Portuguese, and English communications instantly with AI-personalised sequencing.",
    icon: Megaphone
  },
  {
    label: "E-voucher engine",
    detail: "Supports loyalty programmes, event campaigns, and tourism incentives with telemetry.",
    icon: Sparkle
  },
  {
    label: "E-wallet manager",
    detail: "Streams instant commissions and reimbursements with maker-checker approvals and spend controls.",
    icon: Wallet
  },
  {
    label: "Backup manager",
    detail: "Captures immutable storefronts, automation flows, and compliance artefacts for regulatory reviews.",
    icon: ShieldCheck
  },
  {
    label: "Emails module",
    detail: "Centralises transactional, campaign, and compliance messaging for leadership clarity.",
    icon: Megaphone
  },
  {
    label: "KYC documentation",
    detail: "Maintains distributor verification, sanction diligence, and PSP onboarding packs with reminders.",
    icon: StackSimple
  },
  {
    label: "Multi-lingual system",
    detail: "Keeps Chinese, Portuguese, and English experiences synchronised across portals and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const SEQUENCE: SequenceStep[] = [
  {
    stage: "01 · Interpret the brief",
    copy:
      "Retain the WordPress headline, gateway list, and module references as the blueprint for Macao’s launch.",
    icon: Buildings
  },
  {
    stage: "02 · Orchestrate the modules",
    copy:
      "Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual experiences gain telemetry and compliance guardrails.",
    icon: Compass
  },
  {
    stage: "03 · Activate the gateways",
    copy:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout pass sandbox, localisation, and compliance testing.",
    icon: Target
  },
  {
    stage: "04 · Optimise insight cadence",
    copy:
      "Dashboards, AI summaries, and compliance artefacts demonstrate Cloud MLM Software’s stewardship to operators, investors, and regulators.",
    icon: ChartLineUp
  }
];

export const metadata: Metadata = {
  title: "Macao MLM Payment Gateways | Cloud MLM Software",
  description:
    "Modernise the Macao payment gateway checklist with AI-enabled telemetry, compliance guardrails, and orchestration across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/macao"
  },
  openGraph: {
    title: "Macao MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Macao elevated with multi currency intelligence, ticket governance, and hospitality-ready automation."
  }
};

