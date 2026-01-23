'use client';

import { useState } from "react";
import Image from "next/image";
import type { HomepageContent } from "@/types/homepage";
import type { ComponentType } from "react";
import * as RemixIcon from "@remixicon/react";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { ReadMoreButton } from "@/components/ui/read-more-button";
import { InfoCtaBox } from "@/components/ui/info-cta-box";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";

type RemixIconType = ComponentType<{ className?: string }>;

const MODULE_CATEGORIES: Array<{
  title: string;
  summary: string;
  headline: string;
  description: string;
  icon: RemixIconType;
  highlights: string[];
  metricLabel: string;
  metricValue: string;
}> = [
    {
      title: "Finance & payouts",
      summary: "Automate compensation from ledger to payout.",
      headline: "Treasury automation built for global compensation",
      description:
        "Model comp plans, manage FX, and automate treasury approvals with audit-ready exports for finance, tax, and ERP teams.",
      icon: RemixIcon.RiMoneyDollarCircleFill,
      highlights: ["Multi currency", "E-wallet", "Commission intelligence", "Tax withholding"],
      metricLabel: "Commission volume automated",
      metricValue: "$1.4B+/mo"
    },
    {
      title: "Distributor success",
      summary: "Keep the field informed and inspired.",
      headline: "Enterprise-grade journeys for every distributor rank",
      description:
        "Blend ticketing, AI nudges, and enablement content while leadership tracks adoption with granular analytics.",
      icon: RemixIcon.RiTeamFill,
      highlights: ["Ticket Desk", "Autoresponder", "Learning studio", "Recognition hub"],
      metricLabel: "Engagement lift",
      metricValue: "2.4x"
    },
    {
      title: "Growth & commerce",
      summary: "Launch promotions and storefronts fast.",
      headline: "Campaigns, kits, and commerce orchestrated in days",
      description:
        "Roll out vouchers, bundles, and regional storefronts with inventory, taxation, and analytics aligned out of the box.",
      icon: RemixIcon.RiStoreFill,
      highlights: ["E-voucher", "Smart catalog", "Inventory orchestration", "Promo builder"],
      metricLabel: "Time to launch",
      metricValue: "48 hrs"
    },
    {
      title: "Trust & compliance",
      summary: "Governance your regulators will love.",
      headline: "Compliance automation from policy to proof",
      description:
        "Automate policy enforcement, data retention, and regulator-friendly exports with immutable, recoverable records.",
      icon: RemixIcon.RiShieldCheckFill,
      highlights: ["Backup manager", "Audit console", "Policy engine", "PII redaction"],
      metricLabel: "Policy violations prevented",
      metricValue: "38%"
    }
  ];

export function IntegrationsSection({ data }: { data: HomepageContent["integrations"] }) {
  const partners = data?.partners ?? [];

  // Add more dummy items to make scrolling more visible
  const allPartners = [
    ...partners,
    "Mailchimp",
    "SendGrid",
    "Intercom",
    "Slack",
    "Microsoft Teams",
    "Google Analytics",
    "Mixpanel",
    "Segment",
    "Webhook.site",
    "Plaid",
    "Square",
    "Authorize.net",
    "WooCommerce",
    "Magento",
    "BigCommerce",
    "Facebook Ads",
    "Google Ads",
    "LinkedIn Ads",
    "TikTok Pixel",
    "Amplitude",
    "Hotjar",
    "FullStory",
    "Datadog",
    "New Relic",
    "Sentry",
    "LogRocket",
    "Postmark",
    "Sendinblue",
    "ConvertKit"
  ];

  // Duplicate items for seamless infinite scroll
  const duplicatedPartners = [...allPartners, ...allPartners];

  return (
    <Section variant="gradient" padding="xl" containerClassName="">
      <SectionTitle
        badge={data?.badgeLabel ?? "Connected ecosystem"}
        heading={data?.heading ?? "Plug Cloud MLM into your favourite tools"}
        description={data?.description ?? "Sync finance, marketing, and support workflows with battle-tested integrations that keep your organisation aligned."}
        maxWidth="5xl"
      />

      {/* First row: Left to Right */}
      <div className="relative overflow-hidden mt-10">
        <div className="flex animate-scroll-left gap-3">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="inline-flex  text-sm shrink-0 items-center gap-2 rounded-full border border-border/60 bg-primary/5 px-5 py-2 text-foreground shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-primary/60" aria-hidden />
              {partner}
            </div>
          ))}
        </div>
      </div>

      {/* Second row: Right to Left */}
      <div className="relative overflow-hidden mt-5">
        <div className="flex animate-scroll-right gap-3">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner}-reverse-${index}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border/60 bg-primary/5 px-5 py-2 text-sm text-foreground shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-primary/60" aria-hidden />
              {partner}
            </div>
          ))}
        </div>
      </div>

      {/* Module Categories Section - Elegant Tab Design */}
      <div className="mt-20 space-y-8">
        <div className="space-y-4">
          <Typography as="h3" variant="h3" className="text-foreground">
            Seamless E-Commerce Integration for MLM Success
          </Typography>

          <Typography variant="p" className="text-base leading-7 text-muted-foreground">
            Enhance your MLM business with our robust integrations for <strong>Shopify</strong>, <strong>WooCommerce</strong>, and <strong>Cryptocurrency</strong>. Our software simplifies the management and growth of your online store, allowing you to sync sales data and optimize the user experience—all from a single platform. Whether you're building a large-scale e-commerce operation or launching a new venture, our seamless integration ensures your MLM network runs efficiently, supporting both sales growth and business expansion effortlessly.
          </Typography>
        </div>

        <IntegrationTabs categories={MODULE_CATEGORIES} />

        {/* InfoCtaBox */}
        <div className="mt-8">
          <InfoCtaBox
            icon={RemixIcon.RiStoreFill}
            text="Need custom integrations? Our team can build connectors for your specific tools and workflows."
            buttonText="Explore all integrations"
            buttonHref="/integrations"
          />
        </div>
      </div>
    </Section>
  );
}

function IntegrationTabs({ categories }: { categories: typeof MODULE_CATEGORIES }) {
  // Map categories to integration names
  const integrationNames = ["Shopify", "WooCommerce", "Cryptocurrency", "Business process optimization", "Leadership executive coaching"];

  // Use first category for main block, and create 5 columns
  const mainCategory = categories[0];
  const columnCategories = [
    categories[0],
    categories[1],
    categories[0],
    categories[1],
    categories[0]
  ];

  // State to track which column is expanded (-1 means first column is expanded by default)
  // Once expanded, it stays expanded until user hovers another item
  const [expandedIndex, setExpandedIndex] = useState<number | null>(-1);

  return (
    <>
      {/* Desktop Design - Vertical Expanding Columns */}
      <div className="hidden lg:flex flex-row bg-background">
        {/* All Columns in same container - First column (starts expanded) */}
        {[
          { category: mainCategory, index: -1, title: integrationNames[0] || mainCategory.headline }, // First column
          ...columnCategories.map((category, idx) => ({
            category,
            index: idx,
            title: integrationNames[idx + 1] || category.title
          }))
        ].map(({ category, index: colIndex, title }) => {
          const Icon = category.icon;
          const isExpanded = expandedIndex === colIndex;
          const isFirstColumn = colIndex === -1;

          return (
            <div
              key={colIndex}
              onMouseEnter={() => setExpandedIndex(colIndex)}
              className={cn(
                "group relative flex flex-col items-center justify-center overflow-hidden transition-all duration-500 ease-in-out border-r border-border/50 bg-background",
                isExpanded
                  ? "flex-[2] min-w-[420px]"
                  : "w-[175px] hover:bg-primary/5",
                "h-[437px] px-[45px] py-10"
              )}
            >
              {/* Service Icon */}
              <div className={cn(
                "flex items-center justify-center mb-6 relative z-10 transition-all duration-300",
                isExpanded && "mb-4"
              )}>
                <div className={cn(
                  "flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300",
                  isExpanded
                    ? "bg-primary text-primary-foreground  "
                    : "bg-primary/10 text-primary group-hover:scale-115"
                )}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>

              {/* Content Container */}
              <div className="relative w-full flex-1 overflow-hidden flex flex-col">
                {/* Collapsed State - Vertical Title (at bottom) */}
                <div className={cn(
                  "absolute inset-0 flex flex-col transition-all duration-500 ease-in-out",
                  isExpanded ? "opacity-0 invisible transition-opacity duration-200 ease-out" : "opacity-100 visible z-20"
                )}>
                  <div className="absolute bottom-[70px] left-[13px] h-[247px] w-full flex items-end justify-start">
                    <Typography
                      as="h4"
                      variant="h5"
                      style={{ writingMode: 'sideways-lr' }}
                      className="font-semibold text-foreground transition-colors duration-300 group-hover:text-primary/80"
                    >
                      {title}
                    </Typography>
                  </div>
                </div>

                {/* Expanded State - Horizontal Content */}
                <div className={cn(
                  "relative w-full max-w-[400px] text-left transition-all duration-500 ease-in-out top-0 left-0 flex-1 flex flex-col",
                  isExpanded
                    ? "translate-x-0 opacity-100 visible"
                    : "translate-x-[-100%] opacity-0 invisible"
                )}>
                  <div className="flex-1 flex flex-col justify-center min-h-0">
                    <Typography
                      as="h4"
                      variant="h5"
                      className="font-semibold text-foreground leading-tight break-words mb-4"
                    >
                      {isFirstColumn ? category.headline : title}
                    </Typography>
                    <Typography
                      variant="small"
                      textColor="muted"
                      className="leading-6 break-words"
                    >
                      {category.description}
                    </Typography>
                  </div>

                  {/* CTA Button - Inside expanded content, aligned at bottom */}
                  <div className="mt-4">
                    <ReadMoreButton
                      href="/mlm-software-modules/"
                      variant="default"
                    >
                      Learn more
                    </ReadMoreButton>
                  </div>
                </div>
              </div>

              {/* CTA Button - Collapsed state (hidden when expanded) */}
              <div className={cn(
                "absolute bottom-0 left-[15px] transition-all duration-500 ease-in-out",
                isExpanded
                  ? "opacity-0 invisible"
                  : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
              )}>
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={`Learn more about ${title}`}
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile/Tablet - Show all items in expanded mode */}
      <div className="grid grid-cols-1 gap-4 lg:hidden">
        {[
          { category: mainCategory, index: -1, title: integrationNames[0] || mainCategory.headline },
          ...columnCategories.map((category, idx) => ({
            category,
            index: idx,
            title: integrationNames[idx + 1] || category.title
          }))
        ].map(({ category, index: colIndex, title }) => {
          const Icon = category.icon;
          const isFirstColumn = colIndex === -1;

          return (
            <div
              key={colIndex}
              className="rounded-2xl border border-border/50 bg-background p-6"
            >
              <div className="flex flex-col space-y-4">
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title and Description */}
                <div className="space-y-3">
                  <Typography
                    as="h4"
                    variant="h5"
                    className="font-semibold text-foreground leading-tight break-words"
                  >
                    {isFirstColumn ? category.headline : title}
                  </Typography>
                  <Typography
                    variant="small"
                    textColor="muted"
                    className="leading-6 break-words"
                  >
                    {category.description}
                  </Typography>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <ReadMoreButton
                    href="/mlm-software-modules/"
                    variant="default"
                  >
                    Learn more
                  </ReadMoreButton>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}