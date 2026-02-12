import { CloudArrowUp, ListNumbers } from "@phosphor-icons/react";
import {
  ArrowLeftRight,
  Calculator,
  CheckCircle2,
  Database,
  GaugeCircle,
  Hammer,
  Headphones,
  LifeBuoy,
  PlugZap,
  Server,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  TrendingUp,
  UserPlus,
  Workflow,
} from "lucide-react";
import type { MigrationPageContent } from "@/components/frontend/mlm-migration";

const migrationContent: MigrationPageContent = {
  hero: {
    badge: "MLM Software Migration Services",
    title: "MLM Software Migration Services",
    description:
      "Software is a necessity in today's business landscape. Everything is controlled and managed by efficient software systems. In the MLM industry, the need for highly functional software is inevitable. But are you sure you are using the right MLM software for your business needs? Most of the time, people jump into solutions without proper guidance, only to find themselves struggling to implement the right software or fix issues with their existing system. In this case, MLM software migration is the only solution.",
    primaryCta: "Talk to a services lead",
    secondaryCta: "Explore all features",
    highlights: [
      {
        title: "Upgrade legacy systems",
        description:
          "Move off unstable, slow, or unsupported platforms into Cloud MLM Software's secure cloud architecture.",
        icon: CloudArrowUp,
      },
      {
        title: "Migration without downtime",
        description:
          "We stage, validate, and cut over so your members never lose access to genealogy, wallets, or analytics.",
        icon: LifeBuoy,
      },
      {
        title: "Compliance preserved",
        description:
          "Audit trails, KYC documents, and gateway histories remain intact throughout the migration process.",
        icon: ShieldCheck,
      },
    ],
  },
  intro: {
    badge: "What is MLM Migration?",
    heading: "What is MLM Migration?",
    paragraphs: [
      "Software is a necessity in today's business landscape. Everything is controlled and managed by efficient software systems. In the MLM industry, the need for highly functional software is inevitable. But are you sure you are using the right MLM software for your business needs? Here is the thing you need to know.",
      "Most of the time, people jump into solutions without proper guidance, only to find themselves struggling to implement the right software or fix issues with their existing system. In this case, MLM software migration is the only solution.",
      "Software automation is very important. If your system fails to fulfill your requirements, the next logical solution is migration. Software migration is the process of switching to more advanced, fully-featured software from the existing solutions. If the current software cannot offer necessary functionality and performance, individuals and organizations seek better alternatives.",
      "This need for improvement applies to everyone, regardless of a company's size or status. Migration happens everywhere—no matter how big or small the company is. Start-ups, developing companies, and big enterprises are opting for migration just because they all need software that performs well enough to grow their business.",
    ],
    partnerCard: {
      badge: "What we offer",
      heading: "What do we offer in our MLM Migration?",
      subheading: "Our migration service ensures a seamless transition with these benefits.",
      points: [
        "Smooth migration – We assure a seamless and error-free migration without any disruption to your business.",
        "High performance – Our software never fails to deliver good performance.",
        "Increased security – Your security is our concern. Migrate to software that is more secure and less prone to threats.",
        "Increased flexibility and scalability – Choose software that can scale up when the network grows and is capable of upgrades.",
        "Unparalleled support – Manage your business with a dedicated and professional team that will give you 24/7 support.",
        "Add new plans – Add new plans and invite more members to your network.",
        "Stay connected with the latest technology – Take advantage of new trends and the latest technologies.",
        "Good at multitasking – Switch to software that is good at multitasking and capable of processing successful transactions.",
      ],
    },
  },
  introFeatures: [
    {
      icon: CheckCircle2,
      title: "Data integrity & technical confidence",
      description:
        "The technical team should be confident. Make sure that you are not losing any relevant data during migration.",
    },
    {
      icon: GaugeCircle,
      title: "Costs, benefits & future upgrades",
      description:
        "Look into the details of migration costs and benefits. Confirm that the software is capable of future upgrades.",
    },
    {
      icon: Server,
      title: "Server & feature readiness",
      description:
        "Check the server capabilities and performance of the software. Analyse the features offered by the software.",
    },
  ],
  whySection: {
    heading: "Why Migrate? Some reasons for MLM Software migration",
    description:
      "From scalability and performance issues to support and flexibility, these triggers often signal that it's time to modernise.",
    reasons: [
      {
        title: "Scalability issues",
        detail:
          "As a part of the recruitment process, your network grows eventually. If your current software fails to scale up, it may hinder business growth.",
        icon: Sparkles,
      },
      {
        title: "Performance issues",
        detail:
          "Performance is given utmost importance. Server issues, high loading time, lack of balancing, database deadlocks, and transaction or concurrency failures can affect the business adversely and cause loss of money.",
        icon: GaugeCircle,
      },
      {
        title: "Support, flexibility & calculation",
        detail:
          "Poor assistance can create a lot of problems. If you cannot upgrade to a better technology or platform, migration is the solution. MLM requires error-free calculations—choose software that gives you a flawless system.",
        icon: Hammer,
      },
    ],
  },
  processSection: {
    heading: "How we deliver a reliable migration",
    description:
      "Follow a structured journey that keeps your data secure and your teams informed.",
    steps: [
      {
        number: "01",
        title: "Assessment & planning",
        description:
          "Inventory data sources, integrations, and compliance requirements. Build a migration playbook with rollback options.",
        icon: ListNumbers,
      },
      {
        number: "02",
        title: "Data mobilisation",
        description:
          "Cleanse, transform, and stage genealogy, transactions, and content with automated integrity checks.",
        icon: Database,
      },
      {
        number: "03",
        title: "Platform enablement",
        description:
          "Configure compensation, automation, and UI elements in the Cloud MLM Software sandbox for sign-off.",
        icon: Workflow,
      },
      {
        number: "04",
        title: "Cutover & support",
        description:
          "Execute the go-live window, monitor KPIs, and provide hypercare until teams are fully confident.",
        icon: PlugZap,
      },
    ],
  },
  trustSection: {
    heading: "Confused or tired? Migrate with Cloud MLM Software",
    pointsTitle: "Why choose us",
    paragraphs: [
      "Migration is a complicated and tiresome process. But do not worry! Cloud MLM Software has been helping network marketing companies across the globe with its advanced and updated features.",
      "All your confusions are valid. You can still migrate to software that can perform well, be upgraded in the future, and will not lose your relevant data. You can experience a seamless transition from your current software to Cloud MLM Software with our expert team.",
    ],
    points: [
      "Software that performs well and scales with your business.",
      "Capable of future upgrades and latest technology.",
      "No loss of relevant data during migration.",
      "Seamless transition with our expert team.",
    ],
  },
  cta: {
    heading: "Confused or tired? Migrate with Cloud MLM Software",
    description:
      "Migration is a complicated and tiresome process. But do not worry! Cloud MLM Software has been helping network marketing companies across the globe. You can experience a seamless transition from your current software to Cloud MLM Software with our expert team.",
    buttonText: "Request migration assessment",
    secondaryButtonText: "View all services",
    trustIndicators: ["Seamless transition", "Expert team", "24/7 support"],
  },
};

export { migrationContent };
