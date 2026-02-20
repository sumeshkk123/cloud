import type { Locale } from "@/i18n-config";
import { GradientCtaSection } from "@/components/frontend/common/gradient-cta-section";
import { getMlmCompaniesContent } from "@/lib/mlm-companies";

interface MlmCompaniesCtaSectionProps {
    locale: Locale;
    contactHref: string;
    demoHref: string;
}

export function MlmCompaniesCtaSection({ locale, contactHref, demoHref }: MlmCompaniesCtaSectionProps) {
    const t = getMlmCompaniesContent(locale).ctaSection;

    // Default CTA content matching MLM plans structure
    const ctaContent: Record<Locale, {
        title: string;
        description: string;
        primaryButton: string;
        secondaryButton: string;
        trustIndicators: [string, string, string];
    }> = {
        en: {
            title: t.heading,
            description: t.description,
            primaryButton: t.buttonText,
            secondaryButton: "Explore MLM resources",
            trustIndicators: [
                "100+ Companies",
                "Expert Support",
                "Proven Results"
            ] as [string, string, string],
        },
        es: {
            title: t.heading,
            description: t.description,
            primaryButton: t.buttonText,
            secondaryButton: "Explorar recursos MLM",
            trustIndicators: [
                "100+ Empresas",
                "Soporte Experto",
                "Resultados Probados"
            ] as [string, string, string],
        },
        fr: {
            title: t.heading,
            description: t.description,
            primaryButton: t.buttonText,
            secondaryButton: "Explorer les ressources MLM",
            trustIndicators: [
                "100+ Entreprises",
                "Support d'Expert",
                "Résultats Prouvés"
            ] as [string, string, string],
        },
        it: {
            title: t.heading,
            description: t.description,
            primaryButton: t.buttonText,
            secondaryButton: "Esplora risorse MLM",
            trustIndicators: [
                "100+ Aziende",
                "Supporto Esperto",
                "Risultati Comprovati"
            ] as [string, string, string],
        },
        de: {
            title: t.heading,
            description: t.description,
            primaryButton: t.buttonText,
            secondaryButton: "MLM-Ressourcen erkunden",
            trustIndicators: [
                "100+ Unternehmen",
                "Expertenunterstützung",
                "Bewährte Ergebnisse"
            ] as [string, string, string],
        },
        pt: {
            title: t.heading,
            description: t.description,
            primaryButton: t.buttonText,
            secondaryButton: "Explorar recursos MLM",
            trustIndicators: [
                "100+ Empresas",
                "Suporte Especialista",
                "Resultados Comprovados"
            ] as [string, string, string],
        },
        zh: {
            title: t.heading,
            description: t.description,
            primaryButton: t.buttonText,
            secondaryButton: "探索MLM资源",
            trustIndicators: [
                "100+公司",
                "专家支持",
                "经过验证的结果"
            ] as [string, string, string],
        },
    };

    const cta = ctaContent[locale] || ctaContent.en;

    return (
        <GradientCtaSection
            title={cta.title}
            description={cta.description}
            primaryButton={{ text: cta.primaryButton, href: contactHref }}
            primaryButtonOpensDemoModal={{ source: "mlm-companies", subheading: "From: MLM Companies CTA section", locale }}
            secondaryButton={{ text: cta.secondaryButton, href: demoHref, openInNewTab: true }}
            trustIndicators={cta.trustIndicators}
        />
    );
}
