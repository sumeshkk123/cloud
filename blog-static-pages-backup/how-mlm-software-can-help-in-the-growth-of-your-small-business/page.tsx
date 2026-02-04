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
  Building2,
  LineChart,
  Shield,
  Sparkles,
  TrendingUp
} from "lucide-react";
import {
  ChartLineUp,
  Handshake,
  LockKey,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type FocusCard = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

type ArticleSection = {
  title: string;
  level: "h2" | "h3" | "h4";
  paragraphs: string[];
};

const INTRO_PARAGRAPHS: string[] = [
  "MLM business potential is increasing day by day. MLM business provides you global access to a wide range of business opportunities. You should be more careful while choosing an MLM company for investing your money. An MLM business gives you the opportunity to collaborate with business owners around the world.",
  "Members of a multilevel marketing company can earn commissions on sales, bonuses, and promote items and services. A professional MLM software provider can customize MLM software to match the demands of the business. Is MLM Software capable of assisting your small business? The selection of MLM software makes a significant impact on a company’s growth. This article will guide you on how to use MLM software to improve your small business."
];

const STRATEGY_CARDS: FocusCard[] = [
  {
    title: "Strengthen global ties",
    description: "Nurture international collaboration while staying nimble enough to scale each new market entry.",
    icon: Handshake
  },
  {
    title: "Stay compliance ready",
    description: "Leverage permissioned access and audit trails so sensitive data stays protected end to end.",
    icon: LockKey
  },
  {
    title: "Equip every member",
    description: "Deliver intuitive workspaces for distributors to engage prospects and manage growth targets.",
    icon: UsersThree
  }
];

const ARTICLE_SECTIONS: ArticleSection[] = [
  {
    title: "Build Business Connections",
    level: "h2",
    paragraphs: [
      "MLM companies require the addition of new members at each level of the tree. So they need a lot of people’s connectivity. So, in addition to effectively reorganizing the team, commission distribution with new links to the Network is essential to ensure the business runs smoothly and satisfies the demands of customers.",
      "In this situation the MLM software came into play. Using MLM software, you can easily satisfy your customers and you can expand your business to any scale. In order to expand your market and gain customers from both online and offline sources you must purchase high-quality software."
    ]
  },
  {
    title: "Data Privacy",
    level: "h3",
    paragraphs: [
      "The most important aspect of MLM software is data privacy. Keeping data confidential is very important for any company. In MLM software the information about investors, and salespeople who are connected to this network are saved and it is not shared with anyone outside of the network."
    ]
  },
  {
    title: "Business Development",
    level: "h4",
    paragraphs: [
      "MLM software can be integrated with multiple platforms like e-commerce systems etc for generating leads and to hold business profitability. MLM software boosts website traffic and helps firms to make a profit.",
      "A network marketing company’s main goal is to recruit as many people as possible. MLM software simplifies this process. MLM software allows sales to be processed using a variety of payment methods & which results in an increase in sales."
    ]
  },
  {
    title: "Offering Variety Of MLM Plans",
    level: "h4",
    paragraphs: [
      "MLM software offers so many features to provide support to MLM plans. MLM software has a variety of services and plans to help you grow your business."
    ]
  },
  {
    title: "Conclusion",
    level: "h4",
    paragraphs: [
      "Many software companies have introduced MLM software. There are several software packages available which offer a variety of services. Select the best MLM software with features needed for your business at an affordable price. The software’s success is determined by how well it is implemented in your business."
    ]
  }
];

const AUTHOR_BIO =
  "Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate about utilizing technology to drive growth and optimize business processes. Adept at analyzing market dynamics, delivering actionable insights, and staying ahead of industry developments.";

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "How MLM Software Can Help in the Growth of Your Small Business";
  const description =
    "Understand how modern MLM software protects data, unlocks business development, and supports varied compensation plans for small-business growth.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath(
        "/blog/how-mlm-software-can-help-in-the-growth-of-your-small-business",
        locale
      )
    },
    openGraph: {
      title,
      description
    }
  };
}

type SmallBusinessPageProps = {
  params: { lang: SupportedLocale };
};

export default function SmallBusinessGrowthPage({ params }: SmallBusinessPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-rose-50 via-white to-violet-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute inset-x-0 top-1/4 -z-10 h-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.2),transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.18),transparent_65%)] blur-3xl" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-rose-700 dark:border-rose-500/40 dark:bg-slate-900/60 dark:text-rose-200">
              <Sparkles className="h-4 w-4" aria-hidden />
              Small-business growth playbook
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              How MLM software can help in the growth of your small business
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-200">
              Explore how Cloud MLM Software supports expanding networks, secures sensitive information, and keeps every distributor engaged as your
              operation scales globally.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild className="bg-rose-600 text-white hover:bg-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400">
                <Link href={demoHref}>
                  Schedule a personalised walkthrough
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Link href={contactHref}>
                  Discuss your launch roadmap
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-2xl shadow-rose-100 backdrop-blur dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-wide text-rose-700 dark:text-rose-200">
                What sets the platform apart
              </span>
              <LineChart className="h-5 w-5 text-rose-600 dark:text-rose-300" aria-hidden />
            </div>
            <div className="space-y-4">
              {STRATEGY_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white/90 p-5 transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/70 dark:hover:border-rose-500/40"
                >
                  <span className="rounded-xl bg-rose-100/80 p-3 text-rose-600 dark:bg-rose-500/20 dark:text-rose-200">
                    <card.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-white">{card.title}</h2>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)]">
          <div className="space-y-6 lg:sticky lg:top-24">
            <div className="rounded-3xl border border-violet-200 bg-violet-50/80 p-8 text-slate-900 shadow-sm dark:border-violet-500/30 dark:bg-violet-500/10 dark:text-violet-100">
              <h2 className="text-2xl font-semibold">Why modern MLM stacks matter</h2>
              <p className="mt-3 text-sm leading-6">
                Cloud MLM Software equips founders with cross-border connections, permissioned data flows, and adaptable compensation logic that all
                scale together.
              </p>
              <div className="mt-5 space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-violet-600 dark:text-violet-300" aria-hidden />
                  Enterprise-grade data protection
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-violet-600 dark:text-violet-300" aria-hidden />
                  Integrations across ecommerce and payments
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-violet-600 dark:text-violet-300" aria-hidden />
                  Growth-ready automation for every team
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg shadow-rose-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Key takeaways</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                <li>• Build resilient communities with structured onboarding and commission logic.</li>
                <li>• Protect customer and investor trust through rigorous privacy controls.</li>
                <li>• Launch diverse MLM plans that evolve alongside your brand.</li>
              </ul>
            </div>
          </div>
          <div className="space-y-10">
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg shadow-rose-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
              <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
                {INTRO_PARAGRAPHS.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            {ARTICLE_SECTIONS.map((section) => (
              <article
                key={section.title}
                className="space-y-4 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
              >
                {section.level === "h2" ? (
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{section.title}</h2>
                ) : section.level === "h3" ? (
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{section.title}</h3>
                ) : (
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{section.title}</h4>
                )}
                <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-10 text-center shadow-lg shadow-rose-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-wide text-rose-700 dark:text-rose-200">About the author</p>
          <p className="mt-6 text-2xl font-semibold text-slate-900 dark:text-white">Edward</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">Research Analyst</p>
          <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-300">{AUTHOR_BIO}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100">
              <Link href={demoHref}>
                Experience the platform
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild className="bg-violet-600 text-white hover:bg-violet-500 dark:bg-violet-500 dark:hover:bg-violet-400">
              <Link href={contactHref}>
                Connect with our advisors
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
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
