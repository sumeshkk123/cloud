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
  Broadcast,
  CirclesThreePlus,
  Cpu,
  GlobeHemisphereWest,
  HandCoins,
  Handshake,
  Lightning,
  Megaphone,
  ShieldCheck,
  Sparkle,
  StackSimple,
  Sun,
  Ticket,
  TrendUp,
  UsersThree,
  Warehouse,
  Waves
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroBadge = {
  title: string;
  detail: string;
  icon: IconType;
};

type LegacySignal = {
  heading: string;
  description: string;
  icon: IconType;
};

type GatewayMove = {
  name: string;
  focus: string;
  bullets: string[];
  icon: IconType;
};

type ModuleTile = {
  name: string;
  description: string;
  icon: IconType;
  accent: string;
};

type ExecutionRhythm = {
  phase: string;
  insight: string;
  icon: IconType;
};

type RegionalLink = {
  title: string;
  note: string;
  icon: IconType;
};

const HERO_BADGES: HeroBadge[] = [
  {
    title: "Legacy promise",
    detail:
      "We preserve the phrase “Ways to accept payments from MLM Software in People’s Democratic Republic of Ghana – GH.”",
    icon: ShieldCheck
  },
  {
    title: "Gateway roster",
    detail: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout.",
    icon: CirclesThreePlus
  },
  {
    title: "Module fidelity",
    detail:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, multi-lingual system.",
    icon: StackSimple
  }
];

const LEGACY_SIGNALS: LegacySignal[] = [
  {
    heading: "Demo flows intact",
    description: "Custom and preset demos inherit automated invites, AI transcripts, and renewal cadences.",
    icon: Sparkle
  },
  {
    heading: "Growth + governance balance",
    description: "We blend Ghana’s fintech innovation with regulated processes for financial services and energy sectors.",
    icon: TrendUp
  },
  {
    heading: "Global knowledge exchange",
    description: "WordPress country listings evolve into a shared intelligence layer across ECOWAS and diaspora hubs.",
    icon: Broadcast
  }
];

const GATEWAY_MOVES: GatewayMove[] = [
  {
    name: "PayPal — diaspora remittance",
    focus: "Unite Accra, London, and New York distributors with treasury-grade visibility.",
    bullets: [
      "Multi currency ledgers balance GHS, USD, GBP, and EUR inflows with anomaly detection.",
      "Ticket system archives Bank of Ghana guidance, tax filings, and partner credentials."
    ],
    icon: GlobeHemisphereWest
  },
  {
    name: "Amazon Pay — premium retail",
    focus: "Support e-commerce, lifestyle brands, and wellness programmes with trusted checkout experiences.",
    bullets: [
      "Auto responder issues bilingual confirmations, customs paperwork, and loyalty nudges instantly.",
      "Backup manager protects launch telemetry and campaign analytics."
    ],
    icon: Sun
  },
  {
    name: "PayU — regional bridge",
    focus: "Integrate PSPs across ECOWAS, East Africa, and Indian Ocean corridors with unified compliance.",
    bullets: [
      "Emails module circulates BoG, PSD2, and African Union policy updates with executive commentary.",
      "KYC documentation vault tracks distributor renewals, sanction checks, and approvals."
    ],
    icon: Waves
  },
  {
    name: "Stripe — digital ventures",
    focus: "Prototype AI-led education, fintech, and creative platforms with rapid experimentation.",
    bullets: [
      "Automation streams webhook analytics across Shopify, WooCommerce, and custom stacks.",
      "Ticket workflows deliver AI-authored diagnostics for engineering pods."
    ],
    icon: Cpu
  },
  {
    name: "Authorize.Net — transatlantic rigour",
    focus: "Blend North American acquiring with Ghanaian regulatory oversight and board governance.",
    bullets: [
      "Multi-lingual documentation synchronises English and French contracts in a single workspace.",
      "Secure vault stores sanction diligence, approvals, and legal evidence."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree — omnichannel incentives",
    focus: "Tokenise distributor rewards, wellness events, and pop-up activations with AI-ready wallets.",
    bullets: [
      "E-wallet module streams commissions with maker-checker guardrails and liquidity alerts.",
      "Backup manager protects offline capture during regional activations."
    ],
    icon: Handshake
  },
  {
    name: "Adyen — performance telemetry",
    focus: "Compare EU, ECOWAS, and diaspora conversion data with executive dashboards.",
    bullets: [
      "Analytics highlight approval rates, decline codes, and interchange variance for leadership.",
      "Ticket system attaches Adyen risk alerts to compliance cases with SLAs."
    ],
    icon: Lightning
  },
  {
    name: "2Checkout — digital export runway",
    focus: "Distribute e-learning, AI enablement, and documentation for Ghanaian distributors worldwide.",
    bullets: [
      "Auto responder nurtures onboarding sequences with compliance checkpoints embedded.",
      "Knowledge base ports WordPress FAQs into AI-ready playbooks."
    ],
    icon: Megaphone
  }
];

const MODULE_TILES: ModuleTile[] = [
  {
    name: "Multi currency intelligence",
    description: "Balances GHS, USD, GBP, and EUR settlements with treasury dashboards and variance alerts.",
    icon: HandCoins,
    accent: "bg-yellow-500/10 text-yellow-800 dark:bg-yellow-500/15 dark:text-yellow-100"
  },
  {
    name: "Ticket system hub",
    description: "Routes compliance, logistics, and distributor support with SLA heatmaps and AI summaries.",
    icon: Ticket,
    accent: "bg-emerald-500/10 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-100"
  },
  {
    name: "Auto responder",
    description: "Delivers English and French communications for renewals, product drops, and governance.",
    icon: Sparkle,
    accent: "bg-cyan-500/10 text-cyan-800 dark:bg-cyan-500/15 dark:text-cyan-100"
  },
  {
    name: "E-voucher engine",
    description: "Funds loyalty programmes, CSR initiatives, and campaigns with traceable approvals.",
    icon: Sun,
    accent: "bg-orange-500/10 text-orange-800 dark:bg-orange-500/15 dark:text-orange-100"
  },
  {
    name: "E-wallet orchestration",
    description: "Streams instant commissions with liquidity guardrails and audit trails.",
    icon: UsersThree,
    accent: "bg-red-500/10 text-red-800 dark:bg-red-500/15 dark:text-red-100"
  },
  {
    name: "Backup manager",
    description: "Maintains immutable snapshots for data centres, field offices, and remote activations.",
    icon: Warehouse,
    accent: "bg-slate-500/10 text-slate-800 dark:bg-slate-500/15 dark:text-slate-100"
  },
  {
    name: "Emails command centre",
    description: "Coordinates campaign, transactional, and compliance messaging from one platform.",
    icon: Megaphone,
    accent: "bg-purple-500/10 text-purple-800 dark:bg-purple-500/15 dark:text-purple-100"
  },
  {
    name: "KYC documentation",
    description: "Stores identity records, sanction evidence, and renewal reminders aligned with BoG.",
    icon: ShieldCheck,
    accent: "bg-blue-500/10 text-blue-800 dark:bg-blue-500/15 dark:text-blue-100"
  },
  {
    name: "Multi-lingual portals",
    description: "Keeps English, French, and Twi experiences aligned across distributors and customers.",
    icon: GlobeHemisphereWest,
    accent: "bg-green-500/10 text-green-800 dark:bg-green-500/15 dark:text-green-100"
  }
];

const EXECUTION_RHYTHMS: ExecutionRhythm[] = [
  {
    phase: "Discovery with WordPress fidelity",
    insight: "Authentic copy seeds hero messaging, demo prompts, and stakeholder journeys for Accra leadership.",
    icon: Broadcast
  },
  {
    phase: "Gateway instrumentation",
    insight: "Telemetry, anomaly detection, and SLA tracking activate across PayPal through 2Checkout.",
    icon: Lightning
  },
  {
    phase: "Governance enablement",
    insight: "Ticket, KYC, and backup data power board reviews and regulatory reporting.",
    icon: ShieldCheck
  },
  {
    phase: "Continuous refinement",
    insight: "Weekly AI briefings share insights with Ghana, diaspora hubs, and ECOWAS partners.",
    icon: Sparkle
  }
];

const REGIONAL_LINKS: RegionalLink[] = [
  {
    title: "ECOWAS alliance",
    note: "Nigeria, Côte d’Ivoire, and Senegal share FX guardrails and onboarding playbooks.",
    icon: Waves
  },
  {
    title: "UK & EU partners",
    note: "London and Paris hubs coordinate compliance updates and PSP negotiations.",
    icon: GlobeHemisphereWest
  },
  {
    title: "North American diaspora",
    note: "New York and Toronto communities align incentives and communication cadences.",
    icon: Handshake
  },
  {
    title: "Pan-African innovation",
    note: "Cape Town and Nairobi teams exchange fintech experiments and AI enablement.",
    icon: Cpu
  }
];

export const metadata: Metadata = {
  title: "Ghana MLM Payment Gateways | Cloud MLM Software",
  description:
    "Activate Ghana’s MLM payment gateways across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with AI-guided governance.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/ghana"
  },
  openGraph: {
    title: "Ghana MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Ghana with fintech velocity, diaspora alignment, and corporate oversight."
  }
};

type GhanaPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function GhanaPaymentGatewayPage({ params }: GhanaPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-emerald-50 py-20 dark:from-yellow-900 dark:via-slate-950 dark:to-emerald-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(250,204,21,0.18),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.18),transparent_55%),radial-gradient(circle_at_65%_80%,rgba(244,63,94,0.14),transparent_55%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/50 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-yellow-700 shadow-sm dark:border-white/15 dark:bg-white/10 dark:text-white/80">
              Ways to accept payments · Ghana (GH)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Ghana MLM payment gateways tuned for fintech momentum and community impact
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground">
                The WordPress headline—“Ways to accept payments from MLM Software in People’s Democratic Republic of Ghana – GH”—stays intact while we layer AI telemetry, compliance guardrails, and diaspora collaboration for Accra leadership.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Speak with the Accra team
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-yellow-500/60 text-yellow-700 hover:bg-yellow-500/10 dark:border-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  Preview the Ghana demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {HERO_BADGES.map((badge) => {
                const Icon = badge.icon;
                return (
                  <article
                    key={badge.title}
                    className="rounded-3xl border border-yellow-500/30 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/15 text-yellow-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold text-foreground">{badge.title}</h2>
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground">{badge.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <aside className="relative flex flex-col gap-6 rounded-3xl border border-yellow-500/40 bg-white/80 p-8 backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Signals we migrated from WordPress</h2>
              <p className="text-sm text-muted-foreground">
                Demo pathways, module listings, and global coverage form the backbone of Ghana’s new operating model—now supported by analytics and AI assistants.
              </p>
            </div>
            <div className="space-y-4">
              {LEGACY_SIGNALS.map((signal) => {
                const Icon = signal.icon;
                return (
                  <div key={signal.heading} className="flex items-start gap-4 rounded-2xl border border-border/50 bg-background/80 p-4 dark:border-white/10 dark:bg-white/5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/15 text-yellow-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-sm font-semibold text-foreground">{signal.heading}</h3>
                      <p className="text-xs text-muted-foreground">{signal.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="rounded-2xl border border-dashed border-yellow-500/50 bg-yellow-500/10 p-5 text-sm text-yellow-900 dark:border-yellow-400/40 dark:bg-yellow-500/15 dark:text-yellow-100">
              AI briefings summarise gateway health, compliance cases, and growth opportunities for Ghana every Monday.
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Gateway moves empowering Ghana’s fintech and community vision
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            The eight WordPress gateways return with data-rich playbooks for diaspora remittance, local innovation, and regulated growth.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_MOVES.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-yellow-500/40 bg-white/80 p-6 transition hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/15 text-yellow-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{gateway.name}</h3>
                    <p className="text-sm text-muted-foreground">{gateway.focus}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span aria-hidden className="mt-1 inline-flex h-2 w-2 rounded-full bg-yellow-600/70 dark:bg-white/60" />
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(253,224,71,0.16),transparent_60%),radial-gradient(circle_at_90%_70%,rgba(34,197,94,0.16),transparent_60%)]" />
        <div className="container relative space-y-10 rounded-[3rem] border border-yellow-500/40 bg-white/85 p-10 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-col gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div className="space-y-4">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Module grid powering Ghana operations
              </h2>
              <p className="max-w-2xl text-sm text-muted-foreground">
                Each module from WordPress is enhanced with analytics, automation, and access controls—supporting Ghana’s fintech pulse and regulated sectors.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link href={modulesHref}>
                Explore all modules
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_TILES.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.name}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${module.accent}`}>
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-foreground">{module.name}</h3>
                    <p className="text-sm text-muted-foreground">{module.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className="space-y-6">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Execution rhythms for Ghana leadership
            </h2>
            <p className="text-sm text-muted-foreground">
              WordPress fidelity merges with AI-led governance, delivering a weekly cadence for compliance, innovation, and growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={pricingHref}>
                  Review pricing models
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-border text-foreground hover:bg-foreground/10 dark:border-white/15">
                <Link href={contactHref}>
                  Plan a capability workshop
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 rounded-3xl border border-yellow-500/40 bg-white/80 p-8 dark:border-white/10 dark:bg-white/5">
            {EXECUTION_RHYTHMS.map((rhythm) => {
              const Icon = rhythm.icon;
              return (
                <div key={rhythm.phase} className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/80 p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/15 text-yellow-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-sm font-semibold text-foreground">{rhythm.phase}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground">{rhythm.insight}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-yellow-900 via-emerald-900 to-rose-900 py-20 text-white">
        <div className="container space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Regional collaboration led from Accra
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/75">
              The WordPress country catalogue evolves into a collaboration network spanning ECOWAS, global diaspora hubs, and innovation centres.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {REGIONAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <article key={link.title} className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/10 p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{link.title}</h3>
                  </div>
                  <p className="text-sm text-white/80">{link.note}</p>
                </article>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-yellow-900 hover:bg-white/90">
              <Link href={contactHref}>
                Book a strategy session
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
