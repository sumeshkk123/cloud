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
  BarChart3,
  Layers,
  ShieldCheck,
  Sparkles,
  Timer,
  Waves
} from "lucide-react";
import { DeviceMobile, GearSix, GlobeHemisphereEast } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type GrowthPillar = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

type NarrativeSection = {
  title: string;
  level: "h2" | "h3" | "h4";
  paragraphs: string[];
};

const HERO_PILLARS: GrowthPillar[] = [
  {
    title: "Security-first architecture",
    description: "Laravel foundations guard transactions and personal data with enterprise-grade protection.",
    icon: ShieldCheck
  },
  {
    title: "Effortless scaling",
    description: "Process growing network activity without friction thanks to high-volume data handling.",
    icon: Layers
  },
  {
    title: "Human-centric workflows",
    description: "An intuitive interface keeps leaders focused on growth instead of deciphering complex math.",
    icon: DeviceMobile
  }
];

const MOMENTS: GrowthPillar[] = [
  {
    title: "Continuous innovation",
    description: "Dedicated testing cycles keep features fresh and performance consistent for every rollout.",
    icon: GearSix
  },
  {
    title: "Brand amplification",
    description: "Operational polish elevates credibility, attracting distributors who value professionalism.",
    icon: Sparkles
  },
  {
    title: "Versatile foundations",
    description: "Extend the platform with bespoke modules, apps, or strategies as expansion demands.",
    icon: GlobeHemisphereEast
  }
];

const ARTICLE_SECTIONS: NarrativeSection[] = [
  {
    title: "Introduction",
    level: "h2",
    paragraphs: [
      "In the competitive world of multi-level marketing (MLM), having the right tools is essential for success. Cloud MLM Software is rapidly becoming the leading choice in the global market, thanks to its clean, clear overview of MLM structures and its unique, user-friendly admin interface. But how exactly can MLM software help your business grow? Let’s dive into the key factors that make Cloud MLM Software a powerful ally in your business journey."
    ]
  },
  {
    title: "Confidence in Security and Usability: Introducing Cloud MLM Software Powered by Laravel, the Gold Standard in MLM Technology",
    level: "h2",
    paragraphs: [
      "Security and usability are paramount when selecting MLM software for your business. A system without vulnerabilities is crucial, especially when handling sensitive transactions and personal data. Cloud MLM Software stands out in this regard, being built on Laravel, one of the most secure and robust frameworks available today. Laravel is known for its advanced security features, which protect against common vulnerabilities such as SQL injection, cross-site scripting, and others. With Cloud MLM Software, you can rest assured that your business operations are secure, giving you and your distributors the confidence needed to focus on growth rather than worrying about security issues.",
      "Moreover, the usability of Cloud MLM Software is designed with the user in mind. The interface is intuitive, making it easy to navigate and manage even complex MLM structures without the hassle of confusing equations or complicated setups. This simplicity doesn’t compromise functionality; the software is extendable and customizable to meet your specific business needs, ensuring that you have a tailored solution that grows with your business."
    ]
  },
  {
    title: "Scalability and Efficiency",
    level: "h2",
    paragraphs: [
      "One of the most significant advantages of using Cloud MLM Software is its ability to scale with your business. As your network grows, the software can handle increasing amounts of data and transactions without slowing down or encountering issues. This scalability ensures that your business can expand without being held back by technical limitations. Cloud MLM Software is designed to process large volumes of data efficiently, allowing you to focus on strategic growth rather than operational challenges."
    ]
  },
  {
    title: "Continuous Improvement and Testing",
    level: "h2",
    paragraphs: [
      "At Cloud MLM Software, we are committed to continuous improvement. Our dedicated testing team regularly evaluates the software for consistency, performance, and potential enhancements. This proactive approach ensures that the software remains at the forefront of MLM technology, providing you with a reliable and up-to-date platform. Since its inception, Cloud MLM Software has reported no security issues, a testament to its robust architecture and our commitment to quality."
    ]
  },
  {
    title: "Enhancing Business Popularity",
    level: "h3",
    paragraphs: [
      "In today’s market, making your business popular is a key to success. MLM software like Cloud MLM Software not only helps you manage your network but also enhances your business’s visibility and appeal. By streamlining your operations and providing a professional, user-friendly interface, the software contributes to building a strong, reputable brand. When potential distributors see how efficiently your business operates, they are more likely to join, helping you grow your network organically."
    ]
  },
  {
    title: "Versatility Beyond MLM Management",
    level: "h3",
    paragraphs: [
      "Cloud MLM Software is more than just a tool for managing your MLM network; it’s a versatile platform that can be adapted to various business needs. Whether you’re looking to integrate additional features, create a customized web application, or develop new strategies for business growth, Cloud MLM Software provides the flexibility to do so. This adaptability ensures that your software investment continues to deliver value as your business evolves, making it an integral part of your long-term success strategy."
    ]
  },
  {
    title: "Conclusion",
    level: "h4",
    paragraphs: [
      "Choosing the right MLM software is a critical decision that can significantly impact your business’s growth trajectory. With Cloud MLM Software, you gain access to a secure, user-friendly, and scalable platform designed to support your business at every stage of its development. By leveraging the latest in MLM technology, backed by continuous improvement and robust security features, Cloud MLM Software enables you to focus on what matters most: growing your business and achieving your goals. Whether you’re just starting out or looking to expand an MLM network, Cloud MLM Software offers the tools and support needed to make your MLM business shine."
    ]
  }
];

const AUTHOR_BIO =
  "Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate about utilizing technology to drive growth and optimize business processes. Adept at analyzing market dynamics, delivering actionable insights, and staying ahead of industry developments.";

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "How MLM Software Can Help Business Grow";
  const description =
    "Explore how Cloud MLM Software strengthens security, scalability, and usability so multi-level marketing leaders can accelerate growth with confidence.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/how-mlm-software-can-help-business-grow", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type GrowthPageProps = {
  params: { lang: SupportedLocale };
};

export default function GrowthPage({ params }: GrowthPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-sky-50/80 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_70%)] dark:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.25),transparent_70%)]" />
        <div className="container grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:border-cyan-500/50 dark:bg-slate-900/60 dark:text-cyan-200">
              <Waves className="h-4 w-4" aria-hidden />
              Growth acceleration insights
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              How MLM software can help business grow
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-200">
              Discover how Cloud MLM Software unites secure infrastructure, scalable operations, and intuitive experiences so every distributor stays
              focused on building meaningful relationships.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild className="bg-cyan-600 text-white hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400">
                <Link href={demoHref}>
                  Start a guided product tour
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Link href={contactHref}>
                  Talk with a strategist
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-5 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-2xl shadow-cyan-100 backdrop-blur dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-200">Why leaders choose us</span>
              <BarChart3 className="h-5 w-5 text-cyan-600 dark:text-cyan-300" aria-hidden />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Every implementation blends technology rigor with human-centered change management so your organisation can scale without losing its
              entrepreneurial edge.
            </p>
            <div className="space-y-4">
              {HERO_PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white/90 p-5 transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/70 dark:hover:border-cyan-500/40"
                >
                  <span className="rounded-xl bg-cyan-100/80 p-3 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-200">
                    <pillar.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-white">{pillar.title}</h2>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Why the right platform defines MLM momentum</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            A thriving direct selling network depends on aligned technology, dependable data, and brand experiences that inspire field confidence.
            Cloud MLM Software brings those pillars together in one progressive stack.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {MOMENTS.map((moment) => (
            <article
              key={moment.title}
              className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-cyan-100 transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100/80 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-200">
                <moment.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{moment.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{moment.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-xl shadow-cyan-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <div className="flex flex-col gap-12 lg:flex-row">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">From insight to execution</h2>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
                Navigate the article using the content arc below. Every section preserves the original narrative while presenting it in a modern,
                high-clarity reading experience.
              </p>
              <div className="mt-8 space-y-4 rounded-2xl border border-cyan-100 bg-cyan-50/60 p-6 text-sm text-slate-700 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-100">
                <p className="font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-200">Reading time</p>
                <p className="flex items-center gap-2">
                  <Timer className="h-4 w-4 text-cyan-600 dark:text-cyan-300" aria-hidden />
                  Approximately 6 minutes
                </p>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-12">
              {ARTICLE_SECTIONS.map((section) => (
                <article key={section.title} className="space-y-4 rounded-2xl border border-slate-200 bg-white/90 p-6 dark:border-slate-700 dark:bg-slate-900/70">
                  {section.level === "h2" ? (
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{section.title}</h2>
                  ) : section.level === "h3" ? (
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{section.title}</h3>
                  ) : (
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{section.title}</h4>
                  )}
                  <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-10 text-center shadow-lg shadow-cyan-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-200">About the author</p>
          <p className="mt-6 text-2xl font-semibold text-slate-900 dark:text-white">Edward</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">Research Analyst</p>
          <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-300">{AUTHOR_BIO}</p>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
