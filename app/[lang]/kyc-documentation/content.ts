import { IdentificationCard, ArrowsClockwise } from "@phosphor-icons/react";
import type { ModuleFeatureContent } from "@/components/frontend/modules/subpage";

export const kycDocumentationContent: ModuleFeatureContent = {
  hero: {
    badge: "Compliance",
    title: "Secure KYC Documentation Module | Simplify Verification",
    description:
      "KYC documentation is provided not only at the time of new joinings but also for refreshing accounts. Refreshing members' accounts is necessary in the MLM business because there are many members; some are more active while others are inactive.",
    primaryCta: "Talk to compliance experts",
    secondaryCta: "View live demo",
    metrics: [
      { label: "Documents verified", value: "1M+", detail: "ID and address proof." },
      { label: "Regions", value: "50+", detail: "Configurable KYC rules." },
      { label: "Review time", value: "< 24h", detail: "Approve or re-request." },
    ],
  },
  importanceSection: {
    badge: "Compliance",
    heading: "Importance of KYC in MLM Business?",
    subheading: "Why KYC documentation in MLM software?",
    paragraphs: [
      "Cloud MLM software includes a KYC documentation module primarily to prevent fraudulent activities in the MLM business. Given that the majority of MLM activities are conducted online, some individuals may join the business using fake names and engage in money laundering. Due to the large number of customers, it is challenging for business owners to easily identify such fraudulent individuals.",
      "This highlights the importance of MLM software in the MLM business. In our MLM software, we provide a KYC module that assists business owners in preventing fraudulent activities. For KYC documentation, customers who join the MLM business must upload their identity proof, such as a voter ID or driving license, to the owners. Only after successful submission can the user join the business.",
      "Additionally, KYC documentation helps business owners investigate the history of joining customers to determine if they have any previous financial burdens, allowing owners to serve them better.",
    ],
    imageSrc: "/images/modulekycIntro.svg",
    imageAlt: "Cloud MLM Software dashboard and KYC documentation",
  },
  benefitsSection: {
    badge: "Benefits",
    heading: "Why choose our KYC documentation module",
    description: "Built for compliance and scale with your MLM programme.",
    items: [
      {
        title: "Fraud prevention",
        description: "Verify identity before join. Reduce fake names and money-laundering risk with mandatory ID upload.",
      },
      {
        title: "Privacy and security",
        description: "Documents stored securely with access controls and audit trails. Compliant with data protection requirements.",
      },
      {
        title: "Configurable rules",
        description: "Set requirements by region or programme. Support multiple document types and refresh cycles.",
      },
      {
        title: "Faster onboarding",
        description: "Clear upload flow and status so members know when they are verified. Fewer support tickets.",
      },
      {
        title: "Audit-ready",
        description: "Full history of submissions and decisions. Export and reporting for regulators and internal review.",
      },
      {
        title: "Ongoing compliance",
        description: "KYC refresh at level upgrade or account renewal. Stay aligned with changing policies.",
      },
    ],
  },
  whyChooseSection: {
    imageSrc: "/images/modulekycIntro.svg",
    imageAlt: "KYC and compliance verification",
    badge: "Why Choose Us",
    heading: "Why Choose KYC Documentation",
    headingHighlight: "KYC Documentation",
    description:
      "Built for compliance and scale. Our KYC module helps you verify members, prevent fraud, and stay audit-ready.",
    items: [
      {
        number: "01",
        title: "Flexible verification",
        description:
          "Our flexible KYC flow is designed to fit your busy schedule, allowing you to verify new joiners and refresh existing members anytime, anywhere with ease.",
      },
      {
        number: "02",
        title: "Verify from anywhere",
        description:
          "Access quality verification from any location. Members can submit documents and track status at their own pace, on any device, without boundaries or limits.",
      },
      {
        number: "03",
        title: "Experienced compliance support",
        description:
          "Our experienced team are compliance professionals who bring years of real-world knowledge, practical skills, and audit-ready workflows to your programme.",
      },
    ],
  },
  kycCompletionSection: {
    titleLine1: "KYC",
    titleLine2: "Completion",
    profileImageSrc: "https://cloudmlmsoftware.com/wp-content/uploads/2024/07/kycphoto-img.webp",
  },
  features: [
    {
      icon: IdentificationCard,
      title: "Document collection & confirmation",
      description:
        "Know-your-customer processing enables the company to verify members and customers. Cloud MLM's software developers understand the importance of privacy of these documents and use reliable, independent source data and information security for a better privacy policy.",
    },
    {
      icon: ArrowsClockwise,
      title: "Periodicity of KYC refresh",
      description:
        "KYC is required at new joinings and at account refreshments. At level upgradation, the user must provide updated KYC documentation. Existing members who want to create a new account must also provide fresh KYC documentation based on the latest KYC policies.",
    },
  ],
  faq: {
    badge: "FAQ",
    heading: "Frequently asked questions",
    description: "Common questions about the KYC documentation module.",
    items: [
      {
        question: "When is KYC documentation required?",
        answer:
          "KYC documentation is required both at the time of new joinings and when refreshing accounts. When members upgrade their level, they must provide updated KYC. Existing members creating a new account must submit fresh KYC per the latest policies.",
      },
      {
        question: "Which documents are supported?",
        answer:
          "Identity proof such as voter ID, driving licence, passports, and proof-of-address. We support configurable validation rules per region and keep document handling secure and private.",
      },
      {
        question: "How does KYC prevent fraud in MLM?",
        answer:
          "With most MLM activities conducted online, the KYC module ensures customers submit verified identity documents before joining. This helps prevent fake names, money laundering, and allows business owners to investigate the history of joining customers.",
      },
    ],
  },
  cta: {
    heading: "Purchase AI-Powered Cloud MLM Software Today!",
    description:
      "Achieve MLM success with smart AI-driven tools! Automate, manage, and grow your network effortlessly. Get the KYC documentation module and scale your business with confidence.",
    buttonText: "Buy Now",
    secondaryCta: "View demo",
    trustIndicators: [
      "Quick implementation",
      "Expert compliance support",
      "Proven verification results",
    ],
  },
};
