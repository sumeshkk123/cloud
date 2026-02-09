import {
  CalendarBlank,
  CheckCircle,
  Eye,
  FileMagnifyingGlass,
  Fingerprint,
  Globe,
  IdentificationBadge,
  ListChecks,
  Lock,
  Monitor,
  ShieldCheck,
  UserCircleGear,
  UsersThree,
  Vault,
} from "@phosphor-icons/react";
import type { PricingSubPageContent } from "@/components/frontend/pricing/sub-page";

export const privilegedUserSystemModuleContent: PricingSubPageContent = {
  hero: {
    badge: "Govern privileged access with confidence",
    title: "Privileged user system pricing aligned with enterprise-grade security.",
    description:
      "Protect executive, compliance, and partner activity without slowing your teams down. Cloud MLM Software packages governance, automation, and enablement so privileged access becomes a growth enabler, not a liability.",
    primaryCta: "Book a security workshop",
    secondaryCta: "Explore service catalog",
    metrics: [
      {
        label: "Privileged identities managed",
        value: "6,400+",
        description:
          "Executive, compliance, and partner roles orchestrated across Cloud MLM Software.",
        icon: UsersThree,
      },
      {
        label: "Access review time saved",
        value: "78%",
        description:
          "Average reduction in quarterly audit cycles after automation.",
        icon: ListChecks,
      },
      {
        label: "Policy violations detected",
        value: "0.3%",
        description:
          "Rapid anomaly detection keeps breaches from escalating.",
        icon: ShieldCheck,
      },
      {
        label: "Deployment timeline",
        value: "5 weeks",
        description:
          "Blueprint, configure, and launch privileged controls with hypercare.",
        icon: CalendarBlank,
      },
    ],
  },
  sections: [
    {
      type: "capabilities",
      heading: "Capabilities that balance security and agility.",
      description:
        "Our privileged user system engagements blend governance, automation, and experience design so high-stakes roles stay compliant and productive.",
      callout: {
        title: "Thought-leadership baked into every module",
        body: "Cloud MLM Software's security practice synthesises insights from hundreds of deployments, ensuring the module ships with benchmarked playbooks, governed access, and audit-readiness from day one.",
        icon: CheckCircle,
      },
      items: [
        {
          title: "Role design and governance",
          description:
            "Design granular roles with context-aware controls that align to regulatory, security, and operational needs.",
          bullets: [
            "Persona-based access matrices mapped to compensation and operations",
            "Segregation of duties guardrails with approval workflows",
            "Automated provisioning, deprovisioning, and just-in-time elevation",
          ],
          icon: UserCircleGear,
        },
        {
          title: "Monitoring and response",
          description:
            "Give security and compliance teams real-time visibility with actionable alerts and audit-ready evidence.",
          bullets: [
            "Session recording, command logging, and anomaly detection",
            "Policy breach notifications with guided remediation steps",
            "Audit trails aligned with SOC 2, GDPR, and local standards",
          ],
          icon: Eye,
        },
        {
          title: "Experience enablement",
          description:
            "Privileged teams stay productive with seamless UX, automation, and training tailored to sensitive operations.",
          bullets: [
            "Contextual dashboards for executives, compliance, and support",
            "Workflow automation for approvals, escalations, and escalated support",
            "Training modules and playbooks aligned to risk posture",
          ],
          icon: Monitor,
        },
      ],
    },
    {
      type: "roadmap",
      heading: "Five-week delivery cadence",
      description:
        "We keep security, compliance, and operations aligned through structured checkpoints and transparent artefacts.",
      outcomes: {
        title: "Outcomes you can expect",
        points: [
          "Role and policy catalogue with risk assessment and mitigation map.",
          "Provisioning workflows and monitoring dashboards live with test alerts.",
          "Training assets for each privileged persona and optimisation backlog aligned to audits.",
        ],
      },
      stages: [
        {
          title: "Discovery & design",
          description:
            "Analyse current access patterns, regulatory obligations, and risk appetite to craft governance architecture.",
          duration: "Week 1",
          icon: IdentificationBadge,
        },
        {
          title: "Configuration & validation",
          description:
            "Configure privileged access, automation, and monitoring. Validate against real use cases and audit requirements.",
          duration: "Weeks 2-4",
          icon: Lock,
        },
        {
          title: "Enablement & optimisation",
          description:
            "Launch with hypercare, training, and continuous improvement plan.",
          duration: "Week 5",
          icon: ShieldCheck,
        },
      ],
    },
    {
      type: "packages",
      sectionTitle: "Packages",
      heading: "Packages aligned to your risk profile.",
      description:
        "Select the engagement that matches your governance maturity. Each package includes strategy, configuration, and training for privileged teams.",
      ctaLabel: "Discuss this package",
      items: [
        {
          title: "Control foundation",
          price: "$13k fixed",
          description:
            "Establish secure privileged role management with automation and reporting essentials.",
          outcomes: [
            "Role taxonomy and access policy playbook",
            "Provisioning + review automation with alerts",
            "Compliance dashboards for quarterly attestations",
          ],
          icon: Vault,
        },
        {
          title: "Compliance accelerator",
          price: "$19k fixed",
          description:
            "Enhanced monitoring, audit automation, and delegated admin controls.",
          outcomes: [
            "Session monitoring with behavioural analytics",
            "Workflow automation for access certifications",
            "Incident response and evidence capture toolkit",
          ],
          icon: ShieldCheck,
        },
        {
          title: "Enterprise command",
          price: "Custom engagement",
          description:
            "Advanced policy orchestration, SIEM integration, and optimisation office.",
          outcomes: [
            "SIEM/SOAR integration and custom alert pipelines",
            "AI-assisted risk scoring and remediation recommendations",
            "Ongoing governance council with quarterly optimisation",
          ],
          icon: Fingerprint,
        },
      ],
    },
    {
      type: "enhancements",
      heading: "Why teams trust our privileged module.",
      description:
        "Security and acceleration are not mutually exclusive. Here's how our delivery model proves it.",
      callout:
        "Enhancements are scoped as fixed outcomes with rapid delivery windows. We collaborate with your security, compliance, and operations teams to embed measurable improvements.",
      items: [
        {
          title: "Audit-ready evidence",
          description:
            "Automated reports simplify SOC, GDPR, and FTC reviews.",
          icon: FileMagnifyingGlass,
        },
        {
          title: "Productivity preserved",
          description:
            "Self-service elevation keeps leaders efficient without sacrificing security.",
          icon: CheckCircle,
        },
        {
          title: "Global consistency",
          description:
            "Policies adapt to each market yet remain centrally governed.",
          icon: Globe,
        },
      ],
    },
  ],
  faq: {
    heading: "Privileged User System Module FAQs",
    description:
      "Security, compliance, and product stakeholders ask these before kickoff.",
    items: [
      {
        question: "Can we integrate with our identity provider?",
        answer:
          "Yes. We integrate with Azure AD, Okta, JumpCloud, and other SSO solutions to keep authentication centralised while Cloud MLM Software manages authorisation.",
      },
      {
        question: "How are emergency access and break-glass handled?",
        answer:
          "Emergency role elevation is time-bound, logged, and paired with automated reviews. Stakeholders receive summaries for sign-off.",
      },
      {
        question: "Do you support partner or vendor access?",
        answer:
          "Absolutely. We apply scoped roles, monitoring, and automated expirations so third parties operate safely without overexposure.",
      },
      {
        question: "What ongoing maintenance is required?",
        answer:
          "We deliver playbooks for periodic access reviews, policy updates, and monitoring tuning. Managed services are available if you prefer ongoing support.",
      },
    ],
  },
  cta: {
    heading: "Ready to elevate privileged access control?",
    description:
      "Share your governance goals, regulatory timelines, and stakeholder map. We'll assemble a pricing proposal and implementation plan tailored to your risk posture.",
    primaryCta: "Schedule consultation",
    secondaryCta: "Explore services catalog",
    cardTitle: "Connect with our security architects",
    cardBody:
      "Expect a discovery agenda and role inventory template within one business day. We'll partner through launch and continual optimisation.",
  },
};
