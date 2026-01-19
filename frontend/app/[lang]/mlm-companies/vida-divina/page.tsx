import type { CSSProperties, ComponentType } from "react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { buildLocalizedPath } from "@/lib/locale-links";
import { isSupportedLocale } from "@/lib/i18n-utils";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Droplet,
  Globe2,
  HeartPulse,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import { ChartLineUp, ClipboardText, DeviceMobile, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type ImpactMetric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type BrandPillar = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type FieldMotion = {
  stage: string;
  narrative: string;
  enablement: string;
  icon: IconType;
};

type Watchpoint = {
  title: string;
  risk: string;
  mitigation: string;
  icon: IconType;
};

type CloudPlay = {
  title: string;
  description: string;
  outcome: string;
  icon: IconType;
};

const IMPACT_METRICS: ImpactMetric[] = [
  {
    label: "Founded",
    value: "2016",
    detail: "Armand and Esther Puyolt launched Vida Divina to blend wellness, culture, and opportunity.",
    icon: Award
  },
  {
    label: "Signature products",
    value: "Ganoderma • Detox teas • Weight management",
    detail: "Sourced from proprietary farms and formulated with premium botanicals.",
    icon: Droplet
  },
  {
    label: "Affiliate community",
    value: "200K+ entrepreneurs",
    detail: "Thriving in the United States, Latin America, and the Caribbean.",
    icon: Users
  },
  {
    label: "Compensation",
    value: "Binary hybrid",
    detail: "Retail profits, fast-start, team commissions, and lifestyle rewards tied to verified volume.",
    icon: ChartLineUp
  },
  {
    label: "Philanthropy",
    value: "Vida Divina Cares",
    detail: "Community outreach, disaster relief, and scholarship initiatives.",
    icon: Sparkles
  }
];

const BRAND_PILLARS: BrandPillar[] = [
  {
    title: "Holistic wellness",
    description:
      "Organic teas, metabolic support, skincare, and functional coffee crafted for daily rituals.",
    proof: "Products sourced from Vida Divina’s own plantations and GMP-certified facilities.",
    icon: HeartPulse
  },
  {
    title: "Familia first culture",
    description:
      "Leadership events, recognition, and community philanthropy celebrate Latino heritage and inclusivity.",
    proof: "Annual Vida Divina conventions and outreach programmes across Latin America.",
    icon: UsersThree
  },
  {
    title: "Compliance commitment",
    description:
      "Income disclosures, product education, and multilingual training protect affiliates and customers.",
    proof: "Compliance updates and onboarding modules issued for each expansion market.",
    icon: ShieldCheck
  }
];

const FIELD_MOTIONS: FieldMotion[] = [
  {
    stage: "Craft wellness journeys",
    narrative:
      "Affiliates assess energy, detox, and beauty goals before recommending daily ritual bundles.",
    enablement: "Digital wellness quizzes, sample protocols, and transformation story templates.",
    icon: ClipboardText
  },
  {
    stage: "Host soulful experiences",
    narrative:
      "Pop-up cafés, virtual sabores nights, and community challenges keep customers engaged and referring.",
    enablement: "Event automation, bilingual content, and loyalty rewards dashboards.",
    icon: DeviceMobile
  },
  {
    stage: "Mentor prosperity with purpose",
    narrative:
      "Leadership pods blend business coaching, compliance refreshers, and philanthropic projects.",
    enablement: "Performance insights, compliance nudges, and Vida Divina Cares project kits.",
    icon: UsersThree
  }
];

const WATCHPOINTS: Watchpoint[] = [
  {
    title: "Quality assurance",
    risk: "Rapid growth demands rigorous batch testing and transparent sourcing.",
    mitigation: "Integrate lot tracking, publish lab results, and automate recall alerts if needed.",
    icon: ShieldCheck
  },
  {
    title: "Storytelling accuracy",
    risk: "Wellness claims must stay compliant across multilingual markets.",
    mitigation: "Centralise approved stories, require disclaimers, and monitor live events with AI transcription.",
    icon: Sparkles
  },
  {
    title: "Logistics harmony",
    risk: "Cross-border demand can pressure fulfilment during peak promotions.",
    mitigation: "Predict volume surges, surface local pickup options, and communicate delivery milestones clearly.",
    icon: Globe2
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Ritual recommendation engine",
    description:
      "Pairs customer goals with detox, nutrition, and beauty routines plus follow-up reminders.",
    outcome: "Improves retention and sets realistic expectations from day one.",
    icon: HeartPulse
  },
  {
    title: "Compliance storyteller",
    description:
      "Bilingual content hub with approved claims, income disclosures, and event scripts.",
    outcome: "Keeps brand voice consistent while protecting affiliates worldwide.",
    icon: ShieldCheck
  },
  {
    title: "Impact dashboard",
    description:
      "Tracks community projects, donations, and transformation testimonies for PR and leadership.",
    outcome: "Showcases purpose-driven results and fuels expansion pitches.",
    icon: Sparkles
  },
  {
    title: "Leader telemetry",
    description:
      "Monitors coaching depth, digital adoption, and market momentum to target support.",
    outcome: "Guides resource allocation and highlights emerging markets early.",
    icon: UsersThree
  }
];

const PRIMARY_TRUST_SCORE = {
  score: 63,
  label: "Wellness trust index",
  summary: "Combines product quality, cultural authenticity, and regulatory readiness across Vida Divina markets."
};

const GAUGE_STYLE: CSSProperties = {
  background: `conic-gradient(#eab308 ${PRIMARY_TRUST_SCORE.score * 3.6}deg, rgba(234, 179, 8, 0.25) 0deg)`
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Vida Divina Wellness & Community Blueprint";
  const description =
    "Review Vida Divina’s wellness heritage, community-first culture, and the Cloud MLM Software plays that keep affiliates empowered and compliant.";
  const keywords = [
    "Vida Divina MLM analysis",
    "Vida Divina compensation plan",
    "Latino wellness direct selling",
    "detox tea direct sales",
    "Cloud MLM Software wellness"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/vida-divina", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type VidaDivinaPageProps = {
  params: { lang: SupportedLocale };
};

export default function VidaDivinaPage({ params }: VidaDivinaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const indexHref = buildLocalizedPath("/mlm-companies", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-rose-900 to-amber-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(250,204,21,0.28),transparent_55%),radial-gradient(circle_at_82%_28%,rgba(244,114,182,0.3),transparent_58%)]" />
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.55fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-amber-500/10 px-4 py-1 text-sm font-semibold text-amber-100">
              Vida Divina • Wellness & familia
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Celebrate culture, share wellness, and build prosperity with purpose.
            </h1>
            <p className="text-base text-amber-50/80">
              Vida Divina’s success flows from soulful branding, premium botanicals, and community-first leadership. Pair that DNA
              with data, compliance, and automation that keep expansion inspired.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={demoHref}>
                  Explore the wellness cockpit
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-amber-200/60 text-amber-100 hover:bg-amber-500/10"
              >
                <Link href={pricingHref}>
                  Review technology bundles
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-amber-100 underline underline-offset-4 hover:bg-white/10">
                <Link href={indexHref}>
                  Return to MLM company index
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="space-y-2 text-sm text-amber-50/80">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-200" aria-hidden />
                Ontario, California • Thriving across the Americas
              </p>
              <p>
                “Familia, sabor, y resultados. When our systems honour those values, every affiliate carries the flame further.”
              </p>
            </div>
          </div>

          <aside className="grid gap-6 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-xl backdrop-blur">
            <div className="flex flex-col items-center gap-5 rounded-2xl border border-white/25 bg-black/30 p-6 text-center">
              <div className="relative flex h-44 w-44 items-center justify-center rounded-full p-4" style={GAUGE_STYLE} aria-hidden>
                <div className="absolute inset-6 flex flex-col items-center justify-center rounded-full bg-black/40 text-center shadow-lg">
                  <span className="text-4xl font-semibold text-white">{PRIMARY_TRUST_SCORE.score}</span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-amber-100/80">
                    {PRIMARY_TRUST_SCORE.label}
                  </span>
                </div>
              </div>
              <p className="text-xs text-amber-50/80">{PRIMARY_TRUST_SCORE.summary}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {IMPACT_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex h-full flex-col gap-3 rounded-2xl border border-white/20 bg-black/30 p-4 shadow-sm transition hover:-translate-y-1 hover:bg-black/40"
                  >
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/20 text-amber-100">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-amber-100/80">{metric.label}</span>
                    </div>
                    <span className="text-lg font-semibold text-white">{metric.value}</span>
                    <p className="text-xs text-amber-50/80">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 rounded-3xl border border-primary/15 bg-gradient-to-br from-amber-50 via-white to-rose-50 p-10 dark:border-primary/10 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Pillars that keep Vida Divina thriving</h2>
            <p className="text-sm text-muted-foreground">
              Use these themes to ground every launch, rally, and community project in what makes the brand unforgettable.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {BRAND_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/70"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground">{pillar.description}</p>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {pillar.proof}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.6fr)]">
          <div className="space-y-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Field motions for soulful growth</h2>
              <p className="text-sm text-muted-foreground">
                Keep affiliates inspired and responsible by choreographing journeys that honour wellness, wealth, and familia.
              </p>
            </div>
            <div className="space-y-5">
              {FIELD_MOTIONS.map((motion) => {
                const Icon = motion.icon;
                return (
                  <article
                    key={motion.stage}
                    className="flex gap-4 rounded-3xl border border-primary/20 bg-primary/5 p-5 dark:border-primary/15 dark:bg-primary/10"
                  >
                    <span className="mt-1 inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary shadow dark:bg-slate-950/60">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{motion.stage}</h3>
                      <p className="text-sm text-muted-foreground">{motion.narrative}</p>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                        {motion.enablement}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Watchpoints to manage</h2>
              <p className="text-sm text-muted-foreground">
                Stay ahead of the realities a culture-rich wellness brand navigates across the Americas.
              </p>
            </div>
            <div className="space-y-5">
              {WATCHPOINTS.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="flex gap-4 rounded-3xl border border-primary/25 bg-primary/5 p-5 dark:border-primary/20 dark:bg-primary/10"
                  >
                    <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary shadow dark:bg-slate-950/60">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.risk}</p>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                        {item.mitigation}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-8 rounded-3xl border border-border/60 bg-background p-10 shadow-sm dark:border-border/40 dark:bg-slate-950/80">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.6fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Cloud MLM Software activations for Vida Divina
            </h2>
            <p className="text-sm text-muted-foreground">
              Build a platform that honours cultura while keeping compliance and analytics at centre stage.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Design my Vida Divina roadmap
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href={demoHref}>
                  Schedule a guided demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {CLOUD_PLAYS.map((play) => {
              const Icon = play.icon;
              return (
                <article
                  key={play.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                  <p className="text-sm text-muted-foreground">{play.description}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {play.outcome}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

