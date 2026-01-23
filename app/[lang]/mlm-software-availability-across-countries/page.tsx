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
  Globe2,
  Landmark,
  MapPin,
  Network,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { Buildings, Flag } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  title: string;
  description: string;
  icon: IconType;
};

type Region = {
  name: string;
  summary: string;
  focus: string;
  icon: IconType;
};

type Step = {
  title: string;
  detail: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Global footprint",
    description:
      "Cloud MLM Software supports deployments across 120+ territories with localisation, multi-currency, and data residency handled out of the box.",
    icon: Globe2
  },
  {
    title: "Regulatory intelligence",
    description:
      "Our team tracks evolving direct selling regulations so your launch maps to each country’s expectations from day one.",
    icon: ShieldCheck
  },
  {
    title: "Partner ecosystem",
    description:
      "Tap into regional fulfilment, payment, and enablement partners to accelerate time-to-market without rebuilding operations.",
    icon: Network
  }
];

const REGIONS: Region[] = [
  {
    name: "North America",
    summary: "United States and Canada rollouts emphasise tax handling, omni-channel ordering, and sophisticated analytics.",
    focus: "Sales tax & compliance",
    icon: MapPin
  },
  {
    name: "Europe",
    summary: "Localise GDPR-compliant experiences with multi-lingual storefronts, SEPA-ready payments, and cross-border logistics.",
    focus: "Privacy-led localisation",
    icon: Landmark
  },
  {
    name: "APAC",
    summary: "Scale across Southeast Asia and ANZ with hybrid e-commerce, mobile-first adoption, and multi-wallet payouts.",
    focus: "Mobile commerce",
    icon: Buildings
  },
  {
    name: "LATAM",
    summary: "Support cash-heavy markets, neighbourhood fulfilment, and incentive programmes tuned to social commerce.",
    focus: "Inclusive payments",
    icon: Flag
  }];

const STEPS: Step[] = [
  {
    title: "Assess",
    detail: "Benchmark your current operations, map required integrations, and identify regulatory checkpoints per country."
  },
  {
    title: "Activate",
    detail: "Localise content, configure compensation variants, and connect regional payment/fulfilment providers."
  },
  {
    title: "Accelerate",
    detail: "Launch analytics, enablement, and optimisation sprints that keep each market growing sustainably."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Software Availability Across Countries";
  const description =
    "See how Cloud MLM Software supports compliant direct selling operations across regions with localisation, payments, and partners.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-availability-across-countries", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type SoftwareAvailabilityPageProps = {
  params: { lang: SupportedLocale };
};

export default function SoftwareAvailabilityPage({ params }: SoftwareAvailabilityPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const migrationHref = buildLocalizedPath("/mlm-migration", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-20 dark:from-slate-950 dark:via-slate-950 dark:to-emerald-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(56,189,248,0.18),transparent_48%),radial-gradient(circle_at_80%_16%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.6fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              Global deployment playbook
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Launch and grow your MLM business in any region with confidence.
            </h1>
            <p className="text-base text-muted-foreground">
              From regulatory preparation to language localisation, Cloud MLM Software is available across countries so you can expand without rebuilding your tech stack every time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Discuss your target markets
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={migrationHref}>
                  Plan a platform migration
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
            {HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article key={highlight.title} className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-muted/30 p-4 dark:bg-slate-900/40">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-sm font-semibold text-foreground">{highlight.title}</h2>
                  </div>
                  <p className="text-xs text-muted-foreground">{highlight.description}</p>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Regional readiness snapshots</h2>
          <p className="text-sm text-muted-foreground">
            Every region has unique expectations. Select a segment to see the considerations we front-load into your rollout plan.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {REGIONS.map((region) => {
            const Icon = region.icon;
            return (
              <article key={region.name} className="flex h-full flex-col justify-between gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <div className="space-y-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{region.name}</h3>
                  <p className="text-sm text-muted-foreground">{region.summary}</p>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">{region.focus}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How we enable country launches</h2>
            <p className="text-sm text-muted-foreground">
              A structured migration path keeps business continuity high while the new market goes live.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {STEPS.map((step) => (
              <article key={step.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">{step.title}</p>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/5 via-background to-sky-50 p-10 shadow-sm dark:border-primary/60 dark:from-primary/10 dark:via-slate-950 dark:to-sky-950/40">
          <div className="absolute -left-16 -top-14 h-48 w-48 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-60 w-60 translate-y-1/3 rounded-full bg-emerald-200/25 blur-3xl dark:bg-emerald-900/30" aria-hidden />
          <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Need a country-by-country assessment?</h2>
              <p className="text-sm text-muted-foreground">
                Tell us which territories you’re targeting and the systems you run today. We’ll prepare a readiness dossier with regulatory notes, integration checklists, and timeline guidance.</p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/40 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/50 dark:bg-slate-950/60">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Request your global rollout plan</h3>
                <p className="text-sm text-muted-foreground">
                  Expect a follow-up within one business day outlining next steps.</p>
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
