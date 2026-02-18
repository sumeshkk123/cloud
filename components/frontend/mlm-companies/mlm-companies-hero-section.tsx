"use client";

import { HeroSection, type HeroMetric } from "@/components/frontend/common/hero-section";
import type { Locale } from "@/i18n-config";
import { getMlmCompaniesContent } from "@/lib/mlm-companies";
import { Building2 } from "lucide-react";
import type { PageTitleRecord } from "@/lib/api/page-titles";

interface MlmCompaniesHeroSectionProps {
    locale: Locale;
    contactHref: string;
    pricingHref: string;
    demoHref: string;
    pageTitleData?: PageTitleRecord | null;
    /** When set, primary CTA runs this instead of linking (e.g. open project brief modal) */
    onPrimaryCtaClick?: () => void;
}

export function MlmCompaniesHeroSection({
    locale,
    contactHref,
    pricingHref,
    demoHref,
    pageTitleData,
    onPrimaryCtaClick
}: MlmCompaniesHeroSectionProps) {
    const t = getMlmCompaniesContent(locale).heroSection;

    // Parse title to extract highlight text
    const parseTitle = (title: string): { beforeText?: string; highlightText: string; afterText?: string } => {
        const words = title.split(' ');
        return {
            highlightText: words[0] || t.metrics[0].label,
            afterText: words.length > 1 ? words.slice(1).join(' ') : undefined,
        };
    };

    const titleParts = pageTitleData?.title
        ? parseTitle(pageTitleData.title)
        : { highlightText: t.metrics[0].label, afterText: t.fallbackTitle };

    // Build metrics from translations
    const metrics: HeroMetric[] = t.metrics;

    return (
        <HeroSection
            badgeText={pageTitleData?.pagePill || t.badge}
            badgeIcon={<Building2 className="h-4 w-4" aria-hidden />}
            beforeText={titleParts.beforeText}
            highlightText={titleParts.highlightText}
            afterText={titleParts.afterText}
            description={pageTitleData?.sectionSubtitle || t.description}
            primaryCta={
                onPrimaryCtaClick
                    ? { label: t.contactButton, onClick: onPrimaryCtaClick }
                    : { label: t.contactButton, href: contactHref }
            }
            secondaryCta={{
                label: t.demoButton,
                href: demoHref,
            }}
            metrics={metrics}
            centered={false}
            disableHighlight={false}
        />
    );
}
