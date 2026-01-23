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
  Globe2,
  Megaphone,
  MessageCircle,
  Share2,
  Sparkles
} from "lucide-react";
import { ChatsCircle, HashStraight, RocketLaunch } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

const INTRO_PARAGRAPHS = [
  "T here is a lot of competition at the moment and having a brand or a wide market area is not an easy job. Many factors have a positive and negative effect on your company and other factors will hold your company ahead in these harsh market environments. The success is followed by the brand value, and to remain competitive in the market, an MLM software development company always needs to build and retain its brand value to increase its reputation and profitability.",
  "The power of social media can be seen everywhere. The integration of social media into MLM business is reaping benefits as it presents an avenue for unparalleled potential. Every connection is strengthened through social media platforms. For personal and professional reasons, everyone is required to explore social media.",
  "How MLM businesses benefit from social media is an interesting question. In simple terms, the fusion of social media platforms and network marketing amplifies reach, engagement, and brand resonance. MLM is making use of popular social media platforms such as Facebook, Instagram, Twitter, and many more to showcase its products and services. Businesses tap into the power of real-time communication, viral sharing, and collaboration."
];

const RELATIONSHIP_PARAGRAPHS = [
  "Social media is an effective tool for building relationships and turning your followers into permanent customers. As likes, shares, and comments translate into leads, the fusion of social media and network marketing cultivates a positive culture, where your every move is a success.",
  "Social networking has become an integral part of our lives, and a strong resource for marketing. Social media links you not only to a wide group of people but also to a friendly and affordable forum where you can advertise your new or current goods and services. Most business houses use MLM software to perform fluent and detailed investigations. This software is incorporated with the Social Media features for their business strategy.",
  "A software company from MLM needs its customers to increase and they plan to bring its goods and services to the global market in order to achieve this goal. And for these social media sites, the marketing approach is an efficient way to deliver the best out and fulfill the needs of the customers. The milestone in this industry will become a brand and build a legacy that sounds like a fantasy but it is possible to follow up the right approach. Designing and designing new goods without marketing would never be enough for many business companies to get a positive response.",
  "Promoting or marketing any product is an unavoidable part of building up its own market area and it is becoming a higher priority for any company. In this market, where many companies come in and out without a return, including the recovery of capital that has invested in it. We know that it is important for MLM Software Development Company to be aware of them and informed in this industry where a new technique or new patterns are discovered every hour. Monitoring and tools are accessible on various social media platforms. Not only does the software company Network Marketing but promote their new strategies on the site. There are, however, several well-established MLM software companies that operate relatively well around the world.",
  "The social networking platform is a robust digital network that assists a client in the promotion and advertisement of online goods. Social networking is one of the best tools for ads. There are various web pages available, including video and audio advertising, e-commerce, e-payment, and a quick message uploading. If you grasp the principle then you will be aware of the latest trends and make a successful brand building strategy. If the product is online and successfully reaches a large market, you will certainly get results. In this digital world, social media-integrated MLM software is the marketing future where your goods draw audience eyes and highlight your MLM software company inside the mainframe.",
  "You only need a specialist who can guide you to overcome the problems on social media sites and to learn these skills and advertisements in social media. Cloud MLM software is an MLM software development company that provides the best MLM software having integration to all social media platforms."
];

const CTA_HEADING = "Contact us if you want to start the MLM business we provide the best MLM software for you.";

const AUTHOR = {
  name: "Experienced Research Analyst",
  bio: "Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate about utilizing technology to drive growth and optimize business processes. Adept at analyzing market dynamics, delivering actionable insights, and staying ahead of industry developments."
};

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Social Media Integration in MLM Business";
  const description =
    "See how social media-connected MLM software elevates brand reach, customer engagement, and distributor success across every platform.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/social-media-integration-in-mlm-business", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type SocialMediaPageProps = {
  params: { lang: SupportedLocale };
};

export default function SocialMediaIntegrationInMlmBusinessPage({ params }: SocialMediaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-100 via-white to-blue-100 shadow-2xl dark:border-purple-500/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.25),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.14),transparent_65%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_72%)]" />
        <div className="relative grid gap-10 px-6 py-20 sm:px-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] xl:px-20">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-purple-700 dark:border-purple-500/30 dark:bg-slate-900/70 dark:text-purple-200">
              <Share2 className="h-4 w-4" aria-hidden />
              Social reach accelerator
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              Leveraging Social Media to Enhance Brand Value in MLM Software Development
            </h1>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{INTRO_PARAGRAPHS[0]}</p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-purple-600 px-6 py-2 text-white shadow-lg shadow-purple-500/30 transition hover:bg-purple-500 dark:bg-purple-500 dark:hover:bg-purple-400"
              >
                <Link href={contactHref}>
                  Launch social-first MLM
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-purple-200 bg-white/80 px-6 py-2 text-purple-700 transition hover:bg-purple-100 dark:border-purple-500/40 dark:bg-slate-900/60 dark:text-purple-200 dark:hover:bg-slate-800"
              >
                <Link href={demoHref}>See integrations</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-5 rounded-3xl border border-white/70 bg-white/70 p-8 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Why social media matters</p>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{INTRO_PARAGRAPHS[1]}</p>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{INTRO_PARAGRAPHS[2]}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900/60">
                <MessageCircle className="h-5 w-5 text-purple-600 dark:text-purple-300" aria-hidden />
                <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">Amplify engagement</p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Turn every comment, like, and share into momentum for your field teams.
                </p>
              </div>
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-500/30 dark:bg-blue-500/10">
                <Globe2 className="h-5 w-5 text-blue-600 dark:text-blue-200" aria-hidden />
                <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">Reach global audiences</p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Deliver live promotions and stories that resonate across languages and regions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
            Transforming Followers into Customers: The Impact of Social Media on MLM Success
          </h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="space-y-4 text-sm leading-6 text-slate-700 dark:text-slate-200">
              {RELATIONSHIP_PARAGRAPHS.slice(0, 3).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="space-y-4 rounded-3xl border border-purple-100 bg-purple-50/70 p-6 text-sm leading-6 text-slate-700 shadow-lg dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-slate-200">
              {RELATIONSHIP_PARAGRAPHS.slice(3, 6).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-200 via-white to-purple-50 p-8 shadow-xl dark:border-purple-500/30 dark:from-purple-900/40 dark:via-slate-900 dark:to-slate-950">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-700 dark:border-purple-500/40 dark:bg-slate-900/70 dark:text-purple-200">
                <ChatsCircle className="h-4 w-4" aria-hidden />
                Always-on conversations
              </span>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                Build a social program that nurtures leads, empowers distributors, and paints a clear brand narrative.
              </p>
            </div>
            <RocketLaunch className="h-10 w-10 text-purple-600 dark:text-purple-300" aria-hidden />
          </div>
          <p className="mt-6 text-sm leading-6 text-slate-700 dark:text-slate-200">{CTA_HEADING}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              asChild
              className="rounded-full bg-purple-600 px-6 py-2 text-white shadow-lg shadow-purple-500/30 transition hover:bg-purple-500 dark:bg-purple-500 dark:hover:bg-purple-400"
            >
              <Link href={contactHref}>
                Connect with Cloud MLM Software
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">About The Author</p>
          <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{AUTHOR.name}</p>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{AUTHOR.bio}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1 dark:border-slate-700 dark:bg-slate-900">
              <Sparkles className="h-4 w-4" aria-hidden />
              Brand storytelling
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1 dark:border-slate-700 dark:bg-slate-900">
              <HashStraight className="h-4 w-4" aria-hidden />
              Social intelligence
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

