"use client";

import { useState } from "react";
import { ModuleHero } from "./module-hero";
import { ModuleIntro } from "./module-intro";
import { ModuleImportanceSection } from "./module-importance-section";
import { ModuleBenefitsSection } from "./module-benefits-section";
import { ModuleWhyChooseSection } from "./module-why-choose-section";
import { ModuleFaq } from "./module-faq";
import { ModuleCta } from "./module-cta";
import { RequestDemoModal } from "@/components/frontend/common/request-demo-modal";
import { useToast } from "@/components/ui/toast";
import type { ModuleFeatureContent } from "./types";

const DEMO_HREF = "https://demo.cloudmlmsoftware.com";

export interface ModuleFeatureLayoutProps {
  content: ModuleFeatureContent;
  contactHref: string;
  demoHref?: string;
  serverTitle?: string | null;
  serverBadge?: string | null;
  serverDescription?: string | null;
  /** When set, "Request a demo" opens a modal and submits to contact with this source (e.g. "compensation-module") */
  moduleSlug?: string | null;
  locale?: string;
}

export function ModuleFeatureLayout({
  content,
  contactHref,
  demoHref = DEMO_HREF,
  serverTitle,
  serverBadge,
  serverDescription,
  moduleSlug,
  locale = "en",
}: ModuleFeatureLayoutProps) {
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

  return (
    <div className="min-h-screen">
      {ToastComponent}
      <ModuleHero
        hero={content.hero}
        contactHref={contactHref}
        demoHref={demoHref}
        title={hero.title}
        badge={hero.badge}
        description={hero.description}
        onPrimaryCtaClick={moduleSlug ? openDemoModal : undefined}
      />
      {moduleSlug && (
        <RequestDemoModal
          isOpen={demoModalOpen}
          onClose={closeDemoModal}
          heading="Request a Demo"
          subheading={`From: ${hero.title}`}
          source="hero-section-module"
          notes={`Enquiry from module page: ${moduleSlug}`}
          locale={locale}
          onSuccess={(message) => showToast(message, "success")}
        />
      )}
      <ModuleIntro features={content.features} intro={content.intro} />
      {content.importanceSection && (
        <ModuleImportanceSection content={content.importanceSection} />
      )}
      {content.benefitsSection && (
        <ModuleBenefitsSection content={content.benefitsSection} />
      )}
      {content.whyChooseSection && (
        <ModuleWhyChooseSection content={content.whyChooseSection} />
      )}
      <ModuleFaq faq={content.faq} />
      <ModuleCta cta={content.cta} contactHref={contactHref} demoHref={demoHref} locale={locale} />
    </div>
  );
}
