'use client';

import { useState } from "react";
import Image from "next/image";
import type { HomepageContent } from "@/types/homepage";
import type { ComponentType } from "react";
import * as RemixIcon from "@remixicon/react";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { ReadMoreButton } from "@/components/ui/read-more-button";
import { cn } from "@/lib/utils";

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
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-900 py-24">
      <div className="container">
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
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border/60 bg-primary/5 px-5 py-2 text-sm font-semibold text-foreground shadow-sm"
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
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border/60 bg-primary/5 px-5 py-2 text-sm font-semibold text-foreground shadow-sm"
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
        </div>
      </div>
    </section >
  );
}

function IntegrationTabs({ categories }: { categories: typeof MODULE_CATEGORIES }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Map categories to integration names
  const integrationNames = ["Shopify", "WooCommerce", "Cryptocurrency"];

  // Use only first 3 categories for the tabs
  const displayCategories = categories.slice(0, 3);
  const activeCategory = displayCategories[activeIndex];

  return (
    <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
      {/* Left Column - Integration Tabs */}
      <div className="space-y-3">
        {displayCategories.map((category, index) => {
          const Icon = category.icon;
          const isActive = index === activeIndex;
          return (
            <button
              key={category.title}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "group w-full flex items-center gap-4 rounded-xl border px-5 py-4 text-left transition-all duration-300",
                isActive
                  ? "border-primary/60 bg-primary/10 "
                  : "border-border/50 bg-primary/5 hover:border-primary/50 hover:bg-primary/5"
              )}
            >
              <div
                className={cn(
                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "bg-muted text-muted-foreground"
                )}
              >
                <Icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <Typography as="h5" variant="h5" className={cn("font-semibold !text-lg", isActive && "")}>
                  {integrationNames[index]}
                </Typography>
                <Typography variant="small" className="mt-0.5 text-muted-foreground">
                  {category.summary}
                </Typography>
              </div>
            </button>
          );
        })}
      </div>

      {/* Right Column - Active Integration Details */}
      <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-card via-card to-primary/5 p-8">
        <div className="grid  grid-cols-1 lg:grid-cols-[1fr_2fr] gap-5 ">
          {/* Image */}
          <div className="overflow-hidden rounded-xl border border-border/50 bg-muted/30">
            <Image
              src={`https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop&q=80`}
              alt={activeCategory.headline}
              width={800}
              height={400}
              className="h-64 w-full object-cover"
            />
          </div>
          <div className="space-y-4">

            <Typography as="h4" variant="h4" className="mb-3 mt-0  !text-xl text-foreground">
              {activeCategory.headline}
            </Typography>
            <Typography variant="p" className="text-sm leading-7 text-muted-foreground ">
              {activeCategory.description}
            </Typography>


            {/* Highlights */}
            <div className="flex flex-wrap gap-2">
              {activeCategory.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium"
                >
                  {highlight}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <ReadMoreButton
                href="/mlm-software-modules/"
                variant="default"
              >
                Explore More
              </ReadMoreButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}