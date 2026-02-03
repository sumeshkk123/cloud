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
  Scale,
  BarChart2,
  ClipboardSignature,
  Compass,
  Lightbulb,
  Target,
  Users
} from "lucide-react";
import { Brain, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type Insight = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

const INTRO_PARAGRAPHS: string[] = [
  "Multi Level marketing (MLM) has become an increasingly popular option for individuals seeking to generate a passive income stream. MLM is a business model that involves a network of independent distributors who sell products or services to their customers and recruit others to do the same.",
  "While some people have achieved significant financial success through MLM, others have had less favorable experiences. The question remains, is MLM worth investing in? In this blog post, we’ll explore the pros and cons of MLM and help you determine whether it’s a worthwhile investment."
];

const WHAT_IS_MLM =
  "Multi Level marketing (MLM) is a form of direct selling in which sales agents recruit others to join the sales team. The recruited salespeople earn commissions from their sales, as well as from the sales of those they have recruited. This marketing strategy is also known as pyramid selling, network marketing, and referral marketing.";

const HOW_DOES_MLM_WORK =
  "MLM is a business model that recruits others to join the network and sell products or services. The salespeople earn commissions from their sales and the sales of those they have recruited. For the MLM business model to be successful, the salespeople must be able to recruit and train their team members successfully.";

const PROS_LIST: string[] = [
  "One of the most attractive aspects of MLM is its low start-up costs. The cost of joining an MLM company is minimal compared to traditional business models. Most MLM companies require a nominal fee to get started, and many provide training and support to help you get started.",
  "MLM provides a high level of flexibility, allowing you to work from anywhere and anytime. You can work on your business at your own pace, making it a perfect option for individuals seeking to generate income while maintaining a work-life balance.",
  "MLM provides the potential for significant income, particularly for dedicated individuals who are willing to work. Your income potential grows as you build your team and increase your customer base.",
  "MLM provides many opportunities for personal development. Many MLM companies offer training and support to help you develop the skills necessary to succeed in the business. Additionally, the self-discipline and perseverance required to succeed in MLM can translate to other areas of your life."
];

const CONS_LIST: string[] = [
  "The biggest disadvantage of MLM is the risk of pyramid schemes. Pyramid schemes are illegal and involve recruiting people to invest in a business opportunity without offering any real product or service. It’s essential to research the company thoroughly and ensure it is a legitimate MLM company.",
  "MLM requires recruiting others to join your team and generate income. This can be challenging for some individuals and may require significant time and effort.",
  "MLM distributors are often limited in their control over the product or service they sell. They rely on the company to provide the product or service, and if the company changes or discontinues a product, the distributor’s income may be impacted.",
  "While MLM provides the potential for significant income, not all individuals achieve this level of success. In reality, most MLM distributors earn only a modest income, with only a small percentage earning a substantial income."
];

const AI_PARAGRAPHS: string[] = [
  "Understand customer preferences",
  "AI technology can also be used to understand customer preferences and requirements better. It can analyze customer data and identify product or service features best suited to meet their needs. This can help companies to customize their products and services to meet customer expectations better.",
  "AI technology such as CHAT GTP can also develop personalization strategies to ensure customer loyalty and retention."
];

const INVESTMENT_PARAGRAPHS: string[] = [
  "Whether MLM is worth investing in depends on your personal goals and values. MLM may be worth considering if you are seeking a low-risk, low-cost business opportunity with the potential for significant income and personal development.",
  "However, if you are not comfortable with recruiting others or have concerns about the legitimacy of some MLM companies, it may not be the right fit for you.",
  "When considering MLM, it’s important to research the company thoroughly and talk to other distributors to understand the opportunity better. Additionally, it’s important to approach MLM with realistic expectations and be prepared to invest time and effort to achieve success."
];

const CONCLUSION_PARAGRAPH =
  "In conclusion, MLM provides a unique business opportunity worth investing in for individuals seeking flexibility, personal development, and the potential for significant income. However, it’s essential to approach MLM with a critical eye and make an informed decision based on your personal goals and values.";

const AUTHOR_BIO =
  "Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate about utilizing technology to drive growth and optimize business processes. Adept at analyzing market dynamics, delivering actionable insights, and staying ahead of industry developments.";

const HERO_INSIGHTS: Insight[] = [
  {
    title: "Low start-up barrier",
    description: "Most MLM models require only a nominal entry fee alongside guided onboarding resources.",
    icon: Scale
  },
  {
    title: "Compounding networks",
    description: "Income scales as distributors mentor new joiners and expand product reach.",
    icon: Users
  },
  {
    title: "Assess legitimacy",
    description: "Research every opportunity carefully to avoid pyramid schemes that lack real products.",
    icon: ShieldCheck
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Is MLM a Worthwhile Investment?";
  const description =
    "Evaluate multi level marketing as an investment: understand how the model works, weigh pros and cons, and learn the factors that shape long-term success.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/is-mlm-a-worthwhile-investment", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type WorthwhileInvestmentPageProps = {
  params: { lang: SupportedLocale };
};

export default function WorthwhileInvestmentPage({ params }: WorthwhileInvestmentPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-50 via-orange-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.18),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.22),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.28),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(234,179,8,0.28),transparent_60%)]" />
        <div className="container grid gap-16 py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-orange-700 dark:border-orange-500/50 dark:bg-slate-900/60 dark:text-orange-200">
              <Compass className="h-4 w-4" aria-hidden />
              Investment outlook
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">Is MLM a worthwhile investment?</h1>
            <div className="space-y-4 text-lg leading-8 text-slate-700 dark:text-slate-200">
              {INTRO_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild className="bg-orange-600 text-white hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-400">
                <Link href={demoHref}>
                  Explore product guidance
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Link href={contactHref}>
                  Discuss opportunity fit
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-orange-200/70 bg-white/80 p-8 shadow-xl shadow-orange-100 backdrop-blur dark:border-orange-500/40 dark:bg-slate-900/70 dark:shadow-none">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-wide text-orange-700 dark:text-orange-200">Snapshot insights</span>
              <BarChart2 className="h-5 w-5 text-orange-500 dark:text-orange-300" aria-hidden />
            </div>
            <div className="space-y-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {HERO_INSIGHTS.map((insight) => (
                <div key={insight.title} className="flex gap-4 rounded-2xl border border-orange-100/70 bg-white/70 p-4 dark:border-orange-500/30 dark:bg-slate-900/50">
                  <insight.icon className="mt-1 h-6 w-6 shrink-0 text-orange-500 dark:text-orange-300" aria-hidden />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{insight.title}</p>
                    <p className="mt-2 text-sm leading-6">{insight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-12 lg:grid-cols-2">
          <article className="flex h-full flex-col gap-6 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg shadow-orange-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-orange-100/80 p-3 dark:bg-orange-500/20">
                <Lightbulb className="h-6 w-6 text-orange-600 dark:text-orange-300" aria-hidden />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">What is MLM?</h2>
            </div>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{WHAT_IS_MLM}</p>
          </article>
          <article className="flex h-full flex-col gap-6 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg shadow-orange-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-orange-100/80 p-3 dark:bg-orange-500/20">
                <ClipboardSignature className="h-6 w-6 text-orange-600 dark:text-orange-300" aria-hidden />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">How does MLM work?</h2>
            </div>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{HOW_DOES_MLM_WORK}</p>
          </article>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6 rounded-3xl border border-emerald-200/60 bg-white/80 p-10 shadow-lg shadow-orange-100 dark:border-emerald-500/30 dark:bg-slate-900/70 dark:shadow-none">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-100/80 p-3 dark:bg-emerald-500/20">
                <Target className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">The Pros of MLM</h2>
            </div>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              {PROS_LIST.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-rose-200/60 bg-white/80 p-10 shadow-lg shadow-orange-100 dark:border-rose-500/30 dark:bg-slate-900/70 dark:shadow-none">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-rose-100/80 p-3 dark:bg-rose-500/20">
                <Scale className="h-6 w-6 text-rose-600 dark:text-rose-300" aria-hidden />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">The Cons of MLM</h2>
            </div>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              {CONS_LIST.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-5 rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg shadow-orange-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-indigo-100/80 p-3 dark:bg-indigo-500/20">
                <Brain className="h-6 w-6 text-indigo-600 dark:text-indigo-300" aria-hidden />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Understand customer preferences</h2>
            </div>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              {AI_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg shadow-orange-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <div className="space-y-5 text-base leading-7 text-slate-700 dark:text-slate-300">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Is MLM Worth Investing In?</h2>
            {INVESTMENT_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white/90 p-12 text-center shadow-xl shadow-orange-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-700 dark:text-orange-200">Conclusion</p>
          <p className="mt-6 text-base leading-7 text-slate-700 dark:text-slate-300">{CONCLUSION_PARAGRAPH}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-orange-600 text-white hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-400">
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
                Talk with consultants
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-10 text-center shadow-lg shadow-orange-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-700 dark:text-orange-200">About the author</p>
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
