'use client';

import type { ComponentType } from "react";
import { Sparkles, Rocket } from "lucide-react";
import * as RemixIcon from "@remixicon/react";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { InfoCtaBox } from "@/components/ui/info-cta-box";
import { ModuleCard } from "@/components/common/module-card";

type RemixIconType = ComponentType<{ className?: string }>;

const PROGRAM_PILLARS: Array<{ title: string; description: string; icon: RemixIconType; href: string }> = [
    {
        title: "Blueprint stacks",
        description: "Industry-specific templates covering comp plans, ecommerce, and regulatory must-haves.",
        icon: RemixIcon.RiStackFill,
        href: "/mlm-software-modules/"
    },
    {
        title: "AI configuration co-pilot",
        description: "Simulate payouts, surface anomalies, and auto-generate workflows pre-launch.",
        icon: RemixIcon.RiThunderstormsFill,
        href: "/mlm-software-modules/"
    },
    {
        title: "Mobile-first execution",
        description: "Deliver native apps and portals with analytics, push journeys, and commerce baked in.",
        icon: RemixIcon.RiSmartphoneFill,
        href: "/mlm-software-modules/"
    },
    {
        title: "Blueprint stacks",
        description: "Industry-specific templates covering comp plans, ecommerce, and regulatory must-haves.",
        icon: RemixIcon.RiStackFill,
        href: "/mlm-software-modules/"
    },
    {
        title: "AI configuration co-pilot",
        description: "Simulate payouts, surface anomalies, and auto-generate workflows pre-launch.",
        icon: RemixIcon.RiThunderstormsFill,
        href: "/mlm-software-modules/"
    },
    {
        title: "Mobile-first execution",
        description: "Deliver native apps and portals with analytics, push journeys, and commerce baked in.",
        icon: RemixIcon.RiSmartphoneFill,
        href: "/mlm-software-modules/"
    }
];

export function MlmSoftwareModules() {
    return (
        <section className="relative isolate overflow-hidden bg-background py-20">


            <div className="container relative">
                <div className="space-y-10">
                    <SectionTitle
                        badge="Core modules"
                        heading="Build the Cloud MLM platform your network can scale on"
                        description="Select finance, field, growth, and compliance capabilities on one unified backbone. Each module sits on shared data so expansion, governance, and distributor experiences stay in sync."
                    />
                    <div className="rounded-3xl border border-border/50 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-900 p-10 shadow-[0_40px_110px_-80px_rgba(15,23,42,0.35)] backdrop-blur dark:bg-card/60 overflow-hidden">
                        <div
                            className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.18),transparent_55%)]"
                            aria-hidden
                        />
                        <div className="flex items-start gap-4">
                            <div className="flex flex-none items-center justify-center rounded-2xl bg-primary/10 p-3 text-primary">
                                <Sparkles className="h-6 w-6" />
                            </div>
                            <div className="space-y-3">

                                <Typography as="h3" variant="h4" className="text-xl font-semibold text-foreground">Guided launch playbooks</Typography>
                                <Typography variant="p" className="text-sm leading-6 text-muted-foreground">
                                    Solution architects and AI automations pair up to design your stack, migrate data, and validate compensation flows before distributors ever log in.
                                </Typography>
                            </div>
                        </div>
                        <div className="mt-6 grid gap-4 sm:grid-cols-3">
                            {PROGRAM_PILLARS.map((pillar, index) => {
                                const Icon = pillar.icon;
                                return (
                                    <ModuleCard
                                        key={`${pillar.title}-${index}`}
                                        icon={Icon}
                                        title={pillar.title}
                                        description={pillar.description}
                                        readMoreHref={pillar.href}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <InfoCtaBox
                        icon={Rocket}
                        text={
                            <>
                                Guided sandbox environments ready in <span className="font-semibold text-foreground">48 hours</span>.
                            </>
                        }
                        buttonText="Explore all modules"
                        buttonHref="/mlm-software-modules/"
                    />
                </div>
            </div>
        </section>
    );
}
