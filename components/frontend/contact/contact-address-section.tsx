'use client';

import { useState, useEffect } from 'react';
import type { Locale } from "@/i18n-config";
import { ContactRegionCard, type FlagCode } from "@/components/frontend/common/contact-region-card";
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
  locale: string;
}

interface ContactAddressSectionProps {
  locale: Locale;
}

// Map country names to FlagCode
function getFlagCodeFromCountry(country: string): FlagCode {
  const normalized = country.toLowerCase();
  if (normalized.includes('india') || normalized.includes('indian')) return 'in';
  if (normalized.includes('uae') || normalized.includes('emirates') || normalized.includes('dubai')) return 'ae';
  if (normalized.includes('usa') || normalized.includes('united states') || normalized.includes('america')) return 'na';
  if (normalized.includes('europe') || normalized.includes('eu') || normalized.includes('uk') || normalized.includes('germany') || normalized.includes('france')) return 'eu';
  if (normalized.includes('asia') || normalized.includes('singapore') || normalized.includes('malaysia') || normalized.includes('thailand')) return 'apac';
  return 'in'; // Default
}

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
            <div key={i} className="h-64 animate-pulse rounded-3xl border border-border/40 bg-card/95" />
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
                flag={getFlagCodeFromCountry(address.country)}
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
