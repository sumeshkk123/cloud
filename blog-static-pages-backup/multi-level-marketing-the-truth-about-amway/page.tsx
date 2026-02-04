import type { Metadata } from "next";
import Link from "next/link";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Flag, Globe, Scale, ShieldCheck } from "lucide-react";

export const dynamic = "force-static";

const INTRO_HEADING = "What is so unique about Amway?";
const INTRO_PARAGRAPHS = [
  "This write-up will explore Amway as a multi-level marketing company and the ultimate truth about Amway. Stay tuned!",
  "Amway multi level marketing has become a catchphrase among network marketing companies all over the world. It is one of the biggest and most successful MLM companies on earth. It has strengthened its roots and expanded across almost six continents with millions of independent business owners, including some of the Top MLM earners who have built inspiring careers under its business model. Let’s investigate whether Amway is legit and travel back to the birth of Amway’s expedition toward infinite success."
];

const JOURNEY_HEADING = "Amway’s journey to never-ending success";
const JOURNEY_QUOTE = "\"Helping people live better, healthier lives\"";
const JOURNEY_PARAGRAPHS = [
  "Who will not fall for these beautiful words? Yes, this is the slogan of Amway, the most reputed brand and well-known direct-selling company in the world. Amway is an international multi-level marketing company that inspires millions of people with its services. They know what their customers want. They promote and sell a wide range of health, wellness, fitness, and beauty products to their prospects from different corners of the continent.",
  "Amway has been operating since 1959, marking 60 golden years in the history of direct selling. It not only provides quality products to customers but also empowers the entrepreneurial dreams of individual distributors within and outside of the organization."
];

const FOUNDERS_HEADING = "Masterminds of Amway";
const FOUNDERS_PARAGRAPHS = [
  "Rich DeVos and Jay Van Andel, the founders of Amway multi level marketing, pursued their dreams of becoming independent entrepreneurs with the intention of helping others. The American Way Association was their start-up, later known as Amway. The business started off by only offering one item, Liquid organic cleaner, and it was run out of the basements of their houses. The founders invested a lot of time and effort into growing their company since they had an entrepreneurial spirit and believed in the potential of direct selling.",
  "Amway began to flourish during the 1950s and 1960s with the introduction of a range of household cleaning products and developed a unique business model named ‘Amway sales and marketing plan’. This model framed the idea of network marketing by emphasizing the sale of products through a broad network of distributors who could earn active income by directly selling Amway products to its customers, also recruiting others to join the business model and earn commissions from their sales."
];

const NET_WORTH_HEADING = "The net worth of Amway";
const NET_WORTH_PARAGRAPHS = [
  "Amway multi level marketing has broadened its presence in multiple countries and markets worldwide. They own diverse products and have millions of followers. Over the years, Amway has developed a community of people who use healthcare and homecare products. Over the years, Amway has attained significant popularity and become one of the biggest direct-selling platforms.",
  "The net worth of Amway is determined by various factors such as revenue, market value, assets, and various other investments.",
  "\"For more than 60 years, Amway has focused on helping entrepreneurs build rewarding businesses by providing customers with health and wellness solutions that help them live better, healthier lives\" – Milind Pant ( Amway chief executive officer ).",
  "He elaborates on the increase in their Nutrition category. In addition, their overall growth in health care, beauty, skincare, and makeup is mentioned. Amway is a global company with a significant presence in the direct selling industry. It operates in multiple countries and offers a wide range of products. Over the years, Amway has generated substantial revenue and established itself as one of the largest MLM companies worldwide."
];

const SCHEME_HEADING = "Is Amway a pyramid scheme?";
const SCHEME_PARAGRAPHS = [
  "What is the truth about Amway? Are their operations based on pyramid schemes? Let’s find out!",
  "Amway, the most successful direct-selling company in the world, has been subjected to many debates and controversies.  Amway operates on multi-level marketing schemes, in which sales are primarily executed through a network of independent sales representatives or distributors. MLM businesses work by enlisting distributors who receive commissions from both their own sales and the sales of the distributors they enlist. The structure of MLMs has drawn criticism since it bears a resemblance to pyramid scheme structures. Before delving into MLM structures, Let us make a comparison between pyramid schemes and MLM."
];

const DIFFERENCE_HEADING = "Difference between MLM and pyramid scheme";
const DIFFERENCE_PARAGRAPHS = [
  "The major difference between MLM and pyramid schemes is that MLM Companies focus more on selling products and services than enrolling new members in the network. Whereas, pyramid schemes give importance to recruiting new participants and need them to make a payment or investment to join. Moreover, reputable MLM businesses adhere to rules and regulations, offer a real product or service, and make money by selling their goods to various customers. Since the main source of income for pyramid schemes is investments made by new members, they are prohibited in most nations. Their organizational structure is unsustainable since it depends on ongoing hiring to maintain rewards."
];

const NOT_PYRAMID_HEADING = "How is Amway, not a pyramid scheme?";
const NOT_PYRAMID_PARAGRAPHS = [
  "Amway is a legally recognized Network Marketing company. It is a product-based company that operates under the laws and regulations of various countries. The products are tangible and are sold by independent business owners of Amway. It is important to note that the negative perceptions and allegations about Amway as a scam stem from people who often had misconceptions about its business model and had bad experiences."
];

const CONCLUSION_PARAGRAPHS = [
  "In this write-up, we analyzed the business structure of Amway multi level marketing and uncovered some key facts about its operations. Amway is indeed a legitimate business model that offers high-quality products to its potential customers. It’s important to remember that the Amway scam stories reflect the personal viewpoints and experiences of the individuals involved, and may not necessarily represent the company as a whole."
];

const CTA_HEADING = "Want to launch an MLM company like Amway?";
const CTA_PARAGRAPHS = [
  "We’ll help you implement an accurate and transparent marketing plan with our MLM software."
];
const CTA_LINK_TEXT = "Let’s discuss it";

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
  const title = "Multi-Level Marketing: The Truth About Amway";
  const description =
    "Trace Amway’s origin story, business model, global expansion, and why it’s classified as a legitimate MLM—not a pyramid scheme—along with insights for launching your own brand.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/multi-level-marketing-the-truth-about-amway", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AmwayTruthPageProps = {
  params: { lang: SupportedLocale };
};

export default function AmwayTruthPage({ params }: AmwayTruthPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-teal-100/70 bg-teal-50/60 py-20 shadow-2xl dark:border-teal-500/30 dark:bg-slate-950/40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.35),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.28),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.18),transparent_60%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.2),transparent_70%)]" />
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-teal-200/50 blur-3xl dark:bg-teal-500/20" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-500/20" />
        <div className="container relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700 dark:border-teal-500/40 dark:bg-slate-900/70 dark:text-teal-200">
              <Globe className="h-4 w-4" aria-hidden />
              Spotlight
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              Multi-level marketing: the truth about Amway
            </h1>
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{INTRO_HEADING}</h2>
            {INTRO_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="space-y-4 rounded-3xl border border-white/70 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/60">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Key takeaway</p>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                Amway’s growth story hinges on high-quality products, an empowered distributor network, and compliance-first operations—not
                recruitment-only tactics.
              </p>
            </div>
            <div className="rounded-2xl border border-teal-100 bg-teal-50/80 p-6 dark:border-teal-500/30 dark:bg-teal-500/10">
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-700 dark:text-teal-200">Why it matters</p>
              <p className="mt-2 text-sm leading-6 text-teal-900 dark:text-teal-100">
                Understanding established MLM frameworks helps you launch responsibly, safeguard your reputation, and build lasting customer
                trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)]">
          <div className="space-y-6 rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
            <div className="inline-flex items-center gap-3">
              <Flag className="h-6 w-6 text-teal-600 dark:text-teal-300" aria-hidden />
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{JOURNEY_HEADING}</h2>
            </div>
            <p className="text-base font-semibold leading-7 text-slate-800 dark:text-slate-100">{JOURNEY_QUOTE}</p>
            {JOURNEY_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="space-y-6 rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
            <div className="inline-flex items-center gap-3">
              <Building2 className="h-6 w-6 text-teal-600 dark:text-teal-300" aria-hidden />
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{FOUNDERS_HEADING}</h2>
            </div>
            {FOUNDERS_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
          <div className="inline-flex items-center gap-3">
            <Globe className="h-6 w-6 text-teal-600 dark:text-teal-300" aria-hidden />
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{NET_WORTH_HEADING}</h2>
          </div>
          <div className="mt-6 space-y-4">
            {NET_WORTH_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
            <div className="inline-flex items-center gap-3">
              <Scale className="h-6 w-6 text-teal-600 dark:text-teal-300" aria-hidden />
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{SCHEME_HEADING}</h2>
            </div>
            {SCHEME_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="space-y-6 rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
            <div className="inline-flex items-center gap-3">
              <Scale className="h-6 w-6 text-teal-600 dark:text-teal-300" aria-hidden />
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{DIFFERENCE_HEADING}</h2>
            </div>
            {DIFFERENCE_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
          <div className="inline-flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-teal-600 dark:text-teal-300" aria-hidden />
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{NOT_PYRAMID_HEADING}</h2>
          </div>
          <div className="mt-6 space-y-4">
            {NOT_PYRAMID_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Conclusion</h2>
        {CONCLUSION_PARAGRAPHS.map((paragraph) => (
          <p key={paragraph} className="text-base leading-7 text-slate-700 dark:text-slate-200">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="container">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,300px)]">
          <div className="space-y-4 rounded-3xl border border-teal-100 bg-teal-50/80 p-8 shadow-xl dark:border-teal-500/30 dark:bg-teal-500/10">
            <h2 className="text-2xl font-semibold text-teal-900 dark:text-teal-100">{CTA_HEADING}</h2>
            {CTA_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-6 text-teal-900 dark:text-teal-100">
                {paragraph}
              </p>
            ))}
            <Button
              asChild
              className="mt-4 bg-teal-600 text-white hover:bg-teal-500 dark:bg-teal-500 dark:hover:bg-teal-400"
            >
              <Link href={contactHref}>
                {CTA_LINK_TEXT}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">About the author</p>
            <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{AUTHOR.name}</p>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{AUTHOR.role}</p>
            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{AUTHOR.bio}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
