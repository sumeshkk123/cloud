'use client';

import { useState, useEffect } from "react";
import { Plug } from "lucide-react";
import { IntegrationCard } from "@/components/frontend/common/integration-card";
import { SectionTitle } from "@/components/ui/section-title";
import { resolveIcon } from "@/components/frontend/home/utils";
import type { Locale } from "@/i18n-config";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { getIntegrationsContent } from "@/lib/integrations";
import { buildLocalizedPath } from "@/lib/locale-links";

interface Integration {
    id: string;
    title: string;
    description: string;
    icon?: string | null;
    connectors?: string[] | null;
}

interface IntegrationListSectionProps {
    locale: Locale;
}

export function IntegrationListSection({ locale }: IntegrationListSectionProps) {
    const [integrations, setIntegrations] = useState<Integration[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const integrationsContent = getIntegrationsContent(locale);
    const listSection = integrationsContent.listSection;

    useEffect(() => {
        const fetchIntegrations = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`/api/integrations?locale=${locale}`, {
                    cache: 'no-store',
                });
                if (response.ok) {
                    const data = await response.json();
                    setIntegrations(Array.isArray(data) ? data : []);
                } else {
                    setIntegrations([]);
                }
            } catch (error) {
                console.error('Failed to fetch integrations:', error);
                setIntegrations([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchIntegrations();
    }, [locale]);

    return (
        <Section variant="default" padding="md" containerClassName="space-y-10" id="integrations">
            <SectionTitle
                badge={listSection.badge}
                heading={listSection.heading}
                description={listSection.description}
                maxWidth="3xl"
            />
            <div className="container space-y-10 rounded-3xl border border-border/50 bg-primary/10 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-900 p-10 shadow-[0_40px_110px_-80px_rgba(15,23,42,0.35)] backdrop-blur dark:bg-card/60 overflow-hidden">
                {isLoading ? (
                    <div className="grid gap-6 md:grid-cols-3">
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
                ) : integrations.length > 0 ? (
                    <div className="grid gap-6 md:grid-cols-3">
                        {integrations.map((integration) => {
                            const Icon = resolveIcon(integration.icon, Plug);
                            const integrationHref = buildLocalizedPath("/mlm-software-integration", locale);
                            return (
                                <IntegrationCard
                                    key={integration.id}
                                    icon={Icon}
                                    title={integration.title}
                                    description={integration.description}
                                    readMoreHref={integrationHref}
                                    variant="default"
                                />
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <Typography variant="p" textColor="muted">
                            {listSection.noIntegrationsText}
                        </Typography>
                    </div>
                )}
            </div>
        </Section>
    );
}
