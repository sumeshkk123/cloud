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
  BluetoothSearching,
  CalendarDays,
  ChartPie,
  Laptop,
  Layers,
  Mail,
  PlaySquare,
  Users
} from "lucide-react";
import { ChatCircleDots, Lightning, MagnetStraight } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type Highlight = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

type Stage = {
  title: string;
  description: string;
};

type Strategy = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

const INTRO_PARAGRAPHS: string[] = [
  "Do you know what the key to success in business is? It is not always about chasing profits but creating a community that believes in your products and services.",
  "Recently, I met a young entrepreneur who has a passion for empowering others and changing their lives through direct selling. The spark in his eyes reflected his sincerity and dedication. When I inquired about his marketing tactics, he gave me a grin and made me speechless with his answer. I wondered how this young boy weaved a tapestry of support and mentorship to sell his products. It was eye-opening to me as I realized the importance of crafting a network of like-minded individuals and building opportunities to bring dreams to fruition.",
  "The success of network marketing is not a solitary journey. It is a collective effort. You can form a community of diverse individuals who share the same interests and passions and exchange knowledge and experiences with them. This will nurture a bond that goes beyond business."
];

const LEAD_GENERATION_PARAGRAPHS: string[] = [
  "What is MLM lead generation?",
  "MLM lead generation is the process of attracting people to your products and services and recruiting them to the MLM network. Lead generation is important as it allows distributors to expand their network and build a community of like-minded people who are interested in the products as well as the business opportunity.",
  "Leads are the lifeblood of an MLM business model, as they provide the foundation for building a strong and thriving network marketing team. Lead generation involves several stages. It uses various sustenance plans to generate interest in prospects and convert them into long-term customers. Finding quality leads is a tricky process. Through the internet, you can find your prospects quite effortlessly. But it’s important to recognize where your target market is and convert them into customers."
];

const STAGES: Stage[] = [
  {
    title: "Identifying the target audience",
    description:
      "The first and foremost step in MLM lead generation is identifying your specific audience. Reach out to individuals who may be interested in your product or business. You can initiate your marketing strategies if you possess a clear understanding of your target audience."
  },
  {
    title: "Lead capture",
    description:
      "At this step, potential lead’s contact information is collected. Website opt-in forms, landing pages, social media lead forms, and collecting business cards at events are all common techniques. The objective is to gain permission to follow up and communicate further."
  },
  {
    title: "Lead capture",
    description: "Lead qualification is important as you need to assess the level of interest of your prospects. Also, check their potential to fit your fit MLM business."
  },
  {
    title: "Lead nurturing",
    description:
      "Lead nurturing is the process of building relationships over time. It may include email-mail marketing, content-marketing, social media engagement, and many more. It is essential that you provide valuable information that educates and builds trust. Once you get enough leads, you can close the enrollment and welcome them officially."
  },
  {
    title: "Follow-up and support",
    description:
      "You should provide ongoing support and training for the participants. Lead generation demands maintaining a good relationship with the downlines for the overall success of the MLM business."
  }
];

const STRATEGY_INTRO =
  "Lead generation strategies for direct selling\nMLM lead generation companies employ various strategies to succeed in network marketing. Let’s delve into the best MLM lead-generation strategies that are widely used in direct selling.";

const STRATEGIES: Strategy[] = [
  {
    title: "Social Media",
    description:
      "Ninety percent of the world’s population relies on social media platforms to acquire information. Assuredly, social media platforms are excellent choices to identify your target audience. Facebook, Twitter, and Instagram are powerful platforms that are used by more than half the people in the universe. You can connect with your potential customers by actively leveraging these platforms. Create engaging and appealing content and post it regularly. Call the attention of people towards your product by displaying product images, videos, and customer testimonials. Interact with your followers constantly and respond to their inquiries. Make use of social media advertising to reach a larger audience.",
    icon: Users
  },
  {
    title: "Host virtual product demonstrations",
    description:
      "Product demonstrations are the classic way of selling in network marketing. Since digital technology has reshaped traditional product display through face-to-face interactions, and social gatherings, the best network marketing leads have adopted virtual meetings to showcase their products to potential customers. These online events include video conferences through Skype, Zoom, or Google Meet. During the meeting, explain the product details, its advantages and other benefits. Invite people by employing the tactic of offering discounts and other offerings.",
    icon: PlaySquare
  },
  {
    title: "Email Marketing",
    description:
      "Email marketing is the best way to nurture MLM leads. E-mail marketing could empower a lot of network marketing companies from scratch. It is the easiest and most affordable way to reach a lot of people. All you need to do is collect email addresses from interested prospects and keep them updated about your products and services.",
    icon: Mail
  },
  {
    title: "Free workshops and webinars",
    description:
      "You can conduct free workshops and webinars to educate prospects about your products and related industries. Invite the maximum number of people to this event and promote it through social media platforms. Engage in interesting conversations and attract customers to learn more about your services.",
    icon: CalendarDays
  },
  {
    title: "Create an engaging lead magnet",
    description:
      "Creating an engaging lead magnet is a good choice to generate MLM leads. It is the method of providing offerings and incentives to your prospects in exchange for their contact information. In this way, you can attract the attention of your customers. Additionally, MLM lead magnets are a powerful strategy for growing your email list.",
    icon: MagnetStraight
  }
];

const SOFTWARE_PARAGRAPHS: string[] = [
  "MLM lead generation software",
  "In this current scenario of network marketing, online methods are the easiest way to generate leads. MLM Lead generation software is a tool designed specifically for network marketers to track leads. By integrating lead MLM software into your network marketing, you can generate fresh and responsive leads.",
  "The key features of MLM lead generation software are;"
];

const SOFTWARE_FEATURES: string[] = [
  "Lead capture pages",
  "Lead segmentation",
  "Automated Email marketing",
  "Analytics and reporting",
  "Compliance and data protection"
];

const CONCLUSION_PARAGRAPHS: string[] = [
  "Conclusion",
  "The best MLM leads are assets for any direct selling company. They possess a true need or desire for the product or service and the business opportunities that are being offered. Always focus on generating the best MLM leads through which you can build a motivated team and achieve sustainable results in your multi-level marketing business."
];

const AUTHOR_BIO =
  "Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate about utilizing technology to drive growth and optimize business processes. Adept at analyzing market dynamics, delivering actionable insights, and staying ahead of industry developments.";

const HERO_INSIGHTS: Highlight[] = [
  {
    title: "Community-first mindset",
    description: "Build networks of believers before chasing quotas for sustainable MLM growth.",
    icon: Lightning
  },
  {
    title: "Story-driven selling",
    description: "Personal mentorship and shared experiences convert interest into loyalty.",
    icon: ChatCircleDots
  },
  {
    title: "Digital pipelines",
    description: "Combine online journeys with high-touch support to keep momentum alive.",
    icon: Laptop
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Lead Generation Strategies for Your Network Marketing Business";
  const description =
    "Build thriving MLM communities with proven lead generation stages, digital engagement tactics, and software tools designed for network marketing teams.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/lead-generation-strategies-for-your-network-marketing-business", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type LeadStrategiesPageProps = {
  params: { lang: SupportedLocale };
};

export default function LeadStrategiesPage({ params }: LeadStrategiesPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-50 via-sky-50 to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(129,140,248,0.2),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.25),transparent_60%),radial-gradient(circle_at_center,rgba(16,185,129,0.18),transparent_70%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(129,140,248,0.35),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.35),transparent_60%),radial-gradient(circle_at_center,rgba(16,185,129,0.28),transparent_70%)]" />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700 dark:border-sky-500/50 dark:bg-slate-900/60 dark:text-sky-200">
              <BluetoothSearching className="h-4 w-4" aria-hidden />
              Lead ecosystems
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              Lead generation strategies for your network marketing business
            </h1>
            <div className="space-y-4 text-lg leading-8 text-slate-700 dark:text-slate-200">
              {INTRO_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild className="bg-sky-600 text-white hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400">
                <Link href={demoHref}>
                  Explore lead automation
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Link href={contactHref}>
                  Craft your nurture journey
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-sky-200/70 bg-white/80 p-8 shadow-xl shadow-sky-100 backdrop-blur dark:border-sky-500/40 dark:bg-slate-900/70 dark:shadow-none">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-200">Foundational insights</span>
              <ChartPie className="h-5 w-5 text-sky-500 dark:text-sky-300" aria-hidden />
            </div>
            <div className="space-y-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {HERO_INSIGHTS.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-2xl border border-sky-100/70 bg-white/70 p-4 dark:border-sky-500/30 dark:bg-slate-900/50">
                  <item.icon className="mt-1 h-6 w-6 shrink-0 text-sky-500 dark:text-sky-300" aria-hidden />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-6">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-5 rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg shadow-sky-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
            {LEAD_GENERATION_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-base leading-7 text-slate-700 dark:text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg shadow-sky-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:border-emerald-500/50 dark:bg-slate-900/60 dark:text-emerald-200">
            <Layers className="h-4 w-4 text-emerald-500 dark:text-emerald-300" aria-hidden />
            Stages in MLM Lead Generation
          </span>
          <div className="relative mt-8">
            <div className="absolute bottom-0 left-[22px] top-0 w-px bg-gradient-to-b from-sky-200 via-sky-200/60 to-transparent dark:from-sky-500/40 dark:via-sky-400/30" aria-hidden />
            <div className="space-y-8 pl-12">
              {STAGES.map((stage, index) => (
                <div key={stage.title} className="relative rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-md shadow-sky-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
                  <div className="absolute left-0 top-6 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-sky-200 bg-white text-sky-700 shadow-sm dark:border-sky-500/40 dark:bg-slate-900 dark:text-sky-200">
                    {index + 1}
                  </div>
                  <div className="space-y-3 text-base leading-7 text-slate-700 dark:text-slate-300">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{stage.title}</h3>
                    <p>{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg shadow-sky-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300 whitespace-pre-line">{STRATEGY_INTRO}</p>
          <div className="grid gap-8 lg:grid-cols-2">
            {STRATEGIES.map((strategy) => (
              <article
                key={strategy.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-md shadow-sky-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-sky-100/80 p-3 dark:bg-sky-500/20">
                    <strategy.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{strategy.title}</h3>
                </div>
                <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{strategy.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-4xl space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg shadow-sky-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          {SOFTWARE_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph} className="text-base leading-7 text-slate-700 dark:text-slate-300">
              {paragraph}
            </p>
          ))}
          <ul className="grid gap-3 text-base leading-7 text-slate-700 dark:text-slate-300 sm:grid-cols-2">
            {SOFTWARE_FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-slate-700 dark:bg-slate-900/60">
                <Lightning className="mt-1 h-4 w-4 text-sky-500 dark:text-sky-300" aria-hidden />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white/90 p-12 text-center shadow-xl shadow-sky-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-200">{CONCLUSION_PARAGRAPHS[0]}</p>
          <p className="mt-6 text-base leading-7 text-slate-700 dark:text-slate-300">{CONCLUSION_PARAGRAPHS[1]}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-sky-600 text-white hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400">
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
                Map your lead engine
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-10 text-center shadow-lg shadow-sky-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-200">About the author</p>
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
