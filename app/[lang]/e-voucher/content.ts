import { CurrencyDollar, Gift, Wallet } from "@phosphor-icons/react";
import type { ModuleFeatureContent } from "@/components/frontend/modules/subpage";

export const eVoucherContent: ModuleFeatureContent = {
  hero: {
    badge: "Rewards",
    title: "E-Voucher For MLM Software | Cloud MLM Software",
    description: "Digital vouchers and gift cards for rewards, incentives, and promotions. Part of Cloud MLM Software modules.",
    primaryCta: "Request a demo",
    secondaryCta: "View demo",
    metrics: [
      { label: "Vouchers issued", value: "500K+", detail: "Incentives and rewards." },
      { label: "Currencies", value: "150+", detail: "Global redemption support." },
      { label: "Redemption rate", value: "85%", detail: "Tracked per campaign." },
    ],
  },
  features: [
    { icon: Gift, title: "Digital vouchers", description: "Issue and redeem e-vouchers for incentives, rewards, and promotions." },
    { icon: Wallet, title: "Redemption tracking", description: "Track redemptions, expiry, and balance across your network." },
    { icon: CurrencyDollar, title: "Multi-currency", description: "Support multiple currencies and regions for global programmes." },
  ],
  faq: {
    heading: "Frequently asked questions",
    items: [
      { question: "How do we get started?", answer: "We begin with a discovery call and configure the module for your plan." },
      { question: "Is it included in our plan?", answer: "Module availability depends on your plan; we can add or upgrade modules." },
    ],
  },
  cta: { heading: "Ready to add this module?", description: "Talk to our team for a tailored proposal and next steps.", buttonText: "Contact us" },
};
