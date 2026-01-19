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
  BookOpen,
  Building2,
  Clock,
  Handshake,
  Megaphone,
  ShieldAlert,
  Sparkles,
  Users
} from "lucide-react";
import { ChartLineUp, GlobeHemisphereEast } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

const INTRO_PARAGRAPHS = [
  "Joining any firm has its own advantages and challenges. This applies to MLM companies as well. But you can still find the best company to kickstart your career in direct selling with adequate precautions. In this write up, we are analyzing the pros and cons of joining an MLM company and what future it can offer you.",
  "Multi level marketing is the current trend for selling products. It has undergone several transformations in the past few years and has become a hot trend in the marketing scenario. Do you remember how it all started? Let’s walk through the history of MLM."
];

const ORIGIN_PARAGRAPHS = [
  "The evolution of direct selling from door-to-door sales to advanced MLM structures has been a long journey. During the 19th and 20th centuries, sales representatives offered products and services directly to consumers. Companies like Avon continued this marketing strategy by focusing on personal relationships and connections.",
  "It was the Nutrilite company that introduced the concept of MLM for the first time. They initiated a new marketing strategy where the sales representatives can not only gain profit from their individual sales but also from the sales of new members they hire into this network. This structure created multiple levels of compensation plans and helped the companies grow faster. This actually laid the foundation for multi-level marketing.",
  "The rise of Amway paved the way for large scale network expansion and the rapid growth of network marketing all over the world."
];

const EVOLUTION_PARAGRAPHS = [
  "The MLM structure has gained immense popularity and spread across various industries, from cosmetics and nutritional supplements to homecare, health, and beyond. It promised entrepreneurship and flexibility to individuals. Even though there were rumors of its resemblance to pyramid schemes,.",
  "The rise of illegitimate companies challenged product sales and disrupted the actions of many companies. Legal commissions have clarified the distinction between legal MLM companies and illegal pyramid schemes and taken action against companies that prioritized recruitment over actual product sales."
];

const DIGITAL_PARAGRAPHS = [
  "The major transformation occurred in the digital era, where social media platforms became the superuniverse of everything. These platforms helped MLM participants build connections with a large number of people and market their products worldwide.",
  "Many MLM companies have achieved success through continuous effort, determination, and hard work. While some have found luck on their side, many others have faced failure. So, how do you determine if MLM is right for you? Let me guide you.",
  "We’ll explore the major pros and cons of MLM companies to help you decide if this model would benefit you. An important factor to consider is understanding what MLM software is and how it can play a crucial role in your success. MLM software helps automate tasks, manage networks, and track sales, making it a key tool for optimizing operations. By recognizing both the advantages and challenges of MLM, and how MLM software can support your efforts, you’ll be in a better position to make an informed decision about your future in this industry."
];

type ProItem = {
  title: string;
  summary: string;
  paragraphs: string[];
  icon: ComponentType<{ className?: string }>;
};

const PROS: ProItem[] = [
  {
    title: "The best way to earn money within a limited time frame",
    summary: "The best way to earn money within a limited time frame",
    paragraphs: [
      "MLM is the best way to earn money within a limited time frame. Because of its structure, sales representatives can recruit members and expand their network. As more people are recruited, they can earn a passive income from the commissions received from their sales.",
      "If you are able to build a strong network under you, you can be the master of MLM business. The members whom you recruit are generally referred to as ‘downlines’. MLM promises additional income other than the original sales by building a solid downline.",
      "You should be very careful while choosing your recruits. It is always better if you recruit someone who is as enthusiastic and committed as you. And the emphasis should be on product sales.",
      "Giving importance to product sales in MLM is a strategy for a legitimate and sustainable business. This approach minimizes the legal risks, builds a solid customer base, and ensures that your business model is focusing on value by offering quality products. Therefore, real sales activities are crucial for generating immediate revenue and long-term customer loyalty."
    ],
    icon: Clock
  },
  {
    title: "Flexible working hours",
    summary: "Flexible working hours",
    paragraphs: [
      "Network marketing offers flexibility in terms of working hours. Many people adopt this model as their side business. In this way, they earn an additional income apart from their normal jobs.",
      "Imagine you have the freedom to work at any time, anywhere. That is what MLM can offer you. Because of this flexibility, people are choosing network marketing as their career and becoming independent entrepreneurs."
    ],
    icon: Users
  },
  {
    title: "It provides training and marketing materials",
    summary: "It provides training and marketing materials",
    paragraphs: [
      "A significant advantage of network marketing is that it provides training and marketing materials to individuals. This support is crucial for new and existing members within the network.",
      "MLM companies offer a structured training program for newcomers. They are trained about products and services, sales techniques, customer service, and business management. These training programs laid the foundation for future success. In addition to these initial training, MLM companies are keen on providing ongoing opportunities and support through workshops, webinars, and conferences."
    ],
    icon: BookOpen
  },
  {
    title: "Partner with established businesses",
    summary: "Partner with established businesses",
    paragraphs: [
      "When it comes to business, partnerships and collaborations play a vital role. MLM companies often miss the significant opportunity to partner with established firms. Companies that excelled in direct selling have similar stories to share. Effective collaborations can bring about excellent products, solid labels, sales techniques, customer services, and many other things. Your ability to work with reputed companies will determine your success in MLM.",
      "There are several illegal business scams disguised as MLM. Be careful while selecting the MLM company you want to collaborate with. Invest time to study about the company and its history."
    ],
    icon: Handshake
  }
];

type ConItem = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

const CONS: ConItem[] = [
  {
    title: "Benefits are limited",
    description:
      "MLM provides a higher level of freedom and flexibility. Although, it has several disadvantages. Network marketing is not a fixed profession and it does not provide any security like many jobs offer. For instance, you will get healthcare, compensated leaves, and other conventional benefits for any other job, but not MLM. It cannot promise such security and typical benefits. The path to success is not a bed of roses.",
    icon: ShieldAlert
  },
  {
    title: "Building your network requires considerable time",
    description:
      "MMLM is not an easy process. It takes time to build your network. Unlike any other business, MLM is all about creating your own business from scratch. Everything will be available to you including sales materials, skilled professionals, and personalized pages. But most importantly, it is your customers who make the business a successful one.",
    icon: Clock
  },
  {
    title: "Pressure on personal relationships",
    description:
      "Network marketing is based on personal relationships. For that matter, MLM strategies often encourage members to sell products to recruit friends or family members, which can strain or damage these relationships. The pressure to meet sales or recruitment targets can lead to uncomfortable social dynamics",
    icon: Handshake
  },
  {
    title: "Risk of financial loss",
    description:
      "One of the disadvantages of MLM is the financial loss it causes to people. This happens due to the initial investments, ongoing expenses, and the difficulty in selling products or recruiting enough people to generate a significant amount of income.",
    icon: Building2
  },
  {
    title: "Market saturation",
    description:
      "Market saturation adversely affects the growth of MLM companies. It becomes increasingly difficult to sell products and recruit new members as more people come to join the network. This often hinders the potential for earnings and growth within the company.",
    icon: GlobeHemisphereEast
  }
];

const CONCLUSION_PARAGRAPH =
  "MLM has changed the lives of many entrepreneurs. And it’s time to change yours. Understand the major advantages and disadvantages of MLM companies and approach them skeptically. Like any other business, network marketing also needs patience, determination, and the mindset to work under pressure.";

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
  const title = "The Pros and Cons of Joining an MLM Company";
  const description =
    "Explore how MLM evolved, what benefits it offers, the risks to watch for, and how software empowers smarter decisions.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/the-pros-and-cons-of-joining-an-mlm-company", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ProsConsPageProps = {
  params: { lang: SupportedLocale };
};

export default function TheProsAndConsOfJoiningAnMlmCompanyPage({ params }: ProsConsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-100 via-white to-rose-100 shadow-2xl dark:border-purple-500/30 dark:from-slate-950 dark:via-slate-900 dark:to-rose-950/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.25),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(244,63,94,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.14),transparent_65%),radial-gradient(circle_at_bottom_right,rgba(244,63,94,0.16),transparent_72%)]" />
        <div className="relative grid gap-12 px-6 py-20 sm:px-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:px-20">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-purple-700 dark:border-purple-500/40 dark:bg-slate-900/70 dark:text-purple-200">
              <Sparkles className="h-4 w-4" aria-hidden />
              Decision playbook
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              The Pros and Cons of Joining an MLM Company
            </h1>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{INTRO_PARAGRAPHS[0]}</p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-purple-600 px-6 py-2 text-white shadow-lg shadow-purple-500/30 transition hover:bg-purple-500 dark:bg-purple-500 dark:hover:bg-purple-400"
              >
                <Link href={contactHref}>
                  Discuss your expansion
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-purple-200 bg-white/80 px-6 py-2 text-purple-700 transition hover:bg-purple-100 dark:border-purple-500/40 dark:bg-slate-900/60 dark:text-purple-200 dark:hover:bg-slate-800"
              >
                <Link href={demoHref}>See automation demo</Link>
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
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">The origin of MLM</h2>
          <div className="mt-6 space-y-4 text-sm leading-6 text-slate-700 dark:text-slate-200">
            {ORIGIN_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-purple-200 bg-purple-50/70 p-8 shadow-lg dark:border-purple-500/30 dark:bg-purple-500/10">
            <div className="flex items-center gap-3">
              <ChartLineUp className="h-6 w-6 text-purple-600 dark:text-purple-300" aria-hidden />
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Evolution and growth</h3>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-6 text-slate-700 dark:text-slate-200">
              {EVOLUTION_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-rose-200 bg-rose-50/70 p-8 shadow-lg dark:border-rose-500/30 dark:bg-rose-500/10">
            <div className="flex items-center gap-3">
              <Megaphone className="h-6 w-6 text-rose-600 dark:text-rose-300" aria-hidden />
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Digital transformation</h3>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-6 text-slate-700 dark:text-slate-200">
              {DIGITAL_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
            <Sparkles className="h-4 w-4" aria-hidden />
            The pros of Multi-level marketing
          </span>
          <ul className="mt-4 grid gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 lg:grid-cols-2">
            {PROS.map((pro) => (
              <li key={pro.title}>{pro.summary}</li>
            ))}
          </ul>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {PROS.map((pro) => (
              <div
                key={pro.title}
                className="rounded-3xl border border-purple-200 bg-purple-50/70 p-6 shadow-lg dark:border-purple-500/30 dark:bg-purple-500/10"
              >
                <div className="flex items-center gap-3">
                  <pro.icon className="h-6 w-6 text-purple-600 dark:text-purple-300" aria-hidden />
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{pro.title}</h4>
                </div>
                <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-200">
                  {pro.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex items-center gap-3">
            <ShieldAlert className="h-6 w-6 text-rose-600 dark:text-rose-300" aria-hidden />
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">The cons of Multi-level marketing</h3>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {CONS.map((con) => (
              <div
                key={con.title}
                className="rounded-3xl border border-rose-200 bg-rose-50/70 p-6 shadow-lg dark:border-rose-500/30 dark:bg-rose-500/10"
              >
                <div className="flex items-center gap-3">
                  <con.icon className="h-6 w-6 text-rose-600 dark:text-rose-300" aria-hidden />
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{con.title}</h4>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-200">{con.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
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

