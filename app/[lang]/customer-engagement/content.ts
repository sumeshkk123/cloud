import type { PricingSubPageContent } from "@/components/frontend/pricing/sub-page";
import { createModuleSubpageContent } from "@/components/frontend/modules/subpage/create-module-content";

export const customerEngagementContent: PricingSubPageContent =
  createModuleSubpageContent("customer-engagement", {
    capabilitiesHeading: "What the customer engagement module delivers",
    packagesHeading: "Customer and distributor engagement packages",
    ctaHeading: "Ready to boost engagement?",
    faqItems: [
      { question: "What engagement tools are included?", answer: "Support tickets, loyalty, learning, and journey automation for customers and distributors." },
      { question: "How does it tie to compensation?", answer: "Engagement actions can trigger incentives and rank rules in the compensation module." },
      { question: "Do you support mobile?", answer: "Yes. Responsive portals and optional native apps for distributors and customers." },
    ],
  });
