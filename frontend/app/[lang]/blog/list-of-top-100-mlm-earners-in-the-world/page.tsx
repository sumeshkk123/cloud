import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  BarChart4,
  Crown,
  LineChart,
  Medal,
  Trophy,
  Users
} from "lucide-react";
import { ChartLineUp, IdentificationBadge } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

const HERO_PARAGRAPHS: string[] = [
  "We have analyzed the top earners in network marketing and researched how they built their castles of success and fame in MLM. This blog will guide you through the details.",
  "Success is attained through continuous dedication and determination. All the leaders in MLM have struggled on this journey and developed the skills of leadership and communication.",
  "Most of them are independent entrepreneurs who established themselves as leaders."
];

const SUCCESS_STORY_PARAGRAPHS: string[] = [
  "The leaders of the MLM industry have achieved remarkable success and are ruling the industry with great power. Multi Level marketing has continually offered vast earning potentials, drawing entrepreneurs worldwide.",
  "Below is a list of the top 15 richest people in network marketing in 2025, highlighting their companies and estimated earnings."
];

const POST_LEADER_PARAGRAPHS: string[] = [
  "Each individual possesses unique talents and abilities.Their stories aren’t just personal reflections of their success but are an inspiration to many who want to build their own enterprise and become masters of the business world.",
  "These top earners showcase a blend of strategic networking, market savvy, and personal branding."
];

const CTA_LINES: string[] = [
  "The Next Success Story is Yours!",
  "Let’s Work Together",
  "Your name could be the next on the list of top MLM earners. Let Cloud MLM Software help you pave the way to success."
];

const TOP_LEADERS: { rankTitle: string; earnings: string; company: string; description: string }[] = [
  { rankTitle: "1, Igor Alberts & Andreea Cimbala", earnings: "Earnings :\u00a0 $2,400,000 monthly", company: "Company: Success Factory", description: "Igor and Andreea Cimbala are a famous Dutch couple who established a career in multilevel marketing and made it into a huge success. They are successful, focused, and independent entrepreneurs who gave rise to ‘Success Factory’, an MLM company that promotes the DagCoin cryptocurrency. Also, they train and educate the people about cryptocurrency and recruit interested individuals." },
  { rankTitle: "2, Trin & Jirawan Vichaidith", earnings: "Earnings: $1,945,000 monthly", company: "Company: Nu Skin", description: "This couple has mastered the art of international network expansion, especially in the Asia-Pacific region, leveraging Nu Skin’s diverse health and beauty products." },
  { rankTitle: "3, Ivan and Monica Tapia", earnings: "Earnings: $1,500,000 monthly", company: "Company: IM Mastery Academy", description: "They are known for their fame in the MLM industry. They provide vibrant and engaging training programs to individuals and encourage people to grow their own business. The Tapias have significantly impacted financial education through network marketing." },
  { rankTitle: "4, Jenna Zwagil", earnings: "Earnings: $1,000,000 monthly", company: "Company: MyDailyChoice", description: "Jenna Zwagil is the woman power of the MLM industry. She is famous not just for her leadership, but also for her role in advocating for CBD oil and wellness products, making a significant impact on network marketing." },
  { rankTitle: "5, Stormy Wellington", earnings: "Earnings:  $935,000 monthly", company: "Company: Total Life Changes", description: "Stormy stands out for her motivational approach and commitment to transforming lives through wellness products." },
  { rankTitle: "6, David Imonitie", earnings: "Earnings: $935,000 monthly", company: "Company: IM Mastery Academy", description: "David Imonitie is one of the top earners in the network marketing industry. He is the founder of Believe Nation, an award winning enterprise. He is known for his excellence in business and widely recognized in the network marketing community for his remarkable success and influential strategies." },
  { rankTitle: "7, Dexter Yager", earnings: "Earnings: $850,000 monthly", company: "Company: Amway", description: "Dexter Yager was a renowned figure in the network marketing industry, widely respected for his pivotal role in building one of the most successful distribution networks for Amway." },
  { rankTitle: "8, Natalia Yosco", earnings: "Earnings:  $760,000 monthly", company: "Company: APLGO", description: "Natalia Yosco has exceptional qualities as a leader. She is excelling through expertise in health supplements." },
  { rankTitle: "9, Kristian and Travis Butler", earnings: "Earnings: $720,000 monthly", company: "Company: Auvoria prime", description: "Kristian and Travis Butler have carved out a prominent place in the MLM industry through their association with Auvoria Prime, where they are celebrated for innovatively combining technology with traditional network marketing strategies." },
  { rankTitle: "10, Jeff Roberti", earnings: "Earnings: $710,000 monthly", company: "Company: Juice Plus+", description: "As a veteran in the direct selling industry, Jeff’s success and fame is a testament to his personal brand and deep commitment to health and wellness." },
  { rankTitle: "11, Kim Hui", earnings: "Earnings:  $700,000 monthly", company: "Company: Jeunesse Global", description: "Kim Hui is promoting health and wellness products, utilizing a global platform. She specializes in emotion regulation and stress management and helps people regain their health and wellness." },
  { rankTitle: "12, Stewart Hughes", earnings: "Earnings: $680,000 monthly", company: "Company: Unicity", description: "Ray and Daranee secured their position in the list of the top earners in the MLM industry with their determination and courage. Their strategy revolves around diverse health products." },
  { rankTitle: "13, Steve and Gina Merritt", earnings: "Earnings: $660,000 monthly", company: "Company: Monat Global", description: "They are well known for their leadership and excellence in crafting a business of their own. They are experts of the competitive beauty and personal care market." },
  { rankTitle: "14, Brian McClure", earnings: "Earnings:  $650,000 monthly", company: "Company: Ambit Energy", description: "Brian McClure is a notable figure in the MLM industry, particularly for his work with Ambit Energy, where he has achieved significant financial success." },
  { rankTitle: "15, John Haremza", earnings: "Earnings: $640,000 monthly", company: "Company: Valentus", description: "John Haremza is occupied in promoting the best health products to people all over the world. He specializes in nutritional supplements and weight management" }
];

const TOP_EARNERS_2025: { rank: string; name: string; company: string }[] = [
  { rank: "1", name: "Takashi Oyaizu", company: "Herbalife" },
  { rank: "2", name: "Jose Ardon", company: "Organo Gold" },
  { rank: "3", name: "Calvin Bacerra", company: "Jifu" },
  { rank: "4", name: "Adam & Michelle Carey", company: "Isagenix" },
  { rank: "5", name: "Danien Feier", company: "Unity Global" },
  { rank: "6", name: "Ana Cantera", company: "Total Life Changes" },
  { rank: "7", name: "Ed Bestoso", company: "Melaleuca" },
  { rank: "8", name: "Nobuhiro Kaneko", company: "Thanks AI" },
  { rank: "9", name: "Enrique and Graciela Varela", company: "Herbalife" },
  { rank: "10", name: "Seville and Rachaell Ko", company: "Melaleuca" },
  { rank: "11", name: "Ryan Higgins", company: "Truvy" },
  { rank: "12", name: "Robert Hollis", company: "MyDailyChoice" },
  { rank: "13", name: "Rafael Rojas", company: "Melaleuca" },
  { rank: "14", name: "Herson Antonio La Riva Ruvolo", company: "ByDzyne" },
  { rank: "15", name: "Jared and Heather Burnett", company: "LivePure" },
  { rank: "16", name: "Shane & Dana Douglas", company: "ACN" },
  { rank: "17", name: "Hayley Hobson", company: "DoTerra" },
  { rank: "18", name: "Anthony Napolitano", company: "iGenius" },
  { rank: "19", name: "Christian Nuñez", company: "ByDzyne" },
  { rank: "20", name: "Jesse and Patricia Macpherson", company: "Seacret Direct" },
  { rank: "21", name: "Rolf Kipp", company: "Forever Living Products" },
  { rank: "22", name: "Jeff and Maureen Miller", company: "Melaleuca" },
  { rank: "23", name: "Steve Thompson", company: "Ambit Energy" },
  { rank: "24", name: "Patrick and Allyse Sedivy", company: "DoTerra" },
  { rank: "25", name: "Juan Fernando Franco & Ivan Martinez", company: "BE" },
  { rank: "26", name: "Barry Chi & Holly Chen", company: "Amway" },
  { rank: "27", name: "Sunny Hsu & Debra Hsieh", company: "Amway" },
  { rank: "28", name: "Holton Buggs", company: "iBuumerang" },
  { rank: "29", name: "Danny & Dian De Vries", company: "IM Academy" },
  { rank: "30", name: "Curtis Broome", company: "Seacret Direct" },
  { rank: "31", name: "Marcus Setälä", company: "Oriflame" },
  { rank: "32", name: "Alan Nagao", company: "WorldVentures" },
  { rank: "33", name: "Gabriel & Natsuko Iwasaki", company: "Amway" },
  { rank: "34", name: "Tommy & Lila Nilsen", company: "Zinzino" },
  { rank: "35", name: "Fabrice Kerherve", company: "PM International" },
  { rank: "36", name: "Joseph Lim", company: "QNET" },
  { rank: "37", name: "Eric Worre", company: "Self Development Coach" },
  { rank: "38", name: "John Haremza", company: "MyDailyChoice" },
  { rank: "39", name: "Darren & Mike", company: "Self Development Coach" },
  { rank: "40", name: "Alejandra", company: "Self Development Coach" },
  { rank: "41", name: "Mark & Tammy Smith", company: "ACN" },
  { rank: "42", name: "Thomas Kralow", company: "iMarketsLive" },
  { rank: "43", name: "Takahashi Kenji", company: "Unity Global" },
  { rank: "44", name: "Tammy & Doug Nelson", company: "Herbalife" },
  { rank: "45", name: "Peter Montoya", company: "Social Entrepreneur" },
  { rank: "46", name: "Eddie & Coral Neufeld", company: "MyDailyChoice" },
  { rank: "47", name: "Andre Vaughn", company: "Organo Gold" },
  { rank: "48", name: "Margaret & Graham Reilly", company: "Isagenix" },
  { rank: "49", name: "Dr. Rakhi Singh", company: "Modicare" },
  { rank: "50", name: "Jimmy & Charis Smith", company: "ACN" },
  { rank: "51", name: "John & Shannon Milan", company: "ACN" },
  { rank: "52", name: "Kristy Smith", company: "Self Development Coach" },
  { rank: "53", name: "Paco & Rosa Sanchez", company: "Herbalife" },
  { rank: "54", name: "Monique Lorist", company: "IM Academy" },
  { rank: "55", name: "Richard & Shannon McKinney", company: "MyDailyChoice" },
  { rank: "56", name: "Leslie Brown", company: "DoTerra" },
  { rank: "57", name: "Noel & Jennifer Morrison", company: "WorldVentures" },
  { rank: "58", name: "Natasha & Cedrick Harris", company: "MyDailyChoice" },
  { rank: "59", name: "Nancy Nguyen", company: "Self Development Coach" },
  { rank: "60", name: "Micheal Carter", company: "Amway" },
  { rank: "61", name: "Sarah Matthews", company: "Oriflame" },
  { rank: "62", name: "Dean & Kelly Bachman", company: "Ambit Energy" },
  { rank: "63", name: "Rachelle & Dale Cooper", company: "Herbalife" },
  { rank: "64", name: "Emma & Ryan Richards", company: "Total Life Changes" },
  { rank: "65", name: "David Allen", company: "Modicare" },
  { rank: "66", name: "Andres Morales", company: "Isagenix" },
  { rank: "67", name: "Barbara Williams", company: "Organo Gold" },
  { rank: "68", name: "Chris Pearson", company: "MyDailyChoice" },
  { rank: "69", name: "Amanda Lawson", company: "IM Academy" },
  { rank: "70", name: "Gina & Lee George", company: "ACN" },
  { rank: "71", name: "Nick Carr", company: "Melaleuca" },
  { rank: "72", name: "Heidi & Tom Breiner", company: "DoTerra" },
  { rank: "73", name: "Alex Navarro", company: "WorldVentures" },
  { rank: "74", name: "Aldo & Jenna Howard", company: "PM International" },
  { rank: "75", name: "Mary Grays", company: "Amway" },
  { rank: "76", name: "Benjamin & Sophie Smith", company: "Organo Gold" },
  { rank: "77", name: "Zane Browning", company: "Truvy" },
  { rank: "78", name: "Isabel Gonzales", company: "Seacret Direct" },
  { rank: "79", name: "Mason Charles", company: "Modicare" },
  { rank: "80", name: "Simon Wright", company: "Herbalife" },
  { rank: "81", name: "Megan Dean", company: "ByDzyne" },
  { rank: "82", name: "Catherine & James Morton", company: "QNET" },
  { rank: "83", name: "Albert Jones", company: "Zinzino" },
  { rank: "84", name: "Ron & Melina Owen", company: "PM International" },
  { rank: "85", name: "Glenn Adams", company: "Amway" },
  { rank: "86", name: "Lily Zhang", company: "Organo Gold" },
  { rank: "87", name: "Jackie & Stephen Roberts", company: "Herbalife" },
  { rank: "88", name: "Francis Hall", company: "MyDailyChoice" },
  { rank: "89", name: "Brian Walker", company: "Modicare" },
  { rank: "90", name: "Molly Clark", company: "WorldVentures" },
  { rank: "91", name: "Logan Murray", company: "ByDzyne" },
  { rank: "92", name: "Sofia & Kevin Gomez", company: "ACN" },
  { rank: "93", name: "Jason Brown", company: "IM Academy" },
  { rank: "94", name: "Blake Robbins", company: "Self Development Coach" },
  { rank: "95", name: "Zack Marshall", company: "Total Life Changes" },
  { rank: "96", name: "Jamal Hayes", company: "Organo Gold" },
  { rank: "97", name: "Carmen Sandoval", company: "WorldVentures" },
  { rank: "98", name: "Lindsey White", company: "Zinzino" },
  { rank: "99", name: "Oscar White", company: "iMarketsLive" },
  { rank: "100", name: "Reina & Miguel Vargas", company: "Total Life Changes" }
];

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "Who are the top MLM earners in the world for 2025?",
    answer:
      "As the reports say, it is estimated that Igor Alberts & Andreea Cimbala from Success Factory earn more. Also, the networth of the MLM leaders including rin & Jirawan Vichaidith from Nu Skin, Ivan and Monica Tapia from IM Mastery Academy, Jenna Zwagil from MyDailyChoice, and Stormy Wellington from Total Life Changes has considerably increased in 2025."
  },
  {
    question: "How do MLM earners achieve such high levels of success?",
    answer:
      "The path of success may not be easy. MLM leaders are focused and determined and they achieved success through continuous dedication, effective leadership, strategic networking, and excellent communication skills."
  },
  {
    question: "What are the common products promoted in MLM?",
    answer:
      "MLM companiescommonly promote a variety of products, including skincare, beauty, cosmetics, nutritional supplements, wellness products, and more recently, financial education and cryptocurrency through platforms like IM Mastery Academy and Success Factory."
  },
  {
    question: "Can anyone become a top earner in MLM?",
    answer:
      "MLM is a great opportunity to gain significant earnings. It also involves a substantial commitment and ability to build and maintain a large network."
  },
  {
    question: "What are the risks associated with MLM?",
    answer:
      "MLM can involve risks such as the potential for financial loss, the need for a continuous recruitment of new members, market saturation, and the challenge of maintaining a large and active network. It’s important for potential MLM participants to thoroughly research the company and its products, understand the compensation structure, and be realistic about the effort required to succeed."
  }
];

const AUTHOR = {
  name: "Freddy George",
  role: "Marketing Head",
  bio: "Industry specialist with extensive experience in the MLM sector. Versatile in developing innovative marketing strategies, with a strong passion for artificial intelligence, content marketing, and emerging MLM trends."
};

const HERO_HIGHLIGHTS = [
  {
    title: "Data-backed recognition",
    description: "We have analyzed the top earners in network marketing and researched how they built their castles of success and fame in MLM.",
    icon: Crown
  },
  {
    title: "Dedication & leadership",
    description: "Success is attained through continuous dedication and determination. All the leaders in MLM have struggled on this journey and developed the skills of leadership and communication.",
    icon: Trophy
  },
  {
    title: "Independent entrepreneurship",
    description: "Most of them are independent entrepreneurs who established themselves as leaders.",
    icon: Users
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "List of Top 100 MLM Earners in the World";
  const description =
    "Discover the 2025 leaderboard of MLM earners, explore their monthly income, company affiliations, and gain insights from the strategies powering global network marketing success.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/list-of-top-100-mlm-earners-in-the-world", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type TopEarnersPageProps = {
  params: { lang: SupportedLocale };
};

export default function TopEarnersPage({ params }: TopEarnersPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-50 via-yellow-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.22),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.24),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.32),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.34),transparent_60%)]" />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700 dark:border-amber-500/50 dark:bg-slate-900/60 dark:text-amber-200">
              <Medal className="h-4 w-4" aria-hidden />
              2025 global leaderboard
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              List of top 100 MLM earners in the world
            </h1>
            <div className="space-y-4 text-lg leading-8 text-slate-700 dark:text-slate-200">
              {HERO_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild className="bg-amber-600 text-white hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400">
                <Link href={demoHref}>
                  Explore MLM growth playbooks
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Link href={contactHref}>
                  Partner with strategists
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-amber-200/70 bg-white/80 p-8 shadow-xl shadow-amber-100 backdrop-blur dark:border-amber-500/40 dark:bg-slate-900/70 dark:shadow-none">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-200">Data highlights</span>
              <BarChart4 className="h-5 w-5 text-amber-500 dark:text-amber-300" aria-hidden />
            </div>
            <div className="space-y-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {HERO_HIGHLIGHTS.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-2xl border border-amber-100/70 bg-white/70 p-4 dark:border-amber-500/30 dark:bg-slate-900/50">
                  <item.icon className="mt-1 h-6 w-6 shrink-0 text-amber-500 dark:text-amber-300" aria-hidden />
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
        <div className="mx-auto max-w-4xl space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg shadow-amber-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          {SUCCESS_STORY_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph} className="text-base leading-7 text-slate-700 dark:text-slate-300">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 lg:grid-cols-3">
          {TOP_LEADERS.map((leader) => (
            <article
              key={leader.rankTitle}
              className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-amber-100 transition hover:-translate-y-1 hover:shadow-amber-200 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{leader.rankTitle}</h2>
                <LineChart className="h-5 w-5 text-amber-500 dark:text-amber-300" aria-hidden />
              </div>
              <p className="text-sm font-medium uppercase tracking-wide text-amber-700 dark:text-amber-200">{leader.earnings}</p>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-300">{leader.company}</p>
              <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{leader.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-4xl space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg shadow-amber-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          {POST_LEADER_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph} className="text-base leading-7 text-slate-700 dark:text-slate-300">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="container space-y-8">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-amber-100/80 p-3 text-amber-700 dark:bg-amber-500/20 dark:text-amber-200">
            <Award className="h-6 w-6" aria-hidden />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Top 100 MLM Earners in the World (2025)</h2>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-lg shadow-amber-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <div className="max-h-[600px] overflow-auto">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm dark:divide-slate-700">
              <thead className="sticky top-0 bg-amber-600 text-white dark:bg-amber-500">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold uppercase tracking-wide">
                    Rank
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold uppercase tracking-wide">
                    Name
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold uppercase tracking-wide">
                    Company
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {TOP_EARNERS_2025.map((row) => (
                  <tr key={row.rank} className="bg-white/70 dark:bg-slate-900/60">
                    <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">{row.rank}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{row.name}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{row.company}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-amber-100/80 p-3 text-amber-700 dark:bg-amber-500/20 dark:text-amber-200">
            <ChartLineUp className="h-6 w-6" aria-hidden />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">FAQ</h2>
        </div>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="group rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-amber-100 open:shadow-md open:shadow-amber-200 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none"
            >
              <summary className="text-lg font-semibold text-slate-900 outline-none transition focus-visible:ring-2 focus-visible:ring-amber-400 dark:text-white">
                {item.question}
              </summary>
              <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/90 p-12 text-center shadow-xl shadow-amber-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-200">{CTA_LINES[0]}</p>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{CTA_LINES[1]}</h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-700 dark:text-slate-300">{CTA_LINES[2]}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-amber-600 text-white hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400">
              <Link href={pricingHref}>
                Buy now
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              <Link href={contactHref}>
                Get Pricing
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg shadow-amber-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="rounded-full bg-amber-100/80 p-4 text-amber-700 dark:bg-amber-500/20 dark:text-amber-200">
              <IdentificationBadge className="h-10 w-10" aria-hidden />
            </div>
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-200">About the author</p>
            <p className="text-2xl font-semibold text-slate-900 dark:text-white">{AUTHOR.name}</p>
            <p className="text-sm text-slate-500 dark:text-slate-300">{AUTHOR.role}</p>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{AUTHOR.bio}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
