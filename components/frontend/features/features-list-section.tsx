'use client';

import { useState, useEffect } from "react";
import * as LucideIcons from "lucide-react";
import type { ComponentType } from "react";
import { FeatureCard } from "@/components/frontend/common/feature-card";
import type { Locale } from "@/i18n-config";
import { buildLocalizedPath } from "@/lib/locale-links";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { getFeaturesContent } from "@/lib/features";

interface FeatureRecord {
  id: string;
  slug?: string | null;
  title: string;
  description: string;
  icon?: string | null;
  category: string;
  features?: any; // JSON array
}

interface FeatureHighlight {
  title: string;
  description: string;
  bullets?: string[];
  href?: string;
  icon?: string;
}

interface FeaturesListSectionProps {
  locale: Locale;
}

export function FeaturesListSection({ locale }: FeaturesListSectionProps) {
  const featuresContent = getFeaturesContent(locale);
  const CATEGORY_CONFIG = featuresContent.categories;
  const FEATURE_SECTION_NAV = featuresContent.navigation;
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
    // Keep category keys stable (these keys must match backend category values).
    // Avoid hardcoded, user-facing English fallbacks here; unknown categories will
    // fall back to using the raw category key as the label.
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
        bullets.push(...featuresArray.map((f: any) => String(f).trim()).filter((f: string) => f.length > 0));
      }
    }

    // Limit bullets to maximum 2 items
    const limitedBullets = bullets.slice(0, 2);

    return {
      title: feature.title,
      description: feature.description,
      bullets: limitedBullets.length > 0 ? limitedBullets : undefined,
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
      <Section id={id} variant="primary" padding="xl" className="relative isolate !overflow-visible">
        {/* Animated mesh gradient background - like home page */}
        <div className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10" />
        </div>

        {/* Floating orbs */}
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse -z-10" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse -z-10" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 container">
          <div className="grid gap-6 lg:gap-10 lg:grid-cols-[0.35fr_0.65fr] lg:items-start">
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
                    buttonText={featuresContent.common.learnMore}
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

      // Prefer translated category config from `getFeaturesContent(locale)`.
      // If a category is missing in the locale JSON, fall back without injecting
      // English sentences into non-English locales.
      const config = CATEGORY_CONFIG[category] || {
        badge: category,
        heading: category,
        description: "",
        columns: "md:grid-cols-3",
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
        <div className="text-center text-muted-foreground">{featuresContent.common.loadingText}</div>
      </Section>
    );
  }

  return (
    <div className="space-y-0">
      {/* <FeaturesSectionNav items={FEATURE_SECTION_NAV} /> */}
      {renderCategorySections()}
    </div>
  );
}
