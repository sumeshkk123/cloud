import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Check } from "lucide-react";
import { PageTitle } from "./page-title";
import { cn } from "@/lib/utils";

export interface HeroMetric {
    label: string;
    value: string;
    detail: string;
}

export interface HeroSectionProps {
    /** Badge text to display above the title */
    badgeText?: string | null;
    /** Badge icon (optional, defaults to Sparkles) */
    badgeIcon?: React.ReactNode;
    /** Text before the highlighted portion */
    beforeText?: string;
    /** The text to highlight with gradient */
    highlightText: string;
    /** Text after the highlighted portion */
    afterText?: string;
    /** Description text below the title */
    description?: string;
    /** Primary CTA button props */
    primaryCta?: {
        label: string;
        href: string;
        external?: boolean;
    };
    /** Secondary CTA button props */
    secondaryCta?: {
        label: string;
        href: string;
        external?: boolean;
    };
    /** Metrics to display in the right column */
    metrics?: HeroMetric[];
    /** Optional className for the section */
    className?: string;
    /** Whether content is centered */
    centered?: boolean;
    /** Whether to disable the gradient highlight on the title */
    disableHighlight?: boolean;
}

export function HeroSection({
    badgeText,
    badgeIcon,
    beforeText,
    highlightText,
    afterText,
    description,
    primaryCta,
    secondaryCta,
    metrics = [],
    className,
    centered = false,
    disableHighlight = false,
}: HeroSectionProps) {
    return (
        <section className={cn(
            "relative isolate overflow-hidden border-b border-border/60 bg-background",
            className
        )}>
            {/* Animated mesh gradient background */}
            <div className="absolute inset-0 -z-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10" />
            </div>

            {/* Floating orbs */}
            <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse" />
            <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="container relative py-32">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    {/* Left Column - Content */}
                    <div className={cn("space-y-8", !centered && "text-left")}>
                        <PageTitle
                            badgeText={badgeText || undefined}
                            badgeIcon={badgeIcon}
                            beforeText={beforeText}
                            highlightText={highlightText}
                            afterText={afterText}
                            description={description}
                            centered={centered}
                            disableHighlight={disableHighlight}
                            as="h1"
                        />

                        {/* CTA Buttons */}
                        {(primaryCta || secondaryCta) && (
                            <div className={cn("flex flex-wrap gap-4", !centered && "justify-start")}>
                                {primaryCta && (
                                    <Button asChild size="lg" className="group rounded-xl px-6 py-6 text-base font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                                        <Link href={primaryCta.href} target={primaryCta.external ? "_blank" : undefined} rel={primaryCta.external ? "noopener noreferrer" : undefined}>
                                            {primaryCta.label}
                                            <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                                        </Link>
                                    </Button>
                                )}
                                {secondaryCta && (
                                    <Button asChild variant="outline" size="lg" className="group rounded-xl border-2 px-6 py-6 text-base font-semibold transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary/5">
                                        <Link href={secondaryCta.href} target={secondaryCta.external ? "_blank" : undefined} rel={secondaryCta.external ? "noopener noreferrer" : undefined}>
                                            {secondaryCta.label}
                                            <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Right Column - Metrics */}
                    {metrics.length > 0 && (
                        <div className="space-y-6">
                            {metrics.map((metric) => (
                                <div
                                    key={metric.label}
                                    className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-primary/40 hover:bg-card hover:shadow-lg"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    <div className="relative flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <dt className="text-xs font-semibold uppercase tracking-wider text-primary/60">{metric.label}</dt>
                                            <dd className="mt-2 text-3xl font-bold text-foreground">{metric.value}</dd>
                                            <p className="mt-2 text-sm text-muted-foreground">{metric.detail}</p>
                                        </div>
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                                            <Check className="h-6 w-6" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
