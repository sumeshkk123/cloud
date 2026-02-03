import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Plug, Sparkles } from "lucide-react";
import { HeroSection, type HeroMetric } from "@/components/frontend/common/hero-section";
import type { Locale } from "@/i18n-config";
import { getPageTitle } from "@/lib/api/page-titles";
import { getIntegrationsContent } from "@/lib/integrations";

interface IntegrationHeroSectionProps {
    locale: Locale;
    contactHref: string;
    pricingHref: string;
    demoHref: string;
    pageTitleData?: Awaited<ReturnType<typeof getPageTitle>> | null;
}

export async function IntegrationHeroSection({
    locale,
    contactHref,
    pricingHref,
    demoHref,
    pageTitleData: propPageTitleData
}: IntegrationHeroSectionProps) {
    // Fetch page title data if not provided
    const pageTitleData = propPageTitleData ?? await getPageTitle("mlm-software-integration", locale);

    const t = getIntegrationsContent(locale).hero;

    // Parse title to extract highlight text
    const parseTitle = (title: string): { beforeText?: string; highlightText: string; afterText?: string } => {
        // Default: Use translated highlight words as reference
        const highlightWords = [
            t.fallbackTitle.highlightText,
            // Also check for common translations
            'Integrate', 'Integrar', 'Intégrer', 'Integrare', 'Integrieren', '集成'
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
            label: t.metrics.integrationPartners.label,
            value: "35+",
            detail: t.metrics.integrationPartners.detail
        },
        {
            label: t.metrics.connectorsAvailable.label,
            value: "50+",
            detail: t.metrics.connectorsAvailable.detail
        },
        {
            label: t.metrics.setupTime.label,
            value: "< 24 hrs",
            detail: t.metrics.setupTime.detail
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
            metrics={metrics}
            primaryCta={{
                label: t.primaryCta,
                href: "#integrations"
            }}
            secondaryCta={{
                label: t.secondaryCta,
                href: contactHref
            }}
            centered={false}
            disableHighlight={false}
        />
    );
}
