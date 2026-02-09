import type { PricingSubPageContent } from "@/components/frontend/pricing/sub-page";
import { createModuleSubpageContent } from "@/components/frontend/modules/subpage/create-module-content";

export const compensationContent: PricingSubPageContent =
  createModuleSubpageContent("compensation", {
    capabilitiesHeading: "What the compensation module delivers",
    packagesHeading: "Compensation packages for every plan type",
    ctaHeading: "Ready to design your compensation plan?",
    faqItems: [
      { question: "Which plan types do you support?", answer: "Binary, unilevel, matrix, hybrid, and custom structures. We configure to your rules." },
      { question: "How do commissions run?", answer: "We support real-time and batch runs with full audit trails and rollback." },
      { question: "Can we change the plan later?", answer: "Yes. We support plan migrations and versioning so you can evolve without losing history." },
    ],
  });
