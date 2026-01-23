import type { ComponentType } from "react";
import { HeroSection, type HeroMetric } from "@/components/frontend/common/hero-section";
import { Target } from "lucide-react";
import type { Locale } from "@/i18n-config";
import type { PageTitleRecord } from "@/lib/api/page-titles";
import { getIndustriesContent } from "@/lib/industries";

type IconType = ComponentType<{ className?: string }>;

export type HeroHighlight = {
    title: string;
    description: string;
    icon: IconType;
};

interface IndustriesHeroSectionProps {
    locale: Locale;
    contactHref: string;
    storiesHref: string;
    highlights: HeroHighlight[];
    pageTitleData?: PageTitleRecord | null;
}

export function IndustriesHeroSection({
    locale,
    contactHref,
    storiesHref,
    highlights,
    pageTitleData,
}: IndustriesHeroSectionProps) {
    const content = getIndustriesContent(locale);
    const t = content.heroSection;

    // Parse title to extract highlight text
    const parseTitle = (title: string): { beforeText?: string; highlightText: string; afterText?: string } => {
        const highlightWords = [
            t.fallbackTitle.highlightText,
            // Also check for common translations
            'Scale', 'Escala', 'Scala', 'Skalieren', 'Escalar', '扩展',
            'industry', 'industria', 'settore', 'branche', 'indústria', '行业',
            'network', 'red', 'rete', 'netzwerk', 'rede', '网络'
        ];

        const words = title.split(' ');
        const highlightIndex = words.findIndex(w => highlightWords.some(hw => w.toLowerCase().includes(hw.toLowerCase())));

        if (highlightIndex >= 0) {
            return {
                beforeText: highlightIndex > 0 ? words.slice(0, highlightIndex).join(' ') : undefined,
                highlightText: words[highlightIndex],
                afterText: highlightIndex < words.length - 1 ? words.slice(highlightIndex + 1).join(' ') : undefined,
            };
        }

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
            label: t.metrics.discoveryLabs.label,
            value: "",
            detail: t.metrics.discoveryLabs.detail
        },
        {
            label: t.metrics.advisoryCouncils.label,
            value: "",
            detail: t.metrics.advisoryCouncils.detail
        },
        {
            label: t.metrics.programmeOffices.label,
            value: "",
            detail: t.metrics.programmeOffices.detail
        }
    ];

    return (
        <div className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-950 dark:to-indigo-950">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_10%,rgba(99,102,241,0.2),transparent_45%),radial-gradient(circle_at_82%_18%,rgba(56,189,248,0.18),transparent_55%)]" />
            <HeroSection
                badgeText={pageTitleData?.pagePill || t.badgeText}
                badgeIcon={<Target className="h-4 w-4" aria-hidden />}
                beforeText={titleParts.beforeText}
                highlightText={titleParts.highlightText}
                afterText={titleParts.afterText}
                description={pageTitleData?.sectionSubtitle || t.description}
                primaryCta={{
                    label: t.primaryCta,
                    href: contactHref,
                }}
                secondaryCta={{
                    label: t.secondaryCta,
                    href: storiesHref,
                }}
                metrics={metrics}
                centered={false}
                disableHighlight={false}
                className="bg-transparent border-0 py-0"
            />
        </div>
    );
}
