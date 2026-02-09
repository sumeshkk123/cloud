import { ChatCircleDots, EnvelopeSimple, Globe } from "@phosphor-icons/react";
import type { ModuleFeatureContent } from "@/components/frontend/modules/subpage";

export const emailModuleContent: ModuleFeatureContent = {
  hero: {
    badge: "Communications",
    title: "Email Module | Cloud MLM Software",
    description: "Email and communications module for MLM: templates, tracking, and automation. Part of Cloud MLM Software modules.",
    primaryCta: "Request a demo",
    secondaryCta: "View demo",
    metrics: [
      { label: "Emails sent", value: "10M+", detail: "Transactional and campaign." },
      { label: "Templates", value: "Unlimited", detail: "With tracking and variants." },
      { label: "Compliance", value: "Built-in", detail: "Consent and unsubscribe." },
    ],
  },
  features: [
    { icon: EnvelopeSimple, title: "Email delivery", description: "Transactional and campaign emails with tracking and templates." },
    { icon: ChatCircleDots, title: "Automation", description: "Trigger-based sequences for onboarding, reminders, and promotions." },
    { icon: Globe, title: "Compliance", description: "Consent, unsubscribe, and regional compliance built in." },
  ],
  faq: {
    heading: "Frequently asked questions",
    items: [
      { question: "How do we get started?", answer: "We begin with a discovery call and configure the module for your plan." },
      { question: "Do you offer training?", answer: "Yes. We provide docs, training, and ongoing support." },
    ],
  },
  cta: { heading: "Ready to add this module?", description: "Talk to our team for a tailored proposal and next steps.", buttonText: "Contact us" },
};
