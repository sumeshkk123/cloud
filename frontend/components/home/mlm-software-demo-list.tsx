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
        <div className="container mt-5">
            <div className="rounded-3xl border border-border/40 bg-card/95 px-10 py-16 backdrop-blur-lg">
                <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="space-y-8">
                        <SectionTitle
                            badge={data?.badgeLabel ?? "Cloud MLM software demo"}
                            heading={data?.heading ?? "See your compensation plan live inside Cloud MLM Software"}
                            description={data?.description ?? "Share plan rules, product catalogue, and launch regions. We configure a working MLM software demo with payouts, dashboards, and distributor journeys tuned to your market."}
                            centered={false}
                        />
                        <div className="grid gap-4 sm:grid-cols-2">
                            {(primaryHighlights.length > 0 ? primaryHighlights : highlightFallbacks).map((item, index) => {
                                const fallback = highlightFallbacks[index] ?? highlightFallbacks[0];
                                const label = item?.label ?? fallback.label;
                                const description = item?.description ?? fallback.description;
                                const Icon = resolveIcon((item as any)?.icon, fallback.icon);
                                return (
                                    <div key={`${label}-${index}`} className="rounded-2xl border border-border/50 bg-card/85 px-5 py-4">
                                        <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                                            <Icon className="h-4 w-4 text-primary" /> {label}
                                        </p>
                                        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
                                    </div>
                                );
                            })}
                        </div>


                    </div>
                    <div className="space-y-5">

                        <div className="rounded-2xl border border-border/40 bg-primary/10 px-6 py-5 dark:bg-primary/15">
                            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary dark:text-primary-foreground">Why teams book</h3>
                            <ul className="mt-3 space-y-2 text-sm text-muted-foreground dark:text-primary-foreground/80">
                                <li className="flex gap-2">
                                    <CheckCircle className="mt-1 h-4 w-4 flex-none text-primary dark:text-primary-foreground" />
                                    Side-by-side comparison of your current stack versus Cloud MLM Software.
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="mt-1 h-4 w-4 flex-none text-primary dark:text-primary-foreground" />
                                    Distributor personas preloaded for collaborative testing and feedback.
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="mt-1 h-4 w-4 flex-none text-primary dark:text-primary-foreground" />
                                    Playbook with migration, automation, and content recommendations delivered fast.
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href={localizedHref(locale, data?.primaryCta?.href ?? "/free-mlm-software-demo")}
                                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90"
                            >
                                <Rocket className="h-4 w-4" />
                                {data?.primaryCta?.label ?? "Request your MLM software demo"}
                            </Link>
                            {secondaryCtas.map((cta, index) => {
                                const Icon = resolveCtaIcon(cta.label, index);
                                return (
                                    <Link
                                        key={`${cta.href}-${cta.label}`}
                                        href={localizedHref(locale, cta.href)}
                                        className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${index === 0
                                            ? "border border-primary/30 text-primary hover:border-primary"
                                            : "border border-border text-foreground hover:border-primary hover:text-primary"
                                            }`}
                                    >
                                        <Icon className="h-4 w-4" />
                                        {cta.label}
                                    </Link>
                                );
                            })}
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
        </div>
    );
}
