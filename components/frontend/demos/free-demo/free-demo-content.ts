export type DemoStep = {
  title: string;
  description: string;
  icon: "explore" | "configure" | "present" | "plan";
};

export type Experience = {
  title: string;
  description: string;
  bullets: string[];
  icon: "dashboard" | "automation" | "analytics";
};

export type PlanDemo = {
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
  admin: {
    title: string;
    description: string;
    bullets: string[];
  };
  user: {
    title: string;
    description: string;
    bullets: string[];
  };
};

export type Faq = {
  question: string;
  answer: string;
};

export type Deliverable = {
  title: string;
  description: string;
  bullets: string[];
  icon: "playbook" | "automation" | "insights";
};

export type DemoTeamMember = {
  title: string;
  focus: string;
  bullets: string[];
  icon: "architect" | "engineer" | "success";
};

export type AgendaItem = {
  slot: string;
  title: string;
  description: string;
  bullets: string[];
  icon: "kickoff" | "compensation" | "automation" | "integration" | "roadmap";
};

export type InvitePersona = {
  title: string;
  summary: string;
  bullets: string[];
  icon: "leadership" | "finance" | "technology" | "field";
  template: {
    subject: string;
    body: string;
  };
};

export const SANDBOX_DELIVERABLES: Deliverable[] = [
  {
    title: "Executive-ready sandbox playbooks",
    description:
      "We map your products, compensation levers, and compliance priorities into curated demo scripts for every stakeholder group.",
    bullets: [
      "Agenda templates for finance, field, and IT reviews",
      "Branded decks that capture KPIs and success metrics",
      "Talking points aligned to your expansion narrative"
    ],
    icon: "playbook"
  },
  {
    title: "Automation & data configuration",
    description:
      "Solution engineers wire integrations, load anonymised datasets, and configure workflows that reflect everyday operations.",
    bullets: [
      "Sample genealogy, order, and commission datasets",
      "Workflow automations tied to alerts and approvals",
      "Sandbox credentials for distributors and admins"
    ],
    icon: "automation"
  },
  {
    title: "Insight and readiness reporting",
    description:
      "Analytics specialists deliver dashboards and summaries that highlight opportunities, gaps, and go-live considerations.",
    bullets: [
      "Executive dashboards seeded with your KPIs",
      "AI-generated briefings for decision makers",
      "Readiness checklist covering integrations and change"
    ],
    icon: "insights"
  }
];

export const DEMO_TEAM: DemoTeamMember[] = [
  {
    title: "Solution architect",
    focus: "Translates business rules into platform configuration and ensures compensation accuracy.",
    bullets: [
      "Captures plan nuances and scenario variations",
      "Highlights compliance guardrails and audit trails",
      "Advises on phased rollout and localisation"
    ],
    icon: "architect"
  },
  {
    title: "Integration engineer",
    focus: "Connects your CRM, commerce, finance, and support stack so the sandbox mirrors production workflows.",
    bullets: [
      "Prepares API and SFTP integration stubs",
      "Configures automation triggers and data syncs",
      "Documents cutover and security considerations"
    ],
    icon: "engineer"
  },
  {
    title: "Customer success lead",
    focus: "Coordinates stakeholders, collects feedback, and packages recommendations for executive approval.",
    bullets: [
      "Runs weekly readouts with your core team",
      "Tracks adoption signals and training needs",
      "Delivers post-demo roadmap and investment summary"
    ],
    icon: "success"
  }
];

export const DEMO_AGENDA: AgendaItem[] = [
  {
    slot: "0 – 10 minutes",
    title: "Kickoff and success criteria",
    description: "Align on growth targets, launch timelines, and the outcomes your leadership expects from this evaluation.",
    bullets: [
      "Capture your launch objectives and market priorities",
      "Confirm stakeholders joining future workshops",
      "Review the scorecard we’ll use to document fit"
    ],
    icon: "kickoff"
  },
  {
    slot: "10 – 25 minutes",
    title: "Compensation engine in action",
    description: "See how we configure binary, unilevel, and hybrid plans while maintaining audit-ready payouts.",
    bullets: [
      "Adjust breakages, bonuses, and promotions on the fly",
      "Simulate weekly and monthly commissions in seconds",
      "Highlight compliance and finance guardrails"
    ],
    icon: "compensation"
  },
  {
    slot: "25 – 40 minutes",
    title: "Field, customer, and automation journeys",
    description: "Walk through distributor onboarding, customer orders, and no-code automations that keep teams moving.",
    bullets: [
      "Demo the mobile workspace and replicated shops",
      "Showcase retention campaigns and autoship flows",
      "Surface AI copilots that guide next best actions"
    ],
    icon: "automation"
  },
  {
    slot: "40 – 55 minutes",
    title: "Data, integrations, and security",
    description: "Review how the platform connects to your CRM, finance, and support stack with enterprise-ready controls.",
    bullets: [
      "Outline API, SFTP, and webhook integration paths",
      "Share data migration playbooks and anonymised sandboxes",
      "Cover security posture, roles, and compliance artefacts"
    ],
    icon: "integration"
  },
  {
    slot: "55 – 60 minutes",
    title: "Roadmap and next steps",
    description: "Document agreed actions, decision milestones, and the resources you receive after the session.",
    bullets: [
      "Confirm sandbox deliverables and owner assignments",
      "Align on procurement or diligence requirements",
      "Schedule follow-up workshops and executive briefings"
    ],
    icon: "roadmap"
  }
];

export const DEMO_INVITES: InvitePersona[] = [
  {
    title: "Leadership & strategy",
    summary: "Ensure executives see how Cloud MLM Software supports growth, international expansion, and compliance.",
    bullets: [
      "Highlight dashboards that track revenue, rank, and retention",
      "Showcase roadmap controls for phased launches",
      "Frame the demo around strategic KPIs and investor goals"
    ],
    icon: "leadership",
    template: {
      subject: "Join our Cloud MLM Software strategy demo",
      body: [
        "Hi team,",
        "",
        "We’ve scheduled a 60-minute strategy demo with Cloud MLM Software on [Date/Time]. The session focuses on:",
        "- Growth and international expansion roadmaps",
        "- Executive dashboards for revenue, ranks, and retention",
        "- Compliance and governance guardrails",
        "",
        "Please join from [Meeting link] so we can align on outcomes and investment checkpoints.",
        "",
        "Thanks,",
        "[Your name]"
      ].join("\n")
    }
  },
  {
    title: "Finance & compliance",
    summary: "Invite finance leads and legal partners so they validate auditing, taxation, and regulatory workflows.",
    bullets: [
      "Review compensation simulations and variance reports",
      "Discuss payout controls, tax handling, and localisation",
      "Share diligence documents and security attestations"
    ],
    icon: "finance",
    template: {
      subject: "Finance focus for the Cloud MLM Software demo",
      body: [
        "Hello,",
        "",
        "Cloud MLM Software will walk us through commissions, payments, and compliance tooling on [Date/Time]. Points they will cover:",
        "- Audit-ready statements and reconciliation",
        "- Regional tax, VAT/GST, and withholding options",
        "- Security posture plus SOC, ISO, and data privacy artefacts",
        "",
        "Join via [Meeting link] and share any scenarios you want them to model in the sandbox.",
        "",
        "Best,",
        "[Your name]"
      ].join("\n")
    }
  },
  {
    title: "Technology & integrations",
    summary: "Bring architects and IT stakeholders to validate integration paths, data governance, and scalability.",
    bullets: [
      "Map APIs, SSO, and event-driven automations",
      "Discuss hosting, reliability, and monitoring",
      "Plan migration and cutover milestones"
    ],
    icon: "technology",
    template: {
      subject: "What to expect in the integration deep dive",
      body: [
        "Hi engineering team,",
        "",
        "Our Cloud MLM Software demo is booked for [Date/Time]. They will explore:",
        "- REST, GraphQL, and iPaaS integration options",
        "- Data residency, encryption, and access controls",
        "- Sandbox migration steps with anonymised datasets",
        "",
        "Please join using [Meeting link] so we capture technical questions and follow-up actions.",
        "",
        "Regards,",
        "[Your name]"
      ].join("\n")
    }
  },
  {
    title: "Field enablement",
    summary: "Loop in sales, training, and customer success leaders to align on onboarding and engagement journeys.",
    bullets: [
      "Preview distributor and customer workspaces",
      "Coordinate launch communications and training assets",
      "Capture support processes and recognition programmes"
    ],
    icon: "field",
    template: {
      subject: "Invite to the Cloud MLM Software field experience walkthrough",
      body: [
        "Hi team,",
        "",
        "We’re meeting Cloud MLM Software on [Date/Time] to preview field and customer workflows. Expect to see:",
        "- Mobile onboarding journeys and guided selling",
        "- Autoship, promotions, and community recognition",
        "- Support intake and knowledge sharing",
        "",
        "Join via [Meeting link] so we gather feedback for adoption planning.",
        "",
        "Thanks,",
        "[Your name]"
      ].join("\n")
    }
  }
];

export const DEMO_STEPS: DemoStep[] = [
  {
    title: "Explore the sandbox",
    description: "Log in to a curated environment with pre-built compensation, commerce, and reporting modules.",
    icon: "explore"
  },
  {
    title: "Configure scenarios",
    description: "Adjust plans, campaigns, and automations with guidance from our solution architects.",
    icon: "configure"
  },
  {
    title: "Share the story",
    description: "Generate executive-ready dashboards and workflows to present to stakeholders.",
    icon: "present"
  },
  {
    title: "Plan your rollout",
    description: "Receive a tailored roadmap covering integrations, change management, and success milestones.",
    icon: "plan"
  }
];

export const LIVE_EXPERIENCES: Experience[] = [
  {
    title: "Unified workspaces",
    description: "See how distributors, customers, and corporate teams interact with Cloud MLM Software.",
    bullets: [
      "Distributor cockpit with onboarding, storefronts, and recognition",
      "Customer portal with autoship and support journeys",
      "Executive dashboards summarising global momentum"
    ],
    icon: "dashboard"
  },
  {
    title: "Automation fabric",
    description: "Experience no-code workflows that orchestrate payouts, communications, and compliance tasks.",
    bullets: [
      "Visual automation builder tied to approval guardrails",
      "Trigger campaigns from CRM, ecommerce, and support systems",
      "Copilot recommendations embedded into each workflow"
    ],
    icon: "automation"
  },
  {
    title: "Analytics & copilots",
    description: "Follow intelligence from data visualisations to AI-generated briefings.",
    bullets: [
      "Scenario comparisons for compensation, retention, and promotions",
      "Copilot Q&A covering genealogy, revenue, and churn",
      "Downloadable decks summarising insights for leadership"
    ],
    icon: "analytics"
  }
];

export const PLAN_DEMOS: PlanDemo[] = [
  {
    title: "Binary Plan MLM Software Demo",
    summary:
      "Administrators configure binary structures, carryover, and spillover while distributors manage power legs, cycles, and bonuses.",
    image: "/wp-content/uploads/2024/08/Binary_tree.webp",
    imageAlt: "Binary plan tree visual",
    width: 509,
    height: 348,
    admin: {
      title: "Admin viewpoint",
      description: "Model binary trees with flexible rules and audit-friendly payouts.",
      bullets: [
        "Carry-forward, flush, and cycle configuration",
        "Real-time commission simulations before payroll",
        "Activity monitoring across every leg"
      ]
    },
    user: {
      title: "Distributor viewpoint",
      description: "Distributors track leg health, bonuses, and team placements in one dashboard.",
      bullets: [
        "Genealogy with rank and volume indicators",
        "Earnings breakdown for cycles and matching bonuses",
        "Self-service placement and profile management"
      ]
    }
  },
  {
    title: "Matrix MLM Software Demo",
    summary:
      "Experience forced-matrix layouts with automated re-entries, spillover, and board upgrades.",
    image: "/wp-content/uploads/2024/08/Matrix_tree.webp",
    imageAlt: "Matrix plan layout",
    width: 727,
    height: 338,
    admin: {
      title: "Admin viewpoint",
      description: "Define matrix sizes, re-entry logic, and incentive structures.",
      bullets: [
        "Configure width/depth per market",
        "Automate board cycling and rewards",
        "Analyse utilisation across positions"
      ]
    },
    user: {
      title: "Distributor viewpoint",
      description: "Members view open slots, bonuses, and board progress at a glance.",
      bullets: [
        "Track positions and spillover",
        "Access commission history and pool earnings",
        "Manage referrals and customer orders"
      ]
    }
  },
  {
    title: "Unilevel MLM Software Demo",
    summary:
      "Unlimited frontline enrolment with compression, overrides, and leadership recognition built-in.",
    image: "/wp-content/uploads/2024/08/Unilevel_tree.webp",
    imageAlt: "Unilevel tree",
    width: 498,
    height: 234,
    admin: {
      title: "Admin viewpoint",
      description: "Control compression, roll-up, and rank-based overrides across generations.",
      bullets: [
        "Configure generation depth per market",
        "Automate compression and roll-up events",
        "Report on leg performance and retention"
      ]
    },
    user: {
      title: "Distributor viewpoint",
      description: "Frontline sellers monitor team health, earnings, and onboarding tasks.",
      bullets: [
        "Frontline dashboards with key KPIs",
        "Real-time commission and bonus statements",
        "Prospect and customer follow-up tools"
      ]
    }
  },
  {
    title: "Generation Plan Demo",
    summary:
      "Profit-sharing pools and depth-oriented leadership programs made simple.",
    image: "/wp-content/uploads/2024/08/Gen_tree.webp",
    imageAlt: "Generation plan diagram",
    width: 658,
    height: 528,
    admin: {
      title: "Admin viewpoint",
      description: "Set break levels, leadership pools, and depth metrics.",
      bullets: [
        "Rank-based generational configuration",
        "Automated funding of leadership pools",
        "Depth analytics for finance and compliance"
      ]
    },
    user: {
      title: "Distributor viewpoint",
      description: "Leaders access generational dashboards, coaching tasks, and forecasts.",
      bullets: [
        "Mentorship tasks and recognition",
        "Pool qualification progress",
        "Predictive insights for bonuses"
      ]
    }
  },
  {
    title: "Gift / Donation Plan Demo",
    summary:
      "Run compliant gifting or help plans with tracked contributions and automated notifications.",
    image: "/wp-content/uploads/2024/09/Gift_tree-1.webp",
    imageAlt: "Gift plan graphic",
    width: 415,
    height: 310,
    admin: {
      title: "Admin viewpoint",
      description: "Manage gifting rounds, documentation, and participant eligibility.",
      bullets: [
        "Define gifting queues and rules",
        "Collect receipts and confirmations",
        "Monitor participation with compliance alerts"
      ]
    },
    user: {
      title: "Distributor viewpoint",
      description: "Participants send, receive, and verify gifts with transparency.",
      bullets: [
        "Guided gifting process",
        "Status tracking with reminders",
        "Messaging to coordinate help"
      ]
    }
  },
  {
    title: "Board Plan Demo",
    summary:
      "Automate revolving boards, reinvestment, and recognition for momentum-driven teams.",
    image: "/wp-content/uploads/2024/08/Board_tree.webp",
    imageAlt: "Board plan graphic",
    width: 923,
    height: 348,
    admin: {
      title: "Admin viewpoint",
      description: "Control board tiers, splitting, and auto-upgrades.",
      bullets: [
        "Configure multiple boards and entry criteria",
        "Automate splits, upgrades, and reinvestment",
        "Analyse cycle times and performance"
      ]
    },
    user: {
      title: "Distributor viewpoint",
      description: "Sellers track board position, rewards, and team recognition.",
      bullets: [
        "Board dashboards with progress markers",
        "Notifications for rewards and promotions",
        "Community recognition feeds"
      ]
    }
  },
  {
    title: "Party Plan Demo",
    summary:
      "Plan and execute social selling events with RSVPs, host tools, and order capture.",
    image: "/wp-content/uploads/2024/09/party_tree.webp",
    imageAlt: "Party plan illustration",
    width: 415,
    height: 310,
    admin: {
      title: "Admin viewpoint",
      description: "Launch and track party programs, hosts, and sales.",
      bullets: [
        "Event scheduling and host assignments",
        "Sales attribution and commission reconciliation",
        "Post-event analytics and follow-up"
      ]
    },
    user: {
      title: "Distributor viewpoint",
      description: "Hosts manage invitations, demos, and orders from one hub.",
      bullets: [
        "Guest lists with reminders",
        "Mobile order capture",
        "Party incentive dashboards"
      ]
    }
  },
  {
    title: "Repurchase Plan Demo",
    summary:
      "Highlight autoship and repeat purchase programs tied to commissions and rewards.",
    image: "/wp-content/uploads/2024/09/Repurchase_tree.webp",
    imageAlt: "Repurchase tree",
    width: 415,
    height: 310,
    admin: {
      title: "Admin viewpoint",
      description: "Set repurchase incentives, track volume, and automate payouts.",
      bullets: [
        "Reward configuration by SKU and market",
        "Retention analytics for finance and success",
        "Automated commission scheduling"
      ]
    },
    user: {
      title: "Distributor viewpoint",
      description: "Distributors manage autoship, track rewards, and follow up with customers.",
      bullets: [
        "Autoship management tools",
        "Earnings breakdown by customer",
        "Reminders for loyalty campaigns"
      ]
    }
  },
  {
    title: "Spillover Binary Demo",
    summary:
      "Understand spillover automation, balancing, and matching bonuses in binary structures.",
    image: "/wp-content/uploads/2024/09/spillover_tree.webp",
    imageAlt: "Spillover tree",
    width: 415,
    height: 310,
    admin: {
      title: "Admin viewpoint",
      description: "Fine-tune placement queues, volume balancing, and matching bonuses.",
      bullets: [
        "Automated placement and queue controls",
        "Alerts for leg imbalance",
        "Flexible matching bonus settings"
      ]
    },
    user: {
      title: "Distributor viewpoint",
      description: "Distributors visualise spillover support and plan enrolment strategy.",
      bullets: [
        "Projected spillover earnings",
        "Leg health indicators",
        "Placement guidance for team support"
      ]
    }
  },
  {
    title: "Stair Step Plan Demo",
    summary:
      "Rank-based overrides, leadership development, and breakaway logic made simple.",
    image: "/wp-content/uploads/2024/09/stair_step_tree.webp",
    imageAlt: "Stair step plan graphic",
    width: 415,
    height: 310,
    admin: {
      title: "Admin viewpoint",
      description: "Configure rank requirements, breakaway, and leadership pools.",
      bullets: [
        "Breakaway and maintenance criteria",
        "Override scheduling",
        "Leadership dashboards"
      ]
    },
    user: {
      title: "Distributor viewpoint",
      description: "Field leaders track rank progress, leg maintenance, and override income.",
      bullets: [
        "Rank tracker with KPIs",
        "Leg health alerts",
        "Override statements"
      ]
    }
  }
];

export const FAQS: Faq[] = [
  {
    question: "How long does the free demo last?",
    answer: "Every organisation receives a 30-day sandbox with optional extensions when working through migration or integration planning."
  },
  {
    question: "Is the demo customised for our plan?",
    answer: "Yes. We tailor compensation, field experiences, and automations to match your goals so stakeholders see relevant workflows."
  },
  {
    question: "Do we get support during the demo?",
    answer: "A solution consultant guides configuration sessions, and our success desk answers questions throughout the trial."
  }
];

