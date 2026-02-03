'use client';

import { useState, useEffect } from "react";
import { Sparkles, Rocket, Package } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { InfoCtaBox } from "@/components/ui/info-cta-box";
import { ModuleCard } from "@/components/frontend/common/module-card";
import { Section } from "@/components/ui/section";
import { resolveIcon } from "@/components/frontend/home/utils";
import { useParams } from "next/navigation";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { i18n } from "@/i18n-config";
import { getModulesContent } from "@/lib/modules";
import type { Locale } from "@/i18n-config";

interface Module {
    id: string;
    title: string;
    description: string;
    image?: string | null;
    showOnHomePage: boolean;
}

export function MlmSoftwareModules() {
    const params = useParams();
    const lang = params?.lang as string;
    const locale = (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
    const [modules, setModules] = useState<Module[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const modulesContent = getModulesContent(locale);
    const homeSection = modulesContent.homeSection;

    useEffect(() => {
        const fetchModules = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`/api/modules?locale=${locale}&showOnHomePage=true`, {
                    cache: 'no-store',
                });
                if (response.ok) {
                    const data = await response.json();
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

        <Section variant="default" padding="lg" className="relative isolate overflow-visible px-14 bg-background" containerClassName="relative z-10">
            {/* Container with :before pseudo-element for half-height background */}
            <div
                className="relative before:absolute before:inset-x-0 before:top-0 before:h-2/5 before:-mx-4 before:rounded-t-3xl before:md:-mx-8 before:md:rounded-t-[2rem] before:content-['']"
                style={{
                    '--gradient-bg': 'linear-gradient(to bottom right, #3b82f6, hsl(var(--primary)), #06b6d4, #8b5cf6, #6366f1)',
                } as React.CSSProperties & { '--gradient-bg'?: string }}
            >
                <div
                    className="absolute inset-x-0 top-0 h-2/5 -mx-4 rounded-t-3xl md:-mx-8 md:rounded-t-[2rem]"
                    style={{ background: 'var(--gradient-bg)' }}
                />
                {/* Overlay gradient for depth - only on top half */}
                <div className="absolute inset-x-0 top-0 h-2/5 -mx-4 rounded-t-3xl bg-gradient-to-b from-black/10 dark:from-black/20 via-transparent to-transparent md:-mx-8 md:rounded-t-[2rem]" />

                {/* Radial gradient accents - only on top half */}
                <div className="absolute inset-x-0 top-0 h-2/5 -mx-4 rounded-t-3xl bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.4),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.4),transparent_50%)] md:-mx-8 md:rounded-t-[2rem]" />

                <div className="relative z-10 py-16 space-y-8">
                    <SectionTitle
                        badge="Core modules"
                        heading="Build the Cloud MLM platform your network can scale on"
                        description="Select finance, field, growth, and compliance capabilities on one unified backbone. Each module sits on shared data so expansion, governance, and distributor experiences stay in sync."
                        className="text-white [&_h2]:text-white [&_p]:text-white/90 [&_span]:text-white [&_svg]:text-white"
                        maxWidth="full"
                    />



                    <div className="rounded-3xl border border-border/50 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-900 p-10 shadow-[0_40px_110px_-80px_rgba(15,23,42,0.35)] backdrop-blur dark:bg-card/60 overflow-hidden">
                        <div
                            className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.18),transparent_55%)]"
                            aria-hidden
                        />
                        <div className="flex items-start gap-4 group">
                            <div className="flex flex-none items-center justify-center rounded-full bg-primary p-3 text-primary-foreground transition-transform duration-300 group-hover:[transform:rotateY(180deg)]">
                                <Sparkles className="h-6 w-6" />
                            </div>
                            <div className="space-y-3">
                                <Typography as="h3" variant="h4" className="text-xl font-semibold text-foreground">Guided launch playbooks</Typography>
                                <Typography variant="p" className="text-sm leading-6 text-muted-foreground">
                                    Solution architects and AI automations pair up to design your stack, migrate data, and validate compensation flows before distributors ever log in.
                                </Typography>
                            </div>
                        </div>
                        {isLoading ? (
                            <div className="mt-6 grid gap-3 sm:grid-cols-3">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div key={i} className="animate-pulse !rounded-none border border-border/50 bg-card p-6">
                                        <div className="h-12 w-12 bg-muted rounded-full mb-4" />
                                        <div className="h-5 bg-muted rounded w-3/4 mb-3" />
                                        <div className="h-4 bg-muted rounded w-full mb-2" />
                                        <div className="h-4 bg-muted rounded w-5/6 mb-4" />
                                        <div className="h-9 bg-muted rounded w-32" />
                                    </div>
                                ))}
                            </div>
                        ) : modules.length > 0 ? (
                            <div className="mt-6 grid gap-3 sm:grid-cols-3">
                                {modules.map((module) => {
                                    const Icon = resolveIcon(module.image, Package);
                                    return (
                                        <ModuleCard
                                            key={module.id}
                                            icon={Icon}
                                            title={module.title}
                                            description={module.description}
                                            readMoreHref="/mlm-software-modules/"
                                        />
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="mt-6 text-center text-muted-foreground">
                                {homeSection.noModulesText}
                            </div>
                        )}
                    </div>
                    <InfoCtaBox
                        icon={Rocket}
                        text={
                            <Typography variant="p" as="span">
                                {homeSection.sandboxText}{' '}
                                <span className="font-semibold text-foreground">{homeSection.sandboxHours}</span>.
                            </Typography>
                        }
                        buttonText={homeSection.exploreAllModules}
                        buttonHref="/mlm-software-modules/"
                    />
                </div>
            </div>
        </Section>
    );
}
