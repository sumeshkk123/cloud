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
  HeartHandshake,
  Lightbulb,
  Link2,
  Network,
  Shield,
  Sparkles,
  Users
} from "lucide-react";
import { ChatsCircle, Handshake, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type Pillar = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

type Section = {
  title: string;
  paragraphs: string[];
};

const INTRO_PARAGRAPHS: string[] = [
  "The network marketing industry is spreading exponentially. Have you wondered how this is happening? What strengthens multi-level marketing is the personal connection that it holds. Relationships are mandatory for the growth of the direct selling business.",
  "How do independent entrepreneurs form healthy personal connections? What strategies are they employing? Let’s take a close look at the tactics that MLM marketers use to grow their direct-selling businesses through connections.",
  "MLM can open doors to limitless opportunities and propel companies to new heights. This article unravels the significance of networking in MLM and explores strategies to leverage connections for business expansion."
];

const NETWORKING_PARAGRAPHS: string[] = [
  "Networking is not just an option, rather it is a necessity for any business model. If you want to achieve significant growth in the realm of marketing, you should understand the benefits of sharing knowledge and ideas with others to expand your business faster than ever before.",
  "Networking is the key to success. By strengthening your business connections, you will be able to achieve big targets and accelerate your opportunities. Any business requires a strong foundation. In MLM, networking is the block that builds the MLM empire. Network marketing is largely dependent on expanding networks of individuals who sell products and services and become independent distributors."
];

const CONNECTION_PILLARS: Pillar[] = [
  {
    title: "Get fresh ideas",
    description:
      "One of the major advantages of networking is that it helps people share ideas and receive different perspectives. Personal relationships help to connect with like-minded people and discuss business frequently. MLM representatives can strengthen their customer base through active social gatherings, networking events, and boosting sales.",
    icon: Lightbulb
  },
  {
    title: "Enrolling new distributors",
    description:
      "MLM relies on recruiting new participants to expand the network. By networking, one has the chance to get to know people who could be interested in becoming independent representatives for an MLM company. Representatives can recruit new downline members and grow their downline, which is an essential component of MLM, by highlighting the advantages and revenue possibilities of the MLM offer.",
    icon: UsersThree
  },
  {
    title: "Effective collaborations",
    description:
      "Networking allows several business partners to exchange information and collaborate with other professionals. This is very beneficial for marketers to grow their businesses beyond borders. They can find suitable partners who share similar interests and passions. It helps industry owners to stay updated about the latest trends and technology.",
    icon: Handshake
  },
  {
    title: "Building trust and credibility",
    description:
      "How can we attain long-term success in MLM? Here is the answer. The success of MLM heavily depends on trust and credibility. By fostering genuine relationships and loyalty, MLM leaders can build trust among their networks which ultimately leads to repeat sales.",
    icon: Shield
  },
  {
    title: "Support and motivation",
    description:
      "Multi-level marketing is a business model that has so many challenges and obstacles. Networking allows MLM agents to connect with peers who are facing the same challenges. It provides a support system that encourages motivation and a sense of community formation..",
    icon: ChatsCircle
  },
  {
    title: "Utilizing current relationships",
    description:
      "Utilizing Current Relationships: MLM reps may utilize their current interpersonal and professional connections via networking. Because there is already a degree of trust and familiarity built, friends, family, acquaintances, and coworkers can become prospective clients or distributors.",
    icon: Link2
  }
];

const ETHICS_PARAGRAPHS: string[] = [
  "While networking is necessary for MLM, it should be done ethically and with an eye toward establishing sincere relationships. Providing value, being honest, and respecting the boundaries of their network relationships should be the priorities for MLM representatives. Multi-level marketing success may be attributed to good networking, along with product expertise, strong work ethics, and communication process.",
  "Before joining an MLM organization, have a clear understanding of networking and its role in the success of any multi-level marketing business, highlighting how it may result in more revenues, a wider audience, and a wider network of distributors. Also, insist on the value of personal recommendations and the legitimacy that comes with them."
];

const CONCLUSION: Section = {
  title: "Conclusion",
  paragraphs: [
    "MLM business owners may increase their client base, find new distributors, and accelerate their total business growth by using the power of connections and developing solid relationships. This article discusses the value of networking in MLM and offers helpful advice on how to utilize networking to expand your MLM company. MLM entrepreneurs can enjoy the benefits and take their businesses to new levels of success by utilizing the true potential of networking."
  ]
};

const AUTHOR_BIO =
  "Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate about utilizing technology to drive growth and optimize business processes. Adept at analyzing market dynamics, delivering actionable insights, and staying ahead of industry developments.";

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "How to Grow Your MLM Business Through Connections";
  const description =
    "Learn why networking drives MLM growth and how to cultivate authentic relationships that unlock new distributors, collaborations, and long-term trust.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath(
        "/blog/how-to-grow-your-mlm-business-through-connections",
        locale
      )
    },
    openGraph: {
      title,
      description
    }
  };
}

type ConnectionsPageProps = {
  params: { lang: SupportedLocale };
};

export default function ConnectionsGrowthPage({ params }: ConnectionsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.35),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
          <div className="space-y-8 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide">
              <Sparkles className="h-4 w-4" aria-hidden />
              Connection-led growth
            </span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">How to grow your MLM business through connections</h1>
            <p className="text-lg text-slate-200">
              Build resilient communities, unlock new distributor networks, and reinforce trust by mastering the relationship-first tactics that
              power thriving direct selling organisations.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-slate-900">
              <Button asChild className="bg-white text-slate-900 hover:bg-slate-200">
                <Link href={demoHref}>
                  Unlock community playbooks
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-slate-500/70 text-white hover:bg-white/10">
                <Link href={contactHref}>
                  Talk to a network strategist
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-indigo-400/40 bg-indigo-500/10 p-8 backdrop-blur">
            <div className="flex items-center justify-between text-indigo-100">
              <span className="text-sm font-semibold uppercase tracking-wide">Why relationships dominate</span>
              <HeartHandshake className="h-5 w-5" aria-hidden />
            </div>
            <p className="text-sm text-indigo-100/80">
              A thriving MLM brand leverages meaningful interactions, ethical outreach, and consistent mentorship so every connection leads to shared
              momentum.
            </p>
            <div className="space-y-4 text-indigo-100">
              <div className="flex items-center gap-3 rounded-2xl border border-indigo-400/40 bg-indigo-500/10 p-4">
                <Users className="h-5 w-5 text-indigo-300" aria-hidden />
                Expand your influence with authentic community building.
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-indigo-400/40 bg-indigo-500/10 p-4">
                <Network className="h-5 w-5 text-indigo-300" aria-hidden />
                Translate connections into distributorship momentum.
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-indigo-400/40 bg-indigo-500/10 p-4">
                <Shield className="h-5 w-5 text-indigo-300" aria-hidden />
                Safeguard credibility through transparent, values-driven engagement.
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-indigo-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">Why connections matter</p>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              {INTRO_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-lg shadow-indigo-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
              How important is networking in multi-level marketing
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              {NETWORKING_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Strategies to strengthen your MLM connections</h2>
            <Users className="h-6 w-6 text-indigo-600 dark:text-indigo-300" aria-hidden />
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {CONNECTION_PILLARS.map((pillar, index) => (
              <article
                key={pillar.title}
                className="relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900/70"
              >
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-indigo-100/50 blur-3xl dark:bg-indigo-500/10" aria-hidden />
                <div className="flex items-center gap-4">
                  <span className="rounded-2xl bg-indigo-100/80 p-3 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200">
                    <pillar.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">Strategy {index + 1}</p>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)]">
          <div className="rounded-3xl border border-indigo-200 bg-indigo-50/70 p-8 text-slate-900 shadow-sm dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-100">
            <h2 className="text-2xl font-semibold">Lead with integrity</h2>
            <p className="mt-3 text-sm leading-6">
              Relationships thrive when built on respect. Use the guideposts below to ensure every interaction feels supportive and ethical.
            </p>
          </div>
          <div className="space-y-6">
            {ETHICS_PARAGRAPHS.map((paragraph) => (
              <p
                key={paragraph}
                className="rounded-3xl border border-slate-200 bg-white/80 p-6 text-base leading-7 text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-indigo-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{CONCLUSION.title}</h2>
          <div className="mt-4 space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
            {CONCLUSION.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-10 text-center shadow-lg shadow-indigo-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">About the author</p>
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
                Explore distributor tooling
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild className="bg-indigo-600 text-white hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400">
              <Link href={contactHref}>
                Design your network strategy
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
