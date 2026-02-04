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
  ChatCircleText,
  EnvelopeOpen,
  GlobeHemisphereWest,
  Handshake,
  Lightning,
  MegaphoneSimple,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";
import { ArrowRight } from "lucide-react";

export const dynamic = "force-static";

type Highlight = {
  title: string;
  description: string;
};

type Example = {
  name: string;
  description: string;
};

type Tip = {
  title: string;
  description: string;
};

const INTRO_PARAGRAPHS = [
  "Have you ever explored the notion of the popularity behind network marketing? Multi-level marketing is a new avenue of opportunity where personal growth intertwines with entrepreneurship, relationships become the building blocks of success, and innovation meets financial independence.",
  "Recently, I met my old college mate. She is a mother of two kids and an independent entrepreneur. She had been passionate about interacting with people and hearing about their problems. For her, network marketing was a great opportunity to solve problems by providing the best products that help them live healthier lives.",
  "Network marketing is an evolving landscape that has captivated the minds and hearts of countless individuals seeking to build a better future for themselves and their families. The unique strategies, unwavering resilience, and special rule book they follow to transform passion into prosperity set apart network marketing from all other business models in the world."
];

const DEFINITIONS = [
  {
    title: "What is network marketing?",
    description:
      "Network marketing has emerged as a fantastic business opportunity for individuals that involves a network of distributors to promote and sell products or services directly to customers, recruit new members to join the network, and earn commissions from their sales as well. Since network marketing is a competitive industry, marketers need to employ effective marketing strategies and tactics to achieve long-term success. It helps to drive sales and foster growth and sustainable income."
  },
  {
    title: "Network marketing plan",
    description:
      "Network marketers need to follow a systematic approach in order to achieve their business goals and the plan that outlines these approaches is simply referred to as a network marketing plan. In this plan, you could see a range of elements including product details, target audience identification, marketing strategies, sales tactics, training programs, and many more. By using this strategic framework, individuals can navigate the complexities of multi-level marketing, make appropriate decisions, allocate resources efficiently and work brilliantly towards building a sustainable business."
  }
];

const EXAMPLES_INTRO =
  "People always look up to success stories. In network marketing, established companies play a crucial role in the decision-making process of budding MLM entrepreneurs. Here are some examples of successful direct-selling companies;";

const EXAMPLES: Example[] = [
  {
    name: "Amway",
    description:
      "Amway is one of the largest and most successful network marketing companies in the world. It promotes and markets beauty and healthcare products across the globe. The sales representatives of Amway who carry out the operations are typically called Independent business owners."
  },
  {
    name: "Herbalife",
    description:
      "The company focuses predominantly on nutrition, weight management, and personal care products worldwide. The independent members of Herbalife not only promote their products but also help millions of people live healthier lives."
  },
  {
    name: "Avon",
    description:
      "Avon is one of the most outstanding beauty brands in the world. The main attraction of this company is that the majority of the distributors are females, who are usually called Avon ladies. They are involved in selling beauty products to a variety of customers through Catalogs, online platforms, and in-person interactions."
  },
  {
    name: "Mary Kay",
    description:
      "The Mary Kay independent beauty consultants promote cosmetics and skin care products to potential customers from different parts of the world. It is one of the top network marketing companies."
  }
];

const TIPS_INTRO =
  "How to be successful in network marketing? Addressing this question is complex. Success is not guaranteed in MLM, but approaching this business model with the right strategies can produce unbelievable results. For beginners, entering the world of direct selling is not easy. The path may be troublesome, but you can start your journey on the right foot and increase your chances of success by following these tips.";

const TIPS: Tip[] = [
  {
    title: "Choosing the right company",
    description:
      "If you are looking for an MLM opportunity, the first and most important step is to choose the right MLM company. Research thoroughly about established network marketing companies with track records of success and choose the best of them. Make sure that you have developed a clear understanding of the product you are interested in and select a company that aligns with your passion."
  },
  {
    title: "Understand the compensation plan",
    description:
      "Familiarize yourself with the compensation plan of the company. Having a deep understanding of MLM compensation plans will help you set realistic income goals. There are a wide variety of compensation packages. Understand how you will be rewarded for your efforts."
  },
  {
    title: "Educate yourself",
    description:
      "Learning is the key to success. Take your time to educate yourself about the concept of network marketing and how it works. Product knowledge is crucial in MLM as it helps to build a healthy relationship with potential customers. Have a clear idea of the products and services you are offering."
  },
  {
    title: "Set clear goals",
    description:
      "Dream big and achieve big. This should be your motto. Set long-term and short-term goals for your multi-level marketing business. Defining specific and achievable goals will give you direction and motivation in the long run."
  },
  {
    title: "Practice effective communication",
    description:
      "Network marketing is all about communicating with your prospects and building a connection with them. Listen carefully to the needs of customers and engage with them appropriately. Present your products and business opportunities in the most appealing way."
  },
  {
    title: "Build relationships",
    description:
      "Effective communication will help you build genuine relationships with customers. Be loyal to your prospects and address their concerns. Building trust and rapport is key to long-term success."
  },
  {
    title: "Using social media",
    description:
      "Social media is becoming a powerful platform to connect with a larger audience. Utilize social media platforms such as Facebook, Twitter, Instagram, and LinkedIn to build relationships with prospects from different parts of the world. Share valuable content, success stories, and information about your products and services. Showcase your products in a compelling way and attract customers. Be authentic and embrace effective conversations to build a community around the business."
  }
];

const EMAIL_COMPONENTS = [
  "Subscriber list This involves building a list of people who have chosen to receive your emails. This can be expanded via lead generation campaigns, website sign-up forums, and other techniques.",
  "Content creation This involves building a list of people who have chosen to receive your emails. This can be expanded via lead generation campaigns, website sign-up forums, and other techniques.",
  "Testing and organization This involves building a list of people who have chosen to receive your emails. This can be expanded via lead generation campaigns, website sign-up forums, and other techniques.",
  "Analytics and tracking This involves building a list of people who have chosen to receive your emails. This can be expanded via lead generation campaigns, website sign-up forums, and other techniques."
];

const SEO_COMPONENTS = [
  "Keyword research Identifying the appropriate keywords and phrases that potential customers may use to look up products , services, or information relevant to your website. The generation of content and efforts at optimization is guided by keyword research.",
  "On-page SEO Optimizing individual pages for target keywords.",
  "Content creation Creating quality content that addresses the requirements of your customers. Content should be informative and engaging."
];

const DIGITAL_PARAGRAPH =
  "We all know that the landscape of direct selling has changed with the invention of the internet and other technologies. Online platforms have created vast opportunities for businesses to connect with a large number of customers. Online marketing or digital multi-level marketing has reshaped all forms of traditional marketing strategies and leveraged the power of the internet to engage with a global audience. As the online world evolves, network marketers should adopt innovative strategies to remain competitive in the marketplace. The digital era is offering opportunities and continues to shape the future of network marketing.";

const EVOLUTION_PARAGRAPH =
  "Personal contacts and face-to-face encounters have long been key to traditional network marketing. However, the digital era has opened up new opportunities for marketers to reach beyond geographical boundaries. Online network marketing arose as a logical step, capitalizing on the power of social media platforms, e-commerce websites, and communication tools.";

const DIGITAL_STRATEGIES: Highlight[] = [
  {
    title: "Digital branding and presence",
    description:
      "In the world of online network marketing, branding, and online presence are paramount factors. Branding reflects a lot of things-your values, mission, and what you stand for. Think of branding as the most effective strategy to succeed in network marketing. It calls the attention of the audience immediately when they see you or hear about you. Your online presence determines your personality and the way you handle your marketing needs. It is the way you show up on the internet and share interesting stuff. Being active on social media, having a cool website, and sharing helpful content are all part of your online presence. Therefore, it is crucial to have a strong brand and online presence to make genuine connections with your customers."
  },
  {
    title: "Content Marketing",
    description:
      "Imagine stepping into an aesthetically pleasing library, where shelves are arranged with books of all genres, waiting to be explored by wide readers. Content marketing is like crafting stories for these books. Stories that captivate hearts, enlighten minds, and leave a lasting impression on those who read them. In MLM, content marketing is the most effective way to attract more customers within a short period of time. It is about creating engaging, valuable, and informative content such as blog posts, videos, and webinars that could invite them to journey alongside you. In this way, you can attract potential leads and become an expert in the network marketing industry."
  },
  {
    title: "Social Media Engagement",
    description:
      "In my grandmother’s village, there was a huge banyan tree, under which people used to gather during the evenings to share stories. People from all walks of life come there to exchange ideas and connect on a personal level. Social media engagements in direct selling have become a meeting place for various individuals who are interested in promoting particular products and services, individuals who are consumers, and people who are passionate about learning this business model. They reach out, engage in conversations, and build relationships that go beyond business. Just like sharing a warm smile and kind words that can leave an incredible impression in the physical world, a digital space also lets you leave a beautiful mark in the form of meaningful thoughts, genuine tips, likes, and comments. By actively participating in these engagements, you can stay ahead of the competition."
  },
  {
    title: "Email Marketing",
    description:
      "Email marketing is a subtle yet powerful online marketing tool that allows you to spark connections in the realm of the digital world. Remember, email marketing is not just sending messages; it is an art of connection, a bridge between screens. It is a cost-effective, direct way to approach your potential leads and establish new bonds. Here are some of the key components of email marketing;"
  },
  {
    title: "Search Engine Optimization",
    description:
      "In the realm of digital marketing, SEO plays an important role. The primary goal of SEO is to improve the visibility of your website on search engine result pages. By employing various techniques and optimizing several aspects of the site, you can increase organic traffic to a website."
  },
  {
    title: "Virtual Events and Webinars",
    description:
      "Conducting virtual events and webinars is one of the most effective ways to connect with people. It is an innovative platform that facilitates engagement in a digital environment. In network marketing, the demand for virtual events and webinars is increasingly vital. Virtual events encompass a wide range of activities including conferences and workshops. These events leverage various technologies to replicate the interactive and immersive aspects of personal meetings, offering features like live presentations, chat boxes, and virtual booths. Contrarily, webinars are a particular type of virtual event designed to convey instructional or enlightening information to a specified audience. Webinars, which are frequently delivered live, provide hosts the opportunity to show slides, videos, and other materials while interacting with attendees through Q&A sessions, polls, and chat features. They provide a direct route for exchanging knowledge, encouraging interaction, and developing bonds with guests."
  }
];

const CONCLUSION =
  "We have thoroughly explored the strategies that may help individuals succeed in the network marketing industry. In this ever-evolving landscape of digital marketing, Success depends on a dynamic mix of tactics that change with emerging trends and customer preferences.";

const CTA = {
  heading: "Ready to Start Your Network Marketing Business?",
  description: "Launch and manage your business with ease using our powerful MLM software.",
  label: "Book a demo"
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
  const title = "Top network marketing strategies";
  const description =
    "Story-driven guidance on foundational and digital-first strategies that keep modern MLM entrepreneurs connected, compliant, and growing.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/top-network-marketing-strategies", locale)
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

export default function TopNetworkMarketingStrategiesPage({ params }: PageProps) {
  const locale = resolveLocale(params.lang);
  const demoHref = buildLocalizedPath("/contact", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden rounded-[44px] border border-rose-200 bg-gradient-to-br from-rose-50 via-white to-sky-50 shadow-2xl dark:border-rose-500/30 dark:from-slate-950 dark:via-slate-900 dark:to-sky-950/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.2),transparent_65%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.12),transparent_72%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.3),transparent_70%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.22),transparent_78%)]" />
        <div className="relative grid gap-12 px-6 py-16 sm:px-12 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)] xl:px-20">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-rose-700 dark:border-rose-500/30 dark:bg-slate-900/70 dark:text-rose-200">
              Field-tested guidance
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              Top Network marketing strategies
            </h1>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Walk through real stories, foundational playbooks, and digital-first tactics that help you cultivate a resilient network marketing business.
            </p>
          </div>
          <div className="rounded-[32px] border border-white/60 bg-white/85 p-8 text-sm leading-6 text-slate-700 shadow-2xl backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/80 dark:text-slate-200">
            <p>
              Success in direct selling blends empathy, discipline, and experimentation. Use these strategies to build a vibrant community, honour compliance, and unlock sustainable revenue.
            </p>
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {INTRO_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph} className="rounded-[28px] border border-slate-200 bg-white/90 p-6 text-sm leading-7 text-slate-700 shadow-lg dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="container space-y-8">
        {DEFINITIONS.map((item) => (
          <div key={item.title} className="rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{item.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Examples of network marketing</h2>
        <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">{EXAMPLES_INTRO}</p>
        <div className="grid gap-6 lg:grid-cols-2">
          {EXAMPLES.map((example) => (
            <div
              key={example.name}
              className="rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
            >
              <p className="text-lg font-semibold text-slate-900 dark:text-white">{example.name}</p>
              <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{example.description}</p>
            </div>
          ))}
        </div>
        <p className="rounded-3xl border-l-4 border-sky-500 bg-slate-50/80 p-5 text-sm leading-6 text-slate-700 dark:border-sky-500/60 dark:bg-slate-900/70 dark:text-slate-300">
          {TIPS_INTRO}
        </p>
      </section>

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <Handshake className="h-6 w-6 text-rose-600 dark:text-rose-300" weight="fill" aria-hidden />
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Network marketing tips for beginners</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {TIPS.map((tip) => (
            <div
              key={tip.title}
              className="rounded-[28px] border border-slate-200 bg-white/90 p-6 text-sm leading-6 text-slate-700 shadow-lg dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300"
            >
              <p className="font-semibold text-slate-900 dark:text-white">{tip.title}</p>
              <p className="mt-2">{tip.description}</p>
            </div>
          ))}
        </div>
        <p className="rounded-3xl border-l-4 border-sky-500 bg-slate-50/80 p-5 text-sm leading-6 text-slate-700 dark:border-sky-500/60 dark:bg-slate-900/70 dark:text-slate-300">
          {DIGITAL_PARAGRAPH}
        </p>
      </section>

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <GlobeHemisphereWest className="h-6 w-6 text-sky-600 dark:text-sky-300" weight="fill" aria-hidden />
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">The evolution of online network marketing</h2>
        </div>
        <p className="rounded-[28px] border border-slate-200 bg-white/90 p-6 text-sm leading-7 text-slate-700 shadow-lg dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
          {EVOLUTION_PARAGRAPH}
        </p>
      </section>

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <MegaphoneSimple className="h-6 w-6 text-rose-600 dark:text-rose-300" weight="fill" aria-hidden />
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Online marketing strategies in direct selling</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {DIGITAL_STRATEGIES.map((strategy) => (
            <div
              key={strategy.title}
              className="rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900/70"
            >
              <p className="text-lg font-semibold text-slate-900 dark:text-white">{strategy.title}</p>
              <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{strategy.description}</p>
              {strategy.title === "Email Marketing" && (
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {EMAIL_COMPONENTS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {strategy.title === "Search Engine Optimization" && (
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {SEO_COMPONENTS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Conclusion</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">{CONCLUSION}</p>
        </div>
      </section>

      <section className="container rounded-[36px] border border-rose-200 bg-gradient-to-r from-rose-100 via-white to-sky-50 p-10 shadow-xl dark:border-rose-500/30 dark:from-slate-950 dark:via-slate-900 dark:to-sky-950/50">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{CTA.heading}</h2>
            <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{CTA.description}</p>
            <Button
              asChild
              className="rounded-full bg-rose-600 px-6 py-2 text-white shadow-lg shadow-rose-500/30 transition hover:bg-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400"
            >
              <Link href={demoHref}>{CTA.label}</Link>
            </Button>
          </div>
          <div className="rounded-[28px] border border-white/60 bg-white/85 p-6 text-sm leading-6 text-slate-700 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300">
            <p>
              Automate onboarding journeys, replicate compliant stories, and empower your field with analytics-driven roadmaps that make every conversation count.
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
