import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  Bank,
  Compass,
  CurrencyCircleDollar,
  Lightning,
  MapTrifold,
  Megaphone,
  Pulse,
  ShieldCheck,
  Sparkle,
  StackSimple,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";
import {
  ArrowUpRight,
  Globe2,
  LifeBuoy,
  Map,
  PieChart,
  Waves
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroBadge = {
  title: string;
  detail: string;
  icon: IconType;
};

type GatewayPlaybook = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type ModuleItem = {
  title: string;
  description: string;
  icon: IconType;
};

type Milestone = {
  label: string;
  heading: string;
  description: string;
  icon: IconType;
};

const HERO_BADGES: HeroBadge[] = [
  {
    title: "WordPress headline retained",
    detail: "Hero references “Ways to accept payments from MLM Software in People’s Democratic Republic of Mozambique – MZ.”",
    icon: Compass
  },
  {
    title: "Gateway roster activated",
    detail: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout orchestrated with telemetry.",
    icon: StackSimple
  },
  {
    title: "Modules in harmony",
    detail: "Multi currency, ticketing, automation, vouchers, wallets, backup, emails, KYC, and multi-lingual experiences connected.",
    icon: Globe2
  }
];

const GATEWAY_PLAYBOOKS: GatewayPlaybook[] = [
  {
    name: "Braintree coastal commerce mesh",
    summary: "Support retail hubs in Maputo, Beira, and Nacala with transparent commission readiness.",
    bullets: [
      "Multi currency module tracks MZN, USD, and ZAR flows with treasury analytics.",
      "Ticket system captures regulator correspondences, PSP escalations, and logistics updates."
    ],
    icon: Waves
  },
  {
    name: "PayU digital inclusion drive",
    summary: "Accelerate ecommerce, education, and microfinance programmes across Mozambique’s growing digital economy.",
    bullets: [
      "Emails module shares VAT, AML, and FX updates across Portuguese and English stakeholders.",
      "KYC documentation vault stores identity verification, sanction checks, and renewal evidence."
    ],
    icon: Megaphone
  },
  {
    name: "Stripe innovation dock",
    summary: "Prototype AI concierge services, subscription kits, and event activations with monitored risk controls.",
    bullets: [
      "Auto responder delivers Portuguese and English communications with AI-personalised prompts.",
      "Backup manager preserves storefront experiments, compliance artefacts, and campaign assets."
    ],
    icon: Sparkle
  },
  {
    name: "Authorize.Net partnership runway",
    summary: "Blend North American partner operations with Mozambique’s commission structures transparently.",
    bullets: [
      "E-wallet manager streams instant payouts with maker-checker approvals and territory rules.",
      "Multi-lingual system aligns Portuguese, English, and Swahili experiences across portals and AI copilots."
    ],
    icon: UsersThree
  }
];

const MODULE_ITEMS: ModuleItem[] = [
  {
    title: "Multi currency system",
    description: "Balances MZN, USD, and ZAR with variance analytics and regulator-ready exports.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    description: "Routes compliance, PSP, and field support cases with SLA dashboards and AI summaries.",
    icon: Pulse
  },
  {
    title: "Auto responder",
    description: "Delivers multilingual notifications, escalations, and coaching in seconds.",
    icon: Megaphone
  },
  {
    title: "E-voucher engine",
    description: "Supports incentive programmes, events, and loyalty campaigns with redemption telemetry.",
    icon: PieChart
  },
  {
    title: "E-wallet manager",
    description: "Instant commissions, reimbursements, and bonuses with maker-checker oversight.",
    icon: Bank
  },
  {
    title: "Backup manager",
    description: "Keeps storefronts, automations, and compliance artefacts safe during outages.",
    icon: LifeBuoy
  },
  {
    title: "Emails module",
    description: "Central communication layer for transactional, campaign, and compliance messaging.",
    icon: Megaphone
  },
  {
    title: "KYC documentation",
    description: "Maintains identity, sanction, and residency evidence with versioned history.",
    icon: MapTrifold
  },
  {
    title: "Multi-lingual system",
    description: "Aligns Portuguese, English, and Swahili experiences across apps and AI assistants.",
    icon: Globe2
  }
];

const MILESTONES: Milestone[] = [
  {
    label: "Waypoint 01",
    heading: "Interpret the WordPress brief",
    description: "Hero promise, gateway list, and module references become foundational design requirements.",
    icon: Compass
  },
  {
    label: "Waypoint 02",
    heading: "Wire the compliant backbone",
    description: "Gateways, modules, and telemetry connect with governance artefacts for regulators and partners.",
    icon: ShieldCheck
  },
  {
    label: "Waypoint 03",
    heading: "Activate field and finance",
    description: "Dashboards, automations, and multilingual comms launch with enablement packs for every stakeholder.",
    icon: UsersThree
  },
  {
    label: "Waypoint 04",
    heading: "Optimise with AI insight",
    description: "Quarterly reviews refine commissions, FX exposure, and partner performance across Mozambique.",
    icon: Lightning
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Mozambique MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Transform Mozambique’s MLM payment gateways. Cloud MLM Software orchestrates PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with compliant automation and AI telemetry.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/mozambique", locale)
    },
    openGraph: {
      title,
      description
    },
    twitter: {
      title,
      description
    }
  };
}

type MozambiquePaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function MozambiquePaymentGatewaysPage({ params }: MozambiquePaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3.25rem] border border-teal-200/70 bg-gradient-to-br from-teal-50 via-white to-sky-100 px-6 py-20 text-slate-900 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-14">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(20,184,166,0.25),transparent_55%),radial-gradient(circle_at_88%_15%,rgba(56,189,248,0.28),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(14,165,233,0.3),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_20%,rgba(20,184,166,0.35),transparent_55%),radial-gradient(circle_at_88%_15%,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(14,165,233,0.32),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] lg:items-start">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/50 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-teal-700 dark:border-teal-500/50 dark:bg-slate-950/70 dark:text-teal-200">
                Ways to accept payments · Mozambique (MZ)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Mozambique’s MLM payment gateways orchestrated for coastal resilience
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-200">
                  Cloud MLM Software elevates the WordPress outline into an AI-enabled operating system. Finance, compliance, and field teams gain visibility across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout as they power Mozambique’s growth.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-teal-600 text-white hover:bg-teal-500 dark:bg-teal-500 dark:hover:bg-teal-400">
                  <Link href={contactHref}>
                    Coordinate the Mozambique rollout
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-teal-200 bg-white/80 text-teal-700 hover:bg-teal-100 dark:border-teal-500/40 dark:bg-transparent dark:text-teal-100 dark:hover:bg-teal-500/10"
                >
                  <Link href={demoHref}>Preview the payment console</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-6">
              {HERO_BADGES.map((badge) => {
                const Icon = badge.icon;
                return (
                  <article
                    key={badge.title}
                    className="rounded-3xl border border-teal-200/70 bg-white/85 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-700 dark:bg-slate-800 dark:text-teal-200">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <h2 className="text-base font-semibold text-slate-900 dark:text-white">{badge.title}</h2>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{badge.detail}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Gateway playbooks inspired by the WordPress list</h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Each connector becomes a telemetry-rich programme with compliance evidence and leadership-ready storytelling.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_PLAYBOOKS.map((playbook) => {
            const Icon = playbook.icon;
            return (
              <article
                key={playbook.name}
                className="flex h-full flex-col gap-4 rounded-[2.25rem] border border-teal-200/70 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-700 dark:bg-slate-800 dark:text-teal-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{playbook.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{playbook.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {playbook.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-teal-500 dark:bg-teal-300" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-slate-100">
        <div className="container space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Modules from the navigation, unified for Mozambique’s leadership
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-slate-300">
              The WordPress module list is now a single command centre with AI telemetry and compliance artefacts.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_ITEMS.map((module) => {
              const Icon = module.icon;
              return (
                <article key={module.title} className="flex h-full flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-teal-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{module.title}</h3>
                  </div>
                  <p className="text-sm text-slate-200">{module.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Waypoints to launch and optimise Mozambique</h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Our cadence keeps corporate, regulators, and field teams aligned with the WordPress brief and AI-led excellence.
          </p>
        </div>
        <div className="relative grid gap-6 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-[12.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-teal-500/40 via-transparent to-transparent lg:block" aria-hidden />
          <div className="pointer-events-none absolute left-[37.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-teal-500/40 via-transparent to-transparent lg:block" aria-hidden />
          <div className="pointer-events-none absolute left-[62.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-teal-500/40 via-transparent to-transparent lg:block" aria-hidden />
          {MILESTONES.map((milestone) => {
            const Icon = milestone.icon;
            return (
              <article key={milestone.label} className="rounded-[2rem] border border-teal-200/70 bg-white/90 p-6 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/70">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-teal-500 dark:text-slate-400">
                  <Icon className="h-5 w-5" aria-hidden />
                  {milestone.label}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{milestone.heading}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{milestone.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="overflow-hidden rounded-[2.75rem] border border-teal-200/70 bg-gradient-to-br from-teal-600 via-teal-500 to-sky-500 p-10 text-slate-100 shadow-xl dark:border-slate-700">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">Next step</p>
              <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                Purchase AI-powered Cloud MLM Software to lead Mozambique’s payment evolution.
              </h2>
              <p className="max-w-2xl text-sm text-white/90">
                Timelines, governance artefacts, and AI enablement ensure every stakeholder stays aligned as programmes scale nationwide.
              </p>
            </div>
            <div className="grid gap-4">
              <Button asChild size="lg" className="w-full gap-2 bg-white text-teal-700 hover:bg-slate-100">
                <Link href={contactHref}>
                  Talk to Cloud MLM Software
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full gap-2 border-white/60 text-white hover:bg-white/10"
              >
                <Link href={pricingHref}>
                  Review licensing options
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
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
  if (!isSupportedLocale(lang)) {
    return i18n.defaultLocale as Locale;
  }

  return lang as Locale;
}
