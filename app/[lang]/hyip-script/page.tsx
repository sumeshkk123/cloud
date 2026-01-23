import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  TrendingUp,
  Compass,
  Gauge,
  Layers,
  LineChart,
  ListChecks,
  ShieldCheck,
  Sparkles,
  Wallet
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroPoint = {
  title: string;
  description: string;
  icon: IconType;
};

type Impact = {
  title: string;
  description: string;
  icon: IconType;
};

type Feature = {
  title: string;
  description: string;
  icon: IconType;
};

type Capability = {
  title: string;
  description: string;
  icon: IconType;
};

const HERO_POINTS: HeroPoint[] = [
  {
    title: "High-yield investment engine",
    description:
      "HYIP software is an advanced software solution designed for operating online investment platforms that promise high returns.",
    icon: Gauge
  },
  {
    title: "Short-cycle growth programmes",
    description:
      "High Yield Investment Programs are gaining popularity because they deliver substantial returns within compressed timelines.",
    icon: TrendingUp
  },
  {
    title: "Integrated with Cloud MLM Software",
    description:
      "Cloud MLM Software now includes an HYIP script so teams can manage investment plans and track earnings alongside their MLM operations.",
    icon: Layers
  }
];

const IMPACTS: Impact[] = [
  {
    title: "Efficient management",
    description: "It simplifies managing complex investment plans and payments, keeping every programme aligned to business rules.",
    icon: Compass
  },
  {
    title: "Tracking and reporting",
    description: "Detailed reports and tracking options give administrators stronger control over performance outcomes.",
    icon: LineChart
  },
  {
    title: "User-friendly operations",
    description: "Both administrators and investors can navigate the platform with ease, removing friction from daily tasks.",
    icon: ListChecks
  }
];

const FEATURES: Feature[] = [
  {
    title: "User-friendly interface",
    description:
      "The HYIP script offers a user-friendly interface that simplifies navigation and operation for every level of technical experience.",
    icon: Sparkles
  },
  {
    title: "Multi-language reach",
    description:
      "To support a global audience, the module provides multi-language options so teams can localise investor journeys without custom code.",
    icon: ShieldCheck
  },
  {
    title: "Modern technology framework",
    description:
      "Built on a PHP MVC framework, the script leverages a dependable technology stack that accelerates deployment and maintenance.",
    icon: Layers
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "MVC framework foundation",
    description:
      "Written in the Model View Controller (MVC) pattern, it helps launch investment websites with minimal coding knowledge.",
    icon: Layers
  },
  {
    title: "Multiple currency support",
    description: "Accommodates global currencies so investors can transact in the payment options that match their market.",
    icon: Wallet
  },
  {
    title: "SMTP configuration",
    description: "Customise Simple Mail Transfer Protocol settings and keep investor communications aligned with corporate policies.",
    icon: ShieldCheck
  },
  {
    title: "Automated payment systems",
    description: "Supports gateway integrations and automation that keep investment transactions moving without manual intervention.",
    icon: Gauge
  },
  {
    title: "User-friendly deposit system",
    description: "Connects major payment gateways to simplify deposits and improve investor confidence at checkout.",
    icon: Wallet
  },
  {
    title: "Data import and export",
    description: "Administrators can manage datasets across supported file formats, making compliance and auditing straightforward.",
    icon: LineChart
  },
  {
    title: "Unlimited role management",
    description: "Role-based access control enhances data security while scaling oversight across teams and advisors.",
    icon: Compass
  }
];

const CUSTOMISATION_COPY =
  "Every business is unique, and so are its needs. Customising the HYIP script makes it possible to tailor features, scale alongside growth, and appeal to specific investor communities.";

const CAPABILITY_NOTE =
  "These advanced capabilities, combined with the core strengths of the script, give MLM organisations a powerful and secure toolkit for competing in high-yield investment markets.";

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "HYIP Script";
  const description =
    "Integrate a High Yield Investment Program module into Cloud MLM Software to launch, monitor, and optimise investment plans with confidence.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/hyip-script", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type HyipScriptPageProps = {
  params: { lang: SupportedLocale };
};

export default function HyipScriptPage({ params }: HyipScriptPageProps) {
  const locale = resolveLocale(params.lang);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-50 via-white to-emerald-50 py-24 dark:from-slate-950 dark:via-slate-950 dark:to-teal-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(45,212,191,0.18),transparent_45%),radial-gradient(circle_at_90%_20%,rgba(56,189,248,0.2),transparent_50%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Gauge className="h-4 w-4" aria-hidden />
              High Yield Investment Program module
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Build and operate HYIP programmes with enterprise-grade control.
            </h1>
            <p className="text-lg text-muted-foreground">
              HYIP software is an advanced solution for managing online investment platforms that promise high returns. As these programmes surge in popularity, Cloud MLM Software brings the HYIP script into the core platform so you launch opportunities, manage payouts, and monitor earnings in one place.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {HERO_POINTS.map((point) => {
                const Icon = point.icon;
                return (
                  <article
                    key={point.title}
                    className="rounded-3xl border border-border/60 bg-background/80 p-5 shadow-sm backdrop-blur"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="mt-4 text-base font-semibold text-foreground">{point.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{point.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="rounded-3xl border border-border/60 bg-muted/20 p-6 shadow-sm dark:bg-slate-900/60">
            <h2 className="text-base font-semibold text-foreground">Why leaders adopt HYIP scripts</h2>
            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
              {IMPACTS.map((impact) => {
                const Icon = impact.icon;
                return (
                  <li key={impact.title} className="flex items-start gap-3">
                    <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-foreground">{impact.title}</p>
                      <p>{impact.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-6 rounded-3xl border border-border/60 bg-background p-10 shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Tailor the HYIP script to your growth strategy</h2>
          <p className="text-sm text-muted-foreground">{CUSTOMISATION_COPY}</p>
          <p className="text-sm text-muted-foreground">
            Adjust investment plans, automate payouts, and refine investor experiences without rebuilding your core MLM infrastructure. Flexibility ensures the script adapts to evolving business models and strengthens your online presence.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-6 rounded-3xl border border-primary/40 bg-primary/5 p-8 text-primary shadow-sm dark:border-primary/60 dark:bg-primary/10">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Operational benefits</h3>
            <p className="text-sm text-primary/80 dark:text-primary/70">
              Custom configurations help teams scale responsibly, engage targeted investor communities, and stay competitive in crowded markets.
            </p>
          </div>
          <Button asChild variant="outline" className="border-primary/50 text-primary">
            <Link href={pricingHref}>
              Explore pricing options
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Key features of the Cloud MLM Software HYIP script</h2>
          <p className="text-sm text-muted-foreground">
            Deliver intuitive experiences, global accessibility, and a dependable technical foundation from day one.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Advanced functionalities that keep investors confident</h2>
            <p className="text-sm text-muted-foreground">
              Expand beyond the essentials with automation, governance, and controls that protect every programme.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((capability) => {
              const Icon = capability.icon;
              return (
                <article key={capability.title} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground">{capability.description}</p>
                </article>
              );
            })}
          </div>
          <p className="max-w-3xl text-sm text-muted-foreground">{CAPABILITY_NOTE}</p>
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-6 rounded-3xl border border-border/60 bg-background p-10 shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Get started with the HYIP script demo</h2>
          <p className="text-sm text-muted-foreground">
            With its blend of customization, advanced features, and user-friendly design, the HYIP module is an invaluable asset for anyone looking to make a mark in the world of online investments.
          </p>
          <p className="text-sm text-muted-foreground">
            Try out our free MLM Software Demo and develop an HYIP script that suits the specific needs of your business.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href={pricingHref}>
                Get pricing
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={demoHref}>
                View demo
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-6 rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/5 to-sky-100/40 p-8 shadow-sm dark:border-primary/50 dark:from-primary/10 dark:to-slate-900/60">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground">Decision-ready insights</h3>
            <p className="text-sm text-muted-foreground">
              Review payout flows, investor dashboards, and automation scenarios during the demo so stakeholders can validate readiness faster.
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            Need a tailored walkthrough? Our team can map your current investment plans, compliance guardrails, and growth targets into the demo environment.
          </p>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
