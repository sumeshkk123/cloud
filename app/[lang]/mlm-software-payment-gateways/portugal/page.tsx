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
  ChatsCircle,
  ClipboardText,
  Compass,
  Cpu,
  GlobeHemisphereEast,
  Handshake,
  Lightning,
  MapTrifold,
  Megaphone,
  ShieldCheck,
  StackSimple,
  UsersThree,
  Waveform
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroStat = {
  label: string;
  detail: string;
  icon: IconType;
};

type GatewayMoment = {
  title: string;
  description: string;
  bullet: string;
  icon: IconType;
};

type ModuleStream = {
  name: string;
  description: string;
  icon: IconType;
  accent: string;
};

type LeadershipMove = {
  stage: string;
  summary: string;
  outcome: string;
  icon: IconType;
};

const HERO_STATS: HeroStat[] = [
  {
    label: "WordPress promise held",
    detail:
      "Ways to accept payments from MLM Software in People’s Democratic Republic of Portugal – PT remains the hero message.",
    icon: ShieldCheck
  },
  {
    label: "Gateway set for Portugal",
    detail: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree stay verified for EU operations.",
    icon: ChartLineUp
  },
  {
    label: "Operations uplifted",
    detail: "Cloud MLM Software already builds for leading organisations; we extend the fidelity with AI oversight.",
    icon: GlobeHemisphereEast
  }
];

const GATEWAY_MOMENTS: GatewayMoment[] = [
  {
    title: "PayPal — diaspora reach",
    description: "Unify Lisbon, Porto, and global distributors with treasury-grade transparency.",
    bullet: "Multi currency controls deliver variance alerts across EUR, USD, and GBP settlements.",
    icon: StackSimple
  },
  {
    title: "Amazon Pay — subscription confidence",
    description: "Serve retail, beauty, and direct-selling brands with polished checkout journeys.",
    bullet: "Auto responder headlines onboarding series and product renewals for Portuguese audiences.",
    icon: Megaphone
  },
  {
    title: "PayU — regional routing",
    description: "Blend Iberian growth with Central Europe payment coverage.",
    bullet: "Lightning-fast routing uses AI hints to steer transactions toward the highest approval PSP.",
    icon: Lightning
  },
  {
    title: "Stripe — experimentation loop",
    description: "Launch digital experiences, AI memberships, and tiered commissions safely.",
    bullet: "Backup telemetry and ticket workflows keep product squads and compliance in lockstep.",
    icon: Waveform
  },
  {
    title: "Authorize.Net — governance bridge",
    description: "Connect North American acquiring partners with Portugal’s regulatory expectations.",
    bullet: "KYC documentation vault synchronises contracts, IDs, and supervisory approvals.",
    icon: ClipboardText
  },
  {
    title: "Braintree — omnichannel loyalty",
    description: "Combine pop-up activations, ecommerce, and in-market ambassadors with shared data.",
    bullet: "E-wallet and e-voucher modules record incentive flows with audit-ready details.",
    icon: Handshake
  }
];

const MODULE_STREAMS: ModuleStream[] = [
  {
    name: "Multi currency module",
    description: "Balance EUR, USD, GBP, and CHF without manual spreadsheets or reconciliation delays.",
    icon: ChartLineUp,
    accent: "bg-emerald-500/15 text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-100"
  },
  {
    name: "Ticket system module",
    description: "Route PSP escalations, VAT questions, and distributor care through SLA-backed workflows.",
    icon: ChatsCircle,
    accent: "bg-sky-500/15 text-sky-900 dark:bg-sky-500/20 dark:text-sky-100"
  },
  {
    name: "Auto responder",
    description: "Deliver Portuguese and English communications across onboarding, renewals, and incentives.",
    icon: Megaphone,
    accent: "bg-amber-500/15 text-amber-900 dark:bg-amber-500/20 dark:text-amber-100"
  },
  {
    name: "Emails hub",
    description: "Schedule campaigns, alerts, and policy notices with deliverability analytics for leadership.",
    icon: UsersThree,
    accent: "bg-purple-500/15 text-purple-900 dark:bg-purple-500/20 dark:text-purple-100"
  },
  {
    name: "KYC documentation",
    description: "Preserve evidence, contracts, and renewals aligned with Banco de Portugal expectations.",
    icon: ClipboardText,
    accent: "bg-blue-500/15 text-blue-900 dark:bg-blue-500/20 dark:text-blue-100"
  },
  {
    name: "E-wallet + e-voucher",
    description: "Instant payouts and campaign rewards remain transparent for finance, tax, and audit teams.",
    icon: StackSimple,
    accent: "bg-rose-500/15 text-rose-900 dark:bg-rose-500/20 dark:text-rose-100"
  }
];

const LEADERSHIP_MOVES: LeadershipMove[] = [
  {
    stage: "Localise WordPress fidelity",
    summary: "Hero copy, module lists, and country coverage move intact into the modern layout.",
    outcome: "Stakeholders immediately recognise continuity with the live WordPress experience.",
    icon: Buildings
  },
  {
    stage: "Instrument AI telemetry",
    summary: "Dashboards, anomaly detection, and call summaries highlight gateway performance daily.",
    outcome: "Executives gain briefings on success metrics, compliance posture, and next best actions.",
    icon: Cpu
  },
  {
    stage: "Operationalise collaboration",
    summary: "Ticket, email, and documentation workflows align finance, legal, and distributor success.",
    outcome: "Portuguese teams and global partners work from one command centre.",
    icon: Handshake
  },
  {
    stage: "Scale throughout Iberia",
    summary: "Insights extend to Spain and Lusophone markets while respecting local nuance.",
    outcome: "Expansion playbooks accelerate without fragmenting governance.",
    icon: Compass
  }
];

export const metadata: Metadata = {
  title: "Portugal MLM Payment Gateways | Cloud MLM Software",
  description:
    "Advance Portugal’s MLM payment gateways with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, and Braintree backed by AI governance and distributor experience.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/portugal"
  },
  openGraph: {
    title: "Portugal MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People’s Democratic Republic of Portugal – PT with executive-ready intelligence."
  }
};

type PortugalPageProps = {
  params: { lang: SupportedLocale };
};

export default function PortugalPaymentGatewayPage({ params }: PortugalPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const servicesHref = buildLocalizedPath("/services", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-100 via-white to-slate-100 py-20 dark:from-slate-950 dark:via-emerald-950/40 dark:to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(16,185,129,0.22),transparent_60%),radial-gradient(circle_at_70%_18%,rgba(14,116,144,0.18),transparent_58%),radial-gradient(circle_at_50%_80%,rgba(2,132,199,0.12),transparent_65%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1fr,0.9fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-600/40 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700 shadow-sm dark:border-emerald-300/25 dark:bg-white/10 dark:text-emerald-100">
              Ways to accept payments · Portugal (PT)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Portugal MLM payment gateways with AI-first orchestration
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Portugal – PT stays
                verbatim while the entire journey evolves into a proactive, insight-rich experience for decision-makers.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Talk to a Lisbon strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-emerald-700/50 text-emerald-700 hover:bg-emerald-600/10 dark:border-emerald-300/40 dark:text-emerald-100"
              >
                <Link href={demoHref}>
                  Explore the live demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {HERO_STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <article
                  key={stat.label}
                  className="rounded-3xl border border-emerald-600/20 bg-white/75 p-6 backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold text-foreground">{stat.label}</h2>
                      <p className="text-sm text-muted-foreground">{stat.detail}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 lg:grid-cols-[1fr,1.1fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Gateway moments tuned for Portugal
            </h2>
            <p className="text-sm text-muted-foreground">
              Existing WordPress content lists PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, and Braintree. We
              transform that inventory into initiatives with data guardrails, storytelling, and AI follow-through.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={servicesHref}>
                  View integration services
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-border text-foreground hover:bg-foreground/10 dark:border-white/15"
              >
                <Link href={pricingHref}>
                  Compare pricing options
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {GATEWAY_MOMENTS.map((moment) => {
              const Icon = moment.icon;
              return (
                <article
                  key={moment.title}
                  className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-500/30 dark:border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground">{moment.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{moment.description}</p>
                  <p className="mt-4 text-sm font-medium text-foreground">{moment.bullet}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-emerald-900 to-slate-900 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_20%,rgba(16,185,129,0.35),transparent_45%),radial-gradient(circle_at_88%_30%,rgba(14,165,233,0.22),transparent_55%)]" />
        <div className="container relative space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Module streams on constant watch</h2>
            <p className="text-sm text-white/75">
              Multi currency, ticket system, auto responder, e-voucher, e-wallet, and complementary modules migrate
              from WordPress into a polished, analytics-ready control room.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_STREAMS.map((module) => {
              const Icon = module.icon;
              return (
                <article key={module.name} className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
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
            Leadership moves to sustain momentum
          </h2>
          <p className="text-sm text-muted-foreground">
            From preserving the WordPress narrative to orchestrating Iberian expansion, every stage comes with clarity,
            outcomes, and shared accountability.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {LEADERSHIP_MOVES.map((move) => {
            const Icon = move.icon;
            return (
              <article
                key={move.stage}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{move.stage}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{move.summary}</p>
                <p className="text-sm font-medium text-foreground">{move.outcome}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container overflow-hidden rounded-3xl border border-emerald-600/30 bg-gradient-to-br from-emerald-100 via-white to-slate-100 p-10 dark:border-emerald-300/30 dark:from-slate-950 dark:via-emerald-950/40 dark:to-slate-950">
        <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Ready to modernise payment operations in Portugal?
            </h2>
            <p className="text-sm text-muted-foreground">
              Connect with Cloud MLM Software for a walkthrough of the refined WordPress experience, AI-enhanced
              governance, and Iberian expansion playbooks.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href={contactHref}>
                Book a strategy call
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-emerald-700/40 text-emerald-700 hover:bg-emerald-600/10 dark:border-emerald-300/40 dark:text-emerald-100"
            >
              <Link href={demoHref}>
                Review product demo
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
