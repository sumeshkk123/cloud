import type { Metadata } from "next";
import Link from "next/link";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Globe,
  Megaphone,
  PackageCheck,
  Sparkles,
  UsersRound
} from "lucide-react";

export const dynamic = "force-static";

const INTRO_PARAGRAPHS = [
  "Today Multi-level marketing is one of the largest businesses in the world. So many entrepreneurs started MLM business as their career. MLM business provides so many ways to make a profit.",
  "If you are an MLM business owner and your MLM company runs based on product sales, then you need to know how to sell products and how to gain more profit through it and it’s leadership.",
  "It is not a big deal to distribute the products, But it has some difficulties too. Because today so many MLM companies introduce their products on the market. So the MLM company owners must be passionate about this business and must be updated on the latest market trends then only you can sell your product on the market. Day to day the needs of people are changed. They only search for the product that they want, so the owners introduce their product for peoples favors not for profit.",
  "Before selling your products you must analyze the market trends, customers potentials and the area you are going to sell your product. If you introduce a product which is highly costive but the people in your targeted area are not at all rich then your business becomes an utter flop.  To launch the product based on your targeted area’s peoples potential. We all know in the MLM industry there are so many scammers running their business. It is very hard to persuade the customers to buy your products and join the company for business. So In order to get a huge response for your product from customers, it is so important to establish a marketing strategy and a better plan for selling products and make an attractive introduction for your MLM company and MLM software used."
];

const CORE_TIPS = [
  {
    title: "Deep knowledge about your product",
    description:
      "First, you should know about what product you are selling? and for what it can be used? and who can use this product?. Based on this information you can categorize the product between customers after which you will find potential customers to sell the product",
    icon: PackageCheck
  },
  {
    title: "Categorize target market",
    description:
      "At the time of selling your products, you must make an inquiry to know who can use your product for a long time and you must make a report based on how many customers are buying your product and how much amount of product they purchase weekly or monthly etc.",
    icon: Globe
  },
  {
    title: "Through social media",
    description:
      "Social media is a vital part for every business. Social media platforms like Facebook, Instagram, Pinterest are used by millions of users daily so creating a company page for your product on these platforms will definitely help your MLM business. Post product imagery, specifications, and advantages to increase brand awareness and reach targeted prospects through ads.",
    icon: Megaphone
  },
  {
    title: "By referrals",
    description:
      "Referral is one of the successful strategies in MLM business. Through referral methods, you can easily get new customers for your product. Contact customers who already use the product and invite them to refer friends or relatives by offering a percentage commission on the selling price.",
    icon: UsersRound
  },
  {
    title: "Through events and seminars",
    description:
      "Multilevel marketing thrives on community. Attend or host seminars and webinars to introduce products, share business ideas, and collect selling strategies. These events increase product popularity, deliver fresh insights, and build the confidence required to maximize profit.",
    icon: Sparkles
  }
];

const AUTHOR = {
  name: "Experienced Research Analyst",
  bio: "Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate about utilizing technology to drive growth and optimize business processes. Adept at analyzing market dynamics, delivering actionable insights, and staying ahead of industry developments."
};

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Tips to Sell Products Through Multi-Level Marketing";
  const description =
    "Build product mastery, segment audiences, leverage social channels, and nurture referrals to grow multi-level marketing product revenue.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/tips-to-sell-products-through-multi-level-marketing", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ProductTipsPageProps = {
  params: { lang: SupportedLocale };
};

export default function TipsToSellProductsThroughMultiLevelMarketingPage({ params }: ProductTipsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-100 via-white to-amber-100 shadow-2xl dark:border-rose-500/30 dark:from-slate-950 dark:via-slate-900 dark:to-amber-950/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.25),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.14),transparent_65%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.16),transparent_72%)]" />
        <div className="relative grid gap-12 px-6 py-20 sm:px-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:px-20">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-rose-700 dark:border-rose-500/30 dark:bg-slate-900/70 dark:text-rose-200">
              <Megaphone className="h-4 w-4" aria-hidden />
              Product sales playbook
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              Tips to sell products through multi-level marketing
            </h1>
            {INTRO_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-rose-600 px-6 py-2 text-white shadow-lg shadow-rose-500/30 transition hover:bg-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400"
              >
                <Link href={demoHref}>
                  Explore sales automations
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-rose-200 bg-white/80 px-6 py-2 text-rose-700 transition hover:bg-rose-100 dark:border-rose-500/40 dark:bg-slate-900/60 dark:text-rose-200 dark:hover:bg-slate-800"
              >
                <Link href={contactHref}>Request coaching session</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-white/70 bg-white/80 p-8 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              Build a product-first narrative, match offers to regional demand, and keep pace with customer expectations to stay ahead in a crowded
              MLM landscape.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-6 lg:grid-cols-2">
          {CORE_TIPS.map((tip) => (
            <div
              key={tip.title}
              className="flex h-full flex-col justify-between rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="space-y-4">
                <tip.icon className="h-6 w-6 text-rose-600 dark:text-rose-300" aria-hidden />
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{tip.title}</h2>
                <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{tip.description}</p>
              </div>
              <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-rose-400 to-amber-400" />
            </div>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-100 via-white to-rose-50 p-8 shadow-xl dark:border-rose-500/40 dark:from-rose-900/40 dark:via-slate-900 dark:to-slate-950">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Create momentum with consistent messaging</h2>
          <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-200">
            Customers reward clarity. Align your demos, digital content, and field conversations around the same product story so prospects
            understand why your solution matters in their daily life.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-8 shadow-xl dark:border-slate-700 dark:bg-slate-900/70">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">About The Author</p>
          <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{AUTHOR.name}</p>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{AUTHOR.bio}</p>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

