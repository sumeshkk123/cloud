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
  Anchor,
  Bridge,
  CirclesThreePlus,
  Columns,
  Compass,
  Cpu,
  GlobeHemisphereEast,
  Megaphone,
  NavigationArrow,
  Scroll,
  ShieldCheck,
  Sparkle,
  StackSimple,
  StarFour,
  Ticket,
  TreasureChest,
  UsersThree,
  WaveTriangle,
  Waves
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroFeature = {
  title: string;
  detail: string;
  icon: IconType;
};

type LegacyThread = {
  heading: string;
  description: string;
  icon: IconType;
};

type GatewaySail = {
  name: string;
  focus: string;
  bullets: string[];
  icon: IconType;
};

type ModuleStone = {
  name: string;
  description: string;
  icon: IconType;
  accent: string;
};

type CadenceStep = {
  phase: string;
  insight: string;
  icon: IconType;
};

type RegionalHarbor = {
  title: string;
  note: string;
  icon: IconType;
};

const HERO_FEATURES: HeroFeature[] = [
  {
    title: "WordPress fidelity",
    detail:
      "Hero copy keeps the phrase “Ways to accept payments from MLM Software in People’s Democratic Republic of Greece – GR.”",
    icon: Scroll
  },
  {
    title: "Gateway fleet",
    detail: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout.",
    icon: CirclesThreePlus
  },
  {
    title: "Module foundation",
    detail:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, multi-lingual system.",
    icon: StackSimple
  }
];

const LEGACY_THREADS: LegacyThread[] = [
  {
    heading: "Demo voyages preserved",
    description: "Custom and preset demos gain automated invites, AI transcripts, and follow-up cadences.",
    icon: NavigationArrow
  },
  {
    heading: "Heritage + innovation",
    description: "We pair classical storytelling with AI telemetry for hospitality, fintech, and shipping sectors.",
    icon: Columns
  },
  {
    heading: "Global knowledge exchange",
    description: "WordPress country listings evolve into shared intelligence across the Aegean, EU, and diaspora hubs.",
    icon: GlobeHemisphereEast
  }
];

const GATEWAY_SAILS: GatewaySail[] = [
  {
    name: "PayPal — diaspora treasury",
    focus: "Coordinate Athens, Thessaloniki, and global distributors with treasury oversight.",
    bullets: [
      "Multi currency ledgers reconcile EUR, USD, GBP, and AUD flows with anomaly detection.",
      "Ticket system archives Bank of Greece guidance, tax documents, and partner credentials."
    ],
    icon: Waves
  },
  {
    name: "Amazon Pay — hospitality and retail",
    focus: "Support tourism, wellness, and lifestyle brands with refined checkout journeys.",
    bullets: [
      "Auto responder issues bilingual confirmations, customs paperwork, and loyalty nudges instantly.",
      "Backup manager safeguards seasonal campaigns and cultural festival telemetry."
    ],
    icon: Anchor
  },
  {
    name: "PayU — regional bridges",
    focus: "Integrate PSPs across the Balkans, EU, and Middle East with unified compliance visibility.",
    bullets: [
      "Emails module circulates PSD2, Bank of Greece, and regional policy updates with executive commentary.",
      "KYC documentation vault manages distributor renewals, sanction checks, and approvals."
    ],
    icon: Bridge
  },
  {
    name: "Stripe — digital odyssey",
    focus: "Prototype AI-led education, SaaS, and creative platforms on Greek innovation corridors.",
    bullets: [
      "Automation aggregates webhook analytics across Shopify, WooCommerce, and bespoke stacks.",
      "Ticket workflows share AI-authored diagnostics for engineering pods."
    ],
    icon: Cpu
  },
  {
    name: "Authorize.Net — transatlantic governance",
    focus: "Blend North American acquiring with Greek regulatory oversight and board governance.",
    bullets: [
      "Multi-lingual documentation synchronises Greek and English contracts with version control.",
      "Secure vault stores sanction diligence, approvals, and risk assessments."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree — omnichannel incentives",
    focus: "Tokenise roadshows, shipping events, and wellness programmes with secure wallet flows.",
    bullets: [
      "E-wallet module streams commissions with maker-checker controls and liquidity guardrails.",
      "Backup manager protects offline capture during island activations."
    ],
    icon: UsersThree
  },
  {
    name: "Adyen — performance telemetry",
    focus: "Compare EU, Mediterranean, and diaspora conversion metrics with executive dashboards.",
    bullets: [
      "Analytics highlight approval rates, decline codes, and interchange variance.",
      "Ticket system links Adyen risk alerts to compliance owners."
    ],
    icon: WaveTriangle
  },
  {
    name: "2Checkout — digital export runway",
    focus: "Distribute e-learning, AI enablement, and documentation to Greek diaspora communities worldwide.",
    bullets: [
      "Auto responder nurtures onboarding journeys with compliance checkpoints embedded.",
      "Knowledge base transforms WordPress FAQs into AI-ready playbooks."
    ],
    icon: Megaphone
  }
];

const MODULE_STONES: ModuleStone[] = [
  {
    name: "Multi currency intelligence",
    description: "Balances EUR, USD, GBP, and AUD settlements with treasury dashboards and variance alerts.",
    icon: TreasureChest,
    accent: "bg-blue-500/10 text-blue-800 dark:bg-blue-500/15 dark:text-blue-100"
  },
  {
    name: "Ticket system agora",
    description: "Routes compliance, logistics, and distributor questions with SLA heatmaps and AI summaries.",
    icon: Ticket,
    accent: "bg-cyan-500/10 text-cyan-800 dark:bg-cyan-500/15 dark:text-cyan-100"
  },
  {
    name: "Auto responder poetry",
    description: "Delivers Greek and English communications for renewals, storytelling, and governance.",
    icon: Sparkle,
    accent: "bg-indigo-500/10 text-indigo-800 dark:bg-indigo-500/15 dark:text-indigo-100"
  },
  {
    name: "E-voucher amphitheatre",
    description: "Funds hospitality, cultural, and loyalty programmes with traceable approvals.",
    icon: StarFour,
    accent: "bg-amber-500/10 text-amber-800 dark:bg-amber-500/15 dark:text-amber-100"
  },
  {
    name: "E-wallet orchestration",
    description: "Streams instant commissions with liquidity guardrails and audit trails.",
    icon: UsersThree,
    accent: "bg-emerald-500/10 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-100"
  },
  {
    name: "Backup manager",
    description: "Maintains immutable snapshots for data centres, island offices, and remote activations.",
    icon: StackSimple,
    accent: "bg-slate-500/10 text-slate-800 dark:bg-slate-500/15 dark:text-slate-100"
  },
  {
    name: "Emails command centre",
    description: "Coordinates campaign, transactional, and compliance messaging from one hub.",
    icon: Megaphone,
    accent: "bg-rose-500/10 text-rose-800 dark:bg-rose-500/15 dark:text-rose-100"
  },
  {
    name: "KYC documentation",
    description: "Stores identity records, sanction evidence, and renewal reminders aligned with Bank of Greece.",
    icon: ShieldCheck,
    accent: "bg-purple-500/10 text-purple-800 dark:bg-purple-500/15 dark:text-purple-100"
  },
  {
    name: "Multi-lingual portals",
    description: "Keeps Greek, English, and Italian experiences aligned across distributors and customers.",
    icon: GlobeHemisphereEast,
    accent: "bg-teal-500/10 text-teal-800 dark:bg-teal-500/15 dark:text-teal-100"
  }
];

const CADENCE_STEPS: CadenceStep[] = [
  {
    phase: "Discovery with WordPress roots",
    insight: "Legacy copy seeds hero messaging, demo flows, and stakeholder journeys for Greek leadership.",
    icon: NavigationArrow
  },
  {
    phase: "Gateway instrumentation",
    insight: "Telemetry, SLA tracking, and compliance automation activate across PayPal through 2Checkout.",
    icon: Cpu
  },
  {
    phase: "Governance harmonisation",
    insight: "Ticket, KYC, and backup data power board briefings and regulatory readiness.",
    icon: ShieldCheck
  },
  {
    phase: "Continuous refinement",
    insight: "AI briefings share insights with Athens HQ, island hubs, and diaspora partners each week.",
    icon: Sparkle
  }
];

const REGIONAL_HARBORS: RegionalHarbor[] = [
  {
    title: "Aegean alliance",
    note: "Cyprus and Crete hubs coordinate compliance updates and onboarding playbooks.",
    icon: Anchor
  },
  {
    title: "Balkan connections",
    note: "Belgrade and Sofia partners share FX guardrails and fintech experiments.",
    icon: Bridge
  },
  {
    title: "Western Europe",
    note: "London and Paris offices sync strategies for diaspora engagement and AI enablement.",
    icon: Compass
  },
  {
    title: "Global diaspora",
    note: "New York and Melbourne communities align communications, incentives, and governance cadence.",
    icon: Megaphone
  }
];

export const metadata: Metadata = {
  title: "Greece MLM Payment Gateways | Cloud MLM Software",
  description:
    "Reimagine Greece’s MLM payment gateways across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with AI-led governance.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/greece"
  },
  openGraph: {
    title: "Greece MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Greece with hospitality, fintech ambition, and classical storytelling."
  }
};

type GreecePageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function GreecePaymentGatewayPage({ params }: GreecePageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 py-20 dark:from-sky-950 dark:via-slate-950 dark:to-blue-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(14,165,233,0.16),transparent_60%),radial-gradient(circle_at_84%_24%,rgba(59,130,246,0.18),transparent_60%),radial-gradient(circle_at_60%_80%,rgba(20,184,166,0.14),transparent_60%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-sky-800 shadow-sm dark:border-white/15 dark:bg-white/10 dark:text-white/80">
              Ways to accept payments · Greece (GR)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Greece MLM payment gateways infused with island imagination and corporate rigour
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground">
                The WordPress headline—“Ways to accept payments from MLM Software in People’s Democratic Republic of Greece – GR”—remains intact, now supported by AI telemetry, hospitality storytelling, and governance for Greek leadership.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Connect with the Athens team
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-sky-500/60 text-sky-700 hover:bg-sky-500/10 dark:border-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  Preview the Greece demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {HERO_FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article
                    key={feature.title}
                    className="rounded-3xl border border-sky-500/30 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold text-foreground">{feature.title}</h2>
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground">{feature.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <aside className="relative flex flex-col gap-6 rounded-3xl border border-sky-500/30 bg-white/80 p-8 backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Signals we respected from WordPress</h2>
              <p className="text-sm text-muted-foreground">
                Demo prompts, module listings, and global coverage are woven into a Greek operating model with analytics, AI insights, and governance.
              </p>
            </div>
            <div className="space-y-4">
              {LEGACY_THREADS.map((thread) => {
                const Icon = thread.icon;
                return (
                  <div key={thread.heading} className="flex items-start gap-4 rounded-2xl border border-border/50 bg-background/80 p-4 dark:border-white/10 dark:bg-white/5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-sm font-semibold text-foreground">{thread.heading}</h3>
                      <p className="text-xs text-muted-foreground">{thread.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="rounded-2xl border border-dashed border-sky-500/40 bg-sky-500/10 p-5 text-sm text-sky-900 dark:border-sky-400/40 dark:bg-sky-500/15 dark:text-sky-100">
              Weekly AI briefings summarise payment health, compliance tasks, and innovation signals for Greek leadership.
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Gateway sails aligned with Greece’s creative economy
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            The eight WordPress gateways return with AI-enabled playbooks for tourism, fintech, shipping, and diaspora communities.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_SAILS.map((sail) => {
            const Icon = sail.icon;
            return (
              <article
                key={sail.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-sky-500/30 bg-white/80 p-6 transition hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{sail.name}</h3>
                    <p className="text-sm text-muted-foreground">{sail.focus}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {sail.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span aria-hidden className="mt-1 inline-flex h-2 w-2 rounded-full bg-sky-600/70 dark:bg-white/60" />
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(14,165,233,0.16),transparent_60%),radial-gradient(circle_at_90%_70%,rgba(59,130,246,0.14),transparent_60%)]" />
        <div className="container relative space-y-10 rounded-[3rem] border border-sky-500/30 bg-white/85 p-10 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-col gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div className="space-y-4">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Module stones supporting Greek operations
              </h2>
              <p className="max-w-2xl text-sm text-muted-foreground">
                Each module from WordPress is enhanced with analytics, automation, and access controls—matching Greece’s hospitality, fintech, and shipping ambitions.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link href={modulesHref}>
                Explore module stack
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_STONES.map((module) => {
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
              Cadence for Greece’s leadership
            </h2>
            <p className="text-sm text-muted-foreground">
              WordPress fidelity meets AI-enabled governance, creating a four-step rhythm for compliance, innovation, and storytelling.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={pricingHref}>
                  Review pricing structures
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-border text-foreground hover:bg-foreground/10 dark:border-white/15">
                <Link href={contactHref}>
                  Schedule a strategy workshop
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 rounded-3xl border border-sky-500/30 bg-white/80 p-8 dark:border-white/10 dark:bg-white/5">
            {CADENCE_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.phase} className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/80 p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-sm font-semibold text-foreground">{step.phase}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground">{step.insight}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-sky-950 via-indigo-900 to-teal-900 py-20 text-white">
        <div className="container space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Regional harbors anchored in Greece
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/75">
              The WordPress country list transforms into a collaboration network spanning the Aegean, Balkans, and global diaspora.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {REGIONAL_HARBORS.map((harbor) => {
              const Icon = harbor.icon;
              return (
                <article key={harbor.title} className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/10 p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{harbor.title}</h3>
                  </div>
                  <p className="text-sm text-white/75">{harbor.note}</p>
                </article>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-sky-900 hover:bg-white/90">
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
