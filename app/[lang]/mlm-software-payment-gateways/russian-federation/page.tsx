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

type HeroStory = {
  heading: string;
  detail: string;
  icon: IconType;
};

type GatewayVector = {
  name: string;
  narrative: string;
  focus: string;
  icon: IconType;
};

type ModuleCircuit = {
  title: string;
  summary: string;
  icon: IconType;
  accent: string;
};

type StrategyTrack = {
  label: string;
  explanation: string;
  icon: IconType;
};

const HERO_STORIES: HeroStory[] = [
  {
    heading: "WordPress fidelity maintained",
    detail:
      "Ways to accept payments from MLM Software in People’s Democratic Republic of Russian Federation – RU remains untouched as the grounding statement.",
    icon: ShieldCheck
  },
  {
    heading: "Gateway inventory verified",
    detail: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree listed for the Russian Federation.",
    icon: ChartLineUp
  },
  {
    heading: "Enterprise-grade continuity",
    detail:
      "Cloud MLM Software’s global experience extends with telemetry, compliance guardrails, and regional narratives.",
    icon: Buildings
  }
];

const GATEWAY_VECTORS_RF: GatewayVector[] = [
  {
    name: "PayPal — diaspora command",
    narrative: "Serve distributors across Moscow, Saint Petersburg, and global diaspora channels.",
    focus: "Multi currency module monitors RUB, USD, EUR, and GBP settlements with anomaly alerts.",
    icon: StackSimple
  },
  {
    name: "Amazon Pay — premium retail",
    narrative: "Blend lifestyle, wellness, and digital commerce experiences for Russian-speaking markets.",
    focus: "Auto responder orchestrates launch sequences and compliance notices in Russian and English.",
    icon: Megaphone
  },
  {
    name: "PayU — regional bridge",
    narrative: "Connect Central and Eastern Europe payment rails with Russian Federation distributors.",
    focus: "Ticket system captures PSP updates, regulatory guidance, and distributor escalations.",
    icon: ClipboardText
  },
  {
    name: "Stripe — innovation studio",
    narrative: "Pilot AI-enabled services, learning platforms, and hybrid incentives.",
    focus: "Telemetry archives webhook data, conversion analytics, and experiment retrospectives.",
    icon: Waveform
  },
  {
    name: "Authorize.Net — transcontinental compliance",
    narrative: "Integrate North American acquiring with local governance expectations.",
    focus: "KYC documentation vaults contracts, identity records, and supervisory approvals.",
    icon: Compass
  },
  {
    name: "Braintree — omnichannel loyalty",
    narrative: "Align events, ecommerce, and partner programmes with measurement discipline.",
    focus: "E-wallet and e-voucher modules deliver governed payouts and incentives.",
    icon: Handshake
  }
];

const MODULE_CIRCUITS: ModuleCircuit[] = [
  {
    title: "Multi currency module",
    summary: "Display RUB and foreign currencies while automating reconciliation for finance teams.",
    icon: GlobeHemisphereEast,
    accent: "bg-blue-500/15 text-blue-900 dark:bg-blue-500/20 dark:text-blue-100"
  },
  {
    title: "Ticket system",
    summary: "Manage PSP, compliance, and distributor communications with SLA dashboards.",
    icon: ClipboardText,
    accent: "bg-red-500/15 text-red-900 dark:bg-red-500/20 dark:text-red-100"
  },
  {
    title: "Auto responder",
    summary: "Send bilingual journeys covering onboarding, renewals, and compliance checkpoints.",
    icon: Megaphone,
    accent: "bg-emerald-500/15 text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-100"
  },
  {
    title: "Emails hub",
    summary: "Leadership briefings, marketing campaigns, and operational alerts centralised.",
    icon: UsersThree,
    accent: "bg-purple-500/15 text-purple-900 dark:bg-purple-500/20 dark:text-purple-100"
  },
  {
    title: "KYC documentation",
    summary: "Maintain regulator-ready records, contracts, and identity evidence.",
    icon: ClipboardText,
    accent: "bg-yellow-500/15 text-yellow-900 dark:bg-yellow-500/20 dark:text-yellow-100"
  },
  {
    title: "E-wallet & e-voucher",
    summary: "Instant payouts and reward programmes operate with maker-checker governance.",
    icon: StackSimple,
    accent: "bg-slate-500/15 text-slate-900 dark:bg-slate-500/20 dark:text-slate-100"
  }
];

const STRATEGY_TRACKS: StrategyTrack[] = [
  {
    label: "WordPress fidelity",
    explanation: "Hero language, gateway availability, and module lists migrate unchanged for SEO and trust.",
    icon: ShieldCheck
  },
  {
    label: "Analytics telemetry",
    explanation: "Dashboards surface gateway performance, dispute ratios, and communication throughput.",
    icon: Cpu
  },
  {
    label: "Collaboration cadence",
    explanation: "Ticket, email, and documentation workflows align finance, legal, and distributor enablement.",
    icon: Lightning
  },
  {
    label: "Regional expansion",
    explanation: "Playbooks extend into Kazakhstan, Belarus, and Baltic markets with shared governance.",
    icon: Compass
  }
];

export const metadata: Metadata = {
  title: "Russian Federation MLM Payment Gateways | Cloud MLM Software",
  description:
    "Modernise Russian Federation MLM payment gateways with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, and Braintree backed by analytics and governance.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/russian-federation"
  },
  openGraph: {
    title: "Russian Federation MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People’s Democratic Republic of Russian Federation – RU, reimagined for executive insight."
  }
};

type RussianFederationPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function RussianFederationPaymentGatewayPage({ params }: RussianFederationPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const servicesHref = buildLocalizedPath("/services", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-red-900 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(37,99,235,0.3),transparent_55%),radial-gradient(circle_at_82%_22%,rgba(239,68,68,0.25),transparent_60%),radial-gradient(circle_at_60%_80%,rgba(148,163,184,0.2),transparent_65%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white">
              Ways to accept payments · Russian Federation (RU)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Russian Federation payment gateways with executive-ready insight
              </h1>
              <p className="max-w-3xl text-base text-white/80">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Russian Federation – RU
                remains the hero promise while the experience gains analytics, governance, and expansion playbooks.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-white/90">
                <Link href={contactHref}>
                  Speak with our regional desk
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-white/40 text-white hover:bg-white/15"
              >
                <Link href={demoHref}>
                  Explore live demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {HERO_STORIES.map((story) => {
              const Icon = story.icon;
              return (
                <article
                  key={story.heading}
                  className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold">{story.heading}</h2>
                      <p className="text-sm text-white/80">{story.detail}</p>
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
            Gateway vectors with compliance signals
          </h2>
          <p className="text-sm text-muted-foreground">
            Cloud MLM Software has already built great systems for the greatest companies. The availability of the
            payment gateways supported for People’s Democratic Republic of Russian Federation – RU becomes a set of
            vectors with narrative, compliance, and telemetry.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_VECTORS_RF.map((vector) => {
            const Icon = vector.icon;
            return (
              <article
                key={vector.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 transition hover:-translate-y-1 hover:border-blue-500/40 dark:border-white/10"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-700 dark:bg-blue-500/15 dark:text-blue-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{vector.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{vector.narrative}</p>
                <p className="text-sm font-medium text-foreground">{vector.focus}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_25%,rgba(37,99,235,0.2),transparent_55%),radial-gradient(circle_at_85%_20%,rgba(239,68,68,0.2),transparent_60%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Module circuits protecting operations
            </h2>
            <p className="max-w-3xl text-sm text-muted-foreground">
              Multi currency, ticket system, auto responder, emails, KYC documentation, and e-wallet/e-voucher modules
              now form a predictable circuit for the Russian Federation.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_CIRCUITS.map((module) => {
              const Icon = module.icon;
              return (
                <article key={module.title} className="rounded-3xl border border-border/60 bg-background/80 p-6 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${module.accent}`}>
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground">{module.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{module.summary}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Strategy tracks for leadership cadence
          </h2>
          <p className="text-sm text-muted-foreground">
            Each track demonstrates how WordPress fidelity transforms into analytics, collaboration, and expansion.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {STRATEGY_TRACKS.map((track) => {
            const Icon = track.icon;
            return (
              <article
                key={track.label}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-700 dark:bg-blue-500/15 dark:text-blue-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{track.label}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{track.explanation}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-br from-slate-50 via-white to-red-50 p-10 dark:border-blue-300/30 dark:from-slate-950 dark:via-blue-950/40 dark:to-slate-950">
        <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Build the Russian Federation payment intelligence layer
            </h2>
            <p className="text-sm text-muted-foreground">
              Partner with Cloud MLM Software to combine WordPress continuity with telemetry, compliance, and expansion
              playbooks.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href={contactHref}>
                Arrange an executive workshop
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
