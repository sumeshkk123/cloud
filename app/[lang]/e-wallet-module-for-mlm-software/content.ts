import { CurrencyDollar, Wallet, ArrowsLeftRight } from "@phosphor-icons/react";
import type { ModuleFeatureContent } from "@/components/frontend/modules/subpage";

/** Image for Types section (why choose) on e-wallet page */
const TYPES_IMAGE = "/images/moduleEvalletIntro.svg";

export const eWalletContent: ModuleFeatureContent = {
  hero: {
    badge: "Payments",
    title: "E-Wallet module",
    description:
      "An E-Wallet module in MLM software is a secure digital wallet, that is designed to manage the finances of members of an MLM business. With the help of an E Wallet, users can store their earned commissions and bonuses, transfer the same to other members and make withdrawals easily as well.",
    primaryCta: "Request a demo",
    secondaryCta: "View demo",
    metrics: [
      { label: "Balance", value: "Real-time", detail: "Updated instantly." },
      { label: "Multi-currency", value: "Supported", detail: "In E-Wallet." },
      { label: "Audit", value: "Full", detail: "CR/DR and history." },
    ],
  },
  intro: {
    badge: "Why this module",
    heading: "Empowering MLM Businesses with Secure E-Wallet and Virtual Voucher System",
    paragraphs: [
      "E-Wallet is secure for management of earnings and transactions by the members. Members can store, transfer and withdraw the funds with E-Wallet in a secure and fast way. The balance will be updated instantly when each transaction happens in real time and complete details will be available in the member area. We support multiple currency in E-Wallet as well. So the members don't need to worry about their money transaction issues while making purchase or transferring or payout request connected to your MLM business.",
      "Cloud MLM's E-wallet module is changing the face of how your members control their earnings and manage money within your MLM business. Your customers can save their commissions/bonuses, send money to other members and withdraw it whenever they want using the easy, user-friendly interface of E-Wallet.",
    ],
    partnerCard: {
      badge: "Included",
      heading: "Features of E-wallet module",
      points: [
        "Integrate your bank account",
        "Integrate pre-paid card to your e-wallet",
        "Integrate your credit card",
        "Transfer money from home, work, or everywhere in the globe.",
      ],
    },
  },
  importanceSection: {
    badge: "Payments",
    heading: "Why an E-Wallet module in MLM software?",
    subheading: "Importance of Cloud MLM's E-wallet system module",
    paragraphs: [
      "To handle the economic transaction of all customers, Cloud MLM software is integrated with the e-Wallet system which is a virtual wallet for customers. The amount in the E-wallet is used for purchasing the E-pins. The amount in the E-wallet is used for buying or ordering the products. The amount in the E-wallet is used for new registrations. The amount deducted in the purpose of delivering from the profits can readily be moved to the E-wallet. The money can easily be moved to any other customer's E-wallet.",
      "E-wallet system is a gateway to control and manage all the cash-in and cash-out financial transactions of users in MLM business. MLM business can transfer amount directly to their member's and user's e-wallet account using Cloud MLM e-wallet system as well as allow them to send the money to other accounts worldwide.",
    ],
    imageSrc: "/images/dashboard-deign.webp",
    imageAlt: "Cloud MLM Software E-Wallet – secure digital payment management",
  },
  benefitsSection: {
    badge: "Benefits",
    heading: "Cloud MLM's E-Wallet module includes",
    description: "The E-wallet module is the storage of income as virtual money. Using this virtual money, members can manage commissions, transfers, and withdrawals.",
    items: [
      { title: "E-Pin Generation", description: "Generate E-Pins for products, registrations, and internal use within your MLM programme." },
      { title: "E-Pin Transfer", description: "Transfer E-Pins between members securely with full audit trail." },
      { title: "Refund of Generation E-Pins", description: "Refund E-Pins when needed with proper controls and history." },
      { title: "E-Pin Transfer History", description: "Complete history of E-Pin transfers for compliance and reporting." },
      { title: "Wallet Statement", description: "Real-time wallet statement so members see balance and all transactions." },
      { title: "Fund transfer to other IDs", description: "Transfer funds to other member IDs within the network easily and securely." },
      { title: "Add/remove Fund To wallet", description: "Admin can add or remove funds to/from wallet as per business rules." },
      { title: "CR/DR & All Transaction as per need", description: "Credit, debit, and all transaction types with full audit for compliance." },
    ],
  },
  whyChooseSection: {
    imageSrc: TYPES_IMAGE,
    imageAlt: "E-Wallet module for MLM",
    badge: "Types",
    heading: "Key capabilities of the E-Wallet module",
    description:
      "Secure storage, instant balance updates, E-Pin generation and transfer, fund transfers between members, and full transaction history. Multi-currency supported.",
    items: [
      {
        number: "01",
        title: "E-Pin Generation & Transfer",
        description:
          "Generate E-Pins for products and registrations. Transfer E-Pins between members with refund and full transfer history. CR/DR and all transactions as per need.",
      },
      {
        number: "02",
        title: "Wallet Statement & Balance",
        description:
          "Real-time balance updated instantly on every transaction. Complete details available in the member area. Wallet statement for full transparency.",
      },
      {
        number: "03",
        title: "Fund transfer & Add/remove",
        description:
          "Transfer funds to other member IDs. Add or remove funds to/from wallet. Integrate bank account, pre-paid card, and credit card. Transfer money from anywhere in the globe.",
      },
    ],
  },
  features: [
    {
      icon: Wallet,
      title: "Digital balance",
      description:
        "Members store commissions and bonuses in a secure E-Wallet. Balance updates in real time. Multiple currency supported. Full details in the member area.",
    },
    {
      icon: ArrowsLeftRight,
      title: "Transfers & withdrawals",
      description:
        "Transfer to other members, withdraw when needed. E-Pin generation and transfer, fund transfer to other IDs. Add/remove fund to wallet with audit trail.",
    },
  ],
  faq: {
    badge: "FAQ",
    heading: "Frequently asked questions",
    description: "Common questions about the E-Wallet module.",
    items: [
      {
        question: "How do we get started?",
        answer:
          "We begin with a discovery call and configure the E-Wallet module for your plan. We set up E-Pin generation, fund transfers, wallet statement, and multi-currency so you go live with confidence.",
      },
      {
        question: "Do you offer training?",
        answer:
          "Yes. We provide documentation, training, and ongoing support so your team and members can use the E-Wallet for commissions, transfers, and withdrawals effectively.",
      },
    ],
  },
  cta: {
    heading: "Purchase AI-Powered Cloud MLM Software Today!",
    description:
      "Achieve MLM success with smart AI-driven tools! Automate, manage, and grow your network effortlessly. Buy now and scale your business!",
    buttonText: "Buy Now",
    secondaryCta: "Try Demo",
    trustIndicators: ["Quick implementation", "Expert support", "Secure transactions"],
  },
};
