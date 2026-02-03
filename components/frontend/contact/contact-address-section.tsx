'use client';

import { useState, useEffect } from 'react';
import type { Locale } from "@/i18n-config";
import { ContactRegionCard } from "@/components/frontend/common/contact-region-card";
import { Typography } from "@/components/ui/typography";
import { getContactContent } from "@/lib/contact";
import { Section } from '@/components/ui/section';

interface ContactAddress {
  id: string;
  country: string;
  place?: string | null;
  address: string;
  phones: string[];
  email: string;
  whatsapp?: string | null;
  flag?: string | null;
  locale: string;
}

interface ContactAddressSectionProps {
  locale: Locale;
}

// Removed getFlagCodeFromCountry - flags should only come from database

export function ContactAddressSection({ locale }: ContactAddressSectionProps) {
  const [addresses, setAddresses] = useState<ContactAddress[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const content = getContactContent(locale);
  const t = content.channelsSection;

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/contact-addresses?locale=${locale}`, { cache: 'no-store' });
        if (response.ok) {
          const data = await response.json();
          setAddresses(Array.isArray(data) ? data : []);
        } else {
          setAddresses([]);
        }
      } catch (error) {
        console.error('[ContactAddressSection] Error fetching contact addresses:', error);
        setAddresses([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAddresses();
  }, [locale]);

  return (
    <Section variant="primary" padding="lg">
      <div className="max-w-3xl space-y-4">
        <Typography as="h2" variant="h2" className="font-semibold tracking-tight">
          {t.heading}
        </Typography>
        <Typography variant="p" textColor="muted" className="text-sm">
          {t.description}
        </Typography>
      </div>

      {isLoading ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {addresses.map((address) => {
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
            {t.noAddressesMessage}
          </Typography>
        </div>
      )}
    </Section>
  );
}
