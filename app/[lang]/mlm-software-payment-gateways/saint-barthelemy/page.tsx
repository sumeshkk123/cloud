import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { ArrowUpRight } from "lucide-react";
import {
  Buildings,
  ChartLineUp,
  ClipboardText,
  Compass,
  GlobeHemisphereWest,
  Handshake,
  Lightning,
  Megaphone,
  ShieldCheck,
  StackSimple,
  UsersThree,
  Waveform
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  heading: string;
  detail: string;
  icon: IconType;
};

type GatewayStory = {
  gateway: string;
  narrative: string;
  focus: string;
  icon: IconType;
};

type ModuleCard = {
  name: string;
  description: string;
  icon: IconType;
  accent: string;
};

type ExpansionThread = {
  label: string;
  summary: string;
  icon: IconType;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    heading: "WordPress hero intact",
    detail:
      "Ways to accept payments from MLM Software in People’s Democratic Republic of Saint Barthelemy – BL remains at the top unchanged.",
    icon: ShieldCheck
  },
  {
    heading: "Gateway availability",
    detail: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree continue to support the island.",
    icon: ChartLineUp
  },
  {
    heading: "Enterprise-level trust",
    detail:
      "Cloud MLM Software brings AI telemetry, compliance guardrails, and storytelling tailored to Saint Barthelemy’s leadership.",
    icon: Buildings
  }
];

const GATEWAY_STORIES: GatewayStory[] = [
  {
    gateway: "PayPal — cross-island commerce",
    narrative: "Serve Saint Barth, Guadeloupe, and global diaspora audiences with predictable settlements.",
    focus: "Multi currency controls manage EUR, USD, and GBP flows while surfacing variance alerts.",
    icon: StackSimple
  },
  {
    gateway: "Amazon Pay — luxury retail",
    narrative: "Support hospitality and boutique commerce experiences with frictionless payments.",
    focus: "Auto responder delivers bilingual concierge journeys and replenishment workflows.",
    icon: Megaphone
  },
  {
    gateway: "PayU — regional expansion",
    narrative: "Bridge French territories with mainland Europe and Latin America gateways.",
    focus: "Ticket system records PSP guidance, duty regulations, and partner escalations.",
    icon: ClipboardText
  },
  {
    gateway: "Stripe — innovation studio",
    narrative: "Prototype digital memberships, private events, and AI-driven loyalty experiences.",
    focus: "Telemetry captures webhook signals, conversion analytics, and experiment retrospectives.",
    icon: Waveform
  },
  {
    gateway: "Authorize.Net — transatlantic rigour",
    narrative: "Connect North American acquiring with Saint Barthelemy’s regulatory framework.",
    focus: "KYC documentation vault secures contracts, identity records, and compliance approvals.",
    icon: Compass
  },
  {
    gateway: "Braintree — incentive orchestration",
    narrative: "Align travel, lifestyle, and partner rewards with accountability.",
    focus: "E-wallet and e-voucher modules govern payouts and redemption analytics.",
    icon: Handshake
  }
];

const MODULE_CARDS: ModuleCard[] = [
  {
    name: "Multi currency module",
    description: "Display EUR and USD pricing while automating reconciliation for finance teams.",
    icon: GlobeHemisphereWest,
    accent: "bg-emerald-500/15 text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-100"
  },
  {
    name: "Ticket system module",
    description: "Route PSP, compliance, and distributor support inquiries with SLA dashboards.",
    icon: ClipboardText,
    accent: "bg-amber-500/15 text-amber-900 dark:bg-amber-500/20 dark:text-amber-100"
  },
  {
    name: "Auto responder",
    description: "Deliver bilingual communications for onboarding, campaigns, and renewals.",
    icon: Megaphone,
    accent: "bg-rose-500/15 text-rose-900 dark:bg-rose-500/20 dark:text-rose-100"
  },
  {
    name: "Emails hub",
    description: "Synchronise operational, marketing, and executive updates across time zones.",
    icon: UsersThree,
    accent: "bg-sky-500/15 text-sky-900 dark:bg-sky-500/20 dark:text-sky-100"
  },
  {
    name: "KYC documentation",
    description: "Maintain regulator-ready records, contracts, and identity verification evidence.",
    icon: ClipboardText,
    accent: "bg-blue-500/15 text-blue-900 dark:bg-blue-500/20 dark:text-blue-100"
  },
  {
    name: "E-wallet & e-voucher",
    description: "Manage island incentives and payouts with maker-checker governance.",
    icon: StackSimple,
    accent: "bg-purple-500/15 text-purple-900 dark:bg-purple-500/20 dark:text-purple-100"
  }
];

const EXPANSION_THREADS: ExpansionThread[] = [
  {
    label: "WordPress fidelity",
    summary: "Hero copy and module references migrate without change, ensuring SEO and stakeholder continuity.",
    icon: ShieldCheck
  },
  {
    label: "Telemetry cadence",
    summary: "Dashboards reveal gateway performance, dispute ratios, and communication throughput.",
    icon: Lightning
  },
  {
    label: "Collaboration rhythm",
    summary: "Ticket, email, and documentation workflows align finance, legal, and distributor success teams.",
    icon: Buildings
  },
  {
    label: "Regional expansion",
    summary: "Insights extend into Guadeloupe, Martinique, and mainland France with shared governance.",
    icon: Compass
  }
];

export const metadata: Metadata = {
  title: "Saint Barthelemy MLM Payment Gateways | Cloud MLM Software",
  description:
    "Advance Saint Barthelemy’s MLM payment gateways with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, and Braintree guided by analytics and governance.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/saint-barthelemy"
  },
  openGraph: {
    title: "Saint Barthelemy MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People’s Democratic Republic of Saint Barthelemy – BL, reframed for executive clarity."
  }
};

type SaintBarthelemyPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function SaintBarthelemyPaymentGatewayPage({ params }: SaintBarthelemyPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const servicesHref = buildLocalizedPath("/services", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-100 via-white to-rose-100 py-20 dark:from-slate-950 dark:via-emerald-950/40 dark:to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(45,212,191,0.24),transparent_55%),radial-gradient(circle_at_82%_18%,rgba(244,114,182,0.2),transparent_60%),radial-gradient(circle_at_55%_80%,rgba(14,165,233,0.15),transparent_65%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-white/75 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700 shadow-sm dark:border-emerald-300/40 dark:bg-white/10 dark:text-emerald-100">
              Ways to accept payments · Saint Barthelemy (BL)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Saint Barthelemy payment gateways with concierge-grade insight
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Saint Barthelemy – BL stays
                the centre of the story while analytics, governance, and luxury-tier experiences come to life.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Schedule an island strategy session
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-emerald-500/40 text-emerald-700 hover:bg-emerald-400/10 dark:border-emerald-300/40 dark:text-emerald-100"
              >
                <Link href={demoHref}>
                  Review live demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {HERO_HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article
                  key={highlight.heading}
                  className="rounded-3xl border border-emerald-500/25 bg-white/75 p-6 backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold text-foreground">{highlight.heading}</h2>
                      <p className="text-sm text-muted-foreground">{highlight.detail}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Gateway stories inspired by WordPress
          </h2>
          <p className="text-sm text-muted-foreground">
            Cloud MLM Software has already built great systems for the greatest companies. The availability of the
            payment gateways supported for People’s Democratic Republic of Saint Barthelemy – BL transforms into
            narratives with evidence, automation, and executive value.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_STORIES.map((story) => {
            const Icon = story.icon;
            return (
              <article
                key={story.gateway}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 transition hover:-translate-y-1 hover:border-emerald-500/40 dark:border-white/10"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{story.gateway}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{story.narrative}</p>
                <p className="text-sm font-medium text-foreground">{story.focus}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-900 to-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_18%,rgba(45,212,191,0.32),transparent_45%),radial-gradient(circle_at_85%_25%,rgba(244,114,182,0.25),transparent_55%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Modules keeping the island connected</h2>
            <p className="max-w-3xl text-sm text-white/75">
              Multi currency, ticket system, auto responder, emails, KYC documentation, and e-wallet/e-voucher modules
              migrate from WordPress into an AI-ready control room.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_CARDS.map((module) => {
              const Icon = module.icon;
              return (
                <article key={module.name} className="h-full rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${module.accent}`}>
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{module.name}</h3>
                  </div>
                  <p className="mt-3 text-sm text-white/80">{module.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Expansion threads for leadership briefings
          </h2>
          <p className="text-sm text-muted-foreground">
            Each thread reveals how the preserved WordPress copy connects to governance, analytics, and regional
            collaboration.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {EXPANSION_THREADS.map((thread) => {
            const Icon = thread.icon;
            return (
              <article
                key={thread.label}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{thread.label}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{thread.summary}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container overflow-hidden rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-emerald-100 via-white to-rose-100 p-10 dark:border-emerald-300/40 dark:from-slate-950 dark:via-emerald-950/40 dark:to-slate-950">
        <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Build Saint Barthelemy’s payment gateway intelligence
            </h2>
            <p className="text-sm text-muted-foreground">
              Partner with Cloud MLM Software to align WordPress continuity, analytics, and luxury market expansion.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href={contactHref}>
                Book a concierge workshop
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-emerald-500/40 text-emerald-700 hover:bg-emerald-400/10 dark:border-emerald-300/40 dark:text-emerald-100"
            >
              <Link href={servicesHref}>
                Explore integration services
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  if (!isSupportedLocale(lang)) {
    return i18n.defaultLocale as Locale;
  }

  return lang as Locale;
}

