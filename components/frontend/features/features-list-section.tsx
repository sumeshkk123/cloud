'use client';

import { useState, useEffect } from "react";
import * as LucideIcons from "lucide-react";
import type { ComponentType } from "react";
import { FeatureCard } from "@/components/frontend/common/feature-card";
import { FeaturesSectionNav } from "./features-section-nav";
import type { Locale } from "@/i18n-config";
import type { FeatureHighlight } from "./feature-card-grid";
import { buildLocalizedPath } from "@/lib/locale-links";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";

interface FeatureRecord {
  id: string;
  slug?: string | null;
  title: string;
  description: string;
  icon?: string | null;
  category: string;
  features?: any; // JSON array
}

interface FeaturesListSectionProps {
  locale: Locale;
}

const CATEGORY_CONFIG: Record<string, { badge: string; heading: string; description: string; columns: string }> = {
  'AI': {
    badge: 'AI capabilities',
    heading: 'AI features that accelerate field momentum',
    description: 'Machine learning powers product recommendations, commission forecasting, and sales coaching so leaders can act on insights instead of spreadsheets.',
    columns: 'md:grid-cols-3'
  },
  'Core': {
    badge: 'Core platform features',
    heading: 'Everything you expect from enterprise MLM software',
    description: 'Cloud MLM Software bundles extensibility, multi-region operations, and omnichannel communications so your teams can run daily business with confidence.',
    columns: 'md:grid-cols-2 xl:grid-cols-3'
  },
  'Performance': {
    badge: 'Performance',
    heading: 'Built for speed, scale, and reliability',
    description: 'From responsive interfaces to caching and optimization, the platform stays fast whether you are launching a promotion or closing a period.',
    columns: 'md:grid-cols-2 xl:grid-cols-3'
  },
  'Security': {
    badge: 'Security & compliance',
    heading: 'Security-first architecture for global expansion',
    description: 'Multi-layer protection, verified frameworks, and resilient operations help you meet regulatory expectations while scaling into new regions.',
    columns: 'md:grid-cols-2 xl:grid-cols-3'
  },
  'Unique': {
    badge: 'Unique capabilities',
    heading: 'Extras that set Cloud MLM Software apart',
    description: 'Handle complex integrations, marketing programs, and field experiences with services and modules designed specifically for direct selling.',
    columns: 'md:grid-cols-2 xl:grid-cols-3'
  },
  'Compensation': {
    badge: 'Compensation & payouts',
    heading: 'Configure rewarding plans and automate compliant payouts',
    description: 'Align finance, legal, and field leaders with a compensation stack that handles modelling, testing, payroll, and compliance in one place.',
    columns: 'md:grid-cols-2 xl:grid-cols-4'
  },
  'Commerce': {
    badge: 'Commerce & customer experience',
    heading: 'Delight customers and distributors on every channel',
    description: 'Combine B2C storefronts, replicated sites, and mobile selling tools with journey automation that retains customers and grows lifetime value.',
    columns: 'md:grid-cols-2 xl:grid-cols-4'
  },
  'Integrations': {
    badge: 'Integrations & APIs',
    heading: 'Connect your ecosystem without brittle custom code',
    description: 'Use certified connectors, webhooks, and APIs to link commerce, CRM, support, and analytics platforms while maintaining data fidelity.',
    columns: 'md:grid-cols-2 xl:grid-cols-4'
  },
  'Enablement': {
    badge: 'Enablement & success',
    heading: 'Equip every team with knowledge, coaching, and expert support',
    description: 'From onboarding to ongoing optimisation, Cloud MLM Software includes the playbooks, analytics, and specialists that ensure sustained adoption.',
    columns: 'md:grid-cols-2 xl:grid-cols-4'
  }
};

const FEATURE_SECTION_NAV = [
  { label: "Compensation", href: "#compensation-features" },
  { label: "AI", href: "#ai-features" },
  { label: "Core", href: "#core-features" },
  { label: "Performance", href: "#performance-features" },
  { label: "Security", href: "#security-features" },
  { label: "Commerce", href: "#commerce-features" },
  { label: "Integrations", href: "#integration-features" },
  { label: "Enablement", href: "#enablement-features" },
  { label: "Unique", href: "#unique-features" }
];

export function FeaturesListSection({ locale }: FeaturesListSectionProps) {
  const [features, setFeatures] = useState<FeatureRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/features?locale=${locale}`, {
          cache: 'no-store',
        });
        if (response.ok) {
          const data = await response.json();
          setFeatures(Array.isArray(data) ? data : []);
        } else {
          setFeatures([]);
        }
      } catch (error) {
        console.error('Failed to fetch features:', error);
        setFeatures([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeatures();
  }, [locale]);

  // Group features by category
  const featuresByCategory = features.reduce((acc, feature) => {
    const category = feature.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(feature);
    return acc;
  }, {} as Record<string, FeatureRecord[]>);

  // Simple icon resolver - maps icon name strings to Lucide icon components
  const getIconComponent = (iconName: string | null | undefined): ComponentType<{ className?: string }> => {
    if (!iconName) {
      return LucideIcons.Sparkles; // Default icon
    }

    // Try to find the icon in Lucide icons
    const IconComponent = (LucideIcons as any)[iconName] as ComponentType<{ className?: string }> | undefined;
    if (IconComponent) {
      return IconComponent;
    }

    // Fallback to default
    return LucideIcons.Sparkles;
  };

  // Convert features to FeatureHighlight format
  const convertToFeatureHighlight = (feature: FeatureRecord): FeatureHighlight & { icon?: string } => {
    const slug = feature.slug || feature.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const href = feature.slug ? buildLocalizedPath(`/mlm-software-feature/${slug}`, locale) : undefined;

    // Extract bullets from features JSON array
    const bullets: string[] = [];
    if (feature.features) {
      // Handle both array and JSON string cases
      let featuresArray: any[] = [];
      if (Array.isArray(feature.features)) {
        featuresArray = feature.features;
      } else if (typeof feature.features === 'string') {
        try {
          featuresArray = JSON.parse(feature.features);
        } catch (e) {
          // If parsing fails, treat as single string
          featuresArray = [feature.features];
        }
      }

      if (Array.isArray(featuresArray) && featuresArray.length > 0) {
        // Limit to maximum 3 bullets, same as home page
        bullets.push(...featuresArray.slice(0, 3).map((f: any) => String(f).trim()).filter((f: string) => f.length > 0));
      }
    }

    return {
      title: feature.title,
      description: feature.description,
      bullets: bullets.length > 0 ? bullets : undefined,
      href,
      icon: feature.icon || undefined
    };
  };

  // Render a single feature section
  const renderFeatureSection = (
    id: string,
    badge: string,
    heading: string,
    description: string,
    items: (FeatureHighlight & { icon?: string })[],
    columns: string
  ) => {
    return (
      <Section id={id} variant="default" padding="xl" className="relative isolate !overflow-visible">
        {/* Animated mesh gradient background - like home page */}
        <div className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10" />
        </div>

        {/* Floating orbs */}
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse -z-10" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse -z-10" style={{ animationDelay: '1s' }} />

        <div className="relative z-10">
          <div className="grid gap-6 lg:gap-10 lg:grid-cols-[0.5fr_0.5fr] lg:items-start">
            {/* Left Column - Sticky */}
            <div className="lg:sticky lg:top-24 lg:self-start lg:h-fit space-y-6">
              <SectionTitle
                badge={badge}
                heading={heading}
                description={description}
                centered={false}
                maxWidth="full"
              />
            </div>

            {/* Right Column - Cards */}
            <div className="space-y-4">
              {items.map((item) => {
                // Get icon component from feature icon string
                const Icon = getIconComponent(item.icon);

                return (
                  <FeatureCard
                    key={item.title}
                    icon={Icon}
                    title={item.title}
                    description={item.description}
                    href={item.href || "#"}
                    buttonText="Learn more"
                    bullets={item.bullets}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Section>
    );
  };

  // Render sections for each category
  const renderCategorySections = () => {
    const categoryOrder = ['Compensation', 'AI', 'Core', 'Performance', 'Security', 'Commerce', 'Integrations', 'Enablement', 'Unique'];
    const sections: JSX.Element[] = [];

    categoryOrder.forEach((category) => {
      const categoryFeatures = featuresByCategory[category];
      if (!categoryFeatures || categoryFeatures.length === 0) return;

      const config = CATEGORY_CONFIG[category] || {
        badge: category,
        heading: `${category} Features`,
        description: `Explore our ${category.toLowerCase()} features.`,
        columns: 'md:grid-cols-3'
      };

      const sectionId = category.toLowerCase().replace(/\s+/g, '-') + '-features';
      const items = categoryFeatures.map(convertToFeatureHighlight);

      sections.push(
        <div key={category}>
          {renderFeatureSection(
            sectionId,
            config.badge,
            config.heading,
            config.description,
            items,
            config.columns
          )}
        </div>
      );
    });

    return sections;
  };

  if (isLoading) {
    return (
      <Section variant="default" padding="xl">
        <div className="text-center text-muted-foreground">Loading features...</div>
      </Section>
    );
  }

  return (
    <div className="space-y-0">
      <FeaturesSectionNav items={FEATURE_SECTION_NAV} />
      {renderCategorySections()}
    </div>
  );
}
