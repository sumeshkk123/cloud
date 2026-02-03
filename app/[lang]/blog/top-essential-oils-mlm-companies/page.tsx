import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { Button } from "@/components/ui/button";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  Drop,
  FlowerLotus,
  HandCoins,
  ListChecks,
  Sparkle,
  StarFour,
  TrendUp,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";
import { ArrowRight } from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Benefit = {
  title: string;
  description: string;
};

type TableEntry = {
  rank: number;
  company: string;
  country: string;
  founder: string;
  founded: string;
};

type CompanyCard = {
  name: string;
  summary: string;
  founded: string;
  founder: string;
  products: string;
  country: string;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO = {
  title: "Top 10 essential oils MLM companies 2025",
  summary:
    "Looking to earn with wellness products? Discover the top 10 MLM essential oil companies offering high-quality oils and strong income opportunities.",
  author: "Reja Rapheekh",
  date: "June 5, 2025"
};

const INTRO_PARAGRAPHS = [
  "Nowadays, essential oils are getting popular attention and are used for various purposes. If you are thinking of turning your passion for essential oils into a business, then MLM is a good opportunity. Aromatherapy is a growing industry for entrepreneurs who want to succeed in MLM business.",
  "In this write-up, we are going to talk about the top 10 MLM essential oil companies that offer great products and support to budding entrepreneurs. Have a look, and these companies will help you build a rewarding career by sharing the natural benefits of essential oils."
];

const BENEFITS: Benefit[] = [
  {
    title: "Flexibility",
    description:
      "MLM companies allow you to balance your working hours with personal commitments. You can set up your working hours according to your convenience."
  },
  {
    title: "Training and Support",
    description:
      "Renowned MLM companies offer extensive training and support for individuals, especially for beginners. Their training covers workshops, educational materials, and webinars. This sense of community creates a collaborative environment."
  },
  {
    title: "Financial Growth",
    description:
      "MLM gives you the flexibility to earn income based on your effort and performance. Unlike traditional jobs, network marketing does not have a fixed salary, but you can earn without limits if you are committed to your work."
  }
];

const CRITERIA: Benefit[] = [
  {
    title: "Quality of essential oils",
    description:
      "High-quality essential oils come from reputable sources and are distilled to preserve their therapeutic benefits. Choose companies that are transparent about sourcing and offer third-party testing to verify purity and potency."
  },
  {
    title: "Compensation plan",
    description:
      "MLM companies should reward employees for their personal sales and team-building efforts. Always choose a company that offers clear commission structures, attainable bonuses, and real-time earnings tracking."
  },
  {
    title: "Support and training",
    description:
      "The success of a MLM business depends heavily on the sales efforts of the distributors, and to boost productivity, reputable MLM companies provide the best training programs, marketing tools, and ongoing support to employees."
  }
];

const TOP_COMPANIES: TableEntry[] = [
  { rank: 1, company: "Young Living", country: "United States", founder: "Donald Gary Young", founded: "1993" },
  { rank: 2, company: "doTERRA", country: "United States", founder: "David Stirling", founded: "2008" },
  { rank: 3, company: "Plant Therapy", country: "United States", founder: "Chris Jones", founded: "2011" },
  { rank: 4, company: "Eden’s Garden", country: "United States", founder: "Grace Martin", founded: "2009" },
  { rank: 5, company: "Revive Essential Oils", country: "United States", founder: "Alexandria George", founded: "2018" },
  { rank: 6, company: "Rocky Mountain Oils", country: "United States", founder: "Michael and Phoenix", founded: "2004" },
  { rank: 7, company: "Forever Living Products", country: "United States", founder: "Rex Maughan", founded: "1978" },
  { rank: 8, company: "Simply Earth", country: "United States", founder: "Dustin Veldkamp", founded: "2015" },
  { rank: 9, company: "Nature’s Sunshine", country: "United States", founder: "Gene and Kristine Hughes", founded: "1972" },
  { rank: 10, company: "Be Young Total Health", country: "United States", founder: "Dana Clay Young", founded: "2010" }
];

const COMPANY_PROFILES: CompanyCard[] = [
  {
    name: "Young Living",
    summary:
      "With 25 years of experience, Young Living sets high standards for purity and potency. The company’s seed-to-seal process ensures perfection from planting to bottling, offering a wide range of single oils, blends, and essential oil-infused products for wellness needs.",
    founded: "1993",
    founder: "Donald Gary Young",
    products: "Single essential oils, blends, diffusers, supplements, personal care items, and household products.",
    country: "United States"
  },
  {
    name: "doTERRA",
    summary:
      "The MLM company, doTERRA is known for their premium essential oils or certified pure therapeutic grade oils. They offer a wide range of essential oils and wellness products for aromatherapy needs. Its compensation plan rewards both sales and team-building, with bonuses and a loyalty program. Distributors receive training through online courses, webinars, and live events.",
    founded: "2008",
    founder: "David Stirling",
    products: "Single essential oils, proprietary blends, wellness supplements, personal care products, and diffusers.",
    country: "United States"
  },
  {
    name: "Plant Therapy",
    summary:
      "Plant Therapy is known for high-quality, transparently sourced essential oils and wellness products. Its simple compensation plan offers retail profits, team commissions, and bonuses for growth. Distributors benefit from strong training resources and a supportive community. The company emphasizes customer education with detailed product info, blogs, videos, and eBooks.",
    founded: "2011",
    founder: "Chris Jones",
    products: "Essential oils, carrier oils, diffusers, body care products, and aromatherapy accessories",
    country: "United States"
  },
  {
    name: "Eden’s Garden",
    summary:
      "Eden’s Garden offers high-quality, affordable essential oils with strict sourcing and testing standards. Its simple compensation plan includes retail profits, team commissions, and bonuses. Distributors receive strong educational support through courses, webinars, and community resources. The company is also committed to social responsibility, supporting environmental and community causes.",
    founded: "2009",
    founder: "Grace Martin",
    products: "Single essential oils, synergy blends, carrier oils, body oils, natural bar soaps, salt soaks, and perfumes.",
    country: "United States"
  },
  {
    name: "Revive Essential Oils",
    summary:
      "Revive Essential Oils offers pure, affordable products sourced from trusted growers and distillers. Its simple compensation plan includes retail profits, team commissions, and advancement bonuses. Distributors get strong support through online training, webinars, and a helpful community. The company emphasizes transparency and education with detailed sourcing info and learning resources.",
    founded: "2018",
    founder: "Alexandria George",
    products: "Single essential oils, blends, roll-ons, and essential oil-infused cleaning products.",
    country: "United States"
  },
  {
    name: "Rocky Mountain Oils",
    summary:
      "Rocky Mountain Oils offers high-quality, sustainably sourced essential oils from trusted growers. Its fair, transparent compensation plan supports both sales and team-building with bonus opportunities. Distributors benefit from robust training via courses, webinars, and a supportive community. The company emphasizes sustainability and ethics, appealing to environmentally-conscious consumers.",
    founded: "2004",
    founder: "Michael and Phoenix",
    products: "Essential oils, blends, diffusers, and natural skin care products",
    country: "United States"
  },
  {
    name: "Forever Living Products",
    summary:
      "Forever Living Products is a multi-level marketing company renowned for its aloe vera-based health and wellness goods, including a selective line of essential oils. The brand promotes wellness through nature-inspired solutions and offers a global business opportunity. Its essential oils are derived from carefully sourced botanicals and support aromatherapy, relaxation, and well-being. The MLM model rewards distributors through product sales and team growth incentives.",
    founded: "1978",
    founder: "Rex Maugham",
    products: "Single essential oils, blends, diffusers, supplements, personal care items, and household products.",
    country: "United States"
  },
  {
    name: "Simply Earth",
    summary:
      "Simply Earth offers pure, high-quality essential oils sourced from trusted growers and distillers. Its unique subscription box model promotes loyalty and repeat purchases. The compensation plan supports sales and team growth, with strong training and community support. The company donates to anti-human trafficking efforts, emphasizing social responsibility.",
    founded: "2015",
    founder: "Dustin Veldkamp",
    products: "Essential oils, DIY recipe boxes, and natural home products.",
    country: "United States"
  },
  {
    name: "Nature’s Sunshine",
    summary:
      "Nature’s Sunshine offers high-quality essential oils and wellness products with strict sourcing and testing. Its compensation plan supports sales and team growth, with bonuses and strong mentorship. Distributors benefit from online training, webinars, and live events. The company emphasizes sustainability and social responsibility through ethical sourcing and charitable initiatives.",
    founded: "1972",
    founder: "Gene and Kristine Hughes",
    products: "Herbal supplements, essential oils, and wellness products.",
    country: "United States"
  },
  {
    name: "Be Young Total Health",
    summary:
      "Be Young Total Health offers pure, high-quality essential oils with rigorous sourcing and testing. Its fair compensation plan supports both individual sales and team growth, with bonus opportunities. Distributors benefit from strong training, education, and a supportive community. The company emphasizes transparency and social responsibility, appealing to ethical consumers.",
    founded: "2010",
    founder: "Dana Clay Young",
    products: "Essential oils, nutritional supplements, and wellness products.",
    country: "United States"
  }
];

const COMPENSATION_PARAGRAPHS = [
  "If you want to maximize your earnings, you should give importance to MLM compensation plans. A strong plan rewards both sales and team building and offers retail profits, commissions, and bonuses. These MLM essential oil companies achieve long-term income through loyalty programs that encourage repeat purchases and customer retention.",
  "To succeed in MLM, utilize training and support resources that your company offers. Big brands provide online courses, webinars, and mentorship to help you flourish your business. You can build a loyal customer base with the right tools, support, and commitment. Prepare yourself to earn steady income over time."
];

const CONCLUSION_PARAGRAPHS = [
  "The MLM wellness industry is all about earning by promoting good-quality wellness products that range from essential oils to nutritional supplements. The companies listed above belong to the top MLM essential oil companies with great product quality, ethical sourcing, transparent compensation plans, and support.",
  "MLM companies offer unique advantages in terms of sustainability, education, income potential, and much more. By utilizing the training and community support, you can effortlessly build a rewarding and sustainable business."
];

const FAQS: Faq[] = [
  {
    question: "What are the top essential oil MLM companies in 2025?",
    answer:
      "In 2025, doTERRA, Young Living, Forever Living Products, Scentsy, and Melaleuca are the top essential oil MLM companies. They are known for their high-quality products and strong networks of distributors."
  },
  {
    question: "How do essential oil MLM compensation plans work?",
    answer:
      "Majority essential oil MLM companies pay their members based on the number of sales they make, the size of their team. For example, Forever Living pays its employees 15% to 48% of their sales, plus bonuses and incentives for being a good leader."
  },
  {
    question: "Are essential oils from MLM companies better quality than retail brands?",
    answer:
      "MLM companies like doTERRA and Young Living talk a lot about their purity standards (like CPTG and Seed to Seal), but the quality isn’t always the same. Some brands that aren’t part of an MLM also sell high-quality oils without the MLM markup."
  },
  {
    question: "Is it profitable to join an essential oil MLM?",
    answer:
      "To make money in essential oil MLM business, you need to know how to sell, work well with others, and know what the market wants. MLMs let you earn money in a flexible way, but you won’t always be successful and you’ll need to work hard to build your customer base and downline."
  },
  {
    question: "Are MLM essential oils more expensive than other brands?",
    answer:
      "Yes, MLM oils often cost more because of the commissions they pay to several levels of distributors. By avoiding multi-tier commissions, non-MLM businesses can provide oils of similar quality at cheaper costs."
  }
];

const RELATED_RESOURCES = [
  {
    title: "The Ultimate Guide to MLM Affiliate Software",
    path: "/blog/mlm-affiliate-software",
    description: "Learn how affiliate acceleration complements network marketing growth."
  },
  {
    title: "AI and Shopify-MLM: The Future of Personalized Commission Planning",
    path: "/blog/ai-shopify-mlm",
    description: "See how commerce data and AI copilots reshape payouts for wellness brands."
  },
  {
    title: "MLM Back Office Software: Powering Growth in Your Network Marketing Business",
    path: "/blog/mlm-back-office-software",
    description: "Benchmark the operational stack that keeps global field teams aligned."
  },
  {
    title: "The 10 Best Direct Sales Software Tools to Try in 2025",
    path: "/blog/best-direct-sales-softwares",
    description: "Compare ecosystem tools that support onboarding, enablement, and retention."
  },
  {
    title: "Simplifying Overlay Bonuses with Compensation Software",
    path: "/blog/overlay-bonuses-simplified",
    description: "Understand how automation keeps complex bonus structures compliant."
  }
];

const AUTHOR = {
  name: "Reja Rapheekh",
  role: "Technical Writer/Copy Writer",
  bio: "A passionate technical writer with a knack for blending storytelling and technical expertise to create engaging and informative content. Specializes in copywriting, creative writing, and content development for media and marketing industries. Dedicated to delivering content that educates, informs, and captivates diverse audiences.",
  linkedin: "https://www.linkedin.com/in/reja-rapheekh-ba598824b/"
};

const DISCLAIMER =
  "Cloud MLM Software shares this information for educational purposes only. Evaluate the legal standing, product quality, and compensation terms of any MLM company before joining.";

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Top essential oil MLM companies in 2025";
  const description =
    "Review the leading essential oil MLM companies, the benefits of joining, and the criteria that keep product standards high.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/top-essential-oils-mlm-companies", locale)
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

export default function TopEssentialOilsMlmCompaniesPage({ params }: PageProps) {
  const locale = resolveLocale(params.lang);
  const consultingHref = buildLocalizedPath("/contact", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden rounded-[40px] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-purple-50 shadow-2xl dark:border-emerald-500/30 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_65%),radial-gradient(circle_at_bottom_right,rgba(147,51,234,0.16),transparent_70%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.28),transparent_70%),radial-gradient(circle_at_bottom_right,rgba(147,51,234,0.26),transparent_75%)]" />
        <div className="relative grid gap-12 px-6 py-16 sm:px-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] xl:px-20">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:border-emerald-500/40 dark:bg-slate-900/70 dark:text-emerald-200">
              Aromatherapy growth radar
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              {HERO.title}
            </h1>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{HERO.summary}</p>
            <div className="flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-300">
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Written by</p>
                <p>{HERO.author}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Published on</p>
                <p>{HERO.date}</p>
              </div>
            </div>
            <Button
              asChild
              className="rounded-full bg-emerald-600 px-6 py-2 text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400"
            >
              <Link href={consultingHref}>
                Connect with our consultants
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="relative rounded-3xl border border-white/60 bg-white/85 p-8 shadow-2xl backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/80">
            <div className="space-y-6 text-sm leading-6 text-slate-700 dark:text-slate-200">
              <div className="flex items-center gap-3">
                <FlowerLotus className="h-6 w-6 text-emerald-600 dark:text-emerald-300" weight="fill" aria-hidden />
                <p className="font-semibold text-slate-900 dark:text-white">Purity & transparency</p>
              </div>
              <p>
                Essential oil leaders commit to traceable sourcing, rigorous testing, and education-led selling. This guide shows you who executes that playbook in 2025.
              </p>
              <div className="rounded-2xl border border-emerald-200/70 bg-emerald-50/80 p-5 text-emerald-800 shadow-sm dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200">
                <p className="text-xs font-semibold uppercase tracking-wide">Quick stat</p>
                <p className="mt-2 text-sm">
                  All ten companies reward hybrid success—personal sales plus community-building—with loyalty loops that keep customers replenishing.
                </p>
              </div>
              <div className="rounded-2xl border border-purple-200/70 bg-purple-50/80 p-5 text-purple-800 shadow-sm dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-200">
                <p className="text-xs font-semibold uppercase tracking-wide">What to expect</p>
                <p className="mt-2 text-sm">
                  Expect structured onboarding, omnichannel content, and compensation plans that pay for education just as much as for volume.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Introduction</h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
            {INTRO_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
          <div className="rounded-[32px] border border-emerald-200/80 bg-gradient-to-br from-emerald-50 via-white to-purple-50 p-8 shadow-xl dark:border-emerald-500/30 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/40">
            <div className="flex items-center gap-3">
              <Sparkle className="h-6 w-6 text-emerald-600 dark:text-emerald-300" weight="fill" aria-hidden />
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Benefits of joining an MLM essential oil company</h2>
            </div>
            <div className="mt-8 space-y-6">
              {BENEFITS.map((benefit, index) => (
                <div key={benefit.title} className="relative rounded-3xl border border-white/70 bg-white/95 p-6 shadow-sm dark:border-slate-800/50 dark:bg-slate-900/70">
                  <div className="absolute -left-4 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold text-white shadow-lg dark:bg-emerald-500">
                    {index + 1}
                  </div>
                  <div className="pl-6">
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">{benefit.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
              <div className="flex items-center gap-3">
                <ListChecks className="h-6 w-6 text-purple-600 dark:text-purple-300" weight="fill" aria-hidden />
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Criteria for evaluating essential oil MLM brands</h2>
              </div>
              <div className="mt-6 space-y-4">
                {CRITERIA.map((criterion) => (
                  <div key={criterion.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 dark:border-slate-700 dark:bg-slate-900/60">
                    <p className="font-semibold text-slate-900 dark:text-white">{criterion.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                      {criterion.description.includes("success of a MLM business") ? (
                        <>
                          {criterion.description.split("success of a MLM business")[0]}
                          <Link
                            href={buildLocalizedPath(
                              "/blog/how-do-people-achieve-success-in-network-marketing",
                              locale
                            )}
                            className="text-purple-600 underline-offset-4 hover:underline dark:text-purple-300"
                          >
                            success of a MLM business
                          </Link>
                          {criterion.description.split("success of a MLM business")[1]}
                        </>
                      ) : (
                        criterion.description
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <StarFour className="h-6 w-6 text-emerald-600 dark:text-emerald-300" weight="fill" aria-hidden />
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">List of top 10 essential oils MLM companies</h2>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-700">
              <thead className="bg-emerald-500/90 text-left text-xs font-semibold uppercase tracking-wide text-white dark:bg-emerald-600/80">
                <tr>
                  <th className="px-4 py-3">SL.No</th>
                  <th className="px-4 py-3">Company</th>
                  <th className="px-4 py-3">Country</th>
                  <th className="px-4 py-3">Founder</th>
                  <th className="px-4 py-3">Year founded</th>
                </tr>
              </thead>
              <tbody>
                {TOP_COMPANIES.map((entry) => (
                  <tr
                    key={entry.rank}
                    className={cn(
                      "transition",
                      entry.rank % 2 === 0
                        ? "bg-white dark:bg-slate-900/60"
                        : "bg-slate-50/80 dark:bg-slate-900/40"
                    )}
                  >
                    <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">{entry.rank}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-200">{entry.company}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-200">{entry.country}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-200">{entry.founder}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-200">{entry.founded}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="flex items-center gap-3">
          <Drop className="h-6 w-6 text-purple-600 dark:text-purple-300" weight="fill" aria-hidden />
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Overview of the best 10 essential oils MLM companies</h2>
        </div>
        <div className="space-y-6">
          {COMPANY_PROFILES.map((company, index) => (
            <div
              key={company.name}
              className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="absolute right-8 top-8 h-12 w-12 rounded-full bg-gradient-to-br from-emerald-200 to-purple-200 opacity-50 blur-2xl dark:from-emerald-500/20 dark:to-purple-500/20" />
              <div className="relative grid gap-6 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold text-white shadow-lg dark:bg-emerald-500">
                      {index + 1}
                    </span>
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{company.name}</h3>
                  </div>
                  <p className="text-sm leading-7 text-slate-700 dark:text-slate-200">{company.summary}</p>
                </div>
                <dl className="grid gap-3 text-sm text-slate-700 dark:text-slate-200">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-700 dark:bg-slate-900/60">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Founded
                    </dt>
                    <dd className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{company.founded}</dd>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-700 dark:bg-slate-900/60">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Founder
                    </dt>
                    <dd className="mt-1 font-medium">{company.founder}</dd>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-700 dark:bg-slate-900/60">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Products
                    </dt>
                    <dd className="mt-1 leading-6">{company.products}</dd>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-700 dark:bg-slate-900/60">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Country
                    </dt>
                    <dd className="mt-1 font-medium">{company.country}</dd>
                  </div>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <HandCoins className="h-6 w-6 text-emerald-600 dark:text-emerald-300" weight="fill" aria-hidden />
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Compensation plans: How to maximize your earnings</h2>
        </div>
        <div className="rounded-[32px] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-purple-50 p-8 shadow-xl dark:border-emerald-500/30 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/40">
          <div className="space-y-4 text-sm leading-7 text-slate-700 dark:text-slate-200">
            {COMPENSATION_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-5">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Conclusion</h2>
        <div className="space-y-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
          {CONCLUSION_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>
              {paragraph.includes("MLM companies offer unique advantages") ? (
                <>
                  {paragraph.split("MLM companies ")[0]}
                  <Link
                    href={buildLocalizedPath("/blog/top-100-mlm-companies-in-the-world-as-of-2022", locale)}
                    className="text-emerald-600 underline-offset-4 hover:underline dark:text-emerald-300"
                  >
                    MLM companies
                  </Link>
                  {` ${paragraph.split("MLM companies ")[1]}`}
                </>
              ) : (
                paragraph
              )}
            </p>
          ))}
        </div>
      </section>

      <section className="container grid gap-8 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)]">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex items-center gap-3">
            <UsersThree className="h-6 w-6 text-purple-600 dark:text-purple-300" weight="fill" aria-hidden />
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-5">
            {FAQS.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 dark:border-slate-700 dark:bg-slate-900/60">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{faq.question}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-7 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
            <div className="flex items-center gap-3">
              <TrendUp className="h-5 w-5 text-emerald-600 dark:text-emerald-300" weight="fill" aria-hidden />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Disclaimer</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{DISCLAIMER}</p>
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-xl font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Related resources</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RELATED_RESOURCES.map((resource) => (
            <Link
              key={resource.path}
              href={buildLocalizedPath(resource.path, locale)}
              className="group flex h-full flex-col gap-3 rounded-3xl border border-slate-200 bg-white/90 p-6 text-sm font-semibold text-slate-800 transition hover:-translate-y-1 hover:border-emerald-400 hover:bg-white hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-emerald-400"
            >
              <span>{resource.title}</span>
              <span className="text-xs font-normal leading-6 text-slate-600 transition group-hover:text-emerald-500 dark:text-slate-300">
                {resource.description}
              </span>
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition group-hover:text-emerald-500 dark:text-slate-400">
                Read article
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-xl font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">About the author</h2>
        <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl md:grid-cols-[auto_1fr] dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
            <UsersThree className="h-10 w-10" aria-hidden />
          </div>
          <div className="space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
            <div>
              <p className="text-2xl font-semibold text-slate-900 dark:text-white">{AUTHOR.name}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{AUTHOR.role}</p>
            </div>
            <p>{AUTHOR.bio}</p>
            <Link
              href={AUTHOR.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 underline-offset-4 hover:underline dark:text-emerald-300"
            >
              Connect on LinkedIn
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
