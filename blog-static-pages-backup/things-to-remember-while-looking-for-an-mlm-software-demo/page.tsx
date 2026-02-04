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
  BadgeCheck,
  CreditCard,
  Headset,
  MonitorSmartphone,
  Puzzle,
  ShieldCheck,
  Sparkles,
  Star,
  Workflow
} from "lucide-react";

export const dynamic = "force-static";

const INTRO_PARAGRAPH =
  "Today every business is being revolutionized by the automation process. So much Software is developed and it facilitates work. MLM Software helps to market the products and services to all parts of the world more efficiently. Before purchasing software, it is essential to gain a deep understanding of how the software is used. And you can ask for a software demo from the software providers to analyze its features. This blog explains a few things that should be considered in MLM software demos.";

const MUST_HAVE_FEATURES =
  "The MLM software must have the features like Payment processing, multiple compensation plans, commission tracking, simple UI, multilingual and multi-currency support, and security.";

const DEEP_DIVE_ITEMS = [
  {
    title: "Support customizations",
    description:
      "Customization is one of the important features of MLM software. The software must be customized to fit the client’s requirements. Make MLM plans that are simple for people to grasp. It will assist them to join your multilevel marketing business.",
    icon: Puzzle
  },
  {
    title: "Software extensibility",
    description:
      "Software extensibility should be a feature of MLM software. MLM software must be able to serve the needs of a rapidly expanding firm in a cost-effective manner. The software should continue to meet the needs of users at the same rate if the business expands globally and it should be updated in accordance with the trend.",
    icon: Workflow
  },
  {
    title: "System integration",
    description:
      "MLM software must support full integration with the company’s system. All the features must be consistent and completely linked to the needs of the users in order to get a successful result.",
    icon: Star
  },
  {
    title: "Cost effective",
    description:
      "MLM solutions should match your budget without sacrificing long-term value. Confirm the pricing tiers, hidden costs, and upgrade paths before you commit to a vendor.",
    icon: Sparkles
  }
];

const ASSURANCE_POINTS = [
  {
    title: "Support",
    description:
      "Post-development customer support is one of the most essential factors in MLM software. The majority of companies create software and then fail to give adequate support for it. Before choosing an online MLM software provider for your business, you should research the company’s previous work history.",
    icon: Headset
  },
  {
    title: "Mobile friendly MLM software",
    description:
      "Select MLM software that works on any platform, mainly in mobile because most of the users do business through smartphones or tablets.",
    icon: MonitorSmartphone
  },
  {
    title: "Secure MLM Software",
    description:
      "MLM software should be more secure than other types of software because this software allows you to perform a wide range of transactions. MLM software has several built-in features that help clients grow their network marketing business.",
    icon: ShieldCheck
  },
  {
    title: "Secure payment gateways",
    description:
      "MLM software should allow you to accept payments at any time from all over the world. Software should accept many cards, including Visa, Mastercard, and Maestro cards, both domestic and international. MLM software should be secure for financial transactions with payment gateways. Choose secure & trusted MLM software for your business.",
    icon: CreditCard
  },
  {
    title: "Money-back guarantee",
    description:
      "Double-check the return policy before purchasing the software. Only a few companies provide full refunds of money in case of any issues in software.",
    icon: BadgeCheck
  }
];

const CONCLUSION_PARAGRAPH =
  "When looking for an MLM software demo , it’s important to prioritize clarity and functionality. Make sure the demo fits your business model, provides essential features, and is easy to use. Check for scalability and support options, and assess the company’s reputation. Lastly, involve your team in evaluating the demo to gather different perspectives, to ensure the software meets all operational needs before making a decision. Choosing a good demo will set the stage for long-term success in your MLM venture.";

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
  const title = "Things to Remember While Looking for an MLM Software Demo";
  const description =
    "Evaluate MLM software demos by checking core functionality, extensibility, integrations, support quality, and financial guarantees before you buy.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/things-to-remember-while-looking-for-an-mlm-software-demo", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type DemoChecklistPageProps = {
  params: { lang: SupportedLocale };
};

export default function ThingsToRememberWhileLookingForAnMlmSoftwareDemoPage({ params }: DemoChecklistPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-100 via-white to-emerald-100 shadow-2xl dark:border-purple-500/30 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.25),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.14),transparent_65%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.16),transparent_72%)]" />
        <div className="relative grid gap-12 px-6 py-20 sm:px-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:px-20">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-purple-700 dark:border-purple-500/30 dark:bg-slate-900/70 dark:text-purple-200">
              <Sparkles className="h-4 w-4" aria-hidden />
              Demo checklist
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              Things to remember while looking for an MLM software demo
            </h1>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{INTRO_PARAGRAPH}</p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-purple-600 px-6 py-2 text-white shadow-lg shadow-purple-500/30 transition hover:bg-purple-500 dark:bg-purple-500 dark:hover:bg-purple-400"
              >
                <Link href={demoHref}>
                  Launch interactive demo
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-purple-200 bg-white/80 px-6 py-2 text-purple-700 transition hover:bg-purple-100 dark:border-purple-500/40 dark:bg-slate-900/60 dark:text-purple-200 dark:hover:bg-slate-800"
              >
                <Link href={contactHref}>Book strategy consult</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/70 bg-white/80 p-8 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Must-have features</p>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{MUST_HAVE_FEATURES}</p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-6 lg:grid-cols-2">
          {DEEP_DIVE_ITEMS.map((item) => (
            <div
              key={item.title}
              className="flex h-full flex-col justify-between rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="space-y-4">
                <item.icon className="h-6 w-6 text-purple-600 dark:text-purple-300" aria-hidden />
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h2>
                <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{item.description}</p>
              </div>
              <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-purple-400 to-emerald-400" />
            </div>
          ))}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <div className="grid gap-6 lg:grid-cols-3">
            {ASSURANCE_POINTS.map((point) => (
              <div
                key={point.title}
                className="rounded-3xl border border-emerald-100 bg-emerald-50/70 p-6 shadow-lg dark:border-emerald-500/30 dark:bg-emerald-500/10"
              >
                <point.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{point.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-100 via-white to-emerald-50 p-8 shadow-xl dark:border-emerald-500/40 dark:from-emerald-900/40 dark:via-slate-900 dark:to-slate-950">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Conclusion</h2>
          <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-200">{CONCLUSION_PARAGRAPH}</p>
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

