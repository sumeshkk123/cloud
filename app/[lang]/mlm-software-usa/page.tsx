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
  Building2,
  FileText,
  Flag,
  Gavel,
  MapPin,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { ChartBar, UsersThree } from "@phosphor-icons/react/dist/ssr";

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
    title: "Federal and state compliance",
    description:
      "Stay aligned with FTC, state AG, and DSA guidelines via disclosures, income claim tracking, and audit logs.",
    icon: Gavel
  },
  {
    title: "Enterprise integrations",
    description:
      "Connect ERPs, CRMs, tax, and finance systems commonly used by US brands, from NetSuite to Avalara and Stripe.",
    icon: Building2
  },
  {
    title: "Scalable analytics",
    description:
      "Monitor revenue, churn, and field engagement across territories with drill-down reports and executive dashboards.",
    icon: ChartBar
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Rep-customer journeys",
    detail: "Deliver self-service portals, replicated sites, and learning hubs tailored to US consumer expectations.",
    icon: UsersThree
  },
  {
    title: "Tax & paperwork automation",
    detail: "Generate 1099s, manage W-9/KYC workflows, and sync sales tax filings through preferred providers.",
    icon: FileText
  },
  {
    title: "Territory intelligence",
    detail: "Assign territories, track regional performance, and plan pop-up events or roadshows with geo insights.",
    icon: MapPin
  }
];

const STEPS: Step[] = [
  {
    title: "Discovery",
    copy: "Review compensation models, product catalogue, and regulatory requirements relevant to your US footprint."
  },
  {
    title: "Localisation",
    copy: "Configure payment processing, tax automation, and compliance workflows for federal and state mandates."
  },
  {
    title: "Launch & optimise",
    copy: "Enable analytics, campaigns, and enablement programmes that keep US field performance strong."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Software USA";
  const description =
    "Operate in the United States with Cloud MLM Software—FTC-aware compliance, integrations, and analytics built for growth.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-usa", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type UsaPageProps = {
  params: { lang: SupportedLocale };
};

export default function UsaPage({ params }: UsaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const servicesHref = buildLocalizedPath("/services", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(59,130,246,0.25),transparent_48%),radial-gradient(circle_at_84%_22%,rgba(248,113,113,0.22),transparent_55%)]" />
        <div className="container space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/40 bg-blue-400/15 px-4 py-1 text-sm font-semibold text-blue-100">
            US market focus
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Launch, scale, and govern your US MLM with confidence.
          </h1>
          <p className="max-w-3xl text-base text-slate-200/85">
            Cloud MLM Software provides the compliance controls, integrations, and analytics US direct selling brands need to keep distributors and regulators aligned.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
              <Link href={contactHref}>
                Speak with a US specialist
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-blue-200/60 text-blue-100 hover:bg-blue-400/10">
              <Link href={servicesHref}>
                Review service catalog
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What sets our US deployments apart</h2>
          <p className="text-sm text-muted-foreground">Built for regulatory rigour and rapid growth.</p>
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Capabilities built for the US field</h2>
            <p className="text-sm text-muted-foreground">Combine digital convenience, compliance, and financial accuracy.</p>
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Launch journey</h2>
          <p className="text-sm text-muted-foreground">Follow a proven path to market entry—or migration—inside the United States.</p>
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
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/5 via-background to-blue-50 p-10 shadow-sm dark:border-primary/60 dark:from-primary/10 dark:via-slate-950 dark:to-blue-950/40">
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-60 w-60 translate-y-1/3 rounded-full bg-red-200/25 blur-3xl dark:bg-red-900/30" aria-hidden />
          <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Request a US readiness briefing</h2>
              <p className="text-sm text-muted-foreground">
                Tell us your launch state, key systems, and regulatory priorities. We’ll deliver an assessment with recommended actions and implementation timeline.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/40 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/50 dark:bg-slate-950/60">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Secure your session</h3>
                <p className="text-sm text-muted-foreground">Expect a response within one business day outlining next steps.</p>
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
