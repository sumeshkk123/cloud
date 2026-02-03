'use client';

import { useState, useEffect } from "react";
import { GitBranch, Calendar } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import type { Locale } from "@/i18n-config";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";
import { getChangelogContent } from "@/lib/changelog-content";
import { cn } from "@/lib/utils";

interface ChangelogEntry {
    id: string;
    version: string;
    title?: string | null;
    description: string;
    features: string[];
    locale: string;
    order: number;
    createdAt: string;
    updatedAt: string;
}

interface ChangelogListSectionProps {
    locale: Locale;
    initialEntries?: ChangelogEntry[];
}

export function ChangelogListSection({ locale, initialEntries = [] }: ChangelogListSectionProps) {
    const [entries, setEntries] = useState<ChangelogEntry[]>(initialEntries);
    const [isLoading, setIsLoading] = useState(false);
    const t = getChangelogContent(locale);

    // Sync with initialEntries when they change (e.g., language switch)
    useEffect(() => {
        if (initialEntries && initialEntries.length > 0) {
            setEntries(initialEntries);
            return; // Use server-provided data
        }

        // Only fetch if no initial entries provided (for client-side navigation)
        const fetchChangelog = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`/api/changelog?locale=${locale}`, {
                    cache: 'no-store',
                });
                if (response.ok) {
                    const data = await response.json();
                    setEntries(Array.isArray(data) ? data : []);
                } else {
                    setEntries([]);
                }
            } catch (error) {
                console.error('Failed to fetch changelog:', error);
                setEntries([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchChangelog();
    }, [locale, initialEntries]);

    return (
        <Section variant="primary" padding="md" containerClassName="space-y-10">
            <SectionTitle
                badge={t.listSection.badge}
                heading={t.listSection.heading}
                description={t.listSection.description}
                maxWidth="3xl"
            />

            {isLoading ? (
                <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="animate-pulse rounded-3xl border border-border/60 bg-background p-6">
                            <div className="h-6 bg-muted rounded w-1/4 mb-4" />
                            <div className="h-4 bg-muted rounded w-full mb-2" />
                            <div className="h-4 bg-muted rounded w-3/4" />
                        </div>
                    ))}
                </div>
            ) : entries.length > 0 ? (
                <div className="space-y-6">
                    {entries.map((entry) => (
                        <article
                            key={entry.id}
                            className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition-all hover:shadow-md"
                        >
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-start gap-4 flex-1">
                                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0">
                                            <GitBranch className="h-6 w-6" aria-hidden />
                                        </span>
                                        <div className="space-y-2 flex-1">
                                            <div className="flex items-center gap-3 flex-wrap">
                                                <Typography variant="h4">
                                                    v{entry.version} -
                                                </Typography>
                                                {entry.title && (
                                                    <Typography variant="h5">
                                                        {entry.title}
                                                    </Typography>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Calendar className="h-3.5 w-3.5" />
                                                <span>
                                                    {new Date(entry.updatedAt).toLocaleDateString(locale, {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Typography variant="p" className="leading-relaxed text-sm">
                                    {entry.description}
                                </Typography>

                                {entry.features && entry.features.length > 0 && (
                                    <div className="mt-4 space-y-4">
                                        <Typography variant="small" className="font-semibold text-foreground text-sm">
                                            {t.listSection.keyFeatures}
                                        </Typography>
                                        <BulletList items={entry.features} variant="compact" />
                                    </div>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <Typography variant="p" textColor="muted">
                        {t.listSection.noEntries}
                    </Typography>
                </div>
            )}
        </Section>
    );
}
