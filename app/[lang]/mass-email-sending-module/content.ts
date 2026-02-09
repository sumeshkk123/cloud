import { ChatCircleDots, EnvelopeSimple, Globe } from "@phosphor-icons/react";
import type { ModuleFeatureContent } from "@/components/frontend/modules/subpage";

export const massEmailSendingModuleContent: ModuleFeatureContent = {
  hero: {
    badge: "Email",
    title: "Mass Email Sending Module | Cloud MLM Software",
    description:
      "Send bulk emails, campaigns, and automated sequences to your network. Part of Cloud MLM Software modules.",
    primaryCta: "Request a demo",
    secondaryCta: "View demo",
    metrics: [
      { label: "Campaigns sent", value: "2M+", detail: "Monthly emails across programmes." },
      { label: "Inbox placement", value: "98%", detail: "Deliverability best practices." },
      { label: "Segments", value: "Unlimited", detail: "By rank, region, and activity." },
    ],
  },
  features: [
    { icon: EnvelopeSimple, title: "Bulk campaigns", description: "Send targeted campaigns and sequences to your entire network or segments." },
    { icon: Globe, title: "Deliverability", description: "Built-in best practices and monitoring for inbox placement and engagement." },
    { icon: ChatCircleDots, title: "Templates & tracking", description: "Reusable templates, open/click tracking, and reporting." },
  ],
  faq: {
    heading: "Frequently asked questions",
    items: [
      { question: "What sending limits apply?", answer: "Limits depend on your plan and domain reputation; we help you scale safely." },
      { question: "Can we segment by rank or region?", answer: "Yes. Segments use your MLM data: rank, join date, activity, and more." },
    ],
  },
  cta: { heading: "Ready to add this module?", description: "Talk to our team for a tailored proposal and next steps.", buttonText: "Contact us" },
};
