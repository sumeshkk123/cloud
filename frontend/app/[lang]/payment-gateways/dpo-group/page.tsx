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
  ArrowSquareOut,
  ChartLineUp,
  ChatsCircle,
  Circuitry,
  CompassTool,
  GlobeHemisphereWest,
  Handshake,
  Lightning,
  MapTrifold,
  ShieldCheck,
  SquaresFour,
  Stack,
  TrendUp
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type StrategicInsight = {
  tag: string;
  title: string;
  detail: string;
  icon: IconType;
};

type ModuleGroup = {
  title: string;
  narrative: string;
  items: string[];
  icon: IconType;
};

type PlanAngle = {
  plan: string;
  focus: string;
  enablement: string;
};

type ServicePivot = {
  name: string;
  summary: string;
};

type RolloutPhase = {
  id: string;
  title: string;
  description: string;
  deliverable: string;
  icon: IconType;
};

type MarketHighlight = {
  country: string;
  date: string;
  narrative: string;
  href: string;
};

const HERO_METRICS: HeroMetric[] = [
  {
    label: "Pan-African coverage",
    value: "20+ markets",
    detail:
      "Botswana and neighbouring growth hubs rely on DPO Group for card, wallet, and bank acquiring tuned to local regulation.",
    icon: GlobeHemisphereWest
  },
  {
    label: "Launch momentum",
    value: "30-day blueprint",
    detail:
      "Custom demos evolve into production-grade experiences that stitch DPO Group capabilities across Cloud MLM modules.",
    icon: Lightning
  },
  {
    label: "Operational assurance",
    value: "Multi-layer resilience",
    detail:
      "Backup scenarios, ticketing, and automated communications safeguard every transaction from enrollment to payout.",
    icon: ShieldCheck
  }
];

const STRATEGIC_INSIGHTS: StrategicInsight[] = [
  {
    tag: "Narrative design",
    title: "Transform archived copy into a premium checkout story",
    detail:
      "We translate the WordPress-era promise—secure, fast, seamless—into messaging that resonates with boards, field leaders, and AI copilots alike.",
    icon: CompassTool
  },
  {
    tag: "Systems architecture",
    title: "Wire DPO Group into Cloud MLM Software’s intelligence fabric",
    detail:
      "Multi-currency ledgers, e-wallet balances, and Apple Pay-ready flows converge inside dashboards that finance and compliance teams trust.",
    icon: Circuitry
  },
  {
    tag: "Growth leadership",
    title: "Publish insights that position you as the regional authority",
    detail:
      "Case notes, calculators, and research-backed blogs keep Cloud MLM Software at the centre of every African payment transformation conversation.",
    icon: ChartLineUp
  }
];

const MODULE_GROUPS: ModuleGroup[] = [
  {
    title: "Financial foundation",
    narrative:
      "Reconcile global currencies, wallets, and data backups so DPO Group settlements stay transparent and board-ready.",
    items: ["Multi currency module", "E-Wallet module for MLM Software", "Backup Manager"],
    icon: Stack
  },
  {
    title: "Engagement engine",
    narrative:
      "Automate communications and support with contextual prompts that keep distributors confident at every payment step.",
    items: ["Ticket system module for MLM Software", "Auto responder", "E-Voucher for MLM Software"],
    icon: ChatsCircle
  },
  {
    title: "Decision intelligence",
    narrative:
      "Surface the right signals for executives with dashboards, demos, and calculators that accelerate buying decisions.",
    items: ["Custom demo", "Pre-set demo", "Features hub"],
    icon: SquaresFour
  }
];

const PLAN_ANGLES: PlanAngle[] = [
  {
    plan: "Binary & Australian Binary Plans",
    focus: "Fast-paced enrollment and balanced payouts across dual legs and regional teams.",
    enablement:
      "Instant wallet top-ups and Apple Pay-style flows encourage mirrored growth while analytics flag spillover opportunities."
  },
  {
    plan: "Matrix & Board Plans",
    focus: "Structured advancement with visibility into every seat and milestone.",
    enablement:
      "Ticket routing and automated reminders keep matrix completions moving while DPO Group settlements post in real time."
  },
  {
    plan: "Unilevel & Generation Plans",
    focus: "Depth-driven storytelling grounded in executive-friendly performance metrics.",
    enablement:
      "AI summaries transform payments, commissions, and promotions into shareable narratives for top leaders and AI assistants."
  },
  {
    plan: "Gift & Hybrid Plans",
    focus: "Community-driven contributions that demand trust, uptime, and transparency.",
    enablement:
      "Secure ledgers and backup routines assure members their contributions are recorded, reconciled, and distributable on demand."
  }
];

const SERVICE_PIVOTS: ServicePivot[] = [
  {
    name: "MLM Software Development",
    summary:
      "From ideation to launch, we adapt Cloud MLM Software for your compensation design, data flows, and governance standards."
  },
  {
    name: "E-Commerce & Shopify Integration",
    summary:
      "Embed DPO Group payments across storefronts with WooCommerce, OpenCart, and Shopify connectors managed by our specialists."
  },
  {
    name: "Magento & Web Development",
    summary:
      "Enterprise-grade storefronts pair with immersive site experiences that mirror the professionalism of your payment stack."
  },
  {
    name: "Bitcoin & Emerging Payments",
    summary:
      "Blend cryptocurrency journeys with traditional rails so innovators in your field organization never feel constrained."
  },
  {
    name: "Website Designing & Branding",
    summary:
      "Every landing and pricing page echoes the DPO Group promise—secure, fast, seamless—while staying true to your brand voice."
  },
  {
    name: "Support Operations",
    summary:
      "24/7 ticketing, multilingual enablement, and knowledge bases ensure post-launch continuity for every distributor cohort."
  }
];

const ROLLOUT_PHASES: RolloutPhase[] = [
  {
    id: "01",
    title: "Signal discovery",
    description:
      "Audit archived assets—modules, plans, services—to extract the differentiators that matter to modern payment stakeholders.",
    deliverable: "Executive brief summarising goals, risks, and success measures.",
    icon: TrendUp
  },
  {
    id: "02",
    title: "Experience architecture",
    description:
      "Blueprint enrolment, checkout, and payout journeys that align DPO Group capabilities with Cloud MLM Software modules.",
    deliverable: "Interactive prototypes covering desktop, mobile, and AI-assisted flows.",
    icon: Circuitry
  },
  {
    id: "03",
    title: "Integration sprint",
    description:
      "Implement APIs, webhooks, and ledgers while configuring automation across ticketing, autoresponders, and vouchers.",
    deliverable: "Connected sandbox with reconciliation tests and monitoring dashboards.",
    icon: Lightning
  },
  {
    id: "04",
    title: "Enablement & storytelling",
    description:
      "Coach revenue, finance, and compliance teams with training assets and thought-leadership content.",
    deliverable: "Launch playbook, AI-ready scripts, and analyst-friendly narratives.",
    icon: Handshake
  }
];

const MARKET_HIGHLIGHTS: MarketHighlight[] = [
  {
    country: "Botswana",
    date: "Published August 28, 2024",
    narrative:
      "Growth-focused direct selling brands in Botswana rely on DPO Group for compliant, high-trust payments. Cloud MLM Software keeps every settlement, ticket, and communication aligned.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-botswana/"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "DPO Group Payment Gateway for Cloud MLM Software";
  const description =
    "Activate DPO Group inside Cloud MLM Software with AI-assisted governance, plan-tailored experiences, and regional insights built for direct selling enterprises.";

  return {
    title,
    description,
    keywords: [
      "DPO Group payment gateway",
      "Cloud MLM Software payments",
      "Pan-African MLM software",
      "secure MLM transactions",
      "direct selling payment integration"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/dpo-group", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type DpoGroupPageProps = {
  params: { lang: SupportedLocale };
};

export default function DpoGroupPage({ params }: DpoGroupPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 via-white to-slate-50 px-4 py-24 shadow-sm dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-sky-200/40 via-transparent to-transparent blur-3xl dark:from-blue-500/10" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-sky-600 shadow-sm dark:border-white/20 dark:bg-white/10 dark:text-white">
              <MapTrifold className="h-4 w-4" aria-hidden />
              Payment gateway transformation
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              DPO Group Payment Gateway for Cloud MLM Software
            </h1>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              DPO Group delivers the secure, fast, and seamless payment experience your WordPress archive promised. We
              extend that narrative with AI-ready content, actionable analytics, and modular journeys that feel just as
              polished in executive boardrooms as they do on a field leader&apos;s mobile device.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/contact/">Talk to a payment strategist</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={buildLocalizedPath("/pricing", locale)}>Review pricing scenarios</Link>
              </Button>
            </div>
          </div>
          <dl className="grid gap-6 md:grid-cols-3">
            {HERO_METRICS.map((metric) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.label}
                  className="group relative overflow-hidden rounded-2xl border border-sky-100 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600 transition group-hover:bg-sky-500 group-hover:text-white dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <dt className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
                    {metric.label}
                  </dt>
                  <dd className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{metric.value}</dd>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{metric.detail}</p>
                </div>
              );
            })}
          </dl>
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto grid max-w-6xl gap-12 rounded-3xl border border-slate-100 bg-white/80 p-10 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
          <header className="max-w-xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Strategic leadership
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Shape a payment story executives, distributors, and AI copilots can act on
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software evolves the original WordPress copy into a multi-dimensional playbook. From narrative to
              architecture, every decision is packaged for rapid executive alignment.
            </p>
          </header>
          <div className="grid gap-6 lg:grid-cols-3">
            {STRATEGIC_INSIGHTS.map((insight) => {
              const Icon = insight.icon;
              return (
                <article
                  key={insight.title}
                  className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:border-sky-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                      {insight.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{insight.title}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{insight.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-6 rounded-3xl border border-slate-100 bg-white/90 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Harness core modules already trusted by your teams
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              The WordPress archive spotlighted the modules that matter—multi-currency, ticketing, e-wallets, and more.
              We orchestrate them into an intelligent experience that keeps every DPO Group transaction auditable and
              human-friendly.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {MODULE_GROUPS.map((group) => {
                const Icon = group.icon;
                return (
                  <article
                    key={group.title}
                    className="relative flex h-full flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-6 shadow-inner transition hover:border-sky-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white">{group.title}</h3>
                    </div>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{group.narrative}</p>
                    <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-500/80 dark:bg-white/70" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
          <aside className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-slate-100 bg-gradient-to-br from-sky-600/10 via-sky-500/5 to-white p-10 shadow-sm dark:border-white/10 dark:from-white/10 dark:via-white/5 dark:to-transparent">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Executive-ready analytics</h3>
              <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                Layer AI narration atop every module. Finance leaders receive reconciled ledgers, support teams gain
                contextual ticket histories, and marketing teams publish AIO-optimised stories without rewriting data.
              </p>
            </div>
            <div className="space-y-3 rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h4 className="text-base font-semibold text-slate-900 dark:text-white">What teams experience</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <ArrowSquareOut className="mt-0.5 h-4 w-4 text-sky-500" aria-hidden />
                  <span>Revenue teams test preset demos, then present custom journeys to stakeholders in hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowSquareOut className="mt-0.5 h-4 w-4 text-sky-500" aria-hidden />
                  <span>Support agents resolve inquiries with autoresponders, knowledge bases, and ticket insights.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowSquareOut className="mt-0.5 h-4 w-4 text-sky-500" aria-hidden />
                  <span>Executives receive curated dashboards that translate payment telemetry into go-to-market action.</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-3xl border border-slate-100 bg-white/90 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Plan orchestration
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Align every compensation plan with a payment experience your field trusts
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Binary, Matrix, Unilevel, Generation, Gift, Hybrid—each plan highlighted in the archive gains a modern,
              compliant payment rhythm powered by DPO Group and Cloud MLM Software.
            </p>
          </header>
          <div className="grid gap-6 lg:grid-cols-2">
            {PLAN_ANGLES.map((angle) => (
              <article
                key={angle.plan}
                className="rounded-2xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:border-sky-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{angle.plan}</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{angle.focus}</p>
                <p className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-100">{angle.enablement}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl border border-slate-100 bg-white/90 p-10 shadow-sm lg:grid-cols-[0.85fr,1.15fr] dark:border-white/10 dark:bg-white/5">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Services that protect your brand while scaling payments
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Your archived services list—development, integrations, design, and support—becomes a cohesive managed
              offering. We ensure every interaction mirrors the professionalism of your DPO Group deployment.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href={buildLocalizedPath("/services", locale)}>Explore services portfolio</Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {SERVICE_PIVOTS.map((service) => (
              <article
                key={service.name}
                className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5 shadow-inner transition hover:border-sky-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{service.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-200">{service.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-100 bg-white/90 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Launch blueprint
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              A four-phase programme tuned for DPO Group acceleration
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Each phase concludes with assets you can share with executives, regulators, and enablement teams—no
              translation required.
            </p>
          </header>
          <ol className="mt-10 grid gap-6 md:grid-cols-2">
            {ROLLOUT_PHASES.map((phase) => {
              const Icon = phase.icon;
              return (
                <li
                  key={phase.id}
                  className="relative flex flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:border-sky-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                      Phase {phase.id}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{phase.title}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{phase.description}</p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-100">{phase.deliverable}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-3xl border border-slate-100 bg-white/90 p-10 text-slate-900 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white">
          <header className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Regional momentum
            </span>
            <h2 className="text-3xl font-semibold tracking-tight">Market spotlights from the archive</h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              The live WordPress cache features markets already investing in DPO Group. We evolve those insights into
              launch pads for your expansion roadmap.
            </p>
          </header>
          <div className="space-y-4">
            {MARKET_HIGHLIGHTS.map((market) => (
              <article
                key={market.country}
                className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:border-sky-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold">{market.country}</h3>
                  <Link
                    href={market.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700 dark:text-sky-300 dark:hover:text-sky-200"
                  >
                    Read regional narrative
                    <ArrowSquareOut className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">{market.date}</p>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{market.narrative}</p>
              </article>
            ))}
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-6 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
            More countries are supported across the DPO Group network—from Kenya to South Africa and beyond. Our team
            provides a full coverage matrix during discovery so every expansion feels intentional and well-governed.
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-3xl border border-slate-100 bg-white/90 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to orchestrate DPO Group inside Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Let’s align your stakeholders, migrate critical content, and launch a payment journey that proves Cloud MLM
            Software is the thought leader for direct selling in Africa and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/free-mlm-software-demo/">Book a guided demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={buildLocalizedPath("/contact", locale)}>Speak with product experts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
