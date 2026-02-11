"use client";

import { notFound } from "next/navigation";
import { buildLocalizedPath } from "@/lib/locale-links";
import { getServiceSubpageKeyFromSlug } from "@/lib/services-subpage-slugs";
import type { Locale } from "@/i18n-config";
import { ServiceSubpageLayout } from "@/components/frontend/services/subpage";
import { getServicesSubpageContent } from "@/lib/services-subpage-content";

const DEMO_URL = "https://demo.cloudmlmsoftware.com";

type ServiceSubpageClientProps = {
  slug: string;
  locale: Locale;
  serverTitle?: string | null;
  serverBadge?: string | null;
  serverDescription?: string | null;
  serverImageUrl?: string | null;
  serverKeyFeatures?: string[] | null;
  /** When set, hero primary CTA opens Request a demo modal with source "service-{slug}" for contact submissions. */
  serviceSlug?: string | null;
};

export function ServiceSubpageClient({
  slug,
  locale,
  serverTitle,
  serverBadge,
  serverDescription,
  serverImageUrl,
  serverKeyFeatures,
  serviceSlug,
}: ServiceSubpageClientProps) {
  const contactHref = buildLocalizedPath("/contact", locale);
  const content = getServicesSubpageContent(slug);
  if (!content) notFound();

  // Use canonical key for contact submission source so admin table shows e.g. "service-woocommerce-integration-with-cloud-mlm-software" even for localized URL slugs
  const canonicalKey = getServiceSubpageKeyFromSlug(slug) ?? slug;

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
    <ServiceSubpageLayout
      content={mergedContent}
      contactHref={contactHref}
      demoHref={DEMO_URL}
      serverTitle={serverTitle ?? undefined}
      serverBadge={serverBadge ?? undefined}
      serverDescription={serverDescription ?? undefined}
      serverImageUrl={serverImageUrl ?? undefined}
      serverKeyFeatures={serverKeyFeatures ?? undefined}
      serviceSlug={serviceSlug ?? canonicalKey}
      locale={locale}
    />
  );
}
