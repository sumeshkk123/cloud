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
  Database,
  LineChart,
  MonitorSmartphone,
  Network,
  ShieldCheck,
  Sparkles,
  Zap
} from "lucide-react";
import { ChatsCircle, Storefront } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Benefit = {
  title: string;
  description: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  bullets: string[];
  icon: IconType;
};

type TimelineStep = {
  phase: string;
  detail: string;
  duration: string;
};

type Outcome = {
  label: string;
  value: string;
  caption: string;
};

const HERO_BENEFITS: Benefit[] = [
  {
    title: "Unified customer + distributor journeys",
    description:
      "Deliver seamless experiences across Shopify storefronts and Cloud MLM Software portals with single sign-on and shared analytics.",
    icon: Network
  },
  {
    title: "Revenue automation baked in",
    description:
      "Orders, returns, subscriptions, and incentives sync instantly—no more reconciliation headaches or missed payouts.",
    icon: Zap
  },
  {
    title: "Scalable launch playbooks",
    description:
      "Spin up new campaigns, markets, and product sets with reusable templates and governance frameworks.",
    icon: Sparkles
  }
];

const INTEGRATION_PILLARS: Pillar[] = [
  {
    title: "Commerce experience layer",
    bullets: [
      "Custom Shopify themes that mirror brand voice and compliance requirements.",
      "Dynamic landing pages for promotions, events, and replicated storefronts.",
      "Performance engineering with lighthouse benchmarks and A/B testing."
    ],
    icon: Storefront
  },
  {
    title: "Automation + data fabric",
    bullets: [
      "Payout logic triggered by orders, upsells, refunds, and subscription renewals.",
      "Realtime product and inventory sync across markets with localisation guardrails.",
      "Business intelligence dashboards uniting ecommerce, finance, and field metrics."
    ],
    icon: Database
  },
  {
    title: "Enablement & change",
    bullets: [
      "Multi-language training resources that empower customer care and field leaders.",
      "Runbooks for campaign launches, influencer drops, and seasonal promotions.",
      "Support desk integration with SLA tracking and AI-powered response automation."
    ],
    icon: ChatsCircle
  }
];

const DELIVERY_STEPS: TimelineStep[] = [
  {
    phase: "Opportunity mapping",
    detail:
      "We align on revenue goals, audience segments, and operational requirements—then storyboard each customer and distributor touchpoint.",
    duration: "Weeks 1-2"
  },
  {
    phase: "Build & connect",
    detail:
      "Design systems, API middleware, and data pipelines come together with automated testing suites and sandbox pilots.",
    duration: "Weeks 3-6"
  },
  {
    phase: "Launch & amplify",
    detail:
      "Go-live orchestration, conversion tracking, and iterative optimisation ensure adoption across every cohort.",
    duration: "Weeks 7-8"
  }
];

const BUSINESS_OUTCOMES: Outcome[] = [
  {
    label: "Increase in recurring revenue",
    value: "31%",
    caption: "Clients see uplift within the first full quarter after integrating Shopify."
  },
  {
    label: "Support automation coverage",
    value: "68%",
    caption: "Ticket deflection powered by unified data and conversational AI workflows."
  },
  {
    label: "Time to launch new offers",
    value: "48 hrs",
    caption: "Prebuilt templates and automation blocks accelerate campaign deployment."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Shopify Integration with Cloud MLM Software | Cloud MLM Software";
  const description =
    "Connect Shopify storefronts with Cloud MLM Software. Deliver unified customer and distributor journeys, real-time automation, and insight-driven growth for modern MLM brands.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/services/shopify-integration-in-cloud-mlm-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ShopifyIntegrationPageProps = {
  params: { lang: SupportedLocale };
};

export default function ShopifyIntegrationPage({ params }: ShopifyIntegrationPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const servicesHref = buildLocalizedPath("/services", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative isolate overflow-hidden border border-border/50 bg-white dark:bg-slate-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.18),transparent_55%),radial-gradient(circle_at_top_right,rgba(45,212,191,0.17),transparent_55%)]" />
        <div className="container grid gap-10 py-20 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Shopify + Cloud MLM integration studio
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Launch premium Shopify experiences that fuel your MLM growth engine.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground">
              Our team unifies Shopify commerce with Cloud MLM Software intelligence so you can scale globally, empower
              promoters, and deliver frictionless shopping journeys. From architecture to AI-driven support, we cover the
              entire lifecycle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Start an integration roadmap
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref}>
                  View live product demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="grid gap-4 rounded-3xl border border-border/40 bg-white/80 p-6 shadow-lg backdrop-blur dark:bg-slate-950/70">
            {HERO_BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article
                  key={benefit.title}
                  className="flex gap-4 rounded-2xl border border-border/40 bg-muted/40 p-5 dark:border-slate-800 dark:bg-slate-900/70"
                >
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-1.5">
                    <h2 className="text-sm font-semibold text-foreground">{benefit.title}</h2>
                    <p className="text-xs text-muted-foreground">{benefit.description}</p>
                  </div>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Integration pillars that keep commerce and field operations aligned
          </h2>
          <p className="text-sm text-muted-foreground">
            With Cloud MLM Software steering the backend, your Shopify storefront gains the automation, insights, and
            governance required to lead in competitive markets.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {INTEGRATION_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="group flex h-full flex-col gap-4 rounded-3xl border border-border/40 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:bg-slate-950/75"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <ul className="mt-2 space-y-3 text-sm text-muted-foreground">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <ShieldCheck className="mt-1 h-4 w-4 text-primary" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Launch playbook crafted for measurable impact
            </h2>
            <p className="text-sm text-muted-foreground">
              We work shoulder-to-shoulder with your ecommerce, finance, and field teams—ensuring every milestone is
              transparent, accountable, and ready for scale.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href={contactHref}>
                Request a guided workshop
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="relative rounded-3xl border border-border/50 bg-slate-900 text-white shadow-sm dark:border-slate-800">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.3),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.3),transparent_50%)]" />
            <ol className="space-y-6 p-8">
              {DELIVERY_STEPS.map((step, index) => (
                <li key={step.phase} className="relative flex gap-4 rounded-3xl border border-white/15 bg-white/10 p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-lg font-semibold text-white">
                    {index + 1}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{step.phase}</h3>
                    <p className="text-sm text-slate-100">{step.detail}</p>
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-200">
                      <MonitorSmartphone className="h-4 w-4" aria-hidden />
                      {step.duration}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Outcomes you can present to leadership
          </h2>
          <p className="text-sm text-muted-foreground">
            Focus on growth while we provide the proof points that matter to your executives, investors, and field
            councils.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {BUSINESS_OUTCOMES.map((outcome) => (
            <article
              key={outcome.label}
              className="flex h-full flex-col gap-3 rounded-3xl border border-border/40 bg-white/90 p-6 text-left shadow-sm dark:bg-slate-950/75"
            >
              <LineChart className="h-5 w-5 text-primary" aria-hidden />
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {outcome.label}
              </h3>
              <p className="text-3xl font-semibold text-foreground">{outcome.value}</p>
              <p className="text-xs text-muted-foreground">{outcome.caption}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container overflow-hidden rounded-3xl border border-border/50 bg-white shadow-sm dark:bg-slate-950">
        <div className="grid gap-10 px-6 py-16 sm:px-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Your next Shopify release starts with a conversation.
            </h2>
            <p className="text-sm text-muted-foreground">
              Share your goals for customer acquisition, retention, or global expansion—we will assemble the ideal team
              and roadmap to make it happen.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Talk to Cloud MLM Software
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={servicesHref}>
                  Browse additional services
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-4 rounded-3xl border border-primary/30 bg-primary/10 p-6 dark:border-primary/40 dark:bg-primary/10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="text-lg font-semibold text-foreground">Security & compliance ready</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              PCI-aware integrations, GDPR discipline, and jurisdiction-specific tax handling keep your leadership and
              regulators confident from day one.
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
}
