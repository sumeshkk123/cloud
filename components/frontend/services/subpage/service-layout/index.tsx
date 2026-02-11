"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ServiceHero } from "./service-hero";
import { ServiceIntro } from "./service-intro";
import { ServiceImportanceSection } from "./service-importance-section";
import { ServiceBenefitsSection } from "./service-benefits-section";
import { ServiceWhyChooseSection } from "./service-why-choose-section";
import { ServiceExtraListSection } from "./service-extra-list-section";
import { ServiceFaq } from "./service-faq";
import { ServiceCta } from "./service-cta";
import { RequestDemoModal } from "@/components/frontend/common/request-demo-modal";
import { useToast } from "@/components/ui/toast";
import type { ServiceFeatureContent } from "./types";

const DEMO_HREF = "https://demo.cloudmlmsoftware.com";

/** Slug to enquiry text: "mlm-software-development" -> "mlm software development" */
function serviceSlugToEnquiryLabel(slug: string): string {
  return slug.replace(/-/g, " ");
}

export interface ServiceSubpageLayoutProps {
  content: ServiceFeatureContent;
  contactHref: string;
  demoHref?: string;
  serverTitle?: string | null;
  serverBadge?: string | null;
  serverDescription?: string | null;
  /** Image from backend (admin services) – used in importance section when present. */
  serverImageUrl?: string | null;
  /** Key features from backend (services.keyBenefits) – used in intro partner card when present. */
  serverKeyFeatures?: string[] | null;
  /** When set, primary CTA opens Request a demo modal; enquiry sent as "service - {slug as words}" (e.g. "service - mlm software development"). */
  serviceSlug?: string | null;
  locale?: string;
}

/**
 * Reusable layout for service inner pages (e.g. /services/bitcoin-cryptocurrency-mlm-software).
 * Uses service-specific components only; no module layout imports.
 */
export function ServiceSubpageLayout({
  content,
  contactHref,
  demoHref = DEMO_HREF,
  serverTitle,
  serverBadge,
  serverDescription,
  serverImageUrl,
  serverKeyFeatures,
  serviceSlug,
  locale = "en",
}: ServiceSubpageLayoutProps) {
  const pathname = usePathname() ?? "";
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const { showToast, ToastComponent } = useToast();
  const hero = {
    ...content.hero,
    title: serverTitle ?? content.hero.title,
    badge: serverBadge ?? content.hero.badge,
    description: serverDescription ?? content.hero.description,
  };

  const openDemoModal = () => setDemoModalOpen(true);
  const closeDemoModal = () => setDemoModalOpen(false);

  const heroModalSource = serviceSlug ? `service-${serviceSlug}` : "hero-section";
  const heroModalNotes = serviceSlug
    ? `service - ${serviceSlugToEnquiryLabel(serviceSlug)}`
    : "hero section";

  return (
    <div className="min-h-screen">
      {ToastComponent}
      <ServiceHero
        hero={content.hero}
        contactHref={contactHref}
        demoHref={demoHref}
        title={hero.title}
        badge={hero.badge}
        description={hero.description}
        onPrimaryCtaClick={openDemoModal}
      />
      <RequestDemoModal
        isOpen={demoModalOpen}
        onClose={closeDemoModal}
        heading="Request a Demo"
        subheading={`From: ${hero.title}`}
        source={heroModalSource}
        notes={heroModalNotes}
        sourcePage={pathname || undefined}
        locale={locale}
        onSuccess={(message) => showToast(message, "success")}
        onError={(message) => showToast(message, "error")}
      />
      <ServiceIntro
        features={content.features}
        intro={content.intro}
        serverKeyFeatures={serverKeyFeatures}
      />
      {content.importanceSection && (
        <ServiceImportanceSection
          content={content.importanceSection}
          backendImageUrl={serverImageUrl}
        />
      )}
      {content.benefitsSection && (
        <ServiceBenefitsSection content={content.benefitsSection} />
      )}
      {content.whyChooseSection && (
        <ServiceWhyChooseSection content={content.whyChooseSection} />
      )}
      {content.extraListSections?.map((section, index) => (
        <ServiceExtraListSection key={index} content={section} />
      ))}
      <ServiceFaq faq={content.faq} />
      <ServiceCta
        cta={content.cta}
        contactHref={contactHref}
        demoHref={demoHref}
        openDemoModalOnPrimary
        locale={locale}
      />
    </div>
  );
}
