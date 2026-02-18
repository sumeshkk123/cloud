import {
  BracketsSquare,
  ChartBar,
  CheckCircle,
  Code,
  Database,
  Globe,
  Layout,
  Lifebuoy,
  PaintBrush,
  ShieldCheckered,
  Sparkle,
  SquaresFour,
  Stack,
} from "@phosphor-icons/react";
import type { PricingSubPageContent } from "@/components/frontend/pricing/sub-page";

export const wordpressCmsWebsiteContent: PricingSubPageContent = {
  hero: {
    badge: "WordPress engineered for direct selling growth",
    title: "WordPress CMS website pricing with Cloud MLM Software expertise.",
    description:
      "Launch a fast, secure, and conversion-optimised WordPress experience that connects seamlessly to your Cloud MLM Software ecosystem. Our packages bundle strategy, design, engineering, and enablement.",
    primaryCta: "Book a pricing session",
    secondaryCta: "Pricing",
    metrics: [
      {
        label: "WordPress launches delivered",
        value: "85+",
        description:
          "Conversion-first marketing and recruiting sites for direct selling brands.",
        icon: Layout,
      },
      {
        label: "Average build timeline",
        value: "6 weeks",
        description:
          "Discovery to production-ready WordPress site with Cloud MLM Software integration.",
        icon: SquaresFour,
      },
      {
        label: "Organic traffic lift",
        value: "42%",
        description:
          "Measured 90 days after migration to our WordPress stack.",
        icon: ChartBar,
      },
      {
        label: "Conversion rate improvement",
        value: "28%",
        description:
          "Lead and enrolment forms optimised with data-driven iteration.",
        icon: Sparkle,
      },
    ],
  },
  sections: [
    {
      type: "capabilities",
      heading: "Build a site that converts and scales.",
      description:
        "Our WordPress engagements combine product storytelling, SEO, and integrations to support marketing, recruiting, and compliance teams simultaneously.",
      callout: {
        title: "Thought-leadership baked into every module",
        body: "Cloud MLM Software's WordPress practice synthesises insights from hundreds of deployments, ensuring design systems, performance, and governance ship with benchmarked playbooks from day one.",
        icon: CheckCircle,
      },
      items: [
        {
          title: "Brand experience design",
          description:
            "UX and visual design tailored to position your story, products, and distributor journeys with clarity.",
          bullets: [
            "Component-driven design system for hero, proof, storytelling, and CTA sections",
            "Accessibility-first, mobile-optimised interactions",
            "Immersive landing templates for campaigns and funnels",
          ],
          icon: PaintBrush,
        },
        {
          title: "Performance and SEO",
          description:
            "Headless-ready WordPress architecture with speed, schema, and localisation best practices built in.",
          bullets: [
            "Optimised Core Web Vitals with caching, image, and script strategies",
            "Multilingual and regional SEO support with structured data",
            "Analytics instrumentation connecting traffic to CRM and Cloud MLM Software metrics",
          ],
          icon: Database,
        },
        {
          title: "Integrations and governance",
          description:
            "Keep marketing agile and compliant with automation, CI/CD, and workflow guardrails.",
          bullets: [
            "Cloud MLM Software data sync for enrolment, products, and testimonials",
            "Marketing automation, CRM, and analytics connectors",
            "Content governance workflows with staging environments and approvals",
          ],
          icon: BracketsSquare,
        },
      ],
    },
    {
      type: "roadmap",
      heading: "Six-week delivery roadmap",
      description:
        "Transparent checkpoints keep marketing, technology, and compliance teams aligned while we build and launch your site.",
      outcomes: {
        title: "Outcomes you can expect",
        points: [
          "Experience map with personas and journeys, plus technical architecture and content/SEO action plan.",
          "Figma component library and responsive WordPress templates with integrated lead forms and analytics.",
          "Launch checklist, hypercare dashboard, and optimisation backlog with experimentation priorities.",
        ],
      },
      stages: [
        {
          title: "Strategy & architecture",
          description:
            "Brand, content, and technical discovery to define experience blueprint and success metrics.",
          duration: "Week 1",
          icon: Layout,
        },
        {
          title: "Design & build",
          description:
            "Design system creation, WordPress development, and integration with Cloud MLM Software and marketing stack.",
          duration: "Weeks 2-5",
          icon: Code,
        },
        {
          title: "Launch & optimise",
          description:
            "Site launch with QA, SEO validation, performance tuning, and training for marketing teams.",
          duration: "Week 6",
          icon: Lifebuoy,
        },
      ],
    },
    {
      type: "packages",
      sectionTitle: "Packages",
      heading: "Packages aligned to your digital roadmap.",
      description:
        "From launch-focused builds to enterprise-grade platforms, choose the package with the features, integrations, and enablement you need.",
      ctaLabel: "Discuss this package",
      items: [
        {
          title: "Growth launch",
          price: "$18k fixed",
          description:
            "High-conversion marketing site with campaign-ready templates and lead flows.",
          outcomes: [
            "Brand and UX exploration, copy & content guidelines",
            "Component library with blog, landing, and resource pages",
            "Hosting and deployment automation with monitoring",
          ],
          icon: Stack,
        },
        {
          title: "Experience hub",
          price: "$26k fixed",
          description:
            "Advanced personalisation, localisation, and automation to support multi-market growth.",
          outcomes: [
            "Personalised content blocks tied to Cloud MLM Software data",
            "Multilingual support with translation workflows",
            "Campaign builder templates with analytics dashboards",
          ],
          icon: Globe,
        },
        {
          title: "Enterprise platform",
          price: "Custom engagement",
          description:
            "Composable WordPress platform with headless delivery, advanced security, and optimisation office.",
          outcomes: [
            "Headless or hybrid architecture with CDN optimisation",
            "Security hardening, SSO, and compliance automation",
            "Dedicated optimisation squad with experimentation roadmap",
          ],
          icon: ShieldCheckered,
        },
      ],
    },
    {
      type: "enhancements",
      heading: "Add-ons to accelerate launch.",
      description:
        "Expand the engagement with services that drive adoption and ROI even faster.",
      callout:
        "Enhancements are scoped as fixed outcomes with rapid delivery windows. We collaborate with your marketing and IT teams to embed measurable improvements.",
      items: [
        {
          title: "Content production",
          description:
            "Copywriting, visual assets, and localisation support to accelerate go-live.",
          icon: PaintBrush,
        },
        {
          title: "Campaign accelerator",
          description:
            "Landing page sprints tied to product launches or recruiting pushes.",
          icon: Sparkle,
        },
        {
          title: "Ongoing optimisation",
          description:
            "Monthly CRO, SEO, and marketing automation experiments with reporting.",
          icon: ChartBar,
        },
      ],
    },
  ],
  faq: {
    heading: "WordPress CMS Website FAQs",
    description:
      "Marketing, IT, and compliance leaders ask these before kickoff.",
    items: [
      {
        question: "Do you provide hosting and maintenance?",
        answer:
          "Yes. We manage secure hosting, performance monitoring, and updates, or work with your preferred provider using our DevOps playbooks.",
      },
      {
        question: "Can we migrate our existing content?",
        answer:
          "We audit current assets, migrate high-value content, and provide SEO safeguards to retain rankings during transition.",
      },
      {
        question: "How do you ensure compliance with direct selling regulations?",
        answer:
          "Templates include required disclaimers, income statements, and approval workflows so content stays within regulatory guidelines.",
      },
      {
        question: "What happens after launch?",
        answer:
          "You receive training, documentation, and optimisation backlog. Many clients retain us for ongoing CRO, SEO, and marketing automation support.",
      },
    ],
  },
  cta: {
    heading: "Ready to launch a WordPress site that converts?",
    description:
      "Share your goals, content requirements, and integration landscape. We'll deliver a pricing proposal and roadmap aligned to your vision.",
    primaryCta: "Book a pricing session",
    secondaryCta: "Pricing",
    cardTitle: "Connect with our WordPress specialists",
    cardBody:
      "Expect a discovery agenda and content inventory checklist within one business day. We remain your partner through launch and optimisation.",
  },
};
