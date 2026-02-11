import { ShoppingCart, Package, Storefront } from "@phosphor-icons/react";
import type { ModuleFeatureContent } from "@/components/frontend/modules/subpage";

/** Image for Types section (why choose) on e-commerce module page */
const TYPES_IMAGE = "/images/dashboard-deign.webp";

export const ecommerceContent: ModuleFeatureContent = {
  hero: {
    badge: "E-Commerce",
    title: "E-Commerce module",
    description:
      "An E-Commerce module in MLM software powers product catalogs, orders, and fulfilment for direct selling. Integrate with compensation and genealogy so commissions and ranks update in real time. Support one-time and recurring orders with flexible billing.",
    primaryCta: "Request a demo",
    secondaryCta: "View demo",
    metrics: [
      { label: "Catalogs", value: "Configurable", detail: "Products, variants, inventory." },
      { label: "Orders", value: "Sync", detail: "To compensation and ranks." },
      { label: "Fulfilment", value: "Flexible", detail: "One-time and subscriptions." },
    ],
  },
  intro: {
    badge: "Why this module",
    heading: "Unify e-commerce and MLM in one platform",
    paragraphs: [
      "The E-Commerce module gives your network a single place to browse products, place orders, and track fulfilment. Catalogs, variants, inventory, and pricing are fully configurable. Orders sync to the compensation module so commissions and ranks update in real time.",
      "Cloud MLM's E-Commerce module is built for direct selling: support one-time and recurring orders, flexible billing, and fulfilment workflows. Your members get a seamless shopping experience while you keep control over products, pricing, and commissions.",
    ],
    partnerCard: {
      badge: "Included",
      heading: "Features of the E-Commerce module",
      points: [
        "Product catalogs with variants and inventory",
        "Orders sync to compensation and genealogy",
        "One-time and recurring (subscription) orders",
        "Multi-currency and multi-locale support",
      ],
    },
  },
  importanceSection: {
    badge: "E-Commerce",
    heading: "Why an E-Commerce module in MLM software?",
    subheading: "Importance of Cloud MLM's E-Commerce module",
    paragraphs: [
      "Direct selling runs on product movement and repeat orders. An integrated E-Commerce module keeps catalogs, orders, and fulfilment in one system so commissions, ranks, and genealogy stay accurate. No manual syncing or spreadsheets.",
      "The E-Commerce module connects to your compensation plan and network structure. Every order flows through the same engine that powers commissions and reporting, so you get a single source of truth for sales and payouts.",
    ],
    imageSrc: "/images/dashboard-deign.webp",
    imageAlt: "Cloud MLM Software E-Commerce – catalogs, orders, and fulfilment",
  },
  benefitsSection: {
    badge: "Benefits",
    heading: "Cloud MLM's E-Commerce module includes",
    description: "Configure products, orders, and fulfilment in one place. Integrate with compensation and genealogy for real-time commissions and reporting.",
    items: [
      { title: "Product catalogs", description: "Products, variants, inventory, and pricing fully configurable for your plan." },
      { title: "Order management", description: "Orders flow into compensation and genealogy; commissions and ranks update in real time." },
      { title: "Subscriptions", description: "Support one-time and recurring orders with flexible billing and fulfilment." },
      { title: "Multi-currency & locale", description: "Sell in multiple currencies and languages with localized catalogs and checkout." },
      { title: "Reporting & analytics", description: "Dashboards and exports for orders, revenue, and commission impact." },
    ],
  },
  whyChooseSection: {
    imageSrc: TYPES_IMAGE,
    imageAlt: "E-Commerce module for MLM",
    badge: "Types",
    heading: "Key capabilities of the E-Commerce module",
    description:
      "Configurable catalogs, order sync to compensation, one-time and subscription orders, multi-currency and multi-locale, and reporting.",
    items: [
      {
        number: "01",
        title: "Catalogs & inventory",
        description:
          "Products, variants, inventory, and pricing are fully configurable. Support multiple catalogs and regions.",
      },
      {
        number: "02",
        title: "Orders & compensation",
        description:
          "Orders sync to the compensation module so commissions and ranks update in real time. Full audit trail.",
      },
      {
        number: "03",
        title: "Subscriptions & fulfilment",
        description:
          "One-time and recurring orders with flexible billing. Fulfilment workflows and integrations as per your business rules.",
      },
    ],
  },
  features: [
    {
      icon: ShoppingCart,
      title: "Product catalogs",
      description:
        "Configure products, variants, inventory, and pricing. Support multiple catalogs and regions. Orders sync to compensation and genealogy.",
    },
    {
      icon: Package,
      title: "Orders & fulfilment",
      description:
        "One-time and recurring orders with flexible billing. Fulfilment workflows and reporting. Multi-currency and multi-locale.",
    },
    {
      icon: Storefront,
      title: "Unified selling",
      description:
        "Single platform for e-commerce and MLM. Commissions and ranks update in real time. Dashboards and exports for orders and revenue.",
    },
  ],
  faq: {
    badge: "FAQ",
    heading: "Frequently asked questions",
    description: "Common questions about the E-Commerce module.",
    items: [
      {
        question: "Do you support product catalogs?",
        answer:
          "Yes. Catalogs, variants, inventory, and pricing are fully configurable. You can support multiple catalogs and regions.",
      },
      {
        question: "How do orders flow to compensation?",
        answer:
          "Orders sync to the compensation module so commissions and ranks update in real time. We provide full audit and reporting.",
      },
      {
        question: "What about subscriptions?",
        answer:
          "We support one-time and recurring orders with flexible billing and fulfilment. Configure plans and billing to match your business.",
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
