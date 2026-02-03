'use client';

import { useState, useEffect } from "react";
import type { Locale } from "@/i18n-config";
import type { HomepageContent } from "@/types/homepage";
import Link from "next/link";
import { Code, Users } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { FeatureCard } from "@/components/frontend/common/feature-card";
import { resolveIcon, localizedHref } from "./utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import { Section } from "@/components/ui/section";
import type { SupportedLocale } from "@/config/site";
import { getModulesContent } from "@/lib/modules";
import { Typography } from "@/components/ui/typography";
import { InfoCtaBox } from "@/components/ui/info-cta-box";
import * as LucideIcons from "lucide-react";
import type { ComponentType } from "react";
import { getHomeFeaturesContent } from "@/lib/home-features";

// Helper function to generate slug from title
function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

interface Feature {
    id: string;
    title: string;
    description: string;
    image?: string | null;
    icon?: string | null;
    href: string;
    showOnHomePage: boolean;
    features?: string[]; // Array of feature bullets
}

const MAX_ITEMS_HOME_PAGE = 8;

export function FeaturesSection({ locale, data }: { locale: Locale; data?: HomepageContent["featureSection"] }) {
    const [allFeatures, setAllFeatures] = useState<Feature[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const modulesContent = getModulesContent(locale);
    const readMoreButtonText = modulesContent.homeSection.exploreAllModules;
    const t = getHomeFeaturesContent(locale);

    // Helper function to get icon component from icon string
    const getIconComponent = (iconName: string | null | undefined): ComponentType<{ className?: string }> => {
        if (!iconName) {
            return Code; // Default icon
        }
        const IconComponent = (LucideIcons as any)[iconName] as ComponentType<{ className?: string }> | undefined;
        return IconComponent || Code;
    };

    useEffect(() => {
        const fetchFeatures = async () => {
            try {
                setIsLoading(true);
                // Fetch ALL features (not just showOnHomePage=true) to get remaining items
                const response = await fetch(
                    `/api/features?locale=${locale}`,
                    { cache: 'no-store' }
                );

                if (response.ok) {
                    const apiData = await response.json();
                    // Features API returns array directly, not wrapped in items
                    const fetchedFeatures = Array.isArray(apiData) ? apiData : [];

                    // Map all backend data to Feature format
                    const mappedFeatures: Feature[] = fetchedFeatures.map((feature: any) => {
                        const slug = feature.slug || generateSlug(feature.title);
                        const href = buildLocalizedPath(`/mlm-software-feature/${slug}`, locale as SupportedLocale);

                        // Extract features/bullets array (max 3)
                        let featuresList: string[] = [];
                        if (feature.features && Array.isArray(feature.features)) {
                            featuresList = feature.features.slice(0, 2).map((f: any) => String(f));
                        }

                        return {
                            id: feature.id,
                            title: feature.title,
                            description: feature.description,
                            image: feature.image || null,
                            icon: feature.icon || null,
                            href: href,
                            showOnHomePage: Boolean(feature.showOnHomePage ?? false),
                            features: featuresList.length > 0 ? featuresList : undefined,
                        };
                    });

                    setAllFeatures(mappedFeatures);
                } else {
                    setAllFeatures([]);
                }
            } catch (error) {
                console.error('[FeaturesSection] Error fetching features:', error);
                setAllFeatures([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchFeatures();
    }, [locale]);

    // Get features with showOnHomePage=true for cards (first 8)
    const homePageFeatures = allFeatures.filter(f => f.showOnHomePage);
    const features = homePageFeatures.slice(0, MAX_ITEMS_HOME_PAGE);
    const featureTitles = new Set(features.map(f => f.title));

    // Get remaining features (those without showOnHomePage=true OR beyond first 8) for tags
    const remainingFeatures = allFeatures.filter(f => !featureTitles.has(f.title));

    return (
        <Section variant="default" padding="xl" className="relative isolate !overflow-visible">
            {/* Animated mesh gradient background - like hero section */}
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
                            badge={data?.badge || t.section.badge}
                            heading={data?.heading || t.section.heading}
                            description={data?.description || t.section.description}
                            centered={false}
                            maxWidth="full"
                        />

                        {/* Trust Card */}
                        <InfoCtaBox
                            icon={Users}
                            text={t.trustCard.text}
                            buttonText={t.trustCard.buttonText}
                            buttonHref={localizedHref(locale, "/features")}
                        />
                    </div>

                    {/* Right Column - Cards */}
                    <div className="space-y-4">
                        {isLoading ? (
                            <div className="space-y-4">
                                {[...Array(MAX_ITEMS_HOME_PAGE)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="animate-pulse rounded-3xl border border-border/40 bg-card/95 p-8"
                                    >
                                        <div className="flex gap-4 items-start">
                                            <div className="h-14 w-14 bg-muted rounded-full shrink-0" />
                                            <div className="flex-1 space-y-3">
                                                <div className="h-6 bg-muted rounded w-3/4" />
                                                <div className="h-4 bg-muted rounded w-full" />
                                                <div className="h-4 bg-muted rounded w-5/6" />
                                                <div className="h-9 bg-muted rounded w-32 mt-4" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : features.length > 0 ? (
                            <div className="space-y-4">
                                {features.map((feature) => {
                                    // Use icon field if available, otherwise fall back to image
                                    const IconComponent = feature.icon
                                        ? getIconComponent(feature.icon)
                                        : resolveIcon(feature.image, Code);

                                    return (
                                        <FeatureCard
                                            key={feature.id}
                                            icon={IconComponent}
                                            title={feature.title}
                                            description={feature.description}
                                            href={localizedHref(locale, feature.href)}
                                            buttonText={t.common.exploreMore}
                                            bullets={feature.features}
                                        />
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <Typography variant="p" textColor="muted">
                                    {t.common.emptyState}
                                </Typography>
                            </div>
                        )}

                        {/* Remaining Features Tags */}
                        {remainingFeatures.length > 0 && (
                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                {remainingFeatures.map((feature, index) => (
                                    <Link
                                        key={`${feature.id}-${index}`}
                                        href={localizedHref(locale, feature.href)}
                                        className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium tracking-wide text-foreground shadow-sm transition-all hover:bg-primary/20 hover:border-primary/30 hover:shadow-md"
                                    >
                                        {feature.title}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Section>
    );
}
