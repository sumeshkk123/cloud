"use client";

import * as React from "react";
import { useState } from "react";
import { PlanHero } from "./plan-hero";
import { PlanCta } from "./plan-cta";
import { PlanFaq } from "./plan-faq";
import { RequestDemoModal } from "@/components/frontend/common/request-demo-modal";
import { useToast } from "@/components/ui/toast";
import type { PlanFeatureContent } from "./types";

const DEMO_HREF = "https://demo.cloudmlmsoftware.com";

/** Slug to enquiry text: "mlm-binary-plan" -> "mlm binary plan" */
function planSlugToEnquiryLabel(slug: string): string {
  return slug.replace(/-/g, " ");
}

export interface PlanSubpageLayoutProps {
  content: PlanFeatureContent;
  contactHref: string;
  demoHref?: string;
  /** Back to main plans page (e.g. /mlm-plans) */
  plansHref: string;
  serverTitle?: string | null;
  serverBadge?: string | null;
  serverDescription?: string | null;
  /** When set, primary CTA opens Request a demo modal; enquiry sent as "plan - {slug as words}". */
  planSlug?: string | null;
  locale?: string;
  /** Optional right column in hero (e.g. plan simulator) */
  heroRightSlot?: React.ReactNode;
  /** Optional href for hero secondary CTA (e.g. calculator); defaults to demoHref */
  heroSecondaryHref?: string;
  /** When set, secondary CTA runs this (e.g. open flow simulator modal) instead of linking */
  heroSecondaryCtaClick?: () => void;
  /** Optional middle content between hero and FAQ/CTA (e.g. plan-specific sections) */
  children?: React.ReactNode;
}

/**
 * Reusable layout for plan inner pages (e.g. /mlm-plan/mlm-binary-plan).
 * Main plans page is /mlm-plans; inner pages live under /mlm-plan/<slug>.
 */
export function PlanSubpageLayout({
  content,
  contactHref,
  demoHref = DEMO_HREF,
  plansHref,
  serverTitle,
  serverBadge,
  serverDescription,
  planSlug,
  locale = "en",
  heroRightSlot,
  heroSecondaryHref,
  heroSecondaryCtaClick,
  children,
}: PlanSubpageLayoutProps) {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const { showToast, ToastComponent } = useToast();
  const hero = {
    ...content.hero,
    title:
      serverTitle != null && String(serverTitle).trim() !== ""
        ? serverTitle
        : content.hero.title,
    badge:
      serverBadge != null && String(serverBadge).trim() !== ""
        ? serverBadge
        : content.hero.badge,
    description:
      serverDescription != null && String(serverDescription).trim() !== ""
        ? serverDescription
        : content.hero.description,
  };

  const openDemoModal = () => setDemoModalOpen(true);
  const closeDemoModal = () => setDemoModalOpen(false);

  const heroModalSource = planSlug ? `plan-${planSlug}` : "hero-section";
  const heroModalNotes = planSlug
    ? `plan - ${planSlugToEnquiryLabel(planSlug)}`
    : "hero section";

  return (
    <div className="min-h-screen">
      {ToastComponent}
      <PlanHero
        hero={hero}
        contactHref={contactHref}
        demoHref={demoHref}
        title={hero.title}
        badge={hero.badge}
        description={hero.description}
        onPrimaryCtaClick={openDemoModal}
        rightSlot={heroRightSlot}
        secondaryHref={heroSecondaryHref}
        onSecondaryCtaClick={heroSecondaryCtaClick}
      />
      <RequestDemoModal
        isOpen={demoModalOpen}
        onClose={closeDemoModal}
        heading="Request a Demo"
        subheading={`From: ${hero.title}`}
        source={heroModalSource}
        notes={heroModalNotes}
        sourcePage={planSlug ? `mlm-plan-${planSlug}` : undefined}
        locale={locale}
        onSuccess={(message) => showToast(message, "success")}
        onError={(message) => showToast(message, "error")}
      />
      {children}
      {content.faq?.items?.length ? <PlanFaq faq={content.faq} /> : null}
      <PlanCta
        cta={content.cta}
        contactHref={contactHref}
        demoHref={demoHref}
        openDemoModalOnPrimary
        planSlug={planSlug ?? undefined}
        locale={locale}
      />
    </div>
  );
}
