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
  AirTrafficControl,
  AirplaneTilt,
  Archive,
  Brain,
  Bridge,
  CirclesThreePlus,
  Coins,
  Cpu,
  CurrencyCircleDollar,
  Database,
  Envelope,
  Factory,
  Fingerprint,
  FlagBanner,
  Gift,
  Gauge,
  GlobeHemisphereWest,
  GlobeSimple,
  Handshake,
  IdentificationCard,
  Megaphone,
  Palette,
  Path,
  RocketLaunch,
  Scroll,
  ShieldCheck,
  ShoppingBagOpen,
  ShoppingCart,
  Ticket,
  Translate,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Insight = {
  title: string;
  detail: string;
  icon: IconType;
  accent: string;
};

type Focus = {
  title: string;
  description: string;
  icon: IconType;
};

type GatewayBlueprint = {
  name: string;
  headline: string;
  bullets: string[];
  icon: IconType;
  accent: string;
};

type ModuleCard = {
  title: string;
  description: string;
  icon: IconType;
  accent: string;
};

type RegulatoryMoment = {
  stage: string;
  description: string;
  icon: IconType;
};

type RegionLink = {
  region: string;
  description: string;
  icon: IconType;
};

const INSIGHTS: Insight[] = [
  {
    title: "WordPress pledge",
    detail:
      "We retain the promise “Ways to accept payments from MLM Software in People’s Democratic Republic of France – FR” while elevating the delivery framework.",
    icon: FlagBanner,
    accent: "bg-blue-500/15 text-blue-800 dark:bg-blue-500/20 dark:text-blue-100"
  },
  {
    title: "Gateway roster",
    detail: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout remain at the core of the France strategy.",
    icon: AirTrafficControl,
    accent: "bg-rose-500/15 text-rose-700 dark:bg-rose-500/20 dark:text-rose-100"
  },
  {
    title: "Modular foundations",
    detail:
      "Multi currency, ticketing, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, and multi-lingual capability stay in scope.",
    icon: CirclesThreePlus,
    accent: "bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-100"
  }
];

const HERO_FOCUSES: Focus[] = [
  {
    title: "Custom MLM software development",
    description:
      "The custom demo journey from the legacy site becomes an engineered playbook—from discovery workshops to deployment sprints tailored for France.",
    icon: Factory
  },
  {
    title: "E-commerce integration",
    description:
      "WooCommerce, Shopify, and marketplace integrations mirrored from WordPress are orchestrated with API-first governance for European launch cycles.",
    icon: ShoppingCart
  },
  {
    title: "Experience design leadership",
    description:
      "Website design, web development, and branding services highlighted in the legacy content now align to corporate storytelling and AI-ready UX.",
    icon: Palette
  }
];

const GATEWAY_BLUEPRINTS: GatewayBlueprint[] = [
  {
    name: "PayPal — diaspora trust",
    headline: "Turn Paris, Lyon, Montréal, and Dakar distributors into a unified treasury rhythm.",
    bullets: [
      "Multi currency module reconciles EUR, CAD, USD, and XOF flows before CFO approval.",
      "Ticket workflows archive ACPR correspondence, VAT filings, and partner credentials."
    ],
    icon: CurrencyCircleDollar,
    accent: "border-blue-500/40 bg-blue-50/70 dark:border-blue-400/40 dark:bg-blue-500/10"
  },
  {
    name: "Amazon Pay — premium retail polish",
    headline: "Elevate omnichannel launches for beauty, luxury, and wellness brands across France.",
    bullets: [
      "Auto responder issues bilingual receipts, kit manuals, and replenishment nudges instantly.",
      "Backup manager protects flash campaigns and launch-day AI telemetry."
    ],
    icon: ShoppingBagOpen,
    accent: "border-amber-500/40 bg-amber-50/70 dark:border-amber-400/30 dark:bg-amber-500/10"
  },
  {
    name: "PayU — continental expansion",
    headline: "Bridge EU, India, and francophone Africa acquiring corridors without losing oversight.",
    bullets: [
      "Emails module shares PSD2, SEPA, and RBI updates with leadership summaries.",
      "KYC documentation vault tracks distributor verification and renewal alerts."
    ],
    icon: Path,
    accent: "border-emerald-500/40 bg-emerald-50/70 dark:border-emerald-400/40 dark:bg-emerald-500/10"
  },
  {
    name: "Stripe — digital experiences",
    headline: "Prototype AI-led learning portals and subscriptions for the French market.",
    bullets: [
      "Automation captures webhook analytics for Shopify, Magento, and custom stacks.",
      "Ticket system passes AI-generated reproduction logs to engineering pods."
    ],
    icon: Cpu,
    accent: "border-purple-500/40 bg-purple-50/70 dark:border-purple-400/40 dark:bg-purple-500/10"
  },
  {
    name: "Authorize.Net — enterprise rigour",
    headline: "Blend US acquiring with French governance, board oversight, and joint ventures.",
    bullets: [
      "Multi-lingual system presents contracts in French and English with consistent revisions.",
      "Shielded artefacts archive sanction checks, wet signatures, and leadership approvals."
    ],
    icon: ShieldCheck,
    accent: "border-slate-500/40 bg-slate-50/70 dark:border-slate-400/40 dark:bg-slate-500/10"
  },
  {
    name: "Braintree — omnichannel velocity",
    headline: "Tokenised payments power boutique pop-ups, wellness salons, and hybrid roadshows.",
    bullets: [
      "E-wallet module streams incentives with maker-checker governance and liquidity alerts.",
      "Backup manager safeguards offline capture flows for audits and service recovery."
    ],
    icon: Handshake,
    accent: "border-cyan-500/40 bg-cyan-50/70 dark:border-cyan-400/40 dark:bg-cyan-500/10"
  },
  {
    name: "Adyen — unified ledger",
    headline: "Compare EU, UK, and US conversion trends from a single observability layer.",
    bullets: [
      "Gauge dashboards highlight interchange variance, decline codes, and FX exposure.",
      "Ticket system auto-attaches Adyen risk alerts to compliance cases."
    ],
    icon: Gauge,
    accent: "border-rose-500/40 bg-rose-50/70 dark:border-rose-400/40 dark:bg-rose-500/10"
  },
  {
    name: "2Checkout — digital export runway",
    headline: "Distribute digital kits, education packs, and AI enablement beyond France.",
    bullets: [
      "Auto responder nurtures onboarding sequences with compliance checkpoints embedded.",
      "Chats and knowledge base syndicate legacy FAQs into AI-ready documentation."
    ],
    icon: RocketLaunch,
    accent: "border-indigo-500/40 bg-indigo-50/70 dark:border-indigo-400/40 dark:bg-indigo-500/10"
  }
];

const MODULES: ModuleCard[] = [
  {
    title: "Multi currency module",
    description: "Balances EUR, CHF, GBP, CAD, and USD settlements with treasury-ready dashboards for France.",
    icon: Coins,
    accent: "bg-blue-500/10 text-blue-800 dark:bg-blue-500/15 dark:text-blue-100"
  },
  {
    title: "Ticket system module",
    description: "Routes ACPR, PSP, and distributor cases with SLA heatmaps and AI summaries for leadership.",
    icon: Ticket,
    accent: "bg-rose-500/10 text-rose-700 dark:bg-rose-500/15 dark:text-rose-100"
  },
  {
    title: "Auto responder",
    description: "Delivers bilingual lifecycle messaging, renewals, and compliance prompts instantly.",
    icon: Megaphone,
    accent: "bg-amber-500/10 text-amber-700 dark:bg-amber-500/15 dark:text-amber-100"
  },
  {
    title: "E-voucher engine",
    description: "Funds promotions, pop-ups, and charitable drives with tracked approvals.",
    icon: Gift,
    accent: "bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-100"
  },
  {
    title: "E-wallet module",
    description: "Streams instant commissions with liquidity guardrails, audit logs, and dispute workflows.",
    icon: Wallet,
    accent: "bg-cyan-500/10 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-100"
  },
  {
    title: "Backup manager",
    description: "Maintains encrypted snapshots for storefronts, onboarding portals, and AI analytics.",
    icon: Archive,
    accent: "bg-slate-500/10 text-slate-700 dark:bg-slate-500/15 dark:text-slate-100"
  },
  {
    title: "Emails module",
    description: "Coordinates campaign, transactional, and compliance communication from one command centre.",
    icon: Envelope,
    accent: "bg-indigo-500/10 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-100"
  },
  {
    title: "KYC documentation",
    description: "Stores ID records, sanction checks, and renewal reminders aligned with Tracfin mandates.",
    icon: IdentificationCard,
    accent: "bg-purple-500/10 text-purple-700 dark:bg-purple-500/15 dark:text-purple-100"
  },
  {
    title: "Multi-lingual system",
    description: "Keeps French, English, Spanish, and Arabic experiences consistent across portals.",
    icon: Translate,
    accent: "bg-teal-500/10 text-teal-700 dark:bg-teal-500/15 dark:text-teal-100"
  }
];

const REGULATORY_MOMENTS: RegulatoryMoment[] = [
  {
    stage: "PSD2 & DSP2 readiness",
    description: "PSD2 and DSP2 mandates feed into AI dashboards so product and compliance leaders stay synchronised.",
    icon: Scroll
  },
  {
    stage: "Tracfin & AML vigilance",
    description: "KYC, e-wallet, and ticketing data sync to AML workflows, making Tracfin responses auditable.",
    icon: Fingerprint
  },
  {
    stage: "AI telemetry for executives",
    description: "Brain trust briefings summarise revenue, attrition, and support threads for the French board in minutes.",
    icon: Brain
  },
  {
    stage: "Data residency & CNIL alignment",
    description: "Encrypted backups, consent logs, and localisation meet CNIL expectations while scaling globally.",
    icon: Database
  }
];

const REGIONAL_LINKS: RegionLink[] = [
  {
    region: "European Union alliances",
    description: "Paris compares conversion, chargeback, and onboarding metrics with Berlin, Madrid, and Milan.",
    icon: GlobeSimple
  },
  {
    region: "North American diaspora",
    description: "Montréal and Québec teams share bilingual enablement cadences and wallet playbooks with France.",
    icon: GlobeHemisphereWest
  },
  {
    region: "Africa & francophone growth",
    description: "Dakar, Abidjan, and Casablanca programmes reuse compliance scripts and payment playbooks.",
    icon: Bridge
  },
  {
    region: "Asia-Pacific expansion",
    description: "Singapore and Nouméa hubs align premium experiences and service rituals for fast launches.",
    icon: AirplaneTilt
  }
];

export const metadata: Metadata = {
  title: "France MLM Payment Gateways | Cloud MLM Software",
  description:
    "Modernise the France MLM payment gateway lineup across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with AI-ready governance.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/france"
  },
  openGraph: {
    title: "France MLM Payment Gateways",
    description: "Ways to accept payments from MLM Software in France with corporate-grade automation and compliance."
  }
};

type FrancePageProps = {
  params: { lang: SupportedLocale };
};

export default function FrancePaymentGatewayPage({ params }: FrancePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 dark:from-slate-950 dark:via-slate-950 dark:to-blue-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(37,99,235,0.14),transparent_55%),radial-gradient(circle_at_80%_14%,rgba(244,63,94,0.12),transparent_55%),radial-gradient(circle_at_60%_80%,rgba(16,185,129,0.12),transparent_55%)]" />
        <div className="container relative grid gap-14 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-blue-800 shadow-sm dark:border-white/15 dark:bg-white/10 dark:text-white/80">
              Ways to accept payments · France (FR)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                France MLM payment gateways orchestrated for regulated scale
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground">
                We honour the WordPress headline—“Ways to accept payments from MLM Software in People’s Democratic Republic of France – FR”—and expand it with AI telemetry, compliance guardrails, and experience design tuned for corporate growth.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Speak with a Paris strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-blue-500/60 text-blue-700 hover:bg-blue-500/10 dark:border-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  Request the France demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {INSIGHTS.map((insight) => {
                const Icon = insight.icon;
                return (
                  <article
                    key={insight.title}
                    className="rounded-3xl border border-white/60 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${insight.accent}`}>
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold text-foreground">{insight.title}</h2>
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground">{insight.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="relative flex flex-col gap-6 rounded-3xl border border-blue-500/20 bg-white/80 p-8 backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="space-y-4">
              <h2 className="text-base font-semibold text-foreground">France delivery focus areas</h2>
              <p className="text-sm text-muted-foreground">
                The legacy page highlighted custom demos, commerce integrations, and design services. We translate those into three delivery pillars orchestrated by our France command centre.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {HERO_FOCUSES.map((focus) => {
                const Icon = focus.icon;
                return (
                  <div
                    key={focus.title}
                    className="flex items-start gap-4 rounded-2xl border border-border/50 bg-background/80 p-4 dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15 text-blue-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-sm font-semibold text-foreground">{focus.title}</h3>
                      <p className="text-xs text-muted-foreground">{focus.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="rounded-2xl border border-dashed border-blue-500/40 bg-blue-500/5 p-5 text-sm text-blue-900 dark:border-blue-400/40 dark:bg-blue-500/15 dark:text-blue-100">
              Every project reports into a single command board with AI briefings for executives, aligning demos, integrations, and experience design with France’s regulatory timeline.
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Gateway briefings tailored to France’s cross-border ambitions
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            The WordPress roster of eight payment connectors returns—now reframed with automation, compliance, and intelligence for France’s distributors, retailers, and partners.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_BLUEPRINTS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className={`flex h-full flex-col gap-4 rounded-3xl border p-6 transition hover:-translate-y-1 hover:shadow-lg ${gateway.accent}`}
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-foreground dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{gateway.name}</h3>
                    <p className="text-sm text-muted-foreground">{gateway.headline}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span aria-hidden className="mt-1 inline-flex h-2 w-2 rounded-full bg-foreground/60" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.12),transparent_55%),radial-gradient(circle_at_85%_75%,rgba(16,185,129,0.12),transparent_55%)]" />
        <div className="container relative space-y-10 rounded-[3rem] border border-border/50 bg-white/80 p-10 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-col gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div className="space-y-4">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Modular stack powering France’s payment operations
              </h2>
              <p className="max-w-2xl text-sm text-muted-foreground">
                The modules listed on WordPress remain the backbone—now delivered with AI automation, data lineage, and performance instrumentation for the France team.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link href={modulesHref}>
                Review all modules
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 transition hover:-translate-y-1.5 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${module.accent}`}>
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-foreground">{module.title}</h3>
                    <p className="text-sm text-muted-foreground">{module.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[0.85fr,1.15fr] lg:items-start">
          <div className="space-y-6">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Compliance runway and executive governance
            </h2>
            <p className="text-sm text-muted-foreground">
              France’s leadership teams receive AI-generated briefings that blend payment performance, regulatory filings, and customer experience signals. The checkpoints from the legacy page now connect into a single governance journey.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="outline" className="gap-2 border-border text-foreground hover:bg-foreground/10 dark:border-white/15">
                <Link href={pricingHref}>
                  Explore pricing options
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Start a compliance workshop
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative rounded-3xl border border-border/60 bg-background/80 p-8 dark:border-white/10 dark:bg-white/5">
            <div className="absolute left-10 top-12 h-[calc(100%-6rem)] w-px bg-gradient-to-b from-blue-500/60 via-border to-transparent" />
            <div className="space-y-8">
              {REGULATORY_MOMENTS.map((moment, index) => {
                const Icon = moment.icon;
                return (
                  <div key={moment.stage} className="relative pl-16">
                    <div className="absolute left-0 top-1 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/15 text-blue-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <span className="absolute left-5 top-14 h-8 w-px bg-border/70" aria-hidden />
                    <h3 className="text-base font-semibold text-foreground">{moment.stage}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{moment.description}</p>
                    {index === REGULATORY_MOMENTS.length - 1 ? null : <div className="mt-6" />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-950 via-blue-900 to-indigo-900 py-20 text-white">
        <div className="container space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Regional intelligence shared from the France command centre
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/70">
              The original WordPress page listed every geography Cloud MLM Software supports. France keeps that global mindset with curated intelligence exchanges.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {REGIONAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <article key={link.region} className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/10 p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{link.region}</h3>
                  </div>
                  <p className="text-sm text-white/75">{link.description}</p>
                </article>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-blue-900 hover:bg-white/90">
              <Link href={contactHref}>
                Book a strategy call
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-white/40 text-white hover:bg-white/15">
              <Link href={pricingHref}>
                Download pricing brief
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
