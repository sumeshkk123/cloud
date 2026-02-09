import type { PricingSubPageContent } from "@/components/frontend/pricing/sub-page";
import { createModuleSubpageContent } from "@/components/frontend/modules/subpage/create-module-content";

export const marketingAutomationContent: PricingSubPageContent =
  createModuleSubpageContent("marketing-automation", {
    capabilitiesHeading: "What the marketing automation module delivers",
    packagesHeading: "Marketing automation packages",
    ctaHeading: "Ready to automate your campaigns?",
    faqItems: [
      { question: "Which channels are supported?", answer: "Email, SMS, push, and in-app. We orchestrate multi-channel journeys from one place." },
      { question: "How does segmentation work?", answer: "Segments are driven by CRM, e-commerce, and compensation data with real-time sync." },
      { question: "Do you support A/B testing?", answer: "Yes. We support subject lines, content blocks, and send-time optimisation with reporting." },
    ],
  });
