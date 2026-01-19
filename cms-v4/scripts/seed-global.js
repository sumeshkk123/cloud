(async () => {
  const locale = "en";

  const siteName = "Cloud MLM Software";
  const siteTagline = "AI-powered platform for modern network marketing teams";

  const headerCta = {
    title: "Pricing",
    href: "https://cloudmlmsoftware.com/pricing/"
  };

  const languageLinks = [
    { title: "English", href: "https://www.cloudmlmsoftware.com/" },
    { title: "Español", href: "https://www.cloudmlmsoftware.com/es" }
  ];

  const footerColumns = [
    {
      title: "Company",
      links: [
        { title: "About", href: "https://cloudmlmsoftware.com/about/" },
        { title: "Blog", href: "https://cloudmlmsoftware.com/blog/" },
        { title: "Careers", href: "https://cloudmlmsoftware.com/careers/" },
        { title: "Contact", href: "https://cloudmlmsoftware.com/contact/" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { title: "MLM Software", href: "https://cloudmlmsoftware.com/mlm-software/" },
        { title: "MLM App Development", href: "https://cloudmlmsoftware.com/mlm-app-development/" },
        { title: "MLM Consulting", href: "https://cloudmlmsoftware.com/mlm-consulting/" },
        { title: "MLM Marketing", href: "https://cloudmlmsoftware.com/mlm-business-marketing/" }
      ]
    },
    {
      title: "Resources",
      links: [
        { title: "Pricing", href: "https://cloudmlmsoftware.com/pricing/" },
        { title: "Demo", href: "https://cloudmlmsoftware.com/mlm-software-demo/" },
        { title: "MLM Plans", href: "https://cloudmlmsoftware.com/mlm-plan/" },
        { title: "Testimonials", href: "https://cloudmlmsoftware.com/testimonials/" }
      ]
    }
  ];

  const footerContacts = [
    {
      heading: "Talk to sales",
      body: "support@cloudmlmsoftware.com",
      links: [
        { title: "+91 9567 728 766", href: "tel:+919567728766" },
        { title: "+91 85901 37114", href: "tel:+918590137114" }
      ]
    },
    {
      heading: "Visit us",
      body: "Global offices across India, UAE, and USA",
      links: []
    }
  ];

  const footerBottomLinks = [
    { title: "Privacy", href: "https://cloudmlmsoftware.com/privacy" },
    { title: "Refund Policy", href: "https://cloudmlmsoftware.com/refunds-and-cancellation" },
    { title: "Legal", href: "https://cloudmlmsoftware.com/legal" }
  ];

  const demoMega = {
    variant: "demo",
    highlights: [
      {
        title: "Guided custom demo",
        description: "See your compensation plan, products, and markets configured inside Cloud MLM within 24 hours.",
        imageUrl: "https://cloudmlmsoftware.com/wp-content/uploads/2024/08/custom-demo.webp",
        ctaLabel: "Book a session",
        href: "https://cloudmlmsoftware.com/free-mlm-software-demo/"
      }
    ],
    cards: [
      {
        title: "Preset sandbox access",
        description: "Explore a ready-made environment that showcases core distributor journeys and dashboards.",
        href: "https://demo.cloudmlmsoftware.com",
        iconUrl: "https://cloudmlmsoftware.com/wp-content/themes/cloudmlmdemo/assets/images/icon/modules/demo.svg"
      },
      {
        title: "Implementation roadmap",
        description: "Map tasks, owners, and launch milestones for a four-week go-live.",
        href: "https://cloudmlmsoftware.com/mlm-software/implementation-plan/",
        iconUrl: "https://cloudmlmsoftware.com/wp-content/themes/cloudmlmdemo/assets/images/icon/plan.svg"
      },
      {
        title: "Migration checklist",
        description: "Prep your legacy data, integrations, and comms for a smooth transition.",
        href: "https://cloudmlmsoftware.com/mlm-migration-checklist/",
        iconUrl: "https://cloudmlmsoftware.com/wp-content/themes/cloudmlmdemo/assets/images/icon/migration.svg"
      }
    ],
    serviceList: [
      { label: "Book guided demo", href: "https://cloudmlmsoftware.com/free-mlm-software-demo/" },
      { label: "Launch timeline", href: "https://cloudmlmsoftware.com/mlm-software/implementation-plan/" },
      { label: "Pricing calculator", href: "https://cloudmlmsoftware.com/pricing/" },
      { label: "Talk to product experts", href: "tel:+919567728766" }
    ],
    serviceDetails: [
      {
        title: "AI-assisted plan modelling",
        description: "Upload your genealogy rules and let the simulator surface payout insights before you sign off.",
        href: "https://cloudmlmsoftware.com/blog/mlm-plan-ai-calculator/",
        imageUrl: "https://cloudmlmsoftware.com/wp-content/uploads/2024/06/cloudDashboardDemo.webp",
        ctaLabel: "See how it works"
      }
    ],
    categories: [],
    callouts: [],
    seeAll: { title: "Compare demo options", href: "https://cloudmlmsoftware.com/mlm-software-demo/" }
  };

  const modulesMega = {
    variant: "modules",
    highlights: [
      {
        title: "56+ configurable modules",
        description: "Blend payouts, CRM, marketing, inventory, and finance tooling in one stack.",
        imageUrl: "https://cloudmlmsoftware.com/wp-content/uploads/2024/08/cloud_modules_Menu.webp",
        ctaLabel: "View full library",
        href: "https://cloudmlmsoftware.com/mlm-software-modules/"
      }
    ],
    cards: [
      {
        title: "Commission engine",
        description: "Automate multi-ledger payouts with audit-ready exports.",
        href: "https://cloudmlmsoftware.com/mlm-software/commission-module/",
        iconUrl: "https://cloudmlmsoftware.com/wp-content/themes/cloudmlmdemo/assets/images/icon/modules/multicurrency.webp"
      },
      {
        title: "Distributor CRM",
        description: "Manage leads, onboarding, and compliance workflows.",
        href: "https://cloudmlmsoftware.com/mlm-crm/",
        iconUrl: "https://cloudmlmsoftware.com/wp-content/themes/cloudmlmdemo/assets/images/icon/modules/ticket-system.webp"
      },
      {
        title: "Marketing automation",
        description: "Personalise campaigns with journeys, segmentation, and triggers.",
        href: "https://cloudmlmsoftware.com/mlm-business-marketing/",
        iconUrl: "https://cloudmlmsoftware.com/wp-content/themes/cloudmlmdemo/assets/images/icon/modules/auto-responder.webp"
      }
    ],
    serviceList: [
      {
        label: "Multi currency",
        href: "https://cloudmlmsoftware.com/mlm-software-modules/multi-currency-module/",
        iconUrl: "https://cloudmlmsoftware.com/wp-content/themes/cloudmlmdemo/assets/images/icon/modules/multicurrency.webp"
      },
      {
        label: "Ticket desk",
        href: "https://cloudmlmsoftware.com/mlm-software-modules/mlm-ticket-system-module/",
        iconUrl: "https://cloudmlmsoftware.com/wp-content/themes/cloudmlmdemo/assets/images/icon/modules/ticket-system.webp"
      },
      {
        label: "Autoresponder",
        href: "https://cloudmlmsoftware.com/mlm-software-modules/mlm-autoresponder-module/",
        iconUrl: "https://cloudmlmsoftware.com/wp-content/themes/cloudmlmdemo/assets/images/icon/modules/auto-responder.webp"
      },
      {
        label: "E-voucher",
        href: "https://cloudmlmsoftware.com/mlm-software-modules/mlm-e-voucher-module/",
        iconUrl: "https://cloudmlmsoftware.com/wp-content/themes/cloudmlmdemo/assets/images/icon/modules/voucher.webp"
      },
      {
        label: "E-wallet",
        href: "https://cloudmlmsoftware.com/mlm-software-modules/e-wallet-module/",
        iconUrl: "https://cloudmlmsoftware.com/wp-content/themes/cloudmlmdemo/assets/images/icon/modules/Ewallet.webp"
      },
      {
        label: "Backup manager",
        href: "https://cloudmlmsoftware.com/mlm-software-modules/mlm-backup-manager-module/",
        iconUrl: "https://cloudmlmsoftware.com/wp-content/themes/cloudmlmdemo/assets/images/icon/modules/backup.webp"
      }
    ],
    serviceDetails: [],
    categories: [],
    callouts: [],
    seeAll: { title: "See every module", href: "https://cloudmlmsoftware.com/mlm-software-modules/" }
  };

  const plansMega = {
    variant: "plans",
    highlights: [],
    cards: [
      {
        title: "Binary",
        description: "Left-right legs with spillover, carry-forward logic, and rank accelerators.",
        href: "https://cloudmlmsoftware.com/mlm-plan/binary-mlm-plan/",
        iconUrl: "https://cloudmlmsoftware.com/wp-content/themes/cloudmlmdemo/assets/images/icon/plans/binary.svg"
      },
      {
        title: "Unilevel",
        description: "Unlimited frontline with depth-based bonus rules.",
        href: "https://cloudmlmsoftware.com/mlm-plan/unilevel-mlm-plan/",
        iconUrl: "https://cloudmlmsoftware.com/wp-content/themes/cloudmlmdemo/assets/images/icon/plans/unilevel.svg"
      },
      {
        title: "Matrix",
        description: "Forced width matrices with re-entry and spill incentives.",
        href: "https://cloudmlmsoftware.com/mlm-plan/matrix-plan/",
        iconUrl: "https://cloudmlmsoftware.com/wp-content/themes/cloudmlmdemo/assets/images/icon/plans/matrix.svg"
      }
    ],
    serviceList: [
      { label: "Binary plan", href: "https://cloudmlmsoftware.com/mlm-plan/binary-mlm-plan/" },
      { label: "Unilevel plan", href: "https://cloudmlmsoftware.com/mlm-plan/unilevel-mlm-plan/" },
      { label: "Matrix plan", href: "https://cloudmlmsoftware.com/mlm-plan/matrix-plan/" },
      { label: "Generation plan", href: "https://cloudmlmsoftware.com/mlm-plan/generation-plan/" },
      { label: "Monoline plan", href: "https://cloudmlmsoftware.com/mlm-plan/monoline-mlm-plan/" },
      { label: "Board plan", href: "https://cloudmlmsoftware.com/mlm-plan/board-plan/" }
    ],
    serviceDetails: [
      {
        title: "Plan comparison guide",
        description: "Evaluate Binary, Unilevel, Matrix, and hybrids against your growth targets.",
        href: "https://cloudmlmsoftware.com/mlm-plan/",
        imageUrl: "https://cloudmlmsoftware.com/wp-content/uploads/2024/08/plan-comparison.webp",
        ctaLabel: "Download guide"
      }
    ],
    categories: [],
    callouts: [],
    seeAll: { title: "View all MLM plans", href: "/mlm-plans" }
  };

  const servicesMega = {
    variant: "services",
    highlights: [
      {
        title: "Full-service delivery",
        description: "Consulting, development, training, and managed ops handled by direct selling specialists.",
        imageUrl: "https://cloudmlmsoftware.com/wp-content/uploads/2024/07/cloud-mlm-footer-logo.webp",
        ctaLabel: "Meet the team",
        href: "https://cloudmlmsoftware.com/about/"
      }
    ],
    cards: [
      {
        title: "MLM software development",
        description: "Custom integrations, portals, and analytics on a secure core.",
        href: "https://cloudmlmsoftware.com/mlm-software/",
        iconUrl: "https://cloudmlmsoftware.com/wp-content/themes/cloudmlmdemo/assets/images/icon/modules/dev.svg"
      },
      {
        title: "Mobile app development",
        description: "Native iOS and Android experiences for field engagement.",
        href: "https://cloudmlmsoftware.com/mlm-app-development/",
        iconUrl: "https://cloudmlmsoftware.com/wp-content/themes/cloudmlmdemo/assets/images/icon/modules/mobile.svg"
      },
      {
        title: "Consulting & compliance",
        description: "Launch playbooks, regulatory reviews, and plan optimisation.",
        href: "https://cloudmlmsoftware.com/mlm-consulting/",
        iconUrl: "https://cloudmlmsoftware.com/wp-content/themes/cloudmlmdemo/assets/images/icon/modules/consulting.svg"
      }
    ],
    serviceList: [
      { label: "Marketing services", href: "https://cloudmlmsoftware.com/mlm-business-marketing/" },
      { label: "Integrations", href: "https://cloudmlmsoftware.com/integrations/" },
      { label: "Support plans", href: "https://cloudmlmsoftware.com/mlm-support/" },
      { label: "Partner portal", href: "https://cloudmlmsoftware.com/partners/" }
    ],
    serviceDetails: [
      {
        title: "Customer success",
        description: "Dedicated launch managers and 24/7 product support keep momentum high post go-live.",
        href: "https://cloudmlmsoftware.com/customer-success/",
        imageUrl: "https://cloudmlmsoftware.com/wp-content/uploads/2024/07/support-team.webp",
        ctaLabel: "See success services"
      }
    ],
    categories: [],
    callouts: [],
    seeAll: { title: "Explore services", href: "/services" }
  };

  const primaryNav = [
    {
      label: "Features",
      href: "/features",
      kind: "link",
      order: 0
    },
    {
      label: "Demo",
      href: "https://cloudmlmsoftware.com/free-mlm-software-demo",
      kind: "mega",
      order: 1,
      mega: demoMega
    },
    {
      label: "Modules",
      href: "https://cloudmlmsoftware.com/mlm-software-modules/",
      kind: "mega",
      order: 2,
      mega: modulesMega
    },
    {
      label: "MLM Plans",
      href: "/mlm-plans",
      kind: "mega",
      order: 3,
      mega: plansMega
    },
    {
      label: "Services",
      href: "/services",
      kind: "mega",
      order: 4,
      mega: servicesMega
    },
    {
      label: "Resources",
      href: "/resources",
      kind: "link",
      order: 5
    },
    {
      label: "Contact",
      href: "/contact",
      kind: "link",
      order: 6
    }
  ];

  const data = {
    siteName,
    siteTagline,
    languageLabel: "Language",
    languageAriaLabel: "Select language",
    primaryNav,
    headerCta,
    languageLinks,
    footerColumns,
    footerContacts,
    footerBottomLinks
  };

  const existing = await strapi.entityService.findMany("api::global.global", {
    filters: { locale }
  });

  if (existing && existing.length > 0) {
    await strapi.entityService.update("api::global.global", existing[0].id, { data });
    console.log(`Updated global settings for locale ${locale}`);
  } else {
    await strapi.entityService.create("api::global.global", {
      data: { ...data, locale }
    });
    console.log(`Created global settings for locale ${locale}`);
  }

  process.exit(0);
})();
