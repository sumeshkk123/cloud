"use client";

import { ModuleHero } from "./module-hero";
import { ModuleIntro } from "./module-intro";
import { ModuleImportanceSection } from "./module-importance-section";
import { ModuleBenefitsSection } from "./module-benefits-section";
import { ModuleWhyChooseSection } from "./module-why-choose-section";
import { ModuleFaq } from "./module-faq";
import { ModuleCta } from "./module-cta";
import type { ModuleFeatureContent } from "./types";

const DEMO_HREF = "https://demo.cloudmlmsoftware.com";

export interface ModuleFeatureLayoutProps {
  content: ModuleFeatureContent;
  contactHref: string;
  demoHref?: string;
  serverTitle?: string | null;
  serverBadge?: string | null;
  serverDescription?: string | null;
}

export function ModuleFeatureLayout({
  content,
  contactHref,
  demoHref = DEMO_HREF,
  serverTitle,
  serverBadge,
  serverDescription,
}: ModuleFeatureLayoutProps) {
  const hero = {
    ...content.hero,
    title: serverTitle ?? content.hero.title,
    badge: serverBadge ?? content.hero.badge,
    description: serverDescription ?? content.hero.description,
  };

  return (
    <div className="min-h-screen">
      <ModuleHero
        hero={content.hero}
        contactHref={contactHref}
        demoHref={demoHref}
        title={hero.title}
        badge={hero.badge}
        description={hero.description}
      />
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
      <ModuleCta cta={content.cta} contactHref={contactHref} demoHref={demoHref} />
    </div>
  );
}
