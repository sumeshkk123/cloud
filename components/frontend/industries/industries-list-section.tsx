'use client';

import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import type { ComponentType } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { IndustryCard } from "@/components/frontend/common/industry-card";
import type { Locale } from "@/i18n-config";
import { getIndustriesContent } from "@/lib/industries";
import { resolveIcon } from "@/components/frontend/home/utils";
import { Code } from "lucide-react";
import { buildLocalizedPath } from "@/lib/locale-links";
import { getIndustryPathSlug } from "@/lib/industries-subpage";
import type { SupportedLocale } from "@/config/site";

type IconType = ComponentType<{ className?: string }>;

export type ProgramLayer = {
    stage?: string;
    title: string;
    description: string;
    icon: IconType;
    href: string;
};

interface IndustriesListSectionProps {
    layers?: ProgramLayer[];
    pricingHref: string;
    locale: Locale;
    maxItems?: number;
    showOnHomePage?: boolean;
}

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

export function IndustriesListSection({
    layers: layersProp,
    pricingHref,
    locale,
    maxItems,
    showOnHomePage,
}: IndustriesListSectionProps) {
    const [layers, setLayers] = useState<ProgramLayer[]>(layersProp || []);
    const [isLoading, setIsLoading] = useState(!layersProp);
    const content = getIndustriesContent(locale);
    const t = content.listSection;

    // Fetch industry solutions from API if not provided as props
    useEffect(() => {
        if (layersProp) {
            setIsLoading(false);
            return;
        }

        const fetchIndustrySolutions = async () => {
            try {
                setIsLoading(true);
                const url = showOnHomePage
                    ? `/api/industry-solutions?locale=${locale}&showOnHomePage=true`
                    : `/api/industry-solutions?locale=${locale}`;

                const response = await fetch(url, {
                    cache: 'no-store',
                });

                if (response.ok) {
                    const data = await response.json();
                    const solutions = Array.isArray(data) ? data : [];

                    // Map backend data to ProgramLayer format
                    const mappedLayers: ProgramLayer[] = solutions.map((solution: any) => {
                        // Use stable slug from DB if available, fallback to legacy generation
                        const slug = solution.slug || generateSlug(solution.title);
                        const pathSlug = getIndustryPathSlug(slug);
                        const href = buildLocalizedPath(`/industries/${pathSlug}`, locale as SupportedLocale);
                        const IconComponent = resolveIcon(solution.icon || null, Code);

                        return {
                            title: solution.title,
                            description: solution.description,
                            icon: IconComponent,
                            href: href,
                        };
                    });

                    // Apply limit if specified
                    const limitedLayers = maxItems ? mappedLayers.slice(0, maxItems) : mappedLayers;
                    setLayers(limitedLayers);
                } else {
                    setLayers([]);
                }
            } catch (error) {
                console.error('[IndustriesListSection] Error fetching industry solutions:', error);
                setLayers([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchIndustrySolutions();
    }, [locale, layersProp, maxItems, showOnHomePage]);

    // Apply limit to provided layers if maxItems is specified
    const displayLayers = useMemo(() => {
        const layersToUse = layersProp || layers;
        return maxItems ? layersToUse.slice(0, maxItems) : layersToUse;
    }, [layersProp, layers, maxItems]);

    if (isLoading) {
        return (
            <Section variant="default" padding="lg" className="border-y border-border/60 bg-muted/20 dark:bg-slate-900/40" containerClassName="grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
                <div className="space-y-6">
                    <SectionTitle
                        badge={t.badge}
                        heading={t.heading}
                        description={t.description}
                        centered={false}
                        maxWidth="full"
                    />
                </div>
                <div className="grid gap-6">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="animate-pulse rounded-3xl border border-border/40 bg-card/95 p-8">
                            <div className="h-14 w-14 bg-muted rounded-full mb-4" />
                            <div className="h-6 bg-muted rounded w-2/3 mb-4" />
                            <div className="h-4 bg-muted rounded w-full mb-2" />
                            <div className="h-4 bg-muted rounded w-5/6 mb-4" />
                            <div className="h-10 bg-muted rounded w-32" />
                        </div>
                    ))}
                </div>
            </Section>
        );
    }

    if (displayLayers.length === 0) {
        return null;
    }

    return (
        <Section
            variant="default"
            padding="lg"
            className="border-y border-border/60 bg-muted/20 dark:bg-slate-900/40 !overflow-visible"
            containerClassName="grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]"
        >
            <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
                <SectionTitle
                    badge={t.badge}
                    heading={t.heading}
                    description={t.description}
                    centered={false}
                    maxWidth="full"
                />
                <Button asChild size="lg">
                    <Link href={pricingHref}>
                        {t.exploreButton}
                        <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                    </Link>
                </Button>
            </div>
            <div className="grid gap-6">
                {displayLayers.map((layer, index) => {
                    const Icon = layer.icon;
                    return (
                        <div key={layer.title || index} className="relative">
                            {layer.stage && (
                                <span className="absolute -top-3 left-6 z-10 inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                                    {layer.stage}
                                </span>
                            )}
                            <IndustryCard
                                icon={Icon}
                                title={layer.title}
                                description={layer.description}
                                href={layer.href || pricingHref}
                                buttonText={t.readMoreButton}
                            />
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}
