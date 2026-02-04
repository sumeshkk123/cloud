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
  Layers,
  Network,
  Sparkles,
  Target,
  TrendingUp,
  Users
} from "lucide-react";
import { Handshake } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type Highlight = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

type RoleSection = {
  title: string;
  paragraphs: string[];
  icon: ComponentType<{ className?: string }>;
};

const INTRO_PARAGRAPHS: string[] = [
  "In marketing, the predominant goal of promotion is to establish the awareness of the existence and positioning of products and services. Effective promotions help the markets to increase the speed of product and service acceptance which in turn furnish sales support. The concept of marketing depends upon the requirements of customers. In recent years, multi-level marketing seems to be one of the most successful and famous business models. MLM is a marketing structure used by various companies for promoting their products. Normally, Multi-level marketing appears to be outside the mainstream of business."
];

const MLM_DEFINITION_PARAGRAPH =
  "Multi-level marketing or MLM is a network marketing system in which various participants earn money by selling or promoting products and recruit others to do the same. Multi-Level marketing is a fruitful promotion strategy in today’s marketing world as it uplifts the sales force.";

const MLM_DEFINITION_POINTS: string[] = [
  "Customarily, Multi-level companies are not involved in a traditional salesforce, rather they use contractors to promote their products.",
  "MLM companies employ a hierarchical structure, having distributors at different levels. These individual companies are compensated from exchanging products directly and from the commissions from the sales of the participants they have enrolled."
];

const PROMOTION_PARAGRAPH =
  "In multi-level marketing, the promotions are being carried out by selling the products independently. Hence, MLM companies demand for an energized and excited salesforce and contractors for marketing.";

const MLM_WORK_PARAGRAPH =
  "The participants are generally required to buy a starter kit or a certain amount of product intending to become a distributor in the MLM system. These individuals gain profit from the commissions by the sales of their own products and from the recruiters as well. Conditional to the size of the company, there can be a huge number of members in this system. Furthermore, MLM acts as a chain and it carries over as the participants at all levels acquire some form of commission. Multi-level marketing model has been applied to several business start ups and earn meaningful benefits.";

const ADDITIONAL_PARAGRAPHS: string[] = [
  "As compared to traditional business, the amount of financial commitment is trivial in multi-level marketing. MLM encourages companies to sell their products most effectively and the risk to get started is very low. The companies that adopt MLM business strategy work all by one’s self and can make income unlimited.",
  "The three inevitable roles in multi-level marketing are the sponsors, recruiters and distributors."
];

const ROLE_SECTIONS: RoleSection[] = [
  {
    title: "Sponsors",
    paragraphs: [
      "They are the responsible people who invite other people who become the distribution partners for the business. These new members are enrolled to the team as the downlines of the sponsor. They are primarily involved in the investment decisions and implementing programmes."
    ],
    icon: Handshake
  },
  {
    title: "Recruiters",
    paragraphs: ["The people who are enrolled as distributors in a multi-level marketing business."],
    icon: Users
  },
  {
    title: "Distributors",
    paragraphs: [
      "As the distributors hire new members to join the network and the pyramid goes on. As a result, more exposure to the public is obtained. Multi-level marketing business operates on healthy relationships. Interpersonal interactions help to build relationships and make the process of promoting products more effortless. The products are being sold out without any risk or investment. In multi-level marketing, one has to sell the product individually and through the distributors as well. Each distributor will get an opportunity to interact with different people and the conversations with each and every individual ensures the product promotion and selling the same. It is necessary to have in-depth knowledge about the product and the skill to talk about the product as well. In addition to this, maintaining a good attitude towards customer service is given utmost importance.",
      "For running a successful business, one has to make the customers their business partner. In multi-level marketing, the products are often sold out to the same customers since they have repeat requirements from the same customers."
    ],
    icon: Network
  }
];

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Structure drives promotion",
    description: "Layered compensation motivates independent sellers to champion products continuously.",
    icon: Layers
  },
  {
    title: "Relationships power velocity",
    description: "Interpersonal interactions transform prospects into loyal customers and future distributors.",
    icon: Handshake
  },
  {
    title: "Low risk, high adaptability",
    description: "MLM models minimise upfront investment while offering scalable earning potential.",
    icon: TrendingUp
  }
];

const CONCLUSION_PARAGRAPH =
  "To sum up, the ultimate goal of multi-level marketing is to promote and sell actual products or services to different customers. Multi-level marketing is also called Network marketing that enables the distributors to promote their products and services instantly and to earn benefits within a limited time. In MLM, social media is becoming crucial as it involves direct marketing with the customers. Social media enables an expanded network of connections and expands product acceptance. By employing a multi-level marketing model, companies can promote their products profitably.";

const AUTHOR_BIO =
  "Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate about utilizing technology to drive growth and optimize business processes. Adept at analyzing market dynamics, delivering actionable insights, and staying ahead of industry developments.";

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "How to Promote Products Using the MLM Business Model";
  const description =
    "Learn how multi-level marketing structures drive product promotion, the roles within an MLM network, and why relationship-led selling boosts growth.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath(
        "/blog/how-to-promote-products-using-the-mlm-business-model",
        locale
      )
    },
    openGraph: {
      title,
      description
    }
  };
}

type PromoteProductsPageProps = {
  params: { lang: SupportedLocale };
};

export default function PromoteProductsPage({ params }: PromoteProductsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-fuchsia-50 via-white to-sky-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.2),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.2),transparent_60%)]" />
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,440px)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-fuchsia-700 dark:border-fuchsia-500/40 dark:bg-slate-900/60 dark:text-fuchsia-200">
              <Sparkles className="h-4 w-4" aria-hidden />
              Product promotion blueprint
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              How to promote products using the MLM business model
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-200">
              Understand the structure, roles, and relationship-driven tactics that keep multi-level marketing products in demand across expanding
              networks.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild className="bg-fuchsia-600 text-white hover:bg-fuchsia-500 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-400">
                <Link href={demoHref}>
                  Explore distributor dashboards
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Link href={contactHref}>
                  Align on growth strategy
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-5 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-2xl shadow-fuchsia-100 backdrop-blur dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-wide text-fuchsia-700 dark:text-fuchsia-200">Growth signals</span>
              <Target className="h-5 w-5 text-fuchsia-600 dark:text-fuchsia-300" aria-hidden />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              High-performing MLM brands treat every distributor touchpoint as an opportunity to educate, empower, and deepen customer loyalty.
            </p>
            <div className="space-y-4">
              {HIGHLIGHTS.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-2xl border border-slate-200 bg-white/90 p-5 transition hover:-translate-y-1 hover:border-fuchsia-200 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/70 dark:hover:border-fuchsia-500/40"
                >
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-fuchsia-600 dark:text-fuchsia-200">
                    <highlight.icon className="h-5 w-5" aria-hidden />
                    {highlight.title}
                  </div>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{highlight.description}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-4xl space-y-6 rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-fuchsia-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
            {INTRO_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)]">
          <div className="rounded-3xl border border-fuchsia-200 bg-fuchsia-50/80 p-8 text-slate-900 shadow-sm dark:border-fuchsia-500/30 dark:bg-fuchsia-500/10 dark:text-fuchsia-100">
            <h2 className="text-2xl font-semibold">What is Multi-level marketing?</h2>
            <p className="mt-4 text-base leading-7">{MLM_DEFINITION_PARAGRAPH}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-lg shadow-fuchsia-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
            <ul className="space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
              {MLM_DEFINITION_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-fuchsia-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">How to promote products by using the MLM business model?</h3>
          <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">{PROMOTION_PARAGRAPH}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-fuchsia-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">How does MLM work?</h3>
          <div className="mt-4 space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
            <p>{MLM_WORK_PARAGRAPH}</p>
            {ADDITIONAL_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">Roles that sustain MLM promotion</h3>
        <div className="grid gap-8 lg:grid-cols-3">
          {ROLE_SECTIONS.map((role) => (
            <article
              key={role.title}
              className="space-y-4 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-lg shadow-fuchsia-100 transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-2xl bg-fuchsia-100/80 p-3 text-fuchsia-700 dark:bg-fuchsia-500/20 dark:text-fuchsia-200">
                  <role.icon className="h-6 w-6" aria-hidden />
                </span>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{role.title}</h4>
              </div>
              <div className="space-y-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {role.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-fuchsia-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">Conclusion</h3>
          <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">{CONCLUSION_PARAGRAPH}</p>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-10 text-center shadow-lg shadow-fuchsia-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-wide text-fuchsia-700 dark:text-fuchsia-200">About the author</p>
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
                Map your compensation design
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild className="bg-fuchsia-600 text-white hover:bg-fuchsia-500 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-400">
              <Link href={contactHref}>
                Partner with MLM experts
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
