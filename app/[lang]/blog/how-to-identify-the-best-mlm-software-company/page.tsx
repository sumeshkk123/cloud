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
  Globe2,
  Headset,
  LayoutTemplate,
  Palette,
  Sparkles,
  Wrench
} from "lucide-react";
import { BracketsAngle, Code } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type HighlightCard = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

type ServiceSection = {
  title: string;
  paragraphs: string[];
  subsections?: {
    title: string;
    paragraphs: string[];
  }[];
  icon: ComponentType<{ className?: string }>;
};

const INTRO_PARAGRAPHS: string[] = [
  "MLM focuses on building a network of agents who will sell the products of the brand while recruiting other agents for the same purpose. As opposed to hiring employees, businesses that use the network marketing model hire distributors and agents to take the brand wider into the market. The agents are not paid fixed salaries. Instead, they earn a commission for the sales they generate. It is a profit-driven model aimed to make the best while investing the minimum possible amount in marketing.",
  "To help such brands keep track of their business, many companies have created MLM software that allows the admins (management) to maintain a proper record of the network and the agents. The software can be customized to meet the specifications of the enterprise. The themes, page layouts, color combinations, commission plans, lead capture pages, navigations, etc. can be customized to reflect the business.",
  "While there are numerous MLM software solutions available, enterprises should choose the Best MLM Software Company to purchase and host the MLM software for their business. The basic features of the software and the additional services provided by the companies play a role in deciding which company offers the best deal to the enterprises. In this blog, let us see what separates the best from the rest."
];

const SERVICES: ServiceSection[] = [
  {
    title: "24*7 Technical Support",
    paragraphs: [
      "The job of the company does not end after providing the MLM software. It has to be available at all times to help enterprises install and use the software. Training employees to work on it, clearing their doubts, and ensuring that the software is working without any glitches."
    ],
    icon: Headset
  },
  {
    title: "MLM Software Development",
    paragraphs: [
      "Enterprises can either choose to customize existing software or develop new MLM software from scratch. The company will have expert and experienced developers who will develop the software based on the requirements of the enterprise. The developers get started on the project only having complete information about the needs of the enterprise. They have numerous meetings to fully understand what the enterprise wants."
    ],
    icon: Code,
    subsections: [
      {
        title: "Customizing MLM Plans",
        paragraphs: [
          "MLM plans are compensation plans where the commission amount for each agent is calculated based on various predefined factors. Different types of plans are used by different enterprises to structure their agents into a proper network."
        ]
      },
      {
        title: "Ecommerce Integration",
        paragraphs: [
          "The Best MLM Software Company ensures that the MLM software is flexible and extensible. It can be seamlessly integrated with various other software solutions to make it easier for enterprises to sell the products and make payments. Opencart and Magento are two of the most popular and widely used open-source e-commerce platforms which can be integrated with the MLM software to enable enterprises to manage sales and payouts through the same website."
        ]
      }
    ]
  },
  {
    title: "Digital Branding",
    paragraphs: [
      "In today’s world, creating an impression on the audience is vital for a business to sustain. The company helps enterprises to brand their business and highlight it in the market using innovative techniques."
    ],
    icon: Palette
  },
  {
    title: "Website Designing and Development",
    paragraphs: [
      "Designing, building, and developing a website using MLM software is a task for the experts. From creating individual websites for agents to generate more sales to ensuring that the website is attractive and provides the required information to the customers, the experts handle everything.",
      "Once an enterprise purchases the software, it can be either used on the existing servers or can be hosted on the cloud. The company also provides cloud hosting services to enterprises to improve the speed and processing of the software."
    ],
    icon: LayoutTemplate
  }
];

const HIGHLIGHTS: HighlightCard[] = [
  {
    title: "Experience meets agility",
    description: "Work with a company that blends seasoned MLM expertise with rapid iteration, so your launch stays on schedule.",
    icon: BracketsAngle
  },
  {
    title: "Support without downtime",
    description: "Around-the-clock specialists keep onboarding, commission cycles, and integrations humming without disruption.",
    icon: Headset
  },
  {
    title: "Brand-first customization",
    description: "From design flourishes to compensation logic, tailor every workflow to match your market position.",
    icon: Palette
  },
  {
    title: "Commerce-ready ecosystem",
    description: "Seamlessly connect storefronts, payment gateways, and distributor portals in one resilient stack.",
    icon: Globe2
  }
];

const CONCLUSION_PARAGRAPH =
  "Finding the best MLM software company requires evaluating important factors such as experience, customer support, customization options, and user reviews. Seek a provider with a strong track record, transparent pricing, and comprehensive features that meet your specific requirements. A clear, interactive demo can be crucial in ensuring that the software aligns with your business goals, helping you make an informed decision that will contribute to long-term success in the MLM industry.";

const AUTHOR_BIO =
  "Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate about utilizing technology to drive growth and optimize business processes. Adept at analyzing market dynamics, delivering actionable insights, and staying ahead of industry developments.";

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "How to Identify the Best MLM Software Company";
  const description =
    "Evaluate top MLM software partners by reviewing support, development expertise, customization, branding, ecommerce integration, and hosting services.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/how-to-identify-the-best-mlm-software-company", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type BestCompanyPageProps = {
  params: { lang: SupportedLocale };
};

export default function BestCompanyGuidePage({ params }: BestCompanyPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-50 via-white to-rose-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.18),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.2),transparent_60%)]" />
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,440px)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-rose-700 dark:border-rose-500/40 dark:bg-slate-900/60 dark:text-rose-200">
              <Sparkles className="h-4 w-4" aria-hidden />
              Vendor evaluation checklist
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              How to identify the best MLM software company
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-200">
              Shortlist providers who bring technical excellence, strategic support, and brand-forward execution to every stage of your MLM launch.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild className="bg-rose-600 text-white hover:bg-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400">
                <Link href={demoHref}>
                  Review an interactive demo
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Link href={contactHref}>
                  Compare vendor roadmaps
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-5 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-2xl shadow-rose-100 backdrop-blur dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-wide text-rose-700 dark:text-rose-200">What to look for</span>
              <Wrench className="h-5 w-5 text-rose-600 dark:text-rose-300" aria-hidden />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Busy leaders focus on partners who deliver responsive support, modular development, and design polish without sacrificing platform
              stability.
            </p>
            <div className="space-y-4">
              {HIGHLIGHTS.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-2xl border border-slate-200 bg-white/90 p-5 transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/70 dark:hover:border-rose-500/40"
                >
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-rose-600 dark:text-rose-200">
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
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-rose-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              {INTRO_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">What separates the best MLM software companies</h2>
          <Globe2 className="h-6 w-6 text-rose-600 dark:text-rose-300" aria-hidden />
        </div>
        <div className="grid gap-8 xl:grid-cols-2">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="space-y-6 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-lg shadow-rose-100 transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none"
            >
              <div className="flex items-center gap-4">
                <span className="rounded-2xl bg-rose-100/80 p-3 text-rose-600 dark:bg-rose-500/20 dark:text-rose-200">
                  <service.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{service.title}</h3>
              </div>
              <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
                {service.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {service.subsections ? (
                <div className="space-y-6 rounded-2xl border border-rose-200 bg-rose-50/70 p-6 text-slate-900 shadow-sm dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-100">
                  {service.subsections.map((subsection) => (
                    <div key={subsection.title} className="space-y-3">
                      <h4 className="text-lg font-semibold">{subsection.title}</h4>
                      {subsection.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-sm leading-6">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-rose-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Conclusion</h2>
          <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">{CONCLUSION_PARAGRAPH}</p>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-10 text-center shadow-lg shadow-rose-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-wide text-rose-700 dark:text-rose-200">About the author</p>
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
                Experience configuration options
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild className="bg-rose-600 text-white hover:bg-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400">
              <Link href={contactHref}>
                Align with implementation leads
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
