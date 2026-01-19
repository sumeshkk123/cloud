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
  ClipboardList,
  Layers,
  LineChart,
  Sparkles
} from "lucide-react";
import { ChartLineUp, ChatsCircle, CubeFocus } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

const INTRO_PARAGRAPHS = [
  "Furthermore, today MLM Business is influencing our society to a great extent.  It is a network marketing business. More and more people are being attracted to it every day. So software for multi-level marketing  plays a crucial role in the success of MLM business.",
  "Network marketing may be effective, but it’s also very complex. The main aim of network marketing is to promote the goods and services to all the levels of marketing and managing the performance of hundreds of individuals, i.e. customers and distributors. In this time, the  MLM software is available to help simplify the process."
];

const DEFINITION_PARAGRAPH =
  "MLM Software or Network marketing software is a software designed for those who are starting MLM businesses and used to help in the management of network marketing businesses. Ie, everything from inventory to distribution to marketing and more.";

const IMPORTANCE_PARAGRAPHS = [
  "Due to the stratified and ever-expanding nature of network marketing businesses, running an MLM  business without using MLM Software can be very difficult to track and much more challenging. This software helps you to track their many elements run with accurately. Some importance of MLM Software are,",
  "A software for multi-level marketing helps MLM business for its complete operation and make the MLM business more effective.",
  "It helps to keep a track of the complete structure of the Marketing business to successfully manage the business."
];

const FEATURE_BENEFITS = [
  "Amount gained/achieved by the payout can be moved to e-Wallet.",
  "The MLM Software is simple to use, easy to understand, user friendly, easy to navigate and save your time.",
  "Software for multi-level marketing helps in assisting and handling sales. It helps the entrepreneur to maintain control over the business and he is able to optimize its performance.",
  "You can get the custom-made reports to evaluate the results of your MLM business using the MLM Software.",
  "MLM Software is secure and reliable.",
  "The Modern MLM software can be integrated with many additional features like e-commerce, automatic payment system, e-wallet etc and make it easy for users.",
  "Conduct online training and recruitment programme.",
  "Easily manage and easily interact with your customers by using MLM Software."
];

const CONCLUSION_PARAGRAPHS = [
  "At last, the MLM Software is an uncompromising medium to track the complete and successful network marketing business.",
  "Cloud MLM Software Solutions is one of the leading MLM Software development company providing MLM Software for various MLM plans.ie, MLM Matrix Plan, MLM Binary Plan, MLM Uni-level Plan etc. We have a team of highly qualified professionals in developing fully featured MLM Software. It matches all types of businesses from start-up to corporate level across the world. You can testify our MLM Software through our free MLM Software Demo ."
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
  const title = "Software for Multi Level Marketing and Its Impact on MLM Business";
  const description =
    "Understand how modern MLM software streamlines operations, supports compensation plans, and accelerates network marketing growth.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/software-for-multi-level-marketing-and-its-impact-on-mlm-business", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type SoftwareImpactPageProps = {
  params: { lang: SupportedLocale };
};

export default function SoftwareForMultiLevelMarketingAndItsImpactOnMlmBusinessPage({
  params
}: SoftwareImpactPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-orange-100 shadow-2xl dark:border-amber-500/30 dark:from-slate-950 dark:via-slate-900 dark:to-orange-950/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.25),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.14),transparent_65%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.16),transparent_72%)]" />
        <div className="relative grid gap-12 px-6 py-20 sm:px-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] xl:px-20">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700 dark:border-amber-500/40 dark:bg-slate-900/70 dark:text-amber-200">
              <Sparkles className="h-4 w-4" aria-hidden />
              Platform spotlight
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              Software for Multi Level Marketing and Its Impact on MLM Business
            </h1>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{INTRO_PARAGRAPHS[0]}</p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-amber-600 px-6 py-2 text-white shadow-lg shadow-amber-500/30 transition hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400"
              >
                <Link href={contactHref}>
                  Talk to MLM strategists
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-amber-200 bg-white/80 px-6 py-2 text-amber-700 transition hover:bg-amber-100 dark:border-amber-500/40 dark:bg-slate-900/60 dark:text-amber-200 dark:hover:bg-slate-800"
              >
                <Link href={demoHref}>Test drive the demo</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/70 bg-white/70 p-8 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{INTRO_PARAGRAPHS[1]}</p>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">What is MLM Software?</h2>
          <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-200">{DEFINITION_PARAGRAPH}</p>
        </div>

        <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-100 via-white to-amber-50 p-8 shadow-xl dark:border-amber-500/40 dark:from-amber-900/40 dark:via-slate-900 dark:to-slate-950">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700 dark:border-amber-500/40 dark:bg-slate-900/70 dark:text-amber-200">
                <LineChart className="h-4 w-4" aria-hidden />
                Importance of MLM software in the MLM industry
              </span>
              <div className="space-y-4 text-sm leading-6 text-slate-700 dark:text-slate-200">
                {IMPORTANCE_PARAGRAPHS.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <CubeFocus className="h-14 w-14 text-amber-500 dark:text-amber-300" aria-hidden />
          </div>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                <Layers className="h-4 w-4" aria-hidden />
                Why should you choose an MLM Software for your MLM business?
              </span>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                Software for multi-level marketing is not invented to do just one thing. It provides plenty of features, for the smooth running of
                an MLM business. Some features and benefits of MLM Software are specified below,
              </p>
            </div>
            <ChartLineUp className="h-14 w-14 text-amber-500 dark:text-amber-300" aria-hidden />
          </div>
          <ul className="mt-8 grid gap-4 text-sm leading-6 text-slate-700 dark:text-slate-200 lg:grid-cols-2">
            {FEATURE_BENEFITS.map((benefit) => (
              <li key={benefit} className="flex gap-3 rounded-2xl border border-amber-100 bg-amber-50/70 px-4 py-3 dark:border-amber-500/30 dark:bg-amber-500/10">
                <ClipboardList className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600 dark:text-amber-300" aria-hidden />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-100 via-white to-amber-50 p-8 shadow-xl dark:border-amber-500/40 dark:from-amber-900/40 dark:via-slate-900 dark:to-slate-950">
          <div className="space-y-4 text-sm leading-6 text-slate-700 dark:text-slate-200">
            {CONCLUSION_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              asChild
              className="rounded-full bg-amber-600 px-6 py-2 text-white shadow-lg shadow-amber-500/30 transition hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400"
            >
              <Link href={demoHref}>
                Try the free MLM Software Demo
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">About The Author</p>
          <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{AUTHOR.name}</p>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{AUTHOR.bio}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1 dark:border-slate-700 dark:bg-slate-900">
              <ChatsCircle className="h-4 w-4" aria-hidden />
              Customer success
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1 dark:border-slate-700 dark:bg-slate-900">
              <Sparkles className="h-4 w-4" aria-hidden />
              Product innovation
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

