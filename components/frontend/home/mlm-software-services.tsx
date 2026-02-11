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
import { getCanonicalServiceSlug } from "@/lib/services-subpage-slugs";
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
      const benefits = (service.keyBenefits && Array.isArray(service.keyBenefits) && service.keyBenefits.length > 0)
        ? service.keyBenefits
        : [];

      const slug = getCanonicalServiceSlug(generateSlug(service.title));
      const href =
        slug === "bitcoin-cryptocurrency-mlm-software"
          ? buildLocalizedPath("/bitcoin-cryptocurrency-mlm-software", locale as SupportedLocale)
          : buildLocalizedPath(`/services/${slug}`, locale as SupportedLocale);
      const IconComponent = resolveIcon(service.icon || null, Code);
      const summary = service.description.split('.')[0] || service.description.substring(0, 100);

      return {
        id: service.id,
        title: service.title,
        summary: summary,
        headline: service.title,
        description: service.description,
        icon: IconComponent,
        benefits: benefits,
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
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-border/50 pb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-10 w-24 bg-muted animate-pulse rounded-full" />
            ))}
          </div>
          <div className="rounded-2xl border border-border/50 bg-card p-8 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="space-y-6">
                <div className="h-8 bg-muted animate-pulse rounded w-3/4" />
                <div className="space-y-2">
                  <div className="h-4 bg-muted animate-pulse rounded w-full" />
                  <div className="h-4 bg-muted animate-pulse rounded w-5/6" />
                  <div className="h-4 bg-muted animate-pulse rounded w-4/5" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-muted animate-pulse rounded w-32" />
                  <div className="space-y-2">
                    <div className="h-4 bg-muted animate-pulse rounded w-full" />
                    <div className="h-4 bg-muted animate-pulse rounded w-5/6" />
                    <div className="h-4 bg-muted animate-pulse rounded w-4/5" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-48 bg-muted animate-pulse rounded-xl" />
                <div className="space-y-2">
                  <div className="h-4 bg-muted animate-pulse rounded w-32" />
                  <div className="h-4 bg-muted animate-pulse rounded w-full" />
                  <div className="h-4 bg-muted animate-pulse rounded w-5/6" />
                </div>
              </div>
            </div>
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
            <div className="space-y-4">
              {activeCategory.image && (
                <div className="relative w-full overflow-hidden rounded-xl border border-border/50 bg-muted/30 shadow-sm sm:h-80 md:h-96">
                  <SmartImage
                    key={`service-image-${activeCategory.id}-${activeTab}`}
                    src={activeCategory.image}
                    alt={`${activeCategory.title} - MLM Software Service for Network Marketing Business`}
                    width={800}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
            </div>

            {/* right Column */}
            <div className="space-y-6">
              <div>
                <Typography as="h4" variant="h4" className="font-bold">
                  {activeCategory.headline}
                </Typography>
              </div>

              <Typography variant="p" className="text-base leading-7 text-muted-foreground line-clamp-4">
                {activeCategory.description}
              </Typography>

              {/* Benefits List */}
              <div className="space-y-3">
                <Typography variant="small" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {common.labels.keyBenefits}
                </Typography>
                <BulletList items={activeCategory.benefits.slice(0, 3)} className="text-sm text-muted-foreground" />
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
