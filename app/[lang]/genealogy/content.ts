import type { PricingSubPageContent } from "@/components/frontend/pricing/sub-page";
import { createModuleSubpageContent } from "@/components/frontend/modules/subpage/create-module-content";

export const genealogyContent: PricingSubPageContent =
  createModuleSubpageContent("genealogy", {
    capabilitiesHeading: "What the genealogy module delivers",
    packagesHeading: "Genealogy and network tree packages",
    ctaHeading: "Ready to visualise and manage your network?",
    faqItems: [
      { question: "Which tree views do you support?", answer: "We support unilevel, matrix, and custom tree views with drill-down and filters." },
      { question: "How do we handle large networks?", answer: "Lazy loading and server-side aggregation keep performance smooth at scale." },
      { question: "Can we export the tree?", answer: "Yes. Export to CSV/Excel and use APIs for custom visualisations." },
    ],
  });
