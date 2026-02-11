'use client';

import { useState, useEffect } from "react";
import { Package } from "lucide-react";
import { ReadMoreButton } from "@/components/ui/read-more-button";
import { SectionTitle } from "@/components/ui/section-title";
import { resolveIcon } from "@/components/frontend/home/utils";
import type { Locale } from "@/i18n-config";
import { Section } from "@/components/ui/section";
import { getModulesContent } from "@/lib/modules";
import { getModuleSlugFromTitleOrId, isModulesSubpageSlug } from "@/lib/modules-subpage-slugs";
import { buildLocalizedPath } from "@/lib/locale-links";
import { Typography } from "@/components/ui/typography";

interface Module {
    id: string;
    slug?: string | null;
    title: string;
    description: string;
    image?: string | null;
}

interface ModulesListSectionProps {
    locale: Locale;
}

export function ModulesListSection({ locale }: ModulesListSectionProps) {
    const [modules, setModules] = useState<Module[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const modulesContent = getModulesContent(locale);
    const listSection = modulesContent.listSection;

    useEffect(() => {
        const fetchModules = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`/api/modules?locale=${locale}`, {
                    cache: 'no-store',
                });
                if (response.ok) {
                    const data = await response.json();
                    // Show all modules in reverse order (oldest first, newest last)
                    setModules(Array.isArray(data) ? [...data].reverse() : []);
                } else {
                    setModules([]);
                }
            } catch (error) {
                console.error('Failed to fetch modules:', error);
                setModules([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchModules();
    }, [locale]);

    return (
        <Section variant="primary" padding="md" containerClassName="space-y-10">
            <div className="absolute inset-0 -z-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10" />
            </div>
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-0 top-1/4 h-[480px] w-[480px] rounded-full bg-primary/8 blur-3xl" />
                <div className="absolute right-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl" />
            </div>
            <SectionTitle
                badge={listSection.badge}
                heading={listSection.heading}
                description={listSection.description}
                maxWidth="3xl"
            />
            <div className="container px-4">

                {isLoading ? (
                    <div className="grid gap-8 md:grid-cols-3">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="animate-pulse rounded-2xl border border-border/50 bg-card p-6">
                                <div className="h-12 w-12 bg-muted rounded-full mb-4" />
                                <div className="h-5 bg-muted rounded w-3/4 mb-3" />
                                <div className="h-4 bg-muted rounded w-full mb-2" />
                                <div className="h-4 bg-muted rounded w-5/6 mb-4" />
                                <div className="h-9 bg-muted rounded w-32" />
                            </div>
                        ))}
                    </div>
                ) : modules.length > 0 ? (
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {modules.map((module) => {
                            const Icon = resolveIcon(module.image, Package);
                            const subSlug =
                                module.slug && isModulesSubpageSlug(module.slug)
                                    ? module.slug
                                    : getModuleSlugFromTitleOrId(module.title, module.id);
                            const href = subSlug
                                ? buildLocalizedPath(`/${subSlug}`, locale)
                                : buildLocalizedPath("/mlm-software-modules", locale);
                            return (
                                <div
                                    key={module.id}
                                    className="group flex flex-col gap-4 rounded-2xl border border-border/40 bg-card/80 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-md"
                                >
                                    <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                        <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 group-hover:[transform:rotateY(180deg)]" aria-hidden />
                                    </span>
                                    <div className="flex-1 space-y-2">
                                        <Typography as="h3" variant="h5" className="font-semibold text-foreground">
                                            {module.title}
                                        </Typography>
                                        <Typography as="p" variant="small" textColor="muted" className="leading-relaxed line-clamp-3">
                                            {module.description}
                                        </Typography>
                                    </div>
                                    <ReadMoreButton href={href} variant="default">
                                        {listSection.exploreMore}
                                    </ReadMoreButton>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <Typography variant="p" textColor="muted">
                            {listSection.noModulesText}
                        </Typography>
                    </div>
                )}
            </div>
        </Section>
    );
}
