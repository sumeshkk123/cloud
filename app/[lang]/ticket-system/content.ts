import { ChatCircleDots, Globe, Ticket } from "@phosphor-icons/react";
import type { ModuleFeatureContent } from "@/components/frontend/modules/subpage";

export const ticketSystemContent: ModuleFeatureContent = {
  hero: {
    badge: "Support",
    title: "Ticket System Module for MLM Software | Cloud MLM Software",
    description: "Support ticket system for distributors and customers. Part of Cloud MLM Software modules.",
    primaryCta: "Request a demo",
    secondaryCta: "View demo",
    metrics: [
      { label: "Tickets resolved", value: "50K+", detail: "Per month, per programme." },
      { label: "SLA met", value: "96%", detail: "Priority and due-date rules." },
      { label: "Languages", value: "20+", detail: "Agent and user locale." },
    ],
  },
  features: [
    { icon: Ticket, title: "Ticket management", description: "Create, assign, and track support tickets for distributors and customers." },
    { icon: ChatCircleDots, title: "Priorities & SLA", description: "Set priorities, due dates, and escalation rules." },
    { icon: Globe, title: "Multi-language", description: "Support tickets in the language of the user and agent." },
  ],
  faq: {
    heading: "Frequently asked questions",
    items: [
      { question: "How do we get started?", answer: "We begin with a discovery call and configure the module for your plan." },
      { question: "Is it included in our plan?", answer: "Module availability depends on your plan; we can add or upgrade modules." },
    ],
  },
  cta: { heading: "Ready to add this module?", description: "Talk to our team for a tailored proposal and next steps.", buttonText: "Contact us" },
};
