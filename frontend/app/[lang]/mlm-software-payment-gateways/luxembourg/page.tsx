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
  title: string;
  description: string;
  icon: IconType;
};

type Gateway = {
  name: string;
  focus: string;
  bullets: string[];
  icon: IconType;
};

type Module = {
  label: string;
  detail: string;
  icon: IconType;
};

type TrackItem = {
  stage: string;
  copy: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Legacy statement",
    description:
      "Hero retains the WordPress copy: “Ways to accept payments from MLM Software in People’s Democratic Republic of Luxembourg – LU.”",
    icon: GlobeHemisphereEast
  },
  {
    title: "Gateway roster",
    description: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout.",
    icon: CreditCard
  },
  {
    title: "Module ecosystem",
    description:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, multi-lingual system.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal private banking runway",
    focus: "Bridge Luxembourg’s global investor base with automated compliance and donor-ready narratives.",
    bullets: [
      "Multi currency module reconciles EUR, CHF, GBP, and USD flows with treasury dashboards tailored to regulated funds.",
      "Ticket system module archives sanction diligence and CSSF correspondences for audit-ready evidence."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay premium retail",
    focus: "Deliver luxury-grade ecommerce experiences for Luxembourg City, Esch, and Grevenmacher.",
    bullets: [
      "Auto responder issues multilingual confirmations and VAT documentation instantly.",
      "Backup manager protects seasonal campaigns for philanthropy galas, fintech expos, and cultural programmes."
    ],
    icon: Sparkle
  },
  {
    name: "PayU cross-border mesh",
    focus: "Integrate EU, EEA, and global PSPs while keeping risk, treasury, and compliance stakeholders aligned.",
    bullets: [
      "Emails module distributes PSD2, AML, and BEPS updates with CFO commentary and action points.",
      "KYC documentation vault maps distributor verification, PSP onboarding artefacts, and renewal cycles."
    ],
    icon: Target
  },
  {
    name: "Stripe experimentation studio",
    focus: "Prototype AI concierge experiences for funds, family offices, and innovation hubs.",
    bullets: [
      "Webhook telemetry keeps Shopify, WooCommerce, and Magento storefronts synchronised with analytics.",
      "Ticket workflows issue AI-generated reproduction reports so engineering resolves incidents faster."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net global lane",
    focus: "Blend North American acquiring with Luxembourg’s governance frameworks and board approvals.",
    bullets: [
      "Multi-lingual system publishes compliance digests across French, German, and English stakeholders.",
      "Vaulted artefacts capture sanction checks, board minutes, and legal opinions for each merchant profile."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel core",
    focus: "Tokenised payments empower private briefings, hybrid conferences, and boutique experiences.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker guardrails and smart payout policies.",
      "Backup manager records offline transactions for limited-access events and cross-border showcases."
    ],
    icon: Plugs
  },
  {
    name: "Adyen unified ledger",
    focus: "Monitor EU, GCC, and American conversion health with risk telemetry and performance insights.",
    bullets: [
      "Currency analytics highlight success rates, interchange pressure, and FX exposure for CFO review.",
      "Ticket system escalates Adyen risk signals anchored with distributor artefacts and compliance commentary."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    focus: "Distribute digital academy content, AI enablement, and philanthropic briefings to global partners.",
    bullets: [
      "Auto responder nurtures onboarding journeys with milestone checklists and multilingual playbooks.",
      "ChatsCircle pods drive proactive outreach when telemetry signals friction or adoption plateaus."
    ],
    icon: ChatsCircle
  }
];

const MODULES: Module[] = [
  {
    label: "Multi currency system",
    detail: "Balances EUR, USD, GBP, CHF, and AED with variance analytics and treasury-ready exports.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Ticket system module",
    detail: "Routes compliance, PSP, logistics, and philanthropic requests with SLA dashboards and AI summaries.",
    icon: MapTrifold
  },
  {
    label: "Auto responder",
    detail: "Delivers French, German, and English communications instantly with AI-personalised sequences.",
    icon: Megaphone
  },
  {
    label: "E-voucher engine",
    detail: "Supports loyalty programmes, philanthropic campaigns, and partner incentives with telemetry.",
    icon: Sparkle
  },
  {
    label: "E-wallet manager",
    detail: "Streams instant commissions with maker-checker approvals and clear payout governance.",
    icon: Wallet
  },
  {
    label: "Backup manager",
    detail: "Captures immutable storefront, automation, and compliance artefacts to satisfy regulators.",
    icon: ShieldCheck
  },
  {
    label: "Emails module",
    detail: "Centralises transactional, campaign, and compliance messaging for leadership clarity.",
    icon: Megaphone
  },
  {
    label: "KYC documentation",
    detail: "Maintains distributor verification, sanction diligence, and PSP onboarding artefacts with reminders.",
    icon: StackSimple
  },
  {
    label: "Multi-lingual system",
    detail: "Keeps French, German, and English experiences synchronised across portals and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const TRACK: TrackItem[] = [
  {
    stage: "01 · Interpret the brief",
    copy:
      "Retain the WordPress headline, gateway list, and module references as the authoritative blueprint for Luxembourg.",
    icon: Buildings
  },
  {
    stage: "02 · Orchestrate the stack",
    copy:
      "Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual experiences operate under one telemetry layer.",
    icon: Compass
  },
  {
    stage: "03 · Activate the gateways",
    copy:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout complete sandbox, localisation, and compliance testing.",
    icon: Target
  },
  {
    stage: "04 · Optimise executive insight",
    copy:
      "Dashboards, AI summaries, and compliance artefacts keep Luxembourg’s leadership aligned with risk, treasury, and donor stakeholders.",
    icon: ChartLineUp
  }
];

export const metadata: Metadata = {
  title: "Luxembourg MLM Payment Gateways | Cloud MLM Software",
  description:
    "Reimagine the Luxembourg payment gateway checklist with AI telemetry, compliance guardrails, and automation across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/luxembourg"
  },
  openGraph: {
    title: "Luxembourg MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Luxembourg elevated with multi currency intelligence and executive-ready insights."
  }
};

