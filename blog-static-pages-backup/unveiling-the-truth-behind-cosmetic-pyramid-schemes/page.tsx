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
  Warning,
  Eye,
  Flag,
  HandHeart,
  Lightning,
  ShoppingBagOpen,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";
import { ArrowRight } from "lucide-react";

export const dynamic = "force-static";

type RedFlag = {
  title: string;
  description: string;
};

type TableRow = {
  company: string;
  country: string;
  revenue: string;
  founded: string;
};

type HighlightCard = {
  name: string;
  paragraphs: string[];
};

type Faq = {
  question: string;
  answer: string;
};

const INTRO_PARAGRAPHS = [
  "Who doesn’t want to look stunning and glamorous? I was debating over beauty products with my mom who doesn’t allow me to spend a single penny on cosmetics. From the minute I started earning, the first thing I bought was a basket full of my favorite lipsticks.",
  "Be it a night out with my girlfriends or a blind date, I love to enhance my beauty with my favorite products. When we girls walk out of the door, we tend to dress up and groom ourselves. Who wouldn’t want to be the show-stopper?",
  "The power of makeup bestows young girls. From lip glosses to eye shadows, these products offer a canvas of self-expression which allows them to enhance their radiant beauty. There is an emotional connection between makeup products and a new generation of women administrators– this resonates deeply with them.",
  "The impact of cosmetics on women is huge. Sometimes, it is not about the beauty, but an expression of confidence. Therefore, we should choose the best MLM makeup products that are safe and provide desirable results."
];

const MLM_COSMETICS_PARAGRAPH =
  "In recent years, the beauty and skincare industry has witnessed a surge in the popularity of multi-level marketing companies. Network marketing or MLM business has become a way for individuals to earn money by selling beauty and skincare products and recruiting others to join their teams. However, makeup pyramid schemes have also become a controversial part of this industry, raising concerns about their legitimacy.";

const PYRAMID_PSYCHOLOGY_PARAGRAPH =
  "Have you ever wondered how people are dragged to illegal business opportunities? There is a psychology behind this. These individuals typically look for people who are vulnerable and admirable—not only with promises of money but also with offers of compliments and attention. Once the trust is gained, they will pitch the pyramid scheme as a unique and secret opportunity. In these schemes, recruiters emotionally blackmail the prospective members and will be criticized for a lack of ambition in case they question or decline.";

const PYRAMID_DESCRIPTION_PARAGRAPH =
  "Cosmetic pyramid schemes, also known as beauty MLMs, operate under a business model that relies heavily on recruitment and hierarchical structures. Participants are promised financial success by selling products and recruiting others into the scheme. These schemes often promote the idea of making money while promoting beauty products. In this plan, the core network marketing strategies EVOLVE around recruiting new members, rather than the actual sales of products or services.";

const RED_FLAGS: RedFlag[] = [
  {
    title: "Over-emphasis on recruitment",
    description:
      "This is one of the telltale signs of a cosmetic pyramid scheme. Their overwhelming attention on recruitment rather than the actual product sales will give you a glimpse of doubt. In such schemes, participants are encouraged to build a team of recruits, often with promises of high commissions for every new member they bring in."
  },
  {
    title: "Exaggerated income claims",
    description:
      "Watch out for lavish income guarantees that promise huge returns with little work. These assertions are frequently exaggerated and may induce people to make substantial financial commitments with no guarantee of return."
  },
  {
    title: "High-startup costs and Inventory purchases",
    description:
      "Legitimate MLMs often have cheap initial expenses and don’t demand exorbitant stock purchases from their members. Contrarily, pyramid schemes may force participants to purchase enormous amounts of goods, thus putting them under financial difficulty."
  },
  {
    title: "Lack of transparency",
    description:
      "Lack of transparency should be noted. Legitimate MLM companies provide accurate and authentic information regarding their products and services, compensation plans, company history, track records, and so on. Pyramid schemes, on the other hand, are evasive and may withhold crucial details about their company’s operations."
  },
  {
    title: "Products are overpriced or of Low quality",
    description:
      "Some cosmetics pyramid schemes may offer products that are either significantly overpriced or subpar quality. This can make it difficult for participants to sell the products to consumers, further emphasizing the recruitment-driven nature of the scheme."
  }
];

const TABLE_ROWS: TableRow[] = [
  { company: "Avon", country: "USA", revenue: "4,000", founded: "1886" },
  { company: "Mary Kay", country: "USA", revenue: "2,800", founded: "1963" },
  { company: "Oriflame", country: "Sweden", revenue: "1,200", founded: "1967" },
  { company: "Amway (Artistry)", country: "USA", revenue: "1,100", founded: "1959" },
  { company: "Younique", country: "USA", revenue: "400", founded: "2012" },
  { company: "Natura", country: "Brazil", revenue: "3,500", founded: "1969" },
  { company: "Nu Skin", country: "USA", revenue: "2,000", founded: "1984" },
  { company: "Jeunesse", country: "USA", revenue: "1,000", founded: "2009" },
  { company: "Arbonne", country: "USA", revenue: "800", founded: "1980" },
  { company: "L’Bel (Belcorp)", country: "Peru", revenue: "900", founded: "1968" }
];

const COMPANY_CARDS: HighlightCard[] = [
  {
    name: "Mary Kay",
    paragraphs: [
      "Founded in 1963, Mary Kay empowers women through its beauty products and entrepreneurial opportunities, with a global presence in over 40 countries.",
      "CEO: Deborah K. Heisz",
      "Major Products: True Color Lipsticks, TimeWise skincare, Mineral Powder Foundation"
    ]
  },
  {
    name: "Avon",
    paragraphs: [
      "A pioneer since 1886, Avon is a household name with a vast network of 6.4 million representatives, offering affordable beauty solutions.",
      "CEO: David H. McConnell",
      "Major Products: Glimmer Eyeliners, Anew skincare, Far Away fragrances"
    ]
  },
  {
    name: "Amway",
    paragraphs: [
      "Founded in 1959 in Ada, Michigan, Amway is the world’s #1 direct-selling company, offering health, beauty, and home products in over 100 countries through Independent Business Owners.",
      "CEO: Michael Nelson",
      "Major Products: Nutrilite vitamins, Artistry skincare, eSpring water treatment systems"
    ]
  },
  {
    name: "Nu Skin",
    paragraphs: [
      "Since 1984, Nu Skin focuses on anti-aging and innovative skincare, with over 200 products in 54 countries.",
      "CEO: Steven J. Lund",
      "Major Products: ageLOC skincare, Epoch skincare, Nu Skin 180°"
    ]
  },
  {
    name: "Oriflame",
    paragraphs: [
      "A Swedish brand since 1967, Oriflame offers natural-ingredient cosmetics in 62 countries.",
      "CEO: Magnus Brännström",
      "Major Products: NovAge skincare, Giordani Gold makeup, Tender Care balm"
    ]
  },
  {
    name: "Arbonne",
    paragraphs: [
      "Founded in 1980, Arbonne promotes vegan, cruelty-free beauty with eco-friendly packaging.",
      "CEO: Petter Mørck",
      "Major Products: RE9 Advanced skincare, Arbonne Intelligence makeup, True Hair products"
    ]
  },
  {
    name: "Younique",
    paragraphs: [
      "Since 2012, Younique leverages social media and AR tools for cruelty-free cosmetics sales.",
      "CEO: Derek Maxfield",
      "Major Products: Moodstruck Epic Mascara, Touch Mineral Foundation, LipSense"
    ]
  },
  {
    name: "Belcorp",
    paragraphs: [
      "A Peruvian brand since 1968, Belcorp empowers women with beauty products across 14 countries.",
      "CEO: Eduardo Belmont",
      "Major Products: L’Bel skincare, Ésika makeup, Cyzone fragrances"
    ]
  },
  {
    name: "Natura",
    paragraphs: [
      "Founded in 1969 in São Paulo, Brazil, Natura is a leader in sustainable cosmetics, using Amazonian biodiversity and direct sales in 14 countries with 3.5 million consultants.",
      "CEO: João Paulo Ferreira",
      "Major Products: Ekos skincare, Bothânica home care, Kaiak fragrances"
    ]
  },
  {
    name: "Jeunesse",
    paragraphs: [
      "Established in 2009, Jeunesse Global specializes in anti-aging skincare and wellness products, operating in over 80 countries with a focus on youth enhancement.",
      "CEO: Randy Ray",
      "Major Products: Luminesce skincare, NV BB Cream, Instantly Ageless serum"
    ]
  }
];

const ALLURE_PARAGRAPHS = [
  "We, women, love a glamorous lifestyle, right? Beauty companies give life to our main character energy. Think about the countless compliments you receive, the evolving trends to match with, and the magic of colors making you freshly beautiful every time you step out.",
  "Beauty MLMs promise lucrative earnings and a glamorous lifestyle to participants who sell products and recruit others into the scheme. Many people are drawn to the idea of working from home, setting their own schedules, and earning passive income."
];

const PERILS_PARAGRAPH =
  "The competition between makeup companies intensifies as more markets are saturated with such companies. This can lead to market oversaturation, making it difficult for distributors to sell products. The high level of competition also results in lower profit margins.";

const CONCLUSION_PARAGRAPHS = [
  "Beauty World is unstoppable. Let’s make choices through open communication and guidance and create a world of adventure, opportunity, and dreams.",
  "Visit our website and discover our write-ups that explore unique and relevant topics. We are happy to assist you and clear your doubts."
];

const FAQS: Faq[] = [
  {
    question: "What is a cosmetic pyramid scheme?",
    answer:
      "A cosmetic pyramid scheme is a business model that relies heavily on recruitment and hierarchical structures. Participants are promised financial success by selling products and recruiting others into the scheme."
  },
  {
    question: "How do I identify a skincare pyramid scheme?",
    answer:
      "Look for an overemphasis on recruitment, high startup costs, and a lack of transparency about products and company history. These are red flags that may indicate a skincare pyramid scheme."
  },
  {
    question: "Are all MLMs cosmetic pyramid schemes?",
    answer:
      "No, not all MLMs are pyramid schemes. Legitimate MLMs focus on product sales, offer fair compensation plans, and provide training and support for their distributors."
  },
  {
    question: "What are some of the best MLM makeup companies?",
    answer:
      "Reputable MLM makeup companies include established brands like Avon, Mary Kay, and Arbonne. It’s crucial to research and choose companies with a track record of success and integrity."
  },
  {
    question: "What are some of the best MLM makeup companies?",
    answer:
      "Reputable MLM makeup companies include established brands like Avon, Mary Kay, and Arbonne. It’s crucial to research and choose companies with a track record of success and integrity."
  },
  {
    question: "What are the dangers of participating in a cosmetic pyramid scheme?",
    answer:
      "Participants in cosmetic pyramid schemes often face financial losses due to high startup costs and recruitment-based MLM compensation plans . Additionally, it can strain personal relationships when participants are encouraged to recruit friends and family."
  }
];

const CTA = {
  heading: "Protect your beauty brand with ethical, compliant MLM software",
  description:
    "Automate payouts, track real product sales, and keep your consultants aligned with transparent dashboards built for modern cosmetics businesses.",
  label: "Consult our experts"
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
  const title =
    "Top 10 Makeup MLM Companies Exposed: Unveiling the Truth Behind Cosmetic Pyramid Schemes";
  const description =
    "Spot the red flags, compare the leading cosmetic MLM brands, and learn how to grow beauty ventures responsibly without slipping into pyramid-scheme pitfalls.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/unveiling-the-truth-behind-cosmetic-pyramid-schemes", locale)
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

export default function UnveilingTheTruthBehindCosmeticPyramidSchemesPage({ params }: PageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden rounded-[44px] border border-pink-200 bg-gradient-to-br from-pink-50 via-white to-purple-50 shadow-2xl dark:border-pink-500/30 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.18),transparent_65%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_72%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.28),transparent_70%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.24),transparent_78%)]" />
        <div className="relative grid gap-12 px-6 py-16 sm:px-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] xl:px-20">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-pink-200/80 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-pink-700 dark:border-pink-500/30 dark:bg-slate-900/70 dark:text-pink-200">
              Beauty business watchlist
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              Top 10 Makeup MLM Companies Exposed: Unveiling the Truth Behind Cosmetic Pyramid Schemes
            </h1>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Discover the legitimate glamour, the hidden red flags, and the questions to ask before partnering with a cosmetics MLM.
            </p>
          </div>
          <div className="space-y-5 rounded-[32px] border border-white/60 bg-white/85 p-8 text-sm leading-6 text-slate-700 shadow-2xl backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/80 dark:text-slate-200">
            <p>
              The allure of beauty products should never mask compliance gaps. Use this guide to decode recruitment-heavy promises, validate product value, and champion ethical growth across your network.
            </p>
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Introduction</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {INTRO_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph} className="rounded-[28px] border border-slate-200 bg-white/90 p-6 text-sm leading-7 text-slate-700 shadow-lg dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">MLM And Cosmetics</h2>
        <p className="rounded-[32px] border border-slate-200 bg-white/90 p-8 text-sm leading-7 text-slate-700 shadow-xl dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
          {MLM_COSMETICS_PARAGRAPH}
        </p>
      </section>

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <Eye className="h-6 w-6 text-violet-600 dark:text-violet-300" weight="fill" aria-hidden />
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Understanding Cosmetic Pyramid Schemes</h2>
        </div>
        <p className="rounded-[28px] border border-slate-200 bg-white/90 p-6 text-sm leading-7 text-slate-700 shadow-lg dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
          {PYRAMID_PSYCHOLOGY_PARAGRAPH}
        </p>
        <p className="rounded-[28px] border border-slate-200 bg-white/90 p-6 text-sm leading-7 text-slate-700 shadow-lg dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
          {PYRAMID_DESCRIPTION_PARAGRAPH}
        </p>
      </section>

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <Warning className="h-6 w-6 text-amber-600 dark:text-amber-300" weight="fill" aria-hidden />
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">How can we spot the red flags?</h2>
        </div>
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
          How can we find out that the companies exist on a pyramid scheme? While you are joining a company, approach it with skepticism and do careful research.
        </p>
        <div className="grid gap-5 lg:grid-cols-2">
          {RED_FLAGS.map((flag) => (
            <div
              key={flag.title}
              className="rounded-[28px] border border-slate-200 bg-white/90 p-6 text-sm leading-6 text-slate-700 shadow-lg dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300"
            >
              <p className="font-semibold text-slate-900 dark:text-white">{flag.title}</p>
              <p className="mt-2">{flag.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
          Top 10 MLM Makeup and Cosmetic Companies (2025)
        </h2>
        <div className="overflow-x-auto rounded-[32px] border border-slate-200 bg-white/90 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-700">
            <thead className="bg-rose-500/90 text-left text-xs font-semibold uppercase tracking-wide text-white dark:bg-rose-600/80">
              <tr>
                <th className="px-4 py-3">Sl. No</th>
                <th className="px-4 py-3">Company</th>
                <th className="px-4 py-3">Country</th>
                <th className="px-4 py-3">Revenue 2024 (in M USD)</th>
                <th className="px-4 py-3">Year Founded</th>
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map((row, index) => (
                <tr
                  key={row.company}
                  className={cn(
                    "transition",
                    index % 2 === 0 ? "bg-white dark:bg-slate-900/60" : "bg-slate-50/80 dark:bg-slate-900/40"
                  )}
                >
                  <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">{index + 1}</td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-200">{row.company}</td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-200">{row.country}</td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-200">{row.revenue}</td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-200">{row.founded}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold text-center text-rose-700 dark:text-rose-300">
          Overview of the Top 10 MLM Makeup and Cosmetic Companies 2025
        </h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {COMPANY_CARDS.map((card) => (
            <div
              key={card.name}
              className="rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
            >
              <p className="text-xl font-semibold text-slate-900 dark:text-white">{card.name}</p>
              <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                {card.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <HandHeart className="h-6 w-6 text-pink-600 dark:text-pink-300" weight="fill" aria-hidden />
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">The Allure of Beauty MLM</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {ALLURE_PARAGRAPHS.map((paragraph) => (
            <p
              key={paragraph}
              className="rounded-[28px] border border-slate-200 bg-white/90 p-6 text-sm leading-6 text-slate-700 shadow-lg dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <Flag className="h-6 w-6 text-amber-600 dark:text-amber-300" weight="fill" aria-hidden />
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">The Perils of New Makeup MLM Companies</h2>
        </div>
        <p className="rounded-[28px] border border-slate-200 bg-white/90 p-6 text-sm leading-6 text-slate-700 shadow-lg dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
          {PERILS_PARAGRAPH}
        </p>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Conclusion</h2>
        <div className="space-y-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
          {CONCLUSION_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold text-center text-slate-900 dark:text-white">Frequently Asked Questions</h2>
        <div className="grid gap-4">
          {FAQS.map((faq, index) => (
            <div
              key={`${faq.question}-${index}`}
              className="rounded-[28px] border border-slate-200 bg-slate-50/80 p-6 text-sm leading-6 text-slate-700 shadow-lg dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300"
            >
              <p className="font-semibold text-slate-900 dark:text-white">{faq.question}</p>
              <p className="mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container rounded-[36px] border border-pink-200 bg-gradient-to-r from-pink-100 via-white to-purple-100 p-10 shadow-xl dark:border-pink-500/30 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/40">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{CTA.heading}</h2>
            <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{CTA.description}</p>
            <Button
              asChild
              className="rounded-full bg-pink-600 px-6 py-2 text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-500 dark:bg-pink-500 dark:hover:bg-pink-400"
            >
              <Link href={contactHref}>{CTA.label}</Link>
            </Button>
          </div>
          <div className="rounded-[28px] border border-white/60 bg-white/85 p-6 text-sm leading-6 text-slate-700 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300">
            <p>
              Guard your beauty brand’s reputation with transparent genealogy views, automated inventory controls, and compliance alerts that stop pyramid-scheme practices before they start.
            </p>
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
