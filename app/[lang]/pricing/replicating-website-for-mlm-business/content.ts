import {
  ChartPie,
  CheckCircle,
  Globe,
  Layout,
  Lightning,
  LinkSimple,
  MegaphoneSimple,
  ShareNetwork,
  Sparkle,
  StackSimple,
  Users,
  WebhooksLogo,
} from "@phosphor-icons/react";
import type { PricingSubPageContent } from "@/components/frontend/pricing/sub-page";

export const replicatingWebsiteForMlmBusinessContent: PricingSubPageContent = {
  hero: {
    badge: "Distributor-ready experiences at scale",
    title: "Replicating website pricing for modern MLM growth.",
    description:
      "Cloud MLM Software equips your field with compliant, on-brand microsites that convert. We deliver templates, personalisation, and automation so every distributor launches ready to win.",
    primaryCta: "Book a pricing session",
    secondaryCta: "Pricing",
    metrics: [
      {
        label: "Replicated sites managed",
        value: "120k+",
        description:
          "Distributor experiences launched across 37 countries.",
        icon: Globe,
      },
      {
        label: "Time to launch",
        value: "4 weeks",
        description:
          "From design handoff to live, compliant replicated sites.",
        icon: Lightning,
      },
      {
        label: "Lead conversion uplift",
        value: "31%",
        description:
          "Average increase after implementing personalised funnels.",
        icon: ChartPie,
      },
      {
        label: "Marketing workload saved",
        value: "2.8×",
        description:
          "Content and asset updates pushed once, replicated instantly.",
        icon: ShareNetwork,
      },
    ],
  },
  sections: [
    {
      type: "capabilities",
      heading: "What every replicated site engagement includes.",
      description:
        "We package brand, compliance, and automation best practices so marketing and field teams stay aligned without sacrificing creativity.",
      callout: {
        title: "Thought-leadership baked into every module",
        body: "Cloud MLM Software's replicating website practice synthesises insights from hundreds of deployments, ensuring templates, personalisation, and governance ship with benchmarked playbooks and compliance-readiness from day one.",
        icon: CheckCircle,
      },
      items: [
        {
          title: "Brand-consistent templates",
          description:
            "Launch responsive templates that adapt to distributor preferences while staying on-brand and compliant.",
          bullets: [
            "Modular sections for hero, offer, proof, and capture flows",
            "Dark/light support, custom highlight colours, and typography tokens",
            "Compliance-approved block library with disclaimers and regional messaging",
          ],
          icon: Layout,
        },
        {
          title: "Personalisation engine",
          description:
            "Distributors showcase product mixes, testimonials, and calls to action tailored to their audiences.",
          bullets: [
            "Profile-driven content slots (product focus, languages, campaigns)",
            "Dynamic lead routing and CRM connectors",
            "Analytics tying site performance to rank, incentive, and region",
          ],
          icon: WebhooksLogo,
        },
        {
          title: "Marketing automation",
          description:
            "Keep replicated sites fresh with centralised control and automated launch sequences.",
          bullets: [
            "Campaign presets with time-boxed offers and landing pages",
            "Scheduled updates and A/B testing at scale",
            "Asset governance with role-based approvals",
          ],
          icon: MegaphoneSimple,
        },
      ],
    },
    {
      type: "roadmap",
      heading: "Four-week implementation milestones",
      description:
        "Clear checkpoints keep marketing, compliance, and technology leaders aligned while we accelerate launch.",
      outcomes: {
        title: "Outcomes you can expect",
        points: [
          "Experience blueprint with personas and journeys, plus compliance checklist and content governance model.",
          "Responsive template library in Cloud MLM Software with profile-based dynamic content rules.",
          "Launcher toolkit for distributors and field leaders with analytics dashboards and optimisation backlog.",
        ],
      },
      stages: [
        {
          title: "Blueprint and design",
          description:
            "Align on brand, compliance, and funnel strategy. Produce template concepts and content map.",
          duration: "Week 1",
          icon: Layout,
        },
        {
          title: "Build and integration",
          description:
            "Develop templates, configure personalisation rules, and connect data sources.",
          duration: "Weeks 2-3",
          icon: LinkSimple,
        },
        {
          title: "Launch and optimisation",
          description:
            "Roll out to pilot cohorts, enable teams, and establish ongoing optimisation cadence.",
          duration: "Week 4",
          icon: Lightning,
        },
      ],
    },
    {
      type: "packages",
      sectionTitle: "Packages",
      heading: "Choose the network package that fits.",
      description:
        "Packages scale with your field size, localisation needs, and automation ambitions. Each tier ships with detailed enablement and governance assets.",
      ctaLabel: "Discuss this package",
      items: [
        {
          title: "Launch network",
          price: "$15k fixed",
          description:
            "Deploy core replicated sites with automated onboarding and compliance workflows.",
          outcomes: [
            "Two base templates with configurable sections",
            "Lead capture, CRM sync, and email automation primers",
            "Launch playbook with onboarding and compliance training",
          ],
          icon: StackSimple,
        },
        {
          title: "Growth network",
          price: "$24k fixed",
          description:
            "Advanced personalisation, localisation, and analytics to drive distributor-led growth.",
          outcomes: [
            "Multilingual content and regional storefront integration",
            "Distributor microsite analytics dashboard",
            "Campaign automation library with nurture journeys",
          ],
          icon: Sparkle,
        },
        {
          title: "Enterprise network",
          price: "Custom engagement",
          description:
            "Highly tailored designs, integrations, and optimisation office for large networks.",
          outcomes: [
            "Dynamic product catalogues and e-commerce checkout",
            "Tech partner integrations (CDP, DAM, analytics suites)",
            "Dedicated optimisation squad with experimentation roadmap",
          ],
          icon: Users,
        },
      ],
    },
    {
      type: "enhancements",
      heading: "Benefits for corporate and field teams.",
      description:
        "Replicated sites become more than a compliance checkbox—they drive growth.",
      callout:
        "Enhancements are scoped as fixed outcomes with rapid delivery windows. We collaborate with your marketing, compliance, and field teams to embed measurable improvements.",
      items: [
        {
          title: "On-brand differentiation",
          description:
            "Distributors express their voice without drifting from corporate standards.",
          icon: CheckCircle,
        },
        {
          title: "Compliance peace of mind",
          description:
            "Central approvals, version control, and audit history out-of-the-box.",
          icon: CheckCircle,
        },
        {
          title: "Speed to market",
          description:
            "Campaigns launch simultaneously across thousands of sites with one publish.",
          icon: Lightning,
        },
      ],
    },
  ],
  faq: {
    heading: "Replicating Website for MLM Business FAQs",
    description:
      "Marketing, compliance, and distributor success teams ask these before kickoff.",
    items: [
      {
        question: "Can distributors customise their replicated site?",
        answer:
          "Yes. They personalise highlighted products, testimonials, and calls to action within compliance-approved limits. You define what can be changed and what stays standardised.",
      },
      {
        question: "Do you support multilingual content?",
        answer:
          "Absolutely. We pair this module with our multilingual system so copy, assets, and disclaimers adapt to local markets automatically.",
      },
      {
        question: "How are leads routed?",
        answer:
          "Lead forms and chat widgets connect to Cloud MLM Software or your CRM, ensuring distributors receive real-time notifications with attribution tracking.",
      },
      {
        question: "What analytics are provided?",
        answer:
          "Dashboards surface visit, lead, and conversion data per distributor, plus aggregate insights for marketing, compliance, and executive teams.",
      },
    ],
  },
  cta: {
    heading: "Ready to amplify every distributor online?",
    description:
      "Share your launch calendar, localisation needs, and integrations. We'll prepare a pricing proposal and timeline tailored to your growth strategy.",
    primaryCta: "Book a pricing session",
    secondaryCta: "Pricing",
    cardTitle: "Connect with our replicating website specialists",
    cardBody:
      "Expect a discovery agenda and content inventory checklist within one business day. We partner with you through launch and continuous optimisation.",
  },
};
