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
  Handshake,
  HeartHandshake,
  Lightbulb,
  Sparkles,
  Target,
  TrendingUp,
  Users
} from "lucide-react";
import { ChatsCircle, StarFour, YinYang } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type HeroStat = {
  label: string;
  value: string;
};

type InsightCard = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

type EnablerCard = {
  title: string;
  intro: string;
  steps: string[];
};

type SupportPillar = {
  title: string;
  description: string;
};

type LeaderProfile = {
  name: string;
  subtitle: string;
  narrative: string;
  highlights: string[];
  icon: ComponentType<{ className?: string }>;
};

const INTRO_PARAGRAPH =
  "Women across the world continue to embrace multi-level marketing as a flexible and credible route to entrepreneurship. The profession rewards relationship-led leadership, community building, and inclusive coaching—competencies women are uniquely positioned to deliver at scale.";

const CONTEXT_PARAGRAPH =
  "This playbook curates strategies, enablement ideas, and real-world examples that help women-led networks grow with confidence. Use it to shape equitable onboarding, celebrate top performers, and keep your distributors supported through every growth stage.";

const HERO_STATS: HeroStat[] = [
  {
    label: "Global direct sellers identify as women (WFDSA, 2023)",
    value: "74%"
  },
  {
    label: "Increase in female-owned MLM businesses post-2020",
    value: "2.6×"
  },
  {
    label: "Average retention lift when mentorship pods are women-led",
    value: "+18%"
  }
];

const INSIGHT_CARDS: InsightCard[] = [
  {
    title: "Relationship capital",
    description:
      "Women thrive in purpose-driven communities. Their approach to nurturing trust and continuity keeps customer advocacy strong throughout the genealogy tree.",
    icon: HeartHandshake
  },
  {
    title: "Empathetic coaching",
    description:
      "From onboarding to promotions, women leaders listen deeply, tailor guidance, and help teams stay aligned to ethics and compliance without slowing momentum.",
    icon: Users
  },
  {
    title: "Adaptive workstyles",
    description:
      "Hybrid schedules, remote-first selling, and academic commitments fit naturally with the flexibility MLM models offer—making entrepreneurship realistic for caregivers.",
    icon: YinYang
  },
  {
    title: "Storytelling that converts",
    description:
      "Authentic narratives about product benefits and personal transformation resonate with prospects, accelerating referral loops and repeat purchases.",
    icon: Sparkles
  }
];

const ENABLER_CARDS: EnablerCard[] = [
  {
    title: "Launch pathways that flex",
    intro:
      "Give every prospective leader a personalised runway so they can build a business around family, careers, or studies without missing milestones.",
    steps: [
      "Offer modular onboarding that mixes self-paced lessons with expert office hours.",
      "Bundle business launch kits with social content calendars and compliance-ready copy.",
      "Provide micro-learning nudges inside the back office to keep momentum high."
    ]
  },
  {
    title: "Champion supportive communities",
    intro:
      "Women often remain in MLM because of the relationships they cultivate. Create environments where collaboration outperforms competition.",
    steps: [
      "Spin up affinity groups—new mothers, students, wellness advocates—to share proven playbooks.",
      "Rotate peer-to-peer masterminds so rising leaders can shadow top performers.",
      "Use sentiment tracking to flag burnout risk early and trigger proactive coaching."
    ]
  },
  {
    title: "Celebrate measurable impact",
    intro:
      "Recognition fuels confidence. Transparent scorecards help women track growth and communicate success to their downlines with pride.",
    steps: [
      "Highlight community metrics such as customer retention, mentorship hours, and event attendance.",
      "Layer qualitative feedback into leaderboards so empathy and ethics receive equal spotlight.",
      "Bundle milestone celebrations with reinvestment advice—events, certifications, or new markets."
    ]
  }
];

const SUPPORT_PILLARS: SupportPillar[] = [
  {
    title: "Mindset & resilience",
    description:
      "Coaching circles, wellness check-ins, and mental fitness resources help founders navigate rejection while keeping purpose front and centre."
  },
  {
    title: "Enablement infrastructure",
    description:
      "Automation, CRM workflows, and multilingual content libraries reduce admin effort so women can prioritise storytelling and coaching."
  },
  {
    title: "Market intelligence",
    description:
      "Live dashboards on product demand, regional compliance, and incentive performance empower timely pivots without overwhelming the team."
  }
];

const LEADER_PROFILES: LeaderProfile[] = [
  {
    name: "Donna Johnson",
    subtitle: "Author & legacy mentor",
    narrative:
      "A pioneer who transformed mentorship into a duplicable system. Her mantra—“No hype, the truth is enough”—keeps her network grounded and goal-focused.",
    highlights: [
      "Guided thousands of distributors to create sustainable incomes.",
      "Built cross-border teams centred on transparency and wellbeing."
    ],
    icon: Target
  },
  {
    name: "Hayley Hobson",
    subtitle: "Momentum architect",
    narrative:
      "From presidential diamond to double blue diamond in under three years, Hayley proved that disciplined scheduling and digital-first marketing unlock rapid scale.",
    highlights: [
      "Introduced replicable time-blocking frameworks for new mothers.",
      "Combines wellness education with product storytelling to boost loyalty."
    ],
    icon: TrendingUp
  },
  {
    name: "Lisa Grossman",
    subtitle: "Global network strategist",
    narrative:
      "Lisa leads an organisation spanning 150,000 members. Her playbooks focus on strategic listening, data-led coaching, and inclusive leadership models.",
    highlights: [
      "Scaled a family business into a modern global enterprise.",
      "Champions women’s voices in boardrooms and compensation design."
    ],
    icon: Lightbulb
  }
];

const AUTHOR = {
  name: "Edward",
  role: "Research Analyst",
  bio: "Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate about utilizing technology to drive growth and optimize business processes. Adept at analyzing market dynamics, delivering actionable insights, and staying ahead of industry developments."
};

const CONCLUSION_PARAGRAPH =
  "Women are redefining the future of network marketing. When businesses amplify empathy, collaboration, and smart automation, they create ecosystems where women-led teams flourish and build generational wealth.";

const CTA_PARAGRAPH =
  "Partner with Cloud MLM Software to design women-centric growth paths, automate back-office work, and mobilise the mentorship engines that your organisation deserves.";

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM for Women: Empowerment and Entrepreneurship Opportunities";
  const description =
    "Discover women-led MLM strategies—from flexible launch playbooks and community building to leader spotlights that prove how empathy and performance scale together.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath(
        "/blog/mlm-for-women-empowerment-and-entrepreneurship-opportunities",
        locale
      )
    },
    openGraph: {
      title,
      description
    }
  };
}

type WomenEmpowermentPageProps = {
  params: { lang: SupportedLocale };
};

export default function WomenEmpowermentPage({ params }: WomenEmpowermentPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const consultingHref = buildLocalizedPath("/mlm-consulting", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-rose-100/60 bg-rose-50/40 py-20 shadow-2xl dark:border-rose-500/30 dark:bg-slate-900/40">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-rose-100 via-white to-sky-100 opacity-80 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute -top-40 -right-20 h-80 w-80 rounded-full bg-rose-200/50 blur-3xl dark:bg-rose-500/20" aria-hidden />
        <div className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-500/20" aria-hidden />
        <div className="container relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-rose-700 dark:border-rose-500/40 dark:bg-slate-900/60 dark:text-rose-200">
              <Sparkles className="h-4 w-4" aria-hidden />
              Women-first growth playbook
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              MLM for women: empowerment and entrepreneurship opportunities
            </h1>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">{INTRO_PARAGRAPH}</p>
            <p className="text-base leading-7 text-slate-600 dark:text-slate-300">{CONTEXT_PARAGRAPH}</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/70 bg-white/80 p-4 text-center shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-900/60"
                >
                  <div className="text-3xl font-semibold text-rose-600 dark:text-rose-300">{stat.value}</div>
                  <p className="mt-2 text-xs font-medium leading-5 text-slate-600 dark:text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="bg-rose-600 text-white hover:bg-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400"
              >
                <Link href={demoHref}>
                  Explore tailored demos
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Link href={contactHref}>
                  Talk to our strategists
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/60 bg-white/80 p-8 shadow-lg backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <ChatsCircle className="h-6 w-6 text-rose-600 dark:text-rose-300" aria-hidden />
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">What we’re hearing</p>
              </div>
              <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
                “Our top women leaders want digital-first tools that respect their time, protect their brand voice, and keep momentum even when
                life gets unpredictable.”
              </p>
            </div>
            <div className="rounded-2xl border border-rose-100 bg-rose-50/80 p-6 dark:border-rose-500/20 dark:bg-rose-500/10">
              <p className="text-sm font-semibold uppercase tracking-wide text-rose-700 dark:text-rose-200">Next steps</p>
              <p className="mt-3 text-sm leading-6 text-rose-900 dark:text-rose-100">
                Pair human coaching with AI insights so every distributor sees actionable guidance the moment they log in.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Why women thrive in modern MLM ecosystems</h2>
          <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
            Network marketing rewards the skills women deploy every day—listening, problem solving, and rallying communities. When paired with the
            right technology stack, those strengths become a sustainable competitive advantage.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {INSIGHT_CARDS.map((card) => (
            <div
              key={card.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60"
            >
              <card.icon className="h-8 w-8 text-rose-600 transition group-hover:scale-110 dark:text-rose-300" aria-hidden />
              <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">{card.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-rose-50 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute inset-y-12 right-1/4 hidden h-96 w-96 rounded-full bg-rose-200/50 blur-3xl lg:block dark:bg-rose-500/20" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-700 dark:border-rose-500/30 dark:bg-slate-900/60 dark:text-rose-200">
              <Handshake className="h-4 w-4" aria-hidden />
              Encourage entrepreneurship
            </span>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Blueprints for women-led launches</h2>
            <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
              Women gravitate towards MLM because it lets them chart their own schedule while creating measurable impact. Invest in experience
              design that respects that autonomy and equips them to lead from day one.
            </p>
            <div className="space-y-8">
              {ENABLER_CARDS.map((card, index) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-900/60"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-600/10 text-sm font-semibold text-rose-700 dark:bg-rose-500/20 dark:text-rose-200">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{card.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{card.intro}</p>
                      <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {card.steps.map((step) => (
                          <li key={step} className="flex items-start gap-2">
                            <StarFour className="mt-1 h-4 w-4 flex-shrink-0 text-rose-500 dark:text-rose-300" aria-hidden />
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex h-full flex-col justify-between rounded-3xl border border-rose-100 bg-rose-50/80 p-10 shadow-xl dark:border-rose-500/20 dark:bg-rose-500/10">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-rose-900 dark:text-rose-100">Support stack women teams love</h3>
              <p className="text-sm leading-6 text-rose-900/80 dark:text-rose-100/80">
                Translate everyday wins into repeatable systems. Combine people operations with intelligent automation to keep women leaders focused
                on high-trust conversations.
              </p>
            </div>
            <div className="space-y-6">
              {SUPPORT_PILLARS.map((pillar) => (
                <div key={pillar.title} className="rounded-2xl border border-white/60 bg-white/80 p-5 backdrop-blur dark:border-white/10 dark:bg-slate-900/40">
                  <h4 className="text-base font-semibold text-rose-900 dark:text-rose-100">{pillar.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-rose-900/80 dark:text-rose-100/80">{pillar.description}</p>
                </div>
              ))}
            </div>
            <Button
              asChild
              className="mt-8 bg-white text-rose-700 hover:bg-rose-100 dark:bg-rose-400 dark:text-slate-900 dark:hover:bg-rose-300"
            >
              <Link href={consultingHref}>
                Book a women-led strategy session
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Trailblazers lighting the way</h2>
          <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
            Real success stories prove what’s possible when women steer vision, culture, and execution. Use their playbooks to inspire your next
            leadership cohort.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {LEADER_PROFILES.map((leader) => (
            <div
              key={leader.name}
              className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60"
            >
              <leader.icon className="h-8 w-8 text-rose-600 dark:text-rose-300" aria-hidden />
              <h3 className="mt-6 text-2xl font-semibold text-slate-900 dark:text-white">{leader.name}</h3>
              <p className="text-sm font-medium uppercase tracking-wide text-rose-600 dark:text-rose-300">{leader.subtitle}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{leader.narrative}</p>
              <ul className="mt-6 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {leader.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <Sparkles className="mt-1 h-4 w-4 flex-shrink-0 text-rose-500 dark:text-rose-300" aria-hidden />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)]">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Empower, mentor, and scale with confidence</h2>
          <p className="text-base leading-7 text-slate-600 dark:text-slate-300">{CONCLUSION_PARAGRAPH}</p>
          <p className="text-base leading-7 text-slate-600 dark:text-slate-300">{CTA_PARAGRAPH}</p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="bg-rose-600 text-white hover:bg-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400"
            >
              <Link href={demoHref}>
                Schedule a tailored walkthrough
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              <Link href={contactHref}>
                Share your growth goals
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
        <div className="space-y-6 rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
          <div className="flex items-center gap-3">
            <Users className="h-6 w-6 text-rose-600 dark:text-rose-300" aria-hidden />
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Author spotlight</p>
              <p className="text-base font-semibold text-slate-900 dark:text-white">{AUTHOR.name}</p>
            </div>
          </div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{AUTHOR.role}</p>
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{AUTHOR.bio}</p>
          <div className="rounded-2xl border border-white/60 bg-white/70 p-6 dark:border-white/10 dark:bg-slate-900/60">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Need a fresh perspective?</p>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Our consultants help you translate insights into compensation design, product packaging, and field enablement programs that keep
              women-led teams inspired.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
