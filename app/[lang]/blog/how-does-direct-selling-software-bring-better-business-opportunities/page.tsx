import type { Metadata } from "next";
import Link from "next/link";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, LineChart, Sparkle } from "lucide-react";
import {
  ClipboardText,
  Package,
  ShoppingCart,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type Highlight = {
  title: string;
  description: string;
};

type Moment = {
  title: string;
  description: string;
};

type Capability = {
  title: string;
  description: string;
  impact: string;
  icon: ComponentType<{ className?: string }>;
};

type Outcome = {
  title: string;
  description: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "24/7 commercial visibility",
    description:
      "Monitor inventory health, orders in flight, and payouts in a single workspace so distributors and leaders never fly blind."
  },
  {
    title: "Omnichannel fulfilment",
    description:
      "Blend doorstep selling with ecommerce experiences, letting customers purchase on their terms while the platform reconciles every transaction."
  },
  {
    title: "Intelligence-led decisions",
    description:
      "Boardroom-ready analytics surface what products, teams, and campaigns drive momentum, helping you refine promotions in real time."
  }
];

const MOMENTS: Moment[] = [
  {
    title: "Early momentum stalls without structure",
    description:
      "Direct selling businesses often enjoy an energetic launch, yet growth plateaus when inventory tracking, order fulfilment, and field communication still run on spreadsheets."
  },
  {
    title: "Entrepreneurs crave more opportunity",
    description:
      "Leaders need a way to scale their network, protect margins, and maintain customer trust without adding manual busywork to every product drop or incentive."
  },
  {
    title: "Technology is the catalyst",
    description:
      "Specialised direct selling software adds the operational backbone that keeps reps focused on relationships while automation handles the complexity behind the scenes."
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Inventory, orders, and last-mile orchestration",
    description:
      "Give every rep a synced view of stock levels, shipping status, and returns across offline pickups and online orders.",
    impact:
      "Prevents sell-outs, accelerates reorders, and keeps your field force aligned with customer expectations.",
    icon: Package
  },
  {
    title: "Ecommerce and secure payment integrations",
    description:
      "Launch branded storefronts, social commerce links, and mobile checkouts that connect to trusted payment gateways out of the box.",
    impact:
      "Customers pay instantly, commissions settle automatically, and finance teams see reconciled ledgers without lifting a finger.",
    icon: ShoppingCart
  },
  {
    title: "Configurable distributor workspaces",
    description:
      "Profiles show personal sales velocity, downline momentum, compensation forecasts, and compliance checkpoints in one dashboard.",
    impact:
      "Reps stay motivated with live insights while head office can trigger tailored coaching nudges for every cohort.",
    icon: UsersThree
  },
  {
    title: "Decision intelligence and reporting",
    description:
      "Centralised data pipelines transform performance metrics into digestible reports, campaign dashboards, and audit-ready exports.",
    impact:
      "Leadership can identify winning strategies, refine policies, and communicate results to stakeholders with confidence.",
    icon: ClipboardText
  }
];

const OUTCOMES: Outcome[] = [
  {
    title: "Operational excellence becomes everyday",
    description:
      "Automated order processing, inventory management, and payment flows give your team space to innovate rather than troubleshoot."
  },
  {
    title: "Distributor engagement lifts sustainably",
    description:
      "Always-on visibility into network performance keeps field teams invested, rewarded on time, and eager to expand their reach."
  },
  {
    title: "Customer experiences feel effortless",
    description:
      "Consistent communication, rapid fulfilment, and flexible purchasing options set a standard that turns occasional buyers into advocates."
  },
  {
    title: "Data unlocks confident decision-making",
    description:
      "With dashboards and report packs designed for executives, every strategic move is backed by real-time proof."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "How Does Direct Selling Software Bring Better Business Opportunities?";
  const description =
    "Discover how enterprise-grade direct selling software strengthens inventory control, payments, distributor engagement, and strategic decisions for lasting growth.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath(
        "/blog/how-does-direct-selling-software-bring-better-business-opportunities",
        locale
      )
    },
    openGraph: {
      title,
      description
    }
  };
}

type DirectSellingPageProps = {
  params: { lang: SupportedLocale };
};

export default function DirectSellingPage({ params }: DirectSellingPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(14,165,233,0.18),transparent_55%),radial-gradient(circle_at_88%_22%,rgba(16,185,129,0.22),transparent_60%),radial-gradient(circle_at_50%_92%,rgba(56,189,248,0.2),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_18%,rgba(59,130,246,0.25),transparent_60%),radial-gradient(circle_at_88%_22%,rgba(45,212,191,0.2),transparent_60%),radial-gradient(circle_at_50%_92%,rgba(186,230,253,0.12),transparent_65%)]" />
        <div className="container">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-center">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700 dark:border-sky-700/40 dark:bg-slate-900/50 dark:text-sky-200">
                <Sparkle className="h-4 w-4" aria-hidden />
                Direct selling transformation
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
                How does direct selling software bring better business opportunities?
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-200">
                Direct selling thrives on personal relationships, but scaling those relationships demands a platform that synchronises inventory,
                orders, and payouts. Cloud MLM Software equips founders and field leaders with a digital command centre so early momentum becomes
                consistent, compounding growth.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-200">
                When technology handles the operational choreography—reordering fast-moving products, reconciling commissions, and safeguarding
                customer journeys—your teams can focus on nurturing networks and entering new markets with confidence.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild className="bg-sky-600 text-white hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400">
                  <Link href={demoHref}>
                    Book a product intelligence demo
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
                >
                  <Link href={contactHref}>
                    Discuss your launch plan
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <aside className="space-y-5 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-2xl shadow-sky-100 backdrop-blur dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300">Opportunity radar</span>
                <LineChart className="h-5 w-5 text-sky-500 dark:text-sky-300" aria-hidden />
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                A direct selling network performs at its peak when insight, automation, and field enablement converge. These are the pillars our
                strategists monitor when modernising programs.
              </p>
              <div className="space-y-4">
                {HIGHLIGHTS.map((highlight) => (
                  <div
                    key={highlight.title}
                    className="rounded-2xl border border-slate-200 bg-white/90 p-5 transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/70 dark:hover:border-sky-500/40"
                  >
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-white">{highlight.title}</h2>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Why modern direct sellers lean on software</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Sustainable direct selling programs blend human connection with digital precision. The right platform unifies stock visibility, ecommerce,
            and performance intelligence so every interaction strengthens trust.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {MOMENTS.map((moment) => (
            <article
              key={moment.title}
              className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white/70 p-6 text-left shadow-sm shadow-slate-100 transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900/50 dark:shadow-none"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{moment.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{moment.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-sky-50/60 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700 dark:bg-sky-500/20 dark:text-sky-200">
              Platform capabilities
            </span>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">What Cloud MLM Software delivers out of the box</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Built for the nuances of network marketing, our direct selling stack equips each function—from supply chain to finance to field
              leadership—with tools that orchestrate growth instead of reacting to it.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {CAPABILITIES.map((capability) => (
              <article
                key={capability.title}
                className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-sky-100 transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-sky-100/70 p-3 text-sky-700 dark:bg-sky-500/20 dark:text-sky-200">
                    <capability.icon className="h-6 w-6" aria-hidden />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{capability.title}</h3>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{capability.description}</p>
                  </div>
                </div>
                <p className="mt-6 rounded-2xl border border-dashed border-sky-200 bg-sky-50/60 p-4 text-sm text-slate-700 dark:border-sky-500/30 dark:bg-slate-900/70 dark:text-slate-200">
                  {capability.impact}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg shadow-emerald-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">The payoff for your organisation</h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              The longer your network relies on disconnected tools, the harder it becomes to preserve distributor loyalty and customer satisfaction.
              A unified direct selling platform unlocks predictable operations and gives leaders the confidence to scale.
            </p>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 text-slate-800 shadow-sm dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-100">
              <p className="text-sm">
                “Reliable direct selling software enables entrepreneurs to concentrate on long-term growth—whether that is expanding into new regions,
                launching modern storefronts, or continuously evolving compensation strategies.”
              </p>
              <p className="mt-4 text-sm font-semibold text-emerald-700 dark:text-emerald-200">Cloud MLM Software advisory team</p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {OUTCOMES.map((outcome) => (
              <article
                key={outcome.title}
                className="h-full rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm shadow-slate-100 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{outcome.title}</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{outcome.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Move from insight to execution quickly</h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Our implementation specialists align your operational blueprint with configurable workflows, automation, and integrations tailored to
              your compensation plan. From onboarding distributors to safeguarding financial compliance, every touchpoint becomes consistent and
              auditable.
            </p>
            <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-200">
                  1
                </span>
                Transition manual processes—inventory counts, payouts, compliance sign-offs—into guided digital workflows.
              </li>
              <li className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-200">
                  2
                </span>
                Equip distributors with mobile-ready dashboards so they can monitor progress, customise profiles, and nurture prospects anywhere.
              </li>
              <li className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-200">
                  3
                </span>
                Feed leadership-ready reports into decision cycles so policy changes, market launches, and incentives are based on real performance data.
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-xl shadow-sky-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Ready to expand your direct selling footprint?</h3>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
              Connect with our experts to explore tailored configurations, integration support, and growth strategies that align with your business
              model.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-emerald-600 text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400"
              >
                <Link href={demoHref}>
                  Start your guided demo
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Link href={contactHref}>
                  Talk to a strategist
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-10 text-center shadow-lg shadow-slate-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300">About the author</p>
          <p className="mt-6 text-2xl font-semibold text-slate-900 dark:text-white">Edward</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">Research Analyst</p>
          <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-300">
            Edward is a research analyst who studies emerging trends across the MLM and direct selling landscape. He translates market intelligence,
            technology adoption patterns, and distributor behaviour into strategic guidance for leaders building ethical, growth-ready networks.
          </p>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
import type { ComponentType } from "react";
