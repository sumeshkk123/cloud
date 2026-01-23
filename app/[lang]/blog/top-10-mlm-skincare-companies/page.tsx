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
  Droplets,
  Leaf,
  LifeBuoy,
  Sparkles,
  Stars,
  TrendingUp
} from "lucide-react";

export const dynamic = "force-static";

const INTRO_PARAGRAPHS = [
  "Introduction",
  "Today, even small kids try out the most prized skincare products. I remember the times when we used to go to school, wearing eyeliner and powder, and that was even a luxury. But those times have changed. Now, kids are doing a ‘get ready with me’ on their Youtube channels before going to school. Think how far we have come!",
  "Skincare products have become a part of our daily routine. From sunscreen to serums, we are so careful about which brand we should use and how effective they would be.",
  "In this blog, we are going to talk about the top skincare MLM companies in the world. Stay tuned!"
];

const RISE_PARAGRAPHS = [
  "There is a surge in the number of network marketing skincare companies as we reach 2025. The rising demand for skincare products is benefiting MLM skincare companies all over the world. Unlike old times, people are conscious about their bodies and skin. And they are searching for products that can make their skin better and younger.",
  "Recently, these skincare companies have undergone a major evolution, and the business model, MLM has become a greater influence. By using the direct sales model, they are securing a loyal customer base. MLM is not just a business model that sells products but also offers financial freedom to individuals who want to be the boss of their own and run a business all by themselves.Skincare MLM, thus opens doors to vast entrepreneurial opportunities.",
  "Skincare companies like Amway and Herbalife have secured the number one position in the global marketplace. Do you know how?",
  "They connect with the audience’s emotions and offer products that meet their needs. They address personal concerns, enhance confidence, and promote self-care. In addition to this, they are always aware of the evolving customer expectations and incorporate sustainable practices and natural resources into their product offerings. This combination of emotional connection, quality, and innovation has become an important factor for success in the skincare MLM industry."
];

type Brand = {
  name: string;
  description: string;
  founded: string;
  country: string;
};

const BRANDS: Brand[] = [
  {
    name: "Amway",
    description:
      "Amway is a top-notch skincare MLM company that offers health, beauty, and homecare products. They specialize in personal care products that cause no harm to skin and body, ranging from Nutrilite supplements to Artistry cosmetics.",
    founded: "1959",
    country: "USA"
  },
  {
    name: "Herbalife Nutrition",
    description:
      "Herbalife Nutrition sells health and wellness products to customers from different regions. It focuses on weight management, fitness, and general well-being with meal replacement shakes, protein powders, nutritional supplements, and skincare.",
    founded: "1980",
    country: "USA"
  },
  {
    name: "Vorwerk",
    description:
      "Vorwerk operates in diverse sectors, including home appliances and cosmetics. Through its JAFRA Cosmetics division, it offers skincare and beauty products, emphasizing innovation and natural ingredients through an MLM consultant model.",
    founded: "1883",
    country: "Germany"
  },
  {
    name: "Natura & Co",
    description:
      "Natura & Co focuses on sustainable cosmetics, personal care, and hygiene products. By integrating brands such as The Body Shop, Avon, and Natura, the group delivers eco-conscious skincare at global scale.",
    founded: "1969",
    country: "Brazil"
  },
  {
    name: "Mary Kay",
    description:
      "Mary Kay is a popular cosmetics brand that provides beauty and skincare solutions for aging, hydration, and acne, while offering a fragrance line for global clients.",
    founded: "1963",
    country: "USA"
  },
  {
    name: "Nu Skin",
    description:
      "Nu Skin specializes in anti-aging and wellness. Its ageLOC skincare line features technologies designed to combat signs of aging, supported by an MLM model that emphasizes personal sales and recruitment.",
    founded: "1984",
    country: "USA"
  },
  {
    name: "Forever Living Products",
    description:
      "Forever Living Products is famous for aloe vera-based skincare. The company serves customers worldwide with fresh aloe-driven solutions across skincare, health, and wellness.",
    founded: "1978",
    country: "USA"
  },
  {
    name: "Oriflame",
    description:
      "Oriflame, headquartered in Sweden, delivers affordable skincare with eco-friendly practices. Its consultants offer anti-aging and daily care products across Asia, Europe, and Africa.",
    founded: "1967",
    country: "Sweden"
  },
  {
    name: "PM International",
    description:
      "PM International delivers skincare focused on anti-aging, hydration, and skin health. Operating in 40+ countries, it blends creams and serums with a strong global distributor community.",
    founded: "1993",
    country: "Germany"
  },
  {
    name: "Perfect China",
    description:
      "Perfect China centers on health, skincare, and beauty products inspired by herbal and traditional Chinese medicine. Its MLM structure emphasizes anti-aging and hydration solutions tailored to diverse skin concerns.",
    founded: "1994",
    country: "China"
  }
];

const FAQS = [
  {
    question: "1. What is an MLM company in the skincare industry?",
    answer:
      "A skincare MLM company operates through a network of distributors who sell high-quality skincare and cosmetic products to customers. Popular skincare MLMs focus on offering premium and personalized products."
  },
  {
    question: "2.What sets skincare MLM companies apart from traditional brands?",
    answer:
      "Unlike traditional skincare brands, skincare MLM companies offer entrepreneurial opportunities alongside selling products. After purchasing a product, you can also be a part of the skincare MLM community and develop your own network."
  },
  {
    question: "3.Are skincare MLM products better than those available in retail stores?",
    answer:
      "Usually, Skincare MLM companies offer premium products to their customers. Although the product quality can vary depending on the company and its policies. It’s essential to research individual products and consider reviews before purchasing."
  },
  {
    question: "4.  How do skincare MLMs work, and how can I join?",
    answer:
      "MLM companies operate on a model where distributors earn by selling products and recruiting others to join their network. To join, you typically purchase a starter kit and sign up under an existing distributor."
  },
  {
    question: "5. Are skincare MLM companies legitimate?",
    answer:
      "MLM is often associated with pyramid schemes. So it is very important to conduct thorough research before joining the company. Most MLM companies are legitimate businesses and offer quality products."
  }
];

const CONCLUSION_PARAGRAPH =
  "Skincare MLM companies are gaining attention all over the world. Among many international skincare brands, the MLM companies mentioned above stand out in the industry with their unique, high-quality, and long-lasting product offerings. Each company has its own story to tell, changing the lives of its customers and receiving love from all parts of the world.";

const DISCLAIMER =
  "Disclaimer : Cloud MLM neither promotes nor supports any of the companies, products, or services mentioned in this article. The information provided here is compiled from publicly available resources within the MLM industry. It is presented solely for informational purposes and does not reflect our preferences, priorities, or any form of paid partnership.";

const AUTHOR = {
  name: "A passionate technical writer",
  bio: "A passionate technical writer with a knack for blending storytelling and technical expertise to create engaging and informative content. Specializes in copywriting, creative writing, and content development for media and marketing industries. Dedicated to delivering content that educates, informs, and captivates diverse audiences."
};

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Top 10 MLM Skincare Companies";
  const description =
    "See how Amway, Herbalife, Mary Kay, and other skincare MLM leaders combine premium products, emotional storytelling, and global networks to thrive.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/top-10-mlm-skincare-companies", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type SkincareCompaniesPageProps = {
  params: { lang: SupportedLocale };
};

export default function TopMlmSkincareCompaniesPage({ params }: SkincareCompaniesPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-100 via-white to-emerald-100 shadow-2xl dark:border-rose-500/30 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.24),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.24),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.12),transparent_65%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_72%)]" />
        <div className="relative grid gap-12 px-6 py-20 sm:px-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:px-20">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-rose-700 dark:border-rose-500/30 dark:bg-slate-900/70 dark:text-rose-200">
              <Sparkles className="h-4 w-4" aria-hidden />
              Skincare spotlight
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              Top 10 MLM skincare companies setting 2025 beauty trends
            </h1>
            {INTRO_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-rose-600 px-6 py-2 text-white shadow-lg shadow-rose-500/30 transition hover:bg-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400"
              >
                <Link href={demoHref}>
                  Launch skincare-ready MLM software
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-rose-200 bg-white/80 px-6 py-2 text-rose-700 transition hover:bg-rose-100 dark:border-rose-500/40 dark:bg-slate-900/60 dark:text-rose-200 dark:hover:bg-slate-800"
              >
                <Link href={contactHref}>Talk to skincare strategists</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/70 bg-white/80 p-8 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
            {RISE_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-rose-600 dark:text-rose-300" aria-hidden />
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Overview of the top 10 international skincare brands</h2>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-200">
            These companies balance product science and heartfelt storytelling, helping customers invest in routines that protect, nourish, and
            empower.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{brand.name}</h3>
                <div className="text-xs text-right text-slate-500 dark:text-slate-400">
                  <p>
                    <span className="font-semibold">Founded:</span> {brand.founded}
                  </p>
                  <p>
                    <span className="font-semibold">Country:</span> {brand.country}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-200">{brand.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex items-center gap-3">
            <Droplets className="h-6 w-6 text-rose-600 dark:text-rose-300" aria-hidden />
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Skincare MLM FAQs</h2>
          </div>
          <div className="mt-6 space-y-6">
            {FAQS.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-rose-100 bg-rose-50/70 p-5 dark:border-rose-500/30 dark:bg-rose-500/10">
                <p className="text-sm font-semibold text-rose-700 dark:text-rose-200">{faq.question}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-8 shadow-xl dark:border-emerald-500/40 dark:bg-emerald-500/10">
          <div className="flex items-center gap-3">
            <Stars className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Ready to launch your MLM skincare business?</h2>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-200">
            Enhance your MLM skincare business easy with our MLM software solutions.
          </p>
          <Button
            asChild
            className="mt-4 rounded-full bg-emerald-600 px-6 py-2 text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400"
          >
            <Link href={contactHref}>
              Book a consultation
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{CONCLUSION_PARAGRAPH}</p>
          <p className="mt-4 text-xs leading-6 text-slate-500 dark:text-slate-400">{DISCLAIMER}</p>
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

