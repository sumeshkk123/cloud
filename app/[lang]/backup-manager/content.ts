import { Globe, HardDrives } from "@phosphor-icons/react";
import type { ModuleFeatureContent } from "@/components/frontend/modules/subpage";

export const backupManagerContent: ModuleFeatureContent = {
  hero: {
    badge: "Data",
    title: "Backup Manager Module | Cloud MLM Software",
    description:
      "We know that today our world is completely digitized, so all our daily activities are conducted online. Consequently, everything we do online is stored as data. To store this data, we need a strong backup manager.",
    primaryCta: "Request a demo",
    secondaryCta: "View demo",
    metrics: [
      { label: "Backup frequency", value: "Hourly", detail: "Full and incremental." },
      { label: "Retention", value: "Configurable", detail: "Point-in-time restore." },
      { label: "Encryption", value: "AES-256", detail: "At rest and in transit." },
    ],
  },
  importanceSection: {
    badge: "Data",
    heading: "What is a Backup Manager system?",
    subheading: "Why backup manager in MLM software?",
    paragraphs: [
      "A backup manager must be capable of saving data in encoded mode and providing security for the user's data. Important data requires more security than ordinary data. This means the backup plan should support you in handling all kinds of emergencies and allow you to decode important data without interference.",
      "One of the best features of a backup manager is that it stores data in remote locations. This helps prevent data loss from incidents such as computer viruses, fire, flooding, lightning, accidental deletion, and hard drive failures, among others. If you edit or delete any data, it doesn't matter—the backup manager always stores the latest copy of your data.",
    ],
    imageSrc: "/images/moduleBackup4.webp",
    imageAlt: "Cloud MLM Software Backup Manager",
  },
  benefitsSection: {
    badge: "Benefits",
    heading: "Features of a Backup Manager System",
    description: "Built for reliability and compliance with your MLM programme.",
    items: [
      {
        title: "Remote storage",
        description:
          "Data is stored in remote locations to prevent loss from viruses, fire, flooding, lightning, accidental deletion, and hard drive failures.",
      },
      {
        title: "Latest copy always saved",
        description:
          "If you edit or delete any data, the backup manager always stores the latest copy of your data so you never lose recent changes.",
      },
      {
        title: "Recover after data loss",
        description:
          "First purpose: recover the data after it's lost, whether by data deletion or corruption. Restore to a point in time when you need it.",
      },
      {
        title: "Compare with earlier stages",
        description:
          "Second purpose: recover the data from its early stages in order to compare with last saved data results. Export and compare for audit or analysis.",
      },
      {
        title: "Encrypted and secure",
        description:
          "Data is saved in encoded mode with AES-256 encryption at rest and in transit. Access controls and audit trails for compliance.",
      },
      {
        title: "Configurable retention",
        description:
          "Data is retained for a specified period before being removed according to your requirements. Full control over retention policies.",
      },
    ],
  },
  whyChooseSection: {
    imageSrc: "/images/moduleBackup4.webp",
    imageAlt: "Cloud MLM Software Backup Manager system",
    badge: "Why Choose Us",
    heading: "Working of Cloud MLM's Backup Manager system",
    description:
      "Cloud MLM software provides the best backup manager system to our clients. Our backup system stores data on the server itself, and this data is retained for a specified period before being removed according to the customer's requirements. Our backup manager backs up the data every hour of the day and stores it securely. Thus, our clients can easily access and decode the hourly data and highly confidential data from our system.",
    items: [
      {
        number: "01",
        title: "Cron set at preference period of time",
        description:
          "Backups run on a schedule you choose—hourly, daily, or custom. Set-and-forget automation so you never miss a run.",
      },
      {
        number: "02",
        title: "Encrypting files to be backed up",
        description:
          "Files are encrypted before backup using our highly secure methods. Your data stays protected in transit and at rest.",
      },
      {
        number: "03",
        title: "Encrypting files and databases",
        description:
          "Files and databases are encrypted with our highly secure methods. At least one copy of all data worth saving is always available.",
      },
    ],
  },
  features: [
    {
      icon: HardDrives,
      title: "Scheduled backups",
      description:
        "Automated full and incremental backups of your MLM data with configurable frequency and retention.",
    },
    {
      icon: Globe,
      title: "Secure storage",
      description:
        "Encrypted backups in redundant storage with retention policies and access controls.",
    },
  ],
  faq: {
    badge: "FAQ",
    heading: "Frequently asked questions",
    description: "Common questions about the Backup Manager module.",
    items: [
      {
        question: "How often can we run backups?",
        answer:
          "Backups can be scheduled hourly, daily, or at custom intervals. Full and incremental options are available depending on your plan.",
      },
      {
        question: "Do you offer training and support?",
        answer:
          "Yes. We provide documentation, training, and ongoing support. Our team can help with restore procedures and best practices.",
      },
    ],
  },
  cta: {
    heading: "Purchase AI-Powered Cloud MLM Software Today!",
    description:
      "Achieve MLM success with smart AI-driven tools! Automate, manage, and grow your network effortlessly. Buy now and scale your business!",
    buttonText: "Buy Now",
    secondaryCta: "Try Demo",
    trustIndicators: ["Quick implementation", "Expert support", "Proven reliability"],
  },
};
