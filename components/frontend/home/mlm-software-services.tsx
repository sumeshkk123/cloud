'use client';

import { useState, useEffect, useMemo } from "react";
import type { ComponentType } from "react";
import * as RemixIcon from "@remixicon/react";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { ReadMoreButton } from "@/components/ui/read-more-button";
import { InfoCtaBox } from "@/components/ui/info-cta-box";
import { BulletList } from "@/components/ui/bullet-list";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import type { Locale } from "@/i18n-config";
import { resolveIcon } from "@/components/frontend/home/utils";
import { Code } from "lucide-react";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { SupportedLocale } from "@/config/site";
import { getCommonContent } from "@/lib/common";
import type { ServiceRecord } from "@/lib/api/services";
import { SmartImage } from "@/components/ui/smart-image";
import { getHomepageContent } from "@/lib/homepage";

type RemixIconType = ComponentType<{ className?: string }>;

interface ServiceCategory {
  id?: string;
  title: string;
  summary: string;
  headline: string;
  description: string;
  icon: RemixIconType;
  benefits: string[];
  serviceHighlights: string[];
  href: string;
  image?: string | null;
}

interface MlmSoftwareServicesProps {
  locale?: Locale;
  services?: ServiceRecord[];
}

// Helper function to generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .normalize('NFD') // Decompose accented characters
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^\w\s-]/g, '') // Remove special characters except word chars, spaces, and hyphens
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

export function MlmSoftwareServices({ locale = 'en', services: servicesProp }: MlmSoftwareServicesProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [services, setServices] = useState<ServiceRecord[]>(servicesProp || []);
  const [isLoading, setIsLoading] = useState(!servicesProp);
  const [homepageContent, setHomepageContent] = useState<any>(null);
  const common = getCommonContent(locale);

  // Fetch homepage content for translations
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const content = await getHomepageContent(locale);
        setHomepageContent(content);
      } catch (error) {
        console.error('[MlmSoftwareServices] Error fetching homepage content:', error);
      }
    };
    fetchContent();
  }, [locale]);

  // Fetch services from API only if not provided as props (client-side fallback)
  useEffect(() => {
    if (servicesProp) {
      setIsLoading(false);
      return;
    }

    const fetchServices = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/services?locale=${locale}&showOnHomePage=true`, {
          cache: 'no-store',
        });
        if (response.ok) {
          const data = await response.json();
          // Limit to maximum 5 services for home page
          setServices(Array.isArray(data) ? data.slice(0, 5) : []);
        } else {
          setServices([]);
        }
      } catch (error) {
        console.error('[MlmSoftwareServices] Error fetching services:', error);
        setServices([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, [locale, servicesProp]);

  // Transform services data to component format
  const serviceCategories: ServiceCategory[] = useMemo(() => {
    if (!services || services.length === 0) return [];

    // Limit to maximum 5 services for home page
    const limitedServices = services.slice(0, 5);

    // Fetch English services to create a map for consistent slug generation
    return limitedServices.map((service) => {
      // Use keyBenefits for benefits
      const benefits = (service.keyBenefits && Array.isArray(service.keyBenefits) && service.keyBenefits.length > 0)
        ? service.keyBenefits
        : [];

      // Use serviceHighlights for service highlights (separate from keyBenefits)
      const serviceHighlights = (service.serviceHighlights && Array.isArray(service.serviceHighlights) && service.serviceHighlights.length > 0)
        ? service.serviceHighlights
        : [];

      // Generate slug from title
      const slug = generateSlug(service.title);
      const href = buildLocalizedPath(`/services/${slug}`, locale as SupportedLocale);

      // Resolve icon component
      const IconComponent = resolveIcon(service.icon || null, Code);

      // Use first sentence or first 100 chars as summary
      const summary = service.description.split('.')[0] || service.description.substring(0, 100);

      return {
        id: service.id,
        title: service.title,
        summary: summary,
        headline: service.title,
        description: service.description,
        icon: IconComponent,
        benefits: benefits,
        serviceHighlights: serviceHighlights,
        href: href,
        image: service.image,
      };
    });
  }, [services, locale]);

  const activeCategory = serviceCategories[activeTab] || null;

  // Get translations for section title
  const sectionTitle = homepageContent?.servicesSection || {
    badge: "MLM software services",
    heading: "Our Services",
    description: "Our innovative platform equips you with powerful tools designed to streamline operations, enhance distributor engagement, and drive growth. Experience unmatched efficiency and support as you navigate the complexities of network marketing."
  };

  if (isLoading) {
    return (
      <Section variant="primary" padding="lg" className="relative isolate overflow-hidden" containerClassName="relative">
        <div className="space-y-12">
          <SectionTitle
            badge={sectionTitle.badge}
            heading={sectionTitle.heading}
            description={sectionTitle.description}
            maxWidth="5xl"
          />
          <div className="text-center py-12">
            <Typography variant="p" textColor="muted">Loading services...</Typography>
          </div>
        </div>
      </Section>
    );
  }

  if (!activeCategory || serviceCategories.length === 0) {
    return null;
  }

  return (
    <Section variant="primary" padding="lg" className="relative isolate overflow-hidden" containerClassName="relative">
      <div className="space-y-12">
        <SectionTitle
          badge={sectionTitle.badge}
          heading={sectionTitle.heading}
          description={sectionTitle.description}
          maxWidth="5xl"
        />

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-border/50 pb-4">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id || index}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors bg-primary/5",
                  activeTab === index
                    ? "border-2 border-primary bg-primary/10 text-primary"
                    : "border-2 border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {Icon && <Icon className="h-4 w-4" />}
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Two Column Layout */}
        <div className="rounded-2xl border border-border/50 bg-card p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <Typography as="h4" variant="h4" className="font-bold">
                  {activeCategory.headline}
                </Typography>
              </div>

              <Typography variant="p" className="text-base leading-7 text-muted-foreground">
                {activeCategory.description}
              </Typography>

              {/* Benefits List */}
              <div className="space-y-3">
                <Typography variant="small" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {common.labels.keyBenefits}
                </Typography>
                <BulletList items={activeCategory.benefits.slice(0, 3)} className="text-sm text-muted-foreground" />
              </div>
            </div>

            {/* Right Column - Service Benefits Display */}
            <div className="space-y-4">
              {activeCategory.image && (
                <div className="relative h-48 w-full overflow-hidden rounded-xl border border-border/50 bg-muted/30 shadow-sm mb-6">
                  <SmartImage
                    key={`service-image-${activeCategory.id}-${activeTab}`}
                    src={activeCategory.image}
                    alt={activeCategory.title}
                    width={800}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              {activeCategory.serviceHighlights.length > 0 && (
                <div className="rounded-xl border border-primary/20 bg-primary/10 p-6">
                  <Typography as="h3" variant="h6" className="mb-4 font-semibold">
                    {common.labels.serviceHighlights}
                  </Typography>
                  <BulletList items={activeCategory.serviceHighlights.slice(0, 3)} className="text-sm" />
                </div>
              )}
              <div className="flex pt-5">
                <ReadMoreButton
                  href={activeCategory.href}
                  variant="default"
                >
                  {common.buttons.exploreMore}
                </ReadMoreButton>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <InfoCtaBox
          icon={RemixIcon.RiServiceLine}
          text="Discover all our MLM software services designed to streamline your operations and drive growth."
          buttonText="Explore all services"
          buttonHref="/services/"
        />
      </div>
    </Section>
  );
}
