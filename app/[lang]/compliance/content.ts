import type { PricingSubPageContent } from "@/components/frontend/pricing/sub-page";
import { createModuleSubpageContent } from "@/components/frontend/modules/subpage/create-module-content";

export const complianceContent: PricingSubPageContent =
  createModuleSubpageContent("compliance", {
    capabilitiesHeading: "What the compliance module delivers",
    packagesHeading: "Compliance and governance packages",
    ctaHeading: "Ready to strengthen your compliance?",
    faqItems: [
      { question: "Which regulations do you cover?", answer: "We support FTC, GDPR, CASL, and other regional requirements with configurable rules." },
      { question: "How is consent stored?", answer: "Consent and preferences are stored with full audit trails and export for legal review." },
      { question: "Can we run internal audits?", answer: "Yes. Audit logs, reports, and suppression lists are available for compliance teams." },
    ],
  });
