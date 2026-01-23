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
  CloudLightning,
  Globe,
  Languages,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import { CurrencyCircleDollar, Handshake } from "@phosphor-icons/react/dist/ssr";

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
    title: "Singapore-compliant operations",
    description:
      "Align with the Multi-Level Marketing and Pyramid Selling (Prohibition) Act, PDPA, and MAS wallet requirements from launch.",
    icon: ShieldCheck
  },
  {
    title: "Hyper-connected city-state",
    description:
      "Support hybrid retail, e-commerce, and concierge fulfilment that match Singapore’s digital-first customer expectations.",
    icon: CloudLightning
  },
  {
    title: "Regional gateway",
    description:
      "Use Singapore as your SEA hub with cross-border localisation, currency handling, and enablement built in.",
    icon: Globe
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Localised experiences",
    detail: "Deliver portals, notifications, and support in English, Mandarin, and Malay.",
    icon: Languages
  },
  {
    title: "Smart payments",
    detail: "Integrate PayNow, card, and digital wallets while managing GST and invoicing requirements.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Partner collaboration",
    detail: "Coordinate with logistics, wellness, and beauty partners through shared dashboards and API integrations.",
    icon: Handshake
  }];

const STEPS: Step[] = [
  {
    title: "Local readiness",
    copy: "Audit your compensation model, product approvals, and marketing collateral to ensure Singapore compliance."
  },
  {
    title: "Platform localisation",
    copy: "Configure language, tax, payment, and fulfilment workflows tailored to Singapore distributors and customers."
  },
  {
    title: "Regional expansion",
    copy: "Leverage analytics, enablement, and cross-border tools to scale from Singapore into neighbouring markets."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Software Singapore";
  const description =
    "Deploy Cloud MLM Software in Singapore with PDPA compliance, PayNow integrations, and regional expansion support.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-singapore", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type SingaporePageProps = {
  params: { lang: SupportedLocale };
};

export default function SingaporePage({ params }: SingaporePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const migrationHref = buildLocalizedPath("/mlm-migration", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-slate-900 to-fuchsia-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_16%,rgba(236,72,153,0.25),transparent_48%),radial-gradient(circle_at_84%_20%,rgba(14,165,233,0.25),transparent_55%)]" />
        <div className="container space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/40 bg-fuchsia-400/15 px-4 py-1 text-sm font-semibold text-fuchsia-100">
            Singapore market focus
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Power your Singapore MLM launch with compliance and performance built in.
          </h1>
          <p className="max-w-3xl text-base text-slate-200/85">
            Cloud MLM Software equips you with the localisation, regulatory guardrails, and automation needed to thrive in Singapore’s sophisticated direct selling landscape.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
              <Link href={contactHref}>
                Connect with our Singapore team
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-fuchsia-200/60 text-fuchsia-100 hover:bg-fuchsia-400/10">
              <Link href={migrationHref}>
                Plan your migration
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Singapore-specific advantages</h2>
          <p className="text-sm text-muted-foreground">Build trust with distributors, customers, and regulators.</p>
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Capabilities tailored to Singapore distributors</h2>
            <p className="text-sm text-muted-foreground">
              Combine digital convenience with regulatory rigour.</p>
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Your path to launch</h2>
          <p className="text-sm text-muted-foreground">A proven three-step activation keeps timelines tight and stakeholders aligned.</p>
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
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/5 via-background to-fuchsia-50 p-10 shadow-sm dark:border-primary/60 dark:from-primary/10 dark:via-slate-950 dark:to-fuchsia-950/40">
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-60 w-60 translate-y-1/3 rounded-full bg-sky-200/25 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Schedule a Singapore readiness briefing</h2>
              <p className="text-sm text-muted-foreground">
                Share your product categories, target launch date, and existing systems. We’ll prepare recommendations and implementation phases tailored to Singapore.</p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/40 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/50 dark:bg-slate-950/60">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Request briefing</h3>
                <p className="text-sm text-muted-foreground">Response within one business day with next steps and discovery questions.</p>
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
