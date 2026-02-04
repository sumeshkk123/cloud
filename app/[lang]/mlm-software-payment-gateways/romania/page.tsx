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
  Cpu,
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

type HeroPanel = {
  title: string;
  message: string;
  icon: IconType;
};

type GatewayFramework = {
  gateway: string;
  initiative: string;
  signal: string;
  icon: IconType;
};

type ModuleCluster = {
  name: string;
  description: string;
  icon: IconType;
  accent: string;
};

type LeadershipScoreboard = {
  label: string;
  detail: string;
  icon: IconType;
};

const HERO_PANELS: HeroPanel[] = [
  {
    title: "WordPress anchor",
    message:
      "Ways to accept payments from MLM Software in People’s Democratic Republic of Romania – RO stays word-for-word in the hero narrative.",
    icon: ShieldCheck
  },
  {
    title: "Gateway roster",
    message: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree confirmed for Romania’s operations.",
    icon: ChartLineUp
  },
  {
    title: "Enterprise continuity",
    message:
      "Cloud MLM Software already supports global leaders; Romania now gains telemetry, automation, and EU-ready governance.",
    icon: Buildings
  }
];

const GATEWAY_FRAMEWORKS: GatewayFramework[] = [
  {
    gateway: "PayPal — diaspora treasury",
    initiative: "Enable Bucharest, Cluj, and global distributors with transparent settlements.",
    signal: "Multi currency module monitors EUR, USD, RON, and GBP flows with variance alerts.",
    icon: StackSimple
  },
  {
    gateway: "Amazon Pay — premium commerce",
    initiative: "Support cosmeceutical, lifestyle, and technology brands expanding across the EU.",
    signal: "Auto responder nurtures reorders, subscriptions, and compliance confirmations in Romanian and English.",
    icon: Megaphone
  },
  {
    gateway: "PayU — Central European bridge",
    initiative: "Connect Romania’s market with Poland, Hungary, and Baltics using unified routing.",
    signal: "Ticket workflows capture PSP updates, VAT evidence, and distributor escalations.",
    icon: ClipboardText
  },
  {
    gateway: "Stripe — innovation velocity",
    initiative: "Prototype AI-led platforms, blended learning journeys, and hybrid incentives safely.",
    signal: "Telemetry archives webhook data, conversion analytics, and experiment briefings.",
    icon: Waveform
  },
  {
    gateway: "Authorize.Net — transatlantic partnership",
    initiative: "Fuse North American acquiring with Romania’s governance expectations.",
    signal: "KYC documentation vault secures contracts, approvals, and identity evidence.",
    icon: Compass
  },
  {
    gateway: "Braintree — omnichannel loyalty",
    initiative: "Align field events, ecommerce, and partner incentives with accountability.",
    signal: "E-wallet and e-voucher modules deliver trackable rewards and maker-checker payouts.",
    icon: Handshake
  }
];

const MODULE_CLUSTERS: ModuleCluster[] = [
  {
    name: "Multi currency module",
    description: "Showcase EUR and RON pricing while automating reconciliation for finance leadership.",
    icon: GlobeHemisphereEast,
    accent: "bg-blue-500/15 text-blue-900 dark:bg-blue-500/20 dark:text-blue-100"
  },
  {
    name: "Ticket system module",
    description: "PSP support, compliance questions, and distributor care flow through SLA dashboards.",
    icon: ClipboardText,
    accent: "bg-yellow-500/15 text-yellow-900 dark:bg-yellow-500/20 dark:text-yellow-100"
  },
  {
    name: "Auto responder",
    description: "Journey-based communications deliver launches, renewals, and compliance reminders in two languages.",
    icon: Megaphone,
    accent: "bg-red-500/15 text-red-900 dark:bg-red-500/20 dark:text-red-100"
  },
  {
    name: "Emails hub",
    description: "Leadership briefings, marketing stories, and operational alerts stay aligned in one workspace.",
    icon: UsersThree,
    accent: "bg-indigo-500/15 text-indigo-900 dark:bg-indigo-500/20 dark:text-indigo-100"
  },
  {
    name: "KYC documentation",
    description: "Contracts, IDs, and regulatory approvals remain audit-ready for Romanian authorities.",
    icon: ClipboardText,
    accent: "bg-emerald-500/15 text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-100"
  },
  {
    name: "E-wallet & e-voucher",
    description: "Instant payouts and loyalty campaigns operate with governance checkpoints.",
    icon: StackSimple,
    accent: "bg-purple-500/15 text-purple-900 dark:bg-purple-500/20 dark:text-purple-100"
  }
];

const LEADERSHIP_SCOREBOARD: LeadershipScoreboard[] = [
  {
    label: "WordPress fidelity",
    detail: "Hero copy, module listings, and availability statements migrate without alteration.",
    icon: ShieldCheck
  },
  {
    label: "Analytics uplift",
    detail: "Dashboards surface approval rates, dispute trends, and communication throughput.",
    icon: Cpu
  },
  {
    label: "Collaboration cadence",
    detail: "Ticket, email, and documentation workflows align finance, legal, and distributor success teams.",
    icon: Lightning
  },
  {
    label: "EU expansion",
    detail: "Insights scale into neighbouring markets—Bulgaria, Hungary, and Austria—without losing governance.",
    icon: Compass
  }
];

export const metadata: Metadata = {
  title: "Romania MLM Payment Gateways | Cloud MLM Software",
  description:
    "Advance Romania’s MLM payment gateways with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, and Braintree supported by analytics and governance.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/romania"
  },
  openGraph: {
    title: "Romania MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People’s Democratic Republic of Romania – RO, reframed for leadership visibility."
  }
};

type RomaniaPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function RomaniaPaymentGatewayPage({ params }: RomaniaPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const servicesHref = buildLocalizedPath("/services", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50 py-20 dark:from-slate-950 dark:via-blue-950/40 dark:to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,0.18),transparent_55%),radial-gradient(circle_at_82%_18%,rgba(239,68,68,0.18),transparent_60%),radial-gradient(circle_at_55%_80%,rgba(253,224,71,0.18),transparent_65%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-white/75 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-blue-700 shadow-sm dark:border-blue-300/40 dark:bg-white/10 dark:text-blue-100">
              Ways to accept payments · Romania (RO)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Romania payment gateways prepared for EU leadership
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Romania – RO remains the
                anchor while we layer analytics, accountability, and regional playbooks.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Talk with our Bucharest team
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-blue-500/40 text-blue-700 hover:bg-blue-500/10 dark:border-blue-300/40 dark:text-blue-100"
              >
                <Link href={demoHref}>
                  Explore live demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {HERO_PANELS.map((panel) => {
              const Icon = panel.icon;
              return (
                <article
                  key={panel.title}
                  className="rounded-3xl border border-blue-500/25 bg-white/75 p-6 backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/15 text-blue-700 dark:bg-blue-500/20 dark:text-blue-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold text-foreground">{panel.title}</h2>
                      <p className="text-sm text-muted-foreground">{panel.message}</p>
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
            Gateway frameworks with measurable signals
          </h2>
          <p className="text-sm text-muted-foreground">
            Cloud MLM Software has already built great systems for the greatest companies. The availability of the
            payment gateways supported for People’s Democratic Republic of Romania – RO now includes initiatives,
            signals, and compliance overlays.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_FRAMEWORKS.map((framework) => {
            const Icon = framework.icon;
            return (
              <article
                key={framework.gateway}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 transition hover:-translate-y-1 hover:border-blue-500/40 dark:border-white/10"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-700 dark:bg-blue-500/15 dark:text-blue-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{framework.gateway}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{framework.initiative}</p>
                <p className="text-sm font-medium text-foreground">{framework.signal}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_18%,rgba(59,130,246,0.32),transparent_45%),radial-gradient(circle_at_85%_25%,rgba(239,68,68,0.25),transparent_55%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Modules orchestrated for Romania</h2>
            <p className="max-w-3xl text-sm text-white/75">
              Multi currency, ticket system, auto responder, emails, KYC documentation, and e-wallet/e-voucher modules
              evolve into an intelligence layer for Romania.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_CLUSTERS.map((module) => {
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
            Leadership scoreboard for decision clarity
          </h2>
          <p className="text-sm text-muted-foreground">
            Each scoreboard tile links the preserved WordPress content to governance, analytics, and expansion goals.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {LEADERSHIP_SCOREBOARD.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.label}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-700 dark:bg-blue-500/15 dark:text-blue-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{item.label}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container overflow-hidden rounded-3xl border border-blue-500/40 bg-gradient-to-br from-blue-50 via-white to-red-50 p-10 dark:border-blue-300/40 dark:from-slate-950 dark:via-blue-950/40 dark:to-slate-950">
        <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Build Romania’s payment gateway command centre
            </h2>
            <p className="text-sm text-muted-foreground">
              Align WordPress fidelity, analytics, and EU-ready governance with Cloud MLM Software as your partner.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href={contactHref}>
                Book a leadership briefing
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-blue-500/40 text-blue-700 hover:bg-blue-500/10 dark:border-blue-300/40 dark:text-blue-100"
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

