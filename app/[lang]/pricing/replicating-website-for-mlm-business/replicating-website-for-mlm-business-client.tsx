"use client";

import { useState } from "react";
import type { PageTitleRecord } from "@/lib/api/page-titles";
import { PricingSubPageLayout } from "@/components/frontend/pricing/sub-page";
import type { PricingSubPageContent } from "@/components/frontend/pricing/sub-page";
import { replicatingWebsiteForMlmBusinessContent } from "./content";
import { HeroSectionPopup } from "@/components/frontend/common/hero-section-popup";
import { useToast } from "@/components/ui/toast";

type ReplicatingWebsiteForMlmBusinessClientProps = {
  pageTitleData: PageTitleRecord | null;
  contactHref: string;
  secondaryHref: string;
};

function mergeContentWithPageTitle(
  content: PricingSubPageContent,
  pageTitleData: PageTitleRecord | null
): PricingSubPageContent {
  if (!pageTitleData) return content;
  return {
    ...content,
    hero: {
      ...content.hero,
      title: pageTitleData.title,
      badge: pageTitleData.pagePill ?? content.hero.badge,
      description: pageTitleData.sectionSubtitle ?? content.hero.description,
    },
  };
}

export function ReplicatingWebsiteForMlmBusinessClient({
  pageTitleData,
  contactHref,
  secondaryHref,
}: ReplicatingWebsiteForMlmBusinessClientProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const { showToast, ToastComponent } = useToast();
  const content = mergeContentWithPageTitle(
    replicatingWebsiteForMlmBusinessContent,
    pageTitleData
  );

  return (
    <>
      {ToastComponent}
      <PricingSubPageLayout
        content={content}
        contactHref={contactHref}
        secondaryHref={secondaryHref}
        onPrimaryCtaClick={() => setModalOpen(true)}
      />
      <HeroSectionPopup
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        source="Pricing - Replicating Website"
        notes="Enquiry from Replicating Website pricing page (Book a pricing session)"
        onSuccess={(msg) => showToast(msg, "success")}
      />
    </>
  );
}
