'use client';

import { useState, useEffect } from "react";
import { Package } from "lucide-react";
import { ModuleCard } from "@/components/frontend/common/module-card";
import { SectionTitle } from "@/components/ui/section-title";
import { resolveIcon } from "@/components/frontend/home/utils";
import type { Locale } from "@/i18n-config";
import { Section } from "@/components/ui/section";
import { getModulesContent } from "@/lib/modules";
import { Typography } from "@/components/ui/typography";

interface Module {
    id: string;
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
                    // Show all modules
                    setModules(Array.isArray(data) ? data : []);
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
                    <div className="grid  gap-3 md:grid-cols-3">
                        {modules.map((module) => {
                            const Icon = resolveIcon(module.image, Package);
                            return (
                                <ModuleCard
                                    key={module.id}
                                    icon={Icon}
                                    title={module.title}
                                    description={module.description}
                                    readMoreHref="/mlm-software-modules/"
                                    variant="default"
                                />
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
