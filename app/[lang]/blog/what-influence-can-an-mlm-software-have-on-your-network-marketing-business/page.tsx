import type { Metadata } from "next";
import Link from "next/link";

import type { SupportedLocale } from "@/config/site";
import { Button } from "@/components/ui/button";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  Books,
  ChartBar,
  ClipboardText,
  ClockCounterClockwise,
  Lightning,
  SquaresFour,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";
import { ArrowRight } from "lucide-react";

export const dynamic = "force-static";

const INTRO =
  "Multi-level marketing (MLM) software is a tool that helps you manage your MLM business. It can automate many tasks associated with running an MLM business, including keeping track of customers, overseeing commissions, and processing orders. MLM software helps firms automate manual sales and marketing processes and monitor lead generation strategies. Additionally, it compiles real-time data and offers accurate insights into the effectiveness of marketing effort.";

const MANAGEMENT_PARAGRAPHS = [
  "MLM software can help you save time and money by automating many tasks associated with running your business. For example, it can track your sales and commissions, which can help to determine how much money to pay each person. This can save a lot of time and effort compared to manually calculating everything.",
  "This software can help you keep track of your sales, customers, and downlines. It can also help you automate many tasks associated with running your business, such as sending out email campaigns and tracking inventory. You can focus on other aspects of your business instead of worrying about these tasks."
];

const BENEFITS = [
  {
    title: "Increased Efficiency",
    description:
      "The most obvious benefit of using MLM software is that it can help to make your business more efficient. This is because the software can automate various tasks, such as tracking sales and commissions, calculating payouts, and generating reports . This means you can free up your time to focus on other aspects of your business."
  },
  {
    title: "Improved Customer Service",
    description:
      "Another benefit of using MLM software is that it can help to improve your customer service. This is because the software can help you track customer orders and requirements and manage customer contact information. So you can provide your customers with the best possible service."
  },
  {
    title: "Greater flexibility",
    description:
      "Another benefit of using MLM software is that it can give you greater flexibility in terms of how you run your business. This is because the software can be customized to suit your specific needs. This means that you can run your business in the way that best suits you, without having to worry about the software."
  },
  {
    title: "Better decision making",
    description:
      "Finally, using MLM software can also help you to make better decisions about your business. The software can provide valuable insights and information about how your business is now running so you can find the weak zone of your business and can make decisions to improve it. Ultimately, using MLM software to manage your downline can help you build a stronger and more successful team. Investing in quality software is a wise choice if you are serious about growing your MLM business. MLM software can also help you to create reports on a weekly or monthly basis. This can help you track your progress and see where you need to improve. With reports, you can easily see which areas of your business are doing well and which areas need more work. This information can be precious in helping you to grow your business."
  }
];

const TRACKING_PARAGRAPHS = [
  "If you’re selling products or services through an MLM structure, it’s vital to have a system to track your sales and commissions. Fortunately, plenty of software options available can make this process easy and painless.",
  "The best thing about most MLM software is that it’s typically very user-friendly. Even if you need to be more tech-savvy, you should be able to figure out how to use it without too much trouble. And, if you do run into any issues, there’s usually customer support available to help you out."
];

const ORGANIZATION_PARAGRAPHS = [
  "If you’re running a multi-level marketing (MLM) business, you know how important it is to stay organized and on top of your business. MLM software can help you do just that.",
  "MLM software can help you stay organized by keeping track of your downline, customers, and sales. This way, you can focus on growing your business and expanding your reach."
];

const CONCLUSION =
  "MLM software can significantly impact your network marketing business by automating tasks, tracking sales and managing customers. With a reliable software solution, you can focus on growing your business while keeping track of key metrics such as customer retention rate and team performance. Investing in quality MLM software is essential to ensure your network marketing business’s long-term success and growth.";

const CTA = {
  heading: "Upgrade your network marketing operations with Cloud MLM Software",
  description:
    "Automate distributor onboarding, visualize genealogy, and align compensation with real-time dashboards designed for scaling teams.",
  label: "Request a consultation"
};

const AUTHOR = {
  name: "Edward",
  role: "Research Analyst",
  bio: "Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate about utilizing technology to drive growth and optimize business processes. Adept at analyzing market dynamics, delivering actionable insights, and staying ahead of industry developments."
};

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "What Influence Can an MLM Software Have On Your Network Marketing Business?";
  const description =
    "Discover how the right MLM platform automates workflows, sharpens analytics, and keeps distributors engaged while you scale.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/what-influence-can-an-mlm-software-have-on-your-network-marketing-business", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PageProps = {
  params: { lang: SupportedLocale };
};

export default function InfluenceOfMlmSoftwarePage({ params }: PageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden rounded-[44px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-indigo-50 shadow-2xl dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(129,140,248,0.18),transparent_65%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.14),transparent_72%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(129,140,248,0.3),transparent_70%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.22),transparent_78%)]" />
        <div className="relative grid gap-10 px-6 py-16 sm:px-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] xl:px-20">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:border-indigo-500/30 dark:bg-slate-900/70 dark:text-indigo-200">
              Software impact
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              What Influence Can an MLM Software Have On Your Network Marketing Business?
            </h1>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              From efficiency to insight, discover why modern MLM teams rely on Cloud MLM Software to orchestrate growth.
            </p>
          </div>
          <div className="rounded-[32px] border border-white/60 bg-white/85 p-8 text-sm leading-6 text-slate-700 shadow-2xl backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/80 dark:text-slate-200">
            <p>
              Replace spreadsheets with dashboards, manual payouts with automation, and guesswork with actionable analytics tailored for your genealogy.
            </p>
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <SquaresFour className="h-6 w-6 text-emerald-600 dark:text-emerald-300" weight="fill" aria-hidden />
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">What is MLM software?</h2>
        </div>
        <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">{INTRO}</p>
      </section>

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <ClockCounterClockwise className="h-6 w-6 text-indigo-600 dark:text-indigo-300" weight="fill" aria-hidden />
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">How can MLM software help you manage your business?</h2>
        </div>
        <div className="space-y-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
          {MANAGEMENT_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <ClipboardText className="h-6 w-6 text-emerald-600 dark:text-emerald-300" weight="fill" aria-hidden />
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
            What are the benefits of using MLM software to manage your downline?
          </h2>
        </div>
        <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
          The use of MLM software to manage your downline can provide several benefits. For one, it can help you keep track of your downline members’ activities and performance.
        </p>
        <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
          This information can be very useful in helping you to manage your downline more effectively. Additionally, MLM software can provide insights into your business that can be very helpful in growing your company.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900/70"
            >
              <p className="text-lg font-semibold text-slate-900 dark:text-white">{benefit.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <ChartBar className="h-6 w-6 text-indigo-600 dark:text-indigo-300" weight="fill" aria-hidden />
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
            How can you track your sales and commissions with MLM software?
          </h2>
        </div>
        <div className="space-y-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
          {TRACKING_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <Books className="h-6 w-6 text-emerald-600 dark:text-emerald-300" weight="fill" aria-hidden />
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
            How can MLM software help you stay organized and on top of your business?
          </h2>
        </div>
        <div className="space-y-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
          {ORGANIZATION_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Conclusion</h2>
        <p className="rounded-[28px] border border-slate-200 bg-white/90 p-6 text-sm leading-7 text-slate-700 shadow-lg dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
          {CONCLUSION}
        </p>
      </section>

      <section className="container rounded-[36px] border border-slate-200 bg-gradient-to-r from-slate-100 via-white to-indigo-100 p-10 shadow-xl dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/40">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{CTA.heading}</h2>
            <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{CTA.description}</p>
            <Button
              asChild
              className="rounded-full bg-indigo-600 px-6 py-2 text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
            >
              <Link href={contactHref}>{CTA.label}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-xl font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">About the author</h2>
        <div className="grid gap-6 rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-xl md:grid-cols-[auto_1fr] dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
            <UsersThree className="h-10 w-10" aria-hidden />
          </div>
          <div className="space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
            <p className="text-2xl font-semibold text-slate-900 dark:text-white">{AUTHOR.name}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{AUTHOR.role}</p>
            <p>{AUTHOR.bio}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
