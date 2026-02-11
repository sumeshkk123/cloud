"use client";

import { HeroSection, type HeroMetric } from "@/components/frontend/common/hero-section";
import type { Locale } from "@/i18n-config";
import { getModulesContent } from "@/lib/modules";
import { Sparkles } from "lucide-react";
import type { PageTitleRecord } from "@/lib/api/page-titles";

interface ModulesHeroSectionProps {
    locale: Locale;
    contactHref: string;
    pricingHref: string;
    demoHref: string;
    pageTitleData?: PageTitleRecord | null;
    /** When set, primary CTA runs this instead of linking (e.g. open project brief modal) */
    onPrimaryCtaClick?: () => void;
}

export function ModulesHeroSection({
    locale,
    contactHref,
    pricingHref,
    demoHref,
    pageTitleData,
    onPrimaryCtaClick
}: ModulesHeroSectionProps) {
    const t = getModulesContent(locale).hero;

    // Parse title to extract highlight text
    // Expected format: "Configure the exact MLM software modules your field needs to grow."
    const parseTitle = (title: string): { beforeText?: string; highlightText: string; afterText?: string } => {
        // Default: Use translated highlight words as reference
        const highlightWords = [
            t.fallbackTitle.highlightText,
            // Also check for common translations
            'Configure', 'Configurar', 'Configurer', 'Configura', 'Konfigurieren', '配置'
        ];

        const words = title.split(' ');
        const highlightIndex = words.findIndex(w => highlightWords.includes(w));

        if (highlightIndex >= 0) {
            return {
                beforeText: highlightIndex > 0 ? words.slice(0, highlightIndex).join(' ') : undefined,
                highlightText: words[highlightIndex],
                afterText: highlightIndex < words.length - 1 ? words.slice(highlightIndex + 1).join(' ') : undefined,
            };
        }

        // Fallback: use first word as highlight
        return {
            highlightText: words[0] || t.fallbackTitle.highlightText,
            afterText: words.length > 1 ? words.slice(1).join(' ') : undefined,
        };
    };

    const titleParts = pageTitleData?.title
        ? parseTitle(pageTitleData.title)
        : { highlightText: t.fallbackTitle.highlightText, afterText: t.fallbackTitle.afterText };

    // Build metrics from translations
    const metrics: HeroMetric[] = [
        {
            label: t.metrics.configurableModules.label,
            value: "56+",
            detail: t.metrics.configurableModules.detail
        },
        {
            label: t.metrics.integrationPartners.label,
            value: "35+",
            detail: t.metrics.integrationPartners.detail
        },
        {
            label: t.metrics.marketsServed.label,
            value: "100+",
            detail: t.metrics.marketsServed.detail
        }
    ];

    return (
        <HeroSection
            badgeText={pageTitleData?.pagePill || t.badgeText}
            badgeIcon={<Sparkles className="h-4 w-4" aria-hidden />}
            beforeText={titleParts.beforeText}
            highlightText={titleParts.highlightText}
            afterText={titleParts.afterText}
            description={pageTitleData?.sectionSubtitle || t.description}
            primaryCta={
                onPrimaryCtaClick
                    ? { label: t.primaryCta, onClick: onPrimaryCtaClick }
                    : { label: t.primaryCta, href: contactHref }
            }
            secondaryCta={{
                label: t.secondaryCta,
                href: pricingHref,
            }}
            metrics={metrics}
            centered={false}
            disableHighlight={false}
        />

    );
}
