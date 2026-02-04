import type { Metadata } from "next";
import Link from "next/link";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote, Sparkles } from "lucide-react";
import { Quotes } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type QuoteItem = {
  title: string;
  quote: string;
  author: string;
  paragraphs: string[];
};

type FaqItem = {
  question: string;
  answer: string;
};

const INTRO_PARAGRAPH =
  "Motivation is the fuel for success. Network marketing is a combination of personal relationships, patience, and hard work. Therefore, a little motivation is needed for the achievement of great results. The right words can make a huge difference, and it will ultimately reflect in the effort you put into your business. There are many ways in which you can inspire your associates to work harder and better themselves. Conducting workshops and events featuring motivational speakers can be inspiring. However, it is not possible to make them happen regularly. And we have one feasible way to motivate them, and that is supplying them with motivational network marketing quotes.";

const CURATION_NOTE =
  "In this article, we have curated 10 inspiring MLM quotes that serve as powerful reminders of your true potential.";

const QUOTE_ITEMS: QuoteItem[] = [
  {
    title: "Robert Kiyosaki Quote on Network Marketing",
    quote:
      "\"Network marketing gives you the opportunity to face your fears, deal with them, overcome them, and bring out the winner that you have living inside you.\"",
    author: "Robert T. Kiyosaki",
    paragraphs: [
      "Network marketing boosts your confidence in many ways. It is not just about selling products but a journey of self-development. Network marketing represents challenges, rejections, public speaking, networking, and stepping out of your comfort zones. It allows you to confront your fears and prepares you to overcome them. As you persist and grow through these experiences, you build confidence and resilience."
    ]
  },
  {
    title: "Jim Rohn Quote on Network Marketing",
    quote:
      "\"Network marketing is the big wave of the future. It's taking the place of franchising, which now requires too much capital for the average person.\"",
    author: "Jim Rohn",
    paragraphs: [
      "MLM has stormed other business models with its unique features and low investment costs. Compared to franchising, network marketing allows individuals to step into entrepreneurship with lower upfront costs and financial benefits. By utilizing personal relationships and technology, MLM has become a modern alternative to traditional franchising, and a growing trend in the business world."
    ]
  },
  {
    title: "Mary Kay Ash Quote on Network Marketing",
    quote:
      "\"Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.\"",
    author: "Mary Kay Ash",
    paragraphs: [
      "Direct selling gives you the freedom to expand your thoughts and go forward according to your desires. You can achieve big things from scratch and build a community to motivate others. This quote gets you thinking about how powerful your idea can be, and if you do not limit yourself, you can create wonders.",
      "Mary Kay urges that it is all our beliefs that result in our achievements."
    ]
  },
  {
    title: "Stephen Covey Quote on Network Marketing",
    quote:
      "\"Effective network marketing is discipline, carrying out your vision, doing what you commit to doing.\"",
    author: "Stephen Covey",
    paragraphs: [
      "In one way or another, network marketing is daily habits, reliability, and focused action. It is not just about ambition , rather a discipline itself. If you are confident in your vision, you have to consistently act on them. Being effective also means following your commitments."
    ]
  },
  {
    title: "Brian Carruthers Quote on Network Marketing",
    quote:
      "\"I have never witnessed a complainer, gossiper, or a negative person make it to the top in network marketing.\"",
    author: "Brian Carruthers",
    paragraphs: [
      "This quote underscores the importance of mindset and attitude in achieving success in network marketing. Complainers, gossipers, and negative individuals often drain energy and focus, both for themselves and others around them. In contrast, network marketing requires positivity, resilience, and the ability to uplift and lead others."
    ]
  },
  {
    title: "Jordan Adler Quote on Network Marketing",
    quote:
      "\"Two philosophies for success in Network Marketing: 1. Don't quit on a bad day. 2. Never let a crisis turn into ruin. Crisis is temporary, ruin is 'you're done.\"",
    author: "Jordan Adler",
    paragraphs: [
      "This quote stresses emotional resilience. Don't make decisions based on temporary struggles, and never let setbacks define your outcome. Stay committed, bad days pass, but quitting makes it permanent."
    ]
  },
  {
    title: "Mike Davidson Quote on Network Marketing",
    quote:
      "\"It's all about people. It's about networking and being nice to people and not burning any bridges.\"",
    author: "Mike Davidson",
    paragraphs: [
      "Every connection matters in network marketing. Success is backed by genuine personal relationships and commitments. It gives the freedom to promote your products and services with a mass audience just through word of mouth advertising. Therefore, it is very important to maintain the trust and good will with your clients."
    ]
  },
  {
    title: "Brian Tracy Quote on Network Marketing",
    quote:
      "\"Network marketing is based purely on relationship selling, which is the state of the art in selling today. Small and large companies throughout the country and the world are realizing that individuals selling to their friends and associates is the future of sales, because the critical element in buying is trust.\"",
    author: "Brian Tracy",
    paragraphs: [
      "Network marketing heavily relies on trust and connections. People prefer to buy things from trusted and known individuals. Personal selling is an effective strategy in today’s marketing landscape that turns everyday conversations into permanent businesses. Utilizing trust as the cornerstone of purchases, network marketing has grown into a unique business model in modern sales."
    ]
  },
  {
    title: "Richard Brooke Quote on Network Marketing",
    quote:
      "\"In Network marketing, the people who attract, train and motivate the most sales people earn the most money.\"",
    author: "Richard Brooke",
    paragraphs: [
      "Success is all about building and leading a team of successful people. Those who can attract, train, and inspire others to sell effectively create a multiplying effect. The more skilled and motivated your team, the greater your income potential."
    ]
  },
  {
    title: "Bob Proctor Quote on Network Marketing",
    quote:
      "\"What you sow, you reap. It's a law of nature. Network Marketing is perfectly aligned with that. You truly get exactly what you're worth! No nepotism, no favoritism. That's rare today.\"",
    author: "Bob Proctor",
    paragraphs: [
      "This quote highlights the importance of individual effort that a person pours into their business. Network marketing is not about favoritism but hard work. There is no easy way to reach success; you will get what you give."
    ]
  }
];

const CONCLUSION_PARAGRAPHS = [
  "These motivational MLM quotes will inspire you to break the shackles and come out of your comfort zone. By having a positive mindset and confidence, you will be able to be the boss of yours and rule the industry for a timeless period. Each quote unfolds the beauty of courage, optimism, leadership, and personal relationships."
];

const FAQS: FaqItem[] = [
  {
    question: "What are some lesser-known network marketing quotes that inspire?",
    answer:
      "\"Be so committed to your dreams that you're willing to endure discomfort.\" – Unknown. \"Work your business like you paid a million dollars for it.\" – Holton Buggs."
  },
  {
    question: "How can I use network marketing quotes to motivate my team?",
    answer:
      "Share quotes in daily text messages, team meetings, or social posts to uplift, align goals, and reinforce a success-driven mindset."
  },
  {
    question: "Are there any quotes for network marketers specifically about overcoming obstacles?",
    answer: "\"Obstacles are the cost of greatness.\" – Robin Sharma. \"Every 'no' brings you closer to a 'yes'.\" – Eric Worre."
  },
  {
    question: "What are the most popular network marketing inspirational quotes on social media?",
    answer:
      "\"Your income is directly related to your personal development.\" – Jim Rohn. \"If you're not willing to learn, no one can help you. If you're determined to learn, no one can stop you.\" – Zig Ziglar.."
  },
  {
    question: "Can you share some network marketing quotes that focus on personal growth?",
    answer:
      "\"Success is something you attract by the person you become.\" – Jim Rohn. \"Network marketing is not about selling; it's about growing people.\" – Ivan Misner."
  }
];

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
  const title = "Motivational Network Marketing Quotes";
  const description =
    "Discover 10 motivational network marketing quotes that recharge your mindset, spark leadership, and keep your team inspired through every business milestone.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/motivational-network-marketing-quotes", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MotivationalQuotesPageProps = {
  params: { lang: SupportedLocale };
};

export default function MotivationalQuotesPage({ params }: MotivationalQuotesPageProps) {
  const locale = resolveLocale(params.lang);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const resourcesHref = buildLocalizedPath("/resources", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-purple-100/80 bg-purple-50/70 py-20 shadow-2xl dark:border-purple-500/30 dark:bg-slate-950/40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.4),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.35),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.2),transparent_70%)]" />
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-200/50 blur-3xl dark:bg-purple-500/20" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-500/20" />
        <div className="container relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-700 dark:border-purple-500/40 dark:bg-slate-900/70 dark:text-purple-200">
              <Sparkles className="h-4 w-4" aria-hidden />
              Introduction
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              Motivational network marketing quotes
            </h1>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{INTRO_PARAGRAPH}</p>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{CURATION_NOTE}</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="bg-purple-600 text-white hover:bg-purple-500 dark:bg-purple-500 dark:hover:bg-purple-400"
              >
                <Link href={demoHref}>
                  Share quotes with your team
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Link href={resourcesHref}>
                  Explore leadership resources
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-5 rounded-3xl border border-white/70 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/60">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Quotes className="h-8 w-8 text-purple-600 dark:text-purple-300" weight="fill" aria-hidden />
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Mindset boost</p>
              </div>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                Drop one quote per day into your community channel, morning huddles, or onboarding sequences—consistency compounds belief.
              </p>
            </div>
            <div className="rounded-2xl border border-purple-100 bg-purple-50/90 p-6 dark:border-purple-500/30 dark:bg-purple-500/10">
              <p className="text-sm font-semibold uppercase tracking-wide text-purple-700 dark:text-purple-200">Field-tested tip</p>
              <p className="mt-2 text-sm leading-6 text-purple-900 dark:text-purple-100">
                Pair a quote with a micro-action (call three prospects, host a live, celebrate a win) to convert inspiration into progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="flex items-center gap-3">
          <Quote className="h-6 w-6 text-purple-600 dark:text-purple-300" aria-hidden />
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Top 10 network marketing motivational quotes</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {QUOTE_ITEMS.map((item, index) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl backdrop-blur dark:border-white/10 dark:bg-slate-900/60"
            >
              <div className="absolute -top-10 right-0 h-36 w-36 rounded-full bg-purple-100/60 blur-3xl dark:bg-purple-500/20" aria-hidden />
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-300">#{index + 1}</span>
                <Quote className="h-5 w-5 text-purple-500 dark:text-purple-200" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <blockquote className="mt-4 rounded-2xl border border-purple-100 bg-purple-50/80 p-4 text-sm italic leading-6 text-purple-900 dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-100">
                {item.quote}
                <footer className="mt-2 text-xs font-semibold uppercase tracking-wide">{item.author}</footer>
              </blockquote>
              <div className="mt-4 space-y-3">
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
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

      <section className="container space-y-8">
        <div className="flex items-center gap-3">
          <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-300" aria-hidden />
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {FAQS.map((faq) => (
            <div key={faq.question} className="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{faq.question}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">About the author</p>
          <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{AUTHOR.name}</p>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{AUTHOR.role}</p>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{AUTHOR.bio}</p>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
