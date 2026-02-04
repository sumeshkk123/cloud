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
  ShieldCheck,
  Sparkle,
  StackSimple,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";
import {
  ArrowUpRight,
  Globe2,
  Layers,
  Map,
  Radar,
  Sun
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroInsight = {
  title: string;
  detail: string;
  icon: IconType;
};

type GatewayProgram = {
  name: string;
  narrative: string;
  bullets: string[];
  icon: IconType;
};

type ModuleCard = {
  title: string;
  description: string;
  icon: IconType;
};

type JourneyTrack = {
  step: string;
  title: string;
  description: string;
  icon: IconType;
};

const HERO_INSIGHTS: HeroInsight[] = [
  {
    title: "WordPress headline honoured",
    detail: "Hero retains “Ways to accept payments from MLM Software in People’s Democratic Republic of Namibia – NA.”",
    icon: Compass
  },
  {
    title: "Gateway roster orchestrated",
    detail: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout operate in one telemetry-rich console.",
    icon: StackSimple
  },
  {
    title: "Module ecosystem unified",
    detail: "Multi currency, ticketing, automation, vouchers, wallets, backup, emails, KYC, and multi-lingual experiences connected seamlessly.",
    icon: Globe2
  }
];

const GATEWAY_PROGRAMS: GatewayProgram[] = [
  {
    name: "Braintree desert commerce mesh",
    narrative: "Support retail hubs in Windhoek, Walvis Bay, and Oshakati with transparent commission governance.",
    bullets: [
      "Multi currency module reconciles NAD and ZAR with treasury analytics and regulator-ready exports.",
      "Ticket workflows capture Bank of Namibia interactions, PSP escalations, and field support cases."
    ],
    icon: Layers
  },
  {
    name: "PayU cross-border accelerator",
    narrative: "Enable ecommerce, logistics, and tourism programmes reaching into South Africa, Botswana, and Angola.",
    bullets: [
      "Emails module distributes tax, AML, and FX updates across English and Afrikaans audiences.",
      "KYC documentation vault stores identity checks, sanction screening, and renewal cadences."
    ],
    icon: Megaphone
  },
  {
    name: "Stripe innovation trail",
    narrative: "Prototype AI concierge experiences, subscription kits, and omnichannel storefronts with monitored risk controls.",
    bullets: [
      "Auto responder delivers English and Afrikaans communications with AI-personalised prompts.",
      "Backup manager preserves storefront experiments, compliance artefacts, and campaign assets."
    ],
    icon: Sparkle
  },
  {
    name: "Authorize.Net partnership runway",
    narrative: "Blend North American partner ecosystems with Namibia’s commission structures transparently.",
    bullets: [
      "E-wallet manager streams instant payouts with maker-checker approvals and territory-specific caps.",
      "Multi-lingual system aligns English, Afrikaans, and German experiences across portals and AI copilots."
    ],
    icon: UsersThree
  }
];

const MODULE_CARDS: ModuleCard[] = [
  {
    title: "Multi currency system",
    description: "Balances NAD, ZAR, and USD with variance analytics and regulator-ready exports.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    description: "Routes compliance, PSP, and support cases with SLA dashboards and AI summaries.",
    icon: Radar
  },
  {
    title: "Auto responder",
    description: "Delivers multilingual notifications, escalations, and coaching flows instantly.",
    icon: Megaphone
  },
  {
    title: "E-voucher engine",
    description: "Supports incentive programmes, events, and loyalty campaigns with redemption telemetry.",
    icon: Layers
  },
  {
    title: "E-wallet manager",
    description: "Instant commissions, reimbursements, and bonuses with governance controls.",
    icon: Bank
  },
  {
    title: "Backup manager",
    description: "Keeps storefronts, automations, and compliance artefacts safe during connectivity shifts.",
    icon: ShieldCheck
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
    description: "Aligns English, Afrikaans, and German experiences across apps and AI assistants.",
    icon: Globe2
  }
];

const JOURNEY_TRACKS: JourneyTrack[] = [
  {
    step: "Track 01",
    title: "Interpret the WordPress brief",
    description: "Hero promise, gateway list, and navigation references shape our design blueprint.",
    icon: Compass
  },
  {
    step: "Track 02",
    title: "Wire the compliant backbone",
    description: "Gateways, modules, and telemetry connect with governance artefacts for Namibian regulators.",
    icon: ShieldCheck
  },
  {
    step: "Track 03",
    title: "Activate operations",
    description: "Finance, compliance, and field leaders receive dashboards, automations, and multilingual enablement.",
    icon: UsersThree
  },
  {
    step: "Track 04",
    title: "Optimise with AI insight",
    description: "Quarterly reviews refine commissions, FX exposure, and partner programmes using data-led clarity.",
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
  const title = "Namibia MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Orchestrate Namibia’s MLM payment gateways with compliant automation. Cloud MLM Software connects PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with AI telemetry.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/namibia", locale)
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

type NamibiaPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function NamibiaPaymentGatewaysPage({ params }: NamibiaPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3.5rem] border border-amber-200/70 bg-gradient-to-br from-amber-50 via-white to-slate-100 px-6 py-20 text-slate-900 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-14">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(245,158,11,0.25),transparent_55%),radial-gradient(circle_at_88%_15%,rgba(251,191,36,0.28),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(14,165,233,0.28),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_20%,rgba(245,158,11,0.4),transparent_55%),radial-gradient(circle_at_88%_15%,rgba(251,191,36,0.4),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(14,165,233,0.32),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.56fr)_minmax(0,0.44fr)] lg:items-start">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-amber-700 dark:border-amber-500/50 dark:bg-slate-950/70 dark:text-amber-200">
                Ways to accept payments · Namibia (NA)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Namibia’s MLM payment gateways orchestrated for desert-born scale
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-200">
                  Cloud MLM Software transforms the WordPress outline into an AI-powered experience. Finance, compliance, and field teams gain real-time visibility into PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout as they drive Namibia’s expansion.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-amber-600 text-white hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400">
                  <Link href={contactHref}>
                    Plan the Namibia rollout
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-amber-200 bg-white/80 text-amber-700 hover:bg-amber-100 dark:border-amber-500/40 dark:bg-transparent dark:text-amber-100 dark:hover:bg-amber-500/10"
                >
                  <Link href={demoHref}>Preview the payment console</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-6">
              {HERO_INSIGHTS.map((insight) => {
                const Icon = insight.icon;
                return (
                  <article
                    key={insight.title}
                    className="rounded-3xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-700 dark:bg-slate-800 dark:text-amber-200">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <h2 className="text-base font-semibold text-slate-900 dark:text-white">{insight.title}</h2>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{insight.detail}</p>
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
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Gateway programmes built from the legacy connector list
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Each adapter becomes a telemetry-rich programme with compliance artefacts and field enablement.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_PROGRAMS.map((program) => {
            const Icon = program.icon;
            return (
              <article
                key={program.name}
                className="flex h-full flex-col gap-4 rounded-[2.25rem] border border-amber-200/70 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-700 dark:bg-slate-800 dark:text-amber-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{program.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{program.narrative}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {program.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-amber-500 dark:bg-amber-300" aria-hidden />
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
              Modules from the navigation, unified for Namibia’s leadership
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-slate-300">
              The WordPress module list is now a single console with AI telemetry, compliance artefacts, and executive-ready insights.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_CARDS.map((module) => {
              const Icon = module.icon;
              return (
                <article key={module.title} className="flex h-full flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-amber-200">
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
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Tracks to launch and refine Namibia</h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Our cadence keeps corporate, regulators, and field teams aligned with the WordPress brief while unlocking AI-led excellence.
          </p>
        </div>
        <div className="relative grid gap-6 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-[12.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-amber-500/40 via-transparent to-transparent lg:block" aria-hidden />
          <div className="pointer-events-none absolute left-[37.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-amber-500/40 via-transparent to-transparent lg:block" aria-hidden />
          <div className="pointer-events-none absolute left-[62.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-amber-500/40 via-transparent to-transparent lg:block" aria-hidden />
          {JOURNEY_TRACKS.map((track) => {
            const Icon = track.icon;
            return (
              <article key={track.step} className="rounded-[2rem] border border-amber-200/70 bg-white/90 p-6 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/70">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-500 dark:text-slate-400">
                  <Icon className="h-5 w-5" aria-hidden />
                  {track.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{track.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{track.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="overflow-hidden rounded-[2.75rem] border border-amber-200/70 bg-gradient-to-br from-amber-600 via-amber-500 to-blue-500 p-10 text-slate-100 shadow-xl dark:border-slate-700">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">Next step</p>
              <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                Purchase AI-powered Cloud MLM Software to lead Namibia’s payment transformation.
              </h2>
              <p className="max-w-2xl text-sm text-white/90">
                We provide timelines, governance artefacts, and AI enablement so every stakeholder advances confidently from the first sprint.
              </p>
            </div>
            <div className="grid gap-4">
              <Button asChild size="lg" className="w-full gap-2 bg-white text-amber-700 hover:bg-slate-100">
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
