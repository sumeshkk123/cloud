import { Ticket, UserCircleGear } from "@phosphor-icons/react";
import type { ModuleFeatureContent } from "@/components/frontend/modules/subpage";

/** Image for Types section (why choose) on ticket-system page */
const TYPES_IMAGE = "/images/moduleautoresponder4.svg";

export const ticketSystemContent: ModuleFeatureContent = {
  hero: {
    badge: "Support",
    title: "Ticket system module",
    description:
      "The issue resolution process for the support team can be challenging, as assigning individual issues to team members is typically tedious. However, with the use of our Cloud Ticket System, managing the support process becomes much simpler.",
    primaryCta: "Request a demo",
    secondaryCta: "View demo",
    metrics: [
      { label: "Sections", value: "Admin, User, Employee", detail: "Separate access." },
      { label: "Assignment", value: "Auto", detail: "By type to employees." },
      { label: "Tracking", value: "Full", detail: "Progress and status." },
    ],
  },
  intro: {
    badge: "Why this module",
    heading: "Introducing Cloud Ticket System: Enhanced Support Integration for Cloud MLM Software",
    paragraphs: [
      "Cloud Ticket System is an MLM Software module that can be integrated with Cloud MLM Software, so users can get timely responses and support. This module provides options to create issue tickets for cloud MLM users; an admin will be notified about this issue and he can assign this particular issue to the department.",
    ],
    partnerCard: {
      badge: "Included",
      heading: "Features of Ticket System module",
      points: [
        "Separate Admin, User, and Employee sections",
        "Admin and user chatting system",
        "Auto assignment system",
        "Progress notification system",
        "Employee privilege settings",
        "Issue tracking system",
        "Mailing system",
      ],
    },
  },
  importanceSection: {
    badge: "Support",
    heading: "Why a Ticket System module in MLM software?",
    subheading: "Streamlined Ticket Management: Empowering Users and Admins for Efficient Issue Resolution",
    paragraphs: [
      "Both user and admin can see the progress of the issue and the user can create a ticket based on the error state. So the admin can work on every critical issue first. From the ticket creation stage, the user can add attachments, that is some screenshots of the issues. From the admin control panel, admin can see the tickets and his team can work on that. Admin can change issue status when the issue is resolved. If the issue is not resolved, the user can reopen the issue and set to OPEN.",
      "Every action on the issue progress will be notified to the admin. This module also provides a chat option for users and admin so they can chat based on the ticket. With this awesome module, Admin can create employees, and also he can set permission for each employee. An auto-assignment is a feature of the Cloud Ticket System: here the admin can set the auto-assignment to each employee then particular tickets based on the type will automatically assign to the employee, then he can work on that. Separate Employee login is available in Cloud Ticket System.",
    ],
    imageSrc: "/images/dashboard-deign.webp",
    imageAlt: "Cloud MLM Software Ticket System – support and issue resolution",
  },
  benefitsSection: {
    badge: "Benefits",
    heading: "Features of Ticket System module",
    description: "Cloud MLM Software's ticket system module is a great way to be in touch with users and resolve issues efficiently.",
    items: [
      {
        title: "Separate Admin, User, and Employee sections",
        description: "Dedicated areas for admins, end users, and employees with appropriate access and workflows.",
      },
      {
        title: "Admin and user chatting system",
        description: "Chat based on the ticket so users and admin can communicate in context for faster resolution.",
      },
      {
        title: "Auto assignment system",
        description: "Admin can set auto-assignment per employee; tickets are assigned automatically by type so the right person works on each issue.",
      },
      {
        title: "Progress notification system",
        description: "Every action on the issue progress is notified to the admin so nothing is missed.",
      },
      {
        title: "Employee privilege settings",
        description: "Admin can create employees and set permission for each employee for better control and security.",
      },
      {
        title: "Issue tracking system",
        description: "Both user and admin see progress; users can create tickets based on error state and add attachments such as screenshots.",
      },
      {
        title: "Mailing system",
        description: "Integrated mailing so notifications and updates can be sent as part of the support workflow.",
      },
    ],
  },
  whyChooseSection: {
    imageSrc: TYPES_IMAGE,
    imageAlt: "Ticket System module for MLM",
    badge: "Types",
    heading: "Key capabilities of the Ticket System",
    description:
      "Streamlined support with separate sections, auto-assignment, and built-in chat. Resolve issues faster and keep users and admins in sync.",
    items: [
      {
        number: "01",
        title: "Separate Admin, User, and Employee sections",
        description:
          "Dedicated Admin, User, and Employee sections with separate login. Admins manage tickets and employees; users create and track tickets; employees work on assigned issues.",
      },
      {
        number: "02",
        title: "Auto assignment",
        description:
          "Admin sets auto-assignment per employee. Tickets are assigned automatically by type to the right employee so they can work on them without manual routing.",
      },
      {
        number: "03",
        title: "Chat and notifications",
        description:
          "Admin and user chat based on the ticket for context. Progress notifications keep everyone informed. When resolved, admin updates status; if not, user can reopen and set to OPEN.",
      },
    ],
  },
  features: [
    {
      icon: Ticket,
      title: "Ticket management",
      description:
        "Create, assign, and track support tickets. Users can add attachments (e.g. screenshots); admins see tickets and change status when resolved or reopen when needed.",
    },
    {
      icon: UserCircleGear,
      title: "Auto assignment & employees",
      description:
        "Auto-assignment by type to employees. Admin can create employees and set permission for each. Separate employee login is available in Cloud Ticket System.",
    },
  ],
  faq: {
    badge: "FAQ",
    heading: "Frequently asked questions",
    description: "Common questions about the Ticket System module.",
    items: [
      {
        question: "How do we get started?",
        answer:
          "We begin with a discovery call and configure the Ticket System module for your plan. We set up Admin, User, and Employee sections, auto-assignment, and notifications so you can go live with confidence.",
      },
      {
        question: "Is it included in our plan?",
        answer:
          "Module availability depends on your plan; we can add or upgrade modules. The Ticket System integrates with Cloud MLM Software so users get timely responses and support.",
      },
    ],
  },
  cta: {
    heading: "Purchase AI-Powered Cloud MLM Software Today!",
    description:
      "Achieve MLM success with smart AI-driven tools! Automate, manage, and grow your network effortlessly. Buy now and scale your business!",
    buttonText: "Buy Now",
    secondaryCta: "Try Demo",
    trustIndicators: ["Quick implementation", "Expert support", "Efficient issue resolution"],
  },
};
