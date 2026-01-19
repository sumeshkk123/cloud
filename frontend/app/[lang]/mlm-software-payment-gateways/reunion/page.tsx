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
  GlobeHemisphereEast,
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

type HeroSignal = {
  label: string;
  detail: string;
  icon: IconType;
};

type GatewayChronicle = {
  title: string;
  synopsis: string;
  focus: string;
  icon: IconType;
};

type ModuleMosaic = {
  name: string;
  description: string;
  icon: IconType;
  accent: string;
};

type RegionalOrbit = {
  region: string;
  description: string;
  icon: IconType;
};

const HERO_SIGNALS: HeroSignal[] = [
  {
    label: "WordPress language preserved",
    detail:
      "Ways to accept payments from MLM Software in People’s Democratic Republic of Réunion – RE stays unchanged at the heart of the page.",
    icon: ShieldCheck
  },
  {
    label: "Gateway fidelity",
    detail: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree remain validated for the island economy.",
    icon: ChartLineUp
  },
  {
    label: "Enterprise continuity",
    detail:
      "Cloud MLM Software’s track record continues with telemetry, automation, and island-specific guidance for leadership.",
    icon: Buildings
  }
];

const GATEWAY_CHRONICLES: GatewayChronicle[] = [
  {
    title: "PayPal — diaspora heartbeat",
    synopsis: "Connect Saint-Denis, Paris, and global diaspora networks with dependable settlements.",
    focus: "Multi currency ledgers reconcile EUR, USD, and local holdings with anomaly alerts.",
    icon: StackSimple
  },
  {
    title: "Amazon Pay — premium commerce",
    synopsis: "Support hospitality, tourism, and wellness brands bridging physical and digital channels.",
    focus: "Auto responder delivers curated journeys and replenishment reminders in French and English.",
    icon: Megaphone
  },
  {
    title: "PayU — regional gateway",
    synopsis: "Expand reach into Africa, India, and Europe via unified routing intelligence.",
    focus: "Ticket system records PSP requirements, tax notices, and distributor escalations.",
    icon: ClipboardText
  },
  {
    title: "Stripe — experimentation studio",
    synopsis: "Prototype AI-led products, subscriptions, and partner experiences quickly.",
    focus: "Telemetry tracks webhook signals, conversion analytics, and experiment outcomes.",
    icon: Waveform
  },
  {
    title: "Authorize.Net — transatlantic rigour",
    synopsis: "Blend US acquiring relationships with Réunion’s regulatory landscape.",
    focus: "Documentation vault retains contracts, identity records, and compliance evidence.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Braintree — loyalty ecosystem",
    synopsis: "Merge local events, ecommerce, and partner incentives with audit-ready detail.",
    focus: "E-wallet and e-voucher modules govern payouts, rewards, and redemption analytics.",
    icon: Handshake
  }
];

const MODULE_MOSAICS: ModuleMosaic[] = [
  {
    name: "Multi currency module",
    description: "Deliver EUR pricing, accommodate FX, and streamline reconciliation for finance leads.",
    icon: GlobeHemisphereEast,
    accent: "bg-sky-500/15 text-sky-900 dark:bg-sky-500/20 dark:text-sky-100"
  },
  {
    name: "Ticket system module",
    description: "Coordinate PSP responses, compliance actions, and distributor care with SLA dashboards.",
    icon: ClipboardText,
    accent: "bg-amber-500/15 text-amber-900 dark:bg-amber-500/20 dark:text-amber-100"
  },
  {
    name: "Auto responder",
    description: "Design bilingual sequences for onboarding, promotions, and renewals.",
    icon: Megaphone,
    accent: "bg-emerald-500/15 text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-100"
  },
  {
    name: "Emails hub",
    description: "Synchronise operational, marketing, and executive communications in one workspace.",
    icon: UsersThree,
    accent: "bg-indigo-500/15 text-indigo-900 dark:bg-indigo-500/20 dark:text-indigo-100"
  },
  {
    name: "KYC documentation",
    description: "Secure onboarding, identity, and compliance records for regulator-ready evidence.",
    icon: ClipboardText,
    accent: "bg-blue-500/15 text-blue-900 dark:bg-blue-500/20 dark:text-blue-100"
  },
  {
    name: "E-wallet & e-voucher",
    description: "Instant payouts and reward programmes maintain maker-checker governance.",
    icon: StackSimple,
    accent: "bg-rose-500/15 text-rose-900 dark:bg-rose-500/20 dark:text-rose-100"
  }
];

const REGIONAL_ORBITS: RegionalOrbit[] = [
  {
    region: "Indian Ocean alliances",
    description: "Réunion, Mauritius, and Madagascar share gateway insights, FX guardrails, and best practices.",
    icon: Compass
  },
  {
    region: "European integration",
    description: "French compliance, VAT, and GDPR expectations remain aligned with island operations.",
    icon: ClipboardText
  },
  {
    region: "Global diaspora",
    description: "Communications and payouts reach communities across Europe, Canada, and the Indian diaspora.",
    icon: Lightning
  }
];

export const metadata: Metadata = {
  title: "Réunion MLM Payment Gateways | Cloud MLM Software",
  description:
    "Advance Réunion’s MLM payment gateways with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, and Braintree guided by analytics and governance.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/reunion"
  },
  openGraph: {
    title: "Réunion MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People’s Democratic Republic of Réunion – RE, now reimagined for leadership clarity."
  }
};

type ReunionPageProps = {
  params: { lang: SupportedLocale };
};

export default function ReunionPaymentGatewayPage({ params }: ReunionPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const servicesHref = buildLocalizedPath("/services", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-white to-emerald-100 py-20 dark:from-slate-950 dark:via-sky-950/40 dark:to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_82%_18%,rgba(45,212,191,0.2),transparent_60%),radial-gradient(circle_at_55%_80%,rgba(14,165,233,0.15),transparent_65%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-white/75 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-sky-700 shadow-sm dark:border-sky-300/30 dark:bg-white/10 dark:text-sky-100">
              Ways to accept payments · Réunion (RE)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Réunion payment gateways orchestrated for island growth
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Réunion – RE remains the
                hero narrative, now paired with analytics, automation, and stories aligned with island leadership.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Schedule a strategy call
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-sky-500/40 text-sky-700 hover:bg-sky-400/10 dark:border-sky-300/40 dark:text-sky-100"
              >
                <Link href={demoHref}>
                  Explore live demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {HERO_SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article
                  key={signal.label}
                  className="rounded-3xl border border-sky-500/25 bg-white/75 p-6 backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-sky-500/20 dark:text-sky-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold text-foreground">{signal.label}</h2>
                      <p className="text-sm text-muted-foreground">{signal.detail}</p>
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
            Gateway chronicles rooted in WordPress
          </h2>
          <p className="text-sm text-muted-foreground">
            Cloud MLM Software has already built great systems for the greatest companies. The availability of the
            payment gateways supported for People’s Democratic Republic of Réunion – RE evolves into a narrative that
            combines telemetry, compliance, and island context.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_CHRONICLES.map((chronicle) => {
            const Icon = chronicle.icon;
            return (
              <article
                key={chronicle.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 transition hover:-translate-y-1 hover:border-sky-500/40 dark:border-white/10"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 text-sky-700 dark:bg-sky-500/15 dark:text-sky-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{chronicle.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{chronicle.synopsis}</p>
                <p className="text-sm font-medium text-foreground">{chronicle.focus}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-sky-900 to-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_18%,rgba(56,189,248,0.32),transparent_45%),radial-gradient(circle_at_85%_25%,rgba(45,212,191,0.28),transparent_55%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Modules supporting Réunion daily</h2>
            <p className="max-w-3xl text-sm text-white/75">
              Multi currency, ticket system, auto responder, emails, KYC documentation, and e-wallet/e-voucher modules
              unite into a control centre designed for island growth.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_MOSAICS.map((module) => {
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
            Regional orbits extending the island’s influence
          </h2>
          <p className="text-sm text-muted-foreground">
            Réunion sits at the crossroads of Europe, Africa, and the Indian Ocean. These orbits show how WordPress
            content becomes a strategic hub.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {REGIONAL_ORBITS.map((orbit) => {
            const Icon = orbit.icon;
            return (
              <article
                key={orbit.region}
                className="rounded-3xl border border-border/60 bg-background p-6 transition hover:-translate-y-1 hover:border-sky-500/40 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 text-sky-700 dark:bg-sky-500/15 dark:text-sky-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{orbit.region}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{orbit.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container overflow-hidden rounded-3xl border border-sky-500/40 bg-gradient-to-br from-sky-100 via-white to-emerald-100 p-10 dark:border-sky-300/40 dark:from-slate-950 dark:via-sky-950/40 dark:to-slate-950">
        <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Partner with Cloud MLM Software for Réunion
            </h2>
            <p className="text-sm text-muted-foreground">
              Combine WordPress continuity, AI telemetry, and region-specific playbooks to advance Réunion’s MLM
              gateway strategy.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href={contactHref}>
                Book a discovery session
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-sky-500/40 text-sky-700 hover:bg-sky-400/10 dark:border-sky-300/40 dark:text-sky-100"
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

