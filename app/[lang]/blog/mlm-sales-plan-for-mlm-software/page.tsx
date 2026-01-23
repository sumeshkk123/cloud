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
  Activity,
  ArrowRight,
  BarChart3,
  GitBranch,
  Gift,
  Grid3X3,
  LayoutGrid,
  Smartphone,
  UserPlus
} from "lucide-react";
import { Sparkle } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

const INTRO_PARAGRAPH =
  "In MLM business industry, the MLM business persons and companies work on a variety of MLM plans and concepts to sale their services and products through the different customers and affiliates connected their business network. Cloud MLM Software Company offers their software services for those who ready to start MLM Company. We have a team of professionals, MLM software developers, engineers, software testers, MLM consultants, web designers and a large number of support team to assist.";

const CONTEXT_PARAGRAPH =
  "According to the present MLM strategies, there are number of MLM payment plans you can opt from. Before getting in to authentic network marketing background, it is essential to know about the modern and varying trends in network marketing fields. For MLM companies, choosing a MLM software will be quite easy as they know about the current MLM plans. But in the case of a beginner, it takes a lot of time to study and understands how each MLM plan will work. Below let's see the possibilities of each and every MLM compensation plans.";

type PlanDetail = {
  title: string;
  icon: ComponentType<{ className?: string }>;
  paragraphs: string[];
  advantages?: string[];
  features?: string[];
};

const PLAN_DETAILS: PlanDetail[] = [
  {
    title: "MLM Binary business plan",
    icon: GitBranch,
    paragraphs: [
      "It is the first and most popular choice for MLM business individuals and MLM companies. In which includes a MLM leader /member grows down line into two sub trees. One is on left side and the another is right side. The one side is referred to power leg and the another side is profit leg.",
      "In binary MLM plan, the power leg grows even when the member previously enrolled in the tree recruits the new member and added in to the tree on the leaf position in the tree where the profit leg increased when a member introduce for self benefit.",
      "In this plan the payment distribution system depends on this ratios i.e. 1;1 and 1;2 or 2;1.the payment limit system called capping concepts integrated in to this type of MLM software. Through this system access payments for the members can be blocked. The Cloud MLM software solutions developed a lots of binary MLM plan software for many domestic and international MLM companies, which are fully satisfied with our support and service."
    ],
    advantages: [
      "All up lines get benefited by binary points when the new member joining to the network",
      "Spillover – In this process a member's up line recruits new members under the down line and the new member placed into the leaf position into the binary tree through which down lines power leg increases",
      "It is a team effort business plan in which the up line sales give the benefits to their down line.",
      "In this plan you only focus on the profit leg to get benefits"
    ],
    features: [
      "Member management",
      "E pin management",
      "Genealogy tree",
      "MLM report",
      "Payout statement",
      "Multiple secure e wallets",
      "Down line /up line report",
      "Left right member list"
    ]
  },
  {
    title: "MLM Matrix plan software",
    icon: Grid3X3,
    paragraphs: [
      "In MLM marketing industry, the matrix MLM plan is the most popular evergreen one. It is also known as ladder plan or forced matrix plan. In this plan the MLM tree-structured in a pyramid model in fixed width and depth. The member who joins in to the matrix plan gets rewarded when they recruits new members according to the level set by the MLM plan. In matrix MLM plan software, the tree structure like a pyramid.",
      "In which, the tree set maybe 3 in width and 5 in depth .i.e. each member in this plan recruits 3 new members in their width front line and get benefited up to the 5 levels. The Cloud MLM software company offers MLM matrix software for those who willing to start their own MLM business. We have the expert team of professionals to the development of various kinds of MLM matrix software."
    ],
    advantages: [
      "Custom-made MLM plan in which your payment plan can be integrated.",
      "It is easy to recognize and explain the concept of MLM plan. Therefore , MLM company representatives and net workers easily inspire their down line.",
      "It is flexible through which MLM company can widen their matrix tree width according to their payment plan."
    ]
  },
  {
    title: "MLM Uni level plan",
    icon: UserPlus,
    paragraphs: [
      "The MLM Uni level plan is one of the simplest concepts in MLM business industry. In which every person or company can easily communicate and explain this plan to new comers and MLM business affiliates. In this MLM plan each member can introduce new comers in the front line. They can introduce new comers in any width and the commission dispersed up to a preset limited depth as per MLM payment plan. Introducing some rewards, bonuses, incentives on a particular level attainment or a preset number of front lines, the MLM companies can becomes the uni level plan more eye-catching. Our Cloud MLM Software Solutions is one of the best MLM software development company in this IT world. We designed integrated payment plan and developed many uni level plan software and give suggestions of their expert team of MLM."
    ],
    advantages: [
      "Bonuses and reward integration easy any level or front line.",
      "Easy to make clear for new comers because of its simplicity."
    ]
  },
  {
    title: "MLM Board business plan",
    icon: LayoutGrid,
    paragraphs: [
      "This type of MLM business plan revolves about a vital authority or client who manages various pools of clients called board. It is also known as revolving matrix plan. The plan looks simple but when more users add to the board sometimes it becomes quite difficult. Also the user promotions and payment becomes complicated with increasing number of users. In this plan consisting of the following concepts like single board, multi board, shuffling board, auto filling board, and manual filling board.",
      "Our Cloud MLM software solution offers you the plan which is accomplished of managing the boards up to unlimited users."
    ]
  },
  {
    title: "MLM Gift plan / MLM Help plan",
    icon: Gift,
    paragraphs: [
      "In these days MLM gift plan is relatively trendy among MLM industry. It is also known as MLM help plan, MLM donation plan etc. This plan is based on give single and take multiple gifts in which a net worker who provide a single help to a net worker and get multiple help from others. Developing the gift plan software is a daunting task due to its difficulty and large number of users using this plan. So which demands a development company with great skills.",
      "Our company is qualified enough to grasp the concepts of MLM gift plan and can give the solutions that apply this plan rightly"
    ]
  },
  {
    title: "MLM Generation business plan",
    icon: BarChart3,
    paragraphs: [
      "This plan is based upon direct sales of products and services, and users get their payment when they complete a sales goal. It is the merely product selling MLM plan. Due to the flexibility of setting the sales goal and payment percentage, the plan requires comprehensive software which can handle the whole thing efficiently.",
      "Our MLM generation business plan software is capped with these abilities to handle the users, sales and commission successfully."
    ]
  },
  {
    title: "MLM Stair Step business plan",
    icon: Activity,
    paragraphs: [
      "This plan is just like the generation plan with a dissimilarity. At any time a user achieves a sales goal ,he is promoted the upper level. In fact, the company has to direct the users, their sales,their compensations and also their promotions. The software necessary to switch these activities must have additional features.",
      "In this plan only one step can be focused for a certain period of time and also affiliate will get more income. Our MLM stair step business plan software is expert of managing all activities with great accuracy and simplicity."
    ]
  },
  {
    title: "MLM Mobile Recharge plan",
    icon: Smartphone,
    paragraphs: [
      "The MLM mobile recharge plan is one of the most newest introductions in the MLM industry. In this plan the new joiners are necessary to join through mobile recharges and DTH recharges. Starting the business is very simple because of its easy business model, but to handle the users, their recharge activities and their commission, the MLM company requires powerful software.",
      "The Cloud MLM Software Solutions provide the mobile recharge plan software that is ready with everything you demand."
    ]
  }
];

const OUTRO_PARAGRAPHS = [
  "Cloud MLM software solutions has complete aware of the MLM industry and we stay updated about the most up-to-date trends in this industry. We also have a team of experienced designers ,plan managers and software developers that realize your business model and develop the solutions consequently.",
  "If you are plan to start an MLM business and wish for to get maximum profits from it, inquire us for MLM software development. It will be the first step towards your success story. The Cloud MLM Software Solutions is the one of best MLM software developer and designer in the MLM industry which has developed multiple software for our existing and new customers. Our all clients are fully satisfied with our software, consultancy and services."
];

const AUTHOR = {
  name: "Edward",
  role: "Research Analyst",
  bio: "Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate about utilizing technology to drive growth and optimize business processes. Adept at analyzing market dynamics, delivering actionable insights, and staying ahead of industry developments."
};

const ACCENT_CLASSES = [
  {
    border: "border-violet-200 dark:border-violet-500/30",
    background: "bg-gradient-to-br from-violet-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900",
    icon: "text-violet-600 dark:text-violet-300"
  },
  {
    border: "border-emerald-200 dark:border-emerald-500/30",
    background:
      "bg-gradient-to-br from-emerald-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900",
    icon: "text-emerald-600 dark:text-emerald-300"
  },
  {
    border: "border-amber-200 dark:border-amber-500/30",
    background: "bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900",
    icon: "text-amber-600 dark:text-amber-300"
  },
  {
    border: "border-sky-200 dark:border-sky-500/30",
    background: "bg-gradient-to-br from-sky-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900",
    icon: "text-sky-600 dark:text-sky-300"
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Sales Plan for MLM Software";
  const description =
    "Review leading MLM compensation plans—binary, matrix, uni level, board, gift, generation, stair step, and mobile recharge—and see how Cloud MLM Software delivers each model effectively.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/mlm-sales-plan-for-mlm-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type SalesPlanPageProps = {
  params: { lang: SupportedLocale };
};

export default function SalesPlanPage({ params }: SalesPlanPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const servicesHref = buildLocalizedPath("/services", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-violet-100/70 bg-violet-50/60 py-20 shadow-2xl dark:border-violet-500/30 dark:bg-slate-950/40">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-100 via-white to-cyan-100 opacity-90 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute -top-16 -left-20 h-72 w-72 rounded-full bg-violet-200/60 blur-3xl dark:bg-violet-500/20" />
        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-cyan-200/50 blur-3xl dark:bg-cyan-500/20" />
        <div className="container relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-700 dark:border-violet-500/40 dark:bg-slate-900/70 dark:text-violet-200">
              <Sparkle className="h-4 w-4" weight="fill" aria-hidden />
              Compensation blueprints
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              MLM sales plan for MLM software
            </h1>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{INTRO_PARAGRAPH}</p>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{CONTEXT_PARAGRAPH}</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="bg-violet-600 text-white hover:bg-violet-500 dark:bg-violet-500 dark:hover:bg-violet-400"
              >
                <Link href={demoHref}>
                  Explore plan-ready demos
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Link href={contactHref}>
                  Speak with plan architects
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/70 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/60">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Why this guide</p>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                Compensation design dictates distributor trust, payout accuracy, and scalability. Pair the right plan with software that keeps every
                rule precise.
              </p>
            </div>
            <div className="rounded-2xl border border-violet-100 bg-violet-50/80 p-6 dark:border-violet-500/30 dark:bg-violet-500/10">
              <p className="text-sm font-semibold uppercase tracking-wide text-violet-700 dark:text-violet-200">Quick tip</p>
              <p className="mt-2 text-sm leading-6 text-violet-900 dark:text-violet-100">
                Mix configurable bonuses, binary ratios, and promotion logic without re-platforming—Cloud MLM Software keeps every scenario aligned.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Explore the leading MLM compensation plans</h2>
          <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
            Review eight high-impact plans and see how each one leverages Cloud MLM Software for transparent payouts, accurate genealogy tracking,
            and actionable analytics.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {PLAN_DETAILS.map((plan, index) => {
            const accent = ACCENT_CLASSES[index % ACCENT_CLASSES.length];
            const Icon = plan.icon;

            return (
              <div
                key={plan.title}
                className={`relative overflow-hidden rounded-3xl border ${accent.border} ${accent.background} p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl`}
              >
                <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/40 blur-3xl dark:bg-white/5" aria-hidden />
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 shadow-sm ${accent.icon}`}>
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{plan.title}</h3>
                </div>
                <div className="mt-6 space-y-4">
                  {plan.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {plan.advantages ? (
                  <div className="mt-6 space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Advantages</p>
                    <ul className="space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
                      {plan.advantages.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-current" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {plan.features ? (
                  <div className="mt-6 space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Features</p>
                    <ul className="grid gap-2 sm:grid-cols-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
                      {plan.features.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-current" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-violet-50 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)]">
          <div className="space-y-6">
            {OUTRO_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-base leading-7 text-slate-700 dark:text-slate-200">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-violet-600 text-white hover:bg-violet-500 dark:bg-violet-500 dark:hover:bg-violet-400"
              >
                <Link href={servicesHref}>
                  Review our service catalogue
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Link href={contactHref}>
                  Start your compensation project
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">About the author</p>
              <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{AUTHOR.name}</p>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{AUTHOR.role}</p>
            </div>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{AUTHOR.bio}</p>
            <div className="rounded-2xl border border-violet-100 bg-violet-50/80 p-6 dark:border-violet-500/30 dark:bg-violet-500/10">
              <p className="text-sm font-semibold uppercase tracking-wide text-violet-700 dark:text-violet-200">Need tailored advice?</p>
              <p className="mt-2 text-sm leading-6 text-violet-900 dark:text-violet-100">
                We translate sales ambitions into compensation engines—complete with onboarding journeys, incentive programs, and analytics you can
                act on.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
