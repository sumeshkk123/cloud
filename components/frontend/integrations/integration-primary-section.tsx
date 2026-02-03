import type { ComponentType } from "react";
import { Plug, Zap, Shield, Globe } from "lucide-react";
import type { Locale } from "@/i18n-config";
import { SectionTitle } from "@/components/ui/section-title";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { BulletList } from "@/components/ui/bullet-list";
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
        <Section variant="primary" padding="xl" className="relative isolate !overflow-visible">
            {/* Floating orbs */}
            <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse -z-10" />
            <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse -z-10" style={{ animationDelay: '1s' }} />

            <div className="relative container z-10 space-y-16">
                {/* Header */}
                <SectionTitle
                    badge="Integration Categories"
                    heading={t.heading}
                    description={t.description}
                    centered={true}
                    maxWidth="3xl"
                />

                {/* Integration Categories */}
                <div className="grid gap-6 lg:gap-10 lg:grid-cols-2">
                    {INTEGRATION_CATEGORIES.map((category, index) => {
                        const Icon = icons[index] || Plug;
                        return (
                            <Card key={category.title} className="p-4">
                                <CardHeader>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <Icon className="h-7 w-7" aria-hidden />
                                            </span>
                                            <div className="flex-1">
                                                <Typography as="h4" variant="h4">
                                                    {category.title}
                                                </Typography>
                                                <Typography as="p" variant="p" textColor="muted" className="mt-2">
                                                    {category.description}
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <BulletList items={category.bullets} />
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
