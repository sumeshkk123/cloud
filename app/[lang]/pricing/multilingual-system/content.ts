import {
  BookOpen,
  ChatCircleDots,
  Globe,
  GlobeHemisphereEast,
  Headset,
  Megaphone,
  Shield,
  Sparkle,
  SpeakerHigh,
  Translate,
  UsersThree,
} from "@phosphor-icons/react";
import type { PricingSubPageContent } from "@/components/frontend/pricing/sub-page";

export const multilingualSystemContent: PricingSubPageContent = {
  hero: {
    badge: "Localise every touchpoint with confidence",
    title: "Multilingual system pricing that scales storytelling worldwide.",
    description:
      "Cloud MLM Software blends AI translation, human expertise, and governance so teams can launch multilingual campaigns, portals, and support assets without friction.",
    primaryCta: "Book a pricing session",
    secondaryCta: "Pricing",
    metrics: [
      {
        label: "Languages operationalised",
        value: "48",
        description:
          "Distributor and customer experiences deployed with full localisation.",
        icon: Translate,
      },
      {
        label: "Content turnaround",
        value: "72 hrs",
        description:
          "Average time to publish updates across priority languages.",
        icon: Megaphone,
      },
      {
        label: "Translation accuracy",
        value: "99.3%",
        description:
          "Quality score from compliance and field leadership reviews.",
        icon: Shield,
      },
      {
        label: "Adoption uplift",
        value: "28%",
        description:
          "Increase in engagement from multilingual onboarding and support.",
        icon: UsersThree,
      },
    ],
  },
  sections: [
    {
      type: "capabilities",
      heading: "Localisation engineered for momentum",
      description:
        "Our multilingual system engagements distil lessons from high-performing direct selling brands worldwide. We embed localisation into everyday operations so marketing and product teams keep pace with global demand.",
      items: [
        {
          title: "Unified language orchestration",
          description:
            "Manage marketing, product, and support content in one governance model aligned to Cloud MLM Software modules.",
          bullets: [
            "Glossary and tone guidelines shared across teams",
            "CMS connectors with translation memory and version control",
            "Automated fallback logic for launches and urgent updates",
          ],
          icon: GlobeHemisphereEast,
        },
        {
          title: "AI-assisted localisation",
          description:
            "Blend machine translation, human review, and AI quality checks to keep releases timely without sacrificing nuance.",
          bullets: [
            "Custom engines trained on industry terminology",
            "Human QA workflows with jurisdiction-specific reviewers",
            "Quality scoring and continuous improvement dashboards",
          ],
          icon: Sparkle,
        },
        {
          title: "Omnichannel delivery",
          description:
            "Synchronise web, mobile, video, and support scripts so distributors and customers receive consistent messaging in every channel.",
          bullets: [
            "Portal, app, and document localisation pipelines",
            "Voice-over and caption services for events and academies",
            "Knowledge base and chatbot content synchronisation",
          ],
          icon: Megaphone,
        },
      ],
    },
    {
      type: "roadmap",
      heading: "Seven-week localisation workflow",
      description:
        "Our cadence keeps marketing, compliance, and technology teams aligned. Every phase ends with artefacts ready for leadership sign-off.",
      stages: [
        {
          title: "Discovery & language modelling",
          description:
            "Capture market priorities, regulatory needs, and stakeholder processes to design localisation governance. Deliverables: persona-driven content mapping by channel, glossary creation with legal approval checkpoints, roadmap for phased language rollouts.",
          duration: "Weeks 1-2",
          icon: Globe,
        },
        {
          title: "Platform configuration",
          description:
            "Integrate translation workflows with Cloud MLM Software modules, marketing systems, and support tools. Deliverables: automation scripts and translation memory setup, sandbox testing for portals, apps, and documents, training for content producers and reviewers.",
          duration: "Weeks 3-5",
          icon: BookOpen,
        },
        {
          title: "Activation & optimisation",
          description:
            "Launch multilingual experiences, measure impact, and fine-tune cadence for future releases. Deliverables: quality assurance with field and compliance reps, engagement dashboards with localisation KPIs, optimisation backlog for upcoming campaigns.",
          duration: "Weeks 6-7",
          icon: ChatCircleDots,
        },
      ],
    },
    {
      type: "packages",
      sectionTitle: "Packages",
      heading: "Packages for every growth stage",
      description:
        "Each package bundles technology, process design, and enablement so your teams can deliver multilingual experiences with confidence.",
      ctaLabel: "Discuss this package",
      items: [
        {
          title: "Launch bundle",
          price: "$12k fixed",
          description: "Brands entering new priority markets",
          outcomes: [
            "Language governance playbook with glossary + tone guide",
            "CMS + Cloud MLM Software localisation workflows",
            "Training for marketing and compliance reviewers",
          ],
          icon: Translate,
        },
        {
          title: "Growth accelerator",
          price: "$19k fixed",
          description: "Organisations expanding across regions rapidly",
          outcomes: [
            "Automated review routing and stakeholder dashboards",
            "Video, audio, and chatbot localisation pipeline",
            "Engagement metrics tied to language rollout milestones",
          ],
          icon: SpeakerHigh,
        },
        {
          title: "Enterprise localisation office",
          price: "Custom engagement",
          description:
            "Global enterprises operating in highly regulated markets",
          outcomes: [
            "Localization PMO with shared backlog and SLAs",
            "24/5 translation desk with emergency response",
            "Quarterly optimisation and innovation workshops",
          ],
          icon: Headset,
        },
      ],
    },
    {
      type: "enhancements",
      heading: "Support that keeps localisation humming",
      description:
        "Cloud MLM Software stays engaged beyond launch to protect speed, accuracy, and brand consistency.",
      items: [
        {
          title: "Field enablement kits",
          description:
            "Launch-day guides, scripts, and FAQs to equip leaders and customer care teams.",
          icon: BookOpen,
        },
        {
          title: "Always-on translation desk",
          description:
            "Handle urgent updates, regulatory notices, or event scripts without disrupting pipeline.",
          icon: Headset,
        },
        {
          title: "Analytics concierge",
          description:
            "Monthly insights tying language investments to conversion, retention, and support outcomes.",
          icon: Sparkle,
        },
      ],
    },
  ],
  faq: {
    heading: "Frequently asked questions",
    description:
      "Common localisation questions from marketing, compliance, and product leaders.",
    items: [
      {
        question: "Can we reuse our existing translation vendors?",
        answer:
          "Yes. We integrate preferred vendors into the workflow while supplementing with our AI and reviewer network to meet speed and quality targets.",
      },
      {
        question: "How do you ensure compliance across markets?",
        answer:
          "We embed legal review checkpoints, maintain regulator-approved glossaries, and provide audit trails of every translation decision.",
      },
      {
        question: "What happens when products or promotions change?",
        answer:
          "Change requests trigger automated localisation tasks, notifications to reviewers, and updates across web, app, and knowledge assets.",
      },
      {
        question: "Do you support community-sourced translations?",
        answer:
          "We provide contributor workflows with quality checks, so you can leverage field expertise while safeguarding consistency and compliance.",
      },
    ],
  },
  cta: {
    heading: "Ready to speak every market's language?",
    description:
      "Share your launch calendar and language priorities. We'll craft a pricing proposal, timeline, and governance plan tuned to your stakeholders.",
    primaryCta: "Book a pricing session",
    secondaryCta: "Pricing",
    cardTitle: "Connect with our team",
    cardBody:
      "Expect a discovery agenda and reviewer checklist within one business day. We stay partnered through every release cycle.",
  },
};
