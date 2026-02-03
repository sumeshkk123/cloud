import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, CalendarClock, FileText, HeartPulse, Landmark, ShieldCheck, Sparkles, Users, Wallet } from "lucide-react";
import { ChartLineUp, GlobeHemisphereEast, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  title: string;
  value: string;
  description: string;
  icon: IconType;
};

type PromiseItem = {
  title: string;
  body: string;
  proof: string;
  icon: IconType;
};

type Journey = {
  stage: string;
  detail: string;
};

type CloudPlay = {
  title: string;
  description: string;
  highlight: string;
  icon: IconType;
};

const METRICS: Metric[] = [
  {
    title: "Revenue",
    value: "$195M",
    description: "Insurance-first network marketing with steady growth across Japan.",
    icon: ChartLineUp
  },
  {
    title: "Founded",
    value: "1994",
    description: "Established in Fukuoka with the ambition to democratise protection and wealth planning.",
    icon: CalendarClock
  },
  {
    title: "Employees",
    value: "410+",
    description: "Advisors, compliance specialists, and trainer networks supporting hybrid agency teams.",
    icon: Users
  }
];

const PROMISES: PromiseItem[] = [
  {
    title: "Holistic protection",
    body: "KK Assuran designs insurance solutions that mix life, critical illness, and family-focused coverage.",
    proof: "Consultants operate as trusted advisors guiding customers through life milestones with empathy.",
    icon: ShieldCheck
  },
  {
    title: "Beauty & wellness adjacency",
    body: "From skincare to personal care, lifestyle products keep the brand present in daily routines.",
    proof: "Cross-selling empowers consultants to serve whole households rather than one-off policies.",
    icon: Sparkles
  },
  {
    title: "Financial literacy uplift",
    body: "Training covers wealth preservation, micro-investing, and retirement readiness.",
    proof: "Academies blend compliance, sales psychology, and community-building for sustainable income.",
    icon: Wallet
  }
];

const JOURNEY_STEPS: Journey[] = [
  {
    stage: "Discover",
    detail: "Map client aspirations, health profiles, and risk tolerance with digital questionnaires and coaching."
  },
  {
    stage: "Recommend",
    detail: "Bundle protection policies with beauty or wellness add-ons to keep customers engaged year-round."
  },
  {
    stage: "Protect",
    detail: "Automate renewals, claims updates, and policy reviews with AI nudges and compliance guardrails."
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Advisor compliance cockpit",
    description: "Automate suitability checks, documentation, and regulatory workflows for Japanese insurance standards.",
    highlight: "Audit trails, AI red flags, and supervisor approvals keep consultants on the right side of the law.",
    icon: FileText
  },
  {
    title: "Hybrid product marketplace",
    description: "Showcase insurance packages alongside beauty and wellness subscription kits in one headless storefront.",
    highlight: "Localized payments and dynamic bundles increase lifetime value per household.",
    icon: Landmark
  },
  {
    title: "Customer well-being graph",
    description: "Visualise protection coverage, wellness habits, and savings progress to personalise outreach.",
    highlight: "Consultants get 360° insights before every appointment or virtual review.",
    icon: HeartPulse
  },
  {
    title: "Advisor guild platform",
    description: "Track mentor circles, collaborative planning, and regional performance in real time.",
    highlight: "Recognition, playbooks, and knowledge bases keep culture strong across prefectures.",
    icon: UsersThree
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "KK Assuran Insurance Network Profile";
  const description =
    "See how Japan’s KK Assuran merges insurance protection, beauty care, and financial literacy—and how Cloud MLM Software replicates that trusted advisor experience.";
  const keywords = [
    "KK Assuran",
    "Japanese MLM insurance",
    "KK Assuran compensation review",
    "Financial protection direct selling",
    "Cloud MLM Software insurance enablement"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/kk-assuran", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type KkAssuranPageProps = {
  params: { lang: SupportedLocale };
};

export default function KkAssuranPage({ params }: KkAssuranPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-emerald-200/50 bg-gradient-to-br from-[#051314] via-[#1a2a2c] to-[#2e221d] py-20 text-white dark:border-emerald-200/30">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.25),transparent_55%),radial-gradient(circle_at_80%_24%,rgba(234,179,8,0.24),transparent_60%),radial-gradient(circle_at_52%_90%,rgba(59,130,246,0.18),transparent_58%)]"
          aria-hidden
        />
        <div className="container grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-100">
              #— • KK Assuran (Fukuoka, Japan)
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Insurance stewardship with lifestyle elegance.
              </h1>
              <p className="text-base text-white/80">
                KK Assuran empowers consultants to deliver financial security, beauty, and wellness in concert. Transform your advisory
                capabilities with insights from Japan’s trusted protection network.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={demoHref}>
                  Launch the AI advisor demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-white/15 text-emerald-100 hover:bg-white/25">
                <Link href={pricingHref}>
                  Explore solution tiers
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                <Link href={contactHref}>
                  Talk to an insurance architect
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-5 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/70">Signal boosters</span>
              <p className="text-lg font-semibold text-white">
                Indicators that keep KK Assuran relevant in Japan’s crowded financial services landscape.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article key={metric.title} className="flex h-full flex-col gap-2 rounded-2xl border border-white/15 bg-black/40 p-4">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <p className="text-xs uppercase tracking-widest text-white/60">{metric.title}</p>
                    <p className="text-2xl font-semibold text-white">{metric.value}</p>
                    <p className="text-xs text-white/70">{metric.description}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Promises that build trust</h2>
          <p className="text-sm text-muted-foreground">
            KK Assuran blends insurance expertise with lifestyle care. Adopt these promises to humanise your own advisory model.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PROMISES.map((promise) => {
            const Icon = promise.icon;
            return (
              <article
                key={promise.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-emerald-50 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-emerald-950/40"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{promise.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{promise.body}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{promise.proof}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-muted/50 py-20 dark:border-border/40 dark:bg-slate-900/60">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(45,212,191,0.16),transparent_55%),radial-gradient(circle_at_80%_24%,rgba(250,204,21,0.16),transparent_60%)]" aria-hidden />
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:border-white/30 dark:bg-white/10 dark:text-white">
              Advisory journey
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Design journeys that reassure families.</h2>
            <p className="text-sm text-muted-foreground">
              Use the KK Assuran choreography to blend discovery, recommendation, and long-term protection.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {JOURNEY_STEPS.map((step) => (
              <article
                key={step.stage}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <h3 className="text-lg font-semibold text-foreground">{step.stage}</h3>
                <p className="text-sm text-muted-foreground">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Cloud MLM Software for protection-first companies
          </h2>
          <p className="text-sm text-muted-foreground">
            Scale your insurance and lifestyle ecosystem with the same discipline KK Assuran applies in Japan.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CLOUD_PLAYS.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{play.description}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{play.highlight}</span>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href={pricingHref}>
              Review pricing
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href={contactHref}>
              Meet a strategy lead
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
