import type { ComponentType } from "react";
import { Layers, Megaphone, PackageSearch, Users } from "lucide-react";
import type { Locale } from "@/i18n-config";
import { getModulesContent } from "@/lib/modules";
import { ModulePrimaryCard } from "@/components/frontend/common/module-primary-card";
import { SectionTitle } from "@/components/ui/section-title";
import { Section } from "@/components/ui/section";

type IconType = ComponentType<{ className?: string }>;

// Icons array in order matching the modules array
const icons: IconType[] = [Layers, Users, Megaphone, PackageSearch];

interface ModulesPrimarySectionProps {
    locale: Locale;
}

export function ModulesPrimarySection({ locale }: ModulesPrimarySectionProps) {
    const t = getModulesContent(locale).primarySection;

    return (
        <Section variant="secondary" padding="md" containerClassName="space-y-10">
            <SectionTitle
                badge="Core Modules"
                heading={t.heading}
                description={t.description}
                maxWidth="3xl"
            />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {t.modules.map((module, index) => {
                    const Icon = icons[index] || Layers;
                    return (
                        <ModulePrimaryCard
                            key={module.title}
                            icon={Icon}
                            title={module.title}
                            description={module.description}
                            bullets={module.bullets}
                        />
                    );
                })}
            </div>
        </Section>
    );
}
