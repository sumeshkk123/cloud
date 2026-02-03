import type { ComponentType } from "react";
import { Plug, Zap, Shield, Globe } from "lucide-react";
import type { Locale } from "@/i18n-config";
import { ModulePrimaryCard } from "@/components/frontend/common/module-primary-card";
import { SectionTitle } from "@/components/ui/section-title";
import { Section } from "@/components/ui/section";
import { getIntegrationsContent } from "@/lib/integrations";

type IconType = ComponentType<{ className?: string }>;

// Icons array for integration categories
const icons: IconType[] = [Plug, Zap, Shield, Globe];

interface IntegrationPrimarySectionProps {
    locale: Locale;
}

const INTEGRATION_CATEGORIES = [
    {
        title: "Payment Gateways",
        description: "Connect with leading payment processors for seamless transactions",
        bullets: [
            "Stripe, PayPal, Square integration",
            "Multi-currency support",
            "Secure payment processing"
        ]
    },
    {
        title: "CRM Systems",
        description: "Sync data with popular CRM platforms",
        bullets: [
            "Salesforce, HubSpot integration",
            "Contact synchronization",
            "Lead management"
        ]
    },
    {
        title: "Marketing Tools",
        description: "Integrate with marketing automation platforms",
        bullets: [
            "Mailchimp, SendGrid integration",
            "Email campaign management",
            "Marketing analytics"
        ]
    },
    {
        title: "E-commerce Platforms",
        description: "Connect with online store platforms",
        bullets: [
            "Shopify, WooCommerce integration",
            "Product synchronization",
            "Order management"
        ]
    }
];

export function IntegrationPrimarySection({ locale }: IntegrationPrimarySectionProps) {
    const t = getIntegrationsContent(locale).primarySection;

    return (
        <Section variant="secondary" padding="md" containerClassName="space-y-10">
            <SectionTitle
                badge="Integration Categories"
                heading={t.heading}
                description={t.description}
                maxWidth="3xl"
            />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {INTEGRATION_CATEGORIES.map((category, index) => {
                    const Icon = icons[index] || Plug;
                    return (
                        <ModulePrimaryCard
                            key={category.title}
                            icon={Icon}
                            title={category.title}
                            description={category.description}
                            bullets={category.bullets}
                        />
                    );
                })}
            </div>
        </Section>
    );
}
