'use client';

import { useState, useEffect } from 'react';
import type { Locale } from "@/i18n-config";
import { ContactRegionCard, type FlagCode } from "@/components/frontend/common/contact-region-card";
import { Typography } from "@/components/ui/typography";
import { Section } from '@/components/ui/section';
import { SectionTitle } from "@/components/ui/section-title";
import { FaqCard } from "@/components/frontend/common/faq-card";
import { getContactContent } from "@/lib/contact";
import { cn } from "@/lib/utils";

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

interface ContactTabsSectionProps {
  locale: Locale;
}

type TabType = 'address' | 'faq';

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

export function ContactTabsSection({ locale }: ContactTabsSectionProps) {
  const [activeTab, setActiveTab] = useState<TabType>('address');
  const [addresses, setAddresses] = useState<ContactAddress[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const content = getContactContent(locale);
  const t = content.channelsSection;
  const faqT = content.faqSection;
  const tabsT = content.tabsSection;

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Fetch addresses
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
        console.error('[ContactTabsSection] Error fetching contact addresses:', error);
        setAddresses([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAddresses();
  }, [locale]);

  const tabs = [
    { id: 'address' as TabType, label: tabsT.addressTab },
    { id: 'faq' as TabType, label: tabsT.faqTab },
  ];

  return (
    <Section variant="primary" padding="lg">
      <div className="space-y-8">
        {/* Tabs */}
        <div className="border-b border-border/60">
          <nav className="flex space-x-8" role="tablist">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`tab-panel-${tab.id}`}
                  className={cn(
                    "py-4 px-1 border-b-2 font-medium text-sm transition-colors",
                    isActive
                      ? "border-primary text-primary-600 dark:text-primary-400"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {/* Address Tab */}
          {activeTab === 'address' && (
            <div id="tab-panel-address" role="tabpanel" aria-labelledby="tab-address">
              <div className="max-w-3xl space-y-4 mb-8">
                <Typography as="h2" variant="h2" className="font-semibold tracking-tight">
                  {t.heading}
                </Typography>
                <Typography variant="p" textColor="muted" className="text-sm">
                  {t.description}
                </Typography>
              </div>

              {isLoading ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-64 animate-pulse rounded-3xl border border-border/40 bg-card/95" />
                  ))}
                </div>
              ) : addresses.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                    {tabsT.noAddressesMessage}
                  </Typography>
                </div>
              )}
            </div>
          )}

          {/* FAQ Tab */}
          {activeTab === 'faq' && (
            <div id="tab-panel-faq" role="tabpanel" aria-labelledby="tab-faq">
              <div className="max-w-3xl space-y-4 mb-8">
                <SectionTitle
                  badge={faqT.badge || "FAQ"}
                  heading={faqT.heading}
                  description={faqT.description}
                  maxWidth="full"
                />
              </div>
              <div className="space-y-6 max-w-5xl mx-auto">
                <div className="rounded-2xl border border-border/50 bg-card/60 p-8 shadow-sm">
                  <div className="space-y-3">
                    {faqT.faqs.map((faq, faqIndex) => {
                      const isOpen = openFaqIndex === faqIndex;
                      return (
                        <FaqCard
                          key={faqIndex}
                          question={faq.question}
                          answer={faq.answer}
                          isOpen={isOpen}
                          onToggle={() => handleFaqToggle(faqIndex)}
                        />
                      );
                    })}
                    {faqT.faqs.length === 0 && (
                      <div className="text-center py-8 text-muted-foreground">
                        <Typography variant="p" textColor="muted">
                          {tabsT.noFaqsMessage}
                        </Typography>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
