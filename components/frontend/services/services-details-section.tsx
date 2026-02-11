import Image from "next/image";
import { ReadMoreButton } from "@/components/ui/read-more-button";
import { Badge } from "@/components/ui/badge";
import { BulletList } from "@/components/ui/bullet-list";
import { Typography } from "@/components/ui/typography";
import type { Locale } from "@/i18n-config";
import { buildLocalizedPath } from "@/lib/locale-links";
import { getCanonicalServiceSlug } from "@/lib/services-subpage-slugs";
import type { SupportedLocale } from "@/config/site";
import { Section } from "@/components/ui/section";
import * as RemixIcon from "@remixicon/react";
import type { ServiceRecord } from "@/lib/api/services";
import { getCommonContent } from "@/lib/common";
import { SectionTitle } from "@/components/ui/section-title";

// Translation strings for service-specific content
const translations: Record<string, { keyBenefits: string }> = {
  en: { keyBenefits: "Key Benefits" },
  es: { keyBenefits: "Beneficios Clave" },
  fr: { keyBenefits: "Avantages clés" },
  it: { keyBenefits: "Vantaggi Chiave" },
  de: { keyBenefits: "Hauptvorteile" },
  pt: { keyBenefits: "Benefícios Principais" },
  zh: { keyBenefits: "主要优势" },
};
const defaultTranslation = translations.en;

type ServiceDetail = {
  title: string;
  highlight: string;
  description: string;
  benefitsTitle: string;
  benefits: string[];
  href: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

interface ServicesDetailsSectionProps {
  locale: Locale;
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

// Transform service records to service details
function transformServices(services: ServiceRecord[], locale: Locale, englishTitleMap: Map<string, string>): ServiceDetail[] {
  const t = translations[locale] ?? defaultTranslation;

  return services
    .filter((service): service is ServiceRecord => service != null)
    .map((service) => {
      const benefits = (service.keyBenefits && Array.isArray(service.keyBenefits) && service.keyBenefits.length > 0)
        ? service.keyBenefits
        : [];

      const lookupKey = `${service.icon || ''}_${service.showOnHomePage}`;
      const englishTitle = englishTitleMap.get(lookupKey) || service.title;
      const slug = getCanonicalServiceSlug(generateSlug(englishTitle));
      const href =
        slug === "bitcoin-cryptocurrency-mlm-software"
          ? buildLocalizedPath("/bitcoin-cryptocurrency-mlm-software", locale as SupportedLocale)
          : buildLocalizedPath(`/services/${slug}`, locale as SupportedLocale);

      return {
        title: String(service.title || ''),
        highlight: String(service.title || '').split(' ')[0] || 'Service',
        description: String(service.description || ''),
        benefitsTitle: t.keyBenefits,
        benefits: benefits,
        href: href,
        image: {
          src: service.image || '/images/placeholder-service.jpg',
          alt: service.title || 'Service image',
          width: 780,
          height: 480,
        },
      };
    })
    .filter((service: ServiceDetail) => service.benefits.length > 0); // Only show services with benefits
}

export function ServicesDetailsSection({ locale, services: servicesProp, englishTitleMap }: ServicesDetailsSectionProps & { englishTitleMap?: Map<string, string> }) {
  // If services are provided as props, use them directly (server-side)
  // Otherwise, this component can still work with client-side fetching if needed
  const titleMap = englishTitleMap || new Map<string, string>();
  const services = servicesProp ? transformServices(servicesProp, locale, titleMap) : [];
  const t = translations[locale] ?? defaultTranslation;
  const common = getCommonContent(locale);

  if (services.length === 0) {
    return null;
  }
  return (
    <Section padding="lg" variant="default" containerClassName="space-y-10">
      <SectionTitle
        badge="Services"
        heading="Service details"
        description="Our services are designed to help you achieve your goals."
        maxWidth="3xl"
      />
      {services.map((service, index) => (
        <article
          key={service.title}
          className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]  bg-primary/10 rounded-3xl border border-border/40 p-10"
        >
          <div className={index % 2 === 1 ? "lg:order-2" : ""}>
            <Badge
              variant="default"
              icon={RemixIcon.RiServiceLine}
            >
              {service.highlight}
            </Badge>
            <Typography
              as="h3"
              variant="h3"
              className="mt-4"
            >
              {service.title}
            </Typography>
            <Typography
              variant="p"
              textColor="muted"
              className="mt-4"
            >
              {service.description}
            </Typography>
            <Typography
              variant="small"
              className="mt-6 font-semibold"
            >
              {service.benefitsTitle}
            </Typography>
            <BulletList
              items={service.benefits}
              variant="compact"
              className="mt-3"
            />
            <div className="mt-6">
              <ReadMoreButton
                href={service.href}
                variant="default"
                target="_blank"
                rel="noopener noreferrer"
              >
                {common.buttons.exploreMore}
              </ReadMoreButton>
            </div>
          </div>
          <div className={index % 2 === 1 ? "lg:order-1" : ""}>
            <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/40 shadow-sm">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                width={service.image.width}
                height={service.image.height}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </article>
      ))}
    </Section>
  );
}
