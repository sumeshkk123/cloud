import type { Locale } from "@/i18n-config";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { ArrowRight, CheckCircle2, Users, Zap } from "lucide-react";
import { getMlmCompaniesContent } from "@/lib/mlm-companies";

interface MlmCompaniesImplementationSectionProps {
    locale?: Locale;
}

export function MlmCompaniesImplementationSection({ locale = "en" }: MlmCompaniesImplementationSectionProps) {
    const t = getMlmCompaniesContent(locale).implementationSection;

    return (
        <Section variant="gradient" padding="lg">
            <div className="container space-y-12">
                <SectionTitle
                    heading={t.heading}
                    description={t.description}
                    maxWidth="3xl"
                />
                <div className="grid gap-8 lg:grid-cols-2">
                    {t.steps.map((step, index) => (
                        <div key={index} className="flex gap-6">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground group transition-transform duration-200 ease-in-out hover:translate-x-1 hover:translate-y-1">
                                {index === 0 && <Users className="h-6 w-6 group-hover:translate-x-1 group-hover:translate-y-1" />}
                                {index === 1 && <Zap className="h-6 w-6 group-hover:translate-x-1 group-hover:translate-y-1" />}
                                {index === 2 && <CheckCircle2 className="h-6 w-6 group-hover:translate-x-1 group-hover:translate-y-1" />}
                                {index === 3 && <ArrowRight className="h-6 w-6 group-hover:translate-x-1 group-hover:translate-y-1" />}
                            </div>
                            <div className="space-y-3">
                                <Typography as="h3" variant="h5" className="font-semibold">
                                    {step.title}
                                </Typography>
                                <Typography as="p" variant="small" textColor="muted">
                                    {step.description}
                                </Typography>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
