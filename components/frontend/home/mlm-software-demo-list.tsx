import Link from "next/link";
import type { Locale } from "@/i18n-config";
import type { HomepageContent } from "@/types/homepage";
import type { LucideIcon } from "lucide-react";
import { resolveIcon } from "./utils";
import { localizedHref } from "./utils";
import { Users, Compass, Play, CircleDollarSign, Rocket, CheckCircle, Sparkles, CalendarCheck } from "lucide-react";
import { InfoCtaBox } from "@/components/ui/info-cta-box";
import { Play as PlayIcon } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import Image from "next/image";

export function MlmSoftwareDemoList({ locale, data }: { locale: Locale; data: HomepageContent["demoSection"] }) {
    const touchpoints = data?.touchpoints ?? [];
    const primaryHighlights = touchpoints.slice(0, 2);
    const additionalHighlights = touchpoints.slice(2);
    const highlightFallbacks = [
        {
            label: "Guided walkthrough",
            description: "Compensation specialists tailor the sandbox to your plan logic.",
            icon: Users
        },
        {
            label: "Launch roadmap",
            description: "Migration, compliance, and training milestones mapped out in days.",
            icon: Compass
        }
    ];
    const bulletFallbacks = [
        "Sandbox access for wallets, genealogy, analytics, and automation.",
        "Demo assets documented so stakeholders can review on their schedule."
    ];
    const secondaryCtas = data?.secondaryCtas ?? [];

    const resolveCtaIcon = (label: string, index: number): LucideIcon => {
        const normalized = label.toLowerCase();
        if (normalized.includes("sandbox")) return Play;
        if (normalized.includes("pricing")) return CircleDollarSign;
        if (normalized.includes("plan") || normalized.includes("roadmap")) return Compass;
        if (normalized.includes("demo")) return Rocket;
        return [Play, CircleDollarSign, Rocket][index] ?? Rocket;
    };

    return (

        <div className="rounded-3xl border border-border/40 bg-card/95 px-10 py-16 backdrop-blur-lg mt-5">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="space-y-8">
                    <SectionTitle
                        badge={data?.badgeLabel ?? "Cloud MLM software demo"}
                        heading={data?.heading ?? "See your compensation plan live inside Cloud MLM Software"}
                        description={data?.description ?? "Share plan rules, product catalogue, and launch regions. We configure a working MLM software demo with payouts, dashboards, and distributor journeys tuned to your market."}
                        centered={false}
                    />
                    <div className="rounded-2xl border border-border/40 bg-primary px-6 py-5 dark:bg-primary/15">
                        <h3 className="text-sm font-semibold uppercase  text-white">Why teams book</h3>
                        <ul className="mt-3 space-y-2 text-sm text-white">
                            <li className="flex gap-2">
                                <CheckCircle className="mt-1 h-4 w-4 flex-none" />
                                Side-by-side comparison of your current stack versus Cloud MLM Software.
                            </li>
                            <li className="flex gap-2">
                                <CheckCircle className="mt-1 h-4 w-4 flex-none" />
                                Distributor personas preloaded for collaborative testing and feedback.
                            </li>
                            <li className="flex gap-2">
                                <CheckCircle className="mt-1 h-4 w-4 flex-none" />
                                Playbook with migration, automation, and content recommendations delivered fast.
                            </li>
                        </ul>
                    </div>


                </div>
                <div className="pt-5">
                    <div className="relative mt-4 md:mt-0 bg-primary/10 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 shadow-lg">
                        <Image src="/mlm-software-demo.webp"
                            alt="MLM Software Demo List"
                            className="w-full h-full object-cover"
                            width={500}
                            height={500}
                        />
                    </div>

                </div>
            </div>
            <div className="mt-10">
                <InfoCtaBox
                    icon={PlayIcon}
                    text={
                        <>
                            Experience Cloud MLM Software with a personalized demo tailored to your business needs.
                        </>
                    }
                    buttonText="Explore all demos"
                    buttonHref="/free-mlm-software-demo/"
                />
            </div>
        </div>

    );
}
