import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { HeroSection, type HeroMetric } from "@/components/frontend/common/hero-section";
import type { Locale } from "@/i18n-config";
import { getPageTitle } from "@/lib/api/page-titles";
import { getMetaDetail } from "@/lib/api/meta-details";
import { getChangelogContent } from "@/lib/changelog-content";

interface ChangelogHeroSectionProps {
    locale: Locale;
    contactHref: string;
    pageTitleData?: Awaited<ReturnType<typeof getPageTitle>> | null;
    metaDetails?: Awaited<ReturnType<typeof getMetaDetail>> | null;
}

export async function ChangelogHeroSection({
    locale,
    contactHref,
    pageTitleData: propPageTitleData,
    metaDetails: propMetaDetails
}: ChangelogHeroSectionProps) {
    // Fetch page title data if not provided
    const pageTitleData = propPageTitleData ?? await getPageTitle("changelog", locale);

    // Fetch meta details if not provided
    const metaDetails = propMetaDetails ?? await getMetaDetail("changelog", locale);

    // Get translations
    const t = getChangelogContent(locale);

    // Parse title to extract highlight text
    const parseTitle = (title: string): { beforeText?: string; highlightText: string; afterText?: string } => {
        const words = title.split(' ');
        // Look for common highlight words
        const highlightWords = ['Changelog', 'Release', 'Updates', 'Evolution'];
        const highlightIndex = words.findIndex(w => highlightWords.some(hw => w.includes(hw)));

        if (highlightIndex >= 0) {
            return {
                beforeText: highlightIndex > 0 ? words.slice(0, highlightIndex).join(' ') : undefined,
                highlightText: words[highlightIndex],
                afterText: highlightIndex < words.length - 1 ? words.slice(highlightIndex + 1).join(' ') : undefined,
            };
        }

        // Fallback: use first word as highlight
        return {
            highlightText: words[0] || 'Changelog',
            afterText: words.length > 1 ? words.slice(1).join(' ') : undefined,
        };
    };

    const titleParts = pageTitleData?.title
        ? parseTitle(pageTitleData.title)
        : { highlightText: t.hero.fallbackTitle.highlightText, afterText: t.hero.fallbackTitle.afterText };

    // Build metrics
    const metrics: HeroMetric[] = [
        {
            label: t.hero.metrics.yearsOfIteration.label,
            value: t.hero.metrics.yearsOfIteration.value,
            detail: t.hero.metrics.yearsOfIteration.detail
        },
        {
            label: t.hero.metrics.majorReleases.label,
            value: t.hero.metrics.majorReleases.value,
            detail: t.hero.metrics.majorReleases.detail
        },
        {
            label: t.hero.metrics.automationCoverage.label,
            value: t.hero.metrics.automationCoverage.value,
            detail: t.hero.metrics.automationCoverage.detail
        }
    ];

    // Use meta description if available, otherwise fall back to page title sectionSubtitle or default
    const description = metaDetails?.description || pageTitleData?.sectionSubtitle || "Explore Cloud MLM Software's evolution from 2015 to 2025: yearly releases, automation gains, and the new AI-native era.";

    return (
        <HeroSection
            badgeText={pageTitleData?.pagePill || t.hero.badgeText}
            badgeIcon={<Sparkles className="h-4 w-4" aria-hidden />}
            beforeText={titleParts.beforeText}
            highlightText={titleParts.highlightText}
            afterText={titleParts.afterText}
            description={description}
            primaryCta={{
                label: t.hero.primaryCta,
                href: contactHref,
            }}
            secondaryCta={{
                label: t.hero.secondaryCta,
                href: contactHref,
            }}
            metrics={metrics}
            centered={false}
            disableHighlight={false}
        />
    );
}
