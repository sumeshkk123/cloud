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
  Gift,
  HeartHandshake,
  Layers,
  PiggyBank,
  ShieldCheck,
  Users
} from "lucide-react";
import { HandsPraying, Sparkle } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  title: string;
  description: string;
  icon: IconType;
};

type Feature = {
  title: string;
  detail: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Community-first rewards",
    description:
      "The gift (donation) plan emphasises mutual support—contributors send funds up-line while unlocking future gifting opportunities.",
    icon: HeartHandshake
  },
  {
    title: "Transparent cycle tracking",
    description:
      "Monitor gifting rounds, queue positions, and completion status so members know exactly when their turn arrives.",
    icon: Layers
  },
  {
    title: "Compliance safeguards",
    description:
      "Apply policy checks, document verification, and audit logs to keep gifting programmes legal and trustworthy.",
    icon: ShieldCheck
  }
];

const FEATURES: Feature[] = [
  {
    title: "Configurable gifting stages",
    detail: "Define how many rounds each member contributes to and what return they receive upon cycle completion.",
    icon: Gift
  },
  {
    title: "Automated queue management",
    detail: "Move participants between gifting boards with rules that recognise active, inactive, or completed members.",
    icon: Users
  },
  {
    title: "Integrated finance controls",
    detail: "Link wallets and payment gateways to process donations securely while tracking tax and regulatory requirements.",
    icon: PiggyBank
  },
  {
    title: "Recognition & communication",
    detail: "Trigger notifications, gratitude messages, and leaderboards that celebrate community contributions.",
    icon: Sparkle
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Gift Plan Software Demo";
  const description =
    "Explore the Cloud MLM Software gift plan demo—configure donation flows, track cycles, and keep gifting programmes transparent.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-gift-plan-software-demo", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type GiftPlanDemoPageProps = {
  params: { lang: SupportedLocale };
};

export default function GiftPlanDemoPage({ params }: GiftPlanDemoPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const planHref = buildLocalizedPath("/mlm-plan/mlm-gift-plan", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-rose-950 via-slate-950 to-amber-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(244,114,182,0.25),transparent_48%),radial-gradient(circle_at_84%_24%,rgba(251,191,36,0.22),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.55fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-400/15 px-4 py-1 text-sm font-semibold text-amber-100">
              Donation-driven plan demo
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Guide your community through every gifting cycle with clarity.
            </h1>
            <p className="text-base text-slate-200/85">
              The MLM Gift (donation) Plan is widely adopted across international communities. Our demo shows how Cloud MLM Software automates gifting queues, keeps members informed, and ensures every blessing loop runs smoothly from contribution to return.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={contactHref}>
                  Reserve the demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-amber-200/60 text-amber-100 hover:bg-amber-400/10">
                <Link href={planHref}>
                  Learn plan basics
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-6 shadow-lg backdrop-blur">
            {HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article key={highlight.title} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/30 p-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/20 text-amber-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-sm font-semibold text-slate-100">{highlight.title}</h2>
                  </div>
                  <p className="text-xs text-slate-200/80">{highlight.description}</p>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Demo modules you’ll explore</h2>
          <p className="text-sm text-muted-foreground">
            Capture the spirit of gifting while operating with enterprise-grade controls.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What members experience in the sandbox</h2>
            <p className="text-sm text-muted-foreground">
              The guided demo follows a typical gifting cycle—from first contribution to receiving blessings back from the community.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <HandsPraying className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-lg font-semibold text-foreground">Contribution stage</h3>
              <p className="text-sm text-muted-foreground">
                Members pledge gifts, receive transparent instructions, and upload proof—automatically recorded for compliance.
              </p>
            </article>
            <article className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Layers className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-lg font-semibold text-foreground">Queue & cycle management</h3>
              <p className="text-sm text-muted-foreground">
                Automated boards move members as soon as stages complete, ensuring fairness and momentum across the community.
              </p>
            </article>
            <article className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Gift className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-lg font-semibold text-foreground">Blessing payouts</h3>
              <p className="text-sm text-muted-foreground">
                Once cycles complete, payouts release automatically, accompanied by gratitude messages and compliance receipts.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/5 via-background to-rose-50 p-10 shadow-sm dark:border-primary/60 dark:from-primary/10 dark:via-slate-950 dark:to-rose-950/40">
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-60 w-60 translate-y-1/3 rounded-full bg-rose-200/25 blur-3xl dark:bg-rose-900/30" aria-hidden />
          <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Customise the gift plan for your mission</h2>
              <p className="text-sm text-muted-foreground">
                Tell us how your community gives and receives. We’ll adapt tables, messaging, and compliance workflows so your values shine through the software.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/40 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/50 dark:bg-slate-950/60">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Schedule your design session</h3>
                <p className="text-sm text-muted-foreground">
                  Expect agenda options and the data checklist we’ll use to prepare the sandbox.
                </p>
              </div>
              <Button asChild>
                <Link href={contactHref}>
                  Schedule now
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
