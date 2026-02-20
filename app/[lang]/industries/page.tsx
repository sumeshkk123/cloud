import type { Metadata } from "next";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getMetaDetail } from "@/lib/api/meta-details";
import type { PageTitleRecord } from "@/lib/api/page-titles";
import {
  IndustriesHeroSection,
  IndustriesPortfolioSection,
  IndustriesListSection,
  IndustriesImpactSection,
  IndustriesCtaSection,
  type HeroHighlight,
  type PortfolioCluster,
  type ImpactStory,
} from "@/components/frontend/industries";
import {
  AirplaneTilt,
  Brain,
  ChartBarHorizontal,
  Circuitry,
  GlobeHemisphereEast,
  Heartbeat,
  ShieldCheck as PhosphorShieldCheck,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-dynamic";
export const revalidate = 60; // Revalidate every 60 seconds

type IconType = ComponentType<{ className?: string }>;

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    title: "AI-guided growth",
    description:
      "Automation, forecasting, and onboarding copilots keep every market launch aligned to the revenue plan.",
    icon: Brain
  },
  {
    title: "Global readiness",
    description:
      "Multi-currency and multi-language experiences ensure distributors and customers have a native journey.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Compliance built in",
    description:
      "Policy controls, audit trails, and territory management give leaders total confidence in every expansion.",
    icon: PhosphorShieldCheck
  }
];

const PORTFOLIO_CLUSTERS: PortfolioCluster[] = [
  {
    title: "Wellness, nutrition, and lifestyle",
    blurb:
      "Elevate customer trust with personalised plans, regulated product education, and wellness outcomes dashboards.",
    bullets: [
      "Programmes for health, beauty, and personal care brands",
      "AI recommendations that adapt to customer goals",
      "Rank acceleration journeys for top field leaders"
    ],
    icon: Heartbeat
  },
  {
    title: "Financial and investment services",
    blurb:
      "Operate high-yield, fintech, and insurance models with risk controls, portfolio oversight, and transparent payouts.",
    bullets: [
      "Investment tracking across HYIP, forex, and crypto",
      "Automated KYC, KYB, and regional compliance checks",
      "Treasury controls with configurable approval chains"
    ],
    icon: Circuitry
  },
  {
    title: "Commerce, travel, and experiences",
    blurb:
      "Coordinate omnichannel orders, events, and loyalty engagements for retailers, travel brands, and training networks.",
    bullets: [
      "Shopper journeys with bundled offers and subscriptions",
      "Distributor enablement content and certification flows",
      "Experience-led dashboards that spotlight regional wins"
    ],
    icon: AirplaneTilt
  }
];

const IMPACT_STORIES: ImpactStory[] = [
  {
    title: "Wellness portfolio",
    metric: "38% faster distributor activation",
    summary:
      "Automated onboarding sequences and AI product guidance lifted first-30-day productivity for a global wellness brand.",
    icon: UsersThree
  },
  {
    title: "Investment programme",
    metric: "4x audit response speed",
    summary:
      "Regulated statement packs and approval chains reduced compliance review cycles from weeks to days across finance markets.",
    icon: ChartBarHorizontal
  },
  {
    title: "Lifestyle retail network",
    metric: "22-country launch in 120 days",
    summary:
      "Unified commerce services, digital events, and analytics copilots accelerated expansion without fragmenting operations.",
    icon: AirplaneTilt
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const { getPageMetadata } = await import("@/components/frontend/common/page-metadata");

  const { getPageKeywords } = await import("@/lib/seo-keywords");
  const resolvedParams = params instanceof Promise ? await params : params;

  return getPageMetadata(
    params,
    "/industries",
    {
      page: "industries",
      fallbackTitle: "MLM Software for Industries | Health, Beauty, Finance & More | USA, India, Philippines, Australia, Germany",
      fallbackDescription: "Discover how Cloud MLM Software powers direct selling businesses across health & wellness, beauty & cosmetics, financial services, and more. Industry-specific MLM solutions with AI automation.",
      fallbackKeywords: `${getPageKeywords("industries", resolvedParams.lang)}, MLM software for health and wellness, beauty MLM software, nutrition MLM platform, financial services MLM, MLM industry solutions`
    }
  );
}

type IndustriesPageProps = {
  params: { lang: SupportedLocale };
};

export default async function IndustriesPage({ params }: IndustriesPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const storiesHref = buildLocalizedPath("/resources/customers", locale);

  // Fetch meta details for industries page
  let pageTitleData: PageTitleRecord | null = null;
  try {
    const metaData = await getMetaDetail("industries", locale);
    if (metaData) {
      pageTitleData = {
        page: "industries",
        locale: locale,
        title: metaData.title,
        pagePill: undefined,
        sectionSubtitle: metaData.description
      };
    }
  } catch (error) {
    console.error('[IndustriesPage] Error fetching meta data:', error);
  }

  return (
    <div>
      <IndustriesHeroSection
        locale={locale}
        contactHref={contactHref}
        storiesHref={storiesHref}
        highlights={HERO_HIGHLIGHTS}
        pageTitleData={pageTitleData}
      />

      <IndustriesPortfolioSection clusters={PORTFOLIO_CLUSTERS} />

      <IndustriesListSection pricingHref={pricingHref} locale={locale} />


      <IndustriesImpactSection stories={IMPACT_STORIES} />

      <IndustriesCtaSection contactHref={contactHref} storiesHref={storiesHref} />
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
