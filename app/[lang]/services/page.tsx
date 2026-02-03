import type { Metadata } from "next";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ServicesHeroSection,
  ServicesCategoriesSection,
  ServicesDeliveryPillarsSection,
  ServicesDetailsSection,
  ServicesFaqSection,
  ServicesCtaSection,
} from "@/components/frontend/services";
import { listServices, type ServiceRecord } from "@/lib/api/services";
import { getPageTitle } from "@/lib/api/page-titles";
import {
  ClipboardList,
  Code,
  Headset,
  Plug,
  ShieldCheck,
  TrendingUp,
  Users,
  Workflow
} from "lucide-react";

export const dynamic = "force-dynamic";
export const revalidate = 60; // Revalidate every 60 seconds

type IconType = ComponentType<{ className?: string }>;

type ServiceCategory = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
  href?: string;
};

type DeliveryPillar = {
  title: string;
  description: string;
  icon: IconType;
};

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: "Implementation consulting",
    description:
      "Workshop compensation, product, and customer journeys with senior strategists aligned to your launch milestones.",
    bullets: [
      "Discovery sessions with finance, ops, and field leadership",
      "Plan health checks and readiness scorecards",
      "Localized go-live playbooks for each market"
    ],
    icon: ClipboardList,
    href: "/mlm-consulting/"
  },
  {
    title: "Custom software development",
    description:
      "Extend Cloud MLM Software with bespoke portals, data pipelines, and integrations built by our product engineers.",
    bullets: [
      "Distributor and customer portal enhancements",
      "Automations across finance, logistics, and CX systems",
      "Secure data services with long-term maintainability"
    ],
    icon: Code,
    href: "/mlm-software/"
  },
  {
    title: "Integration & automation",
    description:
      "Connect ERPs, tax services, and marketing platforms to orchestrate data flows across your direct selling stack.",
    bullets: [
      "Prebuilt connectors for commerce, CRM, and payment partners",
      "Event-driven workflows with audit-ready logging",
      "API governance and monitoring dashboards"
    ],
    icon: Plug,
    href: "/integrations/"
  },

];

const DELIVERY_PILLARS: DeliveryPillar[] = [
  {
    title: "Strategy & alignment",
    description: "We facilitate workshops to align corporate, field, and compliance teams around measurable outcomes.",
    icon: Users
  },
  {
    title: "Technical excellence",
    description: "Engineers follow secure SDLC practices with peer reviews, automated checks, and documentation.",
    icon: Code
  },
  {
    title: "Operational readiness",
    description: "Change management plans cover training, communication, and support so launches stay on schedule.",
    icon: Workflow
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale } }): Promise<Metadata> {
  const { getPageMetadata } = await import("@/components/frontend/common/page-metadata");

  const { getPageKeywords } = await import("@/lib/seo-keywords");
  const resolvedParams = params instanceof Promise ? await params : params;
  
  return getPageMetadata(
    params,
    "/services",
    {
      page: "services",
      fallbackTitle: "MLM Services | Consulting, Development & Integration Services | USA, India, Philippines, Australia, Germany",
      fallbackDescription: "Partner with Cloud MLM Software for MLM consulting, custom software development, payment gateway integrations, compliance services, and managed hosting. Expert MLM services for network marketing businesses worldwide.",
      fallbackKeywords: `${getPageKeywords("services", resolvedParams.lang)}, MLM consulting services, MLM software development, MLM integration services, MLM implementation services, MLM compliance services, MLM managed services`
    }
  );
}

type ServicesPageProps = {
  params: { lang: SupportedLocale };
};

export default async function ServicesPage({ params }: ServicesPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "/mlm-software/";
  const supportHref = "/customer-success/";

  // Fetch services on the server for faster loading
  let services: ServiceRecord[] = [];
  try {
    services = await listServices(locale);
    // If no services found for the requested locale, fall back to English
    if (locale !== 'en' && services.length === 0) {
      services = await listServices('en');
    }
  } catch (error) {
    console.error('[ServicesPage] Error fetching services:', error);
    services = [];
  }

  // Fetch English services to create a map for consistent slug generation
  // Key: icon + showOnHomePage (used to link translations), Value: English title
  const englishTitleMap = new Map<string, string>();
  try {
    const englishServices = await listServices('en');
    englishServices.forEach((service) => {
      const key = `${service.icon || ''}_${service.showOnHomePage}`;
      if (!englishTitleMap.has(key)) {
        englishTitleMap.set(key, service.title);
      }
    });
  } catch (error) {
    console.error('[ServicesPage] Error fetching English services for slug mapping:', error);
  }

  // Fetch page title data from backend for services page
  let pageTitleData = null;
  try {
    pageTitleData = await getPageTitle("services", locale);
  } catch (error) {
    console.error('[ServicesPage] Error fetching page title data:', error);
    pageTitleData = null;
  }

  return (
    <div>
      <ServicesHeroSection
        locale={locale}
        contactHref={contactHref}
        demoHref={demoHref}
        supportHref={supportHref}
        pageTitleData={pageTitleData}
      />

      <ServicesCategoriesSection categories={SERVICE_CATEGORIES} />

      <ServicesDetailsSection locale={locale} services={services} englishTitleMap={englishTitleMap} />


      <ServicesDeliveryPillarsSection pillars={DELIVERY_PILLARS} />

      <ServicesFaqSection locale={locale} />

      <ServicesCtaSection
        contactHref={contactHref}
        demoHref={demoHref}
        locale={locale}
      />
    </div>
  );
}
