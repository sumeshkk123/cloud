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
  Building,
  ClipboardList,
  LineChart,
  Layers,
  Network,
  Presentation,
  ShieldCheck,
  Users
} from "lucide-react";
import { GlobeHemisphereEast, ListChecks, Sparkle } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type Highlight = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

type FeatureSection = {
  heading: string;
  paragraphs: string[];
  icon: ComponentType<{ className?: string }>;
};

type PlanFeature = {
  title: string;
  description: string;
  features?: string[];
};

const HERO_INSIGHTS: Highlight[] = [
  {
    title: "Everyone looks for online business opportunities even housewives and students.",
    description:
      "The business trends and strategies are changing day to day, the MLM business industry also changes its business trends and strategies to do MLM business online.",
    icon: LineChart
  },
  {
    title: "This time the necessity of online MLM software raising.",
    description:
      "When a company or an individual planned to start an online MLM business, they required online MLM software for their marketing.",
    icon: Presentation
  },
  {
    title: "Through this, the company can spread their business across the world.",
    description:
      "By using this software the administrator can easily manage all operations. It helps to the MLM companies for their revenue management and customer status.",
    icon: GlobeHemisphereEast
  }
];

const INTRO_PARAGRAPHS: string[] = [
  "It provides various kinds of reports regarding sales, income, tracking of customers easily, analytical and pictorial presentation in the hierarchical structure of MLM customers.",
  "In modern society, the network marketing business is a fastest growing business beyond the man’s thoughts and dreams. The modern people approaching this business a challenging mind. On this occasion the role and importance of MLM software growing up in MLM business. MLM software plays an important role in a successful MLM business. This software enables MLM companies to manage and run their business with ease.",
  "The first and best thing about MLM software is, it can be used with any organizations that are into MLM business across the world. It provides full-featured enterprise software and website systems to operating companies and gets a push start in business. We can access the system from anywhere in the world with an internet connection at any time."
];

const PLATFORM_ADVANTAGES: FeatureSection[] = [
  {
    heading: "The MLM software agrees to for fundamental MLM operational information to be shared by the internet.",
    paragraphs: [
      "This software describes the tools to direct and systematize MLM accounts. It helps MLM companies to manage their members, down lines, commissions, and inventory and purchase decisions.",
      "Currently the trends of people changing day by day. Today, they often use and depend on online websites and the internet for everything. This time the importance of MLM companies and MLM software rises.",
      "When using the MLM software in MLM business we can easily manage the estimation of demand and supply in the midst of market penetration and saturation. It effectively and efficiently manages all the operations in all types of MLM companies such as sales, commissions, member administration, income distribution, inventory management, and much more."
    ],
    icon: ShieldCheck
  },
  {
    heading:
      "It is also useful for registered customers from the promoter login area and view their down lines, the structure of their subtree, return statement, fund statement, contact with admin, and other required features integrate to the MLM software.",
    paragraphs: [
      "It provides the facility with an easy approach to worldwide customers.",
      "Members can examine their downline details, payment details, purchase history, referral history on the web at any time.",
      "It helps the companies to describe the number of schemes working at a single time under a sponsor, members can be added to their schemes. This software will calculate the expense as per the scheme is defined.",
      "Registered customers can analyze their own lines and accounting management. Get the calculations of members’ payments, laps, expire, and renewal easily."
    ],
    icon: ClipboardList
  }
];

const PLAN_OVERVIEW_INTRO: string =
  "In MLM business the various MLM plans and concepts are important to sell their products and services through the business network. The different types of MLM plans include";

const PLAN_DETAILS: PlanFeature[] = [
  {
    title: "MLM binary plan",
    description:
      "In this plan, MLM leader grows down line into two subtrees; the left side called power leg and right side called profit leg. MLM companies where new joiners were introduced into a binary tree structure. MLM binary plan maybe 1; 1 or 2;1 in which distributor recruiters two new distributors in his left or right side and grow further subtrees in both the sides.",
    features: [
      "It is an exciting plan because of much more payment nature.",
      "This MLM plan pays to infinite down lines.",
      "It is an immense plan for cultivating teamwork in a MLM business. It plays a crucial role for you and your down line success.",
      "This compensation plan helps the average network marketers to be able to achieve success and recognize the impending for financial freedom."
    ]
  },
  {
    title: "MLM matrix plan",
    description:
      "In which the MLM leader recruits new joiner under their front line in width and depth in a limited member. This plan also known as a forced matrix plan in the direct selling business. It is like a pyramid structure. This plan popular amongst domestic and international MLM markets.",
    features: [
      "In this plan members can compensate when they achieve a set level.",
      "In this plan, the width is limited therefore a member can inspire down lines to earn more profit.",
      "The matrix plans have the potential for new Comers as well as old members."
    ]
  },
  {
    title: "MLM Unilevel plan",
    description: "It is the simplest plan in which the networker recruits new joiners in their front lines up to the unlimited width.",
    features: [
      "In this plan, the members get compensation up to a limited depth.",
      "This plan provides opportunities for the group or an individual to earn a huge profit.",
      "It is a very simple plan, so the networker can easily explain the plan to their newcomers."
    ]
  },
  {
    title: "MLM board plan",
    description: "In which the customer works in the group’s. A fixed number of customers work in a group called to board . It’s also called revolving matrix plan.",
    features: [
      "In this plan, a group of members works in a team.",
      "Whenever a group consists of a set number of members, the board splits into two subtrees.",
      "The top member of this plan promoted into the next higher boar."
    ]
  },
  {
    title: "MLM donation plan",
    description: "This concept based on give single and takes multiple gifts. It also called help plan or gift plan or money order MLM plan.",
    features: [
      "In this plan gift someone to get many gifts from others.",
      "This plan managing all transactions, earning a huge outcome in a very short period of time."
    ]
  },
  {
    title: "MLM generation plan",
    description: "It is based on sale of products and services.",
    features: [
      "It is a product selling, motivational MLM business plan.",
      "This plan suite for the manufacturer of consumable products company and want to sale their products directly to end-users",
      "In this plan no need to expenses for advertisement."
    ]
  },
  {
    title: "MLM stair-step plan",
    description: "It is based on sales of products and services targets."
  },
  {
    title: "Mobile recharge plan",
    description:
      "This is a new thought in MLM business launched by recently in which every MLM leader joins the plan to get a mobile recharge distributorship and start a new business by recharging the mobile.",
    features: [
      "Selection or port their service provider",
      "Recharge mobile using your own mobile",
      "Balance transfer to their wallets using mobile"
    ]
  },
  {
    title: "Repurchase plan",
    description: "In this plan, the MLM companies focused on the huge sale of products and services.",
    features: ["Franchise repurchase management", "Inventory management", "Receipts and billing printing"]
  },
  {
    title: "Australian binary plan",
    description:
      "It is a most effective MLM plan in which every introducer needs a minimum of 3 members as front down line .The main introducer compensated from the third down line subtree. No matching pairs required."
  }
];

const FINAL_CALLOUT =
  "The Network Marketing Software is to power up your MLM company and it effectively and effortlessly manages all the operations of all sizes of MLM companies like member administration sales, inventory management, commissions, and income distribution, etc. It will help you to start making money instantly.";

const AUTHOR_BIO =
  "Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate about utilizing technology to drive growth and optimize business processes. Adept at analyzing market dynamics, delivering actionable insights, and staying ahead of industry developments.";

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Importance of MLM Software Sales Plans in MLM Business";
  const description =
    "Discover why modern MLM organisations depend on software-led sales plans—from global operations to compensation models and specialised plan structures.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/importance-of-mlm-software-sales-plans-in-mlm-business", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type SalesPlansPageProps = {
  params: { lang: SupportedLocale };
};

export default function SalesPlansPage({ params }: SalesPlansPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-emerald-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.15),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.2),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.25),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.25),transparent_60%)]" />
        <div className="container grid gap-12 py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:border-emerald-500/50 dark:bg-slate-900/60 dark:text-emerald-200">
              <Sparkle className="h-4 w-4" aria-hidden />
              Strategic sales architecture
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              Importance of MLM software sales plans in MLM business
            </h1>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Everyone looks for online business opportunities even housewives and students. The business trends and strategies are changing day to day, the
              MLM business industry also changes its business trends and strategies to do MLM business online. This time the necessity of online MLM software
              raising.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild className="bg-emerald-600 text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400">
                <Link href={demoHref}>
                  Explore platform demos
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Link href={contactHref}>
                  Talk to product strategists
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-emerald-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-200">Global management</p>
                <p className="mt-3 flex items-center gap-3 text-base text-slate-700 dark:text-slate-200">
                  <Building className="h-5 w-5 text-emerald-500 dark:text-emerald-300" aria-hidden />
                  Spread operations seamlessly across regions.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-emerald-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-200">Data confidence</p>
                <p className="mt-3 flex items-center gap-3 text-base text-slate-700 dark:text-slate-200">
                  <Layers className="h-5 w-5 text-emerald-500 dark:text-emerald-300" aria-hidden />
                  Manage revenue, members, and compensation in one core stack.
                </p>
              </div>
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-emerald-200/70 bg-white/80 p-8 shadow-xl shadow-emerald-100 backdrop-blur dark:border-emerald-500/40 dark:bg-slate-900/70 dark:shadow-none">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-200">Why founders adapt</span>
              <Users className="h-5 w-5 text-emerald-500 dark:text-emerald-300" aria-hidden />
            </div>
            <div className="space-y-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {HERO_INSIGHTS.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-2xl border border-emerald-100/70 bg-white/70 p-4 dark:border-emerald-500/30 dark:bg-slate-900/50">
                  <item.icon className="mt-1 h-6 w-6 shrink-0 text-emerald-500 dark:text-emerald-300" aria-hidden />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-6">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg shadow-emerald-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-200">
              Importance of MLM software sales plans in MLM business
            </p>
            <div className="space-y-5 text-base leading-7 text-slate-700 dark:text-slate-300">
              {INTRO_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)]">
          {PLATFORM_ADVANTAGES.map((section) => (
            <article
              key={section.heading}
              className="flex h-full flex-col gap-6 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg shadow-emerald-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-emerald-100/80 p-3 dark:bg-emerald-500/20">
                  <section.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
                </div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{section.heading}</h2>
              </div>
              <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg shadow-emerald-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:border-emerald-500/50 dark:bg-slate-900/60 dark:text-emerald-200">
              <Network className="h-4 w-4 text-emerald-500 dark:text-emerald-300" aria-hidden />
              Plan configurations
            </span>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">{PLAN_OVERVIEW_INTRO}</p>
            <div className="relative">
              <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-emerald-200 via-emerald-200/60 to-transparent dark:from-emerald-500/40 dark:via-emerald-400/30" aria-hidden />
              <div className="space-y-8 pl-12">
                {PLAN_DETAILS.map((plan, index) => (
                  <div key={plan.title} className="relative rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-md shadow-emerald-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
                    <div className="absolute left-0 top-6 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-700 shadow-sm dark:border-emerald-500/40 dark:bg-slate-900 dark:text-emerald-200">
                      {index + 1}
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-xl bg-emerald-100/80 p-2 dark:bg-emerald-500/20">
                          <ListChecks className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{plan.title}</h3>
                          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{plan.description}</p>
                          {plan.features && (
                            <ul className="space-y-2 text-base leading-7 text-slate-700 dark:text-slate-300">
                              {plan.features.map((item) => (
                                <li key={item} className="flex gap-3">
                                  <BarChart3 className="mt-1 h-4 w-4 text-emerald-500 dark:text-emerald-300" aria-hidden />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white/90 p-12 text-center shadow-xl shadow-emerald-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-200">Software acceleration</p>
          <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-slate-200">{FINAL_CALLOUT}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-emerald-600 text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400">
              <Link href={demoHref}>
                Schedule a guided demo
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              <Link href={contactHref}>
                Build your rollout plan
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-10 text-center shadow-lg shadow-emerald-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-200">About the author</p>
          <p className="mt-6 text-2xl font-semibold text-slate-900 dark:text-white">Edward</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">Research Analyst</p>
          <p className="mt-6 text-base leading-7 text-slate-700 dark:text-slate-300">{AUTHOR_BIO}</p>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
