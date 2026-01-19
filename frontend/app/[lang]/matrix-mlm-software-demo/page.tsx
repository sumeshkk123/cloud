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
  GaugeCircle,
  Layers3,
  Link2,
  Network,
  ShieldCheck,
  Workflow
} from "lucide-react";
import { ChartPie, ShoppingCartSimple, UsersFour } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type DemoHighlight = {
  title: string;
  description: string;
  icon: IconType;
};

type Experience = {
  title: string;
  detail: string;
  icon: IconType;
};

const DEMO_HIGHLIGHTS: DemoHighlight[] = [
  {
    title: "Matrix clarity",
    description:
      "Visualise fixed-width growth (2×2, 3×5, and beyond) with real spill-over examples so leaders understand downline momentum.",
    icon: Layers3
  },
  {
    title: "Integrated commerce",
    description:
      "Explore how the demo ties matrix enrolments to e-commerce carts, recurring orders, and automated ticketing flows.",
    icon: ShoppingCartSimple
  },
  {
    title: "Risk-free sandbox",
    description:
      "Test gateway connections, compliance guardrails, and spill-over rules before launch, guided by Cloud MLM specialists.",
    icon: ShieldCheck
  }
];

const EXPERIENCES: Experience[] = [
  {
    title: "Admin cockpit",
    detail: "Configure width × depth, bonus pools, and spill-over preferences with real-time previews.",
    icon: Workflow
  },
  {
    title: "Distributor view",
    detail: "Show the genealogy explorer, rank progression, and automated notifications that keep teams energised.",
    icon: UsersFour
  },
  {
    title: "Analytics & finance",
    detail: "Review commission dashboards, churn alerts, and profitability trends across levels and markets.",
    icon: ChartPie
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Matrix MLM Software Demo";
  const description =
    "See Cloud MLM Software’s matrix platform in action—spill-over automation, e-commerce integrations, and analytics in one guided demo.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/matrix-mlm-software-demo", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MatrixDemoPageProps = {
  params: { lang: SupportedLocale };
};

export default function MatrixDemoPage({ params }: MatrixDemoPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const calculatorHref = buildLocalizedPath("/matrix-mlm-calculator", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(99,102,241,0.25),transparent_48%),radial-gradient(circle_at_82%_20%,rgba(56,189,248,0.22),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,0.55fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-300/50 bg-violet-400/10 px-4 py-1 text-sm font-semibold text-violet-100">
              Guided matrix playthrough
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Experience spill-over automation and payouts inside the matrix MLM demo.
            </h1>
            <p className="text-base text-slate-200/85">
              “The width of a matrix plan is fixed—fill each position correctly and spill-over rewards the next distributor in line.” Our sandbox shows exactly how Cloud MLM Software enforces that promise, connects to commerce, and keeps every level compliant.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={contactHref}>
                  Book the live demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-violet-200/60 text-violet-100 hover:bg-violet-400/10">
                <Link href={calculatorHref}>
                  Model payouts first
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-6 shadow-lg backdrop-blur">
            {DEMO_HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article key={highlight.title} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/30 p-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-400/20 text-violet-100">
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What the guided session covers</h2>
          <p className="text-sm text-muted-foreground">
            Move through administrator, distributor, and finance lenses so every stakeholder understands how the platform supports them.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCES.map((experience) => {
            const Icon = experience.icon;
            return (
              <article key={experience.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{experience.title}</h3>
                <p className="text-sm text-muted-foreground">{experience.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What you’ll evaluate during the demo</h2>
            <p className="text-sm text-muted-foreground">
              From spill-over logic to integrations, the walkthrough proves how Cloud MLM Software keeps your matrix programme adaptable and compliant.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-start gap-2">
                <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                Explore spill-over handling when a sponsor fills their width and new sign-ups cascade to the next active member.
              </p>
              <p className="flex items-start gap-2">
                <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                See how rank upgrades trigger KYC verification, inventory rules, and automated communications.
              </p>
              <p className="flex items-start gap-2">
                <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                Review payment gateway workflows, order syncing, and ticketing integrations that keep operations smooth.
              </p>
            </div>
          </div>
          <div className="grid gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Network className="h-5 w-5" aria-hidden />
              </span>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-foreground">E-commerce and wallet integration</h3>
                <p className="text-sm text-muted-foreground">
                  Understand how carts, loyalty wallets, and subscription products connect to matrix genealogy and payouts.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <GaugeCircle className="h-5 w-5" aria-hidden />
              </span>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-foreground">Compliance guardrails</h3>
                <p className="text-sm text-muted-foreground">
                  Walk through configurable policies that manage holding periods, auto-ship requirements, and regulator-friendly reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/5 via-background to-indigo-50 p-10 shadow-sm dark:border-primary/60 dark:from-primary/10 dark:via-slate-950 dark:to-indigo-950/40">
          <div className="absolute -left-16 -top-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-60 w-60 translate-y-1/3 rounded-full bg-sky-200/25 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to tailor the demo to your matrix rules?</h2>
              <p className="text-sm text-muted-foreground">
                Send us your width × depth configuration, current bonus tables, and integration needs. We’ll preload the sandbox so every stakeholder sees their reality reflected on screen.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/40 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/50 dark:bg-slate-950/60">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Schedule your personalised session</h3>
                <p className="text-sm text-muted-foreground">
                  Expect agenda previews, data import guidance, and post-demo recommendations tailored to your launch timeline.
                </p>
              </div>
              <Button asChild>
                <Link href={contactHref}>
                  Reserve the demo
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
