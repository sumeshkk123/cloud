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
  ArrowRight,
  ArrowUpRight,
  Building,
  Globe2,
  Languages,
  MapPin,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { CurrencyCircleDollar, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  title: string;
  description: string;
  icon: IconType;
};

type Capability = {
  title: string;
  detail: string;
  icon: IconType;
};

type Step = {
  title: string;
  copy: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "PDPA-ready infrastructure",
    description:
      "Protect member information and respect Malaysia’s Personal Data Protection Act with configurable privacy workflows.",
    icon: ShieldCheck
  },
  {
    title: "Shariah-compliant payment support",
    description:
      "Integrate payment gateways and wallet options that align with local banking practices and compliance needs.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Bahasa Malaysia localisation",
    description:
      "Deliver portals, communications, and reporting in Bahasa Malaysia and English so the field stays informed.",
    icon: Languages
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Hybrid commerce",
    detail: "Enable pop-up stores, COD options, and social commerce journeys that reflect Malaysian buying patterns.",
    icon: Building
  },
  {
    title: "Field enablement",
    detail: "Mobile-first onboarding, training modules, and event management tools keep consultants productive on the go.",
    icon: UsersThree
  },
  {
    title: "Geo-aware analytics",
    detail: "Track regional performance, territory expansion, and compliance readiness through dashboards built for Malaysia.",
    icon: Globe2
  }
];

const STEPS: Step[] = [
  {
    title: "Assess",
    copy: "Review your current operations, compensation rules, and regulatory requirements for the Malaysian market."
  },
  {
    title: "Configure",
    copy: "Localise content, connect payment gateways, and tune automation to support Malaysia-specific workflows."
  },
  {
    title: "Grow",
    copy: "Launch analytics, campaigns, and enablement tailored to distributors across Peninsular and East Malaysia."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Software Malaysia";
  const description =
    "Deploy Cloud MLM Software in Malaysia with PDPA-compliant data handling, localisation, and trusted payment integrations.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-malaysia", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MalaysiaPageProps = {
  params: { lang: SupportedLocale };
};

export default function MalaysiaPage({ params }: MalaysiaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-emerald-50 via-white to-sky-50 py-20 dark:from-slate-950 dark:via-slate-950 dark:to-sky-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_20%,rgba(52,211,153,0.18),transparent_48%),radial-gradient(circle_at_78%_12%,rgba(56,189,248,0.18),transparent_55%)]" />
        <div className="container space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            Malaysia launch playbook
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Localise your MLM operations for Malaysia with confidence.
          </h1>
          <p className="max-w-3xl text-base text-muted-foreground">
            Cloud MLM Software delivers the localisation, compliance guardrails, and integrations needed to support your Malaysian distributors and customers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Talk to our Malaysia specialists
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={pricingHref}>
                Review pricing
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why brands choose Cloud MLM Software in Malaysia</h2>
          <p className="text-sm text-muted-foreground">Three pillars ensure your launch meets local expectations.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <article key={highlight.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Capabilities tailored to Malaysia</h2>
            <p className="text-sm text-muted-foreground">
              Mix and match modules to support local distributors, customers, and leadership teams.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {CAPABILITIES.map((capability) => {
              const Icon = capability.icon;
              return (
                <article key={capability.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground">{capability.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Three-phase localisation approach</h2>
          <p className="text-sm text-muted-foreground">
            Navigate launch with a proven path that protects continuity and inspires the field.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <article key={step.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/5 via-background to-emerald-50 p-10 shadow-sm dark:border-primary/60 dark:from-primary/10 dark:via-slate-950 dark:to-emerald-950/40">
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-60 w-60 translate-y-1/3 rounded-full bg-sky-200/25 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Kickstart your Malaysia expansion</h2>
              <p className="text-sm text-muted-foreground">
                Share your go-live timeline, product categories, and existing systems. We’ll respond with a readiness checklist and proposed workstreams tailored to Malaysia.</p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/40 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/50 dark:bg-slate-950/60">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Request localisation support</h3>
                <p className="text-sm text-muted-foreground">
                  Expect outreach within one business day with discovery questions and timeline guidance.</p>
              </div>
              <Button asChild>
                <Link href={contactHref}>
                  Request now
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
