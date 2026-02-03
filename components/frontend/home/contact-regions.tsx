"use client";

import { useState, useEffect } from "react";
import type { Locale } from "@/i18n-config";
import { SectionTitle } from "@/components/ui/section-title";
import { ReadMoreButton } from "@/components/ui/read-more-button";
import { ContactRegionCard } from "@/components/frontend/common/contact-region-card";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { SupportedLocale } from "@/config/site";

export type ContactRegion = {
  region: string;
  subheading: string;
  coverage: string;
  address: string[];
  phones: string[];
  email: string;
  whatsapp?: string;
  flag?: string; // Flag emoji
  specialties: string[];
  accent: string;
};

interface ContactAddress {
  id: string;
  country: string;
  place?: string | null;
  address: string;
  phones: string[];
  email: string;
  whatsapp?: string | null;
  flag?: string | null; // Flag emoji
  locale: string;
}

type ContactRegionsSectionProps = {
  data?: {
    badgeLabel?: string;
    heading?: string;
    description?: string;
    primaryCta?: { href: string; label: string };
    secondaryCta?: { href: string; label: string };
    noAddressesMessage?: string;
  };
  locale: Locale;
};

// Removed getFlagCodeFromCountry - flags should only come from database

export function ContactRegionsSection({
  data,
  locale
}: ContactRegionsSectionProps) {
  const [addresses, setAddresses] = useState<ContactAddress[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Always fetch addresses from backend
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/contact-addresses?locale=${locale}`, { cache: 'no-store' });
        if (response.ok) {
          const apiData = await response.json();
          setAddresses(Array.isArray(apiData) ? apiData : []);
        } else {
          setAddresses([]);
        }
      } catch (error) {
        console.error('[ContactRegionsSection] Error fetching contact addresses:', error);
        setAddresses([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAddresses();
  }, [locale]);

  // Get translations from data prop with fallbacks
  const badge = data?.badgeLabel ?? "Global field offices";
  const title = data?.heading ?? "Wherever you operate, our regional teams are close by";
  const summary = data?.description ?? "Cloud MLM Software supports customers in more than 45 countries. Choose the region closest to you and we'll connect you with an implementation partner or in-house expert.";
  const contactHref = data?.primaryCta?.href ?? buildLocalizedPath("/contact", locale as SupportedLocale);
  const contactLabel = data?.primaryCta?.label ?? "Contact our team";
  const demoHref = data?.secondaryCta?.href ?? "#";
  const demoLabel = data?.secondaryCta?.label ?? "Book an MLM software demo";
  const noAddressesMessage = data?.noAddressesMessage ?? "No contact addresses available.";

  return (
    <Section variant="primary" padding="lg">
      {/* Background layers */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background via-muted/30 to-background dark:via-muted/10" aria-hidden />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-gradient-to-b from-primary/5 via-transparent to-transparent blur-3xl" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[500px] bg-gradient-to-t from-primary/5 via-transparent to-transparent blur-3xl" aria-hidden />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="container space-y-14">
        <SectionTitle
          badge={badge}
          heading={title}
          description={summary}
          centered
          maxWidth="3xl"
        />
        {isLoading ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse rounded-3xl border border-border/40 bg-card p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-14 w-14 bg-muted rounded-2xl" />
                  <div className="flex-1 space-y-2">
                    <div className="h-5 bg-muted rounded w-2/3" />
                    <div className="h-4 bg-muted rounded w-1/2" />
                  </div>
                </div>
                <div className="h-px bg-muted mb-6" />
                <div className="flex gap-4 mb-4">
                  <div className="h-10 w-10 bg-muted rounded-xl" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-muted rounded w-full" />
                    <div className="h-4 bg-muted rounded w-5/6" />
                  </div>
                </div>
                <div className="space-y-3 mt-auto pt-2">
                  <div className="h-12 bg-muted rounded-xl" />
                  <div className="h-12 bg-muted rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        ) : addresses.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {addresses.slice(0, 3).map((address) => {
              const addressLines = address.address.split('\n').filter(line => line.trim());
              return (
                <ContactRegionCard
                  key={address.id}
                  region={address.country}
                  subheading={address.place || 'Regional Office'}
                  address={addressLines.length > 0 ? addressLines : [address.address]}
                  phones={address.phones}
                  email={address.email}
                  whatsapp={address.whatsapp || undefined}
                  flag={address.flag || undefined}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <Typography variant="p" textColor="muted">
              {noAddressesMessage}
            </Typography>
          </div>
        )}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <ReadMoreButton
            href={contactHref}
            variant="highlighted"
            className="rounded-full bg-primary px-6 py-3 text-primary-foreground shadow transition hover:bg-primary/90 [&_.read-more-icon]:bg-primary-foreground/20 [&_.read-more-icon]:text-primary-foreground"
          >
            {contactLabel}
          </ReadMoreButton>
          <ReadMoreButton
            href={demoHref}
            variant="default"
            className="rounded-full border border-primary/40 px-6 py-3 transition hover:border-primary"
          >
            {demoLabel}
          </ReadMoreButton>
        </div>
      </div>
    </Section>
  );
}

