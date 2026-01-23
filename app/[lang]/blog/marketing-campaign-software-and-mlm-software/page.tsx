import type { Metadata } from "next";
import Link from "next/link";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, Columns, GitMerge, ListChecks, Rows, SplitSquareHorizontal } from "lucide-react";
import { ArrowsOutLineHorizontal, CirclesThreePlus } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

const INTRO_PARAGRAPH =
  "In this article, we will explain the role and difference between the two. The marketing campaign management software and multilevel marketing software are two valuable business software solutions. But they are used to manage and achieve very different business goals.";

const MARKETING_CAMPAIGN_HEADING = "MARKETING CAMPAIGN SOFTWARE";

const MARKETING_CAMPAIGN_PARAGRAPH =
  "A marketing campaign means the efforts of a marketing company to increase consumer awareness of a business or a particular product. In this marketing campaign system, marketing campaign management software is used for marketing managers that are forced on generating targeted leads and improving the marketing trends. The best campaign management software includes a hub spot, red Cappi, target everyone, etc.";

const MLM_SOFTWARE_HEADING = "MULTI-LEVEL MARKETING SOFTWARE";

const MLM_SOFTWARE_PARAGRAPH =
  "Multilevel marketing is a marketing strategy, in which the distributor is compensated not only for sales they generate but also for the sales of the other people that they recruit. These recruited people are referred to as the participant’s down line. This type of marketing is also called mouth marketing. The MLM software is developed for helping the process of multilevel marketing. through MLM software, we can easily manage the estimation of demand and supply of the marketing company. This includes software plans like binary, matrix, Uni-level, and board. etc.";

const DIFFERENCE_INTRO =
  "Difference between MLM and marketing campaign management software\nWhile specific features and capabilities differ between platforms and vendors, here is a quick list of some of the many activities of each type of business software can help you to improve.";

const MLM_LIST: string[] = [
  "It is used to easily manage the estimation of demand and supply.",
  "The software is web-based and it is developed with the latest technologies.",
  "It provides an affordable price for direct selling companies and MLM companies to reach their customers.",
  "Can customize to different types of MLM compensation plans.",
  "There is a small amount of risk in MLM software.",
  "It is user-friendly, flexible, and scalable.",
  "Through it, grow your business with less effort."
];

const CAMPAIGN_LIST: string[] = [
  "It is used for marketing managers who focus on generating targeted leads and improving marketing trends.",
  "This software allows you to create and track highly targeted marketing campaigns based on demographics, purchase trends, response patterns, and support histories.",
  "Through this software, you can continually fine-tune your campaigns and maximize ROI with the ability to track results in real-time.",
  "Manage and analyze all marketing campaigns like email, events, direct mail in a single application.",
  "Create campaign content quickly through templates.",
  "Segment your data to deliver personalized marketing of your products and services."
];

const CONCLUSION_PARAGRAPH =
  "MLM software and marketing software plays an important role in the marketing field and both are very valuable solutions for the business, though they are used to manage and achieve very different business goals.";

const AUTHOR_BIO =
  "Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate about utilizing technology to drive growth and optimize business processes. Adept at analyzing market dynamics, delivering actionable insights, and staying ahead of industry developments.";

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Marketing Campaign Software and MLM Software";
  const description =
    "Understand how marketing campaign management platforms differ from multi-level marketing software, and why each plays a unique role in business growth.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/marketing-campaign-software-and-mlm-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MarketingVsMlmPageProps = {
  params: { lang: SupportedLocale };
};

export default function MarketingVsMlmPage({ params }: MarketingVsMlmPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-20 pb-20">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-indigo-50 to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.22),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.3),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.32),transparent_60%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700 dark:border-sky-500/50 dark:bg-slate-900/60 dark:text-sky-200">
              <SplitSquareHorizontal className="h-4 w-4" aria-hidden />
              Dual-software perspective
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              Marketing campaign software and MLM software
            </h1>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">{INTRO_PARAGRAPH}</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild className="bg-sky-600 text-white hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400">
                <Link href={demoHref}>
                  Explore integrated demos
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Link href={contactHref}>
                  Plan your rollout
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-5 rounded-3xl border border-sky-200/70 bg-white/80 p-8 shadow-xl shadow-sky-100 backdrop-blur dark:border-sky-500/40 dark:bg-slate-900/70 dark:shadow-none">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-sky-100/80 p-3 text-sky-700 dark:bg-sky-500/20 dark:text-sky-200">
                <Columns className="h-6 w-6" aria-hidden />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-white">Why compare both?</p>
            </div>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              Understanding the difference between marketing campaign tools and MLM platforms keeps strategies aligned with audience targeting, compensation, and
              organizational growth.
            </p>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg shadow-sky-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
            <div className="inline-flex items-center gap-3 rounded-2xl bg-sky-100/80 p-3 text-sky-700 dark:bg-sky-500/20 dark:text-sky-200">
              <ArrowsOutLineHorizontal className="h-5 w-5" aria-hidden />
              <span className="font-semibold uppercase tracking-wide">{MARKETING_CAMPAIGN_HEADING}</span>
            </div>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{MARKETING_CAMPAIGN_PARAGRAPH}</p>
          </article>
          <article className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg shadow-emerald-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
            <div className="inline-flex items-center gap-3 rounded-2xl bg-emerald-100/80 p-3 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200">
              <CirclesThreePlus className="h-5 w-5" aria-hidden />
              <span className="font-semibold uppercase tracking-wide">{MLM_SOFTWARE_HEADING}</span>
            </div>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{MLM_SOFTWARE_PARAGRAPH}</p>
          </article>
        </div>
      </section>

      <section className="container">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg shadow-sky-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-indigo-100/80 p-3 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200">
              <GitMerge className="h-5 w-5" aria-hidden />
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Difference between MLM and marketing campaign management software</h2>
          </div>
          <p className="text-base leading-7 text-slate-700 whitespace-pre-line dark:text-slate-300">{DIFFERENCE_INTRO}</p>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-200/60 bg-white/90 p-6 shadow-sm shadow-emerald-100 dark:border-emerald-500/30 dark:bg-slate-900/70 dark:shadow-none">
              <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-200">MLM SOFTWARE</h3>
              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700 dark:text-slate-300">
                {MLM_LIST.map((item) => (
                  <li key={item} className="flex gap-3">
                    <ListChecks className="mt-1 h-4 w-4 text-emerald-500 dark:text-emerald-300" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-sky-200/60 bg-white/90 p-6 shadow-sm shadow-sky-100 dark:border-sky-500/30 dark:bg-slate-900/70 dark:shadow-none">
              <h3 className="text-lg font-semibold text-sky-700 dark:text-sky-200">MARKETING CAMPAIGN MANAGEMENT SOFTWARE</h3>
              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700 dark:text-slate-300">
                {CAMPAIGN_LIST.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Rows className="mt-1 h-4 w-4 text-sky-500 dark:text-sky-300" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-10 text-center shadow-lg shadow-sky-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            MLM software and marketing software plays an important role in the marketing field and both are very valuable solutions for the business, though they
            are used to manage and achieve very different business goals.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-sky-600 text-white hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400">
              <Link href={demoHref}>
                Compare solutions
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              <Link href={contactHref}>
                Talk with experts
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-10 text-center shadow-lg shadow-sky-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-200">About the author</p>
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
