import type { PricingSubPageContent } from "@/components/frontend/pricing/sub-page";
import { createModuleSubpageContent } from "@/components/frontend/modules/subpage/create-module-content";

export const analyticsContent: PricingSubPageContent =
  createModuleSubpageContent("analytics", {
    capabilitiesHeading: "What the analytics module delivers",
    packagesHeading: "Analytics and reporting packages",
    ctaHeading: "Ready to unlock better insights?",
    faqItems: [
      { question: "What dashboards are included?", answer: "Pre-built dashboards for sales, compensation, recruitment, and product performance." },
      { question: "Can we export to our BI tools?", answer: "Yes. We support exports and APIs for Power BI, Tableau, and data warehouses." },
      { question: "How real-time is the data?", answer: "KPIs and reports can be near real-time; we also support scheduled and on-demand runs." },
    ],
  });
