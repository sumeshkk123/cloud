import { ChatCircleDots, EnvelopeSimple, Globe } from "@phosphor-icons/react";
import type { ModuleFeatureContent } from "@/components/frontend/modules/subpage";

export const autoResponderContent: ModuleFeatureContent = {
  hero: {
    badge: "Automation",
    title: "Auto Responder Module | Cloud MLM Software",
    description: "Automated email and message sequences for onboarding and engagement. Part of Cloud MLM Software modules.",
    primaryCta: "Request a demo",
    secondaryCta: "View demo",
    metrics: [
      { label: "Sequences", value: "Unlimited", detail: "Trigger-based flows." },
      { label: "Events", value: "15+", detail: "Join, rank, order, custom." },
      { label: "Conversion lift", value: "2.5x", detail: "Onboarding and engagement." },
    ],
  },
  features: [
    { icon: EnvelopeSimple, title: "Automated sequences", description: "Trigger-based email and message sequences for onboarding and engagement." },
    { icon: Globe, title: "Lifecycle triggers", description: "Join date, rank change, order, and custom events drive the flow." },
    { icon: ChatCircleDots, title: "Templates & variants", description: "Reusable templates and A/B tests for better conversion." },
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
