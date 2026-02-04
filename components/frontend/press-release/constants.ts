export type PressRelease = {
  title: string;
  summary: string;
  date: string;
  location: string;
  href: string;
  tags: string[];
};

export type FilterSet = {
  label: string;
  description: string;
  count: number;
};

export const FEATURED_RELEASE: PressRelease = {
  title: "Cloud MLM Software recognised by Research.com for elevating global MLM operations",
  summary:
    "Our platform is spotlighted for unifying compensation accuracy, AI-assisted coaching, and enterprise-grade integrations for modern direct selling brands.",
  date: "August 23, 2025",
  location: "San Francisco, California, USA",
  href: "/blogs/cloud-mlm-software-deserves-attention-in-research",
  tags: ["Awards", "Platform", "Thought leadership"]
};

export const ARCHIVE: PressRelease[] = [
  FEATURED_RELEASE,
  {
    title: "Cloud MLM Software launches automation accelerator for omnichannel party plans",
    summary:
      "New release helps field leaders choreograph hybrid experiences with live pacing analytics, QR-friendly order flows, and celebratory coaching scripts.",
    date: "June 12, 2025",
    location: "Austin, Texas, USA",
    href: "#",
    tags: ["Product", "Automation", "Party plan"]
  },
  {
    title: "Strategic partnerships expand multi-currency payouts across 28 new markets",
    summary:
      "Finance and compliance teams gain treasury dashboards, automated FX safeguards, and settlement transparency for rapid international expansion.",
    date: "March 5, 2025",
    location: "Dubai, UAE",
    href: "#",
    tags: ["Partnerships", "Global", "Payments"]
  },
  {
    title: "Cloud MLM Software earns ISO 27001 recertification with AI governance focus",
    summary:
      "Security, privacy, and model governance enhancements protect distributor data while accelerating intelligent field experiences.",
    date: "November 18, 2024",
    location: "London, United Kingdom",
    href: "#",
    tags: ["Security", "Compliance", "AI"]
  }
];

export const FILTERS: FilterSet[] = [
  {
    label: "All announcements",
    description: "Our complete timeline of milestones, launches, partnerships, and recognition.",
    count: 48
  },
  {
    label: "Awards & recognition",
    description: "Industry accolades and analyst coverage showcasing impact across markets.",
    count: 11
  },
  {
    label: "Product innovation",
    description: "Feature drops, AI enhancements, and roadmap debriefs for customers and press.",
    count: 19
  },
  {
    label: "Partnerships",
    description: "Alliances that unlock payments, compliance, and fulfilment capabilities globally.",
    count: 9
  }
];
