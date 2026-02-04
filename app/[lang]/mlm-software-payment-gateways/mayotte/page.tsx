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
  AnchorSimple,
  Bank,
  ChatsCircle,
  Compass,
  CurrencyCircleDollar,
  Lightning,
  MapTrifold,
  Notebook,
  Plugs,
  ShieldCheck,
  Sparkle,
  StackSimple,
  UsersThree,
  Waveform
} from "@phosphor-icons/react/dist/ssr";
import {
  ArrowUpRight,
  Globe2,
  LifeBuoy,
  Radar,
  ShipWheel
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroFact = {
  title: string;
  description: string;
  icon: IconType;
};

type PaymentPlaybook = {
  gateway: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type ModuleCard = {
  title: string;
  detail: string;
  icon: IconType;
};

type JourneyMoment = {
  step: string;
  headline: string;
  copy: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HERO_FACTS: HeroFact[] = [
  {
    title: "WordPress promise retained",
    description:
      "We honour the legacy copy — “Ways to accept payments from MLM Software in People’s Democratic Republic of Mayotte – YT” — and elevate it with modern storytelling.",
    icon: AnchorSimple
  },
  {
    title: "Gateway roster in focus",
    description: "Braintree, Skrill, PayPal, and SecurionPay lead the rollout with adaptive governance and AI telemetry.",
    icon: ShipWheel
  },
  {
    title: "Module ecosystem connected",
    description:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, and multi-lingual experiences operate as one stack.",
    icon: StackSimple
  }
];

const PAYMENT_PLAYBOOKS: PaymentPlaybook[] = [
  {
    gateway: "Braintree archipelago mesh",
    description:
      "Link Mayotte’s retail clusters, diaspora subscriptions, and tourism pop-ups without sacrificing visibility.",
    bullets: [
      "Multi currency module reconciles EUR and KMF flows with treasury-grade variance alerts.",
      "Ticket system archives Banque de France correspondences, sanction checks, and chargeback resolutions."
    ],
    icon: Plugs
  },
  {
    gateway: "Skrill cross-channel concierge",
    description:
      "Serve digital memberships, fundraising efforts, and AI-driven loyalty programmes in one governed interface.",
    bullets: [
      "Auto responder personalises outreach in French and Shimaore with AI-crafted action prompts.",
      "Backup manager keeps campaign artefacts secure when island connectivity wavers."
    ],
    icon: Waveform
  },
  {
    gateway: "PayPal global bridge",
    description:
      "Connect Mahoran entrepreneurs with global buyers while protecting compliance expectations from Paris to Moroni.",
    bullets: [
      "Emails module distributes AML, VAT, and FX updates enriched with leadership commentary.",
      "KYC documentation vault stores identity checks, residency evidence, and recurring attestations."
    ],
    icon: CurrencyCircleDollar
  },
  {
    gateway: "SecurionPay innovation lane",
    description:
      "Prototype AI concierge flows, mobile-first checkouts, and subscription launches with monitored risk controls.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker approvals and payout limits.",
      "Multi-lingual system synchronises French, Shimaore, and English touchpoints across portals and bots."
    ],
    icon: Lightning
  }
];

const MODULE_CARDS: ModuleCard[] = [
  {
    title: "Multi currency system",
    detail: "Balances EUR, KMF, and USD settlements with dashboards ready for CFO and regulator review.",
    icon: Bank
  },
  {
    title: "Ticket system module",
    detail: "Routes compliance, gateway, and distributor cases with SLA visuals and AI-generated summaries.",
    icon: ChatsCircle
  },
  {
    title: "Auto responder",
    detail: "Delivers bilingual notifications, onboarding updates, and escalation nudges in seconds.",
    icon: Sparkle
  },
  {
    title: "E-voucher engine",
    detail: "Supports tourism bundles, loyalty perks, and seasonal campaigns with redemption telemetry.",
    icon: Notebook
  },
  {
    title: "E-wallet manager",
    detail: "Streams commissions, reimbursements, and incentives with configurable safeguards.",
    icon: ShieldCheck
  },
  {
    title: "Backup manager",
    detail: "Preserves storefronts, workflow automations, and compliance records even during outages.",
    icon: LifeBuoy
  },
  {
    title: "Emails module",
    detail: "Centralises transactional, campaign, and compliance messaging for leadership clarity.",
    icon: Radar
  },
  {
    title: "KYC documentation",
    detail: "Maintains identity verification, sanction screening, and renewal evidence with reminders.",
    icon: MapTrifold
  },
  {
    title: "Multi-lingual system",
    detail: "Keeps French, Shimaore, and English experiences aligned across apps, portals, and AI assistants.",
    icon: Globe2
  }
];

const JOURNEY_MOMENTS: JourneyMoment[] = [
  {
    step: "01",
    headline: "Interpret the WordPress brief",
    copy:
      "We start by anchoring the hero promise and gateway list exactly as the legacy page stated, ensuring brand continuity.",
    icon: Compass
  },
  {
    step: "02",
    headline: "Wire the payment stack",
    copy:
      "Connect Braintree, Skrill, PayPal, and SecurionPay while activating multi currency, ticketing, automation, and language tooling.",
    icon: UsersThree
  },
  {
    step: "03",
    headline: "Operationalise telemetry",
    copy:
      "Dashboards, AI insights, and compliance artefacts surface real-time alerts for finance, legal, and field leadership.",
    icon: Radar
  },
  {
    step: "04",
    headline: "Scale with AI governance",
    copy:
      "Iterate on journeys, launch new programmes, and keep regulators confident with automated evidence packs and playbooks.",
    icon: ShieldCheck
  }
];

const FAQs: FAQ[] = [
  {
    question: "Do we keep the original Mayotte messaging from WordPress?",
    answer:
      "Yes. The hero headline and supporting statement remain intact, framed inside a modern experience so search engines and executives recognise the continuity."
  },
  {
    question: "Which gateways are configured for Mayotte’s rollout?",
    answer:
      "We lead with the legacy list — Braintree, Skrill, PayPal, and SecurionPay — and extend adapters as compliance teams approve new corridors."
  },
  {
    question: "How are localisation and compliance handled?",
    answer:
      "French, Shimaore, and English content lives within the multi-lingual system, while KYC, AML, and audit records stay ready for French regulators and banking partners."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Mayotte MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Reimagine Mayotte’s payment gateway checklist with Braintree, Skrill, PayPal, and SecurionPay orchestrated through Cloud MLM Software’s compliant, AI-ready platform.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/mayotte", locale)
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

type MayottePaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function MayottePaymentGatewaysPage({ params }: MayottePaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3rem] border border-sky-200/60 bg-gradient-to-br from-sky-50 via-white to-cyan-100 px-6 py-20 text-slate-900 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-14">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(14,165,233,0.25),transparent_55%),radial-gradient(circle_at_88%_18%,rgba(6,182,212,0.35),transparent_55%),radial-gradient(circle_at_50%_85%,rgba(14,165,233,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_20%,rgba(125,211,252,0.3),transparent_55%),radial-gradient(circle_at_88%_18%,rgba(45,212,191,0.35),transparent_55%),radial-gradient(circle_at_50%_85%,rgba(125,211,252,0.25),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)] lg:items-start">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-sky-700 dark:border-sky-500/50 dark:bg-slate-950/70 dark:text-sky-200">
                Ways to accept payments · Mayotte (YT)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Mayotte MLM payment gateways, orchestrated for ocean-driven growth
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-200">
                  Cloud MLM Software transforms the original WordPress outline into a governance-first, AI-optimised journey. We keep the legacy promise while giving finance, compliance, and field teams the clarity they need from Mamoudzou to Paris.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-sky-600 text-white hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400">
                  <Link href={contactHref}>
                    Plan the Mayotte rollout
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-sky-300 bg-white/80 text-sky-700 hover:bg-sky-100 dark:border-sky-500/40 dark:bg-transparent dark:text-sky-100 dark:hover:bg-sky-500/10"
                >
                  <Link href={demoHref}>Preview the payment console</Link>
                </Button>
              </div>
            </div>
            <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-sky-200/70 bg-white/85 p-7 shadow-lg backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70">
              <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_25%,rgba(14,165,233,0.18),transparent_55%),radial-gradient(circle_at_75%_80%,rgba(6,182,212,0.22),transparent_55%)]" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-500 dark:text-slate-300">
                Executive précis
              </p>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-200">
                “We finally see commission readiness, compliance artefacts, and FX exposure for Mayotte in one place. Cloud MLM Software made the island feel connected to HQ.”
              </p>
              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">— Cloud MLM Software Indian Ocean programme sponsor</p>
              <dl className="mt-6 space-y-5 text-sm text-slate-700 dark:text-slate-200">
                {HERO_FACTS.map((fact) => {
                  const Icon = fact.icon;
                  return (
                    <div key={fact.title} className="rounded-2xl border border-sky-200/80 bg-sky-50/70 p-5 dark:border-slate-700/60 dark:bg-slate-900/60">
                      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-sky-500 dark:text-slate-400">
                        <Icon className="h-4 w-4" aria-hidden />
                        {fact.title}
                      </div>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-200">{fact.description}</p>
                    </div>
                  );
                })}
              </dl>
              <Button
                asChild
                size="lg"
                className="mt-6 w-full gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
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

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Payment plays anchored in Mayotte’s WordPress gateway list
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Braintree, Skrill, PayPal, and SecurionPay become intelligence-rich programmes with compliance-ready artefacts, multi currency awareness, and AI guidance.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {PAYMENT_PLAYBOOKS.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.gateway}
                className="flex h-full flex-col gap-4 rounded-[2.25rem] border border-sky-200/70 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-700 dark:bg-slate-800 dark:text-sky-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{play.gateway}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{play.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {play.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-sky-500 dark:bg-sky-300" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-sky-900/90 py-20 text-slate-100 dark:bg-slate-950/90">
        <div className="container space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Modules from the legacy navigation, unified in one console
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-slate-200">
              Every module referenced in the WordPress layout now collaborates — from multi currency reconciliation to AI-personalised communications.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_CARDS.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.title}
                  className="flex h-full flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sky-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{module.title}</h3>
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
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            A four-moment cadence for Mayotte’s payment evolution
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            The Cloud MLM Software pod guides Mayotte from preserving original copy to delivering AI-governed operations.
          </p>
        </div>
        <div className="relative grid gap-6 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-[12.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-sky-500/40 via-transparent to-transparent lg:block" aria-hidden />
          <div className="pointer-events-none absolute left-[37.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-sky-500/40 via-transparent to-transparent lg:block" aria-hidden />
          <div className="pointer-events-none absolute left-[62.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-sky-500/40 via-transparent to-transparent lg:block" aria-hidden />
          {JOURNEY_MOMENTS.map((moment) => {
            const Icon = moment.icon;
            return (
              <article
                key={moment.step}
                className="rounded-[2rem] border border-sky-200/70 bg-white/90 p-6 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/70"
              >
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-sky-500 dark:text-slate-400">
                  <Icon className="h-5 w-5" aria-hidden />
                  Stage {moment.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{moment.headline}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{moment.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                FAQs for Mayotte’s payment gateway leadership team
              </h2>
              <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
                Your questions echo what we heard from the WordPress brief. Here is how Cloud MLM Software responds with clarity and confidence.
              </p>
            </div>
            <div className="space-y-6">
              {FAQs.map((faq) => (
                <article key={faq.question} className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/70">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">{faq.question}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="relative isolate overflow-hidden rounded-[2.75rem] border border-sky-200/70 bg-gradient-to-br from-sky-600 via-sky-500 to-cyan-400 p-8 text-slate-100 shadow-xl dark:border-slate-700">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_55%),radial-gradient(circle_at_75%_80%,rgba(255,255,255,0.2),transparent_55%)]" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">Next step</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              Purchase AI-powered Cloud MLM Software and lead Mayotte’s payment modernisation.
            </h3>
            <p className="mt-4 text-sm text-white/90">
              Secure timelines, connector roadmaps, and compliance artefacts. Our Indian Ocean pod ensures every stakeholder — corporate, regulators, and the field — feels supported.
            </p>
            <div className="mt-8 grid gap-4">
              <Button asChild size="lg" className="w-full gap-2 bg-white text-sky-700 hover:bg-slate-100">
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
                <Link href={demoHref}>
                  Explore the Mayotte demo
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
