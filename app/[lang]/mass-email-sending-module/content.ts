import { EnvelopeSimple, Globe } from "@phosphor-icons/react";
import type { ModuleFeatureContent } from "@/components/frontend/modules/subpage";

/** Image for Types section (why choose) – from cloudmlmsoftware.com/mass-email-sending-module/ */
const TYPES_IMAGE = "/images/Bulk-Email-Service.webp";

export const massEmailSendingModuleContent: ModuleFeatureContent = {
  hero: {
    badge: "Email",
    title: "MASS Email Sending Module",
    description:
      "Email communication plays a vital role in business success. With the Mass Email Sending Module, you can easily reach a large audience, send targeted promotions, and keep your network engaged. This feature allows businesses to streamline email campaigns, ensuring efficient delivery of newsletters, updates, and marketing content. By automating bulk emails, you can save time, reduce costs, and maximize engagement, making it an essential tool for modern business growth.",
    primaryCta: "Request a demo",
    secondaryCta: "View demo",
    metrics: [
      { label: "Campaigns sent", value: "2M+", detail: "Monthly emails across programmes." },
      { label: "Inbox placement", value: "98%", detail: "Deliverability best practices." },
      { label: "Segments", value: "Unlimited", detail: "By rank, region, and activity." },
    ],
  },
  intro: {
    badge: "Why this module",
    heading: "Effortless Bulk Email Communication for Your MLM Business",
    paragraphs: [
      "Effective communication is key to MLM success, and emails play a crucial role in keeping your network engaged. The Mass Email Sending Module in Cloud MLM Software allows administrators to schedule, customize, and automate emails with ease.",
      "Our cloud-powered email module is designed for speed, accuracy, and reliability, ensuring seamless delivery of promotional messages, updates, and notifications. Stay connected with your team and prospects effortlessly while maximizing the impact of your email campaigns.",
    ],
    partnerCard: {
      badge: "Included",
      heading: "Features of Cloud MLM's Mass Email Sending Module",
      points: [
        "Effective Customer Outreach – Send bulk emails to your marketing lists and turn leads into loyal customers.",
        "Global Accessibility – Connect with your team and customers from any device, anywhere in the world.",
        "You can easily add and remove participants in our email system. Our email module offers a 24/7 automated email service that consumes minimal memory while operating in the background.",
        "Seamless Social Media Integration – Enhance trust by inserting social network links directly into your emails.",
      ],
    },
  },
  importanceSection: {
    badge: "Email",
    heading: "Why a Mass Email Sending module in MLM software?",
    subheading: "Streamline campaigns and keep your network engaged",
    paragraphs: [
      "Email communication plays a vital role in business success. With the Mass Email Sending Module, you can easily reach a large audience, send targeted promotions, and keep your network engaged. This feature allows businesses to streamline email campaigns, ensuring efficient delivery of newsletters, updates, and marketing content.",
      "By automating bulk emails, you can save time, reduce costs, and maximize engagement. Our cloud-powered module is designed for speed, accuracy, and reliability, making it an essential tool for modern MLM business growth.",
    ],
    imageSrc: "/images/dashboard-deign.webp",
    imageAlt: "Cloud MLM Software Mass Email Sending – bulk campaigns and engagement",
  },
  benefitsSection: {
    badge: "Benefits",
    heading: "Key benefits of the Mass Email Sending module",
    description:
      "Reach a large audience, send targeted promotions, and keep your network engaged with streamlined email campaigns and automated delivery.",
    items: [
      {
        title: "Bulk campaigns",
        description: "Send bulk emails to your marketing lists; turn leads into loyal customers with targeted promotions and newsletters.",
      },
      {
        title: "Global accessibility",
        description: "Connect with your team and customers from any device, anywhere in the world.",
      },
      {
        title: "Schedule & automate",
        description: "Schedule, customize, and automate emails with ease. 24/7 automated service that consumes minimal memory in the background.",
      },
      {
        title: "Add and remove participants",
        description: "Easily add and remove participants in the email system; manage lists and segments from the admin panel.",
      },
      {
        title: "Social media integration",
        description: "Enhance trust by inserting social network links directly into your emails for seamless integration.",
      },
      {
        title: "Speed and reliability",
        description: "Cloud-powered delivery designed for speed, accuracy, and reliability; maximize the impact of your campaigns.",
      },
    ],
  },
  whyChooseSection: {
    imageSrc: TYPES_IMAGE,
    imageAlt: "Mass Email Sending module for MLM",
    badge: "Types",
    heading: "Key capabilities of the Mass Email Sending module",
    description:
      "Bulk email campaigns, global accessibility, 24/7 automated delivery, and social media integration. Streamline newsletters, updates, and marketing content for your MLM network.",
    items: [
      {
        number: "01",
        title: "Bulk outreach and campaigns",
        description:
          "Send bulk emails to your marketing lists; turn leads into loyal customers. Streamline delivery of newsletters, updates, and marketing content with efficient campaigns.",
      },
      {
        number: "02",
        title: "Schedule and automate",
        description:
          "Administrators can schedule, customize, and automate emails with ease. Cloud-powered module runs 24/7 with minimal memory; add and remove participants as needed.",
      },
      {
        number: "03",
        title: "Global and integrated",
        description:
          "Connect with your team and customers from any device, anywhere. Insert social network links into emails for seamless social media integration and trust.",
      },
    ],
  },
  features: [
    {
      icon: EnvelopeSimple,
      title: "Bulk campaigns",
      description:
        "Send targeted campaigns and sequences to your entire network or segments. Streamline newsletters, updates, and marketing content with efficient delivery.",
    },
    {
      icon: Globe,
      title: "Global accessibility",
      description:
        "Connect with your team and customers from any device, anywhere in the world. 24/7 automated email service designed for speed and reliability.",
    },
  ],
  faq: {
    badge: "FAQ",
    heading: "Frequently asked questions",
    description: "Common questions about the Mass Email Sending module.",
    items: [
      {
        question: "What sending limits apply?",
        answer:
          "Limits depend on your plan and domain reputation; we help you scale safely. Our cloud-powered module is designed for reliability and efficient delivery across your network.",
      },
      {
        question: "Can we segment by rank or region?",
        answer:
          "Yes. You can send to your entire network or target segments. Add and remove participants easily; the module supports targeted promotions and newsletters.",
      },
      {
        question: "Is the email service automated?",
        answer:
          "Yes. Our email module offers a 24/7 automated email service that consumes minimal memory while operating in the background. Administrators can schedule and automate emails with ease.",
      },
    ],
  },
  cta: {
    heading: "Purchase AI-Powered Cloud MLM Software Today!",
    description:
      "Achieve MLM success with smart AI-driven tools! Automate, manage, and grow your network effortlessly. Buy now and scale your business!",
    buttonText: "Buy Now",
    secondaryCta: "Try Demo",
    trustIndicators: ["Quick implementation", "Expert support", "24/7 automated email"],
  },
};
