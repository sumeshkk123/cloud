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
  Crown,
  GraduationCap,
  MessageCircle,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  Users
} from "lucide-react";
import { Handshake, Megaphone } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type Highlight = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

type Factor = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

const INTRO_PARAGRAPHS: string[] = [
  "In the dynamic arena of multi-level marketing, you are not just a spectator, you are the creator. Imagine yourself as a storyteller, who weaves connections through trust and clear communication. Crafting a network within an MLM organization is like building a puzzle. It needs careful observation, planning, and dedication. If you want to create a harmonious network, you have to write your narrative of success. In this guide, we will explore strategies to recruit enthusiastic distributors to your direct selling network.",
  "MLM recruitment is an arduous task. It is like planting seeds in fertile land and nourishing them to bloom into a beautiful garden. You have to identify like-minded individuals who share the same passions and interests as you and convert them into powerful and trustworthy customers. After fostering a relationship with them, offer mentorship and create a supportive environment",
  "The process of MLM recruitment involves strategies, communication, and authenticity. Here, you own the stage. You need to catch the attention of your audience in the most appealing way. Introduce a world to your prospects where their dreams can take flight. Share success stories and testimonials, the benefits of the product, financial stability, and other advantages that are elements of this intricate dance.",
  "Understanding your recruits’ needs and motives is key to successful MLM recruiting. You’re not only getting people on board but also laying the groundwork for trust by paying attention to their problems and actively listening to them. By mastering the art of MLM recruiting, you can build a dynamic network that isn’t only about business but also about development, empowerment, and shared accomplishments in this always-changing environment."
];

const FACTOR_INTRO =
  "If you are a network marketer looking for more customers, you need to consider several factors before recruiting them to your MLM network.";

const FACTOR_BULLETS: string[] = [
  "Target audience Choose a community of people who might be interested in your product and business model. Identify them and understand their needs, preferences, interests, and dreams. They are your target demographic for recruitment.",
  "Product or service A strong product or service is the pillar of your MLM organization. Make sure your product aligns with market trends, meets client requirements, and offers actual value.",
  "Company reputation Research the company’s reputation and investigate its history, track record, and success stories. A reputed and ethical company enhances your credibility and trustworthiness as a recruiter.",
  "Compensation plan Compensation plans are detailed packages that explain how distributors at various levels are rewarded for their efforts. A fair and transparent compensation plan is crucial for attracting and retaining recruits.",
  "Training and support MLM Companies need to provide training and support to all members. Monitor this training system as it helps distributors succeed and fosters loyalty.",
  "Leadership Strong Leadership within your upline is vital. Experienced mentors can guide and motivate you and your recruits, ensuring a smooth journey.",
  "Communication skills Network marketers should possess effective communication skills to engage with target audiences. It is important for explaining opportunities, product details, benefits, and advantages, answering questions, and addressing concerns."
];

const RECRUITMENT_FACTORS: Factor[] = [
  {
    title: "Target audience",
    description:
      "Choose a community of people who might be interested in your product and business model. Identify them and understand their needs, preferences, interests, and dreams. They are your target demographic for recruitment.",
    icon: Target
  },
  {
    title: "Product or service",
    description:
      "A strong product or service is the pillar of your MLM organization. Make sure your product aligns with market trends, meets client requirements, and offers actual value.",
    icon: Megaphone
  },
  {
    title: "Company reputation",
    description:
      "Research the company’s reputation and investigate its history, track record, and success stories. A reputed and ethical company enhances your credibility and trustworthiness as a recruiter.",
    icon: ShieldCheck
  },
  {
    title: "Compensation plan",
    description:
      "Compensation plans are detailed packages that explain how distributors at various levels are rewarded for their efforts. A fair and transparent compensation plan is crucial for attracting and retaining recruits.",
    icon: Network
  },
  {
    title: "Training and support",
    description:
      "MLM Companies need to provide training and support to all members. Monitor this training system as it helps distributors succeed and fosters loyalty.",
    icon: GraduationCap
  },
  {
    title: "Leadership",
    description:
      "Strong Leadership within your upline is vital. Experienced mentors can guide and motivate you and your recruits, ensuring a smooth journey.",
    icon: Crown
  },
  {
    title: "Communication skills",
    description:
      "Network marketers should possess effective communication skills to engage with target audiences. It is important for explaining opportunities, product details, benefits, and advantages, answering questions, and addressing concerns.",
    icon: MessageCircle
  }
];

const TACTIC_PARAGRAPHS: string[] = [
  "Education is the key step to successful MLM recruitment. Prospective distributors should develop a clear understanding of the company’s products, compensation packages, and overall business model. Share your knowledge with the target audience and encourage them to make informed decisions.",
  "Sharing personal stories and successes plays a crucial role in the recruitment process. This can resonate deeply with potential recruits, allowing them to dream big and follow your path to success.",
  "Provide support to recruits at every stage. Offer continuous guidance, training, and mentorship to help them navigate challenges and attain their MLM goals."
];

const TACTIC_BULLETS: string[] = ["Education and Empowerment", "Leverage Personal Experiences", "Provide Ongoing Support"];

const MENTORSHIP_PARAGRAPHS: string[] = [
  "In the realm of network marketing, leadership is more than a title. It is the ability to inspire, empower, and guide people to the path of victory. Success in MLM is a collective effort and MLM leaders act as helping hands during times of uncertainty. They share valuable insights, strategies, and personal experiences that contribute to the growth of an entire community. Leaders are also responsible for celebrating the achievements of their potential recruits.",
  "Mentorship is a cornerstone of MLM recruitment. MLM mentors are leaders who motivate and nurture the potential of new recruits. The relationship between a network of marketing entrepreneurs and recruits is built upon trust, passion, support, respect, and a genuine desire to help each other. They should cultivate a platform where there is a chance for collaboration and mutual growth."
];

const ETHICS_PARAGRAPHS: string[] = [
  "Like any other industry, ethics are pivotal in MLM recruitment. Be careful about misleading MLM strategies and operate with honesty, transparency, and integrity. Before recruiting individuals, set realistic expectations and make them aware of the challenges and obstacles along the way. Convincing people about unrealistic income expectations will lead to ethical issues and harm your reputation.",
  "Sustainable practices go beyond the recruitment process. Create a positive and supportive environment where all distributors can work together in harmony. Educate them about their duties and responsibilities and keep them engaged and motivated. For attaining long-term success in network marketing, craft a cooperative work culture and provide support consistently."
];

const TECHNOLOGY_PARAGRAPHS: string[] = [
  "The advancement of technology has reshaped the process of MLM recruitment altogether. Technologies and social media have replaced traditional methods such as physical meetings and face-to-face interactions. Social media platforms, webinars, and virtual events offer avenues to connect with a global audience. By breaking down geographical boundaries, network marketers can reach out to a pool of potential customers and enhance the chances of recruitment.",
  "Popular online platforms such as Instagram, Twitter, LinkedIn, and youtube are powerful tools that help marketers share resources, training materials, and success stories. Technology enables real-time, vibrant communication and engagement and also fosters a sense of community."
];

const CHALLENGE_PARAGRAPHS: string[] = [
  "Network Marketing is a dynamic process that requires a broad network of independent distributors to carry out its operations effectively and efficiently. The path to recruiting MLM distributors is not an easy one. Overcoming the challenges requires diligence, education, and a commitment to ethical practices. Develop a long-term vision to achieve success in network marketing. It is not a quick process but takes time to connect with target audiences, build long-lasting relationships, and foster loyalty.",
  "Recruiting individuals to your MLM network is all about opening the door to new possibilities for them. It is not just about signing up individuals but also shaping their future."
];

const CONCLUSION_PARAGRAPHS: string[] = [
  "In this world of entrepreneurship, choosing the right partners is very important. Network marketing allows individuals to become independent entrepreneurs and own a business of their own. By mastering the art of MLM recruitment, you can increase your chances of success and establish your network marketing organization beyond limits.",
  "A large network of distributors is the strength of an MLM organization. By building a thriving network, you can be a catalyst for change and empowerment in the lives of countless people."
];

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Lead with empathy",
    description: "Recruitment thrives when you understand motivations, listen actively, and respond with tailored support.",
    icon: Handshake
  },
  {
    title: "Build scalable systems",
    description: "Training, compensation, and communication plans should be transparent and replicable for every recruit.",
    icon: Network
  },
  {
    title: "Celebrate progress together",
    description: "Shared wins reinforce a culture of trust, mentorship, and long-term commitment.",
    icon: Users
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
  const title = "How to Recruit MLM Distributors";
  const description =
    "Master MLM recruitment with strategies covering audience targeting, product positioning, mentorship, ethics, technology, and long-term relationship building.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/how-to-recruit-mlm-distributors", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type RecruitDistributorsPageProps = {
  params: { lang: SupportedLocale };
};

export default function RecruitDistributorsPage({ params }: RecruitDistributorsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(76,29,149,0.35),transparent_55%),radial-gradient(circle_at_bottom,rgba(22,163,74,0.25),transparent_60%)]" />
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
          <div className="space-y-8 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide">
              <Sparkles className="h-4 w-4" aria-hidden />
              Recruitment mastery
            </span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">How to recruit MLM distributors</h1>
            <p className="text-lg text-slate-200">
              Craft authentic relationships, align ambitions, and build a supportive ecosystem that empowers every distributor to thrive.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild className="bg-emerald-500 text-slate-900 hover:bg-emerald-400">
                <Link href={demoHref}>
                  Explore recruitment journeys
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-emerald-300/60 text-white hover:bg-white/10">
                <Link href={contactHref}>
                  Design enablement programs
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-5 rounded-3xl border border-emerald-400/40 bg-emerald-500/10 p-8 backdrop-blur text-emerald-100">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-wide">Network essentials</span>
              <Users className="h-5 w-5 text-emerald-200" aria-hidden />
            </div>
            <p className="text-sm text-emerald-100/80">
              Successful MLM organizations blend empathetic leadership, structured training, and transparent incentives to keep teams inspired.
            </p>
            <div className="space-y-4">
              {HIGHLIGHTS.map((highlight) => (
                <div key={highlight.title} className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-5">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-emerald-200">
                    <highlight.icon className="h-5 w-5" aria-hidden />
                    {highlight.title}
                  </div>
                  <p className="mt-3 text-sm text-emerald-100/80">{highlight.description}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-emerald-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
            {INTRO_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
          How to recruit in network marketing? What are the factors that need to be considered?
        </h2>
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50/80 p-8 text-slate-900 shadow-sm dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-100">
          <p>{FACTOR_INTRO}</p>
          <ul className="mt-4 space-y-2 text-sm leading-6">
            {FACTOR_BULLETS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {RECRUITMENT_FACTORS.map((factor) => (
            <article
              key={factor.title}
              className="space-y-4 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-lg shadow-emerald-100 transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-2xl bg-emerald-100/80 p-3 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200">
                  <factor.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{factor.title}</h3>
              </div>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{factor.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-8">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-emerald-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">MLM Recruiting Tactics</h3>
          <div className="mt-4 space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
            {TACTIC_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-6 space-y-2 text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-200">
            {TACTIC_BULLETS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-emerald-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">The Role of Mentorship and Leadership</h3>
          <div className="mt-4 space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
            {MENTORSHIP_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-emerald-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">Ethical Considerations and sustainable practices</h3>
          <div className="mt-4 space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
            {ETHICS_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-emerald-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">The Role of Technology in MLM Recruitment</h3>
          <div className="mt-4 space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
            {TECHNOLOGY_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-emerald-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">Overcoming challenges and empowering a network of potential</h3>
          <div className="mt-4 space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
            {CHALLENGE_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-emerald-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">Conclusion</h3>
          <div className="mt-4 space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
            {CONCLUSION_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-10 text-center shadow-lg shadow-emerald-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-300">About the author</p>
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
                Plan your recruitment cadence
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild className="bg-emerald-500 text-slate-900 hover:bg-emerald-400">
              <Link href={contactHref}>
                Partner with enrollment strategists
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
