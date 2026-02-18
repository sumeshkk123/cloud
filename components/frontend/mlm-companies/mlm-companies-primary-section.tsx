import type { Locale } from "@/i18n-config";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Shield } from "lucide-react";
import { buildLocalizedPath } from "@/lib/locale-links";
import { getMlmCompaniesContent } from "@/lib/mlm-companies";

interface MlmCompaniesPrimarySectionProps {
    locale: Locale;
}

export function MlmCompaniesPrimarySection({ locale }: MlmCompaniesPrimarySectionProps) {
    const t = getMlmCompaniesContent(locale).primarySection;
    
    const icons = [CheckCircle, TrendingUp, Shield];

    return (
        <Section variant="primary" padding="lg">
            <div className="container space-y-12">
                <SectionTitle
                    heading={t.heading}
                    description={t.description}
                    maxWidth="3xl"
                />
                <div className="grid gap-8 md:grid-cols-3">
                    {t.features.map((feature, index) => {
                        const Icon = icons[index];
                        return (
                            <div key={index} className="group flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary transition-transform duration-200 ease-in-out group-hover:translate-x-1 group-hover:translate-y-1">
                                    <Icon className="h-6 w-6 text-primary transition-colors duration-200 ease-in-out group-hover:text-primary-foreground" />
                                </div>
                                <div className="space-y-2">
                                    <Typography as="h3" variant="h5" className="font-semibold">
                                        {feature.title}
                                    </Typography>
                                    <Typography as="p" variant="small" textColor="muted">
                                        {feature.description}
                                    </Typography>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}
