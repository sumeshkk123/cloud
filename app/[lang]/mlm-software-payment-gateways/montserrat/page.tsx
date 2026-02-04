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
  ChatText,
  Compass,
  CurrencyCircleDollar,
  Lightning,
  MapTrifold,
  Megaphone,
  ShieldCheck,
  Sparkle,
  StackSimple,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";
import {
  ArrowUpRight,
  Globe2,
  Layers,
  LifeBuoy,
  Waves
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroPanel = {
  title: string;
  description: string;
  icon: IconType;
};

type GatewayCanvas = {
  title: string;
  context: string;
  bullets: string[];
  icon: IconType;
};

type ModuleTile = {
  label: string;
  detail: string;
  icon: IconType;
};

type SequenceStep = {
  stage: string;
  heading: string;
  copy: string;
  icon: IconType;
};

const HERO_PANELS: HeroPanel[] = [
  {
    title: "WordPress promise elevated",
    description:
      "We retain “Ways to accept payments from MLM Software in People’s Democratic Republic of Montserrat – MS” while delivering a modern narrative.",
    icon: Compass
  },
  {
    title: "Gateway roster activated",
    description: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout orchestrated with telemetry.",
    icon: StackSimple
  },
  {
    title: "Module ecosystem unified",
    description: "Multi currency, ticketing, automation, vouchers, wallets, backup, emails, KYC, and multi-lingual experiences working together.",
    icon: Globe2
  }
];

const GATEWAY_CANVAS: GatewayCanvas[] = [
  {
    title: "Braintree island commerce mesh",
    context: "Serve tourism, retail, and community programmes across the Emerald Isle of the Caribbean.",
    bullets: [
      "Multi currency module reconciles XCD, USD, and GBP with variance analytics for finance and regulators.",
      "Ticket system archives banking correspondences, logistics escalations, and PSP conversations."
    ],
    icon: Waves
  },
  {
    title: "PayU diaspora bridge",
    context: "Connect Montserratian entrepreneurs with diaspora buyers across the UK, Canada, and the United States.",
    bullets: [
      "Emails module distributes AML, FX, and tax updates enriched with CFO commentary.",
      "KYC documentation vault stores identity proofs, sanction checks, and renewal schedules."
    ],
    icon: Megaphone
  },
  {
    title: "Stripe innovation studio",
    context: "Prototype AI concierge experiences, digital kits, and event activations with monitored risk controls.",
    bullets: [
      "Auto responder delivers English and Montserrat Creole communications with AI-personalised guidance.",
      "Backup manager safeguards storefront versions, compliance artefacts, and event assets."
    ],
    icon: Lightning
  },
  {
    title: "Authorize.Net partner lane",
    context: "Blend North American partner operations with Montserrat’s commission structures transparently.",
    bullets: [
      "E-wallet manager streams instant payouts with maker-checker approvals and threshold rules.",
      "Multi-lingual system synchronises English and Spanish touchpoints across portals and AI assistants."
    ],
    icon: UsersThree
  }
];

const MODULE_TILES: ModuleTile[] = [
  {
    label: "Multi currency system",
    detail: "Balances XCD, USD, and GBP with treasury-ready exports and variance analytics.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Ticket system module",
    detail: "Routes compliance, PSP, and logistics cases with SLA dashboards and AI-generated summaries.",
    icon: ChatText
  },
  {
    label: "Auto responder",
    detail: "Delivers multilingual notifications, escalations, and coaching flows instantly.",
    icon: Sparkle
  },
  {
    label: "E-voucher engine",
    detail: "Supports incentive cruises, events, and loyalty programmes with redemption telemetry.",
    icon: Layers
  },
  {
    label: "E-wallet manager",
    detail: "Instant commissions and reimbursements with maker-checker governance.",
    icon: Bank
  },
  {
    label: "Backup manager",
    detail: "Preserves storefronts, automations, and compliance artefacts during connectivity shifts.",
    icon: LifeBuoy
  },
  {
    label: "Emails module",
    detail: "Centralises transactional, campaign, and compliance messaging for leadership alignment.",
    icon: Megaphone
  },
  {
    label: "KYC documentation",
    detail: "Versioned identity, sanction, and residency evidence ready for regulators and partners.",
    icon: MapTrifold
  },
  {
    label: "Multi-lingual system",
    detail: "Keeps English, Montserrat Creole, and Spanish experiences aligned across portals and AI copilots.",
    icon: Globe2
  }
];

const SEQUENCE: SequenceStep[] = [
  {
    stage: "Sequence 01",
    heading: "Interpret the WordPress brief",
    copy: "Hero text, gateway list, and navigation references form the non-negotiable foundation.",
    icon: Compass
  },
  {
    stage: "Sequence 02",
    heading: "Wire the Caribbean backbone",
    copy: "Gateways, modules, and telemetry connect with compliance artefacts for regulators and partners.",
    icon: ShieldCheck
  },
  {
    stage: "Sequence 03",
    heading: "Activate field and finance",
    copy: "Dashboards, automations, and multilingual comms launch with enablement packs.",
    icon: UsersThree
  },
  {
    stage: "Sequence 04",
    heading: "Optimise with AI insight",
    copy: "Quarterly reviews refine commissions, FX exposure, and partner programmes with data-led confidence.",
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
  const title = "Montserrat MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Reimagine Montserrat’s MLM payment gateways. Cloud MLM Software orchestrates PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with compliant automation and AI telemetry.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/montserrat", locale)
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

type MontserratPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function MontserratPaymentGatewaysPage({ params }: MontserratPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3.25rem] border border-cyan-200/70 bg-gradient-to-br from-cyan-50 via-white to-indigo-100 px-6 py-20 text-slate-900 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-14">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(34,211,238,0.25),transparent_55%),radial-gradient(circle_at_88%_15%,rgba(99,102,241,0.3),transparent_55%),radial-gradient(circle_at_50%_88%,rgba(56,189,248,0.28),transparent_60%)] dark:bg-[radial-gradient(circle_at_10%_20%,rgba(34,211,238,0.35),transparent_55%),radial-gradient(circle_at_88%_15%,rgba(99,102,241,0.4),transparent_55%),radial-gradient(circle_at_50%_88%,rgba(56,189,248,0.32),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.56fr)_minmax(0,0.44fr)] lg:items-start">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-700 dark:border-cyan-500/50 dark:bg-slate-950/70 dark:text-cyan-200">
                Ways to accept payments · Montserrat (MS)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Montserrat’s MLM payment gateways, orchestrated for island resilience
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-200">
                  We transform the WordPress outline into a coastal-ready operating system. Finance, compliance, and field teams see how PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout come together with AI telemetry and governance artefacts.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-cyan-600 text-white hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400">
                  <Link href={contactHref}>
                    Coordinate the Montserrat rollout
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-cyan-200 bg-white/80 text-cyan-700 hover:bg-cyan-100 dark:border-cyan-500/40 dark:bg-transparent dark:text-cyan-100 dark:hover:bg-cyan-500/10"
                >
                  <Link href={demoHref}>Preview the payment console</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-6">
              {HERO_PANELS.map((panel) => {
                const Icon = panel.icon;
                return (
                  <article
                    key={panel.title}
                    className="rounded-3xl border border-cyan-200/70 bg-white/85 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-700 dark:bg-slate-800 dark:text-cyan-200">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <h2 className="text-base font-semibold text-slate-900 dark:text-white">{panel.title}</h2>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{panel.description}</p>
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
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Gateway canvas built from the legacy list</h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Every connector becomes a programme with telemetry, compliance artefacts, and leadership-ready storytelling.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_CANVAS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.title}
                className="flex h-full flex-col gap-4 rounded-[2.25rem] border border-cyan-200/70 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-700 dark:bg-slate-800 dark:text-cyan-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{gateway.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{gateway.context}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-500 dark:bg-cyan-300" aria-hidden />
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
              Modules from the WordPress navigation, orchestrated with telemetry
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-slate-300">
              Each module now collaborates across dashboards, automations, and compliance artefacts to support Montserrat’s leadership.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_TILES.map((module) => {
              const Icon = module.icon;
              return (
                <article key={module.label} className="flex h-full flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-cyan-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{module.label}</h3>
                  </div>
                  <p className="text-sm text-slate-200">{module.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Sequence for Montserrat’s launch and optimisation</h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            The Cloud MLM Software pod keeps every milestone true to the WordPress source while unlocking AI-led excellence.
          </p>
        </div>
        <div className="relative grid gap-6 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-[12.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-cyan-500/40 via-transparent to-transparent lg:block" aria-hidden />
          <div className="pointer-events-none absolute left-[37.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-cyan-500/40 via-transparent to-transparent lg:block" aria-hidden />
          <div className="pointer-events-none absolute left-[62.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-cyan-500/40 via-transparent to-transparent lg:block" aria-hidden />
          {SEQUENCE.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.stage} className="rounded-[2rem] border border-cyan-200/70 bg-white/90 p-6 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/70">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-500 dark:text-slate-400">
                  <Icon className="h-5 w-5" aria-hidden />
                  {step.stage}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{step.heading}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{step.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="overflow-hidden rounded-[2.75rem] border border-cyan-200/70 bg-gradient-to-br from-cyan-600 via-cyan-500 to-indigo-500 p-10 text-slate-100 shadow-xl dark:border-slate-700">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">Next step</p>
              <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                Purchase AI-powered Cloud MLM Software to lead Montserrat.
              </h2>
              <p className="max-w-2xl text-sm text-white/90">
                Timelines, compliance artefacts, and AI enablement ensure corporate, regulators, and distributors stay aligned from day one.
              </p>
            </div>
            <div className="grid gap-4">
              <Button asChild size="lg" className="w-full gap-2 bg-white text-cyan-700 hover:bg-slate-100">
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
