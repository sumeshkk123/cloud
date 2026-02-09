import type { PricingSubPageContent } from "@/components/frontend/pricing/sub-page";
import { createModuleSubpageContent } from "@/components/frontend/modules/subpage/create-module-content";

export const ecommerceContent: PricingSubPageContent =
  createModuleSubpageContent("ecommerce", {
    capabilitiesHeading: "What the e-commerce module delivers",
    packagesHeading: "E-commerce and order management packages",
    ctaHeading: "Ready to power your direct-selling e-commerce?",
    faqItems: [
      { question: "Do you support product catalogs?", answer: "Yes. Catalogs, variants, inventory, and pricing are fully configurable." },
      { question: "How do orders flow to compensation?", answer: "Orders sync to the compensation module so commissions and ranks update in real time." },
      { question: "What about subscriptions?", answer: "We support one-time and recurring orders with flexible billing and fulfilment." },
    ],
  });
