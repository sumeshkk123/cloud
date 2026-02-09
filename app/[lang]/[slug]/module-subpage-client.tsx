"use client";

import { notFound } from "next/navigation";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { PricingSubPageLayout } from "@/components/frontend/pricing/sub-page";
import { getModulesSubpageContent } from "@/lib/modules-subpage-content";

const DEMO_URL = "https://demo.cloudmlmsoftware.com";

type ModuleSubpageClientProps = {
  slug: string;
  locale: Locale;
  serverTitle?: string | null;
  serverBadge?: string | null;
  serverDescription?: string | null;
};

export function ModuleSubpageClient({
  slug,
  locale,
  serverTitle,
  serverBadge,
  serverDescription,
}: ModuleSubpageClientProps) {
  const contactHref = buildLocalizedPath("/contact", locale);
  const content = getModulesSubpageContent(slug, locale);
  if (!content) notFound();

  const mergedContent = {
    ...content,
    hero: {
      ...content.hero,
      title: serverTitle ?? content.hero.title,
      badge: serverBadge ?? content.hero.badge,
      description: serverDescription ?? content.hero.description,
    },
  };

  return (
    <PricingSubPageLayout
      content={mergedContent}
      contactHref={contactHref}
      secondaryHref={DEMO_URL}
    />
  );
}
