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
  CreditCard,
  Globe,
  HandCoins,
  Lock,
  Receipt,
  Sparkles,
  Wallet
} from "lucide-react";
import { Bank, Coins, LightningSlash } from "@phosphor-icons/react/dist/ssr";

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

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Global gateway library",
    description:
      "Connect 60+ payment providers across cards, wallets, bank transfers, and alternative methods tailored to each market.",
    icon: CreditCard
  },
  {
    title: "Risk & compliance automation",
    description:
      "Handle KYC, AML, and chargeback mitigation with configurable thresholds and alerts.",
    icon: Lock
  },
  {
    title: "Real-time payouts",
    description:
      "Orchestrate instant, scheduled, or split settlements via e-wallet, direct deposit, or commission cards.",
    icon: Wallet
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Smart routing",
    detail: "Automatically route transactions to the best-performing gateway based on geography, payment type, or uptime.",
    icon: LightningSlash
  },
  {
    title: "Currency intelligence",
    detail: "Present multi-currency pricing, FX conversions, and tax handling without manual spreadsheets.",
    icon: Coins
  },
  {
    title: "Audit-ready reporting",
    detail: "Reconcile fees, refunds, and reserves with finance exports designed for ERP and accounting tools.",
    icon: Receipt
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }> }): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "MLM Software Payment Gateways";
  const description =
    "Integrate global payment gateways, automate compliance, and deliver real-time payouts with Cloud MLM Software.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function PaymentGatewaysPage({ params }: PaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const servicesHref = buildLocalizedPath("/services", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(45,212,191,0.25),transparent_48%),radial-gradient(circle_at_82%_24%,rgba(56,189,248,0.22),transparent_55%)]" />
        <div className="container space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-400/15 px-4 py-1 text-sm font-semibold text-emerald-100">
            Payment infrastructure for MLM
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Accept payments anywhere and pay distributor earnings without friction.
          </h1>
          <p className="max-w-3xl text-base text-slate-200/85">
            Cloud MLM Software connects the payment gateways and payout options your business needs to expand safely across regions while delighting customers and distributors.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
              <Link href={contactHref}>
                Request integration support
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-emerald-200/60 text-emerald-100 hover:bg-emerald-400/10">
              <Link href={servicesHref}>
                Review services
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Gateway capabilities at a glance</h2>
          <p className="text-sm text-muted-foreground">
            Combine multiple payment methods, risk controls, and reconciliation tools in one platform.
          </p>
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Extend your payment stack</h2>
            <p className="text-sm text-muted-foreground">
              Mix in these capabilities to deliver a frictionless payment experience for customers and distributors alike.
            </p>
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What we cover in an integration workshop</h2>
          <p className="text-sm text-muted-foreground">Map your path to compliant, resilient payment operations.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Gateway selection",
              copy: "Analyse payment mix, regions, and regulatory requirements to choose the right providers."
            },
            {
              title: "Implementation plan",
              copy: "Outline timelines, API configurations, webhooks, and testing scenarios to migrate safely."
            },
            {
              title: "Monitoring & alerts",
              copy: "Set up dashboards and notifications so finance and support teams stay ahead of issues."
            }
          ].map((item) => (
            <article key={item.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.copy}</p>
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
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Need a payment readiness assessment?</h2>
              <p className="text-sm text-muted-foreground">
                Tell us the gateways and payout systems you use today plus the countries you’re targeting. We’ll recommend the optimal architecture and migration steps.</p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/40 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/50 dark:bg-slate-950/60">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Request a consultation</h3>
                <p className="text-sm text-muted-foreground">Expect follow-up within one business day with agenda options and required artefacts.</p>
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
