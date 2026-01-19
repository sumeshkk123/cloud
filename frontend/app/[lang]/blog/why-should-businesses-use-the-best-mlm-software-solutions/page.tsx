import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  Layers,
  Palette,
  ShoppingCart,
  Wallet
} from "lucide-react";
import {
  CirclesThree,
  Faders,
  GlobeHemisphereWest,
  HandCoins,
  ListChecks,
  RocketLaunch
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type Reason = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

type CustomizationPoint = {
  title: string;
  details: string[];
};

const INTRO_PARAGRAPHS = [
  "Brands like Tupperware and Amway proved that network-driven commerce can outpace traditional channels — provided every conversation, enrolment, and payout runs smoothly.",
  "That promise attracts ambitious founders, yet many discover that everyday CRMs and ERPs cannot manage fast-moving hierarchies. Accurate commissions, regulatory compliance, and consistent customer experiences demand an MLM-specific platform.",
  "Working with an experienced software partner keeps businesses focused on growth rather than spreadsheets. It’s the difference between fighting fires and building a resilient revenue engine."
];

const STRATEGIC_SIGNALS = [
  "Profit-first models rely on near real-time performance data to keep momentum legs funded and supported.",
  "Field teams expect mobile-ready dashboards, transparent rewards, and localization aligned with local markets.",
  "Corporate leaders need scalable automation to protect brand reputation while they expand into new countries and products."
];

const CORE_REASONS: Reason[] = [
  {
    title: "Flexibility and scalability",
    description:
      "Future-proof your investment with infrastructure that grows alongside your distributor network, product catalogues, and geographic expansion.",
    icon: RocketLaunch
  },
  {
    title: "Deep customization",
    description:
      "Tailor dashboards, navigation, themes, content blocks, and onboarding flows so the software mirrors your brand identity and business rules.",
    icon: Palette
  },
  {
    title: "Commerce & payment integrations",
    description:
      "Embed eCommerce storefronts, connect payment gateways, and automate e-wallet settlements so every order and commission lands where it should.",
    icon: ShoppingCart
  },
  {
    title: "Full-stack web experiences",
    description:
      "Build marketing sites, replicated distributor pages, and customer portals that are synchronized with back-office analytics and inventory.",
    icon: Boxes
  },
  {
    title: "Commission intelligence",
    description:
      "Model, test, and automate binary, unilevel, matrix, or custom compensation plans with audit trails that satisfy finance and compliance teams.",
    icon: HandCoins
  }
];

const CUSTOMIZATION_POINTS: CustomizationPoint[] = [
  {
    title: "Visual identity & UX",
    details: [
      "Apply bespoke color palettes, typography, and imagery across portals, ensuring agents and customers experience a cohesive brand presence.",
      "Configure dashboards per role so executives, finance teams, and field leaders focus on their most meaningful KPIs."
    ]
  },
  {
    title: "Localized experiences",
    details: [
      "Deploy multilingual content, currencies, tax rules, and compliance disclaimers without rebuilding the stack.",
      "Empower markets to adapt onboarding, incentives, and promotions while headquarters maintains governance."
    ]
  }
];

const INTEGRATION_CALLOUTS = [
  {
    title: "E-wallet centric finance",
    description:
      "Route customer payments into corporate wallets, auto-credit distributor balances, and handle end-of-day bank settlements without manual reconciliation.",
    icon: Wallet
  },
  {
    title: "Analytics that unlock growth",
    description:
      "Blend sales, team activity, and product adoption insights to predict which legs need coaching and which promotions deserve more budget.",
    icon: BarChart3
  },
  {
    title: "Compliance-ready infrastructure",
    description:
      "Automated logs, role-based access, and secure hosting keep sensitive compensation data guarded while satisfying auditors.",
    icon: Layers
  }
];

const COMP_PLAN_BENEFITS = [
  "Binary plans simplify leg balancing yet demand automated flushing rules and leadership rank tracking.",
  "Unilevel approaches benefit from depth-based bonuses and require transparent lineage reporting for uplines.",
  "Matrix models reward breadth and need clear placement logic plus waiting list prioritization to stay fair.",
  "Hybrid structures combine multiple theories and rely on sandbox testing to avoid breaking the payout budget."
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Why Should Businesses Use the Best MLM Software Solutions?";
  const description =
    "Learn why modern MLM enterprises rely on flexible, customizable, and integration-ready software to maximize growth, control commissions, and delight distributors.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/why-should-businesses-use-the-best-mlm-software-solutions", locale)
    },
    openGraph: {
      title,
      description,
      url: buildLocalizedPath("/blog/why-should-businesses-use-the-best-mlm-software-solutions", locale)
    }
  };
}

export default function Page({ params }: { params: { lang: SupportedLocale } }) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="space-y-24 pb-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-emerald-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-4 py-1 text-sm font-semibold text-indigo-800 dark:bg-indigo-500/20 dark:text-indigo-200">
                <CirclesThree className="h-4 w-4" aria-hidden />
                Strategy & Growth
              </span>
              <h1 className="text-3xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-4xl">
                Why ambitious businesses invest in the best MLM software
              </h1>
              <p className="text-lg leading-7 text-slate-700 dark:text-slate-300">
                Operational excellence, transparent rewards, and world-class customer journeys don&apos;t happen by accident. Elite MLM platforms make them repeatable.
              </p>
              <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
                {INTRO_PARAGRAPHS.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="rounded-3xl border border-indigo-200 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-indigo-500/30 dark:bg-slate-900/60">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Signals from top-performing networks</h2>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {STRATEGIC_SIGNALS.map((signal) => (
                    <li key={signal} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      <span>{signal}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Link href={buildLocalizedPath("/pricing", locale)}>
                  <Button size="lg" className="bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400">
                    Compare solution tiers
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Button>
                </Link>
                <Link
                  href={buildLocalizedPath("/mlm-consulting", locale)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-800 transition hover:text-indigo-600 dark:text-indigo-200 dark:hover:text-indigo-100"
                >
                  Talk to consultants
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/70">
                <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                  <Building2 className="h-6 w-6" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-300">Executive summary</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Why leaders demand category-specific tooling</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Founders often try to retrofit generic CRMs. By month three they&apos;re drowning in spreadsheets and support tickets. Purpose-designed MLM software keeps governance tight while empowering every sponsor to grow.
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Cloud MLM Software partners with enterprises end-to-end — consulting on compensation design, deploying infrastructure, and providing continuous enablement.
                </p>
              </div>
              <div className="rounded-3xl border border-indigo-200 bg-indigo-50/80 p-6 shadow-sm dark:border-indigo-500/20 dark:bg-indigo-500/10">
                <div className="flex items-center gap-3 text-indigo-900 dark:text-indigo-200">
                  <ListChecks className="h-6 w-6" aria-hidden />
                  <h3 className="text-lg font-semibold">Readiness checklist</h3>
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-indigo-900/90 dark:text-indigo-100/80">
                  <li>☑️ Agent dashboards and customer portals align with brand standards.</li>
                  <li>☑️ Payout automation handles regional compliance and tax logic.</li>
                  <li>☑️ Product launches sync instantly across inventory, storefront, and compensation engines.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase text-white dark:bg-slate-100 dark:text-slate-900">
            <Faders className="h-3.5 w-3.5" aria-hidden />
            Value proof
          </span>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Five mission-critical reasons enterprises upgrade</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            These pillars translate the original article&apos;s highlights into a modern decision framework. Each reason maps to measurable operational impact.
          </p>
        </div>
        <ol className="space-y-6">
          {CORE_REASONS.map(({ title, description, icon: Icon }, index) => (
            <li
              key={title}
              className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/60 lg:flex-row lg:items-center"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-lg font-semibold text-white dark:bg-indigo-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-300" aria-hidden />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-200">
              <GlobeHemisphereWest className="h-3.5 w-3.5" aria-hidden />
              Custom experiences
            </span>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Make the software feel like it was designed in-house</h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
              The best platforms embrace rebranding, localization, and role-based personalization. That flexibility is what keeps network partners aligned with the corporate playbook.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
              {CUSTOMIZATION_POINTS.map(({ title, details }) => (
                <div key={title} className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="grid gap-6">
              {INTEGRATION_CALLOUTS.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-emerald-100 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-emerald-500/20 dark:bg-emerald-500/10"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-200" aria-hidden />
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-semibold uppercase text-indigo-800 dark:bg-indigo-500/20 dark:text-indigo-200">
            <HandCoins className="h-3.5 w-3.5" aria-hidden />
            Compensation clarity
          </span>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Designing payout models with confidence</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            The legacy article emphasised speaking with the best MLM software company about compensation modelling. This toolkit translates that advice into clear next steps.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
            <ol className="space-y-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {COMP_PLAN_BENEFITS.map((benefit, index) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white dark:bg-indigo-500">
                    {index + 1}
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-4 rounded-3xl border border-indigo-200 bg-indigo-50/80 p-6 shadow-sm dark:border-indigo-500/20 dark:bg-indigo-500/10">
            <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100">Workshop agenda</h3>
            <ul className="space-y-3 text-sm leading-6 text-indigo-900/80 dark:text-indigo-100/80">
              <li>• Map product margins and break-even points before setting ranks.</li>
              <li>• Simulate payouts across best, base, and conservative revenue scenarios.</li>
              <li>• Document leadership bonuses and compliance rules with finance sign-off.</li>
            </ul>
            <Link
              href={buildLocalizedPath("/services/mlm-consulting", locale)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-900 transition hover:text-indigo-700 dark:text-indigo-100 dark:hover:text-indigo-50"
            >
              Schedule a compensation audit
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white dark:bg-slate-950">
        <div className="container space-y-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-2xl font-semibold">Keep investors and distributors confident</h2>
              <p className="mt-3 text-sm leading-6 text-white/80">
                Reliable infrastructure, transparent incentives, and a frictionless customer experience help your brand stand out in crowded markets.
              </p>
            </div>
            <div className="grid gap-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-sm leading-6 text-white/85">
                  “Cloud MLM Software continues to be a thought leader for enterprise-grade network marketing operations. Their team guides executives through transformation with data-backed roadmaps.”
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Ready to see the platform in action?</h3>
                  <p className="text-sm leading-6 text-white/80">Request a tailored walkthrough focused on your compensation strategy and global expansion plans.</p>
                </div>
                <Link href={buildLocalizedPath("/free-mlm-software-demo", locale)}>
                  <Button size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100">
                    Book a live demo
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
          <div className="flex flex-wrap items-center gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">About the author</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">Experienced Research Analyst</h3>
            </div>
            <p className="flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate about utilizing technology to drive growth and optimize business processes. Adept at analyzing market dynamics, delivering actionable insights, and staying ahead of industry developments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

