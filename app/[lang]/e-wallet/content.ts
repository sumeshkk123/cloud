import { CurrencyDollar, HardDrives, Wallet } from "@phosphor-icons/react";
import type { ModuleFeatureContent } from "@/components/frontend/modules/subpage";

export const eWalletContent: ModuleFeatureContent = {
  hero: {
    badge: "Payments",
    title: "E-Wallet Module for MLM Software | Cloud MLM Software",
    description: "Digital wallet for commissions, payouts, and in-network transactions. Part of Cloud MLM Software modules.",
    primaryCta: "Request a demo",
    secondaryCta: "View demo",
    metrics: [
      { label: "Transactions", value: "99.9%", detail: "Uptime for payouts." },
      { label: "Settlement", value: "T+1", detail: "Bank and in-network." },
      { label: "Audit", value: "Full", detail: "Compliance-ready history." },
    ],
  },
  features: [
    { icon: Wallet, title: "Digital balance", description: "Distributors and customers hold a wallet balance for commissions and purchases." },
    { icon: CurrencyDollar, title: "Payouts & transfers", description: "Withdraw to bank or use in-network for orders and fees." },
    { icon: HardDrives, title: "Audit trail", description: "Full transaction history and reporting for finance and compliance." },
  ],
  faq: {
    heading: "Frequently asked questions",
    items: [
      { question: "How do we get started?", answer: "We begin with a discovery call and configure the module for your plan." },
      { question: "Do you offer training?", answer: "Yes. We provide docs, training, and ongoing support." },
    ],
  },
  cta: { heading: "Ready to add this module?", description: "Talk to our team for a tailored proposal and next steps.", buttonText: "Contact us" },
};
