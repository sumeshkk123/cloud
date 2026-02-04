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
  Compass,
  Layers,
  Library,
  Network,
  NotebookPen,
  Rocket,
  Sparkles,
  Users
} from "lucide-react";
import { GlobeHemisphereEast, Handshake } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type Highlight = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

type SectionBlock = {
  title: string;
  paragraphs: string[];
  icon: ComponentType<{ className?: string }>;
};

const INTRO_PARAGRAPHS: string[] = [
  "Network marketing has turned the dreams of budding entrepreneurs into reality. The term has revolutionized the concept of modern business and marketing as it offers a unique and accessible avenue for individuals. Multi-level marketing empowers start-ups to build businesses of their own by leveraging social media platforms. It provides support systems at every phase of the business and encourages established firms to help others by recruiting new participants to their network. As more people want to enter this marketing landscape, it is important to raise proper awareness about how to get started in network marketing.",
  "Starting an MLM requires patience, dedication, and hard work. Several factors have to be taken into consideration before building a network marketing business. This article is the ultimate guide to how to get into network marketing, exploring the important steps, strategies, and principles."
];

const FOUNDATION_PARAGRAPH =
  "The strength of a multi-level marketing company is its concept. This may include its structure, compensation plans, and the power of teamwork. People who want to build a career in network marketing, need to understand these key principles and start collaborating with other distributors to unleash their full potential.";

const STRUCTURE_PARAGRAPHS: string[] = [
  "If you want to become a network marketer, you should possess a deep and clear-cut understanding of the MLM structure. There are several debates and controversies going on around the structure of a multi-level marketing business. Because of its similarities with the pyramid structure, it has often been misjudged as an illegal business and conceived as a pyramid scheme. Thorough research is needed to study the structure an MLM business follows and how it works.",
  "Multi-level marketing or network marketing is a well-known business model that is bound by legal resources. This business model is used to sell quality products and services to customers in different countries. MLM has expanded its reach and recognition beyond geographical boundaries. As it is involved in the direct marketing of products and services, it is also known as a ‘direct selling business’.",
  "How does MLM sell its products ? Great question. MLM operates through a broad network of independent distributors who promote products and strengthen the brand name. Distributors can earn profits by directly selling these products to customers, recruiting new members into their downline, and earning commissions from their sales. The commission structures in MLM often include various MLM bonuses , which reward distributors for their efforts and the performance of their team. As more people join the network, multiple levels are formed within the company, creating a pyramid-like structure where distributors at higher levels earn more than those at lower levels. However, regardless of their level, distributors can grow their business through consistent hard work and dedication. Unlike pyramid schemes, network marketing focuses on building healthy connections and promoting the company’s products and services, supported by attractive MLM bonuses and effective commis sion structures ."
];

const GUIDANCE_SECTIONS: SectionBlock[] = [
  {
    title: "Compensation plans",
    paragraphs: [
      "Starting an MLM requires a basic knowledge of compensation plans, which is the absolute pillar of direct selling businesses. You can become a successful network marketer if you possess complete knowledge of a wide range of MLM plans. The main purpose of these plans is to reward their distributors for their contributions. MLM plans are the financial models that outline the payment structure of a network marketing company. Compensation plans motivate entrepreneurs to work hard and achieve their goals. Each company adopts different plans based on its objectives."
    ],
    icon: Layers
  },
  {
    title: "Choosing the right Network marketing company",
    paragraphs: [
      "Start network marketing with proper research. You need to choose the right company before you invest in direct marketing. Look for a more reputed and authentic company to start your MLM. Check if it has a proven track record, an array of products, and a suitable compensation package."
    ],
    icon: GlobeHemisphereEast
  },
  {
    title: "Understand the products and services",
    paragraphs: [
      "You must be sincerely careful about the products you will be promoting. Before you can start your network marketing, spend some time fully comprehending the services being offered, their advantages, and how they differ from your competitors. Possess a good knowledge and understanding of the products, and make sure that they align with your passion and interest. This will inspire trust in team members and future clients."
    ],
    icon: Library
  },
  {
    title: "Set a business plan",
    paragraphs: [
      "Set up a business plan and outline your goals, objectives, and passion. Your MLM business will be much easier if you develop a suitable plan. You can work according to the plan and achieve progress in the long run."
    ],
    icon: NotebookPen
  },
  {
    title: "Build your network",
    paragraphs: [
      "The more people join your business, the more profit you will get. Network marketing is all about building and expanding your network. You can build a network marketing business by reaching out to your friends and family. You can eventually expand the network once a certain number of people join."
    ],
    icon: Users
  },
  {
    title: "Leverage social media platforms & Tools",
    paragraphs: [
      "The most effective way to reach more people is through social media. Online marketing is a thing of the present and future. You can advertise your products through social media and catch the attention of many. And it is a cost-effective way to approach people who show interest in your services.",
      "As you grow your network, it’s important to understand What is MLM Software ? and how it can streamline your online marketing efforts. MLM software helps you manage your network, track sales, and automate key tasks, giving you more time to focus on building those valuable connections through social media."
    ],
    icon: Network
  },
  {
    title: "Training and support",
    paragraphs: [
      "In the course of your MLM journey, you can provide training and support to your team members. To help them with sales tactics, hiring, and general business growth, provide frequent training sessions, webinars, and one-on-one coaching. A team that receives adequate assistance will be more inspired and effective."
    ],
    icon: Handshake
  }
];

const CONCLUSION_PARAGRAPH =
  "In a nutshell, this article provides you with detailed information on how to build a MLM business. It can be an appropriate business opportunity for those who are willing to put in the effort and dedication required. If you want to become a successful network marketer, Let us help you. Visit Cloud MLM for updates.";

const AUTHOR_BIO =
  "Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate about utilizing technology to drive growth and optimize business processes. Adept at analyzing market dynamics, delivering actionable insights, and staying ahead of industry developments.";

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Align structure and strategy",
    description: "Solid foundations—plan design, leadership, and product-market fit—amplify every recruit’s impact.",
    icon: Compass
  },
  {
    title: "Fuel momentum with learning",
    description: "Continuous training and mentorship keep distributors confident, compliant, and inspired.",
    icon: Library
  },
  {
    title: "Scale through digital reach",
    description: "Social media and MLM software streamline outreach, tracking, and replication.",
    icon: Rocket
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "How to Start a Network Marketing Business";
  const description =
    "Follow a complete roadmap for launching a network marketing business—from structure and compensation plans to product readiness, social media, and support.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/how-to-start-a-network-marketing-business", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type StartNetworkMarketingPageProps = {
  params: { lang: SupportedLocale };
};

export default function StartNetworkMarketingPage({ params }: StartNetworkMarketingPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.3),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.25),transparent_60%)]" />
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
          <div className="space-y-8 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/50 bg-violet-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide">
              <Sparkles className="h-4 w-4" aria-hidden />
              Network launch plan
            </span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">How to start a network marketing business</h1>
            <p className="text-lg text-slate-200">
              Transform ambition into action with a step-by-step guide covering structure, planning, products, and the technology that powers modern MLM.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild className="bg-violet-500 text-white hover:bg-violet-400">
                <Link href={demoHref}>
                  Explore launch playbooks
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-violet-300/60 text-white hover:bg-white/10">
                <Link href={contactHref}>
                  Align with implementation teams
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-5 rounded-3xl border border-violet-400/40 bg-violet-500/10 p-8 backdrop-blur text-violet-100">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-wide">Foundational pillars</span>
              <Layers className="h-5 w-5 text-violet-200" aria-hidden />
            </div>
            <p className="text-sm text-violet-100/80">
              The best MLM launches balance compliant structures, energised distributors, and digital systems that make scaling repeatable.
            </p>
            <div className="space-y-4">
              {HIGHLIGHTS.map((highlight) => (
                <div key={highlight.title} className="rounded-2xl border border-violet-400/30 bg-violet-500/10 p-5">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-violet-200">
                    <highlight.icon className="h-5 w-5" aria-hidden />
                    {highlight.title}
                  </div>
                  <p className="mt-3 text-sm text-violet-100/80">{highlight.description}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-violet-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
            {INTRO_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-violet-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">The foundation of MLM company</h2>
          <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">{FOUNDATION_PARAGRAPH}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-violet-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">MLM Structure</h3>
          <div className="mt-4 space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
            {STRUCTURE_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-8 xl:grid-cols-2">
          {GUIDANCE_SECTIONS.map((section) => (
            <article
              key={section.title}
              className="space-y-4 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-lg shadow-violet-100 transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-2xl bg-violet-100/80 p-3 text-violet-700 dark:bg-violet-500/20 dark:text-violet-200">
                  <section.icon className="h-6 w-6" aria-hidden />
                </span>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{section.title}</h4>
              </div>
              <div className="space-y-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-violet-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">Conclusion</h3>
          <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">{CONCLUSION_PARAGRAPH}</p>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-10 text-center shadow-lg shadow-violet-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-wide text-violet-700 dark:text-violet-200">About the author</p>
          <p className="mt-6 text-2xl font-semibold text-slate-900 dark:text-white">Edward</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">Research Analyst</p>
          <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-300">{AUTHOR_BIO}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              variant="outline"
              className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              <Link href={demoHref}>
                Review platform capabilities
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild className="bg-violet-500 text-white hover:bg-violet-400">
              <Link href={contactHref}>
                Speak with solution architects
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
