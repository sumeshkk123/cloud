import type { ComponentType } from "react";
import { Layers, Megaphone, PackageSearch, Users } from "lucide-react";
import type { Locale } from "@/i18n-config";
import { getModulesContent } from "@/lib/modules";
import { SectionTitle } from "@/components/ui/section-title";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { BulletList } from "@/components/ui/bullet-list";

type IconType = ComponentType<{ className?: string }>;

// Icons array in order matching the modules array
const icons: IconType[] = [Layers, Users, Megaphone, PackageSearch];

interface ModulesPrimarySectionProps {
    locale: Locale;
}

export function ModulesPrimarySection({ locale }: ModulesPrimarySectionProps) {
    const t = getModulesContent(locale).primarySection;

    return (
        <Section variant="primary" padding="xl" className="relative isolate !overflow-visible">
            {/* Floating orbs */}
            <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse -z-10" />
            <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse -z-10" style={{ animationDelay: '1s' }} />

            <div className="relative container z-10 space-y-16">
                {/* Header */}
                <SectionTitle
                    badge="Core Modules"
                    heading={t.heading}
                    description={t.description}
                    centered={true}
                    maxWidth="3xl"
                />

                {/* Modules Grid */}
                <div className="grid gap-6 lg:gap-10 lg:grid-cols-2">
                    {t.modules.map((module, index) => {
                        const Icon = icons[index] || Layers;
                        return (
                            <Card key={module.title} className="p-4">
                                <CardHeader>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <Icon className="h-7 w-7" aria-hidden />
                                            </span>
                                            <div className="flex-1">
                                                <Typography as="h4" variant="h4">
                                                    {module.title}
                                                </Typography>
                                                <Typography as="p" variant="p" textColor="muted" className="mt-2">
                                                    {module.description}
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <BulletList items={module.bullets} />
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}
