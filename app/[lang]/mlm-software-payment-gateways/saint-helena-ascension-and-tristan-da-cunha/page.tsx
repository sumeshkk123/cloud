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
  MapTrifold,
  Megaphone,
  ShieldCheck,
  StackSimple,
  UsersThree,
  Waveform
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroBeacon = {
  title: string;
  description: string;
  icon: IconType;
};

type GatewayStrand = {
  name: string;
  narrative: string;
  focus: string;
  icon: IconType;
};

type ModuleArray = {
  name: string;
  detail: string;
  icon: IconType;
  accent: string;
};

type LeadershipLoop = {
  stage: string;
  insight: string;
  icon: IconType;
};

const HERO_BEACONS: HeroBeacon[] = [
  {
    title: "WordPress promise held",
    description:
      "Ways to accept payments from MLM Software in People’s Democratic Republic of Saint Helena, Ascension and Tristan da Cunha – SH remains word-for-word.",
    icon: ShieldCheck
  },
  {
    title: "Gateway availability confirmed",
    description: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree stay listed for the territory.",
    icon: ChartLineUp
  },
  {
    title: "Enterprise continuity",
    description:
      "Cloud MLM Software provides AI telemetry, compliance guardrails, and storytelling tailored for remote leadership teams.",
    icon: Buildings
  }
];

const GATEWAY_STRANDS: GatewayStrand[] = [
  {
    name: "PayPal — remote commerce",
    narrative: "Support island residents, supply chains, and diaspora communities with reliable settlements.",
    focus: "Multi currency module reconciles GBP, USD, EUR, and local flows with variance alerts.",
    icon: StackSimple
  },
  {
    name: "Amazon Pay — logistics-ready checkout",
    narrative: "Blend island commerce with fulfilment hubs across Africa, the UK, and South America.",
    focus: "Auto responder keeps replenishment, subscription, and compliance journeys active.",
    icon: Megaphone
  },
  {
    name: "PayU — continental bridge",
    narrative: "Connect African, European, and Latin American gateways through adaptive routing.",
    focus: "Ticket system archives PSP guidance, duty taxes, and distributor support tickets.",
    icon: ClipboardText
  },
  {
    name: "Stripe — experimentation runway",
    narrative: "Pilot digital services, membership experiences, and donation programmes.",
    focus: "Telemetry captures webhook data, conversion analytics, and experiment summaries.",
    icon: Waveform
  },
  {
    name: "Authorize.Net — transatlantic oversight",
    narrative: "Integrate North American acquiring with Saint Helena, Ascension and Tristan da Cunha governance.",
    focus: "KYC documentation vault stores contracts, identity evidence, and regulatory approvals.",
    icon: Compass
  },
  {
    name: "Braintree — incentive alignment",
    narrative: "Coordinate loyalty for tourism, trade, and partner initiatives with accountability.",
    focus: "E-wallet and e-voucher modules manage payouts, redemptions, and audit trails.",
    icon: Handshake
  }
];

const MODULE_ARRAY: ModuleArray[] = [
  {
    name: "Multi currency module",
    detail: "Automate FX, pricing, and reconciliation for GBP and foreign currencies.",
    icon: GlobeHemisphereWest,
    accent: "bg-emerald-500/15 text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-100"
  },
  {
    name: "Ticket system module",
    detail: "SLA dashboards coordinate PSP responses, compliance questions, and distributor care.",
    icon: ClipboardText,
    accent: "bg-amber-500/15 text-amber-900 dark:bg-amber-500/20 dark:text-amber-100"
  },
  {
    name: "Auto responder",
    detail: "Deliver time-zone aware communications for onboarding, promotions, and renewals.",
    icon: Megaphone,
    accent: "bg-sky-500/15 text-sky-900 dark:bg-sky-500/20 dark:text-sky-100"
  },
  {
    name: "Emails hub",
    detail: "Operational, marketing, and leadership communications centralise with analytics.",
    icon: UsersThree,
    accent: "bg-purple-500/15 text-purple-900 dark:bg-purple-500/20 dark:text-purple-100"
  },
  {
    name: "KYC documentation",
    detail: "Contracts, identity records, and regulator-ready evidence stay secure and searchable.",
    icon: ClipboardText,
    accent: "bg-blue-500/15 text-blue-900 dark:bg-blue-500/20 dark:text-blue-100"
  },
  {
    name: "E-wallet & e-voucher",
    detail: "Incentives, grant payouts, and rewards run with maker-checker governance.",
    icon: StackSimple,
    accent: "bg-rose-500/15 text-rose-900 dark:bg-rose-500/20 dark:text-rose-100"
  }
];

const LEADERSHIP_LOOPS: LeadershipLoop[] = [
  {
    stage: "Preserve WordPress fidelity",
    insight:
      "Hero language, gateway availability, and module references transfer unchanged for SEO strength and stakeholder trust.",
    icon: ShieldCheck
  },
  {
    stage: "Instrument telemetry",
    insight: "Dashboards highlight approval rates, dispute activity, and communication throughput for remote teams.",
    icon: Lightning
  },
  {
    stage: "Synchronise collaboration",
    insight: "Ticket, email, and documentation workflows align finance, legal, logistics, and distributor success.",
    icon: Buildings
  },
  {
    stage: "Expand regional alliances",
    insight: "Playbooks support outreach into South Africa, Namibia, and the UK with shared governance.",
    icon: MapTrifold
  }
];

export const metadata: Metadata = {
  title: "Saint Helena, Ascension and Tristan da Cunha MLM Payment Gateways | Cloud MLM Software",
  description:
    "Guide Saint Helena, Ascension and Tristan da Cunha MLM payment gateways with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, and Braintree backed by analytics and governance.",
  alternates: {
    canonical:
      "/mlm-software-payment-gateways/saint-helena-ascension-and-tristan-da-cunha"
  },
  openGraph: {
    title: "Saint Helena, Ascension and Tristan da Cunha MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People’s Democratic Republic of Saint Helena, Ascension and Tristan da Cunha – SH, reimagined for leadership clarity."
  }
};

type SaintHelenaAscensionAndTristanDaCunhaPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function SaintHelenaAscensionAndTristanDaCunhaPaymentGatewayPage({ params }: SaintHelenaAscensionAndTristanDaCunhaPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const servicesHref = buildLocalizedPath("/services", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-100 via-white to-blue-100 py-20 dark:from-slate-950 dark:via-emerald-950/40 dark:to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(45,212,191,0.22),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.2),transparent_60%),radial-gradient(circle_at_55%_80%,rgba(14,165,233,0.15),transparent_65%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-white/75 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700 shadow-sm dark:border-emerald-300/40 dark:bg-white/10 dark:text-emerald-100">
              Ways to accept payments · Saint Helena, Ascension & Tristan da Cunha (SH)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Payment gateways orchestrated for remote island leadership
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Saint Helena, Ascension and
                Tristan da Cunha – SH anchors the experience, now surrounded by analytics, automation, and coordination
                built for remote operations.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Coordinate a leadership workshop
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
            {HERO_BEACONS.map((beacon) => {
              const Icon = beacon.icon;
              return (
                <article
                  key={beacon.title}
                  className="rounded-3xl border border-emerald-500/25 bg-white/75 p-6 backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold text-foreground">{beacon.title}</h2>
                      <p className="text-sm text-muted-foreground">{beacon.description}</p>
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
            Gateway strands translated from WordPress
          </h2>
          <p className="text-sm text-muted-foreground">
            Cloud MLM Software has already built great systems for the greatest companies. The availability of the
            payment gateways supported for People’s Democratic Republic of Saint Helena, Ascension and Tristan da Cunha –
            SH now includes mission statements, evidence, and automation layers.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_STRANDS.map((strand) => {
            const Icon = strand.icon;
            return (
              <article
                key={strand.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 transition hover:-translate-y-1 hover:border-emerald-500/40 dark:border-white/10"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{strand.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{strand.narrative}</p>
                <p className="text-sm font-medium text-foreground">{strand.focus}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-900 to-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_18%,rgba(45,212,191,0.32),transparent_45%),radial-gradient(circle_at_85%_25%,rgba(56,189,248,0.25),transparent_55%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Modules sustaining remote operations</h2>
            <p className="max-w-3xl text-sm text-white/75">
              Multi currency, ticket system, auto responder, emails, KYC documentation, and e-wallet/e-voucher modules
              become a resilient operations layer for the territory.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_ARRAY.map((module) => {
              const Icon = module.icon;
              return (
                <article key={module.name} className="h-full rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${module.accent}`}>
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{module.name}</h3>
                  </div>
                  <p className="mt-3 text-sm text-white/80">{module.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Leadership loops for distributed teams
          </h2>
          <p className="text-sm text-muted-foreground">
            Each loop ties WordPress fidelity to telemetry, collaboration, and regional alliances.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {LEADERSHIP_LOOPS.map((loop) => {
            const Icon = loop.icon;
            return (
              <article
                key={loop.stage}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{loop.stage}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{loop.insight}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container overflow-hidden rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-emerald-100 via-white to-blue-100 p-10 dark:border-emerald-300/40 dark:from-slate-950 dark:via-emerald-950/40 dark:to-slate-950">
        <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Coordinate a remote payment strategy
            </h2>
            <p className="text-sm text-muted-foreground">
              Partner with Cloud MLM Software to connect WordPress continuity with telemetry, collaboration, and
              regional scaling playbooks for Saint Helena, Ascension and Tristan da Cunha.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href={contactHref}>
                Start planning
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

