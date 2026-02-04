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
  Bank,
  ChartLineUp,
  ChatsCircle,
  Compass,
  CurrencyCircleDollar,
  GlobeHemisphereEast,
  Lightning,
  MapTrifold,
  Megaphone,
  Plugs,
  ShieldCheck,
  Sparkle,
  StackSimple,
  UsersThree,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  heading: string;
  copy: string;
  icon: IconType;
};

type Gateway = {
  name: string;
  focus: string;
  moves: string[];
  icon: IconType;
};

type Module = {
  title: string;
  detail: string;
  icon: IconType;
};

type TimelineStep = {
  phase: string;
  title: string;
  detail: string;
  icon: IconType;
};

type Alliance = {
  region: string;
  summary: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    heading: "Legacy headline honoured",
    copy:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Somalia - SO anchors the modern experience.",
    icon: StackSimple
  },
  {
    heading: "Gateway list intact",
    copy:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout remain the core connectors across the programme.",
    icon: Plugs
  },
  {
    heading: "Module ecosystem unified",
    copy:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, and multi-lingual system collaborate as one telemetry layer.",
    icon: Sparkle
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal diaspora bridge",
    focus: "Serve Mogadishu leadership while connecting global Somali communities across Nairobi, Dubai, and Minneapolis.",
    moves: [
      "Multi currency module reconciles SOS, USD, GBP, and AED flows with treasury ready commentary.",
      "Ticket system module stores Central Bank compliance evidence and Hawala partner documentation."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay commerce lane",
    focus: "Support ecommerce, humanitarian, and remittance enabled storefronts with premium experiences.",
    moves: [
      "Auto responder delivers bilingual communications aligned to air and sea logistics milestones.",
      "Backup manager snapshots seasonal campaigns before Ramadan, Eid, and harvest activations."
    ],
    icon: Megaphone
  },
  {
    name: "PayU regional mesh",
    focus: "Blend East African wallets, Gulf PSPs, and global acquirers while respecting compliance expectations.",
    moves: [
      "Emails module circulates AML, FX, and tax updates to finance and compliance leads.",
      "KYC documentation tracks commercial registrations, ID verifications, and correspondent banking attestations."
    ],
    icon: ChatsCircle
  },
  {
    name: "Stripe innovation studio",
    focus: "Prototype AI concierge, mobile centric onboarding, and gig economy incentives.",
    moves: [
      "Ticket system module routes developer escalations with AI generated replication steps.",
      "Multi-lingual system keeps Somali, Arabic, and English experiences aligned."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net assurance track",
    focus: "Blend US acquiring expectations with Somali governance and Sharia compliant processes.",
    moves: [
      "Multi currency module compares US settlement performance against East African banking partners.",
      "KYC documentation vault retains sanction, PEP, and merchant approvals inspection ready."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel vault",
    focus: "Tokenise field programmes, humanitarian distributions, and retail activations.",
    moves: [
      "E-wallet module enables instant commissions with maker-checker controls by distributor tier.",
      "Backup manager preserves offline transactions for regions with intermittent connectivity."
    ],
    icon: Wallet
  },
  {
    name: "Adyen performance tower",
    focus: "Monitor conversion, risk, and FX signals across EU, Gulf, and North American corridors.",
    moves: [
      "Multi currency module visualises FX exposure across SOS, USD, EUR, and AED routes.",
      "Emails module distributes scheme advisories and PSD2 updates with traceable delivery."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    focus: "Deliver digital kits, AI enablement, and partner onboarding materials to Somali and diaspora teams.",
    moves: [
      "E-voucher journeys automate incentive fulfilment with tax documentation for finance leads.",
      "Multi-lingual system harmonises Somali, Arabic, and English learning assets."
    ],
    icon: MapTrifold
  }
];

const MODULES: Module[] = [
  {
    title: "Multi currency module",
    detail: "Balances SOS, USD, GBP, EUR, and AED with AI assisted reconciliation commentary and variance alerts.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    detail: "Routes regulatory, PSP, and humanitarian requests with SLA dashboards and immutable audit logs.",
    icon: ShieldCheck
  },
  {
    title: "Auto responder",
    detail: "Delivers Somali, Arabic, and English communications across SMS, email, and chatbot surfaces.",
    icon: Sparkle
  },
  {
    title: "E-voucher",
    detail: "Issues incentive codes, aid allocations, and loyalty rewards with maker-checker approvals.",
    icon: Wallet
  },
  {
    title: "E-wallet",
    detail: "Streams commissions and reimbursements with liquidity guardrails tailored for Hawala integrations.",
    icon: Bank
  },
  {
    title: "Backup manager",
    detail: "Protects storefronts, workflows, and compliance artefacts ahead of seasonal surges and infrastructure outages.",
    icon: ShieldCheck
  },
  {
    title: "Emails module",
    detail: "Centralises transactional, marketing, and compliance messaging with deliverability telemetry.",
    icon: ChatsCircle
  },
  {
    title: "KYC documentation",
    detail: "Maintains identity, licensing, and correspondent banking evidence with automated renewal reminders.",
    icon: Compass
  },
  {
    title: "Multi-lingual system",
    detail: "Keeps Somali, Arabic, and English journeys aligned across portals, bots, and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const TIMELINE: TimelineStep[] = [
  {
    phase: "Phase 01",
    title: "Transcribe the WordPress heritage",
    detail:
      "Retain the original headline, gateway roster, and module references so stakeholders recognise continuity immediately.",
    icon: StackSimple
  },
  {
    phase: "Phase 02",
    title: "Instrument compliance guardrails",
    detail:
      "Embed Central Bank guidance, AML directives, and Hawala governance into workflows, approvals, and dashboards.",
    icon: ShieldCheck
  },
  {
    phase: "Phase 03",
    title: "Activate the connector roster",
    detail:
      "Advance PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout through sandbox, pilot, and production.",
    icon: Plugs
  },
  {
    phase: "Phase 04",
    title: "Scale AI telemetry",
    detail:
      "Deliver executive briefings, liquidity forecasts, and risk alerts tuned for Somali leadership and diaspora partners.",
    icon: ChartLineUp
  }
];

const ALLIANCES: Alliance[] = [
  {
    region: "East Africa",
    summary:
      "Collaborates with Nairobi, Addis Ababa, and Kampala programmes on compliance, FX strategy, and AI automation.",
    icon: Compass
  },
  {
    region: "Gulf Cooperation Council",
    summary:
      "Aligns with Dubai and Doha hubs on correspondent banking, liquidity buffers, and Sharia compliant governance.",
    icon: Bank
  },
  {
    region: "Europe",
    summary:
      "Shares PSD2 practices, risk telemetry, and diaspora enablement with London and Amsterdam teams.",
    icon: ChartLineUp
  },
  {
    region: "North America",
    summary:
      "Coordinates with Minneapolis and Toronto communities on remittance innovation and compliance telemetry.",
    icon: UsersThree
  },
  {
    region: "Middle East",
    summary:
      "Partners with Riyadh and Jeddah programmes on language localisation, risk controls, and treasury visibility.",
    icon: MapTrifold
  },
  {
    region: "Asia Pacific",
    summary:
      "Works with Singapore and Kuala Lumpur hubs on AI enablement, experimentation cadences, and automation.",
    icon: Lightning
  }
];

export const metadata: Metadata = {
  title: "Somalia MLM Payment Gateways | Cloud MLM Software",
  description:
    "Deploy Somalia ready MLM payment gateways with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout operating within an AI optimised, compliance aware platform.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/somalia"
  },
  openGraph: {
    title: "Somalia MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Somalia - now elevated with treasury dashboards, Hawala governance, and AI telemetry."
  }
};

type SomaliaPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function SomaliaPaymentGatewayPage({ params }: SomaliaPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-amber-100 py-20 dark:from-sky-500/20 dark:via-slate-950 dark:to-amber-500/20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.3),transparent_60%),radial-gradient(circle_at_80%_15%,rgba(250,204,21,0.25),transparent_55%),radial-gradient(circle_at_45%_80%,rgba(59,130,246,0.2),transparent_60%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-700 dark:border-white/20 dark:bg-white/10 dark:text-white">
              Somalia - Payment Orchestration
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Somalia MLM payment gateways aligned to diaspora scale and governance
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software reimagines the WordPress narrative with AI powered governance, treasury visibility, and
                multilingual experiences that respect Somali leadership priorities.
              </p>
            </div>
            <div className="rounded-3xl border border-sky-500/30 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/10">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-700 dark:text-white/70">
                Legacy anchor
              </p>
              <p className="mt-3 text-base text-foreground dark:text-white">
                Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Somalia - SO
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Connect with Somalia leadership
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-sky-500/40 text-sky-800 hover:bg-sky-100 dark:border-white/30 dark:text-white"
              >
                <Link href={demoHref}>
                  Preview the AI powered demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article
                  key={highlight.heading}
                  className="group relative overflow-hidden rounded-3xl border border-sky-500/25 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/15 via-amber-500/15 to-blue-500/15 opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold text-foreground dark:text-white">{highlight.heading}</h2>
                      <p className="text-sm text-muted-foreground dark:text-white/70">{highlight.copy}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Gateway plays engineered for Somali compliance, treasury, and customer experience
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The eight connectors from the legacy export now include defined moves for finance, compliance, and product
            teams.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-border/60 bg-background/85 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/10 via-amber-500/10 to-blue-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground dark:text-white">{gateway.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{gateway.focus}</p>
                  </div>
                </div>
                <ul className="relative space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {gateway.moves.map((move) => (
                    <li key={move} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-sky-500 dark:bg-white" aria-hidden />
                      <span>{move}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/70 py-20 dark:bg-slate-950">
        <div className="container space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Modules from the WordPress navigation united for Somalia
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Every module gains telemetry, multilingual reach, and compliance guardrails tailored to Somali operations.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{module.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{module.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className="space-y-6 rounded-3xl border border-sky-500/30 bg-white/85 p-8 shadow-sm dark:border-white/15 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-600 dark:text-white/70">
              Delivery playbook
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white">
              Four disciplined phases for Somali leadership
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Preserve heritage, embed governance, activate connectors, and unlock AI decision support.
            </p>
            <Button asChild variant="secondary" size="lg" className="gap-2">
              <Link href={pricingHref}>
                Review Somalia pricing frameworks
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 hidden w-px bg-gradient-to-b from-sky-500 via-amber-500 to-transparent lg:block" />
            <div className="space-y-6">
              {TIMELINE.map((step) => {
                const Icon = step.icon;
                return (
                  <article
                    key={step.phase}
                    className="relative rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <div className="space-y-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                          {step.phase}
                        </span>
                        <h3 className="text-base font-semibold text-foreground dark:text-white">{step.title}</h3>
                        <p className="text-sm text-muted-foreground dark:text-white/70">{step.detail}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-sky-900 to-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(14,165,233,0.35),transparent_60%),radial-gradient(circle_at_80%_15%,rgba(250,204,21,0.2),transparent_55%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment gateways for MLM Software by country or region
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/75">
              Somalia collaborates with regional and global partners to reinforce compliant, resilient, and AI inspired
              payment operations.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ALLIANCES.map((alliance) => {
              const Icon = alliance.icon;
              return (
                <article key={alliance.region} className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/5 p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{alliance.region}</h3>
                  </div>
                  <p className="text-sm text-white/75">{alliance.summary}</p>
                </article>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-sky-900 hover:bg-sky-100">
              <Link href={contactHref}>
                Talk to a Somalia strategist
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={demoHref}>
                Launch the interactive demo
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
