import { Gift, Wallet } from "@phosphor-icons/react";
import type { ModuleFeatureContent } from "@/components/frontend/modules/subpage";

/** Image for Types section (why choose) on e-voucher page – from cloudmlmsoftware.com/e-voucher-for-mlm-software/ */
const TYPES_IMAGE = "/images/moduleEvoucherIntro.svg";

export const eVoucherContent: ModuleFeatureContent = {
  hero: {
    badge: "Rewards",
    title: "E-Voucher module",
    description:
      "An MLM Software module is a package for extending functionality of MLM Software. There are many packages of modules you can combine and use with your MLM Software. Cloud MLM makes it easy to extend modules with MLM software.",
    primaryCta: "Request a demo",
    secondaryCta: "View demo",
    metrics: [
      { label: "Vouchers issued", value: "500K+", detail: "Incentives and rewards." },
      { label: "Currencies", value: "150+", detail: "Global redemption support." },
      { label: "Redemption rate", value: "85%", detail: "Tracked per campaign." },
    ],
  },
  intro: {
    badge: "Why this module",
    heading: "Streamlining Transactions with E-Voucher Module: Simplifying MLM Business Model for Users",
    paragraphs: [
      "E-Voucher module allows users to do transactions more easily and securely. This feature enables you to generate configurable e-vouchers for promotions, rewards, and incentives with secure and easy transactions. Members can purchase, transfer and redeem e-vouchers conveniently in the user interface to drive their engagement.",
      "With real-time tracking and extensive reporting, the E-Voucher module empowers you with full visibility and management of your voucher management system towards network expansion and member retention.",
      "Each e-voucher is created on a highly secure basis and is unique, making it resistant to guess or brute force. Encoding and voucher tracking built into the module reduce the risk of cheating and loss, so your programme stays compliant and trustworthy.",
      "Administrators can manage e-vouchers easily from the backend: customize commission rates, discounts, and other elements per campaign or product. E-voucher reports can be viewed or printed by admin, while users can access their own e-voucher history and usage reports for full transparency.",
      "The module supports MLM marketing and management of vouchers through a Franchise or Member Ordering Concept. When a member has no voucher left but has balance in their E-wallet, they can request an e-voucher from admin in a single click, keeping the flow smooth and reducing support load.",
      "E-vouchers can be sent through Email, Fax, or SMS, and a desktop application is available for voucher printing. With block/unblock voucher facility, export to Excel or Word, complete tracking, and auto backup, the E-Voucher module is a complete solution for digital rewards and payments in your MLM business.",
    ],
    partnerCard: {
      badge: "Included",
      heading: "Features of Cloud MLM's E-voucher System",
      points: [
        "Easy to use interfaces; users can purchase products with these e-voucher codes.",
        "Any amount of E-voucher types can be done.",
        "If there is no voucher left and there is balance in E-wallet, users can request E-Voucher from admin in a button click.",
        "E-vouchers are created on a highly secure basis; each e-voucher is unique and unable to guess or brute force.",
        "E-voucher can be managed by admin easily from backend; customize commission rates, discounts and other elements.",
        "E-voucher reports can be viewed or printed by admin; users can view their e-voucher history and usage reports.",
        "E-voucher encoding and voucher tracking decrease risk of cheating and loss of vouchers.",
        "Allow MLM marketing and management of vouchers through Franchise / Member Ordering Concept.",
        "Block/Unblock Voucher Facility; Exporting to Excel/Word; Complete tracking of the voucher.",
        "Desktop application for voucher printing; E-voucher can be sent through Email/Fax/SMS; Various MIS Reports; Auto Backup.",
      ],
    },
  },
  importanceSection: {
    badge: "Rewards",
    heading: "Importance of Cloud MLM's E-voucher module",
    subheading: "Secure transactions and global payment collection",
    paragraphs: [
      "By the use of E-vouchers, transactions and payments can be made secure. There are various methods available for enrollment and product payments. However, not all of them are secure and do not provide protection for the transactions and payments. With the help of technology, transactions and payments can now be made secure through the use of E-vouchers. E-vouchers are also known as Prepaid Vouchers, Prepaid Coupons and Scratch Cards.",
      "For MLM companies it becomes difficult to collect payments from clients across the globe. Many companies have embraced the use of e-vouchers to facilitate global payment collection. The E-voucher system offers greater flexibility to clients and companies for doing transactions on the web at a very low cost. E-voucher system is a secured way of taking membership, sponsorship, and product payment. Well-known and large MLM network companies have adopted the E-voucher method for collecting payment from clients. There are many more modules in Cloud MLM Software that can help you boost your business!",
    ],
    imageSrc: "/images/dashboard-deign.webp",
    imageAlt: "Cloud MLM Software E-Voucher – digital rewards and payments",
  },
  benefitsSection: {
    badge: "Benefits",
    heading: "Key benefits of the E-Voucher module",
    description:
      "The E-Voucher module simplifies digital rewards, promotions, and payments across your MLM network with secure, configurable vouchers and full tracking.",
    items: [
      {
        title: "Configurable e-vouchers",
        description: "Generate configurable e-vouchers for promotions, rewards, and incentives with secure and easy transactions.",
      },
      {
        title: "Purchase, transfer & redeem",
        description: "Members can purchase, transfer and redeem e-vouchers conveniently in the user interface to drive engagement.",
      },
      {
        title: "Real-time tracking & reporting",
        description: "Full visibility and management of your voucher system with real-time tracking and extensive reporting.",
      },
      {
        title: "Secure & unique vouchers",
        description: "E-vouchers are created on a highly secure basis; each is unique and resistant to guess or brute force.",
      },
      {
        title: "Admin management",
        description: "Manage e-vouchers from the backend; customize commission rates, discounts, and other elements. View or print reports.",
      },
      {
        title: "E-wallet integration",
        description: "When there is no voucher left and balance in E-wallet, users can request E-Voucher from admin in a button click.",
      },
    ],
  },
  whyChooseSection: {
    imageSrc: TYPES_IMAGE,
    imageAlt: "E-Voucher module for MLM",
    badge: "Types",
    heading: "Key capabilities of the E-Voucher module",
    description:
      "Digital vouchers for rewards, incentives, and promotions. Secure generation, transfer, redemption, and full tracking. Integrates with E-Wallet and supports global payment collection.",
    items: [
      {
        number: "01",
        title: "Generation & encoding",
        description:
          "Generate e-vouchers on a highly secure basis; each voucher is unique. E-voucher encoding and tracking decrease risk of cheating and loss. Desktop application available for voucher printing.",
      },
      {
        number: "02",
        title: "Distribution & delivery",
        description:
          "E-voucher can be sent through Email, Fax, or SMS. Block/Unblock Voucher Facility. Export to Excel/Word. Complete tracking of the voucher and various MIS reports.",
      },
      {
        number: "03",
        title: "Franchise & member ordering",
        description:
          "Allow MLM marketing and management of vouchers through Franchise / Member Ordering Concept. Users can request E-Voucher from admin when balance exists in E-wallet.",
      },
    ],
  },
  features: [
    {
      icon: Gift,
      title: "Digital vouchers",
      description:
        "Issue and redeem e-vouchers for incentives, rewards, and promotions. Configurable vouchers with secure transactions and real-time tracking.",
    },
    {
      icon: Wallet,
      title: "Redemption & E-wallet",
      description:
        "Members purchase, transfer and redeem e-vouchers in the UI. Request E-Voucher from admin when balance is in E-wallet. Full history and usage reports.",
    },
  ],
  faq: {
    badge: "FAQ",
    heading: "Frequently asked questions",
    description: "Common questions about the E-Voucher module.",
    items: [
      {
        question: "How do we get started?",
        answer:
          "We begin with a discovery call and configure the E-Voucher module for your plan. We set up secure voucher generation, transfer, redemption, and reporting so you go live with confidence.",
      },
      {
        question: "Is it included in our plan?",
        answer:
          "Module availability depends on your plan; we can add or upgrade modules. The E-Voucher module integrates with Cloud MLM Software and E-Wallet for rewards, incentives, and payments.",
      },
      {
        question: "Can members request e-vouchers from admin?",
        answer:
          "Yes. If there is no voucher left and there is balance in E-wallet, users can request E-Voucher from admin in a button click. E-vouchers are created on a highly secure basis and each is unique.",
      },
    ],
  },
  cta: {
    heading: "Purchase AI-Powered Cloud MLM Software Today!",
    description:
      "Achieve MLM success with smart AI-driven tools! Automate, manage, and grow your network effortlessly. Buy now and scale your business!",
    buttonText: "Buy Now",
    secondaryCta: "Try Demo",
    trustIndicators: ["Quick implementation", "Expert support", "Secure voucher system"],
  },
};
